import React, { useState, useRef } from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ShieldCheck, Droplets, Sparkles, Award, Phone, Mail, MapPin, BookOpen, Leaf, Wind, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { siteInfo } from '../mock';

const FoamProductContent = ({ product, productImages }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && selectedImage < productImages.length - 1) {
        setSelectedImage(prev => prev + 1);
      } else if (diff < 0 && selectedImage > 0) {
        setSelectedImage(prev => prev - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>PediZone® Fresh-Guard Ayak Temizleme Köpüğü | Antibakteriyel Ayak Temizliği</title>
        <meta name="description" content="Derinlemesine temizlik ve koku kontrolü için özel formül. Günlük ayak bakımı için antibakteriyel köpük. 200ml." />
        <link rel="canonical" href="https://pedizone.com/urun/temizleme-kopugu" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="PediZone® Fresh-Guard Ayak Temizleme Köpüğü" />
        <meta property="og:description" content="Derinlemesine temizlik ve koku kontrolü için özel formül. Günlük ayak bakımı için antibakteriyel köpük." />
        <meta property="og:url" content="https://pedizone.com/urun/temizleme-kopugu" />
        <meta property="og:image" content="https://pedizone.com/images/products/foam/foam-cover.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": product?.name || "PediZone® Fresh-Guard Ayak Temizleme Köpüğü",
            "description": product?.description || "Derinlemesine temizlik ve koku kontrolü için özel formül. Günlük ayak bakımı için antibakteriyel köpük.",
            "image": "https://pedizone.com/images/products/foam/foam-cover.jpg",
            "category": "Ayak Bakım Ürünleri",
            "brand": {
              "@type": "Brand",
              "name": "PediZone"
            },
            "manufacturer": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "126"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <LocalizedLink to="/" className="hover:text-red-600">Ana Sayfa</LocalizedLink>
            <span>/</span>
            <LocalizedLink to="/#urunler" className="hover:text-red-600">Ürünler</LocalizedLink>
            <span>/</span>
            <span className="text-gray-900 font-medium">Temizleme Köpüğü</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Gallery */}
            <div className="space-y-4 lg:max-w-md lg:mx-auto w-full">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-xl bg-white cursor-grab active:cursor-grabbing max-w-[380px] lg:max-w-[420px] mx-auto"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <picture>
                  <source media="(max-width: 640px)" srcSet={`${productImages[selectedImage]}?w=640&q=75`} />
                  <source media="(max-width: 1024px)" srcSet={`${productImages[selectedImage]}?w=1024&q=80`} />
                  <img src={productImages[selectedImage]} alt="PediZone Temizleme Köpüğü" className="w-full aspect-square object-cover select-none" loading="eager" draggable="false" />
                </picture>
                {/* Swipe indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === idx ? 'bg-red-600 w-4' : 'bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-5 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'border-red-600 shadow-lg scale-105' : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Antibakteriyel</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Wind className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Ferahlatıcı</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Droplets className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Yumuşak Köpük</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  PediZone® Fresh-Guard Ayak Temizleme Köpüğü
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  Derinlemesine Temizlik ve Koku Kontrolü
                </p>
                <p className="text-lg text-gray-500">
                  Günlük Ayak Bakımı İçin Özel Formül | 200 ml
                </p>
              </div>

              <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(126 değerlendirme)</span>
              </div>

              {/* Özellikler */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-red-600" />
                  Ürün Özellikleri
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Antibakteriyel</strong> temizlik desteği</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Koku oluşumuna neden olan <strong>mikroorganizmaların uzaklaştırılmasına</strong> yardımcı</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cildi kurutmayan, <strong>yumuşak köpük</strong> form</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Günlük kullanıma</strong> uygun</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Podoloji uygulamalarıyla</strong> uyumlu</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-red-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Satın almak için</strong> yetkili satış noktalarımızdan ulaşabilirsiniz.
                </p>
                <LocalizedLink to="/bayiler">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
                    <MapPin className="mr-2" />
                    Satış Noktalarını Görüntüle
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ürün Açıklaması */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ürün Açıklaması</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                PediZone® Fresh-Guard Ayak Temizleme Köpüğü, ayakların gün boyunca maruz kaldığı <strong>ter, nem ve mikroorganizmalara</strong> karşı nazik ama etkili temizlik sağlamak amacıyla geliştirilmiştir.
              </p>
            </div>

            {/* Görsel 1 - Açıklama arasına */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto border border-gray-100 bg-gray-50 p-2">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/products/foam/foam-usage.jpg?w=640&q=75" />
                <img src="/images/products/foam/foam-usage.jpg" alt="PediZone Köpük Kullanımı" className="w-full max-h-[480px] object-contain mx-auto" loading="lazy" />
              </picture>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Köpük formu sayesinde cilde eşit yayılır, ayak derisini tahriş etmeden temizler ve düzenli kullanımda <strong>ferah, temiz ve bakımlı</strong> bir his oluşmasına yardımcı olur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Günlük ayak bakım rutininin <strong>ilk ve en önemli adımı</strong> olarak konumlandırılmıştır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Etki Mekanizması */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Etki Mekanizması</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🛡️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Chlorhexidine</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Antibakteriyel Temizlik Desteği</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cilt yüzeyindeki bakteri yükünün azaltılmasına yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Koku oluşumuna zemin hazırlayan mikroorganizmaların uzaklaştırılmasını destekler</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌿</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Quad Active Kompleks</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">4 Güçlü Bitki Özütü</p>
                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">Çay Ağacı</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">Kekik</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">Biberiye</span>
                        </div>
                        <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
                          <Leaf className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700">Okaliptüs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Görsel 2 - Etki mekanizması arasına */}
            <div className="my-8 rounded-2xl overflow-hidden shadow-md max-w-2xl mx-auto border border-gray-100 bg-gray-50 p-2">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/products/foam/foam-detail.jpg?w=640&q=75" />
                <img src="/images/products/foam/foam-detail.jpg" alt="PediZone Köpük Detay" className="w-full max-h-[480px] object-contain mx-auto" loading="lazy" />
              </picture>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💧</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Aloe Vera</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Yatıştırıcı & Nemlendirici Etki</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Temizlik sırasında cildin nem dengesini korumaya yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Hassas ve yıpranmaya eğilimli ayak cildini yatıştırır</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">❄️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Menthol</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Ferahlatıcı Etki</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Uygulama sonrası serinlik hissi sağlar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Ayaklarda gün boyu ferah bir his oluşmasına katkı sunar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100 md:col-span-2 max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">✨</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Panthenol</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Bariyer Destekleyici Bakım</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cilt bariyerinin korunmasına yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Günlük yıkamaya bağlı kuruluk riskini azaltır</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Alanları */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Alanları</h2>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Günlük ayak temizliği</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Aşırı terleme eğilimli ayaklar</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Koku oluşumuna yatkın ciltler</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Medikal ayak bakımı öncesi temizlik</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl md:col-span-2 max-w-md mx-auto">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Serum ve krem uygulamaları öncesi hazırlık</span>
              </div>
            </div>

            {/* Görsel 3 - Kullanım alanları sonrası */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/products/foam/foam-lifestyle.jpg?w=640&q=75" />
                <img src="/images/products/foam/foam-lifestyle.jpg" alt="PediZone Köpük Yaşam Tarzı" className="w-full object-contain" loading="lazy" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Şekli */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Kullanım Şekli</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto text-white text-2xl font-bold">1</div>
                <p className="text-gray-700">Islak ayaklara yeterli miktarda köpük uygulayın.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto text-white text-2xl font-bold">2</div>
                <p className="text-gray-700">1 dakika nazikçe masaj yaparak temizleyin.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto text-white text-2xl font-bold">3</div>
                <p className="text-gray-700">Bol su ile durulayın. Günde 1–2 kez kullanıma uygundur.</p>
              </div>
            </div>

            {/* Podolog Notu */}
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-red-600 mb-2">PODOLOG NOTU</p>
              <p className="text-gray-800 italic">
                "Düzenli ayak bakımında temizlik aşaması kritik öneme sahiptir. PediZone® Fresh-Guard Ayak Temizleme Köpüğü, cildi yormadan temizler ve bakım ürünleri öncesinde ideal bir zemin oluşturur."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sık Sorulan Sorular</h2>
            
            <div className="space-y-4">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Günlük kullanım için uygun mu?</h3>
                  <p className="text-gray-700">Evet. Yumuşak köpük yapısı sayesinde günlük kullanıma uygundur.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ayak kokusunu tamamen yok eder mi?</h3>
                  <p className="text-gray-700">Koku oluşumuna neden olan faktörlerin azaltılmasına yardımcı olur. Düzenli kullanımda ferahlık hissi desteklenir.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mantar tedavisi yerine geçer mi?</h3>
                  <p className="text-gray-700">PediZone® Ayak Temizleme Köpüğü, mantar oluşumuna elverişli ortamın azaltılmasına yardımcı olan, günlük temizlik ve hijyen desteği sunan bir bakım ürünüdür. PediZone Serum ve Krem ile desteklenmesi önerilir. Düzenli kullanım, ayak hijyeninin korunmasına katkı sağlar.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">PediZone Fresh Guard Foot Foam Nasıl Kokuyor?</h3>
                  <p className="text-gray-700">Misket limonunun baskın olduğu ferahlatıcı etki, çay ağacı yağı ve medikal ferah bir kokuyla devam ediyor.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teknik Bilgiler */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teknik Bilgiler</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Ürün Hacmi</p>
                  <p className="text-xl font-bold text-gray-900">200 ml</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Form</p>
                  <p className="text-xl font-bold text-gray-900">Köpük</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Kullanım Amacı</p>
                  <p className="text-lg font-bold text-gray-900">Günlük Temizlik</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-2">Profesyonel</p>
                  <p className="text-lg font-bold text-gray-900">Podolog Onaylı</p>
                </div>
              </div>
            </div>

            {/* Tıbbi Bilgilendirme */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ TIBBİ BİLGİLENDİRME</p>
              <p className="text-sm text-gray-700">
                Bu ürün ayak temizleme ve bakım amaçlıdır. Tanı ve tedavi yerine geçmez. Ayak sağlığı ile ilgili şikayetlerde sağlık profesyoneline danışılması önerilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bakım Rutini Önerisi */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Bakım Rutini Önerisi</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">1</div>
                  <p className="text-sm text-red-600 font-semibold mb-2">TEMİZLİK</p>
                  <p className="font-bold text-gray-900 text-sm">PediZone® Fresh-Guard Ayak Temizleme Köpüğü</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow hover:border-red-200">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">2</div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">BAKIM</p>
                  <p className="font-bold text-gray-900 text-sm">PediZone® Foot & Nail Care Serum</p>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/urun/ureli-krem" className="block bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow hover:border-red-200">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-gray-600 text-white flex items-center justify-center mx-auto mb-3 text-xl font-bold">3</div>
                  <p className="text-sm text-gray-600 font-semibold mb-2">ONARIM</p>
                  <p className="font-bold text-gray-900 text-sm">PediZone® %15 Urea Intense Repair Cream</p>
                </div>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sorularınız mı var?</h2>
            <p className="text-xl mb-8 text-red-100">
              Ürünlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteInfo.phoneLink}`}>
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  <Phone className="mr-2" />
                  {siteInfo.phone}
                </Button>
              </a>
              <LocalizedLink to="/iletisim">
                <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg">
                  <Mail className="mr-2" />
                  İletişim Formu
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoamProductContent;
