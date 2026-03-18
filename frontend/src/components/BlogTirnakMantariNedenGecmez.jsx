import React from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, ChevronRight, CheckCircle, AlertTriangle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const BlogTirnakMantariNedenGecmez = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "Tırnak mantarı tamamen geçer mi?",
      answer: "Evet, ancak doğru bakım ve sabır gerektirir. Süreç genellikle aylar sürer."
    },
    {
      question: "Tırnak mantarı neden tekrarlar?",
      answer: "Genellikle hijyen eksikliği, nemli ortam ve düzensiz bakım nedeniyle tekrar eder."
    },
    {
      question: "Evde tedavi yeterli olur mu?",
      answer: "Erken evrede bazı durumlarda yeterli olabilir. Ancak ilerlemiş vakalarda tek başına yeterli olmayabilir."
    },
    {
      question: "Tırnak mantarı kendiliğinden geçer mi?",
      answer: "Hayır. Müdahale edilmediğinde genellikle ilerler."
    },
    {
      question: "Tırnak mantarında en etkili yöntem nedir?",
      answer: "Düzenli bakım + doğru ürün + hijyen kombinasyonu en etkili yaklaşımdır."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Tırnak Mantarı Neden Geçmez? (7 Kritik Sebep) | PediZone Blog</title>
        <meta name="description" content="Tırnak mantarı neden aylarca geçmez? En sık yapılan hataları ve doğru bakım yöntemlerini öğrenin." />
        <link rel="canonical" href="https://pedizone.com/blog/tirnak-mantari-neden-gecmez" />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Tırnak Mantarı Neden Geçmez? En Sık Yapılan 7 Kritik Hata",
            "description": "Tırnak mantarı neden aylarca geçmez? En sık yapılan hataları ve doğru bakım yöntemlerini öğrenin.",
            "image": "https://pedizone.com/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-gecmez.webp",
            "author": {
              "@type": "Person",
              "name": "Podolog Serdar Ceylan"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pedizone.com/logo.png"
              }
            },
            "datePublished": "2026-03-18",
            "dateModified": "2026-03-18",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pedizone.com/blog/tirnak-mantari-neden-gecmez"
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
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
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <LocalizedLink to="/" className="hover:text-red-600">Ana Sayfa</LocalizedLink>
              <ChevronRight className="w-4 h-4" />
              <LocalizedLink to="/blog" className="hover:text-red-600">Blog</LocalizedLink>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Tırnak Mantarı Neden Geçmez?</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Hero */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                18 Mart 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 dk okuma
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                Podolog Serdar Ceylan
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tırnak Mantarı Neden Geçmez? En Sık Yapılan 7 Kritik Hata
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Tırnak mantarı yaşayan birçok kişi aynı soruyu sorar: <strong>"Aylar geçti ama neden hâlâ geçmedi?"</strong> Aslında sorun çoğu zaman mantarın kendisi değil, yanlış yaklaşımdır.
            </p>

            {/* Kapak Görseli */}
            <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
              <img 
                src="/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-gecmez.webp" 
                alt="Tırnak Mantarı Neden Geçmez?" 
                className="w-full object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Tırnak mantarı çoğu zaman tek başına ortaya çıkmaz. Özellikle ayak mantarı ile birlikte görülebilir. Eğer bu farkı bilmiyorsan <LocalizedLink to="/blog/ayak-mantari-mi-egzama-mi" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı mı egzama mı</LocalizedLink> yazısına da göz atabilirsin.
            </p>
          </div>
        </div>
      </section>

      {/* Neden Uzun Sürer */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tırnak Mantarı Neden Uzun Sürer?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tırnak, deriye göre çok daha yavaş yenilenen bir yapıdır. Bir tırnağın tamamen sağlıklı şekilde uzaması:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-red-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-red-600">9–12 ay</p>
                <p className="text-gray-700">Ayak tırnağı</p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-blue-600">4–6 ay</p>
                <p className="text-gray-700">El tırnağı</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-yellow-800">
                👉 Yani çoğu kişi "geçmedi" sanır ama aslında süreç devam ediyordur. Mantar ortadan kalksa bile, sağlıklı tırnağın tamamen çıkması zaman alır.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Mantarın tekrar etmesinin en büyük nedenlerinden biri, sorunun tamamen çözülmeden bırakılmasıdır. Bu durumu daha detaylı anlamak için <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı neden tekrarlar</LocalizedLink> yazısını inceleyebilirsin.
            </p>

            {/* İkinci Görsel */}
            <div className="rounded-2xl overflow-hidden shadow-lg mt-8">
              <img 
                src="/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-olur.webp" 
                alt="Tırnak Mantarı Neden Olur?" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7 Kritik Hata */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
              En Sık Yapılan 7 Kritik Hata
            </h2>

            {/* Hata 1 */}
            <Card className="border-red-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sadece Yüzeyi Tedavi Etmek</h3>
                    <p className="text-gray-700 mb-4">
                      En yaygın hata budur. Kremler veya ürünler sadece tırnağın üstüne uygulanır ama mantar çoğu zaman:
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Tırnağın altındadır
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Kalınlaşmış tabakanın içinde yaşar
                      </p>
                    </div>
                    <p className="text-gray-700">
                      Bu noktada tırnak altına ulaşabilen ve düzenli kullanımda destek sağlayan ürünler tercih edilmelidir. Özellikle <LocalizedLink to="/urun/foot-nail-care-serum" className="text-red-600 hover:text-red-700 font-semibold">tırnak bakım serumu</LocalizedLink> bu süreçte destekleyici olabilir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 2 */}
            <Card className="border-orange-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Düzenli Uygulama Yapmamak</h3>
                    <p className="text-gray-700 mb-4">
                      Tırnak mantarında en kritik şey: <strong>istikrar</strong>
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                        3 gün kullanıp bırakmak
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                        Arada unutmak
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                        "Geçti gibi" deyip kesmek…
                      </p>
                    </div>
                    <p className="text-red-600 font-semibold mt-4">
                      Bunların hepsi süreci başa sarar.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 3 */}
            <Card className="border-yellow-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Tırnağı İnceltmeden Ürün Kullanmak</h3>
                    <p className="text-gray-700 mb-4">
                      Kalınlaşmış tırnak, ürünün içeri girmesini engeller. Bu yüzden:
                    </p>
                    <div className="space-y-2 mb-4">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Profesyonel inceltme
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Düzenli törpüleme
                      </p>
                    </div>
                    <p className="text-gray-700">
                      olmadan yapılan bakım çoğu zaman yetersiz kalır. Bu süreç hakkında <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold">medikal ayak bakımı nedir</LocalizedLink> içeriğine göz atabilirsin.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 4 */}
            <Card className="border-green-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ayakkabı ve Çorap Faktörünü Göz Ardı Etmek</h3>
                    <p className="text-gray-700 mb-4">
                      Mantar sadece tırnakta yaşamaz. Mantarın tekrar oluşması için ideal ortam:
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">Nemli ayakkabı</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">Terleyen çorap</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">Havasız ortam</p>
                      </div>
                    </div>
                    <p className="text-red-600 font-semibold mt-4">
                      👉 Tedavi yapılırken bu faktörler düzeltilmezse mantar sürekli geri gelir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 5 */}
            <Card className="border-blue-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hijyen Hataları</h3>
                    <p className="text-gray-700 mb-4">
                      Bunlar küçük gibi görünür ama süreci sabote eder:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500" />
                        Aynı havluyu kullanmak
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500" />
                        Tırnak makasını paylaşmak
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500" />
                        Ayağı nemli bırakmak
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 6 */}
            <Card className="border-purple-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Erken Vazgeçmek</h3>
                    <p className="text-gray-700 mb-4">
                      Tırnak mantarı: <strong>sabır isteyen bir süreçtir</strong>
                    </p>
                    <p className="text-gray-700">
                      Çoğu kişi 2–3 hafta içinde sonuç bekler. Oysa gerçek iyileşme <strong>aylar içinde</strong> görülür.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hata 7 */}
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-xl">7</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Yanlış Ürün Seçimi</h3>
                    <p className="text-gray-700 mb-4">
                      Her ürün aynı etkiyi göstermez. Özellikle tercih edilmesi gereken ürünler:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Tırnak altına ulaşabilen
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        Düzenli kullanımda destekleyici olan
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Bakım Rutini */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Etkili Bir Tırnak Mantarı Bakım Rutini Nasıl Olmalı?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Doğru yaklaşım basittir ama disiplin ister:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <p className="text-gray-700 pt-2"><strong>Tırnağı düzenli incelt</strong> - Kalınlaşmış tırnak ürün emilimini engeller</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <p className="text-gray-700 pt-2"><strong>Temiz ve kuru tut</strong> - Mantar nemli ortamı sever</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <p className="text-gray-700 pt-2"><strong>Uygun ürünleri istikrarlı kullan</strong> - Düzensiz kullanım başarısızlık getirir</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <p className="text-gray-700 pt-2"><strong>Ayakkabı hijyenine dikkat et</strong> - Mantar burada da yaşar</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-gray-800 font-semibold">
                👉 Bu 4 adım birlikte uygulanmadıkça sonuç almak zorlaşır.
              </p>
            </div>

            {/* Ürün Tanıtımı */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Önerilen Bakım Ürünleri
              </h3>
              
              <p className="text-lg text-gray-700 mb-6">
                Tırnak mantarı uzun süredir geçmiyorsa, süreci doğru ürün ve bakım ile desteklemek gerekir:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">Tırnak Bakım Serumu</p>
                  <p className="text-sm text-gray-600">Tırnak altına ulaşabilen formül</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/ureli-krem" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">%15 Üreli Krem</p>
                  <p className="text-sm text-gray-600">Kalınlaşmış deriyi yumuşatır</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profesyonel Destek */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ne Zaman Profesyonel Destek Gerekir?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Şu durumlarda destek almak gerekir:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <p className="text-gray-700">Tırnak çok <strong>kalınlaştıysa</strong></p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <p className="text-gray-700">Sararma ve <strong>ayrılma</strong> arttıysa</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <p className="text-gray-700">Evde bakım <strong>sonuç vermediyse</strong></p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Bu noktada <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold">medikal ayak bakımı</LocalizedLink> süreci hızlandırır.
            </p>
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
              {faqs.map((faq, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Tırnak Bakımına Bugün Başla
            </h2>
            <p className="text-lg text-red-100 mb-8">
              Doğru ürünlerle desteklenen düzenli bakım, en etkili yaklaşımdır.
            </p>
            <LocalizedLink to="/urun/foot-nail-care-serum">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Tırnak Bakım Serumunu İncele →
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </section>

      {/* İç Linkler */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Ayak Sağlığı Hakkında Daha Fazla Bilgi
            </h3>
            
            {/* Ana İçerik */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Ana Rehber</p>
              <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="block bg-gradient-to-r from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100 border-2 border-red-200 rounded-xl p-6 transition-colors">
                <p className="font-bold text-gray-900 text-lg mb-2">Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir?</p>
                <p className="text-gray-600">Profesyonel ayak bakımının bilimsel temeli ve tedavi süreçleri hakkında kapsamlı rehber.</p>
              </LocalizedLink>
            </div>

            {/* İlgili Konular */}
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">İlgili Konular</p>
              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Neden Tekrarlar?</p>
                  <p className="text-sm text-gray-600">Geçmeyen mantar için bilmeniz gerekenler</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/tirnak-mantari-cesitleri" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Tırnak Mantarı Türleri</p>
                  <p className="text-sm text-gray-600">Onikomikoz ve tedavi yaklaşımları</p>
                </LocalizedLink>
              </div>
            </div>

            {/* Ürünler */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Önerilen Ürünler</p>
              <div className="grid md:grid-cols-3 gap-4">
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-red-700 mb-1">Tırnak Bakım Serumu</p>
                  <p className="text-xs text-red-600">Antifungal destek</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/ureli-krem" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">%15 Üreli Krem</p>
                  <p className="text-xs text-gray-600">Çatlak topuk bakımı</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">Temizleme Köpüğü</p>
                  <p className="text-xs text-gray-600">Günlük hijyen</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogTirnakMantariNedenGecmez;
