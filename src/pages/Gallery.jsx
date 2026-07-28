import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const galleryImages = [
  { id: 1, src: '/assets/images/gallery/gallery_silver_shivalinga.jpg' },
  { id: 2, src: '/assets/images/gallery/gallery_yogi_aarti_hawan.jpg' },
  { id: 3, src: '/assets/images/gallery/gallery_special_puja.jpg' },
  { id: 4, src: '/assets/images/gallery/gallery_couple_puja.jpg' },
  { id: 5, src: '/assets/images/gallery/gallery_ghat_aarti.jpg' },
  { id: 6, src: '/assets/images/gallery/gallery_sadhguru_visit.jpg' },
  { id: 7, src: '/assets/images/gallery/gallery_dignitary_welcome.jpg' },
  { id: 8, src: '/assets/images/gallery/gallery_police_ips_visit.jpg' },
  { id: 9, src: '/assets/images/gallery/gallery_ghat_sunset_crowd.jpg' },
  { id: 10, src: '/assets/images/gallery/gallery_ghat_crowd.jpg' },
  { id: 11, src: '/assets/images/gallery/gallery_sant_ashirwad.jpg' },
  { id: 12, src: '/assets/images/gallery/gallery_samiti_baithak.jpg' }
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  return (
    <main>
      <section className="page-hero-header">
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <span className="mantra-badge">|| ॐ नमः शिवाय ||</span>
          <h1 className="page-hero-title">{t('gallery.title')}</h1>
          <p className="page-hero-sub">{t('gallery.sub')}</p>
        </div>
      </section>

      <div className="section-container">
        {/* Simple Pure Image Grid */}
        <div className="simple-gallery-grid">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className="simple-gallery-card"
              onClick={() => openLightbox(idx)}
            >
              <img src={img.src} alt={`${t('gallery.title')} ${idx + 1}`} loading="lazy" />
              <div className="simple-gallery-hover-overlay">
                <span className="simple-zoom-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Lightbox Modal */}
        {lightboxIndex !== null && galleryImages[lightboxIndex] && (
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
                  src={galleryImages[lightboxIndex].src}
                  alt={`${t('gallery.title')} ${lightboxIndex + 1}`}
                />
              </div>

              <button className="simple-lightbox-nav next" onClick={nextImage} title="Next">
                &#10095;
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
