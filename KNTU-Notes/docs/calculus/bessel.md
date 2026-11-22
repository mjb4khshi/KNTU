---
title: معادلات دیفرانسیل بسل و توابع بسل
description: بررسی شهود فیزیکی انتشار موج در هندسه استوانه‌ای، تابع گاما، حل کامل به روش فروبنیوس، توابع بسل نوع اول و دوم به همراه شبیه‌ساز تعاملی دوبعدی و سه‌بعدی ارتعاش پرده طبل
tags:
  - ریاضیات
  - معادلات_دیفرانسیل
  - توابع_بسل
  - روش_فروبنیوس
  - ارتعاشات
  - فیزیک_ریاضی
---

# معادلات دیفرانسیل بسل و توابع بسل

**معادله دیفرانسیل بسل (Bessel's Differential Equation)** یکی از ارکان بنیادین فیزیک ریاضی و مهندسی است. این معادله زمانی ظاهر می‌شود که بخواهیم پدیده‌های موجی، انتقال حرارت، پتانسیل الکترواستاتیک یا ارتعاشات مکانیکی را در **سیستم‌های با تقارن استوانه‌ای یا کروی** (نظیر غشای مدور طبل، فیبرهای نوری، کابل‌های هم‌محور، لوله‌های انتقال سیال و رآکتورهای استوانه‌ای) مدل‌سازی کنیم. 

در این راهنمای جامع، ابتدا شهود فیزیکی پیدایش معادله بسل را از روی معادله موج بررسی می‌کنیم، با تعمیم فاکتوریل توسط **تابع گاما** و مشتقات کسری آشنا می‌شویم، سپس گام‌به‌گام معادله را به روش **فروبنیوس** حل کرده و رفتار توابع نوع اول و دوم را در یک **آزمایشگاه تعاملی دوبعدی و سه‌بعدی** به تماشا می‌نشینیم.

---

## شهود فیزیکی و پیدایش معادله بسل

برای درک عمیق معادله بسل، بیایید رفتار موج را در دو هندسه متفاوت با هم مقایسه کنیم: **هندسه دکارتی یک‌بعدی** در برابر **هندسه قطبی/استوانه‌ای دو‌بعدی**.

### مقایسه موج یک‌بعدی و موج در هندسه مدور

در یک تار مرتعش یا لوله صوتی باریک یک‌بعدی (دستگاه دکارتی)، معادله دیفرانسیل حاکم بر مد نوسان به فرم زیر است:

$$\frac{d^2 y}{dx^2} + k^2 y = 0$$

پاسخ عمومی این معادله، ترکیبی از توابع سینوسی و کسینوسی با **دامنه ثابت** است:

$$y(x) = A \cos(kx) + B \sin(kx)$$

در این حالت، سطح مقطع جبهه موج در حین حرکت در راستای $x$ هیچ تغییری نمی‌کند؛ بنابراین چگالی انرژی موج ثابت مانده و نوسانات بدون هیچ‌گونه افت دامنه‌ای تا بی‌نهایت ادامه می‌یابند.

اما هنگامی که سنگی را در آب می‌اندازید یا پرده مدور یک طبل را به ارتعاش درمی‌آورید، جبهه موج به شکل دوایر هم‌مرکز به سمت بیرون پخش می‌شود. در مختصات قطبی $(r, \theta)$، عملگر لاپلاسی دو‌بعدی برابر است با:

$$\nabla^2 u = \frac{\partial^2 u}{\partial r^2} + \frac{1}{r} \frac{\partial u}{\partial r} + \frac{1}{r^2} \frac{\partial^2 u}{\partial \theta^2}$$

```mermaid
flowchart LR
    subgraph S1 ["موج دکارتی ۱ بعدی"]
        A1["جبهه موج تخت"] -->|"مساحت مقطع ثابت"| A2["چگالی انرژی ثابت"] --> A3["دامنه نوسان ثابت<br/>sin(kx) , cos(kx)"]
    end
    
    subgraph S2 ["موج استوانه‌ای ۲ بعدی"]
        B1["جبهه موج مدور"] -->|"محیط 2πr در حال انبساط"| B2["چگالی انرژی ∝ 1/r"] --> B3["افت طبیعی دامنه ∝ 1/√r<br/>توابع بسل J_ν(r)"]
    end
```

### راز جمله میراکننده هندسی $\frac{1}{r} \frac{dR}{dr}$

حضور جمله مرتبه اول $\frac{1}{r} \frac{dR}{dr}$ در لاپلاسی قطبی، نمایانگر یک **میرایی هندسی (Geometric Damping)** ذاتی ناشی از انبساط محیط است:

> [!NOTE] دلیل فیزیکی افت دامنه در هندسه استوانه‌ای
> بر طبق اصل بقای انرژی، توان یا انرژی کل یک جبهه موج نوسانی با گسترش به سمت بیرون پایسته است. وقتی موج از مرکز به شعاع $r$ می‌رسد، انرژی روی محیط دایره‌ای به طول $2\pi r$ توزیع می‌شود؛ در نتیجه چگالی انرژی در واحد طول متناسب با $\frac{1}{r}$ کاهش می‌یابد:
>
> $$\text{Energy Density} \propto \frac{1}{r}$$
>
> از آنجا که انرژی نوسان مکانیکی متناسب با توان دوم دامنه نوسان ($E \propto A^2$) است، بلافاصله نتیجه می‌شود که دامنه نوسان شعاعی باید متناسب با معکوس جذر شعاع افت کند:
>
> $$A(r) \propto \frac{1}{\sqrt{r}}$$
>
> جمله $\frac{1}{r} \frac{dR}{dr}$ دقیقاً همانند یک نیروی اصطکاک مجازی رفتار می‌کند که انرژی را از چگالی خطی موج جذب کرده و دامنه نوسان را ملایم‌تر می‌سازد. به همین دلیل توابع بسل درست مانند امواج سینوسی نوسان می‌کنند، اما با افزایش شعاع دامنه آن‌ها پیوسته کوچک و کوچک‌تر می‌شود.

### تفکیک متغیرها و استخراج فرم استاندارد بسل

معادله موج دو‌بعدی برای غشای ارتعاشی را در نظر بگیرید:

$$\nabla^2 u = \frac{1}{c^2} \frac{\partial^2 u}{\partial t^2}$$

با فرض پاسخ هارمونیک در زمان $u(r, \theta, t) = v(r, \theta) e^{i\omega t}$ و تعریف عدد موج $k = \frac{\omega}{c}$، به معادله هلم‌هولتز می‌رسیم:

$$\nabla^2 v + k^2 v = 0 \implies \frac{\partial^2 v}{\partial r^2} + \frac{1}{r} \frac{\partial v}{\partial r} + \frac{1}{r^2} \frac{\partial^2 v}{\partial \theta^2} + k^2 v = 0$$

پاسخ مکانی را به صورت ضرب دو تابع شعاعی و زاویه‌ای تفکیک می‌کنیم: $v(r, \theta) = R(r) \, \Theta(\theta)$. با جایگذاری و تقسیم بر $\frac{R \Theta}{r^2}$:

$$\frac{r^2 R'' + r R' + k^2 r^2 R}{R} = -\frac{\Theta''}{\Theta} = \nu^2$$

چون طرف چپ تنها تابعی از $r$ و طرف راست تنها تابعی از $\theta$ است، هر دو باید با ثابت جداسازی $\nu^2$ برابر باشند:

1. **معادله زاویه‌ای:** $\Theta'' + \nu^2 \Theta = 0 \implies \Theta(\theta) = A \cos(\nu\theta) + B \sin(\nu\theta)$. برای اینکه با یک دور کامل دوران پاسخ پیوسته بماند ($\Theta(\theta + 2\pi) = \Theta(\theta)$)، باید $\nu = m \in \{0, 1, 2, \dots\}$ عددی صحیح باشد.
2. **معادله شعاعی:**

$$r^2 \frac{d^2 R}{dr^2} + r \frac{dR}{dr} + (k^2 r^2 - \nu^2) R = 0$$

اکنون با تغییر متغیر بدون‌بعد $x = kr$ (که در آن $dx = k \, dr$، $\frac{dR}{dr} = k \frac{dR}{dx}$ و $\frac{d^2 R}{dr^2} = k^2 \frac{d^2 R}{dx^2}$)، به فرم جهان‌شمول و نام‌آشنای **معادله دیفرانسیل بسل مرتبه $\nu$** می‌رسیم:

> [!IMPORTANT] فرم استاندارد معادله بسل
>
> $$x^2 y'' + x y' + (x^2 - \nu^2)y = 0$$
>
> یا به فرم نرمال:
>
> $$y'' + \frac{1}{x} y' + \left(1 - \frac{\nu^2}{x^2}\right)y = 0$$

---

## تابع گاما؛ تعمیم فاکتوریل و مشتقات کسری

پیش از آنکه به حل معادله بسل بپردازیم، به ابزاری نیاز داریم که بتواند فاکتوریل را از اعداد طبیعی به اعداد حقیقی و مختلط تعمیم دهد. این ابزار، **تابع گامای اویلر ($\Gamma$)** نام دارد.

### تعریف انتگرالی اویلر و خاصیت بازگشتی

تابع گاما برای هر عدد با بخش حقیقی مثبت ($\operatorname{Re}(z) > 0$) با انتگرال ناسره زیر تعریف می‌شود:

$$\Gamma(z) = \int_0^\infty t^{z-1} e^{-t} \, dt$$

با به‌کارگیری روش انتگرال‌گیری جزء‌به‌جزء بر روی این انتگرال:

$$\Gamma(z+1) = \int_0^\infty t^z e^{-t} \, dt = \left[ -t^z e^{-t} \right]_0^\infty + z \int_0^\infty t^{z-1} e^{-t} \, dt = 0 + z \Gamma(z)$$

بنابراین رابطه بازگشتی کلیدی تابع گاما اثبات می‌شود:

$$\Gamma(z+1) = z \Gamma(z)$$

با توجه به اینکه $\Gamma(1) = \int_0^\infty e^{-t} dt = 1$ است، به سادگی می‌توان دید که برای هر عدد صحیح مثبت $n$:

$$\Gamma(n+1) = n \cdot (n-1) \cdots 1 \cdot \Gamma(1) = n! \iff \Gamma(n) = (n-1)!$$

```mermaid
flowchart LR
    subgraph GProp ["ویژگی‌های هندسی و تحلیلی تابع گاما"]
        P1["تعریف انتگرالی:<br/>Γ(z) = ∫ t^(z-1) e^(-t) dt"] --> P2["رابطه بازگشتی:<br/>Γ(z+1) = z Γ(z)"]
        P2 --> P3["تعمیم فاکتوریل:<br/>Γ(n+1) = n!"]
        P2 --> P4["مقدار بحرانی کسری:<br/>Γ(1/2) = √π"]
    end
```

### مقدار مشهور $\Gamma(1/2) = \sqrt{\pi}$

برای مقادیر نیمه‌صحیح، با تغییر متغیر $t = u^2$ (و $dt = 2u \, du$):

$$\Gamma\left(\frac{1}{2}\right) = \int_0^\infty t^{-1/2} e^{-t} \, dt = \int_0^\infty \frac{1}{u} e^{-u^2} (2u \, du) = 2 \int_0^\infty e^{-u^2} \, du = \int_{-\infty}^\infty e^{-u^2} \, du = \sqrt{\pi}$$

این نتیجه حیرت‌انگیز پیوند میان فاکتوریل و عدد $\pi$ را برقرار می‌سازد: $\left(-\frac{1}{2}\right)! = \sqrt{\pi}$ و $\left(\frac{1}{2}\right)! = \frac{\sqrt{\pi}}{2}$.

### ارتباط با حساب کسری (Fractional Calculus)

در ریاضیات مقدماتی، مشتق مرتبه $k$-ام تک‌جمله‌ای $x^n$ با فرمول زیر محاسبه می‌شود:

$$\frac{d^k}{dx^k} x^n = \frac{n!}{(n-k)!} x^{n-k}$$

اگر بخواهیم عملگر مشتق را به مرتبه‌های غیرصحیح $\alpha \in \mathbb{R}$ (مانند مشتق نیم‌مرتبه $\frac{d^{1/2}}{dx^{1/2}}$) تعمیم دهیم، فاکتوریل‌ها با تابع گاما جایگزین می‌شوند:

> [!TIP] فرمول مشتق کسری ریمان-لیوویل
>
> $$\frac{d^\alpha}{dx^\alpha} x^n = \frac{\Gamma(n+1)}{\Gamma(n+1-\alpha)} x^{n-\alpha}$$
>
> برای مثال، مشتق نیم‌مرتبه تابع $x$:
>
> $$\frac{d^{1/2}}{dx^{1/2}} x = \frac{\Gamma(2)}{\Gamma(1.5)} x^{0.5} = \frac{1}{\frac{\sqrt{\pi}}{2}} \sqrt{x} = \frac{2\sqrt{x}}{\sqrt{\pi}}$$

این تعمیم دقیقاً همان دلیلی است که به ما اجازه می‌دهد فرمول حل سری بسل را نه فقط برای مرتبه‌های صحیح، بلکه به صورت یکپارچه برای **تمام مرتبه‌های حقیقی $\nu \ge 0$** بیان کنیم.

---

## حل گام‌به‌گام به روش فروبنیوس

معادله دیفرانسیل بسل را بار دیگر بازنویسی می‌کنیم:

$$x^2 y'' + x y' + (x^2 - \nu^2)y = 0$$

تقسیم بر $x^2$ برای بررسی ماهیت نقطه $x = 0$:

$$y'' + \frac{1}{x} y' + \frac{x^2 - \nu^2}{x^2} y = 0$$

توابع ضرایب عبارتند از $P(x) = \frac{1}{x}$ و $Q(x) = \frac{x^2 - \nu^2}{x^2}$. مشاهده می‌شود که این توابع در $x = 0$ تحلیلی نیستند؛ اما حدها متناهی هستند:

$$\lim_{x \to 0} x P(x) = 1 = p_0, \qquad \lim_{x \to 0} x^2 Q(x) = -\nu^2 = q_0$$

بنابراین $x = 0$ یک **نقطه تکین منظم (Regular Singular Point)** است و طبق قضیه فروبنیوس، حداقل یک جواب به صورت سری توانی تعمیم‌یافته وجود دارد.

### گام اول: بسط فروبنیوس و مشتقات

پاسخ را به صورت سری تعمیم‌یافته با ضریب ابتدایی غیرصفر ($a_0 \neq 0$) فرض می‌کنیم:

$$y(x) = \sum_{m=0}^\infty a_m x^{m+r}$$

مشتقات اول و دوم عبارتند از:

$$y'(x) = \sum_{m=0}^\infty (m+r) a_m x^{m+r-1}$$

$$y''(x) = \sum_{m=0}^\infty (m+r)(m+r-1) a_m x^{m+r-2}$$

### گام دوم: جایگذاری در معادله بسل

با جایگذاری در معادله اصلی $x^2 y'' + x y' + (x^2 - \nu^2)y = 0$:

$$\sum_{m=0}^\infty (m+r)(m+r-1) a_m x^{m+r} + \sum_{m=0}^\infty (m+r) a_m x^{m+r} + \sum_{m=0}^\infty a_m x^{m+r+2} - \nu^2 \sum_{m=0}^\infty a_m x^{m+r} = 0$$

جملات با توان مشترک $x^{m+r}$ را ادغام می‌کنیم:

$$\sum_{m=0}^\infty \left[ (m+r)(m+r-1) + (m+r) - \nu^2 \right] a_m x^{m+r} + \sum_{m=0}^\infty a_m x^{m+r+2} = 0$$

عبارت داخل کروشه به زیبایی ساده می‌شود:

$$(m+r)(m+r-1) + (m+r) = (m+r)^2$$

بنابراین:

$$\sum_{m=0}^\infty \left[ (m+r)^2 - \nu^2 \right] a_m x^{m+r} + \sum_{m=0}^\infty a_m x^{m+r+2} = 0$$

### گام سوم: استخراج معادله شاخص (Indicial Equation)

پایین‌ترین توان موجود در معادله، توان $x^r$ است که از جمله اول به ازای $m = 0$ به دست می‌آید:

$$\left( r^2 - \nu^2 \right) a_0 = 0$$

چون طبق فرض فروبنیوس $a_0 \neq 0$ است، باید ضریب آن برابر صفر باشد:

> [!IMPORTANT] معادله شاخص بسل
>
> $$r^2 - \nu^2 = 0 \implies r_1 = \nu, \quad r_2 = -\nu$$

با فرض $\nu \ge 0$، بزرگ‌ترین ریشه $r_1 = \nu$ را انتخاب می‌کنیم.

### گام چهارم: توان $x^{r+1}$ و حذف ضرایب فرد

توان بعدی $x^{r+1}$ به ازای $m = 1$ در سری اول است (زیرا در سری دوم توان‌ها از $r+2$ آغاز می‌شوند):

$$\left[ (r+1)^2 - \nu^2 \right] a_1 = 0$$

با قرار دادن $r = \nu$:

$$\left[ (\nu+1)^2 - \nu^2 \right] a_1 = (2\nu + 1) a_1 = 0$$

چون $\nu \ge 0$ است، همواره $2\nu + 1 > 0$ بوده و در نتیجه الزماً:

$$a_1 = 0$$

### گام پنجم: رابطه بازگشتی برای توان‌های عمومی

برای توان‌های عمومی $x^{m+r}$ به ازای $m \ge 2$، اندیس سری دوم را شیفت می‌دهیم ($\sum_{m=0}^\infty a_m x^{m+r+2} = \sum_{m=2}^\infty a_{m-2} x^{m+r}$):

$$\left[ (m+r)^2 - \nu^2 \right] a_m + a_{m-2} = 0 \qquad (m \ge 2)$$

با جایگذاری $r = \nu$:

$$\left[ (m+\nu)^2 - \nu^2 \right] a_m = \left( m^2 + 2m\nu \right) a_m = m(m + 2\nu) a_m = -a_{m-2}$$

بنابراین رابطه بازگشتی طلایی فروبنیوس به دست می‌آید:

$$a_m = -\frac{a_{m-2}}{m(m + 2\nu)} \qquad (m \ge 2)$$

### گام ششم: صفر شدن ضرایب فرد و فرمول ضرایب زوج

چون $a_1 = 0$ است، طبق رابطه بازگشتی:

$$a_3 = -\frac{a_1}{3(3+2\nu)} = 0, \quad a_5 = 0, \quad \dots \implies a_{2k+1} = 0 \quad (\forall k \ge 0)$$

تمام ضرایب با اندیس فرد یکسره ناپدید می‌شوند! حال برای ضرایب زوج، متغیر $m = 2k$ را قرار می‌دهیم:

$$a_{2k} = -\frac{a_{2k-2}}{2k(2k + 2\nu)} = -\frac{a_{2k-2}}{4k(k + \nu)} = -\frac{a_{2k-2}}{2^2 k(k + \nu)}$$

چند جمله اول را پی‌درپی می‌نویسیم:

$$a_2 = -\frac{a_0}{2^2 \cdot 1 \cdot (1+\nu)}$$

$$a_4 = -\frac{a_2}{2^2 \cdot 2 \cdot (2+\nu)} = \frac{a_0}{2^4 \cdot (1 \cdot 2) \cdot (1+\nu)(2+\nu)}$$

$$a_6 = -\frac{a_4}{2^2 \cdot 3 \cdot (3+\nu)} = -\frac{a_0}{2^6 \cdot (1 \cdot 2 \cdot 3) \cdot (1+\nu)(2+\nu)(3+\nu)}$$

الگوی کلی برای ضریب $2k$-ام به وضوح مشخص می‌شود:

$$a_{2k} = \frac{(-1)^k a_0}{2^{2k} k! \, (1+\nu)(2+\nu)\cdots(k+\nu)}$$

### گام هفتم: استانداردسازی و پیدایش فرم بسته $J_\nu(x)$

ضریب $a_0$ یک ثابت اختیاری است. برای اینکه رابطه بالا به یک فرم بسته، متقارن و زیبا تبدیل شود، اویلر و بسل ضریب $a_0$ را به شکل زیر تعریف کردند:

$$a_0 = \frac{1}{2^\nu \Gamma(\nu+1)}$$

طبق خاصیت بازگشتی تابع گاما:

$$(k+\nu)(k-1+\nu)\cdots(1+\nu) \Gamma(\nu+1) = \Gamma(\nu+k+1)$$

با جایگذاری $a_0$ در فرمول $a_{2k}$:

$$a_{2k} = \frac{(-1)^k}{2^{2k+\nu} k! \, \Gamma(\nu+k+1)}$$

با بازگشت به سری $y(x) = \sum_{k=0}^\infty a_{2k} x^{2k+\nu}$، فرمول جاودانه **تابع بسل نوع اول مرتبه $\nu$** آشکار می‌شود:

> [!IMPORTANT] فرم بسته تابع بسل نوع اول $J_\nu(x)$
>
> $$J_\nu(x) = \sum_{k=0}^\infty \frac{(-1)^k}{k! \, \Gamma(\nu+k+1)} \left(\frac{x}{2}\right)^{2k+\nu}$$
>
> برای مرتبه‌های صحیح $\nu = n \in \{0, 1, 2, \dots\}$، با توجه به اینکه $\Gamma(n+k+1) = (n+k)!$ است:
>
> $$J_n(x) = \sum_{k=0}^\infty \frac{(-1)^k}{k! \, (n+k)!} \left(\frac{x}{2}\right)^{2k+n}$$

چند بسط ابتدایی برای مراتب پرکاربرد:

$$J_0(x) = 1 - \frac{x^2}{2^2} + \frac{x^4}{2^2 \cdot 4^2} - \frac{x^6}{2^2 \cdot 4^2 \cdot 6^2} + \dots = 1 - \frac{x^2}{4} + \frac{x^4}{64} - \frac{x^6}{2304} + \dots$$

$$J_1(x) = \frac{x}{2} - \frac{x^3}{2^2 \cdot 4} + \frac{x^5}{2^2 \cdot 4^2 \cdot 6} - \dots = \frac{x}{2} - \frac{x^3}{16} + \frac{x^5}{384} - \dots$$

همچنین رابطه مشتق شگفت‌انگیزی میان آن‌ها برقرار است:

$$J_0'(x) = -J_1(x), \qquad \frac{d}{dx}\left[ x^\nu J_\nu(x) \right] = x^\nu J_{\nu-1}(x)$$

---

## استقلال خطی، تابع بسل نوع دوم (نویمان) و شرایط مرزی فیزیکی

معادله بسل مرتبه دوم است؛ بنابراین فضای پاسخ آن **دو‌بعدی** بوده و همواره نیازمند **دو جواب مستقل خطی** هستیم.

### حالت اول: مرتبه غیرصحیح ($\nu \notin \mathbb{Z}$)

اگر ریشه دوم معادله شاخص $r_2 = -\nu$ را به کار بگیریم، تابع $J_{-\nu}(x)$ به دست می‌آید:

$$J_{-\nu}(x) = \sum_{k=0}^\infty \frac{(-1)^k}{k! \, \Gamma(k - \nu + 1)} \left(\frac{x}{2}\right)^{2k-\nu}$$

چون تفاضل ریشه‌های شاخص $r_1 - r_2 = 2\nu$ عدد صحیح نیست، دترمینان ورونسکیان آن‌ها مخالف صفر است:

$$W[J_\nu(x), J_{-\nu}(x)] = -\frac{2\sin(\nu\pi)}{\pi x} \neq 0$$

بنابراین $J_\nu(x)$ و $J_{-\nu}(x)$ کاملاً مستقل خطی هستند و پاسخ عمومی برابر است با:

$$y(x) = c_1 J_\nu(x) + c_2 J_{-\nu}(x) \qquad (\nu \notin \mathbb{Z})$$

### حالت دوم: مرتبه صحیح ($\nu = n \in \mathbb{Z}$) و وابستگی خطی

هنگامی که $\nu$ عدد صحیح باشد، تفاضل دو ریشه $2n$ عددی صحیح است. با توجه به اینکه تابع گاما در اعداد صحیح منفی یا صفر میل به بی‌نهایت می‌کند ($\frac{1}{\Gamma(k-n+1)} = 0$ برای $k < n$):

$$J_{-n}(x) = (-1)^n J_n(x)$$

> [!WARNING] بحران وابستگی خطی
> برای مرتبه‌های صحیح، $J_{-n}(x)$ چیزی جز یک مضرب اسکالر از $J_n(x)$ نیست! بنابراین نمی‌تواند جواب دوم مستقل باشد. برای کامل کردن پایه فضا، باید جواب دوم مستقلی با روش‌های دیگر جستجو شود.

### تابع بسل نوع دوم یا نویمان $Y_\nu(x)$

برای رفع این مشکل در تمامی شرایط، کارل نویمان (Carl Neumann) و هاینریش وبر تابع بسل نوع دوم $Y_\nu(x)$ (که با $N_\nu(x)$ نیز نمایش داده می‌شود) را تعریف کردند:

$$Y_\nu(x) = \frac{J_\nu(x) \cos(\nu\pi) - J_{-\nu}(x)}{\sin(\nu\pi)}$$

برای مرتبه‌های صحیح $n$، صورت و مخرج هر دو صفر می‌شوند و مقدار تابع با **قاعده هوپیتال** به صورت حد تعریف می‌شود:

$$Y_n(x) = \lim_{\nu \to n} Y_\nu(x)$$

بدین ترتیب، ورونسکیان همواره مخالف صفر باقی می‌ماند:

$$W[J_\nu(x), Y_\nu(x)] = \frac{2}{\pi x} \neq 0$$

و **پاسخ عمومی جامع معادله بسل برای هر $\nu$** به شکل استاندارد زیر درمی‌آید:

> [!IMPORTANT] پاسخ عمومی استاندارد معادله بسل
>
> $$y(x) = c_1 J_\nu(x) + c_2 Y_\nu(x)$$

### تکینگی لگاریتمی $Y_\nu(x)$ در مبدأ و فلسفه فیزیکی حذف آن

یکی از بارزترین تفاوت‌های میان $J_\nu(x)$ و $Y_\nu(x)$، رفتار آن‌ها در نزدیکی مبدأ ($x \to 0^+$) است:

1. **تابع نوع اول $J_\nu(x)$:** در مبدأ کاملاً خوش‌رفتار و متناهی است:
   $$J_0(0) = 1, \qquad J_\nu(0) = 0 \quad (\nu > 0)$$
2. **تابع نوع دوم $Y_\nu(x)$:** در مبدأ دارای یک **تکینگی لگاریتمی شدید** است و به سمت منفی بی‌نهایت میل می‌کند:
   $$Y_0(x) \approx \frac{2}{\pi} \left[ \ln\left(\frac{x}{2}\right) + \gamma \right] \xrightarrow{x \to 0^+} -\infty$$
   $$Y_\nu(x) \approx -\frac{\Gamma(\nu)}{\pi} \left(\frac{2}{x}\right)^\nu \xrightarrow{x \to 0^+} -\infty \quad (\nu > 0)$$

| تابع بسل | رفتار در مبدأ ($x = 0$) | تکینگی | رفتار مجانبی در فواصل دور ($x \to \infty$) | کاربرد در فیزیک |
| :---: | :---: | :---: | :---: | :---: |
| **$J_\nu(x)$** (نوع اول) | متناهی ($J_0(0)=1$, $J_{\nu>0}(0)=0$) | فاقد تکینگی | $\sqrt{\frac{2}{\pi x}} \cos\left(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\right)$ | استوانه‌ها و دیسک‌های توپُر شامل مرکز |
| **$Y_\nu(x)$** (نوع دوم / نویمان) | منفجر شونده به $-\infty$ | تکینگی لگاریتمی | $\sqrt{\frac{2}{\pi x}} \sin\left(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\right)$ | پوسته‌های استوانه‌ای و لوله‌های میان‌تهی |

```mermaid
flowchart TD
    G["شرایط مرزی هندسی مسئله"] -->|"استوانه یا دیسک توپُر<br/>مبدأ r=0 درون دامنه است"| S["پاسخ فیزیکی در r=0 باید متناهی باشد"]
    G -->|"پوسته استوانه‌ای یا لوله میان‌تهی<br/>دامنه a ≤ r ≤ b و r=0 خارج از دامنه است"| H["تکینگی مبدأ مشکلی ایجاد نمی‌کند"]
    
    S --> SC["ضریب نویمان حذف می‌شود:<br/>c2 = 0 ⟹ y(x) = c1 J_ν(x)"]
    H --> HC["هر دو ضریب حضور دارند:<br/>y(x) = c1 J_ν(x) + c2 Y_ν(x)"]
    
    style SC fill:#064e3b,stroke:#10b981,color:#fff
    style HC fill:#1e3a8a,stroke:#3b82f6,color:#fff
```

> [!NOTE] استدلال فیزیکی انتخاب ضرایب
> در مسائل مهندسی که ناحیه مورد مطالعه شامل مرکز دایره یا استوانه است (مانند پوست طبل، توزیع حرارت داخل میله استوانه‌ای توپر، یا میدان در مرکز فیبر نوری)، جابه‌جایی، دما یا پتانسیل در مرکز فیزیکی $r=0$ نمی‌تواند بی‌نهایت شود! از آنجا که $Y_\nu(0) = -\infty$ است، قوانین طبیعت الزام می‌کنند که **$c_2 = 0$** باشد و تنها $J_\nu(x)$ باقی بماند.
> 
> اما در یک کابل کواکسیال یا یک لوله دوجداره که ناحیه مجاز بین دو شعاع $r_1 < r < r_2$ محصور است، نقطه $r=0$ درون دامنه فیزیکی قرار ندارد؛ بنابراین هر دو ضریب $c_1$ و $c_2$ زنده می‌مانند تا شرایط مرزی روی هر دو جداره را تأمین کنند.

---

## آزمایشگاه تعاملی: پلاتر دو بعدی و شبیه‌ساز سه‌بعدی ارتعاش پرده طبل

در این بخش، دو ابزار تحلیلی و شبیه‌سازی تعاملی پیاده‌سازی شده است تا مفهوم انتزاعی توابع بسل را به تجربه بصری زنده تبدیل کند:

1. **پلاتر تعاملی دوبعدی:** بررسی شکل موج، تغییرات پیوسته مرتبه $\nu$ از ۰ تا ۵، مشاهده اثر ترکیب خطی $c_1 J_\nu + c_2 Y_\nu$ و شناسایی ریشه‌ها (نقاط صفر).
2. **شبیه‌ساز سه‌بعدی ارتعاش پرده طبل:** نمایش مدهای ارتعاشی دوبعدی $z(r, \theta, t) = J_m\left(\alpha_{mn} \frac{r}{R}\right) \cos(m\theta) \cos(\omega t)$ با قابلیت دوران کامل سه‌بعدی ماوس و تاچ.

<div class="bessel-lab-container">
  
  <!-- Tab Buttons -->
  <div class="bessel-tab-bar">
    <button class="bessel-tab-btn active" id="btnTab2D" onclick="switchBesselTab('2d')">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
      <span>پلاتر دوبعدی توابع بسل ($J_\nu$ و $Y_\nu$)</span>
    </button>
    <button class="bessel-tab-btn" id="btnTab3D" onclick="switchBesselTab('3d')">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
      <span>شبیه‌ساز سه‌بعدی ارتعاش پرده طبل (Drumhead)</span>
    </button>
  </div>

  <!-- TAB 1: 2D PLOTTER -->
  <div class="bessel-tab-content active" id="tabContent2D">
    <div class="bessel-controls-card">
      <div class="bessel-ctrl-row">
        
        <div class="bessel-input-group bessel-slider-group">
          <div class="bessel-label-row">
            <span>مرتبه تابع بسل ($\nu$):</span>
            <span class="bessel-badge" id="valNu">0.0</span>
          </div>
          <input type="range" id="sliderNu" min="0" max="5" step="0.5" value="0" class="bessel-slider">
          <div class="bessel-scale-markers">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
          </div>
        </div>

        <div class="bessel-input-group bessel-slider-group">
          <div class="bessel-label-row">
            <span>ضریب $J_\nu$ ($c_1$):</span>
            <span class="bessel-badge" id="valC1">1.0</span>
          </div>
          <input type="range" id="sliderC1" min="-2" max="2" step="0.1" value="1.0" class="bessel-slider">
        </div>

        <div class="bessel-input-group bessel-slider-group">
          <div class="bessel-label-row">
            <span>ضریب $Y_\nu$ ($c_2$):</span>
            <span class="bessel-badge" id="valC2">0.0</span>
          </div>
          <input type="range" id="sliderC2" min="-2" max="2" step="0.1" value="0.0" class="bessel-slider">
        </div>

      </div>

      <div class="bessel-toggles-row">
        <button type="button" class="bessel-toggle-pill active" id="btnToggleJ" onclick="toggleCurve('J')">
          <span class="color-dot dot-j"></span>
          <span>نمایش تابع نوع اول $J_\nu(x)$</span>
        </button>

        <button type="button" class="bessel-toggle-pill active" id="btnToggleY" onclick="toggleCurve('Y')">
          <span class="color-dot dot-y"></span>
          <span>نمایش تابع نویمان $Y_\nu(x)$</span>
        </button>

        <button type="button" class="bessel-toggle-pill active" id="btnToggleComb" onclick="toggleCurve('Comb')">
          <span class="color-dot dot-comb"></span>
          <span>ترکیب خطی $y = c_1 J_\nu + c_2 Y_\nu$</span>
        </button>

        <button type="button" class="bessel-toggle-pill active" id="btnToggleRoots" onclick="toggleCurve('Roots')">
          <span class="color-dot dot-root"></span>
          <span>علامت‌گذاری ریشه‌ها</span>
        </button>
      </div>
    </div>

    <div class="bessel-canvas-wrapper">
      <canvas id="bessel2DCanvas" width="900" height="480"></canvas>
      <div class="bessel-tooltip" id="plotTooltip"></div>
    </div>

    <div class="bessel-legend-footer">
      <div class="bessel-footer-item">
        <span class="color-dot dot-j"></span> <strong>$J_\nu(x)$:</strong> در $x=0$ متناهی است ($J_0(0)=1$).
      </div>
      <div class="bessel-footer-item">
        <span class="color-dot dot-y"></span> <strong>$Y_\nu(x)$:</strong> در $x \to 0$ تکینگی لگاریتمی ($-\infty$) دارد.
      </div>
      <div class="bessel-footer-item">
        <span class="color-dot dot-root"></span> <strong>نقاط ریشه:</strong> موقعیت گره‌های ارتعاشی یا فرکانس‌های تشدید.
      </div>
    </div>
  </div>

  <!-- TAB 2: 3D DRUMHEAD SIMULATOR -->
  <div class="bessel-tab-content" id="tabContent3D">
    <div class="bessel-controls-card">
      <div class="bessel-ctrl-row">

        <div class="bessel-input-group">
          <label class="bessel-field-label">تقارن دورانی / خطوط گره قطری ($m$):</label>
          <div class="bessel-btn-group" id="groupM">
            <button class="bessel-btn-opt active" onclick="setModeM(0)">m = 0 (متقارن محوری)</button>
            <button class="bessel-btn-opt" onclick="setModeM(1)">m = 1 (۱ قطر گره)</button>
            <button class="bessel-btn-opt" onclick="setModeM(2)">m = 2 (۲ قطر گره)</button>
            <button class="bessel-btn-opt" onclick="setModeM(3)">m = 3 (۳ قطر گره)</button>
          </div>
        </div>

        <div class="bessel-input-group">
          <label class="bessel-field-label">ریشه شعاعی / دوایر گره ($n$):</label>
          <div class="bessel-btn-group" id="groupN">
            <button class="bessel-btn-opt active" onclick="setModeN(1)">n = 1 (فقط لبه ثابت)</button>
            <button class="bessel-btn-opt" onclick="setModeN(2)">n = 2 (۱ دایره ساکن داخلی)</button>
            <button class="bessel-btn-opt" onclick="setModeN(3)">n = 3 (۲ دایره ساکن داخلی)</button>
          </div>
        </div>

      </div>

      <div class="bessel-sim-actions">
        <button class="bessel-action-btn" id="btnPlayPause" onclick="togglePlayPause()">
          <span id="playIcon">⏸️</span>
          <span id="playText">توقف انیمیشن</span>
        </button>

        <button class="bessel-action-btn" onclick="reset3DView()">
          <span>🔄</span>
          <span>بازنشانی زاویه دید</span>
        </button>

        <div class="bessel-slider-inline">
          <span>سرعت نوسان:</span>
          <input type="range" id="sliderSpeed" min="0.2" max="2.5" step="0.1" value="1.0" class="bessel-slider">
        </div>

        <button type="button" class="bessel-action-btn active" id="btnWireframe" onclick="toggleWireframe()">
          <span id="wireIcon">🌐</span>
          <span id="wireText">وایرفریم فعال</span>
        </button>
      </div>

      <div class="bessel-mode-info-box" id="modeInfoBox">
        <div class="info-badge-item">
          <span>مد ارتعاشی:</span>
          <strong id="modeName">$(0, 1)$</strong>
        </div>
        <div class="info-badge-item">
          <span>مقدار ریشه $\alpha_{mn}$:</span>
          <strong id="rootVal">2.4048</strong>
        </div>
        <div class="info-badge-item">
          <span>نسبت فرکانس به مد پایه:</span>
          <strong id="freqRatio">1.000 $\times f_{01}$</strong>
        </div>
        <div class="info-badge-item">
          <span>گره‌های ساکن:</span>
          <span id="nodalDesc">فاقد قطر گره، لبه در $r=R$ قفل شده</span>
        </div>
      </div>
    </div>

    <div class="bessel-canvas-wrapper">
      <canvas id="drum3DCanvas" width="900" height="520"></canvas>
      <div class="drum-drag-hint">برای چرخش زاویه دید، با ماوس درگ کنید یا لمس نمایید</div>
    </div>
  </div>

</div>

<style>
.bessel-lab-container {
  box-sizing: border-box;
  width: 100%;
  margin: 2rem 0;
  border-radius: var(--radius-card, 16px);
  background: color-mix(in oklab, var(--color-base-500) 15%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 35%, transparent);
  overflow: hidden;
}

.bessel-tab-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem;
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  border-bottom: 1px solid color-mix(in oklab, var(--color-base-500) 30%, transparent);
}

.bessel-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border-radius: 8px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-base-content, #e2e8f0);
  font-family: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bessel-tab-btn:hover {
  background: color-mix(in oklab, var(--color-base-500) 35%, transparent);
}

.bessel-tab-btn.active {
  background: var(--color-primary, #00a896);
  color: #fff;
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 12px rgba(0, 168, 150, 0.35);
}

.bessel-tab-content {
  display: none;
  padding: 1.25rem;
}

.bessel-tab-content.active {
  display: block;
}

.bessel-controls-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: color-mix(in oklab, var(--color-base-500) 18%, transparent);
  border: 1px solid color-mix(in oklab, var(--color-base-500) 30%, transparent);
  border-radius: 12px;
  margin-bottom: 1rem;
}

.bessel-ctrl-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
}

