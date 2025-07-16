'use client'

import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('id');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const translations = {
    id: {
      navbar: {
        features: "Fitur",
        info: "Info",
        downloadNow: "Download Sekarang",
        sections: {
          transaksi: "Transaksi",
          simpanan: "Simpanan",
          investasi: "Investasi",
          lainnya: "Lainnya"
        },
        menu: {
          transfer: "Transfer",
          payAndBuy: "Bayar & Beli",
          tapcash: "TapCash",
          internationalTransfer: "Transfer Luar Negeri",
          mobileTunai: "Mobile Tunai",
          multicurrency: "wondr multicurrency",
          mutualFunds: "Reksa Dana",
          bonds: "Obligasi/Sukuk",
          registration: "Registrasi & Referral"
        },
        faq: {
          title: "FAQ",
          questions: [
            "Metode transfer apa saja yang bisa dipilih?",
            "Di mana saya bisa bertransaksi menggunakan QRIS?",
            "Apakah terdapat biaya transaksi saat menggunakan fitur Bayar & Beli?"
          ],
          viewMore: "Lihat Selengkapnya"
        },
        legal: {
          title: "Syarat, Ketentuan, dan Pemberitahuan Privasi",
          description: "Cek syarat, ketentuan, dan pemberitahuan privasi",
          viewMore: "Lihat Selengkapnya"
        }
      },
      transfer: {
        title: "Transfer",
        subtitle: "Tagihan apapun semuanya serba ada!",
        description: "Dari token listrik sampai bayar tagihan pendidikan kuliah semuanya komplit.",
        usp: {
          title: "Transfer ke mana aja, gak paket ribet",
          instant: { title: "Instan dan aman", description: "Dengan sistem keamanan terpercaya, dana kamu akan terkirim dalam hitungan detik." },
          multicurrency: { title: "Bisa ke berbagai mata uang", description: "Selain IDR, sesama BNI bisa kirim 12 mata uang lain." },
          flexible: { title: "Jadwal transfer fleksibel", description: "Mau atur jadwal atau kirim ke banyak orang sekaligus? Bisa!" }
        }
      }
    },
    en: {
      navbar: {
        features: "Features",
        info: "Info",
        downloadNow: "Download Now",
        sections: {
          transaksi: "Transaction",
          simpanan: "Savings",
          investasi: "Investment",
          lainnya: "Others"
        },
        menu: {
          transfer: "Transfer",
          payAndBuy: "Pay & Buy",
          tapcash: "TapCash",
          internationalTransfer: "International Transfer",
          mobileTunai: "Mobile Cash",
          multicurrency: "wondr multicurrency",
          mutualFunds: "Mutual Funds",
          bonds: "Bonds/Sukuk",
          registration: "Registration & Referral"
        },
        faq: {
          title: "FAQ",
          questions: [
            "What transfer methods can I choose?",
            "Where can I transact using QRIS?",
            "Are there transaction fees when using the Pay & Buy feature?"
          ],
          viewMore: "View More"
        },
        legal: {
          title: "Terms, Conditions, and Privacy Notice",
          description: "Check terms, conditions, and privacy notice",
          viewMore: "View More"
        }
      },
      transfer: {
        title: "Transfer",
        subtitle: "All your payment needs in one place!",
        description: "From electricity tokens to education payments, everything is complete.",
        usp: {
          title: "Transfer anywhere, hassle-free",
          instant: { title: "Instant and secure", description: "With trusted security systems, your funds will be sent in seconds." },
          multicurrency: { title: "Multiple currencies available", description: "Besides IDR, BNI to BNI can send 12 other currencies." },
          flexible: { title: "Flexible transfer schedule", description: "Want to schedule or send to multiple people at once? You can!" }
        }
      }
    }
  };

  const getNestedValue = (obj, path) => {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((current, key) => current?.[key], obj);
  };

  const t = (key, options = {}) => {
    try {
      const value = getNestedValue(translations[language], key);
      
      if (options.returnObjects && (Array.isArray(value) || typeof value === 'object')) {
        return value;
      }
      
      return value || key;
    } catch (error) {
      console.warn(`Translation key "${key}" not found:`, error);
      return key;
    }
  };

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    isIndonesian: language === 'id',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};