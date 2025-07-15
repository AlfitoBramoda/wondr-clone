"use client";

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Swiper from '../components/SwiperCard';
import Card from '../components/Card'
import FinancialInsights from '../components/insight';
import Footer from '@/components/footer';
import SectionPromo from '../components/SectionPromo';
import { useRouter } from 'next/router';

function Home() {  

  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <Swiper/>
      <FinancialInsights/>
      <SectionPromo/>
      <Footer/>
    </div>
  );
}
export default Home;
