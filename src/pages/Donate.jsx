import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const UPI_ID = 'QR917007370522-1875@unionbankofindia';

export default function Donate() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(UPI_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('donate.title')}</h1>
          <p className="page-hero-sub">{t('donate.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card donate-card-page">
            <div className="detail-text-body text-center">
              <h2>{t('donate.cardHeading')}</h2>
              <p className="donate-page-sub">{t('donate.cardSub')}</p>

              {/* Real QR Code */}
              <div className="qr-code-page-box">
                <div className="qr-frame-large">
                  <img
                    src="/assets/images/upi_qr_code.png"
                    alt="BHIM UPI QR Code - Shri Rameshwar Mahadev Temple"
                    className="real-qr-img"
                  />
                </div>
                <div className="qr-bank-label">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/BHIM_logo.svg/200px-BHIM_logo.svg.png"
                       alt="BHIM" className="bhim-logo" onError={(e) => { e.target.style.display='none'; }} />
                  <span className="bhim-upi-text">BHIM UPI</span>
                </div>
                <span className="scan-tag-lg">
                  <i className="fa-solid fa-qrcode"></i> {t('donate.scanTag')}
                </span>
              </div>

              {/* UPI ID Box */}
              <div className="upi-box-large">
                <div className="upi-id-row">
                  <span className="upi-label">{t('donate.upiIdLabel')}</span>
                  <strong className="upi-value">{UPI_ID}</strong>
                </div>
                <button onClick={handleCopyUpi} className={`btn-copy-lg ${copied ? 'copied' : ''}`}>
                  <i className={`fa-regular ${copied ? 'fa-circle-check' : 'fa-copy'}`}></i>
                  {copied ? t('donate.copiedBtn') : t('donate.copyBtn')}
                </button>
              </div>

              {/* Bank Details */}
              <div className="bank-details-box">
                <h3>{t('donate.bankDetailsTitle')}</h3>
                <ul className="bank-info-list">
                  <li><strong>{t('donate.accountNameLabel')}</strong> {t('donate.accountNameValue')}</li>
                  <li><strong>{t('donate.bankNameLabel')}</strong> {t('donate.bankNameValue')}</li>
                  <li><strong>{t('donate.upiAddressLabel')}</strong> {UPI_ID}</li>
                </ul>
              </div>

              <div className="page-action-row center-btns">
                <Link to="/contact" className="btn btn-primary">{t('donate.btnReceipt')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('donate.sidebarPurpose')}</h3>
              <ul className="sidebar-info-list">
                <li>🍲 {t('donate.purpose1')}</li>
                <li>🛕 {t('donate.purpose2')}</li>
                <li>🐄 {t('donate.purpose3')}</li>
                <li>🚩 {t('donate.purpose4')}</li>
              </ul>
            </div>
            <div className="sidebar-card" style={{marginTop: '16px'}}>
              <h3>{t('donate.sidebarPayments')}</h3>
              <ul className="sidebar-info-list">
                <li>✅ Google Pay</li>
                <li>✅ PhonePe</li>
                <li>✅ Paytm</li>
                <li>✅ BHIM UPI</li>
                <li>✅ Net Banking</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
