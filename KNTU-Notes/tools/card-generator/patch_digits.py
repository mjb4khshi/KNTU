with open('KNTU-Notes/mkdocs_theme_sarv/hooks/obsidian_engine.py', 'r', encoding='utf-8') as f:
    c = f.read()

target = """def on_page_context(context, page, config, nav):
    \"\"\"تزریق متادیتا، تگ‌ها و بک‌لینک‌ها به قالب صفحه\"\"\"
    current_url = page.file.url
    context['sarv_backlinks'] = _backlinks.get(current_url, [])
    context['sarv_tags'] = getattr(page, 'sarv_tags', [])
    context['sarv_reading_mins'] = getattr(page, 'sarv_reading_mins', 2)
    context['sarv_word_count'] = getattr(page, 'sarv_word_count', 300)
    return context"""

replacement = """def _to_farsi_digits(val):
    farsi_digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    return re.sub(r'\\d', lambda m: farsi_digits[int(m.group(0))], str(val))

def on_page_context(context, page, config, nav):
    \"\"\"تزریق متادیتا، تگ‌ها و بک‌لینک‌ها به قالب صفحه\"\"\"
    current_url = page.file.url
    context['sarv_backlinks'] = _backlinks.get(current_url, [])
    context['sarv_tags'] = getattr(page, 'sarv_tags', [])
    reading_mins = getattr(page, 'sarv_reading_mins', 2)
    word_count = getattr(page, 'sarv_word_count', 300)
    context['sarv_reading_mins'] = _to_farsi_digits(reading_mins)
    context['sarv_word_count'] = _to_farsi_digits(f\"{word_count:,}\")
    return context"""

c_norm = c.replace('\r\n', '\n')
target_norm = target.replace('\r\n', '\n')
replacement_norm = replacement.replace('\r\n', '\n')

if target_norm in c_norm:
    c_new = c_norm.replace(target_norm, replacement_norm)
    with open('KNTU-Notes/mkdocs_theme_sarv/hooks/obsidian_engine.py', 'w', encoding='utf-8') as f:
        f.write(c_new)
    print('Farsi digits patched successfully!')
else:
    print('Target not found in obsidian_engine.py')
