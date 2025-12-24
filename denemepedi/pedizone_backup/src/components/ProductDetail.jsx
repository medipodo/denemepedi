import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, CheckCircle, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'
import Header from './Header'
import Footer from './Footer'

// Import product images
import productSerum from '../assets/IMG_7571_optimized.webp'
import productFoam from '../assets/pedizone-foot-foam-product.jpg'
import productSerum2 from '../assets/pedizone-urea-cream-new.png'

// Import additional product images for serum
import serumSalicylicAcid from '../assets/products/pedizone-serum-salisilik-asit-tanitim.jpg'
import serumBoxDetail from '../assets/products/pedizone-50ml-serum-kutu-detay.jpg'
import treatmentBeforeAfter from '../assets/products/pedizone-mantar-tedavi-oncesi-sonrasi.jpg'
import podologistApplication from '../assets/products/pedizone-podolog-uygulama-klinik.jpg'

// Import Intense Repair Cream images
import mainProductImage from '../assets/pedizone-catlak-topuk-main.jpg'
import topukKremiMain from '../assets/topuk-kremi-pedizone-irc.jpg'
import topukKremiIntense from '../assets/topuk-kremi-pedizone-intense.jpg'
import topukKremi from '../assets/topuk-kremi-pedizone.jpg'
import topukKremi2 from '../assets/topuk-kremi-pedizone2.jpg'

