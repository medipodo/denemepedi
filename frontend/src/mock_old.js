// Mock Data for Medipodo Podology Center

export const siteInfo = {
  name: 'Medipodo',
  fullName: 'Medipodo Ayak Bakımı',
  tagline: 'Profesyonel Podoloji ve Ayak Bakım Merkezi',
  phone: '0545 656 97 47',
  phoneLink: '905456569747',
  whatsapp: '905456569797',
  address: 'Bağlıca Mah. Mert Cad. 4/2 Etimesgut, Ankara',
  email: 'info@medipodo.com',
  mapCoordinates: { lat: 39.897085007400506, lng: 32.64813457116447 },
  workingHours: 'Pazartesi - Cumartesi: 09:00 - 18:00',
  logo: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/b9h35axs_Adsız%20tasarım%20%281%29.png'
};

export const services = [
  {
    id: 'batik-tirnak',
    title: 'Batık Tırnak Tedavisi',
    shortDesc: 'Ağrısız ve etkili batık tırnak tedavisi ile rahatlayın',
    fullDesc: 'Batık tırnak (unguis incarnatus), tırnağın kenarlarının cilde batması sonucu oluşan ağrılı bir durumdur. Profesyonel podoloji yaklaşımımızla, ağrısız ve kalıcı çözümler sunuyoruz.',
    icon: 'Scissors',
    image: '/images/services/Batik-Tirnak-tedavisi.jpg',
    benefits: [
      'Ağrısız tedavi yöntemleri',
      'Kalıcı çözümler',
      'Enfeksiyon riski minimizasyonu',
      'Profesyonel hijyen standartları'
    ],
    process: [
      'Detaylı muayene ve analiz',
      'Steril aletlerle işlem',
      'Ağrı kontrolü ve rahatlama',
      'Takip ve bakım önerileri'
    ]
  },
  {
    id: 'tirnak-mantari',
    title: 'Tırnak Mantarı Tedavisi',
    shortDesc: 'Etkili tırnak mantarı tedavisi ile sağlıklı tırnaklar',
    fullDesc: 'Tırnak mantarı (onikomikoz), tırnak yapısını bozan ve estetik sorunlara yol açan fungal bir enfeksiyondur. Modern tedavi yöntemlerimizle kalıcı çözüm sağlıyoruz.',
    icon: 'ShieldCheck',
    image: '/images/services/Tirnak-Mantari.jpg',
    benefits: [
      'Modern tedavi protokolleri',
      'Hızlı iyileşme süreci',
      'Tekrarlama riskini azaltma',
      'Kişiye özel tedavi planı'
    ],
    process: [
      'Fungal analiz ve teşhis',
      'Tedavi planlaması',
      'Düzenli uygulama seansları',
      'Kontrol ve koruyucu önlemler'
    ]
  },
  {
    id: 'topuk-bakimi',
    title: 'Topuk Bakımı ve Çatlak Tedavisi',
    shortDesc: 'Çatlak topuklar için profesyonel bakım ve tedavi',
    fullDesc: 'Topuk çatlakları ve kalınlaşmaları hem estetik hem de sağlık problemi oluşturabilir. Özel bakım protokollerimizle topuklarınızı yeniden sağlıklı hale getiriyoruz.',
    icon: 'Sparkles',
    image: '/images/services/Topuk-Bakimi.jpg',
    benefits: [
      'Derinlemesine nemlendirme',
      'Kalınlaşmış deri temizliği',
      'Yumuşak ve sağlıklı cilt',
      'Uzun süreli sonuçlar'
    ],
    process: [
      'Cilt analizi',
      'Profesyonel peeling işlemi',
      'Özel bakım uygulaması',
      'Evde bakım önerileri'
    ]
  },
  {
    id: 'nasir-tedavisi',
    title: 'Nasır ve Kalınlaşma Tedavisi',
    shortDesc: 'Ağrılı nasırların profesyonel tedavisi',
    fullDesc: 'Ayak tabanında oluşan nasırlar ve kalınlaşmalar yürüme konforu ve yaşam kalitenizi olumsuz etkiler. Uzman podoloji hizmetimizle rahatlayın.',
    icon: 'CircleDot',
    image: '/images/services/Nasir-Kalinlasma.jpg',
    benefits: [
      'Ağrısız temizleme',
      'Anında rahatlama',
      'Tekrar oluşumu önleme',
      'Profesyonel cilt bakımı'
    ],
    process: [
      'Nasır analizi ve lokasyon tespiti',
      'Özel aletlerle temizlik',
      'Basınç noktası değerlendirmesi',
      'Önleyici öneriler'
    ]
  },
  {
    id: 'ayak-bakimi',
    title: 'Medikal Ayak Bakımı',
    shortDesc: 'Kapsamlı profesyonel ayak bakımı hizmeti',
    fullDesc: 'Ayaklarınızın sağlığı için kapsamlı bakım programı. Temizlikten bakıma, tırnak kesiminden cilt bakımına kadar tüm ihtiyaçlarınız için buradayız.',
    icon: 'Heart',
    image: '/images/services/Medikal-Ayak-Bakimi.jpg',
    benefits: [
      'Komple ayak bakımı',
      'Hijyenik koşullar',
      'Profesyonel ürünler',
      'Rahatlatıcı deneyim'
    ],
    process: [
      'Genel ayak muayenesi',
      'Tırnak ve cilt bakımı',
      'Masaj ve nemlendirme',
      'Özel bakım önerileri'
    ]
  },
  {
    id: 'sporcu-ayagi',
    title: 'Sporcu Ayağı Tedavisi',
    shortDesc: 'Sporcu ayağı ve mantar tedavisinde uzman çözümler',
    fullDesc: 'Sporcu ayağı (tinea pedis), ayaklar arasında kaşıntı, kızarıklık ve rahatsızlığa neden olan fungal bir enfeksiyondur. Etkili tedavi protokollerimizle hızlı çözüm.',
    icon: 'Zap',
    image: '/images/services/Sporcu-Ayak-Bakimi.jpg',
    benefits: [
      'Hızlı semptom hafifletme',
      'Tam iyileşme protokolü',
      'Tekrar önleme stratejileri',
      'Hijyen eğitimi'
    ],
    process: [
      'Fungal teşhis',
      'Antifungal tedavi',
      'Cilt bakımı',
      'Koruyucu önlemler eğitimi'
    ]
  }
];

export const galleryImages = [
  {
    id: 1,
    before: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/qxjx7yd8_140435E1-D51B-4F4F-962E-CD8244E8CE4E%20%281%29.JPEG',
    after: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/qxjx7yd8_140435E1-D51B-4F4F-962E-CD8244E8CE4E%20%281%29.JPEG',
    title: 'Tırnak Mantarı Tedavisi',
    description: 'Başarılı tırnak mantarı tedavisi öncesi ve sonrası'
  },
  {
    id: 2,
    before: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/kmrbtbgf_C103FAE7-751F-4CBA-A8D7-290C22566498%20%284%29.JPEG',
    after: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/kmrbtbgf_C103FAE7-751F-4CBA-A8D7-290C22566498%20%284%29.JPEG',
    title: 'Topuk Çatlağı Tedavisi',
    description: 'Profesyonel topuk bakımı ile harika sonuçlar'
  },
  {
    id: 3,
    before: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/m6scxd2t_1EDE6E8A-FA1F-48B6-A7EC-F5607C357697.JPEG',
    after: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/m6scxd2t_1EDE6E8A-FA1F-48B6-A7EC-F5607C357697.JPEG',
    title: 'Topuk Bakımı Sonuçları',
    description: 'Derin bakım ile yenilenen ayaklar'
  },
  {
    id: 4,
    before: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/my3nlrj3_E81E7929-25ED-498E-B780-431B419A19FF.JPEG',
    after: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/my3nlrj3_E81E7929-25ED-498E-B780-431B419A19FF.JPEG',
    title: 'Batık Tırnak Tedavisi',
    description: 'Ağrısız batık tırnak tedavisi başarısı'
  },
  {
    id: 5,
    before: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/dzd5sztl_33FCE5DE-9B09-4717-BA66-3B450A0B5789.JPEG',
    after: 'https://customer-assets.emergentagent.com/job_podotherapy/artifacts/dzd5sztl_33FCE5DE-9B09-4717-BA66-3B450A0B5789.JPEG',
    title: 'Tırnak Restorasyonu',
    description: 'Hasarlı tırnak onarımı ve bakımı'
  }
];

