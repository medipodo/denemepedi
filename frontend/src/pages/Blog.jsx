import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Calendar, Clock, Search, X } from 'lucide-react';
import { blogPosts } from '../mock';
import { enrichedBlogPosts } from '../blog_content';
import { HIDDEN_BLOG_SLUGS } from '../hiddenBlogs';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';
import { useTranslation } from '../i18n/useTranslation';

// İngilizce blog verileri
const enBlogPosts = [
  {
    id: 'what-is-foot-fungus',
    title: 'What Is Foot Fungus? Causes, Symptoms, Types, and Prevention',
    slug: 'what-is-foot-fungus',
    excerpt:
      'Foot fungus is a common fungal infection affecting the skin of the feet. Learn what foot fungus is, why it occurs, common symptoms, and prevention methods.',
    image: '/blog-images/ayak-mantari/ayak-mantari-cover.jpg',
    date: 'January 15, 2025',
    readTime: '8 min',
    tags: ['Foot Fungus', 'Foot Care', 'Prevention']
  },
  {
    id: 'types-of-nail-fungus',
    title: 'Types of Nail Fungus (Onychomycosis): Symptoms, Causes, and Early Signs',
    slug: 'types-of-nail-fungus',
    excerpt:
      'Nail fungus, also known as onychomycosis, has different types affecting the nails. Learn the most common types, early symptoms, causes, and why early care matters.',
    image: '/blog-images/tirnak-mantari/Tırnak-Mantarı-Neden-Oluşur.jpg',
    date: 'January 20, 2025',
    readTime: '10 min',
    tags: ['Nail Fungus', 'Onychomycosis', 'Foot Care']
  },
  {
    id: 'what-causes-foot-odor',
    title: 'What Causes Foot Odor?',
    slug: 'what-causes-foot-odor',
    excerpt:
      'Foot odor occurs when sweat and bacteria interact. Learn the most common causes of foot odor and how to prevent it effectively.',
    image: '', // kapak görseli sonra eklenecek
    date: 'January 25, 2025',
    readTime: '7 min',
    tags: ['Foot Odor', 'Foot Hygiene', 'Foot Care']
  }
];

