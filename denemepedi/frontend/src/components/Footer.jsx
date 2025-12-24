import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
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
              Podologların önerileri ve beklentilerine yönelik hazırlanan profesyonel ayak bakım ürünleri.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-red-100 hover:text-white transition-colors text-sm">Ana Sayfa</Link></li>
              <li><Link to="/#urunler" className="text-red-100 hover:text-white transition-colors text-sm">Ürünler</Link></li>
              <li><Link to="/blog" className="text-red-100 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/sertifikalar" className="text-red-100 hover:text-white transition-colors text-sm">Sertifikalar</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><Link to="/gizlilik-politikasi" className="text-red-100 hover:text-white transition-colors text-sm">Gizlilik Politikası</Link></li>
              <li><Link to="/kullanim-sartlari" className="text-red-100 hover:text-white transition-colors text-sm">Kullanım Şartları</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-red-200 mt-0.5 flex-shrink-0" />
                <span className="text-red-100 text-sm">Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA</span>
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
          <p className="text-red-200 text-sm">© {new Date().getFullYear()} PediZone®. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
