import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLiveStatus } from '../hooks/useLiveStatus';
import { useData } from '../context/DataContext';

export default function Timings() {
  const { lang, t } = useLanguage();
  const liveInfo = useLiveStatus(t, lang);
  const { templeTimings } = useData();

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

              {templeTimings && templeTimings.map((item, idx) => (
                <div key={item.id || idx} className="yatra-halt-box margin-bottom-20">
                  <h4>🪔 {item.name}</h4>
                  <strong className="text-gold">{item.time}</strong>
                  <p>{item.desc}</p>
                </div>
              ))}

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
