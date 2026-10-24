"""
MkDocs Hook: Auto-generate Social Share Cards & inject OpenGraph meta tags
"""
import os
import subprocess
import logging

log = logging.getLogger("mkdocs.plugins.social_cards")

GENERATOR_SCRIPT = os.path.abspath(
    os.path.join(os.path.dirname(__file__), "../tools/card-generator/generate.js")
)

def on_pre_build(config):
    """
    Before build, trigger generator to create/update cards for new or modified notes
    """
    try:
        log.info("[Social Cards] Checking notes for new cards...")
        res = subprocess.run(
            ["node", GENERATOR_SCRIPT],
            cwd=os.path.dirname(GENERATOR_SCRIPT),
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore"
        )
        if res.returncode == 0:
            lines = [l for l in res.stdout.strip().split("\n") if l.strip()]
            if lines:
                log.info(f"[Social Cards] {lines[-1]}")
        else:
            log.warning(f"[Social Cards] Generator error: {res.stderr}")
    except Exception as e:
        log.warning(f"[Social Cards] Could not run generator: {e}")

def on_post_page(output, page, config):
    """
    Inject og:image and twitter:image meta tags pointing to the generated card
    """
    try:
        docs_dir = config["docs_dir"]
        src_path = page.file.src_path  # e.g., 'adabiat/note.md'
        card_rel = os.path.splitext(src_path)[0] + ".png"
        card_abs = os.path.join(docs_dir, "assets/cards", card_rel)

        if os.path.exists(card_abs):
            site_url = config.get("site_url") or "https://mjb4khshi.github.io/KNTU/"
            if not site_url.endswith("/"):
                site_url += "/"
            
            image_url = site_url + "assets/cards/" + card_rel.replace("\\", "/")

            meta_tags = f'''
  <meta property="og:image" content="{image_url}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:title" content="{page.title}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="{image_url}">
  <meta name="twitter:title" content="{page.title}">
</head>'''
            output = output.replace("</head>", meta_tags, 1)
    except Exception as e:
        log.warning(f"[Social Cards] Meta injection error: {e}")

    return output
