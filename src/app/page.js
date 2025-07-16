"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel'; 
import Insight from '@/components/insight';
import PromoSection from '@/components/promo';
import Faq from '@/components/Faq';
function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Insight/>
      <PromoSection/>
      <div className="container mx-auto p-6">
      </div>
    </div>
  );
}
export default Home;
