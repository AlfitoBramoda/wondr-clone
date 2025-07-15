export function ObligasiSimulation(){
    return(
        <div className="w-full flex justify-center bg-[#F9F9F9] px-6 py-6 md:py-9 md:px-20 lg:py-[72px]">
        <div className="grid grid-flow-col grid-rows-[auto_auto_auto] gap-6 md:gap-[40px] md:grid-rows-[auto_auto]">
          <div className="col-span-1 md:col-span-4 order-1 text-center md:text-left">
            <h2 className="md:text-left font-semibold pb-4 text-2xl md:text-3xl xl:text-[40px] leading-normal text-black">
              Simulasiin potensi passive income kamu
            </h2>
          </div>

          <div className="col-span-1 md:col-span-4 order-3 md:order-2 self-end -mb-6 lg:-mb-[72px]">
            <img
              alt="count_bonds_icon"
              loading="lazy"
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              className="mx-auto w-full h-auto object-contain"
              src="https://wondr.bni.co.id/assets/images/obligasi/calculate_bonds_icon.svg"
              style={{}}
            />
          </div>

          <div className="col-span-1 md:col-span-5 xl:col-span-6 md:row-span-2 order-2 md:order-3">
            <div className="w-full bg-white rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-4 mb-6 xl:grid-cols-2">
                <div className="flex flex-col justify-start">
                  <h5 className="font-bold text-[16px] md:text-[18px] text-black">
                    Jika modal investasimu
                  </h5>
                  <div className="relative w-full">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-6 text-black">
                      Rp
                    </span>
                    <input
                      inputMode="decimal"
                      pattern="[0-9]*"
                      className="border text-black rounded-lg h-14 w-full py-4 pl-8 pr-12 placeholder:text-black border-[#C6C6C6] focus:outline-turquoise-400"
                      placeholder="0"
                      type="text"
                      defaultValue="10.000.000"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <h5 className="font-bold text-[16px] md:text-[18px] text-black">
                    dengan tingkat kupon per tahun
                  </h5>
                  <input
                    inputMode="decimal"
                    pattern="[0-9]*"
                    className="border text-black border-[#C6C6C6] rounded-lg h-14 w-full p-4 focus:outline-turquoise-400 placeholder:text-black"
                    type="text"
                    defaultValue="5,5%"
                  />
                </div>
              </div>

              <div className="text-black">
                <h2 className="font-bold text-[16px] md:text-[18px]">
                  Keuntungan yang akan didapatkan
                </h2>
                <p className="mb-6 text-xs md:text-[14px]">
                  Jika jatuh tempo dalam 3 Tahun
                </p>

                <div className="grid grid-cols-2 mb-4">
                  <p className="text-sm md:text-base">Nilai kupon</p>
                  <strong className="font-bold text-right text-sm md:text-lg">
                    Rp45.833
                  </strong>
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <p className="text-sm md:text-base">Pajak investasi (10%)</p>
                  <strong className="font-bold text-right text-sm md:text-lg">
                    -Rp4.583,3
                  </strong>
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <p className="text-sm md:text-base">
                    Biaya penyimpanan per tahun (0.0111%)
                  </p>
                  <strong className="font-bold text-right text-sm md:text-lg">
                    -Rp92,5
                  </strong>
                </div>

                <div className="grid grid-cols-2 mb-4">
                  <p className="text-sm md:text-base">Biaya transfer kupon</p>
                  <strong className="text-[#42B346] font-bold text-right text-sm md:text-lg">
                    Gratis
                  </strong>
                </div>

                <hr />

                <div className="grid grid-cols-2 my-4">
                  <p className="text-sm md:text-base">Estimasi kupon bulanan</p>
                  <strong className="text-[#42B346] font-bold text-right text-base md:text-2xl">
                    Rp41.157
                  </strong>
                </div>

                <hr className="border border-dashed border-[#DADADA]" />

                <div className="grid grid-cols-2 my-4">
                  <p className="text-sm md:text-base">
                    Estimasi akumulasi kupon saat jatuh tempo
                  </p>
                  <strong className="text-[#42B346] font-bold text-right text-base md:text-2xl">
                    Rp1.481.652
                  </strong>
                </div>

                <div className="flex gap-2">
                  <img
                    alt="icon-info"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="w-6 h-6"
                    src="https://icones.pro/wp-content/uploads/2021/05/icone-d-information-rouge.png"
                    style={{ color: "transparent" }}
                  />
                  <p className="text-[#7A7A7A] text-sm md:text-base">
                    Hasil simulasi tidak berlaku umum karena tiap produk
                    memiliki kupon berbeda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}