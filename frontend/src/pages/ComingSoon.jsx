import React from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { ArrowLeft } from 'lucide-react'; 
import { Button } from '../components/ui/button'; 

const ComingSoon = () => { 
  const navigate = useNavigate(); 

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
            <h2 className="text-xl md:text-2xl font-bold">
              Die deutsche Version ist jetzt verfügbar.
            </h2> 
            <p className="text-sm md:text-lg opacity-90"> 
              Unsere deutsche Website ist jetzt live.<br /> 
              Sie können sie über den folgenden Button aufrufen.
            </p> 

            {/* CTA Button */}
            <div className="pt-4">
              <a href="https://pedizone.de" target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-gray-200 px-6 py-4 text-base font-semibold rounded-full shadow-lg flex items-center gap-2">
                  🇩🇪 Zur deutschen Website
                </Button>
              </a>
            </div>

          </div> 

        </div> 

        {/* Back Button */} 
        <div className="mt-8 md:mt-12"> 
          <Button
            onClick={() => navigate('/')}
            className="bg-white text-red-600 hover:bg-gray-100 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold rounded-full shadow-xl flex items-center gap-2"
          >
            <ArrowLeft size={20} /> Geri Dön
          </Button>
        </div> 

      </div> 
    </div> 
  ); 
}; 

export default ComingSoon;
