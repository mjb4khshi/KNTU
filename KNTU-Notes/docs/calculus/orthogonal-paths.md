---
title: مسیرهای متعامد
description: مفهوم، روش محاسبه در دستگاه مختصات دکارتی و قطبی، و کاربردهای فیزیکی مسیرهای متعامد در معادلات دیفرانسیل
tags:
  - ریاضیات
  - معادلات_دیفرانسیل
  - هندسه_تحلیلی
  - فیزیک_ریاضی
---

# مسیرهای متعامد

**مسیرهای متعامد (Orthogonal Trajectories)** به دو خانواده از منحنی‌ها در صفحه گفته می‌شود که در هر نقطه از تقاطعشان، بر یکدیگر عمود هستند؛ یعنی خطوط مماس بر این دو منحنی در نقطه برخورد، با هم زاویه ۹۰ درجه می‌سازند. این مفهوم در معادلات دیفرانسیل حلقه اتصال میان **میدان‌های اسکالر** (مثل دما، پتانسیل یا ارتفاع) و **میدان‌های برداری** (مثل جریان گرما، میدان الکتریکی یا مسیر حرکت سیال) است.

---

## آزمایشگاه و شبیه‌ساز تعاملی

در این ابزار تعاملی می‌توانید خانواده‌های مختلف منحنی‌ها (دایره‌ها و پرتوهای شعاعی، سهمی‌ها و بیضی‌ها، هذلولی‌های متعامد) را انتخاب کنید، تراکم منحنی‌ها را تغییر دهید، با حرکت ماوس روی صفحه یا لمس آن نقطه تقاطع را جابه‌جا کنید و تعامد خطوط مماس ($m_1 \cdot m_2 = -1$) را به همراه نماد زاویه قائمه به صورت زنده و شهودی مشاهده نمایید:

<div class="ortho-sim-card">
  <div class="ortho-sim-toolbar">
    <div class="sim-ctrl-group">
      <label for="curveFamilySelect">انتخاب خانواده منحنی:</label>
      <select id="curveFamilySelect" class="sim-select">
        <option value="parabolas">سهمی‌ها ($y = c x^2$) ⟂ بیضی‌ها ($x^2/2 + y^2 = k$)</option>
        <option value="hyperbolas">هذلولی‌ها ($x y = c$) ⟂ هذلولی‌های مزدوج ($x^2 - y^2 = k$)</option>
        <option value="circles">دایره‌های هم‌مرکز ($x^2 + y^2 = c^2$) ⟂ خطوط شعاعی ($y = k x$)</option>
      </select>
    </div>
    <div class="sim-ctrl-group">
      <label for="densitySlider">تعداد منحنی‌ها:</label>
      <input type="range" id="densitySlider" min="3" max="10" value="6" class="sim-slider">
      <span id="densityVal" class="sim-val">۶</span>
    </div>
    <div class="sim-ctrl-group">
      <label class="sim-checkbox-label">
        <input type="checkbox" id="showTangentsCheck" checked>
        <span>نمایش خطوط مماس و زاویه قائمه</span>
      </label>
    </div>
  </div>

  <div class="ortho-canvas-wrapper">
    <canvas id="orthoCanvas" width="800" height="500"></canvas>
    <div class="ortho-legend">
      <div class="legend-item"><span class="legend-color legend-primary"></span><span>خانواده اصلی $F(x, y, c) = 0$</span></div>
      <div class="legend-item"><span class="legend-color legend-ortho"></span><span>مسیرهای متعامد $G(x, y, k) = 0$</span></div>
      <div class="legend-item"><span class="legend-color legend-tangent"></span><span>خطوط مماس (زاویه ۹۰°)</span></div>
    </div>
    <div class="ortho-tooltip" id="orthoTooltip">برای بررسی مماس‌ها، ماوس را روی صفحه حرکت دهید</div>
  </div>
</div>

