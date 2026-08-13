import React, { useState } from 'react';
import LocalizedLink from './LocalizedLink';
import BlogVideoPlayer from './BlogVideoPlayer';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, Clock, User, CheckCircle, AlertTriangle, ArrowRight, 
  ChevronDown, ChevronUp, Share2, Droplets, ShieldCheck, Stethoscope, 
  Sparkles, Layers, Activity, Check, Heart, Copy, ArrowLeft
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const BlogSerumKullanimOnemi = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const faqs = [
    {
      question: "PediZone Serum günde kaç kez uygulanmalıdır?",
      answer: "En etkili sonuç ve düzenli bakım için sabah ve akşam olmak üzere günde 2 kez temiz ve kuru tırnağa damlalık yardımıyla uygulanması tavsiye edilir."
    },
    {
      question: "Serum uygulandıktan hemen sonra çorap giyilebilir mi?",
      answer: "Serumun tırnak yatağına ve çevresine iyice nüfuz etmesi ve etkililiğini göstermesi için giyinmeden önce 2-3 dakika kuruması beklenmelidir."
    },
    {
      question: "Damlalık tırnağa doğrudan temas etmeli mi?",
      answer: "Hijyenin korunması ve ürünün formülasyonunun bozulmaması için damlalık ucunun tırnağa veya cilde direkt temas ettirilmeden birkaç santim yukarıdan damlatılması önerilir."
    },
    {
      question: "PediZone Serum tırnak mantarında tek başına yeterli midir?",
      answer: "PediZone Serum tırnak çevresinin hijyenini ve bakımını destekler. Ancak tıbbi tanısı konulmuş durumlarda uzman podolog eşliğinde yürütülen medikal ayak bakımı rutiniyle birlikte destekleyici olarak kullanılmalıdır."
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Helmet>
        <title>PediZone Serum Kullanım Önemi ve Doğru Damlalık Uygulama Rehberi | PediZone</title>
        <meta name="description" content="PediZone ayak ve tırnak bakım serumunun doğru damlalık tekniğiyle kullanımını, tırnak sağlığına etkilerini podolojik perspektifle inceleyin." />
        <link rel="canonical" href="https://pedizone.com/blog/serum-kullanim-onemi" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="PediZone Serum Kullanım Önemi ve Doğru Damlalık Uygulama Rehberi" />
        <meta property="og:description" content="PediZone ayak ve tırnak bakım serumunun doğru damlalık tekniğiyle kullanımını podolojik perspektifle inceleyin." />
        <meta property="og:url" content="https://pedizone.com/blog/serum-kullanim-onemi" />
        <meta property="og:image" content="https://pedizone.com/blog-images/serum-kullanim/pedizone-mantar-serumu-kapak.webp" />
        <meta property="article:author" content="Podolog Serdar Ceylan" />
        <meta property="article:published_time" content="2026-08-13" />

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

        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "PediZone Serum Kullanım Önemi ve Doğru Damlalık Uygulama Rehberi",
            "description": "PediZone ayak ve tırnak bakım serumunun doğru damlalık tekniğiyle kullanımını podolojik perspektifle inceleyin.",
            "image": "https://pedizone.com/blog-images/serum-kullanim/pedizone-mantar-serumu-kapak.webp",
            "author": {
              "@type": "Person",
              "name": "Podolog Serdar Ceylan"
            },
            "datePublished": "2026-08-13",
            "publisher": {
              "@type": "Organization",
              "name": "PediZone"
            }
          })}
        </script>
      </Helmet>

      {/* Navigation & Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between text-sm">
          <LocalizedLink to="/blog" className="inline-flex items-center text-gray-600 hover:text-red-600 font-medium transition-colors">
            <ArrowLeft className="mr-2" size={16} /> Blog Listesine Dön
          </LocalizedLink>
          <div className="flex items-center space-x-2 text-gray-500">
            <span className="hidden sm:inline">Kategori:</span>
            <Badge variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 border border-red-200">Tırnak Bakımı</Badge>
          </div>
        </div>
      </div>

      {/* Editorial Header (Hero) */}
      <header className="pt-10 pb-8 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-flex items-center space-x-2 bg-red-100/80 text-red-800 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <Sparkles size={14} className="mr-1.5 text-red-600" />
            PODOLOJİK KLİNİK REHBERİ
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            PediZone Serum Kullanım Önemi ve Doğru Damlalık Uygulama Rehberi
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600 mb-8 border-y border-gray-100 py-4 max-w-2xl mx-auto">
            <div className="flex items-center font-semibold text-gray-900">
              <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mr-2.5 shadow-md">
                SC
              </div>
              Podolog Serdar Ceylan
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center text-gray-500">
              <Calendar size={15} className="mr-1.5 text-red-600" /> 13 Ağustos 2026
            </div>
            <span className="text-gray-300">•</span>
            <div className="flex items-center text-gray-500">
              <Clock size={15} className="mr-1.5 text-red-600" /> 8 dk okuma
            </div>
          </div>
        </div>

        {/* Featured Image - Tam Görünüm (Uncropped container) */}
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-50 p-2 sm:p-4">
            <img 
              src="/blog-images/serum-kullanim/pedizone-mantar-serumu-kapak.webp" 
              alt="PediZone Serum Kullanımı ve Damlalık Uygulama Rehberi" 
              className="w-full h-auto object-contain rounded-2xl max-h-[500px] mx-auto"
            />
            <p className="text-center text-xs sm:text-sm text-gray-500 mt-3 font-medium">
              PediZone Foot & Nail Care Serum • Profesyonel Kabin ve Ev Bakım Çözümü
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Table of Contents Sidebar */}
      <main className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Table of Contents Sidebar (Desktop Sticky) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-24 space-y-6">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-4 flex items-center">
                <Layers size={16} className="mr-2" /> İÇİNDEKİLER
              </h3>
              <nav className="space-y-2.5 text-sm font-medium">
                <button onClick={() => scrollToSection('klinik-ozellikler')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">01</span> Öne Çıkan Klinik Özellikler
                </button>
                <button onClick={() => scrollToSection('neden-serum')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">02</span> Serum Kullanımı Neden Önemli?
                </button>
                <button onClick={() => scrollToSection('degisim-evreleri')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">03</span> Tırnak Sağlığında Değişim Evreleri
                </button>
                <button onClick={() => scrollToSection('damlalik-video')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">04</span> Klinik Video ve Damlalık Rehberi
                </button>
                <button onClick={() => scrollToSection('oncesi-sonrasi')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">05</span> Klinik Öncesi / Sonrası Gözlemler
                </button>
                <button onClick={() => scrollToSection('sik-sorulan-sorular')} className="w-full text-left text-gray-700 hover:text-red-600 hover:bg-red-50/80 px-3 py-2 rounded-xl transition-all flex items-center">
                  <span className="w-6 text-red-600 font-bold">06</span> Sık Sorulan Sorular
                </button>
              </nav>
            </div>

            {/* Quick CTA Box */}
            <div className="bg-gradient-to-br from-red-600 to-rose-700 rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h4 className="font-bold text-lg mb-2 relative z-10">PediZone Bakım Serisi</h4>
              <p className="text-red-100 text-sm mb-5 relative z-10">Tırnak yatağında profesyonel koruma ve hijyen desteği.</p>
              <LocalizedLink to="/#urunler">
                <Button className="w-full bg-white text-red-600 hover:bg-gray-100 font-bold shadow-md rounded-xl">
                  Ürünleri İncele →
                </Button>
              </LocalizedLink>
            </div>
          </aside>

          {/* Article Body Content */}
          <article className="lg:col-span-8 space-y-10 text-gray-700 text-lg leading-relaxed">

            {/* Intro Lead Paragraph */}
            <div className="bg-gradient-to-br from-red-50/60 to-rose-50/30 border-l-4 border-red-600 rounded-2xl p-6 sm:p-8 shadow-sm">
              <p className="text-xl font-medium text-gray-900 leading-relaxed mb-4">
                Ayak ve tırnak sağlığında doğru bakım ürünü seçmek kadar, o ürünü doğru teknikle uygulamak da başarının anahtarıdır. Klinik uygulamalarımızda sıkça gözlemlediğimiz üzere, evde yapılan bakım rutinlerinde ürünün yanlış uygulanması veya yetersiz emilim sağlanması istenen sonucun alınmasını geciktirebilir.
              </p>
              <div className="inline-flex items-center text-red-700 font-semibold text-sm bg-white/80 px-4 py-2 rounded-xl border border-red-100 shadow-xs">
                <ShieldCheck size={18} className="mr-2 text-red-600 flex-shrink-0" />
                Doğru damlalık uygulaması, aktif bileşenlerin tırnak plakasına ve tırnak kıvrımlarına maksimum düzeyde nüfuz etmesini sağlar.
              </div>
            </div>

            {/* Mobile Table of Contents (Bu Yazıda) */}
            <div className="lg:hidden bg-gray-50 rounded-2xl p-5 border border-gray-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-600 mb-3 flex items-center">
                <Layers size={16} className="mr-2" /> BU YAZIDA (İÇİNDEKİLER)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-medium">
                <button onClick={() => scrollToSection('klinik-ozellikler')} className="text-left text-gray-700 hover:text-red-600 p-2 rounded-lg bg-white border border-gray-100 shadow-2xs">01 Öne Çıkan Özellikler</button>
                <button onClick={() => scrollToSection('neden-serum')} className="text-left text-gray-700 hover:text-red-600 p-2 rounded-lg bg-white border border-gray-100 shadow-2xs">02 Neden Serum?</button>
                <button onClick={() => scrollToSection('degisim-evreleri')} className="text-left text-gray-700 hover:text-red-600 p-2 rounded-lg bg-white border border-gray-100 shadow-2xs">03 Değişim Evreleri</button>
                <button onClick={() => scrollToSection('damlalik-video')} className="text-left text-gray-700 hover:text-red-600 p-2 rounded-lg bg-white border border-gray-100 shadow-2xs">04 Damlalık Rehberi</button>
              </div>
            </div>

            {/* Section 01: Öne Çıkan Klinik Özellikler (Icon Cards) */}
            <section id="klinik-ozellikler" className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                PediZone Foot & Nail Care Serum'un Öne Çıkan Klinik Özellikleri
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4 font-bold text-xl shadow-xs">
                      <Droplets size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">İnce Moleküler Yapı</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Özel formülasyonu sayesinde tırnak minesine ve tırnak yatağındaki en zor noktalara derinlemesine dahi kolayca ulaşır.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-red-600 flex items-center">
                    ✓ Maksimum Nüfuz Eder
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 font-bold text-xl shadow-xs">
                      🌿
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Doğal Çay Ağacı Desteği</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tea Tree Oil içeriğiyle antifungal ve hijyenik özellikler sunar, tırnak çevresindeki florayı korur ve destekler.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-green-700 flex items-center">
                    ✓ Antifungal Koruma
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 font-bold text-xl shadow-xs">
                      <Stethoscope size={24} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Kabin ve Profesyonel Ürün</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Kliniklerde podologların güvenle tercih ettiği, ev bakım rutiniyle tam uyumlu profesyonel bakım desteğidir.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-blue-700 flex items-center">
                    ✓ Podolog Onaylı
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 font-bold text-xl shadow-xs">
                      ⚡
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Üre ve Salisilik Asit Sinerjisi</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tırnak çevresindeki ölü deriyi nazikçe arındırarak aktif maddelerin emilimini ve etkinliğini maksimuma çıkarır.
                    </p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs font-semibold text-amber-700 flex items-center">
                    ✓ Ölü Deri Arındırma
                  </div>
                </div>
              </div>
            </section>

            {/* Section 02: Serum Kullanımı Neden Önemli? */}
            <section id="neden-serum" className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                Tırnak Bakımında Serum Kullanımı Neden Önemlidir?
              </h2>
              
              <p className="mb-6">
                Tırnak yapısı dış etkenlerden, kapalı ayakkabılardan, nem dengesizliğinden veya kimyasal temaslardan kolayca etkilenebilir. Zamanla tırnak platesinde zayıflama, kuruluk, renk değişimi veya tırnak çevresindeki dokularda hassasiyet görülebilir. Yoğun kıvamlı kremler her zaman tırnak yatağının derinlerine nüfuz edemez. İşte bu noktada sıvı formu ve damlalıklı özel başlığı sayesinde <strong className="text-gray-900 font-semibold">PediZone Foot and Nail Care Serum</strong> devreye girer.
              </p>

              <p className="mb-6">
                Çay ağacı yağı, üre ve salisilik asit türevleri gibi seçkin içeriklerle zenginleştirilen formül, tırnak çevresindeki ölü derinin yumuşatılmasına yardımcı olurken tırnak minesinin doğal direncini destekler. Düzenli kullanım, tırnak yatağının hijyenik ve bakımlı kalmasında önemli bir rol oynamaktadır. Konuyla ilgili daha geniş bilgi için <LocalizedLink to="/blog/tirnak-mantari-neden-gecmez" className="text-red-600 font-semibold underline underline-offset-2 hover:text-red-700">tırnak mantarı ve tırnak yapısı</LocalizedLink> hakkındaki yazımızı da inceleyebilirsiniz.
              </p>
            </section>

            {/* Podolog Notu Alıntı Kutusu (ChatGPT Önerisi) */}
            <div className="my-10 bg-gradient-to-r from-red-600 to-rose-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Stethoscope size={14} className="mr-1.5" /> PODOLOG UZMAN NOTU
                </div>
                <blockquote className="text-xl sm:text-2xl font-serif italic text-white/95 leading-relaxed mb-6">
                  “Serum miktarını artırmak daha iyi sonuç anlamına gelmez. Önemli olan doğru miktarın (1-2 damla) doğru bölgeye düzenli şekilde uygulanması ve tırnak yatağına masajla yedirilmesidir.”
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white text-red-700 flex items-center justify-center font-bold shadow-md">
                    SC
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Podolog Serdar Ceylan</h4>

                  </div>
                </div>
              </div>
            </div>

            {/* Section 03: Tırnak Sağlığında Değişim Evreleri (3 Gorgeous Stage Cards - ChatGPT Önerisi) */}
            <section id="degisim-evreleri" className="pt-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                Tırnak Sağlığında Değişim Evreleri ve Gözlem
              </h2>
              
              <p className="mb-8">
                Klinik deneyimlerimizde tırnak yapısındaki bozulmaların ve hijyen kayıplarının belirli evrelerden geçtiğini görüyoruz. Erken aşamada müdahale etmek, bakım sürecini her zaman kısaltır ve başarı oranını artırır.
              </p>

              {/* 3 Stage Grid */}
              <div className="space-y-6">
                {/* Stage 1 */}
                <div className="bg-gradient-to-br from-emerald-50/70 to-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-200 shadow-md flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md border border-emerald-100">
                    <img 
                      src="/blog-images/serum-kullanim/tirnak-mantari-baslangic-evresi.webp" 
                      alt="Başlangıç Evresi" 
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="inline-block bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
                      01 — Başlangıç Evresi
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hafif Renk Değişimi ve Matlaşma</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Tırnağın serbest kenarında hafif sarımsı veya beyazımsı renk değişimleri, matlaşma ve hafif hassasiyet ile başlar. Bu dönemde düzenli serum kullanımı ve hijyenik bakım ile tırnak direnci hızla desteklenebilir.
                    </p>
                    <div className="text-xs font-semibold text-emerald-700 flex items-center">
                      ✓ Evde bakım ile en hızlı sonuç alınan kritik dönem
                    </div>
                  </div>
                </div>

                {/* Stage 2 */}
                <div className="bg-gradient-to-br from-amber-50/70 to-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-md flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md border border-amber-100">
                    <img 
                      src="/blog-images/serum-kullanim/tirnak-mantari-orta-evre.webp" 
                      alt="Orta Evre" 
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="inline-block bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
                      02 — Orta Evre
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Kalınlaşma ve Yapısal Bozulma</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Renk koyulaşır (sarı, kahverengi tonları), tırnak plakasında kalınlaşma (sublingual hiperkeratoz) ve kırılganlık artır. Bu aşamada ürünün tırnak yatağına tam nüfuz etmesi için damlalık uygulaması büyük önem taşır.
                    </p>
                    <div className="text-xs font-semibold text-amber-700 flex items-center">
                      ✓ Düzenli damlalık uygulaması ve ölü derinin arındırılması şarttır
                    </div>
                  </div>
                </div>

                {/* Stage 3 */}
                <div className="bg-gradient-to-br from-rose-50/70 to-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200 shadow-md flex flex-col md:flex-row gap-6 items-center">
                  <div className="w-full md:w-1/3 rounded-2xl overflow-hidden shadow-md border border-rose-100">
                    <img 
                      src="/blog-images/serum-kullanim/tirnak-mantari-ileri-evre.webp" 
                      alt="İleri Evre" 
                      className="w-full aspect-[4/3] object-cover"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
                      03 — İleri Evre
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ciddi Deformasyon ve Onikogrifoz</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Tırnak yapısının ciddi oranda deforme olduğu, kalkma veya batma eğilimi gösterdiği evredir. Bu aşamada evde bakım rutini mutlaka uzman podolog eşliğinde medikal ayak bakımı ile desteklenmelidir.
                    </p>
                    <div className="text-xs font-semibold text-red-700 flex items-center">
                      ✓ Profesyonel klinik müdahale ve destekleyici ev serumu kombinasyonu
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 04: Klinik Video ve Damlalık Uygulama Rehberi */}
            <section id="damlalik-video" className="pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                PediZone Serum Nasıl Uygulanır? (Adım Adım Rehber)
              </h2>

              <p className="mb-6">
                Evde podolojik bakım rutini uygulanırken hijyen ve istikrar en temel unsurlardır. PediZone serumun en yüksek verimle çalışması için şu adımlar izlenmelidir:
              </p>

              <BlogVideoPlayer 
                src="/blog-images/serum-kullanim/pedizone-serum-damlalik.webm" 
                caption="Podolog Gözüyle Damlalık Uygulaması: Doğru Damlatma ve Masaj Tekniği" 
              />

              {/* Numbered Steps (ChatGPT Önerisi) */}
              <div className="grid sm:grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    01
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Temizlik ve Kurulama</h3>
                    <p className="text-gray-600 text-sm">Uygulama öncesinde ayakların ve özellikle tırnak çevresinin tamamen temiz ve kuru olduğundan emin olun.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    02
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Damlalık Kontrolü</h3>
                    <p className="text-gray-600 text-sm">Hijyenik damlalık yardımıyla ilgili tırnağın üzerine doğrudan 1-2 damla serum bırakın (direkt temas ettirmeyin).</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    03
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Nazik Masaj</h3>
                    <p className="text-gray-600 text-sm">Serumun tırnak yatağına, kütiküle ve yan kıvrımlara iyice nüfuz etmesi için parmak ucunuzla hafifçe yedirin.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start space-x-4">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md">
                    04
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base mb-1">Kuruma Bekleme Süresi</h3>
                    <p className="text-gray-600 text-sm">Çorap veya kapalı ayakkabı giymeden önce serumun birkaç dakika kendi kendine kurumasını bekleyin.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 05: Klinik Öncesi / Sonrası Gözlemler */}
            <section id="oncesi-sonrasi" className="pt-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                Klinik Öncesi ve Sonrası Bakım Gözlemleri
              </h2>

              <p className="mb-6">
                Düzenli ve doğru teknikle uygulanan bakım rutinleri, tırnak çevresindeki dokunun yenilenmesine ve sağlıklı görünümün geri kazanılmasına zemin hazırlar.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-4 border-2 border-gray-200 shadow-md">
                  <div className="absolute top-6 left-6 z-10 bg-gray-900 text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-lg">
                    🔄 Önceki / Sonrası Gözlem 1
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-inner bg-white mt-8">
                    <img 
                      src="/blog-images/serum-kullanim/pedizone-serum-before-2.webp" 
                      alt="PediZone Serum Bakım Örneği 1" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-700 font-semibold mt-4">PediZone Serum desteğiyle tırnak yatağında elde edilen klinik gelişim örneği</p>
                </div>

                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-4 border-2 border-gray-200 shadow-md">
                  <div className="absolute top-6 left-6 z-10 bg-gray-900 text-white px-3.5 py-1 rounded-full text-xs font-bold shadow-lg">
                    🔄 Önceki / Sonrası Gözlem 2
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-inner bg-white mt-8">
                    <img 
                      src="/blog-images/serum-kullanim/pedizone-serum-before-after22.webp" 
                      alt="PediZone Serum Bakım Örneği 2" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-700 font-semibold mt-4">PediZone Serum desteğiyle tırnak sağlığında sağlanan yenilenme görünümü</p>
                </div>
              </div>
            </section>

            {/* Inline Product CTA Card (ChatGPT Önerisi) */}
            <div className="my-10 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase bg-red-600 text-white px-3 py-1 rounded-full">PediZone Orijinal Ürün</span>
                <h3 className="text-2xl font-bold mt-3 mb-2">PediZone® Foot and Nail Care Serum</h3>
                <p className="text-gray-300 text-sm">50 ml • Özel Damlalıklı Uygulama Başlığı • Podolog Tavsiyeli Formül</p>
              </div>
            <LocalizedLink to="/urun/foot-nail-care-serum">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg flex items-center">
                Ürünü İncele <ArrowRight size={18} className="ml-2" />
              </Button>
            </LocalizedLink>
            </div>

            {/* Section 06: Sık Sorulan Sorular (FAQ) */}
            <section id="sik-sorulan-sorular" className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 rounded-full mr-4"></span>
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden transition-all">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left font-bold text-gray-900 flex justify-between items-center hover:bg-gray-100/60 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? <ChevronUp size={20} className="text-red-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-5 pt-1 text-gray-600 text-base border-t border-gray-100 leading-relaxed bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Share & Author Footer */}
            <div className="pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  SC
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Podolog Serdar Ceylan</h4>

                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Button 
                  onClick={handleCopyLink} 
                  variant="outline" 
                  className="rounded-xl border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold"
                >
                  {copied ? <Check size={16} className="text-green-600 mr-2" /> : <Copy size={16} className="mr-2" />}
                  {copied ? 'Bağlantı Kopyalandı!' : 'Yazıyı Paylaş'}
                </Button>
              </div>
            </div>

          </article>
        </div>
      </main>

      {/* Related Articles Section */}
      <section className="bg-gray-50 py-16 mt-16 border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-100 px-3 py-1 rounded-full">KEŞFETMEYE DEVAM EDİN</span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-3 mb-2">İlgili Klinik Makaleler</h2>
            <p className="text-gray-600">Ayak ve tırnak sağlığınızı korumanız için hazırladığımız diğer uzman rehberler.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <LocalizedLink to="/blog/tirnak-mantari-neden-gecmez" className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src="/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-gecmez.webp" 
                  alt="Tırnak Mantarı Neden Geçmez" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Tırnak Bakımı</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                    <span className="flex items-center"><Calendar size={13} className="mr-1 text-red-600" /> 18 Mart 2026</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock size={13} className="mr-1 text-red-600" /> 8 dk</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-lg line-clamp-2 mb-2">
                    Tırnak Mantarı Neden Geçmez? En Sık Yapılan 7 Kritik Hata
                  </h3>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 text-red-600 font-semibold text-sm flex items-center">
                  Yazıyı İncele <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/blog/nasir-neden-surekli-tekrar-eder" className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src="/images/blog/nasir-neden-surekli-tekrar-eder/nasir-neden-surekli-tekrar-eder.webp" 
                  alt="Nasır Neden Sürekli Tekrar Eder" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Nasır Bakımı</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                    <span className="flex items-center"><Calendar size={13} className="mr-1 text-red-600" /> 12 Haziran 2026</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock size={13} className="mr-1 text-red-600" /> 9 dk</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-lg line-clamp-2 mb-2">
                    Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir
                  </h3>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 text-red-600 font-semibold text-sm flex items-center">
                  Yazıyı İncele <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </LocalizedLink>

            <LocalizedLink to="/blog/parmak-arasi-mantar-nasil-gecer" className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <img 
                  src="/images/blog/parmak-arasi-mantar-nasil-gecer/parmak-arasi-mantar-kapak.webp" 
                  alt="Parmak Arasi Mantar Nasıl Geçer" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">Ayak Mantarı</span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-xs text-gray-500 mb-2 space-x-2">
                    <span className="flex items-center"><Calendar size={13} className="mr-1 text-red-600" /> 18 Nisan 2026</span>
                    <span>•</span>
                    <span className="flex items-center"><Clock size={13} className="mr-1 text-red-600" /> 9 dk</span>
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors text-lg line-clamp-2 mb-2">
                    Parmak Arası Mantar Nasıl Geçer? Kaşıntı ve Kokuya Kesin Çözüm
                  </h3>
                </div>
                <div className="pt-4 mt-4 border-t border-gray-100 text-red-600 font-semibold text-sm flex items-center">
                  Yazıyı İncele <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </LocalizedLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogSerumKullanimOnemi;
