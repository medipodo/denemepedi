/**
 * Sitemap Generator Script
 * Bu script build sırasında otomatik olarak çalışır ve
 * mock.js'deki tüm blog yazıları ve ürünleri sitemap.xml'e ekler.
 * Her sayfanın gerçek oluşturulma/güncelleme tarihi kullanılır.
 */

const fs = require('fs');
const path = require('path');

// Mock data'yı oku (ES module olduğu için regex ile parse ediyoruz)
const mockPath = path.join(__dirname, '../src/mock.js');
const mockContent = fs.readFileSync(mockPath, 'utf8');

// Türkçe ay isimlerini sayıya çevir
const turkishMonths = {
  'Ocak': '01',
  'Şubat': '02',
  'Mart': '03',
  'Nisan': '04',
  'Mayıs': '05',
  'Haziran': '06',
  'Temmuz': '07',
  'Ağustos': '08',
  'Eylül': '09',
  'Ekim': '10',
  'Kasım': '11',
  'Aralık': '12'
};

// Türkçe tarih formatını ISO formatına çevir (örn: "2 Ocak 2026" -> "2026-01-02")
function convertTurkishDate(turkishDate) {
  const parts = turkishDate.trim().split(' ');
  if (parts.length !== 3) return null;
  
  const day = parts[0].padStart(2, '0');
  const month = turkishMonths[parts[1]];
  const year = parts[2];
  
  if (!month) return null;
  return `${year}-${month}-${day}`;
}

// Products array'ini çıkar
const productsMatch = mockContent.match(/export const products = \[([\s\S]*?)\];/);
const productIds = [];
if (productsMatch) {
  const idMatches = productsMatch[1].matchAll(/id:\s*['"]([^'"]+)['"]/g);
  for (const match of idMatches) {
    productIds.push(match[1]);
  }
}

// BlogPosts array'inden slug ve date'leri çıkar
const blogMatch = mockContent.match(/export const blogPosts = \[([\s\S]*?)\];/);
const blogData = [];
if (blogMatch) {
  // Her blog için ayrı ayrı slug ve date çıkar
  const blogEntries = blogMatch[1].split(/\n\s*\{\s*\n\s*id:/);
  
  for (let i = 0; i < blogEntries.length; i++) {
    const entry = blogEntries[i];
    const slugMatch = entry.match(/slug:\s*['"]([^'"]+)['"]/);
    const dateMatch = entry.match(/date:\s*['"]([^'"]+)['"]/);
    
    if (slugMatch) {
      const slug = slugMatch[1];
      let isoDate = null;
      
      if (dateMatch) {
        isoDate = convertTurkishDate(dateMatch[1]);
      }
      
      blogData.push({
        slug: slug,
        date: isoDate || '2025-12-01' // Varsayılan tarih
      });
    }
  }
}

// Sabit sayfa tarihleri (oluşturulma tarihleri)
const pageCreationDates = {
  home: '2025-10-01',
  blog: blogData.length > 0 ? blogData[0].date : '2025-12-01', // En son blog tarihi
  sertifikalar: '2025-11-01',
  bayiler: '2025-11-15',
  'ayak-analizi': '2025-10-01',
  iletisim: '2025-09-01',
  'gizlilik-politikasi': '2025-08-01',
  'kullanim-sartlari': '2025-08-01',
  'sss': '2026-03-03'
};

// Ürün tarihleri (ürün ekleme tarihleri)
const productDates = {
  'foot-nail-care-serum': '2025-10-15',
  'temizleme-kopugu': '2025-10-15',
  'ureli-krem': '2025-10-15'
};

// Sitemap XML oluştur
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
  <!-- Ana Sayfa -->
  <url>
    <loc>https://pedizone.com/</loc>
    <lastmod>${pageCreationDates.home}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <!-- Blog Ana Sayfa -->
  <url>
    <loc>https://pedizone.com/blog</loc>
    <lastmod>${pageCreationDates.blog}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>

  <!-- Blog Yazıları -->
${blogData.map(blog => `  <url>
    <loc>https://pedizone.com/blog/${blog.slug}</loc>
    <lastmod>${blog.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n')}

  <!-- Ürün Sayfaları -->
${productIds.map(id => `  <url>
    <loc>https://pedizone.com/urun/${id}</loc>
    <lastmod>${productDates[id] || '2025-10-15'}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`).join('\n')}

  <!-- Sertifikalar -->
  <url>
    <loc>https://pedizone.com/sertifikalar</loc>
    <lastmod>${pageCreationDates.sertifikalar}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- Bayiler -->
  <url>
    <loc>https://pedizone.com/bayiler</loc>
    <lastmod>${pageCreationDates.bayiler}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>

  <!-- Ayak Analizi -->
  <url>
    <loc>https://pedizone.com/ayak-analizi</loc>
    <lastmod>${pageCreationDates['ayak-analizi']}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

  <!-- İletişim -->
  <url>
    <loc>https://pedizone.com/iletisim</loc>
    <lastmod>${pageCreationDates.iletisim}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>

  <!-- Gizlilik Politikası -->
  <url>
    <loc>https://pedizone.com/gizlilik-politikasi</loc>
    <lastmod>${pageCreationDates['gizlilik-politikasi']}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Kullanım Şartları -->
  <url>
    <loc>https://pedizone.com/kullanim-sartlari</loc>
    <lastmod>${pageCreationDates['kullanim-sartlari']}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Sık Sorulan Sorular -->
  <url>
    <loc>https://pedizone.com/sss</loc>
    <lastmod>${pageCreationDates['sss']}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>

</urlset>
`;

// public klasörüne yaz
const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`✅ Sitemap güncellendi: ${outputPath}`);
console.log(`   - ${blogData.length} blog yazısı eklendi (gerçek tarihlerle)`);
console.log(`   - ${productIds.length} ürün sayfası eklendi`);

// Blog tarihlerini göster
console.log('\n📅 Blog Tarihleri:');
blogData.forEach(blog => {
  console.log(`   - ${blog.slug}: ${blog.date}`);
});
