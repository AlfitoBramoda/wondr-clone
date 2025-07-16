'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function MobileTunai() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/api/image/hero_1751483938118.png" 
                text1='Mobile Tunai' 
                text2='Tarik tunai tanpa kartu, semudah itu!' 
                text3='Dompet ketinggalan gak jadi halangan. Dengan wondr, tarik tunai bisa tanpa kartu.'/>

                <CarouselTutorial />
        </>
    )
}