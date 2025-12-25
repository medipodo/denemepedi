import React from 'react';
import { Link } from 'react-router-dom';
// import { useLanguage } from '../i18n/LanguageContext'; // DISABLED: Single language mode

/**
 * LocalizedLink component - Single language (TR) mode
 * Usage: <LocalizedLink to="/blog">Blog</LocalizedLink>
 * Output: /blog (no language prefix)
 */
const LocalizedLink = ({ to, children, ...props }) => {
  // Harici linkler için normal anchor kullan
  if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
    return <a href={to} {...props}>{children}</a>;
  }
  
  // Hash link'leri için (örn: #iletisim)
  if (to.startsWith('#')) {
    return <a href={to} {...props}>{children}</a>;
  }

  // Single language mode: direct link without language prefix
  return <Link to={to} {...props}>{children}</Link>;
};

export default LocalizedLink;
