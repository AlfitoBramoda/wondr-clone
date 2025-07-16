import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const MultiCurrencyCarousel = () => {
  const currencies = [
    { code: "IDR", image: "https://wondr.bni.co.id/assets/images/multi-currency/IDR.png" },
    { code: "HKD", image: "https://wondr.bni.co.id/assets/images/multi-currency/HKD.png" },
    { code: "SGP", image: "https://wondr.bni.co.id/assets/images/multi-currency/SGP.png" },
    { code: "THB", image: "https://wondr.bni.co.id/assets/images/multi-currency/THB.png" },
    { code: "AUD", image: "https://wondr.bni.co.id/assets/images/multi-currency/AUD.png" },
    { code: "CNY", image: "https://wondr.bni.co.id/assets/images/multi-currency/CNY.png" },
    { code: "SAR", image: "https://wondr.bni.co.id/assets/images/multi-currency/SAR.png" },
    { code: "USD", image: "https://wondr.bni.co.id/assets/images/multi-currency/USD.png" },
    { code: "KRW", image: "https://wondr.bni.co.id/assets/images/multi-currency/KRW.png" },
    { code: "JPY", image: "https://wondr.bni.co.id/assets/images/multi-currency/JPY.png" },
    { code: "EUR", image: "https://wondr.bni.co.id/assets/images/multi-currency/EUR.png" },
    { code: "GBP", image: "https://wondr.bni.co.id/assets/images/multi-currency/GBP.png" },
    { code: "MYR", image: "https://wondr.bni.co.id/assets/images/multi-currency/MYR.png" },
  ];

  return (
    <div className="flex flex-col bg-gray-50 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black text-center leading-tight">
            Pilihan mata uang sesuai yang kamu butuhkan
          </h2>
        </div>

        <div className="mt-16">
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
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
                  <div className="flex justify-center items-center p-2">
                    <img
                      src={currency.image}
                      alt={currency.code}
                      className="w-12 h-12 object-contain"
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

export default MultiCurrencyCarousel;
