import { useLanguage } from './LanguageContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { currentLang } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let result = translations[currentLang];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to Turkish
        result = translations.tr;
        for (const k2 of keys) {
          if (result && result[k2] !== undefined) {
            result = result[k2];
          } else {
            return key;
          }
        }
        break;
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  return { t, currentLang };
};
