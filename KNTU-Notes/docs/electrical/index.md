---
title: مبانی مهندسی برق و کاربردهای صنعتی
description: یادداشت‌ها، مفاهیم تحلیلی، تحلیل مدارهای الکتریکی DC و AC، مدارهای مرتبه اول و دوم، ماشین‌های الکتریکی و مدل‌سازی سیستم‌های مهندسی
tags:
  - برق
  - مدارهای_الکتریکی
  - مهندسی_صنایع
  - سیستم‌های_مرتبه_دوم
  - اتوماسیون
---

# درس مبانی مهندسی برق و تحلیل سیستم‌ها

## مدارهای الکتریکی، ماشین‌های صنعتی و مدل‌سازی دینامیکی سیستم‌ها

> [!NOTE] معرفی دوره
> این بخش به یادداشت‌ها، شهودهای مهندسی، تحلیل مدارهای الکتریکی خطی و کاربردهای مستقیم مفاهیم برق در **مدیریت خطوط تولید، اتوماسیون صنعتی، لجستیک و مهندسی صنایع** اختصاص دارد.

---

<div class="electrical-hero-card" style="background: linear-gradient(135deg, rgba(234, 179, 8, 0.12) 0%, rgba(245, 158, 11, 0.08) 100%); border: 1px solid rgba(234, 179, 8, 0.3); border-radius: var(--radius-card, 16px); padding: 1.5rem; margin-bottom: 2rem;">
  <div style="display: flex; align-items: center; gap: 1.25rem; flex-wrap: wrap;">
    <div style="background: linear-gradient(135deg, #eab308, #ca8a04); color: white; width: 50px; height: 50px; border-radius: 14px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(234, 179, 8, 0.4); flex-shrink: 0;">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
    </div>
    <div style="flex: 1; min-width: 250px;">
      <h3 style="margin: 0 0 0.35rem 0; font-size: 1.15rem; color: var(--color-base-content);">«مدار فقط یک مشت سیم و قطعه نیست؛ زبان مدل‌سازی جریان انرژی، اطلاعات و مواد در جهان است»</h3>
      <p style="margin: 0; font-size: 0.88rem; color: var(--color-base-content, #64748b); opacity: 0.85; line-height: 1.6;">
        از قوانین کیرشهف تا پدیده‌های تشدید، ترانسفورماتورها و تحلیل رفتار گذرای سیستم‌ها در صنعت و مهندسی صنایع.
      </p>
    </div>
  </div>
</div>

## مقالات برگزیده و ارائه‌های تحلیلی

<div class="resource-list">

  <a class="resource-card" href="second-order-circuits/" style="border: 1px solid rgba(234, 179, 8, 0.4); background: linear-gradient(90deg, rgba(234, 179, 8, 0.06) 0%, transparent 100%);">
    <div class="resource-card-main">
      <div class="resource-card-icon" style="color: #eab308;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      </div>
      <span class="resource-card-title" style="font-weight: 700;">از مدار تا زنجیره تأمین: کاربردهای مدارهای مرتبه دوم در صنعت و مهندسی صنایع</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge" style="background: rgba(234, 179, 8, 0.18); color: #ca8a04; border-color: rgba(234, 179, 8, 0.4);">مقاله تحلیلی و ارائه کلاسی</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

</div>

---

## نقشه‌راه سرفصل‌های آموزشی مبانی مهندسی برق

1. **مفاهیم پایه و مدارهای جریان مستقیم (DC):**
   - بار، جریان، ولتاژ، انرژی و توان
   - قوانین مداری KCL و KVL
   - روش‌های تحلیل گره و مش، قضایای تونن و نورتن
2. **عناصر ذخیره‌کننده انرژی و مدارهای مرتبه اول:**
   - رفتار سلف ($L$) و خازن ($C$)
   - تحلیل پاسخ پله و پاسخ گذرای مدارهای $RC$ و $RL$ (پاسخ یکنواخت نمایی)
3. **مدارهای مرتبه دوم ($RLC$):**
   - معادله مشخصه و فرکانس طبیعی ($\omega_0$)
   - سه رژیم رفتاری: میرای ضعیف، میرایی بحرانی و میرای شدید
   - پدیده نوسان، تشدید (Resonance) و ضریب کیفیت ($Q$)
4. **تحلیل مدارهای جریان متناوب سینوسی (AC):**
   - فازورها، امپدانس و ادمیتانس مختلط
   - توان لحظه‌ای، اکتیو ($P$)، راکتیو ($Q$)، ظاهری ($S$) و ضریب توان ($\cos\phi$)
   - اصلاح ضریب توان با بانک‌های خازنی
5. **سیستم‌های سه‌فاز و ماشین‌های الکتریکی:**
   - اتصالات ستاره و مثلث، بارهای متعادل
   - ترانسفورماتورهای قدرت و ایده‌آل
   - موتورهای القایی سه‌فاز و کاربردهای صنعتی
