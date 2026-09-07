/* =========================================================
   🌿 Sarv UI Reading Progress & Back to Top
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("sarv-reading-progress");
  const backToTopBtn = document.getElementById("sarv-back-to-top");

  function updateScroll() {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      if (progressBar) {
        progressBar.style.width = Math.min(100, Math.max(0, progress)) + "%";
      }
    }

    if (backToTopBtn) {
      if (window.scrollY > 320) {
        backToTopBtn.style.opacity = "1";
        backToTopBtn.style.pointerEvents = "auto";
        backToTopBtn.style.transform = "translateY(0)";
      } else {
        backToTopBtn.style.opacity = "0";
        backToTopBtn.style.pointerEvents = "none";
        backToTopBtn.style.transform = "translateY(12px)";
      }
    }
  }

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
