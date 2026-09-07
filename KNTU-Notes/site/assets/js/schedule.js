/* =========================================================
   🌿 Sarv UI Schedule Tracker
   Live day, time slot and active class tracker
   Designed & Built with care by MJ (v0.3.1)
   ========================================================= */

function updateScheduleTracker() {
  const table = document.getElementById("schedule-table") || document.querySelector(".schedule-table");
  if (!table) return;

  const now = new Date();
  let jsDay = now.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  let currentMinutes = now.getHours() * 60 + now.getMinutes();

  try {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Tehran",
      weekday: "short",
      hour: "numeric",
      minute: "numeric",
      hour12: false
    });
    const parts = formatter.formatToParts(now);
    const partMap = {};
    parts.forEach(p => partMap[p.type] = p.value);
    
    const weekdayMap = { "Sat": 6, "Sun": 0, "Mon": 1, "Tue": 2, "Wed": 3, "Thu": 4, "Fri": 5 };
    if (weekdayMap[partMap.weekday] !== undefined) {
      jsDay = weekdayMap[partMap.weekday];
    }
    const h = parseInt(partMap.hour, 10) || 0;
    const m = parseInt(partMap.minute, 10) || 0;
    currentMinutes = h * 60 + m;
  } catch (e) {
    // Fallback to local time
    jsDay = now.getDay();
    currentMinutes = now.getHours() * 60 + now.getMinutes();
  }

  // Map to table column keys:
  const dayMap = {
    6: "sat",
    0: "sun",
    1: "mon",
    2: "tue",
    3: "wed",
  };
  const todayKey = dayMap[jsDay];

  // 1. Clean previous day tags and active highlights
  table.querySelectorAll(".today-tag").forEach((el) => el.remove());
  table.querySelectorAll(".schedule-col-today").forEach((el) => el.classList.remove("schedule-col-today"));
  table.querySelectorAll(".schedule-cell-today-active").forEach((el) => el.classList.remove("schedule-cell-today-active"));
  table.querySelectorAll(".live-active-tag").forEach((el) => el.remove());

  // 2. Highlight Today Column
  if (todayKey) {
    const colHeader = document.getElementById("col-" + todayKey);
    if (colHeader && !colHeader.querySelector(".today-tag")) {
      colHeader.classList.add("schedule-col-today");
      const tag = document.createElement("span");
      tag.className = "today-tag";
      tag.textContent = "امروز";
      colHeader.appendChild(tag);
    }
    table.querySelectorAll(`td[data-day="${todayKey}"]`).forEach((td) => {
      td.classList.add("schedule-col-today");
    });
  }

  // 3. Clean previous row markers
  table.querySelectorAll(".schedule-row-now, .schedule-row-upcoming").forEach((row) => {
    row.classList.remove("schedule-row-now", "schedule-row-upcoming");
    const badge = row.querySelector(".now-pulse-badge, .upcoming-badge");
    if (badge) badge.remove();
  });

  // 4. Time Slots
  const timeSlots = [
    { id: "row-time-0900", start: 540, end: 630 },  // 09:00 – 10:30
    { id: "row-time-1330", start: 810, end: 900 },  // 13:30 – 15:00
    { id: "row-time-1500", start: 900, end: 990 },  // 15:00 – 16:30
    { id: "row-time-1630", start: 990, end: 1080 }, // 16:30 – 18:00
  ];

  let matched = false;
  for (const slot of timeSlots) {
    if (currentMinutes >= slot.start && currentMinutes <= slot.end) {
      const tr = document.getElementById(slot.id);
      if (tr) {
        tr.classList.add("schedule-row-now");
        const timeCell = tr.querySelector(".schedule-time-cell") || tr.cells[0];
        if (timeCell && !timeCell.querySelector(".now-pulse-badge")) {
          const badge = document.createElement("div");
          badge.className = "now-pulse-badge";
          badge.textContent = "هم‌اکنون";
          timeCell.appendChild(badge);
        }

        // Highlight Active Class Box
        if (todayKey) {
          const activeCell = tr.querySelector(`td[data-day="${todayKey}"]`);
          if (activeCell && activeCell.querySelector(".course-badge-box")) {
            activeCell.classList.add("schedule-cell-today-active");
            const box = activeCell.querySelector(".course-badge-box");
            if (box && !box.querySelector(".live-active-tag")) {
              const liveTag = document.createElement("div");
              liveTag.className = "live-active-tag";
              liveTag.textContent = "در حال برگزاری ⏳";
              box.insertBefore(liveTag, box.firstChild);
            }
          }
        }
      }
      matched = true;
      break;
    }
  }

  // 5. Mark Upcoming Slot if before class time today
  if (!matched && todayKey) {
    for (const slot of timeSlots) {
      if (currentMinutes < slot.start) {
        const tr = document.getElementById(slot.id);
        if (tr) {
          tr.classList.add("schedule-row-upcoming");
          const timeCell = tr.querySelector(".schedule-time-cell") || tr.cells[0];
          if (timeCell && !timeCell.querySelector(".upcoming-badge")) {
            const badge = document.createElement("div");
            badge.className = "upcoming-badge";
            badge.textContent = "نوبت بعدی";
            timeCell.appendChild(badge);
          }
        }
        break;
      }
    }
  }
}