const Blog = () => {
  const { currentLang } = useLanguage();
  const { t } = useTranslation();

  // Türkçe liste = mock.js (elle yazılmış eski bloglar) + blog_content.js (n8n ile üretilen enrichedBlogPosts)
  // Slug çakışırsa mock.js önceliklidir (eski çalışan yapıyı bozmamak için).
  // n8n yeni blogları enrichedBlogPosts'un başına ekliyor → yeniler listenin başında görünür.
  // HIDDEN_BLOG_SLUGS içindeki yazılar hem listeden hem detaydan gizlenir.
  const existingBlogSlugs = new Set(blogPosts.map(p => p.slug));
  const mergedTrPosts = [
    ...enrichedBlogPosts.filter(p => !existingBlogSlugs.has(p.slug) && !HIDDEN_BLOG_SLUGS.has(p.slug)),
    ...blogPosts.filter(p => !HIDDEN_BLOG_SLUGS.has(p.slug))
  ];

  // Dile göre blog listesini belirle
  const posts = currentLang === 'en' ? enBlogPosts : mergedTrPosts;

  // Arama kutusu — Türkçe karakter duyarsız (diakritik normalize)
  const [searchQuery, setSearchQuery] = useState('');
  const normalize = (str) => (str || '')
    .toString()
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/î/g, 'i').replace(/â/g, 'a').replace(/û/g, 'u');

  const filteredPosts = useMemo(() => {
    const q = normalize(searchQuery).trim();
    if (!q) return posts;
    return posts.filter((p) => {
      const haystack = [
        p.title,
        p.excerpt,
        p.metaTitle,
        p.metaDescription,
        Array.isArray(p.tags) ? p.tags.join(' ') : ''
      ].map(normalize).join(' ');
      return haystack.includes(q);
    });
  }, [posts, searchQuery]);

  // WebPage Schema for Blog listing page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "PediZone Blog - Ayak Sağlığı Bilgileri",
    "description": "Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler ve uzman tavsiyeleri.",
    "url": "https://pedizone.com/blog",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://pedizone.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog"
        }
      ]
    }
  };

  const texts = {
    tr: {
      title: 'PediZone Blog',
      subtitle:
        'Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler ve uzman tavsiyeleri.',
      readMore: 'Devamını Oku'
    },
    en: {
      title: 'PediZone Blog',
      subtitle:
        'Useful information and expert advice on foot health, podiatry, and foot care.',
      readMore: 'Read More'
    },
    de: {
      title: 'PediZone Blog',
      subtitle:
        'Nützliche Informationen und Expertenrat zu Fußgesundheit, Podologie und Fußpflege.',
      readMore: 'Weiterlesen'
    }
  };

  const content = texts[currentLang] || texts.tr;

  const searchPlaceholder = currentLang === 'en'
    ? 'Search articles...'
    : currentLang === 'de'
      ? 'Artikel suchen...'
      : 'Yazılarda ara...';
  const noResultsText = currentLang === 'en'
    ? 'No articles found matching your search.'
    : currentLang === 'de'
      ? 'Keine Artikel gefunden.'
      : 'Aramanıza uygun yazı bulunamadı.';

  return (
    <div className="min-h-screen">
      {/* WebPage Schema for SEO */}
      <Helmet>
        <title>PediZone Blog - Ayak Sağlığı ve Bakım Bilgileri</title>
        <meta name="description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler ve uzman tavsiyeleri." />
        <link rel="canonical" href="https://pedizone.com/blog" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PediZone Blog - Ayak Sağlığı ve Bakım Bilgileri" />
        <meta property="og:description" content="Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler ve uzman tavsiyeleri." />
        <meta property="og:url" content="https://pedizone.com/blog" />
        <meta property="og:image" content="https://pedizone.com/images/pedizone-og-home-v2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      <section className="pt-32 pb-8 md:pb-10 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {content.title}
            </h1>
            <p className="text-base text-gray-600">{content.subtitle}</p>

            {/* Kompakt arama kutusu */}
            <div className="mt-6 max-w-md mx-auto">
              <style>{`
                @keyframes pediSearchWiggle {
                  0%, 100% { transform: translateY(-50%) scale(1) rotate(0deg); }
                  20% { transform: translateY(-50%) scale(1.15) rotate(-12deg); }
                  40% { transform: translateY(-50%) scale(1.15) rotate(12deg); }
                  60% { transform: translateY(-50%) scale(1.05) rotate(-6deg); }
                  80% { transform: translateY(-50%) scale(1) rotate(0deg); }
                }
                .pedi-search-icon {
                  animation: pediSearchWiggle 2.4s ease-in-out infinite;
                  transform-origin: center;
                }
                .pedi-search-wrap:focus-within .pedi-search-icon,
                .pedi-search-wrap.has-query .pedi-search-icon {
                  animation: none;
                  transform: translateY(-50%) scale(1) rotate(0deg);
                }
              `}</style>
              <div className={`relative pedi-search-wrap ${searchQuery ? 'has-query' : ''}`}>
                <Search
                  size={18}
                  strokeWidth={2.5}
                  className="pedi-search-icon absolute left-3 top-1/2 text-red-600 pointer-events-none"
                />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  aria-label={searchPlaceholder}
                  className="w-full h-10 pl-10 pr-10 rounded-full border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Aramayı temizle"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50 transition"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-8 md:pt-10 pb-16 bg-white">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="max-w-md mx-auto text-center py-12">
              <p className="text-gray-500">{noResultsText}</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <LocalizedLink key={post.id || post.slug} to={`/blog/${post.slug}`} className="block">
                <Card className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="p-0">
                    {post.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags &&
                          post.tags.slice(0, 2).map((tag) => (
                            <Badge
                              key={tag}
                              className="bg-red-100 text-red-700"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>
                      <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar size={16} className="mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock size={16} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="text-red-600 font-semibold flex items-center">
                        {content.readMore}{' '}
                        <ArrowRight className="ml-1" size={16} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LocalizedLink>
            ))}
          </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
