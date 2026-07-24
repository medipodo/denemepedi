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
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const { currentLang, getLocalizedPath } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      // Aşağı kaydırınca gizle, yukarı kaydırınca göster (mobil için)
      if (y > lastY && y > 90) {
        setIsHidden(true);
      } else if (y < lastY) {
        setIsHidden(false);
      }
      lastY = y;
    };
    // Ekrana dokununca header'ı göster
    const showHeader = () => setIsHidden(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', showHeader, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', showHeader);
    };
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-0 bg-gradient-to-r from-red-700 to-red-600 md:bg-white md:bg-none md:border-b md:border-gray-100 ${
        isScrolled ? 'shadow-lg py-3 md:shadow-[0_6px_24px_-10px_rgba(0,0,0,0.15)]' : 'py-4 md:shadow-sm'
      } ${
        isHidden && !isMobileMenuOpen ? '-translate-y-full md:translate-y-0' : 'translate-y-0'
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
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white md:text-red-600 transition-colors">PediZone<span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</span></span>
            </div>
          </LocalizedLink>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
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
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Uzman Desteği button (geniş ekran) */}
            <a
              href="tel:+905054000326"
              className="hidden xl:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 xl:px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/40"
              data-testid="uzman-destegi-btn"
            >
              <Phone size={16} />
              <span>Uzman Desteği</span>
            </a>

            {/* Language flags (çerçevesiz) */}
            <div className="flex items-center gap-0.5">
              {/* TR - Aktif */}
              <div className="p-1.5 rounded-lg bg-white/20 ring-2 ring-white md:bg-red-50 md:ring-red-600 cursor-default">
                <img
                  src="/assets/flags/turkey.svg"
                  alt="Türkçe"
                  className="w-8 h-8 object-contain"
                  title="Aktif dil: Türkçe"
                />
              </div>
              {/* EN */}
              <a
                href="/en"
                className="p-1.5 rounded-lg transition-all hover:bg-white/10 md:hover:bg-red-50"
                title="English (Coming soon)"
              >
                <img src="/assets/flags/uk.svg" alt="English" className="w-8 h-8 object-contain" />
              </a>
              {/* DE */}
              <a
                href="https://pedizone.de"
                className="p-1.5 rounded-lg transition-all hover:bg-white/10 md:hover:bg-red-50"
                title="Deutsch"
              >
                <img src="/assets/flags/germany.svg" alt="Deutsch" className="w-8 h-8 object-contain" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white md:text-gray-900 p-2 transition-colors"
              data-testid="mobile-menu-toggle"
              aria-label="Menü"
            >
              {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-red-500/30 md:border-gray-200 pt-4">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <LocalizedLink
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-sm font-medium py-2 px-4 rounded transition-colors ${
                    isActive(link.path)
                      ? 'bg-white/20 text-white md:bg-red-50 md:text-red-600'
                      : 'text-red-100 hover:bg-white/10 hover:text-white md:text-gray-700 md:hover:bg-red-50 md:hover:text-red-600'
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
