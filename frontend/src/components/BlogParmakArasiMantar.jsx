import React from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Share2, Droplets, Timer } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const BlogParmakArasiMantar = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "Parmak arası mantar kendiliğinden geçer mi?",
      answer: "Parmak arası mantar genellikle kendiliğinden geçmez. Uygun bakım ve antifungal destek olmadan bırakıldığında çoğu zaman ilerler veya bir süre sonra tekrar eder. İyileşme için ayağı kuru tutmak, parmak aralarını günde birkaç kez kurulamak ve düzenli antifungal krem kullanmak gerekir. Klinik gözlemlerimizde, sadece 'geçer' diye beklenen hafif vakaların bile 4–6 hafta içinde tırnağa yayıldığı çok sık görülür."
    },
    {
      question: "Parmak arası mantar bulaşıcı mı?",
      answer: "Evet, parmak arası mantar (tinea pedis interdigital) oldukça bulaşıcı bir mantar enfeksiyonudur. Ortak terlik, havlu, paspas, duş zemini, spor salonu soyunma odası ve havuz çevresi gibi nemli ortak kullanım alanları üzerinden kolayca bulaşabilir. Aynı evde yaşayan bireylerin ayrı havlu ve terlik kullanması, duş sonrası zemini kurutması bulaşma riskini ciddi şekilde azaltır."
    },
    {
      question: "Parmak arası mantar tırnağa geçer mi?",
      answer: "Evet, tedavi edilmeyen parmak arası mantar büyük olasılıkla tırnağa geçer. Mantar, parmak arasındaki nemli ortamdan tırnak yatağına ilerleyerek tırnak mantarına (onikomikoz) dönüşür. Tırnak mantarının tedavi süresi 6–12 aya kadar uzayabildiği için, parmak arası mantarı erken dönemde kontrol altına almak çok daha kolay bir süreçtir."
    },
    {
      question: "Parmak arası mantar için en etkili çözüm nedir?",
      answer: "En etkili çözüm üç temel adımın birlikte uygulanmasıdır: 1) Ayağı her gün kuru tutmak ve parmak aralarını duş sonrası tek tek kurulamak, 2) Antifungal içerikli bir krem veya serumu en az 2–3 hafta boyunca düzenli kullanmak, 3) Çorap ve ayakkabı hijyenine dikkat etmek (günlük çorap değişimi, ayakkabıyı havalandırma). Sadece tek bir adıma odaklanmak çoğu zaman yetersiz kalır."
    },
    {
      question: "Parmak arası mantar kaç günde geçer?",
      answer: "Hafif vakalar düzenli bakımla 7–10 gün içinde kontrol altına alınabilir. Orta seviye vakalar 2–3 hafta, daha ileri vakalar ise 3–4 hafta sürebilir. Belirtiler geçtikten sonra bile antifungal ürüne en az 1 hafta daha devam etmek tekrarlamayı önler. Yanlış bakım yapıldığında ise süreç aylarca uzayabilir."
    },
    {
      question: "Ayak kokusu parmak arası mantar belirtisi midir?",
      answer: "Evet, özellikle yıkamaya rağmen geçmeyen, keskin ve sürekli devam eden ayak kokusu çoğu zaman parmak arası mantar ile bakteriyel enfeksiyonun birleşimine işaret eder. Nemli parmak aralarında hem mantar hem de kötü koku yapan bakteriler birlikte çoğalır. Bu durumda yalnızca temizlik değil, antifungal bakım da gereklidir."
    },
    {
      question: "Parmak arası mantara evde sirke işe yarar mı?",
      answer: "Elma sirkesi veya beyaz sirke ile ayak banyosu halk arasında yaygın bir yöntem olsa da tek başına parmak arası mantarı geçiren kanıtlanmış bir tedavi değildir. Sirke bölgeyi asidik tutarak mantarın çoğalmasını yavaşlatabilir, ancak derin dokuya işleyemediği için mantarı tamamen yok etmez. Ayrıca yoğun kullanıldığında ciltte tahriş, yanma ve çatlak oluşturabilir. Sirke banyosu en fazla destekleyici bir yöntem olarak değerlendirilmeli, esas tedavi mutlaka düzenli antifungal krem veya serum olmalıdır."
    },
    {
      question: "Parmak arası mantar için hangi krem en etkilidir?",
      answer: "Parmak arası mantar için en etkili kremler, terbinafin, klotrimazol, mikonazol ya da doğal antifungal etkisi bilinen Tea Tree Oil (çay ağacı yağı) içeren ürünlerdir. Kremin günde 1–2 kez, sadece görünür bölgeye değil 2 cm çevresine de uygulanması ve belirtiler geçse bile en az 1 hafta daha kullanılması gerekir. Yüksek terlemesi olan kişilerde antifungal etkili bir bakım serumu veya köpük ile birlikte kullanım, kremin etkisini artırır ve tekrarlama riskini azaltır."
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="blog-parmak-arasi-mantar">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm (2026 Klinik Rehberi) | PediZone</title>
        <meta name="description" content="Parmak arası mantar kaşıntı, koku ve yara yapabilir. 1–3 haftada kontrol altına almak için en etkili yöntemleri öğrenin." />
        <meta name="keywords" content="parmak arası mantar, parmak arası mantar nasıl geçer, ayak arası mantar, tinea pedis interdigital, parmak arası kaşıntı, ayak kokusu mantar, parmak arası mantar kremi" />
        <meta name="author" content="Podolog Serdar Ceylan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pedizone.com/blog/parmak-arasi-mantar-nasil-gecer" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://pedizone.com/blog/parmak-arasi-mantar-nasil-gecer" />
        <meta property="og:title" content="Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm (2026 Klinik Rehberi)" />
        <meta property="og:description" content="Parmak arası mantar kaşıntı, koku ve yara yapabilir. 1–3 haftada kontrol altına almak için en etkili yöntemleri öğrenin." />
        <meta property="og:image" content="https://pedizone.com/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-kapak.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="PediZone" />
        <meta property="article:published_time" content="2026-04-18" />
        <meta property="article:modified_time" content="2026-08-13" />
        <meta property="article:author" content="Podolog Serdar Ceylan" />
        <meta property="article:section" content="Ayak Sağlığı" />
        <meta property="article:tag" content="Parmak Arası Mantar" />
        <meta property="article:tag" content="Ayak Mantarı" />
        <meta property="article:tag" content="Kaşıntı" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pedizone.com/blog/parmak-arasi-mantar-nasil-gecer" />
        <meta name="twitter:title" content="Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm" />
        <meta name="twitter:description" content="Parmak arası mantar için 1–3 haftada işe yarayan yöntemler: ayağı kuru tutmak, antifungal kullanım ve doğru hijyen." />
        <meta name="twitter:image" content="https://pedizone.com/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-kapak.webp" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm (2026 Klinik Rehberi)",
            "description": "Parmak arası mantar kaşıntı, koku ve yara yapabilir. 1–3 haftada kontrol altına almak için en etkili yöntemleri öğrenin.",
            "image": {
              "@type": "ImageObject",
              "url": "https://pedizone.com/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-kapak.webp",
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
            "datePublished": "2026-04-18",
            "dateModified": "2026-08-13",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pedizone.com/blog/parmak-arasi-mantar-nasil-gecer"
            },
            "articleSection": "Ayak Sağlığı",
            "keywords": "parmak arası mantar, parmak arası mantar nasıl geçer, tinea pedis interdigital, ayak arası mantar, parmak arası kaşıntı"
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
                "name": "Parmak Arası Mantar Nasıl Geçer?",
                "item": "https://pedizone.com/blog/parmak-arasi-mantar-nasil-gecer"
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
              "name": "Tinea Pedis Interdigital (Parmak Arası Mantar)",
              "alternateName": "Ayak Arası Mantar"
            },
            "lastReviewed": "2026-04-18",
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
              <span className="text-gray-700 font-medium truncate max-w-[200px]">Parmak Arası Mantar...</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-0 mb-3">
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Parmak Arası Mantar</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Ayak Mantarı</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Kaşıntı</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-0 mb-2 leading-[1.2]">
              Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm (2026 Klinik Rehberi)
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
                  <span>18 Nisan 2026</span>
                </div>
                <div className="flex items-center text-sm">
                  <Clock size={16} className="mr-2 text-red-500" />
                  <span>9 dk okuma</span>
                </div>
              </div>

              {/* Share Button */}
              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Parmak Arası Mantar Nasıl Geçer?',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link kopyalandı!');
                  }
                }}
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors text-sm font-medium text-gray-700"
                data-testid="share-button"
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
                src="/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-kapak.webp"
                alt="Parmak arası mantar (tinea pedis interdigital) - kaşıntı, koku ve kızarıklık belirtileri"
                title="Parmak arası mantar nasıl geçer? 2026 Klinik Rehberi"
                loading="eager"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-3 italic">
              Parmak arası mantar en sık 4. ve 5. parmak arasında görülür ve nemli ortamda hızla ilerler.
            </p>
          </div>
        </div>
      </section>

      {/* Hızlı Cevap */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Parmak Arası Mantar Nasıl Geçer? (Kısa ve Net Cevap)
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Parmak arası mantarı geçirmek için:
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700"><strong>Ayağı kuru tutmak</strong></p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700"><strong>Antifungal kremi düzenli kullanmak</strong></p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700"><strong>Parmak aralarını her gün kurutmak</strong></p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700"><strong>Ayakkabı hijyenine dikkat etmek</strong></p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg text-gray-800">
                Bu yöntemlerle parmak arası mantar genellikle <strong>1–3 hafta</strong> içinde kontrol altına alınır.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Parmak arası mantar, <strong>ayak arası mantar</strong> olarak da bilinen ve genellikle nemli, havasız ortamda oluşan yaygın bir cilt enfeksiyonudur. Klinik pratiğimizde <strong>en sık gördüğümüz durum</strong>, kişinin kaşıntıyı aylarca "kuruluk" sanıp nemlendirici sürmesi ve bu süreçte mantarın sessizce yayılmasıdır. En sık kaşıntı, koku ve kızarıklık ile kendini gösterir; erken müdahale edilmezse yayılabilir ve tedavi süresi uzayabilir.
            </p>

            {/* Özet Kutu */}
            <Card className="border-red-200 mt-4">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Timer className="w-6 h-6 text-red-600" />
                  Parmak Arası Mantar Hızlı Özet
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Süre</p>
                    <p className="text-gray-900 font-semibold">1–3 hafta</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">En önemli faktör</p>
                    <p className="text-gray-900 font-semibold">Ayağı kuru tutmak</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">En büyük hata</p>
                    <p className="text-gray-900 font-semibold">Tedaviyi erken bırakmak</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Tekrar nedeni</p>
                    <p className="text-gray-900 font-semibold">Nem ve ayakkabı hijyeni</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

            {/* Özgün Pull-Quote: Sinsi Evre */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <figure className="relative bg-white border-l-4 border-red-600 shadow-md rounded-r-2xl px-6 md:px-10 py-6 md:py-8">
              <span className="absolute -top-5 left-6 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                Klinik Uyarı
              </span>
              <blockquote>
                <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                  "Parmak arası mantar, çoğu kişi tarafından önemsenmeyen bir sorun gibi görülür. Kaşıntı azaldığında geçtiği sanılır; <strong className="not-italic text-red-700">ancak klinik gözlemlerimizde sık rastladığımız gibi</strong> bu, <strong className="not-italic">tırnak mantarına ilerleyebilen ve bulaşıcılığı devam eden</strong> ciddi bir enfeksiyonun <strong className="not-italic">en sinsi evresidir</strong>."
                </p>
              </blockquote>
              <figcaption className="mt-4 text-sm text-gray-500 not-italic">
                — Podolog Serdar Ceylan, klinik gözlem notları
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Wood Işığı Altında Ayak Mantarı Görüntüsü */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 rounded-2xl border-2 border-indigo-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ayak Mantarının Wood Işığı Altındaki Görüntüsü
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podolojik klinik değerlendirmelerde ve dermatolojik muayenelerde enfeksiyonun yayılım alanını ve türünü net bir şekilde gözlemlemek için özel tanı araçları kullanılır. Bunlardan biri olan <strong>Wood ışığı (ultraviyole A / siyah ışık)</strong>, cilt üzerindeki mantar sporlarının ve bazı bakteriyel aktivitelerin fluoresan (parlak yansıma) vermesini sağlar.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Çıplak gözle hafif bir soyulma veya kızarıklık gibi görünen parmak arası mantar lezyonları, Wood ışığı altında incelediğinde mantar kolonilerinin yerleştiği sınırlar çok daha net fark edilir. Bu sayede bakım ve ürün uygulama alanları tam olarak belirlenerek nokta atışı bir podolojik yaklaşım sergilenir.
              </p>

              {/* Reels Tarzı Video */}
              <div className="my-6 flex flex-col items-center">
                <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-xl border border-indigo-200 bg-black">
                  <video 
                    src="/blog-images/parmak-arasi-mantar/ayak-mantari-wood-isigi.webm" 
                    autoPlay 
                    loop 
                    playsInline
                    className="w-full h-auto object-cover block"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center">
                  <span className="w-8 h-px bg-indigo-300 mr-3"></span>
                  Klinik İnceleme: Ayak Mantarının Wood Işığı Altındaki Görüntüsü
                  <span className="w-8 h-px bg-indigo-300 ml-3"></span>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parmak Arası Mantar Nedir */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Parmak Arası Mantar Nedir? Ayak Arası Mantar Nasıl Oluşur?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Parmak arası mantar, ayak mantarının en sık görülen türüdür ve genellikle nemli kalan parmak aralarında ortaya çıkar.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Parmak arası mantar, yani <strong>ayak arası mantar</strong>, en sık <strong>4. ve 5. parmak arasında</strong> görülür. Daha geniş tıbbi arka plan için <LocalizedLink to="/blog/ayak-mantari-nedir" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı nedir</LocalizedLink> içeriğimize göz atabilirsiniz. 4–5. parmak arasının bu kadar sık etkilenmesinin nedenleri şöyle:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <Droplets className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700"><strong>Havasız kalma</strong></p>
                <p className="text-sm text-gray-500">Bölgenin yeterince hava almaması</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <Droplets className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700"><strong>Nem birikimi</strong></p>
                <p className="text-sm text-gray-500">Parmak aralarında biriken nem</p>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-200">
                <Droplets className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <p className="text-gray-700"><strong>Hassas cilt</strong></p>
                <p className="text-sm text-gray-500">İncecik ve hassas parmak arası derisi</p>
              </div>
            </div>

            {/* Tinea pedis interdigital görseli */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img
                src="/images/blog/parmak-arasi-mantar-nasil-gecer/tinea-pedis-interdigital.webp"
                alt="Tinea pedis interdigital - parmak araları mantar enfeksiyonu klinik görüntü"
                title="Tinea pedis interdigital (parmak arası mantar) klinik görünüm"
                loading="lazy"
                className="w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-2 italic px-4 pb-2">
                Tinea pedis interdigital: parmak aralarında beyazlaşma, pullanma ve kızarıklık tipik belirtidir.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              👉 Özellikle uzun süre kapalı ayakkabı giyen kişilerde, spor yapanlarda ve yoğun terleme problemi olanlarda daha sık görülür.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-3">
              👉 Özellikle yaz aylarında ve spor sonrası nemli kalan ayaklarda risk belirgin şekilde artar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Parmak arası mantar aslında ayak mantarının bir türüdür. Daha geniş bilgi için <LocalizedLink to="/blog/ayak-mantari-nedir" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı nedir</LocalizedLink> içeriğine göz atabilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* Parmak Arası Yara */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Parmak Arası Yara Mantar mı? Nasıl Ayırt Edilir?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Parmak arasında oluşan her yara mantar değildir. Ancak çoğu kişi bu noktada kararsız kalır.
            </p>

            <h3 className="text-xl font-bold text-gray-900 mb-4">Mantar ile tahriş farkı (karşılaştırma tablosu)</h3>

            {/* Comparison Table - Google snippet friendly */}
            <div className="overflow-x-auto mb-6 rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left bg-white">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-sm font-bold text-gray-900 border-b border-gray-200">Belirti</th>
                    <th className="px-4 py-3 text-sm font-bold text-red-600 border-b border-gray-200">Parmak Arası Mantar</th>
                    <th className="px-4 py-3 text-sm font-bold text-gray-700 border-b border-gray-200">Tahriş</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">Kaşıntı</td>
                    <td className="px-4 py-3 text-gray-700">Belirgin, özellikle terleme sonrası artar</td>
                    <td className="px-4 py-3 text-gray-700">Genellikle yoktur veya çok hafif</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">Koku</td>
                    <td className="px-4 py-3 text-gray-700">Eşlik eder, yıkamaya rağmen geçmez</td>
                    <td className="px-4 py-3 text-gray-700">Yoktur</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">Görünüm</td>
                    <td className="px-4 py-3 text-gray-700">Beyazlaşma, pullanma, kızarıklık</td>
                    <td className="px-4 py-3 text-gray-700">Kızarıklık, hafif şişme</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">Ağrı</td>
                    <td className="px-4 py-3 text-gray-700">İkinci planda, batma hissi olabilir</td>
                    <td className="px-4 py-3 text-gray-700">Ön planda, dokunmakla artar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">Yayılım</td>
                    <td className="px-4 py-3 text-gray-700">Diğer parmak aralarına ve tırnağa yayılır</td>
                    <td className="px-4 py-3 text-gray-700">Sadece tahriş olan bölgede kalır</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-900 font-semibold">İyileşme süresi</td>
                    <td className="px-4 py-3 text-gray-700">Antifungal olmadan geçmez, 1–3 hafta</td>
                    <td className="px-4 py-3 text-gray-700">Neden ortadan kalkınca kendiliğinden geçer</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl mb-8">
              <p className="text-lg text-yellow-800">
                👉 Eğer <strong>kaşıntı + koku</strong> birlikteyse büyük ihtimalle mantardır. En sık gördüğümüz durum: kişi aylarca "tahriş" sanarak nemlendirici sürer, oysa altta yatan neden ilerleyen bir mantar enfeksiyonudur. Şüphede kaldığınızda <LocalizedLink to="/blog/ayak-mantari-mi-egzama-mi" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı mı egzama mı</LocalizedLink> rehberimiz ayırıcı belirtileri detaylı şekilde anlatıyor.
              </p>
            </div>

            {/* Klinik Örnek Vaka */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-6 bg-red-600 rounded"></span>
                Klinik Örnek Vaka: İnterdigital Tinea Pedis
              </h3>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <img
                  src="/images/blog/parmak-arasi-mantar-nasil-gecer/klinik-ornek-vaka-interdigital-tinea-pedis.webp"
                  alt="Klinik Örnek Vaka- İnterdigital tinea pedis Parmak arasında mantar; beyazlaşmış, yumuşamış (macerasyon), çatlakyarık ve iltihaplı doku görünüyor."
                  title="Klinik Örnek Vaka - İnterdigital tinea pedis: beyazlaşma, macerasyon, çatlak ve iltihaplı doku"
                  loading="lazy"
                  className="w-full object-cover"
                />
                <figcaption className="bg-gray-50 px-4 py-3 text-sm text-gray-600 italic border-t border-gray-200">
                  <strong className="not-italic text-gray-800">Klinik Örnek Vaka – İnterdigital Tinea Pedis:</strong> Parmak arasında mantar; beyazlaşmış, yumuşamış (macerasyon), çatlak-yarık ve iltihaplı doku görünüyor. Bu tablo, parmak arası mantarın ileri evre tipik bulgularını birlikte gösterir.
                </figcaption>
              </div>
            </div>

            {/* Kaşıntı görseli */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src="/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-kasinti.webp"
                alt="Parmak arası mantar kaşıntısı - 4. ve 5. parmak arasında en sık görülen belirti"
                title="Parmak arası kaşıntı mantarın en belirgin erken belirtisidir"
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-gray-500 italic mb-6">
              Kaşıntı ve yanma hissi, parmak arası mantarın en sık görülen ilk belirtileridir.
            </p>
          </div>
        </div>
      </section>

      {/* Ortam Problemi */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Parmak Arası Mantarın Asıl Nedeni: Ortam Problemi
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg text-gray-800">
                👉 Sorun mantardan çok <strong>ortamdır</strong>.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Klinik gözlemler ve vaka deneyimleri şunu gösteriyor:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Ayağı sürekli nemli kalan kişilerde mantar <strong>tekrar eder</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Sadece krem kullanan kişilerde <strong>iyileşme gecikir</strong></p>
              </div>
            </div>

            <p className="text-xl text-gray-900 font-semibold text-center py-4">
              👉 Nem varsa mantar yaşamaya devam eder.
            </p>
          </div>
        </div>
      </section>

      {/* Gerçekten İşe Yarayan Yöntemler */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Parmak Arası Mantar Nasıl Geçer? (Gerçekten İşe Yarayan Yöntemler)
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Aşağıdaki 5 adım parmak arası mantarın hem geçmesini hem de tekrar etmemesini sağlayan temel yapı taşlarıdır.
            </p>

            {/* Yöntem 1 */}
            <Card className="border-red-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ayağı Kuru Tutmak (Tedavinin %50'si)</h3>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        Duş sonrası parmak araları tek tek kurulanmalı
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        Özellikle 4–5. parmak arası kontrol edilmeli
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                        Gerekirse düşük ayarda saç kurutma makinesi kullanılmalı
                      </p>
                    </div>
                    <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r-xl mt-4">
                      <p className="text-gray-800">
                        👉 Ayak kuru değilse, hiçbir parmak arası mantar kremi tek başına yeterli olmaz.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yöntem 2 */}
            <Card className="border-orange-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Parmak Arası Mantar Kremi Nasıl Kullanılmalı?</h3>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        Günde 1-2 kez düzenli uygulanmalı
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        Sadece görünen bölge değil çevresine de sürülmeli
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                        Belirti geçse bile en az 1 hafta devam edilmeli
                      </p>
                    </div>
                    <p className="text-orange-700 font-semibold mt-4">👉 Erken bırakmak = tekrar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yöntem görseli */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <img
                src="/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-nasil-gecer.webp"
                alt="Parmak arası mantar nasıl geçer - evde bakım ve antifungal kullanım rehberi"
                title="Parmak arası mantarın geçmesi için evde uygulanabilecek bakım adımları"
                loading="lazy"
                className="w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-2 italic px-4 pb-2">
                Düzenli antifungal kullanımı ayağı kuru tutma pratiği ile birleştirildiğinde mantar 1–3 haftada kontrol altına alınır.
              </p>
            </div>

            {/* Yöntem 3 */}
            <Card className="border-yellow-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ayak Mantarı Kaşıntı Nasıl Geçer?</h3>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                        Bölge kuru tutulmalı
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                        Antifungal ürünler düzenli kullanılmalı
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                        Kaşımaktan kaçınılmalı
                      </p>
                    </div>
                    <p className="text-gray-700 mt-4">
                      👉 Daha detaylı evde bakım yöntemleri için <LocalizedLink to="/blog/ayak-mantari-evde-nasil-gecer" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı evde nasıl geçer</LocalizedLink> rehberine göz atabilirsiniz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yöntem 4 */}
            <Card className="border-green-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Ayak Kokusu Mantar Belirtisi mi?</h3>
                    <p className="text-gray-700 mb-3">Evet, çoğu zaman olabilir.</p>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        Sürekli koku varsa
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        Yıkamaya rağmen geçmiyorsa
                      </p>
                    </div>
                    <p className="text-gray-700 mt-3">
                      👉 Bu durum genellikle <strong>mantar + bakteri birleşimidir</strong>.
                    </p>
                    <p className="text-gray-700 mt-2">
                      👉 <LocalizedLink to="/blog/ayak-kokusu-nedenleri" className="text-red-600 hover:text-red-700 font-semibold">Ayak kokusunun nedenleri</LocalizedLink> hakkında daha detaylı bilgi için ilgili rehberimizi inceleyebilirsiniz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Yöntem 5 */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-xl">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">En Sık Yapılan Hatalar (Klinik Gözlemlere Göre)</h3>
                    <p className="text-gray-700 mb-3">
                      Çoğu kişi tam burada hata yapıyor. Aşağıdaki davranışlar yüzünden mantar aylarca geçmiyor:
                    </p>
                    <div className="space-y-2">
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        Sadece krem sürüp diğer önlemleri almamak
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        Ayağı nemli bırakmak
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        Aynı ayakkabıyı sürekli giymek
                      </p>
                      <p className="flex items-start gap-2 text-gray-700">
                        <AlertTriangle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                        Tedaviyi erken kesmek
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mt-4">
                      <p className="text-gray-700 italic">En sık duyulan cümle:</p>
                      <p className="text-gray-900 font-semibold mt-1">"Geçti sandım ama tekrar çıktı"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Kaç Günde Geçer */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Parmak Arası Mantar Kaç Günde Geçer?
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-green-200">
                <p className="text-sm text-green-600 font-semibold mb-1">Hafif vakalar</p>
                <p className="text-2xl font-bold text-gray-900">7–10 gün</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-orange-200">
                <p className="text-sm text-orange-600 font-semibold mb-1">Orta seviye</p>
                <p className="text-2xl font-bold text-gray-900">2–3 hafta</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm border border-red-200">
                <p className="text-sm text-red-600 font-semibold mb-1">İleri vakalar</p>
                <p className="text-2xl font-bold text-gray-900">3–4 hafta</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              👉 Yanlış bakım yapılırsa aylarca sürebilir.
            </p>
          </div>
        </div>
      </section>

      {/* Tekrar Etmemesi İçin */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tekrar Etmemesi İçin Ne Yapılmalı?
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <p className="text-gray-700 pt-2"><strong>Günlük çorap değişimi</strong> – pamuklu, nefes alabilen çoraplar tercih edin</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <p className="text-gray-700 pt-2"><strong>Ayakkabı havalandırma</strong> – aynı ayakkabıyı üst üste günler giymeyin</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <p className="text-gray-700 pt-2"><strong>Terleme kontrolü</strong> – aşırı terleyen ayaklarda antiperspiran veya pudra</p>
              </div>
              <div className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <p className="text-gray-700 pt-2"><strong>Ayakları düzenli kurutma</strong> – her duş sonrası parmak aralarını tek tek kurulayın</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-lg text-yellow-800">
                👉 Özellikle yaz aylarında risk ciddi şekilde artar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ne Zaman Profesyonel */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ne Zaman Profesyonel Destek Alınmalı?
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700">2–3 haftada <strong>geçmiyorsa</strong></p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700"><strong>Yayılıyorsa</strong></p>
              </div>
              <div className="bg-white rounded-xl p-5 text-center shadow-sm border border-orange-200">
                <AlertTriangle className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-gray-700">Tırnağa <strong>bulaştıysa</strong></p>
              </div>
            </div>

            {/* El parmak mantarı görseli */}
            <div className="rounded-2xl overflow-hidden shadow-lg mb-4">
              <img
                src="/images/blog/parmak-arasi-mantar-nasil-gecer/el-parmak-mantari.webp"
                alt="El parmak mantarı - parmak araları mantar enfeksiyonunun yayılım örneği"
                title="Mantar enfeksiyonu tedavi edilmediğinde diğer parmak aralarına yayılabilir"
                loading="lazy"
                className="w-full object-cover"
              />
              <p className="text-center text-sm text-gray-500 mt-2 italic px-4 pb-2">
                Mantar enfeksiyonu ihmal edildiğinde diğer parmak aralarına ve tırnaklara yayılabilir. Bu sürecin nasıl ilerlediğini merak edenler için <LocalizedLink to="/blog/parmak-arasi-mantar-tirnaga-yayilir-mi" className="not-italic text-red-600 hover:text-red-700 font-semibold">parmak arası mantar tırnağa yayılır mı</LocalizedLink> yazımız faydalı olabilir.
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
              <p className="text-lg text-gray-800">
                👉 Bu durumlarda <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold">medikal ayak bakımı</LocalizedLink> gerekebilir.
              </p>
            </div>

            <div className="mt-4 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-lg text-gray-800">
                ℹ️ Aynı evde yaşayanlar, ortak havlu-terlik kullanan kişiler ve spor salonu / havuz kullananlar için bulaşma dinamiği farklıdır. Ayrıntılı bulaşma yolları için <LocalizedLink to="/blog/tirnak-mantari-bulasici-mi" className="text-red-600 hover:text-red-700 font-semibold">tırnak mantarı bulaşıcı mı?</LocalizedLink> yazımıza bakmanızı öneririz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sonuç */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sonuç: Doğru Bakım Olmadan Geçmez
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Parmak arası mantar tedavisinde en büyük hata sadece krem kullanmaktır. <strong>Çoğu kişi burada hata yapıyor</strong>: belirti azalır azalmaz krem kesiliyor, ardından mantar birkaç hafta içinde tekrar çıkıyor.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Klinik olarak, sadece krem kullanan kişilerde tekrar oranı oldukça yüksektir. Düzenli bakım ile birlikte <LocalizedLink to="/urun/foot-nail-care-serum" className="text-red-600 hover:text-red-700 font-semibold">antifungal içerikli bakım ürünleri</LocalizedLink> kullanmak, hem iyileşme süresini kısaltır hem de tekrar riskini ciddi şekilde azaltır.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              👉 Özellikle düzenli bakım alışkanlığı oluşturmak ve uygun ürünlerle desteklemek, hem tedavi sürecini hızlandırır hem de tekrar riskini minimuma indirir. Ayak kokusu eşlik ediyorsa <LocalizedLink to="/blog/ayak-kokusu-nedenleri" className="text-red-600 hover:text-red-700 font-semibold">ayak kokusu nedenleri</LocalizedLink> rehberimizi, tekrarlayan vakalar için ise <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="text-red-600 hover:text-red-700 font-semibold">ayak mantarı neden tekrarlar</LocalizedLink> yazımızı incelemenizi öneririz.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              👉 Eğer mantar tekrarlıyor veya kısa sürede geçmiyorsa, <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="text-red-600 hover:text-red-700 font-semibold">medikal ayak bakımı</LocalizedLink> ile destek almak süreci ciddi şekilde hızlandırabilir.
            </p>

            {/* Ürün Önerisi */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-2 border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Parmak Arası Mantar İçin Bakım Önerileri
              </h3>

              <p className="text-lg text-gray-700 mb-6">
                Düzenli ayak bakımı, mantarın tekrarlamasını önlemeye yardımcı olabilir:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">Ayak ve Tırnak Bakım Serumu</p>
                  <p className="text-sm text-gray-600">Tea tree oil içerikli antifungal destek</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-white hover:bg-gray-50 rounded-xl p-4 transition-colors border border-red-200">
                  <p className="font-bold text-red-700 mb-1">Ayak Temizleme Köpüğü</p>
                  <p className="text-sm text-gray-600">Günlük hijyen ve koku kontrolü</p>
                </LocalizedLink>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mt-6">
              👉 Parmak arası mantar, doğru bakım ve düzenli uygulama ile büyük oranda kontrol altına alınabilen bir sorundur.
            </p>

            {/* Uzman Notu / Disclaimer */}
            <div className="mt-8 bg-gray-50 border-l-4 border-gray-400 p-5 rounded-r-xl">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                <strong className="not-italic text-gray-800">Uzman notu:</strong> Bu içerik, podoloji alanında aktif olarak hasta deneyimi bulunan Podolog Serdar Ceylan'ın klinik gözlemleri doğrultusunda hazırlanmıştır. Bilgilendirme amaçlıdır, tanı ve tedavi yerine geçmez.
              </p>
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
                      data-testid={`faq-toggle-${index}`}
                    >
                      <h3 className="text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    <div
                      className={`px-6 pb-6 pt-0 ${openFaq === index ? 'block' : 'hidden'}`}
                    >
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* SEO: Tüm FAQ cevapları her zaman DOM'da, görsel olarak gizli */}
            <div className="sr-only" aria-hidden="true">
              {faqs.map((faq, index) => (
                <div key={`seo-${index}`}>
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
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
              Parmak arası mantarın tekrarlamaması için düzenli takip şarttır. Ayaklarınızdaki değişimleri gözlemleyin.
            </p>
            <LocalizedLink to="/ayak-analizi">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-ayak-analizi">
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

            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">İlgili Konular</p>
              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/blog/ayak-mantari-baslangici-nasil-anlasilir" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Başlangıcı Nasıl Anlaşılır?</p>
                  <p className="text-sm text-gray-600">Erken belirtileri tanıyın</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/parmak-arasi-mantar-tirnaga-yayilir-mi" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Parmak Arası Mantar Tırnağa Yayılır mı?</p>
                  <p className="text-sm text-gray-600">İlk belirtiler ve korunma yolları</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/ayak-mantari-evde-nasil-gecer" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Evde Nasıl Geçer?</p>
                  <p className="text-sm text-gray-600">Evde bakım rehberi</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/ayak-mantari-neden-tekrarlar" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Mantarı Neden Tekrarlar?</p>
                  <p className="text-sm text-gray-600">Tekrarlamanın önüne geçin</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/ayak-kokusu-nedenleri" className="block bg-gray-50 hover:bg-gray-100 rounded-xl p-5 transition-colors">
                  <p className="font-semibold text-gray-900 mb-1">Ayak Kokusu Nedenleri</p>
                  <p className="text-sm text-gray-600">Koku nasıl önlenir?</p>
                </LocalizedLink>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">Önerilen Ürünler</p>
              <div className="grid md:grid-cols-3 gap-4">
                <LocalizedLink to="/urun/foot-nail-care-serum" className="block bg-red-50 hover:bg-red-100 border border-red-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-red-700 mb-1">Tırnak Bakım Serumu</p>
                  <p className="text-xs text-red-600">Antifungal destek</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/temizleme-kopugu" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">Temizleme Köpüğü</p>
                  <p className="text-xs text-gray-600">Günlük hijyen</p>
                </LocalizedLink>
                <LocalizedLink to="/urun/ureli-krem" className="block bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl p-4 transition-colors text-center">
                  <p className="font-semibold text-gray-900 mb-1">%15 Üreli Krem</p>
                  <p className="text-xs text-gray-600">Kuru ve çatlak ciltler için bakım</p>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogParmakArasiMantar;
