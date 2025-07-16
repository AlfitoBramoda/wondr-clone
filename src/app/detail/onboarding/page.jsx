'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function Onboarding() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/onboarding.svg" 
                text1='Cara Daftar & Referal' 
                text2='Kenalan sama wondr by BNI!' 
                text3='Dari transaksi, rekap keuangan, sampai investasi, semua bisa kamu jadiin bareng wondr.'/>

                <CarouselTutorial />
        </>
    )
}