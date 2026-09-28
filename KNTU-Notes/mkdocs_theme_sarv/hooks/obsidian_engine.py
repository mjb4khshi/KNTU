import os
import re
import json
import math
import hashlib
from datetime import datetime

_file_index = {}
_backlinks = {}     # target_url -> list of {title, url}
_graph_nodes = []   # list of {id, title, url, group, tags}
_graph_links = []   # list of {source, target}
_page_registry = {} # url -> {title, summary, last_modified, tags}
_tag_registry = {}  # tag -> list of {id, title, url, folder}

_WIKI_EMBED_RE = re.compile(r'!\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]*))?\]\]')
_WIKI_LINK_RE = re.compile(r'(?<!\!)\[\[([^\]|#]+)(?:#([^\]|]*))?(?:\|([^\]]+))?\]\]')
_MD_LINK_RE = re.compile(r'(!?\[[^\]]*\]\()([^)]+)(\))')
_TAG_RE = re.compile(r'(?<![&\w#])#([a-zA-Z\u0600-\u06FF][a-zA-Z0-9_\u0600-\u06FF\/-]*)')

def _norm(s):
    s = s.strip().lower()
    s = s.replace('–', '-').replace('—', '-')
    s = re.sub(r'\s+', ' ', s)
    return s

def _stash_code_blocks(text):
    """حفاظت از کدهای درون فنس، کدهای اینلاین، تگ‌های اسکریپت و تگ‌های HTML قبل از تبدیل‌های متنی"""
    stashed = []
    def _stash(m):
        stashed.append(m.group(0))
        return f"___SARV_STASH_{len(stashed)-1}___"

    # ۱. کدهای فنس‌شده (``` یا ~~~)
    text = re.sub(r'(```[\s\S]*?```|~~~[\s\S]*?~~~)', _stash, text, flags=re.MULTILINE)
    # ۲. کدهای درون خطی (`...`)
    text = re.sub(r'(`[^`\n]+`)', _stash, text)
    # ۳. تگ‌های اسکریپت و استایل
    text = re.sub(r'(<(script|style)\b[^>]*>[\s\S]*?</\2>)', _stash, text, flags=re.IGNORECASE)
    # ۴. تگ‌های HTML (جلوگیری از برخورد با کدهای رنگ مثل #fff و خصوصیات استایل)
    text = re.sub(r'(<[^>]+>)', _stash, text)
    return text, stashed

def _unstash_code_blocks(text, stashed):
    """بازگردانی بدون تغییر کدهای محافظت‌شده"""
    for i, block in enumerate(stashed):
        text = text.replace(f"___SARV_STASH_{i}___", block)
    return text

