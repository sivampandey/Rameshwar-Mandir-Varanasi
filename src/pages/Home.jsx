import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useLiveStatus } from '../hooks/useLiveStatus';

const homeGalleryImages = [
  { id: 1, src: '/assets/images/gallery/gallery_silver_shivalinga.jpg' },
  { id: 2, src: '/assets/images/gallery/gallery_yogi_aarti_hawan.jpg' },
  { id: 3, src: '/assets/images/gallery/gallery_special_puja.jpg' },
  { id: 4, src: '/assets/images/gallery/gallery_ghat_aarti.jpg' },
  { id: 5, src: '/assets/images/gallery/gallery_sadhguru_visit.jpg' },
  { id: 6, src: '/assets/images/gallery/gallery_ghat_sunset_crowd.jpg' }
];

export default function Home() {
  const { lang, t } = useLanguage();
  const liveInfo = useLiveStatus(t, lang);
  const [copied, setCopied] = useState(false);
  const [contactData, setContactData] = useState({ name: '', phone: '', email: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [docModalSrc, setDocModalSrc] = useState(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [showWarnToast, setShowWarnToast] = useState(false);

  useEffect(() => {
    const handleBlur = () => setIsBlurred(true);
    const handleFocus = () => setIsBlurred(false);

    const handleKeyDown = (e) => {
      if (
        e.key === 'PrintScreen' ||
        e.code === 'PrintScreen' ||
        ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 's' || e.key === 'P' || e.key === 'S'))
      ) {
        if (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S') {
          e.preventDefault();
        }
        setIsBlurred(true);
        setShowWarnToast(true);
        setTimeout(() => {
          setIsBlurred(false);
          setShowWarnToast(false);
        }, 3500);
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        setIsBlurred(true);
        setShowWarnToast(true);
        setTimeout(() => {
          setIsBlurred(false);
          setShowWarnToast(false);
        }, 3500);
      }
    };

    window.addEventListener('blur', handleBlur);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('blur', handleBlur);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const trustCardsData = [
    {
      id: 1,
      icon: 'fa-file-invoice',
      label: t('home.trustCard1Label'),
      desc: t('home.trustCard1Desc'),
      detail1: t('home.trustCard1Detail1'),
      detail2: t('home.trustCard1Detail2'),
      src: '/assets/images/event_service_receipt.png'
    },
    {
      id: 2,
      icon: 'fa-id-card',
      label: t('home.trustCard2Label'),
      desc: t('home.trustCard2Desc'),
      detail1: t('home.trustCard2Detail1'),
      detail2: t('home.trustCard2Detail2'),
      src: '/assets/images/membership_card.png'
    },
    {
      id: 3,
      icon: 'fa-certificate',
      label: t('home.trustCard3Label'),
      desc: t('home.trustCard3Desc'),
      detail1: t('home.trustCard3Detail1'),
      detail2: t('home.trustCard3Detail2'),
      src: '/assets/images/donation_certificate.png'
    }
  ];
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % homeGalleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + homeGalleryImages.length) % homeGalleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % homeGalleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + homeGalleryImages.length) % homeGalleryImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

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

      {/* TEMPLE TRUST CARDS SECTION */}
      <section className="section-container trust-cards-section">
        {showWarnToast && (
          <div className="security-toast-warning">
            <i className="fa-solid fa-shield-halved"></i>
            <span>सुरक्षा चेतावनी: प्रपत्र/सदस्यता पत्र की प्रतिलिपि व स्क्रीनशॉट प्रतिबंधित है!</span>
          </div>
        )}

        <div className="trust-cards-header">
          <h2 className="trust-cards-title">{t('home.trustCardsTitle')}</h2>
          <p className="trust-cards-subtitle">{t('home.trustCardsSub')}</p>
        </div>

        <div className="trust-cards-grid">
          {trustCardsData.map((card) => (
            <div key={card.id} className="trust-card-item">
              <div className="trust-card-label">
                <i className={`fa-solid ${card.icon}`}></i>
                <span>{card.label}</span>
              </div>

              <div
                className={`trust-card-img-wrapper protected-doc ${isBlurred ? 'security-blurred' : ''}`}
                onClick={() => setDocModalSrc(card.src)}
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                title={t('home.btnViewDoc')}
              >
                <img
                  src={card.src}
                  alt={card.label}
                  loading="lazy"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
                <div className="doc-watermark-overlay" aria-hidden="true">
                  <span>PROTECTED • RAMESHWAR TRUST</span>
                </div>
                <div className="doc-hover-overlay">
                  <span className="doc-zoom-btn">
                    <i className="fa-solid fa-magnifying-glass-plus"></i> {t('home.btnViewDoc')}
                  </span>
                </div>
              </div>

              <div className="trust-card-body">
                <p className="trust-card-desc">{card.desc}</p>
                <ul className="trust-card-details">
                  <li><i className="fa-solid fa-circle-check"></i> <span>{card.detail1}</span></li>
                  <li><i className="fa-solid fa-circle-check"></i> <span>{card.detail2}</span></li>
                </ul>
                <button className="btn-trust-card-zoom" onClick={() => setDocModalSrc(card.src)}>
                  <i className="fa-solid fa-expand"></i> {t('home.btnViewDoc')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Document Lightbox Modal */}
        {docModalSrc && (
          <div className="simple-lightbox-backdrop" onClick={() => setDocModalSrc(null)}>
            <div
              className={`doc-lightbox-container protected-doc ${isBlurred ? 'security-blurred' : ''}`}
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <button className="simple-lightbox-close" onClick={() => setDocModalSrc(null)} title="Close">
                &times;
              </button>
              <img
                src={docModalSrc}
                alt="Full Document View"
                className="doc-lightbox-img"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
              <div className="doc-watermark-overlay modal-watermark" aria-hidden="true">
                <span>PROTECTED • SHRI RAMESHWAR MAHADEV TEMPLE TRUST</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className="home-gallery-section section-container">
        <div className="home-gallery-header">
          <h2 className="home-gallery-title">{t('home.galleryTag')}</h2>
        </div>

        <div className="home-gallery-grid">
          {homeGalleryImages.map((img, idx) => (
            <div
              key={img.id}
              className="home-gallery-card"
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={`${t('home.galleryTitle')} ${idx + 1}`} loading="lazy" />
              <div className="simple-gallery-hover-overlay">
                <span className="simple-zoom-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        <div className="home-gallery-cta">
          <Link to="/gallery" className="btn-home-gallery">
            <i className="fa-solid fa-images"></i> {t('home.btnViewGallery')}
          </Link>
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && homeGalleryImages[lightboxIndex] && (
          <div className="simple-lightbox-backdrop" onClick={closeLightbox}>
            <div className="simple-lightbox-container" onClick={(e) => e.stopPropagation()}>
              <button className="simple-lightbox-close" onClick={closeLightbox} title="Close">
                &times;
              </button>

              <button className="simple-lightbox-nav prev" onClick={prevImage} title="Previous">
                &#10094;
              </button>

              <div className="simple-lightbox-img-wrapper">
                <img
                  src={homeGalleryImages[lightboxIndex].src}
                  alt={`${t('home.galleryTitle')} ${lightboxIndex + 1}`}
                />
              </div>

              <button className="simple-lightbox-nav next" onClick={nextImage} title="Next">
                &#10095;
              </button>
            </div>
          </div>
        )}
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
                <img src="/assets/images/pandit_ji.png" alt="Peethadiswar Aachzrya Pandit Anup Tiwari Ji" className="priest-img" />
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
              <div className={`timing-block morning-block ${liveInfo.activeAarti === 'mangala' ? 'active-aarti-highlight' : ''}`}>
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

              <div className={`timing-block evening-block ${liveInfo.activeAarti === 'sandhya' ? 'active-aarti-highlight' : ''}`}>
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

            <div className={`live-status-pill ${liveInfo.badgeType}`}>
              <span className={`status-dot ${liveInfo.badgeType === 'live' ? 'pulsing-gold' : liveInfo.badgeType === 'open' ? 'green' : liveInfo.badgeType === 'rest' ? 'orange' : 'red'}`}></span>
              <span>{liveInfo.statusText}</span>
            </div>

            <div className="live-clock-sub">
              <span className="live-clock-time"><i className="fa-regular fa-clock"></i> {liveInfo.timeString}</span>
              <span className="next-aarti-text">{liveInfo.nextAartiText}</span>
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
