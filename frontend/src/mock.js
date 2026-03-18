// PediZone Site Verileri

// Ürün görselleri - Kart görselleri
import productSerumCard from './assets/pedizone-serum-card.jpg';
import productFoamCard from './assets/pedizone-kopuk-card.webp';
import productCreamCard from './assets/pedizone-krem-card.jpg';

// Blog görselleri - optimized webp format (600x305)
import blogMedikalAyakBakimi from './assets/blog/medikal-ayak-bakimi.webp';
import blogAyakMantari from './assets/blog/ayak-mantari-yeni.webp';
import blogTirnakMantari from './assets/tirnak-mantari-cesitleri.webp';
import blogSerumKullanimi from './assets/pedizone-serum-kullanimi.webp';
import blogAyakKokusu from './assets/blog/ayak-kokusu-blog.webp';
import blogAyakHijyeni from './assets/blog/ayak-hijyeni-blog.webp';

// Üre blogu kapak görseli - public klasöründen
const blogUreNedir = '/blog-images/ure-nedir/ure-kapak.webp';
const blogTirnakMantariNedenGecmez = '/images/blog/tirnak-mantari-neden-gecmez/tirnak-mantari-neden-gecmez.webp';

// Ayak mantarı blog görselleri
import ayakParmakArasiMantar from './assets/blog/ayak-mantari/ayak-parmak-arasi-mantar.jpg';
import ayakMantariKasinti from './assets/blog/ayak-mantari/ayak-mantari-kasinti-pullanma.jpg';
import tirnakMantarliAyak from './assets/blog/ayak-mantari/tirnak-mantarli-ayak.jpg';
import pedizoneSerumBefore from './assets/blog/ayak-mantari/pedizone-serum-before.jpg';
import ayakKasinmasi from './assets/blog/ayak-mantari/ayak-kasinmasi.jpg';

// Site Bilgileri
export const siteInfo = {
  name: 'PediZone',
  tagline: 'Profesyonel Ayak Bakım Ürünleri',
  description: 'Podologların önerileri ve beklentilerine yönelik hazırlanan etkili ayak bakım ürünleri.',
  phone: '0506 886 03 26',
  phoneLink: '+905068860326',
  email: 'info@pedizone.com',
  address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
  whatsapp: 'https://wa.me/905068860326'
};

// Ürünler
export const products = [
  {
    id: 'foot-nail-care-serum',
    name: 'PediZone® Foot and Nail Care Serum',
    shortName: 'Ayak ve Tırnak Bakım Serumu',
    description: 'Ayak ve tırnak bakımı için etkili formül',
    category: 'Ayak Bakım Ürünleri',
    manufacturer: 'PediZone',
    image: productSerumCard,
    badge: 'En Popüler',
    features: ['Hızlı etki', 'Doğal içerik', 'Günlük kullanım', 'Podolog onaylı'],
    ingredients: ['Tea Tree Oil - Doğal antifungal etki', 'Urea - Nemlendirici ve yumuşatıcı', 'Salicylic Acid - Ölü deri hücrelerini temizler', 'Vitamin E - Antioksidan koruma'],
    usage: 'Temiz ve kuru ayaklara günde 2 kez uygulayın. Düzenli kullanımda 2-4 hafta içinde sonuç alabilirsiniz.',
    volume: '50ml'
  },
  {
    id: 'temizleme-kopugu',
    name: 'PediZone® Fresh-Guard Ayak Temizleme Köpüğü',
    shortName: 'Temizleme Köpüğü',
    description: 'Derinlemesine temizlik ve koruma',
    category: 'Ayak Bakım Ürünleri',
    manufacturer: 'PediZone',
    image: productFoamCard,
    badge: 'Yeni',
    features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', 'Günlük bakım'],
    ingredients: ['Chlorhexidine - Antibakteriyel etki', 'Aloe Vera - Yatıştırıcı ve nemlendirici', 'Menthol - Serinletici etki', 'Panthenol - Cilt onarıcı'],
    usage: 'Islak ayaklara köpük halinde uygulayın. 1-2 dakika masaj yapın ve bol suyla durulayın.',
    volume: '200ml'
  },
  {
    id: 'ureli-krem',
    name: 'PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi',
    shortName: '%15 Üreli Krem',
    description: 'Genel ayak bakımı ve nemlendirme',
    image: productCreamCard,
    badge: 'Önerilen',
    features: ['Yoğun nemlendirme', 'Onarıcı etki', 'Koruyucu bariyer', 'Tüm cilt tipleri'],
    ingredients: ['%15 Urea - Yoğun nemlendirme', 'Shea Butter - Besleyici ve koruyucu', 'Avocado Oil - Vitamin açısından zengin', 'Glycerin - Nem tutucu'],
    usage: 'Temiz ayaklara gece yatmadan önce uygulayın. Özellikle topuk ve çatlak bölgelere odaklanın.',
    volume: '150ml'
  }
];

