import Image from "next/image";

export default function LoanCard() {
  return (
    <section className="bg-white py-12 px-4 ">
      <h2 className="ps-30 pe-30 pb-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-semibold  ">
        Pinjaman fleksibel, akses cepat, bunga bersahabat!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl gap-10 mx-auto ">
        <div className="bg-[#EAE6FF] text-[#000] rounded-xl flex flex-col justify-between overflow-hidden">
          <div className="">
            <h3 className="text-gray-600 ps-6 pt-8 pb-3">Ubah Cicilan</h3>
            <h3 className="text-[30px] font-semibold ps-6 pb-4 leading-none">
              Bayar tagihan jadi ringan
            </h3>
            <h3 className="text-gray-600 ps-6 pb-5 pe-6">
              Punya tagihan yang besar? Jadikan lebih enteng dengan ubah ke
              cicilan. Tersedia pilihan tenor hingga 12 bulan.
            </h3>
          </div>
          <img src="https://wondr.bni.co.id/api/image/frame_1597880519_1751484415405.png"></img>
        </div>

        <div className="bg-[#EAE6FF] text-[#000] rounded-xl flex flex-col justify-between overflow-hidden">
          <div className="">
            <h3 className="text-gray-600 ps-6 pt-8 pb-3">Card to Cash</h3>
            <h3 className="text-[30px] font-semibold ps-6 pb-4 pe-6 leading-none">
              Pinjam dana dari limit kartu kredit
            </h3>
            <h3 className=" text-gray-600 ps-6 pb-5 pe-6">
              Dapetin akses pinjaman dana tunai dari limit kartu
              kreditmu—langsung cair ke rekening.
            </h3>
          </div>
          <img src="https://wondr.bni.co.id/api/image/group_427323197_1751484797654.png"></img>
        </div>
      </div>
    </section>
  );
}
