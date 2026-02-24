# Web LAB-2 - Semantik HTML ve Erişilebilirlik

## 📝 Hakkında
Bu proje, Web Tasarımı ve Programlama dersi LAB-2 kapsamında semantik HTML5, erişilebilirlik (a11y) ilkeleri ve form temelleri üzerine geliştirilmiştir.

## 👨‍💻 Geliştirici
- **Ad Soyad:** Ahmed Hüsrev Sayın
- **Öğrenci No:** 225541103
- **Bölüm:** Yazılım Mühendisliği

## 🎯 LAB-2 Öğrenme Hedefleri
- ✅ Semantik HTML5 etiketlerini doğru kullanma
- ✅ Erişilebilirlik (a11y) ilkelerini uygulama
- ✅ Heading hiyerarşisi ve alt metinler
- ✅ ARIA özniteliklerini kullanma
- ✅ Klavye navigasyonu (Tab, focus)
- ✅ Erişilebilir form elemanları
- ✅ HTML5 form doğrulama
- ✅ Lighthouse erişilebilirlik testi (90+ puan)

## 🛠️ Kullanılan Teknolojiler
- React 18
- TypeScript 5
- Vite 5
- Semantik HTML5
- CSS3
- ARIA (Accessible Rich Internet Applications)

## 📦 Kurulum
```bash
npm install
```

## 🚀 Çalıştırma
```bash
npm run dev
```

## 🎨 Proje Yapısı
```
web-lab-hello/
├── src/
│   ├── App.tsx          # Ana bileşen (semantik HTML)
│   ├── App.css          # Stil dosyası (a11y focus stilleri)
│   └── main.tsx         # Giriş noktası
├── public/
│   └── lighthouse-report.png  # Erişilebilirlik raporu
├── index.html           # Ana HTML (lang="tr")
└── README.md
```

## ♿ Erişilebilirlik Özellikleri

### Semantik HTML
- `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Tek `<h1>` ve doğru heading hiyerarşisi
- Her section bir `<h2>` ile başlar

### ARIA Kullanımı
- `aria-label` ile navigasyon etiketleme
- `aria-describedby` ile form yardım metinleri
- `role="alert"` ile hata mesajları

### Klavye Navigasyonu
- Tab ile tüm interaktif elemanlara erişim
- Skip navigation linki (Ana içeriğe atla)
- Belirgin focus göstergesi (outline)

### Form Erişilebilirliği
- Her input'un `<label>` ilişkisi var
- `required`, `minlength`, `type` doğrulama
- Hata mesajı alanları hazır (`role="alert"`)

### Görsel Erişilebilirlik
- Tüm görsellerde anlamlı alt metin
- `<figure>` ve `<figcaption>` kullanımı
- Dekoratif görsellerde `alt=""`

## 🔍 Lighthouse Raporu
_(Testi tamamlayıp görseli `public/lighthouse-report.png` olarak kaydettikten sonra burası görüntülenecektir.)_

Lighthouse Erişilebilirlik Puanı: **.../100**

![Lighthouse Raporu](public/lighthouse-report.png)

## 📸 Ekran Görüntüleri
[Projenizin ekran görüntülerini buraya ekleyin]

## 🧪 Test Edilen Tarayıcılar
- ✅ Chrome (son sürüm)
- ✅ Firefox (son sürüm)
- ✅ Safari (macOS)
- ✅ Edge (son sürüm)

## 📚 Kaynaklar
- [MDN - HTML Semantics](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [The A11Y Project](https://www.a11yproject.com/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
