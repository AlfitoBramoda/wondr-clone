"use client";

import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel'; 
import Insight from '@/components/insight';
import PromoSection from '@/components/promo';
import Swiper from '../components/SwiperCard';
import Card from '../components/Card'
import Footer from '@/components/footer';
import SectionPromo from '../components/SectionPromo';
import LoanCard from '@/components/LoanCard';
import RegisterAds from '@/components/RegisterAds';
import SectionMotion from '../components/SectionMotion';
import SyaratKetentuan from '@/components/SyaratKetentuan';

function Home() {  

  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <Swiper/>
      <Insight/>
      <SectionMotion/>
      <LoanCard />
      <RegisterAds />
      <PromoSection/>

      {/* 
      <SectionMotion/>
      <Swiper/>
      <SectionPromo/>
      <PromoSection/>
      <Insight/>
      <LoanCard />
      <RegisterAds /> 
      */}

      <Footer/>
      <SyaratKetentuan/>
    </div>
  );
}
export default Home;
