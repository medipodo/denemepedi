import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, Clock, User, ChevronRight, Droplets, Sparkles, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const BlogUreNedir = () => {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir? | PediZone Blog</title>
        <meta name="description" content="Üre nedir, ciltte nasıl çalışır? Dermatolojinin gizli kahramanı ürenin bilimsel temelleri ve ayak bakımındaki kritik rolü." />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?",
            "description": "Dermatolojinin gizli kahramanı ürenin bilimsel temelleri, cilt üzerindeki etkileri ve ayak bakımındaki kritik rolü.",
            "image": "https://denemepedi.netlify.app/blog-images/ure-nedir/3.jpg",
            "author": {
              "@type": "Organization",
              "name": "PediZone"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone",
              "logo": {
                "@type": "ImageObject",
                "url": "https://denemepedi.netlify.app/logo.png"
              }
            },
            "datePublished": "2025-12-24",
            "dateModified": "2025-12-24",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://denemepedi.netlify.app/blog/ure-nedir"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Üre içeren ürünler günlük kullanıma uygun mu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Evet. %15 üre içeren formüller düzenli kullanım için uygundur."
                }
              },
              {
                "@type": "Question",
                "name": "Üre ciltte ne zaman fark edilir?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Düzenli kullanımda ilk haftalardan itibaren cilt yumuşaklığında fark hissedilir."
                }
              },
              {
                "@type": "Question",
                "name": "Üre içeren ürünler kimler için özellikle uygundur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aşırı kuru ayak cildi, çatlak topuk ve kalınlaşma problemi yaşayan bireyler için idealdir."
                }
              }
            ]
          })}
        </script>

        {/* MedicalWebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalCondition",
              "name": "Kuru Cilt ve Çatlak Topuk"
            },
            "lastReviewed": "2025-12-24",
            "medicalAudience": {
              "@type": "MedicalAudience",
              "audienceType": "Patient"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-red-600">Ana Sayfa</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-red-600">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">Üre Nedir?</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                24 Aralık 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 dk okuma
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Podolog
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Cildinizin unutulmuş kahramanı: <strong>Üre</strong>. Dermatolojinin ve özellikle ayak sağlığının gizli kahramanı olan bu bileşik, kuru, çatlamış ve sorunlu ciltler için gerçek bir mucizedir.
            </p>

            {/* Kapak Görseli */}
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img 
                src="/blog-images/ure-nedir/3.jpg" 
                alt="Üre Nedir - Blog Kapak" 
                className="w-full object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Peki üre tam olarak nedir, neden bu kadar etkilidir ve ayak bakımında neden vazgeçilmez kabul edilir? Bu yazıda ürenin bilimsel temellerini, cilt üzerindeki çok yönlü etkilerini ve ayak bakımındaki kritik rolünü detaylı şekilde ele alıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Üre Nedir - Bilimsel Temel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Üre (Urea) Nedir? | Bilimsel Temel
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Üre, kimyasal formülü <strong>CO(NH₂)₂</strong> olan doğal bir organik bileşiktir. Vücudumuzda protein metabolizması sonucu oluşur ve ciltte doğal nem dengesinin korunmasında önemli bir rol oynar.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg font-semibold text-blue-800 mb-2">💡 Önemli Bilgi:</p>
              <p className="text-blue-900">Üre, cildin doğal nemlendirme sisteminin temel yapı taşlarından biridir.</p>
            </div>

            {/* Görsel 2 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/blog-images/ure-nedir/2.jpg" 
                alt="Üre Molekülü ve Cilt Yapısı" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NMF ve Üre */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Doğal Nemlendirme Faktörü (NMF) ve Üre
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cildin en üst tabakası olan <strong>stratum corneum</strong> içinde, cildi nemli ve esnek tutan bileşikler bulunur. Bu yapıya <strong>Doğal Nemlendirme Faktörü (NMF)</strong> denir.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg font-semibold text-purple-800 mb-2">🔬 Bilimsel Gerçek:</p>
              <p className="text-purple-900 text-xl font-bold">Üre, NMF'nin yaklaşık %7'sini oluşturur.</p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Yaşlanma, çevresel faktörler, sık yıkama ve yanlış ürün kullanımı ciltteki doğal üre seviyesini azaltır.
            </p>

            <div className="bg-red-50 rounded-2xl p-6 mb-8">
              <p className="font-semibold text-gray-900 mb-3">Sonuç:</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                  Kuruluk
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                  Pul pul dökülme
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-5 h-5 text-red-600" />
                  Çatlak oluşumu
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Topikal (haricen) üre uygulamaları, bu eksikliği telafi ederek cildin nem dengesini yeniden destekler.
            </p>

            {/* Görsel 3 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img 
                src="/blog-images/ure-nedir/3.jpg" 
                alt="Cilt Nem Dengesi" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 Temel Etki */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Ürenin Cilt Üzerindeki 3 Temel Etkisi
            </h2>

            {/* Etki 1 */}
            <Card className="border-blue-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1️⃣ Güçlü Nem Tutucu (Hidratant) Etki</h3>
                    <p className="text-gray-700 mb-4">
                      Üre <strong>higroskopiktir</strong>; yani suyu kendine çekme ve tutma özelliğine sahiptir.
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Ciltte su moleküllerini bağlar
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Nem kaybını azaltır
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Cilt bariyerini destekler
                      </p>
                    </div>
                    <p className="text-red-600 font-semibold mt-4">
                      Bu etki, özellikle aşırı kuru ayak cildi için kritiktir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Görsel 4 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img 
                src="/blog-images/ure-nedir/4.jpg" 
                alt="Üre Nemlendirici Etki" 
                className="w-full object-cover"
              />
            </div>

            {/* Etki 2 */}
            <Card className="border-orange-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2️⃣ Keratolitik (Yumuşatıcı & Yenileyici) Etki</h3>
                    <p className="text-gray-700 mb-4">
                      <strong>%10 ve üzeri</strong> konsantrasyonlarda üre, keratolitik etki gösterir.
                    </p>
                    
                    <div className="bg-orange-50 p-4 rounded-xl mb-4">
                      <p className="font-semibold text-orange-800 mb-2">🔬 Nasıl çalışır?</p>
                      <p className="text-gray-700">
                        Üre, keratin bağlarını yumuşatarak kalınlaşmış ve sertleşmiş deri tabakasının kontrollü şekilde incelmesine yardımcı olur.
                      </p>
                    </div>

                    <p className="font-semibold text-gray-900 mb-3">Özellikle etkili olduğu durumlar:</p>
                    <div className="grid md:grid-cols-2 gap-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        Çatlak topuklar (hiperkeratoz)
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        Nasır ve kalluslar
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        Pul pul dökülen ayak derisi
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        Aşırı kuru cilt (kserozis)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Görsel 5 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img 
                src="/blog-images/ure-nedir/5.jpg" 
                alt="Keratolitik Etki" 
                className="w-full object-cover"
              />
            </div>

            {/* Etki 3 */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3️⃣ Cilt Bariyerini Destekleyici Etki</h3>
                    <p className="text-gray-700 mb-4">
                      Üre sadece "soyan" değil; aynı zamanda <strong>onarımı destekleyen</strong> bir bileşendir.
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Yeni cilt hücrelerinin nemli kalmasına yardımcı olur
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Cildin elastikiyetini destekler
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Tekrar çatlama riskini azaltmaya katkı sağlar
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ayak Bakımında Üre */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Bakımında Ürenin Neden Özel Bir Yeri Var?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ayaklar:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-gray-700">Sürekli <strong>basınç</strong> altında</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-gray-700"><strong>Kapalı ayakkabılarda</strong></p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <p className="text-gray-700"><strong>Nem ve sürtünmeye</strong> maruz</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Bu nedenle ayak cildi, vücudun diğer bölgelerine göre daha hızlı kalınlaşır ve çatlar.
            </p>

            {/* Görsel 6 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/blog-images/ure-nedir/6.jpg" 
                alt="Ayak Bakımında Üre" 
                className="w-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  🦶 Topuk Çatlakları
                </h3>
                <p className="text-gray-700">
                  Üre, kalınlaşmış topuk derisini yumuşatırken aynı anda nem dengesini destekler.
                </p>
                <Link to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold mt-3 inline-block">
                  Medikal ayak bakımının bilimsel temeli →
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  🔵 Nasırlar & Sertleşmiş Alanlar
                </h3>
                <p className="text-gray-700">
                  Basınç altında oluşan sert tabakaların zamanla incelmesine yardımcı olur.
                </p>
                <Link to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold mt-3 inline-block">
                  Profesyonel ayak bakımında ürenin yeri →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neden %15 Üre */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Neden %15 Üre Konsantrasyonu?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>%15 üre oranı</strong>, ayak bakımı için ideal denge noktası kabul edilir:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">Güçlü nemlendirme</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">Etkili keratolitik destek</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">Günlük kullanıma uygun</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800">Cildi tahriş etmeden bakım sağlar</span>
              </div>
            </div>

            {/* Görsel 7 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/blog-images/ure-nedir/7.jpg" 
                alt="%15 Üre Konsantrasyonu" 
                className="w-full object-cover"
              />
            </div>

            {/* Ürün Tanıtımı */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi
              </h3>
              
              <p className="text-lg text-gray-700 mb-6">
                PediZone® %15 Üreli Krem, profesyonel ayak bakım uygulamalarında ve evde düzenli bakımda kullanılmak üzere geliştirilmiştir.
              </p>

              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-600">🔹</span>
                  Sertleşmiş cilt tabakasının yumuşatılmasına
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-600">🔹</span>
                  Çatlak yüzeylerin toparlanmasına
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <span className="text-red-600">🔹</span>
                  Cilt bariyerinin güçlendirilmesine
                </p>
                <p className="text-gray-700 font-semibold">destek olur.</p>
              </div>

              <Link to="/urun/ureli-krem">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4">
                  %15 Üre İçeren Profesyonel Ayak Kremi →
                </Button>
              </Link>
            </div>

            {/* Görsel 8 - Ürün */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img 
                src="/blog-images/ure-nedir/pedizone-ureli-krem.jpg" 
                alt="PediZone %15 Üreli Krem" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Kullanım İpuçları */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Kullanım İpuçları
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">1</div>
                <p className="text-gray-700 pt-2">Akşamları temiz ve kuru ayaklara uygulanması önerilir</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">2</div>
                <p className="text-gray-700 pt-2">Çatlak ve kalınlaşmış bölgelere yoğunlaştırılabilir</p>
              </div>
              <div className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 text-red-600 font-bold">3</div>
                <p className="text-gray-700 pt-2">Düzenli kullanımda cilt konforu belirgin şekilde artar</p>
              </div>
            </div>

            {/* Görsel 9 */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/blog-images/ure-nedir/8.jpg" 
                alt="Üre Kullanım İpuçları" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              Sık Sorulan Sorular
            </h2>

            <div className="space-y-4">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Üre içeren ürünler günlük kullanıma uygun mu?</h3>
                  <p className="text-gray-700">Evet. %15 üre içeren formüller düzenli kullanım için uygundur.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ne zaman fark edilir?</h3>
                  <p className="text-gray-700">Düzenli kullanımda ilk haftalardan itibaren cilt yumuşaklığında fark hissedilir.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kimler için özellikle uygundur?</h3>
                  <p className="text-gray-700">Aşırı kuru ayak cildi, çatlak topuk ve kalınlaşma problemi yaşayan bireyler için idealdir.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sonuç */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sonuç
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Üre, dermatolojide etkinliği bilimsel olarak kanıtlanmış, ayak bakımının temel bileşenlerinden biridir. Doğru konsantrasyonda ve düzenli kullanımda, ayak cildinin sağlıklı görünümünü ve konforunu destekler.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-gray-800">
                👉 <Link to="/urun/ureli-krem" className="text-red-600 hover:text-red-700 font-bold">PediZone® %15 Üreli Krem</Link>, ayak bakım rutininize bilimsel temelli güçlü bir destek sunar.
              </p>
            </div>

            {/* Görsel 10 */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/blog-images/ure-nedir/9.jpg" 
                alt="Sonuç - Sağlıklı Ayaklar" 
                className="w-full object-cover"
              />
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-lg font-semibold text-blue-800 mb-2">💡 Uzman Tavsiyesi:</p>
              <p className="text-blue-900">
                İleri düzey ayak problemlerinde profesyonel değerlendirme için <strong>podoloji kliniğine</strong> başvurmanız önerilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* İç Linkler - SEO Stratejik */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ayak Sağlığı Hakkında Daha Fazla Bilgi
            </h3>
            
            {/* Ana İçerik (Pillar) */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Ana Rehber</p>
              <Link to="/blog/medikal-ayak-bakimi-nedir" className="block bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 border-2 border-red-200 rounded-xl p-6 transition-colors">
                <p className="font-bold text-gray-900 text-lg mb-2">Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir?</p>
                <p className="text-gray-600">Profesyonel ayak bakımının bilimsel temeli, kullanılan aktif bileşenler ve tedavi süreçleri hakkında kapsamlı rehber.</p>
              </Link>
            </div>

            {/* Destek Bloglar */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">İlgili Konular</p>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/ayak-hijyeni-ipuclari" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Hijyeni İpuçları</p>
                  <p className="text-sm text-gray-600">Günlük bakım önerileri ve hijyen rutini</p>
                </Link>
                <Link to="/blog/ayak-mantari-nedir" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Belirtileri</p>
                  <p className="text-sm text-gray-600">Mantar enfeksiyonu ve korunma yöntemleri</p>
                </Link>
              </div>
            </div>

            {/* Ürün Sayfaları */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Önerilen Ürünler</p>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/urun/ureli-krem" className="block bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-red-700 mb-1">%15 Üreli Krem</p>
                  <p className="text-xs text-red-600">Çatlak topuk bakımı</p>
                </Link>
                <Link to="/urun/foot-nail-care-serum" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">Ayak & Tırnak Serumu</p>
                  <p className="text-xs text-gray-600">Antifungal destek</p>
                </Link>
                <Link to="/urun/temizleme-kopugu" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">Temizleme Köpüğü</p>
                  <p className="text-xs text-gray-600">Günlük hijyen</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogUreNedir;
