import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <h1>Ahmed Hüsrev Sayın - Kişisel Portföy</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda" aria-labelledby="hakkimda-heading">
          <h2 id="hakkimda-heading">Hakkımda</h2>

          <div className="about-content">
            <figure>
              <img
                src="/profil.jpg"
                alt="Ahmed Hüsrev Sayın'ın profesyonel profil fotoğrafı"
                width="200"
                height="200"
              />
              <figcaption>Yazılım Mühendisliği Öğrencisi</figcaption>
            </figure>

            <div className="about-text">
              <p>
                Merhaba! Ben Ahmed Hüsrev Sayın, KTÜ Yazılım Mühendisliği
                öğrencisiyim. Web geliştirme ve kullanıcı arayüzü tasarımı
                ile ilgileniyorum.
              </p>

              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list">
                <li>HTML5 &amp; CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Git &amp; GitHub</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-heading">
          <h2 id="projeler-heading">Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <img
                src="/project1.jpg"
                alt="E-ticaret sitesi ana sayfa ekran görüntüsü"
                width="400"
                height="300"
              />
              <div className="card-content">
                <h3>E-Ticaret Sitesi</h3>
                <p>
                  React ve TypeScript kullanarak geliştirdiğim responsive
                  e-ticaret sitesi. Ürün listeleme, sepet ve ödeme özellikleri içerir.
                </p>
                <ul className="skill-tags">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Context API</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img
                src="/project2.jpg"
                alt="Blog sitesi yazı listesi ekran görüntüsü"
                width="400"
                height="300"
              />
              <div className="card-content">
                <h3>Kişisel Blog</h3>
                <p>
                  Markdown destekli kişisel blog platformu.
                  Yazılar kategorilere ayrılabilir ve etiketlenebilir.
                </p>
                <ul className="skill-tags">
                  <li>Next.js</li>
                  <li>Markdown</li>
                  <li>CSS Modules</li>
                </ul>
              </div>
            </article>

            <article className="project-card">
              <img
                src="/project3.jpg"
                alt="Hava durumu uygulaması arayüzü ekran görüntüsü"
                width="400"
                height="300"
              />
              <div className="card-content">
                <h3>Hava Durumu App</h3>
                <p>
                  OpenWeather API kullanarak anlık hava durumu bilgisi
                  veren JavaScript uygulaması.
                </p>
                <ul className="skill-tags">
                  <li>JavaScript</li>
                  <li>API</li>
                  <li>Fetch</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-heading">
          <h2 id="iletisim-heading">İletişim</h2>

          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Ahmed Hüsrev Sayın. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
