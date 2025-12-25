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

  // SINGLE LANGUAGE MODE: Always use TR
  const currentLang = 'tr';
  const slug = params.slug || null;

  // Dil değiştirme fonksiyonu - disabled
  const switchLanguage = (newLang) => {
    console.warn('Language switching is disabled in single-language mode');
  };

  // URL oluşturma helper'ı - no language prefix
  const getLocalizedPath = (path) => {
    return path;
  };

  // Alternate URLs - only TR
  const getAlternateUrls = () => {
    return [{ lang: 'tr', url: location.pathname }];
  };

  const value = useMemo(() => ({
    currentLang,
    slug,
    switchLanguage,
    getLocalizedPath,
    getAlternateUrls,
    languageInfo: LANGUAGE_INFO[currentLang],
    hasContent: true
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