.bessel-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.bessel-label-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.86rem;
  font-weight: 600;
}

.bessel-field-label {
  font-size: 0.86rem;
  font-weight: 600;
  margin-bottom: 0.2rem;
}

.bessel-badge {
  background: color-mix(in oklab, var(--color-primary, #00a896) 25%, transparent);
  border: 1px solid var(--color-primary, #00a896);
  color: var(--color-primary, #00a896);
  padding: 0.15rem 0.55rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.82rem;
}

.bessel-slider {
  width: 100%;
  accent-color: var(--color-primary, #00a896);
  cursor: pointer;
  height: 6px;
  border-radius: 3px;
}

.bessel-scale-markers {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  opacity: 0.6;
  margin-top: -2px;
}

.bessel-toggles-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
  padding-top: 0.5rem;
  border-top: 1px solid color-mix(in oklab, var(--color-base-500) 25%, transparent);
}

.bessel-toggle-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.85rem;
  border-radius: 20px;
  border: 1px solid color-mix(in oklab, var(--color-base-500) 40%, transparent);
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  color: var(--color-base-content, #e2e8f0);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bessel-toggle-pill:hover {
  background: color-mix(in oklab, var(--color-base-500) 45%, transparent);
}

.bessel-toggle-pill.active {
  border-color: rgba(255, 255, 255, 0.28);
  background: color-mix(in oklab, var(--color-base-500) 55%, transparent);
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  font-weight: 600;
}

.bessel-toggle-pill:not(.active) {
  opacity: 0.42;
}

.color-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot-j { background: #00a896; box-shadow: 0 0 6px #00a896; }
.dot-y { background: #f43f5e; box-shadow: 0 0 6px #f43f5e; }
.dot-comb { background: #a855f7; box-shadow: 0 0 6px #a855f7; }
.dot-root { background: #f59e0b; box-shadow: 0 0 6px #f59e0b; }

.bessel-btn-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.bessel-btn-opt {
  flex: 1 1 auto;
  padding: 0.45rem 0.65rem;
  border-radius: 6px;
  border: 1px solid color-mix(in oklab, var(--color-base-500) 40%, transparent);
  background: color-mix(in oklab, var(--color-base-500) 25%, transparent);
  color: var(--color-base-content, #e2e8f0);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.bessel-btn-opt:hover {
  background: color-mix(in oklab, var(--color-base-500) 45%, transparent);
}

.bessel-btn-opt.active {
  background: var(--color-primary, #00a896);
  color: #fff;
  border-color: transparent;
  font-weight: 700;
}

.bessel-sim-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
  padding-top: 0.65rem;
  border-top: 1px solid color-mix(in oklab, var(--color-base-500) 25%, transparent);
}

.bessel-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  border: 1px solid color-mix(in oklab, var(--color-base-500) 40%, transparent);
  background: color-mix(in oklab, var(--color-base-500) 30%, transparent);
  color: var(--color-base-content, #e2e8f0);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.bessel-action-btn:hover {
  background: color-mix(in oklab, var(--color-base-500) 50%, transparent);
}

.bessel-slider-inline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
}

.bessel-slider-inline input {
  width: 100px;
}

.bessel-mode-info-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: color-mix(in oklab, var(--color-base-500) 28%, transparent);
  border-radius: 8px;
  font-size: 0.82rem;
  border-right: 3px solid var(--color-primary, #00a896);
}

.info-badge-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.info-badge-item span {
  opacity: 0.75;
  font-size: 0.78rem;
}

.info-badge-item strong {
  font-size: 0.92rem;
  color: var(--color-primary, #00a896);
}

.bessel-canvas-wrapper {
  position: relative;
  width: 100%;
  border-radius: 12px;
  background: #090d16;
  border: 1px solid color-mix(in oklab, var(--color-base-500) 35%, transparent);
  overflow: hidden;
  box-shadow: inset 0 2px 8px rgba(0,0,0,0.4);
}

.bessel-canvas-wrapper canvas {
  display: block;
  width: 100%;
  height: auto;
  cursor: crosshair;
}

#drum3DCanvas {
  cursor: grab;
}

#drum3DCanvas:active {
  cursor: grabbing;
}

.drum-drag-hint {
  position: absolute;
  bottom: 12px;
  right: 14px;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(4px);
  padding: 0.3rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  color: #94a3b8;
  pointer-events: none;
  border: 1px solid rgba(255,255,255,0.08);
}

.bessel-tooltip {
  position: absolute;
  display: none;
  pointer-events: none;
  background: rgba(15, 23, 42, 0.92);
  backdrop-filter: blur(6px);
  color: #f8fafc;
  padding: 0.45rem 0.75rem;
  border-radius: 8px;
  font-size: 0.8rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 20px rgba(0,0,0,0.5);
  z-index: 10;
  line-height: 1.45;
  direction: ltr;
  text-align: left;
}

.bessel-legend-footer {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-top: 0.85rem;
  font-size: 0.8rem;
  opacity: 0.85;
}

.bessel-footer-item {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}
</style>

<script>
// --- GLOBAL UTILITIES & MATHEMATICAL BESSEL ENGINE ---
function gamma(z) {
  const g = 7;
  const C = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (z < 0.5) return Math.PI / (Math.sin(Math.PI * z) * gamma(1 - z));
  z -= 1;
  let x = C[0];
  for (let i = 1; i < g + 2; i++) x += C[i] / (z + i);
  const t = z + g + 0.5;
  return Math.sqrt(2 * Math.PI) * Math.pow(t, z + 0.5) * Math.exp(-t) * x;
}

function besselJ(nu, x) {
  if (x === 0) return nu === 0 ? 1 : 0;
  if (x < 0) return Math.pow(-1, nu) * besselJ(nu, -x);
  
  // Asymptotic formula for large x to avoid series truncation overflow
  if (x > 18) {
    return Math.sqrt(2 / (Math.PI * x)) * Math.cos(x - (nu * Math.PI) / 2 - Math.PI / 4);
  }
  
  let sum = 0;
  const halfX = x / 2;
  for (let k = 0; k < 32; k++) {
    let denom = 1;
    for (let j = 1; j <= k; j++) denom *= j;
    const gVal = gamma(nu + k + 1);
    const term = (k % 2 === 0 ? 1 : -1) * Math.pow(halfX, 2 * k + nu) / (denom * gVal);
    sum += term;
    if (Math.abs(term) < 1e-12 && k > 10) break;
  }
  return sum;
}

function besselY(nu, x) {
  if (x <= 0) return -Infinity;
  if (x > 18) {
    return Math.sqrt(2 / (Math.PI * x)) * Math.sin(x - (nu * Math.PI) / 2 - Math.PI / 4);
  }
  const isInt = Math.abs(nu - Math.round(nu)) < 1e-5;
  if (isInt) {
    const eps = 1e-4;
    const n = Math.round(nu);
    const jP = besselJ(n + eps, x);
    const jM = besselJ(-(n + eps), x);
    return (jP * Math.cos((n + eps) * Math.PI) - jM) / Math.sin((n + eps) * Math.PI);
  } else {
    const jP = besselJ(nu, x);
    const jM = besselJ(-nu, x);
    return (jP * Math.cos(nu * Math.PI) - jM) / Math.sin(nu * Math.PI);
  }
}

// Zero roots of Bessel J_m (alphas): alpha[m][n-1]
const BESSEL_ROOTS = {
  0: [2.4048, 5.5201, 8.6537],
  1: [3.8317, 7.0156, 10.1735],
  2: [5.1356, 8.4172, 11.6198],
  3: [6.3802, 9.7610, 13.0152]
};

// --- TAB SWITCHING LOGIC ---
function switchBesselTab(tabName) {
  const tab2D = document.getElementById('tabContent2D');
  const tab3D = document.getElementById('tabContent3D');
  const btn2D = document.getElementById('btnTab2D');
  const btn3D = document.getElementById('btnTab3D');

  if (tabName === '2d') {
    tab2D.classList.add('active');
    tab3D.classList.remove('active');
    btn2D.classList.add('active');
    btn3D.classList.remove('active');
    draw2DPlot();
  } else {
    tab2D.classList.remove('active');
    tab3D.classList.add('active');
    btn2D.classList.remove('active');
    btn3D.classList.add('active');
    animRunning = true;
    lastFrameTime = performance.now();
    render3DFrame();
    requestAnimationFrame(render3DLoop);
  }
}

// --- PART 1: 2D PLOTTER LOGIC ---
const canvas2D = document.getElementById('bessel2DCanvas');
const ctx2D = canvas2D ? canvas2D.getContext('2d') : null;
const tooltip2D = document.getElementById('plotTooltip');

let curNu = 0;
let curC1 = 1.0;
let curC2 = 0.0;
let showJ = true;
let showY = true;
let showComb = true;
let showRoots = true;

function init2DControls() {
  const sliderNu = document.getElementById('sliderNu');
  const sliderC1 = document.getElementById('sliderC1');
  const sliderC2 = document.getElementById('sliderC2');

  const valNu = document.getElementById('valNu');
  const valC1 = document.getElementById('valC1');
  const valC2 = document.getElementById('valC2');

  sliderNu.addEventListener('input', (e) => {
    curNu = parseFloat(e.target.value);
    valNu.textContent = curNu.toFixed(1);
    draw2DPlot();
  });

  sliderC1.addEventListener('input', (e) => {
    curC1 = parseFloat(e.target.value);
    valC1.textContent = curC1.toFixed(1);
    draw2DPlot();
  });

  sliderC2.addEventListener('input', (e) => {
    curC2 = parseFloat(e.target.value);
    valC2.textContent = curC2.toFixed(1);
    draw2DPlot();
  });

  // Tooltip on hover
  if (canvas2D) {
    canvas2D.addEventListener('mousemove', handle2DMouseMove);
    canvas2D.addEventListener('mouseleave', () => {
      if (tooltip2D) tooltip2D.style.display = 'none';
    });
  }
}

function toggleCurve(type) {
  if (type === 'J') {
    showJ = !showJ;
    const btn = document.getElementById('btnToggleJ');
    if (btn) btn.classList.toggle('active', showJ);
  } else if (type === 'Y') {
    showY = !showY;
    const btn = document.getElementById('btnToggleY');
    if (btn) btn.classList.toggle('active', showY);
  } else if (type === 'Comb') {
    showComb = !showComb;
    const btn = document.getElementById('btnToggleComb');
    if (btn) btn.classList.toggle('active', showComb);
  } else if (type === 'Roots') {
    showRoots = !showRoots;
    const btn = document.getElementById('btnToggleRoots');
    if (btn) btn.classList.toggle('active', showRoots);
  }
  draw2DPlot();
}

function draw2DPlot() {
  if (!ctx2D) return;
  const w = canvas2D.width;
  const h = canvas2D.height;

  // Background
  ctx2D.fillStyle = '#0b0f19';
  ctx2D.fillRect(0, 0, w, h);

  const padLeft = 65;
  const padRight = 35;
  const padTop = 35;
  const padBottom = 45;

  const plotW = w - padLeft - padRight;
  const plotH = h - padTop - padBottom;

  const xMin = 0;
  const xMax = 15;
  const yMin = -1.2;
  const yMax = 1.2;

  function toScreenX(x) { return padLeft + ((x - xMin) / (xMax - xMin)) * plotW; }
  function toScreenY(y) { return padTop + ((yMax - y) / (yMax - yMin)) * plotH; }
  function fromScreenX(px) { return xMin + ((px - padLeft) / plotW) * (xMax - xMin); }

  // Draw Grid & Axes
  ctx2D.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx2D.lineWidth = 1;

  // Vertical grid lines
  ctx2D.font = '11px sans-serif';
  ctx2D.fillStyle = '#64748b';
  ctx2D.textAlign = 'center';
  for (let x = 1; x <= xMax; x += 1) {
    const px = toScreenX(x);
    ctx2D.beginPath();
    ctx2D.moveTo(px, padTop);
    ctx2D.lineTo(px, h - padBottom);
    ctx2D.stroke();
    ctx2D.fillText(x.toString(), px, h - padBottom + 18);
  }

  // Horizontal grid lines
  ctx2D.textAlign = 'right';
  for (let y = -1.0; y <= 1.0; y += 0.5) {
    const py = toScreenY(y);
    ctx2D.beginPath();
    ctx2D.moveTo(padLeft, py);
    ctx2D.lineTo(w - padRight, py);
    ctx2D.stroke();
    ctx2D.fillText(y.toFixed(1), padLeft - 10, py + 4);
  }

  // Zero axes
  ctx2D.strokeStyle = 'rgba(255, 255, 255, 0.35)';
  ctx2D.lineWidth = 1.5;
  const yZero = toScreenY(0);
  ctx2D.beginPath();
  ctx2D.moveTo(padLeft, yZero);
  ctx2D.lineTo(w - padRight, yZero);
  ctx2D.stroke();

  const xZero = toScreenX(0);
  ctx2D.beginPath();
  ctx2D.moveTo(xZero, padTop);
  ctx2D.lineTo(xZero, h - padBottom);
  ctx2D.stroke();

  // Axis labels
  ctx2D.fillStyle = '#94a3b8';
  ctx2D.font = 'bold 12px sans-serif';
  ctx2D.fillText('x (شعاع یا متغیر بدون بعد)', w - padRight - 10, yZero - 8);
  ctx2D.save();
  ctx2D.translate(20, h / 2);
  ctx2D.rotate(-Math.PI / 2);
  ctx2D.textAlign = 'center';
  ctx2D.fillText('دامنه نوسان (y)', 0, 0);
  ctx2D.restore();

  // Sampling curves
  const steps = 400;
  const ptsJ = [];
  const ptsY = [];
  const ptsComb = [];

  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    const jVal = besselJ(curNu, x);
    const yVal = x > 0.05 ? besselY(curNu, x) : NaN;
    const combVal = (curC1 * jVal) + (curC2 !== 0 ? (isNaN(yVal) ? 0 : curC2 * yVal) : 0);

    ptsJ.push({ x, y: jVal });
    ptsY.push({ x, y: yVal });
    ptsComb.push({ x, y: combVal });
  }

  // Function to draw curve
  function drawCurve(pts, color, lineWidth, dash = []) {
    ctx2D.save();
    ctx2D.beginPath();
    ctx2D.rect(padLeft, padTop, plotW, plotH);
    ctx2D.clip();

    ctx2D.strokeStyle = color;
    ctx2D.lineWidth = lineWidth;
    ctx2D.setLineDash(dash);
    ctx2D.beginPath();

    let started = false;
    for (let pt of pts) {
      if (isNaN(pt.y) || pt.y < -3 || pt.y > 3) {
        started = false;
        continue;
      }
      const px = toScreenX(pt.x);
      const py = toScreenY(pt.y);
      if (!started) {
        ctx2D.moveTo(px, py);
        started = true;
      } else {
        ctx2D.lineTo(px, py);
      }
    }
    ctx2D.stroke();
    ctx2D.restore();
  }

  // 1. Draw Y_nu
  if (showY) {
    drawCurve(ptsY, '#f43f5e', 2.0, [5, 4]);
  }

  // 2. Draw J_nu
  if (showJ) {
    drawCurve(ptsJ, '#00a896', 2.5);
  }

  // 3. Draw Combination y(x)
  if (showComb && (curC1 !== 1 || curC2 !== 0 || !showJ)) {
    drawCurve(ptsComb, '#a855f7', 2.8);
  }

  // 4. Mark Roots of J_nu
  if (showRoots && showJ) {
    ctx2D.fillStyle = '#f59e0b';
    ctx2D.strokeStyle = '#0b0f19';
    ctx2D.lineWidth = 2;

    for (let i = 1; i < ptsJ.length; i++) {
      const p1 = ptsJ[i - 1];
      const p2 = ptsJ[i];
      if ((p1.y >= 0 && p2.y < 0) || (p1.y <= 0 && p2.y > 0)) {
        // Linear interpolation for root
        const rootX = p1.x - p1.y * ((p2.x - p1.x) / (p2.y - p1.y));
        const px = toScreenX(rootX);
        const py = toScreenY(0);

        ctx2D.beginPath();
        ctx2D.arc(px, py, 5, 0, Math.PI * 2);
        ctx2D.fill();
        ctx2D.stroke();

        ctx2D.font = '10px sans-serif';
        ctx2D.fillStyle = '#f59e0b';
        ctx2D.textAlign = 'center';
        ctx2D.fillText(rootX.toFixed(2), px, py - 9);
      }
    }
  }
}

function handle2DMouseMove(e) {
  if (!ctx2D) return;
  const rect = canvas2D.getBoundingClientRect();
  const scaleX = canvas2D.width / rect.width;
  const scaleY = canvas2D.height / rect.height;

  const mouseX = (e.clientX - rect.left) * scaleX;
  const mouseY = (e.clientY - rect.top) * scaleY;

  const padLeft = 65;
  const padRight = 35;
  const padTop = 35;
  const padBottom = 45;
  const plotW = canvas2D.width - padLeft - padRight;
  const plotH = canvas2D.height - padTop - padBottom;

  if (mouseX < padLeft || mouseX > canvas2D.width - padRight ||
      mouseY < padTop || mouseY > canvas2D.height - padBottom) {
    tooltip2D.style.display = 'none';
    return;
  }

  const x = 0 + ((mouseX - padLeft) / plotW) * 15;
  const jVal = besselJ(curNu, x);
  const yVal = x > 0.05 ? besselY(curNu, x) : NaN;
  const combVal = (curC1 * jVal) + (curC2 !== 0 ? (isNaN(yVal) ? 0 : curC2 * yVal) : 0);

  tooltip2D.style.display = 'block';
  tooltip2D.style.left = (e.clientX - rect.left + 15) + 'px';
  tooltip2D.style.top = (e.clientY - rect.top - 15) + 'px';

  tooltip2D.innerHTML = `
    <div style="font-weight: bold; color: #cbd5e1; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 3px; margin-bottom: 4px;">
      x = ${x.toFixed(3)}
    </div>
    <div style="color: #00a896;">J<sub>${curNu.toFixed(1)}</sub>: ${jVal.toFixed(4)}</div>
    <div style="color: #f43f5e;">Y<sub>${curNu.toFixed(1)}</sub>: ${isNaN(yVal) ? '-∞' : yVal.toFixed(4)}</div>
    ${(curC1 !== 1 || curC2 !== 0) ? `<div style="color: #a855f7;">y(x): ${combVal.toFixed(4)}</div>` : ''}
  `;
}

// --- PART 2: 3D DRUMHEAD VIBRATION SIMULATOR ---
const canvas3D = document.getElementById('drum3DCanvas');
const ctx3D = canvas3D ? canvas3D.getContext('2d') : null;

let curM = 0;
let curN = 1;
let animRunning = true;
let animSpeed = 1.0;
let simTime = 0;
let lastFrameTime = performance.now();
let showWireframe = true;

// 3D Orbit Camera angles
let rotAzimuth = -Math.PI / 4; // rotation around Z
let rotElevation = 0.65;      // camera tilt from horizontal
let isDragging3D = false;
let lastMouseX = 0;
let lastMouseY = 0;

function setModeM(m) {
  curM = m;
  updateModeButtons();
  updateModeDescription();
  if (!animRunning) render3DFrame();
}

function setModeN(n) {
  curN = n;
  updateModeButtons();
  updateModeDescription();
  if (!animRunning) render3DFrame();
}

function updateModeButtons() {
  document.querySelectorAll('#groupM .bessel-btn-opt').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === curM);
  });
  document.querySelectorAll('#groupN .bessel-btn-opt').forEach((btn, idx) => {
    btn.classList.toggle('active', (idx + 1) === curN);
  });
}

function updateModeDescription() {
  const root = BESSEL_ROOTS[curM][curN - 1];
  const root01 = BESSEL_ROOTS[0][0];
  const ratio = (root / root01).toFixed(3);

  document.getElementById('modeName').textContent = `(${curM}, ${curN})`;
  document.getElementById('rootVal').textContent = root.toFixed(4);
  document.getElementById('freqRatio').textContent = `${ratio} × f₀₁`;

  let desc = '';
  if (curM === 0) {
    desc += 'متقارن محوری (فاقد قطر گره). ';
  } else {
    desc += `${curM} قطر گره ساکن. `;
  }
  const innerCircles = curN - 1;
  if (innerCircles === 0) {
    desc += 'فقط محیط خارجی (r = R) در سکون مطلق است.';
  } else {
    desc += `${innerCircles} دایره ساکن گره در داخل پرده.`;
  }
  document.getElementById('nodalDesc').textContent = desc;
}

function togglePlayPause() {
  animRunning = !animRunning;
  document.getElementById('playIcon').textContent = animRunning ? '⏸️' : '▶️';
  document.getElementById('playText').textContent = animRunning ? 'توقف انیمیشن' : 'شروع نوسان';
  if (animRunning) {
    lastFrameTime = performance.now();
    requestAnimationFrame(render3DLoop);
  }
}

function reset3DView() {
  rotAzimuth = -Math.PI / 4;
  rotElevation = 0.65;
  if (!animRunning) render3DFrame();
}

function toggleWireframe() {
  showWireframe = !showWireframe;
  const btn = document.getElementById('btnWireframe');
  const txt = document.getElementById('wireText');
  if (btn) btn.classList.toggle('active', showWireframe);
  if (txt) txt.textContent = showWireframe ? 'وایرفریم فعال' : 'وایرفریم خاموش';
  if (!animRunning) render3DFrame();
}

function init3DControls() {
  const sliderSpeed = document.getElementById('sliderSpeed');
  if (sliderSpeed) {
    sliderSpeed.addEventListener('input', (e) => {
      animSpeed = parseFloat(e.target.value);
    });
  }

  // Mouse drag for 3D rotation
  if (canvas3D) {
    canvas3D.addEventListener('mousedown', (e) => {
      isDragging3D = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    });

    canvas3D.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging3D = true;
        lastMouseX = e.touches[0].clientX;
        lastMouseY = e.touches[0].clientY;
      }
    }, { passive: true });
  }

  window.addEventListener('mousemove', (e) => {
    if (!isDragging3D) return;
    const dx = e.clientX - lastMouseX;
    const dy = e.clientY - lastMouseY;
    rotAzimuth += dx * 0.008;
    rotElevation += dy * 0.008;
    rotElevation = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, rotElevation));
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  });

  window.addEventListener('mouseup', () => {
    isDragging3D = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging3D || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMouseX;
    const dy = e.touches[0].clientY - lastMouseY;
    rotAzimuth += dx * 0.01;
    rotElevation += dy * 0.01;
    rotElevation = Math.max(0.1, Math.min(Math.PI / 2 - 0.05, rotElevation));
    lastMouseX = e.touches[0].clientX;
    lastMouseY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDragging3D = false;
  });

  updateModeDescription();
}

