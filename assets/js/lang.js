const translations = {
  en: {
    title: "Welcome",
    description: "This is a sample website."
  },
  ar: {
    title: "مرحبا",
    description: "هذا موقع تجريبي."
  }
};

function setLang(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = translations[lang][key];
  });

  // تغيير اتجاه الصفحة للعربية
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
}