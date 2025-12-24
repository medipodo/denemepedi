// UI çevirileri - Sayfa içerikleri mock.js'te kalacak
export const translations = {
  tr: {
    // Header
    nav: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      blog: 'Blog',
      certificates: 'Sertifikalar',
      dealers: 'Bayiler',
      contact: 'İletişim',
      footAnalysis: 'Ayak Analizi'
    },
    // Footer
    footer: {
      quickLinks: 'Hızlı Linkler',
      products: 'Ürünler',
      contact: 'İletişim',
      legal: 'Yasal',
      privacyPolicy: 'Gizlilik Politikası',
      termsOfService: 'Kullanım Şartları',
      allRightsReserved: 'Tüm hakları saklıdır.',
      tagline: 'Profesyonel Ayak Bakım Ürünleri'
    },
    // Common
    common: {
      readMore: 'Devamını Oku',
      learnMore: 'Daha Fazla',
      viewAll: 'Tümünü Gör',
      back: 'Geri',
      send: 'Gönder',
      loading: 'Yükleniyor...',
      notFound: 'Sayfa Bulunamadı',
      error: 'Bir hata oluştu'
    },
    // Home
    home: {
      heroTitle: 'Profesyonel Ayak Bakım Ürünleri',
      heroSubtitle: 'Podologların önerileri doğrultusunda geliştirilen etkili formüller',
      featuredProducts: 'Öne Çıkan Ürünler',
      latestBlogs: 'Son Blog Yazıları',
      contactUs: 'İletişime Geçin',
      contactSubtitle: 'Sorularınız için buradayız'
    },
    // Contact Form
    contact: {
      name: 'Adınız',
      email: 'E-posta adresiniz',
      message: 'Mesajınız',
      send: 'Mesaj Gönder',
      phone: 'Telefon',
      address: 'Adres'
    },
    // SEO
    seo: {
      noContentTitle: 'İçerik Yakında',
      noContentMessage: 'Bu sayfanın içeriği henüz hazırlanıyor.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      blog: 'Blog',
      certificates: 'Certificates',
      dealers: 'Dealers',
      contact: 'Contact'
    },
    footer: {
      quickLinks: 'Quick Links',
      products: 'Products',
      contact: 'Contact',
      legal: 'Legal',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      allRightsReserved: 'All rights reserved.',
      tagline: 'Professional Foot Care Products'
    },
    common: {
      readMore: 'Read More',
      learnMore: 'Learn More',
      viewAll: 'View All',
      back: 'Back',
      send: 'Send',
      loading: 'Loading...',
      notFound: 'Page Not Found',
      error: 'An error occurred'
    },
    home: {
      heroTitle: 'Professional Foot Care Products',
      heroSubtitle: 'Effective formulas developed with podiatrist recommendations',
      featuredProducts: 'Featured Products',
      latestBlogs: 'Latest Blog Posts',
      contactUs: 'Contact Us',
      contactSubtitle: 'We are here for your questions'
    },
    contact: {
      name: 'Your Name',
      email: 'Your Email',
      message: 'Your Message',
      send: 'Send Message',
      phone: 'Phone',
      address: 'Address'
    },
    seo: {
      noContentTitle: 'Coming Soon',
      noContentMessage: 'Content for this page is being prepared.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      products: 'Produkte',
      blog: 'Blog',
      certificates: 'Zertifikate',
      dealers: 'Händler',
      contact: 'Kontakt'
    },
    footer: {
      quickLinks: 'Schnelllinks',
      products: 'Produkte',
      contact: 'Kontakt',
      legal: 'Rechtliches',
      privacyPolicy: 'Datenschutz',
      termsOfService: 'Nutzungsbedingungen',
      allRightsReserved: 'Alle Rechte vorbehalten.',
      tagline: 'Professionelle Fußpflegeprodukte'
    },
    common: {
      readMore: 'Weiterlesen',
      learnMore: 'Mehr erfahren',
      viewAll: 'Alle anzeigen',
      back: 'Zurück',
      send: 'Senden',
      loading: 'Wird geladen...',
      notFound: 'Seite nicht gefunden',
      error: 'Ein Fehler ist aufgetreten'
    },
    home: {
      heroTitle: 'Professionelle Fußpflegeprodukte',
      heroSubtitle: 'Wirksame Formeln, entwickelt mit Empfehlungen von Podologen',
      featuredProducts: 'Ausgewählte Produkte',
      latestBlogs: 'Neueste Blogbeiträge',
      contactUs: 'Kontaktieren Sie uns',
      contactSubtitle: 'Wir sind für Ihre Fragen da'
    },
    contact: {
      name: 'Ihr Name',
      email: 'Ihre E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      phone: 'Telefon',
      address: 'Adresse'
    },
    seo: {
      noContentTitle: 'Demnächst',
      noContentMessage: 'Der Inhalt dieser Seite wird vorbereitet.'
    }
  }
};

export const getTranslation = (lang, key) => {
  const keys = key.split('.');
  let result = translations[lang];
  
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      // Fallback to Turkish
      result = translations.tr;
      for (const k2 of keys) {
        if (result && result[k2]) {
          result = result[k2];
        } else {
          return key; // Return key if translation not found
        }
      }
      break;
    }
  }
  
  return result;
};