// ============================================
// BLOG YAZILARINI BURADAN DEĞİŞTİREBİLİRSİNİZ
// ============================================
// Blog yazılarını değiştirmek için:
// 1. 'title': Başlığı değiştirin
// 2. 'excerpt': Kısa açıklamayı değiştirin
// 3. 'content': Tam içeriği değiştirin (Markdown formatında)
// 4. 'image': Görsel URL'sini değiştirin
// 5. 'tags': Etiketleri değiştirin
// 6. 'author', 'date', 'readTime': İlgili bilgileri güncelleyin

export const blogPosts = [
  {
    id: 'ayak-sagligi-ipuclari',
    title: 'Ayak Sağlığı İçin 10 Önemli İpucu',
    slug: 'ayak-sagligi-ipuclari',
    excerpt: 'Sağlıklı ayaklar için günlük hayatınızda uygulayabileceğiniz pratik öneriler ve profesyonel tavsiyeleri keşfedin.',
    content: `# Ayak Sağlığı İçin 10 Önemli İpucu

Ayaklarımız günlük yaşamımızda en çok kullandığımız ancak en az önem verdiğimiz organlarımızdan biridir. Sağlıklı ayaklar, aktif ve konforlu bir yaşamın temelidir.

## 1. Doğru Ayakkabı Seçimi

Ayakkabı seçimi ayak sağlığının temelidir. Dar, yüksek topuklu veya düz tabanlı ayakkabılar birçok ayak probleminin ana nedenidir. Ayakkabınız:

- Ayağınıza tam oturmalı, ancak sıkmamalı
- Nefes alabilen malzemelerden yapılmış olmalı
- Uygun taban desteği sağlamalı
- Parmak bölgesinde yeterli alan bulunmalı

## 2. Günlük Ayak Hijyeni

Her gün ayaklarınızı ılık suyla yıkayın ve özellikle parmak aralarını iyice kuruların. Nemli ortam mantar ve bakterilerin üremesine zemin hazırlar.

## 3. Tırnak Bakımı

Tırnaklarınızı düz bir şekilde, çok kısa kesmeden kesmeye özen gösterin. Batık tırnak oluşumunu önlemek için köşeleri aşırı derecede kısaltmayın.

## 4. Nemlendirme

Ayaklarınızı, özellikle topuk bölgenizi düzenli olarak nemlendirecek kremler kullanın. Ancak parmak aralarına krem sürmekten kaçının.

## 5. Çorap Seçimi

Pamuklu, ter emici çoraplar tercih edin. Sentetik malzemeler ter birikmesine ve mantar oluşumuna neden olabilir.

## 6. Ayakkabılarınızı Dinlendirin

Aynı ayakkabıyı art arda günler giymekten kaçının. Ayakkabılarınızın havalanması ve kurumasi için zaman tanıyın.

## 7. Düzenli Egzersiz

Ayak parmaklarınızı hareket ettirin, ayak bileklerinizi döndürün. Basit egzersizler dolaşımı artırır ve ayak sağlığını destekler.

## 8. Diyabet Kontrolü

Diyabet hastaysanız, ayak sağlığınıza ekstra dikkat gösterin ve düzenli kontrolleri ihmal etmeyin.

## 9. Erken Müdahale

Herhangi bir ağrı, şişlik, renk değişikliği veya yara durumunda uzman bir podologa başvurun. Erken teşhis tedaviyi kolaylaştırır.

## 10. Profesyonel Ayak Bakımı

Yılda en az bir kez profesyonel ayak bakımı yaptırmanız, olası problemlerin erken tespiti için önemlidir.

## Sonuç

Ayak sağlığı, genel sağlığımızın ayrılmaz bir parçasıdır. Bu basit ipuçlarını uygulayarak ayaklarınızı sağlıklı tutabilir ve yaşam kalitenizi artırabilirsiniz.

**Profesyonel destek için Medipodo Ayak Bakımı merkezimizi ziyaret edebilirsiniz.**`,
    author: 'Dr. Ayşe Demir',
    date: '2024-01-15',
    readTime: '5 dakika',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop',
    tags: ['Ayak Sağlığı', 'Önleyici Bakım', 'Sağlıklı Yaşam']
  },
  {
    id: 'batik-tirnak-nedenleri',
    title: 'Batık Tırnak Nedenleri ve Korunma Yolları',
    slug: 'batik-tirnak-nedenleri',
    excerpt: 'Batık tırnak oluşumunun ana nedenleri ve bu rahatsızlıktan korunmak için alınabilecek önlemler hakkında detaylı bilgi.',
    content: `# Batık Tırnak Nedenleri ve Korunma Yolları

Batık tırnak (unguis incarnatus), tırnağın kenarlarının yanındaki yumuşak dokuya batması sonucu oluşan ağrılı bir durumdur. Bu yaygın problemi anlamak ve önlemek için kapsamlı bir rehber hazırladık.

## Batık Tırnak Nedir?

Batık tırnak, genellikle ayak başparmağında görülen, tırnağın köşelerinin veya kenarlarının cilde girmesi ile karakterize bir durumdur. İltihaplanma, ağrı ve enfeksiyon riski taşır.

## Ana Nedenler

### 1. Yanlış Tırnak Kesimi

En yaygın neden, tırnakların çok kısa veya köşelerden oval şekilde kesilmesidir. Tırnaklar düz bir şekilde, beyaz kısım görünür şekilde kesilmelidir.

### 2. Dar Ayakkabı Kullanımı

Dar, sıkan ayakkabılar parmakları sıkıştırır ve tırnağın cilde batmasına neden olur. Özellikle dar burunlu ve yüksek topuklu ayakkabılar risk oluşturur.

### 3. Genetik Yatkınlık

Aile geçmişi batık tırnak riskini artırır. Tırnak şekli ve büyüme yönü genetik faktörlerden etkilenebilir.

### 4. Travma ve Yaralanma

Parmağa vurmak, düşürmek veya tekrarlayan travmalar (örneğin futbol oynamak) tırnak yapısını bozabilir.

### 5. Mantarlaşmış Tırnaklar

Tırnak mantarı, tırnak kalınlığını ve şeklini değiştirerek batık tırnak oluşumunu kolaylaştırır.

## Belirtiler

- Tırnak kenarında ağrı ve hassasiyet
- Kızarıklık ve şişlik
- İltihap ve akıntı
- Yürürken rahatsızlık

## Korunma Yöntemleri

### Doğru Tırnak Kesim Tekniği

1. Tırnakları düz bir çizgide kesin
2. Köşeleri aşırı kısaltmayın
3. Kaliteli tırnak makası veya törpü kullanın
4. Tırnakları çok kısa kesmekten kaçının

### Uygun Ayakkabı Seçimi

- Geniş burunlu ayakkabılar tercih edin
- Ayak parmakları için yeterli alan bırakın
- Nefes alabilen malzemeler seçin
- Topuk yüksekliğine dikkat edin

### Hijyen ve Bakım

- Ayaklarınızı düzenli yıkayın ve kuruların
- Temiz çoraplar giyin
- Ayak hijyenine özen gösterin

### Erken Müdahale

İlk belirtilerde profesyonel yardım almak, ciddi komplikasyonları önler.

## Tedavi Seçenekleri

### Konservatif Tedavi

- Sıcak su banyoları
- Antibakteriyel pomadlar
- Pamuklu tampon tekniği
- Uygun ayakkabı kullanımı

### Profesyonel Müdahale

Medipodo'da sunduğumuz tedaviler:

- Ağrısız tırnak kenarı düzeltmesi
- Tel/braket sistemleri
- Lazer tedavisi
- Gerekirse cerrahi müdahale

## Ne Zaman Doktora Gitmeli?

- Şiddetli ağrı varsa
- İltihap ve akıntı görülürse
- Ateş yükselmişse
- Diyabet hastaysanız
- Evde tedavi işe yaramıyorsa

## Sonuç

Batık tırnak önlenebilir bir durumdur. Doğru ayak bakımı alışkanlıkları edinmek ve erken müdahale etmek, ciddi problemleri önler.

**Medipodo Ayak Bakımı olarak, batık tırnak tedavisinde uzman ekibimizle hizmetinizdeyiz. Randevu için bizi arayın!**`,
    author: 'Uzm. Mehmet Kaya',
    date: '2024-01-20',
    readTime: '7 dakika',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    tags: ['Batık Tırnak', 'Tedavi', 'Önleme']
  },
  {
    id: 'tirnak-mantari-tedavisi',
    title: 'Tırnak Mantarı: Modern Tedavi Yöntemleri',
    slug: 'tirnak-mantari-tedavisi',
    excerpt: 'Tırnak mantarı tedavisinde güncel yaklaşımlar, tedavi süreçleri ve kalıcı çözüm yöntemlerini öğrenin.',
    content: `# Tırnak Mantarı: Modern Tedavi Yöntemleri

Tırnak mantarı (onikomikoz), dünya çapında milyonlarca insanı etkileyen yaygın bir sağlık problemidir. Modern tedavi yöntemleri ile bu rahatsızlıktan tamamen kurtulmak mümkün.

## Tırnak Mantarı Nedir?

Onikomikoz, tırnakların fungal mikroorganizmalarla enfekte olması sonucu gelişen bir hastalıktır. Genellikle ayak tırnaklarında görülür ancak el tırnaklarını da etkileyebilir.

## Belirtiler ve Tanı

### Erken Belirtiler

- Tırnak renginde değişiklik (sarı, kahverengi, beyaz)
- Tırnakta kalınlaşma
- Tırnak yüzeyinde pürüzlülük
- Tırnak kenarlarında ufalanma

### İleri Belirtiler

- Tırnağın tamamen renk değiştirmesi
- Tırnağın kırılganlaşması
- Tırnak altında döküntü birikimi
- Kötü koku
- Tırnağın yataktan ayrılması

## Risk Faktörleri

1. **Yaş**: İlerleyen yaşla birlikte risk artar
2. **Nem**: Ayakların sürekli nemli kalması
3. **Zayıf bağışıklık sistemi**
4. **Diyabet**: Kan şekeri kontrolünün bozulması
5. **Dolaşım problemleri**
6. **Geçmiş tırnak yaralanmaları**
7. **Halka açık havuzlar ve duşlar**
8. **Aile öyküsü**

## Modern Tedavi Yöntemleri

### 1. Topikal Antifungal Tedaviler

**Avantajları:**
- Yan etki riski düşük
- Evde uygulanabilir
- Hafif vakalarda etkili

**Dezavantajları:**
- Uzun tedavi süresi
- Tırnak içine penetre etmekte zorlanma
- Ağır vakalarda yetersiz kalabilir

### 2. Oral Antifungal İlaçlar

**Avantajları:**
- Sistemik etki
- Daha hızlı sonuçlar
- Ağır vakalarda etkili

**Tedavi Süresi:**
- Ayak tırnakları: 3-4 ay
- El tırnakları: 2-3 ay

### 3. Lazer Tedavisi

En modern tedavi yöntemlerinden biri olan lazer tedavisi:

- Ağrısız uygulama
- Yan etki yok
- Hızlı seans süreleri
- Yüksek başarı oranı
- Sağlıklı dokuya zarar vermez

### 4. Cerrahi Müdahale

Çok ileri vakalarda:
- Tırnak çekimi
- Kimyasal matriks ablasyonu
- Yeni sağlıklı tırnağın büyümesi

## Tedavi Süreci

### İlk Değerlendirme

1. Detaylı muayene
2. Gerekirse laboratuvar testleri
3. Fungal kültür
4. Tedavi planı oluşturma

### Takip Seansları

- Düzenli kontroller
- İlerleme değerlendirmesi
- Tedavi ayarlamaları
- Yan etki takibi

### İyileşme Süresi

Tam iyileşme, yeni sağlıklı tırnağın tamamen büyümesini gerektirir:
- Ayak tırnakları: 12-18 ay
- El tırnakları: 6-9 ay

## Korunma Stratejileri

### Günlük Alışkanlıklar

1. **Ayak hijyeni**: Her gün yıkama ve kurutma
2. **Kuru tutma**: Parmak aralarını özellikle kuruların

3. **Çorap değişimi**: Günlük temiz çoraplar
4. **Ayakkabı rotasyonu**: Ayakkabıları dinlendirin
5. **Nefes alan malzemeler**: Pamuklu çoraplar tercih edin

### Ortak Alanlarda

- Havuz ve duşlarda terlik kullanın
- Başkalarının ayakkabısını giymeyin
- Kendi pedikür aletlerinizi kullanın
- Hijyenik salonları tercih edin

### Ev Ortamında

- Banyoyu kuru tutun
- Ortak havlu kullanmayın
- Yüzeyleri düzenli temizleyin

## Medipodo'da Tedavi Yaklaşımımız

Medipodo Ayak Bakımı olarak:

1. **Kişiselleştirilmiş tedavi planları**
2. **En güncel tedavi yöntemleri**
3. **Deneyimli uzman kadro**
4. **Modern ekipman**
5. **Takip ve destek hizmeti**
6. **Hijyenik koşullar**

## Başarı Oranları

Doğru tedavi ve hasta uyumu ile:
- Topikal tedavi: %50-60
- Oral tedavi: %70-80
- Kombine tedavi: %80-90
- Lazer tedavisi: %75-85

## Neden Erken Tedavi Önemli?

- Tedavi süresi kısalır
- Başarı oranı artar
- Yayılma önlenir
- Komplikasyon riski azalır
- Estetik sorunlar minimize edilir

## Sonuç

Tırnak mantarı tedavi edilebilir bir durumdur. Modern tedavi yöntemleri ve profesyonel yaklaşımla kalıcı çözüm mümkündür. En önemli faktör erken teşhis ve doğru tedavi planıdır.

**Tırnaklarınızda mantar belirtileri mi görüyorsunuz? Medipodo uzman ekibi ile iletişime geçin, profesyonel değerlendirme ve tedavi için randevunuzu alın!**

---

*Not: Bu makale bilgilendirme amaçlıdır. Tedavi için mutlaka uzman bir sağlık profesyoneliyle görüşmelisiniz.*`,
    author: 'Dr. Zeynep Arslan',
    date: '2024-01-25',
    readTime: '8 dakika',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&h=400&fit=crop',
    tags: ['Tırnak Mantarı', 'Onikomikoz', 'Modern Tedavi']
  }
];

