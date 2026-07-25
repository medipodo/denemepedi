import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Lock, ArrowUpRight, Heart, PackageCheck, BadgeCheck, Store } from 'lucide-react';
import { marketplaces } from '../data/marketplaces';

const trustBadges = [
  { Icon: ShieldCheck, label: 'Resmi Mağaza' },
  { Icon: Truck, label: 'Hızlı Kargo' },
  { Icon: Lock, label: 'Güvenli Ödeme' },
];

const stats = [
  { Icon: Heart, label: 'Binlerce mutlu müşteri' },
  { Icon: PackageCheck, label: 'Aynı gün hızlı kargo' },
  { Icon: BadgeCheck, label: 'Resmi PediZone® mağazaları' },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const MarketplacesSection = () => {
  // Mobilde açılış animasyonu kapalı, web'de açık
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const reveal = (amount) =>
    isMobile
      ? { initial: false, animate: 'show' }
      : { initial: 'hidden', whileInView: 'show', viewport: { once: true, amount } };

  return (
    <section
      id="pazaryerleri"
      data-testid="marketplaces-section"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background:
          'linear-gradient(135deg, #fff5f5 0%, #ffffff 45%, #fff1f1 100%)',
      }}
    >
      {/* Yumuşak desen / ışık katmanları */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(rgba(220,38,38,0.06) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 40%, #000 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(220,38,38,0.10)' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(220,38,38,0.08)' }}
      />

      <div className="container relative mx-auto px-4">
        {/* Başlık */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={containerVariants}
          {...reveal(0.3)}
        >
          <motion.p
            variants={fadeUp}
            className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-600 backdrop-blur"
          >
            <Store size={14} /> Pazaryerlerinde de Varız
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="fluid-h2 font-extrabold text-gray-900"
          >
            PediZone'u Favori Pazaryerlerinde Keşfedin
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="fluid-body mx-auto mt-4 max-w-xl text-gray-600"
          >
            Güvenle alışveriş yap, kapına gelsin. Resmi mağazalarımızdan orijinal
            PediZone® ürünlerine hızlı ve güvenli şekilde ulaşın.
          </motion.p>
        </motion.div>

        {/* Marka kartları */}
        <motion.div
          className="mx-auto mt-14 grid max-w-5xl gap-7 md:grid-cols-3"
          variants={containerVariants}
          {...reveal(0.2)}
        >
          {marketplaces.map((m) => (
            <motion.a
              key={m.id}
              href={m.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              data-testid={`marketplace-card-${m.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_28px_55px_-20px_rgba(0,0,0,0.28)]"
            >
              {/* Üst renkli çizgi (marka aksanı) */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: m.accent }}
              />

              {/* Logo */}
              <div
                className="flex h-24 items-center justify-center rounded-xl px-6"
                style={{ background: m.tint }}
              >
                <img
                  src={m.logo}
                  alt={`${m.name} logo`}
                  className={
                    m.boxed
                      ? 'h-16 w-16 rounded-2xl object-cover shadow-sm transition-transform duration-300 group-hover:scale-105'
                      : 'max-h-11 w-auto max-w-[70%] object-contain transition-transform duration-300 group-hover:scale-105'
                  }
                  loading="lazy"
                />
              </div>

              {/* Marka adı */}
              <h3 className="mt-6 text-xl font-bold text-gray-900">{m.name}</h3>
              <p className="mt-1 text-sm text-gray-500">
                Resmi PediZone® mağazası
              </p>

              {/* Güven rozetleri */}
              <div className="mt-5 flex flex-wrap gap-2">
                {trustBadges.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 px-3 py-1 text-[11px] font-medium text-gray-600"
                  >
                    <Icon size={13} className="text-red-500" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Buton */}
              <div className="mt-7 flex items-center justify-between rounded-xl bg-gray-900 px-5 py-3 text-white transition-colors duration-300 group-hover:bg-red-600">
                <span className="text-sm font-semibold">Mağazayı Ziyaret Et</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Güven şeridi */}
        <motion.div
          variants={fadeUp}
          {...reveal(0.5)}
          className="mx-auto mt-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 rounded-2xl border border-red-100 bg-white/60 px-8 py-5 backdrop-blur"
        >
          {stats.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2.5 text-gray-700">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-600">
                <Icon size={18} />
              </span>
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplacesSection;
