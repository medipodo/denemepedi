import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';
import LocalizedLink from './LocalizedLink';
import { Card, CardContent } from './ui/card';

const BlogTirnakMantariNedenGecmez = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Tırnak mantarı tamamen geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Evet, ancak doğru bakım ve sabır gerektirir. Süreç genellikle aylar sürer."
        }
      },
      {
        "@type": "Question",
        "name": "Tırnak mantarı neden tekrarlar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hijyen eksikliği, nemli ortam ve düzensiz bakım mantarın tekrar etmesine neden olabilir."
        }
      },
      {
        "@type": "Question",
        "name": "Evde tedavi yeterli olur mu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Erken evrede bazı durumlarda yeterli olabilir, ancak ilerlemiş vakalarda profesyonel destek gerekebilir."
        }
      },
      {
        "@type": "Question",
        "name": "Tırnak mantarı kendiliğinden geçer mi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hayır, genellikle müdahale edilmezse ilerler."
        }
      }
    ]
  };

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
        <title>Tırnak Mantarı Neden Geçmez? (7 Kritik Sebep) | PediZone</title>
        <meta name="description" content="Tırnak mantarı neden aylarca geçmez? En sık yapılan hataları ve doğru bakım yöntemlerini öğrenin." />
        <link rel="canonical" href="https://pedizone.com/blog/tirnak-mantari-neden-gecmez" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <LocalizedLink to="/" className="hover:text-red-600">Ana Sayfa</LocalizedLink>
            <span>/</span>
            <LocalizedLink to="/blog" className="hover:text-red-600">Blog</LocalizedLink>
            <span>/</span>
            <span className="text-gray-900 font-medium">Tırnak Mantarı Neden Geçmez?</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LocalizedLink to="/blog" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6 font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Blog'a Dön
            </LocalizedLink>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tırnak Mantarı Neden Geçmez? En Sık Yapılan 7 Kritik Hata
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                26 Aralık 2025
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                8 dk okuma
              </span>
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                Podolog
              </span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-gecmez.webp" 
                alt="Tırnak Mantarı Neden Geçmez?" 
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Giriş */}
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Tırnak mantarı yaşayan birçok kişi aynı soruyu sorar: <strong>"Aylar geçti ama neden hâlâ geçmedi?"</strong>
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Aslında sorun çoğu zaman mantarın kendisi değil, yanlış yaklaşımdır. Tırnak mantarı çoğu zaman tek başına ortaya çıkmaz. Özellikle ayak mantarı ile birlikte görülebilir. Eğer bu farkı bilmiyorsan <LocalizedLink to="/blog/ayak-mantari-mi-egzama-mi" className="text-red-600 hover:text-red-700 font-medium">ayak mantarı mı egzama mı</LocalizedLink> yazısına da göz atabilirsin.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Tırnak mantarı, yüzeysel bir problem gibi görünse de çoğu durumda tırnağın altına yerleşir ve burada yaşamaya devam eder. Bu yüzden de kısa sürede tamamen ortadan kalkması beklenmez.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-medium">
                Bu yazıda, tırnak mantarının neden geçmediğini ve süreci nasıl doğru yönetebileceğini net şekilde anlatıyoruz.
              </p>
            </div>

            {/* Neden Uzun Sürer */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Tırnak Mantarı Neden Uzun Sürer?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Tırnak, deriye göre çok daha yavaş yenilenen bir yapıdır. Bir tırnağın tamamen sağlıklı şekilde uzaması:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Ayakta:</strong> 9–12 ay</li>
              <li><strong>Elde:</strong> 4–6 ay</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-4">
              Bu şu anlama gelir: Mantar ortadan kalksa bile, sağlıklı tırnağın tamamen çıkması zaman alır.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800">
                👉 Yani çoğu kişi "geçmedi" sanır ama aslında süreç devam ediyordur.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Mantarın tekrar etmesinin en büyük nedenlerinden biri, sorunun tamamen çözülmeden bırakılmasıdır. Bu durumu daha detaylı anlamak için <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="text-red-600 hover:text-red-700 font-medium">ayak mantarı neden tekrarlar</LocalizedLink> yazısını inceleyebilirsin.
            </p>

            {/* İkinci Görsel */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-olur.webp" 
                alt="Tırnak Mantarı Neden Olur?" 
                className="w-full object-cover"
              />
            </div>

            {/* 7 Hata */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">1. Sadece Yüzeyi Tedavi Etmek</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              En yaygın hata budur. Kremler veya ürünler sadece tırnağın üstüne uygulanır ama mantar çoğu zaman:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Tırnağın altındadır</li>
              <li>Kalınlaşmış tabakanın içinde yaşar</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bu durumda yüzeysel uygulamalar etkisiz kalır. Bu noktada tırnak altına ulaşabilen ve düzenli kullanımda destek sağlayan ürünler tercih edilmelidir. Özellikle <LocalizedLink to="/urun/foot-nail-care-serum" className="text-red-600 hover:text-red-700 font-medium">tırnak bakım serumu</LocalizedLink> bu süreçte destekleyici olabilir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">2. Düzenli Uygulama Yapmamak</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Tırnak mantarında en kritik şey: <strong>istikrar</strong>
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>3 gün kullanıp bırakmak</li>
              <li>Arada unutmak</li>
              <li>"Geçti gibi" deyip kesmek…</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bunların hepsi süreci başa sarar.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">3. Tırnağı İnceltmeden Ürün Kullanmak</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalınlaşmış tırnak, ürünün içeri girmesini engeller. Bu yüzden:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Profesyonel inceltme</li>
              <li>Düzenli törpüleme</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              olmadan yapılan bakım çoğu zaman yetersiz kalır. Kalınlaşmış tırnaklarda profesyonel müdahale gerekebilir. Bu süreç hakkında daha detaylı bilgi almak için <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-medium">medikal ayak bakımı nedir</LocalizedLink> içeriğine göz atabilirsin.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">4. Ayakkabı ve Çorap Faktörünü Göz Ardı Etmek</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Mantar sadece tırnakta yaşamaz.
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Nemli ayakkabı</li>
              <li>Terleyen çorap</li>
              <li>Havasız ortam</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              👉 Mantarın tekrar oluşması için ideal ortamdır. Tedavi yapılırken bu faktörler düzeltilmezse mantar sürekli geri gelir.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">5. Hijyen Hataları</h2>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Aynı havluyu kullanmak</li>
              <li>Tırnak makasını paylaşmak</li>
              <li>Ayağı nemli bırakmak</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bunlar küçük gibi görünür ama süreci sabote eder.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">6. Erken Vazgeçmek</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Tırnak mantarı: <strong>sabır isteyen bir süreçtir</strong>
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Çoğu kişi 2–3 hafta içinde sonuç bekler. Oysa gerçek iyileşme aylar içinde görülür.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">7. Yanlış Ürün Seçimi</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Her ürün aynı etkiyi göstermez. Özellikle:
            </p>

            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Tırnak altına ulaşabilen</li>
              <li>Düzenli kullanımda destekleyici olan</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              ürünler tercih edilmelidir.
            </p>

            {/* Bakım Rutini */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Etkili Bir Tırnak Mantarı Bakım Rutini Nasıl Olmalı?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Doğru yaklaşım basittir ama disiplin ister:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">1️⃣</div>
                  <p className="font-medium text-gray-900">Tırnağı düzenli incelt</p>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">2️⃣</div>
                  <p className="font-medium text-gray-900">Temiz ve kuru tut</p>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">3️⃣</div>
                  <p className="font-medium text-gray-900">Uygun ürünleri istikrarlı kullan</p>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">4️⃣</div>
                  <p className="font-medium text-gray-900">Ayakkabı hijyenine dikkat et</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-8">
              <p className="text-gray-800 font-medium">
                👉 Bu 4 adım birlikte uygulanmadıkça sonuç almak zorlaşır.
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Eğer tırnak mantarı uzun süredir geçmiyorsa, süreci doğru ürün ve bakım ile desteklemek gerekir. Bu noktada <LocalizedLink to="/urun/foot-nail-care-serum" className="text-red-600 hover:text-red-700 font-medium">tırnak bakım serumu</LocalizedLink> ve <LocalizedLink to="/urun/ureli-krem" className="text-red-600 hover:text-red-700 font-medium">üreli krem</LocalizedLink> birlikte kullanıldığında daha etkili bir bakım rutini oluşturulabilir.
            </p>

            {/* Profesyonel Destek */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Ne Zaman Profesyonel Destek Gerekir?</h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Şu durumlarda destek almak gerekir:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Tırnak çok kalınlaştıysa</li>
              <li>Sararma ve ayrılma arttıysa</li>
              <li>Evde bakım sonuç vermediyse</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-8">
              Bu noktada medikal ayak bakımı süreci hızlandırır.
            </p>

            {/* SSS */}
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Sık Sorulan Sorular</h2>
            
            <div className="space-y-4 mb-12">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-white">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Tırnak Bakımına Bugün Başla</h3>
              <p className="mb-6 opacity-90">
                Doğru ürünlerle desteklenen düzenli bakım, en etkili yaklaşımdır.
              </p>
              <LocalizedLink 
                to="/urun/foot-nail-care-serum" 
                className="inline-block bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Tırnak Bakım Serumunu İncele
              </LocalizedLink>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogTirnakMantariNedenGecmez;
