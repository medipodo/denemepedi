import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import LocalizedLink from './LocalizedLink';
// import LanguageSwitcher from './LanguageSwitcher'; // DISABLED: Bayraklar statik
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
    { name: t('nav.faq'), path: '/sss' },
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
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-100 ${
        isScrolled ? 'shadow-[0_6px_24px_-10px_rgba(0,0,0,0.15)] py-2.5' : 'shadow-sm py-3.5'
      }`}
      style={{ marginTop: 0, borderTop: 'none', outline: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <LocalizedLink
            to="/"
            className="flex items-center shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}
            data-testid="header-logo"
          >
            <span className="text-2xl md:text-3xl font-extrabold text-red-600 tracking-tight">
              PediZone<sup className="text-[0.5em] font-bold align-super">®</sup>
            </span>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`fluid-nav font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-red-600'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                {link.name}
              </LocalizedLink>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Uzman Desteği button */}
            <a
              href="tel:+905054000326"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 md:px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/40"
              data-testid="uzman-destegi-btn"
            >
              <Phone size={16} />
              <span>Uzman Desteği</span>
            </a>

            {/* Language flags */}
            <div className="flex items-center gap-0.5 rounded-xl border border-gray-200 p-1">
              {/* TR - Active */}
              <div className="p-1 rounded-lg bg-red-50 ring-2 ring-red-500 cursor-default">
                <img
                  src="/assets/flags/turkey.svg"
                  alt="Türkçe"
                  className="w-7 h-7 object-contain"
                  title="Aktif dil: Türkçe"
                />
              </div>
              {/* EN */}
              <a
                href="/en"
                className="p-1 rounded-lg transition-all hover:bg-red-50"
                title="English (Coming soon)"
              >
                <img src="/assets/flags/uk.svg" alt="English" className="w-7 h-7 object-contain" />
              </a>
              {/* DE */}
              <a
                href="https://pedizone.de"
                className="p-1 rounded-lg transition-all hover:bg-red-50"
                title="Deutsch"
              >
                <img src="/assets/flags/germany.svg" alt="Deutsch" className="w-7 h-7 object-contain" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-900 p-2 hover:text-red-600 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <LocalizedLink
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`fluid-nav font-medium py-2.5 px-4 rounded-lg transition-colors ${
                    isActive(link.path)
                      ? 'bg-red-50 text-red-600'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
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