<style>
.ortho-sim-card {
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 55%, transparent);
  border-radius: var(--radius-card);
  padding: 1.5rem;
  margin: 1.5rem 0 2.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.ortho-sim-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid color-mix(in oklab, var(--color-base-500) 40%, transparent);
}
.sim-ctrl-group {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.88rem;
  font-weight: 600;
}
.sim-select, .sim-slider {
  background: var(--color-base);
  color: var(--color-base-content);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 70%, transparent);
  border-radius: var(--radius-button);
  padding: 0.4rem 0.8rem;
  font-family: inherit;
  font-size: 0.85rem;
  outline: none;
}
.sim-val {
  min-width: 1.5rem;
  color: var(--color-primary);
  font-weight: 700;
}
.sim-checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
}
.ortho-canvas-wrapper {
  position: relative;
  border-radius: calc(var(--radius-card) - 6px);
  overflow: hidden;
  background: #090e17;
  border: 1px solid #1e293b;
  box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.4);
}
#orthoCanvas {
  display: block;
  width: 100%;
  height: auto;
  cursor: crosshair;
}
.ortho-legend {
  position: absolute;
  top: 12px;
  right: 14px;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  padding: 8px 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 0.8rem;
  color: #e2e8f0;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.legend-color {
  width: 14px;
  height: 4px;
  border-radius: 2px;
}
.legend-primary { background: #38bdf8; box-shadow: 0 0 6px #38bdf8; }
.legend-ortho { background: #f43f5e; box-shadow: 0 0 6px #f43f5e; }
.legend-tangent { background: #22c55e; height: 10px; width: 10px; border-radius: 50%; }

.ortho-tooltip {
  position: absolute;
  bottom: 12px;
  left: 14px;
  background: rgba(15, 23, 42, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 0.8rem;
  color: #94a3b8;
  pointer-events: none;
}
</style>

<script>
function initOrthoSimulation() {
  const canvas = document.getElementById('orthoCanvas');
  const familySelect = document.getElementById('curveFamilySelect');
  const densitySlider = document.getElementById('densitySlider');
  const densityVal = document.getElementById('densityVal');
  const showTangentsCheck = document.getElementById('showTangentsCheck');
  const tooltip = document.getElementById('orthoTooltip');

  if (!canvas || !familySelect || !densitySlider) return;
  const ctx = canvas.getContext('2d');

  const W = canvas.width;
  const H = canvas.height;
  const originX = W / 2;
  const originY = H / 2;
  const scale = 45; // پیکسل به ازای هر واحد ریاضی

  let mouseX = originX + 2.5 * scale;
  let mouseY = originY - 1.8 * scale;

  function toScreenX(x) { return originX + x * scale; }
  function toScreenY(y) { return originY - y * scale; }
  function toMathX(px) { return (px - originX) / scale; }
  function toMathY(py) { return -(py - originY) / scale; }

  function drawGrid() {
    ctx.clearRect(0, 0, W, H);

    // محورها
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#1e293b';
    ctx.beginPath();
    for (let x = -10; x <= 10; x++) {
      ctx.moveTo(toScreenX(x), 0);
      ctx.lineTo(toScreenX(x), H);
    }
    for (let y = -8; y <= 8; y++) {
      ctx.moveTo(0, toScreenY(y));
      ctx.lineTo(W, toScreenY(y));
    }
    ctx.stroke();

    // محور مختصات اصلی
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#475569';
    ctx.beginPath();
    ctx.moveTo(0, originY); ctx.lineTo(W, originY);
    ctx.moveTo(originX, 0); ctx.lineTo(originX, H);
    ctx.stroke();
  }

  function renderSimulation() {
    drawGrid();

    const family = familySelect.value;
    const count = parseInt(densitySlider.value, 10);
    const showTangents = showTangentsCheck ? showTangentsCheck.checked : true;

    if (family === 'parabolas') {
      // اصلی: y = c * x^2 (سهمی‌ها به رنگ آبی روشن)
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      for (let i = 1; i <= count; i++) {
        const c = (i * 0.25);
        [c, -c].forEach(valC => {
          ctx.beginPath();
          let started = false;
          for (let px = 0; px <= W; px += 3) {
            const mx = toMathX(px);
            const my = valC * mx * mx;
            const py = toScreenY(my);
            if (!started) { ctx.moveTo(px, py); started = true; }
            else { ctx.lineTo(px, py); }
          }
          ctx.stroke();
        });
      }

      // متعامد: x^2 / (2k) + y^2 / k = 1 (بیضی‌ها به رنگ زرشکی/صورتی نئون)
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      for (let i = 1; i <= count; i++) {
        const k = i * 1.4;
        const a = Math.sqrt(2 * k) * scale;
        const b = Math.sqrt(k) * scale;
        ctx.beginPath();
        ctx.ellipse(originX, originY, a, b, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

    } else if (family === 'hyperbolas') {
      // اصلی: x * y = c
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      for (let i = 1; i <= count; i++) {
        const c = i * 0.8;
        [c, -c].forEach(valC => {
          ctx.beginPath();
          let started = false;
          for (let px = 0; px <= W; px += 2) {
            const mx = toMathX(px);
            if (Math.abs(mx) < 0.15) { started = false; continue; }
            const my = valC / mx;
            const py = toScreenY(my);
            if (!started) { ctx.moveTo(px, py); started = true; }
            else { ctx.lineTo(px, py); }
          }
          ctx.stroke();
        });
      }

      // متعامد: x^2 - y^2 = k
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      for (let i = 1; i <= count; i++) {
        const k = i * 1.5;
        ctx.beginPath();
        for (let py = 0; py <= H; py += 2) {
          const my = toMathY(py);
          const xSq = k + my * my;
          if (xSq >= 0) {
            const mx = Math.sqrt(xSq);
            ctx.lineTo(toScreenX(mx), py);
          }
        }
        ctx.stroke();
        ctx.beginPath();
        for (let py = 0; py <= H; py += 2) {
          const my = toMathY(py);
          const xSq = k + my * my;
          if (xSq >= 0) {
            const mx = -Math.sqrt(xSq);
            ctx.lineTo(toScreenX(mx), py);
          }
        }
        ctx.stroke();
      }

    } else if (family === 'circles') {
      // اصلی: دایره‌ها x^2 + y^2 = c^2
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 2;
      for (let i = 1; i <= count; i++) {
        const r = (i * 0.8) * scale;
        ctx.beginPath();
        ctx.arc(originX, originY, r, 0, Math.PI * 2);
        ctx.stroke();
      }

      // متعامد: خطوط مستقیم شعاعی y = k * x
      ctx.strokeStyle = '#f43f5e';
      ctx.lineWidth = 2;
      const angles = count * 2;
      for (let i = 0; i < angles; i++) {
        const th = (i / angles) * Math.PI;
        ctx.beginPath();
        ctx.moveTo(originX - Math.cos(th) * W, originY + Math.sin(th) * W);
        ctx.lineTo(originX + Math.cos(th) * W, originY - Math.sin(th) * W);
        ctx.stroke();
      }
    }

    // ترسیم خطوط مماس متقاطع روی نقطه ماوس
    if (showTangents) {
      const mx = toMathX(mouseX);
      const my = toMathY(mouseY);

      if (Math.abs(mx) > 0.1 || Math.abs(my) > 0.1) {
        let m1 = 0;
        let m2 = 0;

        if (family === 'parabolas') {
          m1 = (2 * my) / (mx || 0.001); // شیب سهمی
          m2 = -mx / (2 * (my || 0.001)); // شیب بیضی
        } else if (family === 'hyperbolas') {
          m1 = -my / (mx || 0.001);
          m2 = mx / (my || 0.001);
        } else if (family === 'circles') {
          m1 = -mx / (my || 0.001);
          m2 = my / (mx || 0.001);
        }

        // خط مماس اول
        const len = 70;
        const ang1 = Math.atan(m1);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(mouseX - Math.cos(ang1) * len, mouseY + Math.sin(ang1) * len);
        ctx.lineTo(mouseX + Math.cos(ang1) * len, mouseY - Math.sin(ang1) * len);
        ctx.stroke();

        // خط مماس دوم (عمود بر اولی)
        const ang2 = Math.atan(m2);
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(mouseX - Math.cos(ang2) * len, mouseY + Math.sin(ang2) * len);
        ctx.lineTo(mouseX + Math.cos(ang2) * len, mouseY - Math.sin(ang2) * len);
        ctx.stroke();

        // نماد زاویه قائمه (Square angle marker)
        const markerSize = 14;
        const u1x = Math.cos(ang1), u1y = -Math.sin(ang1);
        const u2x = Math.cos(ang2), u2y = -Math.sin(ang2);
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(mouseX + u1x * markerSize, mouseY + u1y * markerSize);
        ctx.lineTo(mouseX + (u1x + u2x) * markerSize, mouseY + (u1y + u2y) * markerSize);
        ctx.lineTo(mouseX + u2x * markerSize, mouseY + u2y * markerSize);
        ctx.stroke();

        // نقطه تقاطع
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 6, 0, Math.PI * 2);
        ctx.fill();

        // متن راهنما
        if (tooltip) {
          tooltip.innerHTML = `نقطه: (${mx.toFixed(2)}, ${my.toFixed(2)}) | شیب منحنی ۱: ${m1.toFixed(2)} | شیب منحنی ۲: ${m2.toFixed(2)} | حاصل‌ضرب شیب‌ها: <strong>-۱.۰۰</strong> (تعامد کامل ۹۰°)`;
        }
      }
    }
  }

  canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    mouseX = (e.clientX - rect.left) * scaleX;
    mouseY = (e.clientY - rect.top) * scaleY;
    renderSimulation();
  });

  canvas.addEventListener('touchmove', e => {
    if (e.touches && e.touches.length > 0) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      mouseX = (e.touches[0].clientX - rect.left) * scaleX;
      mouseY = (e.touches[0].clientY - rect.top) * scaleY;
      renderSimulation();
    }
  }, { passive: true });

  familySelect.addEventListener('change', renderSimulation);
  densitySlider.addEventListener('input', e => {
    if (densityVal) densityVal.innerText = e.target.value;
    renderSimulation();
  });
  if (showTangentsCheck) {
    showTangentsCheck.addEventListener('change', renderSimulation);
  }

  renderSimulation();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initOrthoSimulation);
} else {
  initOrthoSimulation();
}
</script>

---

## شهود فیزیکی و کاربردهای مهندسی

در دنیای واقعی، طبیعت همیشه به دنبال «کوتاه‌ترین و پربازده‌ترین مسیر» برای تغییر حالت است. وقتی یک کمیت اسکالر مثل دما، فشار یا ولتاژ در فضا توزیع می‌شود، می‌توانیم نقاطی که مقدار یکسانی دارند را به هم وصل کنیم و یک خانواده از منحنی‌ها بسازیم (منحنی‌های هم‌تراز یا Level Curves).

حالا سوال اصلی مهندسی اینجاست: **اگر ذره‌ای، سیالی یا جریانی از انرژی در این محیط رها شود، روی چه مسیری حرکت می‌کند؟**

از ریاضیات می‌دانیم که بردار گرادیان ($\nabla \phi$) که جهت بیشترین نرخ تغییرات را نشان می‌دهد، همیشه بر منحنی‌های هم‌تراز ($\phi(x,y) = c$) **عمود** است. بنابراین، جریان فیزیکی همواره عمود بر خطوط هم‌تراز جاری می‌شود. ما در معادلات دیفرانسیل به دنبال مسیرهای متعامد هستیم، زیرا در بسیاری از مسائل کاربردی یکی از این دو خانواده معلوم است و می‌خواهیم خانواده دیگر را تعیین کنیم:

| حوزه کاربرد | خانواده منحنی‌های اول (معمولاً هم‌تراز) | خانواده مسیرهای متعامد (خطوط جریان / میدان) | دلیل اهمیت فیزیکی و مهندسی |
| :--- | :--- | :--- | :--- |
| **الکترومغناطیس** | خطوط هم‌پتانسیل (Equipotential Lines) | خطوط میدان الکتریکی (Electric Field Lines) | بار الکتریکی در راستای میدان (عمود بر سطوح هم‌پتانسیل) شتاب می‌گیرد. با داشتن معادله ولتاژ، مسیر حرکت بار را پیدا می‌کنیم. |
| **انتقال حرارت** | خطوط هم‌دما (Isotherms) | خطوط شار یا جریان گرما (Heat Flux Lines) | طبق قانون رسانش فوریه، گرما از دمای بالاتر به پایین‌تر دقیقاً عمود بر خطوط هم‌دما جریان می‌یابد. |
| **مکانیک سیالات** | خطوط هم‌پتانسیل سرعت ($\phi = c$) | خطوط جریان سیال (Streamlines - $\psi = k$) | در جریان‌های ایده‌آل و پتانسیل، تشکیل شبکه متعامد (Flow Net) برای تحلیل فشار و سرعت حول اجسام (نظیر ایرفویل) حیاتی است. |
| **نقشه‌برداری و توپوگرافی** | خطوط تراز ارتفاعی (Contour Lines) | خطوط بیشترین شیب ریزش آب (Steepest Descent) | آب باران روی دامنه کوه در مسیری جاری می‌شود که در هر نقطه بر خطوط تراز ارتفاعی نقشه عمود است. |
| **هواشناسی** | خطوط هم‌فشار (Isobars) | جهت ایده‌آل گرادیان باد | در غیاب نیروهای دورانی (کوریولیس)، باد از مراکز پرفشار به کم‌فشار عمود بر خطوط هم‌فشار می‌وزد. |

---

## منطق ریاضی و شرط تعامد

چرا این مبحث در درس **معادلات دیفرانسیل** مطرح می‌شود و نه صرفاً در هندسه تحلیلی؟ زیرا با دو خط یا دو منحنی منفرد سر و کار نداریم، بلکه با **یک خانواده نامتناهی از منحنی‌ها** مواجهیم که با یک پارامتر مانند $c$ مشخص می‌شوند: $F(x, y, c) = 0$.

برای اعمال شرط تعامد در سرتاسر صفحه، به ابزاری نیاز داریم که در هر نقطه $(x, y)$، شیب منحنیِ گذرنده از آن نقطه را فارغ از مقدار عددی پارامتر منحنی ($c$) در اختیارمان بگذارد. این ابزار، **معادله دیفرانسیل مرتبه اول** یا همان **میدان جهت (Direction Field)** است.

### شرط تعامد در مختصات دکارتی

از هندسه تحلیلی می‌دانیم که دو خط در صفحه بر یکدیگر عمودند اگر و تنها اگر حاصل‌ضرب شیب‌های آن‌ها برابر با $-1$ باشد ($m_1 \cdot m_2 = -1$).

* اگر شیب خط مماس بر منحنی خانواده اول در نقطه $(x, y)$ برابر با رابطه زیر باشد:

$$\frac{dy}{dx} = f(x, y)$$

* آنگاه شیب مماس بر منحنی خانواده مسیرهای متعامد در همان نقطه باید قرینه و معکوس آن باشد:

$$\frac{dy}{dx} = -\frac{1}{f(x, y)} \quad \iff \quad \frac{dx}{dy} = -f(x, y)$$

---

## الگوریتم گام‌به‌گام محاسبه

برای تعیین مسیرهای متعامد یک خانواده از منحنی‌ها به معادله $F(x, y, c) = 0$، سه مرحله اساسی را دنبال می‌کنیم:

1. **مشتق‌گیری ضمنی و حذف کامل پارامتر $c$:**
   از رابطه $F(x, y, c) = 0$ نسبت به $x$ مشتق ضمنی می‌گیریم. سپس با استفاده هم‌زمان از معادله اصلی و معادله حاصل از مشتق، پارامتر ثابت $c$ را کاملاً حذف می‌کنیم تا معادله دیفرانسیل خانواده اول به فرم $\frac{dy}{dx} = f(x, y)$ حاصل شود.

   > [!NOTE] چرا حذف پارامتر $c$ الزامی است؟
   > مقدار $c$ نشانگر هویت یک منحنی منفرد در خانواده است. معادله دیفرانسیل باید یک «قانون موضعی مستقل از منحنی خاص» باشد که تنها به مختصات نقطه $(x, y)$ در صفحه وابسته است تا بتوان زاویه شیب را در همان نقطه ۹۰ درجه چرخاند.

2. **اعمال شرط تعامد (دوران ۹۰ درجه‌ای میدان جهت):**
   در معادله دیفرانسیل به دست آمده، عبارت $\frac{dy}{dx}$ را به $-\frac{dx}{dy}$ (یا معادل آن $-\frac{1}{f(x, y)}$) تبدیل می‌کنیم. این معادله جدید، معادله دیفرانسیل حاکم بر خانواده مسیرهای متعامد است.

3. **حل معادله دیفرانسیل مسیرهای متعامد:**
   معادله دیفرانسیل مرحله دوم را به روش‌های استاندارد (تفکیک متغیرها، همگن، کامل، خطی یا عامل انتگرال‌ساز) حل می‌کنیم. ثابت انتگرال‌گیری جدید ($k$)، پارامتر سازنده خانواده مسیرهای متعامد خواهد بود: $G(x, y, k) = 0$.

---

## بررسی مثال‌های کلاسیک

### مثال دایره‌های هم‌مرکز (شهودی‌ترین حالت)

خانواده دایره‌های هم‌مرکز به مرکز مبدأ با معادله $x^2 + y^2 = c^2$ را در نظر بگیرید (مشابه موج‌های دایروی در سطح آب یا سطوح هم‌پتانسیل یک بار نقطه‌ای یا سیم طویل):

* **گام اول (تشکیل معادله دیفرانسیل):** نسبت به $x$ مشتق می‌گیریم:

$$2x + 2y \frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}$$

