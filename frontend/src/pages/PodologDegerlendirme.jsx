import React from 'react';
import { Helmet } from 'react-helmet-async';
import FreeEvaluation from '../components/FreeEvaluation';

// Ücretsiz Ön Değerlendirme - Podolog Değerlendirmesi sayfası
const PodologDegerlendirme = () => {
  return (
    <div className="pt-20 md:pt-24 bg-white">
      <Helmet>
        <title>Ücretsiz Ön Değerlendirme | PediZone® Podolog Değerlendirmesi</title>
        <meta
          name="description"
          content="Ayak veya tırnak sorununuz için ücretsiz ön değerlendirme. Birkaç fotoğraf yükleyin, uzman podologlarımız 24 saat içinde size dönsün. Tamamen ücretsiz."
        />
        <link rel="canonical" href="https://pedizone.com/podolog-degerlendirmesi" />
        <meta property="og:title" content="Ücretsiz Ön Değerlendirme | PediZone®" />
        <meta
          property="og:description"
          content="Fotoğraf yükleyin, uzman podologlarımız ücretsiz değerlendirsin ve 24 saat içinde size dönsün."
        />
        <meta property="og:url" content="https://pedizone.com/podolog-degerlendirmesi" />
      </Helmet>

      <FreeEvaluation />
    </div>
  );
};

export default PodologDegerlendirme;
