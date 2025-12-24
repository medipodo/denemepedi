// frontend/src/blog_content.js
// ✅ SINGLE SOURCE OF TRUTH – BLOG DATA ONLY
// ❌ NO REACT, NO ROUTER, NO COMPONENTS

export const blogPosts = [
  {
    id: 'ure-nedir',
    lang: 'tr',
    slug: 'ure-nedir',
    title: 'Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?',
    excerpt:
      'Cildinizin unutulmuş kahramanı: Üre ve ayak bakımındaki bilimsel etkileri.',
    image: '/blog-images/ure-nedir.jpg',
    date: '2025-12-24',
    readTime: '12 dk',
    tags: ['Üre', 'Cilt Bakımı'],
    content: `
      <p>
        Üre, cildin nem dengesini sağlayan en önemli doğal nem tutuculardan biridir.
        Özellikle kuru ve çatlamaya eğilimli ayak derisinde kritik rol oynar.
      </p>
    `
  }

  // 👉 diğer bloglar buraya
];
