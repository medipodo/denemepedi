# OG Image Deployment Checklist

## ✅ Tamamlanan İşlemler

### 1. Görsel Dosyası
- ✅ **Dosya Konumu**: `/app/frontend/public/images/pedizone-og-home.jpg`
- ✅ **Dosya Boyutu**: 45KB
- ✅ **Önerilen Boyut**: 1200x630px
- ✅ **Format**: JPEG

### 2. Fallback Görselleri
Tüm sayfalar için aynı görsel kopyalandı:
- ✅ `og-image-default.jpg` (PrivacyPolicy, TermsOfService)
- ✅ `og-image-blog.jpg` (Blog sayfası)
- ✅ `og-image-contact.jpg` (Contact sayfası)
- ✅ `og-image-dealers.jpg` (Dealers sayfası)
- ✅ `og-image-analiz.jpg` (AyakAnalizi sayfası)

### 3. Home.jsx Meta Tags
```html
<meta property="og:image" content="https://pedizone.com/images/pedizone-og-home.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:image" content="https://pedizone.com/images/pedizone-og-home.jpg" />
```

### 4. URL Erişimi
- ✅ **Localhost Test**: http://localhost:3000/images/pedizone-og-home.jpg
- ✅ **HTTP Status**: 200 OK
- ✅ **Content-Type**: image/jpeg
- ✅ **Content-Length**: 45321 bytes

### 5. Korunan SEO Ayarları
- ✅ Meta title: "PediZone® - Profesyonel Ayak Bakım Ürünleri | Podolog Onaylı"
- ✅ Meta description: ✅
- ✅ Canonical URL: "https://pedizone.com/"
- ✅ OG site_name: "PediZone®"
- ✅ OG type: "website"
- ✅ OG title: ✅
- ✅ OG description: ✅
- ✅ OG url: ✅
- ✅ Twitter Card: "summary_large_image"

---

## 📋 Deployment Sonrası Yapılacaklar

### 1. Netlify Deploy
```bash
# GitHub'a push yap
git add .
git commit -m "Add OG image for social media sharing"
git push origin main

# Netlify otomatik deploy başlatacak
```

### 2. URL Kontrolü
Deploy tamamlandıktan sonra şu URL'yi tarayıcıda açın:
```
https://pedizone.com/images/pedizone-og-home.jpg
```
**Beklenen**: Görsel doğrudan görünmeli (tek başına)

### 3. Cache Temizleme

#### Netlify CDN Cache:
1. Netlify Dashboard → Site Settings → Build & Deploy
2. "Clear cache and redeploy site" butonuna tıkla

#### Social Media Cache:

**Facebook Sharing Debugger:**
```
https://developers.facebook.com/tools/debug/
```
- URL girin: https://pedizone.com
- "Fetch new information" butonuna tıklayın
- OG image görünmeli

**Twitter Card Validator:**
```
https://cards-dev.twitter.com/validator
```
- URL girin: https://pedizone.com
- "Preview card" butonuna tıklayın

**LinkedIn Post Inspector:**
```
https://www.linkedin.com/post-inspector/
```
- URL girin: https://pedizone.com
- "Inspect" butonuna tıklayın

**WhatsApp:**
- WhatsApp Web'de URL paylaşarak test edin
- Görsel önizleme otomatik yüklenmeli

### 4. Doğrulama

#### Meta Tag Kontrolü:
```bash
curl -s https://pedizone.com | grep -A5 "og:image"
```

**Beklenen Çıktı:**
```html
<meta property="og:image" content="https://pedizone.com/images/pedizone-og-home.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

#### Görsel Erişim Kontrolü:
```bash
curl -I https://pedizone.com/images/pedizone-og-home.jpg
```

**Beklenen:**
```
HTTP/2 200
content-type: image/jpeg
```

### 5. Test Checklist

- [ ] Ana sayfa (pedizone.com) Facebook'ta paylaşıldığında görsel görünüyor
- [ ] Ana sayfa Twitter'da paylaşıldığında görsel görünüyor
- [ ] Ana sayfa WhatsApp'ta paylaşıldığında görsel görünüyor
- [ ] Ana sayfa LinkedIn'de paylaşıldığında görsel görünüyor
- [ ] Görsel URL'i doğrudan erişilebilir (https://pedizone.com/images/pedizone-og-home.jpg)
- [ ] Görsel boyutu 1200x630 px
- [ ] Meta title, description, canonical URL korunmuş

---

## 🔍 Sorun Giderme

### Görsel Görünmüyor:
1. **CDN Cache**: Netlify cache temizliği yapın
2. **Social Media Cache**: Facebook Debugger'da "Fetch new information" yapın
3. **Browser Cache**: Hard refresh (Ctrl+Shift+R)

### 404 Hatası:
1. `public/images/` klasöründe dosyanın varlığını kontrol edin
2. Dosya adının doğru olduğunu kontrol edin: `pedizone-og-home.jpg`
3. Build sırasında dosyanın kopyalandığını doğrulayın

### Yanlış Görsel:
1. Cache temizliği yapın (hem CDN hem social media)
2. 5-10 dakika bekleyin (cache propagation)
3. Tekrar deneyin

---

## 📊 Production URL'ler

- **Ana Sayfa**: https://pedizone.com
- **OG Image**: https://pedizone.com/images/pedizone-og-home.jpg
- **Blog OG**: https://pedizone.com/images/og-image-blog.jpg
- **Contact OG**: https://pedizone.com/images/og-image-contact.jpg
- **Dealers OG**: https://pedizone.com/images/og-image-dealers.jpg
- **Analiz OG**: https://pedizone.com/images/og-image-analiz.jpg
- **Default OG**: https://pedizone.com/images/og-image-default.jpg

---

## ✅ Son Durum

- Görsel dosyası: ✅ Hazır
- Home.jsx güncellemesi: ✅ Tamamlandı
- Fallback görselleri: ✅ Oluşturuldu
- SEO ayarları: ✅ Korundu
- Localhost testi: ✅ Başarılı
- Deploy hazırlığı: ✅ Tamamlandı

**Şimdi yapılacak: "Save to GitHub" → Netlify Deploy**
