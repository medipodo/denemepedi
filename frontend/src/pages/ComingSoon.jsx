import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

const ComingSoon = () => {
  const navigate = useNavigate();
  
  // 30 gün = 30 * 24 * 60 * 60 * 1000 milisaniye
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = targetDate - new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: 'url(/images/coming-soon-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center text-white">
        {/* Countdown Timer */}
        <div className="mb-8 md:mb-12">
          <div className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{timeLeft.days}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">Gün</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{timeLeft.hours}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">Saat</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{timeLeft.minutes}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">Dakika</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-3 md:p-6 min-w-[70px] md:min-w-[100px]">
              <div className="text-3xl md:text-5xl font-bold mb-1 md:mb-2">{timeLeft.seconds}</div>
              <div className="text-xs md:text-sm uppercase tracking-wider opacity-80">Saniye</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-8 md:space-y-12 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-6 md:p-12">
          {/* Turkish */}
          <div className="space-y-3 md:space-y-4">
            <div className="text-2xl md:text-3xl font-bold">🇹🇷</div>
            <h2 className="text-xl md:text-2xl font-bold">Dil seçeneklerimizi güncelliyoruz.</h2>
            <p className="text-sm md:text-lg opacity-90">
              Bu süreçte yaşanabilecek aksaklıklar için özür dileriz.<br />
              Geçici olarak tarayıcınızın çeviri (translate) özelliğini kullanabilirsiniz.
            </p>
          </div>

          <div className="border-t border-white/20"></div>

          {/* English */}
          <div className="space-y-3 md:space-y-4">
            <div className="text-2xl md:text-3xl font-bold">🇬🇧</div>
            <h2 className="text-xl md:text-2xl font-bold">We are currently revising our website to add language options.</h2>
            <p className="text-sm md:text-lg opacity-90">
              We apologize for any inconvenience during this process.<br />
              For now, you may use your browser's translate feature.
            </p>
          </div>

          <div className="border-t border-white/20"></div>

          {/* German */}
          <div className="space-y-3 md:space-y-4">
            <div className="text-2xl md:text-3xl font-bold">🇩🇪</div>
            <h2 className="text-xl md:text-2xl font-bold">Wir überarbeiten derzeit unsere Website, um Sprachoptionen hinzuzufügen.</h2>
            <p className="text-sm md:text-lg opacity-90">
              Wir bitten um Entschuldigung für eventuelle Unannehmlichkeiten.<br />
              Bis dahin können Sie die Übersetzungsfunktion Ihres Browsers nutzen.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 md:mt-12">
          <Button 
            onClick={() => navigate('/')}
            className="bg-white text-red-600 hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold rounded-full shadow-xl"
          >
            <ArrowLeft className="mr-2" size={20} />
            Geri Dön
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
