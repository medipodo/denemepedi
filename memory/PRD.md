# PediZone Website - Product Requirements Document

## Overview
Static React-based e-commerce website for PediZone, a professional foot care products brand.

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Shadcn UI
- **Content Management:** Hardcoded in `/app/frontend/src/mock.js`
- **Deployment:** Static build (Netlify-compatible)
- **SEO:** Dynamic sitemap generation via `/app/frontend/scripts/generate-sitemap.js`

## Core Features
- Multi-language support (TR, EN, DE)
- Product showcase with detailed pages
- Blog system with FAQ accordions
- Dealer/store locator with map
- Contact form
- Foot health quiz/analysis tool

---

## Changelog

### 2 Ocak 2026 - PageSpeed Optimizasyonu (Mobil 88→95+ Hedefi)

**Yapılan İşlemler:**

1. **Blog Kapak Görselleri Optimize Edildi (JPG → WebP 600x305)**
   - `ayak-mantari-yeni`: 138KB → 29KB (%79 azalma)
   - `ayak-kokusu-blog`: 111KB → 28KB (%75 azalma)
   - `ayak-hijyeni-blog`: 100KB → 26KB (%74 azalma)
   - `medikal-ayak-bakimi`: 80KB → 22KB (%73 azalma)
   - `pedizone-serum-kullanimi`: 88KB → 16KB (%82 azalma)
   - `tirnak-mantari-cesitleri`: 36KB → 7KB (%81 azalma)
   - `mantar-mi-egzama-mi-kapak`: 87KB → 20KB (%77 azalma)

2. **Hero Ürün Görselleri - Responsive srcset Uygulandı**
   - Köpük: Mobil 13KB, Tablet 24KB, Desktop 33KB (vs önceki 62KB)
   - Krem: Mobil 11KB, Tablet 20KB, Desktop 30KB (vs önceki 61KB)
   - Serum: Mobil 9KB (vs önceki 23KB)

3. **Lazy Loading Eklendi**
   - Tüm görselllere `loading="lazy"` eklendi (hero LCP görseli hariç)
   - Hero LCP görseline `fetchpriority="high"` korundu

4. **CLS Önleme**
   - Blog ve ürün kartlarına `width` ve `height` attribute'ları eklendi

**Güncellenen Dosyalar:**
- `/app/frontend/src/mock.js` - Blog görsel importları JPG→WebP
- `/app/frontend/src/pages/Home.jsx` - Responsive srcset ve lazy loading

**Mobilde Toplam Tasarruf:** ~%60-70 görsel boyutu azalması

---

## Roadmap / Backlog

### P0 - Critical (Completed)
- [x] Hero görselleri WebP formatına güncelleme
- [x] Blog layout tutarlılığı düzeltme  
- [x] Sitemap lastmod tarih sorunu çözümü
- [x] Yeni blog yazıları ekleme
- [x] PageSpeed optimizasyonu (görsel boyutlandırma)

### P1 - High Priority
- [ ] PageSpeed puanı gerçek test ortamında doğrulama (95+ hedef)
- [ ] Next-gen image formats (AVIF desteği)

### P2 - Medium Priority
- [ ] Blog içerikleri için ayrı Markdown/JSON dosyaları (mock.js modülerizasyonu)
- [ ] BlogDetail.jsx ile özel blog bileşenlerinin birleştirilmesi

### P3 - Low Priority / Future
- [ ] E-book indirme özelliği iyileştirmesi
- [ ] Form validation geliştirmesi
- [ ] Analytics entegrasyonu