def on_files(files, config):
    """ایندکس کردن تمامی فایل‌ها برای تطبیق سریع نام‌های ویکی‌لینک"""
    global _file_index, _backlinks, _graph_nodes, _graph_links, _page_registry, _tag_registry
    _file_index = {}
    _backlinks = {}
    _graph_nodes = []
    _graph_links = []
    _page_registry = {}
    _tag_registry = {}

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
    raw_markdown = markdown
    # ۱) محاسبه زمان تقریبی مطالعه و تعداد کلمات
    reading_mins, word_count = _estimate_reading_time(markdown)
    page.sarv_reading_mins = reading_mins
    page.sarv_word_count = word_count

    # حفاظت از سورس‌کدها در برابر تغییرات ریجکس
    markdown, stashed = _stash_code_blocks(markdown)

    # استخراج تگ‌های ابسیدین (#tag) از متن یادداشت
    page_tags = []
    tags_file = files.get_file_from_path('tags.md')
    tags_base_url = tags_file.url_relative_to(page.file) if tags_file else 'tags/'

    def _extract_and_format_tag(m):
        tag_name = m.group(1).strip()
        # فیلتر کردن کدهای رنگ هگزادسیمال احتمالی
        if re.fullmatch(r'[0-9a-fA-F]{3,8}', tag_name) and not any(c in 'ghijklmnopqrstuvwxyz' for c in tag_name.lower()):
            return m.group(0)
        if tag_name not in page_tags:
            page_tags.append(tag_name)
        return f'<a href="{tags_base_url}#{tag_name}" class="sarv-tag" data-tag="{tag_name}">#{tag_name}</a>'

    markdown = _TAG_RE.sub(_extract_and_format_tag, markdown)
    page.sarv_tags = page_tags

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
        'tags': page_tags,
        'summary': markdown[:180].replace('\n', ' ').strip() + '...'
    }

    # ثبت تگ‌ها در رجیستری سراسری تگ‌ها
    for t in page_tags:
        _tag_registry.setdefault(t, []).append({
            'id': page_id,
            'title': page_title,
            'url': page.file.url,
            'folder': folder
        })

    if not any(node['id'] == page_id for node in _graph_nodes):
        _graph_nodes.append({
            'id': page_id,
            'title': page_title,
            'url': page.file.url,
            'folder': folder,
            'tags': page_tags,
            'words': word_count
        })

    # ۲) حل امبد عکس‌های ابسیدین ![[image.png]] یا ![[image.png|300]]
    def _img_repl(m):
        name, size = m.group(1), m.group(2)
        target_f = _resolve(name, page.file)
        if target_f is None:
            return m.group(0)
        alt = os.path.splitext(os.path.basename(name))[0]
        if size and size.isdigit():
            rel_url = target_f.url_relative_to(page.file)
            return f'<img src="{rel_url}" alt="{alt}" width="{size}" class="sarv-embedded-img" />'
        
        # برای لینک مارک‌داون، مسیر باید نسبت به فایل مارک‌داون مبدا باشد تا بیلد اخطار ندهد
        src_dir = os.path.dirname(page.file.abs_src_path)
        src_rel = os.path.relpath(target_f.abs_src_path, src_dir).replace('\\', '/')
        return f'![{alt}]({src_rel})'

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

    # ۵) هایلایت ایمن متن ابسیدین ==متن== (بدون دستکاری عملگرهای == و ===)
    markdown = re.sub(r'(?<!=)==(?!\s|=)(.+?)(?<!\s|=)==(?!=)', r'<mark class="sarv-highlight">\1</mark>', markdown)

    # ۶) استخراج جامع پیوندهای خارجی و کارت‌های منابع برای گراف شبکه
    def _register_external_node(href, raw_title, badge=''):
        href = href.strip()
        if not href.startswith(('http://', 'https://')):
            return
        # صرف‌نظر از اسکریپت‌ها و استایل‌های CDN عمومی
        if any(href.lower().endswith(ext) for ext in ('.woff2', '.ttf', '.css', '.js')) and 'jsdelivr' in href:
            return
            
        clean_title = re.sub(r'<[^>]+>', ' ', raw_title).strip()
        clean_title = clean_title.replace('$', '').strip()
        if not clean_title or clean_title == href or clean_title.startswith(('http://', 'https://')):
            try:
                from urllib.parse import urlparse
                parsed = urlparse(href)
                domain = parsed.netloc.replace('www.', '')
                path = parsed.path.strip('/')
                clean_title = f"{domain}/{path}" if path and len(path) < 22 else domain
            except Exception:
                clean_title = href[:28]

        res_hash = hashlib.md5(href.encode('utf-8')).hexdigest()[:8]
        res_id = f"ext:{res_hash}"

        existing = next((n for n in _graph_nodes if n['id'] == res_id), None)
        if not existing:
            _graph_nodes.append({
                'id': res_id,
                'title': clean_title[:45],
                'url': href,
                'folder': 'پیوندهای خارجی',
                'isResource': True,
                'isExternal': True,
                'type': 'external',
                'badge': badge or 'خارجی',
                'radius': 4.5,
                'words': 0
            })
        elif badge and (not existing.get('badge') or existing.get('badge') == 'خارجی'):
            existing['badge'] = badge

        if not any(l['source'] == page_id and l['target'] == res_id for l in _graph_links):
            _graph_links.append({
                'source': page_id,
                'target': res_id,
                'type': 'external'
            })

    # الف) لینک‌های درون کارت‌های منبع و المان‌های HTML <a>
    card_pattern = re.compile(r'<a\s+([^>]*?)>(.*?)</a>', re.DOTALL | re.IGNORECASE)
    for m in card_pattern.finditer(raw_markdown):
        attrs = m.group(1)
        inner = m.group(2)
        href_m = re.search(r'href=["\']([^"\']+)["\']', attrs)
        if not href_m:
            continue
        href = href_m.group(1).strip()
        
        # استخراج تیتر و نشان
        title_m = re.search(r'<span[^>]*class=["\'][^"\']*resource-card-title[^"\']*["\'][^>]*>(.*?)</span>', inner, re.DOTALL)
        if title_m:
            card_title = title_m.group(1)
        else:
            card_title = inner
            
        badge_m = re.search(r'<span[^>]*class=["\'][^"\']*resource-badge[^"\']*["\'][^>]*>(.*?)</span>', inner, re.DOTALL)
        card_badge = re.sub(r'<[^>]+>', '', badge_m.group(1)).strip() if badge_m else ''

        if href.startswith(('http://', 'https://')):
            _register_external_node(href, card_title, card_badge)
        elif not href.startswith(('#', 'mailto:')):
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

    # ب) لینک‌های استاندارد مارک‌داون [عنوان](https://...)
    for m in re.finditer(r'\[([^\]]+)\]\((https?://[^\s\)]+)\)', raw_markdown):
        _register_external_node(m.group(2), m.group(1))

    # ج) لینک‌های خام <https://...>
    for m in re.finditer(r'<(https?://[^>]+)>', raw_markdown):
        _register_external_node(m.group(1), m.group(1))

    # بازگردانی سورس‌کدها
    markdown = _unstash_code_blocks(markdown, stashed)
    return markdown

