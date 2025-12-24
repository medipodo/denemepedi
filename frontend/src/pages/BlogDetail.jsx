import React from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../blog_content';
import { useLanguage } from '../i18n/LanguageContext';

const BlogDetail = () => {
  const { slug } = useParams();
  const { currentLang } = useLanguage();

  const post = blogPosts.find(
    p => p.slug === slug && p.lang === currentLang
  );

  if (!post) {
    return (
      <div className="pt-32 text-center text-gray-600">
        Blog bulunamadı.
      </div>
    );
  }

  return (
    <main className="pt-32 pb-16 bg-white">
      <section className="py-10">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg">

          <h1>{post.title}</h1>

          <p className="text-sm text-gray-500">
            {post.date} • {post.readTime}
          </p>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl my-8"
              loading="lazy"
            />
          )}

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

        </div>
      </section>
    </main>
  );
};

export default BlogDetail;