// Blog Yazıları
export const blogPosts = [
  {
    id: 'tirnak-mantari-neden-gecmez',
    title: 'Tırnak Mantarı Neden Geçmez? En Sık Yapılan 7 Kritik Hata',
    slug: 'tirnak-mantari-neden-gecmez',
    excerpt: 'Tırnak mantarı neden aylarca geçmez? En sık yapılan hataları ve doğru bakım yöntemlerini öğrenin.',
    image: blogTirnakMantariNedenGecmez,
    date: '26 Aralık 2025',
    readTime: '8 dk',
    author: 'Podolog Serdar Ceylan',
    tags: ['Tırnak Mantarı', 'Ayak Bakımı', 'Mantar Tedavisi'],
    isCustomComponent: true
  },
  {
    id: 'nasir-nedir-evde-gecer-mi',
    title: 'Nasır Nedir? Evde Geçer mi? Ne Zaman Medikal Müdahale Gerekir?',
    slug: 'nasir-nedir-evde-gecer-mi',
    excerpt: 'Nasır neden oluşur? Evde geçer mi? Hangi durumlarda medikal ayak bakımı gerekir? Nasır tedavisi ve önleme yöntemleri hakkında detaylı rehber.',
    metaTitle: 'Nasır Nedir? Evde Geçer mi? | Medikal Müdahale Ne Zaman Gerekir?',
    metaDescription: 'Nasır neden oluşur? Evde geçer mi? Hangi durumlarda medikal ayak bakımı gerekir? Nasır tedavisi ve önleme yöntemleri hakkında detaylı rehber.',
    image: '/blog-images/nasir-nedir/nasir-nedir-kapak.webp',
    date: '4 Mart 2026',
    readTime: '12 dk',
    author: 'Podolog Serdar Ceylan',
    tags: ['Nasır', 'Ayak Sağlığı', 'Kallus', 'Medikal Ayak Bakımı', 'Nasır Tedavisi', 'Topuk Nasırı'],
    sections: [
      {
        type: 'intro',
        content: 'Ayakta oluşan sert, kalın ve bazen ağrılı deri tabakası çoğu zaman "küçük bir sorun" gibi görülür. Oysa nasır, ayağın maruz kaldığı basınç ve sürtünmeye karşı geliştirdiği savunma mekanizmasıdır. Görmezden gelindiğinde ilerleyebilir, yürüyüş konforunu bozabilir ve kronik hale gelebilir. Bu yazıda nasırın ne olduğunu, neden oluştuğunu, evde geçip geçmeyeceğini ve hangi durumlarda medikal müdahale gerektiğini detaylı şekilde ele alıyoruz.'
      },
      {
        type: 'heading',
        content: 'Nasır Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Nasır (kallus), cildin sürekli basınç ve sürtünmeye maruz kalan bölgelerinde koruyucu olarak kalınlaşmasıdır. Genellikle ayak tabanında, topuk bölgesinde, parmak üstlerinde ve parmak aralarında görülür.'
      },
      {
        type: 'paragraph',
        content: 'Derinin üst tabakasındaki keratin hücreleri yoğunlaşır ve sertleşir. Başlangıçta ağrı yapmayabilir; ancak ilerleyen durumlarda batma, yanma ve hassasiyet oluşabilir.'
      },
      {
        type: 'heading',
        content: 'Nasır Çeşitleri ve Yerleşim Bölgelerine Göre Özellikleri'
      },
      {
        type: 'paragraph',
        content: 'Nasır sadece "sert deri" değildir. Oluştuğu bölgeye göre hem yapısı hem verdiği rahatsızlık farklılık gösterebilir. Özellikle ayakta belirli anatomik noktalarda görülen nasırlar daha ağrılı olabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/nasir-nedir/plantar-nasir.webp',
        alt: 'Ayak tabanında metatars başlarında oluşan plantar nasır görüntüsü',
        caption: 'Metatars başlarındaki nasır yürürken batma hissi oluşturur'
      },
      {
        type: 'subheading',
        content: 'Metatars Başlarındaki Nasır (Ayak Tabanı Ön Bölge)'
      },
      {
        type: 'paragraph',
        content: 'Metatars başları, ayak tabanının ön kısmında yer alan kemik çıkıntılarıdır. Yürürken vücut ağırlığının önemli bir bölümü bu noktaya biner.'
      },
      {
        type: 'bulletList',
        title: 'Bu bölgede oluşan nasırlar genellikle:',
        items: [
          'Yuvarlak ve serttir',
          'Yürürken batma hissi oluşturur',
          'İnce tabanlı ayakkabılarla artış gösterir',
          'Uzun süre ayakta kalan kişilerde sık görülür'
        ]
      },
      {
        type: 'paragraph',
        content: 'Metatars bölgesindeki nasırlar çoğunlukla basınç dağılımı bozukluğuna bağlıdır. Ortopedik destek kullanılmadığında tekrar etme eğilimindedir.'
      },
      {
        type: 'image',
        src: '/blog-images/nasir-nedir/parmak-arasi-nasir.webp',
        alt: 'Parmak aralarında oluşan yumuşak nasır (heloma molle) görüntüsü',
        caption: 'Parmak arası nasırlar nemli ortam nedeniyle beyazımsı ve yumuşaktır'
      },
      {
        type: 'subheading',
        content: 'Parmak Arası Nasır (Yumuşak Nasır)'
      },
      {
        type: 'paragraph',
        content: 'Parmak aralarında oluşan nasırlar genellikle nemli ortam nedeniyle beyazımsı ve yumuşaktır. Tıbbi olarak "yumuşak heloma" olarak adlandırılır.'
      },
      {
        type: 'bulletList',
        title: 'Özellikleri:',
        items: [
          'Nemli ve hassas yapı',
          'Yanma hissi',
          'Dar ayakkabıyla artan ağrı',
          'İki parmak arasında sürtünmeye bağlı gelişim'
        ]
      },
      {
        type: 'paragraph',
        content: 'Parmak arası nasırlar çoğu zaman çekiç parmak deformitesi veya sıkışık ayakkabı kullanımına bağlıdır.'
      },
      {
        type: 'subheading',
        content: 'Ayak Kenarı Nasırı'
      },
      {
        type: 'paragraph',
        content: 'Ayak iç kenarı (medial) veya dış kenarında (lateral) görülebilir. Genellikle yürüyüş bozukluğu veya yanlış basma alışkanlığı ile ilişkilidir.'
      },
      {
        type: 'bulletList',
        title: 'Bu tip nasırlar:',
        items: [
          'Uzun ve çizgisel kalınlaşma şeklindedir',
          'Sporcularda daha sık görülür',
          'Yanlış taban desteğiyle artabilir'
        ]
      },
      {
        type: 'paragraph',
        content: 'Ayak kenarında oluşan nasırlar genellikle yaygın kallus formundadır ve erken müdahale edilmezse kalın tabaka haline gelebilir.'
      },
      {
        type: 'subheading',
        content: 'Topuk Nasırı'
      },
      {
        type: 'paragraph',
        content: 'Topuk bölgesinde görülen nasırlar genellikle yaygın kalınlaşma şeklindedir. Kuruluk eşlik ediyorsa çatlak oluşabilir.'
      },
      {
        type: 'bulletList',
        items: [
          'Sert zemin üzerinde uzun süre kalmak',
          'Fazla kilo',
          'Nem eksikliği'
        ]
      },
      {
        type: 'paragraph',
        content: 'topuk nasırının temel nedenlerindendir.'
      },
      {
        type: 'image',
        src: '/blog-images/nasir-nedir/parmak-ustu-nasir.webp',
        alt: 'Ayak parmağı üstünde oluşan nasır ve çekirdekli nasır görüntüsü',
        caption: 'Parmak üstü nasırları dar ayakkabı basıncına bağlı gelişir'
      },
      {
        type: 'subheading',
        content: 'Parmak Üstü Nasırı'
      },
      {
        type: 'paragraph',
        content: 'Genellikle dar ayakkabının parmak üstüne baskı yapması sonucu oluşur.'
      },
      {
        type: 'bulletList',
        items: [
          'Küçük ama derin olabilir',
          'Ortasında çekirdek gelişebilir',
          'Çekiç parmak deformitesiyle sık görülür'
        ]
      },
      {
        type: 'paragraph',
        content: 'Bu tip nasırlar basınç devam ettiği sürece ilerleme eğilimindedir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Önemli Nokta',
        content: 'Nasırın yeri bize sebep hakkında ipucu verir: Metatars başı → basınç dağılım sorunu, Parmak arası → sürtünme + nem, Ayak kenarı → yanlış basma, Topuk → kuruluk + yük, Parmak üstü → dar ayakkabı. Bu nedenle nasır tedavisinde sadece temizleme değil, basınç analizi ve ayak değerlendirmesi gerekir.'
      },
      {
        type: 'heading',
        content: 'Nasır Neden Oluşur?'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Yanlış Ayakkabı Seçimi',
        content: 'Dar, sert veya ayağın anatomisine uygun olmayan ayakkabılar belirli noktalara fazla yük bindirir.'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Ayak Yapısal Problemleri',
        content: 'Düz tabanlık, yüksek kavis veya çekiç parmak gibi durumlar basınç dağılımını bozar.'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Uzun Süre Ayakta Kalmak',
        content: 'Özellikle aktif çalışan kişilerde sık görülür.'
      },
      {
        type: 'numberedSection',
        number: 4,
        title: 'Cilt Kuruluğu',
        content: 'Kuruyan deri elastikiyetini kaybeder ve kalınlaşmaya daha yatkın hale gelir. Bu nedenle düzenli nemlendirme önemlidir. Özellikle <a href="/blog/ure-nedir" class="text-red-600 hover:underline">üre içeren kremler</a> bu noktada destekleyicidir.'
      },
      {
        type: 'heading',
        content: 'Nasır Çeşitleri'
      },
      {
        type: 'subheading',
        content: 'Sert Nasır'
      },
      {
        type: 'paragraph',
        content: 'Genellikle ortasında yoğun bir çekirdek bulunur ve bastıkça ağrı yapar.'
      },
      {
        type: 'subheading',
        content: 'Yumuşak Nasır'
      },
      {
        type: 'paragraph',
        content: 'Parmak aralarında görülür. Nemli yapısı nedeniyle hassastır.'
      },
      {
        type: 'subheading',
        content: 'Yaygın Nasır (Kallus)'
      },
      {
        type: 'paragraph',
        content: 'Topuk ve ayak tabanında geniş alana yayılan kalınlaşma şeklindedir.'
      },
      {
        type: 'heading',
        content: 'Nasır Evde Geçer mi?'
      },
      {
        type: 'paragraph',
        content: 'Yeni oluşmuş ve yüzeysel nasırlarda ev bakımı destekleyici olabilir:'
      },
      {
        type: 'checkList',
        items: [
          'Ilık su banyosu',
          'Yüzeysel ponza taşı uygulaması',
          'Düzenli nemlendirme',
          'Basıncı azaltan ayakkabı kullanımı'
        ]
      },
      {
        type: 'paragraph',
        content: 'Ancak önemli olan sadece kalınlığı azaltmak değil, sebebi ortadan kaldırmaktır. Derin, ağrılı ve çekirdekli nasırlar ev uygulamalarıyla tamamen geçmeyebilir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Cilt Bariyerini Koruyun',
        content: 'Nasır oluşumunu önlemede düzenli nemlendirme çok önemlidir.',
        link: '/urun/ureli-krem'
      },
      {
        type: 'image',
        src: '/blog-images/nasir-nedir/nasir-tedavisi.webp',
        alt: 'Profesyonel medikal ayak bakımı ile nasır tedavisi uygulaması',
        caption: 'Medikal ayak bakımında steril ekipmanlar ve freze cihazı kullanılır'
      },
      {
        type: 'heading',
        content: 'Ne Zaman Medikal Müdahale Gerekir?'
      },
      {
    type: 'paragraph',
    content: 'Aşağıdaki durumlarda <a href="/blog/medikal-ayak-bakimi-nedir" class="text-red-600 hover:underline">profesyonel ayak bakımı</a> önerilir:'
},
      {
        type: 'warningList',
        items: [
          'Yürürken batma ve zonklama varsa',
          'Nasırın ortasında sert çekirdek oluşmuşsa',
          'Tekrar ediyorsa',
          'Diyabet gibi sistemik hastalık varsa',
          'Ev bakımı sonuç vermiyorsa'
        ]
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımında steril ekipmanlar ve freze cihazı ile kontrollü temizlik yapılır. Amaç sadece yüzeyi almak değil, basınç noktasını doğru şekilde azaltmaktır.'
      },
      {
        type: 'heading',
        content: 'Nasır ile Siğil Arasındaki Fark'
      },
      {
        type: 'bulletList',
        items: [
          'Nasır basınca bağlıdır.',
          'Siğil viral kökenlidir.',
          'Siğilde siyah noktalar görülebilir.',
          'Nasır direkt bastırınca ağrır; siğil yanlardan sıkıştırıldığında hassastır.'
        ]
      },
      {
        type: 'paragraph',
        content: 'Doğru teşhis doğru tedavi için kritiktir.'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Nasır mı Siğil mi?',
        content: 'Ayak tabanındaki lezyonların nasır mı siğil mi olduğunu ayırt etmek için detaylı rehberimizi inceleyin.',
        link: '/blog/nasir-sigil-farklari'
      },
    ],
    faqs: [
      {
        question: 'Nasırın kökü var mı?',
        answer: 'Nasırın kök gibi yayılan bir yapısı yoktur. Ancak merkezde sertleşmiş bir çekirdek bulunabilir. Bu yapı derinleştiğinde ağrı artabilir.'
      },
      {
        question: 'Nasır bandı kullanmak güvenli mi?',
        answer: 'Asitli bantlar yüzey dokuyu yakarak inceltir. Yanlış kullanım sağlıklı dokunun zarar görmesine yol açabilir. Özellikle diyabet hastalarında önerilmez.'
      },
      {
        question: 'Nasır kesilir mi?',
        answer: 'Evde kesici aletle müdahale edilmesi enfeksiyon riskini artırır. Profesyonel uygulama dışında önerilmez.'
      },
      {
        question: 'Nasır tamamen geçer mi?',
        answer: 'Sebep ortadan kaldırılırsa kontrol altına alınabilir. Ancak basınç devam ederse tekrar edebilir.'
      },
      {
        question: 'Nasır neden sürekli tekrarlar?',
        answer: 'Yanlış ayakkabı, ortopedik destek eksikliği veya ayak yapısal problemi devam ediyorsa nasır yeniden oluşabilir.'
      }
    ],
    relatedLinks: [
      { text: 'Üre Nedir?', url: '/blog/ure-nedir' },
      { text: 'Medikal Ayak Bakımı Nedir?', url: '/blog/medikal-ayak-bakimi-nedir' },
      { text: 'Ayak Hijyeni İpuçları', url: '/blog/ayak-hijyeni-ipuclari' },
      { text: 'Nasır Siğil Farkları', url: '/blog/nasir-sigil-farklari' },
      { text: 'Üreli Krem', url: '/urun/ureli-krem' }
    ],
    conclusion: {
      title: 'Sonuç',
      content: 'Nasır, ayağın basınca karşı oluşturduğu doğal bir savunma mekanizmasıdır. Hafif vakalarda ev bakımı destekleyici olabilir, ancak tekrarlayan, derin veya ağrılı nasırlarda profesyonel değerlendirme önemlidir. Doğru ayakkabı seçimi, düzenli nemlendirme ve gerektiğinde medikal ayak bakımı ile nasır kontrol altına alınabilir.'
    },
    disclaimer: 'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tanı, teşhis veya tedavi yerine geçmez. Herhangi bir sağlık sorunu yaşıyorsanız mutlaka bir sağlık uzmanına danışınız.'
  },
  {
    id: 'nasir-sigil-farklari',
    title: 'Nasır ve Siğil Arasındaki Farklar: Ayakta Doğru Teşhis ve Etkili Tedavi',
    slug: 'nasir-sigil-farklari',
    excerpt: 'Ayakta nasır ve siğil arasındaki farkları keşfedin. Doğru teşhis, evde uygulamalar ve medikal müdahale yöntemleri hakkında kapsamlı rehber.',
    metaTitle: 'Nasır ve Siğil Farkları | Ayakta Doğru Teşhis ve Tedavi',
    metaDescription: 'Ayakta nasır ve siğil arasındaki farkları keşfedin. Doğru teşhis, evde uygulamalar ve medikal müdahale yöntemleri hakkında kapsamlı rehber.',
    image: '/blog-images/nasir-sigil-farklari/nasir-sigil-kapak.webp',
    date: '4 Mart 2026',
    readTime: '10 dk',
    author: 'Podolog Serdar Ceylan',
    tags: ['Nasır', 'Siğil', 'Plantar Siğil', 'Ayak Sağlığı', 'Medikal Ayak Bakımı', 'Podoloji'],
    sections: [
      {
        type: 'intro',
        content: 'Ayağımızın tabanında veya parmak aralarında oluşan sertlikler çoğu zaman kafa karıştırır. Nasır mı, siğil mi? Ayırmak önemlidir çünkü tedavi yöntemleri tamamen farklıdır. Yanlış müdahale hem ağrıyı artırır hem de tedavi süresini uzatır.'
      },
      {
        type: 'heading',
        content: 'Nasır Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Nasır, sürekli basınç veya sürtünmeye maruz kalan bölgelerde oluşan sert, kalın deri tabakasıdır. Vücut, bu bölgeleri korumak için deriyi kalınlaştırır.'
      },
      {
        type: 'bulletList',
        items: [
          'Sert ve sarımsı görünüm',
          'Basınca duyarlı, genellikle ağrıya sebep olur',
          'Metatars başları, topuk, parmak araları ve ayak kenarlarında sık görülür'
        ]
      },
      {
        type: 'image',
        src: '/blog-images/nasir-sigil-farklari/ayak-nasiri.webp',
        alt: 'Ayak tabanında metatars başında oluşan sert nasır görüntüsü',
        caption: 'Ayak tabanında basınca bağlı oluşan tipik nasır görünümü'
      },
      {
        type: 'paragraph',
        content: 'Evde yeni nasırlar ıslak ponza ve <a href="/urun/ureli-krem" class="text-red-600 hover:underline">üreli kremler</a>le yumuşatılabilir, ancak kalınlaşmış deriler profesyonel bakım gerektirir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Nasır hakkında detaylı bilgi',
        content: 'Nasırın neden oluştuğu, çeşitleri ve tedavi yöntemleri hakkında kapsamlı rehberimize göz atın.',
        link: '/blog/nasir-nedir-evde-gecer-mi'
      },
      {
        type: 'heading',
        content: 'Siğil Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Siğil, Human Papilloma Virüsü (HPV) kaynaklı enfeksiyondur. Ayak tabanında deriye yerleşir ve çoğunlukla içe doğru büyüyerek ağrıya sebep olur.'
      },
      {
        type: 'bulletList',
        items: [
          'Bulaşıcıdır',
          'Siyah noktalar (pıhtılaşmış kan damarları) içerebilir',
          'Bastığında yanlardan ağrı hissi oluşur',
          'Bulaşma: Ortak zeminler, nemli ortamlar, mikroçatlaklar'
        ]
      },
      {
        type: 'image',
        src: '/blog-images/nasir-sigil-farklari/plantar-sigil.webp',
        alt: 'Ayak tabanında oluşan plantar siğil ve siyah noktalar',
        caption: 'Plantar siğilde karakteristik siyah noktalar görülebilir'
      },
      {
        type: 'paragraph',
        content: 'Siğiller genellikle kendi başına kaybolabilir, ancak tedavi süresi uzun olabilir ve ağrı şiddetli olabilir.'
      },
      {
        type: 'heading',
        content: 'Nasır ve Siğil Arasındaki Farklar'
      },
      {
        type: 'comparisonTable',
        headers: ['Özellik', 'Nasır', 'Siğil'],
        rows: [
          ['Oluşum nedeni', 'Basınç ve sürtünme', 'HPV enfeksiyonu'],
          ['Bulaşıcı mı?', 'Hayır', 'Evet'],
          ['Renk ve yapı', 'Sarımsı, sert, düzgün', 'Beyaz-gri, pütürlü, siyah noktalar içerir'],
          ['Ağrı tipi', 'Direkt basınca bağlı', 'Kenarlardan sıkıştırmada batıcı ağrı'],
          ['Yerleşim', 'Basınca maruz bölgeler', 'Ayak tabanı her yerde'],
          ['Tekrar riski', 'Basınç devam ederse', 'Virüs devam ettiği sürece']
        ]
      },
      {
        type: 'heading',
        content: 'Nasır ve Siğil Nasıl Ayırt Edilir?'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Baskı Testi',
        content: 'Nasır direkt basınca duyarlıyken, siğil kenarlardan bastığında ağrır. Bu basit test ayrım için önemli ipucu verir.'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Görünüm',
        content: 'Nasır düz ve sert yapıdadır; siğil ise pütürlü görünüme sahiptir ve içinde siyah noktalar barındırabilir.'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Yerleşim',
        content: 'Metatars başı, topuk, parmak arası → nasır; ayak tabanının çeşitli bölgeleri → siğil.'
      },
      {
        type: 'image',
        src: '/blog-images/nasir-sigil-farklari/kumelesmis-plantar-sigil.webp',
        alt: 'Ayak tabanında kümelenmiş plantar siğil lezyonları',
        caption: 'Kümelenmiş plantar siğiller tedavi edilmezse yayılabilir'
      },
      {
        type: 'heading',
        content: 'Nasır Çeşitleri ve Yerleşim Bölgeleri'
      },
      {
        type: 'bulletList',
       items: [
  { bold: 'Metatars başı nasırı:', text: 'Yürürken batma hissi, dar ayakkabı ile artar' },
  { bold: 'Parmak arası yumuşak nasır:', text: 'Nemli, beyazımsı, hassas' },
  { bold: 'Ayak kenarı nasırı:', text: 'Uzun, çizgisel kalınlaşma, yürüyüş bozukluğuna bağlı' },
  { bold: 'Topuk nasırı:', text: 'Sert zemin ve kurulukla artar' },
  { bold: 'Parmak üstü nasır:', text: 'Dar ayakkabı ve çekiç parmakta sık görülür' }
]
      },
      {
        type: 'heading',
        content: 'Evde ve Medikal Tedavi'
      },
      {
        type: 'subheading',
        content: 'Nasır İçin Ev Bakımı'
      },
      {
        type: 'checkList',
        items: [
          'Ilık suda ayak bekletme',
          'Ponza taşıyla yumuşatma',
          '<a href="/urun/ureli-krem" class="text-red-600 hover:underline">Üreli krem</a> ile nemlendirme',
          'Basınç azaltıcı tabanlık veya ayakkabı düzeltmeleri'
        ]
      },
      {
        type: 'subheading',
        content: 'Siğil İçin Tedavi'
      },
      {
        type: 'checkList',
        items: [
          'Asitli siğil bantları veya solüsyonlar',
          '<a href="/blog/ayak-hijyeni-ipuclari" class="text-red-600 hover:underline">Hijyen</a> ve ayak kuruluğu kontrolü',
          '<a href="/blog/medikal-ayak-bakimi-nedir" class="text-red-600 hover:underline">Medikal müdahale</a>: Podolojik temizlik, kriyoterapi veya lazer'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Uyarı',
        content: 'Evde kesme veya sert müdahale enfeksiyon riski yaratır. Özellikle siğillerde kesici aletlerle müdahale virüsün yayılmasına neden olabilir.'
      },
      {
        type: 'heading',
        content: 'Ne Zaman Profesyonel Destek Alınmalı?'
      },
      {
        type: 'warningList',
        items: [
          'Ağrılı veya derinleşmiş nasır veya siğil',
          'Diyabet veya dolaşım problemi varsa',
          'Evde uygulamalar etkisizse',
          'Siğil yayılıyorsa veya çoğalıyorsa'
        ]
      },
    ],
    faqs: [
      {
        question: 'Nasır ve siğil aynı anda olabilir mi?',
        answer: 'Evet, aynı ayakta hem mekanik kaynaklı nasır hem de viral kaynaklı siğil birlikte görülebilir. Bu durumda her iki lezyonun ayrı ayrı değerlendirilmesi ve uygun tedavi yaklaşımının belirlenmesi için profesyonel bir değerlendirme önerilir. İki farklı oluşum olduğu için tedavi yöntemleri de farklı uygulanmalıdır.'
      },
      {
        question: 'Siğil bulaşıcı mıdır?',
        answer: 'Evet, siğiller HPV virüsü kaynaklı olduğu için bulaşıcıdır. Özellikle havuz kenarları, duşlar, spor salonları gibi ortak nemli zeminlerde yalın ayak dolaşmak bulaşma riskini artırır. Aile içinde ortak havlu veya terlik kullanımı da bulaşmaya neden olabilir. Korunmak için ortak alanlarda terlik kullanılmalı ve ayaklar kuru tutulmalıdır.'
      },
      {
        question: 'Evde nasır kesmek güvenli mi?',
        answer: 'Hayır, evde kesici aletlerle nasır kesmeye çalışmak ciddi enfeksiyon riski taşır. Steril olmayan aletler bakteri girişine neden olabilir, ayrıca yanlış kesim sağlıklı dokuya zarar verebilir. Özellikle diyabet hastaları için bu risk çok daha yüksektir. Profesyonel podolojik müdahale her zaman daha güvenlidir.'
      },
      {
        question: 'Üreli krem siğile etkili mi?',
        answer: 'Hayır, üreli kremler sadece nasırın yumuşatılması ve kuru cildin nemlendirilmesi için uygundur. Siğil viral kaynaklı bir enfeksiyon olduğu için üre içeren ürünlerle tedavi edilemez. Siğil tedavisi için salisilik asit içeren ürünler veya profesyonel müdahale gerekir.'
      },
      {
        question: 'Nasır tekrarlar mı?',
        answer: 'Evet, nasır oluşumuna neden olan basınç ve sürtünme faktörleri devam ederse nasır tekrar oluşabilir. Kalıcı çözüm için yanlış ayakkabı kullanımı düzeltilmeli, gerekirse ortopedik tabanlık kullanılmalı ve ayak yapısal problemleri değerlendirilmelidir. Düzenli nemlendirme de tekrarlamayı azaltmaya yardımcı olur.'
      }
    ],
    relatedLinks: [
      { text: 'Nasır Nedir? Evde Geçer mi?', url: '/blog/nasir-nedir-evde-gecer-mi' },
      { text: 'Medikal Ayak Bakımı Nedir?', url: '/blog/medikal-ayak-bakimi-nedir' },
      { text: 'Ayak Hijyeni İpuçları', url: '/blog/ayak-hijyeni-ipuclari' },
      { text: 'Üreli Krem', url: '/urun/ureli-krem' }
    ],
    conclusion: {
      title: 'Sonuç',
      content: 'Nasır ve siğil ayakta farklı nedenlere bağlı oluşan lezyonlardır. Nasır mekanik basınç sonucu gelişirken, siğil viral bir enfeksiyondur. Tedavi yöntemleri farklı olduğu için doğru teşhis kritik öneme sahiptir. Basit baskı testi ve görsel inceleme ayırımda yardımcı olabilir, ancak şüphe durumunda profesyonel değerlendirme önerilir.'
    },
    disclaimer: 'Bu içerik genel bilgilendirme amaçlıdır ve tıbbi tanı, teşhis veya tedavi yerine geçmez. Herhangi bir sağlık sorunu yaşıyorsanız mutlaka bir sağlık uzmanına danışınız.'
  },
  {
    id: 'ayak-mantari-evde-nasil-gecer',
    title: 'Ayak Mantarı Evde Nasıl Geçer? İşe Yarayabilecek Yöntemler ve Yapılan Hatalar',
    slug: 'ayak-mantari-evde-nasil-gecer',
    excerpt: 'Ayak mantarı evde geçer mi? Evde bakımda işe yarayan yöntemler, yapılan hatalar ve ne zaman uzmana başvurulması gerektiği bu yazıda.',
    image: '/blog-images/ayak-mantari-evde/ayak-mantari-evde-gecer-mi-kapak-gorseli.webp',
    date: '5 Ocak 2026',
    readTime: '6 dk',
    author: 'Podolog Serdar Ceylan',
    sections: [
      {
        type: 'intro',
        content: 'Ayak mantarı çoğu kişinin ilk etapta "evde geçer mi?" diye sorduğu bir problemdir. Özellikle parmak aralarında başlayan kaşıntı, pullanma ve yanma hissi, doğru adımlar atılmazsa kısa sürede yayılabilir. Bu yazıda evde gerçekten işe yarayabilecek yaklaşımlar, sık yapılan hatalar ve hangi durumlarda evde bakımın yeterli olmayacağı net şekilde ele alınmaktadır.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Ayak Mantarı Nedir?',
        content: 'Ayak mantarının nedenleri, belirtileri ve türleri hakkında detaylı bilgi için ana içeriğimizi inceleyebilirsiniz.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Evde Geçer mi?'
      },
      {
        type: 'paragraph',
        content: 'Erken ve hafif vakalarda evde bakım destekleyici olabilir.'
      },
      {
        type: 'paragraph',
        content: 'Ancak ayak mantarı kendiliğinden geçen bir sorun değildir. Evde yapılan uygulamalar, doğru hijyen ve düzenli bakım ile birlikte yürütülmezse enfeksiyon baskılanabilir ama tamamen ortadan kalkmayabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-evde/ayak-mantari-nasil-birsey.webp',
        alt: 'ayak mantarı parmak arası',
        caption: 'Ayak mantarı özellikle parmak aralarında görülür'
      },
      {
        type: 'checkList',
        title: 'Evde bakım:',
        items: [
          'Hafif belirtilerde ilerlemeyi yavaşlatabilir',
          'Tekrarlama riskini azaltmaya yardımcı olabilir',
          'Medikal tedaviye destek sağlar'
        ]
      },
      {
        type: 'heading',
        content: 'Evde Yapılabilecek Doğru Alışkanlıklar'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarıyla mücadelede en etkili adımlar genellikle basit ama düzenli uygulamalardır.'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Günlük Ayak Temizliği',
        summary: 'Temizlik mantarla mücadelenin temelidir.',
        content: 'Ayaklar her gün nazik bir ürünle yıkanmalı, özellikle parmak araları tamamen kurulanmalıdır. Islak kalan cilt, mantar için ideal ortam oluşturur.'
      },
      {
        type: 'bulletList',
        title: 'Günlük bakımda:',
        items: [
          'Köpük veya jel formunda nazik temizleyiciler',
          'Sert sabunlardan kaçınma'
        ]
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Nem Kontrolü',
        summary: 'Mantarın en sevdiği ortam sıcak ve nemli alanlardır.',
        content: ''
      },
      {
        type: 'bulletList',
        items: [
          'Pamuklu veya bambu çoraplar tercih edin',
          'Gün içinde terleyen ayaklar için çorap değiştirin',
          'Ayakkabıları arka arkaya giymeyin, mutlaka havalandırın'
        ]
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-evde/ayak-mantari-nasil-gecer.webp',
        alt: 'ayak mantarı evde bakım',
        caption: 'Tedavi öncesi ve sonrası görünüm'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Parmak Aralarına Hedefli Bakım',
        summary: 'Parmak araları ayak mantarının en sık yerleştiği bölgedir.',
        content: 'Bu alanlar günlük bakımda çoğu zaman ihmal edilir.'
      },
      {
        type: 'bulletList',
        items: [
          'Temizlik sonrası tamamen kuru cilde',
          'Hedefli bakım sağlayan serumlar düzenli olarak uygulanabilir'
        ]
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Ayak Mantarı Neden Tekrarlar?',
        content: 'Günlük bakım rutininin ayak mantarının tekrar riskini nasıl azalttığını ana içeriğimizde detaylıca anlattık.',
        link: '/blog/ayak-mantari-neden-tekrarlar'
      },
      {
        type: 'heading',
        content: 'Evde En Sık Yapılan Hatalar'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının geçmemesinin en yaygın nedeni, iyi niyetle yapılan ama yanlış uygulamalardır.'
      },
      {
        type: 'warningList',
        title: 'Sirke, karbonat, sarımsak gibi yöntemler',
        items: [
          'Bu uygulamalar cildi tahriş edebilir',
          'Çatlaklara yol açabilir',
          'Mantarın daha derine yerleşmesine neden olabilir'
        ]
      },
      {
        type: 'warningList',
        title: 'Islak cilde krem veya serum sürmek',
        items: [
          'Nemli cilt üzerine uygulanan ürünler etkisini azaltır',
          'Mantar yükünü artırabilir'
        ]
      },
      {
        type: 'warningList',
        title: 'Belirtiler azalınca bakımı bırakmak',
        items: [
          'Kaşıntı azalsa bile mantar tamamen yok olmamış olabilir',
          'Bu durum kısa sürede tekrar etmeye yol açar'
        ]
      },
      {
        type: 'heading',
        content: 'Evde Bakım Hangi Durumlarda Yetersizdir?'
      },
      {
        type: 'paragraph',
        content: 'Bazı durumlarda evde bakım tek başına yeterli olmaz ve profesyonel değerlendirme gerekir:'
      },
      {
        type: 'warningList',
        items: [
          'Mantar uzun süredir geçmiyorsa',
          'Ayak tabanına veya topuklara yayılmışsa',
          'Tırnaklarda sararma, kalınlaşma başlamışsa'
        ]
      },
      {
        type: 'paragraph',
        content: 'Bu gibi durumlarda ayak mantarı tırnak mantarına (onikomikoz) dönüşmüş olabilir.'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Tırnak Mantarı Türleri (Onikomikoz)',
        content: 'Tırnak mantarı türleri ve tedavi yaklaşımları hakkında kapsamlı rehber.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'heading',
        content: 'Evde Günlük Ayak Bakım Rutini Nasıl Olmalı?'
      },
      {
        type: 'paragraph',
        content: 'Evde bakımın etkili olabilmesi için düzenli ve bütüncül bir rutin gerekir.'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Nazik Temizlik',
        content: 'Günde 1–2 kez ayakların nazikçe temizlenmesi.'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Hedefli Bakım',
        content: 'Parmak araları ve riskli bölgelere düzenli serum uygulaması.'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Cilt Bariyerini Destekleme',
        content: 'Kuruluk ve çatlakları önlemek için nem dengesini destekleyen ürünler.'
      },
      {
        type: 'paragraph',
        content: 'Bu yaklaşım, ayak mantarını baskılamaya ve tekrar riskini azaltmaya yardımcı olabilir.'
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı evde doğru alışkanlıklar ve düzenli bakım ile kontrol altına alınabilir, ancak hafife alınmamalıdır. Temizlik, nem kontrolü ve hedefli bakım birlikte uygulanmadığında sorun tekrarlayabilir.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Ayak Mantarı Nedir? Belirtileri ve Korunma Yolları',
        content: 'Ayak mantarını tüm yönleriyle ele aldığımız ana rehber.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'medicalDisclaimer',
        content: 'Bu içerik bilgilendirme amaçlıdır; tanı ve tedavi yerine geçmez. Şikayetleriniz için bir sağlık profesyoneline danışınız.'
      }
    ],
    faqs: [
      {
        question: 'Ayak mantarı evde tamamen geçer mi?',
        answer: 'Hafif vakalarda evde bakım destekleyici olabilir; ileri vakalarda profesyonel destek gerekir.'
      },
      {
        question: 'Ayak mantarı kendiliğinden iyileşir mi?',
        answer: 'Hayır. Müdahale edilmezse yayılma ve tekrarlama eğilimindedir.'
      },
      {
        question: 'Ayak mantarı tırnaklara geçer mi?',
        answer: 'Evet. Tedavi edilmeyen ayak mantarı zamanla tırnak yatağına yayılabilir.'
      },
      {
        question: 'Evde bakım ne kadar sürede etki gösterir?',
        answer: 'Düzenli uygulamada belirtiler birkaç hafta içinde azalabilir; bakımın sürekliliği önemlidir.'
      }
    ],
    tags: ['Ayak Mantarı', 'Evde Bakım', 'Ayak Sağlığı', 'Doğal Yöntemler', 'Podoloji']
  },
  {
    id: 'ayak-mantari-mi-egzama-mi',
    title: 'Ayak Mantarı mı Egzama mı? Belirtilerine Bakarak Nasıl Ayırt Edilir?',
    slug: 'ayak-mantari-mi-egzama-mi',
    excerpt: 'Ayakta kaşıntı, kızarıklık veya pullanma var mı? Ayak mantarı ile egzama arasındaki farkları belirtiler üzerinden öğrenin.',
    image: '/blog-images/ayak-mantari-egzama/mantar-mi-egzama-mi-kapak-gorseli.webp',
    date: '2 Ocak 2026',
    readTime: '7 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Ayakta kaşıntı, kızarıklık veya pullanma görüldüğünde çoğu kişi bunun ayak mantarı mı yoksa egzama mı olduğunu ayırt etmekte zorlanır. İki durum bazı belirtiler açısından birbirine benzese de, nedenleri, seyri ve yaklaşımı farklıdır.',
        highlight: 'Yanlış yorumlanan belirtiler, sorunun uzamasına ve tekrar etmesine neden olabilir. Bu yazıda ayak mantarı ile egzama arasındaki farkları, belirtiler üzerinden sade ve anlaşılır şekilde ele alıyoruz.'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı ve Egzama Arasındaki Temel Fark Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı, mantar kaynaklı bir enfeksiyondur. Egzama ise genellikle cilt bariyerinin bozulması ve hassasiyetle ilişkilidir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-egzama/ayak-ve-tirnak-mantari.webp',
        alt: 'Ayak ve tırnak mantarı',
        caption: 'Ayak mantarı mantar kaynaklı bulaşıcı bir enfeksiyondur'
      },
      {
        type: 'comparisonBox',
        wrongTitle: 'Ayak Mantarı',
        rightTitle: 'Egzama',
        wrong: [
          'Bulaşıcıdır',
          'Nemli ve kapalı ortamlarda gelişir',
          'Mantar kaynaklı enfeksiyon'
        ],
        right: [
          'Bulaşıcı değildir',
          'Cilt bariyerinin zayıflamasıyla ortaya çıkar',
          'Hassasiyet ve alerji ilişkili'
        ]
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının nedenleri, belirtileri ve korunma yolları hakkında detaylı bilgi için Ayak Mantarı Nedir, Neden Olur? Belirtileri ve Korunma Yolları içeriğini inceleyebilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Ana İçerik',
        content: 'Ayak mantarının nedenleri, belirtileri ve korunma yolları hakkında kapsamlı rehber',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Kaşıntı Ayak Mantarı mı Egzama mı Gösterir?'
      },
      {
        type: 'paragraph',
        content: 'Kaşıntı her iki durumda da görülebilir ancak şekli ve süresi farklıdır.'
      },
      {
        type: 'bulletList',
        items: [
          'Ayak mantarında kaşıntı daha yoğundur ve özellikle parmak aralarında belirgindir',
          'Egzamada kaşıntı dönem dönem artar, bazen kurulukla birlikte görülür'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Dikkat',
        content: 'Gece artan, yanma hissiyle birlikte olan kaşıntılar çoğu zaman mantar enfeksiyonunu düşündürür.'
      },
      {
        type: 'heading',
        content: 'Pullanma ve Soyulma Nasıl Ayırt Edilir?'
      },
      {
        type: 'paragraph',
        content: 'Pullanma her zaman mantar anlamına gelmez. Ayırt edici bazı noktalar vardır:'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-egzama/ayak-egzamasi.webp',
        alt: 'Ayak egzaması',
        caption: 'Egzamada cilt daha kuru, hassas ve çatlamaya yatkındır'
      },
      {
        type: 'bulletList',
        items: [
          'Ayak mantarında pullanma genellikle parmak aralarında başlar ve nemli görünür',
          'Egzamada cilt daha kuru, hassas ve çatlamaya yatkındır'
        ]
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'İpucu',
        content: 'Eğer soyulma tek bir bölgede yoğunlaşıyorsa ve zamanla yayılıyorsa, mantar olasılığı artar.'
      },
      {
        type: 'heading',
        content: 'Kızarıklık ve Yayılım Şekli Ne Anlatır?'
      },
      {
        type: 'bulletList',
        items: [
          'Ayak mantarı, belirli bir bölgede başlayıp çevreye doğru yayılma eğilimindedir',
          'Egzama, çoğu zaman simetrik ve yaygın alanlarda görülür'
        ]
      },
      {
        type: 'paragraph',
        content: 'Mantar enfeksiyonlarında kızarıklık genellikle net sınırlıdır; egzamada ise daha dağınık olabilir.'
      },
      {
        type: 'heading',
        content: 'Parmak Araları Neden Önemli Bir İpucudur?'
      },
      {
        type: 'paragraph',
        content: 'Ayak parmak araları, ayak mantarının en sık görüldüğü bölgedir. Bu bölgede:'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-egzama/egzama-ayak.webp',
        alt: 'Egzama ayak',
        caption: 'Egzama parmak aralarında nadiren ayak mantarı gibi belirti verir'
      },
      {
        type: 'warningList',
        items: [
          'Beyazlaşma',
          'Yumuşama',
          'Çatlaklar'
        ]
      },
      {
        type: 'paragraph',
        content: 'görülüyorsa mantar ihtimali yüksektir. Egzama parmak aralarında nadiren bu şekilde belirti verir.'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı mı Egzama mı Emin Değilseniz Ne Yapmalısınız?'
      },
      {
        type: 'paragraph',
        content: 'Belirtiler net değilse ve uzun süredir geçmiyorsa, tahminle hareket etmek yerine profesyonel değerlendirme önemlidir.'
      },
      {
        type: 'checkList',
        items: [
          'Medikal ayak bakımı',
          'Ayak analizi',
          'Uzman görüşü'
        ]
      },
      {
        type: 'paragraph',
        content: 'sürecin doğru yönetilmesine yardımcı olur. Detaylı bilgi için Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir? yazısını inceleyebilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Destek',
        content: 'Medikal ayak bakımı ve uzman değerlendirmesi hakkında detaylı bilgi',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'heading',
        content: 'Yanlış Yorumlanan Belirtiler Neden Sorunu Uzatır?'
      },
      {
        type: 'paragraph',
        content: 'Egzama sanılan ayak mantarı tedavi edilmediğinde:'
      },
      {
        type: 'warningList',
        items: [
          'Tırnaklara yayılabilir',
          'Tekrarlayan enfeksiyonlara neden olabilir'
        ]
      },
      {
        type: 'paragraph',
        content: 'Bu nedenle ayak mantarının tırnaklara etkileri hakkında bilgi sahibi olmak önemlidir. Tırnak Mantarı Türleri (Onikomikoz) içeriğini inceleyebilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Tırnak Mantarı Riski',
        content: 'Tedavi edilmeyen ayak mantarı tırnaklara yayılabilir. Tırnak mantarı türleri hakkında detaylı bilgi alın.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayakta görülen her kaşıntı ve pullanma mantar değildir; ancak her egzama da masum değildir. Ayak mantarı ve egzama arasındaki farkları doğru yorumlamak, hem süreci kısaltır hem de tekrar riskini azaltır.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Belirtiler uzuyor, yayılıyor veya sık tekrarlıyorsa profesyonel destek almak en sağlıklı yaklaşımdır.'
      }
    ],
    faqs: [
      {
        question: 'Ayak mantarı ile egzama aynı anda olabilir mi?',
        answer: 'Evet, nadiren de olsa iki durum birlikte görülebilir.'
      },
      {
        question: 'Egzama ayakta mantara dönüşür mü?',
        answer: 'Hayır, ancak zayıflayan cilt bariyeri mantar enfeksiyonlarına zemin hazırlayabilir.'
      },
      {
        question: 'Ayak mantarı kendiliğinden geçer mi?',
        answer: 'Belirtiler azalabilir ancak tamamen kontrol altına alınmadığında tekrar edebilir.'
      },
      {
        question: 'Ayakta kaşıntı her zaman mantar mıdır?',
        answer: 'Hayır, egzama ve cilt hassasiyetleri de kaşıntıya neden olabilir.'
      }
    ],
    tags: ['Ayak Mantarı', 'Egzama', 'Cilt Hastalıkları', 'Ayak Sağlığı', 'Podoloji']
  },
  {
    id: 'ayak-mantari-neden-tekrarlar',
    title: 'Ayak Mantarı Neden Tekrarlar? Geçmeyen Ayak Mantarı İçin Bilmeniz Gerekenler',
    slug: 'ayak-mantari-neden-tekrarlar',
    excerpt: 'Ayak mantarı neden tekrar eder? Geçmeyen ayak mantarının nedenleri, sık yapılan hatalar ve tekrar riskini azaltmak için pratik öneriler.',
    image: '/blog-images/ayak-mantari-tekrar/ayakmantari-neden-tekrarlar.webp',
    date: '2 Ocak 2026',
    readTime: '8 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Ayak mantarı çoğu zaman "geçti" sanılan ama kısa süre sonra yeniden ortaya çıkan bir sorundur. Birçok kişi düzenli bakım yapmasına rağmen ayak mantarının neden tekrar ettiğini anlamakta zorlanır. Bunun temel sebebi, mantarın yalnızca yüzeyde değil; alışkanlıklarda, ayakkabıda ve cilt bariyerinde kalıcı izler bırakmasıdır.',
        highlight: 'Bu yazıda ayak mantarının neden tekrarladığını, en sık yapılan hataları ve tekrar riskini azaltmak için neler yapılması gerektiğini ele alıyoruz.'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının belirtileri, nedenleri ve korunma yolları hakkında daha kapsamlı bilgi için Ayak Mantarı Nedir, Neden Olur? Belirtileri ve Korunma Yolları içeriğimizi inceleyebilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Ana İçerik',
        content: 'Ayak mantarının belirtileri, nedenleri ve korunma yolları hakkında kapsamlı rehber',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Neden Geçtikten Sonra Tekrar Eder?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının tekrarlamasının tek bir sebebi yoktur. Genellikle birkaç faktör bir araya gelir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-tekrar/ayak-alti-mantari.webp',
        alt: 'Ayak altı mantarı',
        caption: 'Ayak mantarı tedavi edilse bile belirli koşullarda tekrar edebilir'
      },
      {
        type: 'heading',
        content: '1. Ayakkabı ve Çoraplar Mantar Kaynağı Olabilir'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı tedavi edilse bile, mantar sporları ayakkabı içinde yaşamaya devam edebilir. Özellikle kapalı, hava almayan ve sık kullanılan ayakkabılar mantar için ideal ortam oluşturur.'
      },
      {
        type: 'warningList',
        items: [
          'Aynı ayakkabıyı her gün giymek',
          'Sentetik çoraplar kullanmak',
          'Ayakkabıları yeterince havalandırmamak'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Sonuç',
        content: 'Ayak iyileşse bile mantar yeniden bulaşır.'
      },
      {
        type: 'heading',
        content: '2. Duş Sonrası Nemli Kalan Ayaklar'
      },
      {
        type: 'paragraph',
        content: 'Mantarlar nemli ortamları sever. Ayaklar yıkandıktan sonra özellikle parmak aralarının nemli kalması, mantarın yeniden çoğalmasına zemin hazırlar.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-tekrar/ayak-mantari-kasinti.webp',
        alt: 'Ayak mantarı kaşıntı',
        caption: 'Nemli kalan ayaklar mantar oluşumu için ideal ortam sağlar'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'En sık yapılan hata',
        content: '"Ayaklarımı yıkıyorum, yeterli" düşüncesi. Oysa kurulama, temizlik kadar önemlidir.'
      },
      {
        type: 'paragraph',
        content: 'Günlük ayak temizliği ve doğru kurulama alışkanlıkları hakkında detaylı önerileri Ayak Hijyeni İpuçları yazımızda bulabilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Hijyen Rehberi',
        content: 'Günlük ayak temizliği ve doğru kurulama alışkanlıkları hakkında detaylı öneriler',
        link: '/blog/ayak-hijyeni-ipuclari'
      },
      {
        type: 'heading',
        content: '3. Bakımın Erken Bırakılması'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarında kaşıntı ve kızarıklık azaldığında çoğu kişi bakımı bırakır. Ancak mantar, belirtiler kaybolsa bile cilt yüzeyinin altında varlığını sürdürebilir.'
      },
      {
        type: 'bulletList',
        items: [
          'Belirtiler geçici olarak azalır',
          'Birkaç hafta içinde yeniden ortaya çıkar',
          'Düzenli ve yeterli süre bakım yapılmadığında tekrar kaçınılmazdır'
        ]
      },
      {
        type: 'heading',
        content: '4. Cilt Bariyerinin Zayıf Olması'
      },
      {
        type: 'paragraph',
        content: 'Çatlaklar, kuruluk ve sertleşmiş deri mantarın cilde tutunmasını kolaylaştırır. Özellikle topuk çatlakları ve aşırı kuru ayak derisi, mantarın tekrar etmesinde önemli rol oynar.'
      },
      {
        type: 'checkList',
        items: [
          'Sağlıklı bir cilt bariyeri mantara karşı doğal bir savunma oluşturur',
          'Cilt bariyerini güçlendirmek tekrarlama riskini azaltır'
        ]
      },
      {
        type: 'heading',
        content: '5. Günlük Ayak Hijyeninin İhmal Edilmesi'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı geçtikten sonra hijyen alışkanlıklarının eski haline dönmesi, sorunun geri gelmesine neden olur.'
      },
      {
        type: 'warningList',
        items: [
          'Ortak alanlarda (havuz, spor salonu, duş) çıplak ayakla dolaşmak',
          'Gün içinde aşırı terleyen ayakları temizlememek'
        ]
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Tekrar Etmemesi İçin Nelere Dikkat Edilmeli?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarını tamamen kontrol altına almak için yalnızca geçici çözümler değil, sürdürülebilir bir bakım rutini gerekir.'
      },
      {
        type: 'checkList',
        items: [
          'Ayaklar her gün nazikçe temizlenmeli',
          'Parmak araları mutlaka kurulanmalı',
          'Ayakkabılar düzenli havalandırılmalı',
          'Nem dengesini destekleyen ürünlerle cilt bariyeri güçlendirilmeli',
          'Bakım, belirtiler geçse bile bir süre daha devam etmeli'
        ]
      },
      {
        type: 'paragraph',
        content: 'Bu yaklaşım, mantarın tekrar etme ihtimalini ciddi ölçüde azaltır.'
      },
      {
        type: 'paragraph',
        content: 'Günlük bakım rutininde ayak hijyenini destekleyen ürünlerin düzenli kullanımı, tekrar riskini azaltmaya yardımcı olabilir. Örnek olarak PediZone® Foot and Nail Care Serum bu amaçla tercih edilen ürünler arasındadır.'
      },
      {
        type: 'productCard',
        title: 'PediZone® Foot and Nail Care Serum',
        content: 'Günlük bakım rutininde ayak hijyenini destekleyen, mantar oluşumuna karşı koruma sağlayan profesyonel formül.',
        benefits: ['Hızlı emilim', 'Günlük kullanıma uygun', 'Podolog onaylı formül'],
        link: '/urun/foot-nail-care-serum'
      },
      {
        type: 'heading',
        content: 'Ne Zaman Profesyonel Destek Alınmalı?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı sürekli tekrarlıyorsa, tırnaklara yayılma belirtileri varsa veya evde bakıma rağmen düzelmiyorsa bir ayak sağlığı uzmanına danışmak önemlidir.'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının tırnaklara yayılmasıyla ilgili belirtiler ve türler hakkında ayrıntılı bilgi için Tırnak Mantarı Türleri (Onikomikoz) içeriğini okuyabilirsiniz.'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Tırnak Mantarı Riski',
        content: 'Tedavi edilmeyen ayak mantarı tırnaklara yayılabilir. Tırnak mantarı türleri ve belirtileri hakkında detaylı bilgi alın.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'paragraph',
        content: 'Profesyonel uygulamalar hakkında bilgi almak isteyenler için Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir? yazımız rehber niteliğindedir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Bakım',
        content: 'Medikal ayak bakımı ve profesyonel değerlendirme, sürecin doğru yönetilmesine yardımcı olur.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının tekrarlaması çoğu zaman "tedavi işe yaramadı" anlamına gelmez. Asıl sorun, mantarın geri dönmesine neden olan günlük alışkanlıkların fark edilmemesidir.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Düzenli hijyen, doğru bakım rutini ve cilt bariyerinin desteklenmesiyle ayak mantarı büyük ölçüde kontrol altına alınabilir.'
      }
    ],
    faqs: [
      {
        question: 'Ayak mantarı neden sürekli tekrar eder?',
        answer: 'Genellikle ayakkabı hijyeni, nemli ortam ve bakımın erken bırakılması nedeniyle tekrar eder.'
      },
      {
        question: 'Ayak mantarı tamamen geçer mi?',
        answer: 'Doğru ve düzenli bakım alışkanlıklarıyla kontrol altına alınabilir.'
      },
      {
        question: 'Ayak mantarı tırnaklara geçer mi?',
        answer: 'Evet, tedavi edilmeyen ayak mantarı zamanla tırnaklara yayılabilir.'
      },
      {
        question: 'Ayak mantarı olanlar nelere dikkat etmeli?',
        answer: 'Ayak hijyenine, kurulama alışkanlığına ve düzenli bakıma dikkat etmelidir.'
      }
    ],
    tags: ['Ayak Mantarı', 'Tekrarlayan Mantar', 'Ayak Hijyeni', 'Podoloji', 'Ayak Sağlığı']
  },
  {
    id: 'ure-nedir',
    title: 'Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?',
    slug: 'ure-nedir',
    excerpt: 'Cildinizin unutulmuş kahramanı: Üre. Dermatolojinin gizli kahramanı olan ürenin bilimsel temelleri ve ayak bakımındaki kritik rolü.',
    image: blogUreNedir,
    date: '24 Aralık 2025',
    readTime: '12 dk',
    author: 'Podolog',
    tags: ['Üre', 'Cilt Bakımı', 'Ayak Bakımı'],
    isCustomComponent: true
  },
  {
    id: 'medikal-ayak-bakimi-nedir',
    title: 'Medikal Ayak Bakımı Nedir? Kimler İçin Gereklidir?',
    slug: 'medikal-ayak-bakimi-nedir',
    excerpt: 'Medikal ayak bakımı nedir, kimler için gereklidir? Ayak mantarı, tırnak sorunları ve profesyonel bakım hakkında detaylı rehber.',
    image: blogMedikalAyakBakimi,
    date: '22 Aralık 2025',
    readTime: '10 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Ayak mantarı sık tekrarlıyor, tırnaklar kalınlaşıyor veya nasırlar sürekli geri mi geliyor? İşte bu noktada "medikal ayak bakımı" kozmetik uygulamalardan ayrılır.',
        highlight: 'Medikal ayak bakımı, ayak ve tırnak sağlığını korumak, mevcut problemleri kontrol altına almak ve oluşabilecek riskleri önlemek amacıyla uzmanlar tarafından uygulanan profesyonel bir bakım yöntemidir.'
      },
      {
        type: 'image',
        src: '/blog-images/medikal-ayak-bakimi/podolog-serdar-ceylan-ankara.jpg',
        alt: 'Podolog Serdar Ceylan - Medikal Ayak Bakımı Uygulaması',
        caption: 'Medikal Ayak Bakımı Podologlar Tarafından Uygulanmalıdır'
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Ne Anlama Gelir?'
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımı; steril koşullarda, ayak sağlığı konusunda eğitim almış uzmanlar (podologlar veya sağlık profesyonelleri) tarafından gerçekleştirilen uygulamaları kapsar.'
      },
      {
        type: 'image',
        src: '/blog-images/medikal-ayak-bakimi/steril-podolog-ankara.jpg',
        alt: 'Steril Podoloji Ortamı',
        caption: 'Steril koşullarda profesyonel bakım'
      },
      {
        type: 'checkList',
        items: [
          'Ayak sağlığını korumak',
          'Var olan sorunların ilerlemesini önlemek',
          'Enfeksiyon riskini azaltmak',
          'Kişiye özel bakım planı oluşturmak'
        ]
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı ile Kozmetik Ayak Bakımı Arasındaki Fark'
      },
      {
        type: 'comparisonBox',
        wrongTitle: 'Kozmetik Ayak Bakımı',
        rightTitle: 'Medikal Ayak Bakımı',
        wrong: [
          'Görünüm odaklıdır',
          'Kozmetik ekipmanlar kullanılır',
          'Hastalık değerlendirmesi yapılmaz',
          'Estetik amaçlıdır'
        ],
        right: [
          'Sağlık odaklıdır',
          'Steril ekipman kullanılır',
          'Ayak hastalıkları değerlendirilir',
          'Uzman kişiler tarafından uygulanır'
        ]
      },
      {
        type: 'heading',
        content: '❓ Medikal Ayak Bakımına İhtiyacınız Olduğunu Gösteren 7 İşaret'
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımı, yalnızca sorun oluştuğunda değil, koruyucu sağlık yaklaşımı olarak da tercih edilebilir. Aşağıdaki işaretlerden herhangi birini yaşıyorsanız, profesyonel değerlendirme zamanı gelmiş olabilir.'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Ayak mantarı', text: 'sık tekrarlıyor ve geçmiyor' },
          { bold: 'Tırnak mantarı', text: '(Onikomikoz) - tırnaklar kalınlaşıyor, renk değiştiriyor' },
          { bold: 'Batık tırnak', text: 'sürekli geri geliyor ve ağrı yapıyor' },
          { bold: 'Nasırlar', text: 'sürekli geri geliyor, aynı yerde tekrarlıyor' },
          { bold: 'Tırnaklar', text: 'kesildikten sonra batıyor ve rahatsızlık veriyor' },
          { bold: 'Topuk çatlakları', text: 'kanamaya başlıyor' },
          { bold: 'Ayak kokusu', text: 'geçmiyor, sürekli hale geldi' },
          { bold: 'Çatlak topuklar', text: 'kronikleşti' },
          { bold: 'Diyabet hastalarında', text: 'düzenli ayak bakımı' },
          { bold: 'Uzun süre kapalı ayakkabı', text: 'giyenler ve sporcular' }
        ]
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Detaylı Bilgi',
        content: 'Ayak mantarı belirtileri ve tedavi yöntemleri hakkında detaylı bilgi almak için ana içeriğimizi inceleyin.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Nasıl Yapılır?'
      },
      {
        type: 'paragraph',
        content: 'Podoloji pratiğinde gördüğümüz en sık sorunlar, doğru teknikle uygulanmayan ayak bakımından kaynaklanır. Uygulama kişiye ve ihtiyaca göre değişmekle birlikte genellikle şu adımları içerir:'
      },
      {
        type: 'image',
        src: '/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi2.jpg',
        alt: 'Medikal Ayak Bakımı Adımları',
        caption: 'Profesyonel bakım adımları'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Değerlendirme',
        content: 'Uzman değerlendirmesi yapılmadan yapılan işlemler, mevcut sorunu daha da kötüleştirebilir. Ayak ve tırnakların detaylı değerlendirilmesi yapılır.',
        product: 'Kişiye özel sorunlar belirlenir'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Hijyenik Temizlik',
        content: 'Enfeksiyon riskini azaltmak için steril temizlik yapılır. Hijyenik temizlik ve dezenfeksiyon uygulanır.',
        product: 'Steril ortam sağlanır'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Deri Bakımı',
        content: 'Klinikte hastaların en çok yaptığı hata, nasırları kendi başına temizlemeye çalışmaktır. Kalınlaşmış deri ve nasırların kontrollü şekilde temizlenmesi yapılır.',
        product: 'Profesyonel ekipmanlarla'
      },
      {
        type: 'stepCard',
        step: 4,
        title: 'Tırnak Bakımı',
        content: 'Batık riskini azaltacak özel kesim tekniği uygulanır. Tırnakların doğru teknikle kesilmesi ve şekillendirilmesi yapılır.',
        product: 'Batık tırnak riski azaltılır'
      },
      {
        type: 'stepCard',
        step: 5,
        title: 'Ürün Önerisi',
        content: 'Podoloji pratiğimizde en sık karşılaştığımız sorunlardan biri, hastanın evde yanlış ürün kullanmasıdır. Gerekli durumlarda destekleyici ürün önerileri verilir.',
        product: 'Evde bakım için uzman rehberliği'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Bilgi',
        content: 'Medikal ayak bakımı ağrısız ve kontrollü bir uygulamadır.'
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Ayak Mantarı ve Tırnak Mantarında Etkili midir?'
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımı, mantar enfeksiyonlarını tek başına tedavi etmez; ancak tedavi sürecini destekler.'
      },
      {
        type: 'image',
        src: '/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi3.jpg',
        alt: 'Tırnak Bakımı',
        caption: 'Tırnak mantarında destekleyici bakım'
      },
      {
        type: 'checkList',
        items: [
          'Mantarın yayılmasını azaltmaya yardımcı olur',
          'Tırnak ve cilt ortamını kontrol altına alır',
          'Tedavi sürecini destekler'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Detaylı Bilgi',
        content: 'Tırnak mantarı türleri (onikomikoz) ve tedavi seçenekleri hakkında detaylı bilgi almak için ilgili içeriğimizi inceleyin.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Kimler İçin Özellikle Önemlidir?'
      },
      {
        type: 'riskGroups',
        title: 'Özellikle Dikkat Etmesi Gereken Gruplar',
        groups: ['Diyabet hastaları', 'Sporcular', 'Uzun süre kapalı ayakkabı giyenler', 'Ayakta çalışanlar', 'Yaşlı bireyler', 'Sık tekrarlayan ayak sorunları olanlar']
      },
      {
        type: 'paragraph',
        content: 'Bu gruplarda düzenli bakım, olası komplikasyonların önlenmesinde kritik rol oynar.'
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Ne Sıklıkla Yapılmalıdır?'
      },
      {
        type: 'statsBox',
        stats: [
          { value: '4-6', label: 'Hafta (Koruyucu)' },
          { value: 'Uzman', label: 'Önerisine Göre' },
          { value: 'Daha Sık', label: 'Diyabet Hastaları' },
          { value: 'Düzenli', label: 'Takip' }
        ]
      },
      {
        type: 'heading',
        content: 'Medikal Ayak Bakımı Sonrası Evde Bakım Neden Önemlidir?'
      },
      {
        type: 'paragraph',
        content: 'Profesyonel bakımın etkisinin devam etmesi için evde düzenli bakım alışkanlıkları büyük önem taşır.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Günlük Bakım Rehberi',
        content: 'Evde ayak bakımı için detaylı rehberimizi inceleyin.',
        link: '/blog/ayak-hijyeni-ipuclari'
      },
      {
        type: 'heading',
        content: 'Evde Bakımı Destekleyen Ürünler'
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımını desteklemek amacıyla evde kullanılan ürünler, bakım rutininin sürdürülebilir olmasına yardımcı olabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/medikal-ayak-bakimi/medikal-ayak-bakimi4.jpg',
        alt: 'PediZone Ürünleri',
        caption: 'Evde bakımı destekleyen profesyonel ürünler'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Günlük temizlik', text: 'için uygun temizleyiciler' },
          { bold: 'Tırnak ve çevresi', text: 'için bakım serumları' },
          { bold: 'Kuruluk ve çatlaklar', text: 'için nemlendirici kremler' }
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Not',
        content: 'Bu ürünler bakım amaçlıdır. Tedavi gerektiren durumlarda mutlaka uzman görüşü alınmalıdır.'
      },
      {
        type: 'heading',
        content: 'İlgili Ana İçerikler'
      },
      {
        type: 'relatedArticles',
        articles: [
          {
            title: 'Nasır Nedir? Evde Geçer mi?',
            description: 'Nasır neden oluşur, evde geçer mi, ne zaman medikal müdahale gerekir? Detaylı rehber.',
            link: '/blog/nasir-nedir-evde-gecer-mi',
            icon: '🦶'
          },
          {
            title: 'Üre Nedir ve Kuru Ciltler İçin Neden Mucizevidir?',
            description: 'Dermatolojinin gizli kahramanı ürenin bilimsel temelleri ve ayak bakımındaki kritik rolü.',
            link: '/blog/ure-nedir',
            icon: '💧'
          },
          {
            title: 'Ayak Mantarı Belirtileri ve Tedavisi',
            description: 'Ayak mantarı neden olur? Belirtileri, korunma yöntemleri ve etkili tedavi yaklaşımları.',
            link: '/blog/ayak-mantari-nedir',
            icon: '🦶'
          },
          {
            title: 'Tırnak Mantarı Türleri (Onikomikoz)',
            description: 'Farklı tırnak mantarı çeşitleri, belirtileri ve tedavi seçenekleri hakkında kapsamlı rehber.',
            link: '/blog/tirnak-mantari-cesitleri',
            icon: '💅'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Medikal ayak bakımı, ayak sağlığını korumak ve mevcut problemleri kontrol altına almak için uygulanan profesyonel ve güvenli bir bakım yöntemidir. Podoloji pratiğinde en sık karşılaştığımız durum, hastaların sorun büyümeden gelmemesidir. Erken müdahale, hem süreyi kısaltır hem de maliyeti azaltır.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Uzman değerlendirmesi yapılmadan yapılan işlemler, mevcut sorunu daha da kötüleştirebilir. Düzenli medikal ayak bakımı ve doğru evde bakım alışkanlıkları ile ayak sağlığınızı uzun vadede koruyabilirsiniz.'
      }
    ],
    faqs: [
      {
        question: 'Medikal ayak bakımı nedir?',
        answer: 'Medikal ayak bakımı, ayak ve tırnak sağlığını korumak ve mevcut problemleri kontrol altına almak amacıyla uzmanlar tarafından yapılan profesyonel bakım uygulamasıdır.'
      },
      {
        question: 'Medikal ayak bakımı kimler için gereklidir?',
        answer: 'Ayak mantarı, tırnak problemleri, batık, nasır, çatlak topuk sorunu olanlar ve diyabet hastaları için özellikle önerilir.'
      },
      {
        question: 'Medikal ayak bakımı yanlış yapılırsa zarar verir mi?',
        answer: 'Evet. Eğitim almamış kişiler tarafından yapılan ayak bakımı, enfeksiyon, yara açılması ve batık tırnak gibi ciddi sorunlara yol açabilir. Bu nedenle medikal ayak bakımı mutlaka podolog veya sertifikalı ayak sağlığı uzmanı tarafından yapılmalıdır. Yanlış ekipman kullanımı veya sterilizasyon eksikliği, mevcut problemi daha da kötüleştirebilir.'
      },
      {
        question: 'Medikal ayak bakımı mantarı tamamen geçirir mi?',
        answer: 'Hayır. Medikal ayak bakımı mantar tedavisini destekler ancak tek başına tedavi edici değildir.'
      },
      {
        question: 'Medikal ayak bakımı acıtır mı?',
        answer: 'Hayır. Doğru teknikler ve uzman uygulaması ile medikal ayak bakımı ağrısız bir işlemdir.'
      },
      {
        question: 'Medikal ayak bakımı ne sıklıkla yapılmalıdır?',
        answer: 'Bakım sıklığı kişiye göre değişir. Genellikle 4–6 haftada bir yapılması önerilir.'
      }
    ],
    tags: ['Medikal Ayak Bakımı', 'Podoloji', 'Ayak Sağlığı', 'Profesyonel Bakım', 'Podolog']
  },
  {
    id: 'ayak-mantari-nedir',
    title: 'Ayak Mantarı Nedir, Neden Olur? Belirtileri ve Korunma Yolları',
    slug: 'ayak-mantari-nedir',
    excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
    author: 'Podolog',
    date: '18 Aralık 2025',
    readTime: '5 dk',
    image: blogAyakMantari,
    sections: [
      {
        type: 'intro',
        content: 'Ayak mantarı (Tinea Pedis), dermatofit adı verilen mantarların neden olduğu yaygın bir cilt enfeksiyonudur. Özellikle parmak aralarında görülür ve sıcak, nemli, hava almayan ortamlarda hızla çoğalır.',
        highlight: 'Erken dönemde fark edilmez ve önlem alınmazsa ayak tabanına, topuklara ve hatta tırnaklara yayılabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-parmak-arasi-mantar.jpg',
        alt: 'Ayak parmak arası mantar enfeksiyonu',
        caption: 'Parmak aralarında görülen tipik mantar enfeksiyonu'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarının Belirtileri Nelerdir?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı farklı şiddetlerde ortaya çıkabilir. En sık görülen belirtiler şunlardır:'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Parmak aralarında kaşıntı ve yanma', text: 'En erken ve yaygın belirti' },
          { bold: 'Kızarıklık ve pullanma', text: 'Enfeksiyonun yayıldığının göstergesi' },
          { bold: 'Deride çatlaklar', text: 'İleri evrede görülür' },
          { bold: 'Su dolu kabarcıklar', text: 'Veziküler tip mantarda' },
          { bold: 'Kötü koku', text: 'Bakteri çoğalmasının işareti' },
          { bold: 'Ciltte soyulma ve hassasiyet', text: 'Cilt bariyerinin zayıflaması' }
        ]
      },
      {
        type: 'image',
        src: '/blog-images/ayak-mantari-kasinti-pullanma.jpg',
        alt: 'Ayak mantarı belirtileri - kaşıntı ve pullanma',
        caption: 'Kaşıntı ve pullanma ayak mantarının en yaygın belirtileridir'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Neden Olur?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarının oluşmasında birden fazla faktör rol oynar:'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Nemli ve Kapalı Ortamlar',
        summary: 'Mantarlar sıcak ve nemli ortamlarda hızla çoğalır.',
        content: 'Kapalı ayakkabılar, uzun süreli terleme, havuz ve spor salonları mantar üremesi için idealdir. Ayakkabı içinde oluşan nem ve sıcaklık, mantar sporlarının gelişmesi için mükemmel bir ortam yaratır.'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Yetersiz Ayak Hijyeni',
        summary: 'Düzenli temizlik ve kurulama kritik öneme sahiptir.',
        content: 'Ayakların düzenli yıkanmaması veya yıkandıktan sonra iyice kurutulmaması, mantar riskini artırır. Özellikle parmak aralarının nemli kalması enfeksiyon için zemin hazırlar.'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Ortak Kullanım Alanları',
        summary: 'Bulaşma riski en yüksek olan bölgeler.',
        content: 'Duşlar, soyunma odaları ve havuz kenarlarında yalınayak dolaşmak bulaşmayı kolaylaştırır. Bu alanlarda terlik kullanımı zorunludur.'
      },
      {
        type: 'numberedSection',
        number: 4,
        title: 'Cilt Bariyerinin Zayıflaması',
        summary: 'Çatlaklar mantarın girişini kolaylaştırır.',
        content: 'Çatlaklar, kuruluk ve hassas cilt yapısı mantarların yerleşmesini kolaylaştırır. Sağlıklı bir cilt bariyeri enfeksiyona karşı doğal bir koruma sağlar.'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Risk Grupları',
        content: 'Sporcular, asker ve polisler, sağlık çalışanları, garsonlar ve uzun süre kapalı ayakkabı giyen herkes ayak mantarı için risk grubundadır.'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Türleri Nelerdir?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı farklı formlarda görülebilir:'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Parmak arası mantarı', text: 'En yaygın tür - parmak aralarında pullanma ve çatlama' },
          { bold: 'Moccasin tipi mantar', text: 'Ayak tabanı ve kenarlarında yaygın kuruluk ve kalınlaşma' },
          { bold: 'Veziküler (kabarcıklı) mantar', text: 'Ayak tabanında su dolu kabarcıklar, kaşıntılı' }
        ]
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantarli-ayak.jpg',
        alt: 'Tırnak mantarına dönüşmüş ayak mantarı',
        caption: 'Tedavi edilmeyen ayak mantarı tırnaklara yayılabilir'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Nasıl Önlenir?'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarından korunmak için günlük alışkanlıklar çok önemlidir:'
      },
      {
        type: 'checkList',
        items: [
          'Ayaklarınızı her gün yıkayın',
          'Parmak aralarını tamamen kurulayın',
          'Pamuklu veya bambu çorap tercih edin',
          'Ayakkabılarınızı düzenli havalandırın',
          'Ortak alanlarda terlik kullanın',
          'Düzenli ayak bakım rutini oluşturun'
        ]
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı Riskine Karşı Günlük Bakım Rutini'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Uzman Önerisi',
        content: 'Ayak mantarı tekrarlamaya yatkın bir durumdur. Bu nedenle yalnızca geçici çözümler değil, düzenli ve bütüncül bakım önemlidir.'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Günlük Temizlik',
        content: 'Ayak hijyeninin temelini günlük temizlik oluşturur. Ayakların nazikçe temizlenmesi ve mantar oluşumuna zemin hazırlayan nemli ortamın azaltılması kritik öneme sahiptir.',
        product: 'PediZone® Temizleme Köpüğü ile günde 1-2 kez temizlik'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Hedefli Bakım',
        content: 'Parmak araları ve riskli bölgeler, günlük bakımda özel ilgi gerektirir. Düzenli kullanım, ayak hijyenini korumaya ve tekrar eden mantar riskini azaltmaya yardımcı olabilir.',
        product: 'PediZone® Antifungal Serum ile parmak arası bakımı'
      },
      {
        type: 'image',
        src: '/blog-images/pedizone-serum-before.jpg',
        alt: 'PediZone Serum kullanımı',
        caption: 'Düzenli serum kullanımı ayak sağlığını destekler'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Cilt Bariyerini Destekleme',
        content: 'Kuruluk, çatlaklar ve sertleşmiş cilt mantar oluşumunu kolaylaştırabilir. Ayak cildinin nem dengesini destekleyerek cilt bariyerinin güçlenmesine yardımcı olunmalıdır.',
        product: 'PediZone® %15 Üreli Krem ile nemlendirme'
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı yaygın görülen ancak doğru alışkanlıklar ve düzenli ayak bakımıyla kontrol altına alınabilen bir durumdur. Günlük temizlik, hedefli bakım ve cilt bariyerini destekleyen ürünlerle oluşturulan rutin, ayak sağlığını korumada önemli rol oynar.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Destek',
        content: 'Ayak mantarı tedavisinde medikal ayak bakımı destekleyici bir rol oynar ve uzman kontrolü altında tedavi sürecini hızlandırabilir.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Erken müdahale ve düzenli bakım, ayak mantarının kronikleşmesini ve tırnaklara yayılmasını önler.'
      }
    ],
    faqs: [
      {
        question: 'Ayak mantarı bulaşıcı mı?',
        answer: 'Evet, ayak mantarı bulaşıcı bir enfeksiyondur. Özellikle ortak kullanım alanlarında (havuz, duş, spor salonu) temas yoluyla bulaşabilir. Enfekte kişinin kullandığı havlu, terlik veya çorap gibi eşyalar da bulaşma kaynağı olabilir.'
      },
      {
        question: 'Ayak mantarı kendiliğinden geçer mi?',
        answer: 'Hafif vakalarda belirtiler azalabilir ancak çoğu zaman tedavi edilmeden tamamen geçmez ve tekrar etme eğilimi gösterir. Uygun bakım ve hijyen önlemleri alınmadığında enfeksiyon yayılabilir ve kronikleşebilir.'
      },
      {
        question: 'Ayak mantarı tırnaklara geçer mi?',
        answer: 'Evet, tedavi edilmeyen ayak mantarı zamanla tırnak mantarına (onikomikoz) dönüşebilir. Tırnak mantarı tedavisi çok daha uzun sürer ve zorludur. Bu nedenle ayak mantarına erken müdahale önemlidir.'
      },
      {
        question: 'Ayak mantarından korunmanın en etkili yolu nedir?',
        answer: 'Ayakların temiz ve kuru tutulması, parmak aralarının özenle kurulanması, pamuklu çorap kullanılması, ayakkabıların havalandırılması ve ortak alanlarda terlik giyilmesi en etkili korunma yöntemleridir. Düzenli ayak bakım rutini oluşturmak da kritik öneme sahiptir.'
      },
      {
        question: 'Ayak mantarı tedavisi ne kadar sürer?',
        answer: 'Hafif vakalarda 2-4 hafta içinde iyileşme görülebilir. Ancak kronik veya yaygın enfeksiyonlarda tedavi süresi 6-8 haftaya uzayabilir. Belirtiler geçse bile tedaviye bir süre daha devam edilmesi önerilir.'
      }
    ],
    tags: ['Ayak Mantarı', 'Ayak Sağlığı', 'Podoloji', 'Tinea Pedis', 'Ayak Bakımı']
  },
  {
    id: 'tirnak-mantari-cesitleri',
    title: 'Tırnak Mantarı Türleri (Onikomikoz): Belirtiler, Nedenler ve Tedavi Yaklaşımları',
    slug: 'tirnak-mantari-cesitleri',
    excerpt: 'Tırnak mantarı türleri nelerdir? Belirtileri, ayak mantarıyla ilişkisi ve destekleyici tedavi yaklaşımlarını detaylı öğrenin.',
    image: blogTirnakMantari,
    date: '10 Aralık 2025',
    readTime: '10 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Tırnak mantarı (Onikomikoz), ayak ve el tırnaklarını etkileyen yaygın bir mantar enfeksiyonudur. Genellikle yavaş ilerler ancak tedavi edilmediğinde tırnak yapısında kalıcı bozulmalara yol açabilir.',
        highlight: 'Tırnak mantarı çoğu zaman ayak mantarının ilerlemiş halidir. Ayak derisinde başlayan mantar enfeksiyonu zamanla tırnak yatağına yayılabilir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'İlgili İçerik',
        content: 'Ayak mantarını detaylı öğrenmek için: Ayak Mantarı Nedir? sayfamızı ziyaret edin.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Tırnak Mantarı (Onikomikoz) Nedir?'
      },
      {
        type: 'paragraph',
        content: 'Tırnak mantarı; dermatofitler, maya mantarları veya küflerin tırnağın altına yerleşmesiyle oluşur. Ayak tırnaklarında daha sık görülür çünkü kapalı ayakkabı içinde oluşan nemli ortam mantarların çoğalması için idealdir.'
      },
      {
        type: 'heading',
        content: 'Tırnak Mantarı Türleri'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Distal Subungual Onikomikoz (DSO)',
        summary: 'En yaygın tırnak mantarı türüdür.',
        content: 'Tırnağın ucundan başlar, sararma ve kalınlaşma görülür. Çoğunlukla ayak mantarından sonra gelişir.'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/Distal-Subungual-Onikomikoz.jpg',
        alt: 'Distal Subungual Onikomikoz - En yaygın tırnak mantarı türü',
        caption: 'Distal Subungual Onikomikoz (DSO) - Tırnak ucundan başlayan enfeksiyon'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Yüzeyel Beyaz Onikomikoz (SWO)',
        summary: 'Tırnak yüzeyinde beyaz lekeler oluşur.',
        content: 'Daha yüzeyseldir ve erken evrede topikal ürünlere daha iyi yanıt verir.'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/Yüzeyel-Beyaz-Onikomikoz--SWO--podolojik-işlemler-sonucu.jpg',
        alt: 'Yüzeyel Beyaz Onikomikoz (SWO)',
        caption: 'Yüzeyel Beyaz Onikomikoz - Podolojik işlemler sonucu'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Proksimal Subungual Onikomikoz (PSO)',
        summary: 'Tırnak kökünden başlar, daha nadir görülür.',
        content: 'Bağışıklık sistemi zayıf kişilerde ortaya çıkabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/Proksimal-Subungual-Onikomikoz--PSO-.jpg',
        alt: 'Proksimal Subungual Onikomikoz (PSO)',
        caption: 'Proksimal Subungual Onikomikoz - Tırnak kökünden başlayan enfeksiyon'
      },
      {
        type: 'numberedSection',
        number: 4,
        title: 'Candida (Maya) Kaynaklı Tırnak Mantarı',
        summary: 'El tırnaklarında daha yaygındır.',
        content: 'Tırnak çevresinde kızarıklık ve hassasiyet olabilir. Sürekli suyla temas eden kişilerde sık görülür.'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/Candida--Maya--Kaynaklı-Tırnak-Mantarı.jpg',
        alt: 'Candida (Maya) Kaynaklı Tırnak Mantarı',
        caption: 'Maya kaynaklı tırnak mantarı - Özellikle el tırnaklarında görülür'
      },
      {
        type: 'heading',
        content: 'Tırnak Mantarı Neden Oluşur?'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/Tırnak-Mantarı-Neden-Oluşur.jpg',
        alt: 'Tırnak Mantarı Nedenleri',
        caption: 'Tırnak mantarının oluşmasına neden olan faktörler'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Tedavi edilmemiş ayak mantarı', text: 'En yaygın neden' },
          { bold: 'Ayakların uzun süre nemli kalması', text: 'Mantarlar için ideal ortam' },
          { bold: 'Ortak duş, havuz ve spor salonları', text: 'Bulaşma riski yüksek alanlar' },
          { bold: 'Kapalı ve hava almayan ayakkabılar', text: 'Nem ve sıcaklığı artırır' },
          { bold: 'Bağışıklık sisteminin zayıflaması', text: 'Enfeksiyona yatkınlık' }
        ]
      },
      {
        type: 'heading',
        content: 'Tırnak Mantarı Nasıl Anlaşılır?'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Tırnakta sararma veya koyulaşma', text: 'İlk ve en belirgin belirti' },
          { bold: 'Kalınlaşma', text: 'Tırnak yapısında değişim' },
          { bold: 'Kırılma ve ufalanma', text: 'Tırnak zayıflaması' },
          { bold: 'Kötü koku', text: 'Enfeksiyonun işareti' },
          { bold: 'İleri vakalarda ağrı', text: 'Tırnak yatağında baskı' }
        ]
      },
      {
        type: 'comparisonBox',
        wrongTitle: 'Öncesi - Enfekte Tırnak',
        rightTitle: 'Sonrası - Tedavi Sonucu',
        wrong: ['Sararma ve kalınlaşma', 'Tırnak yapısında bozulma', 'Kırılgan ve ufalanan tırnak'],
        right: ['Sağlıklı tırnak rengi', 'Normal tırnak kalınlığı', 'Düzgün tırnak yapısı']
      },
      {
        type: 'beforeAfterImages',
        beforeSrc: '/blog-images/tirnak-mantari/Tırnak-Mantarı-Nasıl-Anlaşılır--öncesi-.jpg',
        beforeAlt: 'Tırnak Mantarı - Tedavi Öncesi',
        beforeCaption: 'Tedavi Öncesi',
        afterSrc: '/blog-images/tirnak-mantari/Tırnak-Mantarı-Nasıl-Anlaşılır--sonrası-.jpg',
        afterAlt: 'Tırnak Mantarı - Tedavi Sonrası',
        afterCaption: 'Tedavi Sonrası'
      },
      {
        type: 'heading',
        content: 'Tırnak Mantarı Tedavisinde Genel Yaklaşım'
      },
      {
        type: 'paragraph',
        content: 'Tedavi, mantarın türüne ve yaygınlığına göre planlanır:'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Topikal ürünler', text: 'Serum, krem, bakım ürünleri' },
          { bold: 'Ağızdan antifungal ilaçlar', text: 'İleri vakalarda' },
          { bold: 'Klinik ve lazer uygulamaları', text: 'Modern tedavi seçenekleri' }
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Önemli Uyarı',
        content: 'İleri vakalarda yalnızca topikal ürünler yeterli olmayabilir. Dermatolojik değerlendirme önerilir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Destek',
        content: 'Tırnak mantarında medikal ayak bakımı, kalınlaşmış tırnakların profesyonel şekilde temizlenmesi ve tedavi sürecinin desteklenmesinde önemli rol oynar.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'heading',
        content: 'Topikal Ürünler ve Günlük Bakım (Destekleyici Yaklaşım)'
      },
      {
        type: 'paragraph',
        content: 'Hafif ve orta seviyedeki tırnak mantarı vakalarında, düzenli temizlik + topikal bakım tedavi sürecini destekleyebilir.'
      },
      {
        type: 'image',
        src: '/blog-images/tirnak-mantari/topikal-Ürünler-ve-Günlük-Bakım-Pedizone-Ürünleri-Podolojik-Yaklaşım-.jpg',
        alt: 'PediZone Ürünleri ile Podolojik Yaklaşım',
        caption: 'Topikal ürünler ve günlük bakım - Podolojik yaklaşım'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Temizlik',
        content: 'Tırnak ve ayak bölgesinin düzenli temizlenmesi, mantarların çoğalmasını kolaylaştıran nemli ortamın kontrol altına alınmasına yardımcı olur.',
        product: 'PediZone® Yıkama Köpüğü ile günlük temizlik'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Bakım ve Destek',
        content: 'Topikal serumlar, tırnak yüzeyine doğrudan uygulanarak bakım sağlar ve topikal tedavi sürecinin bir parçası olarak kullanılabilir.',
        product: 'PediZone® Foot & Nail Care Serum ile hedefli bakım'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Antifungal Destek',
        content: 'Bazı kremler antifungal içerikler barındırır ve cilt yüzeyindeki mantar yükünün kontrol altına alınmasına yardımcı olabilir.',
        product: 'PediZone® Antifungal Krem ile cilt bakımı'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Not',
        content: 'Topikal ürünler destekleyicidir. İleri ve yaygın enfeksiyonlarda dermatolog önerisi ile sistemik tedavi gerekebilir.'
      },
      {
        type: 'heading',
        content: 'Ayak Mantarı ile Tırnak Mantarı Arasındaki İlişki'
      },
      {
        type: 'paragraph',
        content: 'Ayak mantarı, tırnak mantarının en yaygın başlangıç noktasıdır. Bu nedenle yalnızca tırnağı değil, ayağın tamamını değerlendirmek gerekir.'
      },
      {
        type: 'productCard',
        title: 'Ana İçerik: Ayak Mantarı Nedir?',
        content: 'Ayak mantarı hakkında detaylı bilgi almak ve tırnak mantarıyla ilişkisini anlamak için ana içeriğimizi inceleyin.',
        benefits: ['Ayak mantarının belirtileri', 'Korunma yöntemleri', 'Tedavi yaklaşımları'],
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Tırnak mantarı, erken dönemde fark edilip doğru şekilde yönetildiğinde kontrol altına alınabilir. Ayak mantarı ile birlikte değerlendirilmesi, tedavinin başarısını ve tekrar riskinin azalmasını sağlar. Düzenli temizlik, doğru ürün kullanımı ve uzman önerileri tedavi sürecinin temelini oluşturur.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Erken müdahale ve düzenli bakım, tırnak mantarının ilerlemesini önler ve tedavi süresini kısaltır.'
      }
    ],
    faqs: [
      {
        question: 'Tırnak mantarı kendiliğinden geçer mi?',
        answer: 'Hayır. Tırnak mantarı çoğu vakada tedavi edilmeden tamamen geçmez ve zamanla ilerleyebilir.'
      },
      {
        question: 'Tırnak mantarı bulaşıcı mıdır?',
        answer: 'Evet. Ortak duşlar, havuzlar, terlikler ve kişisel bakım araçlarıyla bulaşabilir.'
      },
      {
        question: 'Ayak mantarı tırnak mantarına dönüşür mü?',
        answer: 'Evet. Tedavi edilmeyen ayak mantarı zamanla tırnak yatağına yayılabilir ve tırnak mantarına neden olabilir.'
      },
      {
        question: 'Topikal ürünler tırnak mantarında yeterli olur mu?',
        answer: 'Hafif ve yüzeyel vakalarda destekleyici olabilir. İleri vakalarda dermatolog önerisiyle ek tedaviler gerekebilir.'
      },
      {
        question: 'Tırnak mantarı tedavisi ne kadar sürer?',
        answer: 'Tedavi süresi haftalar sürebilir. Ancak tırnağın tamamen sağlıklı şekilde uzaması aylar alabilir.'
      }
    ],
    tags: ['Tırnak Mantarı', 'Onikomikoz', 'Tırnak Hastalıkları', 'Ayak Sağlığı', 'Podoloji']
  },
  {
    id: 'serum-kullanim-onemi',
    title: 'Mantar İçin Serum Kullanmanın Önemi: Topikal Tedavide Serum Farkı',
    slug: 'serum-kullanim-onemi',
    excerpt: 'Mantar enfeksiyonlarında serum formunun avantajları nelerdir? Topikal tedavide serum kullanımının önemi ve doğru uygulama yöntemleri.',
    image: blogSerumKullanimi,
    date: '10 Aralık 2025',
    readTime: '8 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Mantar enfeksiyonlarının tedavisinde kullanılan ürünlerin formu, etkinliği doğrudan etkiler. Serum formülasyonları, krem ve losyonlara kıyasla birçok avantaj sunar.',
        highlight: 'Serum formu, tırnak ve cilt altına daha iyi nüfuz ederek aktif maddelerin hedefe ulaşmasını kolaylaştırır.'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/pedizone-serum-mantar-karsiti-damla50ml.jpg',
        alt: 'PediZone Antifungal Serum',
        caption: 'PediZone® Foot and Nail Care Serum - 50ml'
      },
      {
        type: 'heading',
        content: 'Serum Formunun Avantajları'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Yüksek Penetrasyon Gücü',
        summary: 'Serum, tırnak ve cilt altına daha iyi nüfuz eder.',
        content: 'Serum formülasyonları, daha küçük molekül yapısı sayesinde tırnak plakasının altına ve cilt katmanlarına etkili şekilde ulaşır. Bu, mantarın bulunduğu bölgeye doğrudan etki sağlar.'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/serum-cilde-islerken.jpg',
        alt: 'Serum cilde işlerken',
        caption: 'Serum formülasyonunun cilde penetrasyonu'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Hızlı Emilim',
        summary: 'Sıvı yapısı sayesinde hızla emilir.',
        content: 'Serum, krem ve losyonlara göre çok daha hızlı emilir. Yapışkan his bırakmadan cilde işler ve günlük kullanımda konfor sağlar.'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Konsantre Formül',
        summary: 'Daha yüksek konsantrasyonda aktif madde içerir.',
        content: 'Serumlar, krem ve losyonlara göre daha konsantre formüllere sahiptir. Bu sayede daha az miktarda ürünle daha etkili sonuçlar alınabilir.'
      },
      {
        type: 'numberedSection',
        number: 4,
        title: 'Hedefli Uygulama',
        summary: 'Damlalıklı aplikatör ile hassas uygulama.',
        content: 'Damlalıklı aplikatör sayesinde serum, direkt enfeksiyon bölgesine uygulanabilir. Bu, ürün israfını önler ve tedavi etkinliğini artırır.'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/pedizone-mantar-serumu-damla.jpg',
        alt: 'PediZone Serum Damlalık Uygulama',
        caption: 'Damlalıklı aplikatör ile hassas uygulama'
      },
      {
        type: 'heading',
        content: 'Mantar Hücresine Etki Mekanizması'
      },
      {
        type: 'paragraph',
        content: 'Antifungal serumlar, mantar hücre duvarını hedef alarak çoğalmayı engeller ve mevcut enfeksiyonu kontrol altına almaya yardımcı olur.'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/antifungal-pedizone-serumun-etki-mekanizması.jpg',
        alt: 'Antifungal Serum Etki Mekanizması',
        caption: 'PediZone® Serumun mantar hücresine etki mekanizması'
      },
      {
        type: 'heading',
        content: 'Doğru Serum Kullanımı'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Temizlik',
        content: 'Uygulamadan önce ayağı ve tırnak bölgesini ılık suyla yıkayın ve tamamen kurulayın. Nem, serumun emilimini azaltabilir.',
        product: 'PediZone® Yıkama Köpüğü ile temizlik önerilir'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Uygulama',
        content: 'Birkaç damla serumu enfeksiyon bölgesine ve tırnak çevresine uygulayın. Tırnak mantarında tırnak kenarlarına da damlatın.',
        product: 'PediZone® Foot & Nail Care Serum'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Masaj',
        content: 'Hafifçe masaj yaparak serumun emilimini artırın. Tırnak yatağına ve çevresine yayılmasını sağlayın.',
        product: '30-60 saniye nazikçe masaj yapın'
      },
      {
        type: 'stepCard',
        step: 4,
        title: 'Kuruma',
        content: 'Çorap veya ayakkabı giymeden önce serumun tamamen kurumasını bekleyin. Bu genellikle 2-3 dakika sürer.',
        product: 'Günde 2 kez (sabah ve akşam) uygulayın'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Uzman Önerisi',
        content: 'En iyi sonuçlar için serumu düzenli olarak günde 2 kez, en az 4-6 hafta boyunca kullanın. Belirtiler geçse bile tedaviye bir süre daha devam edin.'
      },
      {
        type: 'heading',
        content: 'Serum Kullanımı: Öncesi ve Sonrası'
      },
      {
        type: 'paragraph',
        content: 'Düzenli serum kullanımı ile tırnak ve ayak sağlığında belirgin iyileşmeler görülebilir.'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/serum-kullanimi-oncesi-sonrasi.jpg',
        alt: 'Serum kullanımı öncesi ve sonrası',
        caption: 'Düzenli serum kullanımının sonuçları'
      },
      {
        type: 'heading',
        content: 'Serum mu, Krem mi?'
      },
      {
        type: 'comparisonBox',
        wrongTitle: 'Krem Formülasyonu',
        rightTitle: 'Serum Formülasyonu',
        wrong: [
          'Yağlı ve kalın kıvam',
          'Yavaş emilim',
          'Yapışkan his bırakabilir',
          'Daha düşük penetrasyon'
        ],
        right: [
          'Hafif ve sıvı kıvam',
          'Hızlı emilim',
          'Yapışkan his bırakmaz',
          'Yüksek penetrasyon gücü'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Önemli Not',
        content: 'Serum, hafif ve orta düzey mantar enfeksiyonlarında destekleyici bakım sağlar. İleri ve yaygın enfeksiyonlarda mutlaka dermatolog değerlendirmesi alınmalıdır.'
      },
      {
        type: 'heading',
        content: 'PediZone® Foot and Nail Care Serum'
      },
      {
        type: 'image',
        src: '/blog-images/serum-kullanimi/tirnak-mantari-pedizone-g3.jpg',
        alt: 'PediZone Serum Ürün',
        caption: 'PediZone® Foot and Nail Care Serum - Profesyonel ayak bakımı'
      },
      {
        type: 'productCard',
        title: 'PediZone® Foot and Nail Care Serum',
        content: 'Podologların önerileriyle geliştirilen PediZone® serumu, tırnak ve ayak mantarı bakımında etkili bir topikal çözüm sunar. Özel formülü sayesinde hızlı emilir ve tırnak yatağına kolayca ulaşır.',
        benefits: [
          'Tea Tree Oil - Doğal antifungal etki',
          'Urea - Nemlendirici ve yumuşatıcı',
          'Salicylic Acid - Ölü deri temizliği',
          'Vitamin E - Antioksidan koruma'
        ]
      },
      {
        type: 'heading',
        content: 'İlgili Ana İçerikler'
      },
      {
        type: 'relatedArticles',
        articles: [
          {
            title: 'Ayak Mantarı Belirtileri ve Tedavisi',
            description: 'Ayak mantarı neden olur? Belirtileri, korunma yöntemleri ve etkili tedavi yaklaşımları.',
            link: '/blog/ayak-mantari-nedir',
            icon: '🦶'
          },
          {
            title: 'Tırnak Mantarı Türleri (Onikomikoz)',
            description: 'Farklı tırnak mantarı çeşitleri, belirtileri ve tedavi seçenekleri hakkında kapsamlı rehber.',
            link: '/blog/tirnak-mantari-cesitleri',
            icon: '💅'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Mantar enfeksiyonlarının topikal tedavisinde serum formülasyonları, yüksek penetrasyon gücü, hızlı emilim ve konsantre formülleri sayesinde öne çıkar. Doğru uygulama teknikleri ve düzenli kullanım ile etkili sonuçlar elde edilebilir.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Bakım',
        content: 'Medikal ayak bakımı sonrası evde bakım olarak serum kullanımı, tedavi sürecinin devamlılığını sağlar.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Düzenlilik başarının anahtarıdır. Serum tedavisine sabırla devam edin ve sonuçları görmek için en az 4-6 hafta bekleyin.'
      }
    ],
    faqs: [
      {
        question: 'Serum mu krem mi daha etkili?',
        answer: 'Serum formülasyonları, daha yüksek penetrasyon gücü ve hızlı emilim özellikleri sayesinde tırnak mantarı tedavisinde genellikle daha etkilidir. Özellikle tırnak yatağına ulaşması gereken durumlarda serum tercih edilmelidir.'
      },
      {
        question: 'Serum günde kaç kez uygulanmalı?',
        answer: 'Optimum sonuçlar için günde 2 kez (sabah ve akşam) uygulanması önerilir. Temiz ve kuru cilde uygulama yapılmalıdır.'
      },
      {
        question: 'Serum ne kadar sürede etki gösterir?',
        answer: 'İlk iyileşme belirtileri genellikle 2-4 hafta içinde görülmeye başlar. Ancak tam sonuç için 6-12 hafta düzenli kullanım gerekebilir. Tırnak mantarında tırnağın yenilenmesi aylar sürebilir.'
      },
      {
        question: 'Serum kullanırken dikkat edilmesi gerekenler nelerdir?',
        answer: 'Temiz ve kuru cilde uygulanmalı, kurumadan çorap giyilmemeli, düzenli kullanılmalı ve açık yara veya tahriş olan bölgelere uygulanmamalıdır.'
      },
      {
        question: 'Serum tek başına yeterli mi?',
        answer: 'Hafif ve orta düzey enfeksiyonlarda destekleyici bakım sağlar. İleri ve yaygın enfeksiyonlarda dermatolog değerlendirmesi ve gerekirse sistemik tedavi önerilir.'
      }
    ],
    tags: ['Serum', 'Topikal Tedavi', 'Tırnak Mantarı', 'PediZone', 'Ayak Bakımı']
  },
  {
    id: 'ayak-kokusu-nedenleri',
    title: 'Ayak Kokusu (Bromhidroz) Neden Olur? Etkili Çözüm Yolları',
    slug: 'ayak-kokusu-nedenleri',
    excerpt: 'Ayak kokusu neden oluşur? Terleme, bakteri ve mantar kaynaklı nedenleri ile etkili çözüm önerilerini keşfedin.',
    image: blogAyakKokusu,
    date: '4 Aralık 2025',
    readTime: '8 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Ayakkabı çıkarıldığında ortaya çıkan yoğun koku, çoğu zaman ayak sağlığıyla ilgili daha derin bir sorunun işareti olabilir. Ayak kokusu (Bromhidroz), birçok kişinin günlük ve sosyal yaşamını olumsuz etkileyen yaygın bir problemdir. Çoğu zaman basit bir hijyen sorunu gibi görülse de, ayak kokusunun altında terleme, bakteri oluşumu ve mantar enfeksiyonları gibi farklı nedenler yatabilir.',
        highlight: 'Ayak kokusunu kalıcı olarak azaltabilmek için öncelikle nedenlerini doğru anlamak gerekir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/koku-ayak.jpg',
        alt: 'Ayak Kokusu Problemi',
        caption: 'Ayak kokusu günlük yaşamı etkileyen yaygın bir sorundur'
      },
      {
        type: 'heading',
        content: 'Ayak Kokusunun Nedenleri'
      },
      {
        type: 'numberedSection',
        number: 1,
        title: 'Aşırı Terleme (Hiperhidroz)',
        summary: 'Ayaklarda yaklaşık 250.000 ter bezi bulunur.',
        content: 'Bu da ayakların vücudun en çok terleyen bölgelerinden biri olmasına neden olur. Aşırı terleme, ayaklarda nemli bir ortam oluşturarak bakteri ve mantarların çoğalmasını kolaylaştırır.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/ter-bezi-ter-damlalari.jpg',
        alt: 'Ter bezleri ve terleme',
        caption: 'Ayaklardaki ter bezleri ve terleme mekanizması'
      },
      {
        type: 'numberedSection',
        number: 2,
        title: 'Bakteriyel Aktivite',
        summary: 'Ter tek başına kötü kokuya neden olmaz.',
        content: 'Ancak cilt yüzeyinde bulunan bakteriler, teri parçaladığında kötü kokuya yol açan bileşenler ortaya çıkar. Bu durum özellikle yeterli temizlik sağlanmadığında daha belirgin hale gelir.'
      },
      {
        type: 'numberedSection',
        number: 3,
        title: 'Mantar Enfeksiyonları',
        summary: 'Ayak kokusunun önemli nedenlerinden biridir.',
        content: 'Mantar enfeksiyonları; kaşıntı, kızarıklık ve soyulmanın yanı sıra karakteristik ve kalıcı kötü kokuya neden olabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/mantarli-tirnak.jpg',
        alt: 'Mantarlı tırnak örneği',
        caption: 'Mantar enfeksiyonu ayak kokusunun önemli nedenlerinden biridir'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Detaylı Bilgi',
        content: 'Ayak mantarı belirtileri ve tedavi yöntemleri hakkında detaylı bilgi için ana içeriğimizi inceleyin.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'numberedSection',
        number: 4,
        title: 'Uygunsuz Ayakkabı ve Çorap Kullanımı',
        summary: 'Sentetik malzemeler ter birikimini artırır.',
        content: 'Sentetik malzemelerden üretilmiş, hava almayan ve dar ayakkabılar; ayakta ter birikimini artırır. Aynı şekilde uzun süre değiştirilmeyen çoraplar da bakteri oluşumunu hızlandırarak ayak kokusunu artırabilir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/koku-kotu-ayak-corap.jpg',
        alt: 'Uygunsuz çorap kullanımı',
        caption: 'Sentetik çoraplar ayak kokusunu artırabilir'
      },
      {
        type: 'heading',
        content: 'Ayak Kokusu İçin Etkili Çözüm Önerileri'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Doğru Ayak Hijyeni',
        content: 'Ayaklar günde en az bir kez ılık su ve uygun bir temizleyici ile yıkanmalıdır. Parmak araları özellikle iyice kurulanmalıdır. Düzenli temizlik, bakteri ve mantar oluşumunu azaltır.',
        product: 'PediZone® Yıkama Köpüğü önerilir'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/ayak-yikama-köpügü.jpg',
        alt: 'Ayak yıkama köpüğü',
        caption: 'Düzenli temizlik ayak kokusunu önlemenin ilk adımıdır'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Uygun Çorap ve Ayakkabı Seçimi',
        content: 'Pamuklu veya nem emici çoraplar tercih edilmelidir. Çoraplar günlük olarak değiştirilmelidir. Ayakkabıların hava alabilen malzemelerden seçilmesi önerilir.',
        product: 'Günde en az bir kez çorap değiştirin'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/ayakkabi-yikama.jpg',
        alt: 'Ayakkabı temizliği',
        caption: 'Ayakkabıların düzenli havalandırılması önemlidir'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Mantar Riskine Karşı Önlem',
        content: 'Ayak kokusu sürekli hale gelmişse, altında yatan neden mantar enfeksiyonu olabilir. Bu durumda yalnızca kokuya yönelik çözümler yeterli olmayabilir; ayak sağlığını bütüncül şekilde ele almak gerekir.',
        product: 'PediZone® Antifungal Krem ile koruma'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Önemli',
        content: 'Tırnak mantarı türleri (onikomikoz) ve tedavi seçenekleri hakkında detaylı bilgi almak için ilgili içeriğimizi inceleyin.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Uzman Desteği',
        content: 'Kalıcı ayak kokusu problemi için uzman destekli ayak bakımı önerilir.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'heading',
        content: 'PediZone® ile Ayak Bakım Rutini'
      },
      {
        type: 'paragraph',
        content: 'Günlük ayak bakımında kullanılan ürünler, ayak kokusunun kontrol altına alınmasında destekleyici rol oynar.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-kokusu/pedizone-urunler.jpg',
        alt: 'PediZone Ürünleri',
        caption: 'PediZone® profesyonel ayak bakım ürünleri'
      },
      {
        type: 'checkList',
        items: [
          'Ayakların nazikçe temizlenmesine yardımcı olur',
          'Günlük kullanım için uygundur',
          'Ayak bakım rutininin düzenli hale getirilmesini destekler',
          'Antibakteriyel etki ile koku oluşumunu azaltır'
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Not',
        content: 'Ayak kokusu uzun süre devam ediyorsa veya eşlik eden kaşıntı, kızarıklık gibi belirtiler varsa uzman görüşü alınması önerilir.'
      },
      {
        type: 'heading',
        content: 'İlgili Ana İçerikler'
      },
      {
        type: 'relatedArticles',
        articles: [
          {
            title: 'Ayak Mantarı Belirtileri ve Tedavisi',
            description: 'Ayak mantarı neden olur? Belirtileri, korunma yöntemleri ve etkili tedavi yaklaşımları.',
            link: '/blog/ayak-mantari-nedir',
            icon: '🦶'
          },
          {
            title: 'Tırnak Mantarı Türleri (Onikomikoz)',
            description: 'Farklı tırnak mantarı çeşitleri, belirtileri ve tedavi seçenekleri hakkında kapsamlı rehber.',
            link: '/blog/tirnak-mantari-cesitleri',
            icon: '💅'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayak kokusu, doğru bakım alışkanlıkları ve düzenli hijyen ile büyük ölçüde kontrol altına alınabilir. Terleme, bakteri ve mantar gibi nedenlerin farkında olmak; kalıcı çözümler için en önemli adımdır. Ayak sağlığını korumak, genel yaşam kalitesini de olumlu yönde etkiler.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Düzenli hijyen ve doğru ürün kullanımı ile ayak kokusu kontrol altına alınabilir. Şikayetler devam ederse uzman görüşü alınmalıdır.'
      }
    ],
    faqs: [
      {
        question: 'Ayak kokusu nasıl geçer?',
        answer: 'Ayak kokusu; düzenli ayak yıkama, pamuklu çorap kullanımı, ayakkabıların havalandırılması ve gerekirse antifungal ürünler ile büyük ölçüde kontrol altına alınabilir. Altta yatan mantar enfeksiyonu varsa tedavi edilmesi gerekir.'
      },
      {
        question: 'Ayak kokusu kalıcı mıdır?',
        answer: 'Ayak kokusu kalıcı değildir. Genellikle terleme ve bakterilerin birleşmesiyle oluşur. Düzenli ayak hijyeni, ayakların kuru tutulması ve uygun ayakkabı–çorap kullanımıyla önlenebilir. Önlemlere rağmen devam ediyorsa mantar enfeksiyonu veya aşırı terleme söz konusu olabilir.'
      },
      {
        question: 'Ayak kokusu her zaman mantardan mı kaynaklanır?',
        answer: 'Hayır. Ayak kokusu terleme ve bakteri kaynaklı olabilir; ancak kalıcı ve yoğun koku mantar enfeksiyonunun belirtisi olabilir.'
      },
      {
        question: 'Ayak kokusu nasıl önlenir?',
        answer: 'Düzenli ayak hijyeni, uygun ayakkabı ve çorap seçimi ile büyük ölçüde önlenebilir. Ayakların kuru tutulması ve günlük çorap değişimi önemlidir.'
      },
      {
        question: 'Ayak kokusu için yalnızca temizlik yeterli mi?',
        answer: 'Hafif vakalarda yeterli olabilir. Ancak altta yatan mantar enfeksiyonu varsa ek bakım ve tedavi gerekebilir.'
      },
      {
        question: 'Ayak kokusu hangi hastalıkların belirtisi olabilir?',
        answer: 'Kalıcı ayak kokusu; ayak mantarı, hiperhidroz (aşırı terleme), diyabet veya dolaşım bozukluklarının belirtisi olabilir. Uzun süreli şikayetlerde uzman görüşü alınmalıdır.'
      }
    ],
    tags: ['Ayak Kokusu', 'Bromhidroz', 'Ayak Hijyeni', 'Ayak Sağlığı', 'PediZone']
  },
  {
    id: 'ayak-hijyeni-ipuclari',
    title: 'Ayak Hijyeni ve Bakım İpuçları: Sağlıklı Ayaklar İçin Günlük Rehber',
    slug: 'ayak-hijyeni-ipuclari',
    excerpt: 'Ayak hijyeni ve bakım ipuçları nelerdir? Günlük ayak bakımı, tırnak sağlığı ve mantar riskini azaltan önerileri keşfedin.',
    image: blogAyakHijyeni,
    date: '29 Kasım 2025',
    readTime: '8 dk',
    author: 'Podolog',
    sections: [
      {
        type: 'intro',
        content: 'Sağlıklı ayaklar, yalnızca konforlu bir yürüyüş değil; aynı zamanda genel yaşam kalitesi için de büyük önem taşır. Günlük hayatta ihmal edilen ayak hijyeni, zamanla ayak kokusu, mantar enfeksiyonları, tırnak problemleri ve cilt çatlakları gibi sorunlara yol açabilir.',
        highlight: 'Doğru hijyen ve bakım alışkanlıkları ile bu problemlerin büyük bir kısmı önlenebilir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-hijyeni/foot2.jpg',
        alt: 'Sağlıklı Ayaklar',
        caption: 'Düzenli bakım ile sağlıklı ayaklar'
      },
      {
        type: 'heading',
        content: 'Günlük Ayak Bakım Rutini Nasıl Olmalı?'
      },
      {
        type: 'paragraph',
        content: 'Ayak sağlığını korumanın temel yolu, düzenli ve doğru bir bakım rutinidir. Sabah ve akşam uygulanacak basit adımlar, uzun vadede önemli fark yaratır.'
      },
      {
        type: 'subheading',
        icon: '🌅',
        content: 'Sabah Ayak Bakımı'
      },
      {
        type: 'paragraph',
        content: 'Güne temiz ve kuru ayaklarla başlamak, gün boyu oluşabilecek sorunların önüne geçer.'
      },
      {
        type: 'checkList',
        items: [
          'Ayaklarınızı ılık su ile yıkayın',
          'Parmak aralarını özellikle iyice kurulayın',
          'Temiz ve kuru çorap giyin',
          'Ayağınıza uygun, hava alabilen ayakkabılar tercih edin'
        ]
      },
      {
        type: 'subheading',
        icon: '🌙',
        content: 'Akşam Ayak Bakımı'
      },
      {
        type: 'paragraph',
        content: 'Gün boyunca terleyen ve yorulan ayaklar için akşam bakımı oldukça önemlidir.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-hijyeni/ayak-banyosu.jpg',
        alt: 'Ayak Banyosu',
        caption: 'Akşam ayak banyosu ile rahatlama'
      },
      {
        type: 'checkList',
        items: [
          'Ayaklarınızı uygun bir temizleyici ile yıkayın',
          'İsteğe bağlı olarak 10–15 dakika ılık suda bekletin',
          'Sertleşmiş derileri nazikçe ponza taşı ile törpüleyin',
          'Nemlendirici bir krem ile ayaklarınızı besleyin',
          'Tırnaklarınızı düzenli aralıklarla kesin'
        ]
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'İpucu',
        content: 'Aşırı sıcak su, cildin kurumasına neden olabilir. Ilık su tercih edin.'
      },
      {
        type: 'heading',
        content: 'Tırnak Bakımı Neden Önemlidir?'
      },
      {
        type: 'paragraph',
        content: 'Yanlış tırnak kesimi ve yetersiz bakım, batık tırnak ve tırnak mantarı gibi problemlere zemin hazırlayabilir.'
      },
      {
        type: 'subheading',
        icon: '✂️',
        content: 'Doğru Tırnak Bakımı İçin'
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Düz kesim', text: 'Tırnaklar düz şekilde kesilmeli, köşeler yuvarlatılmamalıdır' },
          { bold: 'Uzunluk', text: 'Çok kısa kesimden kaçınılmalıdır' },
          { bold: 'Hijyen', text: 'Temiz ve kuru bir makas kullanılmalıdır' },
          { bold: 'Dikkat', text: 'Batık, renk değişimi veya kalınlaşma fark edilirse uzmana danışılmalıdır' }
        ]
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Detaylı Bilgi',
        content: 'Tırnak mantarı türleri (onikomikoz) ve tedavi seçenekleri hakkında detaylı bilgi almak için ilgili içeriğimizi inceleyin.',
        link: '/blog/tirnak-mantari-cesitleri'
      },
      {
        type: 'heading',
        content: 'Çorap ve Ayakkabı Seçimi Ayak Sağlığını Nasıl Etkiler?'
      },
      {
        type: 'paragraph',
        content: 'Yanlış çorap ve ayakkabı seçimi, ayakta nem birikimine ve hava sirkülasyonunun azalmasına neden olabilir. Bu durum, mantar enfeksiyonları için uygun bir ortam oluşturur.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-hijyeni/ayakkabi-tercihi-nasil-olmali.jpg',
        alt: 'Doğru Ayakkabı Seçimi',
        caption: 'Ayak sağlığı için doğru ayakkabı tercihi'
      },
      {
        type: 'comparisonBox',
        wrongTitle: 'Çorap Seçimi - Kaçınılması Gerekenler',
        rightTitle: 'Çorap Seçimi - Öneriler',
        wrong: [
          'Sentetik malzemeler',
          'Çok sıkı lastikli çoraplar',
          'Aynı çorabı birden fazla gün giymek'
        ],
        right: [
          'Pamuk, bambu veya nem emici kumaşlar',
          'Rahat lastikli çoraplar',
          'Çorapları günlük değiştirmek'
        ]
      },
      {
        type: 'bulletList',
        items: [
          { bold: 'Ölçü', text: 'Ayağın ölçüsüne uygun ayakkabılar tercih edilmelidir' },
          { bold: 'Malzeme', text: 'Nefes alabilen malzemeler seçilmelidir' },
          { bold: 'Dönüşüm', text: 'Aynı ayakkabı her gün giyilmemeli, dönüşümlü kullanılmalıdır' }
        ]
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Detaylı Bilgi',
        content: 'Ayak mantarı belirtileri ve korunma yöntemleri hakkında ana içeriğimizi inceleyin.',
        link: '/blog/ayak-mantari-nedir'
      },
      {
        type: 'heading',
        content: 'PediZone® Ürünleri ile Günlük Ayak Bakımı'
      },
      {
        type: 'paragraph',
        content: 'Günlük ayak bakım rutininde kullanılan ürünler, hijyenin sürdürülebilir olmasına destek sağlar.'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-hijyeni/erkek-ayak-kopuk-pedizone.jpg',
        alt: 'PediZone Temizleme Köpüğü',
        caption: 'PediZone® Temizleme Köpüğü ile günlük temizlik'
      },
      {
        type: 'stepCard',
        step: 1,
        title: 'Günlük Temizlik',
        content: 'PediZone® Temizleme Köpüğü, ayakların nazikçe temizlenmesine yardımcı olarak günlük hijyen rutinine eşlik edebilir.',
        product: 'PediZone® Temizleme Köpüğü'
      },
      {
        type: 'stepCard',
        step: 2,
        title: 'Tırnak ve Cilt Bakımı',
        content: 'PediZone® Foot and Nail Care Serum, ayak ve tırnak çevresinin düzenli bakımında destekleyici bir ürün olarak kullanılabilir.',
        product: 'PediZone® Foot and Nail Care Serum'
      },
      {
        type: 'image',
        src: '/blog-images/ayak-hijyeni/topuk-krem-surmek.jpg',
        alt: 'Topuk Kremi Uygulama',
        caption: 'Çatlak topuklar için nemlendirici bakım'
      },
      {
        type: 'stepCard',
        step: 3,
        title: 'Çatlak ve Kuruluk Bakımı',
        content: 'PediZone® %15 Üreli Krem, özellikle kuru ve çatlamaya meyilli topuklarda nemlendirme amacıyla tercih edilebilir.',
        product: 'PediZone® %15 Üreli Krem'
      },
      {
        type: 'infoBox',
        variant: 'warning',
        title: 'Not',
        content: 'Ürünler, bakım amaçlıdır. Şikayetler uzun süre devam ederse uzman görüşü alınmalıdır.'
      },
      {
        type: 'infoBox',
        variant: 'tip',
        title: 'Profesyonel Bakım',
        content: 'Evde bakım yeterli gelmiyorsa, medikal ayak bakımı ile profesyonel destek alabilirsiniz.',
        link: '/blog/medikal-ayak-bakimi-nedir'
      },
      {
        type: 'heading',
        content: 'İlgili Ana İçerikler'
      },
      {
        type: 'relatedArticles',
        articles: [
          {
            title: 'Ayak Mantarı Belirtileri ve Tedavisi',
            description: 'Ayak mantarı neden olur? Belirtileri, korunma yöntemleri ve etkili tedavi yaklaşımları.',
            link: '/blog/ayak-mantari-nedir',
            icon: '🦶'
          },
          {
            title: 'Tırnak Mantarı Türleri (Onikomikoz)',
            description: 'Farklı tırnak mantarı çeşitleri, belirtileri ve tedavi seçenekleri hakkında kapsamlı rehber.',
            link: '/blog/tirnak-mantari-cesitleri',
            icon: '💅'
          }
        ]
      },
      {
        type: 'heading',
        content: 'Sonuç'
      },
      {
        type: 'paragraph',
        content: 'Ayak hijyeni ve bakımı, ihmal edilmemesi gereken temel sağlık alışkanlıkları arasındadır. Günlük bakım rutini, doğru ürün kullanımı ve uygun ayakkabı seçimi ile ayak sağlığı uzun vadede korunabilir. Küçük ama düzenli adımlar, büyük sorunların önüne geçebilir.'
      },
      {
        type: 'infoBox',
        variant: 'success',
        title: 'Unutmayın',
        content: 'Düzenli hijyen ve doğru bakım alışkanlıkları ile ayak sağlığınızı koruyabilirsiniz. Şikayetler devam ederse uzman görüşü alınmalıdır.'
      }
    ],
    faqs: [
      {
        question: 'Ayak hijyeni neden önemlidir?',
        answer: 'Düzenli ayak hijyeni, bakteri ve mantar oluşumunu azaltarak ayak sağlığının korunmasına yardımcı olur.'
      },
      {
        question: 'Ayaklar günde kaç kez yıkanmalıdır?',
        answer: 'Genellikle günde bir kez yıkamak yeterlidir. Aşırı terleme durumunda ihtiyaç halinde tekrar yıkanabilir.'
      },
      {
        question: 'Ayak bakımı ayak mantarını önler mi?',
        answer: 'Doğru hijyen ve düzenli bakım, ayak mantarı riskini azaltmaya yardımcı olabilir ancak tek başına kesin koruma sağlamaz.'
      },
      {
        question: 'Ayak bakım ürünleri ne sıklıkla kullanılmalıdır?',
        answer: 'Ürünlerin kullanım sıklığı içerik ve ihtiyaca göre değişir. Günlük bakımda düzenli kullanım önerilir.'
      },
      {
        question: 'Ayak hijyeni ayak kokusunu azaltır mı?',
        answer: 'Evet. Düzenli ayak hijyeni, kokuya neden olan bakteri oluşumunu azaltmaya yardımcı olabilir.'
      }
    ],
    tags: ['Ayak Hijyeni', 'Ayak Bakımı', 'Günlük Bakım', 'Tırnak Bakımı', 'PediZone']
  }
];

