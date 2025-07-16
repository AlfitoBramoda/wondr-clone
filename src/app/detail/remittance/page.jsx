'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/fitur/hero'

export default function Remittance() {
    return (
        <>
            <Navbar />
            <Hero 
                image="https://wondr.bni.co.id/api/image/remittance_1751640871393.png" 
                text1='Transfer Luar Negeri' 
                text2='Kirim uang lintas negara tanpa drama' 
                text3='Transfer internasional dengan berbagai mata uang. Cepat dan aman sampai ke tujuan.'/>
        </>
    )
}