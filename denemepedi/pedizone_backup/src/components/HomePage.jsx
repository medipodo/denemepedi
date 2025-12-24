import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

// Import images
import productSerum from '../assets/pedizone-serum-new.jpg'
import productFoam from '../assets/pedizone-foot-foam-new.jpg'
import productFoamPortfolio from '../assets/Foam-Pedizone-Kopuk.jpg'
import productSerum2 from '../assets/pedizone-urea-cream-new.png'
import solutionImage1 from '../assets/ayak-mantari-tedavi-optimized.png'
import solutionImage2 from '../assets/foot-callus-problem-optimized.png'
import solutionImage3 from '../assets/foot-crack-problem.jpg'
import solutionImage4 from '../assets/foot-odor-problem.jpg'
import blogAyakMantari from '../assets/blog/ayak-mantari-yeni.jpg'
import blogTirnakMantari from '../assets/tirnak-mantari-cesitleri.jpg'
import blogSerumKullanimi from '../assets/pedizone-serum-kullanimi.jpg'
import blogMedikalAyakBakimi from '../assets/blog/medikal-ayak-bakimi.jpg'
import blogAyakKokusu from '../assets/blog/ayak-kokusu-blog.jpg'
import blogAyakHijyeni from '../assets/blog/ayak-hijyeni-blog.jpg'

// Import slide images
import slide1 from '../assets/slide-1-podolog-new.png'
import slide3 from '../assets/slide-3-foam-usage.png'
import slide4 from '../assets/slide-4-cracked-heels-ultra-optimized.png'

