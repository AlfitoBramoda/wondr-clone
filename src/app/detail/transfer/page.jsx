'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import UspSection from '@/components/fitur/UspSection'
import Faq from '@/components/fitur/FaqComponent'

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
    },
    {
        id: 2,
        question: "Berapa lama waktu pendaftarannya?",
        answer: "Setelah kamu konfirmasi beberapa data, hanya butuh maksimum 1 hari kerja sampai kamu bisa mulai investasi di wondr."
    }
    ];
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/api/image/transfer_1751639831872.png" 
                text1='Transfer' 
                text2='Tagihan apapun semuanya serba ada!' 
                text3='Dari token listrik sampai bayar tagihan pendidikan kuliah semuanya komplit.'/>
            <UspSection data={uspData} />
            <CarouselTutorial/>
            <Faq data={faqData}/>
        </>
    )
}