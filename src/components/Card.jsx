import Image from "next/image";

export default function Card() {
  const data = [
    {
      title: "Transaksi",
      description:
        "Berbagai kemudahan untuk kirim uang, belanja, hingga bayar tagihan.",
      image:
        "https://wondr.bni.co.id/api/image/3_dimension_illustration_1751484975817.png",
    },
    {
      title: "Insight",
      description:
        "Pantau pemasukan dan pengeluaran, jadi tahu rekomendasi keuangan yang cocok buat kamu.",
      image:
        "https://wondr.bni.co.id/api/image/3_dimension_illustration_(1)_1751485012612.png",
    },
    {
      title: "Growth",
      description:
        "Jaga nilai dan kembangin aset kamu dengan beragam instumen untuk masa depan terjamin.",
      image:
        "https://wondr.bni.co.id/api/image/3_dimension_illustration_(2)_1751485081149.png",
    },
  ];

  return (
      <div className="py-6 md:py-[72px] bg-[#FAF9F6]">
        <div className="px-[120px] mx-auto text-center">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-bold text-black">
            Kenalan sama 3 dimensi keuangan
          </p>
          <p className="text-sm md:text-lg lg:text-2xl text-neutral-900 mt-2 md:mt-6 leading-[140%] font-light">
            wondr siap bantu di tiap dimensi keuanganmu: transaksi di masa kini,
            pantau alur keluar-masuk uang di masa lalu, sampai investasi untuk
            masa depan.
          </p>
        </div>
        <div className="px-6 lg:px-[54px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-10">
            {data.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl lg:rounded-[40px] flex flex-col"
              >
                <div className="relative pt-6 lg:pt-8">
                  <img
                    className="object-cover w-full h-auto"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="px-6 pt-6 pb-8 text-left">
                    <p className="text-3xl font-semibold text-black">
                      {item.title}
                    </p>
                    <p className="text-lg mt-4 font-light text-neutral-900">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
