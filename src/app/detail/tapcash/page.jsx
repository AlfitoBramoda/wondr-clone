'use client'

import Navbar from '@/components/Navbar'
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import Footer from '@/components/footer'

export default function Tapcash() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/tapcash.svg" 
                text1='TapCash' 
                text2='Uang elektronik untuk berbagai kebutuhan' 
                text3='Satu kartu jadiin mudah beragam pembayaran kamu.'/>
            
            <CarouselTutorial />
            <ObligasiAds />
            <Footer />
        </>
    )
}