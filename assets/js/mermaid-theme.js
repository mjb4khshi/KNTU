/* =========================================================
   🌿 Sarv UI Mermaid Diagram Dynamic Themer
   Syncs Mermaid flowcharts with 15 Sarv themes & Arad font
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

(function () {
  function getMermaidConfig() {
    const isDark = document.documentElement.classList.contains("dark");
    const style = getComputedStyle(document.documentElement);
    const primary = style.getPropertyValue("--color-primary").trim() || "#0066a4";
    const accent = style.getPropertyValue("--color-accent").trim() || "#fe28a2";
    const base = style.getPropertyValue("--color-base").trim() || (isDark ? "#121212" : "#ffffff");
    const text = style.getPropertyValue("--color-base-content").trim() || (isDark ? "#ffffff" : "#000000");

    return {
      startOnLoad: false,
      theme: "base",
      themeVariables: {
        fontFamily: "Arad, Vazirmatn, sans-serif",
        fontSize: "14px",
        primaryColor: isDark ? "rgba(0, 102, 164, 0.25)" : "rgba(0, 102, 164, 0.12)",
        primaryTextColor: text,
        primaryBorderColor: primary,
        lineColor: primary,
        secondaryColor: accent,
        tertiaryColor: base,
        nodeBorder: primary,
        mainBkg: base,
        edgeLabelBackground: base,
        clusterBkg: isDark ? "#1c1c1e" : "#f4f4f5",
        clusterBorder: primary,
      },
      flowchart: {
        curve: "basis",
        htmlLabels: true,
      },
    };
  }

  function renderMermaid() {
    if (typeof mermaid === "undefined") return;
    try {
      mermaid.initialize(getMermaidConfig());
      mermaid.run({
        querySelector: ".mermaid",
      });
    } catch (e) {
      console.warn("[Sarv Mermaid] Render failed:", e);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Initial render
    setTimeout(renderMermaid, 100);

    // Re-render when Sarv theme switches!
    window.addEventListener("sarv-theme-changed", () => {
      // Restore original text from data-original or re-run
      document.querySelectorAll(".mermaid").forEach((el) => {
        if (!el.dataset.originalCode) {
          el.dataset.originalCode = el.textContent;
        } else {
          el.removeAttribute("data-processed");
          el.innerHTML = el.dataset.originalCode;
        }
      });
      setTimeout(renderMermaid, 50);
    });
  });
})();
