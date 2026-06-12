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

## Yapılanlar - 2. Görev: İç Linkler (12 Haziran 2026)
- Kullanıcı sitemap'te anasayfa + blog tarihlerini kendisi güncelledi.
- 3 eski blogdan yeni bloga bağlamsal infoBox linki eklendi (mock.js sections):
  1. nasir-nedir-evde-gecer-mi → "Metatars... basınç dağılımı bozukluğu" paragrafı sonrası (variant: tip)
  2. nasir-sigil-farklari → "Nasır İçin Ev Bakımı" checkList sonrası (variant: tip)
  3. medikal-ayak-bakimi-nedir → "Nasırlar sürekli geri geliyor" bullet listesi sonrası (variant: info)
- 🐛 ÖNCEDEN VAR OLAN HATA DÜZELTİLDİ: BlogDetail.jsx Helmet `<title>{post.title} | PediZone Blog</title>` karışık children nedeniyle TÜM sections tabanlı blog sayfalarını çökertiyordu (react-helmet-async v3 + React 19). Template literal ile düzeltildi: `<title>{\`${post.title} | PediZone Blog\`}</title>`. Bu düzeltme repo'ya push edilmeli — production'ı da etkiliyor olabilir.
- Test: 3 sayfa da render oluyor, her birinde yeni bloga 2 link (infoBox + İlgili Makaleler) doğrulandı.

## Yapılanlar - 3. Görev: Ham HTML Render Hatası (12 Haziran 2026)
- Kullanıcı nasir-sigil-farklari sayfasında liste maddelerinde ham `<a href=...>` kodunun metin olarak göründüğünü bildirdi.
- Kök neden: mock.js içinde 6 yerde (paragraph x2, numberedSection x1, checkList x3) içeriğe ham HTML link yazılmış; ancak BlogDetail.jsx render bileşeni düz metin basıyordu (repo'da önceden var olan hata).
- Düzeltme: BlogDetail.jsx'te `paragraph`, `numberedSection` ve `checkList` render'ları dangerouslySetInnerHTML ile HTML işleyecek şekilde güncellendi.
- Test: nasir-sigil-farklari ve nasir-nedir sayfalarında ham HTML kalmadığı, linklerin tıklanabilir olduğu doğrulandı.

## Bekleyen / Sonraki Adımlar
- Kullanıcının preview onayı → "Save to GitHub" (kullanıcı yapacak).
- Kullanıcı taslak bölümleri (giriş + basış analizi) değiştirmek isterse revize edilecek.
