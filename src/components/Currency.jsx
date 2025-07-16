"use client";

import { useState, useEffect, useRef } from "react";

const countryList = [
  {
    name: "Amerika Serikat",
    title: "USA",
    image: "https://wondr.bni.co.id/api/image/ic_us_usd_1751541579711.png",
    description: "Amerika Serikat",
  },
  {
    name: "Singapura",
    title: "Singapore",
    image: "https://wondr.bni.co.id/api/image/ic_sg_sgd_1751541618680.png",
    description: "Singapura",
  },
  {
    name: "Malaysia",
    title: "Malaysia",
    image: "https://wondr.bni.co.id/api/image/ic_my_myr_1751541626531.png",
    description: "Malaysia",
  },
  {
    name: "Jepang",
    title: "Japan",
    image: "https://wondr.bni.co.id/api/image/ic_jp_jpy_1751541707504.png",
    description: "Jepang",
  },
  {
    name: "Inggris Raya",
    title: "United Kingdom",
    image: "https://wondr.bni.co.id/api/image/country_flag_1751541734221.png",
    description: "Inggris Raya",
  },
  {
    name: "Australia",
    title: "Australia",
    image: "https://wondr.bni.co.id/api/image/ic_au_aud_1751541765676.png",
    description: "Australia",
  },
  {
    name: "Hongkong",
    title: "Hongkong",
    image: "https://wondr.bni.co.id/api/image/hk_1751541861459.png",
    description: "Hongkong",
  },
];

export default function Currency() {
  const data = [...countryList, ...countryList]; // duplikat untuk loop mulus
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === countryList.length) {
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 300); // jeda transisi
    }
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-8 md:py-12 bg-white">
      <p className="text-center text-2xl md:text-[40px] font-semibold text-neutral-900 leading-[140%]">
        Bisa kirim uang ke
      </p>

      <div className="overflow-hidden w-fit h-[90px] md:max-h-[90px]">
        <div
          className="flex flex-col"
          style={{
            transform: `translateY(-${index * 90}px)`,
            transition: isTransitioning ? "transform 0.3s ease" : "none",
          }}
        >
          {data.map((country, i) => (
            <div key={i} className="flex gap-2 items-center h-[90px]">
              <img
                alt={country.title}
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-14 h-14 md:w-[90px] md:h-[90px] object-contain bg-transparent"
                src={country.image}
              />
              <span className="text-2xl md:text-[40px] font-semibold text-neutral-900 leading-[140%]">
                {country.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
