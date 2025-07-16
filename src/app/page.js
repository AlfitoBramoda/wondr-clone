"use client";

import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel'; 
import Insight from '@/components/insight';
import PromoSection from '@/components/promo';
import Faq from '@/components/Faq';
import Swiper from '../components/SwiperCard';
import Card from '../components/Card'
import Footer from '@/components/footer';
import SectionPromo from '../components/SectionPromo';
import LoanCard from '@/components/LoanCard';
import RegisterAds from '@/components/RegisterAds';
function Home() {  

  return (
    <div>
      <Navbar />
      <Carousel />
      <Insight/>
      <PromoSection/>
      <Card/>
      <Swiper/>
      <SectionPromo/>
      <LoanCard />
      <RegisterAds />
      <Footer/>
    </div>
  );
}
export default Home;