function render3DLoop(timestamp) {
  if (!ctx3D) return;

  const dt = (timestamp - lastFrameTime) / 1000;
  lastFrameTime = timestamp;

  if (animRunning) {
    // Angular frequency proportional to root alpha_mn
    const root = BESSEL_ROOTS[curM][curN - 1];
    const omega = root * 2.2 * animSpeed;
    simTime += dt * omega;
  }

  render3DFrame();

  if (animRunning && document.getElementById('tabContent3D').classList.contains('active')) {
    requestAnimationFrame(render3DLoop);
  }
}

function render3DFrame() {
  const w = canvas3D.width;
  const h = canvas3D.height;
  ctx3D.fillStyle = '#090d16';
  ctx3D.fillRect(0, 0, w, h);

  const cx = w / 2;
  const cy = h / 2 + 25;
  const scale = Math.min(w, h) * 0.38;
  const root = BESSEL_ROOTS[curM][curN - 1];
  const maxAmp = 0.35;
  const timeFactor = Math.cos(simTime);

  // Mesh resolution
  const rings = 22;
  const sectors = 48;

  // Generate 3D grid vertices
  const grid = [];
  for (let i = 0; i <= rings; i++) {
    const rNorm = i / rings; // 0 to 1
    const rArg = rNorm * root;
    const besselVal = besselJ(curM, rArg);

    const ringPts = [];
    for (let j = 0; j < sectors; j++) {
      const theta = (j / sectors) * 2 * Math.PI;
      const z = maxAmp * besselVal * Math.cos(curM * theta) * timeFactor;
      const x = rNorm * Math.cos(theta);
      const y = rNorm * Math.sin(theta);

      // Project 3D (x, y, z) to rotated space
      // 1. Azimuth rotation around Z
      const x1 = x * Math.cos(rotAzimuth) - y * Math.sin(rotAzimuth);
      const y1 = x * Math.sin(rotAzimuth) + y * Math.cos(rotAzimuth);

      // 2. Elevation tilt
      const x2 = x1;
      const y2 = y1 * Math.cos(rotElevation) - z * Math.sin(rotElevation);
      const z2 = y1 * Math.sin(rotElevation) + z * Math.cos(rotElevation);

      // Screen coordinates
      const sx = cx + x2 * scale;
      const sy = cy - y2 * scale;

      ringPts.push({ x, y, z, sx, sy, depth: z2 });
    }
    grid.push(ringPts);
  }

  // Build quads for depth sorting (Painter's algorithm)
  const quads = [];
  for (let i = 0; i < rings; i++) {
    for (let j = 0; j < sectors; j++) {
      const nextJ = (j + 1) % sectors;
      const p1 = grid[i][j];
      const p2 = grid[i + 1][j];
      const p3 = grid[i + 1][nextJ];
      const p4 = grid[i][nextJ];

      const avgDepth = (p1.depth + p2.depth + p3.depth + p4.depth) / 4;
      const avgZ = (p1.z + p2.z + p3.z + p4.z) / 4;

      quads.push({ p1, p2, p3, p4, depth: avgDepth, z: avgZ });
    }
  }

  // Sort back-to-front
  quads.sort((a, b) => a.depth - b.depth);

  // Colormap function for height z
  function getZColor(z) {
    const norm = Math.max(-1, Math.min(1, z / maxAmp));
    if (norm < 0) {
      // Negative displacement (trough): Deep blue / cyan
      const t = -norm; // 0 to 1
      const r = Math.round(15 * (1 - t) + 2 * t);
      const g = Math.round(118 * (1 - t) + 132 * t);
      const b = Math.round(110 * (1 - t) + 199 * t);
      return `rgb(${r}, ${g}, ${b})`;
    } else {
      // Positive displacement (crest): Teal to gold/orange
      const t = norm; // 0 to 1
      const r = Math.round(15 * (1 - t) + 245 * t);
      const g = Math.round(118 * (1 - t) + 158 * t);
      const b = Math.round(110 * (1 - t) + 11 * t);
      return `rgb(${r}, ${g}, ${b})`;
    }
  }

  // Draw quads
  for (let q of quads) {
    ctx3D.beginPath();
    ctx3D.moveTo(q.p1.sx, q.p1.sy);
    ctx3D.lineTo(q.p2.sx, q.p2.sy);
    ctx3D.lineTo(q.p3.sx, q.p3.sy);
    ctx3D.lineTo(q.p4.sx, q.p4.sy);
    ctx3D.closePath();

    ctx3D.fillStyle = getZColor(q.z);
    ctx3D.fill();

    if (showWireframe) {
      ctx3D.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx3D.lineWidth = 0.6;
      ctx3D.stroke();
    }
  }

  // Outer fixed rim of the drum
  ctx3D.strokeStyle = '#00a896';
  ctx3D.lineWidth = 2.5;
  ctx3D.beginPath();
  for (let j = 0; j <= sectors; j++) {
    const pt = grid[rings][j % sectors];
    if (j === 0) ctx3D.moveTo(pt.sx, pt.sy);
    else ctx3D.lineTo(pt.sx, pt.sy);
  }
  ctx3D.stroke();
}

// Initialize robustly across initial load, async scripts, and page navigation
function initBesselApp() {
  init2DControls();
  init3DControls();
  draw2DPlot();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initBesselApp);
} else {
  initBesselApp();
}

// Re-draw when returning or resizing
window.addEventListener('resize', () => {
  draw2DPlot();
});
</script>

---

## کاربردهای مهندسی و صنعتی معادلات بسل

توابع بسل در سراسر شاخه‌های مهندسی حضور دارند و زبان ریاضی تحلیل پدیده‌های استوانه‌ای به شمار می‌روند:

### مهندسی مکانیک، مکاترونیک و آکوستیک

1. **طراحی تغذیه‌کننده‌های ارتعاشی (Vibratory Bowl Feeders):** در خطوط تولید و بسته‌بندی صنایع دارویی و خودروسازی، کاسه‌های ارتعاشی قطعات را از طریق ارتعاشات تشدیدی مرتب و هدایت می‌کنند. مدهای تشدید این کاسه‌ها مستقیماً ریشه‌های توابع بسل هستند.
2. **دیافراگم میکروفون‌ها و حسگرهای پیزوالکتریک:** در ترانسدیوسرهای اولتراسونیک پزشکی و صنعتی، شناخت محل خطوط گره (Nodal Lines) به مهندسان اجازه می‌دهد سنسورها را در نقاط بیشترین دامنه نوسان مستقر سازند تا حساسیت بیشینه شود.

