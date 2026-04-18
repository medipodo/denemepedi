import React from 'react';
import { useTranslation } from '../i18n/useTranslation';
import { useLanguage } from '../i18n/LanguageContext';
import SEOHead from './SEOHead';
import LocalizedLink from './LocalizedLink';
import { Button } from './ui/button';
import { ArrowLeft, Clock } from 'lucide-react';

/**
 * İçerik olmayan diller için gösterilecek sayfa
 */
const NoContentPage = () => {
  const { t } = useTranslation();
  const { languageInfo } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title={t('seo.noContentTitle')}
        description={t('seo.noContentMessage')}
        noIndex={true}
      />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-10 h-10 text-red-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {t('seo.noContentTitle')}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {t('seo.noContentMessage')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <LocalizedLink to="/">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  {languageInfo.code === 'tr' ? 'Ana Sayfaya Dön' : 
                   languageInfo.code === 'en' ? 'Back to Home' : 'Zurück zur Startseite'}
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoContentPage;
