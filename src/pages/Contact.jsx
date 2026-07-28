import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const textMsg = `Shri Rameshwar Mahadev Temple\n\n${t('contact.inputNameLabel')}: ${formData.name}\n${t('contact.inputPhoneLabel')}: ${formData.phone}\n${t('contact.inputEmailLabel')}: ${formData.email}\n${t('contact.inputMessageLabel')}: ${formData.message}`;
    const whatsappUrl = `https://wa.me/919956120169?text=${encodeURIComponent(textMsg)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('contact.title')}</h1>
          <p className="page-hero-sub">{t('contact.sub')}</p>
        </div>
      </section>

      <div className="section-container page-detail-container">
        <div className="detail-grid">
          <div className="detail-main-card">
            <h2>{t('contact.heading')}</h2>

            {submitted ? (
              <div className="form-success-msg margin-bottom-20">
                <i className="fa-solid fa-circle-check"></i> {t('contact.formSuccess')}
              </div>
            ) : (
              <form className="contact-form-page" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t('contact.inputNameLabel')}</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder={t('contact.inputNamePlaceholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">{t('contact.inputPhoneLabel')}</label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder={t('contact.inputPhonePlaceholder')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('contact.inputEmailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    placeholder={t('contact.inputEmailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">{t('contact.inputMessageLabel')}</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder={t('contact.inputMessagePlaceholder')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  <i className="fa-brands fa-whatsapp"></i> {t('contact.btnSubmit')}
                </button>
              </form>
            )}

            <h3 className="sub-heading-gold margin-top-40">{t('contact.reachHeading')}</h3>
            <div className="reach-info-grid">
              <div className="reach-card">
                <i className="fa-solid fa-train"></i>
                <h4>{t('contact.trainTitle')}</h4>
                <p>{t('contact.trainDesc')}</p>
              </div>

              <div className="reach-card">
                <i className="fa-solid fa-plane"></i>
                <h4>{t('contact.flightTitle')}</h4>
                <p>{t('contact.flightDesc')}</p>
              </div>

              <div className="reach-card">
                <i className="fa-solid fa-bus"></i>
                <h4>{t('contact.roadTitle')}</h4>
                <p>{t('contact.roadDesc')}</p>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>{t('contact.sidebarTitle')}</h3>
              <ul className="sidebar-info-list">
                <li><i className="fa-solid fa-location-dot"></i> <strong>{t('contact.addressLabel')}</strong> {t('contact.addressValue')}</li>
                <li><i className="fa-solid fa-phone"></i> <strong>{t('contact.phoneLabel')}</strong> <a href="tel:+919956120169" style={{color:'inherit', fontWeight:'bold'}}>+91 9956120169</a></li>
                <li><i className="fa-solid fa-user"></i> <strong>{t('contact.priestLabel')}</strong> {t('contact.priestValue')}</li>
                <li><i className="fa-solid fa-envelope"></i> <strong>{t('contact.emailLabel')}</strong> {t('contact.emailValue')}</li>
              </ul>
            </div>

            <div className="sidebar-card map-side-box">
              <h3>{t('contact.mapTitle')}</h3>
              <iframe
                src="https://maps.google.com/maps?q=25.3876631,82.8547374&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
              <a
                href="https://www.google.com/maps/place/Shri+Rameshwar+Mahadev+Temple+-+Kashi+Panchkroshi+II+(Halt+No:+3)/@25.3876631,82.5663463,11z/data=!4m10!1m2!2m1!1sRameshwar+Mahadev+Temple+Panchkoshi+Marg+Varanasi!3m6!1s0x398fd385c10dfce3:0xba9a2f80b97baaff!8m2!3d25.3876631!4d82.8547374!15sCjFSYW1lc2h3YXIgTWFoYWRldiBUZW1wbGUgUGFuY2hrb3NoaSBNYXJnIFZhcmFuYXNpkgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F124yrbdl5?entry=ttu&g_ep=EgoyMDI2MDcyVi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block margin-top-10"
              >
                {t('contact.btnGoogleMaps')}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
