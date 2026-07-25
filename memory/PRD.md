# Pedizone.com PRD

## Original Problem Statement
Kullanıcı `pedizone.com` React uygulamasında pek çok UI, içerik ve SEO güncellemesi istedi.

## Product Type
Marketing / e-ticaret + blog + kurumsal içerik sitesi (podoloji odaklı).

## Tech Stack
- Frontend: React (CRA) + TailwindCSS + framer-motion + React Router
- Backend: FastAPI + MongoDB (Bu iş kolunda kullanılmadı, veri statik JS dosyalarında)
- Blog içeriği: `/app/frontend/src/blog_content.js` (statik JS array, 4700+ satır)
- Sitemap: `/app/frontend/public/sitemap.xml`

## Core Requirements (Delivered)
- Responsive fluid tipografi
- Header (masaüstü beyaz / mobil kırmızı, scroll-hide)
- Marketplaces bölümü + Sertifika banner
- Bayi Ol banner + Ücretsiz Ön Değerlendirme
- `/podolog-degerlendirmesi` sayfası (quiz + blog + iletişim)
- Route-aware WhatsApp CTA
- Bayi haritası & liste güncellemeleri
- SEO iyileştirmeleri (görseller, iç linkler, sitemap)

## Recent Changes (26 Temmuz 2026)
- `parmak-arasi-mantar-tirnaga-yayilir-mi` blogu için:
  - 3 iç bağlantı kaynağı (inbound) eklendi:
    - `BlogParmakArasiMantar.jsx` (yüksek trafikli) → inline caption + related grid card
    - `blog_content.js` içinde `tirnak-mantari-bulasici-mi`
    - `blog_content.js` içinde `tirnak-mantarinda-iyilesmeyi-geciktiren-aliskanliklar`
  - Sitemap'e yeni URL girişi (5 görsel + before-after görseli dahil)
  - `pedizone-mantar-damlasi-before-after.webp` sitemap image olarak eklendi

## Priority Backlog (P1/P2)
- P2: `blog_content.js` (4700+ satır) refactor edilebilir → per-slug ayrı JSON/module
- P2: Statik blog verisi FastAPI + MongoDB'ye taşınabilir
- P2: Blog sitemap otomatik oluşturucu

## Testing Status
- Frontend derleme: ✅ Compiled successfully
- Screenshot smoke test: ✅ Hedef blog yükleniyor, kaynak blogda 2 link tespit edildi
- Backend/curl testleri: Bu iterasyonda gerekmedi (statik içerik)

## Notes
- `parmak-arasi-mantar-nasil-gecer` yüksek trafikli → sadece ilgili konular alanı ve caption'a doğal link eklendi, ana metin değiştirilmedi.
