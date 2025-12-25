import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * LocalizedLink component - Adds language prefix to links
 * Usage: <LocalizedLink to="/blog">Blog</LocalizedLink>
 * Output: /tr/blog or /en/blog (based on current language)
 */
const LocalizedLink = ({ to, children, ...props }) => {
  const { getLocalizedPath } = useLanguage();
  
  // Harici linkler için normal anchor kullan
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return <a href={to} {...props}>{children}</a>;
  }
  
  // Hash link'leri için (örn: #iletisim)
  if (to.startsWith('#')) {
    return <a href={to} {...props}>{children}</a>;
  }

  // Dil prefix'i ekle
  const localizedTo = getLocalizedPath(to);
  return <Link to={localizedTo} {...props}>{children}</Link>;
};

export default LocalizedLink;
