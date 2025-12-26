import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import LocalizedLink from './LocalizedLink';
import { useTranslation } from '../i18n/useTranslation';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-red-700 to-red-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">PediZone®</span>
            </div>
            <p className="text-red-100 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><LocalizedLink to="/" className="text-red-100 hover:text-white transition-colors text-sm">{t('nav.home')}</LocalizedLink></li>
              <li><LocalizedLink to="/#urunler" className="text-red-100 hover:text-white transition-colors text-sm">{t('footer.products')}</LocalizedLink></li>
              <li><LocalizedLink to="/blog" className="text-red-100 hover:text-white transition-colors text-sm">{t('nav.blog')}</LocalizedLink></li>
              <li><LocalizedLink to="/sertifikalar" className="text-red-100 hover:text-white transition-colors text-sm">{t('nav.certificates')}</LocalizedLink></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><LocalizedLink to="/gizlilik-politikasi" className="text-red-100 hover:text-white transition-colors text-sm">{t('footer.privacyPolicy')}</LocalizedLink></li>
              <li><LocalizedLink to="/kullanim-sartlari" className="text-red-100 hover:text-white transition-colors text-sm">{t('footer.termsOfService')}</LocalizedLink></li>
              <li><a href="https://pedizone.xyz/" target="_blank" rel="noopener noreferrer" className="text-red-100 hover:text-white transition-colors text-sm">CRM</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-200 mt-0.5 flex-shrink-0" />
                <span className="text-red-100 text-sm">Ankara / Turkey</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-red-200 flex-shrink-0" />
                <a href="tel:+905068860326" className="text-red-100 hover:text-white transition-colors text-sm">0506 886 03 26</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-red-200 flex-shrink-0" />
                <a href="mailto:info@pedizone.com" className="text-red-100 hover:text-white transition-colors text-sm">info@pedizone.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-500 mt-8 pt-8 text-center">
          <p className="text-red-200 text-sm">© {new Date().getFullYear()} PediZone®. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
