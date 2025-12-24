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
  const { currentLang, getAlternateUrls, hasContent } = useLanguage();
  const alternateUrls = getAlternateUrls();
  
  // İçerik yoksa noindex ekle
  const shouldNoIndex = noIndex || !hasContent;
  
  const baseUrl = 'https://denemepedi.netlify.app';
  const currentUrl = `${baseUrl}${canonicalPath || window.location.pathname}`;

  return (
    <Helmet>
      <html lang={currentLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Robots */}
      {shouldNoIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      
      {/* hreflang tags */}
      {alternateUrls.map(({ lang, url }) => (
        <link 
          key={lang} 
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}${url}`} 
        />
      ))}
      
      {/* x-default (varsayılan dil) */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${baseUrl}/tr${canonicalPath || ''}`} 
      />
      
      {/* Open Graph */}
      <meta property="og:locale" content={currentLang === 'tr' ? 'tr_TR' : currentLang === 'de' ? 'de_DE' : 'en_US'} />
      {SUPPORTED_LANGUAGES.filter(l => l !== currentLang).map(lang => (
        <meta 
          key={lang} 
          property="og:locale:alternate" 
          content={lang === 'tr' ? 'tr_TR' : lang === 'de' ? 'de_DE' : 'en_US'} 
        />
      ))}
    </Helmet>
  );
};

export default SEOHead;
