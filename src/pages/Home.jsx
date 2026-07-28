import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('QR917007370522-1875@unionbankofindia');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const textMsg = `${t('home.heroTitle')}\n\n${t('home.inputName')}: ${contactData.name}\n${t('home.inputPhone')}: ${contactData.phone}\n${t('home.inputMsg')}: ${contactData.message}`;
    const whatsappUrl = `https://wa.me/919956120169?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, '_blank');
    setFormSent(true);
    setContactData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section" id="hero">
        <div className="hero-bg-container">
          <img src="/assets/images/temple_hero.png" alt={t('home.heroTitle')} className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="mantra-badge">{t('home.mantra')}</div>

          <h1 className="hero-title">{t('home.heroTitle')}</h1>
          <h2 className="hero-subtitle">{t('home.heroSub')}</h2>

          <p className="hero-description">{t('home.heroDesc')}</p>

          <div className="hero-buttons">
            <Link to="/yatra" className="btn btn-primary">
              <i className="fa-solid fa-om"></i> {t('home.btnYatra')}
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              <i className="fa-solid fa-location-dot"></i> {t('home.btnDarshan')}
            </Link>
          </div>
          <div className="feature-badge-card">
            <div className="badge-icon">🚩</div>
            <div className="badge-text">
              <strong>{t('home.badgeSeva')}</strong>
              <span>{t('home.badgeSevaSub')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO & HISTORY SECTION */}
      <section className="section-container">
        <div className="dual-cards-wrapper">
          {/* Intro Card */}
          <div className="intro-history-card">
            <div className="card-text-side">
              <h2 className="card-heading">
                <span className="heading-icon">🛕</span> {t('home.introTitle')}
              </h2>
              <p className="card-p">{t('home.introText')}</p>
              <Link to="/intro" className="btn-card-action">{t('home.readMore')}</Link>
            </div>
            <div className="card-img-side">
              <img src="/assets/images/temple_intro.png?v=2" alt={t('home.introTitle')} className="card-reveal-img" />
              <div className="img-glow-overlay"></div>
            </div>
          </div>

          {/* History Card */}
          <div className="intro-history-card">
            <div className="card-text-side">
              <h2 className="card-heading">
                <span className="heading-icon">📖</span> {t('home.historyTitle')}
              </h2>
              <p className="card-p">{t('home.historyText')}</p>
              <Link to="/history" className="btn-card-action">{t('home.listenMore')}</Link>
            </div>
            <div className="card-img-side">
              <img src="/assets/images/lord_rama_shiva.jpg" alt={t('home.historyTitle')} className="card-reveal-img" />
              <div className="img-glow-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* PANCHKOSHI YATRA SECTION */}
      <section className="yatra-section section-container">
        <div className="yatra-banner-card">
          <div className="yatra-grid">
            <div className="yatra-img-box">
              <img src="/assets/images/yatra_pilgrims.jpg" alt={t('home.yatraTitle')} className="yatra-img" />
            </div>

            <div className="yatra-content-box">
              <h2 className="yatra-title">{t('home.yatraTitle')}</h2>
              <p className="yatra-desc">{t('home.yatraDesc')}</p>
              <p className="yatra-subdesc">{t('home.yatraSubdesc')}</p>

              <div className="yatra-timeline-header">
                <span className="timeline-line"></span>
                <span className="timeline-title-text">{t('home.yatraTimelineTitle')}</span>
                <span className="timeline-line"></span>
              </div>

              <div className="yatra-stations">
                <div className="station-node">
                  <div className="node-icon"><i className="fa-solid fa-gopuram"></i></div>
                  <span className="node-name">{t('home.stationKardameshwar')}</span>
                </div>

                <div className="station-connector"></div>

                <div className="station-node">
                  <div className="node-icon"><i className="fa-solid fa-dharmachakra"></i></div>
                  <span className="node-name">{t('home.stationBhimchandi')}</span>
                </div>

                <div className="station-connector"></div>

                <div className="station-node active-main-node">
                  <div className="node-icon main-gold-icon">🛕</div>
                  <span className="node-name highlight-name">{t('home.stationRameshwar')}</span>
                </div>

                <div className="station-connector"></div>

                <div className="station-node">
                  <div className="node-icon"><i className="fa-solid fa-om"></i></div>
                  <span className="node-name">{t('home.stationShivpur')}</span>
                </div>

                <div className="station-connector"></div>

                <div className="station-node">
                  <div className="node-icon"><i className="fa-solid fa-water"></i></div>
                  <span className="node-name">{t('home.stationKapildhara')}</span>
                </div>
              </div>

              <Link to="/yatra" className="btn-yatra-action">
                {t('home.btnYatraDetails')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR CARDS GRID ROW */}
      <section className="section-container main-cards-grid-section">
        <div className="four-cards-grid">
          {/* Priest Card */}
          <div className="grid-card priest-card">
            <div className="card-header-tag">
              <span className="card-header-icon">🛕</span>
              <h3>{t('home.priestTag')}</h3>
            </div>

            <div className="priest-profile">
              <div className="priest-avatar-wrapper">
                <img src="/assets/images/pandit_ji.png" alt="Pt. Anoop Tiwari" className="priest-img" />
                <div className="avatar-ring"></div>
              </div>
              <div className="priest-info">
                <h4 className="priest-name">{t('priest.name')}</h4>
                <span className="priest-role">{t('priest.role')}</span>
              </div>
            </div>

            <p className="priest-bio">{t('home.priestBio')}</p>

            <Link to="/priest" className="btn-card-footer">{t('home.btnContactPriest')}</Link>
          </div>

          {/* Timings Card */}
          <div className="grid-card timings-card">
            <div className="card-header-tag">
              <span className="card-header-icon">🌅</span>
              <h3>{t('home.timingsTag')}</h3>
            </div>

            <div className="timings-body">
              <div className="timing-block morning-block">
                <div className="timing-icon-col">
                  <div className="sun-icon-animated">☀️</div>
                </div>
                <div className="timing-details">
                  <span className="timing-label">{t('home.timingMorning')}</span>
                  <div className="time-range">
                    <strong>{t('home.timingMorningRange')}</strong>
                  </div>
                </div>
              </div>

              <div className="timing-block evening-block">
                <div className="timing-icon-col">
                  <div className="moon-icon-animated">🌙</div>
                </div>
                <div className="timing-details">
                  <span className="timing-label">{t('home.timingEvening')}</span>
                  <div className="time-range">
                    <strong>{t('home.timingEveningRange')}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="live-status-pill">
              <span className="status-dot green"></span>
              <span>{t('home.liveStatus')}</span>
            </div>
          </div>

          {/* Donation Card */}
          <div className="grid-card donate-card">
            <div className="card-header-tag">
              <span className="card-header-icon">📦</span>
              <h3>{t('home.donateTag')}</h3>
            </div>

            <p className="donate-subtext">{t('home.donateSub')}</p>

            <div className="qr-code-box">
              <div className="qr-frame">
                <img
                  src="/assets/images/upi_qr_code.png"
                  alt="BHIM UPI QR - Shri Rameshwar Mahadev Temple"
                  className="real-qr-img"
                />
              </div>
              <span className="scan-pay-tag"><i className="fa-solid fa-qrcode"></i> {t('home.scanPayTag')}</span>
            </div>

            <div className="upi-info-box">
              <div className="upi-info-header">
                <span className="upi-label">{t('home.upiIdLabel')}</span>
                <button className="btn-copy-upi" onClick={handleCopyUpi} title={t('home.copyBtn')}>
                  <i className={`fa-regular ${copied ? 'fa-circle-check' : 'fa-copy'}`}></i>
                  <span>{copied ? (lang === 'hi' ? ' कॉपी हो गया' : ' Copied') : (lang === 'hi' ? ' कॉपी करें' : ' Copy')}</span>
                </button>
              </div>
              <strong className="upi-id-code">QR917007370522-1875@unionbankofindia</strong>
            </div>
            {copied && <span className="text-gold-center">{t('home.copiedMsg')}</span>}
          </div>

          {/* Quick Contact Form */}
          <div className="grid-card contact-card">
            <div className="card-header-tag">
              <span className="card-header-icon">📞</span>
              <h3>{t('home.contactFormTitle')}</h3>
            </div>

            {formSent ? (
              <div className="form-success-msg">
                <i className="fa-solid fa-circle-check"></i> {t('home.contactFormSuccess')}
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    required
                    placeholder={t('home.inputName')}
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    required
                    placeholder={t('home.inputPhone')}
                    value={contactData.phone}
                    onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="3"
                    required
                    placeholder={t('home.inputMsg')}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit-contact">
                  <i className="fa-brands fa-whatsapp"></i> {t('home.btnSendMsg')}
                </button>
              </form>
            )}

            <div className="direct-contact-details">
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <div>
                  <strong>{t('home.phoneLabel')}</strong>
                  <span><a href="tel:+919956120169" style={{ color: 'inherit' }}>+91 9956120169</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
