import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CheckCircle, Phone, Mail, MapPin, Star, ShieldCheck, Droplets, Sparkles, Heart, Award, Footprints, BookOpen } from 'lucide-react';
import { products, siteInfo } from '../mock';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import SerumProductContent from '../components/SerumProductContent';
import FoamProductContent from '../components/FoamProductContent';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';

const ProductDetail = () => {
  const { slug } = useLanguage();
  const product = products.find(p => p.id === slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Informational Product Schema (NO offers/price - not an e-commerce site)
 const productSchema = product ? {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": `https://pedizone.com${product.image}`,
  "category": product.category || "Ayak Bakım Ürünleri",
  "brand": {
    "@type": "Brand",
    "name": "PediZone"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": product.manufacturer || "PediZone"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "139"
  }
} : null;

  // Ürüne özel görseller
  const productImages = slug === 'ureli-krem' ? [
    '/images/products/urea-cream/pedizone-urea-cream-main.jpg',
    '/images/products/urea-cream/g3.jpg',
    '/images/products/urea-cream/topuk-kremi-pedizone-irc-CvsnsKXJ.jpg',
    '/images/products/urea-cream/topuk-kremi-pedizone-COXK4Rgz.jpg',
    '/images/products/urea-cream/topuk-kremi-pedizone2-COVU3jbi.jpg'
  ] : slug === 'foot-nail-care-serum' ? [
    '/images/products/serum/pedizone-serum988.jpg',
    '/images/products/serum/pedizone-before-after5.jpg',
    '/images/products/serum/pedizone-foot-fungus.jpg',
    '/images/products/serum/all-products.jpg'
  ] : slug === 'temizleme-kopugu' ? [
    '/images/products/foam/foam-cover.jpg',
    '/images/products/foam/foam-product.jpg',
    '/images/products/foam/foam-usage.jpg',
    '/images/products/foam/foam-detail.jpg',
    '/images/products/foam/foam-lifestyle.jpg'
  ] : [product?.image];

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && selectedImage < productImages.length - 1) {
        setSelectedImage(prev => prev + 1);
      } else if (diff < 0 && selectedImage > 0) {
        setSelectedImage(prev => prev - 1);
      }
    }
  };

  // Eğer serum ise özel component render et
  if (slug === 'foot-nail-care-serum') {
    return <SerumProductContent product={product} productImages={productImages} />;
  }

  // Eğer köpük ise özel component render et
  if (slug === 'temizleme-kopugu') {
    return <FoamProductContent product={product} productImages={productImages} />;
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ürün Bulunamadı</h1>
          <LocalizedLink to="/"><Button className="bg-red-600 hover:bg-red-700 text-white"><ArrowLeft className="mr-2" /> Ana Sayfaya Dön</Button></LocalizedLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Schema */}
      <Helmet>
        <title>PediZone® %15 Urea Intense Repair Cream | Profesyonel Ayak Kremi</title>
        <meta name="description" content="Çatlak topuklar ve aşırı kuruluk için geliştirilmiş profesyonel bakım kremi. %15 üre, bitkisel antifungal destek. Dermatolojik olarak test edilmiştir." />
        <link rel="canonical" href={`https://pedizone.com/urun/${slug}`} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={product?.name || "PediZone® Ürün"} />
        <meta property="og:description" content={product?.description || "Profesyonel ayak bakım ürünü"} />
        <meta property="og:url" content={`https://pedizone.com/urun/${slug}`} />
        <meta property="og:image" content={`https://pedizone.com${product?.image || '/images/pedizone-og-home-v2.jpg'}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <LocalizedLink to="/" className="hover:text-red-600">Ana Sayfa</LocalizedLink>
            <span>/</span>
            <LocalizedLink to="/#urunler" className="hover:text-red-600">Ürünler</LocalizedLink>
            <span>/</span>
            <span className="text-gray-900 font-medium">%15 Üreli Krem</span>
          </nav>
        </div>
      </section>

      {/* Product Hero Section */}
      <section className="py-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-white cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet={`${productImages[selectedImage]}?w=640&q=75`} 
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet={`${productImages[selectedImage]}?w=1024&q=80`} 
                  />
                  <img 
                    src={productImages[selectedImage]} 
                    alt="PediZone Urea Cream" 
                    className="w-full aspect-square object-cover select-none"
                    loading="eager"
                    fetchpriority="high"
                    draggable="false"
                  />
                </picture>
                {product.badge && (
                  <Badge className="absolute top-6 right-6 bg-red-600 text-white text-sm px-4 py-2 shadow-lg">
                    {product.badge}
                  </Badge>
                )}
                {/* Swipe indicator dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {productImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === idx ? 'bg-red-600 w-4' : 'bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-3">
                {productImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx 
                        ? 'border-red-600 shadow-lg scale-105' 
                        : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full aspect-square object-cover" />
                  </button>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <ShieldCheck className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Dermatolojik Test</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Award className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Podolog Onaylı</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-xs font-medium text-gray-700">Yağlı His Yok</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600 mb-2">
                  {product.description}
                </p>
                {product.volume && (
                  <p className="text-lg text-gray-500">
                    {product.volume}
                  </p>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(139 değerlendirme)</span>
              </div>

              {/* Key Features */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-red-600" />
                  Ürün Özellikleri
                </h3>
                <div className="grid gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>%15 Üre</strong> – optimal keratolitik etki</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hızlı emilen, <strong>yağlı his bırakmayan</strong> formül</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Bitkisel <strong>antifungal destek</strong></span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Dermatolojik</strong> olarak test edilmiştir</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700"><strong>Podolog</strong> kullanımına uygundur</span>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="bg-white border-2 border-red-100 rounded-2xl p-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Satın almak için</strong> yetkili satış noktalarımızdan ulaşabilirsiniz.
                </p>
                <LocalizedLink to="/bayiler">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
                    <MapPin className="mr-2" />
                    Satış Noktalarını Görüntüle
                  </Button>
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ürün Açıklaması</h2>
              
              {slug === 'foot-nail-care-serum' ? (
                <>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    PediZone® Foot and Nail Care Serum; ayak ve tırnak çevresinde <strong>mantar oluşumuna elverişli ortamın azaltılmasına</strong> yardımcı olmak, <strong>kötü koku oluşumunu baskılamak</strong> ve sağlıklı cilt–tırnak görünümünü desteklemek amacıyla geliştirilmiş yoğun bakım serumudur.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Ayaklar gün boyu kapalı ayakkabı içinde kalır; nem, sürtünme ve hava almama gibi faktörler zamanla koku, tırnak yüzeyinde bozulma ve mantara yatkın bir ortam oluşmasına neden olabilir. Bu serum, düzenli bakım rutininin bir parçası olarak kullanıldığında ayak ve tırnak çevresinin daha temiz, dengeli ve bakımlı kalmasına katkı sağlar.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    İnce moleküler yapısı sayesinde tırnak plağına, tırnak altına ve deri kıvrımlarına krem formüllere kıyasla <strong>çok daha derin nüfuz eder</strong>. Düzenli kullanımda ayak ve tırnakların daha sağlıklı, bakımlı ve ferah bir görünüme kavuşmasını destekler.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    PediZone® %15 Urea Intense Repair Cream; <strong>çatlak topuklar, aşırı kuruluk ve kalınlaşmış ayak cildi (hiperkeratoz)</strong> için geliştirilmiş profesyonel bakım kremidir.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    %15 üre, bitkisel yağlar ve güçlü nem tutucu bileşenler ile formüle edilen yapı; <strong>sertleşmiş cilt tabakasının yumuşatılmasına, çatlak yüzeylerin toparlanmasına ve cilt bariyerinin desteklenmesine</strong> yardımcı olur.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Bitkisel antifungal destek içeren formülü sayesinde, <strong>mantar oluşumuna elverişli ortamın azaltılmasına</strong> ve koku oluşumuna neden olan mikroorganizma dengesinin desteklenmesine katkı sağlar.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Podoloji uygulamaları sonrası bakımda ve evde düzenli destekleyici kullanım için uygundur.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mechanism of Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Etki Mekanizması</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">%15 Üre</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Keratolitik & Nemlendirici Etki</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Sertleşmiş keratin tabakasının yumuşamasını destekler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Ölü derinin kontrollü uzaklaştırılmasına yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cildin nem tutma kapasitesini artırır</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Tekrarlayan çatlak oluşum riskinin azaltılmasına destek olur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Çay Ağacı Yağı</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Bariyer Destekleyici Etki</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cilt yüzeyinde mikroorganizma çoğalmasına elverişli ortamın azaltılmasına yardımcı olur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Koku oluşumuna neden olabilen faktörlerin kontrol altına alınmasını destekler</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Shea Butter & Avokado Yağı</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Onarıcı Bakım</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Yoğun nem sağlar</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Cilt elastikiyetini destekler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Mikro çatlakların toparlanmasına yardımcı olur</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="border-red-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Gliserin</h3>
                      <p className="text-sm font-semibold text-red-600 mb-3">Nem Tutucu Etki</p>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Ciltte uzun süreli nem dengesini destekler</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>Aktif bileşenlerin cilde yayılımını kolaylaştırır</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Use */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podoloji ve Klinik Kullanım Alanları</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Medikal ayak bakımı sonrası bakım</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Nasır ve hiperkeratoz uygulamaları sonrası</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Çatlak topuk bakımı</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Ortoniksi (tırnak teli) uygulamaları sonrası cilt bütünlüğü desteği</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Mantar eğilimli ciltlerde bariyer destek bakımı</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
                <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
                <span className="text-gray-800">Cildin doğal yağ-sebum yapısını dengeler</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Kullanım Şekli</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-red-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Profesyonel Kullanım</h3>
                  <p className="text-gray-700 text-center">
                    Uygulama sonrası temizlenmiş bölgeye ince tabaka halinde sürülür, masajla emdirilir.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4 mx-auto">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ev Kullanımı</h3>
                  <p className="text-gray-700 text-center">
                    Günde 1-2 kez, temiz ve kuru ayaklara uygulanır. Çatlak ve kuru bölgelere yoğunlaştırılabilir.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Usage Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet="/images/products/urea-cream/pedizone-krem.jpg?w=640&q=75" 
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet="/images/products/urea-cream/pedizone-krem.jpg?w=768&q=80" 
                  />
                  <img 
                    src="/images/products/urea-cream/pedizone-krem.jpg" 
                    alt="PediZone Krem Kullanımı" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                </picture>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <picture>
                  <source 
                    media="(max-width: 640px)" 
                    srcSet="/images/products/urea-cream/pedizone-krem-ureli-topuk-catlak.jpg?w=640&q=75" 
                  />
                  <source 
                    media="(max-width: 1024px)" 
                    srcSet="/images/products/urea-cream/pedizone-krem-ureli-topuk-catlak.jpg?w=768&q=80" 
                  />
                  <img 
                    src="/images/products/urea-cream/pedizone-krem-ureli-topuk-catlak.jpg" 
                    alt="Çatlak Topuk Bakımı" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                </picture>
              </div>
            </div>

            {/* Expert Note */}
            <div className="bg-white border-l-4 border-red-600 p-6 rounded-lg shadow-lg">
              <p className="text-sm font-semibold text-red-600 mb-2">UZMAN NOTU</p>
              <p className="text-gray-800 italic">
                "%15 üre içeren bu formül, çatlak topuk ve yoğun kuruluk vakalarında işlem sonrası bakım ve evde destekleyici kullanım için uygundur."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Sık Sorulan Sorular</h2>
            
            <div className="space-y-4">
              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ne zaman etki göstermeye başlar?</h3>
                  <p className="text-gray-700">Düzenli kullanımda ciltteki sertlik ve kuruluk hissinde kısa sürede rahatlama sağlanabilir. Çatlak görünümünün toparlanması ve cilt bariyerinin güçlenmesi, kullanım sıklığına ve cilt yapısına bağlı olarak değişkenlik gösterebilir.</p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hassas ciltler kullanabilir mi?</h3>
                  <p className="text-gray-700 mb-3">PediZone® %15 Urea Intense Repair Cream, dermatolojik olarak test edilmiştir. Test sonuçları, ürünün cilt toleransının yüksek olduğunu göstermektedir.</p>
                  <p className="text-gray-700 mb-3">Hassas veya reaktif ciltlerde kullanım öncesi sağlık profesyoneline danışılması önerilir.</p>
                  <a 
                    href="/certificates/dermatolojik-test-raporu.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    🔗 Dermatolojik Test Sertifikası
                  </a>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Mantar oluşumuna karşı nasıl bir destek sunar?</h3>
                  <p className="text-gray-700">Bitkisel antifungal bileşenleri sayesinde, mantar oluşumuna elverişli nemli ortamın azaltılmasına ve kokuya neden olan mikroorganizmalara karşı cilt bariyerinin desteklenmesine yardımcı olur.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Teknik Bilgiler</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Ürün Hacmi</p>
                  <p className="text-2xl font-bold text-gray-900">150 ml</p>
                </div>
                <div className="hidden md:block w-px h-16 bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Ana İçerikler</p>
                  <p className="text-lg font-bold text-gray-900">%15 Urea, Tea Tree Oil, Shea Butter</p>
                </div>
              </div>
            </div>

            {/* Product Benefits with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-red-50 hover:border-red-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Yapış Yapış His</h3>
                  <h3 className="text-base font-bold text-gray-900">Bırakmaz</h3>
                  <div className="mt-3 w-12 h-1 bg-red-600 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-red-50 hover:border-red-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Yağlı His</h3>
                  <h3 className="text-base font-bold text-gray-900">Bırakmaz</h3>
                  <div className="mt-3 w-12 h-1 bg-red-600 rounded-full"></div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-red-50 hover:border-red-100">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center mb-4 shadow-lg">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">Uzun Süre</h3>
                  <h3 className="text-base font-bold text-gray-900">Nemli Kalma</h3>
                  <div className="mt-3 w-12 h-1 bg-red-600 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ TIBBİ BİLGİLENDİRME</p>
              <p className="text-sm text-gray-700">
                Bu ürün ayak bakımı amaçlıdır, tanı ve tedavi yerine geçmez. Ayak sağlığı ile ilgili şikayetlerde sağlık profesyoneline danışılması önerilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link - Blog Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 via-white to-orange-50 border-2 border-red-100 rounded-2xl p-8 hover:shadow-xl transition-shadow mb-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Footprints className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    Ayak sağlığınızı korumak için günlük bakım alışkanlıklarınızı öğrenin
                  </p>
                  <LocalizedLink 
                    to="/blog/ayak-hijyeni-ipuclari"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all hover:gap-4 shadow-md hover:shadow-lg group"
                  >
                    <span className="text-base">Ayak Hijyeni İpuçları</span>
                    <span className="text-sm font-normal opacity-90">(Sağlıklı cilt için bakım önerileri)</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocalizedLink>
                </div>
              </div>
            </div>

            {/* Üre Blogu Linki */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 border-2 border-blue-100 rounded-2xl p-8 hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    Üre ciltte nasıl çalışır? Bilimsel olarak kanıtlanmış etkilerini keşfedin
                  </p>
                  <LocalizedLink 
                    to="/blog/ure-nedir"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all hover:gap-4 shadow-md hover:shadow-lg group"
                  >
                    <span className="text-base">Üre Nedir?</span>
                    <span className="text-sm font-normal opacity-90">(Dermatolojinin gizli kahramanı)</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </LocalizedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before-After Legal Text */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                Bu sayfada yer alan görseller, ürünün düzenli kullanımına bağlı olarak bazı kullanıcı deneyimlerini temsil etmektedir. 
                Elde edilen sonuçlar kişiden kişiye değişebilir. 
                Görseller tanı, tedavi veya kesin sonuç vaadi içermez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Sorularınız mı var?</h2>
            <p className="text-xl mb-8 text-red-100">
              Ürünlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${siteInfo.phoneLink}`}>
                <Button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-6 text-lg">
                  <Phone className="mr-2" />
                  {siteInfo.phone}
                </Button>
              </a>
              <LocalizedLink to="/iletisim">
                <Button className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg">
                  <Mail className="mr-2" />
                  İletişim Formu
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
