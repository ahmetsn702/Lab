# CSS Kararları Notu - LAB-3

## 1. Breakpoint Seçimi

**Neden 640px ve 1024px?**
- **640px**: Orta boy telefonlardan tabletlere geçiş noktası
- **1024px**: Tabletlerden laptop/masaüstüne geçiş noktası

**İçerik değişimi**:

| Cihaz | Genişlik | Sütun | Header |
|-------|----------|-------|--------|
| Mobil | 0–639px | 1 sütun | Dikey düzen |
| Tablet | 640–1023px | 2 sütun | Yatay düzen |
| Masaüstü | 1024px+ | 3 sütun | Yatay düzen, max-width: 1200px |

## 2. Layout Tercihleri

**Neden Header için Flexbox?**
- Tek boyutlu düzen (logo solda, nav sağda)
- `justify-content: space-between` ile kolay hizalama
- Mobilde `flex-direction: column` ile dikey düzen

**Neden Proje Kartları için Grid?**
- İki boyutlu düzen (satır ve sütunlar)
- `repeat(auto-fit, minmax(280px, 1fr))` ile media query'siz responsive
- Her kart eşit yükseklikte (`flex-grow: 1` ile içerik hizalı)

## 3. Design Tokens

**Renk paleti**:
- **Primary (#1E3A8A)**: Lacivert – güven ve profesyonellik
- **Secondary (#2563EB)**: Açık mavi – etkileşim rengi
- **Accent (#7C3AED)**: Mor – vurgu için

**Spacing skalası**:
- 4px tabanlı çarpanlar (4, 8, 16, 24, 32, 48, 64)
- Tüm boşluklar `var(--space-*)` ile tutarlı

**Fluid typography (clamp)**:
- `clamp(min, tercih, max)` sözdizimi
- `rem + vw` karışımı: Hem akıcı hem erişilebilir (sadece `vw` değil)
- Örnek: `clamp(2rem, 1.2rem + 3vw, 3.5rem)`

## 4. Mobile-First Stratejisi

1. Temel stiller → Mobil için (0px başlangıç)
2. `@media (min-width: 640px)` → Tablet için eklemeler
3. `@media (min-width: 1024px)` → Masaüstü için eklemeler

**Neden `min-width`?**
- Performans: Mobil cihazlar sadece küçük CSS yükler
- Progresif geliştirme: Ekle-ekle mantığı (çıkarmaktan daha kolay)
- MDN ve Google'ın önerdiği standart yaklaşım

## 5. Görsel Yönetimi

- `max-width: 100%` → Görsel taşmayı önler
- `object-fit: cover` → Kart görselleri orantılı kesilir
- `aspect-ratio: 1` → Profil fotoğrafı kare kalır
- `display: block` → Görsellerin altındaki boşluğu kaldırır
