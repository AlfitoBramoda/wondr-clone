'use client'

import Navbar from '@/components/Navbar'
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import Footer from '@/components/footer'

export default function Multicurrency() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/multicurrency.svg" 
                text1='wondr multicurrency' 
                text2='Satu tabungan untuk 12 valuta asing' 
                text3='Cukup satu tabungan, bisa transaksi untuk 12 valuta asing.'/>

                <CarouselTutorial />
                <ObligasiAds />
                <Footer />
        </>
    )
}