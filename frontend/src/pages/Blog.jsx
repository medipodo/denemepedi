import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../blog_content'; // ❗ MOCK DEĞİL
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';

const Blog = () => {
  const { currentLang } = useLanguage();

  // ✅ TEK SATIR, TÜM SORUNU ÇÖZÜYOR
  const posts = blogPosts.filter(p => p.lang === currentLang);

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            PediZone Blog
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Card key={post.id}>
                <CardContent className="p-0">

                  {/* GÖRSEL */}
                  {post.image && (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}

                  <div className="p-6">
                    <div className="flex gap-2 mb-2">
                      {post.tags?.slice(0,2).map(tag => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>

                    <h2 className="text-xl font-bold mb-2">
                      {post.title}
                    </h2>

                    <div className="flex text-sm text-gray-500 mb-3">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                      <Clock size={14} className="ml-3 mr-1" />
                      {post.readTime}
                    </div>

                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>

                    <LocalizedLink to={`/blog/${post.slug}`}>
                      <Button variant="link">
                        Devamını Oku <ArrowRight size={16} />
                      </Button>
                    </LocalizedLink>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
