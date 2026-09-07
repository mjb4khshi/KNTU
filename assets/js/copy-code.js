/* =========================================================
   🌿 Sarv UI Sleek Code Header & Icon-Only Copy Button
   Designed & Built with care by MJ (v0.3.2)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const preElements = document.querySelectorAll("pre > code, pre:not(:has(code))");
  const processedContainers = new Set();

  preElements.forEach((el) => {
    const pre = el.tagName === "PRE" ? el : el.closest("pre");
    if (!pre) return;

    // Outer wrapper is .highlight or .codehilite if exists, else pre
    const container = pre.closest(".highlight, .codehilite") || pre;
    if (processedContainers.has(container)) return;
    if (container.querySelector(".sarv-code-header")) return;
    processedContainers.add(container);

    const codeEl = pre.querySelector("code") || pre;

    // Detect Language
    let lang = "TEXT";
    const classes = (codeEl.className || "") + " " + (container.className || "");
    const match = classes.match(/(?:language-|lang-)([a-zA-Z0-9_-]+)/);
    if (match) {
      lang = match[1].toUpperCase();
    } else if (classes.includes("mermaid")) {
      lang = "MERMAID";
    }

    // Create Header
    const header = document.createElement("div");
    header.className = "sarv-code-header";

    const langLabel = document.createElement("span");
    langLabel.className = "sarv-code-lang";
    langLabel.textContent = lang;

    const copyBtn = document.createElement("button");
    copyBtn.className = "sarv-copy-btn";
    copyBtn.type = "button";
    copyBtn.title = "کپی کد";
    copyBtn.setAttribute("aria-label", "کپی کد");
    copyBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
    `;

    copyBtn.addEventListener("click", async () => {
      const textToCopy = codeEl.innerText;
      try {
        await navigator.clipboard.writeText(textToCopy);
        copyBtn.classList.add("copied");
        copyBtn.innerHTML = `
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        `;
        setTimeout(() => {
          copyBtn.classList.remove("copied");
          copyBtn.innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
          `;
        }, 2000);
      } catch (err) {
        console.error("Failed to copy code: ", err);
      }
    });

    header.appendChild(langLabel);
    header.appendChild(copyBtn);

    container.insertBefore(header, container.firstChild);
  });
});