const ProductDetail = () => {
  const { productId } = useParams()
  const navigate = useNavigate()

  // Sayfa yüklendiğinde scroll pozisyonunu en üste getir
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  // Product data
  const products = {
    'mantar-karsiti-serum': {
      id: 'mantar-karsiti-serum',
      name: 'PediZone® Foot and Nail Care Serum',
      description: 'Ayak ve tırnak bakımı için etkili formül',
      image: productSerum,
      badge: 'En Popüler',
      features: [
        'Hızlı etki',
        'Doğal içerik', 
        'Günlük kullanım',
        'Podolog onaylı'
      ],
      detailedDescription: (
        <div style={{lineHeight: 1.7}}>
          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Ayak Bakımının Önemi</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Ayaklarımız gün boyu ayakkabı içinde kalan, nem ve sürtünmeye maruz kalan bölgelerimizdir. Bu durum zamanla ayaklarda kötü kokuya, tırnaklarda mat görünüme ve ciltte yıpranmaya yol açabilir. Düzenli bakım, hem sağlıklı hem de ferah bir his için oldukça önemlidir.</p>
          
          <p style={{marginBottom: '1rem', color: '#4b5563'}}><strong style={{color: '#dc2626'}}>PediZone® Foot and Nail Care Serum</strong>, ayak ve tırnakların daha bakımlı görünümünü desteklemek üzere özel olarak geliştirilmiştir.</p>

          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={serumSalicylicAcid} alt="PediZone Serum Salisilik Asit İçeriği" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Salisilik asit içeriği ile etkili ayak ve tırnak bakımı</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Etkili Formül</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Serumun içeriğinde bulunan doğal aktif bileşenler, cildi beslemeye ve korumaya yardımcı olur. Düzenli kullanımda ayak ve tırnakların doğal yapısını destekler, kötü kokuların azalmasına katkı sağlar ve ferah bir his verir. Böylece ayaklarınız gün boyu rahat ve bakımlı kalır.</p>

          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={serumBoxDetail} alt="PediZone 50ml Serum Kutu Detayı" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>50ml kişiye özel kilitli kapak ile güvenli ambalaj</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Nasıl Kullanılır?</h3>
          <p style={{marginBottom: '0.75rem', color: '#4b5563'}}>Günlük ayak bakım rutininize PediZone® Foot and Nail Care Serum'u dahil etmek oldukça kolaydır:</p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', color: '#4b5563'}}>
            <li style={{marginBottom: '0.5rem'}}>Öncelikle ayaklarınızı temizleyip iyice kurulayın</li>
            <li style={{marginBottom: '0.5rem'}}>Birkaç damla serumu tırnaklarınıza ve çevresine uygulayın</li>
            <li style={{marginBottom: '0.5rem'}}>Hafifçe masaj yaparak emilmesini sağlayın</li>
          </ul>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Düzenli kullanım, ayak bakımınızın bir parçası haline geldiğinde etkili sonuçlar almanıza yardımcı olacaktır.</p>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Tedavi Etkinliği</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>PediZone® Serum'un etkinliği klinik gözlemlerle kanıtlanmıştır. Düzenli kullanımda tırnak mantarı ve ayak problemlerinde belirgin iyileşme görülmektedir.</p>
          
          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={treatmentBeforeAfter} alt="PediZone Mantar Tedavisi Öncesi Sonrası" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Pedizone Serum düzenli kullanımda gözle görülür ilerleme</p>
          </div>

          <h3 style={{fontSize: '1.25rem', fontWeight: 600, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Uzman Önerileri</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>Uzmanlar, sağlıklı ayaklar için haftada birkaç kez peeling veya ayak banyosu yapmayı, sonrasında ise nemlendirici ve bakım ürünleri kullanmayı önermektedir. PediZone® Serum, bu rutini tamamlayan güçlü bir bakım desteği sunar.</p>
          
          <div style={{textAlign: 'center', margin: '2rem 0'}}>
            <img src={podologistApplication} alt="PediZone Podolog Uygulama Klinik" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'}} />
            <p style={{marginTop: '0.5rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Podolog tarafından profesyonel uygulama</p>
          </div>
          
          <p style={{marginBottom: '1.5rem', color: '#4b5563'}}>Düzenli bakım ile hem tırnaklarınız hem de cildiniz daha sağlıklı bir görünüme kavuşur.</p>

          <div style={{backgroundColor: '#fef3f2', borderLeft: '4px solid #dc2626', padding: '1rem', marginTop: '1.5rem', borderRadius: '0.375rem'}}>
            <p style={{margin: 0, color: '#7c2d12', fontStyle: 'italic'}}><strong>Unutmayın:</strong> Ayak sağlığı günlük yaşam konforunun önemli bir parçasıdır. PediZone® ile ayak ve tırnaklarınıza düzenli bakım yaparak ferah, sağlıklı ve bakımlı hissetmenin keyfini çıkarabilirsiniz.</p>
          </div>
        </div>
      ),
      ingredients: [
        'Tea Tree Oil - Doğal antifungal etki',
        'Urea - Nemlendirici ve yumuşatıcı',
        'Salicylic Acid - Ölü deri hücrelerini temizler',
        'Vitamin E - Antioksidan koruma'
      ],
      usage: 'Temiz ve kuru ayaklara günde 2 kez uygulayın. Etkilenen bölgeye ince bir tabaka halinde sürün ve masaj yapın. Düzenli kullanımda 2-4 hafta içinde sonuç alabilirsiniz.',
      volume: '50ml'
    },
    'temizleme-kopugu': {
      id: 'temizleme-kopugu',
      name: 'PediZone® Ayak Temizleme Köpüğü',
      description: 'Derinlemesine temizlik ve koruma',
      image: productFoam,
      badge: 'Yeni',
      features: [
        'Antibakteriyel',
        'Koku giderici',
        'Yumuşak formül',
        'Günlük bakım'
      ],
      detailedDescription: 'PediZone® Temizleme Köpüğü, ayakların günlük temizliği için özel olarak formüle edilmiştir. Antibakteriyel özellikleri sayesinde mikroorganizmaları temizlerken cildi kurutmaz.',
      ingredients: [
        'Chlorhexidine - Antibakteriyel etki',
        'Aloe Vera - Yatıştırıcı ve nemlendirici',
        'Menthol - Serinletici etki',
        'Panthenol - Cilt onarıcı'
      ],
      usage: 'Islak ayaklara köpük halinde uygulayın. 1-2 dakika masaj yapın ve bol suyla durulayın. Günde 1-2 kez kullanabilirsiniz.',
      volume: '200ml'
    },
    'bakim-serumu': {
      id: 'bakim-serumu',
      name: 'PediZone® %15 Urea Intense Repair Cream',
      description: 'Onarıcı Ayak ve Çatlak Topuk Kremi – Profesyonel Podoloji Kullanımı İçin Geliştirilmiş Formül',
      image: mainProductImage,
      badge: 'Önerilen',
      features: [
        '%15 Üre - Optimal keratolitik güç',
        'Hızlı emilen medikal formül',
        'Bitkisel antifungal kompleks',
        'Klinik olarak test edilmiş',
        'Podolog onaylı'
      ],
      detailedDescription: (
        <div style={{lineHeight: 1.7}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '1.5rem'}}>Ürün Tanımı</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563'}}>
            PediZone® %15 Ureli Intense Repair Cream, podolojik uygulamalar için geliştirilmiş, çatlak topuk ve ileri derecede kurumuş ayak cildi üzerinde yoğun onarım sağlayan profesyonel bakım kremidir.
          </p>
          <p style={{marginBottom: '1.5rem', color: '#4b5563'}}>
            %15 üre, bitkisel kompleks ve derin nemlendirici ajanlarla formüle edilen bu özel karışım, hem tedavi sürecini destekler hem de uygulama sonrası iyileşmeyi hızlandırır.
          </p>

          <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
            <img src={topukKremi} alt="PediZone %15 Urea Intense Repair Cream - Ürün Detay" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}} />
          </div>

          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '2rem'}}>Profesyonel Etki Mekanizması</h3>
          
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>1. %15 Üre – Keratolitik & Yenileyici Etki</h4>
            <ul style={{marginLeft: '1.5rem', color: '#4b5563'}}>
              <li style={{marginBottom: '0.5rem'}}>Cildin üst tabakasındaki sertleşmiş keratini yumuşatır.</li>
              <li style={{marginBottom: '0.5rem'}}>Çatlak yüzeylerin "kapanmasını" kolaylaştırır.</li>
              <li style={{marginBottom: '0.5rem'}}>Ölü derinin kontrollü ve hızlı şekilde uzaklaştırılmasına yardımcı olur.</li>
              <li style={{marginBottom: '0.5rem'}}>Cildi nemli tutarak tekrar çatlamayı önler.</li>
            </ul>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>2. Çay Ağacı Yağı – Antifungal & Antibakteriyel Koruma</h4>
            <ul style={{marginLeft: '1.5rem', color: '#4b5563'}}>
              <li style={{marginBottom: '0.5rem'}}>Ayak mantarı ve bakteri kaynaklı kokulara karşı koruyucu bir bariyer sağlar.</li>
              <li style={{marginBottom: '0.5rem'}}>Klinik ortamlarda enfeksiyon riskinin azaltılmasına destek olur.</li>
            </ul>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>3. Shea Butter & Avokado Yağı – Derin Besleyici Onarım</h4>
            <ul style={{marginLeft: '1.5rem', color: '#4b5563'}}>
              <li style={{marginBottom: '0.5rem'}}>Yoğun nem deposu oluşturarak cildi uzun süre yumuşak tutar.</li>
              <li style={{marginBottom: '0.5rem'}}>Cilt bariyerini güçlendirir ve elastikiyeti artırır.</li>
              <li style={{marginBottom: '0.5rem'}}>Mikro çatlakların daha hızlı toparlanmasına yardımcı olur.</li>
            </ul>
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>4. Glycerin – Nem Tutucu Etki</h4>
            <ul style={{marginLeft: '1.5rem', color: '#4b5563'}}>
              <li style={{marginBottom: '0.5rem'}}>Nem kaybını engeller, cildi gün boyu nemli bırakır.</li>
              <li style={{marginBottom: '0.5rem'}}>Formülün cilde penetre olmasını kolaylaştırır.</li>
            </ul>
          </div>

          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '2rem'}}>Podoloji ve Klinik Kullanım</h3>
          <p style={{marginBottom: '1rem', color: '#4b5563', fontWeight: 500}}>Klinik ve profesyonel uygulamalar:</p>
          <ul style={{marginLeft: '1.5rem', marginBottom: '1rem', color: '#4b5563'}}>
            <li style={{marginBottom: '0.5rem'}}>Ortoniksi uygulamaları sonrası topuk ve cilt bütünlüğünü destekler.</li>
            <li style={{marginBottom: '0.5rem'}}>Nasır, çatlak topuk ve hiperkeratoz tedavilerinde onarımı hızlandırır.</li>
            <li style={{marginBottom: '0.5rem'}}>Profesyonel ayak bakımı işlemlerinde işlem sonrası bakım ürünü olarak önerilir.</li>
            <li style={{marginBottom: '0.5rem'}}>Mantar eğilimli ciltlerde koruyucu bakım sağlar.</li>
          </ul>

          <div style={{backgroundColor: '#fef2f2', border: '2px solid #dc2626', padding: '1.5rem', marginTop: '2rem', marginBottom: '2rem', borderRadius: '12px'}}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 700, color: '#dc2626', marginBottom: '1rem'}}>Ürün Avantajları</h3>
            <div style={{display: 'grid', gap: '0.5rem'}}>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>%15 üre oranı optimal keratolitik güç</span>
              </div>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>Yağlı/yapışkan his bırakmayan hızlı emilen medikal formül</span>
              </div>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>Bitkisel antifungal kompleks sayesinde ekstra koruma</span>
              </div>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>Klinik olarak test edilmiş etkinlik</span>
              </div>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>Podologlar tarafından sahada kullanılan ve onaylanan formül</span>
              </div>
              <div style={{display: 'flex', alignItems: 'start'}}>
                <span style={{color: '#16a34a', marginRight: '0.5rem', fontWeight: 'bold'}}>✔</span>
                <span style={{color: '#4b5563'}}>Klinik çalışmalarla desteklenen kanıtlanmış sonuçlar</span>
              </div>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '3rem 0', backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '12px'}}>
            <img src={topukKremiIntense} alt="PediZone Çatlak Topuk Tedavisi - Öncesi ve Sonrası" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'}} />
            <p style={{marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem', fontStyle: 'italic'}}>Klinik kullanımda gözlemlenen sonuçlar</p>
          </div>

          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '2rem'}}>Kullanım Alanları</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem'}}>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Çatlamış topuk</span>
            </div>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Aşırı kuru ayak cildi</span>
            </div>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Hiperkeratoz (kalınlaşmış cilt)</span>
            </div>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Nasır bakımı sonrası</span>
            </div>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Pedikür/medikal ayak bakımı sonrası</span>
            </div>
            <div style={{backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '8px', border: '1px solid #e5e7eb'}}>
              <span style={{color: '#4b5563', fontWeight: 500}}>• Mantar eğilimli ciltlerde bariyer güçlendirme</span>
            </div>
          </div>

          <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
            <img src={topukKremi2} alt="PediZone Profesyonel Kullanım" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}} />
          </div>

          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '2rem'}}>Kullanım Şekli</h3>
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>Profesyonel kullanım:</h4>
            <p style={{color: '#4b5563', marginBottom: '1rem'}}>
              İşlem sonrası temizlenmiş bölgeye ince tabaka halinde uygulanır. Masaj ile tamamen emdirilir.
            </p>
          </div>
          <div style={{marginBottom: '1.5rem'}}>
            <h4 style={{fontSize: '1.125rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem'}}>Ev bakımı:</h4>
            <p style={{color: '#4b5563', marginBottom: '0.5rem'}}>
              Geceleri temiz ve kuru ayaklara uygulanması önerilir.
            </p>
            <p style={{color: '#4b5563'}}>
              Özellikle çatlak bölgelere yoğunlaştırılarak günlük kullanımda belirgin iyileşme sağlar.
            </p>
          </div>

          <div style={{textAlign: 'center', margin: '2.5rem 0'}}>
            <img src={topukKremiMain} alt="PediZone IRC Ürün Şişesi" style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'}} />
          </div>

          <div style={{backgroundColor: '#dcfce7', borderLeft: '4px solid #16a34a', padding: '1.5rem', marginTop: '2rem', borderRadius: '8px'}}>
            <h3 style={{fontSize: '1.25rem', fontWeight: 700, color: '#15803d', marginBottom: '0.75rem'}}>Uzman Görüşü</h3>
            <p style={{margin: 0, color: '#166534', fontStyle: 'italic'}}>
              "%15 üre ve güçlü bitkisel kompleks içeren bu formül, hem çatlak topuklarda hem de yoğun kuruluk vakalarında hızlı sonuç verir. İşlem sonrası etkili bakım ürünü olarak güvenle kullanılabilir."
            </p>
          </div>

          {/* Müşteri Yorumları */}
          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '3rem'}}>Müşteri Deneyimleri</h3>
          <div style={{backgroundColor: '#fffbeb', padding: '1.5rem', borderRadius: '12px', marginBottom: '1.5rem'}}>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
              <div style={{fontSize: '2rem', fontWeight: 700, color: '#dc2626', marginRight: '1rem'}}>5.0</div>
              <div>
                <div style={{color: '#f59e0b', fontSize: '1.25rem'}}>★★★★★</div>
                <div style={{fontSize: '0.875rem', color: '#6b7280'}}>137 değerlendirme</div>
              </div>
            </div>
          </div>

          <div style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
            <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem'}}>
                <div style={{fontWeight: 600, color: '#1f2937'}}>Ayşe K.</div>
                <div style={{color: '#f59e0b'}}>★★★★★</div>
              </div>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem', fontStyle: 'italic'}}>
                "3 hafta içinde topuklarımdaki çatlaklar tamamen iyileşti. Artık rahatlıkla terlik giyebiliyorum. Kesinlikle tavsiye ederim!"
              </p>
              <div style={{fontSize: '0.75rem', color: '#9ca3af'}}>2 hafta önce</div>
            </div>

            <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem'}}>
                <div style={{fontWeight: 600, color: '#1f2937'}}>Mehmet Y.</div>
                <div style={{color: '#f59e0b'}}>★★★★★</div>
              </div>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem', fontStyle: 'italic'}}>
                "Podologum tavsiye etti. Yapışkan değil, hızlı emiyor. Sonuçlardan çok memnunum. Her gece düzenli kullanıyorum."
              </p>
              <div style={{fontSize: '0.75rem', color: '#9ca3af'}}>1 ay önce</div>
            </div>

            <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb'}}>
              <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem'}}>
                <div style={{fontWeight: 600, color: '#1f2937'}}>Fatma S.</div>
                <div style={{color: '#f59e0b'}}>★★★★★</div>
              </div>
              <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.5rem', fontStyle: 'italic'}}>
                "Yıllardır çektiğim çatlak topuk sorunum bu ürün sayesinde çözüldü. Gerçekten etkili ve kaliteli bir ürün. Herkese tavsiye ediyorum!"
              </p>
              <div style={{fontSize: '0.75rem', color: '#9ca3af'}}>3 hafta önce</div>
            </div>
          </div>

          {/* Sık Sorulan Sorular */}
          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '3rem'}}>Sık Sorulan Sorular</h3>
          <div style={{display: 'grid', gap: '1rem', marginBottom: '2rem'}}>
            <details style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', cursor: 'pointer'}}>
              <summary style={{fontWeight: 600, color: '#1f2937', marginBottom: '0.75rem'}}>Ne kadar sürede sonuç alırım?</summary>
              <p style={{color: '#6b7280', marginTop: '0.75rem', paddingLeft: '1rem'}}>
                Düzenli kullanımda 7-10 gün içinde ilk iyileşmeler gözlemlenir. İleri derecede çatlaklarda 3-4 haftalık kullanımda belirgin sonuçlar alınır.
              </p>
            </details>

            <details style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', cursor: 'pointer'}}>
              <summary style={{fontWeight: 600, color: '#1f2937', marginBottom: '0.75rem'}}>Hassas cilde uygun mu?</summary>
              <p style={{color: '#6b7280', marginTop: '0.75rem', paddingLeft: '1rem'}}>
                Evet, dermatolojik olarak test edilmiştir. Ancak ilk kullanımda küçük bir alanda test yapmanız önerilir. Tahriş oluşursa kullanımı bırakın.
              </p>
            </details>

            <details style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', cursor: 'pointer'}}>
              <summary style={{fontWeight: 600, color: '#1f2937', marginBottom: '0.75rem'}}>Hamileler kullanabilir mi?</summary>
              <p style={{color: '#6b7280', marginTop: '0.75rem', paddingLeft: '1rem'}}>
                Hamilelik ve emzirme döneminde kullanım öncesinde doktorunuza danışmanız önerilir. Topikal kullanım genellikle güvenlidir.
              </p>
            </details>

            <details style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', cursor: 'pointer'}}>
              <summary style={{fontWeight: 600, color: '#1f2937', marginBottom: '0.75rem'}}>Günde kaç kez uygulanmalı?</summary>
              <p style={{color: '#6b7280', marginTop: '0.75rem', paddingLeft: '1rem'}}>
                Günde 1-2 kez uygulama yeterlidir. En iyi sonuç için gece uygulaması ve çorap giyilmesi önerilir.
              </p>
            </details>

            <details style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', cursor: 'pointer'}}>
              <summary style={{fontWeight: 600, color: '#1f2937', marginBottom: '0.75rem'}}>Raf ömrü ne kadardır?</summary>
              <p style={{color: '#6b7280', marginTop: '0.75rem', paddingLeft: '1rem'}}>
                Açılmamış ürünün raf ömrü 3 yıldır. Açıldıktan sonra 12 ay içinde kullanılması önerilir. Oda sıcaklığında, güneş ışığından uzakta saklayınız.
              </p>
            </details>
          </div>

          {/* Güven Unsurları */}
          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '3rem'}}>Güven ve Sertifikalar</h3>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2rem'}}>
            <div style={{backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '2px solid #86efac'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✓</div>
              <div style={{fontWeight: 600, color: '#166534', marginBottom: '0.25rem'}}>Podolog Onaylı</div>
              <div style={{fontSize: '0.75rem', color: '#6b7280'}}>Profesyonel Kullanım</div>
            </div>
            <div style={{backgroundColor: '#eff6ff', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '2px solid #93c5fd'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✓</div>
              <div style={{fontWeight: 600, color: '#1e40af', marginBottom: '0.25rem'}}>Dermatolojik Test</div>
              <div style={{fontSize: '0.75rem', color: '#6b7280'}}>Klinik Onaylı</div>
            </div>
            <div style={{backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', border: '2px solid #fde047'}}>
              <div style={{fontSize: '2rem', marginBottom: '0.5rem'}}>✓</div>
              <div style={{fontWeight: 600, color: '#92400e', marginBottom: '0.25rem'}}>Paraben Free</div>
              <div style={{fontSize: '0.75rem', color: '#6b7280'}}>Güvenli Formül</div>
            </div>
          </div>

          {/* Teknik Özellikler */}
          <h3 style={{fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1rem', marginTop: '3rem'}}>Teknik Özellikler</h3>
          <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e5e7eb', marginBottom: '2rem'}}>
            <table style={{width: '100%', borderCollapse: 'collapse'}}>
              <tbody>
                <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>Ürün Hacmi</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>150 ml</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>Ana İçerik</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>%15 Urea, Tea Tree Oil, Shea Butter</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>Raf Ömrü</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>3 yıl (açılmamış), 12 ay (açıldıktan sonra)</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>Saklama Koşulları</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>Oda sıcaklığında, güneş ışığından uzakta</td>
                </tr>
                <tr style={{borderBottom: '1px solid #e5e7eb'}}>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>Üretim Yeri</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>Türkiye</td>
                </tr>
                <tr>
                  <td style={{padding: '0.75rem', fontWeight: 600, color: '#6b7280'}}>İçermez</td>
                  <td style={{padding: '0.75rem', color: '#1f2937'}}>Paraben, Yapay Renklendirici</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
      ingredients: [
        '%15 Urea - Keratolitik & yenileyici etki, yoğun nemlendirme',
        'Tea Tree Oil (Çay Ağacı Yağı) - Antifungal & antibakteriyel koruma',
        'Shea Butter - Derin besleyici onarım, cilt bariyeri güçlendirme',
        'Avocado Oil (Avokado Yağı) - Vitamin açısından zengin, elastikiyet artırıcı',
        'Glycerin - Nem tutucu, formül penetrasyon kolaylaştırıcı'
      ],
      usage: 'Profesyonel Kullanım: İşlem sonrası temizlenmiş bölgeye ince tabaka halinde uygulayın ve masaj ile emdirin. Ev Kullanımı: Geceleri temiz ve kuru ayaklara uygulayın. Özellikle çatlak topuk ve kuru bölgelere odaklanın. Düzenli kullanımda belirgin iyileşme görürsünüz.',
      volume: '150ml',
      podologistRecommendation: '%15 üre ve güçlü bitkisel kompleks içeren bu formül, hem çatlak topuklarda hem de yoğun kuruluk vakalarında hızlı sonuç verir. İşlem sonrası etkili bakım ürünü olarak güvenle kullanılabilir. Ortoniksi, nasır ve hiperkeratoz tedavilerinde onarımı hızlandırır.'
    }
  }

  const product = products[productId]

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün bulunamadı</h1>
          <Button onClick={() => navigate('/')} className="pedizone-button">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ana Sayfaya Dön
          </Button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Header showBackButton={true} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Product Detail Content */}
        <div className="pedizone-container py-8 lg:py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left - Product Image (Sticky) */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-auto object-contain"
                  />
                  {product.badge && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 text-white px-4 py-2 text-sm">
                        {product.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right - Product Info */}
            <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="pedizone-heading text-4xl text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="pedizone-text text-xl text-gray-600 mb-6">
                {product.description}
              </p>
              
              <div className="mb-6">
                <span className="text-lg text-gray-500">({product.volume})</span>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Ürün Özellikleri
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Ürün Açıklaması
              </h3>
              <div className="text-gray-700 leading-relaxed product-description-content">
                {product.detailedDescription}
              </div>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                İçerik
              </h3>
              <div className="space-y-2">
                {product.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{ingredient}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Usage */}
            <div>
              <h3 className="pedizone-heading text-2xl text-gray-900 mb-4">
                Kullanım Şekli
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.usage}
              </p>
            </div>

            {/* Podolog Recommendation */}
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                Podolog Önerisi
              </h3>
              <p className="text-gray-700">
                {product.podologistRecommendation || 'Bu ürün, ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır. Düzenli kullanımda etkili sonuçlar alabilirsiniz. Herhangi bir yan etki durumunda kullanımı bırakın ve uzmanınıza danışın.'}
              </p>
            </div>
          </div>
        </div>

        {/* Satın Alma Bilgileri */}
        <div className="pedizone-container py-8 lg:py-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <h2 className="pedizone-heading text-3xl text-gray-900 mb-4 text-center">
              Nereden Satın Alınır?
            </h2>
            <p className="text-gray-700 mb-6 text-lg text-center max-w-3xl mx-auto">
              PediZone ürünlerine Türkiye genelindeki yetkili bayilerimizden ve online satış kanallarımızdan ulaşabilirsiniz.
            </p>
            <ul className="space-y-3 mb-8 max-w-2xl mx-auto">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Yetkili podoloji klinikleri</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Seçili eczaneler</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Online satış bayileri</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-6 rounded-xl text-lg"
                onClick={() => navigate('/bayiler')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Bayi Bul
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 px-6 py-6 rounded-xl text-lg"
                onClick={() => window.location.href = 'mailto:info@pedizone.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                İletişime Geç
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="pedizone-heading text-2xl text-gray-900 mb-6">
                    Ürün Hakkında Bilgi Al
                  </h3>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Adınızı girin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="E-posta adresinizi girin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Telefon numaranızı girin"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj
                      </label>
                      <textarea 
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        placeholder="Ürün hakkında sormak istediğiniz soruları yazın"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full pedizone-button">
                      <Mail className="w-4 h-4 mr-2" />
                      Bilgi Talep Et
                    </Button>
                  </form>
                </div>

                <div className="space-y-6">
                  <h3 className="pedizone-heading text-2xl text-gray-900">
                    İletişim Bilgileri
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Adres</p>
                        <p className="text-gray-600">Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Telefon</p>
                        <p className="text-gray-600">05068860326</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">E-posta</p>
                        <p className="text-gray-600">info@pedizone.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      </div>
      
      <Footer />
    </>
  )
}

export default ProductDetail

