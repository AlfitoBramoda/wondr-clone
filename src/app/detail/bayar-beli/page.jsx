'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import UspSection from '@/components/fitur/UspSection'
import { ObligasiAds } from '@/components/detailObligasi/ObligasiAds'
import Footer from '@/components/footer'
import Faq from '@/components/fitur/FaqComponent'

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

    const faqData = [
    {
        id: 0,
        question: "Berapa banyak kartu TapCash yang bisa diaktivasi untuk transaksi Express Top-up?",
        answer: "Hanya 1 kartu per akun wondr yang dapat diaktivasi untuk transaksi Express Top-up. Namun, kartu bisa diubah kapan saja dengan cara buka menu TapCash, pilih tab Kartu Tersimpan, dan klik tombol Atur pada bagian Express. Setelah itu, klik Ganti kartu Express Top-up."
    },
    {
        id: 1,
        question: "Mengapa TapCash saya tidak terbaca di wondr?",
        answer: "1. Pastikan smartphone kamu bisa NFC dan telah mengaktifkan NFC (jika kamu menggunakan smartphone berbasis android).2. Jika smartphone kamu menggunakan case/cover, coba dilepas dulu. 3. Tempelin TapCash ke smartphone selama beberapa detik dan pastiin posisi tidak bergeser agar wondr bisa membaca kartu dengan baik."
    },
    {
        id: 2,
        question: "Apakah nominal untuk TapCash Express Top-up dapat diatur?",
        answer: "Nominal Express Top-up hanya dapat dipilih dari denominasi yang tersedia, seperti Rp20.000, Rp50.000, Rp100.000, Rp150.000, Rp200.000, Rp250.000, dan Rp300.000. Namun, kamu dapat mengubah nominal kapan saja dengan cara buka menu TapCash, pilih tab Kartu Tersimpan, dan klik tombol Atur pada bagian Express. Setelah itu, klik Atur Express Top-up."
    }
    ];
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/assets/images/banner/bayar-beli.svg" 
                text1='Bayar & Beli' 
                text2='Tagihan apa aja semuanya ada' 
                text3='Bayar listrik, air, internet, beli pulsa, dan bayar tagihan lainnya jadi praktis.'
            />
            <UspSection data={uspData} />

            <Faq data={faqData}/>
            <ObligasiAds />
            <Footer />
        </>
    )
}