import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Menu, X, ArrowLeft } from 'lucide-react'
import { Button } from './ui/button'

const Header = ({ currentLang = 'tr', setCurrentLang, showBackButton = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigation = {
    tr: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      solutions: 'Çözümler',
      about: 'Hakkımızda',
      dealers: 'Bayiler',
      certificates: 'Sertifikalar',
      contact: 'İletişim'
    },
    en: {
      home: 'Home',
      products: 'Products',
      solutions: 'Solutions',
      about: 'About',
      dealers: 'Dealers',
      certificates: 'Certificates',
      contact: 'Contact'
    },
    ar: {
      home: 'الصفحة الرئيسية',
      products: 'المنتجات',
      solutions: 'الحلول',
      about: 'معلومات عنا',
      dealers: 'الموزعون',
      certificates: 'الشهادات',
      contact: 'اتصل بنا'
    }
  }

  const nav = navigation[currentLang]

  return (
    <header className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg sticky top-0" style={{zIndex: 9999}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo with Back Button */}
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate(-1)}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
            )}
            <a 
              href="/"
              onClick={(e) => {
                e.preventDefault()
                navigate('/')
                scrollToTop()
              }}
              className="flex items-center space-x-3"
            >
              <span className="text-2xl md:text-3xl font-bold text-white">
                Pedizone<sup className="text-xs">®</sup>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/" className="text-white hover:text-red-200 transition-colors">{nav.home}</a>
            <a href="/#products" className="text-white hover:text-red-200 transition-colors">{nav.products}</a>
            <a href="/#solutions" className="text-white hover:text-red-200 transition-colors">{nav.solutions}</a>
            <a href="/#about" className="text-white hover:text-red-200 transition-colors">{nav.about}</a>
            <a href="/bayiler" className="text-white hover:text-red-200 transition-colors">{nav.dealers}</a>
            <a href="/sertifikalar" className="text-white hover:text-red-200 transition-colors">{nav.certificates}</a>
            <a href="/#contact" className="text-white hover:text-red-200 transition-colors">{nav.contact}</a>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Language Selector */}
            {setCurrentLang && (
              <>
                <div className="hidden lg:flex items-center space-x-2">
                  <button 
                    onClick={() => setCurrentLang('tr')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'tr' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="Türkçe"
                  >
                    <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-8 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentLang('en')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'en' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="English"
                  >
                    <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-8 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentLang('ar')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'ar' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="العربية"
                  >
                    <img src="https://flagcdn.com/w40/sa.png" alt="AR" className="w-8 h-6" />
                  </button>
                </div>

                {/* Mobile Language Selector */}
                <div className="lg:hidden flex items-center space-x-1">
                  <button 
                    onClick={() => setCurrentLang('tr')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'tr' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="Türkçe"
                  >
                    <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-8 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentLang('en')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'en' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="English"
                  >
                    <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-8 h-6" />
                  </button>
                  <button 
                    onClick={() => setCurrentLang('ar')}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      currentLang === 'ar' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                    }`}
                    aria-label="العربية"
                  >
                    <img src="https://flagcdn.com/w40/sa.png" alt="AR" className="w-8 h-6" />
                  </button>
                </div>
              </>
            )}

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <nav className="flex flex-col space-y-4">
              <a 
                href="/" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.home}
              </a>
              <a 
                href="/#products" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.products}
              </a>
              <a 
                href="/#solutions" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.solutions}
              </a>
              <a 
                href="/#about" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.about}
              </a>
              <a 
                href="/bayiler" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.dealers}
              </a>
              <a 
                href="/sertifikalar" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.certificates}
              </a>
              <a 
                href="/#contact" 
                className="text-white hover:text-red-200 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {nav.contact}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
