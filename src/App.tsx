import { useState, useEffect } from 'react';
import { UIKit } from './pages/UIKit';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { Alert } from './components/Alert';

function App() {
  const [currentView, setCurrentView] = useState<'portfolio' | 'uikit'>('portfolio');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  if (currentView === 'uikit') {
    return (
      <div className="transition-colors">
        <nav className="p-4 bg-white dark:bg-gray-900 flex flex-wrap gap-4 items-center justify-between border-b dark:border-gray-800 sticky top-0 z-10 transition-colors">
          <Button variant="ghost" onClick={() => setCurrentView('portfolio')}>&larr; Portföye Dön</Button>
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            {theme === 'light' ? '🌙 Karanlık Mod' : '☀️ Aydınlık Mod'}
          </Button>
        </nav>
        <UIKit />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-primary focus:text-white z-50 rounded-br-md">
        Ana içeriğe atla
      </a>

      <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b dark:border-gray-800 px-4 md:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
        <h1 className="text-xl md:text-2xl font-bold text-primary dark:text-blue-400">Ahmed Hüsrev Sayın</h1>
        <div className="flex items-center gap-4 flex-wrap justify-center">
          <nav aria-label="Ana navigasyon">
            <ul className="flex items-center gap-4 md:gap-6 font-medium text-sm md:text-base">
              <li><a href="#hakkimda" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Hakkımda</a></li>
              <li><a href="#projeler" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Projeler</a></li>
              <li><a href="#iletisim" className="hover:text-primary dark:hover:text-blue-400 transition-colors">İletişim</a></li>
            </ul>
          </nav>
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
          <Button variant="ghost" size="sm" onClick={() => setCurrentView('uikit')}>UI Kit</Button>
          <Button variant="secondary" size="sm" onClick={toggleTheme} aria-label="Tema Değiştir">
            {theme === 'light' ? '🌙 Koyu Tema' : '☀️ Açık Tema'}
          </Button>
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20 space-y-24 md:space-y-32">
        <section id="hakkimda" aria-labelledby="hakkimda-heading" className="scroll-mt-28">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-14 items-center md:items-start text-center md:text-left">
            <figure className="shrink-0 flex flex-col items-center">
              <img
                src="/profil.jpg"
                alt="Ahmed Hüsrev Sayın'ın profesyonel profil fotoğrafı"
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-white dark:border-gray-800"
                width="256"
                height="256"
              />
              <figcaption className="mt-4 text-gray-600 dark:text-gray-400 font-medium text-sm md:text-base bg-white dark:bg-gray-800 px-4 py-1.5 rounded-full shadow-sm border dark:border-gray-700">Yazılım Mühendisliği Öğrencisi</figcaption>
            </figure>

            <div className="flex-1 space-y-6">
              <h2 id="hakkimda-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Hakkımda
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Merhaba! Ben Ahmed Hüsrev Sayın, Fırat Üniversitesi Yazılım Mühendisliği
                öğrencisiyim. Web geliştirme (Frontend) ve modern UI/UX tasarımı
                ile yakından ilgileniyorum.
              </p>

              <div className="pt-4">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-gray-100">Teknik Yetkinlikler</h3>
                <ul className="flex flex-wrap gap-2 justify-center md:justify-start" role="list">
                  {['HTML5', 'CSS3 (Tailwind)', 'JavaScript', 'TypeScript', 'React 19', 'Git & GitHub', 'Vite', 'Figma Dzn.'].map((skill) => (
                    <li key={skill} className="px-3.5 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow transition-shadow">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-heading" className="scroll-mt-28">
          <h2 id="projeler-heading" className="text-3xl md:text-4xl font-extrabold mb-10 text-center md:text-left tracking-tight">
            Projelerim
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              variant="elevated" 
              title="E-Ticaret Platformu" 
              image="/project1.jpg" 
              imageAlt="E-ticaret sitesi ana sayfa ekran görüntüsü"
              className="h-full hover:-translate-y-1 transition-transform duration-300"
              footer={
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2.5 py-1 rounded-md font-medium">React</span>
                  <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-2.5 py-1 rounded-md font-medium">TypeScript</span>
                </div>
              }
            >
              React ve TypeScript kullanarak geliştirdiğim responsive
              e-ticaret sitesi. Ürün listeleme, dinamik sepet ve checkout süreçleri içerir.
            </Card>

            <Card 
              variant="elevated" 
              title="Kişisel Blog" 
              image="/project2.jpg" 
              imageAlt="Blog sitesi yazı listesi ekran görüntüsü"
              className="h-full hover:-translate-y-1 transition-transform duration-300"
              footer={
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2.5 py-1 rounded-md font-medium">Next.js</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 px-2.5 py-1 rounded-md font-medium">Tailwind CSS</span>
                </div>
              }
            >
              Markdown destekli kişisel blog platformu.
              Yazılar SSG mimarisi ile derlenir, kategorilere ayrılabilir ve etiketlenebilir.
            </Card>

            <Card 
              variant="elevated" 
              title="Weather App (Hava Durumu)" 
              image="/project3.jpg" 
              imageAlt="Hava durumu uygulaması arayüzü ekran görüntüsü"
              className="h-full hover:-translate-y-1 transition-transform duration-300"
              footer={
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300 px-2.5 py-1 rounded-md font-medium">JavaScript</span>
                  <span className="text-xs bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-md font-medium">REST API</span>
                </div>
              }
            >
              OpenWeather API kullanarak anlık hava durumu bilgisi ve 5 günlük hava tahmin raporu sunan, konum yetkili web uygulaması.
            </Card>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-heading" className="scroll-mt-28 max-w-2xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/50">
            <h2 id="iletisim-heading" className="text-2xl md:text-3xl font-extrabold mb-2 text-gray-900 dark:text-white">
              Birlikte Çalışalım
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">Projeleriniz veya aklınıza takılan sorularınız için iletişim formunu doldurabilirsiniz.</p>

            {formSubmitted ? (
              <Alert variant="success" title="Mesajınız Başarıyla Gönderildi" dismissible={false} className="mb-2">
                En kısa sürede size dönüş yapacağım. İlginiz için teşekkürler!
              </Alert>
            ) : (
              <form onSubmit={handleFormSubmit} noValidate>
                <fieldset className="space-y-6">
                  <legend className="sr-only">İletişim Formu</legend>

                  <Input 
                    label="Ad Soyad:" 
                    id="name" 
                    name="name" 
                    type="text" 
                    required 
                    placeholder="Adınızı giriniz"
                  />

                  <Input 
                    label="E-posta:" 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="ornek@email.com"
                  />

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Konu:</label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full appearance-none rounded-md border border-border dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary disabled:opacity-50"
                      >
                        <option value="">-- Lütfen Seçiniz --</option>
                        <option value="is">İş / Proje Teklifi</option>
                        <option value="soru">Soru & Danışma</option>
                        <option value="oneri">Öneri & Feedback</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Mesajınız:</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Size nasıl yardımcı olabilirim?"
                      className="rounded-md border border-border dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary w-full resize-y"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto shadow-md">
                    Mesajı Gönder
                  </Button>
                </fieldset>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 dark:border-gray-800 py-10 text-center text-gray-600 dark:text-gray-400 mt-12 bg-white dark:bg-gray-900">
        <p className="font-medium">&copy; {new Date().getFullYear()} Ahmed Hüsrev Sayın. Tüm hakları saklıdır.</p>
        <p className="text-sm mt-2 opacity-80">Fırat Üniversitesi Web Tasarımı ve Programlama LAB-4 Assignment</p>
      </footer>
    </div>
  );
}

export default App;
