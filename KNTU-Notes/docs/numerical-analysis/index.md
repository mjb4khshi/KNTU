# درس محاسبات عددی و تحلیل الگوریتم‌ها
## روش‌های تقریبی حل معادلات، درونیابی، مشتق‌گیری و انتگرال‌گیری عددی

> [!NOTE]
> این صفحه به نوت‌ها، تشریح روش‌های حل، الگوریتم‌ها و پیاده‌سازی‌های درس **محاسبات عددی** اختصاص دارد.  
> فایل‌های جزوه، کدهای پیاده‌سازی‌شده و بانک مسائل امتحانی در بخش منابع ذیل قرار می‌گیرند.

---

### 💻 سرفصل‌های اصلی و روش‌های محاسباتی

#### ۱. نظریه خطاها و محاسبات علمی
- خطای مطلق و نسبی، خطای گرد کردن (Round-off) و خطای قطع کردن (Truncation).
- نمایش اعداد در ممیز شناور (Floating Point) و خطای از دست رفتن ارقام بااهمیت (Catastrophic cancellation).
- انتشار خطا در اعمال جبری اصلی.

#### ۲. حل عددی معادلات غیرخطی $f(x) = 0$
- **روش نصف کردن (Bisection):** همگرایی خطی و تضمین‌شده بر اساس قضیه مقدار میانی.
- **روش نقطه ثابت (Fixed-point iteration):** تبدیل به $x = g(x)$ و شرط همگرایی $|g'(x)| < 1$.
- **روش نیوتون - رافسون (Newton-Raphson):** فرمول تکرار با همگرایی درجه دو (مربعی):
  $$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$
- **روش وتری (Secant) و روش موقعیت کاذب (Regula Falsi):** جایگزینی مشتق با خط قاطع.

#### ۳. درونیابی و برازش منحنی (Interpolation & Curve Fitting)
- چندجمله‌ای درونیاب لاگرانژ (Lagrange Polynomials).
- چندجمله‌ای درونیاب نیوتون با استفاده از جدول تفاضلات تقسیم‌شده (Divided Differences).
- خطای درونیابی و پدیده رونگه (Runge's Phenomenon).
- روش حداقل مربعات (Least Squares Method) برای برازش خطی و غیرخطی داده‌های تجربی.

#### ۴. مشتق‌گیری و انتگرال‌گیری عددی (Numerical Calculus)
- فرمول‌های تفاضلی پیشرو، پسرو و مرکزی با مراتب خطای مختلف:
  $$f'(x) \approx \frac{f(x+h) - f(x-h)}{2h} + \mathcal{O}(h^2)$$
- قاعده ذوزنقه‌ای (Trapezoidal Rule) و قاعده سیمپسون ۱/۳ و ۳/۸ با تقریب چندجمله‌ای‌های درجه ۲ و ۳.
- روش تربیع گوسی (Gauss-Legendre Quadrature) برای بیشترین درجه دقت جبری با کمترین نقاط ارزیابی.

#### ۵. حل دستگاه‌های معادلات جبری خطی
- روش حذفی گاوس (Gaussian Elimination) با محورگیری جزئی (Partial Pivoting) جهت کاهش خطای محاسباتی.
- تجزیه ماتریسی $LU$ (روش دُلیتِل و کرات).
- روش‌های تکراری: روش ژاکوبی (Jacobi) و روش گاوس - سایدل (Gauss-Seidel) به همراه شرط ماتریس قطربزرگ (Diagonally Dominant).

#### ۶. حل عددی معادلات دیفرانسیل معمولی (ODE)
- حل مسئله مقدار اولیه $y' = f(x, y)$ با شرط $y(x_0) = y_0$.
- روش اویلر و اویلر اصلاح‌شده (روش هویین).
- روش‌های قدرتمند **رونگه - کوتا (Runge-Kutta)** مرتبه دوم و مرتبه چهارم (RK4):
  $$y_{n+1} = y_n + \frac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$$

---

### 📂 جزوات کلاسی، منابع و پیاده‌سازی‌ها

<div class="resource-list">

  <a class="resource-card" href="https://drive.google.com/" target="_blank" rel="noopener">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
      </div>
      <span class="resource-card-title">جزوه مدون و اسلایدهای کلاسی محاسبات عددی دانشگاه خواجه نصیر</span>
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
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      </div>
      <span class="resource-card-title">کدهای پیاده‌سازی پایتون و متلب روش‌های عددی (الگوریتم‌های گام به گام)</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">کدها و الگوریتم‌ها</span>
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
      <span class="resource-card-title">مجموعه نمونه سوالات امتحانی به همراه پاسخ تشریحی و محاسبات دستی</span>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge resource-badge-exam">امتحانات</span>
      <span class="resource-open-icon">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      </span>
    </div>
  </a>

</div>

#محاسبات_عددی #روش_های_عددی #الگوریتم #ریاضیات #دانشگاه
