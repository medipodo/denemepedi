import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, ArrowRight } from 'lucide-react';

// Buton -> WhatsApp: otomatik bayilik mesajı
const WHATSAPP_URL =
  'https://wa.me/905054000326?text=' +
  encodeURIComponent('Merhaba Pedizone bayiliği hakkında bilgi almak istiyorum');

const RED = '#C0392B';
const CHARCOAL = '#2C3E50';

const BayiOl = () => {
  return (
    <section
      id="bayi-ol"
      data-testid="bayi-ol-section"
      className="relative w-full overflow-hidden py-16 md:py-20"
      style={{ background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 50%, #F8F9FA 100%)' }}
    >
      {/* Soluk kırmızı dekoratif daireler */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full"
        style={{ backgroundColor: RED, opacity: 0.06 }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full"
        style={{ backgroundColor: RED, opacity: 0.04 }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 md:px-10 lg:grid-cols-[1fr_1.2fr] lg:gap-[60px]">
        {/* Sol: metin */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <div className="mb-6 flex items-center gap-2">
            <Footprints className="h-7 w-7" style={{ color: RED }} />
            <span className="text-2xl font-extrabold tracking-tight" style={{ color: RED }}>
              PediZone<sup className="text-[0.5em] align-super">®</sup>
            </span>
            <span className="ml-1 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:inline">
              Ayak Sağlığı Ürünleri
            </span>
          </div>

          {/* Başlık */}
          <h2 className="font-extrabold uppercase leading-[1.12] tracking-tight text-4xl sm:text-5xl">
            <span style={{ color: RED }}>Bayimiz</span>{' '}
            <span style={{ color: CHARCOAL }}>Olmak İster Misiniz?</span>
          </h2>

          {/* Kırmızı çizgi */}
          <div className="mt-5 h-1 w-12 rounded-full" style={{ backgroundColor: RED }} />

          {/* Alt başlık */}
          <p className="mt-5 text-lg" style={{ color: '#555' }}>
            Şehrinizde <strong style={{ color: RED }}>PediZone</strong> gücüyle büyüyün.
          </p>

          {/* Buton -> WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="bayi-ol-cta"
            aria-label="Bayilik için WhatsApp ile başvur"
            className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-[15px] font-bold uppercase tracking-wide text-white transition-all duration-300 hover:-translate-y-0.5 sm:w-auto"
            style={{ backgroundColor: RED, boxShadow: '0 4px 15px rgba(192,57,43,0.3)' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#A0302B')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = RED)}
          >
            Hemen Başvur
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Sağ: Türkiye haritası (tam görünür) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[560px] lg:max-w-none"
        >
          <img
            src="/bayi-map.webp"
            alt="PediZone Bayilik Ağı - Türkiye Geneli"
            className="w-full h-auto object-contain drop-shadow-xl"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Dekoratif alt dalga */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-0 h-16 w-full opacity-50">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill={RED}
            opacity="0.08"
          />
        </svg>
      </div>
    </section>
  );
};

export default BayiOl;