export const teamMembers = [
  {
    id: 1,
    name: 'Dr. Ayşe Demir',
    title: 'Başhekim - Podoloji Uzmanı',
    bio: '15 yıllık deneyime sahip podoloji uzmanı. Batık tırnak ve tırnak mantarı tedavilerinde uzmanlaşmıştır.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    specialties: ['Batık Tırnak', 'Tırnak Mantarı', 'Diyabetik Ayak']
  },
  {
    id: 2,
    name: 'Uzm. Mehmet Kaya',
    title: 'Podoloji Uzmanı',
    bio: '10 yıldır ayak sağlığı alanında çalışmaktadır. Medikal pedikür ve ayak bakımında uzman.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    specialties: ['Medikal Pedikür', 'Nasır Tedavisi', 'Topuk Bakımı']
  },
  {
    id: 3,
    name: 'Dr. Zeynep Arslan',
    title: 'Podoloji Uzmanı',
    bio: '8 yıllık tecrübe ile özellikle sporcu ayağı ve ayak mantarı tedavilerinde başarılı sonuçlar.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
    specialties: ['Sporcu Ayağı', 'Mantar Tedavisi', 'Önleyici Bakım']
  }
];

export const whyChooseUs = [
  {
    title: 'Uzman Kadro',
    description: 'Alanında deneyimli ve sertifikalı podoloji uzmanları',
    icon: 'Award'
  },
  {
    title: 'Modern Ekipman',
    description: 'En güncel teknoloji ve steril medikal ekipmanlar',
    icon: 'Sparkles'
  },
  {
    title: 'Hijyenik Ortam',
    description: 'Tam sterilizasyon ve hijyen standartlarına uygunluk',
    icon: 'ShieldCheck'
  },
  {
    title: 'Kişiye Özel Tedavi',
    description: 'Her hasta için özel hazırlanan tedavi programları',
    icon: 'Heart'
  }
];