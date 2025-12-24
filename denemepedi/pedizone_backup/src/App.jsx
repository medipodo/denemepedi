import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductDetail from './components/ProductDetail'
import PrivacyPolicy from './components/PrivacyPolicy'
import Certificates from './components/Certificates'
import DealersMap from './components/DealersMap'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/sertifikalar" element={<Certificates />} />
      <Route path="/bayiler" element={<DealersMap />} />
    </Routes>
  )
}

export default App

