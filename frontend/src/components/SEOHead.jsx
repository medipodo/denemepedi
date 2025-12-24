import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage, LANGUAGE_INFO, SUPPORTED_LANGUAGES } from '../i18n/LanguageContext';

/**
 * SEO Head component - hreflang ve canonical tagları
 */
const SEOHead = ({ 
  title, 
  description, 
  canonicalPath,
  noIndex = false 
}) => {
  const { currentLang, hasContent } = useLanguage();
  
  // İçerik yoksa noindex ekle
  const shouldNoIndex = noIndex || !hasContent;
  
  const baseUrl = 'https://denemepedi.netlify.app';
  
  // Canonical - her zaman kendi dil URL'sini işaret etsin
  const pathWithoutLang = (canonicalPath || window.location.pathname).replace(/^\/(tr|en|de)/, '');
  const currentCanonical = `${baseUrl}/${currentLang}${pathWithoutLang}`;

  // hreflang - SADECE içeriği olan diller için
  const languagesWithContent = SUPPORTED_LANGUAGES.filter(lang => LANGUAGE_INFO[lang].hasContent);

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical - kendi dil URL'si */}
      <link rel="canonical" href={currentCanonical} />
      
      {/* Robots */}
      {shouldNoIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* hreflang tags - SADECE içeriği olan diller */}
      {languagesWithContent.map((lang) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}/${lang}${pathWithoutLang}`} 
        />
      ))}
      
      {/* x-default - Türkçe (varsayılan) */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${baseUrl}/tr${pathWithoutLang}`} 
      />
      
      {/* Open Graph */}
      <meta property="og:locale" content={currentLang === 'tr' ? 'tr_TR' : currentLang === 'de' ? 'de_DE' : 'en_US'} />
      <meta property="og:url" content={currentCanonical} />
    </Helmet>
  );
};

export default SEOHead;
