---
title: برچسب‌ها و تگ‌های یادداشت‌ها
---

# 🏷️ برچسب‌ها و تگ‌های یادداشت‌ها
## دسترسی موضوعی و خوشه‌بندی یادداشت‌ها بر اساس برچسب‌های ابسیدین

<div class="sarv-tags-stats-bar">
  <div class="tags-stat-card">
    <span class="tags-stat-num" id="total-tags-count">۰</span>
    <span class="tags-stat-label">تعداد برچسب‌های یکتا</span>
  </div>
  <div class="tags-stat-card">
    <span class="tags-stat-num" id="tagged-notes-count">۰</span>
    <span class="tags-stat-label">یادداشت‌های برچسب‌دار</span>
  </div>
</div>

---

### ☁️ ابر برچسب‌ها (Tag Cloud)
<div id="sarv-tags-cloud-container" class="sarv-tags-cloud-box">
  <div class="sarv-loading-placeholder">در حال بارگذاری برچسب‌های یادداشت‌ها...</div>
</div>

---

### 📄 یادداشت‌های مرتبط با برچسب انتخاب‌شده
<div class="sarv-active-tag-header" id="sarv-active-tag-header" style="display: none;">
  <span class="active-tag-title">یادداشت‌های دارای برچسب:</span>
  <span class="active-tag-badge" id="active-tag-name"></span>
  <button type="button" class="btn btn-sm btn-neutral" onclick="clearSelectedTag()">نمایش همه یادداشت‌ها</button>
</div>

<div id="sarv-tagged-notes-list" class="sarv-tagged-notes-grid">
  <!-- لیست یادداشت‌ها توسط جاوا اسکریپت تزریق می‌شود -->
</div>

<style>
.sarv-tags-stats-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2rem 0;
}
.tags-stat-card {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius-card);
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 50%, transparent);
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.tags-stat-num {
  font-size: 2rem;
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1;
}
.tags-stat-label {
  font-size: 0.85rem;
  color: var(--color-neutral);
  font-weight: 500;
}
.sarv-tags-cloud-box {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  padding: 1.25rem;
  border-radius: var(--radius-card);
  background: color-mix(in oklab, var(--color-base-500) 18%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 45%, transparent);
  margin-bottom: 2rem;
}
.sarv-tag-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.85rem;
  border-radius: 9999px;
  background: color-mix(in oklab, var(--color-primary) 12%, transparent);
  color: var(--color-primary);
  border: 1px solid color-mix(in oklab, var(--color-primary) 30%, transparent);
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none !important;
}
.sarv-tag-pill:hover, .sarv-tag-pill.is-active {
  background: var(--color-primary);
  color: var(--color-primary-content, #fff) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in oklab, var(--color-primary) 35%, transparent);
}
.sarv-tag-count {
  font-size: 0.72rem;
  padding: 0.15rem 0.45rem;
  border-radius: 9999px;
  background: color-mix(in oklab, currentColor 18%, transparent);
}
.sarv-active-tag-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-button);
  background: color-mix(in oklab, var(--color-base-500) 30%, transparent);
  flex-wrap: wrap;
}
.active-tag-title {
  font-weight: 700;
  font-size: 0.9rem;
}
.active-tag-badge {
  font-weight: 800;
  color: var(--color-primary);
  font-size: 1rem;
}
.sarv-tagged-notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}
.sarv-note-card {
  display: flex;
  flex-direction: column;
  padding: 1.15rem;
  border-radius: var(--radius-card);
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 50%, transparent);
  text-decoration: none !important;
  color: inherit;
  transition: all 0.2s ease;
}
.sarv-note-card:hover {
  border-color: var(--color-primary);
  background: color-mix(in oklab, var(--color-primary) 10%, transparent);
  transform: translateY(-3px);
}
.sarv-note-title {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--color-base-content);
  margin-bottom: 0.4rem;
}
.sarv-note-folder {
  font-size: 0.75rem;
  color: var(--color-neutral);
  margin-bottom: 0.6rem;
}
.sarv-note-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: auto;
}
.sarv-note-tag-badge {
  font-size: 0.7rem;
  padding: 0.15rem 0.45rem;
  border-radius: 6px;
  background: color-mix(in oklab, var(--color-base-500) 50%, transparent);
  color: var(--color-neutral);
}
</style>

