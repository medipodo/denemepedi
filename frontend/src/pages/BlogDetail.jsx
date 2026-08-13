import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle, 
  XCircle, Info, Lightbulb, ShieldCheck, ChevronDown, ChevronUp,
  BookOpen, Sparkles, Share2, Copy, Check, Heart, Droplets, 
  Shield, Footprints, Timer, TrendingUp, Users, Zap, Activity
} from 'lucide-react';
import { blogPosts, products } from '../mock';
import { enrichedBlogPosts } from '../blog_content';
import { HIDDEN_BLOG_SLUGS } from '../hiddenBlogs';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import BlogUreNedir from '../components/BlogUreNedir';
import BlogAyakMantariEN from '../components/BlogAyakMantariEN';
import BlogTirnakMantariEN from '../components/BlogTirnakMantariEN';
import BlogTirnakMantariNedenGecmez from '../components/BlogTirnakMantariNedenGecmez';
import BlogAyakMantariBaslangici from '../components/BlogAyakMantariBaslangici';
import BlogParmakArasiMantar from '../components/BlogParmakArasiMantar';
import BlogNasirNedenTekrarEder from '../components/BlogNasirNedenTekrarEder';
import BlogSerumKullanimOnemi from '../components/BlogSerumKullanimOnemi';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';

