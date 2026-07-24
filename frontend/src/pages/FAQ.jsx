import React from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqData = [
    {
      category: "Ayak Mantarı",
      questions: [
        { id: "q1", q: "Ayak mantarı kaç günde geçer?", a: "Ayak mantarı kaç günde geçer? sorusunun cevabı enfeksiyonun derecesine ve günlük bakıma bağlıdır. Hafif vakalarda düzenli temizlik ve uygun ürün kullanımıyla 2–4 hafta içinde iyileşme görülür. Ancak tedavi yarım bırakılırsa mantar tekrar edebilir ve süreci uzatır.", link: { text: "Ayak Mantarı Neden Tekrarlar?", url: "/blog/ayak-mantari-neden-tekrarlar" } },
        { id: "q2", q: "Ayak mantarı bulaşıcı mı?", a: "Ayak mantarı bulaşıcıdır ve ortak terlik, havlu veya nemli zeminler yoluyla kolayca geçebilir. Aile içinde aynı banyo veya ayakkabı kullanımı riski artırır. Bu nedenle kişisel eşyaların ayrı tutulması ve düzenli ayak hijyeni önemlidir.", link: { text: "Ayak Hijyeni İpuçları", url: "/blog/ayak-hijyeni-ipuclari" } },
        { id: "q3", q: "Ayak mantarı evde geçer mi?", a: "Erken dönemde evde düzenli temizlik, mantar önleyici ürünler ve kuru ortam sağlamak ile mantar kontrol altına alınabilir. Ancak ileri vakalarda dermatolojik destek ve profesyonel ürünler gerekir.", link: { text: "Foot Nail Care Serum", url: "/urun/foot-nail-care-serum" } },
        { id: "q4", q: "Ayak mantarı neden tekrarlar?", a: "En sık sebep tedavinin erken bırakılmasıdır. Ayrıca ayakların nemli kalması, uygun olmayan ayakkabı seçimi ve hijyen eksikliği de tekrar riskini artırır. Düzenli bakım ve önleyici ürün kullanımı tekrar riskini azaltır.", link: { text: "Ayak Mantarı Neden Tekrarlar?", url: "/blog/ayak-mantari-neden-tekrarlar" } },
        { id: "q5", q: "Ayak mantarı ile egzama nasıl ayırt edilir?", a: "Mantar genellikle kaşıntı ve soyulma ile belirgindir, egzama ise kuru, kızarık ve bazen çatlaklı bir görünüm verir. Kesin ayırım için dermatolojik muayene gereklidir.", link: { text: "Ayak Mantarı mı Egzama mı?", url: "/blog/ayak-mantari-mi-egzama-mi" } }
      ]
    },
    {
      category: "Tırnak Problemleri",
      questions: [
        { id: "q6", q: "Tırnak mantarı bulaşıcı mı?", a: "Evet, tırnak mantarı bulaşıcıdır. Ortak tırnak makası veya manikür malzemeleri risk yaratır. Düzenli temizlik ve kişisel hijyen kurallarına uymak bulaşmayı önler.", link: { text: "Tırnak Mantarı Çeşitleri", url: "/blog/tirnak-mantari-cesitleri" } },
        { id: "q7", q: "Tırnak mantarı ne kadar sürede düzelir?", a: "Tırnak mantarının iyileşmesi yavaş olabilir çünkü tırnak uzama hızı düşüktür. Düzenli bakım, mantar önleyici serum ve sabır ile birkaç ayda fark edilir sonuç alınabilir.", link: { text: "Foot Nail Care Serum", url: "/urun/foot-nail-care-serum" } },
        { id: "q8", q: "Tırnak sararması her zaman mantar mıdır?", a: "Hayır. Oje kullanımı, tırnak travmaları veya bazı cilt sorunları da sararmaya neden olabilir. Doğru tespit için dermatolojik değerlendirme gerekir." }
      ]
    },
    {
      category: "Ürün Kullanımı",
      questions: [
        { id: "q9", q: "Üreli krem her gün kullanılır mı?", a: "Cilt tipine göre değişir, ancak genellikle günlük kullanıma uygundur. Topuk çatlağı ve aşırı kuruluk problemlerinde düzenli kullanım iyileşmeyi hızlandırır.", link: { text: "Üreli Krem", url: "/urun/ureli-krem" } },
        { id: "q10", q: "Üre oranı kaç olmalı?", a: "Kuruluk yoğunluğuna göre değişir. Hassas ciltlerde düşük, topuk çatlağı veya aşırı kurulukta yüksek oran önerilir.", link: { text: "Üre Nedir?", url: "/blog/ure-nedir" } },
        { id: "q11", q: "Serum ne kadar sürede etki eder?", a: "Düzenli kullanımda ilk etkiler birkaç hafta içinde fark edilir. Tam sonuç için kullanım süresine devam etmek gerekir." },
        { id: "q12", q: "Temizleme köpüğü ne işe yarar?", a: "Ayaktaki ter, kir ve bakterileri temizleyerek kötü koku ve mantar oluşum riskini azaltır. Düzenli kullanım ile hijyen ve konfor sağlar.", link: { text: "Temizleme Köpüğü", url: "/urun/temizleme-kopugu" } }
      ]
    },
    {
      category: "Genel Ayak Sağlığı",
      questions: [
        { id: "q13", q: "Ayak kokusu neden olur?", a: "Genellikle terleme ve bakteriyel çoğalma kaynaklıdır. Kapalı, hava almayan ayakkabılar ve nemli ortamlar riski artırır. Düzenli temizlik ve ürün kullanımı kokuyu önler.", link: { text: "Ayak Kokusu Nedenleri", url: "/blog/ayak-kokusu-nedenleri" } },
        { id: "q14", q: "Ayak terlemesi mantara neden olur mu?", a: "Evet. Nemli ortam mantar oluşumu için uygun zemin sağlar. Kurutma, havalandırma ve mantar önleyici ürünler koruyucudur." },
        { id: "q15", q: "Topuk çatlağı neden olur?", a: "Kuruluk, yanlış ayakkabı seçimi ve bakım eksikliği en sık nedenlerdir. Düzenli nemlendirme ile çatlaklar azaltılabilir.", link: { text: "Üreli Krem", url: "/urun/ureli-krem" } },
        { id: "q16", q: "Medikal ayak bakımı nedir?", a: "Profesyonel ortamda yapılan, tıbbi kurallara uygun ayak bakımıdır. Sorunlu tırnak, mantar veya topuk çatlağı vakalarında en etkili çözümdür.", link: { text: "Medikal Ayak Bakımı Nedir?", url: "/blog/medikal-ayak-bakimi-nedir" } },
        { id: "q17", q: "Evde ayak bakımı nasıl yapılır?", a: "Ayaklar temiz, kuru ve nemli tutulmalı; düzenli bakım yapılmalı ve uygun ürünler kullanılmalıdır. Ayrıca çorap ve ayakkabı hijyeni çok önemlidir." },
        { id: "q18", q: "Ürünler hassas ciltler için uygun mu?", a: "Cilt tipine göre değişebilir. Hassas ciltlerde küçük bir bölgede test edilmesi önerilir. Olumsuz bir durum görülürse kullanım durdurulmalıdır." },
        { id: "q19", q: "Hamileler kullanabilir mi?", a: "Genel olarak topikal ürünler güvenlidir ancak doktor onayı alınması tavsiye edilir." },
        { id: "q20", q: "Ürünler ne kadar sürede sonuç verir?", a: "Sorunun derecesine bağlıdır. Düzenli kullanım ile genellikle 2–4 hafta içinde fark edilmeye başlanır, tam sonuç için süre uzayabilir." }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sık Sorulan Sorular - Ayak Sağlığı | Pedizone</title>
        <meta name="description" content="Ayak mantarı, tırnak problemleri, topuk çatlağı ve ayak bakımı hakkında en sık sorulan sorular ve detaylı cevaplar." />
        <link rel="canonical" href="https://pedizone.com/sss" />
      </Helmet>
      
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Sık Sorulan Sorular</h1>
            <p className="text-gray-500 text-sm">Son Güncelleme: Mart 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-10 rounded-r-lg">
            <p className="text-gray-700">
              Ayak sağlığı çoğu zaman ihmal edilir; mantar, koku, çatlak ve tırnak problemleri günlük yaşam kalitesini ciddi şekilde etkileyebilir. Bu sayfada en sık karşılaştığımız soruları anlaşılır, detaylı ve pratik ipuçlarıyla yanıtladık. Eğer sorunuz burada yoksa bizimle <a href="mailto:info@pedizone.com" className="text-red-600 font-medium hover:underline">iletişime geçebilirsiniz</a>.
            </p>
          </div>

          {/* FAQ Categories */}
          {faqData.map((category, catIdx) => (
            <div key={catIdx} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-red-600 inline-block">
                {category.category}
              </h2>
              <div className="space-y-2">
                {category.questions.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 pr-4">{item.q}</span>
                      <span className="text-red-600 text-xl font-bold flex-shrink-0">
                        {openItems[item.id] ? '−' : '+'}
                      </span>
                    </button>
                    {openItems[item.id] && (
                      <div className="px-4 pb-4 pt-0 border-t border-gray-100">
                        <p className="text-gray-600 mb-2">{item.a}</p>
                        {item.link && (
                          <a href={item.link.url} className="text-red-600 font-medium text-sm hover:underline">
                            → {item.link.text}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* CTA */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center mt-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Hâlâ kararsız mısınız?</h3>
            <p className="text-gray-600 mb-6">Sorununuzla ilgili daha detaylı bilgi için blog yazılarımıza göz atabilir veya ürünlerimizi inceleyebilirsiniz.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/blog" className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors">
                Blog'a Git
              </a>
              <a href="/#urunler" className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                Ürünleri İncele
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-500 text-sm">
              Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve tıbbi tanı, teşhis veya tedavi yerine geçmez. Herhangi bir sağlık sorunu yaşıyorsanız mutlaka bir sağlık uzmanına danışınız.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
