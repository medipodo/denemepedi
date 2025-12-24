import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductDetail from './components/ProductDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import Certificates from './components/Certificates'
import DealersMap from './components/DealersMap'
import Brosur from './components/Brosur'
import DermatolojikTest from './components/DermatolojikTest'
import AyakAnalizi from './components/AyakAnalizi'
import UrunKremQuiz from './components/UrunKremQuiz'
import UrunSerumQuiz from './components/UrunSerumQuiz'
import UrunKopukQuiz from './components/UrunKopukQuiz'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'

import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sertifikalar" element={<Certificates />} />
      <Route path="/bayiler" element={<DealersMap />} />
      <Route path="/ayak-analizi" element={<AyakAnalizi />} />
      <Route path="/krem-quiz" element={<UrunKremQuiz />} />
      <Route path="/serum-quiz" element={<UrunSerumQuiz />} />
      <Route path="/kopuk-quiz" element={<UrunKopukQuiz />} />
      <Route path="/brosur" element={<Brosur />} />
      <Route path="/dermatolojik-test" element={<DermatolojikTest />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
    </Routes>
  )
}

export default App

