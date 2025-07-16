'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'

export default function Transfer() {
    let uspData = {
        left: {
            image: 'https://wondr.bni.co.id/api/image/usp_transfer-2_1751639918006.png',
            title: 'Instan dan aman',
            description: 'Dengan sistem keamanan terpercaya, dana kamu akan terkirim dalam hitungan detik.'
        },
        center: {
            image: 'https://wondr.bni.co.id/api/image/usp_transfer-1_1751639922310.png',
            title: 'Bisa ke berbagai mata uang',
            description: 'Selain IDR, sesama BNI bisa kirim 12 mata uang lain.'
        },
        right: {
            image: 'https://wondr.bni.co.id/api/image/usp_transfer_1751639932089.png',
            title: 'Jadwal transfer fleksibel',
            description: 'Mau atur jadwal atau kirim ke banyak orang sekaligus? Bisa!'
        }
    }
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