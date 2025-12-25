import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Dil prefix'li Link component'i
 * Kullanım: <LocalizedLink to="/blog">Blog</LocalizedLink>
 * Çıktı: /tr/blog veya /en/blog (mevcut dile göre)
 */
const LocalizedLink = ({ to, children, ...props }) => {
  const { getLocalizedPath } = useLanguage();
  
  // Harici linkler için normal Link kullan
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return <a href={to} {...props}>{children}</a>;
  }
  
  // Hash link'leri için (örn: #iletisim)
  if (to.startsWith('#')) {
    return <a href={to} {...props}>{children}</a>;
  }

  const localizedTo = getLocalizedPath(to);
  
  return <Link to={localizedTo} {...props}>{children}</Link>;
};

export default LocalizedLink;
