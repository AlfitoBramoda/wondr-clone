import {
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] px-4 sm:px-6 lg:px-10 py-10 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Kiri */}
        <div className="flex flex-col gap-3 mb-6 md:mb-0">
          <img
            src="https://wondr.bni.co.id/api/image/wondr_logo_1751643603535.png"
            alt="Wondr by BNI"
            className="h-auto max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain"
          />

          <div className="text-base font-semibold text-gray-500 mt-2">
            Butuh informasi lebih lanjut?
          </div>
          <div className="text-gray-500">BNI Call - 1500046</div>

          <p className="text-xs text-gray-500 leading-relaxed">
            PT Bank Negara Indonesia (Persero) Tbk. Berizin dan diawasi oleh
            Otoritas Jasa Keuangan (OJK) & Bank Indonesia (BI) serta merupakan
            peserta penjaminan Lembaga Penjamin Simpanan (LPS).
          </p>
        </div>

        {/* Kanan */}
        <div className="space-y-6">
          {/* Tombol App Store & Play Store */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* App Store */}
            <a
              href="https://apps.apple.com/id/app/wondr-by-bni/id6499518320?utm_source=Appstore&utm_medium=Microsite&utm_campaign=Footer_Download_Button"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#7A7A7A] rounded-full px-6 py-3 flex items-center gap-2 w-full sm:w-fit justify-center bg-white hover:bg-yellow-100 transition"
            >
              <img
                alt="appleicon"
                src="https://wondr.bni.co.id/api/image/icon_l_1751640224947.png"
                className="w-6 h-auto object-contain"
              />
              <span className="font-semibold text-black leading-6">
                Download di App Store
              </span>
            </a>

            {/* Play Store */}
            <a
              href="https://play.google.com/store/apps/details?id=id.bni.wondr&referrer=utm_content%3DFooter_Download_Button"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#7A7A7A] rounded-full px-6 py-3 flex items-center gap-2 w-full sm:w-fit justify-center bg-white hover:bg-yellow-100 transition"
            >
              <img
                alt="playstoreicon"
                src="https://wondr.bni.co.id/api/image/icon_l-1_1751640228764.png"
                className="w-6 h-auto object-contain"
              />
              <span className="font-semibold text-black leading-6">
                Download di Play Store
              </span>
            </a>
          </div>

          {/* Alamat */}
          <div className="flex flex-col gap-1">
            <div className="text-base font-semibold text-gray-500">
              Kantor Pusat
            </div>
            <div className="text-gray-500">
              Gedung Grha BNI, Jl. Jenderal Sudirman Kav. 1 Jakarta Pusat 10220,
              Indonesia.
            </div>
          </div>

          {/* Sosial Media */}
          <div className="flex gap-4 text-xl pt-2">
            <FaWhatsapp className="text-gray-600 hover:text-[#25D366] cursor-pointer" />
            <FaInstagram className="text-gray-600 hover:text-[#E1306C] cursor-pointer" />
            <FaXTwitter className="text-gray-600 hover:text-black cursor-pointer" />
            <FaYoutube className="text-gray-600 hover:text-[#FF0000] cursor-pointer" />
            <FaFacebookF className="text-gray-600 hover:text-[#1877F2] cursor-pointer" />
            <FaLinkedinIn className="text-gray-600 hover:text-[#0077B5] cursor-pointer" />
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300" />

      {/* Footer bawah */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 md:gap-0 px-2 sm:px-0">
        <div>© Hak Cipta 2025 PT. Bank Negara Indonesia (Persero), Tbk.</div>
        <div className="flex flex-wrap gap-4 underline text-center">
          <a href="#" className="hover:text-gray-800">
            Kebijakan Privasi
          </a>
          <a href="#" className="hover:text-gray-800">
            Tips Pengamanan Transaksi
          </a>
          <a href="#" className="hover:text-gray-800">
            Syarat dan Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
}
