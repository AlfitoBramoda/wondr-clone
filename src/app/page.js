"use client";

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Card from '../components/Card'
import FinancialInsights from '../components/insight';
import Pinjaman from '../components/pinjaman'
import Hero from '../components/fitur/hero'
import Footer from '@/components/footer';

function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <FinancialInsights/>
      <Pinjaman />
      <Footer />
      {/* <Hero image="https://wondr.bni.co.id/api/image/transfer_1751639831872.png" txt1='Bayar & Beli yey'/> */}
    </div>
  );
}
export default Home;
