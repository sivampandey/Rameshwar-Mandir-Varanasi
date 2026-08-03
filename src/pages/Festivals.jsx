import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

export default function Festivals() {
  const { t } = useLanguage();
  const { festivals } = useData();

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('festivals.title')}</h1>
          <p className="page-hero-sub">{t('festivals.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <div className="detail-text-body">
              <h2>{t('festivals.heading')}</h2>

              <div className="full-festivals-list">
                {festivals && festivals.map((fest, idx) => (
                  <div key={fest.id || idx} className="fest-detail-box">
                    <h3>{idx + 1}. {fest.name} ({fest.date})</h3>
                    <p>{fest.desc}</p>
                  </div>
                ))}
              </div>

              <div className="page-action-row">
                <Link to="/timings" className="btn btn-primary">{t('festivals.btnTimings')}</Link>
                <Link to="/gallery" className="btn btn-secondary">{t('festivals.btnGallery')}</Link>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('festivals.calendar')}</h3>
              <ul className="sidebar-info-list">
                {festivals && festivals.map((f) => (
                  <li key={f.id}><strong>{f.date}:</strong> {f.name}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
