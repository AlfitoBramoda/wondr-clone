import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RegisterAds() {
  const router = useRouter();

  const handleViewRegistration = () => {
    router.push('/detail/onboarding');
  };

  return (
    <section className="bg-[#deef5a] relative lg:px-0 lg:pt-[72px]">
      <div className="container-120">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-semibold">
            Udah siap #JadiinMaumu bareng wondr?
          </h2>

          <div className="md:px-[120px]">
            <div className="font-light text-xs md:text-base lg:text-2xl leading-[140%] mt-2 md:mt-6 lg:mt-10">
              <div className="ql-content-wrapper">
                <div className="ql-content ql-editor text-black font-normal">
                  <p className="ql-align-center px-30">
                    Cukup siapin handphone dan dokumen identitas diri, kamu siap daftar wondr by BNI. Jangan lupa ajak temanmu biar makin seru~
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button 
            type="button" 
            onClick={handleViewRegistration}
            className="px-8 py-[19px] text-sm text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-4xl mt-6 md:mt-10 !py-3 !px-6 md:!py-[19px] md:!px-8 transition-colors duration-300 ease-in-out"
          >
            Lihat Cara Daftar
          </button>
        </div>

        <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-0 mx-auto">
          <Image 
            alt="download-landing" 
            width={500}
            height={400}
            className="object-cover w-5/6 md:w-full md:mt-6 mb-2 md:mb-3 h-auto max-w-xl z-10 relative" 
            src="https://wondr.bni.co.id/assets/images/download-landing/download-landingID.png"
            priority
          />
        </div>
      </div>

      <div className="absolute h-[140px] md:h-[255px] w-full bottom-0">
        <div className="relative h-[150px] md:h-[255px] bg-[#ECF789] bottom-0">
          <div className="absolute z-[1] top-0 w-full overflow-hidden" style={{height: "150px"}}>
            <Image 
              alt="ornament" 
              width={1200}
              height={150}
              className="w-full h-full object-cover rotate-180" 
              src="https://wondr.bni.co.id/assets/images/download-landing/ornament.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
