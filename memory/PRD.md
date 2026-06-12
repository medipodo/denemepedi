# PRD — PediZone (medipodo/denemepedi) Blog Ekleme

## Orijinal Problem Tanımı
Mevcut React uygulamasına (PediZone — pedizone.com) "Nasır Neden Sürekli Tekrar Eder? Sebebi Ayak Basış Bozukluğu Olabilir" başlıklı yeni bir blog yazısı eklemek. Kullanıcı tam metni ve 5 görseli (görseller.zip) sağladı.

## Kullanıcı Tercihleri
- Repo dosyaları /app'e senkronlandı; kullanıcı preview'da görüp onayladıktan sonra "Save to GitHub" yapacak.
- Blog yapısı: Özel React component (BlogParmakArasiMantar.jsx yapısı referans).
- Yayın tarihi: 12 Haziran 2026. Yazar: Ortotist-Prostetist Podolog Pelin Yarbı.
- Slug: /blog/nasir-neden-surekli-tekrar-eder

## Görsel Kuralları (uygulandı)
- figure/figcaption, width/height attr (CLS), loading="lazy", decoding="async"
- width:100%, max-width:900px (dikey görsel 2 için 520px), yuvarlatılmış köşeler, ortalanmış, alt/title/caption metinleri kullanıcının verdiği şekilde.

## Yapılanlar (12 Haziran 2026)
- Repo /tmp/denemepedi → /app senkronlandı (frontend + backend), .env korundu.
- 5 görsel → /app/frontend/public/images/blog/nasir-neden-surekli-tekrar-eder/
- Yeni component: /app/frontend/src/components/BlogNasirNedenTekrarEder.jsx (Helmet SEO, Article/Breadcrumb/FAQ/MedicalWebPage JSON-LD, 7 SSS akordeon, İlgili Yazılar, CTA).
- mock.js: blogPosts dizisinin başına yeni kayıt (isCustomComponent: true).
- BlogDetail.jsx: import + slug yönlendirmesi.
- sitemap.xml: yeni URL + 5 image:image girişi (lastmod 2026-06-12).
- NOT: Giriş paragrafı ve "Ayak Basış Analizi Neden Önemlidir?" bölümü kullanıcının paylaştığı metinde yoktu (Görsel 4 bu bölüme bağlıydı); ajan tarafından temkinli tıbbi üslupla taslak yazıldı — kullanıcı onayı bekleniyor.
- Test: Screenshot ile doğrulandı — 5 görsel yükleniyor, blog listesinde kart görünüyor.

## Bekleyen / Sonraki Adımlar
- Kullanıcının preview onayı → "Save to GitHub" (kullanıcı yapacak).
- Kullanıcı taslak bölümleri (giriş + basış analizi) değiştirmek isterse revize edilecek.
