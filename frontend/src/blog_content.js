<section className="py-10">
  <div className="container mx-auto px-4 max-w-4xl prose prose-lg">

    {/* KAPAK GÖRSELİ */}
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8"
      />
    )}

    {/* HTML BLOG İÇERİĞİ */}
    <div
      dangerouslySetInnerHTML={{
        __html: post.content
      }}
    />

  </div>
</section>
