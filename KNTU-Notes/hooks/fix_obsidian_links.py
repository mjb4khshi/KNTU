import os
import re

_file_index = {}


def _norm(s):
    s = s.strip().lower()
    s = s.replace('–', '-').replace('—', '-')
    s = re.sub(r'\s+', ' ', s)
    return s


def on_files(files, config):
    """نگاشتی از basename فایل (case-insensitive و نرمال‌شده) به آبجکت File واقعی آن می‌سازد."""
    global _file_index
    _file_index = {}
    for f in files:
        base = os.path.basename(f.src_uri)
        root, _ = os.path.splitext(base)
        for candidate in [base.lower(), root.lower(), _norm(base), _norm(root)]:
            if candidate:
                _file_index.setdefault(candidate, []).append(f)
    return files


_WIKI_EMBED_RE = re.compile(r'!\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]')
_WIKI_LINK_RE = re.compile(r'(?<!\!)\[\[([^\]|#]+)(?:#([^\]|]*))?(?:\|([^\]]+))?\]\]')
_MD_LINK_RE = re.compile(r'(!?\[[^\]]*\]\()([^)]+)(\))')


def _resolve(name, current_file):
    """فایل مقصد را با نام (بدون توجه به بزرگ/کوچکی حروف و نرمال‌سازی خط تیره و فواصل) پیدا می‌کند."""
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
    # این متد قبلاً خودش url را به‌درستی URL-encode کرده، دوباره quote نکنید
    return matches[0].url_relative_to(current_file)


def _fix_backslashes(raw):
    parts = raw.split(' ', 1)
    url = parts[0].replace('%5C', '/').replace('%5c', '/').replace('\\', '/')
    rest = f' {parts[1]}' if len(parts) > 1 else ''
    return url + rest


def on_page_markdown(markdown, page, config, files):
    # ۱) عکس‌های امبدشده به سبک اوبسیدین: ![[Group 1.png]] یا ![[Group 1.png|300]]
    def _img_repl(m):
        name = m.group(1)
        url = _resolve(name, page.file)
        if url is None:
            return m.group(0)
        alt = os.path.splitext(os.path.basename(name))[0]
        return f'![{alt}]({url})'

    markdown = _WIKI_EMBED_RE.sub(_img_repl, markdown)

    # ۲) لینک‌های متنی به سبک اوبسیدین: [[صفحه]] یا [[صفحه|عنوان دلخواه]]
    def _link_repl(m):
        name, anchor, alias = m.group(1), m.group(2), m.group(3)
        url = _resolve(name, page.file)
        if url is None:
            # اگر هنوز فایلی برای این یادداشت ساخته نشده، مانند اوبسیدین نمایش داده شود تا خطای ۴۰۴ ایجاد نکند
            label = alias or name
            return f'<span class="unresolved-wikilink" title="یادداشت هنوز ایجاد نشده است">{label}</span>'
        anchor_part = f'#{anchor}' if anchor else ''
        return f'[{alias or name}]({url}{anchor_part})'

    markdown = _WIKI_LINK_RE.sub(_link_repl, markdown)

    # ۳) بک‌اسلش‌های ویندوزی در لینک‌های استاندارد مارک‌داون (٪۵C یا \)
    markdown = _MD_LINK_RE.sub(
        lambda m: m.group(1) + _fix_backslashes(m.group(2)) + m.group(3),
        markdown,
    )
    return markdown