const HomePage = () => {
  const navigate = useNavigate()
  const [currentLang, setCurrentLang] = useState('tr')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Slide states
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  
  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  // Form submission state removed - now using direct mailto

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Scroll to products function
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Slide data
  const slides = [
    {
      image: slide1,
      title: {
        tr: 'Podologların Önerdiği',
        en: 'Recommended by Podologists',
        ar: 'موصى به من قبل أطباء الأقدام'
      },
      description: {
        tr: 'Podologların beklentilerine yönelik hazırladığımız ayak bakım ürünlerimiz',
        en: 'Our foot care products prepared according to podologists\' expectations',
        ar: 'منتجات العناية بالأقدام التي أعددناها وفقاً لتوقعات أطباء الأقدام'
      },
      link: '#products'
    },
    {
      image: slide3,
      title: {
        tr: 'PediZone® Temizleme Köpüğü',
        en: 'PediZone® Cleansing Foam',
        ar: 'رغوة التنظيف PediZone®'
      },
      description: {
        tr: 'Günlük ayak temizliği için etkili köpük formülü.',
        en: 'Effective foam formula for daily foot cleansing.',
        ar: 'تركيبة رغوة فعالة لتنظيف القدمين اليومي.'
      },
      link: '/product/temizleme-kopugu'
    },
    {
      image: slide4,
      title: {
        tr: 'Çatlak Topuk Tedavisi',
        en: 'Cracked Heel Treatment',
        ar: 'علاج الكعوب المتشققة'
      },
      description: {
        tr: 'Etkili formül ile çatlak topuklarınızı onarın ve koruyun.',
        en: 'Repair and protect your cracked heels with effective formula.',
        ar: 'أصلح واحم كعوبك المتشققة بتركيبة فعالة.'
      },
      link: '/product/bakim-serumu'
    }
  ]

  // Slide functions
  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Auto-play effect
  useEffect(() => {
    let interval
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length)
      }, 4000)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, slides.length])

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission - Open mail client
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const subject = encodeURIComponent(`İletişim Formu - ${formData.name}`)
    const body = encodeURIComponent(
      `İsim: ${formData.name}\n` +
      `E-posta: ${formData.email}\n\n` +
      `Mesaj:\n${formData.message}`
    )
    
    window.location.href = `mailto:info@pedizone.com?subject=${subject}&body=${body}`
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  // Content translations
  const content = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        products: 'Ürünler',
        solutions: 'Çözümler',
        about: 'Hakkımızda',
        dealers: 'Bayiler',
        certificates: 'Sertifikalar',
        contact: 'İletişim'
      },
      hero: {
        badge: 'Podologların Tavsiyesi',
        title: 'Profesyonel Ayak Bakım Çözümleri',
        brand: 'Pedizone®',
        subtitle: 'Podologların önerileri ve beklentilerine yönelik hazırlanan etkili ayak bakım ürünleri',
        cta1: 'Ürünleri Keşfedin',
        cta2: 'Uzman Desteği'
      },
      products: {
        title: 'Ürün Portföyümüz',
        subtitle: 'Her ayak sorunu için özel olarak geliştirilmiş çözümler',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'PediZone® Foot and Nail Care Serum',
            description: 'Ayak ve tırnak bakımı için etkili formül',
            image: productSerum,
            badge: 'En Popüler',
            features: ['Hızlı etki', 'Doğal içerik', 'Günlük kullanım', 'Podolog onaylı']
          },
          {
            id: 'temizleme-kopugu',
            name: 'PediZone® Ayak Temizleme Köpüğü',
            description: 'Derinlemesine temizlik ve koruma',
            image: productFoamPortfolio,
            badge: 'Yeni',
            features: ['Antibakteriyel', 'Koku giderici', 'Yumuşak formül', 'Günlük bakım']
          },
          {
            id: 'bakim-serumu',
            name: 'PediZone® %15 Üreli Çatlak Topuk ve Ayak Kremi',
            description: 'Genel ayak bakımı ve nemlendirme',
            image: productSerum2,
            badge: 'Önerilen',
            features: ['Nemlendirici', 'Onarıcı', 'Koruyucu', 'Tüm cilt tipleri']
          }
        ]
      },
      solutions: {
        title: 'Ayak Sorunlarına Çözümler',
        subtitle: 'Uzman ekibimizle geliştirilen podoloji ürünleri',
        items: [
          {
            title: 'Mantar Enfeksiyonları',
            description: 'Ayak ve tırnak mantarı için etkili önleyici çözümler',
            features: ['Antifungal serum', 'Temizleme köpüğü', 'Koruyucu bakım'],
            image: solutionImage1
          },
          {
            title: 'Nasır ve Kalınlaşma',
            description: 'Sert deri tabakalarını yumuşatan özel formüller',
            features: ['Yumuşatıcı krem', 'Peeling serum', 'Nemlendirici'],
            image: solutionImage2
          },
          {
            title: 'Çatlak ve Kuruluk',
            description: 'Kuru ve çatlak ayaklar için onarıcı bakım',
            features: ['Onarıcı krem', 'Yoğun nemlendirici', 'Gece bakımı'],
            image: solutionImage3
          },
          {
            title: 'Koku ve Terleme',
            description: 'Aşırı terleme ve koku problemleri için çözümler',
            features: ['Deodorant serum', 'Antibakteriyel köpük', 'Terleme önleyici'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'Neden PediZone®?',
        subtitle: 'Ayak sağlığında güvenilir çözüm ortağınız',
        items: [
          {
            title: 'Podologların Tavsiyesi',
            description: 'Tüm ürünlerimiz ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır.'
          },
          {
            title: 'Klinik Testli',
            description: 'Laboratuvar ortamında yapılan testlerle etkinliği kanıtlanmış formüller.'
          },
          {
            title: 'Doğal İçerikler',
            description: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış, yan etki riski minimum.'
          },
          {
            title: 'Uzman Desteği',
            description: '7/24 uzman ekibimizden destek alabilir, sorularınızı yanıtlayabilirsiniz.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Ayak sağlığı rehberi ve uzman tavsiyeleri',
        items: [
          {
            title: 'Medikal Ayak Bakımı Nedir?',
            excerpt: 'Medikal ayak bakımı; hijyenik koşullarda, medikal cihazlar ve profesyonel ürünler kullanılarak podologlar tarafından yapılan, ayak ve tırnak sağlığını korumaya yönelik uygulamalardır.',
            readTime: '8 dakika',
            tags: ['medikal ayak bakımı', 'podolog', 'ayak sağlığı'],
            image: blogMedikalAyakBakimi,
            link: '/blog/medikal-ayak-bakimi-nedir.html'
          },
          {
            title: 'Ayak Mantarı Nedir, Neden Olur?',
            excerpt: 'Ayak mantarı, özellikle ayak parmak aralarında oluşan ve kaşıntı, kızarıklık, kötü koku gibi belirtilerle kendini gösteren bulaşıcı bir cilt enfeksiyonudur.',
            readTime: '5 dakika',
            tags: ['ayak mantarı', 'ayak sağlığı', 'podoloji'],
            image: blogAyakMantari,
            link: '/blog/ayak-mantari-nedir.html'
          },
          {
            title: 'Tırnak Mantarı Çeşitleri Nelerdir?',
            excerpt: 'Tırnak mantarı, hem estetik görünümü bozan hem de ciddi rahatsızlıklara yol açabilen yaygın bir enfeksiyondur. Onikomikoz olarak bilinen bu hastalığın farklı çeşitleri bulunmaktadır.',
            readTime: '6 dakika',
            tags: ['tırnak mantarı', 'onikomikoz', 'tırnak hastalıkları'],
            image: blogTirnakMantari,
            link: '/blog/tirnak-mantari-cesitleri.html'
          },
          {
            title: 'Mantar İçin Serum Kullanmanın Önemi',
            excerpt: 'Mantar enfeksiyonlarında doğru ürünle yapılan topikal tedavi, iyileşme sürecini doğrudan etkiler. PediZone® Foot and Nail Care Serum ile serum formundaki ürünlerin avantajlarını keşfedin.',
            readTime: '7 dakika',
            tags: ['foot care serum', 'PediZone', 'topikal tedavi'],
            image: blogSerumKullanimi,
            link: '/blog/serum-kullanim-onemi.html'
          },
          {
            title: 'Ayak Kokusu Neden Olur? Çözümleri Nelerdir?',
            excerpt: 'Ayak kokusu, günlük yaşamda en sık karşılaşılan ama çoğu zaman dile getirilmeyen sorunlardan biridir. Terleme, bakteriler ve uygun olmayan ayakkabı seçimi gibi faktörlerin etkisiyle oluşur.',
            readTime: '6 dakika',
            tags: ['ayak kokusu', 'ayak hijyeni', 'ayak sağlığı'],
            image: blogAyakKokusu,
            link: '/blog/ayak-kokusu-nedenleri.html'
          },
          {
            title: 'Ayak Hijyeni ve Bakım İpuçları',
            excerpt: 'Ayaklarımız gün boyu vücudumuzun yükünü taşır ve sağlığımız için kritik öneme sahiptir. Düzenli ayak hijyeni, mantar, nasır ve enfeksiyonlara karşı koruyucu bir etkendir.',
            readTime: '5 dakika',
            tags: ['ayak hijyeni', 'ayak bakımı', 'podolog tavsiyeleri'],
            image: blogAyakHijyeni,
            link: '/blog/ayak-hijyeni-ipuclari.html'
          }
        ]
      },
      contact: {
        title: 'İletişime Geçin',
        subtitle: 'Sorularınız için buradayız',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Ankara / Ankara, Turkey',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'Bize Ulaşın',
          name: 'Ad Soyad',
          email: 'E-posta',
          message: 'Mesaj',
          submit: 'Mesaj Gönder',
          namePlaceholder: 'Adınızı girin',
          emailPlaceholder: 'E-posta adresinizi girin',
          messagePlaceholder: 'Mesajınızı yazın'
        }
      }
    },
    en: {
      nav: {
        home: 'Home',
        products: 'Products',
        solutions: 'Solutions',
        about: 'About',
        certificates: 'Certificates',
        contact: 'Contact'
      },
      hero: {
        badge: 'Podologist Approved',
        title: 'Professional Foot Care Solutions',
        brand: 'Pedizone®',
        subtitle: 'Effective foot care products prepared according to podologists\' recommendations and expectations',
        cta1: 'Explore Products',
        cta2: 'Expert Support'
      },
      products: {
        title: 'Our Product Portfolio',
        subtitle: 'Specially developed solutions for every foot problem',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'PediZone® Antifungal Serum',
            description: 'Special formula for foot and nail fungus',
            image: productSerum,
            badge: 'Most Popular',
            features: ['Fast acting', 'Natural content', 'Daily use', 'Podologist approved']
          },
          {
            id: 'temizleme-kopugu',
            name: 'PediZone® Foot Cleansing Foam',
            description: 'Deep cleansing and protection',
            image: productFoamPortfolio,
            badge: 'New',
            features: ['Antibacterial', 'Odor eliminating', 'Gentle formula', 'Daily care']
          },
          {
            id: 'bakim-serumu',
            name: 'PediZone® 15% Urea Cracked Heel and Foot Cream',
            description: 'General foot care and moisturizing',
            image: productSerum2,
            badge: 'Recommended',
            features: ['Moisturizing', 'Repairing', 'Protective', 'All skin types']
          }
        ]
      },
      solutions: {
        title: 'Solutions for Foot Problems',
        subtitle: 'Targeted treatment approaches developed with our expert team',
        items: [
          {
            title: 'Fungal Infections',
            description: 'Effective treatment solutions for foot and nail fungus',
            features: ['Antifungal serum', 'Cleansing foam', 'Protective care'],
            image: solutionImage1
          },
          {
            title: 'Callus and Thickening',
            description: 'Special formulas that soften hard skin layers',
            features: ['Softening cream', 'Peeling serum', 'Moisturizer'],
            image: solutionImage2
          },
          {
            title: 'Cracks and Dryness',
            description: 'Restorative care for dry and cracked feet',
            features: ['Repair cream', 'Intensive moisturizer', 'Night care'],
            image: solutionImage3
          },
          {
            title: 'Odor and Sweating',
            description: 'Solutions for excessive sweating and odor problems',
            features: ['Deodorant serum', 'Antibacterial foam', 'Anti-perspirant'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'Why PediZone®?',
        subtitle: 'Your reliable solution partner in foot health',
        items: [
          {
            title: 'Podologist Approved',
            description: 'All our products have been tested and approved by foot health specialists.'
          },
          {
            title: 'Clinically Tested',
            description: 'Formulas with proven effectiveness through laboratory testing.'
          },
          {
            title: 'Natural Ingredients',
            description: 'Prepared with natural and safe active ingredients, minimal risk of side effects.'
          },
          {
            title: 'Expert Support',
            description: 'You can get support from our expert team 24/7 and get answers to your questions.'
          }
        ]
      },
      blog: {
        title: 'PediZone Blog',
        subtitle: 'Foot health guide and expert advice',
        items: [
          {
            title: 'What is Medical Foot Care?',
            excerpt: 'Medical foot care is the application of foot and nail health care performed by podologists using medical devices and professional products in hygienic conditions.',
            readTime: '8 min',
            tags: ['medical foot care', 'podologist', 'foot health'],
            image: blogMedikalAyakBakimi
          },
          {
            title: 'What is Foot Fungus, Why Does It Occur?',
            excerpt: 'Foot fungus is a contagious skin infection that occurs especially between the toes and manifests itself with symptoms such as itching, redness, and bad odor.',
            readTime: '5 min',
            tags: ['foot fungus', 'foot health', 'podology'],
            image: blogAyakMantari
          },
          {
            title: 'What are the Types of Nail Fungus?',
            excerpt: 'Nail fungus is a common infection that both spoils the aesthetic appearance and can lead to serious discomfort. This disease, known as onychomycosis, has different types.',
            readTime: '6 min',
            tags: ['nail fungus', 'onychomycosis', 'nail diseases'],
            image: blogTirnakMantari
          },
          {
            title: 'The Importance of Using Serum for Fungus',
            excerpt: 'Topical treatment with the right product in fungal infections directly affects the healing process. Discover the advantages of serum-form products with PediZone® Foot and Nail Care Serum.',
            readTime: '7 min',
            tags: ['fungus serum', 'PediZone', 'topical treatment'],
            image: blogSerumKullanimi
          }
        ]
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'We are here for your questions',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'Contact Us',
          name: 'Full Name',
          email: 'Email',
          message: 'Message',
          submit: 'Send Message',
          namePlaceholder: 'Enter your name',
          emailPlaceholder: 'Enter your email address',
          messagePlaceholder: 'Write your message'
        }
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        products: 'المنتجات',
        solutions: 'الحلول',
        about: 'حولنا',
        certificates: 'الشهادات',
        contact: 'اتصل بنا'
      },
      hero: {
        badge: 'معتمد من أطباء الأقدام',
        title: 'حلول احترافية لرعاية القدم',
        brand: 'بيديزون®',
        subtitle: 'منتجات فعالة لرعاية القدم معدة وفقاً لتوصيات وتوقعات أطباء الأقدام',
        cta1: 'استكشف المنتجات',
        cta2: 'دعم الخبراء'
      },
      products: {
        title: 'محفظة منتجاتنا',
        subtitle: 'حلول مطورة خصيصاً لكل مشكلة في القدم',
        items: [
          {
            id: 'mantar-karsiti-serum',
            name: 'بيديزون® مصل مضاد للفطريات',
            description: 'تركيبة خاصة لفطريات القدم والأظافر',
            image: productSerum,
            badge: 'الأكثر شعبية',
            features: ['سريع المفعول', 'محتوى طبيعي', 'للاستخدام اليومي', 'معتمد من أطباء الأقدام']
          },
          {
            id: 'temizleme-kopugu',
            name: 'بيديزون® رغوة تنظيف القدم',
            description: 'تنظيف عميق وحماية',
            image: productFoamPortfolio,
            badge: 'جديد',
            features: ['مضاد للبكتيريا', 'مزيل للرائحة', 'تركيبة لطيفة', 'رعاية يومية']
          },
          {
            id: 'bakim-serumu',
            name: 'بيديزون® كريم القدم والكعب المتشقق بـ 15% يوريا',
            description: 'رعاية عامة للقدم وترطيب',
            image: productSerum2,
            badge: 'موصى به',
            features: ['مرطب', 'مصلح', 'واقي', 'لجميع أنواع البشرة']
          }
        ]
      },
      solutions: {
        title: 'حلول لمشاكل القدم',
        subtitle: 'نهج علاجية مستهدفة طورها فريق خبرائنا',
        items: [
          {
            title: 'العدوى الفطرية',
            description: 'حلول علاجية فعالة لفطريات القدم والأظافر',
            features: ['مصل مضاد للفطريات', 'رغوة التنظيف', 'رعاية واقية'],
            image: solutionImage1
          },
          {
            title: 'الكالو والسماكة',
            description: 'تركيبات خاصة تنعم طبقات الجلد الصلبة',
            features: ['كريم منعم', 'مصل التقشير', 'مرطب'],
            image: solutionImage2
          },
          {
            title: 'التشققات والجفاف',
            description: 'رعاية ترميمية للأقدام الجافة والمتشققة',
            features: ['كريم الإصلاح', 'مرطب مكثف', 'رعاية ليلية'],
            image: solutionImage3
          },
          {
            title: 'الرائحة والتعرق',
            description: 'حلول لمشاكل التعرق المفرط والرائحة',
            features: ['مصل مزيل العرق', 'رغوة مضادة للبكتيريا', 'مضاد للتعرق'],
            image: solutionImage4
          }
        ]
      },
      about: {
        title: 'لماذا بيديزون®؟',
        subtitle: 'شريكك الموثوق في صحة القدم',
        items: [
          {
            title: 'معتمد من أطباء الأقدام',
            description: 'جميع منتجاتنا تم اختبارها واعتمادها من قبل أخصائيي صحة القدم.'
          },
          {
            title: 'مختبر سريرياً',
            description: 'تركيبات ذات فعالية مثبتة من خلال الاختبارات المعملية.'
          },
          {
            title: 'مكونات طبيعية',
            description: 'معدة بمكونات فعالة طبيعية وآمنة، مخاطر آثار جانبية قليلة.'
          },
          {
            title: 'دعم الخبراء',
            description: 'يمكنك الحصول على الدعم من فريق خبرائنا على مدار الساعة والحصول على إجابات لأسئلتك.'
          }
        ]
      },
      blog: {
        title: 'مدونة بيديزون',
        subtitle: 'دليل صحة القدم ونصائح الخبراء',
        items: [
          {
            title: 'ما هي العناية الطبية بالقدم؟',
            excerpt: 'العناية الطبية بالقدم هي تطبيق العناية بصحة القدم والأظافر التي يقوم بها أطباء الأقدام باستخدام الأجهزة الطبية والمنتجات المهنية في ظروف صحية.',
            readTime: '8 دقائق',
            tags: ['العناية الطبية بالقدم', 'طبيب الأقدام', 'صحة القدم'],
            image: blogMedikalAyakBakimi
          },
          {
            title: 'ما هي فطريات القدم، لماذا تحدث؟',
            excerpt: 'فطريات القدم هي عدوى جلدية معدية تحدث خاصة بين أصابع القدم وتظهر بأعراض مثل الحكة والاحمرار والرائحة الكريهة.',
            readTime: '5 دقائق',
            tags: ['فطريات القدم', 'صحة القدم', 'طب الأقدام'],
            image: blogAyakMantari
          },
          {
            title: 'ما هي أنواع فطريات الأظافر؟',
            excerpt: 'فطريات الأظافر هي عدوى شائعة تفسد المظهر الجمالي ويمكن أن تؤدي إلى إزعاج خطير. هذا المرض المعروف باسم فطار الأظافر له أنواع مختلفة.',
            readTime: '6 دقائق',
            tags: ['فطريات الأظافر', 'فطار الأظافر', 'أمراض الأظافر'],
            image: blogTirnakMantari
          },
          {
            title: 'أهمية استخدام المصل للفطريات',
            excerpt: 'العلاج الموضعي بالمنتج المناسب في العدوى الفطرية يؤثر مباشرة على عملية الشفاء. اكتشف مزايا المنتجات في شكل مصل مع بيديزون 50 مل.',
            readTime: '7 دقائق',
            tags: ['مصل الفطريات', 'بيديزون', 'العلاج الموضعي'],
            image: blogSerumKullanimi
          }
        ]
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لأسئلتك',
        address: 'Bağlıca Mah. Mert Cad. No 4/2 Etimesgut ANKARA',
        phone: '05068860326',
        email: 'info@pedizone.com',
        form: {
          title: 'اتصل بنا',
          name: 'الاسم الكامل',
          email: 'البريد الإلكتروني',
          message: 'الرسالة',
          submit: 'إرسال الرسالة',
          namePlaceholder: 'أدخل اسمك',
          emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
          messagePlaceholder: 'اكتب رسالتك'
        }
      }
    }
  }

  const t = content[currentLang]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="pedizone-gradient text-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer" 
              onClick={scrollToTop}
            >
              <span className="text-2xl font-bold">Pedizone</span>
              <span className="text-sm relative -top-2">®</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-red-200 transition-colors">{t.nav.home}</a>
              <a href="#products" className="text-white hover:text-red-200 transition-colors">{t.nav.products}</a>
              <a href="#solutions" className="text-white hover:text-red-200 transition-colors">{t.nav.solutions}</a>
              <a href="#about" className="text-white hover:text-red-200 transition-colors">{t.nav.about}</a>
              <a href="/bayiler" className="text-white hover:text-red-200 transition-colors">{t.nav.dealers}</a>
              <a href="/sertifikalar" className="text-white hover:text-red-200 transition-colors">{t.nav.certificates}</a>
              <a href="#contact" className="text-white hover:text-red-200 transition-colors">{t.nav.contact}</a>
            </nav>

            {/* Language Selector & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop Language Selector */}
              <div className="hidden lg:flex items-center space-x-2">
                <button 
                  onClick={() => setCurrentLang('tr')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'tr' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="Türkçe"
                >
                  <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-8 h-6" />
                </button>
                <button 
                  onClick={() => setCurrentLang('en')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'en' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="English"
                >
                  <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-8 h-6" />
                </button>
                <button 
                  onClick={() => setCurrentLang('ar')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'ar' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="العربية"
                >
                  <img src="https://flagcdn.com/w40/sa.png" alt="AR" className="w-8 h-6" />
                </button>
              </div>

              {/* Mobile Language Selector */}
              <div className="lg:hidden flex items-center space-x-1">
                <button 
                  onClick={() => setCurrentLang('tr')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'tr' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="Türkçe"
                >
                  <img src="https://flagcdn.com/w40/tr.png" alt="TR" className="w-8 h-6" />
                </button>
                <button 
                  onClick={() => setCurrentLang('en')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'en' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="English"
                >
                  <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-8 h-6" />
                </button>
                <button 
                  onClick={() => setCurrentLang('ar')}
                  className={`p-2 rounded-lg transition-all duration-200 ${
                    currentLang === 'ar' ? 'bg-white/20 ring-2 ring-white' : 'hover:bg-white/10'
                  }`}
                  aria-label="العربية"
                >
                  <img src="https://flagcdn.com/w40/sa.png" alt="AR" className="w-8 h-6" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-red-400/30">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.home}
                </a>
                <a 
                  href="#products" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.products}
                </a>
                <a 
                  href="#solutions" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.solutions}
                </a>
                <a 
                  href="#about" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.about}
                </a>
                <a 
                  href="/bayiler" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.dealers}
                </a>
                <a 
                  href="/sertifikalar" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.certificates}
                </a>
                <a 
                  href="#contact" 
                  className="text-white hover:text-red-200 transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav.contact}
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section bg-gradient-to-br from-gray-50 via-white to-red-50 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5">
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <Badge className="bg-red-100 text-red-800 px-4 py-2 text-sm font-medium">
                  {t.hero.badge}
                </Badge>
                
                <h1 className="pedizone-heading text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight">
                  {t.hero.title}
                </h1>
                
                <div className="space-y-2">
                  <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600">
                    {t.hero.brand}
                  </h2>
                  <p className="pedizone-text text-base lg:text-lg text-gray-600 max-w-2xl">
                    {t.hero.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button className="pedizone-button px-6 py-3" onClick={scrollToProducts}>
                  {t.hero.cta1}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="px-6 py-3 border-red-600 text-red-600 hover:bg-red-50">
                  {t.hero.cta2}
                </Button>
              </div>

              {/* Trust Indicators Compact */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-1">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Podolog Onaylı</div>
                    <div className="text-xs text-gray-600">Uzman Tavsiyesi</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Klinik Testli</div>
                    <div className="text-xs text-gray-600">Güvenli Formül</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://customer-assets.emergentagent.com/job_pedizone-polish/artifacts/xlcjr5cu_Ads%C4%B1z%20tasar%C4%B1m%20%2813%29%20%281%29.jpg" 
                      alt="Eczane" 
                      className="w-5 h-5 object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900">Seçili Eczanelerde</div>
                    <div className="text-xs text-gray-600">Güvenli Satış</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - 3 Products Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
                <img 
                  src={productSerum} 
                  alt="PediZone Serum" 
                  className="rounded-2xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300 w-full cursor-pointer hover:scale-105"
                  fetchpriority="high"
                  loading="eager"
                  onClick={() => navigate('/product/mantar-karsiti-serum')}
                />
                <img 
                  src={productFoam} 
                  alt="PediZone Köpük" 
                  className="rounded-2xl shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-6 md:mt-0 w-full cursor-pointer hover:scale-105"
                  loading="lazy"
                  onClick={() => navigate('/product/temizleme-kopugu')}
                />
                <img 
                  src="https://customer-assets.emergentagent.com/job_pedizone-polish/artifacts/h1qr1xk0_pedizone-%C3%A7atlaktopuk-kremi.jpg" 
                  alt="PediZone Bakım Serumu" 
                  className="rounded-2xl shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 col-span-2 md:col-span-1 mt-3 md:mt-6 w-full cursor-pointer hover:scale-105"
                  loading="lazy"
                  onClick={() => navigate('/product/bakim-serumu')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <div className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ÜRÜNLER
            </div>
            <h2 className="pedizone-heading text-4xl md:text-5xl text-gray-900 mb-4">
              {t.products.title}
            </h2>
            <p className="pedizone-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.products.subtitle}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.products.items.map((product, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white to-gray-50 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 py-1 shadow-lg">
                      {product.badge}
                    </Badge>
                  </div>
                )}
                
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-red-50 to-blue-50">
                  <img 
                    src={product.id === 'mantar-karsiti-serum' ? 'https://customer-assets.emergentagent.com/job_pedizone-polish/artifacts/bsmddgbs_pedizone-serum.jpg' : product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="pedizone-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="pedizone-text text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Button 
                    className="w-full pedizone-button group-hover:shadow-lg transition-all"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigate(`/product/${product.id}`)
                    }}
                  >
                    Detayları İncele
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-red-400 to-red-600 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"></div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ÇÖZÜMLER
            </div>
            <h2 className="pedizone-heading text-4xl md:text-5xl text-gray-900 mb-4">
              {t.solutions.title}
            </h2>
            <p className="pedizone-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.solutions.subtitle}
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {t.solutions.items.map((solution, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={solution.image} 
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <h3 className="absolute bottom-4 left-6 pedizone-heading text-2xl text-white z-10">
                      {solution.title}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <CardContent className="p-6">
                    <p className="pedizone-text text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About/Why PediZone Section */}
      <section id="about" className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <h2 className="pedizone-heading text-4xl md:text-5xl text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="pedizone-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.items.map((item, index) => (
              <div 
                key={index} 
                className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white hover:from-red-50 hover:to-white border border-gray-100 hover:border-red-200 transition-all duration-300 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="pedizone-heading text-xl text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="pedizone-text text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              BLOG
            </div>
            <h2 className="pedizone-heading text-4xl md:text-5xl text-gray-900 mb-4">
              {t.blog.title}
            </h2>
            <p className="pedizone-text text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {t.blog.subtitle}
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.blog.items.map((post, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="pedizone-heading text-xl text-gray-900 mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="pedizone-text text-gray-600 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Read More */}
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium group-hover:gap-3 transition-all"
                  >
                    Devamını Oku
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-2 sm:py-4 md:py-6 lg:py-8 xl:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              İLETİŞİM
            </div>
            <h2 className="pedizone-heading text-4xl md:text-5xl text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="pedizone-text text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefon</h3>
                    <a href="tel:+905068860326" className="text-red-600 hover:text-red-700 font-medium">
                      +90 506 886 0326
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-posta</h3>
                    <a href="mailto:info@pedizone.com" className="text-blue-600 hover:text-blue-700 font-medium">
                      info@pedizone.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Adres</h3>
                    <p className="text-gray-600">
                      Ankara, Turkey
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    İsim Soyisim
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  className="w-full pedizone-button py-4 text-base shadow-lg hover:shadow-xl"
                >
                  Mesaj Gönder
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pedizone-gradient text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-red-600 font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">Pedizone®</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <a href="#products" className="text-red-200 hover:text-white transition-colors">Ürünler</a>
              <a href="#solutions" className="text-red-200 hover:text-white transition-colors">Çözümler</a>
              <a href="#about" className="text-red-200 hover:text-white transition-colors">Hakkımızda</a>
              <a href="/bayiler" className="text-red-200 hover:text-white transition-colors">Bayiler</a>
              <a href="#contact" className="text-red-200 hover:text-white transition-colors">İletişim</a>
              <span className="text-red-400">•</span>
              <a 
                href="https://pedizone.xyz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-200 hover:text-white transition-colors text-sm"
              >
                CRM Giriş
              </a>
            </div>
            
            <div className="border-t border-red-400/30 pt-6">
              <p className="text-red-200 text-sm">
                © 2024 PediZone®. Tüm hakları saklıdır.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/905068860326?text=Merhaba%2C%20PediZone%20ürünleri%20hakkında%20bilgi%20almak%20istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp ile iletişime geç"
        data-testid="whatsapp-button"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          WhatsApp ile iletişime geç
        </span>
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
      </a>
    </div>
  )
}

export default HomePage

