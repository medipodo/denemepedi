import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, User, CheckCircle, AlertTriangle, ShieldCheck, Footprints, Sparkles, Phone, Mail, MapPin, ChevronRight, Play, Volume2, VolumeX } from 'lucide-react';
import LocalizedLink from './LocalizedLink';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const BlogVideoPlayer = ({ src, poster, title, category }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          el.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
          setIsInView(false);
          el.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    const el = videoRef.current;
    if (!el) return;
    if (isPlaying) {
      el.pause();
      setIsPlaying(false);
    } else {
      el.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <div className="my-8 rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-neutral-900 max-w-md mx-auto relative group">
      <div className="relative aspect-[9/16] w-full cursor-pointer bg-black flex items-center justify-center" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={isMuted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-red-600 text-white text-xs font-semibold px-3 py-1">
            {category || 'Podoloji Uygulaması'}
          </Badge>
        </div>
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-20 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-md transition-all shadow-lg"
          aria-label="Sesi Aç/Kapat"
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        <div className="absolute bottom-4 left-4 right-16 z-10 pointer-events-none">
          <p className="text-white text-sm font-bold line-clamp-2 drop-shadow-md">{title}</p>
          <p className="text-red-400 text-xs font-medium mt-0.5">PediZone® Klinik Uygulama</p>
        </div>
      </div>
    </div>
  );
};

const BlogMedikalAyakBakimiNedir = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <article className="min-h-screen bg-white pt-28 pb-16">
      <Helmet>
        <title>Medikal Ayak Bakımı Nedir? Kimlere Uygulanır ve Nasıl Yapılır? | PediZone®</title>
        <meta name="description" content="Medikal ayak bakımı (podolojik bakım) nedir, klasik pedikürden farkı nedir? Nasır, batık tırnak ve kalınlaşmış tırnak tedavisinde medikal bakımın önemi ve aşamaları." />
        <link rel="canonical" href="https://pedizone.com/blog/medikal-ayak-bakimi-nedir" />
        
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Medikal Ayak Bakımı Nedir? Kimlere Uygulanır ve Nasıl Yapılır?" />
        <meta property="og:description" content="Medikal ayak bakımı nedir, klasik pedikürden farkı nedir? Uzman podolog eşliğinde steril koşullarda gerçekleştirilen profesyonel ayak sağlığı rehberi." />
        <meta property="og:url" content="https://pedizone.com/blog/medikal-ayak-bakimi-nedir" />
        <meta property="og:image" content="https://pedizone.com/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi-kapak.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Medikal Ayak Bakımı Nedir? Kimlere Uygulanır ve Nasıl Yapılır?",
            "description": "Medikal ayak bakımı nedir, klasik pedikürden farkı nedir? Uzman podolog eşliğinde steril koşullarda gerçekleştirilen profesyonel ayak sağlığı rehberi.",
            "image": "https://pedizone.com/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi-kapak.webp",
            "author": {
              "@type": "Person",
              "name": "Podolog Selin Savur"
            },
            "publisher": {
              "@type": "Organization",
              "name": "PediZone",
              "logo": {
                "@type": "ImageObject",
                "url": "https://pedizone.com/favicon.svg"
              }
            },
            "datePublished": "2026-06-14"
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <LocalizedLink to="/" className="hover:text-red-600">Ana Sayfa</LocalizedLink>
          <ChevronRight size={14} />
          <LocalizedLink to="/blog" className="hover:text-red-600">Blog</LocalizedLink>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-medium truncate">Medikal Ayak Bakımı Nedir?</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="flex gap-2 mb-4">
            <Badge className="bg-red-100 text-red-700 font-semibold">Medikal Bakım</Badge>
            <Badge className="bg-gray-100 text-gray-700">Podoloji</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Medikal Ayak Bakımı Nedir? Kimlere Uygulanır ve Nasıl Yapılır?
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Ayak sağlığı, genel vücut sağlığımızın temel taşlarından biridir. Gün boyu tüm yükümüzü taşıyan ayaklarımız; yanlış ayakkabı seçimi, genetik faktörler veya sistemik rahatsızlıklar nedeniyle çeşitli deformasyonlara uğrar. Medikal ayak bakımı, bu sorunların profesyonel ve steril koşullarda giderilmesini sağlar.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-y border-gray-100 py-4">
            <div className="flex items-center gap-2">
              <User size={16} className="text-red-600" />
              <span className="font-semibold text-gray-800">Podolog Selin Savur</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-red-600" />
              <span>14 Haziran 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-red-600" />
              <span>7 dk okuma</span>
            </div>
          </div>
        </header>

        {/* Main Cover Image */}
        <div className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img
            src="/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi-kapak.webp"
            alt="Medikal Ayak Bakımı Uygulaması"
            className="w-full h-auto object-cover max-h-[480px]"
          />
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Sparkles className="text-red-600" size={20} /> İçindekiler
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#medikal-bakim-nedir" className="hover:text-red-600 transition-colors">1. Medikal Ayak Bakımı (Podolojik Bakım) Nedir?</a></li>
            <li><a href="#klasik-pedikur-farki" className="hover:text-red-600 transition-colors">2. Klasik Pedikür ile Medikal Ayak Bakımı Arasındaki Farklar</a></li>
            <li><a href="#kimlere-uygulanir" className="hover:text-red-600 transition-colors">3. Medikal Ayak Bakımı Kimlere Uygulanır?</a></li>
            <li><a href="#uygulama-asamalari" className="hover:text-red-600 transition-colors">4. Profesyonel Uygulama Aşamaları</a></li>
            <li><a href="#video-vaka" className="hover:text-red-600 transition-colors">5. Uzman Gözüyle Klinik Uygulama Videosu</a></li>
            <li><a href="#sikca-sorulan-sorular" className="hover:text-red-600 transition-colors">6. Sıkça Sorulan Sorular</a></li>
          </ul>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <h2 id="medikal-bakim-nedir" className="text-2xl font-bold text-gray-900 pt-4">
            1. Medikal Ayak Bakımı (Podolojik Bakım) Nedir?
          </h2>
          <p>
            Medikal ayak bakımı; estetik kaygılardan ziyade tamamen <strong>sağlık odaklı</strong> gerçekleştirilen, uzman podologlar eşliğinde özel freze cihazları ve steril enstrümanlarla yapılan profesyonel bir bakım türüdür. Su kullanılmadan (kuru sistem) gerçekleştirilir; bu sayede bakteri ve mantar yayılım riski tamamen ortadan kaldırılır.
          </p>

          <h2 id="klasik-pedikur-farki" className="text-2xl font-bold text-gray-900 pt-4">
            2. Klasik Pedikür ile Medikal Ayak Bakımı Arasındaki Farklar
          </h2>
          <p>
            Birçok kişi klasik kuaför pedikürü ile podolojik medikal bakımı karıştırmaktadır. Aşağıdaki karşılaştırma tablosu iki yöntem arasındaki temel farkları net bir şekilde ortaya koymaktadır:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
              <thead className="bg-red-50 text-gray-900">
                <tr>
                  <th className="py-3 px-4 text-left font-bold border-b border-gray-200">Kriter</th>
                  <th className="py-3 px-4 text-left font-bold border-b border-gray-200">Klasik Pedikür</th>
                  <th className="py-3 px-4 text-left font-bold border-b border-gray-200">Medikal Ayak Bakımı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm">
                <tr>
                  <td className="py-3 px-4 font-semibold">Uygulayıcı</td>
                  <td className="py-3 px-4 text-gray-600">Güzellik uzmanı / Kuaför</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Eğitimli ve Sertifikalı Podolog</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Ortam ve Su</td>
                  <td className="py-3 px-4 text-gray-600">Sulu küvet (bakteri üreme riski var)</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">%100 Kuru sistem (Su kullanılmaz)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Amaç</td>
                  <td className="py-3 px-4 text-gray-600">Estetik ve oje uygulaması</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Ayak sağlığı, patoloji çözümü, koruma</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Aletler</td>
                  <td className="py-3 px-4 text-gray-600">Metal pens ve kesici aletler</td>
                  <td className="py-3 px-4 text-gray-900 font-medium">Steril freze uçları ve yüksek devirli cihazlar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="kimlere-uygulanir" className="text-2xl font-bold text-gray-900 pt-4">
            3. Medikal Ayak Bakımı Kimlere Uygulanır?
          </h2>
          <p>
            Medikal ayak bakımı sadece sorunu olanlara değil, sağlıklı ayak yapısını korumak isteyen herkese önerilir. Ancak özellikle aşağıdaki durumlarda medikal bakım hayati önem taşır:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Diyabetik (Şeker) Hastaları:</strong> Ayak yaralanmalarına karşı en hassas gruptur. Podolog kontrolünde güvenli bakım şarttır.</li>
            <li><strong>Nasır ve Sertleşme Problemi Yaşayanlar:</strong> Evde kesilen nasırlar tekrar daha derin ve ağrılı şekilde çıkar. Medikal frezelerle kökten güvenli temizlik yapılır.</li>
            <li><strong>Batık Tırnak (Onikokriptoz) Riski Olanlar:</strong> Yanlış kesim veya yapısal nedenlerle batan tırnakların acısız rahatlatılması.</li>
            <li><strong>Tırnak Mantarı ve Kalınlaşması (Onikogrifoz):</strong> Deforme olmuş tırnakların inceltilmesi ve topikal ürün emiliminin artırılması.</li>
            <li><strong>Sporcular ve Ayaklarında Yoğun Terleme/Koku Olanlar.</strong></li>
          </ul>

          <h2 id="uygulama-asamalari" className="text-2xl font-bold text-gray-900 pt-4">
            4. Profesyonel Uygulama Aşamaları
          </h2>
          <p>
            Klinik ortamında gerçekleştirilen medikal bakım şu adımlardan oluşur:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Anamnez ve Değerlendirme:</strong> Ayak yapısının, tırnakların ve varsa patolojilerin podolog tarafından analiz edilmesi.</li>
            <li><strong>Kuru Temizlik ve Frezeleme:</strong> Dezenfekte edilmiş ayaklara su değdirmeden, özel mikromotor ve steril freze uçlarıyla tırnak etlerinin ve sertleşmiş derilerin temizlenmesi.</li>
            <li><strong>Tırnak Bakımı ve Şekillendirme:</strong> Tırnakların batık riskini önleyecek şekilde doğru açıyla kesilmesi ve yüzey kalınlıklarının dengelenmesi.</li>
            <li><strong>Destekleyici Ürün Uygulaması:</strong> PediZone® Foot and Nail Care Serum veya üre içerikli profesyonel kremlerle cildin ve tırnak yatağının nemlendirilmesi.</li>
          </ol>

          {/* Video Section */}
          <div id="video-vaka" className="pt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              5. Uzman Gözüyle Klinik Uygulama Videosu
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Podolog Selin Savur eşliğinde gerçekleştirilen profesyonel medikal ayak bakımı ve tırnak temizliği uygulamasını aşağıdan izleyebilirsiniz.
            </p>
            
            <BlogVideoPlayer
              src="/videos/podolog-selin-savur.webm"
              poster="/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi-kapak.webp"
              title="Medikal Ayak Bakımı ve Profesyonel Tırnak Temizliği Uygulaması"
              category="Podoloji Klinik Uygulama"
            />
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="text-red-600" size={20} /> Podolog Tavsiyesi
            </h4>
            <p className="text-red-800 text-sm leading-relaxed">
              "Evde nasırlarınızı kesici aletlerle ya da jiletle uzaklaştırmaya çalışmak enfeksiyon ve doku harabiyetine yol açar. Sağlıklı adımlar için yılda en az birkaç kez profesyonel podolojik bakım yaptırmalısınız."
            </p>
          </div>

          {/* FAQ Section */}
          <h2 id="sikca-sorulan-sorular" className="text-2xl font-bold text-gray-900 pt-6 mb-4">
            6. Sıkça Sorulan Sorular
          </h2>
          
          <div className="space-y-4 not-prose">
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 font-bold text-gray-900 text-left transition-colors"
              >
                <span>Medikal ayak bakımı acı verir mi?</span>
                <span className="text-red-600 text-xl">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className="p-4 bg-white text-gray-700 text-sm border-t border-gray-200">
                  Kesinlikle acı vermez. Aksine nasır veya batık baskısı nedeniyle ağrı çeken hastalar işlem sonrasında anında büyük bir rahatlama hissederler. Kuru sistem frezeler cilde zarar vermeden nazikçe çalışır.
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 font-bold text-gray-900 text-left transition-colors"
              >
                <span>İşlem ne kadar sürer ve sıklığı ne olmalıdır?</span>
                <span className="text-red-600 text-xl">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className="p-4 bg-white text-gray-700 text-sm border-t border-gray-200">
                  Standart bir medikal bakım ortalama 45 ila 60 dakika sürmektedir. Ayak yapısının durumuna ve tırnak uzama hızına bağlı olarak genellikle 4 ila 6 haftada bir tekrarlanması önerilir.
                </div>
              )}
            </div>

            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 font-bold text-gray-900 text-left transition-colors"
              >
                <span>Diyabet hastaları medikal bakım yaptırabilir mi?</span>
                <span className="text-red-600 text-xl">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className="p-4 bg-white text-gray-700 text-sm border-t border-gray-200">
                  Evet, hatta diyabet hastalarının klasik kuaför pedikürü yaptırması kesinlikle sakıncalıdır. Steril ve travmasız podolojik medikal bakım, diyabetik ayak komplikasyonlarını önlemede en güvenilir yöntemdir.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl text-center space-y-4">
          <h3 className="text-2xl font-bold">Ayak Sağlığınızı Uzmanına Emanet Edin</h3>
          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            PediZone® profesyonel ürünleri ve yetkili podoloji merkezlerimiz ile ayaklarınız hak ettiği konfora kavuşsun.
          </p>
          <div className="pt-2">
            <LocalizedLink to="/podolog-degerlendirmesi">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-full">
                Ücretsiz Uzman Değerlendirmesi Alın →
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogMedikalAyakBakimiNedir;
