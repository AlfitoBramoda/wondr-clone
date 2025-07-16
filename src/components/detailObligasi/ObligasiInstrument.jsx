import React, { useState, useEffect, useRef } from 'react';

const ObligasiInstrument = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [swiper, setSwiper] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const swiperRef = useRef(null);
  const scriptRef = useRef(null);
  const linkRef = useRef(null);

  const instruments = [
    {
      title: "Obligasi Negara Ritel (ORI)",
      subtitle: "Surat Utang Negara",
      type: "Fixed",
      color: "rgb(205, 0, 12)",
      icon: "https://wondr.bni.co.id/api/image/icon_sbn-1_1751638606384.png"
    },
    {
      title: "Sukuk Tabungan (ST)",
      subtitle: "Surat Berharga Syariah Negara", 
      type: "Floating with Floor",
      color: "rgb(189, 207, 255)",
      icon: "https://wondr.bni.co.id/api/image/icon_sbn-2_1751638708738.png"
    },
    {
      title: "Savings Bond Ritel (SBR)",
      subtitle: "Surat Utang Negara",
      type: "Floating with Floor", 
      color: "rgb(255, 234, 234)",
      icon: "https://wondr.bni.co.id/api/image/icon_sbn-3_1751638778216.png"
    },
    {
      title: "Sukuk Ritel (SR)",
      subtitle: "Surat Utang Negara",
      type: "Fixed",
      color: "rgb(218, 207, 242)", 
      icon: "https://wondr.bni.co.id/api/image/icon_sbn-4_1751638867394.png"
    }
  ];

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
      script.onload = () => {
        setIsLoaded(true);
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    if (!linkRef.current) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
      document.head.appendChild(link);
      linkRef.current = link;
    }

    return () => {
      if (swiper) {
        swiper.destroy(true, true);
        setSwiper(null);
      }
    };
  }, []);

  useEffect(() => {
    if (isLoaded && swiperRef.current) {
      initSwiper();
    }
  }, [isLoaded]);

  const initSwiper = () => {
    if (swiper) {
      swiper.destroy(true, true);
    }

    if (window.Swiper && swiperRef.current) {
      const newSwiper = new window.Swiper(swiperRef.current, {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        loop: false,
        speed: 500,
        effect: 'slide',
        initialSlide: 0,
        pagination: {
          el: '.instrument-pagination',
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
        on: {
          slideChange: function() {
            setCurrentSlide(this.activeIndex);
          },
        },
      });

      setSwiper(newSwiper);
      setCurrentSlide(0);
    }
  };

  if (!isLoaded) {
    return (
      <div className="py-6 md:pb-[72px] md:py-0 bg-white">
        <div className="container-120 text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-neutral-900 text-center font-semibold">
            Kenali Instrumen Obligasi/Sukuk (ID)
          </h2>
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          <span className="ml-2 text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 md:pb-[72px] md:py-0 bg-white">
      <div className="container-120 text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-neutral-900 text-center font-semibold">
          Kenali Instrumen Obligasi/Sukuk (ID)
        </h2>
      </div>

      <div className="relative">
        <div 
          ref={swiperRef}
          className="swiper instrument-swiper pb-6"
        >
          <div className="swiper-wrapper">
            {instruments.map((instrument, index) => (
              <div key={index} className="swiper-slide">
                <div className="flex pr-2 md:pr-4 justify-center">
                  <div className="relative w-full max-w-[327px] p-4 bg-white border border-gray-300 rounded-2xl mb-2 shadow-lg">
                    <h3 className="text-sm md:text-lg font-bold mb-2 text-black">
                      {instrument.title}
                    </h3>
                    <p className="text-sm font-light text-[#7A7A7A] leading-[1.4]">
                      {instrument.subtitle}
                    </p>
                    <div className="my-[1rem] h-px w-[calc(100%-5rem-16px)] bg-[#DADADA]"></div>
                    <div
                      className="absolute right-0 w-20 h-20 bottom-0 rounded-tl-[100px] rounded-br-[20px] z-0"
                      style={{ backgroundColor: instrument.color }}
                    >
                      <img
                        alt="icon_sbn"
                        loading="lazy"
                        width="44"
                        height="44"
                        decoding="async"
                        className="w-11 object-contain absolute right-2 bottom-2 pb-3"
                        src={instrument.icon}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <p className="relative text-sm md:text-base font-light text-neutral-900">
                      {instrument.type}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pb-6 md:hidden">
          <div className="instrument-pagination flex justify-center"></div>
        </div>
      </div>

      <style jsx>{`
        .instrument-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          opacity: 1;
          margin: 0 4px;
        }
        .instrument-pagination .swiper-pagination-bullet-active {
          background-color: #1f2937;
        }
      `}</style>
    </div>
  );
};

export default ObligasiInstrument;