import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Globe, Search } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Kırmızı marker ikonu oluştur
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Dealers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Gerçek satış noktaları verileri (koordinatlarla)
  const dealers = [
    {
      id: 1,
      name: "Medipodo Podoloji Merkezi",
      city: "Ankara",
      address: "Bağlıca Mah. Mert Cad. No 4/2 3. Noter Karşısı Etimesgut",
      phone: "+90 545 656 9747",
      email: "medipodotr@gmail.com",
      type: "Podoloji Merkezi",
      featured: false,
      lat: 39.9334,
      lng: 32.8597
    },
    {
      id: 2,
      name: "Podosis Ayak Bakım Merkezi",
      city: "Ankara",
      address: "Atakent Mah 1512 cad, ELVANKENT 104/D, 06796 Etimesgut",
      phone: "+90 543 543 0082",
      type: "Ayak Bakım Merkezi",
      lat: 39.9667,
      lng: 32.6833
    },
    {
      id: 3,
      name: "OrtoMek Ortez-Protez Uygulama Merkezi",
      city: "Ankara",
      address: "Işınlar Mah. Ragıp Tüzün Cad. No 15/B Yenimahalle",
      phone: "+90 534 729 0182",
      email: "info@ortomek.com",
      type: "Ortez-Protez Merkezi",
      lat: 39.9727,
      lng: 32.8237
    },
    {
      id: 4,
      name: "Anka Eczanesi",
      city: "Ankara",
      address: "Maltepe, Gazi Mustafa Kemal Blv. 47/A, 06570 Çankaya",
      phone: "0312 229 2898",
      type: "Eczane",
      lat: 39.9208,
      lng: 32.8541
    },
    {
      id: 5,
      name: "Bağlıca Merkez Eczanesi",
      city: "Ankara",
      address: "Yeni Bağlıca Mah. Bağlıca Bulvarı No 48/CA (Total Benzinlik Karşısı)",
      phone: "05396430123",
      type: "Eczane",
      lat: 39.8833,
      lng: 32.6500
    },
    {
      id: 6,
      name: "Damla Eczanesi",
      city: "Antalya",
      address: "Şirinyalı Mah. Tekelioğlu Cad. No18/A Medicalpark Hastanesi Karşısı Lara",
      phone: "0242 324 3491",
      email: "eibisoglu@hotmail.com",
      type: "Eczane",
      lat: 36.8550,
      lng: 30.7800
    },
    {
      id: 7,
      name: "Medpark Konya Tırnak Batması Ayak Sağlığı Merkezi",
      city: "Konya",
      address: "Konevi, Sait Paşa Cd No:9/1-2-3-4, 42040 Meram",
      phone: "0530 511 2442",
      web: "https://www.medparkkonya.com/",
      type: "Ayak Sağlığı Merkezi",
      lat: 37.8667,
      lng: 32.4833
    },
    {
      id: 8,
      name: "Hacer Aslan",
      city: "Kocaeli",
      address: "Alikahya Fatih, Uğur Mumcu Cd., 41310 İzmit/Kocaeli",
      phone: "0507 238 9414",
      type: "Podolog",
      lat: 40.7667,
      lng: 29.9167
    },
    {
      id: 9,
      name: "Yaşare KADER",
      city: "Antalya",
      address: "Hurma, 254. Sk. No:11 / B, 07130 Konyaaltı",
      phone: "0505 215 0028",
      type: "Podolog",
      lat: 36.8833,
      lng: 30.6333
    },
    {
      id: 10,
      name: "Hanife Karataş",
      city: "Bursa",
      address: "Orhaniye, D200 125-126, 16400 İnegöl",
      phone: "0542 617 9865",
      type: "Podolog",
      lat: 40.0833,
      lng: 29.5167
    },
    {
      id: 11,
      name: "Podolara El ve Ayak Bakım Merkezi",
      city: "Bitlis",
      address: "Halk Bankası Karşısı, Saray, Cumhuriyet Cd. Kat: 2 No: 2, 13200 Tatvan/Bitlis",
      phone: "05427180713",
      web: "https://podolara.com/",
      type: "Ayak Bakım Merkezi",
      lat: 38.5000,
      lng: 42.2833
    },
    {
      id: 12,
      name: "Kıvanç Eczanesi",
      city: "Niğde",
      address: "Ahmet Kuddusi, Doğan Baran Cd. No: 72/A, 51700 Bor/Niğde",
      phone: "03883130201",
      type: "Eczane",
      lat: 37.8833,
      lng: 34.5500
    },
    {
      id: 13,
      name: "Podolog Gamze Betül Başaran",
      city: "Tokat",
      address: "Pazar Mah. Kayra Sok. Turhal",
      phone: "0552 873 1407",
      email: "gamzebetulb@gmail.com",
      type: "Podolog",
      lat: 40.385326,
      lng: 36.0729861
    }
  ];

  // Arama filtresi
  const filteredDealers = searchTerm 
    ? dealers.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        d.type.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : dealers;

  const getTypeColor = (type) => {
    switch(type) {
      case 'Podoloji Merkezi': return 'bg-red-100 text-red-700';
      case 'Ayak Bakım Merkezi': return 'bg-blue-100 text-blue-700';
      case 'Ayak Sağlığı Merkezi': return 'bg-blue-100 text-blue-700';
      case 'Eczane': return 'bg-green-100 text-green-700';
      case 'Podolog': return 'bg-purple-100 text-purple-700';
      case 'Ortez-Protez Merkezi': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  // WebPage Schema for Dealers page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Satış Noktalarımız - PediZone",
    "description": "PediZone® ürünlerini alabileceğiniz yetkili satış noktaları, bayiler ve podoloji merkezleri",
    "url": "https://pedizone.com/bayiler",
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
          "name": "Bayiler"
        }
      ]
    }
  };

  // Türkiye merkez koordinatları
  const turkeyCenter = [39.0, 35.0];

  return (
    <div className="min-h-screen">
      {/* WebPage Schema for SEO */}
      <Helmet>
        <title>Satış Noktalarımız - PediZone® Yetkili Bayiler</title>
        <meta name="description" content="PediZone® ürünlerini alabileceğiniz yetkili satış noktaları, bayiler ve podoloji merkezleri. Türkiye genelinde eczane ve podoloji merkezlerinde." />
        <link rel="canonical" href="https://pedizone.com/bayiler" />
        
        {/* Open Graph */}
        <meta property="og:site_name" content="PediZone®" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Satış Noktalarımız - PediZone® Yetkili Bayiler" />
        <meta property="og:description" content="PediZone® ürünlerini alabileceğiniz yetkili satış noktaları. Türkiye genelinde eczane ve podoloji merkezlerinde." />
        <meta property="og:url" content="https://pedizone.com/bayiler" />
        <meta property="og:image" content="https://pedizone.com/pedizone-og-home-v2.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero Section - Beyaz arka plan */}
      <section className="pt-24 pb-3 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <MapPin className="w-16 h-16 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">Satış Noktalarımız</h1>
            <p className="text-xl text-gray-600">
              PediZone® ürünlerini alabilceğiniz yetkili satış noktalarımız
            </p>
          </div>
        </div>
      </section>

      {/* Map Section - z-index düşürüldü */}
      <section className="py-3 bg-white relative z-0">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <MapContainer 
              center={turkeyCenter} 
              zoom={5} 
              style={{ height: '400px', width: '100%', zIndex: 0 }}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {filteredDealers.map((dealer) => (
                <Marker 
                  key={dealer.id} 
                  position={[dealer.lat, dealer.lng]}
                  icon={redIcon}
                >
                  <Popup>
                    <div className="min-w-[200px] p-2">
                      <h3 className="font-bold text-gray-900 mb-2">{dealer.name}</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-xs text-gray-500">{dealer.type}</p>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">{dealer.address}</p>
                        </div>
                        {dealer.phone && (
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                            <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-gray-700 hover:text-red-600">
                              {dealer.phone}
                            </a>
                          </div>
                        )}
                        <a 
                          href={`https://www.google.com/maps/dir/?api=1&destination=${dealer.lat},${dealer.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          <MapPin className="w-4 h-4" />
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
      </section>

      {/* Search */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Bayi adı, şehir veya adres ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-red-500 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dealers List */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDealers.map((dealer) => (
              <Card key={dealer.id} className={`hover:shadow-lg transition-shadow ${dealer.featured ? 'border-2 border-red-500 ring-2 ring-red-100' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{dealer.name}</h3>
                      <div className="flex gap-2 mt-2">
                        <Badge className={getTypeColor(dealer.type)}>{dealer.type}</Badge>
                        <Badge className="bg-gray-100 text-gray-700">{dealer.city}</Badge>
                      </div>
                    </div>
                    {dealer.featured && (
                      <Badge className="bg-red-600 text-white">Ana Merkez</Badge>
                    )}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{dealer.address}</span>
                    </div>
                    
                    {dealer.phone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <a href={`tel:${dealer.phone.replace(/\s/g, '')}`} className="text-gray-600 text-sm hover:text-red-600">
                          {dealer.phone}
                        </a>
                      </div>
                    )}
                    
                    {dealer.email && (
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <a href={`mailto:${dealer.email}`} className="text-gray-600 text-sm hover:text-red-600">
                          {dealer.email}
                        </a>
                      </div>
                    )}
                    
                    {dealer.web && (
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <a href={dealer.web} target="_blank" rel="noopener noreferrer" className="text-gray-600 text-sm hover:text-red-600">
                          Web Sitesi
                        </a>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bayi Olmak İster Misiniz?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">
            PediZone® ürünlerini satışa sunmak ve yetkili bayi olmak için bizimle iletişime geçin.
          </p>
          <a 
            href="mailto:info@pedizone.com?subject=Bayi%20Başvurusu" 
            className="inline-flex items-center bg-white text-red-600 hover:bg-red-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Bayi Başvurusu Yap
          </a>
        </div>
      </section>
    </div>
  );
};

export default Dealers;
