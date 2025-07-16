import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeatureCard = ({ title, headline, description, imageUrl, isFlipped, onFlip, redirectUrl }) => {
  return (
    <div className="relative w-full h-full pr-4" style={{ perspective: '1000px' }}>
      <div 
        className="relative w-full h-full"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'none',
          transition: 'transform 0.6s'
        }}
      >
        {/* Front Side */}
        <div 
          className="absolute w-full h-full bg-gray-50 rounded-3xl md:rounded-4xl flex flex-col justify-between min-h-[272px] md:min-h-[420px]"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(0deg)'
          }}
        >
          <Link href={redirectUrl || '#'} className="flex flex-col justify-between h-full">
            <div className="px-4 pt-6 lg:px-6 text-left">
              <h3 className="text-xs md:text-sm xl:text-base font-light text-black">
                {title}
              </h3>
              <p className="text-sm text-black md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-[120%] mt-1 lg:mt-[10px]">
                {headline}
              </p>
            </div>
            <div className="w-full rounded-b-3xl md:rounded-b-4xl overflow-hidden flex justify-center items-end h-full max-h-[250px] md:max-h-[450px]">
              <img 
                alt={title}
                loading="lazy"
                width="500"
                height="0"
                decoding="async"
                className="md:w-full object-contain md:object-cover w-[110%] max-w-[110%] max-h-[250px] md:max-h-[450px]"
                src={imageUrl}
                style={{ 
                  color: 'transparent', 
                  objectPosition: 'center bottom', 
                  aspectRatio: 'auto' 
                }}
              />
            </div>
          </Link>
          
          <button 
            onClick={onFlip}
            className="absolute bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white hover:opacity-70 transition-opacity"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-3 h-3 md:w-5 md:h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

        {/* Back Side */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-gray-50 rounded-3xl md:rounded-4xl flex flex-col justify-between overflow-hidden min-h-[272px] md:min-h-[420px]"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <Link href={redirectUrl || '#'} className="flex-1 p-6 text-left">
            <h3 className="text-xs md:text-sm lg:text-base font-light text-black">
              {title}
            </h3>
            <div className="text-sm md:text-lg lg:text-2xl font-light font-normal text-black leading-[140%] mt-1 lg:mt-[10px] mb-6">
              <div className="ql-content-wrapper">
                <div className="ql-content ql-editor text-black font-normal">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </Link>
          <button 
            onClick={onFlip}
            className="absolute bottom-4 left-4 w-6 h-6 md:bottom-6 md:left-6 md:w-12 md:h-12 rounded-full bg-black flex items-center justify-center opacity-50 border border-white hover:opacity-70 transition-opacity"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-3 h-3 md:w-5 md:h-5 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const BNIFeaturesSwiper = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const features = [
    {
      id: 1,
      title: "Transfer",
      headline: "Kirim uang kapan aja, ke mana aja",
      description: "Kirim uang ke mana aja dan atur jadwal transfer sesuai maumu. Bisa transfer ke banyak tujuan sekaligus!",
      imageUrl: "https://wondr.bni.co.id/api/image/layer_1_1751485455683.png",
      redirectUrl: "/detail/transfer"
    },
    {
      id: 2,
      title: "Mobile Tunai",
      headline: "Tarik tunai bisa tanpa kartu",
      description: "Gak bawa kartu? Gak masalah! Cukup buka aplikasi, tarik tunai segampang itu.",
      imageUrl: "https://wondr.bni.co.id/api/image/group_427323199_1751485555775.png",
      redirectUrl: "/detail/mobile-tunai"
    },
    {
      id: 3,
      title: "E-Wallet",
      headline: "Cek dan top up saldo gak perlu pindah aplikasi",
      description: "Gak perlu buka banyak aplikasi, top up dan cek saldo e-Wallet bisa langsung di sini.",
      imageUrl: "https://wondr.bni.co.id/api/image/illustration_1751485629668.png",
      redirectUrl: "/detail/e-wallet"
    },
    {
      id: 4,
      title: "Transfer Luar Negeri",
      headline: "Kirim uang antarnegara dalam hitungan menit",
      description: "Transfer ke berbagai negara gak perlu nunggu lama. Bisa cek status pengiriman juga.",
      imageUrl: "https://wondr.bni.co.id/api/image/layer_4_1751485713019.png",
      redirectUrl: "/detail/transfer-luar-negeri"
    },
    {
      id: 5,
      title: "Lifestyle",
      headline: "Ada tiket konser, undian, sampai tiket kereta api",
      description: "Dari tiket kereta api, tiket konser, sampai undian berhadiah tersedia buat kamu.",
      imageUrl: "https://wondr.bni.co.id/api/image/left_arm_1751546357234.png",
      redirectUrl: "/detail/lifestyle"
    },
    {
      id: 6,
      title: "Bayar & Beli",
      headline: "Bisa bayar tagihan di puluhan layanan",
      description: "Satu tempat bisa buat beli pulsa, bayar listrik, sampai zakat. Ada pengingat biar gak kelewat!",
      imageUrl: "https://wondr.bni.co.id/api/image/billpay_1751635640586.png",
      redirectUrl: "/detail/bayar-beli"
    },
    {
      id: 7,
      title: "QRIS",
      headline: "Tinggal scan atau tap buat bayar-bayar",
      description: "Bayar ini itu jadi bebas repot, bebas antri, tetap aman, dan praktis.",
      imageUrl: "https://wondr.bni.co.id/api/image/group_427323200_1751485932741.png",
      redirectUrl: "/detail/qris"
    },
    {
      id: 8,
      title: "TapCash",
      headline: "Bayar tol sampai parkir tinggal tap aja",
      description: "Tinggal tempelin kartu ke HP buat cek dan isi saldo. Pakai Express Top Up bisa tanpa login.",
      imageUrl: "https://wondr.bni.co.id/api/image/tapcash_new_1751635836436.png",
      redirectUrl: "/detail/tapcash"
    }
  ];

  const handleCardFlip = (cardId) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  return (
    <section className="py-8 bg-white">
      <div className="container-72 text-center max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight text-black text-center font-semibold">
          Berbagai transaksi cukup satu aplikasi
        </h2>
      </div>
      
      <div className="text-center">
        <div className="mt-4 md:mt-10 pb-2" style={{ paddingBottom: '8px' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView="auto"
            centeredSlides={false}
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1536: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              }
            }}
            className="swiper-backface-hidden"
            style={{ 
              paddingLeft: '72px',
              paddingBottom: '8px' 
            }}
          >
            {features.map((feature) => (
              <SwiperSlide 
                key={feature.id}
                className="2xl:!h-[550px] 2xl:!max-w-[400px] xl:!h-[465px] md:!h-[420px] !h-[272px] !my-2"
                style={{ width: 'auto' }}
              >
                <FeatureCard
                  title={feature.title}
                  headline={feature.headline}
                  description={feature.description}
                  imageUrl={feature.imageUrl}
                  isFlipped={flippedCards[feature.id]}
                  onFlip={() => handleCardFlip(feature.id)}
                  redirectUrl={feature.redirectUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BNIFeaturesSwiper;