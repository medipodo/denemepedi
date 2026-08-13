import React from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, AlertTriangle, ChevronDown, ChevronUp, Share2, Footprints, Activity } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

const BlogNasirNedenTekrarEder = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  const faqs = [
    {
      question: "Nasır neden tekrar çıkar?",
      answer: "Nasır, cildin sürekli basınç ve sürtünmeye karşı geliştirdiği doğal bir savunma mekanizmasıdır. Basınca neden olan etken devam ettiği sürece aynı bölgede yeniden oluşabilir."
    },
    {
      question: "Aynı yerde sürekli nasır çıkması normal midir?",
      answer: "Aynı noktada tekrarlayan nasırlar, o bölgenin yürüyüş sırasında sürekli fazla yük aldığını gösterebilir. Bu durumda yalnızca nasırın temizlenmesi yeterli olmayabilir ve altta yatan nedenlerin değerlendirilmesi gerekebilir."
    },
    {
      question: "Basış bozukluğu nasıra neden olur mu?",
      answer: "Evet. Ayak tabanındaki yük dağılımının dengesiz olması bazı bölgelerde aşırı basınç oluşmasına neden olabilir. Bu durum zaman içerisinde nasır gelişimine zemin hazırlayabilir."
    },
    {
      question: "Nasır kökü tamamen yok edilir mi?",
      answer: "Halk arasında \"nasır kökü\" olarak ifade edilen yapı, çoğu zaman basınç altında kalan sertleşmiş deri tabakasıdır. Eğer nasıra neden olan mekanik baskı devam ederse, aynı bölgede yeniden oluşma ihtimali bulunur."
    },
    {
      question: "Kişiye özel tabanlık nasır oluşumunu azaltabilir mi?",
      answer: "Basıncın belirli noktalarda yoğunlaştığı kişilerde, uzman değerlendirmesi sonrasında planlanan kişiye özel tabanlıklar yük dağılımını dengelemeye yardımcı olabilir. Bu sayede bazı kişilerde tekrarlayan nasır oluşumu azaltılabilir."
    },
    {
      question: "Nasır bantları nasırı tamamen geçirir mi?",
      answer: "Nasır bantları yüzeysel rahatlama sağlayabilir. Ancak nasırın oluşmasına neden olan basınç devam ettiği sürece problemin tekrar etme ihtimali bulunmaktadır."
    },
    {
      question: "Tekrarlayan nasırlar için hangi bölüme başvurulmalıdır?",
      answer: "Tekrarlayan nasırlarda dermatoloji uzmanı, ortopedi uzmanı veya podolojik değerlendirme yapan sağlık profesyonelleri tarafından ayak yapısının ve basış düzeninin incelenmesi faydalı olabilir."
    }
  ];

  return (
    <div className="min-h-screen bg-white" data-testid="blog-nasir-neden-tekrar-eder">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir | PediZone</title>
        <meta name="description" content="Nasırınız sürekli aynı yerde mi çıkıyor? Tekrarlayan nasırların altında ayak basış bozukluğu ve dengesiz basınç dağılımı olabilir. Nedenleri ve çözüm yollarını öğrenin." />
        <meta name="keywords" content="nasır neden tekrar eder, tekrarlayan nasır, ayak basış bozukluğu, nasır kökü, kişiye özel tabanlık, ayak basış analizi, nasır bantları, basınç dağılımı" />
        <meta name="author" content="Ortotist-Prostetist Podolog Pelin Yarbı" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pedizone.com/blog/nasir-neden-surekli-tekrar-eder" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://pedizone.com/blog/nasir-neden-surekli-tekrar-eder" />
        <meta property="og:title" content="Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir" />
        <meta property="og:description" content="Nasırınız sürekli aynı yerde mi çıkıyor? Tekrarlayan nasırların altında ayak basış bozukluğu ve dengesiz basınç dağılımı olabilir." />
        <meta property="og:image" content="https://pedizone.com/images/blog/nasir-neden-surekli-tekrar-eder/nasir-neden-surekli-tekrar-eder.webp" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="PediZone" />
        <meta property="article:published_time" content="2026-06-12" />
        <meta property="article:modified_time" content="2026-08-13" />
        <meta property="article:author" content="Ortotist-Prostetist Podolog Pelin Yarbı" />
        <meta property="article:section" content="Ayak Sağlığı" />
        <meta property="article:tag" content="Nasır" />
        <meta property="article:tag" content="Ayak Basış Bozukluğu" />
        <meta property="article:tag" content="Tabanlık" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://pedizone.com/blog/nasir-neden-surekli-tekrar-eder" />
        <meta name="twitter:title" content="Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir" />
        <meta name="twitter:description" content="Tekrarlayan nasırların altında ayak basış bozukluğu ve dengesiz basınç dağılımı olabilir. Nedenleri ve çözüm yollarını öğrenin." />
        <meta name="twitter:image" content="https://pedizone.com/images/blog/nasir-neden-surekli-tekrar-eder/nasir-neden-surekli-tekrar-eder.webp" />

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir",
            "description": "Nasırınız sürekli aynı yerde mi çıkıyor? Tekrarlayan nasırların altında ayak basış bozukluğu ve dengesiz basınç dağılımı olabilir. Nedenleri ve çözüm yollarını öğrenin.",
            "image": {
              "@type": "ImageObject",
              "url": "https://pedizone.com/images/blog/nasir-neden-surekli-tekrar-eder/nasir-neden-surekli-tekrar-eder.webp",
              "width": 1000,
              "height": 600
            },
            "author": {
              "@type": "Person",
              "name": "Ortotist-Prostetist Podolog Pelin Yarbı",
              "jobTitle": "Ortotist-Prostetist Podolog",
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
            "datePublished": "2026-06-12",
            "dateModified": "2026-08-13",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://pedizone.com/blog/nasir-neden-surekli-tekrar-eder"
            },
            "articleSection": "Ayak Sağlığı",
            "keywords": "nasır neden tekrar eder, tekrarlayan nasır, ayak basış bozukluğu, kişiye özel tabanlık, ayak basış analizi"
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
                "name": "Nasır Neden Sürekli Tekrar Eder?",
                "item": "https://pedizone.com/blog/nasir-neden-surekli-tekrar-eder"
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
              "name": "Kallus (Nasır)",
              "alternateName": "Tekrarlayan Nasır"
            },
            "lastReviewed": "2026-06-12",
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
              <span className="text-gray-700 font-medium truncate max-w-[200px]">Nasır Neden Sürekli Tekrar Eder?</span>
            </nav>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-0 mb-3">
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Nasır</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Ayak Basış Bozukluğu</span>
              <span className="bg-red-50 text-red-600 border border-red-200 font-medium px-3 py-1 rounded-md text-sm">Tabanlık</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-gray-900 mt-0 mb-2 leading-[1.2]">
              Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir
            </h1>

            {/* Meta Info Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-gray-100 mb-0">
              <div className="flex flex-wrap items-center gap-5 text-gray-600">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-3 shadow-sm">
                    <User size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900 block text-sm">Ortotist-Prostetist Podolog Pelin Yarbı</span>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar size={16} className="mr-2 text-red-500" />
                  <span>12 Haziran 2026</span>
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
                      title: 'Nasır Neden Sürekli Tekrar Eder?',
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

      {/* GÖRSEL 1: H1 başlığının hemen altında */}
      <section className="py-2 md:py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <figure className="mt-6 mb-8 text-center">
              <img
                src="/images/blog/nasir-neden-surekli-tekrar-eder/nasir-neden-surekli-tekrar-eder.webp"
                alt="Sürekli tekrar eden nasır ve ayak tabanındaki basınç noktaları"
                title="Nasır neden sürekli tekrar eder?"
                width={1000}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[900px] h-auto mx-auto rounded-2xl shadow-lg"
                data-testid="blog-image-1"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                Sürekli tekrar eden nasırlar çoğu zaman ayak tabanındaki basınç dağılımıyla ilişkilidir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Giriş */}
      <section className="py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasırını düzenli olarak temizlettiği hâlde aynı bölgede tekrar tekrar nasır oluşan birçok kişi, sorunun yalnızca ciltte olduğunu düşünür. Oysa nasır, cildin sürekli basınç ve sürtünmeye karşı geliştirdiği doğal bir savunma mekanizmasıdır. Basınca neden olan etken ortadan kalkmadığı sürece, nasır aynı noktada yeniden oluşma eğilimindedir.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Özellikle aynı bölgede ısrarla tekrar eden nasırlarda, ayak tabanındaki yük dağılımının ve basış alışkanlıklarının değerlendirilmesi önem taşıyabilir. Bu yazıda tekrarlayan nasırların olası nedenlerini, nasır bölgelerinin ne anlama gelebileceğini ve hangi durumlarda podolojik değerlendirme gerekebileceğini ele alıyoruz.
            </p>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
              <p className="text-lg text-gray-800">
                👉 Tekrarlayan nasırlarda asıl soru <strong>"nasır nasıl temizlenir?"</strong> değil, <strong>"bu bölgeye neden sürekli fazla yük biniyor?"</strong> olmalıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hangi Bölgede Çıkan Nasır Ne Anlama Gelebilir? */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hangi Bölgede Çıkan Nasır Ne Anlama Gelebilir?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasırın oluştuğu bölge, ayağın hangi kısmının yürüyüş sırasında daha fazla basınca maruz kaldığı hakkında fikir verebilir. Elbette kesin değerlendirme için uzman muayenesi gerekir, ancak bazı bölgelerde tekrar eden nasırlar belirli basış alışkanlıklarıyla ilişkili olabilir.
            </p>

            <div className="space-y-6 mb-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-red-600" />
                  Başparmak kenarında oluşan nasırlar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Başparmak çevresinde gelişen nasırlar, yürüyüş sırasında ayağın iç kısmına fazla yük binmesiyle ilişkili olabilir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-red-600" />
                  Tarak kemiği altında oluşan nasırlar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Ayak ön kısmına aşırı yük aktarılması, özellikle tarak kemiklerinin altında nasır oluşumuna neden olabilir. Bu bölgedeki tekrarlayan nasırlar, basınç dağılımının değerlendirilmesini gerektirebilir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-red-600" />
                  Topuk bölgesindeki nasırlar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Uzun süre ayakta kalma, sert zeminlerde çalışma veya uygun olmayan ayakkabılar topuk bölgesinde kalınlaşmaya neden olabilir.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Footprints className="w-5 h-5 text-red-600" />
                  Küçük parmak dış yüzeyindeki nasırlar
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Dar burunlu ayakkabılar veya ayak yapısına bağlı basınç artışı, küçük parmak çevresinde tekrarlayan nasırlara yol açabilir.
                </p>
              </div>
            </div>

            {/* GÖRSEL 2: Bölüm sonunda */}
            <figure className="mt-10 mb-2 text-center">
              <img
                src="/images/blog/nasir-neden-surekli-tekrar-eder/nasir-bolgeleri-ne-anlama-gelir.webp"
                alt="Başparmak kenarı, tarak kemiği altı, topuk ve küçük parmak bölgesindeki nasırların yerleşimi"
                title="Nasır bölgeleri"
                width={1024}
                height={1536}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[520px] h-auto mx-auto rounded-2xl shadow-lg"
                data-testid="blog-image-2"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                Nasırın oluştuğu bölge, ayağın hangi kısmının daha fazla yük altında olduğunu gösterebilir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Kimlerde Tekrarlayan Nasır Daha Sık Görülür? */}
      <section className="py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Kimlerde Tekrarlayan Nasır Daha Sık Görülür?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bazı kişilerde nasır oluşumu daha sık görülebilir. Özellikle:
            </p>

            <div className="grid md:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Düz tabanlığı olanlarda</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Çukur taban yapısına sahip kişilerde</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Gün içinde uzun süre ayakta çalışanlarda</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Fazla kiloya bağlı ayak tabanı yükü artan kişilerde</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Ayağa uygun olmayan ayakkabı kullananlarda</p>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <p className="text-gray-700">Sporcularda ve yoğun yürüyüş yapan kişilerde</p>
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              tekrarlayan nasır oluşumu daha sık görülebilir.
            </p>

            {/* GÖRSEL 3: Bölüm sonunda */}
            <figure className="mt-10 mb-2 text-center">
              <img
                src="/images/blog/nasir-neden-surekli-tekrar-eder/tekrarlayan-nasir-risk-faktorleri.webp"
                alt="Tekrarlayan nasır oluşumu için risk faktörleri"
                title="Tekrarlayan nasır risk faktörleri"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[900px] h-auto mx-auto rounded-2xl shadow-lg"
                data-testid="blog-image-3"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                Bazı ayak yapıları ve günlük alışkanlıklar nasır oluşumunu kolaylaştırabilir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Ne Zaman Podolojik Değerlendirme Gerekebilir? */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ne Zaman Podolojik Değerlendirme Gerekebilir?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasırın düzenli temizlenmesine rağmen aynı bölgede tekrar ortaya çıkması, yürürken ağrı oluşması veya günlük yaşamı etkilemeye başlaması durumunda ayak basış yapısının değerlendirilmesi faydalı olabilir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">Özellikle:</p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Aynı bölgede <strong>sürekli nasır oluşuyorsa</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Yürürken <strong>ağrı hissediliyorsa</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Ayakkabılar <strong>tek taraflı aşınıyorsa</strong></p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Ayak tabanında <strong>yanma veya baskı hissi</strong> oluşuyorsa</p>
              </div>
              <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200">
                <AlertTriangle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700"><strong>Topuk, diz veya bel ağrıları</strong> eşlik ediyorsa</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl">
              <p className="text-lg text-gray-800">
                altta yatan nedenlerin araştırılması uzun vadede daha kalıcı çözümler sağlayabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ayak Basış Analizi Neden Önemlidir? */}
      <section className="py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ayak Basış Analizi Neden Önemlidir?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Ayak basış analizi, ayağın yere temas ettiği bölgelerdeki basınç dağılımının ölçülmesine yardımcı olan bir değerlendirme yöntemidir. Bu analiz sırasında elde edilen plantar basınç haritası, ayak tabanının hangi bölgelerinin yürüyüş sırasında fazla yük aldığını görselleştirebilir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Tekrarlayan nasırlarda basış analizi, nasırın oluştuğu bölge ile basınç yoğunlaşması arasındaki ilişkinin değerlendirilmesine katkı sağlayabilir. Böylece yalnızca nasırın görünen kısmı değil, oluşumuna zemin hazırlayan mekanik faktörler de ele alınabilir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              Analiz sonuçları doğrultusunda uygun ayakkabı seçimi, koruyucu uygulamalar veya gerekli görülen durumlarda kişiye özel tabanlık planlaması gibi yaklaşımlar değerlendirilebilir.
            </p>

            {/* GÖRSEL 4: Makalenin en önemli görseli - ekstra boşluklu */}
            <figure className="mt-14 mb-10 md:mt-16 md:mb-12 text-center">
              <img
                src="/images/blog/nasir-neden-surekli-tekrar-eder/ayak-basis-analizi-basinc-haritasi.webp"
                alt="Ayak basış analizi sırasında elde edilen plantar basınç haritası"
                title="Ayak basınç haritası"
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[900px] h-auto mx-auto rounded-2xl shadow-xl"
                data-testid="blog-image-4"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                Ayak basış analizi, basıncın yoğunlaştığı bölgelerin belirlenmesine yardımcı olur.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Evde Kullanılan Nasır Bantları Kalıcı Çözüm Sağlar mı? */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Evde Kullanılan Nasır Bantları Kalıcı Çözüm Sağlar mı?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Nasır bantları ve yüzeysel uygulamalar, kalınlaşmış derinin geçici olarak azalmasına yardımcı olabilir. Ancak nasır oluşumuna neden olan basınç devam ettiği sürece aynı bölgede yeniden nasır gelişebilir.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
              <p className="text-lg text-yellow-800">
                👉 Bu nedenle tekrarlayan nasırlarda yalnızca görünen tabakayı ortadan kaldırmak yerine, <strong>oluşum nedeninin değerlendirilmesi</strong> önem taşır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Her Tekrarlayan Nasır İçin Kişiye Özel Tabanlık Gerekli midir? */}
      <section className="py-8 md:py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Her Tekrarlayan Nasır İçin Kişiye Özel Tabanlık Gerekli midir?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
              <p className="text-lg text-gray-800">
                <strong>Hayır.</strong> Her nasır problemi kişiye özel tabanlık gerektirmez.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Öncelikle ayak yapısının, yürüyüş paterninin ve basınç dağılımının değerlendirilmesi gerekir. Bazı kişilerde uygun ayakkabı seçimi ve koruyucu uygulamalar yeterli olabilirken, bazı durumlarda kişiye özel tabanlık planlanması önerilebilir.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-2">
              Bu nedenle uygulanacak yaklaşım kişiden kişiye farklılık gösterebilir.
            </p>

            {/* GÖRSEL 5: Bölüm sonunda */}
            <figure className="mt-10 mb-2 text-center">
              <img
                src="/images/blog/nasir-neden-surekli-tekrar-eder/kisiye-ozel-tabanlik-basinc-dagilimi.webp"
                alt="Kişiye özel tabanlık öncesi ve sonrası yük dağılımı örneği"
                title="Kişiye özel tabanlık örneği"
                width={1672}
                height={941}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[900px] h-auto mx-auto rounded-2xl shadow-lg"
                data-testid="blog-image-5"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
                Kişiye özel tabanlıklar bazı kişilerde yük dağılımının daha dengeli hale gelmesine yardımcı olabilir.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Corn Freze ile Nasır Temizliği Örnek Uygulama */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 rounded-2xl border-2 border-red-200 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Corn Freze ile Nasır Alma İşlemi (Örnek Uygulama)
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Podolojik kliniklerde inatçı ve derinleşmiş nasırların temizlenmesinde özel uçlara sahip <strong>corn freze (nasır frezesi)</strong> cihazları kullanılır. Evde jilet veya kesici aletlerle yapılan bilinçsiz müdahaleler sağlıklı dokuya zarar verirken, profesyonel freze uçları ile yapılan işlem nasırın merkezindeki sertleşmiş çekirdeği güvenle ve acısız şekilde uzaklaştırır.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Aşağıdaki örnek klinik uygulamada, corn freze yardımıyla nasırlı dokunun nasıl hassasiyet yaratılmadan temizlendiği ve cildin pürüzsüzleştirildiği net bir şekilde görülmektedir.
              </p>

              {/* Reels Tarzı Video */}
              <div className="my-6 flex flex-col items-center">
                <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-xl border border-red-200 bg-black">
                  <video 
                    src="/blog-images/corn-callus/content/nasir-temizligi-corn-freze.webm" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    className="w-full h-auto object-cover block"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-3 flex items-center justify-center">
                  <span className="w-8 h-px bg-red-300 mr-3"></span>
                  Klinik Uygulama: Corn Freze ile Nasır Temizliği
                  <span className="w-8 h-px bg-red-300 ml-3"></span>
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İlgili Yazılar */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              İlgili Yazılar
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nasır hakkında daha fazla bilgi edinmek isterseniz aşağıdaki içerikler de faydalı olabilir:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <LocalizedLink to="/blog/nasir-nedir-evde-gecer-mi" className="block bg-white hover:bg-gray-100 rounded-xl p-5 transition-colors border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Nasır Nedir? Evde Geçer mi?</p>
                <p className="text-sm text-gray-600">Nasır oluşumu ve bakım rehberi</p>
              </LocalizedLink>
              <LocalizedLink to="/blog/nasir-sigil-farklari" className="block bg-white hover:bg-gray-100 rounded-xl p-5 transition-colors border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Nasır ve Siğil Arasındaki Farklar Nelerdir?</p>
                <p className="text-sm text-gray-600">Doğru ayırt etme yöntemleri</p>
              </LocalizedLink>
              <LocalizedLink to="/blog/batik-tirnak-tekrarlar-mi" className="block bg-white hover:bg-gray-100 rounded-xl p-5 transition-colors border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Batık Tırnak Tekrarlar mı? 7 Önleme Önerisi</p>
                <p className="text-sm text-gray-600">Tekrarlayan ayak problemlerinde ayakkabı ve baskı ilişkisi</p>
              </LocalizedLink>
              <LocalizedLink to="/blog/medikal-ayak-bakimi-nedir" className="block bg-white hover:bg-gray-100 rounded-xl p-5 transition-colors border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Medikal Ayak Bakımı Nedir?</p>
                <p className="text-sm text-gray-600">Profesyonel bakım süreci</p>
              </LocalizedLink>
              <LocalizedLink to="/ayak-analizi" className="block bg-white hover:bg-gray-100 rounded-xl p-5 transition-colors border border-gray-200">
                <p className="font-semibold text-gray-900 mb-1">Ayak Basış Analizi Neden Önemlidir?</p>
                <p className="text-sm text-gray-600">Ücretsiz ayak analizi yapın</p>
              </LocalizedLink>
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

      {/* Sonuç */}
      <section className="py-8 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sonuç
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tekrarlayan nasırlar çoğu zaman yalnızca deri yüzeyinde görülen bir problem değildir. Özellikle aynı bölgede tekrar eden nasırlar, ayak tabanındaki basınç dağılımı ve basış alışkanlıklarıyla ilişkili olabilir. Bu nedenle yalnızca nasırı temizlemek yerine, altta yatan nedenlerin değerlendirilmesi uzun vadede daha konforlu bir yaşam için önem taşıyabilir.
            </p>

            {/* Uzman Notu / Disclaimer */}
            <div className="bg-white border-l-4 border-gray-400 p-5 rounded-r-xl">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                <strong className="not-italic text-gray-800">Uzman notu:</strong> Bu içerik, Ortotist-Prostetist Podolog Pelin Yarbı'nın mesleki bilgi ve gözlemleri doğrultusunda hazırlanmıştır. Bilgilendirme amaçlıdır, tanı ve tedavi yerine geçmez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Nasırınız Sürekli Tekrar mı Ediyor?
            </h2>
            <p className="text-lg text-red-100 mb-8">
              Ayak basış yapınızı değerlendirin; basıncın yoğunlaştığı bölgeleri keşfedin.
            </p>
            <LocalizedLink to="/ayak-analizi">
              <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold" data-testid="cta-ayak-analizi">
                Ücretsiz Ayak Analizi Yap →
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogNasirNedenTekrarEder;
