import React, { useState, useEffect } from 'react';

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
        { value: "hayir", label: "Hayır, ilk kez" }
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
    <>
      <style>{`
        .pedizone-quiz-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 80px 20px 40px;
        }

        .pedizone-quiz-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(220, 38, 38, 0.3);
          max-width: 700px;
          width: 100%;
          padding: 40px;
        }

        .pedizone-quiz-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .pedizone-quiz-header h1 {
          color: #333;
          font-size: 28px;
          margin-bottom: 10px;
        }

        .pedizone-quiz-header p {
          color: #666;
          font-size: 14px;
        }

        .pedizone-quiz-progress-bar {
          width: 100%;
          height: 6px;
          background: #fee2e2;
          border-radius: 3px;
          margin-bottom: 30px;
          overflow: hidden;
        }

        .pedizone-quiz-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #dc2626 0%, #b91c1c 100%);
          transition: width 0.3s ease;
        }

        .pedizone-quiz-question-number {
          color: #dc2626;
          font-size: 12px;
          font-weight: bold;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .pedizone-quiz-question-text {
          color: #333;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
        }

        .pedizone-quiz-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pedizone-quiz-option {
          display: flex;
          align-items: center;
          padding: 15px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pedizone-quiz-option:hover {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .pedizone-quiz-option.selected {
          border-color: #dc2626;
          background: #fef2f2;
        }

        .pedizone-quiz-option input[type="radio"] {
          margin-right: 15px;
          cursor: pointer;
          width: 20px;
          height: 20px;
          accent-color: #dc2626;
        }

        .pedizone-quiz-option label {
          cursor: pointer;
          flex: 1;
          color: #333;
          font-size: 15px;
        }

        .pedizone-quiz-buttons {
          display: flex;
          gap: 15px;
          margin-top: 30px;
          justify-content: space-between;
        }

        .pedizone-quiz-btn {
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pedizone-quiz-btn-prev {
          background: #f3f4f6;
          color: #333;
        }

        .pedizone-quiz-btn-prev:hover:not(:disabled) {
          background: #e5e7eb;
        }

        .pedizone-quiz-btn-next, .pedizone-quiz-btn-submit {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          flex: 1;
        }

        .pedizone-quiz-btn-next:hover, .pedizone-quiz-btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(220, 38, 38, 0.4);
        }

        .pedizone-quiz-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .pedizone-quiz-result {
          text-align: center;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pedizone-result-icon {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .pedizone-result-title {
          color: #333;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .pedizone-result-description {
          color: #666;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .pedizone-product-recommendation {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 25px;
          border-radius: 10px;
          margin-bottom: 25px;
        }

        .pedizone-product-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .pedizone-product-reason {
          font-size: 14px;
          line-height: 1.5;
        }

        .pedizone-usage-instructions {
          background: #fef2f2;
          border-left: 4px solid #dc2626;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 25px;
          text-align: left;
        }

        .pedizone-usage-title {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }

        .pedizone-usage-text {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        .pedizone-cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
          color: white;
          padding: 15px 40px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .pedizone-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(220, 38, 38, 0.4);
        }

        .pedizone-restart-button {
          background: #f3f4f6;
          color: #333;
          padding: 12px 30px;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pedizone-restart-button:hover {
          background: #e5e7eb;
        }

        @media (max-width: 768px) {
          .pedizone-quiz-card {
            padding: 25px;
          }

          .pedizone-quiz-header h1 {
            font-size: 24px;
          }

          .pedizone-quiz-question-text {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="pedizone-quiz-container">
        <div className="pedizone-quiz-card">
          {!showResult ? (
            <>
              <div className="pedizone-quiz-header">
                <h1>🦶 Ayak Analiz Aracı</h1>
                <p>6 basit soruyla ayaklarınızı analiz edin ve size özel ürün önerisi alın</p>
              </div>

              <div className="pedizone-quiz-progress-bar">
                <div 
                  className="pedizone-quiz-progress-fill" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div className="pedizone-quiz-question-number">
                Soru {questions[currentQuestion].number} / {totalQuestions}
              </div>
              <div className="pedizone-quiz-question-text">
                {questions[currentQuestion].text}
              </div>

              <div className="pedizone-quiz-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <label
                    key={index}
                    className={`pedizone-quiz-option ${answers[`q${currentQuestion}`] === option.value ? 'selected' : ''}`}
                  >
                    <input
                      type="radio"
                      name={`q${currentQuestion}`}
                      value={option.value}
                      checked={answers[`q${currentQuestion}`] === option.value}
                      onChange={() => handleOptionChange(currentQuestion, option.value)}
                    />
                    <label>{option.label}</label>
                  </label>
                ))}
              </div>

              <div className="pedizone-quiz-buttons">
                <button
                  className="pedizone-quiz-btn pedizone-quiz-btn-prev"
                  onClick={handlePrev}
                  disabled={currentQuestion === 0}
                >
                  ← Geri
                </button>
                
                {currentQuestion === totalQuestions - 1 ? (
                  <button
                    className="pedizone-quiz-btn pedizone-quiz-btn-submit"
                    onClick={handleSubmit}
                  >
                    Sonuçları Gör
                  </button>
                ) : (
                  <button
                    className="pedizone-quiz-btn pedizone-quiz-btn-next"
                    onClick={handleNext}
                  >
                    İleri →
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="pedizone-quiz-result">
              <div className="pedizone-result-icon">{recommendation.icon}</div>
              <div className="pedizone-result-title">{recommendation.title}</div>
              <div className="pedizone-result-description">{recommendation.description}</div>
              
              <div className="pedizone-product-recommendation">
                <div className="pedizone-product-name">{recommendation.product}</div>
                <div className="pedizone-product-reason">{recommendation.reason}</div>
              </div>

              <div className="pedizone-usage-instructions">
                <div className="pedizone-usage-title">💡 Kullanım Talimatları:</div>
                <div className="pedizone-usage-text">{recommendation.usage}</div>
              </div>

              <a 
                href="/bayiler" 
                className="pedizone-cta-button"
              >
                Satış Noktalarını Göster
              </a>
              <br />
              <button className="pedizone-restart-button" onClick={handleRestart}>
                Yeniden Başla
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AyakAnalizi;
