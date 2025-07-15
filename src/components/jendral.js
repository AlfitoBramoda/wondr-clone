import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white py-12 px-4 ">
      <h2 className="text-[50px] ps-40 pe-40 font-bold text-center pb-8 text-[#000] leading-[60px]">
        Pinjaman fleksibel, akses cepat, bunga bersahabat!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-10 mx-auto ">

        <div className="bg-[#EAE6FF] text-[#000] rounded-xl flex flex-col justify-between overflow-hidden">
          <div className="">
            <h3 className="text-gray-600 ps-6 pt-6 pb-3">Ubah cicilan</h3>
            <h3 className="text-[30px] font-semibold ps-6 pb-4 leading-none">Bayar tagihan jadi ringan</h3>
            <p className="text-sm text-gray-600 ps-6 pb-5 pe-6">
              Punya tagihan yang besar? Jadikan lebih enteng dengan ubah ke cicilan. Tersedia pilihan tenor hingga 12 bulan.
            </p>
          </div>
          <img src="https://wondr.bni.co.id/api/image/frame_1597880519_1751484415405.png"></img>
        </div>

        <div className="bg-[#EAE6FF] text-[#000] rounded-xl flex flex-col justify-between overflow-hidden">

          <div className="">
            <h3 className="text-gray-600 ps-6 pt-6 pb-3">Card to cash</h3>
            <h3 className="text-[30px] font-semibold ps-6 pb-4 pe-6 leading-none">Pinjam dana dari limit kartu kredit</h3>
            <p className="text-sm text-gray-600 ps-6 pb-5 pe-6">
              Dapetin akses pinjaman dana tunai dari limit kartu kreditmu—langsung cair ke rekening.
            </p>
          </div>
          <img src="https://wondr.bni.co.id/api/image/group_427323197_1751484797654.png"></img>
        </div>

      </div>
      
    </section>
  );
}
