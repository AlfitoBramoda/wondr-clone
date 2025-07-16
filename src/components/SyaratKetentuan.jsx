import Image from "next/image";

export default function SyaratKetentuan() {
  return (
    <div>
      <div className="bg-[#F9F9F9] min-h-64 flex flex-col md:flex-row gap-4 md:gap-8 md:px-6 lg:px-[150px] py-6">
        <div className="md:w-1/2 w-full flex justify-center items-end order-2 md:order-1">
          <Image
            src="https://wondr.bni.co.id/assets/images/banner/privacy-policy.svg"
            alt="Syarat, Ketentuan, dan Pemberitahuan Privasi"
            width={600}
            height={400}
            className="object-contain w-full h-auto max-w-full"
            priority
          />
        </div>

        <div className="flex flex-col items-center md:justify-center md:items-start gap-2 p-6 order-1 md:order-2 text-center md:text-left">
          <p className="text-base md:text-xl lg:text-2xl font-light text-[#333]">
            Cari tahu lebih lanjut
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight font-semibold text-neutral-900">
            Syarat, Ketentuan, dan Pemberitahuan Privasi
          </h2>
        </div>
      </div>

      {/* Section Konten Syarat dan Ketentuan */}
      <div className="bg-white w-full px-4 md:px-6 lg:px-[150px] py-8 lg:py-16">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-snug lg:leading-tight text-black text-center font-semibold md:text-center">
            Syarat dan Ketentuan Penggunaan
          </h2>
          <p className="text-neutral-900 text-sm md:text-lg lg:text-2xl font-light mt-2 lg:mt-6 text-center">
            wondr by BNI
          </p>
        </div>

        <div className="mt-10">
          <div className="ql-content-wrapper">
            <div className="ql-content ql-editor text-black font-normal text-justify">
                <p>
                    <span className="text-[#1b1c1d]">
                    Syarat dan Ketentuan ini mengatur ketentuan-ketentuan
                    mengenai; Pendaftaran untuk menjadi Pengguna Aplikasi wondr by
                    BNI, Ketentuan Umum &amp; Persyaratan Pembukaan Rekening
                    melalui Electronic Channel dan hal-hal lainnya yang berkaitan
                    dengan Aplikasi dan Pemberitahuan Privasi.
                    </span>
                </p>
                <br />
                <p>
                    <strong className="text-[#1b1c1d]">
                        1. DEFINISI
                    </strong>
                </p>
                <p>
                    <span className="text-[#1b1c1d]">
                        a.
                    </span>
                    <strong className="text-[#1b1c1d]">
                        Aplikasi wondr by BNI
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah fasilitas elektronik 
                    </span>{' '}
                    <em className="text-[#1b1c1d]">
                        channel
                    </em>{' '}
                    <span className="text-[#1b1c1d]"> 
                        yang dimiliki, dikembangkan, dan dikelola oleh Bank serta dapat diakses dan digunakan oleh Pengguna untuk melakukan Transaksi Finansial dan/atau Transaksi Non Finansial melalui 
                    </span>{' '}
                    <em className="text-[#1b1c1d]">
                        Smartphone
                    </em>{' '}
                    <span className="text-[#1b1c1d]">
                        .
                    </span>{' '}
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        b.
                    </span>
                    <strong className="text-[#1b1c1d]">
                        Bank
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah PT Bank Negara Indonesia (Persero) Tbk yang meliputi kantor pusat dan kantor cabang serta kantor lainnya yang merupakan bagian yang tidak terpisahkan dari PT Bank Negara Indonesia (Persero) Tbk.
                    </span>{' '}
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        c. 
                    </span>
                    <strong className="text-[#1b1c1d]">
                        BNI Call Officer (BCO)
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah petugas-petugas dari BNI 
                    </span>{' '}
                    <em className="text-[#1b1c1d]">
                        Customer Experience Center
                    </em>{' '}
                    <span className="text-[#1b1c1d]"> 
                        sebagai penerima komplain yang disampaikan oleh Pengguna.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        d. </span>
                    <strong className="text-[#1b1c1d]">
                        BNI Call
                        </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah layanan 24 jam yang dapat diakses Nasabah dengan mudah dalam berinteraksi dengan Bank melalui saluran telepon 1500046.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        e. 
                    </span>
                    <strong className="text-[#1b1c1d]">
                        BNI Deposito
                    </strong> {' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah simpanan berjangka yang dibuka melalui Aplikasi wondr by BNI dan pencairannya hanya dapat dilakukan pada waktu tertentu sesuai dengan kesepakatan antara Pengguna dan Bank.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        f. 
                    </span>
                    <strong className="text-[#1b1c1d]">
                        Taplus/Taplus Bisnis/Taplus Muda/Taplus Diaspora/Emerald Saving/BNI Dollar USD/BNI Dollar SGD/ BNI Dollar AUD (“Rekening Tabungan”)
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah produk tabungan yang dibuka melalui Aplikasi wondr by BNI yang penarikannya dapat dilakukan setiap saat menurut syarat tertentu yang disepakati antara Pengguna dengan Bank.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        g. 
                    </span>
                    <strong className="text-[#1b1c1d]">
                        Taplus Digital
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah produk tabungan yang dibuka melalui Aplikasi wondr by BNI yang penarikannya dapat dilakukan setiap saat menurut syarat tertentu yang disepakati antara Nasabah dengan BNI.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        h. </span>
                    <strong className="text-[#1b1c1d]">
                        Bunga BNI Deposito</strong> {' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah bunga yang akan dibayarkan dengan pilihan ditransfer ke Rekening Afiliasi atau kapitalisasi (menambah pokok simpanan BNI Deposito) sampai dengan tanggal jatuh tempo untuk BNI Deposito.
                    </span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">
                        i.
                    </span>{' '}
                    <strong className="text-[#1b1c1d]">
                        Data Biometrik
                    </strong>{' '}
                    <span className="text-[#1b1c1d]"> 
                        adalah yaitu data yang berkaitan dengan fisik, fisiologis, atau karakteristik perilaku individu yang memungkinkan identifikasi unik terhadap individu, termasuk, tetapi tidak terbatas pada, gambar wajah, sidik jari, dan rekaman pembicaraan.
                    </span>{' '}
                </p>

                <p>
                    <span className="text-[#1b1c1d]">j. </span>
                    <strong className="text-[#1b1c1d]">Data Pribadi</strong>{' '}
                    <span className="text-[#1b1c1d]">adalah data tentang orang perseorangan yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya baik secara langsung maupun tidak langsung melalui sistem elektronik atau non elektronik.</span>
                </p>

                <p>
                    <span className="text-[#1b1c1d]">k. </span>
                    <strong className="text-[#1b1c1d]">Kartu Debit BNI</strong>{' '}
                    <span className="text-[#1b1c1d]"> adalah kartu yang diterbitkan oleh Bank berdasarkan lisensi dari </span>{' '}
                    <em className="text-[#1b1c1d]">principal</em>{' '}
                    <span className="text-[#1b1c1d]"> yang dapat dipergunakan sebagai alat tarik tunai dan melakukan transaksi belanja di jaringan </span><em className="text-[#1b1c1d]">merchant</em><span className="text-[#1b1c1d]"> dengan pembebanan langsung ke rekening tabungan atau giro Pengguna sesuai nilai transaksinya.</span></p>

                <p><span className="text-[#1b1c1d]">l. </span><strong className="text-[#1b1c1d]">Pemberitahuan Privasi</strong>{' '}<span className="text-[#1b1c1d]"> adalah bentuk keterbukaan informasi dari Bank yang menjelaskan kepada Nasabah sehubungan dengan Bank memperoleh dan mengumpulkan, mengolah, memproses, menganalisis, menggunakan, menyimpan, memperbaiki dan memperbarui, menampilkan, mengumumkan, mentransfer, menyebarluaskan, mengungkapkan, menghapuskan dan/atau memusnahkan Data Pribadi Nasabah, serta hak-hak Nasabah selaku subjek Data Pribadi berdasarkan ketentuan Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi beserta perubahan dan peraturan pelaksanaannya dan peraturan perundang-undangan lain yang berlaku dan relevan.</span></p>

                <p><span className="text-[#1b1c1d]">m. </span><strong className="text-[#1b1c1d]">Kode One Time Password (selanjutnya disebut “Kode OTP”)</strong>{' '}<span className="text-[#1b1c1d]"> adalah kode otentikasi sekali pakai yang dikirimkan melalui SMS/aplikasi WhatsApp kepada Pengguna untuk validasi proses Registrasi Aplikasi wondr by BNI / Reaktivasi Aplikasi wondr by BNI. Kode OTP dikirim oleh sistem Aplikasi wondr by BNI ke nomor </span><em className="text-[#1b1c1d]">Smartphone</em>{' '}<span className="text-[#1b1c1d]"> Pengguna yang telah terdaftar/tercatat pada sistem Bank pada saat Pengguna melakukan Registrasi Aplikasi wondr by BNI / Reaktivasi Aplikasi wondr by BNI.</span></p>

                <p><span className="text-[#1b1c1d]">n. </span><strong className="text-[#1b1c1d]">Media Resmi Bank</strong>{' '}<span className="text-[#1b1c1d]"> adalah sarana penyampaian informasi resmi dari Bank kepada Nasabah antara lain </span><em className="text-[#1b1c1d]">website</em>{' '}<span className="text-[#1b1c1d]">/SMS/WhatsApp/Surat Elektronik/BNI Call/surat/publikasi resmi di media massa.</span></p>

                <p><span className="text-[#1b1c1d]">o. </span><strong className="text-[#1b1c1d]">PIN wondr</strong>{' '}<span className="text-[#1b1c1d]"> adalah kode untuk otorisasi transaksi, terdiri dari 6 (enam) karakter angka yang bersifat rahasia (hanya boleh diketahui oleh Pengguna yang sah), yang dibuat sendiri oleh Nasabah pada saat melakukan Registrasi atau Reaktivasi, dan dapat diubah sewaktu-waktu oleh Nasabah.</span></p>

                <p><span className="text-[#1b1c1d]">p. </span><strong className="text-[#1b1c1d]">Nasabah</strong>{' '}<span className="text-[#1b1c1d]"> adalah orang perorangan pemilik/pengguna produk perbankan yang disediakan oleh Bank, seperti dan tidak terbatas pada produk tabungan, giro perorangan, deposito dan/atau kartu kredit.</span></p>

                <p><span className="text-[#1b1c1d]">q. </span><strong className="text-[#1b1c1d]">Nasabah Pengguna Aplikasi wondr by BNI (selanjutnya disebut “Pengguna”)</strong>{' '}<span className="text-[#1b1c1d]"> adalah Nasabah yang telah terdaftar sebagai pengguna Aplikasi wondr by BNI.</span></p>

                <p><span className="text-[#1b1c1d]">r. </span><strong className="text-[#1b1c1d]">Notifikasi Penempatan Dana BNI Deposito/Pencairan BNI Deposito/perubahan Rekening Afiliasi</strong>{' '}<span className="text-[#1b1c1d]"> adalah pemberitahuan bahwa proses Penempatan Dana BNI Deposito/Pencairan BNI Deposito/perubahan Rekening Afiliasi berhasil dilakukan oleh Pengguna.</span></p>

                <p><span className="text-[#1b1c1d]">s. </span><strong className="text-[#1b1c1d]">Password Login</strong><span className="text-[#1b1c1d]"> adalah kata sandi untuk akses atau </span>{' '}<em className="text-[#1b1c1d]">login</em>{' '}<span className="text-[#1b1c1d]"> Aplikasi wondr by BNI, terdiri dari 6-12 karakter kombinasi huruf besar dan kecil, angka serta karakter spesial (kecuali ; - + ‘ \ () = &gt;&lt;@ dan spasi) yang bersifat rahasia, hanya boleh diketahui oleh Pengguna yang sah, yang dibuat sendiri oleh Pengguna di Aplikasi wondr by BNI dan dapat diubah sewaktu-waktu oleh Pengguna melalui Aplikasi wondr by BNI.</span></p>

                <p><span className="text-[#1b1c1d]">t. </span><strong className="text-[#1b1c1d]">Pencairan BNI Deposito</strong>{' '}<span className="text-[#1b1c1d]"> adalah proses pemindahan dana dari rekening BNI Deposito ke Rekening Afiliasi melalui Aplikasi wondr by BNI pada saat tanggal jatuh tempo maupun sebelum tanggal jatuh tempo.</span></p>

                <p><span className="text-[#1b1c1d]">u. </span><strong className="text-[#1b1c1d]">Penempatan Dana BNI Deposito</strong>{' '}<span className="text-[#1b1c1d]"> adalah proses penempatan dana dari Rekening Sumber Dana ke rekening BNI Deposito melalui Aplikasi wondr by BNI.</span></p>

                <p><span className="text-[#1b1c1d]">v. </span><strong className="text-[#1b1c1d]">Quick Response Code Indonesian Standard (QRIS)</strong>{' '}<span className="text-[#1b1c1d]"> adalah Standard QR Code pembayaran yang ditetapkan oleh Bank Indonesia untuk digunakan dalam memfasilitasi pembayaran di Indonesia.</span></p>

                <p><span className="text-[#1b1c1d]">w. </span><strong className="text-[#1b1c1d]">Reaktivasi</strong>{' '}<span className="text-[#1b1c1d]"> adalah proses pengaktifan kembali akun Pengguna agar dapat menggunakan Aplikasi wondr by BNI beserta seluruh transaksi dan/atau fitur yang terdapat di Aplikasi wondr by BNI, dengan proses verifikasi ulang 2 (dua) faktor autentikasi Pengguna terhadap 1 (satu) </span><em className="text-[#1b1c1d]">Smartphone</em><span className="text-[#1b1c1d]">.</span></p>

                <p><span className="text-[#1b1c1d]">x. </span><strong className="text-[#1b1c1d]">Registrasi</strong>{' '}<span className="text-[#1b1c1d]"> adalah proses pembuatan akun Pengguna di 1 (satu) </span><em className="text-[#1b1c1d]">Smartphone</em><span className="text-[#1b1c1d]"> yang telah berhasil melakukan instalasi Aplikasi wondr by BNI dan verifikasi 2 (dua) faktor autentikasi.</span></p>

                <p><span className="text-[#1b1c1d]">y. </span><strong className="text-[#1b1c1d]">Rekening</strong>{' '}<span className="text-[#1b1c1d]"> adalah catatan pembukuan Bank atas produk simpanan yang dibuka oleh Pengguna pada Bank melalui Aplikasi wondr by BNI, berupa tabungan dan/atau Deposito, baik dalam Rupiah maupun mata uang asing, atas dasar permohonan pembukaan rekening dari Pengguna, menurut tata cara dan persyaratan yang tercantum dalam Syarat dan Ketentuan ini.</span></p>

                <p><span className="text-[#1b1c1d]">z. </span><strong className="text-[#1b1c1d]">Rekening Afiliasi</strong>{' '}<span className="text-[#1b1c1d]"> adalah rekening simpanan yang ada pada Bank termasuk namun tidak terbatas pada BNI Taplus/BNI Taplus Bisnis/BNI Giro/BNI Emerald Saving yang digunakan Nasabah untuk menampung pembayaran/penerimaan dana seperti penerimaan Bunga BNI Deposito dan pencairan BNI Deposito.</span></p>

                <p><span className="text-[#1b1c1d]">aa. </span><strong className="text-[#1b1c1d]">Rekening Sumber Dana</strong>{' '}<span className="text-[#1b1c1d]"> adalah rekening yang terhubung dengan Aplikasi wondr by BNI yang digunakan sebagai rekening pendebetan setoran awal, termasuk namun tidak terbatas pada BNI Taplus/BNI Taplus Bisnis/BNI Giro Perorangan/ BNI Taplus Muda/BNI Taplus Diaspora.</span></p>

                <p><span className="text-[#1b1c1d]">bb. </span><strong className="text-[#1b1c1d]">Rekening Sumber Dana BNI Deposito</strong>{' '}<span className="text-[#1b1c1d]"> adalah rekening BNI Taplus/BNI Taplus Bisnis/BNI Giro/BNI Emerald Saving/BNI Dollar USD/BNI Dollar SGD/BNI Dollar AUD yang digunakan Pengguna sebagai sumber dana untuk Penempatan Dana BNI Deposito.</span></p>

                <p><span className="text-[#1b1c1d]">cc. </span><strong className="text-[#1b1c1d]">Smartphone</strong>{' '}<span className="text-[#1b1c1d]"> adalah </span><em className="text-[#1b1c1d]">handphone</em><span className="text-[#1b1c1d]"> dengan sistem operasi Android dan iOS yang memiliki kemampuan tingkat tinggi, yang bekerja menggunakan seluruh perangkat lunak sistem operasi yang menyediakan hubungan standar dan mendasar bagi pengembang aplikasi.</span></p>

                <p><span className="text-[#1b1c1d]">dd. </span><strong className="text-[#1b1c1d]">Service Level Agreement Penyelesaian Komplain (selanjutnya disebut “SLA Penyelesaian Komplain”)</strong>{' '}<span className="text-[#1b1c1d]"> adalah acuan dasar penyelesaian komplain di bidang perbankan yang telah ditentukan pihak regulator (dhi. Bank Indonesia dan Otoritas Jasa Keuangan).</span></p>

                <p><span className="text-[#1b1c1d]">ee. </span><strong className="text-[#1b1c1d]">Transaksi Finansial</strong>{' '}<span className="text-[#1b1c1d]"> adalah jenis transaksi yang mengakibatkan terjadinya mutasi secara finansial (debet atau kredit) terhadap rekening.</span></p>

                <p><span className="text-[#1b1c1d]">ff. </span><strong className="text-[#1b1c1d]">Transaksi Non Finansial</strong>{' '}<span className="text-[#1b1c1d]"> adalah jenis transaksi yang tidak mengakibatkan terjadinya mutasi secara finansial terhadap rekening.</span></p>

                <p><span className="text-[#1b1c1d]">gg. </span><strong className="text-[#1b1c1d]">Transaksi PIN-Less</strong>{' '}<span className="text-[#1b1c1d]"> adalah fitur yang disediakan Bank untuk memudahkan Pengguna melakukan transaksi tertentu tanpa perlu memasukan PIN wondr.</span></p>

                <p><span className="text-[#1b1c1d]">hh. </span><strong className="text-[#1b1c1d]">Transaksi Quick Access</strong>{' '}<span className="text-[#1b1c1d]"> adalah fitur yang disediakan Bank untuk memudahkan Pengguna dalam melakukan transaksi pembayaran dan/atau pembelian tanpa melakukan </span><em className="text-[#1b1c1d]">login</em><span className="text-[#1b1c1d]"> di Aplikasi wondr by BNI.</span></p>

                <p><span className="text-[#1b1c1d]">ii. </span><strong className="text-[#1b1c1d]">Transfer Terjadwal</strong>{' '}<span className="text-[#1b1c1d]"> adalah proses pengiriman uang (</span><em className="text-[#1b1c1d]">transfer</em><span className="text-[#1b1c1d]">) yang dijalankan secara otomatis oleh </span><em className="text-[#1b1c1d]">system</em><span className="text-[#1b1c1d]"> pada hari/tanggal tertentu sebesar nominal yang ditetapkan oleh Nasabah saat pendaftaran transfer terjadwal.</span></p>
                
                <p>
                    <strong className="text-[#1b1c1d]">
                    2. KETENTUAN UMUM KEANGGOTAAN
                    </strong>
                </p>
                <p>
                    <span className="text-[#1b1c1d]">
                    Ketentuan umum keanggotaan atas Aplikasi wondr by BNI diatur sebagai berikut:
                    </span>
                </p>
                <p>
                    <span className="text-[#1b1c1d]">
                    a. Untuk dapat menggunakan Aplikasi wondr by BNI, calon Pengguna harus memenuhi persyaratan Pengguna.
                    </span>
                </p>
                <p>
                    <span className="text-[#1b1c1d]">
                    b. Pengguna wajib melakukan pengkinian data ke Bank setiap kali ada perubahan Data Pribadi khususnya perubahan alamat{" "}
                    </span>
                    <em className="text-[#1b1c1d]">e-mail</em>
                    <span className="text-[#1b1c1d]">
                    {" "}dan/atau nomor{" "}
                    </span>
                    <em className="text-[#1b1c1d]">Smartphone</em>
                    <span className="text-[#1b1c1d]"> yang aktif digunakan.</span>
                </p>
                <p>
                    <span className="text-[#1b1c1d]">
                    c. Segala kerugian yang timbul akibat tidak dilakukannya pengkinian data oleh Pengguna kepada Bank, khususnya perubahan alamat{" "}
                    </span>
                    <em className="text-[#1b1c1d]">e-mail</em>
                    <span className="text-[#1b1c1d]"> dan/atau nomor </span>
                    <em className="text-[#1b1c1d]">Smartphone</em>
                    <span className="text-[#1b1c1d]"> aktif Pengguna, menjadi tanggung jawab Pengguna sepenuhnya.</span>
                </p>
                <p><br /></p>

                <p>
                    <strong className="text-[#1b1c1d]">
                    3. PERSYARATAN PENGGUNA
                    </strong>
                </p>
                <p className="text-[#1b1c1d]">
                    a. Pengguna wajib memiliki rekening tabungan perorangan (BNI Taplus, BNI Taplus Bisnis, BNI Taplus Muda, BNI Taplus Anak, BNI Taplus Anggota/Pegawai, BNI Emerald, Giro Perorangan (Rupiah)), dan/atau kartu kredit yang terdaftar pada Bank.
                </p>
                <p className="text-[#1b1c1d]">
                    b. Pengguna wajib memiliki nomor <em>Smartphone</em> dan alamat <em>email</em> pribadi yang masih aktif digunakan oleh Pengguna.
                </p>
                <p className="text-[#1b1c1d]">
                    c. Pengguna telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
                </p>

                <h2 className="font-bold text-lg">4. REGISTRASI APLIKASI WONDR BY BNI</h2>
                <p>a. Registrasi Aplikasi wondr by BNI hanya dapat dilakukan melalui Aplikasi wondr by BNI yang telah diunduh pada <em>Smartphone</em> Nasabah, untuk itu Nasabah wajib terlebih dahulu mengunduh Aplikasi wondr by BNI pada <em>Smartphone</em> miliknya.</p>
                <p>b. Nasabah wajib menggunakan aplikasi resmi dari Aplikasi wondr by BNI yang disediakan oleh Bank pada Google Play dan Appstore.</p>
                <p>c. Nasabah hanya dapat meregistrasikan 1 (satu) <em>user</em> pada Aplikasi wondr by BNI, dengan 1 (satu) nomor <em>Smartphone</em> yang terdaftar pada sistem pada 1 (satu) <em>device Smartphone</em>.</p>
                <p>d. Registrasi Aplikasi wondr by BNI wajib dilakukan sendiri oleh Nasabah yang bersangkutan (tidak boleh diwakilkan) dengan menggunakan Smartphone pribadi milik Nasabah dan dilarang untuk mendaftarkan nomor Smartphone milik orang lain dengan alasan apapun. Nasabah wajib mengisikan informasi sesuai persyaratan keanggotaan Aplikasi wondr by BNI. Adapun data yang wajib diisi oleh Nasabah yaitu:</p>
                <ul className="list-decimal list-inside ml-6 space-y-1">
                    <li>Nomor Smartphone Nasabah</li>
                    <li>Nomor Induk Kependudukan dalam Kartu Tanda Penduduk Nasabah</li>
                    <li>Nomor Kartu Debit dan PIN Kartu Debit atau Nomor Kartu Kredit dan PIN Kartu Kredit (Opsional)</li>
                    <li>PIN wondr</li>
                    <li>Tanggal lahir</li>
                    <li>Password Aplikasi wondr by BNI</li>
                    <li>Email nasabah</li>
                </ul>
                <p>e. Registrasi Aplikasi wondr by BNI hanya dapat dilakukan secara mandiri oleh Nasabah melalui Aplikasi wondr by BNI yang terdapat di <em>Smartphone</em> pribadi milik Nasabah.</p>
                <p>f. Bank akan melakukan pemrosesan Data Pribadi Nasabah/Pengguna sesuai dengan peraturan perundang-undangan yang berlaku dan berdasarkan persetujuan dari Nasabah/Pengguna terhadap Syarat dan Ketentuan serta Pemberitahuan Privasi yang merupakan satu kesatuan dan bagian yang tidak terpisahkan dari Syarat dan Ketentuan ini.</p>
                <p>g. Risiko yang timbul akibat kelalaian dan/atau penyalahgunaan data oleh Nasabah dalam pelaksanaan Registrasi Aplikasi wondr by BNI, seperti mendaftarkan nomor <em>Smartphone</em> yang bukan milik pribadinya ataupun membuat PIN wondr maupun <em>Password Login</em> yang mudah ditebak, akan menjadi tanggung jawab Nasabah/Pengguna sepenuhnya.</p>
                <p>h. Nasabah/Pengguna menyatakan bahwa Nasabah/Pengguna telah membaca, memahami dan menyetujui segala hak Nasabah/Pengguna sebagai subjek Data Pribadi... <em>[potong jika perlu]</em></p>

                <h2 className="font-bold text-lg mt-8">5. PENGAMANAN TRANSAKSI</h2>
                <p>a. Kerahasiaan dan penggunaan <em>Password Login</em> dan PIN wondr Aplikasi wondr by BNI adalah sepenuhnya menjadi tanggung jawab Pengguna dan hanya boleh diketahui dan digunakan oleh Pengguna yang bersangkutan.</p>
                <p>b. Pengguna wajib menjaga kerahasiaan Password Login dan PIN wondr miliknya agar tidak diketahui dan tidak digunakan oleh pihak lain, diantaranya dengan cara:</p>
                <ul className="list-decimal list-inside ml-6 space-y-1">
                    <li>Tidak memberitahukannya kepada siapapun termasuk kepada petugas Bank.</li>
                    <li>Tidak mencatat atau menyimpannya secara tertulis pada kertas atau media penyimpanan lainnya yang memungkinkan diketahui orang lain.</li>
                    <li>Berhati-hati dalam menggunakannya agar tidak terlihat orang lain.</li>
                    <li>Mengganti Password Login atau PIN wondr secara berkala.</li>
                    <li>Tidak menggunakan Password Login dan PIN yang mudah ditebak (misalnya tanggal lahir).</li>
                    <li>Membuat Password dan PIN yang berbeda dari e-channel lain seperti ATM/SMS Banking.</li>
                </ul>
                <p>c. Pengguna diberikan kebebasan untuk membuat <em>Password Login</em> dan PIN wondr serta dapat mengubahnya sehari sekali melalui Aplikasi wondr by BNI.</p>
                <p>d. Apabila <em>Smartphone</em> yang digunakan untuk bertransaksi hilang/dicuri, Pengguna wajib memberitahu Bank melalui BNI Call untuk pemblokiran SMS OTP.</p>
                <p>e. Jika <em>Password Login</em> atau PIN wondr diketahui orang lain, Pengguna wajib segera mengamankan dan mengubahnya.</p>
                <p>f. Jika tidak bisa mengubahnya, Pengguna wajib lapor ke Bank via BNI Call.</p>
                <p>g. Segala transaksi menggunakan <em>Password Login</em> dan/atau PIN wondr yang dilakukan oleh pihak tidak berwenang tetap menjadi tanggung jawab Pengguna.</p>
                <p>h. Penggunaan <em>Password Login</em> dan/atau PIN wondr memiliki kekuatan hukum setara perintah tertulis.</p>
                <p>i. Penyalahgunaan <em>Password Login</em> dan/atau PIN wondr beserta akibatnya adalah tanggung jawab Pengguna sepenuhnya.</p>
                <p>j. Pengguna wajib menjaga <em>Smartphone</em> dari aplikasi berbahaya seperti <em>virus, malware, trojan</em>, dan tidak memodifikasi perangkat (<em>jailbreak</em> atau <em>rooted</em>).</p>
                <p>k. Jika <em>Smartphone</em> hilang atau ada perubahan nomor/email, wajib lapor ke BNI Call atau Command Centre.</p>
                <p>l. Kerugian akibat aplikasi berbahaya di <em>Smartphone</em> adalah tanggung jawab Nasabah sepenuhnya.</p>

                <h2 className="font-bold text-lg">6. KEAMANAN DATA PRIBADI</h2>
                <p>
                    Bank berkomitmen untuk memastikan informasi atau Data Pribadi Pengguna yang diperoleh melalui Aplikasi wondr by BNI tetap aman. 
                    Dalam mengimplementasikan komitmen tersebut, maka Bank telah menerapkan prosedur-prosedur dan menggunakan sistem elektronik yang 
                    dilengkapi dengan tingkat keamanan yang memadai sesuai dengan yang disyaratkan oleh ketentuan hukum yang berlaku dan Bank akan 
                    memperbaharui tingkat keamanan tersebut dari waktu ke waktu.
                </p>
                <p>
                    Untuk memastikan proteksi Pengguna dalam melakukan akses ke Aplikasi wondr by BNI, Pengguna mohon dapat melakukan hal-hal sebagai berikut:
                </p>
                <p>
                    Dalam hal Pengguna mengakses Aplikasi wondr by BNI, mohon pastikan Pengguna mengunduh Aplikasi wondr by BNI melalui Google Play 
                    dan Appstore dan bukan bersumber dari <em>link</em> yang diberikan pihak tidak berwenang. Selain itu, Bank juga mewajibkan Pengguna untuk:
                </p>
                <ol className="list-decimal list-inside ml-6 space-y-1">
                    <li>memasukkan <em>Password Login</em> atau menggunakan akses biometrik yang Data Biometriknya telah didaftarkan Pengguna sebelum Pengguna masuk ke Aplikasi wondr by BNI;</li>
                    <li>menjaga kerahasiaan <em>Password Login</em> dan PIN wondr Pengguna dan tidak mengungkapkan kepada siapapun;</li>
                    <li>menghubungi Bank dalam hal <em>Password Login</em> dan/atau PIN wondr Pengguna terblokir, serta mengikuti instruksi Bank untuk mengaktifkan Aplikasi wondr by BNI Pengguna kembali.</li>
                </ol>
                <p>
                    Dalam hal terjadi akses dan kegiatan ilegal atas kerahasiaan Data Pribadi Pengguna yang berada di luar kendali Bank, Bank akan segera 
                    memberitahukan kepada Pengguna pada kesempatan pertama sehingga Pengguna dapat mengurangi risiko yang timbul atas hal tersebut.
                </p>
                <p>
                    Pengguna bertanggung jawab untuk menjaga kerahasiaan detail informasi dan Data Pribadi Pengguna, termasuk informasi mengenai 
                    <em> Password Login</em>, PIN wondr maupun OTP kepada siapapun dan untuk selalu menjaga dan bertanggung jawab atas keamanan perangkat 
                    <em> Smartphone</em> yang Pengguna gunakan.
                </p>

                <h2 className="font-bold text-lg mt-8">7. PENGGUNAAN APLIKASI WONDR BY BNI</h2>
                <p>
                    a. Aplikasi wondr by BNI hanya boleh digunakan oleh Pengguna yang sah, yaitu Nasabah yang terdaftar pada sistem <em>database</em> 
                    Aplikasi wondr by BNI sesuai dengan Nomor Induk Kependudukan dan nomor <em>Smartphone</em> yang didaftarkannya.
                </p>
                <p>
                    b. Segala kerugian yang ditimbulkan akibat penggunaan Aplikasi wondr by BNI oleh pihak lain yang tidak berhak merupakan tanggung 
                    jawab Nasabah/Pengguna sepenuhnya, sepanjang hal tersebut bukan merupakan kesalahan Bank atau pihak lainnya.
                </p>
                <p>c. Pengguna dapat memanfaatkan Aplikasi wondr by BNI untuk Transaksi Finansial dan Transaksi Non Finansial yang telah ditentukan oleh Bank.</p>
                <p>d. Pengguna wajib mengisi secara lengkap dan benar serta memastikan ketepatan dan kelengkapan data yang dibutuhkan untuk Transaksi Finansial maupun Transaksi Non Finansial yang akan dilakukan.</p>
                <p>
                    e. Bank tidak bertanggung jawab terhadap segala dampak apapun yang mungkin timbul yang diakibatkan kelalaian, ketidaklengkapan, 
                    ketidakjelasan atau ketidaktepatan data yang diisi oleh Nasabah/Pengguna, baik saat Registrasi Aplikasi wondr by BNI, Reaktivasi 
                    Aplikasi wondr by BNI, maupun saat melakukan Transaksi Finansial maupun Transaksi Non Finansial pada Aplikasi wondr by BNI.
                </p>
                <p>f. Pengguna memiliki kesempatan untuk memeriksa kembali dan/atau membatalkan data yang telah diisi pada saat konfirmasi transaksi.</p>
                <p>
                    g. Apabila telah diyakini kebenaran dan kelengkapan data yang diisi, sebagai tanda persetujuan pelaksanaan Transaksi Finansial maka 
                    Pengguna wajib memasukkan PIN wondr pada kolom yang telah disediakan, kecuali untuk Transaksi PIN-less sesuai Syarat dan Ketentuan 
                    Transaksi PIN-less pada Aplikasi wondr by BNI.
                </p>
                <p>
                    h. Segala Transaksi Finansial dan Transaksi Non Finansial yang telah diperintahkan kepada Bank dan disetujui oleh Pengguna (berupa pemberian PIN wondr yang benar) tidak dapat dibatalkan.
                </p>
                <p>
                    i. Setiap perintah yang telah disetujui oleh Pengguna yang tersimpan pada pusat data Bank merupakan data yang benar yang diterima 
                    sebagai bukti perintah dari Pengguna kepada Bank untuk melaksanakan perintah yang dimaksud.
                </p>
                <p>
                    j. Bank menerima dan menjalankan setiap perintah dari Pengguna sebagai perintah yang sah berdasarkan penggunaan <em>Password Login</em> 
                    serta PIN wondr (untuk Transaksi Finansial) maka Bank tidak mempunyai kewajiban untuk meneliti atau menyelidiki keaslian maupun 
                    keabsahan atau kewenangan pengguna <em>Password Login</em> dan PIN wondr atau menilai maupun membuktikan ketepatan dan kelengkapan 
                    perintah dimaksud, oleh karena itu perintah tersebut sah mengikat Pengguna sebagaimana mestinya.
                </p>
                <p>k. Bank berhak untuk tidak melaksanakan perintah dari Pengguna, apabila:</p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Saldo rekening Pengguna di Bank tidak mencukupi.</li>
                    <li>Bank mengetahui atau mempunyai alasan untuk menduga bahwa penipuan, penyalahgunaan, atau aksi kejahatan telah atau akan dilakukan.</li>
                </ul>
                <p>
                    l. Sebagai bukti bahwa Transaksi Finansial yang diperintahkan Pengguna telah berhasil dilakukan oleh Bank, Pengguna akan mendapatkan 
                    bukti Transaksi Finansial dan bukti tersebut akan tersimpan di dalam <em>database</em> Bank sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.
                </p>
                <p>m. Pengguna menyetujui dan mengakui bahwa:</p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Dengan dilaksanakannya Transaksi Non Finansial dan/atau Transaksi Finansial melalui Aplikasi wondr by BNI, maka semua perintah dan komunikasi dari Pengguna yang diterima Bank akan diperlakukan sebagai alat bukti yang sah meskipun tidak dibuat dokumen tertulis dan/atau dikeluarkan dokumen yang tidak ditandatangani.</li>
                    <li>Bukti atas perintah dari Pengguna kepada Bank dan segala bentuk komunikasi antara Bank dan Pengguna yang dikirim secara elektronik yang tersimpan pada pusat data Bank dan/atau tersimpan dalam bentuk penyimpanan informasi dan data lainnya di Bank, baik yang berupa dokumen tertulis, catatan, tape/cartridge, print out komputer dan/atau salinan, merupakan alat bukti yang sah yang tidak akan dibantah keabsahan, kebenaran atau keasliannya.</li>
                </ul>
                <p>
                    n. Pengguna dengan ini memberikan kuasa kepada Bank untuk mendebet rekening Pengguna yang terdaftar di Bank untuk melaksanakan Transaksi Finansial 
                    yang diinstruksikan oleh Pengguna kepada Bank melalui Aplikasi wondr by BNI dan untuk pembayaran biaya administrasi serta biaya transaksi atas penggunaan Aplikasi wondr by BNI.
                </p>

                <h2 className="font-bold text-lg">8. KETENTUAN PEMBUKAAN DAN PENGGUNAAN REKENING</h2>

                <p><strong>a. Ketentuan Umum Rekening</strong></p>
                <ul className="list-decimal list-inside ml-6 space-y-1">
                    <li>Jenis-jenis Rekening adalah tabungan dan deposito, baik dalam mata uang Rupiah maupun mata uang asing sesuai ketentuan yang berlaku pada Bank.</li>
                    <li>Dalam hal Rekening dibuka dengan mata uang asing dan terdapat fluktuasi pada nilai mata uang, maka hal ini merupakan risiko pasar sehingga Bank tidak bertanggung jawab atas perubahan nilai mata uang asing terhadap Rupiah.</li>
                    <li>Bilamana Nasabah membuka lebih dari satu Rekening pada Bank, maka Ketentuan Pembukaan dan Penggunaan Rekening ini berlaku untuk seluruh Rekening tersebut.</li>
                    <li>Bank atas pertimbangannya sendiri berhak menolak permohonan pembukaan Rekening oleh Nasabah dan memberitahukan kepada calon Nasabah.</li>
                    <li>Data Nasabah/Customer Information File (CIF)</li>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Nasabah wajib menyampaikan informasi, data, dan dokumen pendukung yang dipersyaratkan Bank.</li>
                    <li>Bank berhak meminta informasi dan menatakerjakan data profil Nasabah sesuai kebutuhan dan hukum yang berlaku.</li>
                    <li>Nasabah menjamin semua data/informasi yang disampaikan adalah benar, lengkap, asli, sah, dan terbaru.</li>
                    <li>Nasabah wajib segera melaporkan setiap perubahan data kepada Bank.</li>
                    <li>Nasabah bertanggung jawab atas risiko akibat tidak melaporkan perubahan data tersebut.</li>
                    </ul>
                </ul>

                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Dana yang disetorkan tidak berasal dari/untuk tujuan tindak pidana pencucian uang (money laundering).</li>
                    <li>Transaksi menggunakan surat berharga dan sarana perbankan tunduk pada peraturan yang berlaku.</li>
                    <li>Nasabah bertanggung jawab atas keamanan surat perintah transaksi, termasuk penyalahgunaan atau pemalsuan.</li>
                    <li>Penarikan dana dalam mata uang asing bergantung pada ketersediaan dan tunduk pada ketentuan Bank.</li>
                    <li>Setoran mata uang asing mengikuti ketentuan media resmi Bank.</li>
                    <li>Bank berhak menunda/menolak/membatalkan transaksi demi kepatuhan hukum atau kebijakan internal.</li>
                    <li>Transaksi valuta asing tunduk pada hukum dan persyaratan dokumen tertentu.</li>
                    <li>Catatan Bank merupakan bukti sah bila terjadi perbedaan dengan catatan Nasabah.</li>
                </ul>

                <p><strong>7. Bunga, pajak, dan biaya</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Pendapatan bunga dikenakan pajak sesuai ketentuan perpajakan.</li>
                    <li>Bank berwenang menetapkan biaya dan memotong langsung dari Rekening dengan pemberitahuan.</li>
                </ul>

                <p><strong>8 Nasabah meninggal dunia/pailit/dibubarkan</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Bank berhak menonaktifkan Rekening dan menyerahkan hak kepada ahli waris/pihak sah.</li>
                    <li>Bank berhak meminta dokumen sah sebagai bukti kedudukan ahli waris.</li>
                </ul>

                <p><strong>9 Kehilangan dan penyalahgunaan Rekening/fasilitas lainnya</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Nasabah wajib melapor kehilangan bukti kepemilikan Rekening disertai dokumen pendukung.</li>
                    <li>Kehilangan kartu atau perangkat elektronik dilaporkan melalui cabang atau BNI Call.</li>
                    <li>Bank dapat memblokir Rekening/Kartu atas laporan Nasabah dengan dokumen pendukung.</li>
                    <li>Nasabah bertanggung jawab atas transaksi sebelum laporan kehilangan diterima.</li>
                    <li>Bank berhak menolak penggantian bila ada dugaan itikad tidak baik.</li>
                    <li>Penggantian akan dikenakan biaya sesuai ketentuan resmi Bank.</li>
                    <li>Nasabah bertanggung jawab atas segala kerugian akibat kehilangan/pemalsuan fasilitas rekening.</li>
                </ul>

                <p><strong>10 Rekening Tidak Aktif, Pemblokiran dan Penutupan Rekening</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Bank berhak memblokir Aplikasi wondr tanpa persetujuan Nasabah demi keamanan.</li>
                    <li>Bank berwenang memblokir/menutup Rekening jika:
                    <ul className="list-decimal ml-4 space-y-1">
                        <li>Pengguna tidak mematuhi Prinsip Mengenal Nasabah (KYC.</li>
                        <li>Data yang diberikan palsu/tidak benar.</li>
                        <li>Sumber dana patut diduga dari tindak pidana.</li>
                        <li>Dugaan penyalahgunaan Rekening.</li>
                        <li>Dugaan sebagai Shell Bank atau terkait Shell Bank.</li>
                    </ul>
                    </li>
                    <li>Rekening tabungan tanpa mutasi selama 6 bulan akan berstatus tidak aktif.</li>
                    <li>Rekening tidak aktif dikenakan biaya sesuai media resmi Bank.</li>
                    <li>Rekening dapat aktif kembali bila dilakukan transaksi oleh Nasabah.</li>
                    <li>Bank berhak menutup Rekening tidak aktif dengan saldo Rp. 0,- atau jumlah tertentu.</li>
                </ul>

                <p><strong>11 Lain-lain</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-1">
                    <li>Bank dapat mengubah ketentuan dengan pemberitahuan sesuai ketentuan OJK.</li>
                    <li>Bank tidak bertanggung jawab atas kekeliruan data oleh Nasabah.</li>
                    <li>Dana dijamin LPS sesuai syarat dan ketentuan LPS.</li>
                    <li>Bank dapat mengoreksi saldo/mutasi jika terjadi kesalahan tanpa wajib memberi alasan.</li>
                    <li>Bank berhak memverifikasi data Nasabah saat pembukaan Rekening.</li>
                    <li>Pengguna menerima risiko bila simpanan tidak memenuhi ketentuan penjaminan LPS.</li>
                </ul>
                <p>Baik, saya akan membantu memperbaiki <em>spacing</em> pada poin-poin yang Anda berikan agar lebih mudah dibaca. Berikut adalah perbaikan <em>spacing</em> untuk bagian:</p>

                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>a Rekening Tabungan terdiri dari Taplus/Taplus Bisnis/Taplus Muda/Taplus Diaspora/Emerald Savings tersedia dalam valuta Rupiah serta BNI Dollar USD/BNI Dollar SGD/BNI Dollar AUD dalam valuta asing.</li>
                    <li>c Bukti kepemilikan Tabungan, Bank menerbitkan buku tabungan, Kartu Debit BNI, atau rekening koran elektronik (e-statement yang ditetapkan oleh Bank dan bukti tersebut harus dipegang/disimpan Nasabah.</li>
                    <li>d Nasabah wajib menunjukkan bukti kepemilikan Rekening setiap kali melakukan penarikan dana melalui teller Bank ataupun untuk memberikan instruksi transaksi lainnya kepada Bank.</li>
                    <li>e Untuk pembukaan tabungan, Nasabah harus melakukan setoran sebesar minimum nominal yang dipersyaratkan Bank sesuai jenis tabungannya.</li>
                    <li>f Batas minimum dan tata cara setoran berikutnya ke Rekening Tabungan ditetapkan oleh Bank dan jika melalui rekening afiliasi, Nasabah memberi kuasa pendebetan otomatis tiap bulan.</li>
                    <li>g Nasabah wajib menjaga saldo minimum, dan akan dikenakan denda bila saldo di bawah batas tersebut.</li>
                    <li>h Catatan mutasi menggunakan buku tabungan atau e-Statement; Nasabah wajib melapor jika email berubah.</li>
                    <li>i Jika Tabungan memiliki batas usia, Bank berhak konversi ke jenis lain sesuai ketentuan resmi Bank.</li>
                    <li>j Kepemilikan Kartu Debit BNI dan buku tabungan bersifat opsional.</li>
                    <li>k Nasabah tanpa buku tabungan & kartu debit hanya bisa bertransaksi via Aplikasi wondr by BNI. Untuk e-channel lain, wajib memiliki keduanya.</li>
                </ul>

                <ol className="list-decimal list-inside ml-6 space-y-2">
                    <li>Nasabah harus datang sendiri ke kantor cabang pembuka Rekening dan tidak boleh dikuasakan.</li>
                    <li>Nasabah membawa bukti identitas asli dan Kartu Debit (jika ada.</li>
                    <li>Nasabah mengisi & tanda tangan Berita Acara Kehilangan serta menyetujui print-out R/C Tabungan 3 bulan terakhir.</li>
                    <li>Verifikasi oleh customer service dilakukan atas identitas dan data Nasabah.</li>
                    <li>Customer service menutup Rekening Tabungan hilang & memutus afiliasi kartu (jika ada.</li>
                </ol>

                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>m Bunga Rekening Tabungan dikreditkan tiap akhir bulan atau saat penutupan ke rekening yang ditunjuk.</li>
                    <li>n Bank menerima setiap perintah berdasarkan User ID, Kartu Debit, PIN wondr, dan Password Login tanpa verifikasi lebih lanjut.</li>
                    <li>o Bukti transaksi berupa nomor referensi akan tampil di Aplikasi wondr by BNI & tersimpan di database Bank.</li>
                    <li>p Bukti pembukaan rekening dikirim ke email Nasabah.</li>
                    <li>q Komplain Nasabah hanya diproses jika transaksi tercatat di sistem Bank.</li>
                </ul>

                <p><strong>2 Pembukaan Rekening Tabungan</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>a Nasabah dapat membuka Rekening Tabungan sesuai produk yang ditampilkan pada Aplikasi wondr by BNI.</li>
                    <li>b Nasabah wajib mengisi data dengan benar dan bertanggung jawab atas kebenaran data tersebut.</li>
                    <li>c Nasabah memilih Kartu Debit BNI virtual atau fisik sesuai ketersediaan.</li>
                    <li>d Nasabah dapat memeriksa ulang atau membatalkan data sebelum menyetujui.</li>
                    <li>e Setelah yakin, Nasabah memasukkan PIN wondr sebagai tanda persetujuan.</li>
                    <li>f Informasi setoran awal ditampilkan pada halaman informasi setoran awal.</li>
                    <li>g Jika ingin buku tabungan & kartu fisik, Nasabah dapat ke kantor cabang membawa bukti pembukaan.</li>
                    <li>h Nasabah menyetujui bahwa:</li>
                    <ul className="list-disc ml-6 space-y-1">
                    <li>i. Semua perintah transfer dan komunikasi elektronik adalah bukti sah meski tidak ada dokumen tertulis.</li>
                    <li>ii. Komunikasi & data elektronik tersimpan di Bank adalah bukti sah dan tidak bisa dibantah.</li>
                    </ul>
                    <li>i Jika terjadi gangguan, Nasabah dapat menghubungi BNI Call atau kantor cabang terdekat.</li>
                </ul>

                <p><strong>3 Penghentian Akses Aplikasi wondr by BNI</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>a Jika Nasabah lupa PIN atau salah memasukkan Password, akses dihentikan sementara tapi Rekening tetap aktif & bisa digunakan setelah aktivasi ulang.</li>
                    <li>b Jika akses dihentikan karena alasan lain, akses ke Rekening Tabungan juga akan terhenti.</li>
                </ul>
                <h2 className="font-bold text-lg">Deposito</h2>

                <p><strong>1 Ketentuan Umum BNI Deposito</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Nasabah menjamin bahwa data dan informasi Nasabah sebagaimana yang tersimpan dalam pusat data Bank merupakan data dan informasi terkini.</li>
                    <li>Transaksi Penempatan Dana/Pencairan/perubahan Rekening Afiliasi yang telah disetujui Nasabah tidak dapat dibatalkan.</li>
                    <li>Perintah Nasabah tersimpan di pusat data Bank dan menjadi bukti pelaksanaan instruksi tersebut.</li>
                    <li>Bank menjalankan perintah berdasarkan User ID, PIN wondr, dan Password Login tanpa memverifikasi keabsahannya.</li>
                    <li>Nasabah menyetujui bahwa:
                    <ul className="list-disc ml-6 space-y-1">
                        <li>i. Transaksi elektronik diperlakukan sebagai bukti sah meskipun tidak bertanda tangan.</li>
                        <li>ii. Semua komunikasi tersimpan di Bank menjadi alat bukti sah yang tidak bisa dibantah.</li>
                    </ul>
                    </li>
                    <li>Jika terjadi gangguan sistem, hubungi BNI Call atau kantor cabang terdekat.</li>
                </ul>

                <p><strong>2 Pembukaan dan Penempatan Deposito melalui Aplikasi wondr by BNI</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Nasabah wajib mengisi data dengan benar dan bertanggung jawab atas akibat dari kesalahan data.</li>
                    <li>Deposito dapat dibuka dalam mata uang Rupiah, USD, atau SGD.</li>
                    <li>Nasabah dapat membatalkan data sebelum konfirmasi PIN wondr.</li>
                    <li>Setelah yakin, Nasabah wajib memasukkan PIN wondr sebagai persetujuan.</li>
                    <li>Data yang harus diisi mencakup jenis deposito, jangka waktu, nominal, dan metode perpanjangan (ARO/non-ARO).</li>
                    <li>Bank berhak menolak jika saldo Rekening Sumber tidak mencukupi sesuai batas minimum/maksimum penempatan.</li>
                    <li>Bukti transaksi akan dikirim dalam bentuk notifikasi yang bisa dicetak/disimpan dan disimpan di pusat data Bank.</li>
                    <li>Nasabah memberikan kuasa kepada Bank untuk mendebet Rekening Sumber saat penempatan dana.</li>
                    <li>Untuk penempatan valas dari rekening IDR, konversi dilakukan dengan kurs jual Bank saat itu.</li>
                </ul>

                <p><strong>3) Pencairan Dana Deposito melalui Aplikasi wondr by BNI</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Pencairan mengikuti tenor dan tanggal pembukaan yang dipilih Nasabah.</li>
                    <li>Dapat dilakukan otomatis jika dipilih non-automatic roll over.</li>
                    <li>Dapat dikirim ke rekening valas atau IDR (untuk Deposito USD-SGD).</li>
                    <li>Konversi valas ke IDR menggunakan kurs beli Bank pada saat pencairan.</li>
                    <li>Pencairan sebelum jatuh tempo (PSJT) hanya bisa dilakukan pukul 02.00 – 22.00 via Aplikasi wondr.</li>
                    <li>Pencairan hanya bisa dilakukan melalui channel pembukaan yang sama.</li>
                    <li>Pencairan melalui kantor cabang hanya jika Nasabah wafat atau tidak cakap hukum.</li>
                    <li>Jika sistem gangguan:
                    <ul className="list-disc ml-6 space-y-1">
                        <li>i. Proses ditunda hingga sistem normal kembali.</li>
                        <li>ii. Jika lebih dari 2x24 jam, dapat dicairkan di kantor cabang dengan membawa notifikasi transaksi.</li>
                        <li>iii. Pencairan dilakukan dengan cara pemindahbukuan ke Rekening Afiliasi.</li>
                    </ul>
                    </li>
                </ul>

                <p><strong>4) Lain-lain</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Pembukaan deposito tersedia dalam IDR/USD/SGD dan hanya untuk Nasabah yang memiliki rekening tabungan/giro perorangan.</li>
                    <li>Tenor tersedia: 1, 3, 6, 12, dan 24 bulan.</li>
                    <li>Bunga dibayar setiap bulan pada tanggal pembukaan setelah dipotong pajak.</li>
                    <li>Metode perpanjangan: ARO pokok, ARO pokok+bunga, atau non-ARO.</li>
                    <li>Suku bunga sesuai ketentuan Bank. Kurs valas untuk konversi ke Rupiah sesuai kurs saat perhitungan bunga.</li>
                    <li>Pajak bunga langsung dipotong dan disetor ke negara sesuai UU yang berlaku.</li>
                    <li>BNI Deposito dijamin oleh Lembaga Penjamin Simpanan (LPS).</li>
                </ul>

                <h2 className="font-bold text-lg mt-6">Fasilitas Transfer Terjadwal dari wondr by BNI</h2>
                <ol className="list-decimal list-inside ml-6 space-y-2">
                    <li>
                    Nasabah memberi kuasa kepada Bank untuk melakukan transfer otomatis sesuai nominal yang ditetapkan saat pendaftaran transfer terjadwal. Kuasa berlaku hingga periode selesai. 
                    <strong>Jika saldo tidak tersedia</strong>, transfer gagal dan Nasabah dapat melakukan transfer biasa. 
                    Jika rekening tujuan tidak ditemukan, sistem akan membatalkan transfer.
                    </li>
                    <li>Setiap transaksi transfer terjadwal ke bank lain dikenakan <strong>biaya</strong> sesuai media resmi Bank.</li>
                    <li>Jika Nasabah ingin menghentikan transfer terjadwal, wajib melakukannya langsung dari Aplikasi wondr by BNI.</li>
                </ol>
                <h2 className="font-bold text-lg">c. Ketentuan Lain-Lain</h2>

                <p><strong> 1) Nasabah New to Bank (NTB)</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Nasabah NTB adalah perorangan yang belum memiliki rekening di Bank dan membuka rekening jenis BNI Taplus Digital melalui Aplikasi wondr by BNI.</li>
                    <li>Ketentuan setoran awal:
                    <ul className="list-disc ml-6 space-y-1">
                        <li>i. Disetorkan tunai melalui cabang atau transfer dari rekening lain.</li>
                        <li>ii. Sesuai jumlah yang ditentukan oleh Bank.</li>
                        <li>iii. Langsung dikreditkan ke rekening dan dapat digunakan sesuai ketentuan Bank.</li>
                        <li>iv. Setoran awal dianggap sebagai persetujuan terhadap seluruh syarat & ketentuan.</li>
                        <li>v. Nasabah wajib mematuhi seluruh ketentuan yang berlaku terkait setoran awal.</li>
                    </ul>
                    </li>
                </ul>

                <p><strong>2) Nasabah Existing to Bank (ETB)</strong></p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Nasabah ETB adalah perorangan yang sudah memiliki rekening di Bank sebelumnya.</li>
                    <li>Ketentuan setoran awal:
                    <ul className="list-disc ml-6 space-y-1">
                        <li>i. Dilakukan dengan mentransfer dari rekening eksisting seperti BNI Taplus, Taplus Bisnis, Giro, Taplus Muda, Diaspora, Emerald Saving, BNI Dollar (USD, SGD, AUD).</li>
                        <li>ii. Bank berhak menolak jika saldo Rekening Sumber Dana tidak mencukupi.</li>
                        <li>iii. Nasabah memberi kuasa pada Bank untuk mendebet Rekening Sumber Dana.</li>
                        <li>iv. Biaya transfer menjadi beban Nasabah.</li>
                    </ul>
                    </li>
                    <li>Data pembukaan rekening mengikuti data dari Rekening Sumber Dana.</li>
                    <li>Transaksi setoran awal yang disetujui tidak dapat dibatalkan.</li>
                    <li>Kantor cabang pengelola rekening sama dengan kantor cabang rekening sumber dana.</li>
                </ul>

                <h2 className="font-bold text-lg mt-6">9. KETENTUAN TRANSAKSI QUICK ACCESS</h2>
                <p>Transaksi <em>Quick Access</em> dalam Aplikasi wondr by BNI terdiri dari:</p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Transaksi Quick Access untuk fitur QRIS</li>
                    <li>Transaksi Quick Access untuk fitur TapCash</li>
                    <li>Transaksi Quick Access untuk fitur e-Wallet</li>
                    <li>Layanan & fitur Quick Access lain sesuai ketentuan masing-masing fitur oleh Bank</li>
                </ul>

                <h2 className="font-bold text-lg mt-6">10. KETENTUAN TRANSAKSI QRIS</h2>
                <ul className="list-disc list-inside ml-6 space-y-2">
                    <li>Pengguna dapat melakukan pembayaran dengan QR berstandar QRIS.</li>
                    <li>Biaya transaksi QRIS adalah <em>Merchant Discount Rate (MDR)</em> yang dibebankan kepada <em>merchant</em>.</li>
                    <li>Transaksi dapat menggunakan sumber dana rekening atau kartu kredit yang terdaftar, dengan memperhatikan saldo atau <em>limit</em> yang tersedia.</li>
                </ul>
              <p><strong className="text-[#1b1c1d]">11. PELAYANAN DAN PENYELESAIAN PENGADUAN</strong></p>
              <p><span className="text-[#1b1c1d]">a. Untuk setiap permasalahan yang berkaitan dengan transaksi dan/atau akses fasilitas Aplikasi wondr by BNI, Pengguna dapat menyampaikan pengaduan kepada Bank secara lisan dan/atau tertulis.</span></p>
              <p><span className="text-[#1b1c1d]">b. Dalam hal penyampaian pengaduan dilakukan secara lisan kepada Bank, berlaku ketentuan sebagai berikut:</span></p>
              <p><span className="text-[#1b1c1d]">1.Pengguna dapat menghubungi Bank melalui BNI Customer Experience Center dan/atau melalui BNI Call untuk layanan 24 jam.</span></p>
              <p><span className="text-[#1b1c1d]">2.Informasi yang perlu dipersiapkan oleh Pengguna adalah mengenai identitas diri, kartu debit BNI Pengguna, dan permasalahan yang diadukan.</span></p>
              <p><span className="text-[#1b1c1d]">3.Bank melakukan verifikasi kepada Pengguna pada saat pengaduan disampaikan.</span></p>
              <p><span className="text-[#1b1c1d]">4.Bank menyampaikan konfirmasi penerimaan pengaduan kepada Pengguna yang paling sedikit berupa nomor registrasi pengaduan dan tanggal penerimaan pengaduan.</span></p>
              <p><span className="text-[#1b1c1d]">5.Bank akan melakukan tindak lanjut atas pengaduan yang disampaikan, berupa pemeriksaan internal atas pengaduan secara kompeten, benar, dan objektif, serta apabila diperlukan Bank dapat menerima dokumen atau informasi dari Pengguna atau pihak lainnya.</span></p>
              <p><span className="text-[#1b1c1d]">6.Dalam hal Bank membutuhkan dokumen pendukung yang dimiliki oleh Pengguna untuk penyelesaian pengaduan yang disampaikan, Bank dapat meminta kepada Pengguna untuk menyampaian pengaduan secara tertulis dengan melampirkan dokumen pendukung yang diperlukan.</span></p>
              <p><span className="text-[#1b1c1d]">7.Bank memberikan tanggapan secara lisan dan/atau tertulis atas pengaduan kepada Pengguna atas pengaduan yang diterima.</span></p>
              <p><span className="text-[#1b1c1d]">8.Hal-hal lain terkait penerimaan, penanganan, dan penyelesaian pengaduan mengacu pada ketentuan perundang-undangan yang berlaku.</span></p>
              <p><span className="text-[#1b1c1d]">c. Dalam hal penyampaian pengaduan dilakukan secara tertulis kepada Bank, berlaku ketentuan sebagai berikut:</span></p>
              <p><span className="text-[#1b1c1d]">1.Pengguna dapat menyampaikan pengaduan melalui BNI Customer Experience Center dan/atau BNI Call.</span></p>
              <p><span className="text-[#1b1c1d]">2.Dokumen dan informasi yang harus dipenuhi Pengguna dalam penyampaian pengaduan secara tertulis adalah sebagai berikut:</span></p>
              <p><span className="text-[#1b1c1d]">a.Identitas Pengguna dan/atau Perwakilan Pengguna;</span></p>
              <p><span className="text-[#1b1c1d]">b.surat kuasa khusus (dalam hal Pengguna mewakilkan proses pengaduan kepada perwakilan Pengguna);</span></p>
              <p><span className="text-[#1b1c1d]">c.jenis dan tanggal Transaksi Finansial dan/atau Transaksi Non Finansial;</span></p>
              <p><span className="text-[#1b1c1d]">d.permasalahan yang diadukan;</span></p>
              <p><span className="text-[#1b1c1d]">e.kartu debit BNI Pengguna; dan</span></p>
              <p><span className="text-[#1b1c1d]">f.bukti kepemilikan rekening Pengguna.</span></p>
              <p><span className="text-[#1b1c1d]">3.Bank melakukan verifikasi dengan melakukan penelaahan terhadap kelengkapan dokumen yang disampaikan oleh Pengguna.</span></p>
              <p><span className="text-[#1b1c1d]">4.Bank menangani pengaduan yang disampaikan dalam hal Pengguna telah melengkapi dokumen yang ditetapkan.</span></p>
              <p><span className="text-[#1b1c1d]">5.Bank menyampaikan bukti tanda terima pengaduan kepada Pengguna yang paling sedikit berupa nomor registrasi pengaduan, tanggal penerimaan pengaduan, dan nomor telepon fungsi atau unit layanan pengaduan Bank yang dapat dihubungi oleh Pengguna.</span></p>
              <p><span className="text-[#1b1c1d]">6.Bank akan melakukan tindak lanjut atas pengaduan yang disampaikan, berupa pemeriksaan internal atas pengaduan secara kompeten, benar, dan objektif, serta apabila diperlukan Bank dapat menerima dokumen atau informasi dari Pengguna atau pihak lainnya.</span></p>
              <p><span className="text-[#1b1c1d]">7.Bank memberikan tanggapan secara tertulis atas pengaduan kepada Pengguna atas pengaduan yang diterima.</span></p>
              <p><span className="text-[#1b1c1d]">8.Hal-hal lain terkait penerimaan, penanganan, dan penyelesaian pengaduan mengacu pada ketentuan perundang-undangan yang berlaku.</span></p>
              <p><span className="text-[#1b1c1d]">d. Tidak terdapat pengenaan biaya dalam melaksanakan kebijakan dan prosedur layanan pengaduan yang disampaikan oleh Pengguna kepada Bank.</span></p>
              <p><span className="text-[#1b1c1d]">e. Dalam hal pengaduan yang disampaikan oleh Pengguna kepada Bank terkait dengan permintaan pengembalian dana, maka proses penanganan dan penyelesaian pengaduan akan dilakukan sesuai ketentuan perundang-undangan yang berlaku.</span></p>
              <br></br>
              <p><strong className="text-[#1b1c1d]">12. NILAI TAMBAH PENGGUNAAN APLIKASI WONDR BY BNI</strong></p>
              <p><span className="text-[#1b1c1d]">a. Memberikan kemudahan bagi Pengguna untuk bertransaksi dimanapun dan kapanpun dengan menggunakan </span><em className="text-[#1b1c1d]">Smartphone</em><span className="text-[#1b1c1d]"> miliknya.</span></p>
              <p><span className="text-[#1b1c1d]">b. Menawarkan layanan transaksi yang lebih mudah, cepat, hemat, dan praktis. Pengguna dapat melakukan transaksi isi ulang pulsa, transfer dana, pembelian dan pembayaran tagihan dengan lebih mudah melalui Aplikasi wondr by BNI.</span></p>
              <p><span className="text-[#1b1c1d]">c. Memberikan keamanan transaksi yang maksimal, sehingga membuat Pengguna semakin nyaman dalam melakukan Transaksi Finansial maupun Transaksi Non Finansial.</span></p>
              <br></br>
              <p><strong className="text-[#1b1c1d]">13. BIAYA PENGGUNAAN APLIKASI WONDR BY BNI</strong></p>
              <p><span className="text-[#1b1c1d]">Komponen biaya pada Aplikasi wondr by BNI terdiri dari:</span></p>
              <p><span className="text-[#1b1c1d]">a. Biaya Komunikasi</span></p>
              <p><span className="text-[#1b1c1d]">Biaya Komunikasi akan dibebankan oleh provider telepon atau penyedia komunikasi lainnya yang terlibat (Internet Service Provider/ISP) kepada Pengguna atas setiap penggunaan jaringan komunikasi yang digunakan untuk mengakses fasilitas Aplikasi wondr by BNI.</span></p>
              <p><span className="text-[#1b1c1d]">Besarnya biaya komunikasi ditetapkan oleh masing-masing provider telepon atau ISP yang digunakan Nasabah/Pengguna dan sepenuhnya menjadi pendapatan bagi provider telepon atau ISP yang bersangkutan serta Bank tidak bertanggung jawab atas hal-hal terkait biaya komunikasi ini.</span></p>
              <p><span className="text-[#1b1c1d]">b. Biaya Transaksi</span></p>
              <p><span className="text-[#1b1c1d]">Biaya transaksi dibebankan kepada Pengguna atas setiap Transaksi Finansial yang dilakukannya.</span></p>
              <p><span className="text-[#1b1c1d]">Besarnya biaya transaksi ditetapkan oleh Bank untuk jenis Transaksi Finansial tertentu yang dibebankan kepada Pengguna dengan cara pendebetan langsung rekening Pengguna setelah proses transaksi berhasil dilakukan.</span></p>
              <br></br>
              <p><strong className="text-[#1b1c1d]">14. POTENSI RISIKO</strong></p>
              <p><span className="text-[#1b1c1d]">Potensi Risiko yang mungkin dihadapi Pengguna:</span></p>
              <p><span className="text-[#1b1c1d]">a. Lupa </span><em className="text-[#1b1c1d]">Password Login</em><span className="text-[#1b1c1d]"> / PIN wondr dapat menyebabkan terblokirnya fasilitas Aplikasi wondr by BNI (umumnya karena Pengguna melakukan salah </span><em className="text-[#1b1c1d]">input</em><span className="text-[#1b1c1d]"> sebanyak 3 (tiga) kali secara berturut-turut).</span></p>
              <p><span className="text-[#1b1c1d]">b. Diketahuinya </span><em className="text-[#1b1c1d]">Password Login</em><span className="text-[#1b1c1d]"> dan/atau PIN wondr oleh pihak lain yang tidak berwenang, dapat berakibat terjadinya tindak kejahatan finansial oleh pihak dimaksud.</span></p>
              <p><span className="text-[#1b1c1d]">c. Diketahuinya informasi rekening pribadi, berakibat pada terganggunya </span><em className="text-[#1b1c1d]">privacy</em><span className="text-[#1b1c1d]"> Nasabah/Pengguna dan tidak menutup kemungkinan dapat disalahgunakan oleh pihak lain.</span></p>
              <p><span className="text-[#1b1c1d]">d. Salah </span><em className="text-[#1b1c1d]">input</em><span className="text-[#1b1c1d]"> data-data yang diperlukan saat melakukan Transaksi Finansial dapat berakibat terjadinya salah pengkreditan atau salah pembayaran, dan untuk proses pengembalian dananya memerlukan proses lebih lanjut karena harus terdapat persetujuan terlebih dahulu dari pihak-pihak terkait.</span></p>
              <p><span className="text-[#1b1c1d]">e. Kehilangan </span><em className="text-[#1b1c1d]">Smartphone</em><span className="text-[#1b1c1d]"> yang telah diaktifkan Aplikasi wondr by BNI, sehingga dapat berpotensi disalahgunakan untuk Transaksi Non Finansial dan/atau Transaksi Finansial.</span></p>
              <br></br>
              <p><strong className="text-[#1b1c1d]">15. PEMBLOKIRAN (PENGHENTIAN SEMENTARA) AKSES APLIKASI WONDR BY BNI</strong></p>
              <p><span className="text-[#1b1c1d]">a. Pemblokiran akses ke fasilitas Aplikasi wondr by BNI dapat dilakukan / terjadi apabila:</span></p>
              <p><span className="text-[#1b1c1d]">1) Adanya permintaan dari Pengguna kepada Bank untuk menghentikan akses ke fasilitas Aplikasi wondr by BNI, yang antara lain dapat disebabkan oleh:</span></p>
              <p><span className="text-[#1b1c1d]">a) Nasabah lupa Password Login Aplikasi wondr by BNI (Aplikasi wondr by BNI belum terblokir).</span></p>
              <p><span className="text-[#1b1c1d]">b) Telah terjadinya kehilangan/pencurian/bergantinya kepemilikan Smartphone yang digunakan Pengguna untuk bertransaksi melalui Aplikasi wondr by BNI.</span></p>
              <p><span className="text-[#1b1c1d]">2) Pengguna salah memasukkan Password Login sebanyak 3 (tiga) kali berturut-turut (Aplikasi wondr by BNI sudah terblokir).</span></p>
              <p><span className="text-[#1b1c1d]">3) Diterimanya laporan dari Pengguna mengenai dugaan atau diketahuinya Password Login oleh pihak lain yang tidak berwenang.</span></p>
              <p><span className="text-[#1b1c1d]">4) Bank menduga adanya penyalahgunaan rekening Pengguna termasuk dalam kaitannya dengan pelanggaran hukum.</span></p>
              <p><span className="text-[#1b1c1d]">6) Bank mengalami gangguan atau menghentikan pemberian jasa fasilitas Aplikasi wondr by BNI. Terhadap hal tersebut, Bank akan menyampaikan pemberitahuan kepada Pengguna melalui Media Resmi Bank.</span></p>
              <p><span className="text-[#1b1c1d]">b. Pemblokiran akses ke fasilitas Aplikasi wondr by BNI dapat dilakukan dengan cara menghubungi BNI Call atau kantor cabang Bank terdekat.</span></p>
              <p><span className="text-[#1b1c1d]">c. Untuk melakukan Reaktivasi Aplikasi wondr by BNI karena pemblokiran akses fasilitas Aplikasi wondr by BNI, sebagaimana dimaksud dalam butir 15.a.1).a) dan 15.a.2) di atas Pengguna dapat melakukan buka blokir dengan mengakses menu Lupa </span><em className="text-[#1b1c1d]">Password Login</em><span className="text-[#1b1c1d]">/PIN wondr yang ada pada Aplikasi wondr by BNI.</span></p>
              <p><span className="text-[#1b1c1d]">d. Permintaan pemblokiran akses ke Aplikasi wondr by BNI karena keinginan Pengguna, harus disampaikan sendiri oleh Pengguna yang bersangkutan (tidak boleh diwakilkan).</span></p>
              <p><strong className="text-[#1b1c1d]">16. FORCE MAJEURE</strong></p>
              <p><span className="text-[#1b1c1d]">a. Pengguna akan membebaskan Bank dari tuntutan, dalam hal Bank tidak dapat melaksanakan perintah dari Pengguna baik sebagian maupun seluruhnya karena kejadian-kejadian atau sebab-sebab di luar kekuasaan atau kemampuan Bank termasuk pada bencana alam, perang, huru-hara, keadaan peralatan, sistem atau transmisi yang tidak berfungsi, gangguan listrik, gangguan telekomunikasi, kebijakan pemerintah, serta kejadian-kejadian atau sebab-sebab lain di luar kekuasaan atau kemampuan Bank.</span></p>
              <p><span className="text-[#1b1c1d]">b. Dalam hal Bank tidak dapat melaksanakan perintah dari Pengguna baik sebagian maupun seluruhnya karena kejadian-kejadian atau sebab-sebab di atas, Bank akan menyampaikan pemberitahuan kepada Pengguna melalui Media Resmi Bank.</span></p>
              <p><strong className="text-[#1b1c1d]">17. PEMBERITAHUAN</strong></p>
              <p><span className="text-[#1b1c1d]">Setiap pemberitahuan dari Bank terkait perubahan manfaat, biaya, risiko, Syarat dan Ketentuan ini dan/atau pemblokiran akses fasilitas Aplikasi wondr by BNI akan diberitahukan kepada Pengguna melalui Media Resmi Bank.</span></p>
              <p><strong className="text-[#1b1c1d]">18. LAIN-LAIN</strong></p>
              <p><span className="text-[#1b1c1d]">a. Bank berhak menghentikan fasilitas Aplikasi wondr by BNI untuk sementara waktu maupun untuk jangka waktu tertentu yang ditentukan oleh Bank untuk keperluan pembaharuan, pemeliharaan, atau untuk tujuan lain dengan alasan yang dianggap baik oleh Bank dengan tetap mempertimbangkan kepentingan Pengguna dan sepanjang dilakukan sesuai dengan peraturan perundang-undangan yang berlaku.</span></p>
              <p><span className="text-[#1b1c1d]">b. Syarat dan Ketentuan ini tunduk pada hukum Indonesia dan berlaku sebagai perjanjian bagi Bank dan Pengguna.</span></p>
              <p><span className="text-[#1b1c1d]">c. Apabila terdapat perbedaan pendapat/perselisihan sehubungan dengan Syarat dan Ketentuan ini maka Bank dan Pengguna akan menyelesaikannya secara musyawarah.</span></p>
              <p><span className="text-[#1b1c1d]">d. Dalam hal tidak tercapai kesepakatan dalam musyawarah sebagaimana butir c di atas, maka Bank dan Pengguna sepakat untuk menyelesaikan perbedaan pendapat/perselisihan tersebut melalui Pengadilan.</span></p>
              <p><span className="text-[#1b1c1d]">e. Bank dan Pengguna sepakat untuk memilih domisili hukum yang umum dan tetap pada Kantor Kepaniteraan Pengadilan Negeri Jakarta Pusat.</span></p>
              <p><span className="text-[#1b1c1d]">f. Dalam hal salah satu ketentuan dalam Syarat dan Ketentuan ini dinyatakan batal berdasarkan suatu peraturan perundang-undangan maupun putusan hakim yang berkekuatan hukum tetap, maka pernyataan batal tersebut tidak mengurangi keabsahan atau menyebabkan batalnya persyaratan atau ketentuan lain dalam Syarat dan Ketentuan ini dan oleh karenanya dalam hal demikian ketentuan lain tersebut dalam ini tetap sah dan mengikat.</span></p>
              <p><span className="text-[#1b1c1d]">g. Syarat dan Ketentuan ini telah disesuaikan dengan ketentuan peraturan perundang-undangan termasuk ketentuan peraturan otoritas jasa keuangan.</span></p>
              <p><span className="text-[#1b1c1d]">h. Syarat dan ketentuan fitur lain yang terdapat pada Aplikasi wondr by BNI, merupakan satu kesatuan dan bagian yang tidak terpisahkan dari Syarat dan Ketentuan ini.</span></p>
              <br></br>
              <h1 class="ql-align-center"><strong>PEMBERITAHUAN PRIVASI</strong></h1>
              <p class="ql-align-center"></p>
              <p class="ql-align-justify">Selamat datang di halaman Pemberitahuan Privasi kami. Kami ingin memberikan kejelasan dan keyakinan kepada Pengguna tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi dan Data Pribadi Pengguna. Dengan membaca Pemberitahuan Privasi ini, diharapkan Pengguna merasa tenang dan yakin bahwa keamanan Data Pribadi dan privasi Pengguna adalah prioritas utama bagi kami.</p>
              <p class="ql-align-justify">Dalam Pemberitahuan Privasi ini, penggunaan istilah (i) “<strong>kami</strong>” atau “<strong>Bank</strong>” merujuk pada PT Bank Negara Indonesia (Persero) Tbk, suatu badan usaha milik negara yang didirikan berdasarkan hukum negara Republik Indonesia dan bergerak pada bidang perbankan (“<strong>BNI</strong>”); (ii) “<strong>Pengguna</strong>” merujuk pada masing-masing orang perseorangan pemilik Data Pribadi (subjek data) yang telah dan/atau akan menggunakan produk dan/atau layanan kami, pengunjung dan pengguna situs web/aplikasi/sistem elektronik kami, serta pihak ketiga manapun di mana Pemberitahuan Privasi ini berlaku; (iii) “<strong>Grup Usaha</strong>” merujuk pada seluruh perusahaan afiliasi yang berada dalam satu grup karena keterkaitan kepemilikan dan/atau pengendalian secara langsung maupun tidak langsung oleh Bank (hubungan perusahaan induk, anak perusahaan dan afiliasi lainnya); (iv) “<strong>Data Pribadi</strong>” merujuk pada data tentang Pengguna yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau dikombinasi dengan informasi lainnya baik secara langsung maupun tidak langsung melalui sistem elektronik atau nonelektronik sebagaimana dimaksud dalam Peraturan yang Berlaku; (v) “<strong>Peraturan yang Berlaku</strong>” merujuk pada Undang- Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi dan peraturan perundang- undangan yang relevan lainnya yang berlaku, termasuk perubahannya dari waktu ke waktu; (vi) “<strong>Pemrosesan</strong>” merujuk pada tindakan memperoleh, mengumpulkan, mengolah, menganalisis, menyimpan, memperbaiki, melakukan pembaruan, menampilkan, mengumumkan, mentransfer, menyebarluaskan, mengungkapkan, menghapus dan/atau memusnahkan Data Pribadi Pengguna.</p>
              <p class="ql-align-justify"></p>
              <p class="ql-align-justify">Data Pribadi yang kami proses adalah Data Pribadi yang telah dan akan Pengguna berikan kepada kami, yang meliputi pula Data Pribadi sebagaimana tertulis pada bagiann Perolehan dan Pengumpulan Data Pribadi di Pemberitahuan Privasi ini untuk menyediakan produk dan/atau layanan jasa perbankan yang Pengguna minta, termasuk untuk pemenuhan perjanjian atau kewajiban hukum kami terhadap peraturan perundang-undangan, saat Pengguna mengunjungi, mengakses, dan/atau menggunakan produk dan/atau layanan Bank, termasuk situs web/aplikasi/sistem elektronik kami sehubungan dengan penggunaan produk dan/atau layanan Bank (“<strong>Layanan</strong>”).</p>
              <br></br>
              <p><strong>Keberlakuan</strong></p>
              <p class="ql-align-justify">Dengan menggunakan Layanan kami, Pengguna menyatakan telah membaca, mengetahui dan memahami seluruh isi Pemberitahuan Privasi ini, juga menyatakan bahwa Pengguna adalah pihak yang sah dan berwenang memberikan Data Pribadi Pengguna kepada Bank melalui kanal Layanan Bank.</p>
              <p class="ql-align-justify">Kami dapat mengubah, menghapus, dan/atau memperbarui Pemberitahuan Privasi ini dari waktu ke waktu apabila diperlukan. Jika perubahan, penghapusan, dan/atau pembaruan tersebut merupakan perubahan informasi yang berdasarkan Peraturan yang Berlaku wajib dilakukan pemberitahuan kepada Pengguna, maka kami akan menggunakan upaya yang wajar untuk melakukan pemberitahuan kepada Pengguna terlebih dahulu melalui kanal resmi kami.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify">Kami menyarankan Pengguna untuk membaca Pemberitahuan Privasi ini bersama dengan Syarat dan Ketentuan Layanan kami, karena dokumen tersebut memiliki kemungkinan berisi informasi khusus Layanan tentang cara Bank memproses Data Pribadi Pengguna.</p>
              <p class="ql-align-justify"><br></br></p>
              <p class="ql-align-justify">Versi Pemberitahuan Privasi yang ditampilkan pada situs web/aplikasi/sistem elektronik kami merupakan pembaruan terhadap semua versi terdahulu dari Pemberitahuan Privasi kami, untuk itu kami menganjurkan Pengguna untuk memeriksa Pemberitahuan Privasi pada situs web/aplikasi/sistem elektronik kami dari waktu ke waktu.</p>
              <br></br>
              <br></br>
              <p><strong>Perolehan dan Pengumpulan Data Pribadi</strong></p>
              <p class="ql-align-justify">Penting bagi Pengguna untuk mengetahui apa saja kategori dan jenis Data Pribadi Pengguna yang dapat diproses. Jenis-jenis data tersebut meliputi:</p>
              <ol><li class="ql-align-justify">Data identifikasi profil pribadi, yang dapat berupa nama lengkap, Nomor Induk Kependudukan, Nomor Pokok Wajib Pajak, dokumen keimigrasian, jenis kelamin, kewarganegaraan, tempat dan tanggal lahir, nama gadis ibu kandung, nama alias/panggilan,</li></ol>
              <p class="ql-align-justify">agama, rekaman suara, rekaman gambar, foto, bentuk tanda tangan (basah dan/atau elektronik), dan/atau data biometrik;</p>
              <ol><li class="ql-align-justify">Data korespondensi, yang dapat berupa alamat sesuai Kartu Tanda Penduduk, alamat dan status domisili, alamat surat elektronik (email), nomor telepon/telepon genggam, dan kontak darurat yang mencakup nama, jenis hubungan dengan Pengguna, alamat, nomor telepon/telepon genggam, dan email;</li><li class="ql-align-justify">Data pendidikan dan/atau pekerjaan, yang dapat berupa tingkat pendidikan, jenis pekerjaan, bidang usaha, jabatan, divisi, tahun mulai bekerja/usaha, nama perusahaan/instansi tempat bekerja, alamat tempat bekerja, status kepegawaian, serta nama, jabatan, dan nomor telepon rekan kerja;</li><li class="ql-align-justify">Data keluarga, yang dapat berupa status perkawinan, nama pasangan, jumlah anak, dan jumlah tanggungan;</li><li class="ql-align-justify">Data keuangan, yang dapat berupa nomor rekening, sumber penghasilan, jumlah penghasilan bulanan/tahunan, jumlah pengeluaran bulanan/tahunan, data transaksi, data kredit/pembiayaan, data terkait investasi, data terkait aset, data terkait agunan, dan data perpajakan serta data layanan dari jasa keuangan lain yang Pengguna terima;</li><li class="ql-align-justify">Data aktivitas digital, yang dapat berupa geolokasi, alamat IP/MAC <em>Address</em>, aktivitas Pengguna di aplikasi Bank, dan interaksi aplikasi Bank dengan aplikasi lain di perangkat elektronik Pengguna; dan/atau</li><li class="ql-align-justify">Data terkait pribadi, yang dapat berupa informasi data kesehatan, pelanggaran hukum, preferensi komunikasi, hobi, dan minat.</li></ol>
              <br></br>
              <p><strong>Sumber Data Pribadi Pengguna</strong></p>
              <br></br>
              <p>Agar dapat mendukung kami dalam memberikan Layanan yang optimal bagi Pengguna, kami akan mengumpulkan Data Pribadi Pengguna dari berbagai sumber, termasuk sebagai berikut:</p>
              <ol><li class="ql-align-justify">Dari Pengguna secara langsung;</li><li class="ql-align-justify">Informasi tentang Pengguna yang dihasilkan ketika Pengguna mengajukan satu Layanan, menggunakan Layanan kami, atau pernah memiliki Layanan sebelumnya;</li><li class="ql-align-justify">Data Pribadi dari Grup Usaha dan/atau pihak ketiga lainnya yang merupakan mitra Bank atau mengadakan kerja sama dengan Bank;</li><li class="ql-align-justify"><em>Cookie</em>, layanan lokasi, alamat IP Pengguna ketika Pengguna mengunjungi situs web/aplikasi/sistem elektronik kami, atau ketika Pengguna mengisi formulir kontak kami di dalam situs web/aplikasi/sistem elektronik kami, atau data yang diizinkan oleh Pengguna untuk diakses melalui gawai Pengguna;</li><li class="ql-align-justify">Dari korespondensi antara Pengguna dan Bank melalui email, kiriman surat fisik, atau sarana korespondensi/media komunikasi resmi Bank; dan/atau</li><li class="ql-align-justify">Dari data survei yang diberitahukan kepada Bank.</li></ol>
              <br></br>
              <p><strong>Penggunaan Data Pribadi</strong></p>
              <p>Pemrosesan Data Pribadi Pengguna oleh Bank dilaksanakan termasuk untuk tujuan berikut:</p>
              <ol><li class="ql-align-justify">Untuk menyediakan, merancang dan/atau mengembangkan Layanan, fasilitas perbankan, produk atau jasa, termasuk membantu Bank dalam menganalisis bagaimana Layanan Bank digunakan, membalas pertanyaan, atau memberi tahu Pengguna apabila ada suatu perubahan terhadap Layanan.</li><li class="ql-align-justify">Untuk kegiatan pemrofilan (<em>profiling</em>) maupun <em>scoring </em>guna pengambilan keputusan secara otomatis terhadap Pengguna untuk peningkatan Layanan bagi Pengguna maupun manajemen risiko Bank.</li><li class="ql-align-justify">Untuk tujuan pemasaran yaitu menawarkan produk atau jasa, termasuk penawaran khusus, promosi, kontes atau informasi yang mungkin menarik bagi Pengguna. Pesan pemasaran tersebut dapat dikirim kepada Pengguna oleh Bank dan/atau Mitra Usaha dalam berbagai cara termasuk melalui surat fisik, surat elektronik, layanan pesan singkat, telepon, faksimili, sarana korespondensi dan media penyampaian informasi resmi Bank lainnya sesuai dan tunduk kepada peraturan perundang-undangan yang berlaku.</li><li class="ql-align-justify">Untuk keperluan pelaksanaan operasi bisnis Bank yang melibatkan konsultasi dengan penasihat profesional atau auditor eksternal Bank, termasuk penasihat hukum, penasihat keuangan, dan konsultan-konsultan, perusahaan Grup Usaha, dan setiap pihak yang terikat dengan kewajiban menjaga kerahasiaan dengan Bank. Sehubungan dengan ini, Bank akan menggunakan upaya terbaik untuk memastikan pihak-pihak sebagaimana disebutkan untuk memperhatikan Pemberitahuan Privasi ini.</li><li class="ql-align-justify">Untuk memenuhi persyaratan prinsip mengenal nasabah, upaya mitigasi risiko Bank, maupun pelaksanaan verifikasi/otentikasi kebenaran data Pengguna, sebagaimana disyaratkan berdasarkan peraturan perundang-undangan yang berlaku.</li><li class="ql-align-justify">Untuk mematuhi peraturan atau persyaratan hukum, termasuk untuk pelaksanaan administrasi kegiatan usaha Bank, pelaporan kepada pihak regulator, atau pemeriksaan oleh pihak yang berwenang, yang dilaksanakan sesuai hukum yang berlaku di Indonesia.</li><li class="ql-align-justify">Untuk melakukan penelitian dan analisa statistik termasuk penggunaan teknologi baru.</li><li class="ql-align-justify">Untuk keperluan lainnya sesuai dengan kebijakan dan ketentuan internal Bank, atau sesuai syarat dan ketentuan yang mengatur hubungan antara Bank dengan Pengguna, yang dilaksanakan sesuai dengan peraturan perundang-undangan yang berlaku.</li></ol>
              <br></br>
              <p class="ql-align-justify"><strong>Dasar Pemrosesan Data Pribadi</strong></p>
              <p class="ql-align-justify">Pemrosesan Data Pribadi hanya akan dilakukan Bank sepanjang Bank telah memenuhi satu atau beberapa dasar pemrosesan berikut:</p>
              <ol><li>Bank secara eksplisit dan sah telah memperoleh persetujuan dari Pengguna;</li><li>Bank menjalankan hak dan kewajibannya berdasarkan perjanjian dengan Pengguna;</li><li>Bank perlu melaksanakan kewenangan atau memenuhi kewajiban berdasarkan peraturan perundang-undangan yang berlaku atau perintah instansi yang berwenang;</li><li>Bank perlu untuk memenuhi kepentingan vital Pengguna;</li><li>Bank perlu untuk melaksanakan tugas dalam rangka kepentingan umum dan/atau pelayanan publik;</li><li>Bank perlu memenuhi kepentingan yang sah lainnya, dengan tetap memperhatikan keseimbangan antara kepentingan Bank dengan hak-hak Pengguna.</li></ol>
              <br></br>
              <p class="ql-align-justify"><strong>Pengelolaan Data Pribadi</strong></p>
              <p class="ql-align-justify">Bank berkomitmen untuk menyimpan dan mengelola Data Pribadi Pengguna dengan perlindungan terbaik selama diperlukan untuk menyediakan Layanan kami. Kami akan melakukan Pemrosesan Data Pribadi Pengguna selama Pengguna menjadi nasabah atau pengguna Layanan kami. Selanjutnya, Data Pribadi Pengguna akan disimpan untuk jangka waktu 5 (lima) tahun setelah berakhirnya hubungan kerja sama dengan Pengguna atau untuk jangka waktu yang lebih lama selama penyimpanan tersebut diperlukan atau diharuskan oleh Peraturan yang Berlaku (“<strong>Masa Retensi</strong>”).</p>
              <p class="ql-align-justify">Bank dapat menghapus dan/atau memusnahkan Data Pribadi Pengguna dari sistem kami agar Data Pribadi tersebut tidak lagi mengidentifikasi Pengguna, kecuali dalam hal:</p>
              <ol><li>Apabila perlu menyimpan Data Pribadi untuk memenuhi kewajiban hukum, keperluan pembuktian di kemudian hari, pajak, audit, dan akuntasi; dan/atau</li><li>Data Pribadi masih dalam periode retensi berdasarkan peraturan perundang-undangan yang berlaku.</li></ol>
              <br></br>
              <p class="ql-align-justify">Ketika memusnahkan Data Pribadi, kami akan mengambil tindakan standar yang wajar untuk menghancurkan, menghapus, serta membuat Data Pribadi tersebut secara praktis tidak dapat dipulihkan. Cara pemusnahan tertentu akan bergantung pada Data Pribadi yang dimusnahkan, cara mengumpulkan dan menyimpan Data Pribadi tersebut.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify"><strong>Pembagian Informasi</strong></p>
              <p class="ql-align-justify">Dalam hal diperlukan, kami dapat membagikan informasi pribadi Pengguna diantara Grup Usaha, dan/atau pihak ketiga yang bekerjasama dengan kami dan/atau Grup Usaha dalam rangka pelaksanaan kegiatan usaha Bank (“<strong>Mitra Usaha</strong>”), untuk tujuan yang ditetapkan dalam Bagian Penggunaan Data Pribadi. Kami juga dapat meneruskan Data Pribadi Pengguna ke lembaga pengawas keuangan, badan hukum, otoritas atau pemerintah sesuai ketentuan peraturan perundang-undangan yang berlaku.</p>
              <p class="ql-align-justify">Untuk tujuan Pemrosesan Data Pribadi sebagaimana telah kami sebutkan di Bagian Penggunaan Data Pribadi, kami dapat memproses Data Pribadi Pengguna di luar Indonesia. Dalam pelaksanaan transfer Data Pribadi Pengguna ke luar Indonesia, kami akan memastikan bahwa negara tujuan transfer memiliki tingkat pelindungan Data Pribadi yang setara atau lebih tinggi dibandingkan pelindungan Data Pribadi di Indonesia. Dalam hal negara tujuan transfer tidak memiliki tingkat pelindungan Data Pribadi yang setara atau lebih tinggi, maka kami akan menjalakan pelindungan Data Pribadi yang memadai dan bersifat mengikat (seperti mengadakan kontrak dengan penerima transfer Data Pribadi Pengguna dan/atau ketentuan dan/atau instrumen tertulis), atau dalam hal masih tidak terpenuhi, Bank dapat tetap melakukan transfer Data Pribadi ke luar Indonesia berdasarkan persetujuan dari Pengguna.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify">Bank telah menerapkan pelindungan Data Pribadi yang ditinjau secara berkala dari waktu ke waktu untuk memastikan keamanan Data Pribadi Pengguna dan memastikan Pengguna dapat memperoleh haknya sebagai Subyek Data Pribadi sesuai Peraturan yang Berlaku. Apabila Pengguna memerlukan rincian pelindungan Data Pribadi dapat kami sediakan berdasarkan permintaan.</p>
              <p class="ql-align-justify"><br></br></p>
              <p class="ql-align-justify">Perlu diketahui bahwa transfer Data Pribadi ke luar Indonesia tidak sepenuhnya aman. Meskipun kami telah melakukan usaha terbaik untuk melindungi Data Pribadi Pengguna, masih terdapat kemungkinan bahwa proses transfer tersebut akan dapat mengalami gangguan dari pihak yang tidak berkepentingan secara hukum. Dalam melakukan transfer Data Pribadi ke luar Indonesia, Bank akan berusaha dengan kemampuan terbaiknya untuk melaksanakan proses transfer Data Pribadi Pengguna yang didukung oleh sistem elektronik yang layak, andal, dan aman untuk melindungi hak privasi Pengguna atas Data Pribadi.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify"><strong>Keamanan Data Pribadi</strong></p>
              <p class="ql-align-justify">Bank berkomitmen untuk memastikan informasi atau Data Pribadi Pengguna yang diperoleh melalui Layanan Bank tetap aman selama Pemrosesan Data Pribadi (dan selama Masa Retensi). Dalam mengimplementasikan komitmen tersebut, maka Bank telah menerapkan prosedur- prosedur dan menggunakan sistem elektronik yang dilengkapi dengan tingkat keamanan yang memadai sesuai dengan yang disyaratkan oleh Peraturan yang Berlaku, antara lain membatasi</p>
              <p class="ql-align-justify">bahwa akses ke Data Pribadi Pengguna hanya dapat dilakukan oleh pihak yang memiliki kewenangan berdasarkan kebutuhan untuk mengetahui, pihak yang memproses Data Pribadi Pengguna hanya akan melakukannya dengan cara yang diizinkan dan diwajibkan untuk menjaga kerahasiaan informasi atau Data Pribadi Pengguna, memiliki bagian khusus yang berkaitan untuk melindungi keamanan dari Data Pribadi Pengguna, serta upaya pengamanan lainnya yang diwajibkan berdasarkan Peraturan Yang Berlaku.</p>
              <p class="ql-align-justify">Dalam hal Pengguna mengakses Layanan atau produk Bank, mohon pastikan Pengguna mengunduh Layanan atau produk Bank melalui App Store atau Play Store dan bukan bersumber dari tautan yang diberikan pihak tidak berwenang. Selain itu, Bank juga dapat mewajibkan Pengguna untuk:</p>
              <ol><li>memasukkan <em>Password Login </em>dan/atau MPIN Transaksi dan/atau akses biometrik sebelum Pengguna masuk ke Layanan Bank;</li><li>menjaga kerahasiaan <em>Password Login </em>dan/atau MPIN Transaksi Pengguna dan tidak mengungkapkan kepada siapapun;</li><li>menghubungi Bank dalam hal Password Login dan/atau MPIN Transaksi Pengguna terblokir, serta mengikuti instruksi Bank untuk mengaktifkan Layanan atau produk Bank kembali.</li></ol>
              <br></br>
              <p class="ql-align-justify">Perlu diketahui bahwa pengiriman informasi melalui daring (<em>online</em>) tidak sepenuhnya aman. Meskipun kami telah melakukan usaha terbaik untuk melindungi Data Pribadi Pengguna, masih terdapat kemungkinan risiko terhadap keamanan data/informasi yang Pengguna kirim melalui jaringan yang Pengguna gunakan. Ketika kami menerima data/informasi dari Pengguna, kami akan menggunakan prosedur yang ketat serta fitur yang aman sebagai usaha untuk mencegah akses yang tidak bertanggung jawab.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify">Dalam hal terjadi akses dan kegiatan ilegal atas kerahasiaan Data Pribadi Pengguna yang berada di luar kendali Bank, Bank akan segera memberitahukan kepada Pengguna pada kesempatan pertama sehingga Pengguna dapat mengurangi risiko yang timbul atas hal tersebut.</p>
              <p class="ql-align-justify"><br></br></p>
              <p class="ql-align-justify">Pengguna bertanggung jawab untuk menjaga kerahasiaan rincian informasi dan Data Pribadi Pengguna, termasuk informasi mengenai <em>username, password, email </em>maupun OTP terhadap siapapun dan untuk selalu menjaga dan bertanggung jawab atas keamanan gawai yang Pengguna gunakan.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify"><strong>Hak Pengguna</strong></p>
              <p class="ql-align-justify">Pengguna memiliki hak untuk:</p>
              <ol><li class="ql-align-justify">Mendapatkan akses dan meminta salinan Data Pribadi Pengguna, termasuk mendapatkan dan/atau menggunakan Data Pribadi Pengguna dalam bentuk yang sesuai dengan struktur dan/atau format yang lazim digunakan atau dapat dibaca oleh sistem elektronik, dimana kami berhak membebankan biaya yang wajar untuk memenuhi permintaan ini;</li><li class="ql-align-justify">Meminta kepada kami untuk memperbaiki data yang salah, melengkapi Data Pribadi yang tidak lengkap, pembaruan Data Pribadi. Namun, kami tidak dapat mengakomodir permintaan untuk mengubah Data Pribadi jika kami meyakini bahwa perubahan tersebut akan melanggar ketentuan peraturan perundang-undangan atau persyaratan hukum apa pun atau menyebabkan informasi menjadi tidak benar;</li><li class="ql-align-justify">Menyampaikan keluhan kepada otoritas pelindungan data atau regulator independen lain tentang bagaimana kami menggunakan Data Pribadi Pengguna serta meminta hak untuk</li></ol>
              <p class="ql-align-justify">mendapatkan kompensasi serta kewajiban yang harus dipenuhi oleh Pengendali Data Pribadi atas pelanggaran Pemrosesan Data Pribadi;</p>
              <ol><li class="ql-align-justify">Meminta kami untuk mengakhiri pemrosesan, menghapus, dan/atau memusnahkan Data Pribadi Pengguna apabila Data Pribadi Pengguna tidak lagi diperlukan untuk tujuan yang ditetapkan dalam Bagian Penggunaan Data Pribadi atau jika tidak ada dasar hukum lain untuk Pemrosesan Data Pribadi atau hal ini tidak dibatasi oleh ketentuan. Setelah menerima permintaan pengakhiran, penghapusan, dan/atau pemusnahan tersebut, kami akan memberikan konfirmasi penerimaan dan kami akan memberikan konfirmasi setelah Data Pribadi Pengguna telah dihapus dan/atau dimusnahkan sebagaimana dipersyaratkan oleh Peraturan yang Berlaku. Sebagai konsekuensinya, Pengguna mungkin tidak akan dapat menerima / menggunakan Layanan kami jika Pengguna melakukan penghapusan / pemusnahan Data Pribadi baik sebagian maupun keseluruhan;</li><li class="ql-align-justify">Mengajukan keberatan kepada kami atas penggunaan Data Pribadi Pengguna untuk pemasaran langsung (termasuk profil terkait) atau pemrosesan lainnya berdasarkan minat yang sah;</li><li class="ql-align-justify">Mengajukan keberatan atas tindakan pengambilan keputusan yang hanya didasarkan pada pemrosesan secara otomatis termasuk pemrofilan, yang menimbulkan akibat hukum atau berdampak signifikan pada Pengguna;</li><li class="ql-align-justify">Selama relevan, Pengguna dapat menunda atau membatasi Pemrosesan Data Pribadi Pengguna secara proporsional. Ketika pembatasan tersebut tidak memungkinkan, kami akan selanjutnya memberitahukan Pengguna. Namun, Pengguna tetap dapat menggunakan hak lain sebagaimana yang diuraikan pada Pemberitahuan Privasi ini, termasuk menarik persetujuan Pengguna untuk memproses Data Pribadi Pengguna sepanjang Pengguna telah mempertimbangkan dan menerima konsekuensi yang mungkin akan timbul terkait pemberian produk dan/atau Layanan (apabila ada).</li><li class="ql-align-justify">Dalam hal pemrosesan didasarkan pada persetujuan, Pengguna dapat menarik persetujuan Pengguna kapan saja atas tindakan Pemrosesan Data Pribadi Pengguna yang dilakukan oleh kami. Setelah menerima penarikan persetujuan tersebut, kami akan mengkonfirmasi penerimaan dan melanjutkan proses untuk menghentikan pemrosesan Data Pribadi Pengguna sepanjang Pengguna telah mempertimbangkan dan menerima konsekuensi yang mungkin akan timbul terkait pemberian produk dan/atau layanan (apabila ada).</li></ol>
              <p class="ql-align-justify">Jika Pengguna ingin menggunakan haknya, atau ingin memperoleh penjelasan tentang hak-hak Pengguna, mohon dapat menghubungi kami pada salah satu saluran yang tertera pada bagian Hubungi Kami.</p>
              <br></br>
              <br></br>
              <p class="ql-align-justify"><strong>Pelaksanaan Hak Pengguna</strong></p>
              <p class="ql-align-justify">Untuk dapat mengajukan pelaksanaan hak-hak Pengguna, Pengguna dapat mengajukan permohonan dengan menghubungi salah satu saluran yang tercantum pada bagian Hubungi Kami. Beberapa pelaksanaan hak akan menimbulkan konsekuensi terkait pemberian Layanan sehingga kami akan mengonfirmasi permohonan Pengguna dan/atau pengajuan pelaksanaan hak-hak Pengguna dapat tidak kami penuhi sepanjang pengecualian pelaksanaan hak-hak Pengguna tersebut diizinkan oleh Peraturan Yang Berlaku. Selanjutnya, kami secara maksimal akan mengusahakan pelaksanaan atas hak-hak Pengguna dan/atau penyampaian konfirmasi dan/atau penyampaian tanggapan atas permohonan Pengguna kepada kami dalam jangka waktu yang telah ditetapkan oleh Peraturan yang Berlaku, yakni paling lambat 3x24 (tiga kali dua puluh empat) jam sejak kami menerima antara lain: a) permintaan penarikan kembali persetujuan Pemrosesan Data Pribadi; b) permintaan perbaikan Data Pribadi; c) permintaan akses atas Data Pribadi ; dan/atau d) permohonan atas salinan Data Pribadi.</p>
              <p class="ql-align-justify">Setiap pelaksanaan hak Pengguna sebagai Subjek Data Pribadi terkait dugaan pelanggaran Bank terhadap Pemrosesan Data Pribadi wajib disampaikan secara tertulis kepada Bank dengan memenuhi syarat dan ketentuan yang diwajibkan dalam Peraturan yang Berlaku, untuk kemudian dilaksanakan dan/atau ditanggapi oleh Bank dalam waktu 3x24 (tiga kali dua puluh empat jam) atau waktu lainnya yang diperbolehkan Peraturan yang Berlaku dan/atau hukum acara perdata yang berlaku, terhitung sejak Bank menerima permohonan ganti rugi oleh Pengguna serta dengan memilih Kepaniteraan Pengadilan Negeri Jakarta Pusat sebagai tempat penyelesaian sengketa.</p>
              <p><strong>Bertindak atas nama orang lain</strong></p>
              <p class="ql-align-justify">Pengguna wajib menyediakan data, informasi, maupun Data Pribadi yang akurat kepada Bank. Kegagalan untuk menyediakan data dan/atau informasi tertentu dapat mengakibatkan Bank tidak dapat memberikan Layanan secara penuh kepada Pengguna.</p>
              <p class="ql-align-justify">Ketika Pengguna memberi kami Data Pribadi tentang orang lain (atau seseorang), Pengguna menyatakan bahwa Pengguna telah ditunjuk dan diberi wewenang oleh orang tersebut untuk memberikan Data Pribadi dan/atau bertindak atas nama mereka, dan Pengguna memastikan serta menjamin bahwa pihak tersebut telah memahami dan menyetujui Data Pribadi-nya akan diproses lebih lanjut tunduk pada Peraturan yang Berlaku. Hal ini termasuk memberikan persetujuan untuk:</p>
              <ol><li class="ql-align-justify">Pemrosesan kami atas Data Pribadi mereka dan Data Pribadi yang bersifat spesifik (seperti yang kami telah jelaskan dalam Bagian <strong>Perolehan dan Pengumpulan Data Pribadi </strong>di atas); dan</li><li class="ql-align-justify">Pengguna mendapatkan pemberitahuan pelindungan informasi atas nama mereka.</li></ol>
              <br></br>
              <p><strong>Pemasaran langsung</strong></p>
              <p class="ql-align-justify">Kami dan Grup Usaha akan dapat mengirimkan informasi tentang produk dan/atau Layanan kami dan Grup Usaha serta layanan pihak ketiga yang dipilih dengan cermat melalui media resmi Bank maupun sarana komunikasi Pengguna secara langsung termasuk melalui pos atau sarana elektronik seperti melalui telepon, surel (<em>email</em>), media sosial maupun media elektronik lainnya dengan perincian tentang produk, layanan dan penawaran khusus apa pun. Kami hanya akan melakukan hal ini jika Pengguna telah menyetujui kami untuk menghubungi Pengguna melalui sarana elektronik maupun non-elektronik.</p>
              <br></br>
              <br></br>
              <p>Pengguna dapat menghubungi kami melalui kanal sebagai berikut: Layanan Pengguna BNI Call pada:</p>
              <p>telepon di 1500046 atau e-mail di <a href="mailto:bnicall@bni.co.id" rel="noopener noreferrer" target="_blank" className="text-[#0462c1]">bnicall@bni.co.id</a></p>
              <p class="ql-align-justify">Atau kunjungi cabang BNI terdekat.</p>
              <p class="ql-align-justify">Perwakilan Petugas Pelindungan Data Pribadi (<em>Data Protection Officer</em>) yang ditunjuk oleh PT Bank Negara Indonesia (Persero), Tbk dapat dihubungi melalui BNI Call.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}