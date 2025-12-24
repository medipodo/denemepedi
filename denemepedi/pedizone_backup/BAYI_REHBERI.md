# 🗺️ PediZone Bayi Haritası - Kullanım Rehberi

## 📍 Bayi Bilgilerini Nasıl Eklerim / Düzenlerim?

### 1️⃣ Bayi Bilgileri Dosyası

Tüm bayi bilgileri şu dosyada saklanır:
```
/src/data/dealers.json
```

### 2️⃣ Dosya Formatı

```json
{
  "dealers": [
    {
      "id": 1,
      "name": "Bayi Adı",
      "city": "Şehir Adı",
      "address": "Tam Adres",
      "phone": "+90 XXX XXX XX XX",
      "email": "email@domain.com",
      "lat": 39.9334,
      "lng": 32.8597,
      "isActive": true
    }
  ]
}
```

### 3️⃣ Alan Açıklamaları

| Alan | Açıklama | Zorunlu | Örnek |
|------|----------|---------|-------|
| `id` | Benzersiz numara | ✅ | `1, 2, 3...` |
| `name` | Bayi adı | ✅ | `"Ankara Podoloji Merkezi"` |
| `city` | Şehir | ✅ | `"Ankara"` |
| `address` | Tam adres | ✅ | `"Çankaya Mah. Atatürk Cad. No:15"` |
| `phone` | Telefon | ✅ | `"+90 312 XXX XX XX"` |
| `email` | E-posta | ❌ | `"info@bayi.com"` |
| `lat` | Enlem (Latitude) | ✅ | `39.9334` |
| `lng` | Boylam (Longitude) | ✅ | `32.8597` |
| `isActive` | Aktif mi? | ✅ | `true` veya `false` |

## 🌍 Koordinatları Nasıl Bulurum?

### Yöntem 1: Google Maps (EN KOLAY)

1. **Google Maps'i açın**: https://www.google.com/maps
2. **Adresi arayın**: Bayi adresini arama kutusuna yazın
3. **Noktaya sağ tıklayın**: Haritada konuma sağ tıklayın
4. **Koordinatları kopyalayın**: İlk satırda koordinatlar görünür
   - Örnek: `39.9334, 32.8597`
   - İlk sayı = `lat` (enlem)
   - İkinci sayı = `lng` (boylam)

### Yöntem 2: URL'den Kopyalama

1. Google Maps'te konumu bulun
2. URL'yi kontrol edin:
   ```
   https://www.google.com/maps/@39.9334,32.8597,15z
   ```
3. @ işaretinden sonraki ilk iki sayı koordinatlardır

## ✏️ Yeni Bayi Ekleme Örneği

### Örnek: Niğde'ye Yeni Bayi Eklemek

**1. Koordinatları Bulun:**
- Google Maps'te "Niğde, Örnek Caddesi No:4" ara
- Koordinatlar: `37.9667, 34.6833`

**2. dealers.json Dosyasını Açın**

**3. Yeni Bayi Ekleyin:**
```json
{
  "dealers": [
    {
      "id": 1,
      "name": "Örnek Podoloji Merkezi",
      "city": "Niğde",
      "address": "Örnek Caddesi No: 4, Merkez",
      "phone": "+90 388 XXX XX XX",
      "email": "ornek@podoloji.com",
      "lat": 37.9667,
      "lng": 34.6833,
      "isActive": true
    },
    {
      "id": 2,
      "name": "YENİ BAYİ ADI",
      "city": "YENİ ŞEHİR",
      "address": "YENİ ADRES",
      "phone": "+90 XXX XXX XX XX",
      "email": "email@domain.com",
      "lat": XX.XXXX,
      "lng": XX.XXXX,
      "isActive": true
    }
  ]
}
```

### ⚠️ Önemli Notlar:

1. **Virgül Kullanımı**: Her bayi arasına virgül (`,`) koyun
2. **Son Bayi**: En son bayiden sonra virgül YOK
3. **ID Numaraları**: Her bayiye farklı numara verin
4. **isActive**: `true` = Gösterilir, `false` = Gizlenir
5. **Koordinatlar**: Nokta (`.`) ile ondalık ayırın (virgül değil!)

## 🔄 Bayi Güncelleme

**Bayi bilgilerini güncellemek için:**
1. `dealers.json` dosyasını açın
2. İlgili bayiyi bulun (id numarasına bakın)
3. Değiştirmek istediğiniz alanları düzenleyin
4. Dosyayı kaydedin

**Bayi silmek için:**
- Option 1: `"isActive": false` yapın (geçici olarak gizler)
- Option 2: Tüm bayi objesini silin

## 🚀 Değişiklikleri Yayınlama

1. **Dosyayı kaydedin**: `dealers.json`
2. **Git commit yapın**:
   ```bash
   git add src/data/dealers.json
   git commit -m "Bayi bilgileri güncellendi"
   git push origin main
   ```
3. **Netlify otomatik deploy eder** (2-3 dakika)

## 🎨 Haritada Görünüm

- **Kırmızı marker**: PediZone bayileri
- **Tıklanabilir**: Her markera tıklayınca bayi bilgileri açılır
- **Yol tarifi**: "Yol Tarifi Al" butonu Google Maps'e yönlendirir
- **Direkt arama**: Telefon numaralarına tıklanınca arama yapar

## 📋 Şehirlere Göre Koordinat Örnekleri

| Şehir | Latitude (lat) | Longitude (lng) |
|-------|----------------|-----------------|
| İstanbul | 41.0082 | 28.9784 |
| Ankara | 39.9334 | 32.8597 |
| İzmir | 38.4237 | 27.1428 |
| Antalya | 36.8969 | 30.7133 |
| Bursa | 40.1826 | 29.0665 |
| Adana | 37.0000 | 35.3213 |
| Konya | 37.8667 | 32.4833 |
| Gaziantep | 37.0662 | 37.3833 |
| Niğde | 37.9667 | 34.6833 |

## 🆘 Sorun Giderme

**Bayi haritada görünmüyor?**
- ✅ `isActive: true` olduğunu kontrol edin
- ✅ Koordinatların doğru olduğunu kontrol edin
- ✅ JSON formatının doğru olduğunu kontrol edin (virgüller, tırnaklar)

**Harita yüklenmiyor?**
- ✅ İnternet bağlantısını kontrol edin
- ✅ Tarayıcı konsolunda hata var mı bakın (F12)

**Koordinatlar yanlış konumda?**
- ✅ Lat ve lng değerlerini ters mi yazdınız kontrol edin
- ✅ Google Maps'ten tekrar kontrol edin

## 💡 İpuçları

1. **Toplu Ekleme**: Bir seferde birden fazla bayi ekleyebilirsiniz
2. **Test Edin**: Yeni bayi ekledikten sonra haritayı kontrol edin
3. **Yedek Alın**: Büyük değişiklik öncesi dosyanın yedeğini alın
4. **Tutarlı Olun**: Telefon formatı, adres yazımı tutarlı olsun

## 📞 Destek

Sorun yaşarsanız:
- E-posta: info@pedizone.com
- Telefon: +90 506 886 0326
