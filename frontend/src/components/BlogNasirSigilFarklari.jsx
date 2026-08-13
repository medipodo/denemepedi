import React, { useState } from 'react';
import LocalizedLink from './LocalizedLink';
import { Helmet } from 'react-helmet-async';
import { 
  Calendar, Clock, User, CheckCircle, AlertTriangle, ArrowRight, 
  ChevronDown, ChevronUp, Share2, ShieldCheck, Stethoscope, 
  Sparkles, Layers, Activity, Check, Heart, Copy, ArrowLeft
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const BlogNasirSigilFarklari = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const faqs = [
    {
      question: 'Nasır ve siğil aynı anda olabilir mi?',
      answer: 'Evet, aynı ayakta hem mekanik kaynaklı nasır hem de viral kaynaklı siğil birlikte görülebilir. Bu durumda her iki lezyonun ayrı ayrı değerlendirilmesi ve uygun tedavi yaklaşımının belirlenmesi için profesyonel bir değerlendirme önerilir.'
    },
    {
      question: 'Siğil bulaşıcı mıdır?',
      answer: 'Evet, siğiller HPV virüsü kaynaklı olduğu için bulaşıcıdır. Özellikle havuz kenarları, duşlar, spor salonları gibi ortak nemli zeminlerde yalın ayak dolaşmak bulaşma riskini artırır. Korunmak için ortak alanlarda terlik kullanılmalı ve ayaklar kuru tutulmalıdır.'
    },
    {
      question: 'Evde nasır kesmek güvenli mi?',
      answer: 'Hayır, evde kesici aletlerle nasır kesmeye çalışmak ciddi enfeksiyon riski taşır. Steril olmayan aletler bakteri girişine neden olabilir, ayrıca yanlış kesim sağlıklı dokuya zarar verebilir. Özellikle diyabet hastaları için bu risk çok daha yüksektir.'
    },
    {
      question: 'Üreli krem siğile etkili mi?',
      answer: 'Hayır, üreli kremler sadece nasırın yumuşatılması ve kuru cildin nemlendirilmesi için uygundur. Siğil viral kaynaklı bir enfeksiyon olduğu için üre içeren ürünlerle tedavi edilemez. Siğil tedavisi için profesyonel müdahale gerekir.'
    },
    {
      question: 'Nasır tekrarlar mı?',
      answer: 'Evet, nasır oluşumuna neden olan basınç ve sürtünme faktörleri devam ederse nasır tekrar oluşabilir. Kalıcı çözüm için yanlış ayakkabı kullanımı düzeltilmeli, gerekirse ortopedik tabanlık kullanılmalı ve ayak yapısal problemleri değerlendirilmelidir.'
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
        <title>Nasır ve Siğil Farkları | Ayakta Doğru Teşhis ve Tedavi</title>
        <meta name="description" content="Ayakta nasır ve siğil arasındaki farkları keşfedin. Doğru teşhis, evde uygulamalar ve medikal müdahale yöntemleri hakkında kapsamlı podoloji rehberi." />
        <link rel="canonical" href="https://pedizone.com/blog/nasir-sigil-farklari" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Nasır ve Siğil Farkları | Ayakta Doğru Teşhis ve Tedavi" />
        <meta property="og:description" content="Ayakta nasır ve siğil arasındaki farkları keşfedin. Doğru teşhis, evde uygulamalar ve medikal müdahale yöntemleri hakkında kapsamlı rehber." />
        <meta property="og:url" content="https://pedizone.com/blog/nasir-sigil-farklari" />
        <meta property="og:image" content="https://pedizone.com/blog-images/nasir-sigil-farklari/nasir-sigil-kapak.webp" />
      </Helmet>

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <LocalizedLink to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors text-sm font-medium">
            <ArrowLeft size={16} className="mr-2" /> Blog Listesine Dön
          </LocalizedLink>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-red-600 text-white border-none">Nasır & Siğil</Badge>
            <Badge variant="outline" className="text-gray-300 border-gray-600">Medikal Ayak Bakımı</Badge>
            <Badge variant="outline" className="text-gray-300 border-gray-600">Podoloji</Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Nasır ve Siğil Arasındaki Farklar: Ayakta Doğru Teşhis ve Etkili Tedavi
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 pb-8 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-red-600/30 border border-red-500/40 flex items-center justify-center font-bold text-red-400">
                SC
              </div>
              <div>
                <span className="block font-semibold text-white">Podolog Serdar Ceylan</span>
                
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1"><Calendar size={14} /> 14 Ağustos 2026</span>
              <span className="flex items-center gap-1"><Clock size={14} /> 10 dk okuma</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center text-sm uppercase tracking-wider">
                <Layers size={16} className="mr-2 text-red-600" /> İçindekiler
              </h3>
              <nav className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('giris')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">1. Giriş ve Temel Fark</button>
                <button onClick={() => scrollToSection('nasir')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">2. Nasır Nedir?</button>
                <button onClick={() => scrollToSection('sigil')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">3. Siğil Nedir?</button>
                <button onClick={() => scrollToSection('video-bolumu')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">4. Klinik Gözlem Videosu</button>
                <button onClick={() => scrollToSection('karsilastirma')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">5. Karşılaştırma Tablosu</button>
                <button onClick={() => scrollToSection('tedavi')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">6. Tedavi Yaklaşımları</button>
                <button onClick={() => scrollToSection('faq')} className="block text-left w-full text-gray-600 hover:text-red-600 transition-colors py-1">7. Sık Sorulan Sorular</button>
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-xs text-gray-500 uppercase tracking-wider mb-3">Paylaş</h4>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopyLink} className="flex-1 text-xs">
                    {copied ? <Check size={14} className="text-green-600 mr-1" /> : <Copy size={14} className="mr-1" />}
                    {copied ? 'Kopyalandı' : 'Kopyala'}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-9 max-w-none">
            
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src="/blog-images/nasir-sigil-farklari/nasir-sigil-kapak.webp" 
                alt="Nasır ve siğil farkları klinik kapak görseli" 
                className="w-full h-auto object-cover max-h-[480px]"
              />
            </div>

            {/* Intro */}
            <div id="giris" className="text-lg text-gray-700 leading-relaxed mb-10 p-6 bg-red-50/50 border-l-4 border-red-600 rounded-r-2xl">
              Ayağımızın tabanında veya parmak aralarında oluşan sertlikler çoğu zaman kafa karıştırır. <strong>Nasır mı, siğil mi?</strong> Ayırmak önemlidir çünkü tedavi yöntemleri tamamen farklıdır. Yanlış müdahale hem ağrıyı artırır hem de tedavi süresini uzatır.
            </div>

            {/* Section 1: Nasır Nedir? */}
            <section id="nasir" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">01</span>
                Nasır Nedir?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nasır, sürekli basınç veya sürtünmeye maruz kalan bölgelerde oluşan sert, kalın deri tabakasıdır. Vücut, bu bölgeleri dış etkenlerden korumak için deriyi kalınlaştırarak savunma mekanizması geliştirir.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Sert ve Sarımsı Görünüm</h4>
                  <p className="text-sm text-gray-600">Genellikle baskı altındaki bölgelerde düzgün sınırlı sarımsı plaklar halindedir.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Basınca Duyarlı</h4>
                  <p className="text-sm text-gray-600">Direkt üzerine basıldığında veya sıkıştırıldığında keskin bir batma batma ağrısı yapar.</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <h4 className="font-bold text-gray-900 mb-2">Yaygın Bölgeler</h4>
                  <p className="text-sm text-gray-600">Metatars başları, topuk, parmak araları ve ayak dış kenarında sık görülür.</p>
                </div>
              </div>
            </section>

            {/* Section 2: Siğil Nedir? */}
            <section id="sigil" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">02</span>
                Siğil Nedir?
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Siğil, Human Papilloma Virüsü (HPV) kaynaklı viral bir enfeksiyondur. Ayak tabanında yerleşen türüne <strong>plantar siğil</strong> denir ve genellikle vücut ağırlığıyla içe doğru büyüyerek yürüyüşü zorlaştırır.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-6">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center">
                  <AlertTriangle className="text-amber-600 mr-2" size={20} /> Siğilin Karakteristik Özellikleri
                </h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-center"><Check size={16} className="text-amber-600 mr-2 flex-shrink-0" /> <strong>Bulaşıcıdır:</strong> Ortak duşlar, havuzlar ve soyunma odalarında kolayca yayılabilir.</li>
                  <li className="flex items-center"><Check size={16} className="text-amber-600 mr-2 flex-shrink-0" /> <strong>Siyah Noktalar:</strong> İçerisinde pıhtılaşmış kılcal kan damarları (siyah minik noktalar) barındırabilir.</li>
                  <li className="flex items-center"><Check size={16} className="text-amber-600 mr-2 flex-shrink-0" /> <strong>Yana Sıkıştırma Ağrısı:</strong> Üzerine direkt basmaktan ziyade, kenarlardan sıkıştırıldığında daha şiddetli ağrı verir.</li>
                </ul>
              </div>
            </section>

            {/* Section 3: Video Bölümü */}
            <section id="video-bolumu" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">03</span>
                Podolog Gözüyle Klinik Gözlem Videosu
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Aşağıdaki klinik videoda, ayak tabanında sıkça karşılaşılan plantar siğil ile mekanik nasır arasındaki farkların podolojik muayene esnasındaki görünümünü inceleyebilirsiniz.
              </p>
              
              <figure className="my-6 flex flex-col items-center">
                <div className="max-w-xs w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-black">
                  <video 
                    src="/blog-images/sigil/sigil-plantar-sigil.webm" 
                    autoPlay 
                    loop 
                    playsInline
                    className="w-full h-auto object-cover block"
                  />
                </div>
                <figcaption className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                  <span className="w-8 h-px bg-gray-300 mr-3"></span>
                  Podolog Gözüyle Plantar Siğil ve Nasır Karşılaştırma ve Klinik Gözlem
                  <span className="w-8 h-px bg-gray-300 ml-3"></span>
                </figcaption>
              </figure>
            </section>

            {/* Section 4: Karşılaştırma Tablosu */}
            <section id="karsilastirma" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">04</span>
                Nasır ve Siğil Karşılaştırma Tablosu
              </h2>
              
              <div className="overflow-x-auto my-6">
                <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200">
                  <thead>
                    <tr className="bg-gradient-to-r from-red-600 to-rose-700 text-white">
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Özellik</th>
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Nasır</th>
                      <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Siğil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50/50">
                      <td className="py-3.5 px-6 text-gray-900 font-bold">Oluşum Nedeni</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Mekanik basınç ve sürtünme</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">HPV (Human Papilloma Virus)</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-gray-900 font-bold">Bulaşıcılık</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Bulaşıcı değildir</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Yüksek oranda bulaşıcıdır</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3.5 px-6 text-gray-900 font-bold">Görünüm</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Sarımsı, sert ve düzgün plak</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Pütürlü, siyah noktalı lezyon</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-6 text-gray-900 font-bold">Ağrı Tipi</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Direkt dikey basınca duyarlı</td>
                      <td className="py-3.5 px-6 text-gray-700 text-sm">Yana doğru sıkıştırmada batıcı</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 5: Tedavi Yaklaşımları */}
            <section id="tedavi" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center mr-3 text-sm">05</span>
                Evde ve Medikal Tedavi Yaklaşımları
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <CheckCircle className="text-green-600 mr-2" size={20} /> Nasır İçin Ev ve Klinik Bakım
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Ilık ayak banyosu ve ponza taşı uygulaması</li>
                    <li>• <LocalizedLink to="/blog/ure-nedir" className="text-red-600 hover:underline font-medium">Üre içeren nemlendirici kremler</LocalizedLink></li>
                    <li>• Basınç azaltıcı silikon destekler ve tabanlıklar</li>
                    <li>• Podolojik freze ile profesyonel temizlik</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <ShieldCheck className="text-red-600 mr-2" size={20} /> Siğil İçin Medikal Yaklaşım
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Dermatolojik veya podolojik profesyonel çözümler</li>
                    <li>• Kriyoterapi veya özel keratolitik uygulamalar</li>
                    <li>• Hijyen kurallarına uyum ve kişisel havlu kullanımı</li>
                    <li>• Asla evde kesici aletle müdahale etmeme</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
                <h4 className="font-bold text-red-900 mb-2 flex items-center">
                  <AlertTriangle className="text-red-600 mr-2" size={20} /> Kritik Uyarı
                </h4>
                <p className="text-sm text-red-800 leading-relaxed">
                  Evde kesici aletlerle nasır veya siğil kesmeye çalışmak ciddi enfeksiyon riski doğurur. Özellikle siğillerde yanlış müdahale virüsün etrafa yayılmasına ve yeni siğillerin çıkmasına neden olur.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full text-left p-5 font-semibold text-gray-900 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? <ChevronUp size={20} className="text-red-600" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    {openFaq === index && (
                      <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed border-t border-gray-100 bg-gray-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author Box */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-8 mb-12 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg border-2 border-white/20 flex-shrink-0">
                  SC
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Podolog Serdar Ceylan</h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Ayak sağlığı, medikal podoloji uygulamaları ve problemli tırnak/deri bakımı alanında klinik çalışmalar yürütmektedir.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-gray-200 pt-10">
              <h3 className="text-xl font-bold text-gray-900 mb-6">İlgili Diğer Yazılar</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <LocalizedLink to="/blog/nasir-nedir-evde-gecer-mi" className="group bg-gray-50 border border-gray-200 hover:border-red-300 rounded-2xl p-5 transition-all">
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Nasır Nedir? Evde Geçer mi?</h4>
                  <p className="text-xs text-gray-600">Medikal müdahale gereken durumlar ve kapsamlı rehber.</p>
                </LocalizedLink>
                <LocalizedLink to="/blog/nasir-neden-surekli-tekrar-eder" className="group bg-gray-50 border border-gray-200 hover:border-red-300 rounded-2xl p-5 transition-all">
                  <h4 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-1">Nasır Neden Sürekli Tekrar Eder?</h4>
                  <p className="text-xs text-gray-600">Basış bozuklukları ve tabanlık desteğinin önemi.</p>
                </LocalizedLink>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNasirSigilFarklari;