### مهندسی مخابرات، فوتونیک و فیبر نوری

1. **انتشار امواج در فیبرهای نوری (Step-Index Fibers):** توزیع میدان الکتریکی در هسته شیشه‌ای استوانه‌ای فیبر نوری توسط تابع بسل نوع اول $J_m(kr)$ و در پوسته (Cladding) توسط تابع بسل اصلاح‌شده نوع دوم $K_m(\gamma r)$ توصیف می‌شود. ریشه‌های بسل مشخص‌کننده مدهای انتشاری (LP Modes) هستند.
2. **موج‌برهای استوانه‌ای و کابل‌های کواکسیال:** مدهای الکترومغناطیسی عرضی ($TE_{mn}$ و $TM_{mn}$) در موج‌برهای راداری مستقیماً از ریشه‌های $J_n(x)$ و مشتق آن $J_n'(x)$ به دست می‌آیند.

### پردازش سیگنال و مدولاسیون فرکانس (FM)

در مخابرات بی‌سیم، سیگنال مدوله‌شده فرکانسی دارای شکل موج زیر است:

$$s(t) = A_c \cos\left( \omega_c t + \beta \sin(\omega_m t) \right)$$

با استفاده از **بسط ژاکوبی-انگر (Jacobi-Anger Expansion)**:

