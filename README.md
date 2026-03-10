# Web LAB - Kapsamlı Kişisel Portföy Projesi

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.1-purple?logo=vite)
![CSS3](https://img.shields.io/badge/CSS-Modern-blue?logo=css3)

## 📝 Hakkında

Bu proje, Fırat Üniversitesi Web Tasarımı ve Programlama dersi kapsamında geliştirilmiş modern ve responsive bir kişisel portföy web uygulamasıdır. İçerisinde LAB-1, LAB-2 ve LAB-3 görevlerindeki tüm kazanımları barındırmakta olup; tamamen **semantic HTML5**, erişilebilirlik (A11y) standartları, modern **CSS (Flexbox, Grid, CSS Variables)** ve **Mobile-first** yaklaşımıyla inşa edilmiştir.

## 👨‍💻 Geliştirici Bilgileri

- **Ad Soyad:** Ahmed Hüsrev Sayın
- **Öğrenci No:** 225541103
- **Bölüm:** Yazılım Mühendisliği
- **Üniversite:** Fırat Üniversitesi

---

## 🎯 Projenin Amacı ve Öğrenme Hedefleri

Projede ulaşılan başlıca kazanımlar şunlardır:
- **Erişilebilirlik ve Semantik Yapı:** Temiz HTML5 etiketleri (header, main, section, article, footer, nav vb.) kullanımı ve ARIA attributeları.
- **Mobile-first CSS Stratejisi:** Tasarımın önce küçük ekranlar (mobilden) başlanarak, sonrasında tablet ve masaüstüne (min-width breakpoint'leri) doğru genişletilmesi.
- **Design Tokens (CSS Değişkenleri):** Renk paletleri, boşluk skalaları (spacing) ve font boyutlarının merkezi bir CSS dosyasında `var(--variable)` ile yönetimi.
- **Modern Layout Sistemleri:** Tek boyutlu hizalamalar için **Flexbox**, iki boyutlu listelemeler (proje kartları vb.) için **CSS Grid** kullanımı.
- **Fluid Typography:** `clamp()` fonksiyonuyla ekran boyutuna göre dinamik ölçeklenen ve erişilebilir font boyutları.
- **Component (Bileşen) Mantığı:** Uygulamanın React/Vite ve TypeScript kullanılarak modern bir yapıda inşası.

---

## 🛠️ Kullanılan Teknolojiler

- **Frontend Kütüphanesi:** React 19
- **Dil:** TypeScript
- **Derleyici / Sunucu:** Vite 5
- **Stil Modellemesi:** Modern Vanilla CSS (Tailwind vb. kütüphaneler kullanılmamıştır, saf CSS gücünden faydalanılmıştır)
- **Linter:** ESLint

---

## 📁 Proje Yapısı ve Mimarisi

```text
web-lab-hello/
├── src/
│   ├── assets/              # Statik dosyalar (Görseller, ikonlar)
│   ├── styles/
│   │   ├── tokens.css       # Merkezi tasarım değişkenleri (Design tokens)
│   │   └── responsive.css   # Breakpoint tanımlamaları ve media query'ler
│   ├── App.tsx              # Uygulamanın ana bileşeni (Portföy İçeriği)
│   ├── App.css              # Ana bileşen stilleri
│   ├── index.css            # Global stiller ve sıfırlamalar (reset)
│   └── main.tsx             # React DOM render ve başlangıç dosyası
├── screenshots/             # Responsive tasarımın farklı ekranlardaki görüntüleri
├── public/                  # Herkese açık statik içerikler (Profil fotoğrafları vb.)
├── CSS-KARARLARI.md         # Tasarım spesifikasyonları dokümantasyonu
├── README.md                # Proje dokümantasyonu (Bu dosya)
├── package.json             # NPM bağımlılıkları ve script'leri
└── vite.config.ts           # Vite konfigürasyonu
```

---

## ✨ Temel Özellikler ve Sayfa İçeriği

Uygulama tek sayfalık (Single Page Application - SPA) yapıda olup, şu temel bölümlerden oluşmaktadır:

1. **Header & Navigation:** 
   - Başlık ve erişilebilir (aria-label) menü dolaşımı bulunur. Sayfadaki ilgili bölümlere (anchor links) akıcı bir şekilde yönlendirme yapar. 
   - Kullanıcı deneyimi için eklenmiş olan `Ana içeriğe atla` (Skip link) bağlantısına sahiptir.
2. **Hakkımda (About Me):**
   - Kişisel bilgilerin, okul/bölüm detaylarının ve profil fotoğrafının yer aldığı bölüm.
   - Sahip olunan teknik yetkinlikler (`skill-tags`) yatay ve akıcı bir biçimde listelenir.
3. **Projelerim (My Projects):**
   - E-Ticaret, Kişisel Blog ve Hava Durumu gibi projelerin sergilendiği grid (ızgara) tabanlı kart listesi.
   - Her kartta görsel, proje açıklaması ve dahil edilen teknolojiler yer almaktadır.
4. **İletişim Formu (Contact):**
   - Semantik `form`, `fieldset`, `legend` HTML takılarıyla izole edilmiş sağlam bir iletişim formu.
   - İsim, E-posta, Konu seçimi ve Mesaj alanları. Her alan için zorunluluk (required) ve minimum karakter limitleri validation ile korunmaktadır. Ayrıca `aria-describedby` desteğiyle ekran okuyucularına yardımcı hata mesajı tagleri bulunur.

---

## 🎨 Tasarım Kararları (CSS & Responsive)

Projedeki detaylı CSS kararları, `CSS-KARARLARI.md` dosyasında da anlatıldığı üzere aşağıdaki prensiplere dayanmaktadır:

### 1. Responsive Breakpoint'ler (Mobile First)
Sayfa tasarımı `min-width` kullanılarak küçükten büyüğe doğru geliştirilmiştir:
- **Mobil (0 - 639px):** 1 Sütunlu tasarım, dikey header navigasyonu.
- **Tablet (640px - 1023px):** 2 Sütunlu grid yapısı, yatay navigasyon başlangıcı.
- **Masaüstü (1024px+):** 3 Sütunlu grid kartlar, ortalanmış sayfa içeriği (`max-width: 1200px`).

### 2. Modern Grid ve Flexbox Kullanımı
- **Header ve Footer:** `justify-content: space-between` ve `align-items: center` kullanılarak Flexbox ile konumlandırılmıştır.
- **Beceri Etiketleri (Skill Tags):** `flex-wrap: wrap` sayesinde ekran küçüldüğünde alt satıra duyarlı bir şekilde kayar.
- **Proje Kartları (Grid):** `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` kodu sayesinde kaba (hardcoded) media-query yazımı en aza indirilmiş, esnek kolonlanma yeteneği sağlanmıştır. Tüm kartların eşit yükseklikte olabilmesi için `flex-grow: 1` tekniğinden faydalanılmıştır.

### 3. Akışkan Yazı Tipi (Fluid Typography)
Tüm başlıklarda statik `px` değerleri yerine ekranla birlikte dinamik çalışan `clamp()` kullanılmıştır:
- H1: `clamp(2rem, 1.2rem + 3vw, 3.5rem)`
- H2: `clamp(1.5rem, 1rem + 2vw, 2.5rem)`
Bu sayede yazılar, ne ekrandan taşacak kadar çok büyür ne de telefonda okunmayacak kadar küçük kalır.

---

## 📦 Kurulum ve Çalıştırma

Projeyi yerel makinenizde (Localhost) çalıştırmak için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

1. **Bağımlılıkları Yükleyin:**
Terminali veya komut satırını açarak proje dizininde aşağıdaki komutu çalıştırın:
```bash
npm install
```

2. **Geliştirme Sunucusunu Başlatın:**
Vite'in hızlı geliştirme ortamını çalıştırmak için:
```bash
npm run dev
```

3. **Uygulamayı Görüntüleyin:**
Konsolda beliren yerel adrese (Genellikle `http://localhost:5173`) tıklayarak portföye göz atabilirsiniz.

---

## 📸 Ekran Görüntüleri Görümü
Uygulamanın farklı cihazlardaki tasarım yanıtları için `screenshots/` klasörüne göz atabilirsiniz.

1. **Mobil Görünüm:** `screenshots/mobile.png`
2. **Tablet Görünüm:** `screenshots/tablet.png`
3. **Masaüstü Görünüm:** `screenshots/desktop.png`

---

## 📚 Kaynaklar
- [React Dokümantasyonu](https://react.dev/)
- [Vitejs - Frontend Tooling](https://vitejs.dev/)
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS-Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Utopia - Fluid Responsive Design](https://utopia.fyi/)
- [A11y Project - Web Erişilebilirliği](https://www.a11yproject.com/)
