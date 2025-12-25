import React, { createContext, useContext, useMemo } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

// Desteklenen diller
export const SUPPORTED_LANGUAGES = ['tr', 'en', 'de'];
export const DEFAULT_LANGUAGE = 'tr'; // LOCKED: Site is TR-only

// Dil bilgileri - i18n infrastructure kept for future use
export const LANGUAGE_INFO = {
  tr: {
    code: 'tr',
    name: 'Türkçe',
    flag: '/assets/flags/turkey.svg',
    hasContent: true
  },
  en: {
    code: 'en',
    name: 'English',
    flag: '/assets/flags/uk.svg',
    hasContent: false // İçerik eklenince true yapılacak
  },
  de: {
    code: 'de',
    name: 'Deutsch',
    flag: '/assets/flags/germany.svg',
    hasContent: false // İçerik eklenince true yapılacak
  }
};

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // URL'den dil kodunu al
  const pathLang = location.pathname.split('/')[1];
  const currentLang = SUPPORTED_LANGUAGES.includes(pathLang) ? pathLang : DEFAULT_LANGUAGE;
  const slug = params.slug || null;

  // Dil değiştirme fonksiyonu
  const switchLanguage = (newLang) => {
    if (!SUPPORTED_LANGUAGES.includes(newLang)) return;
    
    // Mevcut path'i yeni dil ile değiştir
    const pathWithoutLang = location.pathname.replace(/^\/(tr|en|de)/, '');
    const newPath = `/${newLang}${pathWithoutLang || ''}`;
    navigate(newPath);
  };

  // URL oluşturma helper'ı
  const getLocalizedPath = (path) => {
    // Eğer path zaten dil prefix'i ile başlıyorsa, olduğu gibi dön
    if (/^\/(tr|en|de)/.test(path)) {
      return path;
    }
    return `/${currentLang}${path}`;
  };

  // Diğer dillerdeki aynı sayfanın URL'lerini al (hreflang için)
  const getAlternateUrls = () => {
    const pathWithoutLang = location.pathname.replace(/^\/(tr|en|de)/, '');
    return SUPPORTED_LANGUAGES.map(langCode => ({
      lang: langCode,
      url: `/${langCode}${pathWithoutLang || ''}`
    }));
  };

  const value = useMemo(() => ({
    currentLang,
    slug,
    switchLanguage,
    getLocalizedPath,
    getAlternateUrls,
    languageInfo: LANGUAGE_INFO[currentLang],
    hasContent: LANGUAGE_INFO[currentLang]?.hasContent ?? false
  }), [currentLang, slug, location.pathname]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
