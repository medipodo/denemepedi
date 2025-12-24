import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, Phone, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet';

const RefleksolojiBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Ankara Bağlıca Refleksoloji | Medipodo Ayak Sağlığı Merkezi</title>
        <meta name="description" content="Ankara Bağlıca'da podolog ve uzman refleksolog ekibiyle profesyonel refleksoloji hizmeti. Otizm, DEHB, bel fıtığı ve migren için tamamlayıcı destek." />
        <meta name="keywords" content="refleksoloji, refleksoloji Ankara, Bağlıca refleksoloji, refleksoloji merkezi, medikal refleksoloji, refleksolog Ankara, otizm refleksoloji desteği, DEHB refleksoloji, bel fıtığı refleksoloji, refleksoloji faydaları, ayak refleksolojisi, migren refleksoloji, tamamlayıcı tıp uygulamaları, Medipodo Ayak Sağlığı" />
        <meta property="og:title" content="Ankara Bağlıca Refleksoloji | Medipodo Ayak Sağlığı Merkezi" />
        <meta property="og:description" content="Ankara Bağlıca'da podolog ve uzman refleksolog ekibiyle profesyonel refleksoloji hizmeti. Otizm, DEHB, bel fıtığı ve migren için tamamlayıcı destek." />
        <meta property="og:image" content="https://medipodo.com/blog-images/refleksoloji/refleksoloji.jpg" />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://medipodo.com/blog/ankara-baglica-refleksoloji" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Refleksoloji Nedir? Ankara Bağlıca'da Profesyonel Refleksoloji Uygulaması | Medipodo Ayak Sağlığı
            </h1>
            
            <div className="flex flex-wrap gap-6 text-blue-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>Medipodo Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>20 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Kapak Görseli */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/blog-images/refleksoloji/refleksoloji.jpg" 
                alt="Ankara Bağlıca Refleksoloji - Medipodo Ayak Sağlığı"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>

            {/* Giriş */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Refleksoloji</strong>; genelde ayakta (bazen de elde) belirli noktalara basınç uygulanarak yapılan bir tamamlayıcı, alternatif tıp yöntemidir. Vücudun kendi kendini düzenleme mekanizmasını aktive etmeyi hedefler.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Medipodo Ayak Sağlığı</strong> olarak Ankara Bağlıca'da 1 Podolog ve 2 Refleksolog kadromuzla refleksolojiyi bilimsel, güvenli ve kişiye özel bir yaklaşımla uyguluyoruz.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-6">
                <p className="text-gray-700 font-semibold">
                  💡 Refleksoloji, destekleyici uygulamadır, sağlık probleminiz varsa hekimize danışmayı ihmal etmeyin.
                </p>
              </div>
            </div>

            {/* Refleksoloji Nasıl Çalışır */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-blue-600 pl-4">
                Refleksoloji Nasıl Çalışır? (Bilimsel Temelli Açıklama)
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Ayak tabanında <strong>7.000'den fazla sinir ucu</strong> bulunur. Bu sinir uçları:
              </p>
              
              <ul className="space-y-2 ml-6 mb-6">
                <li className="text-gray-700">• Organ sistemleri</li>
                <li className="text-gray-700">• Hormonal sistem</li>
                <li className="text-gray-700">• Sindirim sistemi</li>
                <li className="text-gray-700">• Kas-iskelet yapısı</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mb-4">ile sinirsel bağlantı halindedir.</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Refleks noktalarına yapılan doğru teknik uygulamalar:</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Kan dolaşımını artırır
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Lenf akışını düzenler
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Sinir sistemini sakinleştirir
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Kas gerginliğini çözmeye yardımcı olur
                  </li>
                  <li className="text-gray-700 flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    Vücudun doğal iyileşme dengesini destekler
                  </li>
                </ul>
              </div>
            </section>

            {/* Refleksolojinin Faydaları */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Refleksolojinin Faydaları
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Refleksoloji hem fiziksel hem de zihinsel birçok alanda destekleyici etki sunar.
              </p>

              {/* 1. Zihinsel ve Duygusal Fayda */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/zihin.jpg" 
                      alt="Refleksoloji - Zihinsel ve Duygusal Faydalar"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Zihinsel ve Duygusal Fayda</h3>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Stres ve kaygının azalması
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Sinir sisteminin yatışması
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Uyku düzeninin iyileşmesi
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Migren ve baş ağrılarında rahatlama
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Sindirim Sistemi */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/sindirim-sistemi.jpg" 
                      alt="Refleksoloji - Sindirim Sistemi Düzenlemesi"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Sindirim Sistemi Düzenlemesi</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Aşağıdaki sorunlarda düzenleyici etki sağlar:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Kabızlık</li>
                      <li className="text-gray-700">• Şişkinlik</li>
                      <li className="text-gray-700">• IBS (irritabl bağırsak)</li>
                      <li className="text-gray-700">• Hazımsızlık</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 3. Bağışıklık ve Dolaşım */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/bagisiklik.jpg" 
                      alt="Refleksoloji - Bağışıklık Sistemi Desteği"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Bağışıklık ve Dolaşım Sistemine Destek</h3>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Toksinlerin atılmasını kolaylaştırır
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Enerji seviyesini artırır
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Kas-İskelet Sistemi */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/kas-iskelet.jpg" 
                      alt="Refleksoloji - Kas-İskelet Sistemi Rahatlama"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Kas-İskelet Sisteminde Rahatlama</h3>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Bel fıtığı süreçlerinde destek
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Boyun ve sırt gerginliklerinde rahatlama
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Fibromiyalji hassasiyetlerinde gevşeme
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 5. Hormonal Denge */}
              <div className="mb-12">
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/hormonlar.jpg" 
                      alt="Refleksoloji - Hormonal Dengeye Destek"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Hormonal Dengeye Destek</h3>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• PMS ve adet düzeni</li>
                      <li className="text-gray-700">• Menopoz dönemi</li>
                      <li className="text-gray-700">• Tiroid hassasiyeti</li>
                      <li className="text-gray-700">• Uyku hormonu (melatonin) desteklemesi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Gelişimsel ve Nörolojik Destek */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-purple-100 to-blue-100 py-4 rounded-lg">
                Gelişimsel ve Nörolojik Destek Uygulamaları
              </h2>

              {/* Otizm */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                  Otizm Spektrum Bozukluğu (OSB) İçin Refleksoloji
                </h3>
                
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/otizim.jpg" 
                      alt="Otizm Spektrum Bozukluğu - Refleksoloji Desteği"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Refleksoloji otizmli bireylerde şu alanlarda destek sağlayabilir:
                    </p>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Huzursuzluk ve gerginliğin azalması
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Sakinleşme ve duyusal düzenleme
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Uyku kalitesinin artması
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Odaklanma süresinin uzaması
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        Aşırı uyarılmanın azalması
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 italic">
                    💬 Ailelerin geri bildirimlerinde özellikle <strong>davranışsal sakinlik ve uyku düzeninde</strong> ilerleme yaygındır.
                  </p>
                </div>
              </div>

              {/* DEHB */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                  Dikkat Eksikliği ve Hiperaktivite Bozukluğu (DEHB) İçin Refleksoloji
                </h3>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/dikkat-eksikligi.jpg" 
                      alt="DEHB - Refleksoloji Desteği"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Refleksoloji DEHB'de:
                    </p>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Konsantrasyonu artırmaya yardımcı olur
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Dürtüselliğin azalmasını destekler
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Daha dengeli uyku sağlar
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2">✓</span>
                        Sakinleşme süresini kısaltır
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Kas-İskelet Sistemi Problemleri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center bg-gradient-to-r from-green-100 to-teal-100 py-4 rounded-lg">
                Kas-İskelet Sistemi Problemlerinde Refleksoloji
              </h2>

              {/* Bel Fıtığı */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bel Fıtığı ve Bel Ağrılarında Destek</h3>
                
                <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/bel-fitiği.jpg" 
                      alt="Bel Fıtığı - Refleksoloji Desteği"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Refleksoloji:
                    </p>
                    <ul className="space-y-3">
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Kas spazmlarını gevşetir
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Stres kaynaklı kas sertliğini azaltır
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Dolaşımı artırarak rahatlama sağlar
                      </li>
                      <li className="text-gray-700 flex items-start">
                        <span className="text-green-600 mr-2">●</span>
                        Hareket kabiliyetini artırmaya destek olur
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
                  <p className="text-gray-700 font-semibold">
                    💡 Refleksoloji, destekleyici uygulamadır, sağlık probleminiz varsa hekimize danışmayı ihmal etmeyin.
                  </p>
                </div>
              </div>

              {/* Boyun ve Sırt Ağrıları */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Boyun ve Sırt Ağrıları</h3>
                
                <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/boyun agrısı.jpg" 
                      alt="Boyun ve Sırt Ağrıları - Refleksoloji"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed">
                      Ofis çalışanlarında görülen duruş bozukluklarında önemli rahatlama sağlar. Bilgisayar başında uzun saatler geçirenlerin boyun ve omuz bölgelerindeki gerginliklerin azaltılmasına yardımcı olur.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fibromiyalji */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Fibromiyalji Destek Uygulaması</h3>
                
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="/blog-images/refleksoloji/fibromyalgia.jpg" 
                      alt="Fibromiyalji - Refleksoloji Desteği"
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Fibromiyaljide aşağıdaki etkiler görülebilir:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Kas hassasiyetinin azalması</li>
                      <li className="text-gray-700">• Uyku kalitesinin artması</li>
                      <li className="text-gray-700">• Sinir sistemi sakinleşmesi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Uygulama Süreci */}
            <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Medipodo Ayak Sağlığı'nda Refleksoloji Uygulama Süreci
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Ankara Bağlıca'da refleksoloji uygulamalarımız tamamen profesyonel bir süreçle yapılır.
              </p>

              <div className="mb-12 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="/blog-images/refleksoloji/refleksoloji-uygulamasi.jpg" 
                  alt="Medipodo Refleksoloji Uygulama Süreci"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Adım 1 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3">1</span>
                    <h3 className="text-xl font-bold text-gray-900">Podolojik Değerlendirme</h3>
                  </div>
                  <p className="text-gray-700 mb-3">Seans öncesi podolog tarafından:</p>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Dolaşım kontrolü</li>
                    <li className="text-gray-700">• Ayak yapısı ve basış analizi</li>
                    <li className="text-gray-700">• Cilt ve tırnak sağlığı değerlendirmesi</li>
                  </ul>
                </div>

                {/* Adım 2 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3">2</span>
                    <h3 className="text-xl font-bold text-gray-900">Kişiye Özel Planlama</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Otizmli bir çocuk ile bel fıtığı olan yetişkinin protokolleri farklıdır. Herkes için ayrı seans planı oluşturulur.
                  </p>
                </div>

                {/* Adım 3 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3">3</span>
                    <h3 className="text-xl font-bold text-gray-900">30–45 Dakikalık Uygulama</h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="text-gray-700">• Doğru basınç derinliği</li>
                    <li className="text-gray-700">• Ritmik refleks nokta çalışmaları</li>
                    <li className="text-gray-700">• Sinir ve dolaşım sistemini düzenleme</li>
                  </ul>
                </div>

                {/* Adım 4 */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold mr-3">4</span>
                    <h3 className="text-xl font-bold text-gray-900">Seans Takibi ve İlerleme</h3>
                  </div>
                  <p className="text-gray-700">
                    Düzenli olarak gözlemlenir ve plan güncellenir. Her seansın ardından gelişmeler kaydedilir.
                  </p>
                </div>
              </div>
            </section>

            {/* SSS */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-6">
                {/* Soru 1 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Refleksoloji tedavi midir?</h3>
                  <p className="text-gray-700">
                    <strong>Hayır.</strong> Refleksoloji, destekleyici bir uygulamadır. Alternatif bir yöntem olup bir çok faydası vardır ancak sağlık probleminiz varsa mutlaka hekiminize danışın.
                  </p>
                </div>

                {/* Soru 2 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Otizm ve DEHB'de Refleksoloji işe yarar mı?</h3>
                  <p className="text-gray-700">
                    Sinir sistemi düzenlenmesi sayesinde davranışsal sakinlik, uyku düzeni ve odaklanmada destek sağlar.
                  </p>
                </div>

                {/* Soru 3 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Kaç seans yapılmalı?</h3>
                  <p className="text-gray-700 mb-3">Duruma göre değişir:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="text-gray-700">• <strong>Otizm / DEHB:</strong> 1–2 seans / hafta</li>
                    <li className="text-gray-700">• <strong>Migren:</strong> 4–6 seans</li>
                    <li className="text-gray-700">• <strong>Bel fıtığı:</strong> haftada 1</li>
                    <li className="text-gray-700">• <strong>Stres / kaygı:</strong> 3–5 seans</li>
                  </ul>
                </div>

                {/* Soru 4 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Yan etkisi var mı?</h3>
                  <p className="text-gray-700">
                    Doğru uzman tarafından, doğru uygulandığında yan etkisi yoktur.
                  </p>
                </div>

                {/* Soru 5 */}
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Çocuklarda uygulanabilir mi?</h3>
                  <p className="text-gray-700">
                    <strong>Evet.</strong> Çocuklara daha nazik ve hafif basınç teknikleri uygulanır.
                  </p>
                </div>
              </div>
            </section>

            {/* Neden Medipodo */}
            <section className="mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Neden Medipodo? (Bağlıca – Ankara)
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">Podolog eşliğinde güvenli uygulama</p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">2 Uzman Refleksolog</p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">Gelişimsel bozukluklardan kas-iskelet sorunlarına kadar geniş uzmanlık</p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">Hijyenik ve medikal standartlarda ortam</p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">Kişiye özel seans protokolleri</p>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-300 mr-3 text-2xl">✔</span>
                  <p className="text-white">Bilimsel ve etik yaklaşım</p>
                </div>
              </div>
            </section>

            {/* İletişim ve CTA */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Randevu ve İletişim
                </h2>
                
                <div className="max-w-2xl mx-auto space-y-4 mb-8">
                  <div className="flex items-center justify-center text-gray-700">
                    <MapPin size={24} className="mr-3 text-blue-600" />
                    <span className="text-lg font-semibold">Medipodo Ayak Sağlığı – Ankara Bağlıca</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-700">
                    <Phone size={24} className="mr-3 text-green-600" />
                    <a href="tel:05456569747" className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      0545 656 9747
                    </a>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-700">
                    <span className="text-lg">🌐 Web: </span>
                    <a href="https://medipodo.com" className="ml-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                      medipodo.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:05456569747"
                    className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg"
                  >
                    <Phone size={24} className="mr-2" />
                    Hemen Ara
                  </a>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    Randevu Al
                  </Link>
                </div>
              </div>
            </section>

            {/* Geri Dön Linki */}
            <div className="text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Diğer Blog Yazılarına Dön
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default RefleksolojiBlog;
