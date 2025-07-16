import Link from 'next/link';

export const metadata = {
  title: 'Promo - BNI Wondr',
  description: 'Temukan berbagai promo menarik dari BNI Wondr'
};

export default function PromoList() {
  const promos = [
    { id: '1', title: 'Cashback 50% untuk Transaksi QRIS' },
    { id: '2', title: 'Gratis Biaya Admin TapCash' }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Daftar Promo</h1>
      
      <div className="grid gap-4">
        {promos.map(promo => (
          <Link 
            key={promo.id}
            href={`/promo/${promo.id}`}
            className="block p-4 border rounded-lg hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{promo.title}</h2>
            <p className="text-blue-600">Lihat detail →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}