'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import UspSection from '@/components/fitur/UspSection'

export default function BayarBeli() {
    let uspData = {
        title: 'Nikmati berbagai macam fitur Bayar Beli!',
        left: {
            image: 'https://wondr.bni.co.id/assets/images/usp/uspbayar-beli1.svg',
            title: 'Bayar tagihan makin sat-set',
            description: 'Cukup siapin nomor tagihan dan saldo, semua proses pembayaran bisa dilakukan.'
        },
        center: {
            image: 'https://wondr.bni.co.id/assets/images/usp/uspbayar-beli2.svg',
            title: 'Anti kelupaan bayar tagihan',
            description: 'Kamu bisa pasang pengingat biar gak kelewat tanggal pembayaran.'
        },
        right: {
            image: 'https://wondr.bni.co.id/assets/images/usp/uspbayar-beli3.svg',
            title: 'Bayar apapun serba ada',
            description: 'Mau bayar tagihan listrik, Kartu Kredit, paket data, pendidikan semua ada!'
        }
    }
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/bayar-beli.svg" 
                text1='Bayar & Beli' 
                text2='Tagihan apa aja semuanya ada' 
                text3='Bayar listrik, air, internet, beli pulsa, dan bayar tagihan lainnya jadi praktis.'/>
            
            <UspSection data={uspData} />

            <CarouselTutorial />
        </>
    )
}