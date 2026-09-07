import os
import re
import json
import math
import hashlib
from datetime import datetime

_file_index = {}
_backlinks = {}     # target_url -> list of {title, url}
_graph_nodes = []   # list of {id, title, url, group}
_graph_links = []   # list of {source, target}
_page_registry = {} # url -> {title, summary, last_modified}

_WIKI_EMBED_RE = re.compile(r'!\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]')
_WIKI_LINK_RE = re.compile(r'(?<!\!)\[\[([^\]|#]+)(?:#([^\]|]*))?(?:\|([^\]]+))?\]\]')
_MD_LINK_RE = re.compile(r'(!?\[[^\]]*\]\()([^)]+)(\))')
_HIGHLIGHT_RE = re.compile(r'==([^=]+)==')

def _norm(s):
    s = s.strip().lower()
    s = s.replace('–', '-').replace('—', '-')
    s = re.sub(r'\s+', ' ', s)
    return s

def on_files(files, config):
    """ایندکس کردن تمامی فایل‌ها برای تطبیق سریع نام‌های ویکی‌لینک"""
    global _file_index, _backlinks, _graph_nodes, _graph_links, _page_registry
    _file_index = {}
    _backlinks = {}
    _graph_nodes = []
    _graph_links = []
    _page_registry = {}

    for f in files:
        base = os.path.basename(f.src_uri)
        root, _ = os.path.splitext(base)
        for cand in [base.lower(), root.lower(), _norm(base), _norm(root)]:
            if cand:
                _file_index.setdefault(cand, []).append(f)
    return files

def _resolve(name, current_file):
    raw = os.path.basename(name.strip())
    candidates = [
        raw.lower(),
        raw.lower() + '.md',
        _norm(raw),
        _norm(raw) + '.md',
    ]
    matches = None
    for cand in candidates:
        if cand in _file_index:
            matches = _file_index[cand]
            break
    if not matches:
        return None
    if len(matches) > 1:
        current_dir = os.path.dirname(current_file.src_uri)
        matches = sorted(
            matches,
            key=lambda f: len(os.path.commonprefix([current_dir, os.path.dirname(f.src_uri)])),
            reverse=True,
        )
    return matches[0]

def _fix_backslashes(raw):
    parts = raw.split(' ', 1)
    url = parts[0].replace('%5C', '/').replace('%5c', '/').replace('\\', '/')
    rest = f' {parts[1]}' if len(parts) > 1 else ''
    return url + rest

def _estimate_reading_time(text):
    clean_text = re.sub(r'<[^>]+>', ' ', text)
    clean_text = re.sub(r'[^\w\s]', ' ', clean_text)
    words = clean_text.split()
    word_count = len(words)
    minutes = max(1, math.ceil(word_count / 180))
    return minutes, word_count

