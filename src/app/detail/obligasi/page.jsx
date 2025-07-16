"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Navbar from '@/components/Navbar';
import { ObligasiHead } from '@/components/detailObligasi/ObligasiHead';
import { ObligasiBenefit } from '@/components/detailObligasi/ObligasiBenefit';
import { ObligasiSimulation } from '@/components/detailObligasi/ObligasiSimulation';
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds';
import Footer from '@/components/footer';
import { ObligasiFaq } from '@/components/detailObligasi/ObligasiFaq';
import ObligasiInstrument from '@/components/detailObligasi/ObligasiInstrument';
import CarouselTutorial from '@/components/fitur/carouselTutorial';

export default function Obligasi() {
  return (
    <>
      <Navbar />
      <ObligasiHead />
      <ObligasiBenefit />

      {/* OBLIGASI INSTRUMENT -- NOT YET */}
      <ObligasiInstrument />

      <ObligasiSimulation />
      <CarouselTutorial />
      <ObligasiFaq />
      <ObligasiAds />
      <Footer />
    </>
  );
}
