import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../blog_content';

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);
  
  // If post has a component, render it instead
  if (post && post.component) {
    const BlogComponent = post.component;
    return <BlogComponent />;
  }

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-blue-950 mb-4">Yazı Bulunamadı</h1>
          <Link to="/blog">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white">
              <ArrowLeft className="mr-2" size={18} />
              Blog'a Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6 text-blue-700">
              <ArrowLeft className="mr-2" size={18} />
              Blog'a Dön
            </Button>
          </Link>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={18} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  // Helper function to render text with bold formatting
                  const renderText = (text) => {
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="font-semibold text-blue-950">{part.replace(/\*\*/g, '')}</strong>;
                      }
                      return part;
                    });
                  };

                  if (paragraph.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold text-blue-950 mt-8 mb-4">{paragraph.replace('# ', '')}</h1>;
                  } else if (paragraph.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-blue-950 mt-6 mb-3">{paragraph.replace('## ', '')}</h2>;
                  } else if (paragraph.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-semibold text-blue-950 mt-4 mb-2">{paragraph.replace('### ', '')}</h3>;
                  } else if (paragraph.startsWith('- ') || paragraph.startsWith('* ')) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{renderText(item.replace(/^[-*]\s/, ''))}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(item => item.trim());
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                        {items.map((item, i) => (
                          <li key={i}>{renderText(item.replace(/^\d+\.\s/, ''))}</li>
                        ))}
                      </ol>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <p key={index} className="font-bold text-blue-950">{paragraph.replace(/\*\*/g, '')}</p>;
                  } else if (paragraph.startsWith('---')) {
                    return <hr key={index} className="my-8 border-gray-300" />;
                  } else {
                    return <p key={index} className="mb-4">{renderText(paragraph)}</p>;
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts CTA */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-950 mb-6">Diğer Yazıları Keşfedin</h2>
          <Link to="/blog">
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
              Tüm Blog Yazıları
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;