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

## فهرست جلسات و درس‌نامه‌ها

<div class="resource-list">

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
