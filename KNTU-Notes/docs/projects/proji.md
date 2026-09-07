---
title: شبیه‌ساز سه‌بعدی حرکت پرتابه (Proji)
---

# شبیه‌ساز سه‌بعدی حرکت پرتابه (Proji)
## 3D Projectile Motion Simulator

<div class="sarv-poster-card" style="text-align: center; margin: 1.5rem 0;">
  <img src="../assets/proji-banner.png" alt="Proji Banner" style="max-height: 240px; width: auto; margin: 0 auto; display: block; border: none; box-shadow: none;">
</div>

<div class="admonition info">
<p class="admonition-title">اطلاعات و دسترسی به مخزن</p>
<p>
پروژه متن‌باز شبیه‌ساز فیزیکی سه‌بعدی برای مدل‌سازی دینامیکی و سینماتیکی حرکت پرتابه در شرایط مختلف محیطی.
<br>
🔗 <strong>مخزن در گیت‌هاب:</strong> <a href="https://github.com/mjb4khshi/proji" target="_blank" rel="noopener">github.com/mjb4khshi/proji</a>
</p>
</div>

---

### 🎯 درباره پروژه
پروژه **Proji** یک ابزار تعاملی و شبیه‌ساز سه‌بعدی است که به منظور تجسم دقیق معادلات دیفرانسیل حاکم بر حرکت پرتابه و مفاهیم مکانیک کلاسیک فیزیک دانشگاهی طراحی شده است. این ابزار به کاربر اجازه می‌دهد تا با تغییر متغیرهای فیزیکی نظیر زاویه شلیک، سرعت اولیه، نیروی مقاومت هوا، گرانش و شرایط مرزی، مسیر حرکت پرتابه را به صورت ریل‌تایم در یک محیط سه‌بعدی مشاهده و تحلیل کند.

```
                  ▲ ارتفاع (Y)
                  │          *  *  *  (نقطه اوج)
                  │       *           *
       (v₀, θ) ↗  │     *               *
     ─────────────┼────*──────────────────*──────► برد پرتابه (X)
                 (0,0)                    R
```

---

### ✨ ویژگی‌ها و قابلیت‌های کلیدی

<div class="resource-list">

  <div class="resource-card" style="cursor: default;">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6Z"/></svg>
      </div>
      <div>
        <span class="resource-card-title">رندرینگ و تجسم سه‌بعدی (3D Physics Simulation)</span>
        <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">رسم دقیق مسیر منحنی بالستیک در فضای سه‌بعدی به صورت فریم‌به‌فریم و تعاملی</div>
      </div>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">فیزیک ۳ بعدی</span>
    </div>
  </div>

  <div class="resource-card" style="cursor: default;">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
      </div>
      <div>
        <span class="resource-card-title">محاسبه پارامترهای حرکتی در لحظه</span>
        <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">محاسبه برد بیشینه ($R$)، ارتفاع اوج ($H_{\max}$)، زمان کل پرواز ($T_{\text{flight}}$) و سرعت در هر لحظه</div>
      </div>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">معادلات کینماتیک</span>
    </div>
  </div>

  <div class="resource-card" style="cursor: default;">
    <div class="resource-card-main">
      <div class="resource-card-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/></svg>
      </div>
      <div>
        <span class="resource-card-title">مدل‌سازی مقاومت هوا و شرایط واقعی</span>
        <div style="font-size: 0.8rem; color: #64748b; margin-top: 0.2rem;">امکان فعال‌سازی نیروی اصطکاک درگ (Air Drag / Friction) بر حسب ضریب پسار و سرعت</div>
      </div>
    </div>
    <div class="resource-card-side">
      <span class="resource-badge">نیروهای مقاومتی</span>
    </div>
  </div>

</div>

---

### 🧮 مبانی علمی و ریاضی پروژه

حرکت پرتابه در حالت پایه بدون اصطکاک از ترکیب دو حرکت مستقل افقی یکنواخت و عمودی با شتاب ثابت گرانش ($g$) پیروی می‌کند:

$$x(t) = (v_0 \cos\theta) \cdot t$$

$$y(t) = (v_0 \sin\theta) \cdot t - \frac{1}{2}gt^2$$

و با حذف زمان ($t$) معادله مسیر سهمی حاصل می‌شود:

$$y = x \tan\theta - \frac{g}{2v_0^2 \cos^2\theta} x^2$$

در حالت اعمال مقاومت هوا، معادلات دیفرانسیل جفت‌شده مرتبه اول با روش‌های تقریب عددی (نظیر اویلر یا رانگ-کوتا) حل و موقعیت پرتابه در هر گام زمانی بازسازی می‌شود:

$$m \frac{d\vec{v}}{dt} = m\vec{g} - \frac{1}{2} C_d \rho A |\vec{v}|\vec{v}$$

---

### 🚀 مشاهده سورس‌کد و مشارکت
برای مشاهده ساختار کدها، گزارش باگ یا توسعه پروژه می‌توانید از پیوند زیر استفاده کنید:

<div style="margin-top: 1.25rem;">
  <a href="https://github.com/mjb4khshi/proji" target="_blank" rel="noopener noreferrer" class="home-btn home-btn-github" style="display: inline-flex;">
    <svg class="home-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
    <span>مشاهده مخزن در گیت‌هاب (mjb4khshi/proji)</span>
  </a>
</div>
