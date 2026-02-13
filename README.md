# Ebrar Talay Web

Sanity CMS ile Next.js projesi.
```

### 2️⃣ **Commit + Push Yap**

GitHub web arayüzünden:
- Dosyayı kaydet
- Commit message: `"Trigger rebuild for Sanity packages"`
- **Commit** butonuna bas

---

## 🔄 Otomatik Olacaklar:

1. ✅ GitHub'a commit atıldı
2. ✅ Vercel otomatik algıladı
3. ✅ **YENİ BİR BUILD BAŞLADI** (eski cache kullanmadan!)
4. ✅ `package.json` değiştiği için Sanity paketleri indirilecek

---

## 📊 Build'i Takip Et:

1. **Vercel Dashboard** → **Deployments** sekmesine git
2. **YENİ bir deployment** göreceksin (şu anda "Building" yazıyor olmalı)
3. Üzerine tıkla ve **Build Logs**'u izle

---

## 🔍 Build Logs'da Şunları Görmelisin:
```
Installing dependencies...
npm install
...
+ next-sanity@9.8.25
+ sanity@3.68.1
+ @sanity/vision@3.68.1
