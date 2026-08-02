import os
import re

_file_index = {}


def on_files(files, config):
    """نگاشتی از basename فایل (case-insensitive) به آبجکت File واقعی آن می‌سازد."""
    global _file_index
    _file_index = {}
    for f in files:
        key = os.path.basename(f.src_uri).lower()
        _file_index.setdefault(key, []).append(f)
    return files


_WIKI_EMBED_RE = re.compile(r'!\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]')
_WIKI_LINK_RE = re.compile(r'(?<!\!)\[\[([^\]|#]+)(?:#([^\]|]*))?(?:\|([^\]]+))?\]\]')
_MD_LINK_RE = re.compile(r'(!?\[[^\]]*\]\()([^)]+)(\))')


def _resolve(name, current_file):
    """فایل مقصد را با نام (بدون توجه به بزرگ/کوچکی حروف) پیدا و URL نسبی درست را برمی‌گرداند."""
    matches = _file_index.get(os.path.basename(name.strip()).lower())
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
    # ۱) عکس‌های امبدشده به سبک اوبسیدین: ![[Group 1.png]]  یا  ![[Group 1.png|300]]
    def _img_repl(m):
        name = m.group(1)
        url = _resolve(name, page.file)
        if url is None:
            return m.group(0)   # پیدا نشد؛ دست‌نخورده بماند تا خودِ mkdocs هشدار بدهد
        alt = os.path.splitext(os.path.basename(name))[0]
        return f'![{alt}]({url})'

    markdown = _WIKI_EMBED_RE.sub(_img_repl, markdown)

    # ۲) لینک‌های متنی به سبک اوبسیدین: [[صفحه]]  یا  [[صفحه|عنوان دلخواه]]
    def _link_repl(m):
        name, _anchor, alias = m.group(1), m.group(2), m.group(3)
        url = _resolve(name, page.file)
        if url is None:
            return m.group(0)
        return f'[{alias or name}]({url})'

    markdown = _WIKI_LINK_RE.sub(_link_repl, markdown)

    # ۳) بک‌اسلش‌های ویندوزی در لینک‌های استاندارد مارک‌داون (٪۵C یا \)
    markdown = _MD_LINK_RE.sub(
        lambda m: m.group(1) + _fix_backslashes(m.group(2)) + m.group(3),
        markdown,
    )
    return markdown