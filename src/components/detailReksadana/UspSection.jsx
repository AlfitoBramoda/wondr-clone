import React from 'react';

const UspSection = () => {
  const uspFeatures = [
    {
      id: 1,
      image: "https://wondr.bni.co.id/assets/images/usp/uspreksa-dana1.svg",
      alt: "Mulai dari Rp100.000",
      title: "Mulai dari Rp100.000",
      description: "Gak perlu modal besar untuk mulai investasi."
    },
    {
      id: 2,
      image: "https://wondr.bni.co.id/assets/images/usp/uspreksa-dana2.svg",
      alt: "Beragam produk buat kamu",
      title: "Beragam produk buat kamu",
      description: "Tersedia lebih dari 75+ produk reksa dana dan 10+ manajer investasi terverifikasi."
    },
    {
      id: 3,
      image: "https://wondr.bni.co.id/assets/images/usp/uspreksa-dana3.svg",
      alt: "Praktis, 100% online",
      title: "Praktis, 100% online",
      description: "Registrasi, pembelian, hingga monitoring portofolio cukup lewat aplikasi."
    }
  ];

  return (
    <div className="usp-section">
      <div className="container-120 mt-6 md:mt-[72px] mb-6 md:mb-9">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-neutral-900 text-center font-demibold">
          Kenapa investasi di Reksa Dana?
        </h2>
        
        <div className="grid md:grid-cols-3 md:mt-10 w-full place-items-center">
          {uspFeatures.map((feature) => (
            <div key={feature.id} className="flex flex-col h-full items-center text-center p-6">
              <img 
                alt={feature.alt}
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-28 h-28 md:w-44 md:h-44 object-contain"
                src={feature.image}
                style={{}}
              />
              
              <strong className="text-base md:text-2xl font-demibold mt-2 md:mt-6 min-h-0 md:min-h-16 xl:min-h-0">
                {feature.title}
              </strong>
              
              <div className="text-sm md:text-base font-light mt-2 md:mt-4 text-charcoal-gray leading-snug flex-grow [&_div]:text-neutral-900">
                <div className="ql-content-wrapper">
                  <div className="ql-content ql-editor text-black font-normal">
                    <p className="ql-align-center">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UspSection;
