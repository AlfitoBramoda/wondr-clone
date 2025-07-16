import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const PromoCard = ({ imageUrl, link, alt, index }) => {
  return (
    <div className="pr-4 md:pr-10">
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105 duration-300"
      >
        <img 
          alt={alt}
          loading="lazy"
          width="0"
          height="0"
          decoding="async"
          className="rounded-xl w-full h-full object-cover"
          src={imageUrl}
          style={{ color: 'transparent' }}
        />
      </a>
    </div>
  );
};

const BNIPromoSection = () => {
  const swiperRef = useRef(null);

  const promoData = [
    {
      id: 1,
      imageUrl: "https://wondr.bni.co.id/api/image/pn.mc-hut79-generic-090725-min_1751968118091.jpg",
      link: "https://bniexperience.bni.co.id/promo/detail/kejar-promonya-jangan-sampai-ketinggalan-dqjvml?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=generic_qris_kartu",
      alt: "promo-0"
    },
    {
      id: 2,
      imageUrl: "https://wondr.bni.co.id/api/image/pn.mc-hut79-cc-090725-min_1751968178368.jpg",
      link: "https://bniexperience.bni.co.id/promo/detail/cashback-hingga-rp790000-dan-annual-fee-rewards-for-life-adckig?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=cc_790k",
      alt: "promo-1"
    },
    {
      id: 3,
      imageUrl: "https://wondr.bni.co.id/api/image/pn-hut79-gopay25k-080725-min_1751957528583.jpg",
      link: "https://bniexperience.bni.co.id/promo/detail/dapatkan-e-voucher-gopay-rp25000-efwivb?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=gopay_25k",
      alt: "promo-2"
    },
    {
      id: 4,
      imageUrl: "https://wondr.bni.co.id/api/image/pn-hut79-fitur79k-080725-min_1751957548955.jpg",
      link: "https://bniexperience.bni.co.id/promo/detail/cashback-rp79000-scpmwq?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=fitur_bayarbeli79k",
      alt: "promo-3"
    },
    {
      id: 5,
      imageUrl: "https://wondr.bni.co.id/api/image/pn.mc-boga-070725-min_1751960126693.jpg",
      link: "https://bniexperience.bni.co.id/promo/detail/dapatkan-voucher-belanja-hingga-rp100000-uslfxo?utm_source=microsite&utm_medium=home_promo&utm_campaign=wondr&utm_term=promocard&utm_content=bogauv",
      alt: "promo-4"
    }
  ];

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="bg-[#F0F0F0] relative py-6 md:py-10 overflow-hidden">
      {/* Decorative Images */}
      <img 
        src="https://wondr.bni.co.id/assets/images/svg/left-decor.svg" 
        alt="left-decor" 
        className="block absolute left-0 top-10 sm:top-12 md:top-16 w-12 sm:w-16 lg:w-auto z-10"
      />
      <img 
        src="https://wondr.bni.co.id/assets/images/svg/right-decor.svg" 
        alt="right-decor" 
        className="block absolute -right-4 top-10 sm:top-12 md:top-16 w-12 sm:w-16 lg:w-auto z-10"
      />

      <div className="container-120 items-center max-w-7xl mx-auto px-4">
        <div className="bg-[#F9F9F9] pl-6 pt-6 md:pl-10 md:pt-10 rounded-t-[32px] h-full relative overflow-visible">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pr-6 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight text-black font-semibold text-center md:text-left">
              Lebih banyak promo di wondr!
            </h2>
            <div className="flex justify-center items-center w-full md:w-auto">
              <button 
                type="button" 
                className="px-8 py-[19px] text-sm text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px] py-3 px-6 text-xs md:text-base md:py-[13px] md:px-8 h-fit transition-colors duration-300"
              >
                Lihat Selengkapnya
              </button>
            </div>
          </div>

          {/* Swiper Section */}
          <div className="mt-6 md:mt-8">
            <Swiper
              ref={swiperRef}
              modules={[Navigation]}
              spaceBetween={0}
              slidesPerView="auto"
              centeredSlides={false}
              loop={false}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 1.8,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 24,
                },
                1280: {
                  slidesPerView: 3.2,
                  spaceBetween: 24,
                },
              }}
              className="swiper-backface-hidden flex items-center"
            >
              {promoData.map((promo, index) => (
                <SwiperSlide 
                  key={promo.id}
                  style={{ width: 'auto', maxWidth: '400px' }}
                >
                  <PromoCard
                    imageUrl={promo.imageUrl}
                    link={promo.link}
                    alt={promo.alt}
                    index={index}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <div className="flex gap-6 lg:justify-between pr-6 mt-6 justify-end">
              <button 
                onClick={handlePrevClick}
                className="bg-[#71DBD3] hover:bg-[#5CCFC5] justify-center items-center rounded-full w-8 h-8 md:w-12 md:h-12 z-10 cursor-pointer flex transition-colors duration-300 disabled:bg-[#A7ECE8] disabled:cursor-not-allowed"
              >
                <svg 
                  className="w-4 h-4 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
              </button>
              
              <button 
                onClick={handleNextClick}
                className="bg-[#71DBD3] hover:bg-[#5CCFC5] justify-center items-center rounded-full w-8 h-8 md:w-12 md:h-12 z-10 cursor-pointer flex transition-colors duration-300"
              >
                <svg 
                  className="w-4 h-4 md:w-6 md:h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Image */}
        <div className="max-w-[990px] lg:max-w-full overflow-hidden flex justify-center">
          <img 
            src="https://wondr.bni.co.id/assets/images/svg/subtract.svg" 
            alt="promo" 
            className="object-cover object-center w-[990px] lg:w-full max-w-none"
          />
        </div>
      </div>
    </section>
  );
};

export default BNIPromoSection;