def on_page_markdown(markdown, page, config, files):
    # ۱) محاسبه زمان تقریبی مطالعه و تعداد کلمات
    reading_mins, word_count = _estimate_reading_time(markdown)
    page.sarv_reading_mins = reading_mins
    page.sarv_word_count = word_count

    # ثبت صفحه در رجیستری
    page_id = page.file.src_uri.replace('\\', '/')
    page_title = page.title or os.path.splitext(os.path.basename(page.file.src_uri))[0]
    folder = os.path.dirname(page.file.src_uri).replace('\\', '/').strip('/')
    if not folder:
        folder = "عمومی"

    _page_registry[page.file.url] = {
        'id': page_id,
        'title': page_title,
        'url': page.file.url,
        'folder': folder,
        'summary': markdown[:180].replace('\n', ' ').strip() + '...'
    }

    if not any(node['id'] == page_id for node in _graph_nodes):
        _graph_nodes.append({
            'id': page_id,
            'title': page_title,
            'url': page.file.url,
            'folder': folder,
            'words': word_count
        })

    # ۲) حل امبد عکس‌های ابسیدین ![[image.png]] یا ![[image.png|300]]
    def _img_repl(m):
        name, size = m.group(1), m.group(2)
        target_f = _resolve(name, page.file)
        if target_f is None:
            return m.group(0)
        rel_url = target_f.url_relative_to(page.file)
        alt = os.path.splitext(os.path.basename(name))[0]
        if size and size.isdigit():
            return f'<img src="{rel_url}" alt="{alt}" width="{size}" class="sarv-embedded-img" />'
        return f'![{alt}]({rel_url})'

    markdown = _WIKI_EMBED_RE.sub(_img_repl, markdown)

    # ۳) حل ویکی‌لینک‌های متنی [[نوت]] یا [[نوت|عنوان]]
    def _link_repl(m):
        name, anchor, alias = m.group(1), m.group(2), m.group(3)
        target_f = _resolve(name, page.file)
        if target_f is None:
            label = alias or name
            return f'<span class="unresolved-wikilink" title="یادداشت هنوز ایجاد نشده است">{label}</span>'

        rel_url = target_f.url_relative_to(page.file)
        anchor_part = f'#{anchor}' if anchor else ''
        final_url = f'{rel_url}{anchor_part}'
        label = alias or name

        # ثبت برای بک‌لینک‌ها و گراف
        target_uri = target_f.src_uri.replace('\\', '/')
        target_url = target_f.url
        _backlinks.setdefault(target_url, []).append({
            'title': page_title,
            'url': page.file.url_relative_to(target_f)
        })
        _graph_links.append({
            'source': page_id,
            'target': target_uri,
            'type': 'wikilink'
        })

        return f'<a href="{final_url}" class="wikilink" data-wikilink="true" data-target-url="{target_url}">{label}</a>'

    markdown = _WIKI_LINK_RE.sub(_link_repl, markdown)

    # ۴) اصلاح بک‌اسلش‌های ویندوزی
    markdown = _MD_LINK_RE.sub(
        lambda m: m.group(1) + _fix_backslashes(m.group(2)) + m.group(3),
        markdown,
    )

    # ۵) هایلایت متن ابسیدین ==متن==
    markdown = _HIGHLIGHT_RE.sub(r'<mark class="sarv-highlight">\1</mark>', markdown)

    # ۶) تبدیل چک‌باکس‌های تسک ابسیدین به کامپوننت متحرک Sarv UI
    def _task_repl(m):
        checked = m.group(1).lower() == 'x'
        checked_class = "is-checked" if checked else ""
        svg_stroke = '<svg viewBox="0 0 24 24"><polyline class="cb-animate" points="20 6 9 17 4 12"></polyline></svg>' if checked else ''
        return f'<li class="task-list-item"><span class="sarv-checkbox {checked_class}">{svg_stroke}</span> '

    markdown = re.sub(r'^[ \t]*[-*]\s+\[([ xX])\]\s+', _task_repl, markdown, flags=re.MULTILINE)

    # ۷) تبدیل کال‌اوت‌های ابسیدین > [!note] یا > [!tip]- به ادمنیشن
    # برای جلوگیری از تداخل با سینتکس نقل‌قول معمولی
    def _callout_header_repl(m):
        ctype = m.group(1).lower()
        fold = m.group(2) # '-' or '+' or ''
        title = m.group(3).strip()
        if not title:
            fa_titles = {
                'note': 'یادداشت', 'tip': 'نکته', 'warning': 'هشدار',
                'danger': 'توجه مهم', 'info': 'اطلاعیه', 'example': 'نمونه',
                'question': 'پرسش', 'quote': 'نقل قول', 'theorem': 'قضیه'
            }
            title = fa_titles.get(ctype, ctype.capitalize())
        
        if fold == '-':
            return f'??? {ctype} "{title}"'
        elif fold == '+':
            return f'???+ {ctype} "{title}"'
        else:
            return f'!!! {ctype} "{title}"'

    markdown = re.sub(r'^>\s*\[!([a-zA-Z_-]+)\]([+-]?)(.*)$', _callout_header_repl, markdown, flags=re.MULTILINE)

    # ۸) استخراج کارت‌های منابع و لینک‌های کارت‌محور برای گراف دانش
    card_pattern = re.compile(r'<a\s+([^>]*?)>(.*?)</a>', re.DOTALL | re.IGNORECASE)
    for m in card_pattern.finditer(markdown):
        attrs = m.group(1)
        inner = m.group(2)
        
        # بررسی اینکه آیا کارت منبع یا لینک شاخص است
        if 'resource-card' not in attrs and 'resource-card-title' not in inner:
            continue
            
        href_m = re.search(r'href=["\']([^"\']+)["\']', attrs)
        if not href_m:
            continue
        href = href_m.group(1).strip()
        
        # استخراج عنوان کارت
        title_m = re.search(r'<span[^>]*class=["\'][^"\']*resource-card-title[^"\']*["\'][^>]*>(.*?)</span>', inner, re.DOTALL)
        if title_m:
            card_title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip()
            # پاک‌سازی نمادهای لاتک برای خوانایی بهتر در گراف
            card_title = card_title.replace('$', '').strip()
        else:
            clean_inner = re.sub(r'<[^>]+>', ' ', inner).strip()
            card_title = clean_inner.split('\n')[0].strip() or "منبع پیوست"
            
        badge_m = re.search(r'<span[^>]*class=["\'][^"\']*resource-badge[^"\']*["\'][^>]*>(.*?)</span>', inner, re.DOTALL)
        card_badge = re.sub(r'<[^>]+>', '', badge_m.group(1)).strip() if badge_m else ''

        if href.startswith(('http://', 'https://')):
            # لینک ماهواره‌ای خارج از سایت (گوگل درایو، تمرینات، آزمون‌ها و ...)
            res_hash = hashlib.md5(href.encode('utf-8')).hexdigest()[:8]
            res_id = f"ext:{res_hash}"
            
            # ثبت در نودهای گراف در صورت عدم وجود
            if not any(n['id'] == res_id for n in _graph_nodes):
                _graph_nodes.append({
                    'id': res_id,
                    'title': card_title,
                    'url': href,
                    'folder': folder,
                    'isResource': True,
                    'type': 'resource',
                    'badge': card_badge,
                    'radius': 4.5,
                    'words': 0
                })
            # اتصال صفحه جاری به منبع ماهواره‌ای
            _graph_links.append({
                'source': page_id,
                'target': res_id,
                'type': 'resource'
            })
        elif not href.startswith(('#', 'mailto:')):
            # لینک داخلی به فصول یا یادداشت‌های دیگر با استفاده از کارت
            target_name = os.path.basename(href.split('#')[0].rstrip('/'))
            if target_name:
                target_f = _resolve(target_name, page.file)
                if target_f:
                    target_uri = target_f.src_uri.replace('\\', '/')
                    _graph_links.append({
                        'source': page_id,
                        'target': target_uri,
                        'type': 'card'
                    })

    return markdown