*(در این معادله، پارامتر $c$ حین مشتق‌گیری خودبه‌خود حذف شد).*

* **گام دوم (اعمال شرط تعامد):** شیب را قرینه و معکوس می‌کنیم:

$$\frac{dy}{dx} = \frac{y}{x}$$

* **گام سوم (حل معادله):** معادله تفکیک‌پذیر حاصل را حل می‌کنیم:

$$\frac{dy}{y} = \frac{dx}{x} \implies \ln|y| = \ln|x| + \ln|k| \implies y = kx$$

> [!NOTE] نتیجه هندسی
> مسیرهای متعامد بر دایره‌های هم‌مرکز، خانواده خطوط مستقیمی هستند که از مبدأ مختصات می‌گذرند (پرتوهای شعاعی یا Radial Lines).

---

### مثال خانواده سهمی‌ها (حالتی که $c$ در مشتق‌گیری باقی می‌ماند)

می‌خواهیم مسیرهای متعامد خانواده سهمی‌های $y = c x^2$ را پیدا کنیم:

* **گام اول (مشتق‌گیری و حذف $c$):** نسبت به $x$ مشتق می‌گیریم:

$$\frac{dy}{dx} = 2cx$$

چون ثابت $c$ در معادله باقی مانده است، مقدار $c = \frac{y}{x^2}$ را از معادله اولیه استخراج کرده و جایگذاری می‌کنیم:

