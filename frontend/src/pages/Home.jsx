import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import LocalizedLink from '../components/LocalizedLink';

import { products, siteInfo } from '../mock';
import { blogPosts } from '../blog_content'; // ✅ TEK KAYNAK

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  /* ===============================
     ✅ SADECE TÜRKÇE BLOG PREVIEW
  =============================== */
  const trBlogPosts = blogPosts
    .filter(post => post.lang === 'tr')
    .slice(0, 6);

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

                  {/* 🔥 KRİTİK FIX */}
                  <LocalizedLink to={`/tr/blog/${post.slug}`}>
                    <Button variant="link" className="text-red-600 p-0">
                      Devamını Oku <ArrowRight size={16} className="ml-1" />
                    </Button>
                  </LocalizedLink>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <LocalizedLink to="/tr/blog">
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
