import React from 'react';
import { Award, Shield, CheckCircle, FlaskConical, FileCheck, Building2, Calendar, Hash } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const certificates = [
  {
    id: 1,
    title: "Mikrobiyolojik Analiz Raporu",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "Biyo & Test Laboratuvarları",
    date: "16.09.2025",
    reportNo: "25-BYT-000890",
    status: "Uygun",
    statusColor: "bg-green-100 text-green-700",
    description: "Ürünün zararlı mikroorganizmalar (bakteri, maya, küf) içermediği ve mikrobiyolojik açıdan tamamen güvenli olduğu kanıtlanmıştır.",
    image: "/certificates/pedizone-mikrobiyolojik-analiz-raporu-seo.png",
    detailLink: "/certificates/pedizone-test-sonuclari-mikribiyoloji.jpg"
  },
  {
    id: 2,
    title: "Klinik Test Sonuçları",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "Biyo & Test Laboratuvarları",
    date: "16.09.2025",
    reportNo: "25-BYT-000890",
    status: "Başarılı",
    statusColor: "bg-blue-100 text-blue-700",
    description: "Ürünün klinik koşullarda test edilmiş ve güvenlik standartlarına uygun olduğu doğrulanmıştır.",
    image: "/certificates/pedizone-klinik-test-sonuclari-seo.png",
    detailLink: "/certificates/pedizone-klinik-test-sonuclari.jpg"
  },
  {
    id: 3,
    title: "Laboratuvar Test Sonuçları",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "Biyo & Test Laboratuvarları",
    date: "16.09.2025",
    reportNo: "25-BYT-000890",
    status: "Onaylandı",
    statusColor: "bg-green-100 text-green-700",
    description: "Ürünün kalite kontrol testlerinden başarıyla geçtiği ve standartlara uygun olduğu belgelenmiştir.",
    image: "/certificates/pedizone-laboratuvar-test-sonuclari-seo.png",
    detailLink: "/certificates/pedizione-sertifika-deney.jpg"
  },
  {
    id: 4,
    title: "Mikrobiyoloji Uygunluk Raporu",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "Biyo & Test Laboratuvarları",
    date: "16.09.2025",
    reportNo: "25-BYT-000890",
    status: "Uygun",
    statusColor: "bg-green-100 text-green-700",
    description: "Kozmetik ürünlerin mikrobiyolojik kontrolüne ilişkin kılavuza göre uygunluk değerlendirmesi yapılmıştır.",
    image: "/certificates/pedizone-mikrobiyoloji-uygunluk-raporu-seo.png",
    detailLink: "/certificates/pedizione-sertifika-test-byo.jpg"
  },
  {
    id: 5,
    title: "Ürün Uygunluk Belgesi",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "Biyo & Test Laboratuvarları",
    date: "16.09.2025",
    reportNo: "25-BYT-000890",
    status: "Onaylandı",
    statusColor: "bg-green-100 text-green-700",
    description: "Ürünün tüm gerekli testlerden geçtiği ve piyasaya sürüm için uygun olduğu belgelenmiştir.",
    image: "/certificates/pedizone-urun-uygunluk-belgesi-seo.png",
    detailLink: "/certificates/pedizone-test-sonuclari.jpg"
  },
  {
    id: 6,
    title: "GS1 Türkiye Üyelik Lisansı",
    product: "MEDİPODO MEDİKAL SAĞLIK HİZMETİ LTD. ŞTİ.",
    lab: "GS1 Türkiye",
    date: "23.09.2025",
    reportNo: "8684936333511",
    status: "Onaylandı",
    statusColor: "bg-green-100 text-green-700",
    description: "GS1 Türkiye Üyelik Lisansı, ürünlerimizin uluslararası standartlarda barkodlanmasını ve takibini sağlar.",
    image: "/certificates/pedizone-gs1-sertifika.jpg",
    detailLink: "/certificates/pedizone-gs1-barkod-seo.jpg"
  },
  {
    id: 7,
    title: "Dermatolojik Test Raporu - Yama Testi",
    product: "PediZone Intense Repair Foot Care Cream",
    lab: "SKINLAB P.S.A.",
    date: "25.11.2025",
    reportNo: "14/10/25/D/11",
    status: "Uygun",
    statusColor: "bg-green-100 text-green-700",
    description: "Ürünün cilde iyi tolere edildiği, tahriş edici veya alerjik özellikler göstermediği dermatolojik olarak doğrulanmıştır.",
    image: "/certificates/dermatolojik-test-cover.jpg",
    detailLink: "/certificates/dermatolojik-test-raporu.pdf"
  },
  {
    id: 8,
    title: "Marka Tescil Belgesi",
    product: "PediZone",
    lab: "Türk Patent ve Marka Kurumu",
    date: "10.10.2025",
    reportNo: "2025 081363",
    status: "Onaylandı",
    statusColor: "bg-green-100 text-green-700",
    description: "PediZone markası, 6769 sayılı Sınai Mülkiyet Kanunu kapsamında 26.06.2025 tarihinden itibaren 10 yıl süreyle korunmak üzere tescil edilmiştir.",
    image: "/certificates/pedizone-trademark.jpg",
    detailLink: "/certificates/pedizone-trademark.jpg"
  }
];

