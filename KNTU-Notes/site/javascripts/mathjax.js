/* =========================================================
   🌿 MathJax 3 Configuration for Sarv UI & Arithmatex
   Supports inline $...$ and display $$...$$ formulas everywhere
   Fixes Persian/RTL disconnected and reversed letters in \text{}
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

function fixPersianMathJaxText() {
  document.querySelectorAll("mjx-mtext").forEach((el) => {
    let text = "";
    el.childNodes.forEach((child) => {
      if (child.classList && child.classList.contains("mjx-c20")) {
        text += " ";
      } else {
        text += child.textContent;
      }
    });
    if (text && /[\u0600-\u06FF]/.test(text)) {
      el.innerHTML =
        '<span style="direction: rtl; unicode-bidi: isolate; font-family: Arad, Vazirmatn, sans-serif; display: inline-block;">' +
        text +
        "</span>";
    }
  });
}

function typesetSarvMath() {
  if (typeof MathJax !== "undefined" && MathJax.typesetPromise) {
    MathJax.typesetPromise()
      .then(() => {
        fixPersianMathJaxText();
      })
      .catch((err) => console.warn("MathJax error:", err));
  }
}

document.addEventListener("DOMContentLoaded", typesetSarvMath);
window.addEventListener("load", typesetSarvMath);
