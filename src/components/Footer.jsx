import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="site-footer">
        <div className="footer-top-ornament">
          <div className="mantra-line">{t('footer.mantraLine')}</div>
        </div>
        <div className="footer-main-text">
          <h2 className="trishul-mahadev-heading">{t('footer.heading')}</h2>
          <p className="copyright-text">{t('footer.copyright')}</p>
        </div>

        <button className="scroll-to-top" onClick={scrollToTop} title="ऊपर जाएँ">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919956120169?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%AA%E0%A4%82.%20%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%20%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A5%80!%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%B8%E0%A5%87%20%E0%A4%B8%E0%A4%82%E0%A4%AC%E0%A4%82%E0%A4%A0%E0%A4%BF%E0%A4%A4%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        title={t('footer.whatsappTitle')}
      >
        <i className="fa-brands fa-whatsapp"></i>
        <div className="whatsapp-pulse"></div>
      </a>
    </>
  );
}
