import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, LANGUAGE_INFO, SUPPORTED_LANGUAGES } from '../i18n/LanguageContext';

const LanguageSwitcher = () => {
  const { currentLang, switchLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dışarı tıklandığında dropdown'ı kapat
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentInfo = LANGUAGE_INFO[currentLang];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Mevcut dil butonu */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-label="Dil seçin"
      >
        <span className="text-xl">{currentInfo.flag}</span>
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {currentLang.toUpperCase()}
        </span>
        <svg 
          className={`w-4 h-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown menü */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
          {SUPPORTED_LANGUAGES.map((langCode) => {
            const info = LANGUAGE_INFO[langCode];
            const isActive = langCode === currentLang;
            
            return (
              <button
                key={langCode}
                onClick={() => {
                  switchLanguage(langCode);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                  isActive 
                    ? 'bg-red-50 text-red-600' 
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <span className="text-xl">{info.flag}</span>
                <span className="font-medium">{info.name}</span>
                {isActive && (
                  <svg className="w-4 h-4 ml-auto text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
