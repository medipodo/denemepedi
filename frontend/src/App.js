import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, LANGUAGE_INFO } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import ComingSoon from './pages/ComingSoon';
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

function App() {
  return (
    <div className="App" style={{ margin: 0, padding: 0, border: 'none' }}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Multi-language routes */}
          <Route path="/" element={<Navigate to="/tr" replace />} />
          
          {/* TR - Full content */}
          <Route path="/tr" element={<TRContent page="" />} />
          <Route path="/tr/blog" element={<TRContent page="blog" />} />
          <Route path="/tr/blog/:slug" element={<TRContent page="blog" />} />
          <Route path="/tr/urun/:slug" element={<TRContent page="urun" />} />
          <Route path="/tr/sertifikalar" element={<TRContent page="sertifikalar" />} />
          <Route path="/tr/bayiler" element={<TRContent page="bayiler" />} />
          <Route path="/tr/ayak-analizi" element={<TRContent page="ayak-analizi" />} />
          <Route path="/tr/iletisim" element={<TRContent page="iletisim" />} />
          <Route path="/tr/gizlilik-politikasi" element={<TRContent page="gizlilik-politikasi" />} />
          <Route path="/tr/kullanim-sartlari" element={<TRContent page="kullanim-sartlari" />} />
          
          {/* EN & DE - Coming Soon page */}
          <Route path="/en" element={<ComingSoon />} />
          <Route path="/en/*" element={<ComingSoon />} />
          <Route path="/de" element={<ComingSoon />} />
          <Route path="/de/*" element={<ComingSoon />} />
          
          {/* Legacy redirects */}
          <Route path="/blog" element={<Navigate to="/tr/blog" replace />} />
          <Route path="/blog/:slug" element={<LegacyBlogRedirect />} />
          <Route path="/urun/:slug" element={<LegacyProductRedirect />} />
          <Route path="/sertifikalar" element={<Navigate to="/tr/sertifikalar" replace />} />
          <Route path="/bayiler" element={<Navigate to="/tr/bayiler" replace />} />
          <Route path="/ayak-analizi" element={<Navigate to="/tr/ayak-analizi" replace />} />
          <Route path="/iletisim" element={<Navigate to="/tr/iletisim" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// TR Content wrapper - renders pages at root level
const TRContent = ({ page }) => {
  const { slug } = useParams();
  
  const renderPage = () => {
    switch (page) {
      case '':
        return <Home />;
      case 'blog':
        return slug ? <BlogDetail /> : <Blog />;
      case 'urun':
        return <ProductDetail />;
      case 'sertifikalar':
        return <Certificates />;
      case 'bayiler':
        return <Dealers />;
      case 'ayak-analizi':
        return <AyakAnalizi />;
      case 'iletisim':
        return <Contact />;
      case 'gizlilik-politikasi':
        return <PrivacyPolicy />;
      case 'kullanim-sartlari':
        return <TermsOfService />;
      default:
        return <Home />;
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

// Redirect /tr/* to root /*
const LegacyTRRedirect = () => {
  const location = window.location.pathname;
  const newPath = location.replace(/^\/tr/, '');
  return <Navigate to={newPath || '/'} replace />;
};
// deploy trigger

export default App;
