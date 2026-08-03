import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';

// Default fallback data for initial seed (12 valid existing gallery images)
const defaultGalleryImages = [
  { id: 1, title: 'चांदी के शिवलिंग का शृंगार', caption: 'विशेष आरती के समय दिव्य शृंगार दर्शन', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_silver_shivalinga.jpg', display_order: 1 },
  { id: 2, title: 'योगी जी महाआरती व हवन', caption: 'उत्तर प्रदेश के मुख्यमंत्री जी द्वारा विशेष पूजन', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_yogi_aarti_hawan.jpg', display_order: 2 },
  { id: 3, title: 'विशेष महापूजा एवं आरती', caption: 'मंदिर प्रांगण में विशेष आयोजन', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_special_puja.jpg', display_order: 3 },
  { id: 4, title: 'दंपति पूजन अनुष्ठान', caption: 'श्रद्धालुओं द्वारा विशेष अर्चन', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_couple_puja.jpg', display_order: 4 },
  { id: 5, title: 'घाट आरती एवं दीपदान', caption: 'वरुणा नदी तट पर संध्या आरती', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_ghat_aarti.jpg', display_order: 5 },
  { id: 6, title: 'सद्गुरु जी का आगमन', caption: 'सद्गुरु जग्गी वासुदेव जी का मंदिर दर्शन', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_sadhguru_visit.jpg', display_order: 6 },
  { id: 7, title: 'वरिष्ठ अतिथियों का स्वागत', caption: 'समिती द्वारा सम्मानित महानुभाव', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_dignitary_welcome.jpg', display_order: 7 },
  { id: 8, title: 'पुलिस प्रशासन दर्शन', caption: 'वरिष्ठ प्रशासनिक अधिकारियों की उपस्थिति', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_police_ips_visit.jpg', display_order: 8 },
  { id: 9, title: 'सूर्यास्त के समय घाट का दृश्य', caption: 'संध्या काल का विहंगम दृश्य', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_ghat_sunset_crowd.jpg', display_order: 9 },
  { id: 10, title: 'घाट पर उमड़ी अपार भीड़', caption: 'पर्व विशेष पर श्रद्धालुओं का तांता', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_ghat_crowd.jpg', display_order: 10 },
  { id: 11, title: 'पूज्य संतों का आशीर्वाद', caption: 'धर्म सभा एवं महामंडलेश्वरों का समागम', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_sant_ashirwad.jpg', display_order: 11 },
  { id: 12, title: 'प्रबंध समिति बैठक', caption: 'मंदिर विकास एवं व्यवस्था पर विचार विमर्श', fitMode: 'contain-blur', fit_mode: 'contain-blur', src: '/assets/images/gallery/gallery_samiti_baithak.jpg', display_order: 12 }
];

const defaultAnnouncements = [
  {
    title: 'महाशिवरात्रि महोत्सव 2026',
    text: 'आगामी महाशिवरात्रि पर्व पर विशेष भस्म आरती एवं 24 घंटे अखंड दर्शन व्यवस्था रहेगी।',
    type: 'urgent',
    date: '2026-02-15',
    active: true
  },
  {
    title: 'सावन सोमवार विशेष व्यवस्था',
    text: 'श्रावण मास के प्रत्येक सोमवार को प्रातः 4:00 बजे से मंगला आरती होगी।',
    type: 'info',
    date: '2026-07-01',
    active: true
  }
];

const defaultTimings = [
  { name: 'मंगला आरती (Mangala Aarti)', time: 'प्रातः 05:00 AM - 05:30 AM', description: 'प्रातःकालीन प्रथम आरती एवं शृंगार दर्शन', display_order: 1 },
  { name: 'सामान्य दर्शन (General Darshan)', time: 'प्रातः 05:30 AM - 12:00 PM', description: 'श्रद्धालुओं के लिए जलाभिषेक व दर्शन खुला', display_order: 2 },
  { name: 'भोग एवं मध्याह्न विश्राम', time: 'दोपहर 12:00 PM - 04:00 PM', description: 'मंदिर के कपाट दर्शन हेतु बंद रहते हैं', display_order: 3 },
  { name: 'संध्या आरती (Sandhya Aarti)', time: 'संध्या 06:30 PM - 07:15 PM', description: 'वरुणा नदी तट एवं मंदिर में भव्य संध्या आरती', display_order: 4 },
  { name: 'रात्रि शयन आरती (Shayan Aarti)', time: 'रात्रि 09:00 PM - 09:30 PM', description: 'दिन की अंतिम आरती के पश्चात कपाट बंद', display_order: 5 }
];

const defaultFestivals = [
  {
    name: 'महाशिवरात्रि महोत्सव',
    date: 'फाल्गुन कृष्ण चतुर्दशी',
    description: 'वर्ष का सबसे विशाल उत्सव। बाबा रामेश्वर महादेव का भव्य शृंगार, अखंड कीर्तन, तथा 56 भोग का आयोजन।',
    image: '/assets/images/gallery/gallery_silver_shivalinga.jpg',
    display_order: 1
  },
  {
    name: 'श्रावण मास मेला (सावन मेला)',
    date: 'श्रावण मास (पूरा महीना)',
    description: 'लाखों कांवड़िए गंगा/वरुणा जल लाकर जलाभिषेक करते हैं। पूरे माह विशेष जलाभिषेक एवं रुद्राभिषेक।',
    image: '/assets/images/gallery/gallery_special_puja.jpg',
    display_order: 2
  },
  {
    name: 'कार्तिक पूर्णिमा देव दीपावली',
    date: 'कार्तिक शुक्ल पूर्णिमा',
    description: 'रामेश्वर घाट पर 51,000 मिट्टी के दीयों से महा आरती एवं दीपदान उत्सव।',
    image: '/assets/images/gallery/gallery_ghat_aarti.jpg',
    display_order: 3
  }
];

const defaultImportantInfo = {
  phone_primary: '+91 94505 43210',
  phone_secondary: '+91 98390 12345',
  email: 'info@rameshwarmandirvaranasi.org',
  address: 'रामेश्वर महादेव मंदिर, वरुणा नदी तट, रामेश्वर, वाराणसी, उत्तर प्रदेश - 221102',
  upi_id: 'rameshwar.mandir@sbi',
  samiti_head: 'श्री 1008 महंत जी एवं प्रबंध समिति',
  notice_bar_active: true
};

const DataContext = createContext();

export function DataProvider({ children }) {
  const [galleryImages, setGalleryImages] = useState(defaultGalleryImages);
  const [announcements, setAnnouncements] = useState(defaultAnnouncements);
  const [templeTimings, setTempleTimings] = useState(defaultTimings);
  const [festivals, setFestivals] = useState(defaultFestivals);
  const [importantInfo, setImportantInfo] = useState(defaultImportantInfo);
  const [loading, setLoading] = useState(true);

  // Helper to upload image files to Supabase Storage
  const uploadImageFile = async (file) => {
    try {
      if (!file || typeof file === 'string') return file; // If already URL/string, return directly

      const fileExt = file.name ? file.name.split('.').pop() : 'png';
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      const { data, error } = await supabase.storage
        .from('temple-images')
        .upload(filePath, file, { cacheControl: '3600', upsert: true });

      if (error) {
        console.warn('Storage upload warning, using direct URL:', error.message);
        return file;
      }

      const { data: publicUrlData } = supabase.storage
        .from('temple-images')
        .getPublicUrl(filePath);

      return publicUrlData?.publicUrl || file;
    } catch (err) {
      console.error('Error in uploadImageFile:', err);
      return file;
    }
  };

  // Fetch all data from Supabase Database
  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);

      // Fetch Gallery Images
      const { data: imgData, error: imgErr } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: true });

      if (!imgErr && imgData && imgData.length > 0) {
        // Map database fields to application shape
        setGalleryImages(imgData.map(img => ({
          id: img.id,
          title: img.title,
          caption: img.caption,
          fitMode: img.fit_mode || img.fitMode || 'contain-blur',
          fit_mode: img.fit_mode || img.fitMode || 'contain-blur',
          src: img.src,
          date: new Date(img.created_at || Date.now()).toLocaleDateString('hi-IN')
        })));
      } else if (!imgErr && imgData && imgData.length === 0) {
        // Seed default gallery images if empty
        console.log('Seeding initial gallery images to Supabase...');
        const payload = defaultGalleryImages.map(({ id, fitMode, ...rest }) => rest);
        await supabase.from('gallery_images').insert(payload);
      }

      // Fetch Announcements
      const { data: annData, error: annErr } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false });

      if (!annErr && annData && annData.length > 0) {
        setAnnouncements(annData);
      } else if (!annErr && annData && annData.length === 0) {
        console.log('Seeding initial announcements to Supabase...');
        await supabase.from('announcements').insert(defaultAnnouncements);
      }

      // Fetch Temple Timings
      const { data: timingData, error: timingErr } = await supabase
        .from('temple_timings')
        .select('*')
        .order('display_order', { ascending: true });

      if (!timingErr && timingData && timingData.length > 0) {
        setTempleTimings(timingData.map(t => ({
          id: t.id,
          name: t.name,
          time: t.time,
          desc: t.description || t.desc
        })));
      } else if (!timingErr && timingData && timingData.length === 0) {
        console.log('Seeding initial temple timings to Supabase...');
        await supabase.from('temple_timings').insert(defaultTimings);
      }

      // Fetch Festivals
      const { data: festData, error: festErr } = await supabase
        .from('festivals')
        .select('*')
        .order('display_order', { ascending: true });

      if (!festErr && festData && festData.length > 0) {
        setFestivals(festData.map(f => ({
          id: f.id,
          name: f.name,
          date: f.date,
          desc: f.description || f.desc,
          image: f.image
        })));
      } else if (!festErr && festData && festData.length === 0) {
        console.log('Seeding initial festivals to Supabase...');
        await supabase.from('festivals').insert(defaultFestivals);
      }

      // Fetch Important Info
      const { data: infoData, error: infoErr } = await supabase
        .from('important_info')
        .select('*')
        .limit(1);

      if (!infoErr && infoData && infoData.length > 0) {
        const info = infoData[0];
        setImportantInfo({
          phonePrimary: info.phone_primary,
          phoneSecondary: info.phone_secondary,
          email: info.email,
          address: info.address,
          upiId: info.upi_id,
          samitiHead: info.samiti_head,
          noticeBarActive: info.notice_bar_active
        });
      } else if (!infoErr && infoData && infoData.length === 0) {
        console.log('Seeding initial important info to Supabase...');
        await supabase.from('important_info').insert([defaultImportantInfo]);
      }
    } catch (err) {
      console.error('Error fetching data from Supabase:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllData();

    // Supabase Real-Time Subscriptions across all tables
    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'gallery_images' }, () => fetchAllData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'announcements' }, () => fetchAllData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'temple_timings' }, () => fetchAllData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'festivals' }, () => fetchAllData())
      .on('postgres_changes', { event: '*', schema: 'public', table: 'important_info' }, () => fetchAllData())
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchAllData]);

  // Gallery CRUD Operations
  const addImage = async (newImg) => {
    let finalSrc = newImg.src;
    if (newImg.file) {
      finalSrc = await uploadImageFile(newImg.file);
    }

    const payload = {
      title: newImg.title || 'रामेश्वर मंदिर चित्र',
      caption: newImg.caption || '',
      fit_mode: newImg.fitMode || newImg.fit_mode || 'contain-blur',
      src: finalSrc,
      display_order: galleryImages.length + 1
    };

    // Optimistic UI update
    const tempId = Date.now();
    const tempObj = { id: tempId, title: payload.title, caption: payload.caption, fitMode: payload.fit_mode, fit_mode: payload.fit_mode, src: payload.src, date: new Date().toLocaleDateString('hi-IN') };
    setGalleryImages(prev => [...prev, tempObj]);

    const { data: inserted, error } = await supabase
      .from('gallery_images')
      .insert([payload])
      .select();

    if (error) {
      console.error('Error inserting gallery image to Supabase:', error);
    } else if (inserted && inserted[0]) {
      setGalleryImages(prev => prev.map(img => img.id === tempId ? { ...img, id: inserted[0].id } : img));
    }
  };

  const deleteImage = async (id) => {
    setGalleryImages(prev => prev.filter(img => img.id !== id));
    const { error } = await supabase.from('gallery_images').delete().eq('id', id);
    if (error) console.error('Error deleting image from Supabase:', error);
  };

  const updateImageFitMode = async (id, newFitMode) => {
    setGalleryImages(prev => prev.map(img => img.id === id ? { ...img, fitMode: newFitMode, fit_mode: newFitMode } : img));
    const { error } = await supabase.from('gallery_images').update({ fit_mode: newFitMode }).eq('id', id);
    if (error) console.error('Error updating image fit mode in Supabase:', error);
  };

  const updateImage = async (id, updatedFields) => {
    setGalleryImages(prev => prev.map(img => img.id === id ? { ...img, ...updatedFields } : img));
    const dbPayload = {};
    if (updatedFields.title !== undefined) dbPayload.title = updatedFields.title;
    if (updatedFields.caption !== undefined) dbPayload.caption = updatedFields.caption;
    if (updatedFields.fitMode !== undefined) dbPayload.fit_mode = updatedFields.fitMode;
    if (updatedFields.src !== undefined) dbPayload.src = updatedFields.src;

    const { error } = await supabase.from('gallery_images').update(dbPayload).eq('id', id);
    if (error) console.error('Error updating image details in Supabase:', error);
  };

  // Announcement CRUD Operations
  const addAnnouncement = async (ann) => {
    const payload = {
      title: ann.title,
      text: ann.text,
      type: ann.type || 'info',
      date: ann.date || new Date().toISOString().split('T')[0],
      active: true
    };

    const tempId = Date.now();
    setAnnouncements(prev => [ { id: tempId, ...payload }, ...prev ]);

    const { data: inserted, error } = await supabase
      .from('announcements')
      .insert([payload])
      .select();

    if (error) {
      console.error('Error inserting announcement into Supabase:', error);
    } else if (inserted && inserted[0]) {
      setAnnouncements(prev => prev.map(a => a.id === tempId ? inserted[0] : a));
    }
  };

  const deleteAnnouncement = async (id) => {
    setAnnouncements(prev => prev.filter(a => a.id !== id));
    const { error } = await supabase.from('announcements').delete().eq('id', id);
    if (error) console.error('Error deleting announcement from Supabase:', error);
  };

  const toggleAnnouncement = async (id) => {
    const currentAnn = announcements.find(a => a.id === id);
    const newActiveState = currentAnn ? !currentAnn.active : false;
    setAnnouncements(prev => prev.map(a => a.id === id ? { ...a, active: newActiveState } : a));

    const { error } = await supabase.from('announcements').update({ active: newActiveState }).eq('id', id);
    if (error) console.error('Error toggling announcement in Supabase:', error);
  };

  // Timings CRUD Operations
  const updateTimings = async (newTimings) => {
    setTempleTimings(newTimings);

    // Update each timing row in Supabase
    for (let i = 0; i < newTimings.length; i++) {
      const item = newTimings[i];
      const payload = {
        name: item.name,
        time: item.time,
        description: item.desc || item.description || '',
        display_order: i + 1
      };
      if (item.id && typeof item.id === 'string' && item.id.length > 20) {
        await supabase.from('temple_timings').update(payload).eq('id', item.id);
      } else {
        await supabase.from('temple_timings').insert([payload]);
      }
    }
  };

  // Festivals CRUD Operations
  const addFestival = async (fest) => {
    let finalImage = fest.image || '/assets/images/gallery/gallery_silver_shivalinga.jpg';
    if (fest.file) {
      finalImage = await uploadImageFile(fest.file);
    }

    const payload = {
      name: fest.name,
      date: fest.date,
      description: fest.desc || fest.description || '',
      image: finalImage,
      display_order: festivals.length + 1
    };

    const tempId = Date.now();
    setFestivals(prev => [...prev, { id: tempId, name: payload.name, date: payload.date, desc: payload.description, image: payload.image }]);

    const { data: inserted, error } = await supabase
      .from('festivals')
      .insert([payload])
      .select();

    if (error) {
      console.error('Error inserting festival into Supabase:', error);
    } else if (inserted && inserted[0]) {
      setFestivals(prev => prev.map(f => f.id === tempId ? { ...f, id: inserted[0].id } : f));
    }
  };

  const deleteFestival = async (id) => {
    setFestivals(prev => prev.filter(f => f.id !== id));
    const { error } = await supabase.from('festivals').delete().eq('id', id);
    if (error) console.error('Error deleting festival from Supabase:', error);
  };

  // Important Info CRUD Operation
  const updateImportantInfo = async (info) => {
    setImportantInfo(prev => ({ ...prev, ...info }));
    const dbPayload = {
      phone_primary: info.phonePrimary !== undefined ? info.phonePrimary : info.phone_primary,
      phone_secondary: info.phoneSecondary !== undefined ? info.phoneSecondary : info.phone_secondary,
      email: info.email,
      address: info.address,
      upi_id: info.upiId !== undefined ? info.upiId : info.upi_id,
      samiti_head: info.samitiHead !== undefined ? info.samitiHead : info.samiti_head,
      notice_bar_active: info.noticeBarActive !== undefined ? info.noticeBarActive : info.notice_bar_active
    };

    const { data: existing } = await supabase.from('important_info').select('id').limit(1);
    if (existing && existing.length > 0) {
      await supabase.from('important_info').update(dbPayload).eq('id', existing[0].id);
    } else {
      await supabase.from('important_info').insert([dbPayload]);
    }
  };

  return (
    <DataContext.Provider value={{
      galleryImages,
      announcements,
      templeTimings,
      festivals,
      importantInfo,
      loading,
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
      uploadImageFile
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
