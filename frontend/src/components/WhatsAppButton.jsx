import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const PHONE = '905054000326';

// Ürün sayfasına göre hazır WhatsApp mesajı
const PRODUCT_MESSAGES = {
  'foot-nail-care-serum': 'Merhaba Pedizone Serum hakkında bilgi almak istiyorum',
  'ureli-krem': 'Merhaba Pedizone Intense Repair %15 Urea Cream hakkında bilgi almak istiyorum',
  'temizleme-kopugu': 'Merhaba Pedizone Fresh-Guard Ayak Temizleme Köpüğü hakkında bilgi almak istiyorum',
};

const DEFAULT_MESSAGE = 'Merhaba, PediZone ürünleri hakkında bilgi almak istiyorum.';

const WhatsAppButton = () => {
  const { pathname } = useLocation();
  const slug = Object.keys(PRODUCT_MESSAGES).find((s) => pathname.includes(s));
  const message = slug ? PRODUCT_MESSAGES[slug] : DEFAULT_MESSAGE;
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50">
      {/* Ping animasyonu - sürekli yayılan halka efekti */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

      {/* Ana buton */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp ile iletişime geç"
        data-testid="whatsapp-button"
      >
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
