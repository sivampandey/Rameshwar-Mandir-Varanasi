import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Priest() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('priest.title')}</h1>
          <p className="page-hero-sub">{t('priest.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="priest-detail-hero">
              <div className="priest-portrait-box">
                <img src="/assets/images/pandit_ji.png" alt={t('priest.name')} className="priest-full-img" />
              </div>

              <div className="priest-meta-box">
                <h2>{t('priest.name')}</h2>
                <span className="priest-title-badge">{t('priest.role')}</span>
                <p className="priest-intro-p">{t('priest.intro')}</p>
              </div>
            </div>

            <div className="detail-text-body">
              <h3 className="sub-heading-gold">{t('priest.servicesTitle')}</h3>

              <div className="full-services-list">
                <div className="full-service-card">
                  <span className="fs-icon">🛕</span>
                  <div className="fs-info">
                    <h3>{t('priest.service1Title')}</h3>
                    <p>{t('priest.service1Desc')}</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">🕉️</span>
                  <div className="fs-info">
                    <h3>{t('priest.service2Title')}</h3>
                    <p>{t('priest.service2Desc')}</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">🐍</span>
                  <div className="fs-info">
                    <h3>{t('priest.service3Title')}</h3>
                    <p>{t('priest.service3Desc')}</p>
                  </div>
                </div>

                <div className="full-service-card">
                  <span className="fs-icon">💍</span>
                  <div className="fs-info">
                    <h3>{t('priest.service4Title')}</h3>
                    <p>{t('priest.service4Desc')}</p>
                  </div>
                </div>
              </div>

              <h3 className="sub-heading-gold">{t('priest.bookingHeading')}</h3>
              <p>{t('priest.bookingDesc')}</p>

              <div className="page-action-row">
                <a
                  href="https://wa.me/919956120169?text=%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A3%E0%A4%BE%E0%A4%AE%20%E0%A4%AA%E0%A4%82.%20%E0%A4%85%E0%A4%A8%E0%A5%82%E0%A4%AA%20%E0%A4%A4%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A5%80!%20%E0%A4%AE%E0%A5%88%E0%A4%82%20%E0%A4%AE%E0%A4%82%E0%A4%A6%E0%A4%BF%E0%A4%B0%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%A4%E0%A4%BE%20%E0%A4%B9%E0%A5%82%E0%A4%82"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fa-brands fa-whatsapp"></i> {t('priest.btnWhatsapp')}
                </a>
                <a href="tel:+919956120169" className="btn btn-secondary">
                  <i className="fa-solid fa-phone"></i> {t('priest.btnCall')}
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('priest.sidebarAddress')}</h3>
              <p>{t('priest.fullAddress')}</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