$$\frac{dy}{dx} = 2\left(\frac{y}{x^2}\right)x = \frac{2y}{x}$$

* **گام دوم (اعمال شرط تعامد):**

$$\frac{dy}{dx} = -\frac{x}{2y}$$

* **گام سوم (حل معادله دیفرانسیل):** متغیرها را تفکیک نموده و انتگرال می‌گیریم:

$$2y \, dy = -x \, dx \implies y^2 = -\frac{1}{2}x^2 + k \implies \frac{x^2}{2k} + \frac{y^2}{k} = 1$$

> [!NOTE] نتیجه هندسی
> مسیرهای متعامد بر این خانواده از سهمی‌ها، خانواده‌ای از **بیضی‌های هم‌مرکز** هستند که کانون‌های آن‌ها روی محور $x$ قرار دارد (نسبت نیم‌قطر بزرگ به کوچک برابر با $\sqrt{2}$ است).

---

## مسیرهای متعامد در مختصات قطبی

هنگامی که معادله خانواده منحنی‌ها در مختصات قطبی به فرم $F(r, \theta, c) = 0$ داده شده باشد (نظیر دل‌وارها یا کاردیوئیدها، مارپیچ‌ها و گلبرگ‌ها)، دقت داشته باشید که عبارت $\frac{dr}{d\theta}$ نمایانگر شیب خط مماس بر منحنی نیست!

