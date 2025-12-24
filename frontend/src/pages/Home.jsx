import React, { useState } from 'react';
import {
  CheckCircle, ArrowRight, Phone, Mail, MapPin, Check
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import LocalizedLink from '../components/LocalizedLink';

import { products, siteInfo } from '../mock';
import { blogPosts } from '../blog_content'; // ✅ TEK DOĞRU KAYNAK

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// ürün görselleri
import productSerum from '../assets/pedizone-serum-new.jpg';
import productFoam from '../assets/pedizone-foot-foam-new.jpg';
import productCream from '../assets/pedizone-catlaktopuk-kremi.jpg';

// leaflet icon fix
const redIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  /* ===============================
     ✅ SADECE TÜRKÇE BLOG PREVIEW
     =============================== */
  const trBlogPosts = blogPosts
    .filter(post => post.lang === 'tr')
    .slice(0, 6);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
  };

  return (
    <div className="min-h-screen">

      {/* ================= BLOG PREVIEW ================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Blog Yazılarımız
            </h2>
            <p className="text-lg text-gray-600">
              Ayak sağlığı hakkında faydalı bilgiler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trBlogPosts.map(post => (
              <Card
                key={post.id}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* GÖRSEL VARSA GÖSTER */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                )}

                <CardContent className="p-6">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {post.tags?.slice(0, 2).map(tag => (
                      <Badge
                        key={tag}
                        className="bg-red-100 text-red-700 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <LocalizedLink to={`/blog/${post.slug}`}>
                    <Button variant="link" className="text-red-600 p-0">
                      Devamını Oku <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </LocalizedLink>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <LocalizedLink to="/blog">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
                Tüm Yazılar
              </Button>
            </LocalizedLink>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
