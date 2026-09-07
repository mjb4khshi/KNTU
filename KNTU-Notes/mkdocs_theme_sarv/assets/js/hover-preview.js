/* =========================================================
   🌿 Sarv UI Hover Preview (Obsidian-Style Note Peek)
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  let previewEl = document.getElementById("sarv-hover-preview");
  if (!previewEl) {
    previewEl = document.createElement("div");
    previewEl.id = "sarv-hover-preview";
    document.body.appendChild(previewEl);
  }

  let hoverTimeout = null;
  const links = document.querySelectorAll('a[data-wikilink="true"], a.wikilink');

  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      hoverTimeout = setTimeout(async () => {
        const title = link.textContent.trim();
        const url = link.getAttribute("href");
        if (!url) return;

        previewEl.innerHTML = `
          <div class="sarv-preview-title">📄 ${title}</div>
          <div class="sarv-preview-content">در حال پیش‌نمایش یادداشت...</div>
        `;

        // Position popup near cursor
        const x = Math.min(window.innerWidth - 340, Math.max(10, e.clientX - 160));
        const y = Math.min(window.innerHeight - 240, e.clientY + 20);
        previewEl.style.left = x + "px";
        previewEl.style.top = y + "px";
        previewEl.style.display = "block";

        // Try to fetch note excerpt
        try {
          const res = await fetch(url);
          if (res.ok) {
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const article = doc.querySelector("article");
            if (article) {
              const p = article.querySelector("p");
              const excerpt = p ? p.innerText.slice(0, 180) + "..." : "خلاصه‌ای برای نمایش وجود ندارد.";
              previewEl.querySelector(".sarv-preview-content").textContent = excerpt;
            }
          }
        } catch (err) {
          previewEl.querySelector(".sarv-preview-content").textContent = "یادداشت در دسترس است.";
        }
      }, 300);
    });

    link.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimeout);
      previewEl.style.display = "none";
    });
  });
});
