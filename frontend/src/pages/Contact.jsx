import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { siteInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  // WebPage Schema for Contact page
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "İletişim - PediZone",
    "description": "PediZone® ile iletişime geçin. Sorularınız için telefon, e-posta veya iletişim formu ile bize ulaşabilirsiniz.",
    "url": "https://pedizone.com/iletisim",
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
          "name": "İletişim"
        }
      ]
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`İletişim Formu - ${formData.name}`);
    const body = encodeURIComponent(`Ad Soyad: ${formData.name}\nE-posta: ${formData.email}\nTelefon: ${formData.phone}\n\nMesaj:\n${formData.message}`);
    window.location.href = `mailto:${siteInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* WebPage Schema for SEO */}
      <Helmet>
        <title>İletişim - PediZone®</title>
        <meta name="description" content="PediZone® ile iletişime geçin. Sorularınız için telefon, e-posta veya iletişim formu ile bize ulaşabilirsiniz." />
        <link rel="canonical" href="https://pedizone.com/iletisim" />
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">İletişim</h1>
            <p className="text-lg text-gray-600">Sorularınız için bize ulaşın. Size en kısa sürede dönüş yapalım.</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#E53935] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 bg-[#FFECEE] rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Telefon</h3>
                      <a href={`tel:${siteInfo.phoneLink}`} className="text-red-600 hover:text-red-700 font-medium">{siteInfo.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#1976D2] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 bg-[#E3F2FD] rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">E-posta</h3>
                      <a href={`mailto:${siteInfo.email}`} className="text-blue-600 hover:text-blue-700 font-medium">{siteInfo.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 bg-[#E8F5E9] rounded-xl p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">Adres</h3>
                      <p className="text-gray-600">{siteInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Hızlı İletişim</h3>
                  <p className="text-gray-600 mb-4">WhatsApp üzerinden anında ulaşabilirsiniz.</p>
                  <a 
                    href="https://wa.me/905068860326?text=Merhaba%20Pedizone%20Ürünleri%20Hakkında%20Bilgi%20Almak%20İstiyorum" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">WhatsApp ile Yazın</Button>
                  </a>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">İletişim Formu</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mesaj *</label>
                    <textarea name="message" required rows="4" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500"></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3">Mesaj Gönder</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
