// Server Component - no "use client" needed
async function getPromoData(id) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate API call - replace with real API
  const promos = {
    '1': {
      id: '1',
      title: 'Cashback 50% untuk Transaksi QRIS',
      description: 'Dapatkan cashback hingga 50% untuk setiap transaksi menggunakan QRIS di merchant pilihan.',
      content: 'Promo berlaku untuk semua pengguna BNI Wondr. Maksimal cashback Rp 25.000 per transaksi.',
      validUntil: '31 Desember 2024',
      image: 'https://wondr.bni.co.id/api/image/qris-promo.png'
    },
    '2': {
      id: '2',
      title: 'Gratis Biaya Admin TapCash',
      description: 'Top up TapCash tanpa biaya admin untuk semua pengguna.',
      content: 'Nikmati kemudahan top up TapCash tanpa dikenakan biaya admin. Berlaku untuk top up minimal Rp 50.000.',
      validUntil: '15 Januari 2025',
      image: 'https://wondr.bni.co.id/api/image/tapcash-promo.png'
    }
  };
  
  return promos[id] || null;
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const promo = await getPromoData(id);
  
  return {
    title: promo ? `${promo.title} - BNI Wondr` : 'Promo Not Found - BNI Wondr',
    description: promo ? promo.description : 'Promo tidak ditemukan'
  };
}

export default async function PromoDetail({ params }) {
  const { id } = await params;
  const promo = await getPromoData(id);

  if (!promo) {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-red-600">Promo Tidak Ditemukan</h1>
        <p>Promo dengan ID {id} tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <img 
          src={promo.image} 
          alt={promo.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        
        <h1 className="text-3xl font-bold mb-4">{promo.title}</h1>
        
        <p className="text-lg text-gray-600 mb-6">{promo.description}</p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h2 className="text-xl font-semibold mb-3">Detail Promo</h2>
          <p className="mb-4">{promo.content}</p>
          <p className="text-sm text-gray-500">Berlaku hingga: {promo.validUntil}</p>
        </div>
        
        <div className="text-sm text-gray-400">
          Promo ID: {promo.id} | Rendered on server at {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
}