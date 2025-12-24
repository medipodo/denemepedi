import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import LocalizedLink from '../components/LocalizedLink';
import { useLanguage } from '../i18n/LanguageContext';
import { useTranslation } from '../i18n/useTranslation';

// İngilizce blog verileri
const enBlogPosts = [
  {
    id: 'what-is-foot-fungus',
    title: 'What Is Foot Fungus? Causes, Symptoms, Types, and Prevention',
    slug: 'what-is-foot-fungus',
    excerpt: 'Foot fungus is a common fungal infection affecting the skin of the feet. Learn what foot fungus is, why it occurs, common symptoms, and prevention methods.',
    image: '/blog-images/ayak-mantari/ayak-mantari-cover.jpg',
    date: 'January 15, 2025',
    readTime: '8 min',
    tags: ['Foot Fungus', 'Foot Care', 'Prevention']
  }
];

const Blog = () => {
  const { currentLang } = useLanguage();
  const { t } = useTranslation();

  // Dile göre blog listesini belirle
  const posts = currentLang === 'en' ? enBlogPosts : blogPosts;

  // Dile göre metinler
  const texts = {
    tr: {
      title: 'PediZone Blog',
      subtitle: 'Ayak sağlığı, podoloji ve ayak bakımı hakkında faydalı bilgiler ve uzman tavsiyeleri.',
      readMore: 'Devamını Oku'
    },
    en: {
      title: 'PediZone Blog',
      subtitle: 'Useful information and expert advice on foot health, podiatry, and foot care.',
      readMore: 'Read More'
    },
    de: {
      title: 'PediZone Blog',
      subtitle: 'Nützliche Informationen und Expertenrat zu Fußgesundheit, Podologie und Fußpflege.',
      readMore: 'Weiterlesen'
    }
  };

  const content = texts[currentLang] || texts.tr;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{content.title}</h1>
            <p className="text-lg text-gray-600">{content.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card key={post.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags && post.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} className="bg-red-100 text-red-700">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar size={16} className="mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <Clock size={16} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <LocalizedLink to={`/blog/${post.slug}`}>
                      <Button variant="link" className="text-red-600 p-0 h-auto font-semibold">
                        {content.readMore} <ArrowRight className="ml-1" size={16} />
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
