/* =========================================================
   🌿 Sarv UI Checkbox Animation & Interaction
   Draws SVG stroke on page load for completed tasks
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".sarv-checkbox");

  // Initial load animation for pre-checked items
  setTimeout(() => {
    checkboxes.forEach((cb) => {
      if (cb.classList.contains("is-checked")) {
        const path = cb.querySelector(".cb-animate");
        if (path) {
          path.style.strokeDashoffset = "0";
        }
      }
    });
  }, 150);

  // Interactive toggle on click
  checkboxes.forEach((cb) => {
    cb.addEventListener("click", () => {
      const wasChecked = cb.classList.contains("is-checked");
      if (wasChecked) {
        cb.classList.remove("is-checked");
        const svg = cb.querySelector("svg");
        if (svg) svg.remove();
      } else {
        cb.classList.add("is-checked");
        if (!cb.querySelector("svg")) {
          cb.innerHTML = '<svg viewBox="0 0 24 24"><polyline class="cb-animate" points="20 6 9 17 4 12" style="stroke-dashoffset: 40;"></polyline></svg>';
          setTimeout(() => {
            const path = cb.querySelector(".cb-animate");
            if (path) path.style.strokeDashoffset = "0";
          }, 30);
        }
      }
    });
  });
});
