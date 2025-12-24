import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  ArrowLeft, Calendar, Clock, User, AlertTriangle, CheckCircle,
  XCircle, Info, Lightbulb, ShieldCheck, ChevronDown, ChevronUp,
  BookOpen, Sparkles, Share2, Check
} from 'lucide-react';

import { blogPosts, products } from '../blog_content';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

import BlogUreNedir from '../components/BlogUreNedir';
import BlogAyakMantariEN from '../components/BlogAyakMantariEN';
import BlogTirnakMantariEN from '../components/BlogTirnakMantariEN';
import BlogFootOdorEN from '../components/BlogFootOdorEN';
import BlogPreventFootFungusEN from '../components/BlogPreventFootFungusEN';

import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';

const BlogDetail = () => {
  const { slug, currentLang } = useLanguage();

  // ✅ DİL FİLTRESİ EKLENDİ (ANA SORUN BUYDU)
  const post = blogPosts.find(
    p => p.slug === slug && p.lang === currentLang
  );

  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug, currentLang]);

  /* ===============================
     ÖZEL BLOG COMPONENT'LERİ
     =============================== */

  if (slug === 'ure-nedir' && currentLang === 'tr') {
    return <BlogUreNedir />;
  }

  if (slug === 'what-is-foot-fungus' && currentLang === 'en') {
    return <BlogAyakMantariEN />;
  }

  if (slug === 'types-of-nail-fungus' && currentLang === 'en') {
    return <BlogTirnakMantariEN />;
  }

  if (slug === 'what-causes-foot-odor' && currentLang === 'en') {
    return <BlogFootOdorEN />;
  }

  if (slug === 'how-to-prevent-foot-fungus' && currentLang === 'en') {
    return <BlogPreventFootFungusEN />;
  }

  /* ===============================
     POST YOKSA
     =============================== */

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Yazı Bulunamadı</h1>
        <LocalizedLink to="/blog">
          <Button>
            <ArrowLeft className="mr-2" /> Blog’a Dön
          </Button>
        </LocalizedLink>
      </div>
    );
  }

  /* ===============================
     SEO SCHEMA
     =============================== */

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

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "author": { "@type": "Person", "name": post.author },
    "datePublished": post.date
  };

  /* ===============================
     RELATED POSTS (DİL FİLTRELİ)
     =============================== */

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.lang === currentLang)
    .slice(0, 3);

  /* ===============================
     SHARE
     =============================== */

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  /* ===============================
     RENDER
     =============================== */

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.title} | PediZone Blog</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>

      {/* HEADER */}
      <section className="pt-24 pb-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readTime}
            </span>
            <button onClick={handleCopyLink} className="ml-auto flex items-center gap-1">
              {copied ? <Check size={14} /> : <Share2 size={14} />}
              {copied ? 'Kopyalandı' : 'Paylaş'}
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">
          {post.sections?.length
            ? post.sections.map((section, i) => (
                <BlogSection key={i} section={section} />
              ))
            : (
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content?.replace(/\n/g, '<br/>')
                }}
              />
            )}
        </div>
      </section>

      {/* RELATED */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(rp => (
                <LocalizedLink key={rp.slug} to={`/blog/${rp.slug}`}>
                  <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
                    <h3 className="font-semibold">{rp.title}</h3>
                    <span className="text-sm text-gray-500">{rp.readTime}</span>
                  </div>
                </LocalizedLink>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

/* ===============================
   BLOG SECTION
   =============================== */

const BlogSection = ({ section }) => {
  switch (section.type) {
    case 'heading':
      return <h2>{section.content}</h2>;
    case 'paragraph':
      return <p>{section.content}</p>;
    case 'bulletList':
      return (
        <ul>
          {section.items.map((i, idx) => <li key={idx}>{i}</li>)}
        </ul>
      );
    default:
      return null;
  }
};

export default BlogDetail;
