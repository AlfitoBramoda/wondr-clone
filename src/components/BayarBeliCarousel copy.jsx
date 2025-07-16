import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const BayarBeliCarousel = () => {
  const currencies = [
    { code: "Air", image: "https://wondr.bni.co.id/api/image/ic_common_water_bills_1751637195240.png" },
    { code: "Listrik", image: "	https://wondr.bni.co.id/api/image/ic_common_electricity_1751637259389.png" },
    { code: "Pendidikan", image: "https://wondr.bni.co.id/api/image/ic_common_education_1751637267618.png" },
    { code: "Asuransi", image: "https://wondr.bni.co.id/api/image/ic_common_insurance_1751637275358.png" },
    { code: "Kartu Kredit", image: "https://wondr.bni.co.id/api/image/ic_common_credit_card_1751637340379.png" },
    { code: "Internet & TV", image: "https://wondr.bni.co.id/api/image/ic_common_tv_internet_bills_1751637355471.png" },
    { code: "Kereta Api", image: "https://wondr.bni.co.id/api/image/ic_common_train_1751637362064.png" },
    { code: "Gas", image: "	https://wondr.bni.co.id/api/image/ic_common_gas_1751637378643.png" },
    { code: "Pajak Daerah dan Lainnya", image: "https://wondr.bni.co.id/api/image/ic_common_other_local_retribution_taxes_1751637407839.png" },
    { code: "Penerbangan", image: "https://wondr.bni.co.id/api/image/ic_common_flight_1751637412725.png" },
    { code: "Dana Pensiun", image: "https://wondr.bni.co.id/api/image/ic_common_pension_1751637424570.png" },
    { code: "SAMSAT", image: "https://wondr.bni.co.id/api/image/ic_common_samsat_1751637430707.png" },
    { code: "BPJS", image: "https://wondr.bni.co.id/api/image/ic_common_bpjs_1751637515698.png" },
    { code: "Kurban", image: "https://wondr.bni.co.id/api/image/ic_common_qurban_1751637567403.png" },
    { code: "Paket Data", image: "https://wondr.bni.co.id/api/image/ic_common_mobile_data_package_1751637650375.png" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center leading-tight">
            Mau bayar tagihan apa?
          </h2>
        </div>

        <div className="mt-16">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={false}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
            }}
            className="currency-swiper"
          >
            {currencies.map((currency, index) => (
              <SwiperSlide key={index} className="!w-24">
                <div className="w-24 flex flex-col justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200">
                  <div className="flex justify-center items-center border border-[#D3D3D3] bg-white rounded-2xl p-6 ">
                    <img
                      src={currency.image}
                      alt={currency.code}
                      className="w-8 h-8 min-w-8 max-h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-semibold text-center text-gray-800">
                    {currency.code}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BayarBeliCarousel;
