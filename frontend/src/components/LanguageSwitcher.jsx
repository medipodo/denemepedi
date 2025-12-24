import React from 'react';
import { useLanguage, LANGUAGE_INFO, SUPPORTED_LANGUAGES } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLang, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-0.5">
      {SUPPORTED_LANGUAGES.map((langCode) => {
        const info = LANGUAGE_INFO[langCode];
        const isActive = langCode === currentLang;
        
        return (
          <button
            key={langCode}
            onClick={() => switchLanguage(langCode)}
            className={`p-1.5 rounded-lg transition-all ${
              isActive 
                ? 'bg-white/20 ring-2 ring-white' 
                : 'hover:bg-white/10'
            }`}
            aria-label={`${info.name} diline geç`}
            title={info.name}
          >
            <img 
              src={info.flag} 
              alt={`${info.name} bayrağı`}
              className="w-8 h-8 object-contain"
            />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