// Sertifikalar
export const certificates = [
  {
    id: 1,
    title: 'GS1 Barkod Sertifikası',
    description: 'Uluslararası GS1 barkod sistemi ile ürün takip ve doğrulama sertifikası.',
    image: '/documents/pedizone-gs1-sertifika.jpg',
    badge: 'Uluslararası'
  },
  {
    id: 2,
    title: 'Klinik Test Sonuçları',
    description: 'Ürünlerimizin klinik ortamda test edilmiş etkinlik sonuçları.',
    image: '/documents/pedizone-klinik-test-sonuclari-seo.png',
    badge: 'Klinik Onaylı'
  },
  {
    id: 3,
    title: 'Laboratuvar Test Sonuçları',
    description: 'Akredite laboratuvarlarda yapılan detaylı analiz raporları.',
    image: '/documents/pedizone-laboratuvar-test-sonuclari-seo.png',
    badge: 'Akredite'
  },
  {
    id: 4,
    title: 'Mikrobiyoloji Uygunluk Raporu',
    description: 'Mikrobiyolojik güvenlik ve uygunluk belgesi.',
    image: '/documents/pedizone-mikrobiyoloji-uygunluk-raporu-seo.png',
    badge: 'Güvenlik'
  },
  {
    id: 5,
    title: 'Mikrobiyolojik Analiz Raporu',
    description: 'Detaylı mikrobiyolojik analiz ve test sonuçları.',
    image: '/documents/pedizone-mikrobiyolojik-analiz-raporu-seo.png',
    badge: 'Analiz'
  },
  {
    id: 6,
    title: 'Ürün Uygunluk Belgesi',
    description: 'Türk standartlarına uygunluk ve kalite belgesi.',
    image: '/documents/pedizone-urun-uygunluk-belgesi-seo.png',
    badge: 'TSE Uyumlu'
  }
];
