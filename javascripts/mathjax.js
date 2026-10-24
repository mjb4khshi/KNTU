/* =========================================================
   🌿 MathJax 3 Configuration for Sarv UI & Arithmatex
   Supports inline $...$ and display $$...$$ formulas everywhere
   ========================================================= */

window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: "tex2jax_ignore",
    processHtmlClass: "tex2jax_process|arithmatex|sarv-markdown-content|resource-card-title|resource-card"
  }
};

function typesetSarvMath() {
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetPromise().catch(err => console.warn("MathJax error:", err));
  }
}

document.addEventListener("DOMContentLoaded", typesetSarvMath);
window.addEventListener("load", typesetSarvMath);
