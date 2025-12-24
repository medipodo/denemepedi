import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { MapPin, Phone, Mail, Navigation, MessageCircle } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import Header from './Header'
import Footer from './Footer'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import dealersData from '../data/dealers.json'

// Fix for default marker icon in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Custom red marker icon for PediZone dealers
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

const DealersMap = () => {
  const [selectedDealer, setSelectedDealer] = useState(null)
  const [currentLang, setCurrentLang] = useState('tr')
  const dealers = dealersData.dealers.filter(d => d.isActive)

  // Turkey center coordinates
  const turkeyCenter = [39.0, 35.0]
  const defaultZoom = 6

  const handleDealerClick = (dealer) => {
    setSelectedDealer(dealer)
  }

  const openGoogleMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank')
  }

  return (
    <>
      <Header currentLang={currentLang} setCurrentLang={setCurrentLang} showBackButton={true} />
      
      <div className="min-h-screen bg-gray-50" style={{position: 'relative', zIndex: 1}}>
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-16">
        <div className="pedizone-container">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="w-12 h-12 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold pedizone-heading">
              Satış Noktalarımız
            </h1>
          </div>
          <p className="text-center text-xl text-red-100 max-w-2xl mx-auto">
            PediZone® ürünlerini alabileceğiniz yetkili satış noktalarımız
          </p>
        </div>
      </div>

      <div className="pedizone-container py-12">
        {/* Map Section - Top */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            Satış Noktalarımız Haritası
          </h2>
          <div className="w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white" style={{ height: '600px' }}>
            <MapContainer
              center={turkeyCenter}
              zoom={defaultZoom}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {dealers.map((dealer) => (
                <Marker
                  key={dealer.id}
                  position={[dealer.lat, dealer.lng]}
                  icon={redIcon}
                  eventHandlers={{
                    click: () => handleDealerClick(dealer),
                  }}
                >
                  <Popup>
                    <div className="p-2 min-w-[250px]">
                      <h3 className="font-bold text-lg text-red-600 mb-2">
                        {dealer.name}
                      </h3>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>{dealer.city}</strong>
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        {dealer.address}
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${dealer.phone}`} className="hover:text-red-600">
                            {dealer.phone}
                          </a>
                        </div>
                        {dealer.email && (
                          <div className="flex items-center text-sm text-gray-600">
                            <Mail className="w-4 h-4 mr-2" />
                            <a href={`mailto:${dealer.email}`} className="hover:text-red-600">
                              {dealer.email}
                            </a>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => openGoogleMaps(dealer.lat, dealer.lng)}
                        className="mt-3 w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
                      >
                        <Navigation className="w-4 h-4" />
                        Yol Tarifi Al
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>

        {/* Dealers Grid - Bottom */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Tüm Satış Noktalarımız ({dealers.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dealers.map((dealer) => (
              <Card 
                key={dealer.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-gray-100 hover:border-red-300"
                onClick={() => {
                  setSelectedDealer(dealer)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-red-600 transition-colors">
                      <MapPin className="w-6 h-6 text-red-600 group-hover:text-white transition-colors" />
                    </div>
                    <div className="ml-3 flex-1">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-red-600 transition-colors">
                        {dealer.name}
                      </h3>
                      <p className="text-sm font-semibold text-red-600 mt-1">
                        {dealer.city}
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-4 pb-4 border-b border-gray-100">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {dealer.address}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                      <a 
                        href={`tel:${dealer.phone}`} 
                        className="hover:text-red-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {dealer.phone}
                      </a>
                    </div>
                    {dealer.email && (
                      <div className="flex items-center text-sm text-gray-700">
                        <Mail className="w-4 h-4 mr-2 text-red-600 flex-shrink-0" />
                        <a 
                          href={`mailto:${dealer.email}`} 
                          className="hover:text-red-600 transition-colors truncate"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {dealer.email}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      openGoogleMaps(dealer.lat, dealer.lng)
                    }}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg"
                  >
                    <Navigation className="w-4 h-4" />
                    Yol Tarifi Al
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Dealer Application WhatsApp Button Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Bayilik Başvurusu</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Bayilik başvurusu için aşağıdaki butona tıklayarak WhatsApp üzerinden bizimle iletişime geçebilirsiniz.
          </p>
          <a 
            href="https://wa.me/905068860326?text=merhaba%20pedizone%20bayilik%20başvurusunda%20bulunmak%20istiyorum" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-green-500 hover:bg-green-600 transition-colors duration-200 transform hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Bayilik Başvurusunda Bulun
          </a>
        </div>

        {/* Instructions Section */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            💡 Nasıl Kullanırım?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Harita üzerindeki <strong className="text-red-600">kırmızı işaretlere</strong> tıklayarak bayi bilgilerini görün</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Sol taraftaki listeden bayileri seçerek haritada konumlarını görebilirsiniz</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span><strong>"Yol Tarifi Al"</strong> butonuna tıklayarak Google Maps'te yol tarifini alabilirsiniz</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2">•</span>
              <span>Telefon numaralarına dokunarak direkt arama yapabilirsiniz</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Ayak Analiz CTA */}
      <div className="py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800">
        <div className="pedizone-container text-center">
          <div className="mb-6">
            <span className="text-6xl inline-block animate-bounce">🦶</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Hangi Ürün Size Uygun?
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            6 basit soruyla ayak sağlığınızı analiz edin ve podologunuza danışarak size özel PediZone® ürün önerisi alın
          </p>
          <a href="/ayak-analizi">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-red-50 font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              🎯 Ayaklarınızı Analiz Edin
            </Button>
          </a>
          <p className="text-white/70 text-sm mt-4">
            ✓ Ücretsiz  ✓ 2 dakika  ✓ Kişiselleştirilmiş sonuç
          </p>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  )
}

export default DealersMap
