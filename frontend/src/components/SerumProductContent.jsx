import React, { useState, useRef } from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, ShieldCheck, Droplets, Sparkles, Award, Phone, Mail, MapPin, BookOpen, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { siteInfo } from '../mock';

const SerumProductContent = ({ product, productImages }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // FAQ Data
  const faqData = [
    {
      question: "Serum mu krem mi kullanmalıyım?",
      answer: "Mantar eğilimi ve tırnak problemlerinde serum daha etkilidir, ince moleküler yapısı sayesinde zor yüzeylere ulaşabilir."
    },
    {
      question: "Günlük kullanıma uygun mu?",
      answer: "Evet. İnce yapısı sayesinde uzun süreli ve düzenli kullanıma uygundur."
    },
    {
      question: "Koku probleminde etkili olur mu?",
      answer: "Mikrobiyal dengenin desteklenmesi sayesinde kötü koku oluşumunun azalmasına yardımcı olur."
    },
    {
      question: "Onikoliz (tırnak yatağından ayrılma) durumunda serum kullanılabilir mi?",
      answer: "Onikoliz durumunda, tırnak altındaki nem dengesinin sağlanması ve bakımın desteklenmesi önemlidir. PediZone® Foot and Nail Care Serum, ince moleküler yapısı sayesinde onikoliz alanlarına ulaşarak bakım rutininin desteklenmesine yardımcı olur."
    },
    {
      question: "Tırnak altı boşluklara ulaşabilir mi?",
      answer: "Evet. Serum formu, krem ürünlere kıyasla tırnak altı boşluklara daha kolay nüfuz edebilir ve bu alanlarda bakım desteği sağlar."
    },
    {
      question: "Sarı, kalınlaşmış ve mat tırnaklarda kullanılabilir mi?",
      answer: "Düzenli kullanımda, tırnak yüzeyindeki matlaşma ve kalınlaşmanın azalmasına yardımcı olur. Sağlıklı yeni tırnak uzamasını destekler."
    }
  ];

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
        // Swipe left - next image
        setSelectedImage(prev => prev + 1);
      } else if (diff < 0 && selectedImage > 0) {
        // Swipe right - previous image
        setSelectedImage(prev => prev - 1);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>PediZone® Foot and Nail Care Serum | Antifungal Ayak ve Tırnak Bakım Serumu</title>
        <meta name="description" content="Mantar eğilimi, koku problemi ve tırnak bakımı için profesyonel serum. İnce moleküler yapı, hızlı emilim. 50ml." />
        <link rel="canonical" href="https://pedizone.com/urun/foot-nail-care-serum" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="PediZone® Foot and Nail Care Serum - Profesyonel Tırnak Bakım Serumu" />
        <meta property="og:description" content="Tırnak mantarı, ayak kokusu ve tırnak problemleri için özel formüllenmiş profesyonel serum. İnce moleküler yapı, tırnak altına nüfuz eder." />
        <meta property="og:url" content="https://pedizone.com/urun/foot-nail-care-serum" />
        <meta property="og:image" content="https://pedizone.com/images/products/serum/pedizone-serum988.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
            <span className="text-gray-900 font-medium">Serum</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Gallery */}
            <div className="space-y-4">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-white cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <picture>
                  <source media="(max-width: 640px)" srcSet={`${productImages[selectedImage]}?w=640&q=75`} />
                  <source media="(max-width: 1024px)" srcSet={`${productImages[selectedImage]}?w=1024&q=80`} />
                  <img src={productImages[selectedImage]} alt="PediZone Serum" className="w-full aspect-square object-cover select-none" loading="eager" fetchpriority="high" draggable="false" />
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
                  <p className="text-xs font-medium text-gray-700">Antifungal Destek</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Droplets className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Hızlı Emilim</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">İnce Molekül</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  PediZone® Foot and Nail Care Serum
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  Ayak ve Tırnak Bakımı İçin Yoğun Destek
                </p>
                <p className="text-lg text-gray-500">
                  İnce Moleküler Yapılı Profesyonel Serum | 50 ml
                </p>
              </div>

              <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(89 değerlendirme)</span>
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
                    <span className="text-gray-700">İnce moleküler yapılı <strong>hızlı emilen serum</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Mantar oluşumuna elverişli ortamın azaltılmasına</strong> yardımcı formül</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Kötü <strong>koku oluşumunu baskılamaya</strong> destek</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Günlük ve <strong>uzun süreli kullanıma</strong> uygun</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Podoloji uygulamaları</strong> ve ev bakımı için geliştirilmiştir</span>
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
                PediZone® Foot and Nail Care Serum; ayak ve tırnaklarda <strong>mantar eğilimi, koku problemi, matlaşma, kalınlaşma ve nem dengesinin bozulması</strong> gibi yaygın sorunlara karşı bakım amacıyla geliştirilmiş yoğun etkili profesyonel bir serumdur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                İnce moleküler yapısı sayesinde <strong>tırnak plağına, tırnak altına ve deri kıvrımlarına</strong> krem formüllere kıyasla çok daha derin nüfuz eder. Krem formüllerin ulaşmakta zorlandığı <strong>tırnak altı boşlukları ve onikoliz alanları</strong> hedef alınarak geliştirilmiştir. Bu özelliği ile mantar oluşumuna elverişli nemli ortamın azaltılmasına, cilt ve tırnak yüzeyinin dengelenmesine yardımcı olur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Düzenli kullanımda ayak ve tırnakların <strong>daha sağlıklı, bakımlı ve ferah bir görünüme</strong> kavuşmasını destekler.
              </p>
            </div>

            {/* Öncesi / Sonrası - Podolojik süreç destekli serum kullanımı */}
            <div className="mt-10">
              <figure className="max-w-2xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                  <img
                    src="/product-images/serum/oncesi-sonrasi-tirnak-mantari-serum.webp"
                    alt="PediZone Foot Nail Care Serum kullanımı öncesi ve sonrası tırnak görünümü — podolojik bakım süreciyle desteklenmiş sonuç"
                    className="w-full h-auto block"
                    loading="lazy"
                    width="1200"
                    height="1200"
                  />
                </div>
                <figcaption className="mt-5 text-center">
                  <span className="inline-block bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
                    Öncesi / Sonrası
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Podolojik Süreçleri Destekleyen Serum Kullanımı
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
                    PediZone® Foot &amp; Nail Care Serum, profesyonel podolojik bakımın bir tamamlayıcısı olarak düzenli kullanıldığında; tırnak plağındaki bozulmanın azalmasına, sağlıklı tırnak uzamasına ve ayak-tırnak çevresinin bakımlı bir görünüme kavuşmasına katkı sağlar. Görselde yer alan bakım süreci temsili olup sonuçlar kişiye, tırnak yapısına ve kullanım düzenine göre farklılık gösterebilir.
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Serum vs Krem Karşılaştırması */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Neden Serum?</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-50 to-orange-50">
                      <th className="px-6 py-4 text-left font-bold text-gray-900">Özellik</th>
                      <th className="px-6 py-4 text-center font-bold text-red-600">Serum</th>
                      <th className="px-6 py-4 text-center font-bold text-gray-600">Krem</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Moleküler yapı</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">İnce</td>
                      <td className="px-6 py-4 text-center text-gray-600">Kalın</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Emilim</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Çok hızlı</td>
                      <td className="px-6 py-4 text-center text-gray-600">Daha yavaş</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Tırnak altına nüfuz</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✔ Evet</td>
                      <td className="px-6 py-4 text-center text-gray-600">Sınırlı</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Mantar eğilimli bölgeler</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Daha etkili</td>
                      <td className="px-6 py-4 text-center text-gray-600">Destekleyici</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Günlük kullanım</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✔</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">✔</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium text-gray-900">Yoğun nemlendirme</td>
                      <td className="px-6 py-4 text-center text-gray-600">Orta</td>
                      <td className="px-6 py-4 text-center text-green-600 font-semibold">Yüksek</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-6 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="text-gray-800 mb-2"><strong>Sonuç:</strong></p>
              <p className="text-gray-700 mb-2">👉 Mantar eğilimi, tırnak problemleri ve koku için <strong>serum ana üründür</strong>.</p>
              <p className="text-gray-700">👉 Kremler <strong>tamamlayıcıdır</strong>.</p>
              <p className="text-sm text-gray-600 mt-4 italic">Bu nedenle PediZone® ürün gamında esas ve öncelikli ürün Foot and Nail Care Serum'dur.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Etki Mekanizması */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Etki Mekanizması</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🌿</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Tea Tree Oil (Çay Ağacı Yağı)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Antifungal ve antibakteriyel destek sağlar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Mantar gelişimine elverişli ortamın baskılanmasına yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Koku oluşumuna neden olan mikroorganizmalara karşı destek sunar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💧</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Salicylic Acid (Salisilik Asit)</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Ölü deri ve kalınlaşmış dokunun kontrollü şekilde uzaklaştırılmasını destekler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Aktif bileşenlerin daha derine nüfuz etmesine yardımcı olur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💦</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Urea</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Nem dengesini düzenler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Sertleşmiş dokunun yumuşamasına katkı sağlar</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">🛡️</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Vitamin E</h3>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Antioksidan koruma</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cilt bariyerinin desteklenmesine yardımcı olur</span>
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
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Kullanım Alanları</h2>
            
            {/* Ürün Görseli 1 */}
            <div className="mb-12">
              <img 
                src="/images/products/serum/serum-product.jpg" 
                alt="PediZone Serum Ürün Görseli" 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Tırnak mantarı eğilimli tırnaklar</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Ayak mantarına yatkın cilt yapısı</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Sürekli ayak kokusu problemi</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Tırnak matlaşması ve kalınlaşması</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Podoloji işlemleri sonrası bakım</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Günlük koruyucu ayak & tırnak bakımı</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım Şekli + Görsel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Ürün Görseli 2 */}
            <div className="mb-12">
              <img 
                src="/images/products/serum/pedizone-before-after5.jpg" 
                alt="PediZone Serum Detay" 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg"
              />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Kullanım Şekli</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="border-red-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ev Kullanımı</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Temiz ve tamamen kuru ayaklara</li>
                    <li>• Günde 2 kez (sabah–akşam)</li>
                    <li>• Tırnak, tırnak kenarı ve tırnak altına birkaç damla</li>
                    <li>• Hafif masajla emdirilir</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Profesyonel Kullanım</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Medikal ayak bakımı sonrası</li>
                    <li>• Serum uygulaması + gerekirse krem ile destek</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Düzenli kullanımda bakım etkisi 2–4 hafta içinde belirginleşir.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Öncesi-Sonrası Görselleri */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/products/serum/serum-main-new.jpg?w=640&q=75" />
                  <source media="(max-width: 1024px)" srcSet="/images/products/serum/serum-main-new.jpg?w=1024&q=80" />
                  <img 
                    src="/images/products/serum/serum-main-new.jpg" 
                    alt="Onikoliz öncesi ve sonrası sağlıklı tırnak uzaması" 
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <p className="text-center text-sm text-gray-600 mt-2 px-2">Onikoliz - hasarlı tırnağın, tekrar sağlıklı uzaması</p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <picture>
                  <source media="(max-width: 640px)" srcSet="/images/products/serum/pedizone-serum97.jpg?w=640&q=75" />
                  <source media="(max-width: 1024px)" srcSet="/images/products/serum/pedizone-serum97.jpg?w=1024&q=80" />
                  <img 
                    src="/images/products/serum/pedizone-serum97.jpg" 
                    alt="Psödomikoz öncesi ve sonrası düzenli kullanım sonuçları" 
                    className="w-full object-cover"
                    loading="lazy"
                  />
                </picture>
                <p className="text-center text-sm text-gray-600 mt-2 px-2">Psödomikoz - Düzenli kullanım öncesi ve sonrası</p>
              </div>
            </div>

            {/* Uzman Notu */}
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-red-600 mb-2">UZMAN NOTU</p>
              <p className="text-gray-800 italic">
                "İnce moleküler yapısı sayesinde tırnak altına nüfuz edebilen bu serum, mantar eğilimli ayak ve tırnaklarda bakım rutininin temel ürünüdür. Kremden önce tercih edilmelidir."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sık Sorulan Sorular</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    aria-expanded={openFAQ === index}
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-6 h-6 text-red-600 flex-shrink-0 transition-transform duration-300 ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Görsel Bilgilendirme */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Görseller, ürünün düzenli kullanımına bağlı olarak bazı kullanıcı deneyimlerini temsil etmektedir. 
                Sonuçlar kişiden kişiye değişebilir. 
                Görseller tedavi vaadi içermez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Linkleri */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">İlgili Bilgilendirici İçerikler</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <LocalizedLink to="/blog/ayak-mantari-nedir" className="block p-5 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Nedir, Neden Olur?</p>
                    <p className="text-sm text-gray-600">Ayak ve tırnaklarda mantar oluşumuna elverişli ortamlar</p>
                  </div>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/blog/ayak-kokusu-nedenleri" className="block p-5 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ayak Kokusu ve Mantar İlişkisi</p>
                    <p className="text-sm text-gray-600">Koku ve mantar ilişkisinin doğru yönetimi</p>
                  </div>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/blog/tirnak-mantari-turleri" className="block p-5 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Tırnak Neden Kalınlaşır?</p>
                    <p className="text-sm text-gray-600">Tırnak yüzeyinde kalınlaşma ve mantar bağlantısı</p>
                  </div>
                </div>
              </LocalizedLink>

              <LocalizedLink to="/blog/ayak-hijyeni-ipuclari" className="block p-5 bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <BookOpen className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">Ayak Hijyeni İpuçları</p>
                    <p className="text-sm text-gray-600">Evde mantar eğilimli ayak bakımı nasıl yapılmalı?</p>
                  </div>
                </div>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Tıbbi Bilgilendirme */}
      <section className="py-8 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-yellow-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ TIBBİ BİLGİLENDİRME</p>
              <p className="text-sm text-gray-700">
                Bu ürün ayak bakım ürünüdür. Tanı ve tedavi yerine geçmez. Ayak ve tırnak sağlığı ile ilgili ileri durumlarda sağlık profesyoneline danışılması önerilir.
              </p>
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

export default SerumProductContent;
