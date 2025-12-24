import React from 'react';
import { useParams } from 'react-router-dom';
import LocalizedLink from '../components/LocalizedLink';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <LocalizedLink to="/" className="inline-flex items-center text-red-600 hover:text-red-700 mb-8">
          <ArrowLeft size={18} className="mr-2" /> Ana Sayfa
        </LocalizedLink>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Kullanım Şartları</h1>
          <p className="text-gray-500 mb-8">Son güncelleme: Aralık 2024</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Genel Hükümler</h2>
          <p className="text-gray-700 mb-4">Bu web sitesini kullanarak aşağıdaki kullanım şartlarını kabul etmiş sayılırsınız.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Fikri Mülkiyet</h2>
          <p className="text-gray-700 mb-4">Bu web sitesindeki tüm içerikler (metin, görsel, logo, marka) PediZone®'a aittir ve telif hakkı ile korunmaktadır.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Ürün Bilgileri</h2>
          <p className="text-gray-700 mb-4">Web sitemizdeki ürün bilgileri bilgilendirme amaçlıdır. Ürünlerimiz tıbbi tedavi yerine geçmez.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Sorumluluk Reddi</h2>
          <p className="text-gray-700 mb-4">PediZone®, web sitesindeki bilgilerin doğruluğunu sağlamak için çaba göstermekle birlikte, bilgilerin eksiksiz veya hatasız olduğunu garanti etmez.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Uygulanacak Hukuk</h2>
          <p className="text-gray-700 mb-4">Bu kullanım şartları, Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda Ankara mahkemeleri yetkilidir.</p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. İletişim</h2>
          <p className="text-gray-700 mb-4">Sorularınız için: info@pedizone.com</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
