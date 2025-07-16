import React, { useState, useEffect, useRef } from 'react';

const CarouselReksadana = () => {
    const [activeTab, setActiveTab] = useState('Buka Rekening Investasi');
    const [currentSlide, setCurrentSlide] = useState(0);
    const [swiper, setSwiper] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const swiperRef = useRef(null);
    const scriptRef = useRef(null);
    const linkRef = useRef(null);
    
    const tabData = {
        'Buka Rekening Investasi': {
        slides: [
            {
            id: 1,
            title: 'Masuk ke menu "Reksa Dana"',
            description: 'Kamu bisa klik langsung dari tab "Growth", atau di halaman "Semua fitur" pada bagian "Investasi".',
            image: "https://wondr.bni.co.id/api/image/1_1751544138235.png"
            },
            {
            id: 2,
            title: "Kamu bisa cek keuntungan dan produk reksa dana",
            description: 'Sebelum mulai pembukaan rekening, kamu juga bisa lihat-lihat berbagai produk reksa dana serta keuntunganya.',
            image: "http://wondr.bni.co.id/api/image/2_1751544172089.png"
            },
            {
            id: 3,
            title: "Cek data personal kamu",
            description: "Pastiin dan sesuain dengan data terkini ya.",
            image: "https://wondr.bni.co.id/api/image/3_1751544179235.png"
            },
            {
            id: 4,
            title: "Pilih rekening transaksi",
            description: "Pilih rekening yang akan digunakan untuk mendanai dan menerima hasil investasimu.",
            image: "https://wondr.bni.co.id/api/image/4_1751544202020.png"
            },
            {
            id: 5,
            title: "Jawab 5 pertanyaan seputar profil risiko",
            description: 'Nanti kamu akan mendapat rekomendasi produk dengan tingkat risiko dan potensi keuntungan yang sesuai kamu.',
            image: "https://wondr.bni.co.id/api/image/5_1751544212203.png"
            },
            {
            id: 6,
            title: "Konfirmasi pembuatan rekening investasi",
            description: 'Periksa kembali informasimu, lalu klik Lanjut. Setelah itu, baca dan setujui Syarat &amp; Ketentuan pembuatan rekening investasi.',
            image: "https://wondr.bni.co.id/api/image/6_1751544218579.png"
            },
            {
            id: 7,
            title: "Otorisasi pembuatan akun",
            description: "Gunakan PIN 6 digit wondr untuk konfirmasi pembuatan akun investasi.",
            image: "https://wondr.bni.co.id/api/image/7_1751544222937.png"
            },
            {
            id: 8,
            title: "Pembukaan rekening berhasil diajukan!",
            description: "Selagi diproses, kamu bisa cek status pengajuanmu secara berkala.",
            image: "https://wondr.bni.co.id/api/image/8_1751544227672.png"
            }
        ]
        },
        'Beli Reksa Dana': {
        slides: [
            {
            id: 1,
            title: 'Klik "Beli Produk"',
            description: 'Kamu bisa temuin pilihannya di halaman "Reksa Dana."',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_02_1751544621496.png"
            },
            {
            id: 2,
            title: "Pilih produk",
            description: 'Pilih salah satu produk investasi yang tersedia, lalu klik "Beli Sekarang."',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_03_1751544453728.png"
            },
            {
            id: 3,
            title: "Masukkan nominal investasi",
            description: 'Masukkan jumlah pembelian dan pilih sumber dana sebelum klik "Lanjut."',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_11_1751544595623.png"
            },
            {
            id: 4,
            title: "Konfirmasi pembelian",
            description: 'Periksa kembali detail pembelianmu, lalu klik Lanjut. Setelah itu, baca dan setujui Syarat &amp; Ketentuan.',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_06_1751544466616.png"
            },
            {
            id: 5,
            title: "Otorisasi pembelian produk",
            description: 'Gunakan PIN 6 digit wondr untuk konfirmasi pembelian produk.',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_09_1751544473099.png"
            },
            {
            id: 6,
            title: "Pembelianmu sedang diproses!",
            description: 'Cek menu “Riwayat Transaksi” untuk melihat status dan detail pembelianmu.',
            image: "https://wondr.bni.co.id/api/image/beli_reksadana_10_1751544480114.png"
            }
        ]
        }
    };

    const tabs = Object.keys(tabData);
    const currentData = tabData[activeTab] || tabData[tabs[0]];

    useEffect(() => {
        if (!scriptRef.current) {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
        script.onload = () => {
            setIsLoaded(true);
        };
        document.head.appendChild(script);
        scriptRef.current = script;
        }

        if (!linkRef.current) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
        document.head.appendChild(link);
        linkRef.current = link;
        }

        return () => {
        if (swiper) {
            swiper.destroy(true, true);
            setSwiper(null);
        }
        };
    }, []);

    useEffect(() => {
        if (isLoaded && swiperRef.current) {
        initSwiper();
        }
    }, [isLoaded, activeTab]);

    const initSwiper = () => {
        if (swiper) {
        swiper.destroy(true, true);
        }

        if (window.Swiper && swiperRef.current) {
        const newSwiper = new window.Swiper(swiperRef.current, {
            slidesPerView: 'auto',
            spaceBetween: 50,
            centeredSlides: true,
            loop: false,
            speed: 500,
            effect: 'slide',
            initialSlide: 0,
            breakpoints: {
            640: {
                spaceBetween: 80,
            },
            768: {
                spaceBetween: 120,
            },
            1024: {
                spaceBetween: 150,
            },
            },
            on: {
            slideChange: function() {
                setCurrentSlide(this.activeIndex);
            },
            },
        });

        setSwiper(newSwiper);
        setCurrentSlide(0);
        }
    };

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
        setCurrentSlide(0);
    };

    const goToPrevSlide = () => {
        if (swiper && currentSlide > 0) {
        swiper.slidePrev();
        }
    };

    const goToNextSlide = () => {
        if (swiper && currentData?.slides && currentSlide < currentData.slides.length - 1) {
        swiper.slideNext();
        }
        if(swiper && currentData?.slides && currentSlide == currentData.slides.length - 1) {
            swiper.slideTo(0);
        }
    };

    const goToSlide = (index) => {
        if (swiper) {
        swiper.slideTo(index);
        }
    };

    if (!isLoaded) {
        return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
            </div>
        </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
        <section className="p-6 md:py-9 md:px-20">
            <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
                Gini caranya transfer di wondr
            </h2>
            </div>

            <div className="bg-[#D9F4F1] min-h-[550px] p-4 sm:p-6 md:p-8 lg:py-12 rounded-3xl mt-4 sm:mt-6 md:mt-8 lg:mt-10 relative shadow-sm">
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center sm:gap-6 md:gap-8 lg:gap-12">
                
                <div className="w-5/6 md:w-1/2 lg:w-2/5 order-2 md:order-1">
                <div className="pb-16 md:pb-12 md:ml-16 lg:pb-10 lg:ml-16">
                    <div 
                    ref={swiperRef}
                    className="swiper tutorial-swiper"
                    style={{ overflow: 'hidden' }}
                    >
                    <div className="swiper-wrapper">
                        {currentData?.slides?.map((slide, index) => (
                        <div key={slide.id} className="swiper-slide select-none self-stretch" style={{ width: '280px' }}>
                            <figure className="flex items-center justify-center h-full relative">
                            <div className="w-full h-[250px] xs:h-[270px] sm:h-[300px] md:h-[350px] lg:h-[470px] xl:h-[500px] 2xl:h-[550px] flex-shrink-0 relative">
                                <div className="absolute inset-0">
                                <div 
                                    className="w-full h-full rounded-2xl bg-center bg-contain bg-no-repeat"
                                    style={{
                                    backgroundImage: `url(${slide.image})`
                                    }}
                                    role="img"
                                    aria-label={slide.title}
                                />
                                </div>
                            </div>
                            <figcaption className="sr-only">{slide.title}</figcaption>
                            </figure>
                        </div>
                        ))}
                    </div>
                    </div>
                </div>
                </div>

                <div className="w-full mb-8 md:mb-6 md:w-1/2 lg:w-2/5 h-auto md:pr-20 md:h-[450px] lg:h-[500px] xl:h-[550px] flex flex-col justify-start md:justify-center order-1 md:order-2">
                
                <nav className="category-navigation mb-6" aria-label="chip navigation">
                    <div className="w-full flex gap-2 py-1 px-1 md:gap-3 justify-start flex-nowrap md:flex-wrap overflow-x-auto md:overflow-hidden no-scrollbar">
                    {tabs.map((tab) => (
                        <button
                        key={tab}
                        onClick={() => handleTabChange(tab)}
                        className={`flex-shrink-0 z-20 px-3 py-1.5 sm:px-4 sm:py-2 text-sm rounded-full transition-all duration-300 ease-in-out font-light hover:bg-gray-200 ${
                            activeTab === tab 
                            ? 'bg-[#DEEF5A] text-gray-800 font-semibold' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        aria-pressed={activeTab === tab}
                        >
                        {tab}
                        </button>
                    ))}
                    </div>
                </nav>

                <div className="md:py-2 md:min-h-[30vh] overflow-hidden">
                    <article className="text-left transition-opacity duration-200 ease-in-out opacity-100">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-1 sm:mb-2 md:mb-3">
                        {currentData.slides[currentSlide]?.title}
                    </h3>
                    <div className="text-sm md:text-2xl text-black font-light max-w-none md:leading-[140%]">
                        <p>{currentData.slides[currentSlide]?.description}</p>
                    </div>
                    </article>
                </div>
                </div>

                <div className="absolute left-2 xs:left-3 sm:left-6 md:left-10 lg:left-16 top-1/2 transform -translate-y-1/2 z-30">
                <button
                    onClick={goToPrevSlide}
                    aria-label="Previous slide"
                    className={`z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-colors border-white border ${
                    currentSlide === 0 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-black opacity-50 hover:opacity-60'
                    }`}
                    disabled={currentSlide === 0}
                >
                    <span className="text-white text-lg">‹</span>
                </button>
                </div>

                <div className="absolute right-2 xs:right-3 sm:right-6 md:right-10 lg:right-16 top-1/2 transform -translate-y-1/2 z-30">
                <button
                    onClick={goToNextSlide}
                    aria-label="Next slide"
                    className={`z-20 flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full transition-colors border-white border bg-black opacity-50 hover:opacity-60`}
                >
                    <span className="text-white text-lg">›</span>
                </button>
                </div>

                <div className="absolute left-0 right-0 bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 text-center">
                <div className="flex justify-center gap-2">
                    {currentData?.slides?.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                        index === currentSlide ? 'bg-gray-950' : 'bg-gray-400'
                        }`}
                    />
                    ))}
                </div>
                </div>
            </div>
            </div>
        </section>
        </div>
    );
};

export default CarouselReksadana