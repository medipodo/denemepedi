import React, { useState, useEffect } from 'react';

const UrunKremQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const totalQuestions = 5;

  const questions = [
    {
      number: 1,
      text: "Ayaklarınızdaki temel şikayet nedir?",
      options: [
        { value: "sadece_kuruluk", label: "Yoğun kuruluk, sertleşme ve topuk çatlakları" },
        { value: "kuruluk_ve_mantar", label: "Hem kuruluk/çatlaklar var, hem de kaşıntı/koku gibi ek sorunlar yaşıyorum" }
      ]
    },
    {
      number: 2,
      text: "Cildinizdeki kuruluk seviyesini nasıl tanımlarsınız?",
      options: [
        { value: "hafif", label: "Hafif (Sadece gerginlik hissi)" },
        { value: "orta", label: "Orta (Yer yer pullanma ve pürüzler)" },
        { value: "siddetli", label: "Şiddetli (Sürekli gergin, pul pul dökülen ve çatlamaya müsait)" }
      ]
    },
    {
      number: 3,
      text: "Ayaklarınızda kaşıntı, parmak aralarında soyulma, kötü koku veya tırnaklarda renk değişimi gibi belirtiler var mı?",
      options: [
        { value: "hayir", label: "Hayır, bu belirtiler yok" },
        { value: "evet", label: "Evet, bu belirtilerden bir veya daha fazlası mevcut" }
      ]
    },
    {
      number: 4,
      text: "Ayaklarınızda veya topuklarınızda kanayan, sızıntı yapan açık bir yara var mı?",
      options: [
        { value: "hayir", label: "Hayır, yok" },
        { value: "evet", label: "Evet, var" }
      ]
    },
    {
      number: 5,
      text: "Bilinen bir kronik rahatsızlığınız (Diyabet, Tiroid, Dolaşım Bozukluğu vb.) var mı?",
      options: [
        { value: "hayir", label: "Hayır" },
        { value: "evet", label: "Evet" }
      ]
    }
  ];

  const getRecommendation = () => {
    const hasOpenWound = answers.q3 === 'evet';
    const hasChronicDisease = answers.q4 === 'evet';
    const hasFungalSymptoms = answers.q2 === 'evet';

    // KURAL 1: Açık yara var → Kesinlikle doktora yönlendir
    if (hasOpenWound) {
      return {
        title: "⚠️ Açık Yara - Lütfen Doktorunuza Danışın!",
        type: "warning",
        icon: "🩺",
        description: "Açık yara tespit edildi. Açık yaralar üzerine herhangi bir ürün kullanmak enfeksiyon riskini artırabilir.",
        product: "",
        reason: "Yaranız iyileştikten sonra podologunuza veya doktorunuza danışarak uygun bakım ürünlerini kullanabilirsiniz. Şu anda en önemli olan yaranızın profesyonel takip altında iyileşmesidir.",
        usage: "",
        showCTA: false
      };
    }

    // KURAL 2: Mantar belirtileri var + Kronik hastalık → 3'lü Set + Uyarı
    if (hasFungalSymptoms && hasChronicDisease) {
      return {
        title: "Komple Bakım Seti + Podolog Önerisi",
        type: "set",
        icon: "🎁",
        description: "Cevaplarınız, cildinizin hem yoğun neme ihtiyaç duyduğunu hem de mantar belirtileri gösterdiğini işaret ediyor. Kronik rahatsızlığınız nedeniyle kullanmadan önce mutlaka podologunuza danışın.",
        product: "Pedizone 3'lü Bakım Seti: Krem + Serum + Köpük",
        reason: "Podolog onayı sonrası:\n\n• Antifungal Serum: Enfeksiyon belirtilerini hedefler\n• Intense Repair Krem: Cildi onarır ve nemlendirir\n• Temizleme Köpüğü: Günlük hijyen sağlar\n\n⚠️ ÖNEMLİ: Kronik rahatsızlığınız nedeniyle kullanmadan önce podologunuza danışın.",
        usage: "Podolog onayı aldıktan sonra düzenli kullanım önerilir.",
        showCTA: true
      };
    }

    // KURAL 3: Mantar belirtileri var (kronik hastalık yok) → 3'lü Set
    if (hasFungalSymptoms) {
      return {
        title: "Komple Bakım Seti Sizin İçin İdeal!",
        type: "set",
        icon: "🎁",
        description: "Cevaplarınız, cildinizin hem yoğun neme ihtiyaç duyduğunu hem de mantar belirtileri gösterdiğini işaret ediyor.",
        product: "Pedizone 3'lü Bakım Seti: Krem + Serum + Köpük",
        reason: "En etkili sonuç için 3'lü Bakım Seti:\n\n• Antifungal Serum: Enfeksiyon belirtilerini (kaşıntı, koku, soyulma) doğrudan hedefler\n• Intense Repair Krem: Cildin kaybettiği nemi geri kazandırır, çatlakları onarır\n• Temizleme Köpüğü: Günlük hijyen sağlayarak sorunun tekrarlamasını önler",
        usage: "Bu kombinasyon, sorunu her açıdan ele alarak size tam bir çözüm sunar.",
        showCTA: true
      };
    }

    // KURAL 4: Sadece kuruluk + Kronik hastalık → Krem + Uyarı
    if (hasChronicDisease) {
      return {
        title: "✅ Bu Ürün Size Uygun - Podolog Onayı Önerilir",
        type: "suitable",
        icon: "✨",
        description: "Temel sorununuz yoğun kuruluk ve çatlaklar. Kronik rahatsızlığınız nedeniyle kullanmadan önce podologunuza danışmanızı öneririz.",
        product: "Pedizone Intense Repair Krem",
        reason: "Cildinize kaybettiği nemi geri kazandırmak, çatlakları onarmak için ideal bir seçimdir.\n\n⚠️ ÖNEMLİ: Kronik rahatsızlığınız nedeniyle kullanmadan önce podologunuza danışın.",
        usage: "Podolog onayı aldıktan sonra günde 2 kez düzenli kullanım önerilir.",
        showCTA: true
      };
    }

    // KURAL 5: Sadece kuruluk (normal durum) → Krem
    return {
      title: "✅ Bu Ürün Tam Size Göre!",
      type: "suitable",
      icon: "✨",
      description: "Cevaplarınız, temel sorununuzun yoğun kuruluk ve çatlaklar olduğunu gösteriyor.",
      product: "Pedizone Intense Repair Krem",
      reason: "Cildinize kaybettiği nemi geri kazandırmak, çatlakları onarmak ve cildin koruyucu bariyerini güçlendirmek için mükemmel bir seçimdir.",
      usage: "Günde 2 kez düzenli kullanımda ayaklarınızın daha pürüzsüz ve sağlıklı olduğunu göreceksiniz.",
      showCTA: true
    };
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

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'krem_quiz_completed', {
          'event_category': 'Ürün Quiz',
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
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
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

        .pedizone-product-recommendation.warning {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .pedizone-product-name {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .pedizone-product-reason {
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-line;
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
          .pedizone-quiz-card { padding: 25px; }
          .pedizone-quiz-header h1 { font-size: 24px; }
          .pedizone-quiz-question-text { font-size: 16px; }
        }
      `}</style>

      <div className="pedizone-quiz-container">
        <div className="pedizone-quiz-card">
          {!showResult ? (
            <>
              <div className="pedizone-quiz-header">
                <h1>🧴 Intense Repair Krem - Uygunluk Testi</h1>
                <p>5 soruyla bu ürünün size uygun olup olmadığını öğrenin</p>
              </div>

              <div className="pedizone-quiz-progress-bar">
                <div className="pedizone-quiz-progress-fill" style={{ width: `${progress}%` }}></div>
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
                <button className="pedizone-quiz-btn pedizone-quiz-btn-prev" onClick={handlePrev} disabled={currentQuestion === 0}>
                  ← Geri
                </button>
                
                {currentQuestion === totalQuestions - 1 ? (
                  <button className="pedizone-quiz-btn pedizone-quiz-btn-submit" onClick={handleSubmit}>
                    Sonuçları Gör
                  </button>
                ) : (
                  <button className="pedizone-quiz-btn pedizone-quiz-btn-next" onClick={handleNext}>
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
              
              {recommendation.product && (
                <div className={`pedizone-product-recommendation ${recommendation.type === 'warning' ? 'warning' : ''}`}>
                  {recommendation.product && <div className="pedizone-product-name">{recommendation.product}</div>}
                  <div className="pedizone-product-reason">{recommendation.reason}</div>
                </div>
              )}

              {recommendation.usage && (
                <div className="pedizone-usage-instructions">
                  <div className="pedizone-usage-title">💡 Önemli Bilgi:</div>
                  <div className="pedizone-usage-text">{recommendation.usage}</div>
                </div>
              )}

              {recommendation.showCTA && (
                <>
                  <a href="/bayiler" className="pedizone-cta-button">
                    Satış Noktalarını Göster
                  </a>
                  <br />
                </>
              )}
              
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

export default UrunKremQuiz;
