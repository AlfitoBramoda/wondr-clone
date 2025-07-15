"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '../../../components/Navbar';
import { ObligasiHead } from '@/components/detailObligasi/ObligasiHead';
import { ObligasiBenefit } from '@/components/detailObligasi/ObligasiBenefit';
import { ObligasiSimulation } from '@/components/detailObligasi/ObligasiSimulation';
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds';
import Footer from '@/components/footer';
import { ObligasiFaq } from '@/components/detailObligasi/ObligasiFaq';

export default function Obligasi() {
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

  return (
    <>
      <Navbar />
      <ObligasiHead />
      <ObligasiBenefit />

      {/* OBLIGASI INSTRUMENT -- NOT YET */}
      <div className="py-6 md:pb-[72px] md:py-0 bg-white">
        <div className="container-120 text-center mb-6 md:mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-neutral-900 text-center font-semibold">
            Kenali Instrumen Obligasi/Sukuk (ID)
          </h2>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              el: '.instrument-pagination'
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="pb-6"
          >
            {instruments.map((instrument, index) => (
              <SwiperSlide key={index}>
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
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center pb-6 md:hidden">
            <div className="instrument-pagination flex justify-center"></div>
          </div>
        </div>
      </div>

      <ObligasiSimulation />

      {/* OBLIGASI CAROUSE STEP -- NOT YET */}

      <ObligasiFaq />
      <ObligasiAds />
      <Footer />
    </>
  );
}
