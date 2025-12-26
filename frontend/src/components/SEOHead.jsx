import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "PediZone® - Profesyonel Ayak Bakım Ürünleri",
  description = "PediZone® - Podologların önerileri ve beklentilerine yönelik hazırlanan etkili ayak bakım ürünleri. Ayak mantarı, tırnak bakımı, çatlak topuk çözümleri.",
  canonical,
  noindex = false,
  ogImage = "https://pedizone.com/images/og-image.jpg",
  ogType = "website"
}) => {
  const fullCanonical = canonical ? `https://pedizone.com${canonical}` : 'https://pedizone.com/';
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Robots - Default: index, follow */}
      {noindex ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <meta name="googlebot" content="noindex, nofollow" />
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
          <meta name="googlebot" content="index, follow" />
        </>
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="PediZone®" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHead;
