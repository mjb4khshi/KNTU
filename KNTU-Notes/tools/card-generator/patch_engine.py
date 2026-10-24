with open('KNTU-Notes/mkdocs_theme_sarv/hooks/obsidian_engine.py', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
in_func = False
skip = False

for line in lines:
    if line.startswith('def _stash_code_blocks('):
        in_func = True
        new_lines.append('''def _stash_code_blocks(text):
    """حفاظت از کدهای درون فنس، کدهای اینلاین، تگ‌های اسکریپت و تگ‌های HTML قبل از تبدیل‌های متنی"""
    stashed = []
    def _stash(m):
        stashed.append(m.group(0))
        return f"___SARVSTASHX{len(stashed)-1}X___"

    # ۱. تگ‌های کامل اسکریپت و استایل (اولویت اول برای دست‌نخورده ماندن جاوا اسکریپت)
    text = re.sub(r'(<(script|style)\\b[^>]*>[\\s\\S]*?</\\2>)', _stash, text, flags=re.IGNORECASE)
    # ۲. کدهای فنس‌شده (``` یا ~~~)
    text = re.sub(r'(```[\\s\\S]*?```|~~~[\\s\\S]*?~~~)', _stash, text, flags=re.MULTILINE)
    # ۳. کدهای درون خطی (`...`)
    text = re.sub(r'(`[^`\\n]+`)', _stash, text)
    # ۴. سایر تگ‌های HTML
    text = re.sub(r'(<[^>]+>)', _stash, text)
    return text, stashed

def _unstash_code_blocks(text, stashed):
    """بازگردانی بدون تغییر کدهای محافظت‌شده به ترتیب معکوس"""
    for i in range(len(stashed) - 1, -1, -1):
        text = text.replace(f"___SARVSTASHX{i}X___", stashed[i])
    return text
''')
    elif in_func:
        if line.startswith('def on_files('):
            in_func = False
            new_lines.append(line)
    else:
        new_lines.append(line)

with open('KNTU-Notes/mkdocs_theme_sarv/hooks/obsidian_engine.py', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print('Updated obsidian_engine.py cleanly!')
