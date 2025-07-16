'use client'

import Navbar from '@/components/Navbar'
import CarouselTutorial from '@/components/fitur/carouselTutorial'
import Hero from '@/components/fitur/hero'
import Footer from '@/components/footer';
import UspSection from '@/components/fitur/UspSection'
import Faq from '@/components/fitur/FaqComponent'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Transfer() {
    try {
        const { t } = useLanguage();
        
        const uspData = {
            title: t('transfer.usp.title') || 'Transfer ke mana aja, gak paket ribet',
            left: {
                image: 'https://wondr.bni.co.id/api/image/usp_transfer-2_1751639918006.png',
                title: t('transfer.usp.instant.title') || 'Instan dan aman',
                description: t('transfer.usp.instant.description') || 'Dengan sistem keamanan terpercaya, dana kamu akan terkirim dalam hitungan detik.'
            },
            center: {
                image: 'https://wondr.bni.co.id/api/image/usp_transfer-1_1751639922310.png',
                title: t('transfer.usp.multicurrency.title') || 'Bisa ke berbagai mata uang',
                description: t('transfer.usp.multicurrency.description') || 'Selain IDR, sesama BNI bisa kirim 12 mata uang lain.'
            },
            right: {
                image: 'https://wondr.bni.co.id/api/image/usp_transfer_1751639932089.png',
                title: t('transfer.usp.flexible.title') || 'Jadwal transfer fleksibel',
                description: t('transfer.usp.flexible.description') || 'Mau atur jadwal atau kirim ke banyak orang sekaligus? Bisa!'
            }
        }

        const faqData = [
            {
                id: 0,
                question: "Bagaimana jika saya tidak bisa melakukan Transfer ke nomor rekening yang saya tuju?",
                answer: "Pastiin bank yang kamu pilih dan nomor rekening yang kamu ketik sudah benar ya. Apabila muncul pesan error dibagian bawah bagian nomor rekening, itu artinya nomor rekening yang kamu tuju tidak dapat kami temukan di bank yang kamu pilih."
            }
        ];

        return (
            <>
                <Navbar />
                <Hero 
                    image="https://wondr.bni.co.id/api/image/transfer_1751639831872.png" 
                    text1={t('transfer.title') || 'Transfer'}
                    text2={t('transfer.subtitle') || 'Tagihan apapun semuanya serba ada!'}
                    text3={t('transfer.description') || 'Dari token listrik sampai bayar tagihan pendidikan kuliah semuanya komplit.'}
                />
                <UspSection data={uspData} />
                <CarouselTutorial/>
                <Faq data={faqData}/>
                <Footer/>
            </>
        )
    } catch (error) {
        return (
            <div className="p-8">
                <h1>Error in Transfer Page</h1>
                <p>Error: {error.message}</p>
            </div>
        );
    }
}