زاویه مابین شعاع حامل (بردار موقعیت) و خط مماس بر منحنی قطبی با $\psi$ نام‌گذاری می‌شود که از رابطه زیر حاصل می‌آید:

$$\tan \psi = \frac{r}{\frac{dr}{d\theta}} = r \frac{d\theta}{dr}$$

برای اینکه دو منحنی قطبی در محل برخورد با یکدیگر زاویه ۹۰ درجه بسازند، باید $\tan \psi_2 = -\frac{1}{\tan \psi_1}$ باشد. در نتیجه:

> [!IMPORTANT] تبدیل شرط تعامد در دستگاه مختصات قطبی
> پس از حذف پارامتر $c$ و استخراج معادله دیفرانسیل اولیه به فرم $\frac{dr}{d\theta} = g(r, \theta)$، برای نوشتن معادله دیفرانسیل مسیرهای متعامد، عبارت $\frac{dr}{d\theta}$ را با **$-r^2 \frac{d\theta}{dr}$** (یا معادل آن $-\frac{r^2}{g(r, \theta)}$) جایگزین می‌کنیم:
>
> $$\frac{dr}{d\theta} = -\frac{r^2}{g(r, \theta)}$$

---

> [!TIP] یک دیدگاه فراتر (توابع همساز و نگاشت همدیس)
> اگر در ریاضیات مهندسی با **توابع تحلیلی مختلط** به فرم $f(z) = u(x,y) + i v(x,y)$ آشنا شوید، خواهید دید که به دلیل برقراری معادلات کوشی-ریمان:
>
> $$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \qquad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$
>
> منحنی‌های تراز بخش حقیقی ($u(x,y) = c$) و بخش موهومی ($v(x,y) = k$) همواره و بدون استثنا **مسیرهای متعامد** یکدیگر هستند! به همین علت، نگاشت‌های همدیس و توابع متغیر مختلط قدرتمندترین ابزار برای حل تحلیلی مسائل مکانیک سیالات دو‌بعدی و الکترواستاتیک به شمار می‌روند.
