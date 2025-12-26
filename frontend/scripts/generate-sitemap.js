/**
 * Sitemap Generator Script
 * Bu script build sırasında otomatik olarak çalışır ve
 * mock.js'deki tüm blog yazıları ve ürünleri sitemap.xml'e ekler.
 */

const fs = require('fs');
const path = require('path');

// Mock data'yı oku (ES module olduğu için regex ile parse ediyoruz)
const mockPath = path.join(__dirname, '../src/mock.js');
const mockContent = fs.readFileSync(mockPath, 'utf8');

// Products array'ini çıkar
const productsMatch = mockContent.match(/export const products = \[([\s\S]*?)\];/);
const productIds = [];
if (productsMatch) {
  const idMatches = productsMatch[1].matchAll(/id:\s*['"]([^'"]+)['"]/g);
  for (const match of idMatches) {
    productIds.push(match[1]);
  }
}

// BlogPosts array'inden slug'ları çıkar
const blogMatch = mockContent.match(/export const blogPosts = \[([\s\S]*?)\];/);
const blogSlugs = [];
if (blogMatch) {
  const slugMatches = blogMatch[1].matchAll(/slug:\s*['"]([^'"]+)['"]/g);
  for (const match of slugMatches) {
    blogSlugs.push(match[1]);
  }
}

// Bugünün tarihi
const today = new Date().toISOString().split('T')[0];

// Sitemap XML oluştur
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Ana Sayfa -->
  <url>
    <loc>https://pedizone.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Ana Sayfa -->
  <url>
    <loc>https://pedizone.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Yazıları (Otomatik) -->
${blogSlugs.map(slug => `  <url>
    <loc>https://pedizone.com/blog/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}

  <!-- Ürün Sayfaları (Otomatik) -->
${productIds.map(id => `  <url>
    <loc>https://pedizone.com/urun/${id}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}

  <!-- Sertifikalar -->
  <url>
    <loc>https://pedizone.com/sertifikalar</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Bayiler -->
  <url>
    <loc>https://pedizone.com/bayiler</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Ayak Analizi -->
  <url>
    <loc>https://pedizone.com/ayak-analizi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- İletişim -->
  <url>
    <loc>https://pedizone.com/iletisim</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Gizlilik Politikası -->
  <url>
    <loc>https://pedizone.com/gizlilik-politikasi</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Kullanım Şartları -->
  <url>
    <loc>https://pedizone.com/kullanim-sartlari</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

</urlset>
`;

// public klasörüne yaz
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap güncellendi: ${outputPath}`);
console.log(`   - ${blogSlugs.length} blog yazısı eklendi`);
console.log(`   - ${productIds.length} ürün sayfası eklendi`);
