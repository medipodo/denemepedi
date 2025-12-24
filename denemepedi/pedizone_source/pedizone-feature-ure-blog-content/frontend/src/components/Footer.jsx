import React from 'react'
import { MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-12">
        <div className="pedizone-container">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold">Pedizone®</h3>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="/#products" className="text-red-200 hover:text-white transition-colors">Ürünler</a>
              <a href="/#solutions" className="text-red-200 hover:text-white transition-colors">Çözümler</a>
              <a href="/#about" className="text-red-200 hover:text-white transition-colors">Hakkımızda</a>
              <a href="/bayiler" className="text-red-200 hover:text-white transition-colors">Bayiler</a>
              <a href="/#contact" className="text-red-200 hover:text-white transition-colors">İletişim</a>
              <span className="text-red-400">•</span>
              <a 
                href="/brosur"
                className="text-red-200 hover:text-white transition-colors font-semibold"
              >
                📄 Broşür
              </a>
              <span className="text-red-400">•</span>
              <a 
                href="https://pedizone.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-200 hover:text-white transition-colors text-sm"
              >
                CRM Giriş
              </a>
            </div>

            <div className="border-t border-red-400/30 pt-6">
              <p className="text-red-200 text-sm">
                © 2024 Pedizone®. Tüm hakları saklıdır.
              </p>
              <p className="text-red-300 text-xs mt-2">
                Profesyonel ayak bakım çözümleri
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905068860326?text=Merhaba%2C%20PediZone%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp ile iletişime geç"
        data-testid="whatsapp-button"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp ile iletişime geç
        </span>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
      </a>
    </>
  )
}

export default Footer
