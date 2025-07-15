"use client";

import { useState, useEffect } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array gambar banner
  const banners = [
    {
      id: 1,
      image: "https://wondr.bni.co.id/_next/image?url=%2Fapi%2Fimage%2Fbanner_1_1751643019762.png&w=1920&q=75", // Path relatif dari folder public
      alt: "Banner 1 - BNI HUT Treats"
    },
    {
      id: 2,
      image: "https://wondr.bni.co.id/_next/image?url=%2Fapi%2Fimage%2Fbanner_1_1751643019762.png&w=1920&q=75", // Gunakan gambar yang sama atau ganti dengan banner2.png jika ada
      alt: "Banner 2 - Promo Special"
    },
    {
      id: 3,
      image: "https://wondr.bni.co.id/_next/image?url=%2Fapi%2Fimage%2Fbanner_1_1751643019762.png&w=1920&q=75", // Gunakan gambar yang sama atau ganti dengan banner3.png jika ada
      alt: "Banner 3 - Wandr Premium"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Auto slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Banner Container with sliding animation */}
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className="w-full flex-shrink-0"
          >
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 md:p-3 shadow-lg z-10 transition-all"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 rounded-full p-2 md:p-3 shadow-lg z-10 transition-all"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-60 hover:bg-opacity-80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;