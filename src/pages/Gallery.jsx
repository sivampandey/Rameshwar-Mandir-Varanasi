import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useData } from '../context/DataContext';

export default function Gallery() {
  const { t } = useLanguage();
  const { galleryImages } = useData();

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
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
  }, [lightboxIndex, galleryImages.length]);

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
        {/* Dynamic Image Grid supporting ALL Aspect Ratios */}
        <div className="simple-gallery-grid">
          {galleryImages.map((img, idx) => {
            const fitModeClass = img.fitMode || 'contain-blur';
            return (
              <div
                key={img.id}
                className={`simple-gallery-card ${fitModeClass}`}
                onClick={() => openLightbox(idx)}
              >
                {/* Background Blur for contain-blur mode */}
                {fitModeClass === 'contain-blur' && (
                  <div className="gallery-blur-backdrop" style={{ backgroundImage: `url(${img.src})` }}></div>
                )}

                <img
                  src={img.src}
                  alt={img.title || `${t('gallery.title')} ${idx + 1}`}
                  loading="lazy"
                  className="gallery-main-img"
                />

                <div className="simple-gallery-hover-overlay">
                  <span className="simple-zoom-icon">🔍</span>
                  {img.title && <span className="gallery-hover-title">{img.title}</span>}
                </div>
              </div>
            );
          })}
        </div>

        {galleryImages.length === 0 && (
          <div className="no-images-notice">
            <p>गैलरी में अभी कोई फोटो नहीं है।</p>
          </div>
        )}

        {/* Fullscreen Aspect-Preserved Lightbox Modal */}
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
                  alt={galleryImages[lightboxIndex].title || 'Gallery View'}
                />
                {galleryImages[lightboxIndex].title && (
                  <div className="lightbox-caption-box">
                    <h4>{galleryImages[lightboxIndex].title}</h4>
                    {galleryImages[lightboxIndex].caption && <p>{galleryImages[lightboxIndex].caption}</p>}
                  </div>
                )}
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
