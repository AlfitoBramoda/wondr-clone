'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function ReksaDana() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/reksa-dana.svg" 
                text1='Reksa Dana' 
                text2='Kembangin uang dengan tenang' 
                text3='Investasi tanpa cemas dengan bantuan manajer investasi sesuai kebutuhan dan profil risiko kamu.'/>

                <CarouselTutorial />
        </>
    )
}