def on_page_context(context, page, config, nav):
    """تزریق متادیتا و بک‌لینک‌ها به قالب صفحه"""
    current_url = page.file.url
    context['sarv_backlinks'] = _backlinks.get(current_url, [])
    context['sarv_reading_mins'] = getattr(page, 'sarv_reading_mins', 2)
    context['sarv_word_count'] = getattr(page, 'sarv_word_count', 300)
    return context

def on_post_build(config):
    """خروجی دادن فایل داده‌های گراف شبکه sarv-graph.json در دایرکتوری نهایی"""
    site_dir = config['site_dir']
    graph_path = os.path.join(site_dir, 'sarv-graph.json')
    try:
        # ۱) دسته‌بندی یادداشت‌ها بر اساس فولدر (به استثنای نودهای منابع خارجی)
        folder_groups = {}
        for node in _graph_nodes:
            if node.get('isResource'):
                continue
            f = node.get('folder', 'عمومی')
            if f and f != 'عمومی':
                folder_groups.setdefault(f, []).append(node['id'])

        # ۲) اتصال یادداشت‌های درون یک فولدر به یکدیگر و تعیین هاب فولدر
        folder_links = []
        hub_nodes = []
        for f, node_ids in folder_groups.items():
            if len(node_ids) >= 1:
                hub_id = None
                for nid in node_ids:
                    base = os.path.basename(nid).lower()
                    if 'index' in base or 'فهرست' in base or 'مطالب' in base:
                        hub_id = nid
                        break
                if not hub_id:
                    hub_id = node_ids[0]

                # علامت‌گذاری نود به عنوان Hub
                for node in _graph_nodes:
                    if node['id'] == hub_id:
                        node['isHub'] = True
                        node['radius'] = 7.5

                hub_nodes.append((hub_id, f))

                if len(node_ids) > 1:
                    for nid in node_ids:
                        if nid != hub_id:
                            folder_links.append({
                                'source': hub_id,
                                'target': nid,
                                'type': 'folder',
                                'folder': f
                            })
                    for i in range(len(node_ids) - 1):
                        if node_ids[i] != hub_id and node_ids[i+1] != hub_id:
                            folder_links.append({
                                'source': node_ids[i],
                                'target': node_ids[i+1],
                                'type': 'folder',
                                'folder': f
                            })

        # ۳) اتصال نودهای هاب به صفحه اصلی (خانه / index.md)
        home_node = next((n for n in _graph_nodes if n['id'] in ('index.md', 'index.html') or n.get('url') in ('', '/', 'index.html')), None)
        if home_node:
            home_node['isHome'] = True
            home_node['radius'] = 9.0
            for hub_id, f in hub_nodes:
                if hub_id != home_node['id']:
                    folder_links.append({
                        'source': home_node['id'],
                        'target': hub_id,
                        'type': 'hub',
                        'folder': f
                    })

        # ۴) ادغام لینک‌ها بدون تکرار یا لوپ
        all_links = _graph_links + folder_links
        clean_links = []
        seen = set()
        node_ids = set(n['id'] for n in _graph_nodes)

        for link in all_links:
            src = link['source']
            tgt = link['target']
            if src in node_ids and tgt in node_ids and src != tgt:
                pair = tuple(sorted([src, tgt]))
                if pair not in seen:
                    seen.add(pair)
                    clean_links.append(link)

        graph_payload = {
            'nodes': _graph_nodes,
            'links': clean_links,
            'pages': _page_registry
        }
        with open(graph_path, 'w', encoding='utf-8') as f:
            json.dump(graph_payload, f, ensure_ascii=False, indent=2)
    except Exception as e:
        print(f"[Sarv Theme] Error writing sarv-graph.json: {e}")