const BlogDetail = () => {
  const { slug, currentLang } = useLanguage();
  // Gizlenen slug'lar detayda da açılmaz
  const isHidden = HIDDEN_BLOG_SLUGS.has(slug);
  // Detayı önce enrichedBlogPosts'ta ara (yeni eklenen zengin bloglar önceliklidir), yoksa mock.js'te ara
  const post = isHidden
    ? undefined
    : (enrichedBlogPosts.find(p => p.slug === slug)
        || blogPosts.find(p => p.slug === slug));
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Üre blogu için özel component (TR)
  if (slug === 'ure-nedir' && currentLang === 'tr') {
    return <BlogUreNedir />;
  }

  // Ayak mantarı blogu için İngilizce component
  if (slug === 'what-is-foot-fungus' && currentLang === 'en') {
    return <BlogAyakMantariEN />;
  }

  // Tırnak mantarı türleri blogu için İngilizce component
  if (slug === 'types-of-nail-fungus' && currentLang === 'en') {
    return <BlogTirnakMantariEN />;
  }

  // Tırnak mantarı neden geçmez blogu
  if (slug === 'tirnak-mantari-neden-gecmez') {
    return <BlogTirnakMantariNedenGecmez />;
  }

  // Ayak mantarı başlangıcı blogu
  if (slug === 'ayak-mantari-baslangici-nasil-anlasilir') {
    return <BlogAyakMantariBaslangici />;
  }

  // Parmak arası mantar blogu
  if (slug === 'parmak-arasi-mantar-nasil-gecer') {
    return <BlogParmakArasiMantar />;
  }

  // Nasır neden sürekli tekrar eder blogu
  if (slug === 'nasir-neden-surekli-tekrar-eder') {
    return <BlogNasirNedenTekrarEder />;
  }

  // PediZone serum kullanım önemi blogu
  if (slug === 'serum-kullanim-onemi') {
    return <BlogSerumKullanimOnemi />;
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Yazı Bulunamadı</h1>
          <LocalizedLink to="/blog">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <ArrowLeft className="mr-2" size={18} /> Blog'a Dön
            </Button>
          </LocalizedLink>
        </div>
      </div>
    );
  }

  // Check if structured sections exist
  const hasStructuredContent = post.sections && post.sections.length > 0;

  // FAQ JSON-LD Schema
  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": typeof post.image === 'string' ? post.image : undefined,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "PediZone",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pedizone.com/favicon.svg"
      }
    }
  };

  // Related posts - mock.js + enrichedBlogPosts birleşik (slug çakışması + gizlenenler filtreli)
  const existingSlugsForRelated = new Set(blogPosts.map(p => p.slug));
  const allPostsForRelated = [
    ...blogPosts.filter(p => !HIDDEN_BLOG_SLUGS.has(p.slug)),
    ...enrichedBlogPosts.filter(p => !existingSlugsForRelated.has(p.slug) && !HIDDEN_BLOG_SLUGS.has(p.slug))
  ];

  // Konu-tabanlı ilgili içerik seçimi (statik ilk 3 yerine puanlama).
  // Türkçe karakter duyarsız karşılaştırma için normalize.
  const normalizeText = (s) => (s || '')
    .toString()
    .toLocaleLowerCase('tr')
    .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ü/g, 'u')
    .replace(/ş/g, 's').replace(/ö/g, 'o').replace(/ç/g, 'c')
    .replace(/î/g, 'i').replace(/â/g, 'a').replace(/û/g, 'u');

  const currentTags = new Set(((post && post.tags) || []).map(normalizeText));
  const currentTitleN = normalizeText(post && post.title);
  const currentExcerptN = normalizeText(post && post.excerpt);
  const currentImageCat = post && post.imageCategory;
  const topicKeywords = [
    'mantar','onikomikoz','tirnak','batik','ayakkabi','nasir','topuk','catlak',
    'koku','hijyen','egzama','parmak','ure','serum','krem','pedikur','bakim',
    'kasinti','iyilesme','tekrar','sedef','yara','dermatit','deri'
  ];
  const currentKw = new Set(topicKeywords.filter(kw => currentTitleN.includes(kw) || currentExcerptN.includes(kw)));

  const scoredRelated = allPostsForRelated
    .filter(p => p.slug !== slug)
    .map(p => {
      const pTags = new Set(((p.tags) || []).map(normalizeText));
      const pTitleN = normalizeText(p.title);
      const pExcerptN = normalizeText(p.excerpt);
      let score = 0;
      // 1) Ortak etiketler (en güçlü sinyal)
      for (const t of pTags) if (currentTags.has(t)) score += 10;
      // 2) Aynı imageCategory (nail-fungus, ingrown vs.)
      if (currentImageCat && p.imageCategory && p.imageCategory === currentImageCat) score += 6;
      // 3) Ortak konu anahtar kelimeleri (başlık/excerpt)
      for (const kw of currentKw) {
        if (pTitleN.includes(kw)) score += 4;
        else if (pExcerptN.includes(kw)) score += 2;
      }
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score);

  // Puan alan bloglar 3'ten azsa kalan yerleri sıradaki en yeni bloglarla doldur.
  const strong = scoredRelated.filter(x => x.score > 0);
  const filler = scoredRelated.filter(x => x.score === 0);
  const relatedPosts = [...strong, ...filler].slice(0, 3).map(x => x.post);

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <Helmet>
        <title>{`${post.title} | PediZone Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://pedizone.com/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://pedizone.com/blog/${slug}`} />
        <meta property="og:image" content={`https://pedizone.com${post.image}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={`https://pedizone.com${post.image}`} />
        
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
      </Helmet>

      {/* Hero Header */}
      <section className="pt-20 md:pt-24 pb-6 md:pb-8 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mt-0 mb-2">
              <LocalizedLink to="/" className="hover:text-red-600 transition-colors">Ana Sayfa</LocalizedLink>
              <span className="text-gray-300">/</span>
              <LocalizedLink to="/blog" className="hover:text-red-600 transition-colors">Blog</LocalizedLink>
              <span className="text-gray-300">/</span>
              <span className="text-gray-700 font-medium truncate max-w-[200px]">{post.title.split(' ').slice(0, 3).join(' ')}...</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-0 mb-3">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-0 mb-2 leading-[1.2]">
              {post.title}
            </h1>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-gray-100 mb-0">
              <div className="flex flex-wrap items-center gap-5 text-gray-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-sm">{post.author}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-red-500" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-red-500" />
                  <span>{post.readTime} okuma</span>
                </div>
              </div>
              
              {/* Share Button - Hidden on mobile */}
              <button 
                onClick={handleCopyLink}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-medium text-gray-700"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                {copied ? 'Kopyalandı!' : 'Paylaş'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-2 md:py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              
              {/* Structured Content Rendering */}
              {hasStructuredContent ? (
                post.sections.map((section, idx) => (
                  <BlogSection key={idx} section={section} index={idx} />
                ))
              ) : (
                // Fallback for markdown content
                <div 
                  className="prose prose-lg prose-red max-w-none
                    prose-headings:text-gray-900 prose-headings:font-bold
                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-gray-700 prose-p:leading-relaxed
                    prose-li:text-gray-700
                    prose-strong:text-gray-900
                    prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content?.replace(/\n/g, '<br/>') || '' }}
                />
              )}

              {/* FAQ Section */}
              {post.faqs && post.faqs.length > 0 && (
                <div className="mt-16 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <span className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </span>
                    Sık Sorulan Sorular
                  </h2>
                  <div className="space-y-3">
                    {post.faqs.map((faq, idx) => (
                      <div 
                        key={idx} 
                        className={`border rounded-xl overflow-hidden transition-all ${
                          openFaq === idx ? 'border-red-300 shadow-md' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <button
                          onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                          className={`w-full px-6 py-5 flex items-center justify-between transition-colors ${
                            openFaq === idx ? 'bg-red-50' : 'bg-white hover:bg-gray-50'
                          }`}
                        >
                          <span className={`font-semibold text-left pr-4 ${openFaq === idx ? 'text-red-700' : 'text-gray-900'}`}>
                            {faq.question}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                            openFaq === idx ? 'bg-red-600' : 'bg-gray-100'
                          }`}>
                            {openFaq === idx ? (
                              <ChevronUp className="w-5 h-5 text-white" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-96' : 'max-h-0'}`}>
                          <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Legal Notice */}
              <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-800 mb-2 text-lg">⚠️ Tıbbi Bilgilendirme</h4>
                    <p className="text-amber-700 leading-relaxed">
                      Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. 
                      Ayak sağlığınızla ilgili şikayetleriniz için mutlaka bir sağlık profesyoneline danışınız.
                    </p>
                  </div>
                </div>
              </div>

              {/* Internal Link - Related Content REMOVED: duplicate of "İlgili Makaleler" below */}
            </article>
          </div>
        </div>
      </section>

      {/* Product Recommendation Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Önerilen PediZone® Ürünleri
              </h2>
              <p className="text-gray-600">Profesyonel ayak bakımı için özel formüller</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product) => (
                <LocalizedLink 
                  key={product.id} 
                  to={`/urun/${product.id}`}
                  className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <Badge className="bg-red-100 text-red-600 mb-2">{product.badge}</Badge>
                  <h3 className="font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors line-clamp-2">
                    {product.shortName}
                  </h3>
                  <p className="text-sm text-gray-500">{product.volume}</p>
                </LocalizedLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                </span>
                İlgili Makaleler
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <LocalizedLink 
                    key={relatedPost.slug} 
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="rounded-xl overflow-hidden mb-3 aspect-[16/10]">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 mb-1">
                      {relatedPost.title}
                    </h3>
                    <span className="text-sm text-gray-500">{relatedPost.readTime} okuma</span>
                  </LocalizedLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 via-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ayak Sağlığınız İçin İlk Adımı Atın</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            PediZone® ürünleri ile profesyonel ayak bakımını evinize taşıyın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <LocalizedLink to="/#urunler">
              <Button className="bg-white text-red-700 hover:bg-red-50 px-8 font-semibold shadow-lg">
                Ürünleri İncele
              </Button>
            </LocalizedLink>
            <LocalizedLink to="/blog">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 font-semibold">
                Tüm Yazılar
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

// Blog Section Component - Professional Medipodo Style
const BlogSection = ({ section, index }) => {
  switch (section.type) {
    case 'intro':
      return (
        <div className="mb-10">
          <p className="text-xl text-gray-700 leading-relaxed">
            {section.content}
          </p>

          {section.highlight && (
          <div className="mt-6 bg-gradient-to-r from-red-50 to-red-100/50 border-l-4 border-red-500 rounded-r-xl p-5">
            <p className="text-red-800 font-medium leading-relaxed">
              {section.highlight}
            </p>
          </div>
        )}
        </div>
      );

    case 'heading':
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-14 mb-6 pb-4 border-b-2 border-gray-100 flex items-center">
          <span className="w-1.5 h-8 bg-red-600 rounded-full mr-4"></span>
          {section.content}
        </h2>
      );

    case 'subheading':
      return (
        <h3 className="text-xl font-bold text-gray-900 mt-10 mb-4 flex items-center">
          {section.icon && <span className="text-2xl mr-3">{section.icon}</span>}
          {section.content}
        </h3>
      );

    case 'paragraph':
      return (
        <p className="text-gray-700 mb-6 leading-relaxed text-lg [&_a]:text-red-600 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700" dangerouslySetInnerHTML={{ __html: section.content }} />
      );

    case 'image':
      return (
        <figure className="my-10">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
            <img 
              src={section.src} 
              alt={section.alt} 
              className="w-full"
            />
          </div>
          {section.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
              <span className="w-8 h-px bg-gray-300 mr-3"></span>
              {section.caption}
              <span className="w-8 h-px bg-gray-300 ml-3"></span>
            </figcaption>
          )}
        </figure>
      );

    case 'video':
      return (
        <figure className="my-10 flex flex-col items-center">
          <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <video 
              src={section.src} 
              autoPlay 
              muted 
              loop 
              playsInline
              className="w-full h-auto object-cover block"
            />
          </div>
          {section.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
              <span className="w-8 h-px bg-gray-300 mr-3"></span>
              {section.caption}
              <span className="w-8 h-px bg-gray-300 ml-3"></span>
            </figcaption>
          )}
        </figure>
      );

    case 'beforeAfterImages':
      return (
        <div className="my-10">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Before */}
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                ❌ Öncesi
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-red-200">
                <img 
                  src={section.beforeSrc} 
                  alt={section.beforeAlt} 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-center text-sm text-red-600 font-medium mt-2">{section.beforeCaption}</p>
            </div>
            {/* After */}
            <div className="relative">
              <div className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                ✅ Sonrası
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-green-200">
                <img 
                  src={section.afterSrc} 
                  alt={section.afterAlt} 
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className="text-center text-sm text-green-600 font-medium mt-2">{section.afterCaption}</p>
            </div>
          </div>
        </div>
      );

    case 'numberedSection':
      return (
        <div className="mt-8 mb-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl sm:text-2xl flex-shrink-0 shadow-lg">
              {section.number}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
              {section.summary && (
                <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl px-4 py-3 mb-4 border-l-4 border-red-500">
                  <p className="text-red-800 text-sm">
                    <span className="inline-flex items-center text-red-600 font-semibold mr-1">
                      💡
                    </span>
                    {section.summary}
                  </p>
                </div>
              )}
              <p className="text-gray-700 leading-relaxed [&_a]:text-red-600 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700" dangerouslySetInnerHTML={{ __html: section.content }} />
            </div>
          </div>
        </div>
      );

    case 'bulletList':
      return (
        <ul className="space-y-4 my-6 bg-gray-50/50 rounded-xl p-6">
          {section.items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="w-6 h-6 bg-red-100 rounded-lg flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
              </span>
              <span className="text-gray-700 leading-relaxed">
                {typeof item === 'object' ? (
                  <>
                    {item.bold && <strong className="text-gray-900">{item.bold} </strong>}
                    {item.text}
                  </>
                ) : (
                  <span className="[&_a]:text-red-600 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700" dangerouslySetInnerHTML={{ __html: item }} />
                )}
              </span>
            </li>
          ))}
        </ul>
      );

    case 'checkList':
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 my-8 border border-green-200">
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700 [&_a]:text-red-600 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-red-700" dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
        </div>
      );

    case 'warningList':
      return (
        <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 my-8 border border-red-200">
          <ul className="space-y-3">
            {section.items.map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <XCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case 'infoBox':
      const infoBoxStyles = {
        tip: {
          bg: 'bg-gradient-to-br from-blue-50 to-sky-50',
          border: 'border-blue-200',
          iconBg: 'bg-blue-500',
          titleColor: 'text-blue-900',
          icon: <Lightbulb className="w-5 h-5 text-white" />
        },
        warning: {
          bg: 'bg-gradient-to-br from-amber-50 to-orange-50',
          border: 'border-amber-200',
          iconBg: 'bg-amber-500',
          titleColor: 'text-amber-900',
          icon: <AlertTriangle className="w-5 h-5 text-white" />
        },
        success: {
          bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
          border: 'border-green-200',
          iconBg: 'bg-green-500',
          titleColor: 'text-green-900',
          icon: <ShieldCheck className="w-5 h-5 text-white" />
        },
        info: {
          bg: 'bg-gradient-to-br from-gray-50 to-slate-50',
          border: 'border-gray-200',
          iconBg: 'bg-gray-500',
          titleColor: 'text-gray-900',
          icon: <Info className="w-5 h-5 text-white" />
        }
      };
      const style = infoBoxStyles[section.variant] || infoBoxStyles.info;
      
      return (
        <div className={`${style.bg} rounded-2xl p-6 my-8 border ${style.border}`}>
          <div className="flex items-start">
            <div className={`w-10 h-10 ${style.iconBg} rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-sm`}>
              {style.icon}
            </div>
            <div className="flex-1">
              {section.title && (
                <h4 className={`font-bold ${style.titleColor} mb-2 text-lg`}>
                  {section.variant === 'warning' && '📌 '}
                  {section.variant === 'tip' && '💡 '}
                  {section.variant === 'success' && '✅ '}
                  {section.title}
                </h4>
              )}
              <p className="text-gray-700 leading-relaxed">{section.content}</p>
              {section.link && (
                <LocalizedLink 
                  to={section.link} 
                  className="inline-flex items-center mt-3 text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  Yazıyı Oku
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </LocalizedLink>
              )}
            </div>
          </div>
        </div>
      );

    case 'productCard':
      return (
        <div className="bg-gradient-to-r from-red-50 via-red-50 to-rose-50 rounded-2xl p-6 my-8 border border-red-200 shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center mr-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 text-lg">{section.title}</h4>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">{section.content}</p>
          {section.benefits && (
            <ul className="space-y-2 mt-4 pt-4 border-t border-red-200">
              {section.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          )}
          {section.link && (
            <LocalizedLink 
              to={section.link} 
              className="inline-flex items-center mt-4 px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              🔗 İçeriği Oku
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </LocalizedLink>
          )}
        </div>
      );

    case 'comparisonBox':
      return (
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-6 border border-red-200">
            <h4 className="font-bold text-red-700 mb-4 flex items-center text-lg">
              <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3">
                <XCircle className="w-5 h-5 text-white" />
              </div>
              {section.wrongTitle || '❌ Yanlış Uygulamalar'}
            </h4>
            <ul className="space-y-3">
              {section.wrong.map((item, i) => (
                <li key={i} className="text-gray-700 text-sm flex items-start">
                  <span className="text-red-500 mr-2 font-bold">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
            <h4 className="font-bold text-green-700 mb-4 flex items-center text-lg">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              {section.rightTitle || '✅ Doğru Uygulamalar'}
            </h4>
            <ul className="space-y-3">
              {section.right.map((item, i) => (
                <li key={i} className="text-gray-700 text-sm flex items-start">
                  <span className="text-green-500 mr-2 font-bold">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case 'statsBox':
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {section.stats.map((stat, i) => (
            <div key={i} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      );

    case 'stepCard':
      return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 my-4 hover:shadow-lg hover:border-red-200 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg mr-4 shadow-md">
              {section.step}
            </div>
            <h4 className="font-bold text-gray-900 text-lg">{section.title}</h4>
          </div>
          <p className="text-gray-700 leading-relaxed pl-16">{section.content}</p>
          {section.product && (
            <div className="mt-4 pt-4 border-t border-gray-100 ml-16">
              <p className="text-sm text-red-600 font-semibold flex items-center">
                <Sparkles className="w-4 h-4 mr-2" />
                {section.product}
              </p>
            </div>
          )}
        </div>
      );

    case 'riskGroups':
      return (
        <div className="my-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
          <h4 className="font-bold text-amber-900 mb-4 flex items-center text-lg">
            <AlertTriangle className="w-5 h-5 mr-2 text-amber-600" />
            {section.title || 'Risk Altındaki Gruplar'}
          </h4>
          <div className="flex flex-wrap gap-2">
            {section.groups.map((group, i) => (
              <span key={i} className="px-4 py-2 bg-white/80 rounded-full text-sm font-medium text-amber-800 border border-amber-200">
                {group}
              </span>
            ))}
          </div>
        </div>
      );

    case 'quickFact':
      return (
        <div className="my-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">{section.title || 'Bilgi'}</h4>
              <p className="text-blue-100">{section.content}</p>
            </div>
          </div>
        </div>
      );

    case 'relatedArticles':
      return (
        <div className="my-8 grid md:grid-cols-2 gap-4">
          {section.articles.map((article, i) => (
            <LocalizedLink 
              key={i}
              to={article.link}
              className="group bg-gradient-to-br from-red-50 to-rose-50 border-2 border-red-100 hover:border-red-300 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                  {article.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">{article.description}</p>
                  <span className="inline-flex items-center text-red-600 text-sm font-semibold">
                    Devamını Oku
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </LocalizedLink>
          ))}
        </div>
      );

    case 'comparisonTable':
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-gradient-to-r from-red-600 to-rose-700 text-white">
                {section.headers.map((header, i) => (
                  <th key={i} className="py-4 px-6 font-bold text-sm uppercase tracking-wider">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {section.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                  {row.map((cell, j) => (
                    <td key={j} className="py-3.5 px-6 text-gray-700 text-sm font-medium">
                      {j === 0 ? <strong className="text-gray-900">{cell}</strong> : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    default:
      return null;
  }
};

export default BlogDetail;
