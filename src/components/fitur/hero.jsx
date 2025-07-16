'use client'

import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero({ image, text1, text2, text3 }) {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="w-full bg-turqoise-highlight flex flex-col-reverse md:flex-row gap-6 max-w-screen mx-auto lg:max-h-[510px] 2xl:max-h-[80vh] relative">
            {/* Language Switcher Button - Header */}
            {/* <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10">
                <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
                    <button 
                        onClick={() => setLanguage('id')}
                        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                            language === 'id' 
                                ? 'bg-[#71DBD3] text-black' 
                                : 'text-gray-600 hover:text-black'
                        }`}
                    >
                        ID
                    </button>
                    <button 
                        onClick={() => setLanguage('en')}
                        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                            language === 'en' 
                                ? 'bg-[#71DBD3] text-black' 
                                : 'text-gray-600 hover:text-black'
                        }`}
                    >
                        EN
                    </button>
                    <button 
                        onClick={() => setLanguage('zh')}
                        className={`px-3 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                            language === 'zh' 
                                ? 'bg-[#71DBD3] text-black' 
                                : 'text-gray-600 hover:text-black'
                        }`}
                    >
                        中文
                    </button>
                </div>
            </div> */}

            <div className="w-full md:w-[48.47%] flex flex-col justify-end items-end">
                <img
                alt="banner"
                loading="lazy"
                width="0"
                height="0"
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-contain object-bottom"
                style={{ color: 'transparent' }}
                src={image}
                />
            </div>
            <div className="w-full md:w-[49.86%] flex flex-col justify-center gap-2 md:gap-1 xl:gap-6 px-6 lg:py-10 xl:py-0 text-center md:text-left mt-8 md:mt-0 md:pr-10">
                <div className="text-base md:text-2xl font-light text-granite md:text-charcoal-gray">
                {text1}
                </div>
                <h2 className=" text-3xl md:text-4xl lg:text-5xl xl:text-[64px] !leading-snug lg:!leading-tight text-black left font-demibold text-neutral-900 font-bold xl:!leading-[120%] max-w-[598px] ">
                {text2}
                </h2>
                <p className="text-base md:text-2xl font-light text-black leading-snug max-w-[598px]">
                {text3}
                </p>
            </div>
        </div>
    )
}