import React, { useState } from 'react'
import { ArrowLeft, ExternalLink, Calendar, Building, FileText, CheckCircle, X } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import Header from './Header'
import Footer from './Footer'

// Import certificate images
import mikrobiyolojikAnalizRaporuSeo from '../assets/documents/pedizone-mikrobiyolojik-analiz-raporu-seo.png'
import klinikTestSonuclariSeo from '../assets/documents/pedizone-klinik-test-sonuclari-seo.png'
import laboratuvarTestSonuclariSeo from '../assets/documents/pedizone-laboratuvar-test-sonuclari-seo.png'
import mikrobiyolojiUygunlukRaporuSeo from '../assets/documents/pedizone-mikrobiyoloji-uygunluk-raporu-seo.png'
import urunUygunlukBelgesiSeo from '../assets/documents/pedizone-urun-uygunluk-belgesi-seo.png'
import gs1BarkodSeo from '../assets/documents/pedizone-gs1-barkod-seo.jpg'
import gs1Sertifika from '../assets/documents/pedizone-gs1-sertifika.jpg'
import gs1BarcodeCover from '../assets/documents/gs1-barcode-cover.jpeg'
import img2866Seo from '../assets/documents/pedizone-img-2866-seo.png'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "Mikrobiyolojik Analiz Raporu",
      product: "PediZone Intense Repair Foot Care Cream",
      institution: "Biyo & Test Laboratuvarları",
      date: "16.09.2025",
      type: "Mikrobiyolojik Test",
      description: "Ürünün zararlı mikroorganizmalar (bakteri, maya, küf) içermediği ve mikrobiyolojik açıdan tamamen güvenli olduğu kanıtlanmıştır.",
      image: mikrobiyolojikAnalizRaporuSeo,
      reportNumber: "25-BYT-000890",
      status: "Uygun",
      highlights: [
        "Aerobik Mezofilik Bakteriler: <10 kob/g-ml",
        "Maya ve Küf Sayımı: <10 kob/g-ml", 
        "Pseudomonas Aeruginosa: Tespit Edilmedi",
        "Staphylococcus Aureus: Tespit Edilmedi",
        "Candida Albicans: Tespit Edilmedi",
        "Escherichia Coli: Tespit Edilmedi"
      ]
    },
    {
      id: 2,
      title: "Klinik Test Sonuçları",
      product: "PediZone Intense Repair Foot Care Cream",
      institution: "Biyo & Test Laboratuvarları",
      date: "16.09.2025",
      type: "Klinik Analiz",
      description: "Ürünün klinik koşullarda test edilmiş ve güvenlik standartlarına uygun olduğu doğrulanmıştır.",
      image: klinikTestSonuclariSeo,
      reportNumber: "25-BYT-000890",
      status: "Başarılı",
      highlights: [
        "Dermatolojik olarak test edilmiş",
        "Hipoalerjenik özellik kanıtlanmış",
        "Cilt uyumluluğu onaylanmış",
        "Güvenlik profili doğrulanmış"
      ]
    },
    {
      id: 3,
      title: "Laboratuvar Test Sonuçları",
      product: "PediZone Intense Repair Foot Care Cream",
      institution: "Biyo & Test Laboratuvarları", 
      date: "16.09.2025",
      type: "Laboratuvar Analizi",
      description: "Ürünün kalite kontrol testlerinden başarıyla geçtiği ve standartlara uygun olduğu belgelenmiştir.",
      image: laboratuvarTestSonuclariSeo,
      reportNumber: "25-BYT-000890",
      status: "Onaylandı",
      highlights: [
        "Kalite kontrol testleri tamamlandı",
        "Standartlara uygunluk onaylandı",
        "Ürün stabilitesi doğrulandı",
        "Güvenlik parametreleri karşılandı"
      ]
    },
    {
      id: 4,
      title: "Mikrobiyoloji Uygunluk Raporu",
      product: "PediZone Intense Repair Foot Care Cream",
      institution: "Biyo & Test Laboratuvarları",
      date: "16.09.2025", 
      type: "Uygunluk Değerlendirmesi",
      description: "Kozmetik ürünlerin mikrobiyolojik kontrolüne ilişkin kılavuza göre uygunluk değerlendirmesi yapılmıştır.",
      image: mikrobiyolojiUygunlukRaporuSeo,
      reportNumber: "25-BYT-000890",
      status: "Uygun",
      highlights: [
        "Mikrobiyolojik kontrol kılavuzuna uygun",
        "Tüm parametreler limit değerlerde",
        "Ürün güvenliği onaylandı",
        "Kalite standartları karşılandı"
      ]
    },
    {
      id: 5,
      title: "Ürün Uygunluk Belgesi",
      product: "PediZone Intense Repair Foot Care Cream",
      institution: "Biyo & Test Laboratuvarları",
      date: "16.09.2025",
      type: "Uygunluk Belgesi",
      description: "Ürünün tüm gerekli testlerden geçtiği ve piyasaya sürüm için uygun olduğu belgelenmiştir.",
      image: urunUygunlukBelgesiSeo,
      reportNumber: "25-BYT-000890", 
      status: "Onaylandı",
      highlights: [
        "Tüm testler başarıyla tamamlandı",
        "Piyasaya sürüm onayı verildi",
        "Yasal gerekliliklere uygunluk",
        "Kalite güvencesi sağlandı"
      ]
    },
    {
      id: 6,
      title: "GS1 Türkiye Üyelik Lisansı",
      product: "MEDİPODO MEDİKAL SAĞLIK HİZMETİ SANAYİ VE TİCARET LİMİTED ŞİRKETİ",
      institution: "GS1 Türkiye",
      date: "23.09.2025",
      type: "Üyelik Belgesi",
      description: "GS1 Türkiye Üyelik Lisansı, ürünlerimizin uluslararası standartlarda barkodlanmasını ve takibini sağlar.",
      image: gs1BarcodeCover,
      reportNumber: "8684936333511",
      status: "Onaylandı",
      highlights: [
        "GS1 Şirket Ön Eki: 86849363335",
        "Yasal Varlık Küresel Konum Numarası (GLN): 8684936333511",
        "Uluslararası standartlarda ürün takibi",
        "Tedarik zinciri verimliliği"
      ]
    }
  ]

  const openCertificate = (certificate) => {
    // Orijinal sertifika görselini yeni sekmede aç
    const originalImages = {
      1: '/pedizione-sertifika.jpg',
      2: '/pedizione-sertifikaa.jpg', 
      3: '/pedizione-sertifika-deney.jpg',
      4: '/pedizione-sertifika-test.jpg',
      5: '/pedizione-sertifika-test-byo.jpg',
      6: '/gs1-membership-licence.jpeg'
    }
    
    const originalImage = originalImages[certificate.id]
    if (originalImage) {
      window.open(originalImage, '_blank')
    } else {
      setSelectedCertificate(certificate)
    }
  }

  const closeCertificate = () => {
    setSelectedCertificate(null)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'uygun':
      case 'onaylandı':
      case 'başarılı':
        return 'bg-green-100 text-green-800 border-green-200'
      case 'beklemede':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'red':
        return 'bg-red-100 text-red-800 border-red-200'
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200'
    }
  }

  return (
    <>
      <Header showBackButton={true} />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-12">
          <div className="pedizone-container text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Sertifikalarımız</h1>
            <p className="text-red-100 text-lg">Test Sonuçları ve Kalite Belgeleri</p>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Introduction */}
        <div className="text-center mb-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bilimsel Kanıtlarla Desteklenen Kalite
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PediZone® ürünleri, bağımsız laboratuvarlar tarafından gerçekleştirilen kapsamlı testlerle 
              güvenlik ve etkinlik açısından doğrulanmıştır. Podologların güvenle tavsiye ettiği ürünlerimizin 
              arkasında bilimsel kanıtlar bulunmaktadır.
            </p>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certificates.map((certificate) => (
            <Card 
              key={certificate.id} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-md hover:shadow-xl hover:-translate-y-1"
              onClick={() => openCertificate(certificate)}
            >
              <CardContent className="p-0">
                {/* Certificate Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-3 right-3">
                    <Badge className={`${getStatusColor(certificate.status)} font-medium`}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {certificate.status}
                    </Badge>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-red-600 transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium mb-1">
                      {certificate.product}
                    </p>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Building className="h-4 w-4 mr-2 text-gray-400" />
                      {certificate.institution}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                      {certificate.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <FileText className="h-4 w-4 mr-2 text-gray-400" />
                      {certificate.reportNumber}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {certificate.description}
                  </p>

                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white group-hover:bg-red-700 transition-colors"
                    size="sm"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Raporu Görüntüle
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Neden PediZone® Güvenilir?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Bağımsız Laboratuvar Testleri</h4>
              <p className="text-gray-600 text-sm">
                Tüm ürünlerimiz akredite laboratuvarlarda kapsamlı testlerden geçirilir.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Podolog Onaylı</h4>
              <p className="text-gray-600 text-sm">
                Podoloji uzmanları tarafından önerilen ve güvenle kullanılan formüller.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Şeffaf Raporlama</h4>
              <p className="text-gray-600 text-sm">
                Tüm test sonuçlarımızı şeffaflık ilkesiyle müşterilerimizle paylaşırız.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-gray-600">{selectedCertificate.product}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeCertificate}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="w-full rounded-lg shadow-md"
                  />
                </div>
                
                <div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Test Detayları</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Kurum:</span>
                          <span className="font-medium">{selectedCertificate.institution}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tarih:</span>
                          <span className="font-medium">{selectedCertificate.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rapor No:</span>
                          <span className="font-medium">{selectedCertificate.reportNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Durum:</span>
                          <Badge className={getStatusColor(selectedCertificate.status)}>
                            {selectedCertificate.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Açıklama</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedCertificate.description}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Öne Çıkan Sonuçlar</h4>
                      <ul className="space-y-1">
                        {selectedCertificate.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
      
      <Footer />
    </>
  )
}

export default Certificates
