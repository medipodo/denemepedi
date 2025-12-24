<section className="py-10">
  <div className="container mx-auto px-4 max-w-4xl prose prose-lg">

    {/* Kapak Görseli */}
    {post.image && (
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8"
      />
    )}

    {/* HTML CONTENT */}
    <div
      dangerouslySetInnerHTML={{
        __html: post.content
      }}
    />

  </div>
</section>
