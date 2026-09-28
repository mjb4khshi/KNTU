# درس استاتیک و مقاومت مصالح
## تحلیل تعادل سازه‌ها، بررسی تنش، کرنش و رفتار مکانیکی مصالح

> [!NOTE]
> این صفحه به یادداشت‌ها، جزوات کلاسی، خلاصه فرمول‌ها و بانک تمرین‌های درس **استاتیک** و **مقاومت مصالح** اختصاص دارد.  
> لینک‌ها و فایل‌های جزوات به تدریج بر اساس جلسات درسی در کارت‌های ذیل درج خواهند شد.

---

### 🏗️ بخش اول: مباحث استاتیک (ایستایی)

#### ۱. اصول و مفاهیم پایه‌ای استاتیک
- سیستم آحاد و بردارهای نیرو، گشتاور حول نقطه و خط، قضیه وارینون.
- دیاگرام جسم آزاد (FBD) و شرایط تعادل ذره و جسم صلب در صفحه و فضا:
  $$\sum \vec{F} = 0, \quad \sum \vec{M} = 0$$

#### ۲. سازه‌ها، خرپاها و قاب‌ها
- تحلیل خرپاهای دوبعدی با روش مفصل‌ها (Method of Joints) و روش مقاطع (Method of Sections).
- اعضای با نیروی صفر (Zero-force members) و بهینه‌سازی تحلیل.
- تحلیل قاب‌ها و ماشین‌ها (Frames and Machines) با جداسازی اعضا.

#### ۳. نیروهای داخلی و نمودارهای برش و خمش
- تعیین نیروهای محوری ($N$)، برشی ($V$) و لنگر خمشی ($M$) در هر مقطع دلخواه.
- رسم دقیق نمودارهای نیروی برشی ($V-x$) و لنگر خمشی ($M-x$) در تیرها با روابط دیفرانسیلی:
  $$\frac{dV}{dx} = -w(x), \quad \frac{dM}{dx} = V(x)$$

#### ۴. اصطکاک و خواص سطوح
- اصطکاک خشک (کولن)، گوه، پیچ و تسمه.
- مرکز هندسی (Centroid)، مرکز ثقل و ممان اینرسی سطوح ($I_x, I_y$) به همراه قضیه محورهای موازی (اشتاینر).

---

### ⚙️ بخش دوم: مقاومت مصالح (مکانیک مواد)

#### ۱. تنش و کرنش (Stress & Strain)
- تنش نرمال محوری ($\sigma = \frac{P}{A}$) و تنش برشی میانگین ($\tau = \frac{V}{A}$).
- دیاگرام تنش-کرنش مصالح، قانون هوک ($\sigma = E \epsilon$) و ضریب پواسون ($\nu$).
- تغییر شکل محوری میله‌ها ($\delta = \frac{PL}{AE}$) و مسائل نامعین استاتیکی محوری.
- اثرات تغییرات حرارتی و تمرکز تنش.

#### ۲. پیچش در میله‌های مدور (Torsion)
- زاویه پیچش ($\phi = \frac{TL}{JG}$) و فرمول تنش برشی پیچشی ($\tau = \frac{T\rho}{J}$).
- میله‌های با مقطع توخالی و لوله‌های جداره‌نازک.

#### ۳. خمش خالص و تنش‌های خمشی در تیرها
- تئوری خمش الاستیک و فرمول تنش خمشی ناشی از لنگر:
  $$\sigma = -\frac{My}{I}$$
- مدول مقطع ($S = \frac{I}{c}$) و طراحی تیرها با توجه به تنش مجاز.
- تنش‌های برشی در تیرها با فرمول ژوراوسکی ($\tau = \frac{VQ}{It}$).

#### ۴. تبدیل تنش، تنش‌های اصلی و دایره مور
- تنش در صفحات مایل و به دست آوردن تنش‌های اصلی ($\sigma_1, \sigma_2$) و حداکثر تنش برشی ($\tau_{max}$).
- تحلیل ترسیمی با **دایره مور (Mohr's Circle)** برای تنش‌های دوبعدی.
- معیارهای تسلیم ماده (Tresca و von Mises).

#### ۵. خیز تیرها و کمانش ستون‌ها
- به دست آوردن معادله منحنی الاستیک با روش انتگرال‌گیری دوگانه ($EI \frac{d^2 y}{dx^2} = M(x)$).
- پایداری سازه و فرمول کمانش اویلر برای ستون‌ها ($P_{cr} = \frac{\pi^2 EI}{(KL)^2}$).

---

### 📂 جزوات کلاسی و منابع درسی

<div class="resource-list">

  <a class="resource-card" href="https://drive.google.com/" target="_blank" rel="noopener">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <span class="resource-card-title">جزوه مدون استاتیک دانشگاه خواجه نصیر (بخش اول: تعادل و خرپاها)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">جزوه درسی</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

  <a class="resource-card" href="https://drive.google.com/" target="_blank" rel="noopener">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <span class="resource-card-title">جزوه مدون مقاومت مصالح (بخش دوم: تنش، کرنش و خمش تیرها)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">جزوه درسی</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

  <a class="resource-card" href="https://drive.google.com/" target="_blank" rel="noopener">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>
      </div>
      <span class="resource-card-title">مجموعه تمرینات کلاسی و مسائل تحلیلی حل‌شده امتحانی</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge resource-badge-exam">تمرینات</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

</div>

#استاتیک #مقاومت_مصالح #مهندسی #سازه #تنش_کرنش #دانشگاه
