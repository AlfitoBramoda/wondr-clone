export const metadata = {
  title: 'About - BNI Wondr',
  description: 'Tentang BNI Wondr - Aplikasi digital banking terdepan dari Bank BNI'
};

export default function About() {
  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tentang BNI Wondr</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Apa itu BNI Wondr?</h2>
            <p className="text-lg text-gray-700 mb-4">
              BNI Wondr adalah aplikasi digital banking terdepan dari Bank BNI yang menghadirkan 
              kemudahan bertransaksi dalam satu genggaman. Dengan teknologi terkini, kami memberikan 
              pengalaman perbankan digital yang aman, cepat, dan mudah.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Layanan Kami</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">QRIS</h3>
                <p>Bayar dengan scan QR code di berbagai merchant</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">TapCash</h3>
                <p>Kartu elektronik untuk transportasi dan pembayaran</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Bayar & Beli</h3>
                <p>Bayar tagihan dan beli pulsa dalam satu aplikasi</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Visi & Misi</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Visi</h3>
              <p className="mb-4">Menjadi platform digital banking terdepan yang menghadirkan solusi keuangan inovatif untuk semua.</p>
              
              <h3 className="text-lg font-semibold mb-2">Misi</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Memberikan layanan perbankan digital yang mudah dan aman</li>
                <li>Menghadirkan inovasi teknologi finansial terdepan</li>
                <li>Mendukung inklusi keuangan untuk seluruh masyarakat Indonesia</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Customer Service:</strong> 1500-046</p>
              <p className="mb-2"><strong>Email:</strong> cs@bni.co.id</p>
              <p><strong>Website:</strong> www.bni.co.id</p>
            </div>
          </section>
        </div>
        
        <div className="mt-8 text-sm text-gray-400 text-center">
          Halaman ini di-build secara statis pada waktu compile
        </div>
      </div>
    </div>
  );
}