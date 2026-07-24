import React from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Share2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const BlogAyakMantariBaslangici = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "Ayak mantarı ilk nerede başlar?",
      answer: "Genellikle ayak parmak aralarında, özellikle 4. ve 5. parmak arasında başlar. Nemli bölgeler mantar için uygun ortam oluşturur."
    },
    {
      question: "Ayak mantarı kaşıntı yapar mı?",
      answer: "Evet, en yaygın belirtilerden biri kaşıntıdır. Özellikle terleme sonrası artış gösterebilir."
    },
    {
      question: "Ayak mantarı kendi kendine geçer mi?",
      answer: "Genellikle kendiliğinden geçmez. Takip edilmesi ve gerekli durumlarda podolojik değerlendirme önerilir."
    },
    {
      question: "Ayak mantarı bulaşıcı mı?",
      answer: "Evet, ortak kullanım alanlarında (duş, havuz, spor salonu) bulaşma riski vardır."
    },
    {
      question: "Ayak mantarı nasıl önlenir?",
      answer: "Ayakların kuru tutulması, düzenli temizlik, nefes alabilen ayakkabı kullanımı ve çorap değişimi önleyici adımlar arasında yer alır."
    },
    {
      question: "Hangi durumlarda uzman desteği alınmalı?",
      answer: "Belirtiler artıyorsa, yayılıyorsa veya tırnaklara geçiş başladıysa podolojik değerlendirme önerilir."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Ayak Mantarı Başlangıcı Nasıl Anlaşılır? Erken Belirtiler | PediZone</title>
        <meta name="title" content="Ayak Mantarı Başlangıcı Nasıl Anlaşılır? Erken Belirtiler | PediZone" />
        <meta name="description" content="Ayak mantarı nasıl başlar? İlk belirtiler nelerdir? Parmak arası kaşıntı, kızarıklık ve pullanma gibi erken evreleri tanıyın. Podolog uzmanından detaylı rehber." />
        <meta name="keywords" content="ayak mantarı başlangıcı, ayak mantarı belirtileri, ayak mantarı ilk evre, parmak arası kaşıntı, tinea pedis, ayak mantarı erken belirtiler" />
        <meta name="author" content="Podolog Serdar Ceylan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pedizone.com/blog/ayak-mantari-baslangici-nasil-anlasilir" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://pedizone.com/blog/ayak-mantari-baslangici-nasil-anlasilir" />
        <meta property="og:title" content="Ayak Mantarı Başlangıcı Nasıl Anlaşılır? Erken Belirtiler ve Dikkat Edilmesi Gerekenler" />
        <meta property="og:description" content="Ayak mantarı nasıl başlar? İlk belirtiler nelerdir? Parmak arası kaşıntı, kızarıklık ve pullanma gibi erken evreleri tanıyın." />
        <meta property="og:image" content="https://pedizone.com/images/blog/ayak-mantari-baslangici-nasil-anlasilir/ayak-mantari-belirtileri.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="PediZone" />
        <meta property="article:published_time" content="2026-03-18" />
        <meta property="article:author" content="Podolog Serdar Ceylan" />
        <meta property="article:section" content="Ayak Sağlığı" />
        <meta property="article:tag" content="Ayak Mantarı" />
        <meta property="article:tag" content="Ayak Sağlığı" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pedizone.com/blog/ayak-mantari-baslangici-nasil-anlasilir" />
        <meta name="twitter:title" content="Ayak Mantarı Başlangıcı Nasıl Anlaşılır?" />
        <meta name="twitter:description" content="Ayak mantarı nasıl başlar? İlk belirtiler nelerdir? Erken evreleri tanıyın." />
        <meta name="twitter:image" content="https://pedizone.com/images/blog/ayak-mantari-baslangici-nasil-anlasilir/ayak-mantari-belirtileri.webp" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ayak Mantarı Başlangıcı Nasıl Anlaşılır? Erken Belirtiler ve Dikkat Edilmesi Gerekenler",
            "description": "Ayak mantarı nasıl başlar? İlk belirtiler nelerdir? Parmak arası kaşıntı, kızarıklık ve pullanma gibi erken evreleri tanıyın.",
            "image": {
              "@type": "ImageObject",
              "url": "https://pedizone.com/images/blog/ayak-mantari-baslangici-nasil-anlasilir/ayak-mantari-belirtileri.webp",
              "width": 1200,
              "height": 630
            },
            "author": {
              "@type": "Person",
              "name": "Podolog Serdar Ceylan",
              "jobTitle": "Podolog",
              "worksFor": {
                "@type": "Organization",
                "name": "PediZone"
              }
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pedizone.com/logo.png",
                "width": 200,
                "height": 60
              }
            },
            "datePublished": "2026-03-18",
            "dateModified": "2026-03-18",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pedizone.com/blog/ayak-mantari-baslangici-nasil-anlasilir"
            },
            "articleSection": "Ayak Sağlığı",
            "keywords": "ayak mantarı başlangıcı, ayak mantarı belirtileri, tinea pedis, parmak arası kaşıntı"
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Blog",
                "item": "https://pedizone.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Ayak Mantarı Başlangıcı Nasıl Anlaşılır?",
                "item": "https://pedizone.com/blog/ayak-mantari-baslangici-nasil-anlasilir"
              }
            ]
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

        {/* MedicalWebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "about": {
              "@type": "MedicalCondition",
              "name": "Tinea Pedis (Ayak Mantarı)",
              "alternateName": "Ayak Mantarı"
            },
            "lastReviewed": "2026-03-18",
            "medicalAudience": {
              "@type": "MedicalAudience",
              "audienceType": "Patient"
            },
            "specialty": {
              "@type": "MedicalSpecialty",
              "name": "Podoloji"
            }
          })}
        </script>
      </Helmet>

      {/* Breadcrumb & Hero */}
      <section className="pt-20 md:pt-24 pb-6 md:pb-8 bg-gradient-to-br from-gray-50 via-white to-red-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm text-gray-500 mt-0 mb-2">
              <LocalizedLink to="/" className="hover:text-red-600 transition-colors">Ana Sayfa</LocalizedLink>
              <span className="text-gray-300">/</span>
              <LocalizedLink to="/blog" className="hover:text-red-600 transition-colors">Blog</LocalizedLink>
              <span className="text-gray-300">/</span>
              <span className="text-gray-700 font-medium truncate max-w-[200px]">Ayak Mantarı Başlangıcı...</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-0 mb-3">
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Ayak Mantarı</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Ayak Sağlığı</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Erken Teşhis</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-0 mb-2 leading-[1.2]">
              Ayak Mantarı Başlangıcı Nasıl Anlaşılır? Erken Belirtiler ve Dikkat Edilmesi Gerekenler
            </h1>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-gray-100 mb-0">
              <div className="flex flex-wrap items-center gap-5 text-gray-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-sm">Podolog Serdar Ceylan</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-red-500" />
                  <span>18 Mart 2026</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-red-500" />
                  <span>10 dk okuma</span>
                </div>
              </div>
              
              {/* Share Button */}
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Ayak Mantarı Başlangıcı Nasıl Anlaşılır?',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link kopyalandı!');
                  }
                }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-medium text-gray-700"
              >
                <Share2 size={16} />
                Paylaş
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
                src="/images/blog/ayak-mantari-baslangici-nasil-anlasilir/ayak-mantari-belirtileri.webp" 
                alt="Ayak Mantarı Başlangıcı - Erken Belirtiler" 
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              Ayak mantarı, özellikle nemli ve kapalı ortamlarda hızla gelişebilen yaygın bir cilt sorunudur. Erken fark edilmediğinde ilerleyebilir ve tedavi süreci uzayabilir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Bu nedenle başlangıç belirtilerini tanımak, düzenli takip yapmak ve gerekli durumlarda podolojik değerlendirme almak önemlidir.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg text-gray-800">
                Bu yazıda ayak mantarının ilk belirtilerini, nasıl ayırt edileceğini ve nelere dikkat edilmesi gerektiğini detaylı şekilde ele alıyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ayak Mantarı Nedir */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Mantarı Nedir?
            </h2>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ayak mantarı (tinea pedis), genellikle ayak parmak aralarında başlayan ve zamanla yayılabilen bir cilt problemidir. Nem, terleme ve havasız ortamlar mantarın gelişmesini kolaylaştırır.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Spor yapanlar, uzun süre kapalı ayakkabı giyenler ve ortak kullanım alanlarını sık kullanan kişilerde daha sık görülür.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <p className="text-gray-700"><strong>Sporcular</strong></p>
                <p className="text-sm text-gray-500">Terleme ve nemli ortam</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <p className="text-gray-700"><strong>Kapalı Ayakkabı</strong></p>
                <p className="text-sm text-gray-500">Uzun süreli kullanım</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <p className="text-gray-700"><strong>Ortak Alanlar</strong></p>
                <p className="text-sm text-gray-500">Havuz, duş, spor salonu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Başlangıç Belirtileri */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Mantarı Başlangıcı Nasıl Anlaşılır?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Ayak mantarı genellikle hafif belirtilerle başlar ve çoğu zaman fark edilmeden ilerleyebilir. İlk aşamada görülen belirtiler şunlardır:
            </p>

            {/* Belirti 1 */}
            <Card className="border-red-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Parmak Aralarında Kaşıntı</h3>
                    <p className="text-gray-700 mb-3">
                      En yaygın ilk belirtidir. Özellikle dikkat edilmesi gerekenler:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        4. ve 5. parmak arası en sık görülen bölgedir (detay: <LocalizedLink to="/blog/parmak-arasi-mantar-nasil-gecer" className="text-red-600 hover:text-red-700 font-semibold">parmak arası mantar nasıl geçer</LocalizedLink>)
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                        Nemli kaldığında kaşıntı artar
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Belirti 2 */}
            <Card className="border-orange-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hafif Kızarıklık ve Pullanma</h3>
                    <p className="text-gray-700 mb-3">
                      Ciltte gözlemlenen değişiklikler:
                    </p>
                    <div className="grid md:grid-cols-3 gap-3">
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">İnce soyulmalar</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">Kuruluk hissi</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-3 text-center">
                        <p className="text-gray-700">Hafif kızarıklık</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* İkinci Görsel */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/images/blog/ayak-mantari-baslangici-nasil-anlasilir/ayak-kasintisi.webp" 
                alt="Ayak Mantarı Kaşıntı Belirtileri" 
                className="w-full object-cover"
              />
            </div>

            {/* Belirti 3 */}
            <Card className="border-yellow-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ciltte Yumuşama (Macerasyon)</h3>
                    <p className="text-gray-700 mb-3">
                      Uzun süre nemli kalan bölgelerde oluşabilir:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        Beyazımsı görünüm
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600" />
                        Yumuşak ve hassas cilt
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Belirti 4 */}
            <Card className="border-green-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Hafif Koku Artışı</h3>
                    <p className="text-gray-700">
                      Normalden farklı bir ayak kokusu oluşabilir. Bu durum genellikle bakteriyel eşlik ile artabilir.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Belirti 5 */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Yanma ve Batma Hissi</h3>
                    <p className="text-gray-700 mb-3">
                      Özellikle yürürken veya terleme sonrası:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500" />
                        Hafif yanma
                      </p>
                      <p className="flex items-center gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500" />
                        Batma hissi
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Karıştırılan Durumlar */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Mantarı ile Karıştırılan Durumlar
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Her kaşıntı veya kuruluk mantar değildir. Aşağıdaki durumlarla karışabilir:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900">Aşırı Kuruluk (Xerosis)</p>
                <p className="text-sm text-gray-600">Nemlendiricilerle iyileşebilir</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900">Egzama</p>
                <p className="text-sm text-gray-600">Alerjik kaynaklı olabilir</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900">Alerjik Reaksiyonlar</p>
                <p className="text-sm text-gray-600">Çorap veya ayakkabı kaynaklı</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200">
                <p className="font-semibold text-gray-900">Ayakkabı Tahrişi</p>
                <p className="text-sm text-gray-600">Mekanik sürtünme sonucu</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Bu nedenle kesin yorum yapmak yerine düzenli takip önerilir. Eğer belirtiler ayak mantarı mı egzama mı ayırt edemiyorsanız, <LocalizedLink to="/blog/ayak-mantari-mi-egzama-mi" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı mı egzama mı</LocalizedLink> yazımıza göz atabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Ne Yapılmalı */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Mantarı Başlangıcında Ne Yapılmalı?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Erken dönemde doğru adımlar atmak sürecin ilerlemesini önlemeye yardımcı olabilir:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <p className="text-gray-700 pt-2"><strong>Ayaklar günlük olarak temizlenmeli</strong> ve özellikle parmak araları iyice kurulanmalı</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <p className="text-gray-700 pt-2"><strong>Parmak araları nemli bırakılmamalı</strong> - nem mantarın en sevdiği ortamdır</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <p className="text-gray-700 pt-2"><strong>Pamuklu çorap tercih edilmeli</strong> ve günde en az bir kez değiştirilmeli</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <p className="text-gray-700 pt-2"><strong>Ayakkabılar havalandırılmalı</strong> - aynı ayakkabıyı üst üste günler giymekten kaçının</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">5</div>
                <p className="text-gray-700 pt-2"><strong>Ortak alanlarda dikkatli olunmalı</strong> - havuz, duş ve spor salonlarında terlik kullanın</p>
              </div>
            </div>

            {/* Ürün Tanıtımı */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Günlük Ayak Bakımı İçin Öneriler
              </h3>
              
              <p className="text-lg text-gray-700 mb-6">
                Düzenli ayak bakımı, mantarın ilerlemesini önlemeye yardımcı olabilir:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">Ayak Temizleme Köpüğü</p>
                  <p className="text-sm text-gray-600">Günlük temizlik için ideal</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">Tırnak Bakım Serumu</p>
                  <p className="text-sm text-gray-600">Tırnaklara yayılmayı önlemek için</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ne Zaman Ciddiye Alınmalı */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Mantarı Ne Zaman Ciddiye Alınmalı?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Aşağıdaki durumlarda uzman desteği almak önemlidir:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700">Kaşıntı ve kızarıklık <strong>artıyorsa</strong></p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700">Ciltte <strong>çatlaklar</strong> oluştuysa</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700"><strong>Yayılma</strong> başladıysa</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700">Tırnakta <strong>değişim</strong> görülüyorsa</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-lg text-yellow-800">
                <strong>Önemli:</strong> Bu içerik tıbbi teşhis yerine geçmez, yalnızca bilgilendirme amaçlıdır. Tırnaklara yayılma başladığında <LocalizedLink to="/blog/tirnak-mantari-neden-gecmez" className="text-red-600 hover:text-red-700 font-semibold">tırnak mantarı neden geçmez</LocalizedLink> yazımızı da incelemenizi öneririz.
              </p>
            </div>

            <div className="mt-4 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-lg text-blue-900">
                👟 <strong>İpucu:</strong> Ayak mantarının başlangıç evresinde ayakkabı ve çorap seçimi, sürecin hızını doğrudan etkiler. Parmaklara alan bırakan, hava alan ayakkabılar iyileşmeyi kolaylaştırır. Detaylı ölçütler için <LocalizedLink to="/blog/batik-tirnakta-ayakkabi-secimi" className="text-red-600 hover:text-red-700 font-semibold">batık tırnakta ayakkabı seçimi</LocalizedLink> rehberimiz, mantar bakımı için de yol gösterici olacaktır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ayak Takip */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Sağlığını Takip Etmenin Önemi
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Ayak mantarı erken dönemde fark edildiğinde daha kolay kontrol altına alınabilir. Bu nedenle düzenli gözlem yapmak ve değişiklikleri not etmek oldukça önemlidir.
            </p>

            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">PediZone Ayak Analizi ile:</h3>
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  Ayak fotoğraflarınızı düzenli kaydedebilir
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  Değişimleri karşılaştırabilir
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6" />
                  PDF rapor oluşturabilirsiniz
                </p>
              </div>
              <LocalizedLink to="/ayak-analizi">
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Ayak Analizini Dene →
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-12 bg-gray-50">
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
              Ayak Sağlığınızı Takip Edin
            </h2>
            <p className="text-lg text-red-100 mb-8">
              Erken teşhis, etkili bakımın ilk adımıdır. Ayaklarınızdaki değişimleri düzenli takip edin.
            </p>
            <LocalizedLink to="/ayak-analizi">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                Ücretsiz Ayak Analizi Yap →
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
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">İlgili Konular</p>
              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/blog/parmak-arasi-mantar-nasil-gecer" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Parmak Arası Mantar Nasıl Geçer?</p>
                  <p className="text-sm text-gray-600">Kaşıntı ve kokuya kesin çözüm</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/ayak-mantari-mi-egzama-mi" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı mı Egzama mı?</p>
                  <p className="text-sm text-gray-600">Belirtileri ayırt etmeyi öğrenin</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Neden Tekrarlar?</p>
                  <p className="text-sm text-gray-600">Tekrarlamanın önüne geçin</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/tirnak-mantari-neden-gecmez" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Tırnak Mantarı Neden Geçmez?</p>
                  <p className="text-sm text-gray-600">7 kritik hata ve çözümleri</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Medikal Ayak Bakımı Nedir?</p>
                  <p className="text-sm text-gray-600">Profesyonel bakım rehberi</p>
                </LocalizedLink>
              </div>
            </div>

            {/* Ürünler */}
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Önerilen Ürünler</p>
              <div className="grid md:grid-cols-3 gap-4">
                <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-red-700 mb-1">Temizleme Köpüğü</p>
                  <p className="text-xs text-red-600">Günlük hijyen</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">Tırnak Bakım Serumu</p>
                  <p className="text-xs text-gray-600">Antifungal destek</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/ureli-krem" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">%15 Üreli Krem</p>
                  <p className="text-xs text-gray-600">Cilt bakımı</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogAyakMantariBaslangici;
