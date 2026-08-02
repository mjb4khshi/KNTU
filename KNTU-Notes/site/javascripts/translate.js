document.addEventListener("DOMContentLoaded", () => {
  const translateUI = () => {
    // تغییر Placeholder های باکس سرچ
    document.querySelectorAll('input[placeholder*="Search"]').forEach((el) => {
      el.setAttribute("placeholder", "جستجو...");
    });

    // جستجوی دقیق در تمام المان‌های صفحه برای ترجمه متن‌های ثابت
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null,
      false,
    );
    let node;
    while ((node = walker.nextNode())) {
      const text = node.nodeValue.trim();
      if (text === "Search documentation..." || text === "Search...") {
        node.nodeValue = "جستجو در مستندات...";
      } else if (text === "On this page") {
        node.nodeValue = "فهرست مطالب";
      } else if (text === "Copy") {
        node.nodeValue = "رونوشت";
      } else if (text === "Previous") {
        node.nodeValue = "قبلی";
      } else if (text === "Next") {
        node.nodeValue = "بعدی";
      }
    }
  };

  // اجرای اولیه
  translateUI();

  // پایش تغییرات صفحه (برای زمان سوییچ بین صفحات یا رندر شدن کامپوننت‌های داینامیک)
  const observer = new MutationObserver(() => {
    translateUI();
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
