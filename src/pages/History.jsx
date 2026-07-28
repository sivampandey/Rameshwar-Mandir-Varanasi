import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function History() {
  const { t } = useLanguage();

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('history.title')}</h1>
          <p className="page-hero-sub">{t('history.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-img-wrapper">
              <img src="/assets/images/lord_rama_shiva.jpg" alt={t('history.title')} className="detail-banner-img" />
            </div>

            <div className="detail-text-body">
              <h2>{t('history.cardHeading')}</h2>
              <p>{t('history.p1')}</p>
              <p>{t('history.p2')}</p>
              <p>{t('history.p3')}</p>

              <div className="page-action-row">
                <Link to="/yatra" className="btn btn-primary">{t('home.btnYatra')}</Link>
                <Link to="/gallery" className="btn btn-secondary">{t('nav.gallery')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('history.sidebarHeading')}</h3>
              <ul className="sidebar-info-list">
                <li>✨ {t('history.item1')}</li>
                <li>🛕 {t('history.item2')}</li>
                <li>🚩 {t('history.item3')}</li>
                <li>📍 {t('history.item4')}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
