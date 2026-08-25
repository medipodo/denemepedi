import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Stethoscope, Clock, ArrowRight, Camera } from 'lucide-react';

const EVAL_URL = 'https://medipodo.com/ucretsiz-on-degerlendirme';

const features = [
  {
    Icon: BadgeCheck,
    title: 'Tamamen Ücretsiz',
    desc: 'Ön değerlendirme için hiç ücret almıyoruz.',
  },
  {
    Icon: Stethoscope,
    title: 'Uzman Podolog İnceler',
    desc: 'Fotoğraflarınızı deneyimli ekibimiz tek tek inceler.',
  },
  {
    Icon: Clock,
    title: '24 Saatte Geri Dönüş',
    desc: 'Çoğunlukla aynı gün, en geç 24 saat içinde yazıyoruz.',
  },
];

const FreeEvaluation = ({ compact = false }) => {
  return (
    <section
      id="ucretsiz-degerlendirme"
      data-testid="free-eval-section"
      className={compact ? 'h-full bg-transparent' : 'py-16 md:py-24 bg-gradient-to-br from-red-50 via-white to-red-50'}
    >
      <div className={compact ? 'w-full' : 'container mx-auto px-4'}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={compact
            ? 'flex h-full flex-col overflow-hidden rounded-3xl border border-red-100 bg-white shadow-[0_25px_60px_-35px_rgba(220,38,38,0.3)]'
            : 'mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-red-100 bg-white shadow-[0_25px_60px_-25px_rgba(220,38,38,0.25)] md:grid-cols-2 lg:gap-0'}
        >
          {/* Sol: Podolog fotoğrafı */}
          <div className={compact
            ? 'relative flex aspect-square w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-red-100 to-red-50 p-6 sm:p-10'
            : 'relative h-full min-h-[340px] bg-gradient-to-br from-red-100 to-red-50'}>
            <img
              src="/podolog-serdar-ceylan-600.webp"
              srcSet="/podolog-serdar-ceylan-400.webp 400w, /podolog-serdar-ceylan-600.webp 600w, /podolog-serdar-ceylan.webp 1095w"
              sizes="(max-width: 768px) 100vw, 575px"
              width="1095"
              height="1393"
              alt="Podolog Serdar Ceylan"
              className={compact ? 'h-full w-full object-contain object-center' : 'h-full w-full object-cover object-top'}
              loading="lazy"
            />
            {/* Çevrimiçi rozeti */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-gray-900">Podolog Serdar Ceylan</p>
                <p className="text-xs font-medium text-green-600">Çevrimiçi</p>
              </div>
            </div>
          </div>

          {/* Sağ: İçerik */}
          <div className={compact ? 'flex flex-1 flex-col p-7 sm:p-8' : 'p-8 md:p-10 lg:p-12'}>
            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
              <Camera size={14} /> Ücretsiz Hizmet
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Ücretsiz Ön Değerlendirme
            </h2>
            <p className="mt-4 text-gray-600">
              Ayağınızla veya tırnağınızla ilgili bir sorununuz mu var? Birkaç fotoğraf
              yükleyin, podologlarımız bakıp en kısa sürede size dönsün.
            </p>

            {/* Özellikler */}
            <div className="mt-7 space-y-4">
              {features.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={EVAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="free-eval-cta"
              className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-red-500/40 sm:w-auto"
            >
              <Camera size={18} />
              Ücretsiz Değerlendirme Al
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeEvaluation;
