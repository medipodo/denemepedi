import React, { useState, useEffect, lazy, Suspense } from 'react';
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
import LocalizedLink from '../components/LocalizedLink';
import BlogVideoPlayer from '../components/BlogVideoPlayer';
import { useLanguage } from '../i18n/LanguageContext';

const BlogUreNedir = lazy(() => import('../components/BlogUreNedir'));
const BlogAyakMantariEN = lazy(() => import('../components/BlogAyakMantariEN'));
const BlogTirnakMantariEN = lazy(() => import('../components/BlogTirnakMantariEN'));
const BlogTirnakMantariNedenGecmez = lazy(() => import('../components/BlogTirnakMantariNedenGecmez'));
const BlogAyakMantariBaslangici = lazy(() => import('../components/BlogAyakMantariBaslangici'));
const BlogParmakArasiMantar = lazy(() => import('../components/BlogParmakArasiMantar'));
const BlogNasirNedenTekrarEder = lazy(() => import('../components/BlogNasirNedenTekrarEder'));
const BlogSerumKullanimOnemi = lazy(() => import('../components/BlogSerumKullanimOnemi'));
const BlogNasirSigilFarklari = lazy(() => import('../components/BlogNasirSigilFarklari'));
const BlogMedikalAyakBakimiNedir = lazy(() => import('../components/BlogMedikalAyakBakimiNedir'));

const BlogLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600 mb-3"></div>
      <p className="text-gray-500 text-sm">Yükleniyor...</p>
    </div>
  </div>
);

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
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogUreNedir />
      </Suspense>
    );
  }

  // Ayak mantarı blogu için İngilizce component
  if (slug === 'what-is-foot-fungus' && currentLang === 'en') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogAyakMantariEN />
      </Suspense>
    );
  }

  // Tırnak mantarı türleri blogu için İngilizce component
  if (slug === 'types-of-nail-fungus' && currentLang === 'en') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogTirnakMantariEN />
      </Suspense>
    );
  }

  // Tırnak mantarı neden geçmez blogu
  if (slug === 'tirnak-mantari-neden-gecmez') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogTirnakMantariNedenGecmez />
      </Suspense>
    );
  }

  // Ayak mantarı başlangıcı blogu
  if (slug === 'ayak-mantari-baslangici-nasil-anlasilir') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogAyakMantariBaslangici />
      </Suspense>
    );
  }

  // Parmak arası mantar blogu
  if (slug === 'parmak-arasi-mantar-nasil-gecer') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogParmakArasiMantar />
      </Suspense>
    );
  }

  // Nasır neden sürekli tekrar eder blogu
  if (slug === 'nasir-neden-surekli-tekrar-eder') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogNasirNedenTekrarEder />
      </Suspense>
    );
  }

  // PediZone serum kullanım önemi blogu
  if (slug === 'serum-kullanim-onemi') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogSerumKullanimOnemi />
      </Suspense>
    );
  }

  // Nasır ve siğil farkları blogu
  if (slug === 'nasir-sigil-farklari') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogNasirSigilFarklari />
      </Suspense>
    );
  }

  // Medikal ayak bakımı nedir blogu
  if (slug === 'medikal-ayak-bakimi-nedir') {
    return (
      <Suspense fallback={<BlogLoading />}>
        <BlogMedikalAyakBakimiNedir />
      </Suspense>
    );
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
    ...enrichedBlogPosts.filter(p => !HIDDEN_BLOG_SLUGS.has(p.slug) && !existingSlugsForRelated.has(p.slug))
  ];
  const relatedPosts = allPostsForRelated
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <Helmet>
        <title>{post.title} | PediZone Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://pedizone.com/blog/${post.slug}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${post.title} | PediZone Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://pedizone.com/blog/${post.slug}`} />
        {post.image && (
          <meta property="og:image" content={post.image.startsWith('http') ? post.image : `https://pedizone.com${post.image}`} />
        )}
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${post.title} | PediZone Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
        {post.image && (
          <meta name="twitter:image" content={post.image.startsWith('http') ? post.image : `https://pedizone.com${post.image}`} />
        )}
      </Helmet>

      {/* Schema.org - Article & FAQ */}
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Geri Dön */}
        <div className="mb-6">
          <LocalizedLink to="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors">
            <ArrowLeft className="mr-2" size={18} /> Tüm Blog Yazıları
          </LocalizedLink>
        </div>

        {/* Makale Başlığı & Bilgileri */}
        <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-6 sm:p-10 mb-8">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1.5 bg-red-50 text-red-600 px-3 py-1 rounded-full font-medium">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime || '5 dk okuma'}
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Kapak Görseli */}
          {post.image && (
            <div className="rounded-xl overflow-hidden mb-8 shadow-md">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full max-h-[450px] object-cover"
              />
            </div>
          )}

          {/* Giriş / Özet */}
          <div className="text-lg text-gray-700 font-medium leading-relaxed mb-8 p-4 bg-gray-50 border-l-4 border-red-600 rounded-r-xl">
            {post.excerpt}
          </div>

          {/* Yapılandırılmış Bölümler (sections) veya Düz İçerik (content) */}
          {hasStructuredContent ? (
            <div className="space-y-10">
              {post.sections.map((section, idx) => {
                const type = section.type;

                // 1. intro
                if (type === 'intro') {
                  return (
                    <div key={idx} className="p-6 bg-red-50/50 border border-red-100 rounded-2xl space-y-3">
                      <p className="text-gray-800 leading-relaxed text-base sm:text-lg">{section.content}</p>
                      {section.highlight && (
                        <div className="font-semibold text-red-700 text-sm sm:text-base flex items-start gap-2 pt-2 border-t border-red-200/60">
                          <span className="text-red-600">✦</span>
                          <span>{section.highlight}</span>
                        </div>
                      )}
                    </div>
                  );
                }

                // 2. heading
                if (type === 'heading') {
                  return (
                    <h2 key={idx} className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-8 mb-4 tracking-tight">
                      {section.content}
                    </h2>
                  );
                }

                // 3. paragraph
                if (type === 'paragraph') {
                  return (
                    <p key={idx} className="text-gray-700 leading-relaxed text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />
                  );
                }

                // 4. image
                if (type === 'image') {
                  return (
                    <div key={idx} className="my-6 rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
                      <img 
                        src={section.src} 
                        alt={section.alt || 'PediZone Blog Görseli'} 
                        className="w-full max-h-[480px] object-cover"
                      />
                      {section.caption && (
                        <p className="text-xs text-center text-gray-500 py-2.5 bg-gray-100 font-medium">{section.caption}</p>
                      )}
                    </div>
                  );
                }

                // 5. video
                if (type === 'video') {
                  return (
                    <div key={idx} className="my-8 p-6 bg-gray-50 border border-gray-200 rounded-3xl">
                      {section.title && <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{section.title}</h3>}
                      {section.caption && <p className="text-sm text-gray-600 mb-4 text-center max-w-xl mx-auto">{section.caption}</p>}
                      <BlogVideoPlayer
                        src={section.src}
                        poster={section.poster}
                        title={section.title || post.title}
                        category={section.category || 'Klinik Video'}
                      />
                    </div>
                  );
                }

                // 6. bulletList / checkList / warningList
                if (type === 'bulletList' || type === 'checkList' || type === 'warningList') {
                  const isCheck = type === 'checkList';
                  const isWarn = type === 'warningList';
                  return (
                    <div key={idx} className={`p-6 rounded-2xl border ${isWarn ? 'bg-amber-50/50 border-amber-200' : isCheck ? 'bg-emerald-50/50 border-emerald-200' : 'bg-gray-50 border-gray-200'} space-y-3`}>
                      {section.title && (
                        <h4 className={`font-bold text-lg ${isWarn ? 'text-amber-900' : isCheck ? 'text-emerald-900' : 'text-gray-900'}`}>
                          {section.title}
                        </h4>
                      )}
                      <ul className="space-y-2.5">
                        {section.items && section.items.map((item, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                            <span className={`font-bold mt-0.5 ${isWarn ? 'text-amber-600' : isCheck ? 'text-emerald-600' : 'text-red-600'}`}>
                              {isCheck ? '✓' : isWarn ? '⚠' : '•'}
                            </span>
                            <span dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                // 7. infoBox
                if (type === 'infoBox') {
                  const variant = section.variant || 'tip';
                  const bgClass = variant === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-900' : variant === 'success' ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900';
                  return (
                    <div key={idx} className={`p-6 rounded-2xl border ${bgClass} space-y-2`}>
                      {section.title && <h4 className="font-bold text-lg">{section.title}</h4>}
                      <p className="text-sm sm:text-base leading-relaxed">{section.content}</p>
                      {section.link && (
                        <div className="pt-2">
                          <LocalizedLink to={section.link} className="inline-flex items-center text-sm font-bold underline hover:opacity-80">
                            Detaylı İncele →
                          </LocalizedLink>
                        </div>
                      )}
                    </div>
                  );
                }

                // 8. productCard
                if (type === 'productCard') {
                  return (
                    <div key={idx} className="my-8 p-6 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl shadow-sm flex flex-col sm:flex-row items-center gap-6">
                      <div className="flex-1 space-y-3">
                        <Badge className="bg-red-600 text-white font-semibold">PediZone® Orijinal Ürün</Badge>
                        <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
                        {section.benefits && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {section.benefits.map((b, bIdx) => (
                              <span key={bIdx} className="bg-white border border-red-200 text-red-700 text-xs px-2.5 py-1 rounded-full font-medium">
                                ✓ {b}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="pt-3">
                          <LocalizedLink to={section.link || '/urun/foot-nail-care-serum'}>
                            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-6">
                              Ürünü İncele →
                            </Button>
                          </LocalizedLink>
                        </div>
                      </div>
                    </div>
                  );
                }

                // 9. comparisonBox / stepCard / riskGroups / statsBox / quickFact or general fallback
                return (
                  <div key={idx} className="space-y-4">
                    {section.heading && (
                      <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                        {section.heading}
                      </h2>
                    )}
                    {section.text && (
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: section.text }} />
                    )}
                    {section.content && (
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />
                    )}
                    {section.image && (
                      <div className="rounded-xl overflow-hidden my-4 shadow-sm">
                        <img 
                          src={section.image} 
                          alt={section.heading || 'PediZone Blog Görseli'} 
                          className="w-full max-h-[400px] object-cover"
                        />
                      </div>
                    )}
                    {section.list && section.list.length > 0 && (
                      <ul className="space-y-2 my-4">
                        {section.list.map((li, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: li }} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.items && Array.isArray(section.items) && (
                      <ul className="space-y-2 my-4">
                        {section.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-red-600 font-bold mt-1">•</span>
                            <span dangerouslySetInnerHTML={{ __html: typeof item === 'string' ? item : (item.text || item.title || '') }} />
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.video && (
                      <div className="my-6 rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-black">
                        <BlogVideoPlayer src={section.video} poster={section.videoPoster} />
                        {section.videoCaption && (
                          <p className="text-xs text-center text-gray-400 py-2 bg-neutral-900">{section.videoCaption}</p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>{post.content}</p>
            </div>
          )}

          {/* Sık Sorulan Sorular (FAQ) */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="border border-gray-200 rounded-xl overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaq === fIdx ? <ChevronUp size={20} className="text-red-600 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-400 flex-shrink-0" />}
                    </button>
                    {openFaq === fIdx && (
                      <div className="p-4 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Paylaş ve Etkileşim */}
          <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500">Yazıyı Paylaş:</span>
              <button 
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors"
              >
                {copied ? <Check size={16} className="text-green-600" /> : <Share2 size={16} />}
                {copied ? 'Bağlantı Kopyalandı!' : 'Bağlantıyı Kopyala'}
              </button>
            </div>
          </div>
        </article>

        {/* İlgili Diğer Yazılar */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">İlgili Diğer Yazılar</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rel, rIdx) => (
                <LocalizedLink key={rIdx} to={`/blog/${rel.slug}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col">
                  {rel.image && (
                    <div className="h-40 overflow-hidden bg-gray-100">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-red-600 font-semibold mb-1 block">{rel.date}</span>
                      <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm mb-2">{rel.title}</h4>
                    </div>
                    <span className="text-xs font-semibold text-gray-500 flex items-center gap-1 mt-2">Devamını Oku →</span>
                  </div>
                </LocalizedLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
