import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import LocalizedLink from './LocalizedLink';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../i18n/LanguageContext';
import { useTranslation } from '../i18n/useTranslation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currentLang, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.products'), path: '/#urunler' },
    { name: t('nav.footAnalysis'), path: '/ayak-analizi' },
    { name: t('nav.dealers'), path: '/bayiler' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.certificates'), path: '/sertifikalar' },
    { name: t('nav.contact'), path: '/iletisim' }
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    if (path.startsWith('/#')) {
      const sectionId = path.replace('/#', '');
      const localizedHome = getLocalizedPath('/');
      if (location.pathname === localizedHome || location.pathname === `/${currentLang}`) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  // Aktif sayfa kontrolü
  const isActive = (path) => {
    const localizedPath = getLocalizedPath(path);
    if (path === '/') {
      return location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`;
    }
    return location.pathname === localizedPath || location.pathname.startsWith(localizedPath + '/');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 bg-gradient-to-r from-red-700 to-red-600 ${
        isScrolled ? 'shadow-lg py-3' : 'py-4'
      }`}
      style={{ marginTop: 0, borderTop: 'none', outline: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LocalizedLink to="/" className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">PediZone<span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</span></span>
            </div>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-white'
                    : 'text-red-100 hover:text-white'
                }`}
              >
                {link.name}
              </LocalizedLink>
            ))}
          </nav>

          {/* Right side: Language Switcher (always visible) */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Language Switcher - HER ZAMAN GÖRÜNÜR */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-red-500/30 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <LocalizedLink
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium py-2 px-4 rounded transition-colors ${
                    isActive(link.path)
                      ? 'bg-white/20 text-white'
                      : 'text-red-100 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.name}
                </LocalizedLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
