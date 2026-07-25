import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Phone, Award, MessageCircle } from 'lucide-react';
import FreeEvaluation from '../components/FreeEvaluation';
import AyakAnalizi from './AyakAnalizi';
import LocalizedLink from '../components/LocalizedLink';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { blogPosts } from '../mock';

const WHATSAPP_URL =
  'https://wa.me/905054000326?text=' +
  encodeURIComponent('Merhaba, ücretsiz ön değerlendirme için bilgi almak istiyorum');

// Ücretsiz Ön Değerlendirme - Podolog Değerlendirmesi sayfası
const PodologDegerlendirme = () => {
  const posts = blogPosts.slice(0, 6);

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

      {/* Ücretsiz Ön Değerlendirme */}
      <FreeEvaluation />

      {/* Ayak Analizi (quiz) */}
      <AyakAnalizi embedded />

      {/* Blog Kartları */}
      <section className="py-16 md:py-20 bg-white" data-testid="podolog-blog-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-red-600">
              PediZone Blog
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-gray-900">Ayak Sağlığı Rehberi</h2>
            <p className="mt-3 text-base text-gray-600">Uzman podologlardan faydalı bilgiler</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <LocalizedLink key={post.id || post.slug} to={`/blog/${post.slug}`} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                    width="380"
                    height="192"
                  />
                  <CardContent className="p-6">
                    <div className="flex gap-2 mb-3">
                      {(post.tags || []).slice(0, 2).map((tag) => (
                        <Badge key={tag} className="bg-red-100 text-red-700 text-xs">{tag}</Badge>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="text-red-600 font-medium flex items-center">
                      Devamını Oku <ArrowRight size={16} className="ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </LocalizedLink>
            ))}
          </div>
          <div className="text-center mt-10">
            <LocalizedLink to="/blog">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8">Tüm Yazılar</Button>
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* İletişim + Sertifikalar */}
      <section className="py-16 bg-gray-50" data-testid="podolog-contact-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                <MessageCircle size={26} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">WhatsApp</h3>
              <p className="mt-1 text-sm text-gray-500">Hemen yaz, ücretsiz değerlendirme al</p>
            </a>

            {/* İletişim */}
            <LocalizedLink
              to="/iletisim"
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                <Phone size={26} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">İletişim</h3>
              <p className="mt-1 text-sm text-gray-500">Bize ulaşın, sorularınızı yanıtlayalım</p>
            </LocalizedLink>

            {/* Sertifikalar */}
            <LocalizedLink
              to="/sertifikalar"
              className="group flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <Award size={26} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gray-900">Sertifikalar</h3>
              <p className="mt-1 text-sm text-gray-500">Kalite ve güvenlik belgelerimiz</p>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PodologDegerlendirme;