<script>
(function() {
  let tagsData = null;
  let activeTag = null;

  async function loadTags() {
    try {
      const siteRootMeta = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content') || './';
      const cleanRoot = siteRootMeta.endsWith('/') ? siteRootMeta : siteRootMeta + '/';
      const res = await fetch(cleanRoot + 'sarv-tags.json');
      if (res.ok) {
        tagsData = await res.json();
        renderTagsUI();
      }
    } catch(e) {
      console.warn("Could not load tags:", e);
    }
  }

  function renderTagsUI() {
    if (!tagsData) return;
    const cloudBox = document.getElementById('sarv-tags-cloud-container');
    const totalCountEl = document.getElementById('total-tags-count');
    const taggedNotesCountEl = document.getElementById('tagged-notes-count');

    const tags = Object.keys(tagsData).sort((a,b) => tagsData[b].length - tagsData[a].length);
    const uniqueNotes = new Set();
    tags.forEach(t => tagsData[t].forEach(n => uniqueNotes.add(n.url)));

    if (totalCountEl) totalCountEl.textContent = tags.length;
    if (taggedNotesCountEl) taggedNotesCountEl.textContent = uniqueNotes.size;

    cloudBox.innerHTML = '';
    tags.forEach(tag => {
      const count = tagsData[tag].length;
      const pill = document.createElement('a');
      pill.className = 'sarv-tag-pill';
      pill.href = '#' + tag;
      pill.innerHTML = `<span>#${tag}</span><span class="sarv-tag-count">${count}</span>`;
      pill.onclick = (e) => {
        e.preventDefault();
        selectTag(tag);
      };
      cloudBox.appendChild(pill);
    });

    // Check if URL has hash
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (hash && tagsData[hash]) {
      selectTag(hash);
    } else {
      showAllNotes();
    }
  }

  function selectTag(tag) {
    activeTag = tag;
    window.location.hash = tag;

    // Highlight pill
    document.querySelectorAll('.sarv-tag-pill').forEach(pill => {
      pill.classList.toggle('is-active', pill.querySelector('span')?.textContent === '#' + tag);
    });

    const header = document.getElementById('sarv-active-tag-header');
    const nameEl = document.getElementById('active-tag-name');
    if (header && nameEl) {
      header.style.display = 'flex';
      nameEl.textContent = '#' + tag;
    }

    renderNotes(tagsData[tag] || []);
  }

  window.clearSelectedTag = function() {
    activeTag = null;
    history.replaceState(null, null, ' ');
    document.querySelectorAll('.sarv-tag-pill').forEach(pill => pill.classList.remove('is-active'));
    const header = document.getElementById('sarv-active-tag-header');
    if (header) header.style.display = 'none';
    showAllNotes();
  };

  function showAllNotes() {
    if (!tagsData) return;
    const allNotesMap = new Map();
    Object.keys(tagsData).forEach(tag => {
      tagsData[tag].forEach(note => {
        if (!allNotesMap.has(note.url)) {
          allNotesMap.set(note.url, { ...note, tags: [tag] });
        } else {
          allNotesMap.get(note.url).tags.push(tag);
        }
      });
    });
    renderNotes(Array.from(allNotesMap.values()));
  }

  function renderNotes(notes) {
    const listEl = document.getElementById('sarv-tagged-notes-list');
    if (!listEl) return;
    const siteRootMeta = document.querySelector('meta[name="sarv-site-root"]')?.getAttribute('content') || './';
    const cleanRoot = siteRootMeta.endsWith('/') ? siteRootMeta : siteRootMeta + '/';

    if (notes.length === 0) {
      listEl.innerHTML = '<div style="color: var(--color-neutral); padding: 1.5rem;">هیچ یادداشتی با این برچسب یافت نشد.</div>';
      return;
    }

    listEl.innerHTML = notes.map(n => {
      const dest = cleanRoot + (n.url || '').replace(/^\/+/, '');
      const folderBadge = n.folder ? `<div class="sarv-note-folder">📁 ${n.folder}</div>` : '';
      const tagsBadges = (n.tags || []).map(t => `<span class="sarv-note-tag-badge">#${t}</span>`).join('');
      return `
        <a href="${dest}" class="sarv-note-card">
          <div class="sarv-note-title">📄 ${n.title}</div>
          ${folderBadge}
          <div class="sarv-note-tags">${tagsBadges}</div>
        </a>
      `;
    }).join('');
  }

  window.addEventListener('hashchange', () => {
    const hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if (hash && tagsData && tagsData[hash]) {
      selectTag(hash);
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadTags);
  } else {
    loadTags();
  }
})();
</script>
