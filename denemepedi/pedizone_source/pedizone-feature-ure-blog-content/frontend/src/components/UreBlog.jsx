import React from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

// Blog görselleri
import heroImage from '../assets/blog/ure/pedizone üreli krem.jpg'
import image1 from '../assets/blog/ure/1.jpg'
import image2 from '../assets/blog/ure/2.jpg'
import image3 from '../assets/blog/ure/3.jpg'
import image4 from '../assets/blog/ure/4.jpg'
import image5 from '../assets/blog/ure/5.jpg'
import image6 from '../assets/blog/ure/6.jpg'
import image7 from '../assets/blog/ure/7.jpg'
import image8 from '../assets/blog/ure/8.jpg'
import image9 from '../assets/blog/ure/9.jpg'
import image10 from '../assets/blog/ure/10.jpg'

const UreBlog = () => {
  const navigate = useNavigate()

  return (
    <>
      <Header showBackButton={true} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-12">
          <div className="pedizone-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Cildinizin Unutulmuş Kahramanı: Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?
              </h1>
              <p className="text-lg sm:text-xl text-red-100">
                Bilimin ta kendisi ile tanışın: Üre
              </p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <article className="pedizone-container py-12">
          <div className="max-w-4xl mx-auto">
            {/* Hero Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Pedizone Üreli Krem" 
                className="w-full h-auto"
              />
            </div>

            {/* Giriş Metni */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed text-gray-700">
                Kuru, gergin, pul pul dökülen bir cilt... Günlük hayatınızı etkileyen, ayakkabı giymeyi bile bir eziyete dönüştüren o tanıdık his... Bu sadece bir kuruluk meselesi değildir; bu, cildinizin yardım çağrısıdır. Peki, size cildinizin aslında kendi içinde ürettiği, ancak zamanla kaybettiği doğal bir "süper nemlendirici" olduğunu söylesek? Hayır, bu bir pazarlama efsanesi değil. Bu, bilimin ta kendisi. Tanıştıralım: <strong>Üre</strong>.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mt-4">
                Çoğu kişi "üre" kelimesini duyduğunda tereddüt etse de, bu içerik aslında dermatolojinin ve özellikle ayak sağlığının gizli kahramanıdır. Gelin, bu güçlü molekülün ardındaki bilime dalalım ve cildiniz için neden bir nem bombası değil, tam bir "yeniden yapılandırma uzmanı" olduğunu keşfedelim.
              </p>
            </div>

            {/* Görsel 1-2: Kuru cilt ve sorun */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image1} alt="Kuru ve çatlak ayak derisi" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image2} alt="Topuk çatlakları" className="w-full h-auto" />
              </div>
            </div>

            {/* Bölüm 1: Sorunun Kalbi */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                Sorunun Kalbi: Kalınlaşmış Deri, Nasır ve Çatlakların Yarattığı Kısır Döngü
              </h2>
              <p className="text-base leading-relaxed text-gray-700 mb-4">
                Ayak tabanımız, vücudumuzun tüm ağırlığını taşıyan ve sürekli baskıya maruz kalan inanılmaz bir yapıdır. Cildimiz, bu baskıya karşı kendini korumak için daha fazla cilt hücresi üretir. Ancak bu savunma mekanizması kontrolden çıktığında, sorunlar başlar:
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">Topuk Kalınlaşması ve Nasır:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Ölü deri hücreleri atılamaz ve üst üste birikerek sert, sarımsı ve hissiz bir tabaka oluşturur. Bu tabaka sadece estetik bir sorun değildir. Esnekliğini kaybettiği için yürüme mekaniğini bozar, ayakkabı içinde ağrılı baskı noktaları yaratır ve cildin sağlıklı alt katmanlarının nefes almasını engeller.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-6 rounded-r-lg">
                <h3 className="text-xl font-bold text-red-900 mb-3">Acı Veren Çatlaklar:</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Kalınlaşmış ve esnekliğini yitirmiş topuk derisi, attığınız her adımda gerilir ve sonunda bir fay hattı gibi kırılır. Bu çatlaklar, sadece bir görüntüden ibaret olmayıp, cildin koruyucu bariyerinin yıkıldığı, enfeksiyonlara açık kapılar haline gelen derin yaralardır.
                </p>
              </div>

              <p className="text-base leading-relaxed text-gray-700">
                Bu noktada klasik nemlendiriciler genellikle yetersiz kalır. Çünkü nem, bu ölü ve sert bariyeri aşıp alttaki canlı dokuya asla ulaşamaz. Yapılan tek şey, ölü bir tabakanın yüzeyini geçici olarak yumuşatmaktır. Asıl çözüm, bu bariyeri akıllıca ve nazikçe ortadan kaldırmaktır.
              </p>
            </section>

            {/* Görsel 3-4: Bilimsel gösterim */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image3} alt="Üre molekülünün ciltteki etkisi" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image4} alt="Cilt yapısı ve üre" className="w-full h-auto" />
              </div>
            </div>

            {/* Bölüm 2: Üre'nin Çifte Gücü */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                Üre'nin Çifte Gücü: Cildinize Format Atan Molekül
              </h2>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Üre'yi diğer içeriklerden ayıran en büyük özelliği, konsantrasyonuna bağlı olarak iki farklı ve birbiriyle mükemmel uyum içinde çalışan şapka takabilmesidir:
              </p>

              {/* Alt Bölüm 1 */}
              <div className="bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-xl p-6 mb-6 shadow-md">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  1. Düşük Konsantrasyonlarda (%10'un altında): Yoğun Bir Nem Mıknatısı (Hidratan)
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  Düşük oranlarda kullanıldığında üre, cildin su tutma yeteneğini artırarak derinlemesine nemlendirme sağlar. Cilt bariyerini güçlendirir ve cildin farkında olmadan su kaybetmesini önler. Günlük hijyen ve hafif nemlendirme ihtiyacınız için, bakım rutininizi <strong>Pedizone Temizleme Köpüğü</strong> ile başlatarak cildinizi üre bazlı bakıma hazırlayabilirsiniz.
                </p>
              </div>

              {/* Alt Bölüm 2 */}
              <div className="bg-gradient-to-r from-red-50 to-white border border-red-200 rounded-xl p-6 mb-6 shadow-md">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  2. Yüksek Konsantrasyonlarda (%10'un üzerinde): Nazik Bir Yenileyici ve Debride Edici Ajan (Keratolitik)
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  İşte üre'nin asıl mucizesi burada başlıyor. <strong>Pedizone Intense Repair kremimizde %15</strong> gibi etkili bir oranda bulunan üre, keratolitik bir ajana dönüşür. Tıbbi bir terim olan "keratolitik", en basit anlatımıyla "keratin (sert deri) çözücü" demektir.
                </p>
                
                <div className="space-y-4 ml-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✓ Yumuşatıcı ve Debride Edici Etki:</h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Üre, cildin yüzeyinde birikmiş, sertleşmiş ve ölü deri hücreleri arasındaki çimento benzeri bağları nazikçe çözer ve gevşetir. Bu, podolojide "kimyasal debridman" olarak bilinen sürecin bir benzeridir; yani ölü dokuyu, sağlıklı dokuya zarar vermeden, akıllıca ve kontrollü bir şekilde ortamdan uzaklaştırır.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✓ Penetrasyon Sağlayıcı:</h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Bu ölü tabaka ortadan kalktığında, ürenin kendisi ve formüldeki diğer besleyici içerikler, nihayet ihtiyaç duyulan yere, yani alttaki canlı ve susamış cilt katmanlarına ulaşabilir.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">✓ Sonuç:</h4>
                    <p className="text-base text-gray-700 leading-relaxed">
                      Kalınlaşmış nasır tabakaları incelir, pürüzlü doku pürüzsüzleşir ve çatlakların etrafındaki ölü duvarlar yıkıldığı için onarım süreci başlayabilir. Alttan taptaze, esnek ve sağlıklı bir cilt dokusu ortaya çıkar.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Görsel 5-6: Ürün kullanımı */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image5} alt="Pedizone ürün kullanımı" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image6} alt="Krem uygulama" className="w-full h-auto" />
              </div>
            </div>

            {/* Bölüm 3: Pedizone ve Üre */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                Pedizone ve Üre: Neden Her Ürünümüzde Var?
              </h2>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Pedizone olarak biz, sadece semptomları maskeleyen değil, sorunun kökenine inen çözümlere inanıyoruz. Üre, bu felsefemizin merkezindedir.
              </p>

              <div className="space-y-6">
                <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    Pedizone Intense Repair (%15 Üre)
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Yoğun çatlaklar ve nasırlaşmış ciltler için tasarlanmış ana gücümüzdür. Yüksek üre oranıyla önce ölü deriyi debride eder (temizler), sonra alttaki yeni deriyi derinlemesine nemlendirir.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    Pedizone Antifungal Serum
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Mantar gibi problemler cildin bariyerini bozar ve kuruluğa neden olur. Serumumuzdaki üre, hem cildin bozulan nem dengesini onarır hem de keratolitik etkisiyle antifungal bileşenlerin daha derine nüfuz etmesine yardımcı olur.
                  </p>
                </div>

                <div className="bg-white border-2 border-red-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    Pedizone Temizleme Köpüğü
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    Günlük temizlik sırasında bile cildin kurumasını önlemek ve doğal nem bariyerini korumak için formülümüze üre ekledik.
                  </p>
                </div>
              </div>
            </section>

            {/* Görsel 7-8: Ürün çeşitleri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image7} alt="Pedizone ürün ailesi" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image8} alt="Pedizone kullanım sonuçları" className="w-full h-auto" />
              </div>
            </div>

            {/* Bölüm 4: SSS */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                Üre Hakkında Sıkça Sorulan Sorular (SSS)
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    S1: Üre kullanmak güvenli midir? Adı biraz endişe verici.
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Cevap:</strong> Kesinlikle güvenlidir. Kozmetikte kullanılan üre, laboratuvar ortamında üretilen, son derece saf ve stabil bir formdur. Cildin kendi yapısında da bulunduğu için alerjik reaksiyon riski en düşük içeriklerden biridir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    S2: %15 üre oranı cildimi tahriş eder mi?
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Cevap:</strong> %15, özellikle ayak gibi derinin daha kalın olduğu bölgelerdeki şiddetli kuruluk ve çatlaklar için en etkili ve güvenli oranlardan biridir. Ancak, açık, kanayan yaralar üzerine uygulanmamalıdır. Her zaman olduğu gibi, cildiniz aşırı hassas ise küçük bir alanda test ederek başlamak iyi bir fikirdir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    S3: Üre içeren ürünleri ne kadar sürede etki eder?
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Cevap:</strong> İlk kullanımdan itibaren cildinizde bir yumuşama ve nemlenme hissedersiniz. Ancak keratolitik etkinin (çatlakların ve nasırların görünümündeki azalma) belirgin hale gelmesi için, cildin kendini yenileme döngüsüne de bağlı olarak, düzenli kullanımda genellikle 1-2 hafta gerekir.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    S4: Üre'yi sadece ayaklarım için mi kullanabilirim?
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed">
                    <strong>Cevap:</strong> Pedizone ürünleri ayak sağlığı için formüle edilmiş olsa da, üre genel olarak dirsek, diz gibi aşırı kuru ve sertleşmiş diğer vücut bölgeleri için de harika bir içeriktir.
                  </p>
                </div>
              </div>
            </section>

            {/* Görsel 9-10: Sonuç görselleri */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image9} alt="Sağlıklı ayaklar" className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img src={image10} alt="Pedizone etkisi" className="w-full h-auto" />
              </div>
            </div>

            {/* Sonuç */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 border-b-4 border-red-600 pb-2">
                Sonuç: Bilimi Ayaklarınıza Getirin
              </h2>
              <p className="text-base leading-relaxed text-gray-700 mb-4">
                Cilt bakımında "doğala dönmek", her zaman sadece bitkisel yağlar kullanmak anlamına gelmez. Bazen en güçlü çözüm, cildin kendi biyolojisini anlamak ve onu akıllıca taklit etmektir. Üre, tam olarak bunu yapar: cildinize unuttuğu bir yeteneği, yani nemi hapsetme ve kendini yenileme gücünü geri kazandırır.
              </p>
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Eğer siz de kuru, çatlamış ve yorgun ayaklarınıza kalıcı bir çözüm arıyorsanız, belki de ihtiyacınız olan şey bir nemlendiriciden daha fazlasıdır. İhtiyacınız olan, cildinizin kendi kahramanı olan <strong>Üre</strong>'dir.
              </p>

              {/* CTA Box */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 text-center shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Ayaklarınıza hak ettiği bilimsel bakımı sunmaya hazır mısınız?
                </h3>
                <p className="text-lg mb-6">
                  Pedizone Intense Repair'i keşfedin ve değişimi kendiniz görün.
                </p>
                <button
                  onClick={() => navigate('/product/bakim-serumu')}
                  className="bg-white text-red-600 px-8 py-3 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Ürünü İncele
                </button>
              </div>
            </section>

            {/* Back Button */}
            <div className="text-center mt-12">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5" />
                Anasayfaya Dön
              </button>
            </div>
          </div>
        </article>
      </div>

      <Footer />
    </>
  )
}

export default UreBlog
