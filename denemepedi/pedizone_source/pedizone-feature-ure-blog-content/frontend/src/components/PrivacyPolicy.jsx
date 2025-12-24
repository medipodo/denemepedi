import React from 'react'
import Header from './Header'
import Footer from './Footer'

const PrivacyPolicy = () => {
  return (
    <>
      <Header showBackButton={true} />
      
      <div className="privacy-policy-container">
      <div className="privacy-policy-content">
        <h1>Pedizone - Gizlilik Politikası</h1>
        <p className="last-updated"><strong>Son Güncelleme:</strong> 11/09/2025</p>

        <section>
          <h2>1. Toplanan Bilgiler</h2>
          
          <h3>Kişisel Bilgiler:</h3>
          <ul>
            <li>Ad, soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası (isteğe bağlı)</li>
          </ul>

          <h3>Sağlık Bilgileri:</h3>
          <ul>
            <li>Ayak fotoğrafları (sadece uzman danışmanlık için)</li>
            <li>Sağlık durumu açıklamaları</li>
            <li>Günlük bakım rutini verileri</li>
          </ul>

          <h3>Kullanım Verileri:</h3>
          <ul>
            <li>Uygulama kullanım istatistikleri</li>
            <li>Cihaz bilgileri (model, işletim sistemi)</li>
            <li>IP adresi</li>
          </ul>
        </section>

        <section>
          <h2>2. Veri Kullanımı</h2>
          <p>Topladığımız bilgileri şu amaçlarla kullanırız:</p>
          <ul>
            <li>Podolog danışmanlık hizmeti sağlamak</li>
            <li>Günlük bakım rutini takibi</li>
            <li>Uygulama performansını iyileştirmek</li>
            <li>Güvenlik ve dolandırıcılık önleme</li>
          </ul>
        </section>

        <section>
          <h2>3. Veri Paylaşımı</h2>
          <ul>
            <li>Sağlık bilgileriniz sadece lisanslı podologlarla paylaşılır</li>
            <li>Kişisel verileriniz 3. taraflarla satılmaz</li>
            <li>Yasal zorunluluk olmadıkça veri paylaşımı yapılmaz</li>
          </ul>
        </section>

        <section>
          <h2>4. Veri Güvenliği</h2>
          <ul>
            <li>Tüm veriler şifreli olarak saklanır</li>
            <li>Güvenli sunucularda barındırılır</li>
            <li>Düzenli güvenlik denetimleri yapılır</li>
          </ul>
        </section>

        <section>
          <h2>5. Haklarınız</h2>
          <ul>
            <li>Verilerinizi görme hakkı</li>
            <li>Düzeltme hakkı</li>
            <li>Silme hakkı</li>
            <li>Taşınabilirlik hakkı</li>
          </ul>
        </section>

        <section>
          <h2>6. İletişim</h2>
          <p>Sorularınız için: <a href="mailto:info@pedizone.com">info@pedizone.com</a></p>
          <p>Adres: Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA</p>
          <p>Telefon: <a href="tel:+905068860326">+905068860326</a></p>
        </section>
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default PrivacyPolicy