function switchScheduleView(view) {
  const tableView = document.getElementById('scheduleTableView');
  const cardsView = document.getElementById('scheduleCardsView');
  const examsView = document.getElementById('scheduleExamsView');
  const tabTableBtn = document.getElementById('tabTableBtn');
  const tabCardsBtn = document.getElementById('tabCardsBtn');
  const tabExamsBtn = document.getElementById('tabExamsBtn');

  if (tableView) tableView.style.display = view === 'table' ? 'block' : 'none';
  if (cardsView) cardsView.style.display = view === 'cards' ? 'grid' : 'none';
  if (examsView) examsView.style.display = view === 'exams' ? 'flex' : 'none';

  if (tabTableBtn) tabTableBtn.classList.toggle('active', view === 'table');
  if (tabCardsBtn) tabCardsBtn.classList.toggle('active', view === 'cards');
  if (tabExamsBtn) tabExamsBtn.classList.toggle('active', view === 'exams');

  if (view === 'exams') {
    updateExamCountdowns();
  }
}

function copyText(text, label) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showScheduleToast((label ? label + ' ' : '') + 'کپی شد!');
    }).catch(() => {
      prompt('لطفاً دستی کپی کنید:', text);
    });
  } else {
    prompt('لطفاً دستی کپی کنید:', text);
  }
}

function copyScheduleShareLink() {
  copyText(window.location.href, 'لینک صفحه برنامه');
}

function showScheduleToast(msg) {
  let toast = document.getElementById('scheduleToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'scheduleToast';
    toast.className = 'schedule-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

function toPersianDigits(str) {
  if (str === null || str === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.toString().replace(/\d/g, d => farsiDigits[d]);
}

function updateExamCountdowns() {
  const now = new Date();
  const examRows = document.querySelectorAll('.exam-row');
  if (!examRows.length) return;

  examRows.forEach(row => {
    const dateStr = row.getAttribute('data-date');
    if (!dateStr) return;
    const examDate = new Date(dateStr);
    const diffMs = examDate.getTime() - now.getTime();
    const badge = row.querySelector('.exam-countdown-badge');
    if (!badge) return;

    badge.classList.remove('cd-urgent', 'cd-passed');

    if (diffMs <= -3 * 3600 * 1000) {
      badge.textContent = 'برگزار شده';
      badge.classList.add('cd-passed');
    } else if (diffMs <= 0) {
      badge.textContent = 'در حال برگزاری ⏳';
      badge.classList.add('cd-urgent');
    } else {
      const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
      const totalDays = Math.floor(totalHours / 24);
      const remainingHours = totalHours % 24;

      if (totalDays > 0) {
        if (totalDays <= 3) {
          badge.textContent = toPersianDigits(totalDays) + ' روز و ' + toPersianDigits(remainingHours) + ' ساعت مانده';
          badge.classList.add('cd-urgent');
        } else {
          badge.textContent = toPersianDigits(totalDays) + ' روز مانده';
        }
      } else if (totalHours > 0) {
        badge.textContent = toPersianDigits(totalHours) + ' ساعت مانده';
        badge.classList.add('cd-urgent');
      } else {
        const remainingMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        badge.textContent = toPersianDigits(Math.max(1, remainingMinutes)) + ' دقیقه مانده';
        badge.classList.add('cd-urgent');
      }
    }
  });
}

window.switchScheduleView = switchScheduleView;
window.copyText = copyText;
window.copyScheduleShareLink = copyScheduleShareLink;
window.showScheduleToast = showScheduleToast;
window.updateScheduleTracker = updateScheduleTracker;
window.highlightCurrentDayAndTime = updateScheduleTracker;
window.updateExamCountdowns = updateExamCountdowns;
window.toPersianDigits = toPersianDigits;

document.addEventListener("DOMContentLoaded", () => {
  updateScheduleTracker();
  updateExamCountdowns();
  setInterval(() => {
    updateScheduleTracker();
    updateExamCountdowns();
  }, 30000);
});
