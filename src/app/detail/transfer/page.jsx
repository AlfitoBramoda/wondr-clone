'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import { FaqTransfer } from '@/components/detailTransfer/FaqTransfer'
import USPTransferSection from '@/components/detailTransfer/USPTransferSection'
import Hero from '@/components/fitur/hero'
import Footer from '@/components/footer';
import UspSection from '@/components/fitur/UspSection'
import Faq from '@/components/fitur/FaqComponent'
import AdsComponent from '@/components/fitur/AdsComponent'
import Footer from '@/components/footer'

export default function Transfer() {
    const uspData = {
        title: 'Transfer ke mana aja, gak paket ribet',
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

    const faqData = [
    {
        id: 0,
        question: "Bagaimana jika saya tidak bisa melakukan Transfer ke nomor rekening yang saya tuju?",
        answer: "Pastiin bank yang kamu pilih dan nomor rekening yang kamu ketik sudah benar ya. Apabila muncul pesan error dibagian bawah bagian nomor rekening, itu artinya nomor rekening yang kamu tuju tidak dapat kami temukan di bank yang kamu pilih."
    },
    {
        id: 1,
        question: "Metode transfer apa saja yang bisa dipilih?",
        answer: "Kamu bisa beli Reksa Dana dan Obligasi lewat wondr. Reksa Dana adalah investasi dalam portofolio efek oleh Manajer Investasi (MI) yang mendapat izin dari Otoritas Jasa Keuangan (OJK). Sementara, Obligasi adalah surat utang jangka menengah maupun jangka panjang yang dapat diperjualbelikan."
    }
    ];
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/api/image/transfer_1751639831872.png" 
                text1='Transfer' 
                text2='Kirim uang ke seluruh Indonesia, aman dan instan' 
                text3='Transfer ke mana aja cuma dalam hitungan detik.'/>
            <UspSection data={uspData} />
            <CarouselTutorial/>
            <Faq data={faqData}/>
            <AdsComponent />
            <Footer />
        </>
    )
}