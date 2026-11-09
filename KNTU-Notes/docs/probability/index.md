---
title: درس نظریه احتمال و آمار مهندسی
description: یادداشت‌ها، مفاهیم شهودی، اصول شمارش، متغیرهای تصادفی و توزیع‌های آماری بر مبنای دوره‌های استاندارد بین‌المللی (Stat 110 هاروارد)
tags:
  - آمار
  - احتمال
  - ریاضیات
  - مهندسی
---

# درس نظریه احتمال و کاربردها
## مفاهیم بنیادین احتمال، اصول شمارش، متغیرهای تصادفی و مدل‌سازی عدم قطعیت

> [!NOTE] معرفی دوره
> این بخش به یادداشت‌های جامع، شهودهای ریاضی، حل مسائل کلاسیک و تحلیل‌های درس **نظریه احتمال و کاربردها (Probability Theory & Applications)** اختصاص دارد که با الهام از مباحث دوره شناخته‌شده **Stat 110 دانشگاه هاروارد (تدریس پروفسور Joe Blitzstein)** و سرفصل‌های رسمی تدوین شده است.

---

<div class="probability-hero-card" style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%); border: 1px solid rgba(99, 102, 241, 0.25); border-radius: var(--radius-card, 16px); padding: 1.5rem; margin-bottom: 2rem;">
  <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
    <div style="background: #6366f1; color: white; width: 48px; height: 48px; border-radius: 12px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35);">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    </div>
    <div style="flex: 1; min-width: 240px;">
      <h3 style="margin: 0 0 0.35rem 0; font-size: 1.15rem; color: var(--color-base-content);">«ریاضیات علم قطعیت است و آمار و احتمال، منطق سنجش عدم قطعیت»</h3>
      <p style="margin: 0; font-size: 0.88rem; color: var(--color-base-content, #64748b); opacity: 0.85;">
        بررسی علمی پدیده‌های تصادفی از بازی‌های شانس پاسکال و فرما تا ژنتیک، فیزیک کوانتوم و هوش مصنوعی مدرن.
      </p>
    </div>
  </div>
</div>

## جعبه‌ابزار و استراتژی‌های حل مسئله

<div class="probability-featured-box" style="margin-bottom: 2rem; background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(99, 102, 241, 0.07) 100%); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: var(--radius-card, 16px); padding: 1.5rem; position: relative; overflow: hidden; box-shadow: 0 8px 24px -4px rgba(245, 158, 11, 0.15);">
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 1.25rem; flex-wrap: wrap;">
    <div style="display: flex; align-items: flex-start; gap: 1rem; flex: 1; min-width: 280px;">
      <div style="background: linear-gradient(135deg, #f59e0b, #d97706); color: white; width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(245, 158, 11, 0.4); flex-shrink: 0; margin-top: 2px;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      </div>
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem; flex-wrap: wrap;">
          <span style="font-size: 0.75rem; font-weight: 700; color: #d97706; background: rgba(245, 158, 11, 0.18); border: 1px solid rgba(245, 158, 11, 0.4); padding: 2px 10px; border-radius: 20px;">⭐ راهنمای استراتژیک هاروارد</span>
          <span style="font-size: 0.75rem; color: var(--color-base-content); opacity: 0.7;">قوانین سه‌گانه جو بلیتزستین (Stat 110)</span>
        </div>
        <h3 style="margin: 0 0 0.35rem 0; font-size: 1.15rem; color: var(--color-base-content); font-weight: 700;">
          اصول سه‌گانه تفکر و حل مسئله در احتمال
        </h3>
        <p style="margin: 0; font-size: 0.88rem; color: var(--color-base-content); opacity: 0.85; line-height: 1.6;">
          چگونه در دام شهودهای غلط نیفتیم؟ سه اصل حیاتی شامل <b>حفظ عقل سلیم و نمادهای خود‌تبیین‌گر</b>، <b>اعتبارسنجی سریع با حالت‌های ساده و مرزی</b>، و <b>راز برچسب‌گذاری افراد و اشیاء برای تضمین هم‌شانسی</b>.
        </p>
      </div>
    </div>
    <div>
      <a class="sarv-btn-primary" href="اصول سه‌گانه تفکر در احتمال/" style="display: inline-flex; align-items: center; gap: 0.5rem; background: linear-gradient(135deg, #f59e0b, #d97706); color: white; padding: 0.65rem 1.25rem; border-radius: 12px; font-weight: 700; font-size: 0.88rem; text-decoration: none; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35); transition: all 0.2s ease;">
        <span>مطالعه اصول تفکر</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      </a>
    </div>
  </div>