def on_page_content(html, page, config, files):
    """بهینه‌سازی المان‌های HTML پس از تبدیل استاندارد مارک‌داون (چک‌باکس‌های تعاملی و متحرک)"""
    def _task_repl(m):
        checked = 'checked' in m.group(0).lower()
        checked_class = "is-checked" if checked else ""
        svg_stroke = '<svg viewBox="0 0 24 24"><polyline class="cb-animate" points="20 6 9 17 4 12"></polyline></svg>' if checked else ''
        return f'<span class="sarv-checkbox {checked_class}">{svg_stroke}</span>'

    # جایگزینی چک‌باکس بومی pymdownx.tasklist با کامپوننت متحرک سرو
    html = re.sub(r'<label class="task-list-control">.*?<\/label>|<input[^>]*type="checkbox"[^>]*>', _task_repl, html)
    return html

def on_page_context(context, page, config, nav):
    """تزریق متادیتا، تگ‌ها و بک‌لینک‌ها به قالب صفحه"""
    current_url = page.file.url
    context['sarv_backlinks'] = _backlinks.get(current_url, [])
    context['sarv_tags'] = getattr(page, 'sarv_tags', [])
    context['sarv_reading_mins'] = getattr(page, 'sarv_reading_mins', 2)
    context['sarv_word_count'] = getattr(page, 'sarv_word_count', 300)
    return context

def on_post_build(config):
    """خروجی دادن فایل داده‌های گراف شبکه sarv-graph.json و sarv-tags.json با اتصالات واقعی و تمیز"""
    site_dir = config.get('site_dir')
    docs_dir = config.get('docs_dir')
    
    try:
        # ۱) فیلتر کردن و یکتاسازی یال‌های واقعی گراف (بدون لینک‌های تصنعی و زنجیره‌ای)
        clean_links = []
        seen = set()
        node_ids = set(n['id'] for n in _graph_nodes)

        for link in _graph_links:
            src = link['source']
            tgt = link['target']
            if src in node_ids and tgt in node_ids and src != tgt:
                pair = tuple(sorted([src, tgt]))
                if pair not in seen:
                    seen.add(pair)
                    clean_links.append(link)

        # ۲) محاسبه درجه اتصال هر نود (Degree) جهت تعیین طبیعی اندازه نودها (سبک اصیل ابسیدین)
        node_degrees = {}
        for link in clean_links:
            node_degrees[link['source']] = node_degrees.get(link['source'], 0) + 1
            node_degrees[link['target']] = node_degrees.get(link['target'], 0) + 1

        for node in _graph_nodes:
            deg = node_degrees.get(node['id'], 0)
            node['degree'] = deg
            if node.get('isHome'):
                node['radius'] = 8.5
            elif node.get('isExternal'):
                node['radius'] = 4.2
            elif deg >= 4:
                node['isHub'] = True
                node['radius'] = 7.0
            elif deg >= 2:
                node['radius'] = 5.8
            else:
                node['radius'] = 4.8

        graph_payload = {
            'nodes': _graph_nodes,
            'links': clean_links,
            'pages': _page_registry,
            'tags': _tag_registry
        }

        # ذخیره در site_dir برای خروجی نهایی
        if site_dir:
            with open(os.path.join(site_dir, 'sarv-graph.json'), 'w', encoding='utf-8') as f:
                json.dump(graph_payload, f, ensure_ascii=False, indent=2)
            with open(os.path.join(site_dir, 'sarv-tags.json'), 'w', encoding='utf-8') as f:
                json.dump(_tag_registry, f, ensure_ascii=False, indent=2)

        # ذخیره همزمان در docs_dir تا در سرور زنده محلی (mkdocs serve) نیز بلافاصله در دسترس باشد
        if docs_dir:
            with open(os.path.join(docs_dir, 'sarv-graph.json'), 'w', encoding='utf-8') as f:
                json.dump(graph_payload, f, ensure_ascii=False, indent=2)
            with open(os.path.join(docs_dir, 'sarv-tags.json'), 'w', encoding='utf-8') as f:
                json.dump(_tag_registry, f, ensure_ascii=False, indent=2)

    except Exception as e:
        print(f"[Sarv Theme] Error writing sarv-graph.json: {e}")
