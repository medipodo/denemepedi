// frontend/src/blog_content.js
// ✅ TEK KAYNAK BLOG VERİSİ
// TR + EN bloglar buradan yönetilir
// ⚠️ BlogDetail.jsx slug + lang ile filtreler

export const blogPosts = [

  /* =====================================================
     🇹🇷 TÜRKÇE BLOG LİSTESİ
  ===================================================== */

  {
    id: 'ure-nedir',
    lang: 'tr',
    slug: 'ure-nedir',
    title: 'Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?',
    excerpt:
      'Cildinizin unutulmuş kahramanı: Üre. Dermatolojinin gizli kahramanı olan ürenin bilimsel temelleri ve ayak bakımındaki kritik rolü.',
    image: '/images/blog/ure-nedir.jpg',
    date: '2025-12-24',
    readTime: '12 dk',
    tags: ['Üre', 'Cilt Bakımı'],
    content: `
      <p>
        Üre, cildin nem dengesini sağlayan en önemli doğal nem tutuculardan biridir.
        Özellikle kuru ve çatlamaya eğilimli ayak derisinde kritik rol oynar.
      </p>
      <p>
        Dermatolojide keratolitik etkisi sayesinde ölü deri hücrelerinin
        uzaklaştırılmasına yardımcı olur.
      </p>
    `
  },

  {
    id: 'medikal-ayak-bakimi-nedir',
    lang: 'tr',
    slug: 'medikal-ayak-bakimi-nedir',
    title: 'Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir?',
    excerpt:
      'Medikal ayak bakımı nedir, kimler için gereklidir? Ayak mantarı, tırnak sorunları ve profesyonel bakım hakkında detaylı rehber.',
    image: '/images/blog/medikal-ayak-bakimi.jpg',
    date: '2025-12-22',
    readTime: '10 dk',
    tags: ['Medikal Ayak Bakımı', 'Podoloji'],
    content: `
      <p>
        Medikal ayak bakımı; tırnak, deri ve ayak sağlığını korumaya yönelik
        profesyonel podolojik uygulamaları kapsar.
      </p>
    `
  },

  {
    id: 'ayak-mantari-nedir',
    lang: 'tr',
    slug: 'ayak-mantari-nedir',
    title: 'Ayak Mantarı Nedir, Neden Olur? Belirtileri ve Korunma Yolları',
    excerpt:
      'Ayak mantarı neden olur? Kaşıntı, kızarıklık ve kötü koku gibi belirtilerle kendini gösteren bulaşıcı enfeksiyon.',
    image: '/images/blog/ayak-mantari.jpg',
    date: '2025-12-18',
    readTime: '5 dk',
    tags: ['Ayak Mantarı', 'Ayak Sağlığı'],
    content: `
      <p>
        Ayak mantarı, dermatofit adı verilen mantarların neden olduğu
        bulaşıcı bir cilt enfeksiyonudur.
      </p>
    `
  },

  {
    id: 'tirnak-mantari-turleri',
    lang: 'tr',
    slug: 'tirnak-mantari-turleri',
    title: 'Tırnak Mantarı Türleri (Onikomikoz)',
    excerpt:
      'Tırnak mantarı türleri nelerdir? Onikomikoz çeşitleri ve erken belirtiler.',
    image: '/images/blog/tirnak-mantari.jpg',
    date: '2025-12-10',
    readTime: '10 dk',
    tags: ['Tırnak Mantarı', 'Onikomikoz'],
    content: `
      <p>
        Onikomikoz, tırnak plağını etkileyen mantar enfeksiyonlarının
        genel adıdır.
      </p>
    `
  },

  {
    id: 'ayak-kokusu-neden-olur',
    lang: 'tr',
    slug: 'ayak-kokusu-neden-olur',
    title: 'Ayak Kokusu (Bromhidroz) Neden Olur?',
    excerpt:
      'Ayak kokusu neden olur? Terleme, bakteri ve mantar kaynaklı nedenler.',
    image: '/images/blog/ayak-kokusu.jpg',
    date: '2025-12-04',
    readTime: '8 dk',
    tags: ['Ayak Kokusu', 'Bromhidroz'],
    content: `
      <p>
        Ayak kokusu, terleme ve bakterilerin etkileşimi sonucu oluşur.
      </p>
    `
  },

  /* =====================================================
     🇬🇧 ENGLISH BLOG LIST
  ===================================================== */

  {
    id: 'what-is-foot-fungus',
    lang: 'en',
    slug: 'what-is-foot-fungus',
    title: 'What Is Foot Fungus?',
    excerpt:
      'Foot fungus is a common fungal infection affecting the skin of the feet.',
    image: '/blog-images/ayak-mantari/ayak-mantari-cover.jpg',
    date: '2025-01-15',
    readTime: '8 min',
    tags: ['Foot Fungus'],
    content: `
      <p>
        Foot fungus is a fungal infection that affects the skin of the feet,
        especially between the toes.
      </p>
    `
  }
];
