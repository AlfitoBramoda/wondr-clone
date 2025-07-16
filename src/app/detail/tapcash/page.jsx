'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/fitur/hero'

export default function Tapcash() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/tapcash.svg" 
                text1='TapCash' 
                text2='Uang elektronik untuk berbagai kebutuhan' 
                text3='Satu kartu jadiin mudah beragam pembayaran kamu.'/>
        </>
    )
}