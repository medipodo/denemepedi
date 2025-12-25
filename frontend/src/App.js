import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { LanguageProvider, DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, LANGUAGE_INFO } from './i18n/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
// import NoContentPage from './components/NoContentPage'; // Not needed in single-language mode
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
          {/* SINGLE LANGUAGE MODE: All routes under root (/) */}
          
          {/* Main routes - TR content at root */}
          <Route path="/" element={<TRContent page="" />} />
          <Route path="/blog" element={<TRContent page="blog" />} />
          <Route path="/blog/:slug" element={<TRContent page="blog" />} />
          <Route path="/urun/:slug" element={<TRContent page="urun" />} />
          <Route path="/sertifikalar" element={<TRContent page="sertifikalar" />} />
          <Route path="/bayiler" element={<TRContent page="bayiler" />} />
          <Route path="/ayak-analizi" element={<TRContent page="ayak-analizi" />} />
          <Route path="/iletisim" element={<TRContent page="iletisim" />} />
          <Route path="/gizlilik-politikasi" element={<TRContent page="gizlilik-politikasi" />} />
          <Route path="/kullanim-sartlari" element={<TRContent page="kullanim-sartlari" />} />
          
          {/* Legacy redirects from old multi-language structure */}
          <Route path="/tr" element={<Navigate to="/" replace />} />
          <Route path="/tr/*" element={<LegacyTRRedirect />} />
          
          {/* Other languages - redirect to homepage (no content) */}
          <Route path="/en" element={<Navigate to="/" replace />} />
          <Route path="/en/*" element={<Navigate to="/" replace />} />
          <Route path="/de" element={<Navigate to="/" replace />} />
          <Route path="/de/*" element={<Navigate to="/" replace />} />
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
