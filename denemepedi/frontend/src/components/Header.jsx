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
          <LocalizedLink to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">PediZone</span>
              <span className="text-xs text-red-100">Ayak Sağlığı</span>
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

          {/* Right side: Language Switcher (always visible) + Contact (desktop only) */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Language Switcher - HER ZAMAN GÖRÜNÜR */}
            <LanguageSwitcher />
            
            {/* Contact Button - Sadece Desktop */}
            <a
              href="tel:+905068860326"
              className="hidden lg:flex items-center space-x-2 bg-white text-red-700 px-5 py-2.5 rounded-lg hover:bg-red-50 transition-colors font-semibold"
            >
              <Phone size={18} />
              <span>0506 886 03 26</span>
            </a>

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
              <a
                href="tel:+905068860326"
                className="flex items-center justify-center space-x-2 bg-white text-red-700 px-6 py-2.5 rounded-lg hover:bg-red-50 transition-colors font-semibold mt-4"
              >
                <Phone size={18} />
                <span>0506 886 03 26</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
