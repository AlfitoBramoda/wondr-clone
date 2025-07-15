"use client";

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Card from '../components/Card'
import FinancialInsights from '../components/insight';
import Footer from '../components/footer'

function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <FinancialInsights/>
      <Footer/>
    </div>
  );
}
export default Home;
