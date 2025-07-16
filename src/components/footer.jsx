
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] px-4 sm:px-6 xl:px-[150px] pt-10 md:pt-16 pb-8 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Logo */}
        <div className="w-full mb-4 md:mb-0">
          <Link href="/" className="inline-block">
            <Image
              alt="logo"
              width={348}
              height={109}
              className="w-[174px] h-[55px] md:w-[348px] md:h-[109px] object-contain"
              src="https://wondr.bni.co.id/api/image/wondr_logo_1751643603535.png"
            />
          </Link>
        </div>

        {/* App Store + Play Store Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black items-center">
          {[
            {
              href: "https://apps.apple.com/id/app/wondr-by-bni/id6499518320?utm_source=Appstore&utm_medium=Microsite&utm_campaign=Footer_Download_Button",
              img: "https://wondr.bni.co.id/api/image/icon_l_1751640224947.png",
              label: "Download di App Store",
              alt: "appleicon",
            },
            {
              href: "https://play.google.com/store/apps/details?id=id.bni.wondr&referrer=utm_source%3DPlaystore%26utm_medium%3DMicrosite%26utm_content%3DFooter_Download_Button",
              img: "https://wondr.bni.co.id/api/image/icon_l-1_1751640228764.png",
              label: "Download di Play Store",
              alt: "playstoreicon",
            },
          ].map(({ href, img, label, alt }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#7A7A7A] rounded-full px-6 py-3 flex items-center gap-2 justify-center bg-white hover:bg-yellow-100 transition"
            >
              <Image
                alt={alt}
                width={24}
                height={24}
                src={img}
                className="w-6 h-auto object-contain"
              />
              <span className="font-medium text-base">{label}</span>
            </a>
          ))}
        </div>

        {/* Informasi Kontak */}
        <div className="col-span-1 mt-6 md:mt-0">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8C8C8C]">
            Butuh informasi lebih lanjut?
          </p>
          <p className="text-xs sm:text-sm md:text-base font-light text-[#8C8C8C]">
            BNI Call - 1500046
          </p>
        </div>

        {/* Alamat */}
        <div className="col-span-1 mt-4 md:mt-0">
          <p className="text-xs sm:text-sm md:text-base font-semibold text-[#8C8C8C]">
            Kantor Pusat
          </p>
          <p className="text-xs sm:text-sm md:text-base font-light text-[#8C8C8C] md:w-3/4">
            Gedung Grha BNI, Jl. Jenderal Sudirman Kav. 1 Jakarta Pusat 10220, Indonesia.
          </p>
        </div>

        {/* Legal Notes */}
        <p className="col-span-1 text-xs sm:text-sm md:text-base text-[#8C8C8C] font-light mt-6 md:mt-0">
          PT Bank Negara Indonesia (Persero) Tbk. Berizin dan diawasi oleh Otoritas Jasa Keuangan
          (OJK) & Bank Indonesia (BI) serta merupakan peserta penjaminan Lembaga Penjamin Simpanan (LPS).
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start mt-4">
          {[
            {
              href: "https://api.whatsapp.com/send?phone=628118611946",
              src: "https://wondr.bni.co.id/api/image/group_5789_1751640146947.png",
              alt: "whatsapp",
            },
            {
              href: "https://www.instagram.com/bni46",
              src: "https://wondr.bni.co.id/api/image/group_5789-1_1751640151330.png",
              alt: "instagram",
            },
            {
              href: "https://x.com/BNI",
              src: "https://wondr.bni.co.id/api/image/group_5790_1751640154849.png",
              alt: "twitter",
            },
            {
              href: "https://www.youtube.com/channel/UCD5tQVeJKdwoTtoTcF8MfSA",
              src: "https://wondr.bni.co.id/api/image/group_5791_1751640158541.png",
              alt: "youtube",
            },
            {
              href: "https://www.facebook.com/BNI/?locale=id_ID",
              src: "https://wondr.bni.co.id/api/image/group_5792_1751640162829.png",
              alt: "facebook",
            },
            {
              href: "https://id.linkedin.com/company/pt-bank-negara-indonesia-persero-tbk-",
              src: "https://wondr.bni.co.id/api/image/group_5793_1751640168501.png",
              alt: "linkedin",
            },
          ].map(({ href, src, alt }, i) => (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              <Image
                alt={alt}
                width={56}
                height={56}
                className="w-[32px] h-[32px] md:w-[56px] md:h-[56px] object-contain"
                src={src}
              />
            </a>
          ))}
        </div>

        {/* Separator */}
        <div className="col-span-full border-t border-[#D0DDDE] my-6" />

        {/* Copyright & Links */}
        <div className="col-span-full flex flex-col xl:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#8C8C8C] text-center xl:text-left">
            © Hak Cipta 2025 PT. Bank Negara Indonesia (Persero), Tbk.
          </p>
          <div className="flex gap-4 text-xs underline text-[#8C8C8C] text-center">
            <Link href="/legal/privacy-policy" className="hover:text-black">
              Kebijakan Privasi
            </Link>
            <a
              href="https://www.bni.co.id/id-id/beranda/kabar-bni/security-awareness"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Tips Pengamanan Transaksi
            </a>
            <a
              href="https://bni.co.id/id-id/e-banking/wondr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
            >
              Syarat dan Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
