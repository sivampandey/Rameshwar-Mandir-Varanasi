import React, { createContext, useContext, useState, useEffect } from 'react';

// Default initial data fallback
const defaultGalleryImages = [
  { id: 1, title: 'चांदी के शिवलिंग का शृंगार', caption: 'विशेष आरती के समय दिव्य शृंगार दर्शन', category: 'Shringar', fitMode: 'cover', src: '/assets/images/gallery/gallery_silver_shivalinga.jpg' },
  { id: 2, title: 'योगी जी महाआरती व हवन', caption: 'उत्तर प्रदेश के मुख्यमंत्री जी द्वारा विशेष पूजन', category: 'Puja', fitMode: 'cover', src: '/assets/images/gallery/gallery_yogi_aarti_hawan.jpg' },
  { id: 3, title: 'विशेष महापूजा एवं आरती', caption: 'मंदिर प्रांगण में विशेष आयोजन', category: 'Puja', fitMode: 'cover', src: '/assets/images/gallery/gallery_special_puja.jpg' },
  { id: 4, title: 'दंपति पूजन अनुष्ठान', caption: 'श्रद्धालुओं द्वारा विशेष अर्चन', category: 'Puja', fitMode: 'cover', src: '/assets/images/gallery/gallery_couple_puja.jpg' },
  { id: 5, title: 'घाट आरती एवं दीपदान', caption: 'वरुणा नदी तट पर संध्या आरती', category: 'Aarti', fitMode: 'cover', src: '/assets/images/gallery/gallery_ghat_aarti.jpg' },
  { id: 6, title: 'सद्गुरु जी का आगमन', caption: 'सद्गुरु जग्गी वासुदेव जी का मंदिर दर्शन', category: 'VIP', fitMode: 'cover', src: '/assets/images/gallery/gallery_sadhguru_visit.jpg' },
  { id: 7, title: 'वरिष्ठ अतिथियों का स्वागत', caption: 'समिती द्वारा सम्मानित महानुभाव', category: 'Samiti', fitMode: 'cover', src: '/assets/images/gallery/gallery_dignitary_welcome.jpg' },
  { id: 8, title: 'पुलिस प्रशासन दर्शन', caption: 'वरिष्ठ प्रशासनिक अधिकारियों की उपस्थिति', category: 'VIP', fitMode: 'cover', src: '/assets/images/gallery/gallery_police_ips_visit.jpg' },
  { id: 9, title: 'सूर्यास्त के समय घाट का दृश्य', caption: 'संध्या काल का विहंगम दृश्य', category: 'Ghat', fitMode: 'cover', src: '/assets/images/gallery/gallery_ghat_sunset_crowd.jpg' },
  { id: 10, title: 'घाट पर उमड़ी अपार भीड़', caption: 'पर्व विशेष पर श्रद्धालुओं का तांता', category: 'Ghat', fitMode: 'cover', src: '/assets/images/gallery/gallery_ghat_crowd.jpg' },
  { id: 11, title: 'पूज्य संतों का आशीर्वाद', caption: 'धर्म सभा एवं महामंडलेश्वरों का समागम', category: 'VIP', fitMode: 'cover', src: '/assets/images/gallery/gallery_sant_ashirwad.jpg' },
  { id: 12, title: 'प्रबंध समिति बैठक', caption: 'मंदिर विकास एवं व्यवस्था पर विचार विमर्श', category: 'Samiti', fitMode: 'cover', src: '/assets/images/gallery/gallery_samiti_baithak.jpg' }
];

const defaultAnnouncements = [
  {
    id: 1,
    title: 'महाशिवरात्रि महोत्सव 2026',
    text: 'आगामी महाशिवरात्रि पर्व पर विशेष भस्म आरती एवं 24 घंटे अखंड दर्शन व्यवस्था रहेगी।',
    type: 'urgent',
    date: '2026-02-15',
    active: true
  },
  {
    id: 2,
    title: 'सावन सोमवार विशेष व्यवस्था',
    text: 'श्रावण मास के प्रत्येक सोमवार को प्रातः 4:00 बजे से मंगला आरती होगी।',
    type: 'info',
    date: '2026-07-01',
    active: true
  }
];

const defaultTimings = [
  { id: 1, name: 'मंगला आरती (Mangala Aarti)', time: 'प्रातः 05:00 AM - 05:30 AM', desc: 'प्रातःकालीन प्रथम आरती एवं शृंगार दर्शन' },
  { id: 2, name: 'सामान्य दर्शन (General Darshan)', time: 'प्रातः 05:30 AM - 12:00 PM', desc: 'श्रद्धालुओं के लिए जलाभिषेक व दर्शन खुला' },
  { id: 3, name: 'भोग एवं मध्याह्न विश्राम', time: 'दोपहर 12:00 PM - 04:00 PM', desc: 'मंदिर के कपाट दर्शन हेतु बंद रहते हैं' },
  { id: 4, name: 'संध्या आरती (Sandhya Aarti)', time: 'संध्या 06:30 PM - 07:15 PM', desc: 'वरुणा नदी तट एवं मंदिर में भव्य संध्या आरती' },
  { id: 5, name: 'रात्रि शयन आरती (Shayan Aarti)', time: 'रात्रि 09:00 PM - 09:30 PM', desc: 'दिन की अंतिम आरती के पश्चात कपाट बंद' }
];

