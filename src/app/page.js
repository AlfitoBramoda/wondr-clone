"use client";

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Card from '../components/Card'
import FinancialInsights from '../components/insight';
import Footer from '@/components/footer';
import LoanCard from '@/components/LoanCard';
import RegisterAds from '@/components/RegisterAds';

function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <FinancialInsights/>
      <LoanCard />
      <RegisterAds />
      <Footer/>
    </div>
  );
}
export default Home;
