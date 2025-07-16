'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function BayarBeli() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/bayar-beli.svg" 
                text1='Bayar & Beli' 
                text2='Tagihan apa aja semuanya ada' 
                text3='Bayar listrik, air, internet, beli pulsa, dan bayar tagihan lainnya jadi praktis.'/>

                <CarouselTutorial />
        </>
    )
}