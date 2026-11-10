---
title: واژه‌نامه تخصصی اصطلاحات علمی و دانشگاهی
description: دیکشنری جامع و تعاملی اصطلاحات، لغات تخصصی انگلیسی، معادل‌های فارسی و کاربردهای مفهومی به تفکیک دروس دانشگاهی با قابلیت جستجو و مرتب‌سازی
tags:
  - واژه‌نامه
  - اصطلاحات
  - آمار
  - احتمال
  - ریاضیات
  - دیکشنری
---

# واژه‌نامه تخصصی اصطلاحات علمی و دانشگاهی

> **راهنمای اصطلاحات:**  
> این بخش مرجع واژه‌شناسی، ترجمه‌های استاندارد و کاربردهای مفهومی اصطلاحات تخصصی در دروس مختلف (با تکیه بر منابع مرجع بین‌المللی نظیر دوره‌های دانشگاه هاروارد و MIT و معادل‌های مصوب دانشگاهی) است. می‌توانید در میان واژگان به صورت آنی جستجو یا بر اساس درس فیلتر کنید.

---

<style>
.glossary-controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1.5rem 0 2rem 0;
  background: var(--color-base-200, rgba(30, 41, 59, 0.5));
  border: 1px solid var(--color-base-300, rgba(255, 255, 255, 0.1));
  border-radius: var(--radius-card, 16px);
  padding: 1.25rem;
}
.glossary-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.glossary-search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.75rem;
  font-family: inherit;
  font-size: 0.95rem;
  background: var(--color-base-100, #0f172a);
  color: var(--color-base-content, #f8fafc);
  border: 1px solid var(--color-base-300, rgba(255, 255, 255, 0.15));
  border-radius: 12px;
  outline: none;
  transition: all 0.2s ease;
}
.glossary-search-input:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.25);
}
.glossary-search-icon {
  position: absolute;
  left: 0.85rem;
  color: var(--color-base-content);
  opacity: 0.6;
  pointer-events: none;
}
.glossary-filter-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.glossary-chips {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.glossary-chip {
  padding: 0.4rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 20px;
  border: 1px solid var(--color-base-300, rgba(255, 255, 255, 0.12));
  background: var(--color-base-100, rgba(15, 23, 42, 0.6));
  color: var(--color-base-content, #94a3b8);
  cursor: pointer;
  transition: all 0.2s ease;
}
.glossary-chip:hover {
  border-color: #06b6d4;
  color: var(--color-base-content, #fff);
}
.glossary-chip.active {
  background: #06b6d4;
  color: #0f172a;
  border-color: #06b6d4;
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(6, 182, 212, 0.35);
}
.glossary-stats {
  font-size: 0.85rem;
  color: var(--color-base-content, #94a3b8);
  opacity: 0.8;
}
.glossary-table-container {
  overflow-x: auto;
  border-radius: var(--radius-card, 16px);
  border: 1px solid var(--color-base-300, rgba(255, 255, 255, 0.1));
  background: var(--color-base-100, #0f172a);
}
.glossary-table {
  width: 100%;
  border-collapse: collapse;
  text-align: right;
  font-size: 0.9rem;
}
.glossary-table th {
  background: var(--color-base-200, rgba(30, 41, 59, 0.8));
  color: var(--color-base-content, #f8fafc);
  padding: 1rem;
  font-weight: 700;
  border-bottom: 2px solid var(--color-base-300, rgba(255, 255, 255, 0.15));
  user-select: none;
  white-space: nowrap;
}
.glossary-table th.sortable {
  cursor: pointer;
  transition: background 0.2s;
}
.glossary-table th.sortable:hover {
  background: rgba(6, 182, 212, 0.15);
  color: #06b6d4;
}
.glossary-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--color-base-300, rgba(255, 255, 255, 0.07));
  vertical-align: top;
  line-height: 1.6;
}
.glossary-table tr:hover td {
  background: rgba(6, 182, 212, 0.04);
}
.glossary-term-en {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-weight: 700;
  direction: ltr;
  text-align: left;
  color: #38bdf8;
  display: inline-block;
  font-size: 0.92rem;
}
.glossary-term-fa {
  font-weight: 700;
  color: var(--color-base-content, #f8fafc);
}
.glossary-category-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.3);
  white-space: nowrap;
}
.glossary-source-badge {
  display: inline-block;
  font-size: 0.75rem;
  padding: 1px 7px;
  border-radius: 8px;
  background: var(--color-base-200, rgba(255, 255, 255, 0.08));
  color: var(--color-base-content, #94a3b8);
  font-family: ui-monospace, monospace;
}
.glossary-copy-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-base-content);
  opacity: 0.5;
  padding: 2px 4px;
  margin-right: 4px;
  border-radius: 4px;
  vertical-align: middle;
  transition: opacity 0.2s;
}
.glossary-copy-btn:hover {
  opacity: 1;
  color: #06b6d4;
}
.no-results-msg {
  text-align: center;
  padding: 3rem 1rem;
  color: var(--color-base-content, #94a3b8);
  opacity: 0.7;
  display: none;
}
</style>

<div class="glossary-controls">
  <div class="glossary-search-wrapper">
    <svg class="glossary-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    <input type="text" id="glossarySearch" class="glossary-search-input" placeholder="جستجو در اصطلاح انگلیسی، معادل فارسی یا توضیحات مفهومی..." autocomplete="off">
  </div>
  
  <div class="glossary-filter-bar">
    <div class="glossary-chips">
      <span class="glossary-chip active" data-filter="all">همه دسته‌ها</span>
      <span class="glossary-chip" data-filter="probability">نظریه احتمال و آمار</span>
      <span class="glossary-chip" data-filter="combinatorics">ترکیبیات و اصول شمارش</span>
      <span class="glossary-chip" data-filter="math">مبانی ریاضی و مجموعه‌ها</span>
    </div>
    <div class="glossary-stats" id="glossaryStats">
      در حال نمایش <strong id="visibleCount">۳۲</strong> اصطلاح
    </div>
  </div>
</div>

<div class="glossary-table-container">
  <table class="glossary-table" id="glossaryTable">
    <thead>
      <tr>
        <th class="sortable" data-sort="en" style="width: 24%;">واژه تخصصی (انگلیسی) <span class="sort-icon">⇅</span></th>
        <th class="sortable" data-sort="fa" style="width: 22%;">معادل و ترجمه فارسی <span class="sort-icon">⇅</span></th>
        <th style="width: 14%;">دسته درسی</th>
        <th style="width: 33%;">توضیحات مفهومی و کاربرد در درس</th>
        <th style="width: 7%;">جلسه/منبع</th>
      </tr>
    </thead>
    <tbody id="glossaryTbody">
      <!-- ردیف‌های واژگان -->
      <tr data-category="probability" data-en="sample space" data-fa="فضای نمونه">
        <td><span class="glossary-term-en">Sample Space</span></td>
        <td><span class="glossary-term-fa">فضای نمونه</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>مجموعه تمام برآمدها یا پیامدهای ممکن یک آزمایش تصادفی که معمولاً با $S$ یا $\Omega$ نشان داده می‌شود و طبق اصول موضوعه، احتمال کل آن برابر با ۱ است ($P(S) = 1$).</td>
        <td><span class="glossary-source-badge">1, 2, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="event" data-fa="پیشامد رویداد">
        <td><span class="glossary-term-en">Event</span></td>
        <td><span class="glossary-term-fa">پیشامد / رویداد</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>هر زیرمجموعه‌ای از فضای نمونه ($A \subseteq S$) که می‌توان یک مقدار احتمال به آن نسبت داد.</td>
        <td><span class="glossary-source-badge">1, 2, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="naive definition of probability" data-fa="تعریف ساده لوحانه کلاسیک ابتدایی احتمال">
        <td><span class="glossary-term-en">Naive Definition of Probability</span></td>
        <td><span class="glossary-term-fa">تعریف ساده‌لوحانه (کلاسیک / مقدماتی) احتمال</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>تعریفی پایه از احتمال که در آن فرض می‌شود تمامی برآمدهای فضای نمونه محدود بوده و دارای شانس یکسان برای رخ دادن هستند (برآمدهای هم‌شانس)؛ در این روش احتمال از تقسیم تعداد حالات مطلوب بر کل حالات ممکن به دست می‌آید ($P(A) = \frac{|A|}{|S|}$).</td>
        <td><span class="glossary-source-badge">1, 2, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="non-naive definition of probability" data-fa="تعریف غیر ساده لوحانه اصل موضوعه ای پیشرفته احتمال">
        <td><span class="glossary-term-en">Non-naive Definition of Probability</span></td>
        <td><span class="glossary-term-fa">تعریف غیر ساده‌لوحانه (اصل موضوعه‌ای / عام) احتمال</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>تعریف عمومی‌تر و اصل موضوعه‌ای احتمال با استفاده از اصول سه‌گانه کولموگروف که نیازی به محدود بودن فضای نمونه یا متکی بودن بر فرض هم‌شانس بودن برآمدها ندارد.</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="axioms of probability" data-fa="اصول موضوعه احتمال اصول کولموگروف">
        <td><span class="glossary-term-en">Axioms of Probability</span></td>
        <td><span class="glossary-term-fa">اصول موضوعه احتمال (اصول کولموگروف)</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>قواعد و قوانین پایه‌ای که تابع احتمال باید از آن‌ها پیروی کند؛ شامل: ۱. احتمال هر پیشامد نامنفی است ($P(A) \ge 0$)، ۲. احتمال فضای نمونه ۱ است ($P(S) = 1$)، ۳. احتمال اجتماع شمارش‌پذیر پیشامدهای ناسازگار برابر با مجموع احتمال‌های آن‌ها است.</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>

      <tr data-category="math" data-en="empty set" data-fa="مجموعه تهی">
        <td><span class="glossary-term-en">Empty Set</span></td>
        <td><span class="glossary-term-fa">مجموعه تهی</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>مجموعه‌ای فاقد عضو ($\emptyset$) که نمایانگر پیشامد غیرممکن است و طبق اصول موضوعه احتمال، احتمال وقوع آن برابر با صفر می‌باشد ($P(\emptyset) = 0$).</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="disjoint events mutually exclusive non-overlapping" data-fa="پیشامدهای ناسازگار مجزا بدون اشتراک مانعة الجمع">
        <td><span class="glossary-term-en">Disjoint Events / Mutually Exclusive</span></td>
        <td><span class="glossary-term-fa">پیشامدهای ناسازگار (مجزا / مانعة‌الجمع)</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>پیشامدهایی که هیچ اشتراکی با یکدیگر ندارند ($A \cap B = \emptyset$) و نمی‌توانند در یک آزمایش به طور هم‌زمان رخ دهند.</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>

      <tr data-category="math" data-en="union of events countable union" data-fa="اجتماع پیشامدها اجتماع شمارش پذیر">
        <td><span class="glossary-term-en">Union of Events / Countable Union</span></td>
        <td><span class="glossary-term-fa">اجتماع پیشامدها / اجتماع شمارش‌پذیر</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>پیشامدی که زمانی رخ می‌دهد که حداقل یکی از پیشامدهای مربوطه رخ دهد. با نماد $\cup$ نشان داده می‌شود و شکل شمارش‌پذیر آن در اصل سوم احتمال به کار می‌رود.</td>
        <td><span class="glossary-source-badge">1, 2, 3</span></td>
      </tr>

      <tr data-category="math" data-en="intersection of events" data-fa="اشتراک پیشامدها اشتراک">
        <td><span class="glossary-term-en">Intersection of Events</span></td>
        <td><span class="glossary-term-fa">اشتراک پیشامدها</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>پیشامدی که زمانی رخ می‌دهد که تمام پیشامدهای مربوطه به طور هم‌زمان رخ دهند. با نماد $\cap$ نشان داده می‌شود و عملگری برای یافتن حالات مشترک بین پیشامدهاست.</td>
        <td><span class="glossary-source-badge">1, 2</span></td>
      </tr>

      <tr data-category="probability" data-en="complement of an event complement" data-fa="متمم یک پیشامد متمم مجموعه">
        <td><span class="glossary-term-en">Complement of an Event</span></td>
        <td><span class="glossary-term-fa">متمم یک پیشامد / متمم مجموعه</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>پیشامدی شامل تمام برآمدهایی از فضای نمونه که در پیشامد اصلی وجود ندارند ($A^c$). در محاسبه احتمالات، متوسل شدن به قاعده متمم ($P(A^c) = 1 - P(A)$) اغلب راهکار بسیار ساده‌تری برای حل مسائل است.</td>
        <td><span class="glossary-source-badge">1, 2</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="multiplication rule" data-fa="اصل ضرب قاعده ضرب شمارش">
        <td><span class="glossary-term-en">Multiplication Rule</span></td>
        <td><span class="glossary-term-fa">اصل ضرب (در شمارش / قاعده ضرب)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>اصلی بنیادی در ترکیبیات برای محاسبه تعداد کل حالات آزمایش‌های متوالی؛ اگر آزمایشی شامل چند مرحله مستقل با تعداد پیامدهای مشخص باشد، کل پیامدها برابر با حاصل‌ضرب تعداد پیامدهای هر مرحله است ($n_1 \times n_2 \times \dots$).</td>
        <td><span class="glossary-source-badge">1, 2, 3</span></td>
      </tr>

      <tr data-category="math" data-en="venn diagram" data-fa="نمودار ون">
        <td><span class="glossary-term-en">Venn Diagram</span></td>
        <td><span class="glossary-term-fa">نمودار ون</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>بازنمایی تصویری مجموعه‌ها و پیشامدها برای درک شهودی مفاهیمی مانند احتمال به عنوان مساحت و نمایش نحوه روابط، اشتراک، تفاضل و اجتماع مجموعه‌ها.</td>
        <td><span class="glossary-source-badge">1, 2</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="sampling with without replacement" data-fa="نمونه گیری با بدون جایگذاری">
        <td><span class="glossary-term-en">Sampling With / Without Replacement</span></td>
        <td><span class="glossary-term-fa">نمونه‌گیری با / بدون جایگذاری</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>روش‌های انتخاب اعضا از یک جامعه؛ در نمونه‌گیری با جایگذاری، پس از انتخاب یک عضو دوباره به مجموعه بازگردانده می‌شود (امکان انتخاب مجدد)، اما در بدون جایگذاری عضو انتخاب‌شده بازنمی‌گردد.</td>
        <td><span class="glossary-source-badge">2, 3</span></td>
      </tr>

      <tr data-category="probability" data-en="independence" data-fa="استقلال پیشامدهای مستقل">
        <td><span class="glossary-term-en">Independence</span></td>
        <td><span class="glossary-term-fa">استقلال</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>فرضی در آمار و احتمال که طبق آن رخ دادن یک پیشامد هیچ اثری بر احتمال وقوع پیشامد دیگر ندارد؛ به فرم ریاضی: $P(A \cap B) = P(A)P(B)$.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="probability" data-en="birthday problem birthday paradox" data-fa="مسئله روز تولد پارادوکس روز تولد">
        <td><span class="glossary-term-en">Birthday Problem / Paradox</span></td>
        <td><span class="glossary-term-fa">مسئله روز تولد (پارادوکس روز تولد)</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>یکی از مشهورترین مسائل احتمال که نشان می‌دهد برخلاف شهود اولیه، در اتاقی با تنها ۲۳ نفر، احتمال اینکه حداقل دو نفر روز تولد مشترکی داشته باشند بیش از ۵۰ درصد است (به دلیل وجود ۲۵۳ جفت مقایسه).</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="pigeonhole principle" data-fa="اصل لانه کبوتر دیریکله">
        <td><span class="glossary-term-en">Pigeonhole Principle</span></td>
        <td><span class="glossary-term-fa">اصل لانه کبوتر (دیریکله)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>اصلی در ترکیبیات که بیان می‌کند اگر تعداد اشیاء از تعداد ظرف‌ها بیشتر باشد، حداقل یک ظرف باید شامل بیش از یک شیء باشد. در مسئله روز تولد برای $k \ge 366$ احتمال تشابه قطعاً ۱ (۱۰۰٪) است.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="combinations k choose 2 binomial coefficient" data-fa="ترکیب انتخاب ۲ از k ضریب دوجمله ای">
        <td><span class="glossary-term-en">Combinations / Binomial Coefficient</span></td>
        <td><span class="glossary-term-fa">ترکیب / انتخاب ۲ از K / ضریب دو‌جمله‌ای</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>فرمول ترکیبیاتی محاسبه تعداد روش‌های انتخاب $k$ عنصر از $n$ عنصر بدون توجه به ترتیب با نماد $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. دلیل رشد انفجاری جفت‌ها در مسئله روز تولد رابطه $\binom{k}{2} = \frac{k(k-1)}{2}$ است.</td>
        <td><span class="glossary-source-badge">1, 2</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="inclusion-exclusion principle" data-fa="اصل شمول و عدم شمول گنجایش و طرد">
        <td><span class="glossary-term-en">Inclusion-Exclusion Principle</span></td>
        <td><span class="glossary-term-fa">اصل شمول و عدم شمول (گنجایش و طرد)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>فرمولی برای محاسبه احتمال اجتماع پیشامدهایی که لزوماً ناسازگار نیستند؛ با جمع احتمال‌های تک‌تک، کسر اشتراک‌های دوتایی، جمع سه‌تایی‌ها و ادامه متناوب تا پایان.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="probability" data-en="matching problem de montmort problem" data-fa="مسئله تطابق مسئله دو مونمورت">
        <td><span class="glossary-term-en">Matching Problem (de Montmort)</span></td>
        <td><span class="glossary-term-fa">مسئله تطابق / مسئله دو مونمورت</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>یک مسئله کلاسیک احتمال که در آن کارت‌های شماره‌گذاری‌شده بور خورده و یکی‌یکی رو می‌شوند؛ اگر شماره کارت با موقعیت زمانی‌اش یکی باشد تطابق رخ می‌دهد. این مسئله با اصل شمول و عدم شمول حل می‌شود و حد آن $1 - 1/e$ است.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="permutations" data-fa="جایگشت ها تبدیل ها">
        <td><span class="glossary-term-en">Permutations</span></td>
        <td><span class="glossary-term-fa">جایگشت‌ها</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>ترتیب‌های مختلف قرارگیری عناصر متمایز یک مجموعه در یک ردیف خطی. برای $n$ شیء متمایز، تعداد کل جایگشت‌های ممکن برابر با $n!$ است.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="probability" data-en="symmetry" data-fa="تقارن ویژگی متقارن">
        <td><span class="glossary-term-en">Symmetry</span></td>
        <td><span class="glossary-term-fa">تقارن</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>ویژگی قدرتمندی در احتمال که نشان می‌دهد به دلیل یکسان بودن شرایط ساختاری، پیشامدهای مختلف شانس‌های برابر دارند و به کمک آن می‌توان محاسبات جبری غول‌پیکر را دور زد.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="math" data-en="taylor series" data-fa="سری تیلور بسط تیلور">
        <td><span class="glossary-term-en">Taylor Series</span></td>
        <td><span class="glossary-term-fa">سری تیلور</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>بسط ریاضی توابع پیوسته به صورت سری‌های توانی نامتناهی. در تقریب مسئله روز تولد ($e^{-x} \approx 1 - x$) و حد مسئله تطابق بر مبنای بسط تابع $e^x$ نقشی کلیدی ایفا می‌کند.</td>
        <td><span class="glossary-source-badge">1</span></td>
      </tr>

      <tr data-category="math" data-en="set theory" data-fa="نظریه مجموعه ها مبانی جبر مجموعه">
        <td><span class="glossary-term-en">Set Theory</span></td>
        <td><span class="glossary-term-fa">نظریه مجموعه‌ها</span></td>
        <td><span class="glossary-category-badge">مبانی ریاضی</span></td>
        <td>بستر و زبان ریاضی پایه‌ای برای مدل‌سازی پیشامدها و فضای نمونه در علم احتمال مدرن با تکیه بر مفاهیم عضویت، زیرمجموعه، اجتماع، اشتراک و متمم.</td>
        <td><span class="glossary-source-badge">2</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="factorial" data-fa="فاکتوریل">
        <td><span class="glossary-term-en">Factorial</span></td>
        <td><span class="glossary-term-fa">فاکتوریل</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>حاصل‌ضرب اعداد صحیح مثبت از ۱ تا $n$ با نماد $n!$ که به صورت بازگشتی $n! = n \times (n-1)!$ با فرض قراردادی $0! = 1$ تعریف شده و در جایگشت‌ها و ترکیبیات به کار می‌رود.</td>
        <td><span class="glossary-source-badge">2</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="tree diagram" data-fa="نمودار درختی">
        <td><span class="glossary-term-en">Tree Diagram</span></td>
        <td><span class="glossary-term-fa">نمودار درختی</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>ابزاری بصری برای نمایش شاخه‌های تصمیم و مراحل مختلف یک آزمایش متوالی و تحلیل گام‌به‌گام اصل ضرب در شمارش.</td>
        <td><span class="glossary-source-badge">2</span></td>
      </tr>

      <tr data-category="probability" data-en="self-annotating self annotating" data-fa="خودتفسیر خود تبیین گر دارای تفسیر درون متنی">
        <td><span class="glossary-term-en">Self-annotating</span></td>
        <td><span class="glossary-term-fa">خود‌تفسیر / خود‌تبیین‌گر</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>ویژگی نمادها و فرمول‌های ریاضی (نظیر $\binom{n}{k}$) که ظاهر و ساختار نماد، داستان و چگونگی شمارش مسئله را بدون نیاز به محاسبه رقم نهایی بازگو می‌کند.</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="indistinguishable particles" data-fa="ذرات غیرقابل تمایز همسان اشیاء یکسان">
        <td><span class="glossary-term-en">Indistinguishable Particles</span></td>
        <td><span class="glossary-term-fa">ذرات غیرقابل تمایز (همسان)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>مفهومی در شمارش و فیزیک آماری (بوزون‌ها) که در آن اشیاء از یکدیگر قابل تشخیص نیستند و جابه‌جایی آن‌ها چینش یا حالت جدیدی در فضای برآمدها ایجاد نمی‌کند.</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="distinguishable boxes" data-fa="جعبه های قابل تمایز متمایز سبدهای متمایز">
        <td><span class="glossary-term-en">Distinguishable Boxes</span></td>
        <td><span class="glossary-term-fa">جعبه‌های قابل تمایز (متمایز)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>دسته‌ها، سبدها یا متغیرهایی که دارای برچسب و هویت مشخص و جداگانه‌ای هستند (مانند متغیرهای $x_1, x_2, \dots$ در معادله خط و توپ).</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="story proof proof by interpretation" data-fa="اثبات داستانی اثبات از طریق تفسیر">
        <td><span class="glossary-term-en">Story Proof</span></td>
        <td><span class="glossary-term-fa">اثبات داستانی (اثبات از طریق تفسیر)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>روش اثبات بدون جبر در ترکیبیات؛ با تعریف یک سناریوی شمارش مشترک برای دو سمت یک رابطه و اثبات اینکه هر دو طرف یک کمیت واحد را می‌شمارند.</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="combinatorics" data-en="vandermonde's identity vandermonde" data-fa="همانی وندرموند اتحاد وندرموند">
        <td><span class="glossary-term-en">Vandermonde's Identity</span></td>
        <td><span class="glossary-term-fa">همانی وندرموند (اتحاد وندرموند)</span></td>
        <td><span class="glossary-category-badge">اصول شمارش</span></td>
        <td>یک اتحاد بنیادین در ترکیبیات برای بسط و ساده‌سازی ضرایب دوجمله‌ای: $\binom{m+n}{k} = \sum_{j=0}^k \binom{m}{j}\binom{n}{k-j}$.</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="probability" data-en="probability space" data-fa="فضای احتمال سه گانه احتمال">
        <td><span class="glossary-term-en">Probability Space</span></td>
        <td><span class="glossary-term-fa">فضای احتمال</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>ساختار ریاضی بنیادین سه‌گانه $(S, \mathcal{F}, P)$ شامل فضای نمونه، خانواده پیشامدها (سیگما-جبر) و تابع اندازه احتمال که پایه نظریه اصل موضوعه‌ای احتمال است.</td>
        <td><span class="glossary-source-badge">3</span></td>
      </tr>

      <tr data-category="probability" data-en="coincidence law of truly large numbers" data-fa="کویینسیدنس همزمانی تصادفی تصادف غریب تصادف باورنکردنی">
        <td><span class="glossary-term-en">Coincidence</span></td>
        <td><span class="glossary-term-fa">همزمانی تصادفی / تصادف غریب (کویینسیدنس)</span></td>
        <td><span class="glossary-category-badge">نظریه احتمال</span></td>
        <td>وقوع هم‌زمان یا نزدیک به همِ دو یا چند پیشامد به ظاهر نامرتبط بدون هرگونه رابطه علّی. در نظریه احتمال و قانون اعداد واقعاً بزرگ (Diaconis & Mosteller)، اثبات می‌شود که با افزایش فرصت‌ها و جفت‌های مقایسه، رخ دادن تصادف‌های خارق‌العاده حتمی و طبیعی است.</td>
        <td><span class="glossary-source-badge">1, 3</span></td>
      </tr>
    </tbody>
  </table>

  <div id="noResults" class="no-results-msg">
    <p>هیچ واژه‌ای منطبق با جستجوی شما یافت نشد.</p>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("glossarySearch");
  const chips = document.querySelectorAll(".glossary-chip");
  const table = document.getElementById("glossaryTable");
  const tbody = document.getElementById("glossaryTbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));
  const visibleCountEl = document.getElementById("visibleCount");
  const noResultsEl = document.getElementById("noResults");
  const sortHeaders = table.querySelectorAll("th.sortable");

  let currentFilter = "all";
  let currentSort = { col: null, asc: true };

  function filterTable() {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    rows.forEach(row => {
      const category = row.getAttribute("data-category");
      const en = row.getAttribute("data-en") || "";
      const fa = row.getAttribute("data-fa") || "";
      const text = row.textContent.toLowerCase();

      const matchesCategory = (currentFilter === "all" || category === currentFilter);
      const matchesSearch = !query || en.includes(query) || fa.includes(query) || text.includes(query);

      if (matchesCategory && matchesSearch) {
        row.style.display = "";
        visible++;
      } else {
        row.style.display = "none";
      }
    });

    visibleCountEl.textContent = visible;
    noResultsEl.style.display = (visible === 0) ? "block" : "none";
  }

  // Filter chips
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      filterTable();
    });
  });

  // Search input
  searchInput.addEventListener("input", filterTable);

  // Sorting
  sortHeaders.forEach(th => {
    th.addEventListener("click", () => {
      const sortType = th.getAttribute("data-sort");
      const isAsc = (currentSort.col === sortType) ? !currentSort.asc : true;
      currentSort = { col: sortType, asc: isAsc };

      // Update header icons
      sortHeaders.forEach(h => {
        const icon = h.querySelector(".sort-icon");
        if (h === th) {
          icon.textContent = isAsc ? "▲" : "▼";
          h.style.color = "#06b6d4";
        } else {
          icon.textContent = "⇅";
          h.style.color = "";
        }
      });

      rows.sort((a, b) => {
        let valA = (sortType === "en") ? a.getAttribute("data-en") : a.getAttribute("data-fa");
        let valB = (sortType === "en") ? b.getAttribute("data-en") : b.getAttribute("data-fa");
        return isAsc ? valA.localeCompare(valB, "fa") : valB.localeCompare(valA, "fa");
      });

      rows.forEach(r => tbody.appendChild(r));
    });
  });
});
</script>

---

#واژه‌نامه #اصطلاحات_تخصصی #آمار_و_احتمال #ترکیبیات #دیکشنری_علمی #استت۱۱۰ #دانشگاه
