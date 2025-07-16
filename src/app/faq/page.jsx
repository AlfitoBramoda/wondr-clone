'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';

// Helper component for individual FAQ items
// This is the updated FaqItem component with the requested transitions.
const FaqItem = ({ item, isOpen, onClick }) => (
  <div className="border-b border-[#D0DDDE]">
    <h2>
      <button
        type="button"
        className="flex items-center justify-between w-full py-4 font-medium text-left gap-3"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-xl font-semibold text-[#141414]">{item.question}</span>
        {/*
          NOTE: The icon now includes the conditional 'rotate-180' class for animation.
        */}
        <img
          loading="lazy"
          src={isOpen ? "https://wondr.bni.co.id/assets/images/svg/minus.png" : "https://wondr.bni.co.id/assets/images/svg/plus.png"}
          className={`w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          alt="toggle"
        />
      </button>
    </h2>
    {/*
      NOTE: The answer panel now uses the max-h and opacity transition for a smooth slide-down effect.
    */}
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pb-4 text-sm md:text-base text-[#8C8C8C] leading-normal" dangerouslySetInnerHTML={{ __html: item.answer }} />
    </div>
  </div>
);

// Main FAQ Component
export default function Faq() {
  // State for search term, active category, and open accordion item
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Mobile Tunai');
  const [openAccordion, setOpenAccordion] = useState(0);

  // Data for FAQ categories
  const categories = [
    'Mobile Tunai', 'TapCash', 'Transfer Luar Negeri', 'Bayar & Beli', 'QRIS',
    'E-Wallet', 'Lifestyle', 'Virtual Account', 'Deposito', 'Multicurrency',
    'Saving Account', 'Reksa Dana', 'Obligasi/Sukuk', 'Transfer', 'Umum',
    'Life Goals', 'Aktivasi', 'Setelan Akun', 'Kartu Kredit', 'Referral'
  ];

  // Data for FAQ items
  const faqData = {
    'Mobile Tunai': [
        {
            question: "Apakah ada limit transaksi tarik tunai tanpa kartu (Mobile Tunai) di mitra wondr?",
            answer: "<p>Ada. Limit tarik tunai tanpa kartu (Mobile Tunai) adalah Rp1.000.000 per hari, berlaku akumulatif untuk semua jenis kartu dalam satu konsolidasi rekening pelanggan.</p>"
        },
        {
            question: "Bagaimana cara menggunakan fitur tarik tunai tanpa kartu di mitra melalui aplikasi wondr by BNI?",
            answer: "<p>Berikut langkah-langkah yang Nasabah bisa ikuti untuk melakukan tarik tunai melalui aplikasi wondr by BNI :</p><p><br></p><p>1. Pilih menu Mobile Tunai di halaman utama aplikasi.</p><p>2. Masukkan data transaksi tarik tunai.</p><p>3. Cek sumber dana yang akan digunakan.</p><p>4. Lihat dan pilih penyedia layanan transaksi tunai (ATM atau merchant).</p><p>5. Masukkan jumlah nominal tarik tunai.</p><p>6. Atau tidak, pilih nominal yang tersedia di aplikasi (opsional).</p><p>7. Ubah sumber dana bila diperlukan.</p><p>8. Gunakan sumber dana dari Tabungan atau Giro dalam IDR.</p><p>9. Klik Lanjut untuk ke halaman konfirmasi.</p><p>10. Periksa kembali detail transaksi dan biaya admin, lalu klik Transaksi Sekarang.</p><p>11. Masukkan PIN wondr by BNI.</p><p>12. Setelah berhasil, Nasabah akan mendapatkan kode token (10 digit) dan batas waktu penggunaannya.</p><p>13. Kode token juga akan dikirimkan ke email yang terdaftar.</p><p>14. Lihat petunjuk transaksi dengan menekan tombol Petunjuk Transaksi atau melalui email.</p><p>15. Tunjukkan kode token ke kasir saat melakukan tarik tunai tanpa kartu di mitra wondr by BNI.</p>"
        },
        {
            question: "Berapa biaya transaksi tarik tunai (Mobile Tunai) di Alfamart ?",
            answer: "<p>Nasabah yang melakukan tarik tunai tanpa kartu (Mobile Tunai) di Alfamart akan dikenakan biaya sebesar Rp5.000 atau Rp6.000 per transaksi, tergantung nominal yang ditarik. Biaya ini akan langsung di-debit dari rekening yang dipilih sebagai sumber dana.</p>"
        },
        {
            question: "Apakah ada biaya tambahan untuk transaksi Mobile Tunai via mitra wondr?",
            answer: "<p>Ya, layanan transaksi tunai tanpa kartu melalui aplikasi wondr dikenakan biaya sesuai dengan kebijakan mitra yang dipilih oleh Nasabah. Kode Transaksi Tarik Tunai berlaku selama 10 menit. Tunjukkan kode token tersebut kepada kasir mitra saat melakukan transaksi.</p>"
        },
        {
            question: "Apa itu fitur Mobile Tunai?",
            answer: "<p>Fitur Mobile Tunai atau tarik tunai tanpa kartu adalah fitur baru di aplikasi wondr. Pengguna wondr dapat melakukan transaksi tarik tunai tanpa kartu debit di ATM Bank BNI, ATM Merah Putih Bank BNI, dan CRM milik Bank BNI.</p>"
        },
        {
            question: "Bagaimana cara saya menggunakan fitur Mobile Tunai di wondr?",
            answer: "<p>Berikut langkah-langkah yang bisa Anda ikuti untuk bertransaksi cardless withdrawal melalui aplikasi wondr by BNI:</p><p><br></p><p>1. Pilih menu Mobile Tunai di halaman utama aplikasi wondr by BNI. Pastikan nomor handphone yang terdaftar adalah dari Indonesia.</p><p>2. Masuk ke halaman input data transaksi tarik tunai tanpa kartu.</p><p>3. Lihat informasi sumber dana yang digunakan untuk transaksi tarik tunai tanpa kartu.</p><p>4. Lihat informasi kanal pengambilan tarik tunai tanpa kartu di ATM Bank BNI.</p><p>5. Masukkan jumlah nominal transaksi untuk tarik tunai.</p><p>6. Pilih nominal yang disediakan oleh aplikasi wondr by BNI.</p><p>7. Ubah sumber dana untuk transaksi tarik tunai tanpa kartu jika diperlukan.</p><p>8. Gunakan sumber dana dari Tabungan dan Giro dalam mata uang IDR.</p><p>9. Setelah semua informasi terisi, tekan tombol “Lanjut” dan Anda akan diarahkan ke halaman konfirmasi.</p><p>10. Konfirmasi informasi data transaksi untuk cardless withdrawal. Setelah data sesuai, tekan tombol “Transaksi Sekarang”.</p><p>11. Masukkan PIN wondr by BNI di halaman otentikasi PIN.</p><p>12. Setelah PIN berhasil divalidasi, kode token beserta batas waktu penggunaannya akan dibuat.</p><p>13. Anda akan menerima email sesuai dengan kode token yang berhasil dibuat.</p><p>14. Lihat petunjuk transaksi dengan menekan tombol “Petunjuk Transaksi” atau melalui email.</p>"
        },
        {
            question: "Apakah saya dapat membuat lebih dari satu token saat penarikan uang tunai tanpa kartu?",
            answer: "<p>Anda dapat membuat beberapa kode token untuk penarikan tunai dengan keperluan atau tujuan berbeda dalam periode tertentu. Anda bisa melihat kode penarikan yang telah dibuat pada menu Notifikasi <em>(Notifications)</em>.</p>"
        },
        {
            question: "Apakah saya dikenakan biaya tambahan ketika melakukan transaksi Mobile Tunai?",
            answer: "<p>Layanan tarik tunai tanpa kartu di aplikasi wondr by BNI tidak dikenakan biaya. Masa aktif Kode Transaksi Tarik Tunai berlaku selama 2 jam. Namun, pastikan Anda memiliki cukup pulsa untuk menerima kode OTP saat melakukan <em>cardless withdrawal</em> di ATM.</p>"
        },
        {
            question: "Bagaimana saya menggunakan Kode Token di mesin CRM Bank BNI dan atau ATM Bank BNI?",
            answer: "<p>Berikut panduan untuk melakukan transaksi tarik tunai tanpa kartu:</p><p><br></p><p>1. Gunakan ATM BNI dan tekan tombol atau layar sebelah kanan untuk memilih menu Transaksi Tanpa Kartu.</p><p>2. Pilih bahasa sebelum memulai transaksi.</p><p>3. Pilih menu Mobile Tunai pada layar ATM BNI.</p><p>4. Pilih menu Tarik Tunai.</p><p>5. Masukkan kode token yang sudah diperoleh dari aplikasi wondr by BNI.</p><p>6. Setelah selesai memasukkan kode token, klik tombol Lanjut pada layar ATM.</p><p>7. Jika kode token berhasil divalidasi, ATM akan menampilkan informasi konfirmasi penarikan tunai sesuai dengan yang dibuat di aplikasi wondr by BNI.</p><p>8. Anda akan menerima kode OTP dari Bank BNI untuk proses selanjutnya; pastikan memiliki pulsa untuk menerima kode OTP.</p><p>9. Masa aktif OTP Tarik Tunai berlaku selama 5 menit. Masukkan kode OTP yang diterima dan klik tombol “Tekan Jika Benar.”</p><p>10. Kode OTP berhasil divalidasi, dan mesin ATM BNI akan memproses tarik tunai.</p><p>11. Uang tunai keluar dari mesin ATM BNI; pastikan jumlah uang yang diterima sesuai dengan transaksi yang dibuat pada aplikasi wondr by BNI.</p>"
        },
        {
            question: "Kenapa saya tidak menerima kode penarikan?",
            answer: "<p>Untuk mendapatkan kode penarikan transaksi tarik tunai:</p><p><br></p><p>1. Pastikan perangkat Anda terhubung dengan jaringan dan koneksi internet yang stabil.</p><p>2. Jika menggunakan jaringan Wi-Fi, pastikan perangkat terhubung dengan Wi-Fi.</p><p>3. Jika menggunakan jaringan seluler, pastikan paket data mencukupi dan memiliki jaringan yang stabil.</p><p><br></p><p>Informasi mengenai kode yang berhasil dihasilkan bisa ditemukan di menu Notifikasi (Notifications) pada aplikasi wondr by BNI.</p>"
        }
    ],
    'TapCash': [
        {
            question: "Apa itu TapCash?",
            answer: "<p>TapCash adalah uang elektronik pengganti uang tunai yang dapat diisi ulang, dapat digunakan untuk pembayaran pada merchant-merchant kerjasama BNI.</p>"
        },
        {
            question: "Bagaimana cara top-up TapCash?",
            answer: "<p>Anda dapat melakukan top-up TapCash melalui aplikasi wondr by BNI, ATM BNI, atau merchant yang bekerjasama dengan BNI.</p>"
        }
    ],
    'Transfer Luar Negeri': [
      {
        question: "Bagaimana cara melakukan transfer ke luar negeri melalui wondr?",
        answer: "<p>Pilih menu 'Transfer', kemudian 'Transfer Internasional'. Masukkan detail penerima, negara tujuan, dan jumlah yang akan dikirim. Ikuti instruksi untuk menyelesaikan transaksi.</p>"
      },
      {
        question: "Berapa lama waktu yang dibutuhkan untuk transfer internasional?",
        answer: "<p>Waktu transfer bervariasi tergantung negara tujuan dan layanan yang digunakan, biasanya antara 1-5 hari kerja.</p>"
      }
    ],
    'Bayar & Beli': [
      {
        question: "Apa saja yang bisa saya bayar melalui fitur Bayar & Beli?",
        answer: "<p>Anda bisa membayar berbagai tagihan seperti listrik, air, telepon, internet, asuransi, dan membeli pulsa, paket data, serta token listrik.</p>"
      }
    ],
    'QRIS': [
      {
        question: "Bagaimana cara membayar menggunakan QRIS di wondr?",
        answer: "<p>Buka aplikasi wondr, pilih ikon QRIS di halaman utama. Pindai kode QR yang disediakan oleh merchant, masukkan nominal pembayaran, dan konfirmasi dengan PIN Anda.</p>"
      }
    ],
    'E-Wallet': [
      {
        question: "E-Wallet apa saja yang bisa di-top-up melalui wondr?",
        answer: "<p>Anda dapat melakukan top-up ke berbagai E-Wallet populer di Indonesia seperti GoPay, OVO, DANA, LinkAja, dan ShopeePay.</p>"
      }
    ],
    'Lifestyle': [
        {
            question: "Apa saja fitur yang ada di menu Lifestyle?",
            answer: "<p>Menu Lifestyle menyediakan layanan pembelian tiket pesawat, kereta api, event, dan voucher game.</p>"
        }
    ],
    'Virtual Account': [
        {
            question: "Bagaimana cara membayar menggunakan Virtual Account BNI?",
            answer: "<p>Salin nomor Virtual Account dari merchant, buka aplikasi wondr, pilih menu 'Transfer', lalu 'Virtual Account Billing'. Masukkan nomor VA dan ikuti instruksi pembayaran.</p>"
        }
    ],
    'Deposito': [
        {
            question: "Bisakah saya membuka rekening Deposito melalui wondr?",
            answer: "<p>Ya, Anda dapat membuka rekening Deposito Berjangka dengan mudah melalui aplikasi wondr. Pilih tenor dan jumlah penempatan sesuai keinginan Anda.</p>"
        }
    ],
    'Multicurrency': [
        {
            question: "Mata uang apa saja yang didukung oleh rekening Multicurrency BNI?",
            answer: "<p>Rekening Multicurrency BNI mendukung berbagai mata uang asing utama seperti USD, SGD, JPY, EUR, dan lainnya.</p>"
        }
    ],
    'Saving Account': [
        {
            question: "Bagaimana cara membuka rekening tabungan baru di wondr?",
            answer: "<p>Anda dapat membuka rekening BNI Taplus atau jenis tabungan lainnya secara online melalui aplikasi wondr tanpa perlu datang ke kantor cabang.</p>"
        }
    ],
    'Reksa Dana': [
      {
        question: "Saya telah melakukan pencairan Reksa Dana, kenapa saldo rekening saya belum bertambah?",
        answer: "<p>Saldo rekening kamu akan bertambah jika sudah mendapatkan status Penjualan Berhasil.</p>"
      },
      {
        question: "Apa itu Reksa Dana?",
        answer: "<p>Reksa Dana adalah wadah untuk menghimpun dana dari masyarakat pemodal untuk selanjutnya diinvestasikan dalam portofolio efek oleh Manajer Investasi.</p>"
      }
    ],
    'Obligasi/Sukuk': [
        {
            question: "Apakah saya bisa membeli Obligasi Ritel (ORI/SBR) atau Sukuk melalui wondr?",
            answer: "<p>Ya, pada masa penawaran, Anda dapat melakukan pemesanan dan pembayaran Obligasi Negara Ritel atau Sukuk Ritel melalui aplikasi wondr.</p>"
        }
    ],
    'Transfer': [
        {
            question: "Berapa limit transfer harian di aplikasi wondr?",
            answer: "<p>Limit transfer harian bervariasi tergantung jenis kartu dan rekening Anda. Anda dapat memeriksa limit spesifik Anda di menu pengaturan aplikasi.</p>"
        }
    ],
    'Umum': [
      {
        question: "Bagaimana cara menghubungi layanan pelanggan BNI?",
        answer: "<p>Anda dapat menghubungi BNI Call di 1500046 atau melalui email ke bnicall@bni.co.id. Layanan tersedia 24 jam.</p>"
      },
      {
        question: "Apakah aplikasi wondr by BNI aman?",
        answer: "<p>Ya, aplikasi wondr by BNI dilengkapi dengan berbagai lapisan keamanan, termasuk PIN transaksi dan notifikasi real-time untuk setiap transaksi yang Anda lakukan.</p>"
      }
    ],
    'Life Goals': [
        {
            question: "Apa fungsi fitur Life Goals?",
            answer: "<p>Fitur Life Goals membantu Anda merencanakan dan menabung secara rutin untuk mencapai tujuan keuangan spesifik, seperti membeli rumah, dana pendidikan, atau liburan.</p>"
        }
    ],
    'Aktivasi': [
        {
            question: "Saya baru saja mengunduh wondr, bagaimana cara aktivasinya?",
            answer: "<p>Buka aplikasi, pilih 'Aktivasi'. Masukkan nomor rekening, nomor kartu debit, dan data diri Anda. Buat User ID dan PIN, lalu ikuti proses verifikasi.</p>"
        }
    ],
    'Setelan Akun': [
        {
            question: "Bagaimana cara mengubah PIN transaksi saya?",
            answer: "<p>Masuk ke menu 'Profil' atau 'Setelan Akun', pilih 'Ubah PIN'. Masukkan PIN lama Anda, lalu buat dan konfirmasi PIN baru.</p>"
        }
    ],
    'Kartu Kredit': [
        {
            question: "Bisakah saya melihat tagihan dan transaksi Kartu Kredit BNI di wondr?",
            answer: "<p>Ya, Anda dapat menghubungkan Kartu Kredit BNI Anda ke wondr untuk melihat detail tagihan, sisa limit, dan riwayat transaksi.</p>"
        }
    ],
    'Referral': [
        {
            question: "Bagaimana cara kerja program Referral di wondr?",
            answer: "<p>Bagikan kode referral unik Anda kepada teman. Jika teman Anda berhasil mendaftar dan melakukan aktivasi wondr menggunakan kode Anda, Anda akan mendapatkan bonus sesuai dengan syarat dan ketentuan yang berlaku.</p>"
        }
    ]
  };

  // Determine which FAQs to display based on the search term
  const displayedFaqs = searchTerm.trim()
    ? Object.values(faqData)
        .flat()
        .filter(item =>
          item.question.toLowerCase().includes(searchTerm.toLowerCase())
        )
    : faqData[activeCategory] || [];

  return (
    
    <main className="w-full">
      {/* Hero Section */}
      <Navbar />
      <div className="bg-[#F9F9F9] min-h-64 flex flex-col md:flex-row gap-4 md:gap-8 md:px-6 lg:px-[150px]">
        <div className="md:w-1/2 w-full flex justify-center items-center order-2 md:order-1">
          <img
            alt="Punya pertanyaan?"
            src="https://wondr.bni.co.id/api/image/faq-min_1751484894546.png"
            width="500"
            height="300"
            className="object-contain w-full h-auto max-w-[500px]"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center md:justify-center md:items-start gap-2 p-6 order-1 md:order-2">
          <p className="text-base md:text-xl lg:text-2xl font-light text-gray-600">FAQ and help</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
            Punya pertanyaan?
          </h2>
        </div>
      </div>

      {/* Search Input */}
      <div className="w-full flex justify-center items-center px-4 lg:px-[150px]">
        <div className="relative w-full mt-6 md:mt-[72px]">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <input
            placeholder="Ada Pertanyaan?"
            className="w-full h-12 md:h-16 px-5 pl-12 border border-[#4E4E4E] rounded-lg outline-none placeholder:text-sm md:placeholder:text-xl"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex max-md:flex-col md:gap-6 w-full px-4 lg:px-[150px] mt-4 md:mt-10 mb-[72px]">
        {/* Sidebar */}
        <div className="flex flex-col justify-start items-center bg-[#F9F9F9] p-3 md:p-4 rounded-2xl md:max-w-[340px] w-full mb-4 md:mb-0">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSearchTerm(''); // Clear search when a category is clicked
                setOpenAccordion(0); // Reset accordion on category change
              }}
              className={`w-full font-semibold text-base text-left p-3 rounded-lg ${
                activeCategory === category && !searchTerm ? 'bg-[#C2F0EC] text-black' : 'bg-[#F9F9F9] hover:bg-[#C2F0EC]/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="w-full">
          {displayedFaqs.length > 0 ? (
            displayedFaqs.map((item, index) => (
              <FaqItem
                key={`${item.question}-${index}`} // Use a more unique key
                item={item}
                isOpen={openAccordion === index}
                onClick={() => setOpenAccordion(openAccordion === index ? -1 : index)}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 mt-10">
              {searchTerm ? `No results for "${searchTerm}"` : "No questions found for this category."}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}