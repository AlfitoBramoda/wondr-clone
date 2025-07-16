import React from 'react';

const ProductTypeSection = () => {
  const productTypes = [
    {
      id: 1,
      title: "Pasar Uang",
      description: "Risiko paling rendah dengan imbal hasil stabil.",
      badge: "Cocok untuk investor pemula",
      position: "left"
    },
    {
      id: 2,
      title: "Pendapatan Tetap",
      description: "Risiko dan potensi imbal hasil menengah.",
      badge: "Cocok untuk investor moderat",
      position: "left"
    },
    {
      id: 3,
      title: "Campuran",
      description: "Gabungan beberapa instrumen dengan imbal hasil dan risiko berimbang.",
      badge: "Cocok untuk investor berpengalaman",
      position: "right"
    },
    {
      id: 4,
      title: "Saham",
      description: "Peluang imbal hasil jangka panjang lebih besar dengan risiko tinggi.",
      badge: "Cocok untuk investor agresif",
      position: "right"
    }
  ];

  const leftProducts = productTypes.filter(product => product.position === "left");
  const rightProducts = productTypes.filter(product => product.position === "right");

  return (
    <div className="product-type-section">
      <div className="bg-off-white pt-6 lg:pt-[72px]">
        <div className="container-120">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[40px] !leading-snug lg:!leading-tight text-black text-center font-demibold">
            Pilihan investasi, beragam tingkat risiko dan imbal hasil
          </h2>
          
          <div className="flex flex-col gap-4 mt-6 lg:mt-16 relative w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-4 lg:absolute left-0">
              {leftProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 flex flex-col gap-3 min-h-[164px] lg:max-w-[16rem] xl:max-w-80 2xl:max-w-[360px]">
                  <div className="flex flex-col gap-2">
                    <strong className="font-demibold text-sm lg:text-2xl">{product.title}</strong>
                    <p className="text-xs lg:text-base font-light">{product.description}</p>
                  </div>
                  <span className="
                    text-center
                    w-fit
                    bg-lime-200
                    text-black
                    font-demibold
                    text-xs md:text-sm
                    lg:text-xs xl:text-sm
                    px-2 py-[6px] rounded-full
                  ">
                    {product.badge}
                  </span>
                </div>
              ))}
            </div>
            
          {/* Center Image */}
          <img 
            alt="Investment Detail" 
            loading="lazy" 
            width="800" 
            height="600" 
            decoding="async" 
            data-nimg="1" 
            className="w-full lg:w-[60%] xl:w-6/12 max-h-[600px] mx-auto h-auto mt-6 rounded-lg object-bottom" 
            src="https://wondr.bni.co.id/api/image/reksa_dana_1751643386528.png" 
            style={{color: 'transparent'}}
          />

            {/* Right Column */}
            <div className="flex flex-col gap-4 lg:absolute right-0">
              {rightProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl p-4 flex flex-col gap-3 min-h-[164px] lg:max-w-[16rem] xl:max-w-80 2xl:max-w-[360px]">
                  <div className="flex flex-col gap-2">
                    <strong className="font-demibold text-sm lg:text-2xl">{product.title}</strong>
                    <p className="text-xs lg:text-base font-light">{product.description}</p>
                  </div>
                  <span className="
                    text-center
                    w-fit
                    bg-lime-200
                    text-black
                    font-demibold
                    text-xs md:text-sm
                    lg:text-xs xl:text-sm
                    px-2 py-[6px] rounded-full
                  ">
                    {product.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeSection;
