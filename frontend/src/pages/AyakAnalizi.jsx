import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import LocalizedLink from '../components/LocalizedLink';

const AyakAnalizi = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const totalQuestions = 6;

  // Akıllı öneri algoritması
  const getSmartRecommendation = () => {
    const mainProblem = answers.q0;
    const sweating = answers.q1;
    const skinCondition = answers.q2;
    const history = answers.q4;
    
    // KURAL 1: Kuruluk/Çatlak sorunu
    if (mainProblem === 'nasir' || skinCondition === 'catlak') {
      return {
        title: "Kuruluk ve Çatlak Sorunu",
        icon: "🩹",
        description: "Ayaklarınızda kuruluk ve çatlaklar tespit edildi. Yoğun nem ve onarım gerektiren bir durum. Podologunuza danışmanızı öneririz.",
        product: "Pedizone Intense Repair %15 Üreli Krem",
        reason: "%15 üre içeriği ile derinlemesine nemlendirme ve onarım sağlar. Çatlak topuklar için ideal formül.",
        usage: "Günde 2 kez (sabah ve gece) temiz, kuru ayaklara uygulayın. Özellikle topuk ve çatlak bölgelere masaj yaparak sürün. Gece çorap giymek etkiyi artırır."
      };
    }

    // KURAL 2: Koku + Mantar belirtileri
    if (mainProblem === 'koku' && (skinCondition === 'pul' || skinCondition === 'kizarik')) {
      return {
        title: "Koku ve Mantar - Kompleks Bakım Gerekli",
        icon: "🚨",
        description: "Hem koku hem de mantar belirtileri tespit edildi. Çoklu şikayet için kompleks bakım öneriyoruz. Podologunuza danışmanızı öneririz.",
        product: "Pedizone 3'lü Set: Temizleme Köpüğü + Bakım Serumu + Onarıcı Krem",
        reason: "Kompleks bakım sistemi: Köpük ile temizlik, Serum ile antifungal koruma, Krem ile nemlendirme. 3 adımda tam çözüm.",
        usage: "1) Sabah-akşam Temizleme Köpüğü ile yıkayın. 2) Bakım Serumu'nu parmak aralarına ve sorunlu bölgelere sürün. 3) Onarıcı Krem ile tüm ayağı nemlendirin."
      };
    }

    // KURAL 3: Tırnak + Koku
    if (mainProblem === 'tirnak' && sweating !== 'az') {
      return {
        title: "Tırnak Problemi ve Koku - Kompleks Bakım",
        icon: "💅",
        description: "Tırnak problemi ve koku kombinasyonu tespit edildi. Kapsamlı bakım öneriyoruz. Podologunuza danışmanızı öneririz.",
        product: "Pedizone 3'lü Set: Temizleme Köpüğü + Bakım Serumu + Onarıcı Krem",
        reason: "Tırnak çevresi hijyeni ve genel ayak bakımı için ideal kombinasyon. Köpük temizler, Serum korur, Krem nemlendirir.",
        usage: "Günde 2 kez Köpük ile temizlik, Serum'u tırnak çevresine özenle uygulayın, Krem ile genel nemlendirme yapın."
      };
    }

    // KURAL 4: Sadece Mantar
    if (mainProblem === 'mantar' || skinCondition === 'kizarik') {
      return {
        title: "Mantar Enfeksiyonu - Aktif Tedavi",
        icon: "🔴",
        description: "Mantar enfeksiyonu belirtileri tespit edildi. Antifungal bakım şart. Podologunuza danışmanızı öneririz.",
        product: "Pedizone 3'lü Set: Temizleme Köpüğü + Bakım Serumu + Onarıcı Krem",
        reason: "Antifungal koruma + bakım + nemlendirme. Mantar tedavisinde 3 adımlı yaklaşım en etkilidir.",
        usage: "Günde 2 kez Köpük ile derin temizlik, Serum ile antifungal koruma, Krem ile cilt bariyeri güçlendirme."
      };
    }

    // KURAL 5: Sadece Koku (mantar yok, deri sağlıklı)
    if (mainProblem === 'koku' && skinCondition === 'saglikli') {
      return {
        title: "Koku Problemi - Hijyen Çözümü",
        icon: "✨",
        description: "Ayaklarınızda sadece koku sorunu var. Düzenli hijyen ile kontrol altına alınabilir.",
        product: "Pedizone Temizleme Köpüğü",
        reason: "Keratolitik ve antifungal özellikleri ile kokuya neden olan bakterilerin besin kaynağını ortadan kaldırır. Tek başına yeterli.",
        usage: "Günde 1-2 kez (tercihen akşamları) Temizleme Köpüğü ile ayakları derinlemesine temizleyin. Parmak aralarını özellikle iyi kurulayın."
      };
    }

    // KURAL 6: Koku + Yoğun Terleme
    if (mainProblem === 'koku' && sweating === 'cok' && skinCondition === 'saglikli') {
      return {
        title: "Yoğun Terleme ve Koku",
        icon: "💦",
        description: "Yoğun terleme nedeniyle koku oluşuyor. Düzenli bakım önemli.",
        product: "Pedizone Temizleme Köpüğü",
        reason: "Yoğun terlemeye karşı günlük hijyen çözümü. Bakterileri ve koku kaynağını temizler.",
        usage: "Günde 2 kez (sabah ve akşam) kullanın. Yoğun terleme sonrası ayakları hemen yıkayın."
      };
    }

    // KURAL 7: Pullanma var
    if (skinCondition === 'pul') {
      return {
        title: "Ölü Deri ve Pullanma - Kompleks Bakım",
        icon: "⚠️",
        description: "Ölü deri birikimi ve pullanma var. Mantar riski nedeniyle kompleks bakım öneriyoruz. Podologunuza danışmanızı öneririz.",
        product: "Pedizone 3'lü Set: Temizleme Köpüğü + Bakım Serumu + Onarıcı Krem",
        reason: "Keratolitik temizlik + antifungal koruma + nemlendirme. Pullanmayı önler, cildi yeniler.",
        usage: "Köpük ile ölü deriyi temizleyin, Serum ile mantar oluşumunu önleyin, Krem ile cildi nemlendirin."
      };
    }

    // VARSAYILAN: Genel Bakım
    return {
      title: "Genel Bakım ve Koruma",
      icon: "✨",
      description: "Ayaklarınız genel olarak sağlıklı. Önleyici bakım ile bu durumu koruyabilirsiniz.",
      product: "Pedizone Temizleme Köpüğü (Koruma Amaçlı)",
      reason: "Düzenli kullanımı, mantar ve koku oluşumunu önler. Ayak hijyenini üst seviyede tutar.",
      usage: "Günde 1 kez (tercihen akşamları) ayakları temizleyin. Özellikle spor veya kapalı ayakkabı giydiğiniz günlerde kullanın."
    };
  };

  // Sorular
  const questions = [
    {
      number: 1,
      text: "Ayaklarınızda en belirgin sorun nedir?",
      options: [
        { value: "koku", label: "Koku (Bromodoz)" },
        { value: "mantar", label: "Mantar enfeksiyonu (Tinea Pedis)" },
        { value: "tirnak", label: "Tırnak batması" },
        { value: "nasir", label: "Nasır ve çatlamalar" },
        { value: "bakim", label: "Genel bakım ve hijyen" }
      ]
    },
    {
      number: 2,
      text: "Ayaklarınız ne kadar terleme eğilimi gösteriyor?",
      options: [
        { value: "cok", label: "Çok fazla (Ayakkabılar ıslak kalıyor)" },
        { value: "orta", label: "Orta düzeyde (Normal terleme)" },
        { value: "az", label: "Az (Kuru ayaklar)" }
      ]
    },
    {
      number: 3,
      text: "Ayak derisinin durumu nasıl?",
      options: [
        { value: "pul", label: "Pul pul dökülüyor (Ölü deri birikimi)" },
        { value: "kizarik", label: "Kızarık ve kaşıntılı" },
        { value: "catlak", label: "Çatlak ve sertleşmiş" },
        { value: "saglikli", label: "Sağlıklı görünüyor" }
      ]
    },
    {
      number: 4,
      text: "Ayakkabı seçimi ve giyim alışkanlıklarınız?",
      options: [
        { value: "kapali", label: "Kapalı ayakkabı giyiyorum (Spor ayakkabısı, bot vb.)" },
        { value: "acik", label: "Açık ayakkabı tercih ediyorum (Sandalet, terlik)" },
        { value: "degisken", label: "Değişken (Duruma göre değişiyor)" }
      ]
    },
    {
      number: 5,
      text: "Daha önce ayak mantarı veya koku sorunu yaşadınız mı?",
      options: [
        { value: "sik", label: "Evet, sık sık (Kronik sorun)" },
        { value: "nadiren", label: "Evet, ama nadiren" },
        { value: "hayir", label: "Hayır, ilk kez" },
        { value: "hic", label: "Hiç Mantar Sorunu Yaşamadım" }
      ]
    },
    {
      number: 6,
      text: "Ayak bakımına ne kadar zaman ayırabilirsiniz?",
      options: [
        { value: "gunluk", label: "Günlük düzenli bakım (Her gün 5-10 dakika)" },
        { value: "haftalik", label: "Haftalık bakım (Haftada 1-2 kez)" },
        { value: "minimal", label: "Minimal (Sadece gerektiğinde)" }
      ]
    }
  ];

  const getRecommendation = () => {
    return getSmartRecommendation();
  };

  const handleOptionChange = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [`q${questionIndex}`]: value
    }));
  };

  const handleNext = () => {
    if (answers[`q${currentQuestion}`]) {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    } else {
      alert('Lütfen bir seçenek seçiniz.');
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    if (answers[`q${currentQuestion}`]) {
      const result = getRecommendation();
      setRecommendation(result);
      setShowResult(true);

      // Google Analytics tracking
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'quiz_completed', {
          'event_category': 'Ayak Analiz Aracı',
          'event_label': result.product,
          'value': 1
        });
      }
    } else {
      alert('Lütfen bir seçenek seçiniz.');
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setRecommendation(null);
    window.scrollTo(0, 0);
  };

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-700 flex justify-center items-center py-24 px-4">
      <Helmet>
        <title>Ayak Analizi - Size Uygun Ürünü Bulun | PediZone®</title>
        <meta name="description" content="6 basit soruyla ayak sağlığınızı analiz edin ve size özel PediZone® ürün önerisi alın. Ücretsiz, hızlı ve kolay ayak analizi." />
        <link rel="canonical" href="https://pedizone.com/ayak-analizi" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ayak Analizi - Size Uygun Ürünü Bulun" />
        <meta property="og:description" content="6 basit soruyla ayak sağlığınızı analiz edin ve size özel PediZone® ürün önerisi alın." />
        <meta property="og:url" content="https://pedizone.com/ayak-analizi" />
        <meta property="og:image" content="https://pedizone.com/og-image-analiz.jpg" />
      </Helmet>
      
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 md:p-10">
        {!showResult ? (
          <>
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">🦶 Ayak Analiz Aracı</h1>
              <p className="text-gray-600 text-sm">6 basit soruyla ayaklarınızı analiz edin ve size özel ürün önerisi alın</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-red-100 rounded-full mb-8 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Question */}
            <div className="mb-2">
              <span className="text-red-600 text-xs font-bold uppercase tracking-wider">
                Soru {questions[currentQuestion].number} / {totalQuestions}
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].text}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    answers[`q${currentQuestion}`] === option.value
                      ? 'border-red-500 bg-red-50'
                      : 'border-gray-200 hover:border-red-300 hover:bg-red-50/50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`q${currentQuestion}`}
                    value={option.value}
                    checked={answers[`q${currentQuestion}`] === option.value}
                    onChange={() => handleOptionChange(currentQuestion, option.value)}
                    className="w-5 h-5 text-red-600 mr-4 accent-red-600"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={currentQuestion === 0}
                className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 rounded-xl font-semibold transition-all hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Geri
              </button>
              
              {currentQuestion === totalQuestions - 1 ? (
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  Sonuçları Gör
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex-1 py-3 px-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.02]"
                >
                  İleri →
                </button>
              )}
            </div>
          </>
        ) : (
          /* Results */
          <div className="text-center animate-fadeIn">
            <div className="text-6xl mb-4">{recommendation.icon}</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{recommendation.title}</h2>
            <p className="text-gray-600 mb-8">{recommendation.description}</p>
            
            {/* Product Recommendation */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl mb-6">
              <h3 className="text-lg font-bold mb-2">Önerilen Ürün</h3>
              <p className="text-xl font-semibold mb-2">{recommendation.product}</p>
              <p className="text-red-100 text-sm">{recommendation.reason}</p>
            </div>

            {/* Usage Instructions */}
            <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-xl mb-8 text-left">
              <h4 className="font-bold text-gray-900 mb-2">💡 Kullanım Talimatları:</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{recommendation.usage}</p>
            </div>

            {/* CTA Buttons */}
            <LocalizedLink 
              to="/bayiler" 
              className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:scale-[1.02] mb-4"
            >
              Satış Noktalarını Göster
            </LocalizedLink>
            <br />
            <button 
              onClick={handleRestart}
              className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              🔄 Yeniden Başla
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AyakAnalizi;
