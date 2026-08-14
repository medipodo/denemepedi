import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { dealers } from '../data/dealers';
import { MapPin, Phone } from 'lucide-react';

const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapInvalidator = () => {
  const map = useMap();
  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);
    return () => clearTimeout(timer);
  }, [map]);
  return null;
};

const HomeDealerMap = () => {
  return (
    <>
      {/* Mobil için ayrı harita */}
      <div className="block lg:hidden">
        <MapContainer 
          center={[39.0, 35.0]} 
          zoom={4.5} 
          style={{ height: '350px', width: '100%', zIndex: 0 }}
          scrollWheelZoom={false}
        >
          <MapInvalidator />
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
      
      {/* Masaüstü için ayrı harita */}
      <div className="hidden lg:block">
        <MapContainer 
          center={[39.0, 35.0]} 
          zoom={5.5} 
          style={{ height: '540px', width: '100%', zIndex: 0 }}
          scrollWheelZoom={false}
        >
          <MapInvalidator />
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
    </>
  );
};

export default HomeDealerMap;
