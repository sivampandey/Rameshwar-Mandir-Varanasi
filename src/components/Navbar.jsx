import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <header className={`navbar ${isScrolled ? 'shrunken' : ''}`} id="navbar">
        <div className="nav-container">
          <Link to="/" className="brand" onClick={closeDrawer}>
            <div className="brand-logo">
              <svg viewBox="0 0 100 100" className="temple-logo-svg">
                <path d="M50 5 L65 30 L80 30 L85 55 L95 55 L95 90 L5 90 L5 55 L15 55 L20 30 L35 30 Z" fill="url(#goldGradientNav)" stroke="#DAA520" strokeWidth="2"/>
                <path d="M50 15 L50 75 M40 35 L60 35 M45 45 L55 45" stroke="#4A0E0E" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="50" cy="10" r="5" fill="#FFD700"/>
                <defs>
                  <linearGradient id="goldGradientNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFD700"/>
                    <stop offset="50%" stopColor="#DAA520"/>
                    <stop offset="100%" stopColor="#B8860B"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="brand-text">
              <h1 className="temple-name">{t('nav.templeName')}</h1>
              <span className="temple-loc">{t('nav.templeLoc')}</span>
            </div>
          </Link>

          <nav className="nav-links">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>{t('nav.home')}</Link>
            <Link to="/intro" className={`nav-link ${location.pathname === '/intro' ? 'active' : ''}`}>{t('nav.intro')}</Link>
            <Link to="/history" className={`nav-link ${location.pathname === '/history' ? 'active' : ''}`}>{t('nav.history')}</Link>
            <Link to="/yatra" className={`nav-link ${location.pathname === '/yatra' ? 'active' : ''}`}>{t('nav.yatra')}</Link>
            <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>{t('nav.gallery')}</Link>
            <Link to="/timings" className={`nav-link ${location.pathname === '/timings' ? 'active' : ''}`}>{t('nav.timings')}</Link>
            <Link to="/priest" className={`nav-link ${location.pathname === '/priest' ? 'active' : ''}`}>{t('nav.priest')}</Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>{t('nav.contact')}</Link>
          </nav>

          <div className="nav-actions">
            {/* Language Switcher Button */}
            <button
              onClick={toggleLanguage}
              className="lang-btn-nav"
              title={lang === 'hi' ? 'Switch to English' : 'हिंदी में देखें'}
            >
              <i className="fa-solid fa-globe"></i>
              <span>{t('nav.langSwitch')}</span>
            </button>

            <Link to="/donate" className="donate-btn-nav">
              <span>{t('nav.donate')}</span>
              <i className="fa-solid fa-heart"></i>
            </Link>

            <button className="hamburger-btn" onClick={() => setDrawerOpen(true)} aria-label="Toggle Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${drawerOpen ? 'active' : ''}`}>
        <div className="mobile-drawer-header">
          <span className="mobile-drawer-title">{t('nav.templeName')}</span>
          <button className="close-drawer-btn" onClick={closeDrawer}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-nav-links">
          {/* Mobile Language Switcher */}
          <div className="mobile-lang-row">
            <button
              onClick={() => { setLang('hi'); closeDrawer(); }}
              className={`mobile-lang-btn ${lang === 'hi' ? 'active' : ''}`}
            >
              🇮🇳 हिंदी (Hindi)
            </button>
            <button
              onClick={() => { setLang('en'); closeDrawer(); }}
              className={`mobile-lang-btn ${lang === 'en' ? 'active' : ''}`}
            >
              🇬🇧 English
            </button>
          </div>

          <Link to="/" className="mobile-link" onClick={closeDrawer}>{t('nav.home')}</Link>
          <Link to="/intro" className="mobile-link" onClick={closeDrawer}>{t('nav.intro')}</Link>
          <Link to="/history" className="mobile-link" onClick={closeDrawer}>{t('nav.history')}</Link>
          <Link to="/yatra" className="mobile-link" onClick={closeDrawer}>{t('nav.yatra')}</Link>
          <Link to="/gallery" className="mobile-link" onClick={closeDrawer}>{t('nav.gallery')}</Link>
          <Link to="/timings" className="mobile-link" onClick={closeDrawer}>{t('nav.timings')}</Link>
          <Link to="/priest" className="mobile-link" onClick={closeDrawer}>{t('nav.priest')}</Link>
          <Link to="/contact" className="mobile-link" onClick={closeDrawer}>{t('nav.contact')}</Link>
        </div>

        <Link to="/donate" className="donate-btn-mobile" onClick={closeDrawer}>
          <span>{t('nav.donate')}</span> <i className="fa-solid fa-heart"></i>
        </Link>
      </div>
    </>
  );
}
