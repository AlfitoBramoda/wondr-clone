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
  const [isClient, setIsClient] = useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

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
    },
    zh: {
      navbar: {
        features: "功能",
        info: "信息",
        downloadNow: "立即下载",
        sections: {
          transaksi: "交易",
          simpanan: "储蓄",
          investasi: "投资",
          lainnya: "其他"
        },
        menu: {
          transfer: "转账",
          payAndBuy: "支付与购买",
          tapcash: "TapCash",
          internationalTransfer: "国际转账",
          mobileTunai: "移动现金",
          multicurrency: "wondr 多币种",
          mutualFunds: "共同基金",
          bonds: "债券/伊斯兰债券",
          registration: "注册与推荐"
        },
        faq: {
          title: "常见问题",
          questions: [
            "我可以选择哪些转账方式？",
            "我可以在哪里使用QRIS进行交易？",
            "使用支付与购买功能时是否有交易费用？"
          ],
          viewMore: "查看更多"
        },
        legal: {
          title: "条款、条件和隐私声明",
          description: "查看条款、条件和隐私声明",
          viewMore: "查看更多"
        }
      },
      transfer: {
        title: "转账",
        subtitle: "所有支付需求一站式解决！",
        description: "从电费充值到教育费用支付，应有尽有。",
        usp: {
          title: "随时随地转账，无忧便捷",
          instant: { title: "即时安全", description: "通过可信的安全系统，您的资金将在几秒钟内发送。" },
          multicurrency: { title: "支持多种货币", description: "除了印尼盾，BNI之间还可以发送其他12种货币。" },
          flexible: { title: "灵活的转账时间安排", description: "想要设置时间表或同时向多人发送？完全可以！" }
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
    isClient,
    isIndonesian: language === 'id',
    isEnglish: language === 'en',
    isChinese: language === 'zh'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};