$$e^{i \beta \sin\theta} = \sum_{n=-\infty}^\infty J_n(\beta) e^{i n \theta}$$

طیف فرکانسی سیگنال FM به صورت مجموعه‌ای از هارمونیک‌های مجزا با ضرایب دامنه $J_n(\beta)$ به دست می‌آید:

$$s(t) = A_c \sum_{n=-\infty}^\infty J_n(\beta) \cos\left( (\omega_c + n\omega_m) t \right)$$

> [!TIP] قاعده تجربی کارسون در مخابرات
> با توجه به اینکه مقادیر $J_n(\beta)$ به ازای $n > \beta + 1$ به سرعت به سمت صفر میل می‌کنند، پهنای باند مؤثر یک فرستنده مخابراتی FM بر اساس قاعده کارسون $B_T \approx 2(\beta + 1)f_m$ محاسبه می‌شود که مستقیماً بر مبنای محو شدن توابع بسل پایه‌گذاری شده است.

### انتقال حرارت و متالورژی در مهندسی صنایع

در فرآیندهای عملیات حرارتی، خنک‌کاری میلگردهای فولادی (Quenching) و توزیع دما در لوله‌های حامل سیال پالایشگاهی، معادله انتقال حرارت در مختصات استوانه‌ای به فرم زیر درمی‌آید:

