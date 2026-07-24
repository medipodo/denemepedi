// Canlıda gösterilmeyecek blog slug'ları.
// Bu listedeki slug'lar hem blog listesinden hem de detay sayfasından gizlenir.
// blog_content.js'e dokunulmadan, sadece görünürlük seviyesinde filtreleme yapılır.
export const HIDDEN_BLOG_SLUGS = new Set([
  'tirnak-neden-uzamaz',
  'tirnak-neden-kalinlasir',
  'cocuk-ayak-sagligi',
  'bs-bant-uygulamasi',
  'topuk-dikeni',
  'ankara-baglica-refleksoloji',
  'tirnakbatmasi',
  'diyabet-ve-ayak-sagligi',
  'ayak-kokusu-ve-mantar-iliskisi',
  'baglica-podolog-hizmetleri',
  'ayak-sagligi-ipuclari',
  'batik-tirnak-nedenleri',
  'tirnak-mantari-tedavisi',
  'ayakta-nasir-neden-olur-nasil-onlenir',
  'ayakta-nasir-neden-olur-ve-nasil-onlenir',
  'ayak-tabani-agrisi-neden-olur',
  // n8n ile eklenen yeni "Ayak Parmak Arası Mantar" yazısı gizlendi.
  // Mevcut 'parmak-arasi-mantar-nasil-gecer' bloguna ve section renderer sistemine dokunulmadı.
  'ayak-parmak-arasi-mantar',
  'kis-aylarinda-catlak-topuk-tedavisi',
  'ayak-sagligi-icin-ayakkabi-secimi',
]);
