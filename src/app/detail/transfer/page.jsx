'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function Transfer() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/api/image/transfer_1751639831872.png" 
                text1='Transfer' 
                text2='Tagihan apapun semuanya serba ada!' 
                text3='Dari token listrik sampai bayar tagihan pendidikan kuliah semuanya komplit.'/>
            <CarouselTutorial/>
        </>
    )
}