$$\frac{\partial T}{\partial t} = \alpha \left( \frac{\partial^2 T}{\partial r^2} + \frac{1}{r}\frac{\partial T}{\partial r} \right)$$

پاسخ زمانی گذرا به صورت سری فوریه-بسل با جملات نمایی $e^{-\alpha \lambda_n^2 t} J_0(\lambda_n r)$ بیان می‌شود که در آن $\lambda_n = \frac{\alpha_{0n}}{R}$ ریشه‌های تابع $J_0$ هستند.

---

## جمع‌بندی و جدول مقایسه کلیدی

| شاخص ریاضی / فیزیکی | تابع بسل نوع اول $J_\nu(x)$ | تابع بسل نوع دوم / نویمان $Y_\nu(x)$ |
| :--- | :---: | :---: |
| **تعریف سری فروبنیوس** | $\sum_{k=0}^\infty \frac{(-1)^k}{k! \, \Gamma(\nu+k+1)} \left(\frac{x}{2}\right)^{2k+\nu}$ | حد وبر: $\frac{J_\nu(x)\cos(\nu\pi) - J_{-\nu}(x)}{\sin(\nu\pi)}$ |
| **مقدار در مبدأ ($x = 0$)** | برای $\nu=0$ برابر ۱، برای $\nu>0$ برابر ۰ | $-\infty$ (تکینگی لگاریتمی شدید) |
| **استقلال خطی برای $\nu$ صحیح** | $J_{-n}(x) = (-1)^n J_n(x)$ (وابسته) | همواره با $J_\nu(x)$ مستقل خطی است |
| **نقش در شرایط مرزی فیزیکی** | تنها جواب مجاز در اجسام و نواحی توپر | مورد نیاز در پوسته‌ها و لوله‌های میان‌تهی |
| **رفتار مجانبی در فواصل دور ($x \gg 1$)** | $\approx \sqrt{\frac{2}{\pi x}} \cos\left(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\right)$ | $\approx \sqrt{\frac{2}{\pi x}} \sin\left(x - \frac{\nu\pi}{2} - \frac{\pi}{4}\right)$ |
| **اختلاف فاز مجانبی** | فاز هم‌ارز موج کسینوسی | ۹۰ درجه اختلاف فاز (هم‌ارز موج سینوسی) |

#معادلات_دیفرانسیل #توابع_بسل #روش_فروبنیوس #تابع_گاما #ارتعاشات #مهندسی_صنایع