const defaultFestivals = [
  {
    id: 1,
    name: 'महाशिवरात्रि महोत्सव',
    date: 'फाल्गुन कृष्ण चतुर्दशी',
    desc: 'वर्ष का सबसे विशाल उत्सव। बाबा रामेश्वर महादेव का भव्य शृंगार, अखंड कीर्तन, तथा 56 भोग का आयोजन।',
    image: '/assets/images/gallery/gallery_silver_shivalinga.jpg'
  },
  {
    id: 2,
    name: 'श्रावण मास मेला (सावन मेला)',
    date: 'श्रावण मास (पूरा महीना)',
    desc: 'लाखों कांवड़िए गंगा/वरुणा जल लाकर जलाभिषेक करते हैं। पूरे माह विशेष जलाभिषेक एवं रुद्राभिषेक।',
    image: '/assets/images/gallery/gallery_special_puja.jpg'
  },
  {
    id: 3,
    name: 'कार्तिक पूर्णिमा देव दीपावली',
    date: 'कार्तिक शुक्ल पूर्णिमा',
    desc: 'रामेश्वर घाट पर 51,000 मिट्टी के दीयों से महा आरती एवं दीपदान उत्सव।',
    image: '/assets/images/gallery/gallery_ghat_aarti.jpg'
  }
];

const defaultImportantInfo = {
  phonePrimary: '+91 94505 43210',
  phoneSecondary: '+91 98390 12345',
  email: 'info@rameshwarmandirvaranasi.org',
  address: 'रामेश्वर महादेव मंदिर, वरुणा नदी तट, रामेश्वर, वाराणसी, उत्तर प्रदेश - 221102',
  upiId: 'rameshwar.mandir@sbi',
  samitiHead: 'श्री 1008 महंत जी एवं प्रबंध समिति',
  noticeBarActive: true
};

const STORAGE_KEY = 'rameshwar_mandir_dynamic_data_v1';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Error loading data from localStorage', e);
    }
    return {
      galleryImages: defaultGalleryImages,
      announcements: defaultAnnouncements,
      templeTimings: defaultTimings,
      festivals: defaultFestivals,
      importantInfo: defaultImportantInfo
    };
  });

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving data to localStorage', e);
    }
  }, [data]);

  // Gallery methods
  const addImage = (newImg) => {
    const imgObj = {
      id: Date.now(),
      title: newImg.title || 'रामेश्वर मंदिर चित्र',
      caption: newImg.caption || '',
      fitMode: newImg.fitMode || 'contain-blur', // default contain-blur so no image is ever cropped accidentally
      src: newImg.src,
      date: new Date().toLocaleDateString('hi-IN')
    };
    setData(prev => ({
      ...prev,
      galleryImages: [...prev.galleryImages, imgObj]
    }));
  };

  const deleteImage = (id) => {
    setData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.filter(img => img.id !== id)
    }));
  };

  const updateImageFitMode = (id, newFitMode) => {
    setData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.map(img => img.id === id ? { ...img, fitMode: newFitMode } : img)
    }));
  };

  const updateImage = (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      galleryImages: prev.galleryImages.map(img => img.id === id ? { ...img, ...updatedFields } : img)
    }));
  };

  // Announcement methods
  const addAnnouncement = (ann) => {
    const newAnn = {
      id: Date.now(),
      title: ann.title,
      text: ann.text,
      type: ann.type || 'info',
      date: ann.date || new Date().toISOString().split('T')[0],
      active: true
    };
    setData(prev => ({
      ...prev,
      announcements: [newAnn, ...prev.announcements]
    }));
  };

  const deleteAnnouncement = (id) => {
    setData(prev => ({
      ...prev,
      announcements: prev.announcements.filter(a => a.id !== id)
    }));
  };

  const toggleAnnouncement = (id) => {
    setData(prev => ({
      ...prev,
      announcements: prev.announcements.map(a => a.id === id ? { ...a, active: !a.active } : a)
    }));
  };

  // Timings methods
  const updateTimings = (newTimings) => {
    setData(prev => ({
      ...prev,
      templeTimings: newTimings
    }));
  };

  // Festivals methods
  const addFestival = (fest) => {
    const newFest = {
      id: Date.now(),
      name: fest.name,
      date: fest.date,
      desc: fest.desc,
      image: fest.image || '/assets/images/gallery/gallery_silver_shivalinga.jpg'
    };
    setData(prev => ({
      ...prev,
      festivals: [...prev.festivals, newFest]
    }));
  };

  const deleteFestival = (id) => {
    setData(prev => ({
      ...prev,
      festivals: prev.festivals.filter(f => f.id !== id)
    }));
  };

  // Important Info method
  const updateImportantInfo = (info) => {
    setData(prev => ({
      ...prev,
      importantInfo: { ...prev.importantInfo, ...info }
    }));
  };

  // Backup & Reset
  const resetToDefaults = () => {
    const defaultData = {
      galleryImages: defaultGalleryImages,
      announcements: defaultAnnouncements,
      templeTimings: defaultTimings,
      festivals: defaultFestivals,
      importantInfo: defaultImportantInfo
    };
    setData(defaultData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
  };

  const exportDataJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rameshwar_mandir_backup_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const importDataJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.galleryImages && parsed.importantInfo) {
        setData(parsed);
        return true;
      }
    } catch (e) {
      console.error('Failed to import JSON', e);
    }
    return false;
  };

  return (
    <DataContext.Provider value={{
      galleryImages: data.galleryImages,
      announcements: data.announcements,
      templeTimings: data.templeTimings,
      festivals: data.festivals,
      importantInfo: data.importantInfo,
      addImage,
      deleteImage,
      updateImage,
      updateImageFitMode,
      addAnnouncement,
      deleteAnnouncement,
      toggleAnnouncement,
      updateTimings,
      addFestival,
      deleteFestival,
      updateImportantInfo,
      resetToDefaults,
      exportDataJSON,
      importDataJSON
    }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
