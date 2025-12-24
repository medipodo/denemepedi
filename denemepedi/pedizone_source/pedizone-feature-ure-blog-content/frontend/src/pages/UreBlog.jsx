import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const UreBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir? | PediZone</title>
        <meta name="description" content="Cildinizin unutulmuş kahramanı üre, dermatolojinin ve özellikle ayak sağlığının gizli kahramanıdır. Kuru, çatlamış ciltler için bilimsel çözüm." />
        <meta name="keywords" content="üre, urea, cilt bakımı, çatlak topuk, nasır tedavisi, keratolitik, hidratasyon, PediZone, ayak bakımı" />
        <meta property="og:title" content="Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?" />
        <meta property="og:description" content="Üre'nin cilt bakımındaki rolü, bilimsel faydaları ve PediZone ürünlerinde nasıl kullanıldığı hakkında detaylı rehber." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://pedizone.com/blog/ure-nedir" />
      </Helmet>

      <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white pt-32 pb-16">
          <div className="container mx-auto px-4">
            <Link to="/blog" className="inline-flex items-center text-emerald-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Blog'a Dön
            </Link>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?
            </h1>
            
            <div className="flex flex-wrap gap-6 text-emerald-100">
              <div className="flex items-center">
                <User size={18} className="mr-2" />
                <span>PediZone Uzman Ekibi</span>
              </div>
              <div className="flex items-center">
                <Clock size={18} className="mr-2" />
                <span>10 dakika okuma</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Giriş */}
            <section className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cildinizin unutulmuş kahramanı: <strong>Üre</strong>. Dermatolojinin ve özellikle ayak sağlığının gizli kahramanı olan bu bileşik, kuru, çatlamış ve sorunlu ciltler için gerçek bir mucizedir. Peki, üre tam olarak nedir ve neden bu kadar etkilidir?
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg mb-6">
                <p className="text-gray-800 font-medium">
                  💡 Üre (Urea), cildin doğal nemlendirme faktörünün (NMF) en önemli bileşenlerinden biridir ve ciltte %7'ye kadar bulunur.
                </p>
              </div>

              <img 
                src="/blog-images/ure/102.png" 
                alt="Üre molekül yapısı ve cilt bakımı"
                className="w-full h-auto rounded-xl shadow-lg mb-6"
                loading="lazy"
              />

              <p className="text-lg text-gray-700 leading-relaxed">
                Bu yazıda, üre'nin bilimsel temellerini, cilt üzerindeki etkilerini, özellikle ayak bakımındaki kritik rolünü ve <strong>PediZone %15 Üreli Çatlak Topuk ve Ayak Kremi</strong> gibi ürünlerde nasıl kullanıldığını detaylı şekilde inceleyeceğiz.
              </p>
            </section>

            {/* Üre Nedir? */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                Üre (Urea) Nedir? Kimyasal ve Biyolojik Temeller
              </h2>

              <div className="mb-12 bg-white rounded-2xl shadow-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Üre, kimyasal formülü <strong>CO(NH₂)₂</strong> olan organik bir bileşiktir. Vücudumuzda protein metabolizması sonucu oluşan doğal bir üründür ve normalde idrarla atılır. Ancak ciltteki rolü bundan çok daha fazladır.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ciltteki Doğal Rolü: NMF (Natural Moisturizing Factor)
                </h3>

                <img 
                  src="/blog-images/ure/103.png" 
                  alt="Doğal Nemlendirme Faktörü (NMF) ve üre"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
                  loading="lazy"
                />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Sağlıklı bir cildin <strong>stratum corneum</strong> (dış cilt tabakası) tabakasında, cildi nemli ve esnek tutan bir grup bileşik bulunur. Bu bileşikler toplamına <strong>Doğal Nemlendirme Faktörü (NMF)</strong> denir. Üre, bu faktörün yaklaşık <strong>%7'sini</strong> oluşturur ve cildin nem dengesini korumasında kritik rol oynar.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">🔬 Bilimsel Gerçek:</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Yaşlanma, güneş hasarı, sert deterjanlar ve bazı cilt hastalıkları nedeniyle ciltteki doğal üre seviyesi azalır. Bu da kuru, pul pul ve çatlamış cilt sorunlarına yol açar. Topikal üre uygulaması, bu kaybı telafi ederek cildi eski sağlıklı haline döndürür.
                  </p>
                </div>
              </div>
            </section>

            {/* Ürenin Cilt Üzerindeki Etkileri */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                Ürenin Cilt Üzerindeki Üç Temel Etkisi
              </h2>

              {/* 1. Hidratant (Nemlendirici) Etki */}
              <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="mr-3 text-blue-600" size={32} />
                  1️⃣ Güçlü Hidratant (Nemlendirici) Etki
                </h3>
                
                <img 
                  src="/blog-images/ure/104.png" 
                  alt="Ürenin nemlendirici etkisi"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
                  loading="lazy"
                />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Üre, <strong>higroskopik</strong> bir bileşiktir; yani havadan ve alt cilt katmanlarından su çekme yeteneğine sahiptir. Bu özellik sayesinde:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">💧 Su Bağlama</h4>
                    <p className="text-gray-700 text-sm">
                      Üre molekülleri, cildin üst tabakasında (stratum corneum) su moleküllerini bağlayarak cildi nemli tutar.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">🛡️ Bariyer Güçlendirme</h4>
                    <p className="text-gray-700 text-sm">
                      Cildin su kaybını (transepidermal su kaybı - TEWL) azaltarak doğal nem bariyerini güçlendirir.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-gray-800 font-medium">
                    ✅ <strong>Sonuç:</strong> Düzenli üre kullanımı, cildi sadece geçici olarak nemli tutmaz; uzun vadeli hidratasyonu destekleyerek cildin doğal nem dengesini iyileştirir.
                  </p>
                </div>
              </div>

              {/* 2. Keratolitik (Soyucu) Etki */}
              <div className="mb-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <AlertCircle className="mr-3 text-orange-600" size={32} />
                  2️⃣ Keratolitik (Ölü Deri Soyucu) Etki
                </h3>
                
                <img 
                  src="/blog-images/ure/105.png" 
                  alt="Ürenin keratolitik etkisi"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
                  loading="lazy"
                />

                <p className="text-gray-700 leading-relaxed mb-6">
                  Yüksek konsantrasyonlarda (%10 ve üzeri), üre <strong>keratolitik</strong> etki gösterir. Bu, ölü deri hücrelerinin bağlarını zayıflatarak cildin doğal olarak soyulmasını ve yenilenmesini hızlandırır.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">🔬 Nasıl Çalışır?</h4>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Üre, <strong>keratin proteinlerini</strong> yumuşatarak ve <strong>desmosom bağlarını</strong> (hücreler arası bağlantılar) zayıflatarak, kalınlaşmış, pul pul ve sert deriyi nazikçe uzaklaştırır.
                  </p>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-gray-800 text-sm">
                      <strong>Özellikle Etkili Olduğu Durumlar:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-sm mt-2 space-y-1">
                      <li>Çatlak topuklar (hiperkeratoz)</li>
                      <li>Kalın ve sert nasırlar</li>
                      <li>Pul pul dökülen ayak derisi</li>
                      <li>Kserozis (aşırı kuru cilt)</li>
                      <li>İktiozis (balık pulu hastalığı)</li>
                    </ul>
                  </div>
                </div>

                <img 
                  src="/blog-images/ure/106.png" 
                  alt="Üre öncesi ve sonrası çatlak topuk"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
                  loading="lazy"
                />
              </div>

              {/* 3. Antimikrobiyal Etki */}
              <div className="mb-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="mr-3 text-purple-600" size={32} />
                  3️⃣ Antimikrobiyal ve Bariyer Onarıcı Etki
                </h3>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  Üre, cildin doğal savunma mekanizmasını güçlendirerek:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white p-5 rounded-xl text-center">
                    <div className="text-3xl mb-2">🦠</div>
                    <h4 className="font-bold text-gray-900 mb-2">Antimikrobiyal</h4>
                    <p className="text-gray-700 text-sm">Bakteriyel ve fungal (mantar) büyümeyi engeller</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl text-center">
                    <div className="text-3xl mb-2">🛡️</div>
                    <h4 className="font-bold text-gray-900 mb-2">Bariyer Onarımı</h4>
                    <p className="text-gray-700 text-sm">Hasarlı cilt bariyerini onarır</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl text-center">
                    <div className="text-3xl mb-2">🌿</div>
                    <h4 className="font-bold text-gray-900 mb-2">pH Dengeleme</h4>
                    <p className="text-gray-700 text-sm">Cildin doğal pH'ını korur</p>
                  </div>
                </div>

                <img 
                  src="/blog-images/ure/107.png" 
                  alt="Ürenin cilt bariyeri üzerindeki etkisi"
                  className="w-full h-auto rounded-xl shadow-md"
                  loading="lazy"
                />
              </div>
            </section>

            {/* Ayak Bakımında Üre */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                Ayak Bakımında Ürenin Özel Önemi
              </h2>

              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ayaklar, vücudun en çok yük taşıyan ve en az ilgi gören bölgesidir. Sürekli basınç, sürtünme ve nem değişimleri nedeniyle ayak cildi özellikle <strong>kalınlaşma, çatlama ve kuruluğa</strong> eğilimlidir.
                </p>

                <img 
                  src="/blog-images/ure/108.png" 
                  alt="Ayak problemleri ve üre"
                  className="w-full h-auto rounded-xl shadow-md mb-6"
                  loading="lazy"
                />

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Ayak Sorunlarında Ürenin Rolü
                </h3>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">🦶 Çatlak Topuklar (Heel Fissures)</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Topuk bölgesindeki aşırı kalınlaşma ve kuru cilt, derin çatlaklara neden olabilir. Üre, hem kalınlaşmış deriyi yumuşatır hem de yeni cilt tabakasını nemlendirir, böylece çatlakların iyileşmesini hızlandırır.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">🔵 Nasırlar ve Kalluslar</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Sürekli basınç altındaki bölgelerde oluşan kalın, sert deri tabakalarını (kallus) üre etkili bir şekilde yumuşatır ve zamanla incelir. Bu sayede hem ağrı azalır hem de ayak daha estetik görünür.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl">
                    <h4 className="font-bold text-gray-900 mb-3">💧 Kuru ve Pul Pul Ayak Derisi</h4>
                    <p className="text-gray-700 leading-relaxed">
                      Özellikle kış aylarında veya sert su kullanımı sonrası kuruyan ve pul pul dökülen ayak derisini üre yeniden canlandırır, yumuşak ve pürüzsüz hale getirir.
                    </p>
                  </div>
                </div>

                <img 
                  src="/blog-images/ure/109.png" 
                  alt="Üre tedavisi sonuçları"
                  className="w-full h-auto rounded-xl shadow-md mt-6"
                  loading="lazy"
                />
              </div>
            </section>

            {/* PediZone Ürünü */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                PediZone %15 Üreli Çatlak Topuk ve Ayak Kremi
              </h2>

              <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl shadow-lg p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <img 
                      src="/blog-images/ure/110.png" 
                      alt="PediZone Üreli Krem"
                      className="w-full h-auto rounded-xl shadow-md"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Neden %15 Üre Konsantrasyonu?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>PediZone %15 Üreli Krem</strong>, ayak bakımı için ideal konsantrasyonda üre içerir. Bu oran:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">Hem nemlendirici hem keratolitik etki sağlar</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">Kalınlaşmış deriyi etkili şekilde yumuşatır</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">Cilt tahrişi riski minimumdur</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">Günlük kullanım için uygundur</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-4">🌟 Ürün Özellikleri</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Aktif Bileşen:</strong> %15 Üre (Urea)</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Etki:</strong> Nemlendirici + Keratolitik</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Kullanım Alanı:</strong> Çatlak topuk, nasır, kuru ayak</p>
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm mb-2"><strong>Formül:</strong> Paraben-free, hipoalerjenik</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Koku:</strong> Hafif, tıbbi koku</p>
                      <p className="text-gray-700 text-sm mb-2"><strong>Onay:</strong> Podolog onaylı</p>
                    </div>
                  </div>
                </div>
              </div>

              <img 
                src="/blog-images/ure/111.png" 
                alt="PediZone kullanım şekli"
                className="w-full h-auto rounded-xl shadow-lg mb-8"
                loading="lazy"
              />

              {/* Kullanım Talimatları */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  📋 Kullanım Talimatları
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Temizlik</h4>
                      <p className="text-gray-700">Ayaklarınızı ılık su ile yıkayın ve iyice kurulayın.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Uygulama</h4>
                      <p className="text-gray-700">Kremi, özellikle topuk, ayak tabanı ve kuruyan bölgelere cömertçe uygulayın.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Masaj</h4>
                      <p className="text-gray-700">Kremin tamamen emilmesi için dairesel hareketlerle masaj yapın.</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-emerald-100 text-emerald-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mr-4">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Tekrar</h4>
                      <p className="text-gray-700">Günde 2 kez (sabah ve akşam) düzenli olarak uygulayın. En iyi sonuçlar için gece uyguladıktan sonra pamuklu çorap giyin.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mt-6">
                  <p className="text-gray-800 font-medium">
                    ⏰ <strong>Sonuç Süresi:</strong> İlk 7-10 gün içinde ciltte yumuşama, 3-4 hafta düzenli kullanımda belirgin iyileşme görülür.
                  </p>
                </div>
              </div>
            </section>

            {/* Sık Sorulan Sorular */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                Sık Sorulan Sorular
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❓ Üre kremleri her gün kullanılabilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evet, %15 konsantrasyonundaki üre kremleri günlük kullanım için uygundur. Hatta en iyi sonuçlar düzenli ve sürekli kullanımla elde edilir. Ancak ilk birkaç günde hafif bir karıncalanma veya yanma hissi normaldir ve genellikle cildin adapte olmasıyla geçer.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❓ Hamilelikte üre kremi güvenli midir?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Topikal (cilt üzerine uygulanan) üre kremleri genel olarak hamilelik ve emzirme döneminde güvenlidir. Ancak her zaman doktorunuza danışmanız önerilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❓ Diyabetik ayak için üre kremi kullanılabilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Evet, üre kremleri diyabetik hastalarda ayak bakımının önemli bir parçasıdır. Kuru ve çatlak ayak derisi, diyabetiklerde enfeksiyon riskini artırır. Ancak açık yara veya enfeksiyon varsa mutlaka hekim kontrolü gereklidir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❓ Çocuklarda kullanılabilir mi?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    %10'un altındaki düşük konsantrasyonlu üre kremleri çocuklarda kullanılabilir. %15 ve üzeri konsantrasyonlar için pediatrik danışma önerilir.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">❓ Üre kremi nasıl saklanmalı?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Oda sıcaklığında, direkt güneş ışığından uzak, serin ve kuru bir yerde saklanmalıdır. Kapağı her kullanımdan sonra iyice kapatın.
                  </p>
                </div>
              </div>

              <img 
                src="/blog-images/ure/112.png" 
                alt="Üre kremi kullanım ipuçları"
                className="w-full h-auto rounded-xl shadow-lg mt-8"
                loading="lazy"
              />
            </section>

            {/* Sonuç */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-emerald-600 pl-4">
                Sonuç ve Öneriler
              </h2>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl shadow-lg p-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Üre, cilt bakımının en etkili ve bilimsel olarak kanıtlanmış bileşenlerinden biridir. Özellikle ayak bakımında, <strong>çatlak topuklar, nasırlar ve kuru cilt</strong> gibi yaygın sorunların tedavisinde vazgeçilmezdir.
                </p>

                <div className="bg-white p-6 rounded-xl mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Neden PediZone %15 Üreli Krem?</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Bilimsel olarak desteklenmiş, podolog onaylı formül</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">%15 optimal üre konsantrasyonu</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Hipoalerjenik ve paraben-free</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 text-emerald-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">Hızlı ve kalıcı sonuçlar</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Ayaklarınız, sizi her gün taşıyan ve en az ilgiyi gören vücut parçalarınızdır. PediZone %15 Üreli Krem ile onlara hak ettikleri bakımı sağlayın. Düzenli kullanımla yumuşak, sağlıklı ve çatlaksız ayaklara kavuşabilirsiniz.
                </p>
              </div>

              <div className="bg-emerald-100 border-l-4 border-emerald-600 p-6 rounded-r-lg mt-6">
                <p className="text-gray-800 font-medium">
                  💡 <strong>Uzman Tavsiyesi:</strong> Kronik çatlak topuk, derin yaralar veya şiddetli cilt sorunlarınız varsa, profesyonel podoloji değerlendirmesi için <a href="https://medipodo.com" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-900 underline font-semibold">Medipodo</a>'yu ziyaret edin.
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl shadow-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ayaklarınızı PediZone ile Yenileyin</h3>
              <p className="text-emerald-100 mb-6">%15 Üreli Çatlak Topuk ve Ayak Kremi ile sağlıklı, yumuşak ayaklara kavuşun</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="https://pedizone.com" 
                  className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors"
                >
                  Ürünü İncele
                </a>
                <a 
                  href="https://wa.me/905068860326" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
                >
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>

            {/* Blog Footer */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center mb-4">
                <strong>Not:</strong> Blog yazımız bilgilendirme amacı gütmektedir; tanı ve tedavi önerisi yerine geçmez. Herhangi bir sağlık sorununuz için mutlaka hekiminize başvurunuz.
              </p>
              
              <div className="text-center">
                <Link to="/blog" className="inline-flex items-center text-emerald-600 hover:text-emerald-800 font-semibold transition-colors">
                  <ArrowLeft size={20} className="mr-2" />
                  Diğer Blog Yazılarına Dön
                </Link>
              </div>
            </div>

          </div>
        </div>
      </article>
    </>
  );
};

export default UreBlog;
