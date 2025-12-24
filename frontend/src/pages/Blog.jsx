import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../blog_content';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';

const Blog = () => {
  const { currentLang } = useLanguage();

  const posts = blogPosts.filter(
    post => post.lang === currentLang
  );

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">PediZone Blog</h1>
          <p className="text-gray-600">
            Ayak sağlığı hakkında faydalı bilgiler
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Card key={post.id}>
              <CardContent className="p-0">
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="flex gap-2 mb-2">
                    {post.tags?.slice(0, 2).map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <h2 className="font-bold text-lg mb-2">
                    {post.title}
                  </h2>

                  <div className="text-sm text-gray-500 flex gap-3 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <LocalizedLink to={`/blog/${post.slug}`}>
                    <Button variant="link" className="p-0 text-red-600">
                      Devamını Oku <ArrowRight size={16} />
                    </Button>
                  </LocalizedLink>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
