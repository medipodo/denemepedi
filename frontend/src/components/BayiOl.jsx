import React from 'react';
import { motion } from 'framer-motion';
import LocalizedLink from './LocalizedLink';

// Ana sayfa "Bayimiz Olmak İster misiniz?" CTA bölümü
const BayiOl = () => {
  return (
    <section id="bayi-ol" data-testid="bayi-ol-section" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-5xl"
        >
          <LocalizedLink
            to="/iletisim"
            data-testid="bayi-ol-cta"
            aria-label="Bayimiz olmak için hemen başvurun"
            className="group block overflow-hidden rounded-3xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] ring-1 ring-black/5 transition-all duration-500 hover:shadow-[0_30px_70px_-25px_rgba(220,38,38,0.35)]"
          >
            <img
              src="/bayi-banner.webp"
              alt="PediZone — Bayimiz olmak ister misiniz? Şehrinizde PediZone gücüyle büyüyün. Hemen başvurun."
              className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              loading="lazy"
            />
          </LocalizedLink>
        </motion.div>
      </div>
    </section>
  );
};

export default BayiOl;
