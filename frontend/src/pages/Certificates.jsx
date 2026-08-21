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
    detailLink: "/certificates/pedizone-marka-tescil-belgesi.webp"
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

      {/* Klinik Test Sonuçları */}
      <section id="klinik-test-sonuclari" className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-rose-500 text-white p-8 md:p-12 shadow-xl mb-8">
              <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full bg-white/10" />
              <div className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full bg-black/10" />
              <div className="relative flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/25 px-4 py-2 text-sm font-semibold mb-5">
                    <FlaskConical className="w-4 h-4" />
                    Bağımsız dermatolojik değerlendirme
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Klinik Test Sonuçları</h2>
                  <p className="text-red-50 text-base md:text-lg leading-relaxed">
                    PediZone® kalite yaklaşımının bir parçası olarak gerçekleştirilen klinik test sonuçlarını, kapsamı ve sınırlarıyla birlikte şeffaf biçimde paylaşıyoruz.
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl bg-white/10 border border-white/20 px-6 py-5 md:min-w-52">
                  <p className="text-xs uppercase tracking-wider text-red-100 mb-2">Değerlendirme</p>
                  <p className="text-2xl font-bold">Non-irritating</p>
                  <p className="text-sm text-red-100 mt-1">Tahriş edici değil</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-6">
              <article className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-red-600 font-bold">Test künyesi</p>
                    <h3 className="text-xl font-bold text-gray-900">Ürün Bilgisi</h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <p className="text-xs text-gray-500 mb-1">Ürün adı</p>
                    <p className="font-semibold text-gray-900">PediZone</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <p className="text-xs text-gray-500 mb-1">Testi gerçekleştiren kurum</p>
                    <p className="font-semibold text-gray-900">SKINLAB P.S.A. (Kraków, Polonya)</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <p className="text-xs text-gray-500 mb-1">Test tarihi</p>
                    <p className="font-semibold text-gray-900">14–22 Ekim 2025</p>
                  </div>
                  <div className="rounded-xl bg-gray-50 border border-gray-100 p-4">
                    <p className="text-xs text-gray-500 mb-1">Katılımcı sayısı</p>
                    <p className="font-semibold text-gray-900">10 gönüllü (normal cilt tipi)</p>
                  </div>
                </div>
              </article>

              <article className="bg-gray-900 rounded-2xl p-6 md:p-8 text-white shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Shield className="w-5 h-5 text-red-300" />
                </div>
                <p className="text-xs uppercase tracking-wider text-red-300 font-bold mb-2">Testin odağı</p>
                <h3 className="text-xl font-bold mb-4">Cilt toleransı</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Bu değerlendirme, ürünün tek seferlik uygulama sonrasında cilt tarafından nasıl tolere edildiğini inceleyen bir irritasyon/yama testidir.
                </p>
              </article>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-6">
              <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Test Metodolojisi</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  Test, dermatolog gözetiminde SKINLAB P.S.A. tarafından Jadassohn-Bloch patch test (Rudzki modifikasyonu) yöntemiyle uygulanmıştır. Ürün tek seferlik olarak cilde sürülmüş ve 48 saat boyunca gözlemlenmiştir.
                </p>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-5 space-y-3 text-sm">
                  <p><strong className="text-gray-900">Parametreler:</strong> <span className="text-gray-600">Erythema (kızarıklık), Edema (şişlik)</span></p>
                  <p><strong className="text-gray-900">Değerlendirme:</strong> <span className="text-gray-600">0–4 puan skalası</span></p>
                </div>
              </article>

              <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sonuçlar</h3>
                </div>
                <div className="space-y-3 mb-5">
                  <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /><p className="text-gray-700">Tüm gönüllülerde reaksiyon puanı: <strong>0</strong></p></div>
                  <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /><p className="text-gray-700">Ortalama irritasyon indeksi: <strong>Xsr = 0</strong></p></div>
                  <div className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-600 mt-0.5 shrink-0" /><p className="text-gray-700"><strong>Sınıflandırma:</strong> Non-irritating (Tahriş edici değil)</p></div>
                </div>
                <p className="text-gray-600 leading-relaxed">Ürün, bu test koşullarında cilt tarafından iyi tolere edilmiştir ve irritan özellik göstermemiştir.</p>
              </article>
            </div>

            <article className="bg-amber-50 border border-amber-200 rounded-2xl p-6 md:p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Bu test neyi destekler?</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Bu test, ürünün test edilen koşullarda dermatolojik olarak iyi tolere edildiğini ve tahriş edici olmadığını destekler.
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Test, ürünün etkinliği (örneğin nemlendirme veya çatlak görünümünü iyileştirme) üzerine veri sunmaz. Sonuçlar 10 gönüllü ve tek seferlik uygulama ile sınırlıdır; kişisel cilt tepkileri farklılık gösterebilir.
                  </p>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                      <FileCheck className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Orijinal Test Raporu</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-5">Test raporunun ayrıntılarını ve yöntem bilgisini orijinal belge üzerinden inceleyebilirsiniz.</p>
                  <a href="/certificates/dermatolojik-test-raporu.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-3 transition-colors">
                    PDF raporunu görüntüle
                  </a>
                </div>
                <div className="w-full lg:w-80 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <img src="/certificates/pedizone-klinik-test-sonuclari-seo.png" alt="PediZone klinik test sonuçları" className="w-full h-48 object-cover" loading="lazy" />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
