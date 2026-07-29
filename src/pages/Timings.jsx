import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLiveStatus } from '../hooks/useLiveStatus';

export default function Timings() {
  const { lang, t } = useLanguage();
  const liveInfo = useLiveStatus(t, lang);

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('timings.title')}</h1>
          <p className="page-hero-sub">{t('timings.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="live-status-banner">
              <div className={`live-status-pill ${liveInfo.badgeType}`}>
                <span className={`status-dot ${liveInfo.badgeType === 'live' ? 'pulsing-gold' : liveInfo.badgeType === 'open' ? 'green' : liveInfo.badgeType === 'rest' ? 'orange' : 'red'}`}></span>
                <span>{liveInfo.statusText}</span>
              </div>

              <div className="live-clock-page-header">
                <span className="live-clock-time"><i className="fa-regular fa-clock"></i> {liveInfo.timeString}</span>
                <span className="next-aarti-text">{liveInfo.nextAartiText}</span>
              </div>
            </div>

            <div className="detail-text-body">
              <h2>{t('timings.cardHeading')}</h2>

              <div className={`yatra-halt-box margin-bottom-20 ${liveInfo.activeAarti === 'mangala' ? 'active-halt-highlight' : ''}`}>
                <h4>🌅 {t('timings.morningTitle')}</h4>
                <strong className="text-gold">{t('timings.morningTime')}</strong>
                <p>{t('timings.morningDesc')}</p>
              </div>

              <div className={`yatra-halt-box margin-bottom-20 ${liveInfo.activeAarti === 'bhog' ? 'active-halt-highlight' : ''}`}>
                <h4>🍲 {t('timings.middayTitle')}</h4>
                <strong className="text-gold">{t('timings.middayTime')}</strong>
                <p>{t('timings.middayDesc')}</p>
              </div>

              <div className={`yatra-halt-box margin-bottom-20 ${liveInfo.activeAarti === 'sandhya' ? 'active-halt-highlight' : ''}`}>
                <h4>🪔 {t('timings.eveningTitle')}</h4>
                <strong className="text-gold">{t('timings.eveningTime')}</strong>
                <p>{t('timings.eveningDesc')}</p>
              </div>

              <div className={`yatra-halt-box margin-bottom-20 ${liveInfo.activeAarti === 'shayan' ? 'active-halt-highlight' : ''}`}>
                <h4>🌙 {t('timings.nightTitle')}</h4>
                <strong className="text-gold">{t('timings.nightTime')}</strong>
                <p>{t('timings.nightDesc')}</p>
              </div>

              <div className="page-action-row">
                <Link to="/priest" className="btn btn-primary">{t('home.btnContactPriest')}</Link>
                <Link to="/contact" className="btn btn-secondary">{t('home.mapTitle')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('timings.sidebarHeading')}</h3>
              <ul className="sidebar-info-list">
                <li>👕 {t('timings.item1')}</li>
                <li>🧼 {t('timings.item2')}</li>
                <li>⏰ {t('timings.item3')}</li>
                <li>📱 {t('timings.item4')}</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
