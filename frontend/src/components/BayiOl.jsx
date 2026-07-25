import React from 'react';
import { motion } from 'framer-motion';
import { Footprints, ArrowRight } from 'lucide-react';

// WhatsApp: tıklanınca otomatik "Bayi olmak istiyorum" mesajı
const WHATSAPP_URL =
  'https://wa.me/905054000326?text=' + encodeURIComponent('Bayi olmak istiyorum');

const BayiOl = () => {
  return (
    <section
      id="bayi-ol"
      data-testid="bayi-ol-section"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#faf8f6' }}
    >
      {/* Sağ üst kırmızı diyagonal aksan (sadece geniş ekran) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-2/5 lg:block"
        style={{
          background: 'linear-gradient(135deg, #e11d2a 0%, #b91c1c 100%)',
          clipPath: 'polygon(38% 0, 100% 0, 100% 100%, 12% 100%)',
          opacity: 0.97,
        }}
      />
      {/* Nokta deseni (sağ üst) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 right-8 hidden h-28 w-40 opacity-40 lg:block"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1.5px, transparent 1.5px)',
          backgroundSize: '14px 14px',
        }}
      />
      {/* İnce kırmızı kavis (alt) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-0 right-0 h-40"
        style={{
          borderTop: '2px solid rgba(220,38,38,0.35)',
          borderRadius: '100% 100% 0 0 / 100% 100% 0 0',
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-8 py-12 md:py-16 lg:grid-cols-2">
          {/* Sol: metin */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Logo */}
            <div className="mb-6 flex items-center gap-2">
              <Footprints className="h-7 w-7 text-red-600" />
              <span className="text-2xl font-extrabold tracking-tight text-red-600">
                PediZone<sup className="text-[0.5em] align-super">®</sup>
              </span>
              <span className="ml-1 hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500 sm:inline">
                Ayak Sağlığı Ürünleri
              </span>
            </div>

            {/* Başlık */}
            <h2 className="font-extrabold uppercase leading-[0.98] tracking-tight">
              <span className="block text-5xl text-red-600 sm:text-6xl">Bayimiz</span>
              <span className="block text-3xl text-gray-900 sm:text-4xl">Olmak İster</span>
              <span className="block text-3xl text-gray-900 sm:text-4xl">Misiniz?</span>
            </h2>

            {/* Kırmızı çizgi */}
            <div className="mt-5 h-1 w-16 rounded-full bg-red-600" />

            {/* Alt başlık */}
            <p className="mt-5 text-lg text-gray-600">
              Şehrinizde <span className="font-semibold text-red-600">PediZone</span> gücüyle büyüyün.
            </p>

            {/* Buton -> WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="bayi-ol-cta"
              aria-label="Bayi olmak istiyorum - WhatsApp ile başvur"
              className="group mt-7 inline-flex items-center gap-3 rounded-lg bg-red-600 px-8 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40"
            >
              Hemen Başvur
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Sağ: Türkiye haritası */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <img
              src="/bayi-map.webp"
              alt="PediZone Türkiye bayi ağı haritası"
              className="w-full max-w-xl drop-shadow-xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BayiOl;
