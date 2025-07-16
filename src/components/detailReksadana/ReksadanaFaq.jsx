"use client";
import { useState } from 'react';

export function ReksadanaFaq() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqData = [
    {
      id: 0,
      question: "Saya telah melakukan pencairan Reksa Dana, kenapa saldo rekening saya belum bertambah?",
      answer: "Saldo rekening kamu akan bertambah jika sudah mendapatkan status Penjualan Berhasil."
    },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="faq-section bg-[#fff]">
      <div className="p-6 md:py-9 md:px-20 relative w-full grid grid-cols-1 md:grid-cols-5 gap-4 lg:py-[72px]">
        
        {/* FAQ Title */}
        <div className=" text-[#000]  col-span-1 md:col-span-3 order-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-normal font-semibold">
            Pertanyaan yang sering diajukan
          </h2>
        </div>

        {/* View FAQ Button */}
        <div className="col-span-1 md:col-span-2 text-center md:text-right order-3 md:order-2 self-center">
          <button className="border-none bg-none text-[#FF8736] text-xs md:text-base font-bold underline">
            <a href="/faq">Lihat FAQ</a>
          </button>
        </div>

        {/* FAQ List */}
        <div className="col-span-1 md:col-span-4 order-2 md:order-3">
          <div className="w-full">
            {faqData.map((faq, index) => (
              <div 
                key={faq.id} 
                className={`faq-item ${index < faqData.length - 1 ? 'border-b border-[#D0DDDE]' : ''}`}
              >
                {/* FAQ Question */}
                <h5 id={`accordion-open-heading-${faq.id}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-4 padding-bottom-faq font-medium rtl:text-right gap-2 md:gap-3"
                    aria-expanded={openFaq === faq.id}
                    aria-controls={`accordion-open-body-${faq.id}`}
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span className="flex items-center justify-between">
                      <div className="[&_div]:font-semibold [&_div]:text-[#141414] text-base md:text-2xl leading-normal text-left">
                        <div className="ql-content-wrapper">
                          <div className="ql-content ql-editor text-black font-normal">
                            {faq.question}
                          </div>
                        </div>
                      </div>
                    </span>
                    <img
                      loading="lazy"
                      src="https://wondr.bni.co.id/assets/images/svg/plus.png"
                      className={`w-[32px] md:w-[48px] transition-transform duration-300 ease-in-out ${
                        openFaq === faq.id ? 'rotate-45' : 'rotate-0'
                      }`}
                      alt="arrow-toggle"
                    />
                  </button>
                </h5>

                {/* FAQ Answer */}
                <div
                  id={`accordion-open-body-${faq.id}`}
                  className={`faq-content transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === faq.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                  aria-labelledby={`accordion-open-heading-${faq.id}`}
                >
                  <div className="pb-4 font-light [&_div]:text-[#8C8C8C] text-sm md:text-base leading-normal">
                    <div>
                      <div className="ql-content-wrapper">
                        <div className="ql-content ql-editor text-black font-normal">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Image */}
        <div className="col-span-1 md:col-span-1 self-end order-4">
          <img
            alt="faq_images"
            loading="lazy"
            width="0"
            height="0"
            decoding="async"
            data-nimg="1"
            className="object-contain mx-auto w-1/3 md:absolute md:max-h-[65%] md:max-w-[20%] md:bottom-0 md:right-0 mb-[-36px] md:mb-0"
            src="https://wondr.bni.co.id/api/image/person_faq_(2)_1751639868000.png"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}