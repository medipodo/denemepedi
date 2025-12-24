import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, LANGUAGE_INFO } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import NoContentPage from './components/NoContentPage';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import ProductDetail from './pages/ProductDetail';
import Certificates from './pages/Certificates';
import Dealers from './pages/Dealers';
import AyakAnalizi from './pages/AyakAnalizi';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Contact from './pages/Contact';

// Dil destekli içerik wrapper
const LanguageContent = () => {
  const { lang, "*": rest } = useParams();
  
  // Geçersiz dil kodu kontrolü
  if (!SUPPORTED_LANGUAGES.includes(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  // İçerik var mı kontrolü
  const hasContent = LANGUAGE_INFO[lang]?.hasContent ?? false;

  // Path'i parse et
  const pathParts = rest ? rest.split('/') : [];
  const page = pathParts[0] || '';
  const slug = pathParts[1] || '';

  // İngilizce için mevcut içerikler (kademeli eklenecek)
  const enAvailableContent = {
    blogs: ['ayak-mantari-nedir'], // İngilizce mevcut bloglar
    products: [] // İngilizce mevcut ürünler
  };

  // Belirli içerik için dil kontrolü
  const hasContentForPage = () => {
    if (hasContent) return true; // TR için her zaman true
    
    // EN için belirli içeriklere izin ver
    if (lang === 'en') {
      if (page === 'blog' && slug && enAvailableContent.blogs.includes(slug)) {
        return true;
      }
      if (page === 'urun' && slug && enAvailableContent.products.includes(slug)) {
        return true;
      }
    }
    
    return false;
  };

  // Sayfa render - içerik yoksa NoContentPage göster
  const renderPage = () => {
    // İçerik yoksa NoContentPage
    if (!hasContentForPage()) {
      return <NoContentPage />;
    }

    switch (page) {
      case '':
        return hasContent ? <Home /> : <NoContentPage />;
      case 'blog':
        return slug ? <BlogDetail /> : (hasContent ? <Blog /> : <NoContentPage />);
      case 'urun':
        return slug ? <ProductDetail /> : <NoContentPage />;
      case 'sertifikalar':
        return hasContent ? <Certificates /> : <NoContentPage />;
      case 'bayiler':
        return hasContent ? <Dealers /> : <NoContentPage />;
      case 'ayak-analizi':
        return hasContent ? <AyakAnalizi /> : <NoContentPage />;
      case 'iletisim':
        return hasContent ? <Contact /> : <NoContentPage />;
      case 'gizlilik-politikasi':
        return hasContent ? <PrivacyPolicy /> : <NoContentPage />;
      case 'kullanim-sartlari':
        return hasContent ? <TermsOfService /> : <NoContentPage />;
      default:
        return hasContent ? <Home /> : <NoContentPage />;
    }
  };

  return (
    <LanguageProvider>
      <Header />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </LanguageProvider>
  );
};

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Ana sayfa redirect - / -> /tr */}
          <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
          
          {/* Eski URL'lerden yeni yapıya redirect */}
          <Route path="/blog" element={<Navigate to={`/${DEFAULT_LANGUAGE}/blog`} replace />} />
          <Route path="/blog/:slug" element={<OldBlogRedirect />} />
          <Route path="/urun/:slug" element={<OldProductRedirect />} />
          <Route path="/sertifikalar" element={<Navigate to={`/${DEFAULT_LANGUAGE}/sertifikalar`} replace />} />
          <Route path="/bayiler" element={<Navigate to={`/${DEFAULT_LANGUAGE}/bayiler`} replace />} />
          <Route path="/ayak-analizi" element={<Navigate to={`/${DEFAULT_LANGUAGE}/ayak-analizi`} replace />} />
          <Route path="/iletisim" element={<Navigate to={`/${DEFAULT_LANGUAGE}/iletisim`} replace />} />
          <Route path="/gizlilik-politikasi" element={<Navigate to={`/${DEFAULT_LANGUAGE}/gizlilik-politikasi`} replace />} />
          <Route path="/kullanim-sartlari" element={<Navigate to={`/${DEFAULT_LANGUAGE}/kullanim-sartlari`} replace />} />
          
          {/* Dil bazlı route'lar */}
          <Route path="/:lang" element={<LanguageContent />} />
          <Route path="/:lang/*" element={<LanguageContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Eski blog URL'lerini yönlendirme
const OldBlogRedirect = () => {
  const slug = window.location.pathname.split('/blog/')[1];
  return <Navigate to={`/${DEFAULT_LANGUAGE}/blog/${slug}`} replace />;
};

// Eski ürün URL'lerini yönlendirme
const OldProductRedirect = () => {
  const slug = window.location.pathname.split('/urun/')[1];
  return <Navigate to={`/${DEFAULT_LANGUAGE}/urun/${slug}`} replace />;
};

export default App;
