/* =========================================================
   🌿 Sarv UI Instant Search & Keyboard Shortcut (Ctrl+K)
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

(function () {
  let searchIndex = null;

  function getSearchUrl() {
    const metaUrl = document.querySelector('meta[name="sarv-search-url"]')?.getAttribute('content');
    if (metaUrl) return metaUrl;
    const siteRoot = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content') || '/';
    return siteRoot.replace(/\/+$/, '') + '/search/search_index.json';
  }

  function getSiteRoot() {
    const siteRoot = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content');
    if (siteRoot) return siteRoot;
    const metaUrl = document.querySelector('meta[name="sarv-search-url"]')?.getAttribute('content');
    if (metaUrl) return metaUrl.replace(/search\/search_index\.json$/, '');
    return './';
  }

  async function loadSearchIndex() {
    if (searchIndex) return searchIndex;
    try {
      const url = getSearchUrl();
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        searchIndex = data.docs || [];
        return searchIndex;
      }
    } catch (e) {
      console.warn("[Sarv Search] Search index could not be loaded:", e);
    }
    return [];
  }

  document.addEventListener("DOMContentLoaded", () => {
    const searchModal = document.getElementById("sarv-search-modal");
    const searchInput = document.getElementById("sarv-search-input");
    const searchResults = document.getElementById("sarv-search-results");
    const headerInput = document.getElementById("sarv-header-search-trigger");
    const closeBtn = document.getElementById("sarv-search-close");

    function openSearch() {
      if (!searchModal) return;
      searchModal.classList.add("is-open");
      loadSearchIndex();
      setTimeout(() => {
        if (searchInput) searchInput.focus();
      }, 50);
    }

    function closeSearch() {
      if (!searchModal) return;
      searchModal.classList.remove("is-open");
    }

    if (headerInput) {
      headerInput.addEventListener("click", openSearch);
      headerInput.addEventListener("focus", openSearch);
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", closeSearch);
    }

    if (searchModal) {
      searchModal.addEventListener("click", (e) => {
        if (e.target === searchModal) closeSearch();
      });
    }

    // Ctrl+K Shortcut
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (searchModal && searchModal.classList.contains("is-open")) {
          closeSearch();
        } else {
          openSearch();
        }
      }
      if (e.key === "Escape" && searchModal && searchModal.classList.contains("is-open")) {
        closeSearch();
      }
    });

    // Instant Search Input
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", async () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          searchResults.innerHTML = '<div class="sarv-search-empty">عبارتی را برای جستجو در تمام جزوات وارد کنید...</div>';
          return;
        }

        const index = await loadSearchIndex();
        const matches = index.filter((doc) => {
          const t = (doc.title || "").toLowerCase();
          const text = (doc.text || "").toLowerCase();
          return t.includes(q) || text.includes(q);
        }).slice(0, 15);

        if (matches.length === 0) {
          searchResults.innerHTML = '<div class="sarv-search-empty">موردی برای این عبارت یافت نشد.</div>';
          return;
        }

        const siteRoot = getSiteRoot();
        searchResults.innerHTML = matches
          .map((doc) => {
            const loc = (doc.location || '').replace(/^\/+/, '');
            const url = siteRoot.endsWith('/') ? siteRoot + loc : siteRoot + '/' + loc;
            const snippet = (doc.text || "").slice(0, 140) + "...";
            return `
            <a href="${url}" class="sarv-search-item">
              <div class="sarv-search-item-title">📄 ${doc.title || "بدون عنوان"}</div>
              <div class="sarv-search-item-snippet">${snippet}</div>
            </a>
          `;
          })
          .join("");
      });
    }
  });
})();
