export function ObligasiHead(){
    return (
    <div className="w-full bg-[#d9f4f1] flex flex-col-reverse md:flex-row gap-6 max-w-screen mx-auto lg:max-h-[510px] 2xl:max-h-[80vh]">
        <div className="w-full md:w-[48.47%] flex flex-col justify-end items-end">
          <img
            alt="banner"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="w-full h-full object-contain object-bottom"
            src="https://wondr.bni.co.id/assets/images/banner/obligasi.svg"
            style={{}}
          ></img>
        </div>
        <div className="w-full md:w-[49.86%] flex flex-col justify-center gap-2 md:gap-1 xl:gap-6 px-6 lg:py-10 xl:py-0 text-center md:text-left mt-8 md:mt-0 md:pr-10">
          <div className="text-base md:text-2xl font-light text-[#4c4c4c] md:text-charcoal-gray">
            Obligasi/Sukuk
          </div>
          <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-[64px] !leading-snug lg:!leading-tight text-black left font-semibold text-[#141414] font-bold xl:!leading-[120%] max-w-[598px] ">
            Investasi aman dan dijamin negara
          </h2>
          <p className="text-base md:text-2xl font-light text-[#4c4c4c] leading-snug max-w-[598px]">
            Mulai investasi di obligasi dan sukuk untuk hasil stabil tiap bulan.
          </p>
        </div>
      </div>
    )
}