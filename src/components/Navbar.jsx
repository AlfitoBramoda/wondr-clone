'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [activeDesktopTab, setActiveDesktopTab] = useState(null);
  const [expandedMobileSection, setExpandedMobileSection] = useState(null);
  
  const { language, setLanguage, t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileSection = (section) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  const handleDesktopTab = (tab) => {
    setActiveDesktopTab(activeDesktopTab === tab ? null : tab);
  };

  const handleMobileTab = (tab) => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const menuItems = {
    transaksi: [
      { name: t('navbar.menu.transfer'), href: '/detail/transfer' },
      { name: t('navbar.menu.payAndBuy'), href: '/detail/bayar-beli' },
      { name: t('navbar.menu.tapcash'), href: '/detail/tapcash' },
      { name: t('navbar.menu.internationalTransfer'), href: '/detail/remittance' },
      { name: t('navbar.menu.mobileTunai'), href: '/detail/mobile-tunai' }
    ],
    simpanan: [
      { name: t('navbar.menu.multicurrency'), href: '/detail/multicurrency' }
    ],
    investasi: [
      { name: t('navbar.menu.mutualFunds'), href: '/detail/reksa-dana' },
      { name: t('navbar.menu.bonds'), href: '/detail/obligasi' }
    ],
    lainnya: [
      { name: t('navbar.menu.registration'), href: '/detail/lainya' }
    ]
  };

  const faqItems = t('navbar.faq.questions') || [
    'Metode transfer apa saja yang bisa dipilih?',
    'Di mana saya bisa bertransaksi menggunakan QRIS?',
    'Apakah terdapat biaya transaksi saat menggunakan fitur Bayar & Beli?'
  ];

  return (
    <>
      <header className="sticky top-0 w-full z-50 bg-white shadow-md">
        <nav className="bg-white border-gray-200 transition-all duration-500 relative">
          {/* Mobile Navigation */}
          <div className="flex justify-between items-center w-full px-6 py-3 md:hidden">
            <Link href="/" className="flex items-center space-x-1">
              <img
                src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                alt="logo"
                width={64}
                height={32}
                className="w-[64px] h-[32px] object-contain"
              />
            </Link>
            <div className="flex items-center gap-[20px]">
              <button
                type="button"
                className="px-6 py-[9px] text-xs text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px]"
              >
                {t('navbar.downloadNow')}
              </button>
              <button onClick={toggleMobileMenu}>
                <img
                  src="/assets/images/close-icon.png"
                  alt="close menu"
                  width={16}
                  height={10}
                  className="w-4 h-[10px] object-contain transition-all duration-500 ease-in-out transform"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 top-full md:hidden bg-white shadow-lg w-full z-50 transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 pointer-events-auto origin-top">
              <div className="flex w-full">
                <button
                  className={`text-black w-full flex-1 font-semibold text-sm py-[18px] px-12 border-b-[4px] cursor-pointer transition-all duration-500 origin-top text-center flex items-center justify-center gap-2 ${
                    activeTab === 'fitur' ? 'bg-[#F9F9F9] border-[#71DBD3]' : 'border-transparent'
                  }`}
                  onClick={() => handleMobileTab('fitur')}
                >
                  {t('navbar.features')}
                </button>
                <button
                  className={`text-black w-full flex-1 font-semibold text-sm py-[18px] px-12 border-b-[4px] cursor-pointer transition-all duration-500 origin-top text-center flex items-center justify-center gap-2 ${
                    activeTab === 'info' ? 'bg-[#F9F9F9] border-[#71DBD3]' : 'border-transparent'
                  }`}
                  onClick={() => handleMobileTab('info')}
                >
                  {t('navbar.info')}
                </button>
              </div>

              <div className="mt-4 px-4 max-h-[70vh] overflow-y-auto">
                {activeTab === 'fitur' && (
                  <div>
                    {Object.entries(menuItems).map(([section, items]) => (
                      <div key={section} className="">
                        <div
                          className="flex justify-between items-center p-4 cursor-pointer"
                          onClick={() => toggleMobileSection(section)}
                          role="button"
                          tabIndex={0}
                        >
                          <p className="font-semibold text-base capitalize">{t(`navbar.sections.${section}`)}</p>
                          <button className="w-8 h-8 bg-[#71DBD3] rounded-full flex items-center justify-center">
                            <svg
                              className={`w-4 h-4 transition-transform duration-500 ${
                                expandedMobileSection === section ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        </div>
                        {expandedMobileSection === section && (
                          <div className="pl-4 pb-4">
                            {items.map((item, index) => (
                              <Link
                                key={index}
                                href={item.href}
                                className="block p-2 text-sm text-gray-600 hover:text-black"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === 'info' && (
                  <div className="p-4">
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-4">{t('navbar.faq.title')}</h3>
                      <div className="space-y-3">
                        {faqItems.map((item, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-4">{t('navbar.legal.title')}</h3>
                      <p className="text-gray-600 text-sm mb-4">{t('navbar.legal.description')}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center divide-x divide-[#7A7A7A] pl-8 py-6">
                <button 
                  onClick={() => changeLanguage('id')}
                  className={`text-sm leading-[24px] font-semibold px-2 ${language === 'id' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                >
                  ID
                </button>
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`text-sm leading-[24px] font-semibold px-2 ${language === 'en' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                >
                  EN
                </button>
                <button 
                  onClick={() => changeLanguage('zh')}
                  className={`text-sm leading-[24px] font-semibold ps-2 ${language === 'zh' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                >
                  中文
                </button>
              </div>
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-wrap w-full h-16 items-center justify-between md:px-6 lg:px-[150px]">
            <div className="flex gap-16 items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img
                  src="https://wondr.bni.co.id/assets/images/wondr-color-3x.png"
                  alt="logo"
                  width={100}
                  height={32}
                  className="w-[100px] h-[32px] object-contain"
                />
              </Link>
              <div className="flex gap-6">
                <div className="flex gap-6">
                  <div
                    className={`text-black flex items-center gap-[14px] font-semibold text-base px-6 py-[18px] border-b-[4px] cursor-pointer transition-all duration-500 origin-top ${
                      activeDesktopTab === 'fitur' ? 'bg-[#F9F9F9] border-[#71DBD3]' : 'border-transparent'
                    }`}
                    onClick={() => handleDesktopTab('fitur')}
                  >
                    <span>{t('navbar.features')}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${
                        activeDesktopTab === 'fitur' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div
                    className={`text-black flex items-center gap-[14px] font-semibold text-base px-6 py-[18px] border-b-[4px] cursor-pointer transition-all duration-500 origin-top ${
                      activeDesktopTab === 'info' ? 'bg-[#F9F9F9] border-[#71DBD3]' : 'border-transparent'
                    }`}
                    onClick={() => handleDesktopTab('info')}
                  >
                    <span>{t('navbar.info')}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-500 ${
                        activeDesktopTab === 'info' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-6 items-center">
              <button
                type="button"
                className="px-6 py-[9px] text-base text-black font-semibold focus:outline-none bg-[#71DBD3] hover:bg-[#5CCFC5] disabled:bg-[#A7ECE8] rounded-[32px]"
              >
                {t('navbar.downloadNow')}
              </button>
              <div className="flex items-center space-x-1">
                <div className="flex items-center divide-x divide-[#7A7A7A]">
                  <button 
                    onClick={() => changeLanguage('id')}
                    className={`text-[16px] leading-[24px] font-semibold px-2 ${language === 'id' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                  >
                    ID
                  </button>
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`text-[16px] leading-[24px] font-semibold px-2 ${language === 'en' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => changeLanguage('zh')}
                    className={`text-[16px] leading-[24px] font-semibold ps-2 ${language === 'zh' ? 'text-[#141414]' : 'text-[#8c8c8c]'}`}
                  >
                    中文
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dropdown Menu - Fitur */}
          {activeDesktopTab === 'fitur' && (
            <div className="hidden md:flex absolute left-0 right-0 top-full w-full bg-gray-100 rounded-b-xl z-[50] transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
              <div className="block w-full py-6 px-6 lg:px-[150px] overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-screen-xl w-full">
                  {Object.entries(menuItems).map(([section, items]) => (
                    <div
                      key={section}
                      className={`bg-white p-6 rounded-lg shadow-sm transition-transform duration-500 flex flex-col text-black ${section === 'lainnya' ? 'justify-between' : 'after:content-[\'\'] after:block after:h-[120px]'}`}
                    >
                      <div>
                        <h3 className="font-semibold text-base mb-6 capitalize">{t(`navbar.sections.${section}`)}</h3>
                        <ul className="flex flex-col list-none text-base font-light">
                          {items.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={item.href}
                                className="block p-[10px] rounded-lg transition-all duration-500 hover:bg-[#F0F0F0]"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {section === 'lainnya' && (
                        <img
                          src="https://wondr.bni.co.id/assets/images/ntb.svg"
                          alt="ntb"
                          width={375}
                          height={200}
                          className="object-cover w-full rounded-b-lg mt-auto"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Desktop Dropdown Menu - Info */}
          {activeDesktopTab === 'info' && (
            <div className="hidden md:flex absolute left-0 right-0 top-full w-full bg-gray-100 rounded-b-xl z-[50] transition-all duration-500 ease-in-out transform opacity-100 scale-y-100 origin-top">
              <div className="block w-full py-6 px-6 lg:px-[150px] overflow-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-500 flex flex-col">
                    <h3 className="font-semibold text-black text-2xl">{t('navbar.faq.title')}</h3>
                    <ul className="flex flex-col gap-5 ml-[2px] text-[#7A7A7A] text-base font-light mt-4">
                      {faqItems.map((item, index) => (
                        <li key={index} className="flex gap-3 items-start">
                          <span className="mt-2 w-2 h-2 bg-black rounded-full shrink-0"></span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="px-4 py-2 mt-4">
                      <Link
                        href="/faq"
                        className="text-[#FF8736] text-sm font-bold flex items-center gap-1 hover:underline"
                      >
                        {t('navbar.faq.viewMore')}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#FF8736"
                          strokeWidth="2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-sm transition-transform duration-500 flex flex-col justify-between">
                      <div>
                        <h2 className="font-semibold text-black text-2xl">{t('navbar.legal.title')}</h2>
                        <p className="text-[#7A7A7A] text-[14px] font-light mt-2">
                          {t('navbar.legal.description')}
                        </p>
                      </div>
                      <div className="px-4 py-2 mt-4">
                        <Link
                          href="/legal/privacy-policy"
                          className="text-[#FF8736] text-sm font-bold flex items-center gap-1 hover:underline"
                        >
                          {t('navbar.legal.viewMore')}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="#FF8736"
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed w-full h-screen bg-black/25 z-10 transition-opacity duration-300 ease-in-out opacity-100 visible"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Navigation;