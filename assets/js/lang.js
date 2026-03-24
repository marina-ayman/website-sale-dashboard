const translations = {
  en: {
    title: "Welcome",
    description: "This is a sample website.",
    author_profile_title: "Author Profile",
    author_profile_desc: "I am a Full-Stack Web Developer and Digital Product Creator, specializing in Laravel projects, landing pages, and ready-made web solutions. Passionate about delivering high-quality projects, improving existing websites, and helping clients launch their digital products quickly and efficiently.",
    contact_title: "Contact",
    contact_desc: "Whether you want to buy a project, request changes, or build your own custom project, feel free to reach out anytime.",
    home: "Home",
    category: "Category",
    our_services_page: "Our Services Page",
    starter_title: "Welcome",
    starter_desc: "This is a sample website.",
    starter_desc2: "This paragraph will also change language.",
    starter_headline: "Revolutionize Your Digital Experience Today",
    starter_promo1: "Strategia accelerates your business growth through innovative solutions and cutting-edge technology. Join thousands of satisfied customers who have transformed their operations.",
    starter_promo2: "If you need any support or have any questions, don’t hesitate to reach out. I’ll be here to assist you every step of the way. And don’t worry about the prices – what matters most is making your project a success.",
    feature_support: "Support",
    feature_cloud: "Cloud Integration",
    feature_analytics: "Real-time Analytics",
    contact_btn: "contact",
    our_services: "Our Services"
  },
  ar: {
    title: "مرحبا",
    description: "هذا موقع تجريبي.",
    author_profile_title: "الملف الشخصي للمؤلف",
    author_profile_desc: "أنا مطور ويب متكامل ومبدع منتجات رقمية، متخصص في مشاريع لارافيل وصفحات الهبوط والحلول الجاهزة. شغوف بتقديم مشاريع عالية الجودة، وتحسين المواقع الحالية، ومساعدة العملاء على إطلاق منتجاتهم الرقمية بسرعة وكفاءة.",
    contact_title: "تواصل",
    contact_desc: "سواء كنت ترغب في شراء مشروع أو طلب تعديلات أو بناء مشروع مخصص، لا تتردد في التواصل في أي وقت.",
    //404_title: "عذراً! الصفحة غير موجودة",
    //404_desc: "الصفحة التي تبحث عنها ربما تم حذفها أو تغيير اسمها أو غير متوفرة مؤقتاً.",
    home: "الرئيسية",
    category: "التصنيفات",
    our_services_page: "صفحة خدماتنا",
    starter_title: "مرحبا",
    starter_desc: "هذا موقع تجريبي.",
    starter_desc2: "هذا النص سيتغير مع اللغة أيضاً.",
    starter_headline: "غيّر تجربتك الرقمية اليوم",
    starter_promo1: "استراتيجيا تسرّع نمو أعمالك من خلال حلول مبتكرة وتقنيات متطورة. انضم إلى آلاف العملاء الذين طوروا أعمالهم.",
    starter_promo2: "إذا كنت بحاجة لأي دعم أو لديك أي استفسار لا تتردد في التواصل. سأكون معك في كل خطوة. ولا تقلق بشأن الأسعار – الأهم هو نجاح مشروعك.",
    feature_support: "الدعم",
    feature_cloud: "تكامل سحابي",
    feature_analytics: "تحليلات لحظية",
    contact_btn: "تواصل",
    our_services: "خدماتنا"
  }
};

 function setLang(lang) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = translations[lang][key];
      });

      // تغيير اتجاه الصفحة للعربية
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

      // تغيير لغة الصفحة (اختياري لتحسين SEO)
      document.documentElement.lang = lang;
    }