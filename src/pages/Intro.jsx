import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Intro() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('intro.title')}</h1>
          <p className="page-hero-sub">{t('intro.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-img-wrapper">
              <img src="/assets/images/temple_intro.png?v=2" alt={t('intro.title')} className="detail-banner-img" />
            </div>

            <div className="detail-text-body">
              <h2>{t('intro.cardHeading')}</h2>
              <p>{t('intro.p1')}</p>
              <p>{t('intro.p2')}</p>
              <p>{t('intro.p3')}</p>

              <div className="page-action-row">
                <Link to="/yatra" className="btn btn-primary">{t('home.btnYatra')}</Link>
                <Link to="/contact" className="btn btn-secondary">{t('home.btnDarshan')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('intro.sidebarHeading')}</h3>
              <ul className="sidebar-info-list">
                <li>✨ {t('intro.item1')}</li>
                <li>🌊 {t('intro.item2')}</li>
                <li>🚩 {t('intro.item3')}</li>
                <li>🍲 {t('intro.item4')}</li>
              </ul>
            </div>

            <div className="sidebar-card donate-promo-card">
              <h3>{t('home.donateTag')}</h3>
              <p>{t('home.donateSub')}</p>
              <Link to="/donate" className="btn btn-primary btn-block">{t('nav.donate')} ❤️</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
