'use client'

import Navbar from '@/components/Navbar'
import CarouselReksadana from '@/components/detailReksadana/CarouselReksadana'
import Hero from '@/components/fitur/hero'
import UspSection from '@/components/detailReksadana/UspSection';
import ProductTypeSection from '@/components/detailReksadana/ProductTypeSection';
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds';
import { ReksadanaFaq } from '@/components/detailReksadana/ReksadanaFaq';
import Footer from '@/components/footer';

export default function ReksaDana() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/reksa-dana.svg" 
                text1='Reksa Dana' 
                text2='Kembangin uang dengan tenang' 
                text3='Investasi tanpa cemas dengan bantuan manajer investasi sesuai kebutuhan dan profil risiko kamu.'/>
            <UspSection />
            <ProductTypeSection />
            <CarouselReksadana />
            <ReksadanaFaq />
            <ObligasiAds />
            <Footer />
        </>
    )
}