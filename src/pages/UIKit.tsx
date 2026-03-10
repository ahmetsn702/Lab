import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from '../components/Card';
import { Alert } from '../components/Alert';

export const UIKit = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-surface dark:bg-[#242424] text-gray-900 dark:text-gray-100 transition-colors">
      <div className="max-w-5xl mx-auto space-y-12">
        <header>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Tailwind UI Kit</h1>
          <p className="text-gray-600 dark:text-gray-400">LAB-4 Custom UI Component Showcase.</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b dark:border-gray-700 text-primary dark:text-blue-400">1. Buttons</h2>
          <div className="flex flex-wrap items-center gap-4 mb-6 p-6 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700">
            <Button variant="primary" size="sm">Primary SM</Button>
            <Button variant="primary" size="md">Primary MD</Button>
            <Button variant="primary" size="lg">Primary LG</Button>
            <Button variant="primary" disabled>Primary Disabled</Button>
          </div>
          <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b dark:border-gray-700 text-primary dark:text-blue-400">2. Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
            <Input label="Standart Input" placeholder="Metin giriniz..." />
            <Input label="Help Text'li Input" placeholder="email@ornek.com" helpText="Şifrenizi asla kimseyle paylaşmayacağız." />
            <Input label="Hatalı Input" placeholder="Hatalı değer" error="Geçersiz bir e-posta adresi girdiniz." defaultValue="ahmed" />
            <Input label="Disabled Input" placeholder="Buraya yazılamaz" disabled />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b dark:border-gray-700 text-primary dark:text-blue-400">3. Alerts</h2>
          <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg border dark:border-gray-700">
            <Alert variant="info" title="Bilgilendirme" dismissible>Bu yeni bir güncellemeyi haber veren bir info mesajıdır.</Alert>
            <Alert variant="success" title="Başarılı!">Form başarıyla gönderildi ve kaydedildi.</Alert>
            <Alert variant="warning" title="Uyarı" dismissible>Lütfen parolanızı en kısa sürede değiştiriniz.</Alert>
            <Alert variant="error" title="Hata Giderilemedi">Sisteme bağlanırken ağ hatası oluştu, internet bağlantınızı kontrol edin.</Alert>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 pb-2 border-b dark:border-gray-700 text-primary dark:text-blue-400">4. Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="elevated" title="Elevated Card">
              Klasik gölgeli (shadow-md) kart görünümü. Arka planla en yüksek kontrastı üretir.
            </Card>
            <Card variant="outlined" title="Outlined Card" footer={<Button variant="ghost" className="w-full">İncele</Button>}>
              Sadece ince sınırları olan border tarzı daha sade bir görünüm sunar. Arka planı transparent'tır.
            </Card>
            <Card variant="filled" title="Filled Card" footer={<Button variant="primary" size="sm">Detaylar</Button>}>
              Arka plan rengi ile ayrıştırılmış (surface) card türüdür. Renkli blok hissi verir.
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};