</div>

## فهرست جلسات و درس‌نامه‌ها

<div class="resource-list">

  <a class="resource-card" href="اصول سه‌گانه تفکر در احتمال/" style="border: 1px solid rgba(245, 158, 11, 0.35); background: linear-gradient(90deg, rgba(245, 158, 11, 0.05) 0%, transparent 100%);">
    <div class="resource-card-main">
      <div class="resource-card-icon" style="color: #f59e0b;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </div>
      <span class="resource-card-title" style="font-weight: 700;">اصول سه‌گانه تفکر و حل مسئله در احتمال (Stat 110 Survival Guide)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge" style="background: rgba(245, 158, 11, 0.18); color: #d97706; border-color: rgba(245, 158, 11, 0.4);">جعبه‌ابزار استراتژیک</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

  <a class="resource-card" href="جلسه اول/">
    <div class="resource-card-main">
      <div class="resource-card-icon" style="color: #6366f1;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
      </div>
      <span class="resource-card-title">جلسه اول: مقدمه، تعریف شهودی احتمال و اصول شمارش (The Four Sampling Cases)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge" style="background: rgba(99, 102, 241, 0.15); color: #6366f1; border-color: rgba(99, 102, 241, 0.3);">درس‌نامه جامع</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

  <a class="resource-card" href="جلسه دوم/">
    <div class="resource-card-main">
      <div class="resource-card-icon" style="color: #6366f1;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
      </div>
      <span class="resource-card-title">جلسه دوم: اثبات داستانی (Story Proof) و فرمول خط و توپ (Stars & Bars)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge" style="background: rgba(99, 102, 241, 0.15); color: #6366f1; border-color: rgba(99, 102, 241, 0.3);">اثبات تحلیلی و شهودی</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

</div>

---

## نقشه‌راه سرفصل‌های آموزشی

1. **مبانی احتمال و اصول شمارش:**
   - تعریف شهودی و کلاسیک احتمال و چالش‌های آن
   - جدول ۴ گانه نمونه‌گیری (با/بدون جایگذاری، با/بدون ترتیب)
   - روش چوب و ستاره (Stars and Bars / Bose-Einstein)
   - پارادوکس روز تولد (Birthday Problem)
2. **احتمال شرطی و استقلال:**
   - قانون احتمال کل (Law of Total Probability)
   - قضیه بیز (Bayes' Rule) و تفکر بیزی
   - استقلال پیشامدها و مغالطه‌های شهودی (Prosecutor's Fallacy)
3. **متغیرهای تصادفی گسسته:**
   - تابع جرم احتمال (PMF) و تابع توزیع تجمعی (CDF)
   - توزیع برنولی، دو‌جمله‌ای (Binomial)، هندسی (Geometric) و فوق‌هندسی (Hypergeometric)
   - توزیع پواسون (Poisson) به عنوان تقریب دو‌جمله‌ای
4. **امید ریاضی و واریانس:**
   - خطی بودن امید ریاضی (Linearity of Expectation)
   - روش متغیرهای نشانگر (Indicator Random Variables) و کاربرد در شمارش
   - کوواریانس، همبستگی و واریانس مجموع متغیرها
5. **متغیرهای تصادفی پیوسته:**
   - تابع چگالی احتمال (PDF) و ویژگی‌های آن
   - توزیع یکنواخت (Uniform)، نمایی (Exponential) و خاصیت بی‌حافظگی
   - توزیع نرمال (گاوسی) و قضایای حدی (قانون اعداد بزرگ و قضیه حد مرکزی CLT)
