"use client";
import { useState } from "react";

export default function MulticurencyFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 0,
      question: "Apa itu Bank Perantara dalam proses Transfer Luar Negeri?",
      answer:
        "Bank Perantara adalah bank yang bertugas menghubungkan Bank BNI dengan Bank Penerima dalam hal pengiriman uang ke luar negeri. Bank Perantara adalah partner resmi Bank BNI dalam proses pengiriman uang ke luar negeri.",
    },
    {
      id: 1,
      question:
        "Bagaimana jika transfer luar negeri saya mendapatkan status Transfer lagi diproses?",
      answer:
        "Transfer Luar Negeri kamu masih dalam proses verifikasi tim internal BNI. Kami akan kirim notifikasi lebih lanjut saat proses verifikasinya sudah selesai. Kamu bisa cek statusnya secara berkala melalu menu Status Transfer di menu Transfer Luar Negeri.",
    },
    {
      id: 2,
      question:
        "Bagaimana jika Transfer Luar Negeri saya ditolak oleh Bank Penerima/Bank Perantara?",
      answer:
        "Setelah kamu konfirmasi beberapa data, hanya butuh maksimum 1 hari kerja sampai kamu bisa mulai investasi di wondr.",
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="p-6 md:py-9 md:px-20 relative w-full grid grid-cols-1 md:grid-cols-5 gap-4 lg:py-[72px] bg-white text-black">
      <div className="col-span-1 md:col-span-3 order-1 text-center md:text-left">
        <p className="text-2xl md:text-3xl lg:text-[40px] leading-normal font-semibold">
          Pertanyaan yang sering diajukan
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 text-center md:text-right order-3 md:order-2 self-center">
        <button className="border-none bg-none text-[#FF8736] text-xs md:text-base font-bold underline">
          <a href="/faq">Lihat FAQ</a>
        </button>
      </div>
      <div className="col-span-1 md:col-span-4 order-2 md:order-3">
        <div className="w-full">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${
                index < faqData.length - 1 ? "border-b border-[#D0DDDE]" : ""
              }`}
            >
              <h5 id={`accordion-open-heading-${faq.id}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 font-medium rtl:text-right gap-2 md:gap-3"
                  aria-expanded={openFaq === faq.id}
                  aria-controls={`accordion-open-body-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                >
                  <span className="flex items-center justify-between text-base md:text-2xl font-semibold text-[#141414]">
                    {faq.question}
                  </span>
                  <img
                    loading="lazy"
                    src={
                      openFaq === faq.id
                        ? "https://wondr.bni.co.id/assets/images/svg/minus.png"
                        : "https://wondr.bni.co.id/assets/images/svg/plus.png"
                    }
                    className={`w-[32px] md:w-[48px] transition-transform duration-300 ease-in-out ${
                      openFaq === faq.id
                        ? "rotate-180 filter-orange"
                        : "rotate-0"
                    }`}
                    alt="toggle-icon"
                  />
                </button>
              </h5>

              <div
                id={`accordion-open-body-${faq.id}`}
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openFaq === faq.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
                aria-labelledby={`accordion-open-heading-${faq.id}`}
              >
                <div className="pb-4 text-sm md:text-base text-[#8C8C8C] leading-normal">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-1 md:col-span-1 self-end order-4">
        <img
          alt="faq_images"
          loading="lazy"
          width="0"
          height="0"
          decoding="async"
          data-nimg="1"
          className="object-contain mx-auto w-1/3 md:absolute md:max-h-[65%] md:max-w-[20%] md:bottom-0 md:right-0 mb-[-36px] md:mb-0 bg-transparent"
          src="https://wondr.bni.co.id/api/image/faq_1751543712780.png"
        />
      </div>
    </div>
  );
}
