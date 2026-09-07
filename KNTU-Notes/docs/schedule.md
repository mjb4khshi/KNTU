---
title: برنامه هفتگی و انتخاب واحد ترم
---

<div class="schedule-wrapper">

  <!-- بنر معرفی و اطلاعات ترم -->
  <div class="schedule-hero">
    <div class="schedule-hero-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      دانشگاه صنعتی خواجه نصیرالدین طوسی (KNTU)
    </div>
    <h1>برنامه هفتگی و واحدهای اخذ شده قطعی</h1>
    <p class="schedule-hero-desc">
      نتیجه رسمی ثبت‌نام نیمسال اول سال تحصیلی ۰۵-۰۶ در سیستم جامع گلستان • مهندسی صنایع و سیستم‌ها • معدل معیار: ۱۸.۹۲. برای مشاهده زمان‌بندی جلسات، مکان‌ها، اساتید، کدهای انتخابی و تقویم امتحانات پایان‌ترم از بخش‌های زیر استفاده کنید.
    </p>
  </div>

  <!-- کارت‌های آمار ترم -->
  <div class="schedule-stats-grid">
    <div class="schedule-stat-card">
      <div class="schedule-stat-num">۶</div>
      <div class="schedule-stat-label">عنوان درس اخذ شده</div>
    </div>
    <div class="schedule-stat-card">
      <div class="schedule-stat-num">۱۶</div>
      <div class="schedule-stat-label">تعداد واحد قطعی ترم</div>
    </div>
    <div class="schedule-stat-card">
      <div class="schedule-stat-num">۱۵</div>
      <div class="schedule-stat-label">ساعت کلاس در هفته (۱۰ جلسه)</div>
    </div>
    <div class="schedule-stat-card">
      <div class="schedule-stat-num">۵</div>
      <div class="schedule-stat-label">روز کلاس‌دار (شنبه تا چهارشنبه)</div>
    </div>
  </div>

  <!-- نوار ابزار، سوئیچر نما و دکمه‌های عملیات -->
  <div class="schedule-toolbar">
    <div class="schedule-view-switcher">
      <button class="schedule-tab-btn active" id="tabTableBtn" onclick="switchScheduleView('table')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
        جدول هفتگی
      </button>
      <button class="schedule-tab-btn" id="tabCardsBtn" onclick="switchScheduleView('cards')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
        کارت‌های دروس (۶)
      </button>
      <button class="schedule-tab-btn" id="tabExamsBtn" onclick="switchScheduleView('exams')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        برنامه امتحانات (۶)
      </button>
    </div>

    <div class="schedule-actions">
      <button class="schedule-btn schedule-btn-primary" onclick="copyScheduleShareLink()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/></svg>
        اشتراک‌گذاری با دوستان
      </button>
      <button class="schedule-btn" onclick="window.print()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
        چاپ / PDF
      </button>
    </div>
  </div>

  <!-- نمای اول: جدول هفتگی تایم‌لاین -->
  <div id="scheduleTableView" class="schedule-table-card">
    <div class="schedule-table-wrapper">
      <table class="schedule-table">
        <thead>
          <tr>
            <th style="width: 110px;">زمان</th>
            <th id="col-sat">شنبه</th>
            <th id="col-sun">یکشنبه</th>
            <th id="col-mon">دوشنبه</th>
            <th id="col-tue">سه‌شنبه</th>
            <th id="col-wed">چهارشنبه</th>
          </tr>
        </thead>
        <tbody>
          <!-- ساعت 09:00 الی 10:30 (نوبت صبح) -->
          <tr id="row-time-0900" data-start="540" data-end="630">
            <td class="schedule-time-cell">
              <div class="schedule-time-badge">
                <span class="time-main">۰۹:۰۰ – ۱۰:۳۰</span>
              </div>
            </td>
            <!-- شنبه -->
            <td data-day="sat"><div class="course-cell-slot"></div></td>
            <!-- یکشنبه -->
            <td data-day="sun">
              <div class="course-badge-box course-theme-blue">
                <div class="course-title">
                  <span>معادلات دیفرانسیل</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    مکانیک-کلاس
                  </span>
                </div>
              </div>
            </td>
            <!-- دوشنبه -->
            <td data-day="mon"><div class="course-cell-slot"></div></td>
            <!-- سه‌شنبه -->
            <td data-day="tue">
              <div class="course-badge-box course-theme-blue">
                <div class="course-title">
                  <span>معادلات دیفرانسیل</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    مکانیک-کلاس
                  </span>
                </div>
              </div>
            </td>
            <!-- چهارشنبه -->
            <td data-day="wed"><div class="course-cell-slot"></div></td>
          </tr>

          <!-- ساعت 13:30 الی 15:00 (نوبت ظهر) -->
          <tr id="row-time-1330" data-start="810" data-end="900">
            <td class="schedule-time-cell">
              <div class="schedule-time-badge">
                <span class="time-main">۱۳:۳۰ – ۱۵:۰۰</span>
              </div>
            </td>
            <!-- شنبه -->
            <td data-day="sat"><div class="course-cell-slot"></div></td>
            <!-- یکشنبه -->
            <td data-day="sun"><div class="course-cell-slot"></div></td>
            <!-- دوشنبه: نظریه احتمال (بخش اول) -->
            <td data-day="mon">
              <div class="course-badge-box course-theme-cyan">
                <div class="course-title">
                  <span>نظریه احتمال و کاربردها</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ۱۳:۳۰ الی ۱۵:۰۰
                  </span>
                </div>
              </div>
            </td>
            <!-- سه‌شنبه -->
            <td data-day="tue"><div class="course-cell-slot"></div></td>
            <!-- چهارشنبه -->
            <td data-day="wed"><div class="course-cell-slot"></div></td>
          </tr>

          <!-- ساعت 15:00 الی 16:30 (نوبت عصر اول) -->
          <tr id="row-time-1500" data-start="900" data-end="990">
            <td class="schedule-time-cell">
              <div class="schedule-time-badge">
                <span class="time-main">۱۵:۰۰ – ۱۶:۳۰</span>
              </div>
            </td>
            <!-- شنبه -->
            <td data-day="sat">
              <div class="course-badge-box course-theme-amber">
                <div class="course-title">
                  <span>مبانی مهندسی برق</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
              </div>
            </td>
            <!-- یکشنبه -->
            <td data-day="sun">
              <div class="course-badge-box course-theme-orange">
                <div class="course-title">
                  <span>محاسبات عددی</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ساختمان آموزشی صنایع
                  </span>
                </div>
              </div>
            </td>
            <!-- دوشنبه: نظریه احتمال (بخش دوم) -->
            <td data-day="mon">
              <div class="course-badge-box course-theme-cyan">
                <div class="course-title">
                  <span>نظریه احتمال و کاربردها</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    ۱۵:۰۰ الی ۱۶:۳۰
                  </span>
                </div>
              </div>
            </td>
            <!-- سه‌شنبه -->
            <td data-day="tue"><div class="course-cell-slot"></div></td>
            <!-- چهارشنبه -->
            <td data-day="wed">
              <div class="course-badge-box course-theme-amber">
                <div class="course-title">
                  <span>مبانی مهندسی برق</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
              </div>
            </td>
          </tr>

          <!-- ساعت 16:30 الی 18:00 (نوبت عصر دوم) -->
          <tr id="row-time-1630" data-start="990" data-end="1080">
            <td class="schedule-time-cell">
              <div class="schedule-time-badge">
                <span class="time-main">۱۶:۳۰ – ۱۸:۰۰</span>
              </div>
            </td>
            <!-- شنبه -->
            <td data-day="sat">
              <div class="course-badge-box course-theme-pink">
                <div class="course-title">
                  <span>استاتیک و مقاومت مصالح</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
              </div>
            </td>
            <!-- یکشنبه -->
            <td data-day="sun"><div class="course-cell-slot"></div></td>
            <!-- دوشنبه -->
            <td data-day="mon">
              <div class="course-badge-box course-theme-pink">
                <div class="course-title">
                  <span>استاتیک و مقاومت مصالح</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اساتید گروه آموزشی
                </div>
              </div>
            </td>
            <!-- سه‌شنبه -->
            <td data-day="tue">
              <div class="course-badge-box course-theme-lavender">
                <div class="course-title">
                  <span>مهارت‌های زندگی دانشجویی</span>
                </div>
                <div class="course-prof">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  اکبری سکینه
                </div>
                <div class="course-meta">
                  <span class="course-loc-tag">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    ساختمان آموزشی صنایع
                  </span>
                </div>
              </div>
            </td>
            <!-- چهارشنبه -->
            <td data-day="wed"><div class="course-cell-slot"></div></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- نمای دوم: کارت‌های جامع دروس -->
  <div id="scheduleCardsView" class="schedule-cards-view" style="display: none;">

    <!-- ۱. معادلات دیفرانسیل -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">معادلات دیفرانسیل</h3>
        <span class="course-tag-pill course-theme-blue">علوم پایه • ۳ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اساتید گروه آموزشی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>یکشنبه و سه‌شنبه: <strong>۰۹:۰۰ الی ۱۰:۳۰</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>مکانیک-کلاس</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۱/۰۵ (۱۰:۳۰ - ۱۲:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('5712095_51', 'کد معادلات دیفرانسیل')">
          <span>5712095_51</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

    <!-- ۲. مبانی مهندسی برق -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">مبانی مهندسی برق</h3>
        <span class="course-tag-pill course-theme-amber">تخصصی الزامی • ۳ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اساتید گروه آموزشی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>شنبه و چهارشنبه: <strong>۱۵:۰۰ الی ۱۶:۳۰</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>دانشکده مهندسی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۰/۲۳ (۱۰:۳۰ - ۱۲:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('6660102_60', 'کد مبانی برق')">
          <span>6660102_60</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

    <!-- ۳. استاتیک و مقاومت مصالح -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">استاتیک و مقاومت مصالح</h3>
        <span class="course-tag-pill course-theme-pink">دروس اصلی • ۳ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اساتید گروه آموزشی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>شنبه و دوشنبه: <strong>۱۶:۳۰ الی ۱۸:۰۰</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>دانشکده مهندسی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۰/۲۸ (۱۰:۳۰ - ۱۲:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('6660131_60', 'کد استاتیک و مقاومت مصالح')">
          <span>6660131_60</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

    <!-- ۴. نظریه احتمال و کاربردها -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">نظریه احتمال و کاربردها</h3>
        <span class="course-tag-pill course-theme-cyan">علوم پایه • ۳ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اساتید گروه آموزشی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>دوشنبه: <strong>۱۳:۳۰ الی ۱۶:۳۰ (یک و نیم تا چهار و نیم)</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>دانشکده مهندسی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۰/۲۰ (۱۰:۳۰ - ۱۲:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('6660255_60', 'کد نظریه احتمال')">
          <span>6660255_60</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

    <!-- ۵. محاسبات عددی -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">محاسبات عددی</h3>
        <span class="course-tag-pill course-theme-orange">علوم پایه • ۲ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اساتید گروه آموزشی</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>یکشنبه: <strong>۱۵:۰۰ الی ۱۶:۳۰</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>ساختمان آموزشی صنایع</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۰/۱۹ (۱۰:۳۰ - ۱۲:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('5714098_52', 'کد محاسبات عددی')">
          <span>5714098_52</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

    <!-- ۶. مهارت‌های زندگی دانشجویی -->
    <div class="course-card-detailed">
      <div class="course-card-header">
        <h3 class="course-card-title">مهارت‌های زندگی دانشجویی</h3>
        <span class="course-tag-pill course-theme-lavender">عمومی • ۲ واحد</span>
      </div>
      <ul class="course-card-info-list">
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          <span>استاد: <strong>اکبری سکینه</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>سه‌شنبه: <strong>۱۶:۳۰ الی ۱۸:۰۰</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>مکان: <strong>ساختمان آموزشی صنایع</strong></span>
        </li>
        <li class="course-card-info-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>تاریخ امتحان: <strong>۱۴۰۵/۱۱/۰۵ (۱۳:۳۰ - ۱۶:۳۰)</strong></span>
        </li>
      </ul>
      <div class="course-card-footer">
        <span style="font-size: 0.8rem; color: #64748b;">کد درس و گروه:</span>
        <button class="code-copy-btn" onclick="copyText('5505050_59', 'کد مهارت‌های زندگی')">
          <span>5505050_59</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
        </button>
      </div>
    </div>

  </div>

  <!-- نمای سوم: برنامه امتحانات پایان‌ترم (لیست تک‌خطی مدرن با روزشمار) -->
  <div id="scheduleExamsView" class="schedule-exam-list-view" style="display: none;">

    <!-- امتحان ۱ -->
    <div class="exam-row" data-date="2027-01-09T10:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-orange"></span>
        <div>
          <div class="exam-name">محاسبات عددی</div>
          <div class="exam-sub">۲ واحد • علوم پایه • کد ۵۷۱۴۰۹۸_۵۲</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۱۹ دی ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۰:۳۰ – ۱۲:۳۰</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>ساختمان آموزشی صنایع</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

    <!-- امتحان ۲ -->
    <div class="exam-row" data-date="2027-01-10T10:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-cyan"></span>
        <div>
          <div class="exam-name">نظریه احتمال و کاربردها</div>
          <div class="exam-sub">۳ واحد • علوم پایه • کد ۶۶۶۰۲۵۵_۶۰</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۲۰ دی ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۰:۳۰ – ۱۲:۳۰</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>دانشکده مهندسی</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

    <!-- امتحان ۳ -->
    <div class="exam-row" data-date="2027-01-13T10:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-amber"></span>
        <div>
          <div class="exam-name">مبانی مهندسی برق</div>
          <div class="exam-sub">۳ واحد • تخصصی الزامی • کد ۶۶۶۰۱۰۲_۶۰</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۲۳ دی ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۰:۳۰ – ۱۲:۳۰</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>دانشکده مهندسی</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

    <!-- امتحان ۴ -->
    <div class="exam-row" data-date="2027-01-18T10:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-pink"></span>
        <div>
          <div class="exam-name">استاتیک و مقاومت مصالح</div>
          <div class="exam-sub">۳ واحد • دروس اصلی • کد ۶۶۶۰۱۳۱_۶۰</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۲۸ دی ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۰:۳۰ – ۱۲:۳۰</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>دانشکده مهندسی</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

    <!-- امتحان ۵ -->
    <div class="exam-row" data-date="2027-01-25T10:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-blue"></span>
        <div>
          <div class="exam-name">معادلات دیفرانسیل</div>
          <div class="exam-sub">۳ واحد • علوم پایه • کد ۵۷۱۲۰۹۵_۵۱</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۵ بهمن ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۰:۳۰ – ۱۲:۳۰ (صبح)</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>مکانیک-کلاس</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

    <!-- امتحان ۶ -->
    <div class="exam-row" data-date="2027-01-25T13:30:00+03:30">
      <div class="exam-col-info">
        <span class="exam-status-dot dot-green"></span>
        <div>
          <div class="exam-name">مهارت‌های زندگی دانشجویی</div>
          <div class="exam-sub">۲ واحد • عمومی • کد ۵۵۰۵۰۵۰_۵۹ • استاد اکبری</div>
        </div>
      </div>
      <div class="exam-col-schedule">
        <div class="exam-date-box">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          <span>۵ بهمن ۱۴۰۵</span>
        </div>
        <div class="exam-time-box">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>۱۳:۳۰ – ۱۶:۳۰ (عصر)</span>
        </div>
      </div>
      <div class="exam-col-loc">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        <span>ساختمان آموزشی صنایع</span>
      </div>
      <div class="exam-col-countdown">
        <span class="exam-countdown-badge">در حال محاسبه...</span>
      </div>
    </div>

  </div>

  <!-- پاپ‌آپ اطلاع‌رسانی کپی -->
  <div id="scheduleToast" class="schedule-toast">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span id="toastMessage">با موفقیت کپی شد!</span>
  </div>

</div>

<script>
// تغییر حالت نمایش بین جدول، کارت‌ها و امتحانات
function switchScheduleView(viewType) {
  const tableView = document.getElementById('scheduleTableView');
  const cardsView = document.getElementById('scheduleCardsView');
  const examsView = document.getElementById('scheduleExamsView');
  const tabTableBtn = document.getElementById('tabTableBtn');
  const tabCardsBtn = document.getElementById('tabCardsBtn');
  const tabExamsBtn = document.getElementById('tabExamsBtn');

  // مخفی‌سازی همه
  tableView.style.display = 'none';
  cardsView.style.display = 'none';
  examsView.style.display = 'none';
  tabTableBtn.classList.remove('active');
  tabCardsBtn.classList.remove('active');
  tabExamsBtn.classList.remove('active');

  if (viewType === 'table') {
    tableView.style.display = 'block';
    tabTableBtn.classList.add('active');
    highlightCurrentDayAndTime();
  } else if (viewType === 'cards') {
    cardsView.style.display = 'grid';
    tabCardsBtn.classList.add('active');
  } else if (viewType === 'exams') {
    examsView.style.display = 'flex';
    tabExamsBtn.classList.add('active');
    updateExamCountdowns();
  }
}

// کپی لینک صفحه برای اشتراک‌گذاری
function copyScheduleShareLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('لینک صفحه برای ارسال به دوستان کپی شد!');
  }).catch(() => {
    const input = document.createElement('input');
    input.value = url;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    showToast('لینک صفحه برای ارسال به دوستان کپی شد!');
  });
}

// کپی متن با بازخورد
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} (${text}) کپی شد!`);
  }).catch(() => {
    showToast(`${text} کپی شد!`);
  });
}

// نمایش اعلان Toast
function showToast(msg) {
  const toast = document.getElementById('scheduleToast');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;
  msgEl.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

// تبدیل ارقام انگلیسی به فارسی
function toPersianDigits(str) {
  if (str === null || str === undefined) return '';
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return str.toString().replace(/\d/g, function(d) {
    return farsiDigits[d];
  });
}

// روزشمار هوشمند امتحانات پایان‌ترم
function updateExamCountdowns() {
  const now = new Date();
  const examRows = document.querySelectorAll('.exam-row');

  examRows.forEach(function(row) {
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
window.switchScheduleView = switchScheduleView;

// تشخیص و هایلایت ستون روز جاری و سطر ساعت جاری
function highlightCurrentDayAndTime() {
  const now = new Date();
  const dayIndex = now.getDay(); // 0: Sun, 1: Mon, 2: Tue, 3: Wed, 4: Thu, 5: Fri, 6: Sat
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const dayMap = {
    6: 'sat',
    0: 'sun',
    1: 'mon',
    2: 'tue',
    3: 'wed'
  };

  const todayKey = dayMap[dayIndex];

  // هایلایت ستون روز جاری در جدول
  if (todayKey) {
    const colHeader = document.getElementById('col-' + todayKey);
    if (colHeader && !colHeader.querySelector('.today-tag')) {
      colHeader.classList.add('schedule-col-today');
      const tag = document.createElement('span');
      tag.className = 'today-tag';
      tag.textContent = 'امروز';
      colHeader.appendChild(tag);
    }
    document.querySelectorAll('td[data-day="' + todayKey + '"]').forEach(function(td) {
      td.classList.add('schedule-col-today');
    });
  }

  // پاک کردن نشانگرهای قبلی سطرها
  document.querySelectorAll('.schedule-row-now, .schedule-row-upcoming').forEach(function(row) {
    row.classList.remove('schedule-row-now', 'schedule-row-upcoming');
    const badge = row.querySelector('.now-pulse-badge, .upcoming-badge');
    if (badge) badge.remove();
  });
  document.querySelectorAll('.schedule-cell-today-active').forEach(function(cell) {
    cell.classList.remove('schedule-cell-today-active');
  });

  // تعریف بازه‌های سطرهای ساعت جدول
  const timeSlots = [
    { id: 'row-time-0900', start: 540, end: 630 },  // 09:00 - 10:30
    { id: 'row-time-1330', start: 810, end: 900 },  // 13:30 - 15:00
    { id: 'row-time-1500', start: 900, end: 990 },  // 15:00 - 16:30
    { id: 'row-time-1630', start: 990, end: 1080 }  // 16:30 - 18:00
  ];

  let matched = false;
  for (let i = 0; i < timeSlots.length; i++) {
    const slot = timeSlots[i];
    // اگر ساعت جاری دقیقا در بازه این سطر باشد
    if (currentMinutes >= slot.start && currentMinutes <= slot.end) {
      const tr = document.getElementById(slot.id);
      if (tr) {
        tr.classList.add('schedule-row-now');
        const timeCell = tr.querySelector('.schedule-time-cell');
        if (timeCell && !timeCell.querySelector('.now-pulse-badge')) {
          const badge = document.createElement('div');
          badge.className = 'now-pulse-badge';
          badge.textContent = 'هم‌اکنون';
          timeCell.appendChild(badge);
        }

        // اگر امروز روز کلاس‌دار باشد، خانه درس فعال هم درخشان شود
        if (todayKey) {
          const activeCell = tr.querySelector('td[data-day="' + todayKey + '"]');
          if (activeCell && activeCell.querySelector('.course-badge-box')) {
            activeCell.classList.add('schedule-cell-today-active');
          }
        }
      }
      matched = true;
      break;
    }
  }

  // اگر هنوز در طول روز است و در کلاس جاری نیستیم، نوبت بعدی را در روز کلاس مشخص کن
  if (!matched && todayKey) {
    for (let i = 0; i < timeSlots.length; i++) {
      const slot = timeSlots[i];
      if (currentMinutes < slot.start) {
        const tr = document.getElementById(slot.id);
        if (tr) {
          tr.classList.add('schedule-row-upcoming');
          const timeCell = tr.querySelector('.schedule-time-cell');
          if (timeCell && !timeCell.querySelector('.upcoming-badge')) {
            const badge = document.createElement('div');
            badge.className = 'upcoming-badge';
            badge.textContent = 'نوبت بعدی';
            timeCell.appendChild(badge);
          }
        }
        break;
      }
    }
  }
}

// اجرای اولیه هنگام بارگذاری صفحه و به‌روزرسانی متناوب
document.addEventListener('DOMContentLoaded', function() {
  highlightCurrentDayAndTime();
  updateExamCountdowns();
  setInterval(function() {
    highlightCurrentDayAndTime();
    updateExamCountdowns();
  }, 30000);
});
</script>
