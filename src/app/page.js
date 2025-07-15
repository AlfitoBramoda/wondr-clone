"use client";

import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Card from '../components/Card'
import FinancialInsights from '../components/insight';

function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <FinancialInsights/>
    </div>
  );
}
export default Home;
