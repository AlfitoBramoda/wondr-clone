"use client";

import Navbar from "@/components/Navbar";
import { ObligasiAds } from "@/components/detailObligasi/ObligasiAds";
import Hero from "@/components/fitur/hero";
import Currency from "@/components/Currency";
import MulticurencyFaq from "@/components/MulticurencyFaq";
import UspSection from "@/components/fitur/UspSection";
import { ObligasiAds } from "@/components/detailObligasi/ObligasiAds";
import CarouselTutorial from "@/components/fitur/carouselTutorial";
import Footer from "@/components/footer";

export default function Remittance() {
  const uspData = {
    title: "Transfer ke seluruh dunia, praktis aja!",
    left: {
      image: "https://wondr.bni.co.id/api/image/usp_remit_1751639036414.png",
      title: "Layanan 24/7",
      description:
        "Kapan pun bahkan di hari libur, dana bisa dikirim dalam hitungan menit.",
    },
    center: {
      image: "https://wondr.bni.co.id/api/image/usp_remit-1_1751639040581.png",
      title: "Bisa pantau proses pengiriman",
      description:
        "Kamu akan dapet notifikasi dari setiap proses transfer sampai dana sampai di tujuan.",
    },
    right: {
      image: "https://wondr.bni.co.id/api/image/usp_remit-2_1751639043950.png",
      title: "Kurs kompetitif",
      description: "Kamu bisa cek kurs terkini langsung di aplikasi.",
    },
  };
  return (
    <>
      <Navbar />
      <Hero
        image="https://wondr.bni.co.id/api/image/remittance_1751640871393.png"
        text1="Transfer Luar Negeri"
        text2="Kirim uang lintas negara tanpa drama"
        text3="Transfer internasional dengan berbagai mata uang. Cepat dan aman sampai ke tujuan."
      />
      <UspSection data={uspData} />
      <Currency />
      <CarouselTutorial />
      <MulticurencyFaq />
      <ObligasiAds />
      <Footer />
    </>
  );
}
