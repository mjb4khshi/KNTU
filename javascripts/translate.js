document.addEventListener("DOMContentLoaded", () => {
  const translateUI = () => {
    // ترجمه Placeholder باکس‌های سرچ
    document.querySelectorAll("input").forEach((el) => {
      const placeholder = el.getAttribute("placeholder");
      if (placeholder && placeholder.toLowerCase().includes("search")) {
        el.setAttribute("placeholder", "جستجو...");
      }
    });

    // جستجوی متن‌ها بدون حساسیت به حروف بزرگ و کوچک
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    let node;
    while ((node = walker.nextNode())) {
      const originalText = node.nodeValue;
      const text = originalText.trim().toLowerCase(); // تبدیل به حروف کوچک برای بررسی راحت‌تر

      if (!text) continue;

      if (text === "on this page") {
        node.nodeValue = originalText.replace(/on this page/gi, "فهرست مطالب");
      } else if (text === "search documentation..." || text === "search...") {
        node.nodeValue = "جستجو در مستندات...";
      } else if (text === "copy") {
        node.nodeValue = originalText.replace(/copy/gi, "رونوشت");
      } else if (text === "copied!") {
        node.nodeValue = originalText.replace(/copied!/gi, "کپی شد!");
      } else if (text === "previous") {
        node.nodeValue = originalText.replace(/previous/gi, "قبلی");
      } else if (text === "next") {
        node.nodeValue = originalText.replace(/next/gi, "بعدی");
      } else if (text === "menu") {
        node.nodeValue = originalText.replace(/menu/gi, "فهرست");
      } else if (text === "home") {
        node.nodeValue = originalText.replace(/home/gi, "خانه");
      }
    }
  };

  // اجرای اولیه
  translateUI();

  // پایش تغییرات صفحه (برای وقتی دکمه کپی رو میزنی یا منوی موبایل باز میشه)
  const observer = new MutationObserver(() => translateUI());
  observer.observe(document.body, { childList: true, subtree: true });
});