const Certificates = () => {
  // WebPage Schema for Certificates page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sertifikalarımız - PediZone",
    "description": "PediZone® ürünlerinin test sonuçları, kalite belgeleri ve sertifikaları",
    "url": "https://pedizone.com/sertifikalar",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Ana Sayfa",
          "item": "https://pedizone.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Sertifikalar"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* WebPage Schema */}
      <script type="application/ld+json">
        {JSON.stringify(webPageSchema)}
      </script>
      {/* Hero Section - Beyaz arka plan */}
      <section className="pt-32 pb-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sertifikalarımız</h1>
            <p className="text-xl text-gray-600">Test Sonuçları ve Kalite Belgeleri</p>
          </div>
        </div>
      </section>

      {/* Sertifikalar Grid */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <Card key={cert.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200">
                <CardContent className="p-0">
                  {/* Resim */}
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-56 object-cover"
                    />
                    <Badge className={`absolute top-4 left-4 ${cert.statusColor} font-semibold`}>
                      {cert.status}
                    </Badge>
                  </div>
                  
                  {/* İçerik */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.title}</h3>
                    <p className="text-sm text-red-600 font-medium mb-4">{cert.product}</p>
                    
                    {/* Detaylar */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                        {cert.lab}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                        {cert.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Hash className="w-4 h-4 mr-2 text-gray-400" />
                        {cert.reportNo}
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-6 line-clamp-3">{cert.description}</p>
                    
                    {/* Detaylar Butonu */}
                    <a 
                      href={cert.detailLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                        Detaylar
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Güvenilir Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Neden PediZone® Güvenilir?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FlaskConical className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bağımsız Laboratuvar Testleri</h3>
              <p className="text-gray-600">Tüm ürünlerimiz akredite laboratuvarlarda kapsamlı testlerden geçirilir.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Podolog Onaylı</h3>
              <p className="text-gray-600">Podoloji uzmanları tarafından önerilen ve güvenle kullanılan formüller.</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Şeffaf Raporlama</h3>
              <p className="text-gray-600">Tüm test sonuçlarımızı şeffaflık ilkesiyle müşterilerimizle paylaşırız.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bilimsel Kanıtlarla Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FlaskConical className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Bilimsel Kanıtlarla Desteklenen Kalite</h2>
                  <p className="text-gray-600 leading-relaxed">
                    PediZone® ürünleri, bağımsız laboratuvarlar tarafından gerçekleştirilen kapsamlı testlerle güvenlik ve etkinlik açısından doğrulanmıştır. Podologların güvenle tavsiye ettiği ürünlerimizin arkasında bilimsel kanıtlar bulunmaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
