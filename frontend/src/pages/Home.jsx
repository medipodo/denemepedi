import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, ShieldCheck, FlaskConical, Store, Check } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { products, siteInfo, blogPosts } from '../mock';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import LocalizedLink from '../components/LocalizedLink';

// Import hero product images - pedizone.com ile aynı
import productSerum from '../assets/pedizone-serum-new.jpg';
import productFoam from '../assets/pedizone-foot-foam-new.jpg';
import productCream from '../assets/pedizone-catlaktopuk-kremi.jpg';

// Kırmızı marker ikonu
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Bayi verileri
const dealers = [
  { id: 1, name: "Medipodo Podoloji Merkezi", city: "Ankara", address: "Bağlıca Mah. Mert Cad. No:4/2 Etimesgut", phone: "+90 545 656 9747", lat: 39.9334, lng: 32.8597 },
  { id: 2, name: "Podosis Ayak Bakım Merkezi", city: "Ankara", address: "Atakent Mah 1512 cad, ELVANKENT 104/D", phone: "+90 543 543 0082", lat: 39.9667, lng: 32.6833 },
  { id: 3, name: "OrtoMek Ortez-Protez Merkezi", city: "Ankara", address: "Işınlar Mah. Ragıp Tüzün Cad. No 15/B", phone: "+90 534 729 0182", lat: 39.9727, lng: 32.8237 },
  { id: 4, name: "Anka Eczanesi", city: "Ankara", address: "Maltepe, Gazi Mustafa Kemal Blv. 47/A", phone: "0312 229 2898", lat: 39.9208, lng: 32.8541 },
  { id: 5, name: "Bağlıca Merkez Eczanesi", city: "Ankara", address: "Yeni Bağlıca Mah. Bağlıca Bulvarı No 48/CA", phone: "05396430123", lat: 39.8833, lng: 32.6500 },
  { id: 6, name: "Damla Eczanesi", city: "Antalya", address: "Şirinyalı Mah. Tekelioğlu Cad. No18/A", phone: "0242 324 3491", lat: 36.8550, lng: 30.7800 },
  { id: 7, name: "Medpark Konya", city: "Konya", address: "Konevi, Sait Paşa Cd No:9/1-2-3-4", phone: "0530 511 2442", lat: 37.8667, lng: 32.4833 },
  { id: 8, name: "Hacer Aslan", city: "Kocaeli", address: "Alikahya Fatih, Uğur Mumcu Cd.", phone: "0507 238 9414", lat: 40.7667, lng: 29.9167 },
  { id: 9, name: "Yaşare KADER", city: "Antalya", address: "Hurma, 254. Sk. No:11 / B", phone: "0505 215 0028", lat: 36.8833, lng: 30.6333 },
  { id: 10, name: "Hanife Karataş", city: "Bursa", address: "Orhaniye, D200 125-126", phone: "0542 617 9865", lat: 40.0833, lng: 29.5167 },
  { id: 11, name: "Podolara", city: "Bitlis", address: "Saray, Cumhuriyet Cd. Kat: 2 No: 2", phone: "05427180713", lat: 38.5000, lng: 42.2833 },
  { id: 12, name: "Kıvanç Eczanesi", city: "Niğde", address: "Ahmet Kuddusi, Doğan Baran Cd. No: 72/A", phone: "03883130201", lat: 37.8833, lng: 34.5500 },
  { id: 13, name: "Podolog Gamze Betül Başaran", city: "Tokat", address: "Pazar Mah. Kayra Sok. Turhal", phone: "0552 873 1407", lat: 40.385326, lng: 36.0729861 }
];

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToProducts = () => {
    document.getElementById('urunler')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`İletişim Formu - ${formData.name}`);
    const body = encodeURIComponent(`Ad Soyad: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - pedizone.com gibi */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 via-white to-red-50 min-h-[85vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Sol Taraf - Metin */}
            <div className="space-y-6">
              <Badge className="bg-red-100 text-red-700 px-4 py-2 text-sm font-medium">
                🏆 Podologların Tavsiyesi
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Profesyonel Ayak Bakım Çözümleri
              </h1>
              
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-red-600">
                Pedizone<span style={{ fontSize: '0.5em', verticalAlign: 'super' }}>®</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {siteInfo.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToProducts} 
                  className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg rounded-full"
                >
                  Ürünleri Keşfedin <ArrowRight className="ml-2" size={20} />
                </Button>
                <a href={`tel:${siteInfo.phoneLink}`}>
                  <Button 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg rounded-full w-full"
                  >
                    Uzman Desteği
                  </Button>
                </a>
              </div>

              {/* Trust Badges - pedizone.com ile birebir aynı */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                {/* Üst satır: Podolog Onaylı + Klinik Testli yan yana */}
                <div className="flex flex-row gap-3">
                  {/* Podolog Onaylı - Yeşil */}
                  <div className="flex items-center space-x-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Podolog Onaylı</p>
                      <p className="text-xs text-gray-500">Uzman Tavsiyesi</p>
                    </div>
                  </div>
                  
                  {/* Klinik Testli - Mavi */}
                  <div className="flex items-center space-x-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm">Klinik Testli</p>
                      <p className="text-xs text-gray-500">Güvenli Formül</p>
                    </div>
                  </div>
                </div>
                
                {/* Seçili Eczanelerde - Pembe daire içinde E logosu */}
                <div className="flex items-center space-x-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 shadow-sm">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    {/* Türk Eczane E Logosu - beyaz arka plan, kırmızı çerçeve, büyük kalın E */}
                    <div className="w-7 h-8 bg-white border-2 border-red-600 flex items-center justify-center">
                      <span className="text-red-600 font-black text-3xl leading-none">E</span>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">Seçili Eczanelerde</p>
                    <p className="text-xs text-gray-500">Güvenli Satış</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sağ Taraf - 3'lü Ürün Görseli (pedizone.com gibi) */}
            <div className="relative flex justify-center items-center">
              <div className="flex items-end justify-center gap-2 md:gap-4 lg:gap-6">
                {/* Sol Ürün - Serum */}
                <LocalizedLink to="/urun/foot-nail-care-serum" className="transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img 
                    src={productSerum} 
                    alt="PediZone Serum" 
                    className="h-48 sm:h-56 md:h-64 lg:h-80 object-contain drop-shadow-2xl rounded-none"
                    style={{ borderRadius: 0 }}
                  />
                </LocalizedLink>
                
                {/* Orta Ürün - Köpük (Öne Çıkan) */}
                <LocalizedLink to="/urun/temizleme-kopugu" className="transform hover:scale-105 transition-transform duration-300 -mt-4 md:-mt-8 cursor-pointer">
                  <img 
                    src={productFoam} 
                    alt="PediZone Köpük" 
                    className="h-56 sm:h-64 md:h-72 lg:h-96 object-contain drop-shadow-2xl rounded-none"
                    style={{ borderRadius: 0 }}
                  />
                </LocalizedLink>
                
                {/* Sağ Ürün - Krem */}
                <LocalizedLink to="/urun/ureli-krem" className="transform hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img 
                    src={productCream} 
                    alt="PediZone Krem" 
                    className="h-48 sm:h-56 md:h-64 lg:h-80 object-contain drop-shadow-2xl rounded-none"
                    style={{ borderRadius: 0 }}
                  />
                </LocalizedLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - pedizone.com gibi */}
      <section id="urunler" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">ÜRÜNLER</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ürün Portföyümüz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Her ayak sorunu için özel olarak geliştirilmiş çözümler</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden group cursor-pointer border border-gray-100 hover:shadow-2xl transition-all duration-300 max-w-sm mx-auto w-full">
                {/* Görsel - hover'da yaklaşma efekti */}
                <LocalizedLink to={`/urun/${product.id}`} className="block relative overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 right-4 bg-red-600 text-white font-medium px-3 py-1">
                      {product.badge}
                    </Badge>
                  )}
                </LocalizedLink>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <LocalizedLink to={`/urun/${product.id}`}>
                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg">
                      Detayları İncele
                    </Button>
                  </LocalizedLink>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hangi Ürün Size Uygun? - Quiz CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Ayak İkonu - sadece emoji, 2x büyük */}
            <div className="flex justify-center mb-6">
              <span className="text-8xl md:text-9xl animate-bounce">🦶</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hangi Ürün Size Uygun?
            </h2>
            
            <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              6 basit soruyla ayak sağlığınızı analiz edin ve podologunuzla danışarak size özel PediZone® ürün önerisi alın.
            </p>
            
            <LocalizedLink to="/ayak-analizi">
              <Button className="bg-white text-red-700 hover:bg-red-50 px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all">
                Ayaklarınızı Analiz Edin
              </Button>
            </LocalizedLink>
            
            {/* Alt bilgiler */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center space-x-2 text-red-100">
                <Check className="w-5 h-5 text-green-400" />
                <span>Üyeliksiz / 2 dakika</span>
              </div>
              <div className="flex items-center space-x-2 text-red-100">
                <Check className="w-5 h-5 text-green-400" />
                <span>Hızlı/Kolay Sonuç</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why PediZone Section - pedizone.com style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 italic">Neden PediZone®?</h2>
            <p className="text-lg text-gray-600">Ayak sağlığında güvenilir çözüm ortağınız</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { 
                title: 'Podologların Tavsiyesi', 
                desc: 'Tüm ürünlerimiz ayak sağlığı uzmanları tarafından test edilmiş ve onaylanmıştır.'
              },
              { 
                title: 'Klinik Testli', 
                desc: 'Laboratuvar ortamında yapılan testlerle etkinliği kanıtlanmış formüller.'
              },
              { 
                title: 'Doğal İçerikler', 
                desc: 'Doğal ve güvenli aktif bileşenlerle hazırlanmış, yan etki riski minimum.'
              },
              { 
                title: 'Uzman Desteği', 
                desc: '7/24 uzman ekibimizden destek alabilir, sorularınızı yanıtlayabilirsiniz.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-gray-300 transition-all duration-300">
                {/* Red Circle Icon with Checkmark */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* Outer red circle */}
                    <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                      {/* Inner white circle with red checkmark */}
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <svg className="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 italic">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foot Problems Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Ayak Sorunlarına Çözümler</h2>
            <p className="text-lg text-gray-600">Uzman ekibimizle geliştirilen podoloji ürünleri</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { 
                title: 'Tırnak ve Ayak Mantarları', 
                image: '/images/solutions/tirnak-mantar.jpg',
                link: '/blog/ayak-mantari-nedir'
              },
              { 
                title: 'Nasır ve Siğil', 
                image: '/images/solutions/nasir-sigil.jpg',
                link: '/blog'
              },
              { 
                title: 'Topuk Kalınlaşması', 
                image: '/images/solutions/topuk-kalinlasma.jpg',
                link: '/blog'
              },
              { 
                title: 'Kötü Koku Karşıtı', 
                image: '/images/solutions/koku-karsiti.jpg',
                link: '/blog/ayak-kokusu-nedenleri'
              }
            ].map((item, idx) => (
              <LocalizedLink key={idx} to={item.link} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 lg:p-5">
                    <h3 className="text-sm lg:text-base font-bold text-gray-900 group-hover:text-red-600 transition-colors text-center">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </LocalizedLink>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section - 6 blog 2 satır */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Blog Yazılarımız</h2>
            <p className="text-lg text-gray-600">Ayak sağlığı hakkında faydalı bilgiler</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 6).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} className="bg-red-100 text-red-700 text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <LocalizedLink to={`/blog/${post.slug}`}>
                    <Button variant="link" className="text-red-600 p-0">Devamını Oku <ArrowRight size={16} className="ml-1" /></Button>
                  </LocalizedLink>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <LocalizedLink to="/blog"><Button className="bg-red-600 hover:bg-red-700 text-white px-8">Tüm Yazılar</Button></LocalizedLink>
          </div>
        </div>
      </section>

      {/* Bayilerimiz Harita Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bayilerimiz</h2>
            <p className="text-lg text-gray-600">PediZone® ürünlerini alabileceğiniz yetkili satış noktalarımız</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 relative z-0">
              {/* Mobil için ayrı harita */}
              <div className="block lg:hidden">
                <MapContainer 
                  center={[39.0, 35.0]} 
                  zoom={3.5} 
                  style={{ height: '350px', width: '100%', zIndex: 0 }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {dealers.map((dealer) => (
                    <Marker 
                      key={dealer.id} 
                      position={[dealer.lat, dealer.lng]}
                      icon={redIcon}
                    >
                      <Popup>
                        <div className="min-w-[200px] p-2">
                          <h3 className="font-bold text-gray-900 mb-2">{dealer.name}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{dealer.address}, {dealer.city}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-red-600">
                                {dealer.phone}
                              </a>
                            </div>
                            <a 
                              href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 mt-3 bg-red-600 hover:bg-red-700 !text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              <MapPin className="w-4 h-4 text-white" />
                              Yol Tarifi Al
                            </a>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              
              {/* Masaüstü için ayrı harita */}
              <div className="hidden lg:block">
                <MapContainer 
                  center={[39.0, 35.0]} 
                  zoom={5.5} 
                  style={{ height: '540px', width: '100%', zIndex: 0 }}
                  scrollWheelZoom={false}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {dealers.map((dealer) => (
                    <Marker 
                      key={dealer.id} 
                      position={[dealer.lat, dealer.lng]}
                      icon={redIcon}
                    >
                      <Popup>
                        <div className="min-w-[200px] p-2">
                          <h3 className="font-bold text-gray-900 mb-2">{dealer.name}</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{dealer.address}, {dealer.city}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                              <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-red-600">
                                {dealer.phone}
                              </a>
                            </div>
                            <a 
                              href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 mt-3 bg-red-600 hover:bg-red-700 !text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            >
                              <MapPin className="w-4 h-4 text-white" />
                              Yol Tarifi Al
                            </a>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            </div>
            
            <div className="text-center mt-6 mb-0">
              <LocalizedLink to="/bayiler">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
                  Tüm Satış Noktalarını Görüntüle
                </Button>
              </LocalizedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="pt-8 pb-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
            <p className="text-lg text-gray-600">Sorularınız için buradayız</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              {/* Telefon */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-[#E53935] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-[#FFECEE] rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                  <a href={`tel:${siteInfo.phoneLink}`} className="text-red-600 hover:text-red-700 font-medium">{siteInfo.phone}</a>
                </div>
              </div>

              {/* E-posta */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-[#1976D2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-[#E3F2FD] rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                  <a href={`mailto:${siteInfo.email}`} className="text-blue-600 hover:text-blue-700 font-medium">{siteInfo.email}</a>
                </div>
              </div>

              {/* Adres */}
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 bg-[#E8F5E9] rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                  <p className="text-gray-600">Ankara / Turkey</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bize Ulaşın</h3>
                <div className="space-y-4">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Adınız" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500" />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="E-posta adresiniz" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500" />
                  <textarea name="message" value={formData.message} onChange={handleInputChange} rows="4" placeholder="Mesajınız" className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"></textarea>
                  <Button onClick={handleSubmit} className="w-full bg-red-600 hover:bg-red-700 text-white">Mesaj Gönder</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
