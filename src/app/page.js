"use client";

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

function Home() {  
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">User Dashboard (CSR)</h1>
      </div>
    </div>
  );
}
export default Home;