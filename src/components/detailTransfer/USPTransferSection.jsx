import React from 'react';
import Image from 'next/image';

const USPTransferSection = () => {
  const uspData = [
    {
      id: 1,
      title: "Instan dan aman",
      description: "Dengan sistem keamanan terpercaya, dana kamu akan terkirim dalam hitungan detik.",
      imageUrl: "https://wondr.bni.co.id/api/image/usp_transfer-2_1751639918006.png",
      imageAlt: "Instan dan aman"
    },
    {
      id: 2,
      title: "Bisa ke berbagai mata uang",
      description: "Selain IDR, sesama BNI bisa kirim 12 mata uang lain.",
      imageUrl: "https://wondr.bni.co.id/api/image/usp_transfer-1_1751639922310.png",
      imageAlt: "Bisa ke berbagai mata uang"
    },
    {
      id: 3,
      title: "Jadwal transfer fleksibel",
      description: "Mau atur jadwal atau kirim ke banyak orang sekaligus? Bisa!",
      imageUrl: "https://wondr.bni.co.id/api/image/usp_transfer_1751639932089.png",
      imageAlt: "Jadwal transfer fleksibel"
    }
  ];

  return (
    <div className="usp-section">
      <div className="max-w-7xl mx-auto px-4 mt-6 md:mt-18 mb-6 md:mb-9">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-gray-900 text-center font-bold">
          Transfer ke mana aja, gak paket ribet
        </h2>
        
        <div className="grid md:grid-cols-3 md:mt-10 w-full place-items-center gap-6 md:gap-0">
          {uspData.map((item) => (
            <div 
              key={item.id}
              className="flex flex-col h-full items-center text-center p-6 max-w-sm"
            >
              <div className="relative w-28 h-28 md:w-44 md:h-44 mb-2 md:mb-6">
                <Image
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 176px"
                  priority
                />
              </div>
              
              <h3 className="text-base md:text-2xl font-bold mt-2 md:mt-6 min-h-0 md:min-h-16 xl:min-h-0 text-gray-900">
                {item.title}
              </h3>
              
              <div className="text-sm md:text-base font-light mt-2 md:mt-4 text-gray-700 leading-snug flex-grow">
                <p className="text-center text-black font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default USPTransferSection;