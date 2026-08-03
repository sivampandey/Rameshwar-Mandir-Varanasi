import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { useLanguage } from '../context/LanguageContext';

export default function Admin() {
  const { lang, setLang, t } = useLanguage();
  const {
    galleryImages,
    announcements,
    templeTimings,
    festivals,
    addImage,
    deleteImage,
    updateImage,
    updateImageFitMode,
    addAnnouncement,
    deleteAnnouncement,
    toggleAnnouncement,
    updateTimings,
    addFestival,
    deleteFestival
  } = useData();

  // Authentication State (Username + Password)
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('rameshwar_admin_auth') === 'true';
  });
  const [userIdInput, setUserIdInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Tab
  const [activeTab, setActiveTab] = useState('images');

  // Form States
  // Image Upload Form
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [imageCaption, setImageCaption] = useState('');
  const [imageFitMode, setImageFitMode] = useState('contain-blur');

  // Image Edit Form Modal State
  const [editingImg, setEditingImg] = useState(null);
  const [editFile, setEditFile] = useState(null);
  const [editPreview, setEditPreview] = useState('');

  // Announcement Form
  const [annTitle, setAnnTitle] = useState('');
  const [annText, setAnnText] = useState('');
  const [annType, setAnnType] = useState('info');

  // Timings Form State
  const [timingsList, setTimingsList] = useState(templeTimings);

  // Festival Form State
  const [festName, setFestName] = useState('');
  const [festDate, setFestDate] = useState('');
  const [festDesc, setFestDesc] = useState('');
  const [festImage, setFestImage] = useState('/assets/images/gallery/gallery_silver_shivalinga.jpg');

  // Status Message Toast
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 3000);
  };

  // ID & Password Login Handler (ID: Rameshwar | Pass: admin1234)
  const handleLogin = (e) => {
    e.preventDefault();
    const formattedId = userIdInput.trim().toLowerCase();
    const formattedPass = passwordInput.trim();

    if (formattedId === 'rameshwar' && formattedPass === 'admin1234') {
      setIsAuthenticated(true);
      sessionStorage.setItem('rameshwar_admin_auth', 'true');
      setAuthError('');
      showToast(t('admin.authSuccess'));
    } else {
      setAuthError(t('admin.authError'));
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('rameshwar_admin_auth');
  };

  const toggleLanguage = () => {
    setLang(lang === 'hi' ? 'en' : 'hi');
  };

  // Image Upload File Handler
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('इमेज 5MB से छोटी होनी चाहिए।', 'error');
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    if (!imagePreview) {
      showToast('कृपया पहले इमेज चुनें! (Please select an image)', 'error');
      return;
    }
    addImage({
      title: imageTitle || 'रामेश्वर मंदिर चित्र',
      caption: imageCaption,
      fitMode: imageFitMode,
      src: imagePreview
    });
    setImageFile(null);
    setImagePreview('');
    setImageTitle('');
    setImageCaption('');
    showToast('इमेज अंत में (Last में) सफलतापूर्वक जोड़ी गई!');
  };

  // EDIT IMAGE HANDLERS
  const startEditImage = (img) => {
    setEditingImg({ ...img });
    setEditPreview(img.src);
    setEditFile(null);
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showToast('इमेज 5MB से छोटी होनी चाहिए।', 'error');
        return;
      }
      setEditFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveEditImage = (e) => {
    e.preventDefault();
    if (!editingImg) return;
    updateImage(editingImg.id, {
      title: editingImg.title,
      caption: editingImg.caption,
      fitMode: editingImg.fitMode,
      src: editPreview || editingImg.src
    });
    setEditingImg(null);
    setEditPreview('');
    setEditFile(null);
    showToast('फोटो विवरण अद्यतन कर दिया गया!');
  };

  // Announcement Handler
  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!annTitle || !annText) {
      showToast('शीर्षक और विवरण आवश्यक है', 'error');
      return;
    }
    addAnnouncement({
      title: annTitle,
      text: annText,
      type: annType
    });
    setAnnTitle('');
    setAnnText('');
    showToast('सूचना सफलता से प्रकाशित की गई!');
  };

  // Timing save handler
  const handleSaveTimings = (e) => {
    e.preventDefault();
    updateTimings(timingsList);
    showToast('आरती एवं दर्शन समय अद्यतन किया गया!');
  };

  const handleTimingChange = (index, field, value) => {
    const updated = [...timingsList];
    updated[index][field] = value;
    setTimingsList(updated);
  };

  // Festival add handler
  const handleAddFestival = (e) => {
    e.preventDefault();
    if (!festName || !festDate) {
      showToast('उत्सव का नाम एवं तिथि आवश्यक है', 'error');
      return;
    }
    addFestival({
      name: festName,
      date: festDate,
      desc: festDesc,
      image: festImage
    });
    setFestName('');
    setFestDate('');
    setFestDesc('');
    showToast('नया उत्सव जोड़ा गया!');
  };

  // LOGIN SCREEN
  if (!isAuthenticated) {
    return (
      <main className="admin-page-main">
        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="admin-login-header">
              <span className="mantra-badge">|| श्री रामेश्वर महादेव ||</span>
              <h2>{t('admin.loginTitle')}</h2>
              <p>{t('admin.loginSub')}</p>
            </div>

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="form-group">
                <label htmlFor="userIdInput">{t('admin.idLabel')}</label>
                <input
                  type="text"
                  id="userIdInput"
                  className="form-control"
                  placeholder={t('admin.idPlaceholder')}
                  value={userIdInput}
                  onChange={(e) => setUserIdInput(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="adminPassword">{t('admin.passLabel')}</label>
                <input
                  type="password"
                  id="adminPassword"
                  className="form-control"
                  placeholder={t('admin.passPlaceholder')}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                />
              </div>

              {authError && <div className="auth-error-alert">{authError}</div>}

              <button type="submit" className="admin-submit-btn">
                <i className="fa-solid fa-right-to-bracket"></i> {t('admin.loginBtn')}
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  // MAIN ADMIN DASHBOARD
  return (
    <main className="admin-page-main">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`toast-notification ${toast.type}`}>
          <i className={toast.type === 'error' ? 'fa-solid fa-triangle-exclamation' : 'fa-solid fa-circle-check'}></i>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Admin Hero Header */}
      <section className="admin-dashboard-hero">
        <div className="admin-hero-content">
          <div className="admin-title-row">
            <div>
              <span className="mantra-badge">{t('admin.heroTag')}</span>
              <h1>{t('admin.heroTitle')}</h1>
            </div>
            <div className="admin-hero-actions">
              <button onClick={toggleLanguage} className="admin-secondary-btn">
                <i className="fa-solid fa-globe"></i> {lang === 'hi' ? 'English' : 'हिंदी'}
              </button>
              <button onClick={handleLogout} className="admin-logout-btn">
                <i className="fa-solid fa-right-from-bracket"></i> {t('admin.logoutBtn')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="section-container">
        {/* Navigation Tabs */}
        <div className="admin-tabs-nav">
          <button
            className={`admin-tab-btn ${activeTab === 'images' ? 'active' : ''}`}
            onClick={() => setActiveTab('images')}
          >
            <i className="fa-solid fa-images"></i> {t('admin.tabGallery')} ({galleryImages.length})
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'announcements' ? 'active' : ''}`}
            onClick={() => setActiveTab('announcements')}
          >
            <i className="fa-solid fa-bullhorn"></i> {t('admin.tabNotice')} ({announcements.length})
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'timings' ? 'active' : ''}`}
            onClick={() => setActiveTab('timings')}
          >
            <i className="fa-solid fa-clock"></i> {t('admin.tabTimings')}
          </button>

          <button
            className={`admin-tab-btn ${activeTab === 'festivals' ? 'active' : ''}`}
            onClick={() => setActiveTab('festivals')}
          >
            <i className="fa-solid fa-om"></i> {t('admin.tabFestivals')}
          </button>
        </div>

        {/* TAB 1: IMAGES MANAGEMENT (Upload, Edit, Delete) */}
        {activeTab === 'images' && (
          <div className="admin-tab-content">
            {/* Upload New Image Box */}
            <div className="admin-card-box">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-cloud-arrow-up"></i> {t('admin.uploadTitle')}
              </h3>
              <p className="admin-card-subtitle">{t('admin.uploadSub')}</p>

              <form onSubmit={handleAddImage} className="admin-form-grid">
                <div className="form-group full-width">
                  <label>{t('admin.fileLabel')}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="file-input-control"
                  />
                </div>

                {imagePreview && (
                  <div className="form-group full-width preview-container">
                    <label>{t('admin.previewLabel')}</label>
                    <div className={`aspect-preview-box ${imageFitMode}`}>
                      {imageFitMode === 'contain-blur' && (
                        <div className="preview-blur-bg" style={{ backgroundImage: `url(${imagePreview})` }}></div>
                      )}
                      <img src={imagePreview} alt="Preview" className="preview-img-element" />
                    </div>
                  </div>
                )}

                <div className="form-group">
                  <label>{t('admin.titleLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="उदा. आरती दर्शन, शिवलिंग शृंगार"
                    value={imageTitle}
                    onChange={(e) => setImageTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>{t('admin.fitLabel')}</label>
                  <select
                    className="form-control"
                    value={imageFitMode}
                    onChange={(e) => setImageFitMode(e.target.value)}
                  >
                    <option value="contain-blur">{t('admin.fitBlur')}</option>
                    <option value="cover">{t('admin.fitCover')}</option>
                    <option value="contain">{t('admin.fitContain')}</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>{t('admin.captionLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="संक्षिप्त विवरण दर्ज करें"
                    value={imageCaption}
                    onChange={(e) => setImageCaption(e.target.value)}
                  />
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="admin-submit-btn">
                    <i className="fa-solid fa-plus"></i> {t('admin.submitUploadBtn')}
                  </button>
                </div>
              </form>
            </div>

            {/* List of existing uploaded images with Edit & Delete */}
            <div className="admin-card-box mt-6">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-photo-film"></i> {t('admin.existingTitle')} ({galleryImages.length})
              </h3>

              <div className="admin-image-manage-grid">
                {galleryImages.map((img) => (
                  <div key={img.id} className="admin-image-manage-card">
                    <div className={`admin-img-thumb-wrap ${img.fitMode || 'contain-blur'}`}>
                      {img.fitMode === 'contain-blur' && (
                        <div className="thumb-blur-bg" style={{ backgroundImage: `url(${img.src})` }}></div>
                      )}
                      <img src={img.src} alt={img.title} />
                    </div>

                    <div className="admin-img-info">
                      <h4>{img.title}</h4>
                      {img.caption && <p>{img.caption}</p>}

                      <div className="fit-selector-mini">
                        <label>फिट मोड:</label>
                        <select
                          value={img.fitMode || 'contain-blur'}
                          onChange={(e) => updateImageFitMode(img.id, e.target.value)}
                          className="mini-select"
                        >
                          <option value="contain-blur">Blur Backdrop</option>
                          <option value="cover">Fill Crop</option>
                          <option value="contain">Center Frame</option>
                        </select>
                      </div>

                      <div className="admin-img-action-buttons">
                        <button
                          onClick={() => startEditImage(img)}
                          className="admin-edit-btn"
                          title="Edit Image Details"
                        >
                          <i className="fa-solid fa-pen-to-square"></i> {t('admin.editBtn')}
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`क्या आप "${img.title}" फोटो को डिलीट करना चाहते हैं?`)) {
                              deleteImage(img.id);
                              showToast('फोटो डिलीट कर दी गई');
                            }
                          }}
                          className="admin-delete-btn"
                          title="Delete Image"
                        >
                          <i className="fa-solid fa-trash"></i> {t('admin.deleteBtn')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* EDIT IMAGE MODAL DIALOG */}
        {editingImg && (
          <div className="admin-modal-backdrop" onClick={() => setEditingImg(null)}>
            <div className="admin-modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="admin-modal-header">
                <h3><i className="fa-solid fa-pen-to-square"></i> {t('admin.editModalTitle')}</h3>
                <button className="modal-close-btn" onClick={() => setEditingImg(null)}>&times;</button>
              </div>

              <form onSubmit={handleSaveEditImage} className="admin-form-grid">
                <div className="form-group full-width preview-container">
                  <label>{t('admin.previewLabel')}</label>
                  <div className={`aspect-preview-box ${editingImg.fitMode || 'contain-blur'}`}>
                    {editingImg.fitMode === 'contain-blur' && (
                      <div className="preview-blur-bg" style={{ backgroundImage: `url(${editPreview})` }}></div>
                    )}
                    <img src={editPreview} alt="Edit preview" className="preview-img-element" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>{t('admin.replaceFileLabel')}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEditFileChange}
                    className="file-input-control"
                  />
                </div>

                <div className="form-group">
                  <label>{t('admin.titleLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingImg.title}
                    onChange={(e) => setEditingImg({ ...editingImg, title: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label>{t('admin.fitLabel')}</label>
                  <select
                    className="form-control"
                    value={editingImg.fitMode || 'contain-blur'}
                    onChange={(e) => setEditingImg({ ...editingImg, fitMode: e.target.value })}
                  >
                    <option value="contain-blur">{t('admin.fitBlur')}</option>
                    <option value="cover">{t('admin.fitCover')}</option>
                    <option value="contain">{t('admin.fitContain')}</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>{t('admin.captionLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    value={editingImg.caption || ''}
                    onChange={(e) => setEditingImg({ ...editingImg, caption: e.target.value })}
                  />
                </div>

                <div className="form-group full-width admin-modal-actions">
                  <button type="submit" className="admin-submit-btn">
                    <i className="fa-solid fa-floppy-disk"></i> {t('admin.saveChangesBtn')}
                  </button>
                  <button type="button" className="admin-cancel-btn" onClick={() => setEditingImg(null)}>
                    {t('admin.cancelBtn')}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: ANNOUNCEMENTS & NOTICES */}
        {activeTab === 'announcements' && (
          <div className="admin-tab-content">
            <div className="admin-card-box">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-bullhorn"></i> {t('admin.addNoticeTitle')}
              </h3>

              <form onSubmit={handleAddAnnouncement} className="admin-form-grid">
                <div className="form-group">
                  <label>{t('admin.noticeTitleLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="उदा. महाशिवरात्रि 2026 विशेष दर्शन"
                    value={annTitle}
                    onChange={(e) => setAnnTitle(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>{t('admin.noticeTypeLabel')}</label>
                  <select
                    className="form-control"
                    value={annType}
                    onChange={(e) => setAnnType(e.target.value)}
                  >
                    <option value="urgent">{t('admin.typeUrgent')}</option>
                    <option value="info">{t('admin.typeInfo')}</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>{t('admin.noticeTextLabel')}</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="सूचना का पूरा विवरण लिखें..."
                    value={annText}
                    onChange={(e) => setAnnText(e.target.value)}
                  />
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="admin-submit-btn">
                    <i className="fa-solid fa-paper-plane"></i> {t('admin.publishNoticeBtn')}
                  </button>
                </div>
              </form>
            </div>

            <div className="admin-card-box mt-6">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-list-check"></i> {t('admin.activeNoticesTitle')}
              </h3>

              <div className="announcements-list-admin">
                {announcements.map((item) => (
                  <div key={item.id} className={`announcement-admin-item ${item.type}`}>
                    <div className="ann-admin-content">
                      <span className={`ann-badge ${item.type}`}>
                        {item.type === 'urgent' ? '🚨 अर्जेंट' : 'ℹ️ सूचना'}
                      </span>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                      <small>दिनांक: {item.date}</small>
                    </div>

                    <div className="ann-admin-actions">
                      <button
                        onClick={() => toggleAnnouncement(item.id)}
                        className={`toggle-btn ${item.active ? 'active' : 'inactive'}`}
                      >
                        {item.active ? 'वेबसाइट पर दृश्य (Visible)' : 'छिपा हुआ (Hidden)'}
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm('क्या आप इस सूचना को हटाना चाहते हैं?')) {
                            deleteAnnouncement(item.id);
                            showToast('सूचना हटा दी गई');
                          }
                        }}
                        className="admin-delete-btn"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: TEMPLE TIMINGS */}
        {activeTab === 'timings' && (
          <div className="admin-tab-content">
            <div className="admin-card-box">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-clock"></i> {t('admin.tabTimings')}
              </h3>

              <form onSubmit={handleSaveTimings} className="admin-timings-form">
                {timingsList.map((timing, idx) => (
                  <div key={timing.id || idx} className="timing-row-admin">
                    <div className="form-group">
                      <label>आरती/अनुष्ठान का नाम:</label>
                      <input
                        type="text"
                        className="form-control"
                        value={timing.name}
                        onChange={(e) => handleTimingChange(idx, 'name', e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label>समय (Time):</label>
                      <input
                        type="text"
                        className="form-control"
                        value={timing.time}
                        onChange={(e) => handleTimingChange(idx, 'time', e.target.value)}
                      />
                    </div>

                    <div className="form-group full-width-sm">
                      <label>विवरण (Description):</label>
                      <input
                        type="text"
                        className="form-control"
                        value={timing.desc}
                        onChange={(e) => handleTimingChange(idx, 'desc', e.target.value)}
                      />
                    </div>
                  </div>
                ))}

                <button type="submit" className="admin-submit-btn mt-4">
                  <i className="fa-solid fa-floppy-disk"></i> {t('admin.saveAllTimingsBtn')}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 4: FESTIVALS & EVENTS */}
        {activeTab === 'festivals' && (
          <div className="admin-tab-content">
            <div className="admin-card-box">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-om"></i> {t('admin.addFestivalTitle')}
              </h3>

              <form onSubmit={handleAddFestival} className="admin-form-grid">
                <div className="form-group">
                  <label>{t('admin.festNameLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="उदा. श्रावण सोमवार मेला"
                    value={festName}
                    onChange={(e) => setFestName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>{t('admin.festDateLabel')}</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="उदा. श्रावण मास"
                    value={festDate}
                    onChange={(e) => setFestDate(e.target.value)}
                  />
                </div>

                <div className="form-group full-width">
                  <label>{t('admin.festDescLabel')}</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="उत्सव की मुख्य विशेषताएं लिखें..."
                    value={festDesc}
                    onChange={(e) => setFestDesc(e.target.value)}
                  />
                </div>

                <div className="form-group full-width">
                  <button type="submit" className="admin-submit-btn">
                    <i className="fa-solid fa-plus"></i> {t('admin.addFestBtn')}
                  </button>
                </div>
              </form>
            </div>

            <div className="admin-card-box mt-6">
              <h3 className="admin-card-title">
                <i className="fa-solid fa-dharmachakra"></i> {t('admin.festListTitle')}
              </h3>

              <div className="festivals-admin-grid">
                {festivals.map((fest) => (
                  <div key={fest.id} className="fest-admin-card">
                    <h4>{fest.name}</h4>
                    <span className="fest-date-tag"><i className="fa-solid fa-calendar"></i> {fest.date}</span>
                    <p>{fest.desc}</p>
                    <button
                      onClick={() => {
                        if (window.confirm(`क्या आप "${fest.name}" उत्सव हटाना चाहते हैं?`)) {
                          deleteFestival(fest.id);
                          showToast('उत्सव हटा दिया गया');
                        }
                      }}
                      className="admin-delete-btn mt-2"
                    >
                      <i className="fa-solid fa-trash"></i> {t('admin.deleteBtn')}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
