'use client'

import Faq from '@/components/fitur/FaqComponent'
import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds'
import Footer from '@/components/footer'

export default function Onboarding() {
    const faqData = [
    {
        id: 0,
        question: "Apakah saya bisa mendaftarkan nomor HP atau email saya sebagai Proxy di BNI dan bank lain?",
        answer: "Tidak. Satu Nomor HP atau email hanya dapat didaftarkan di satu bank saja."
    }
    ];

    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/onboarding.svg" 
                text1='Cara Daftar & Referal' 
                text2='Kenalan sama wondr by BNI!' 
                text3='Dari transaksi, rekap keuangan, sampai investasi, semua bisa kamu jadiin bareng wondr.'/>

                <CarouselTutorial />
            <Faq data={faqData}/>
            <ObligasiAds />
            <Footer />
        </>
    )
}