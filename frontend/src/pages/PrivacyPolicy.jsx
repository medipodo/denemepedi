import React from 'react';
import { useParams } from 'react-router-dom';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <LocalizedLink to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
          <ArrowLeft size={18} className="mr-2" /> Ana Sayfa
        </LocalizedLink>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Gizlilik Politikası</h1>
          <p className="text-gray-500 mb-8">Son güncelleme: Aralık 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Giriş</h2>
          <p className="text-gray-700 mb-4">PediZone® olarak, kişisel verilerinizin güvenliği bizim için önemlidir. Bu gizlilik politikası, web sitemizi kullanırken topladığımız bilgileri ve bu bilgileri nasıl kullandığımızı açıklamaktadır.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Toplanan Bilgiler</h2>
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.1 Kişisel Bilgiler</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Ad ve soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası</li>
            <li>İletişim formu aracılığıyla gönderilen mesajlar</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">2.2 Otomatik Toplanan Bilgiler</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>IP adresi</li>
            <li>Tarayıcı türü</li>
            <li>Ziyaret edilen sayfalar</li>
            <li>Ziyaret süresi</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Bilgilerin Kullanımı</h2>
          <p className="text-gray-700 mb-4">Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Taleplerinize yanıt vermek</li>
            <li>Hizmetlerimizi geliştirmek</li>
            <li>Web sitesi performansını analiz etmek</li>
          </ul>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. İletişim</h2>
          <p className="text-gray-700 mb-4">Gizlilik politikamız hakkında sorularınız için:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>E-posta: info@pedizone.com</li>
            <li>Telefon: 0506 886 03 26</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
