/* =========================================================
   🌿 Sarv UI Theme Engine
   Handles 15 dynamic themes, localStorage, Layout Modes & Mermaid
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

(function () {
  const THEMES = [
    { id: "persian-dark", name: "ایرانی تاریک (پیش‌فرض)", isDark: true, color: "#0066a4", base: "#0b1320", base500: "#1b283d", content: "#f8fafc", accent: "#fe28a2" },
    { id: "persian-light", name: "ایرانی روشن", isDark: false, color: "#0066a4", base: "#ffffff", base500: "#e2e8f0", content: "#0f172a", accent: "#fe28a2" },
    { id: "ocean-abyss", name: "اقیانوس ژرف (Ocean Abyss)", isDark: true, color: "#06b6d4", base: "#030f1c", base500: "#0b253a", content: "#e0f2fe", accent: "#38bdf8" },
    { id: "emerald", name: "زمردین (Emerald)", isDark: true, color: "#10b981", base: "#051911", base500: "#0d3324", content: "#ecfdf5", accent: "#34d399" },
    { id: "cyberpunk", name: "سایبرپانک (Cyberpunk)", isDark: true, color: "#ec4899", base: "#090914", base500: "#17172f", content: "#fdf4ff", accent: "#00f0ff" },
    { id: "sunset", name: "غروب آفتاب (Sunset)", isDark: true, color: "#f97316", base: "#1a0f0d", base500: "#361c16", content: "#fff7ed", accent: "#fbbf24" },
    { id: "matcha", name: "ماچا (Matcha)", isDark: false, color: "#65a30d", base: "#f7f9f3", base500: "#d9e2cb", content: "#1a2e05", accent: "#84cc16" },
    { id: "nordic", name: "نوردیک (Nordic)", isDark: true, color: "#38bdf8", base: "#0b1523", base500: "#182c44", content: "#f0f9ff", accent: "#0284c7" },
    { id: "rose-gold", name: "رزگلد (Rose Gold)", isDark: false, color: "#e11d48", base: "#fff5f7", base500: "#fecdd3", content: "#4c0519", accent: "#fb7185" },
    { id: "tokyo-midnight", name: "شب‌های توکیو (Tokyo)", isDark: true, color: "#8b5cf6", base: "#0c0a1a", base500: "#1c173b", content: "#f5f3ff", accent: "#c084fc" },
    { id: "coffee-roast", name: "قهوه رست (Coffee)", isDark: true, color: "#d97706", base: "#18120e", base500: "#33241b", content: "#fef3c7", accent: "#f59e0b" },
    { id: "crimson", name: "یاقوت سرخ (Crimson)", isDark: true, color: "#e11d48", base: "#140508", base500: "#330b14", content: "#fff1f2", accent: "#fb7185" },
    { id: "royal-purple", name: "بنفش سلطنتی (Royal)", isDark: true, color: "#a855f7", base: "#0e0720", base500: "#221147", content: "#faf5ff", accent: "#c084fc" },
  ];

  function getSavedTheme() {
    return localStorage.getItem("sarv-theme") || "persian-dark";
  }

  function applyTheme(themeId) {
    const themeObj = THEMES.find((t) => t.id === themeId) || THEMES[0];
    document.documentElement.setAttribute("data-theme", themeObj.id);
    document.documentElement.setAttribute("datatheme", themeObj.id);
    if (document.body) {
      document.body.setAttribute("data-theme", themeObj.id);
      document.body.setAttribute("datatheme", themeObj.id);
    }
    
    // Set all design tokens directly on documentElement
    document.documentElement.style.setProperty("--color-primary", themeObj.color);
    document.documentElement.style.setProperty("--theme-color-primary", themeObj.color);
    document.documentElement.style.setProperty("--color-accent", themeObj.accent);
    document.documentElement.style.setProperty("--theme-color-accent", themeObj.accent);
    document.documentElement.style.setProperty("--color-base", themeObj.base);
    document.documentElement.style.setProperty("--theme-color-base", themeObj.base);
    document.documentElement.style.setProperty("--color-base-500", themeObj.base500);
    document.documentElement.style.setProperty("--theme-color-base-500", themeObj.base500);
    document.documentElement.style.setProperty("--color-base-content", themeObj.content);
    document.documentElement.style.setProperty("--theme-color-base-content", themeObj.content);

    if (themeObj.isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("sarv-theme", themeObj.id);

    // Update UI elements if present
    const labelEl = document.getElementById("sarv-current-theme-name");
    const dotEl = document.getElementById("sarv-current-theme-dot");
    if (labelEl) labelEl.textContent = themeObj.name.split(" (")[0];
    if (dotEl) dotEl.style.backgroundColor = themeObj.color;

    // Highlight selected item in dropdown
    document.querySelectorAll(".sarv-select-item").forEach((item) => {
      if (item.dataset.themeId === themeObj.id) {
        item.classList.add("is-selected");
      } else {
        item.classList.remove("is-selected");
      }
    });

    // Sync mobile select if present
    const mobileSelect = document.getElementById("sarv-mobile-theme-select");
    if (mobileSelect && mobileSelect.value !== themeObj.id) {
      mobileSelect.value = themeObj.id;
    }

    // Notify Mermaid or other listeners
    window.dispatchEvent(new CustomEvent("sarv-theme-changed", { detail: themeObj }));
  }

  function initLayoutToggle() {
    const btn = document.getElementById("sarv-layout-toggle");
    if (!btn) return;
    const iconExpand = btn.querySelector(".sarv-icon-expand");
    const iconCollapse = btn.querySelector(".sarv-icon-collapse");

    function updateIcons(isFull) {
      if (iconExpand && iconCollapse) {
        iconExpand.style.display = isFull ? "none" : "block";
        iconCollapse.style.display = isFull ? "block" : "none";
      }
      btn.setAttribute("title", isFull ? "حالت کانتینتری (محدود)" : "حالت تمام‌عرض (گسترده)");
    }

    const current = localStorage.getItem("sarv-layout-mode") === "full";
    if (current) {
      document.documentElement.classList.add("sarv-mode-fullwidth");
    }
    updateIcons(current);

    btn.addEventListener("click", () => {
      const isNowFull = document.documentElement.classList.toggle("sarv-mode-fullwidth");
      localStorage.setItem("sarv-layout-mode", isNowFull ? "full" : "container");
      updateIcons(isNowFull);
      window.dispatchEvent(new Event("resize"));
    });
  }

  // Initial Theme Application (fast before DOM fully loaded)
  applyTheme(getSavedTheme());

  document.addEventListener("DOMContentLoaded", () => {
    applyTheme(getSavedTheme());
    initLayoutToggle();

    const trigger = document.getElementById("sarv-theme-select-trigger");
    const menu = document.getElementById("sarv-theme-select-menu");

    if (trigger && menu) {
      trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("is-open");
      });

      document.addEventListener("click", () => {
        menu.classList.remove("is-open");
      });

      menu.querySelectorAll(".sarv-select-item").forEach((item) => {
        item.addEventListener("click", () => {
          const themeId = item.dataset.themeId;
          applyTheme(themeId);
          menu.classList.remove("is-open");
        });
      });
    }
  });

  window.SarvThemes = {
    applyTheme,
    getSavedTheme,
    THEMES,
  };
})();
