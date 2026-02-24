function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB-1</h2>
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Ad Soyad:</strong> Ahmed</p>
        <p><strong>Öğrenci No:</strong> 123456789</p>
        <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği</p>
        <p><strong>Tarih:</strong> {new Date().toLocaleDateString('tr-TR')}</p>
      </div>
    </div>
  )
}

export default App
