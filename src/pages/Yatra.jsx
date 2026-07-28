import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Yatra() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('yatra.title')}</h1>
          <p className="page-hero-sub">{t('yatra.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-img-wrapper">
              <img src="/assets/images/yatra_pilgrims.jpg" alt={t('yatra.title')} className="detail-banner-img" />
            </div>

            <div className="detail-text-body">
              <h2>{t('yatra.cardHeading')}</h2>
              <p>{t('yatra.p1')}</p>
              <p>{t('yatra.p2')}</p>

              <div className="yatra-halt-box">
                <h4>{t('yatra.halt1')}</h4>
              </div>

              <div className="yatra-halt-box">
                <h4>{t('yatra.halt2')}</h4>
              </div>

              <div className="yatra-halt-box highlight-halt">
                <h4>{t('yatra.halt3')}</h4>
                <p>{t('yatra.p3')}</p>
              </div>

              <div className="yatra-halt-box">
                <h4>{t('yatra.halt4')}</h4>
              </div>

              <div className="yatra-halt-box">
                <h4>{t('yatra.halt5')}</h4>
              </div>

              <div className="page-action-row">
                <Link to="/priest" className="btn btn-primary">{t('home.btnContactPriest')}</Link>
                <Link to="/contact" className="btn btn-secondary">{t('home.mapTitle')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('yatra.sidebarHeading')}</h3>
              <ul className="sidebar-info-list">
                <li>👟 {t('yatra.item1')}</li>
                <li>🕉️ {t('yatra.item2')}</li>
                <li>🍲 {t('yatra.item3')}</li>
                <li>📅 {t('yatra.item4')}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
