import Image from "next/image";

export default function AdsComponent() {
    return (
        <section className="bg-[#deef5a] relative lg:px-0 lg:pt-[72px]">
            <div className="container-120">
                <div className="text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] !leading-snug lg:!leading-tight text-black text-center font-semibold">
                    #JadiinMaumu hari ini
                </h2>

                <div className="md:px-[120px]">
                    <div className="font-light text-xs md:text-base lg:text-2xl leading-[140%] mt-2 md:mt-6 lg:mt-10">
                    <div className="ql-content-wrapper">
                        <div className="ql-content ql-editort text-[#141414] font-thin">
                        <p className="ql-align-center px-30">
                            Buat transaksi, dapatkan insight keuangan, dan kembangkan
                            investasi dalam satu aplikasi. Download sekarang.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                {/* Download Buttons - Fixed JSX */}
                <div className="flex flex-col md:flex-row items-center justify-center mt-6 md:mt-10 gap-3 md:gap-5 mb-15">
                    {/* App Store Button */}
                    <a
                    href="https://apps.apple.com/id/app/wondr-by-bni/id6499518320?utm_source=Appstore&utm_medium=Microsite&utm_campaign=Footer_Download_Button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFFFFF] text-[#0E0E0E] hover:bg-[#050708]/90 hover:text-white border border-[#7A7A7A] font-semibold rounded-full leading-5 md:leading-6 text-xs md:text-sm w-[205px] h-8 md:w-[246px] md:h-12 justify-center text-center inline-flex items-center"
                    >
                    <svg
                        className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] me-2 -ms-1"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="apple"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                        />
                    </svg>
                    <span className="select-none">Download di App Store</span>
                    </a>

                    {/* Google Play Button */}
                    <a
                    href="https://play.google.com/store/apps/details?id=id.bni.wondr&referrer=utm_source%3DPlaystore%26utm_medium%3DMicrosite%26utm_content%3DFooter_Download_Button"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FFFFFF] text-[#0E0E0E] hover:bg-[#050708]/90 hover:text-white border border-[#7A7A7A] font-semibold rounded-full leading-5 md:leading-6 text-xs md:text-sm w-[205px] h-8 md:w-[246px] md:h-12 justify-center text-center inline-flex items-center"
                    >
                    <svg
                        className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] me-2 -ms-1"
                        focusable="false"
                        data-prefix="fab"
                        data-icon="play"
                        role="img"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M1.03094 0.861691L8.31428 8.00419L1.08511 15.2125C0.967136 15.0583 0.875354 14.8857 0.813444 14.7017C0.780935 14.4932 0.780935 14.281 0.813444 14.0725V1.80586C0.791777 1.47669 0.86761 1.14752 1.03011 0.861691M11.4518 4.88919L9.07428 7.24419L1.87761 0.166691C2.11094 0.0858581 2.36094 0.0633582 2.60511 0.101692C2.98844 0.206692 3.35428 0.368358 3.69011 0.579191L10.2034 4.18336C10.6268 4.41086 11.0393 4.65003 11.4518 4.88919ZM9.07511 8.77503L11.4409 11.0984L9.72594 12.0534L4.49344 14.9617C4.06011 15.2009 3.62511 15.4292 3.20178 15.69C3.02068 15.8029 2.81755 15.8758 2.606 15.9038C2.39445 15.9318 2.17936 15.9144 1.97511 15.8525L9.07511 8.77503ZM15.2084 8.00419C15.215 8.29567 15.1415 8.58338 14.9961 8.83607C14.8507 9.08875 14.6388 9.29677 14.3834 9.43752L12.4284 10.5225L9.85594 8.00419L12.4393 5.44252C13.1018 5.81169 13.7534 6.18086 14.4043 6.52836C14.664 6.67328 14.8773 6.88884 15.0195 7.15005C15.1616 7.41126 15.2277 7.70742 15.2084 8.00419Z"
                        fill="currentColor"
                        />
                    </svg>
                    <span className="select-none">Download di Google Play</span>
                    </a>
                </div>
                </div>

                <div className="relative flex flex-col items-center justify-center mt-10 lg:mt-0 mx-auto">
                <img
                    alt="download-landing"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover w-5/6 md:w-full md:mt-6 h-auto max-w-xl z-10 relative"
                    src="https://wondr.bni.co.id/api/image/download_appplaysotre_png_1751638397063.png"
                />
                </div>
            </div>

            <div className="absolute h-[140px] md:h-[255px] w-full bottom-0">
                <div className="relative h-[150px] md:h-[255px] bg-[#ECF789] bottom-0">
                <div
                    className="absolute z-[1] top-0 w-full overflow-hidden"
                    style={{ height: "150px" }}
                >
                    <img
                    alt="ornament"
                    loading="lazy"
                    width="0"
                    height="0"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full object-cover rotate-180"
                    src="https://wondr.bni.co.id/assets/images/download-landing/ornament.png"
                    style={{ color: "transparent" }}
                    />
                </div>
                </div>
            </div>
        </section>
    );
}
