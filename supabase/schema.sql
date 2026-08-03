-- ============================================================================
-- RAMESHWAR MAHADEV MANDIR - SUPABASE DATABASE SCHEMA & RLS POLICIES
-- ============================================================================

-- 1. GALLERY IMAGES TABLE
CREATE TABLE IF NOT EXISTS public.gallery_images (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL DEFAULT 'रामेश्वर मंदिर चित्र',
    caption TEXT DEFAULT '',
    fit_mode TEXT DEFAULT 'contain-blur',
    src TEXT NOT NULL,
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. ANNOUNCEMENTS TABLE
CREATE TABLE IF NOT EXISTS public.announcements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    text TEXT NOT NULL,
    type TEXT DEFAULT 'info', -- 'urgent' or 'info'
    active BOOLEAN DEFAULT true,
    date TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. TEMPLE TIMINGS TABLE
CREATE TABLE IF NOT EXISTS public.temple_timings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    time TEXT NOT NULL,
    description TEXT DEFAULT '',
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 4. FESTIVALS TABLE
CREATE TABLE IF NOT EXISTS public.festivals (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    date TEXT NOT NULL,
    description TEXT DEFAULT '',
    image TEXT DEFAULT '',
    display_order INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- 5. IMPORTANT INFO TABLE
CREATE TABLE IF NOT EXISTS public.important_info (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phone_primary TEXT DEFAULT '+91 94505 38870',
    phone_secondary TEXT DEFAULT '+91 98391 23456',
    email TEXT DEFAULT 'contact@rameshwarmandirvaranasi.org',
    address TEXT DEFAULT 'रामेश्वर महादेव मंदिर, वरुणा तट, पंचक्रोशी मार्ग, वाराणसी, उत्तर प्रदेश 221105',
    upi_id TEXT DEFAULT 'rameshwar.mandir@upi',
    samiti_head TEXT DEFAULT 'श्री रमेश चंद्र तिवारी (अध्यक्ष)',
    notice_bar_active BOOLEAN DEFAULT true,
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ============================================================================

-- Enable RLS on all tables
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.temple_timings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.festivals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.important_info ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if re-running
DROP POLICY IF EXISTS "Public Read Access for gallery_images" ON public.gallery_images;
DROP POLICY IF EXISTS "Admin Full Access for gallery_images" ON public.gallery_images;

DROP POLICY IF EXISTS "Public Read Access for announcements" ON public.announcements;
DROP POLICY IF EXISTS "Admin Full Access for announcements" ON public.announcements;

DROP POLICY IF EXISTS "Public Read Access for temple_timings" ON public.temple_timings;
DROP POLICY IF EXISTS "Admin Full Access for temple_timings" ON public.temple_timings;

DROP POLICY IF EXISTS "Public Read Access for festivals" ON public.festivals;
DROP POLICY IF EXISTS "Admin Full Access for festivals" ON public.festivals;

DROP POLICY IF EXISTS "Public Read Access for important_info" ON public.important_info;
DROP POLICY IF EXISTS "Admin Full Access for important_info" ON public.important_info;

-- Create Policies
-- Public SELECT Access (Everyone can read)
CREATE POLICY "Public Read Access for gallery_images" ON public.gallery_images FOR SELECT USING (true);
CREATE POLICY "Public Read Access for announcements" ON public.announcements FOR SELECT USING (true);
CREATE POLICY "Public Read Access for temple_timings" ON public.temple_timings FOR SELECT USING (true);
CREATE POLICY "Public Read Access for festivals" ON public.festivals FOR SELECT USING (true);
CREATE POLICY "Public Read Access for important_info" ON public.important_info FOR SELECT USING (true);

-- Authenticated & Public Service Write Access (For Admin Operations)
CREATE POLICY "Admin Full Access for gallery_images" ON public.gallery_images FOR ALL USING (true);
CREATE POLICY "Admin Full Access for announcements" ON public.announcements FOR ALL USING (true);
CREATE POLICY "Admin Full Access for temple_timings" ON public.temple_timings FOR ALL USING (true);
CREATE POLICY "Admin Full Access for festivals" ON public.festivals FOR ALL USING (true);
CREATE POLICY "Admin Full Access for important_info" ON public.important_info FOR ALL USING (true);

-- ============================================================================
-- INITIAL SEED DATA (Valid File Paths)
-- ============================================================================

INSERT INTO public.gallery_images (title, caption, fit_mode, src, display_order)
VALUES
('चांदी के शिवलिंग का शृंगार', 'विशेष आरती के समय दिव्य शृंगार दर्शन', 'contain-blur', '/assets/images/gallery/gallery_silver_shivalinga.jpg', 1),
('योगी जी महाआरती व हवन', 'उत्तर प्रदेश के मुख्यमंत्री जी द्वारा विशेष पूजन', 'contain-blur', '/assets/images/gallery/gallery_yogi_aarti_hawan.jpg', 2),
('विशेष महापूजा एवं आरती', 'मंदिर प्रांगण में विशेष आयोजन', 'contain-blur', '/assets/images/gallery/gallery_special_puja.jpg', 3),
('दंपति पूजन अनुष्ठान', 'श्रद्धालुओं द्वारा विशेष अर्चन', 'contain-blur', '/assets/images/gallery/gallery_couple_puja.jpg', 4),
('घाट आरती एवं दीपदान', 'वरुणा नदी तट पर संध्या आरती', 'contain-blur', '/assets/images/gallery/gallery_ghat_aarti.jpg', 5),
('सद्गुरु जी का आगमन', 'सद्गुरु जग्गी वासुदेव जी का मंदिर दर्शन', 'contain-blur', '/assets/images/gallery/gallery_sadhguru_visit.jpg', 6),
('वरिष्ठ अतिथियों का स्वागत', 'समिती द्वारा सम्मानित महानुभाव', 'contain-blur', '/assets/images/gallery/gallery_dignitary_welcome.jpg', 7),
('पुलिस प्रशासन दर्शन', 'वरिष्ठ प्रशासनिक अधिकारियों की उपस्थिति', 'contain-blur', '/assets/images/gallery/gallery_police_ips_visit.jpg', 8),
('सूर्यास्त के समय घाट का दृश्य', 'संध्या काल का विहंगम दृश्य', 'contain-blur', '/assets/images/gallery/gallery_ghat_sunset_crowd.jpg', 9),
('घाट पर उमड़ी अपार भीड़', 'पर्व विशेष पर श्रद्धालुओं का तांता', 'contain-blur', '/assets/images/gallery/gallery_ghat_crowd.jpg', 10),
('पूज्य संतों का आशीर्वाद', 'धर्म सभा एवं महामंडलेश्वरों का समागम', 'contain-blur', '/assets/images/gallery/gallery_sant_ashirwad.jpg', 11),
('प्रबंध समिति बैठक', 'मंदिर विकास एवं व्यवस्था पर विचार विमर्श', 'contain-blur', '/assets/images/gallery/gallery_samiti_baithak.jpg', 12)
ON CONFLICT DO NOTHING;

INSERT INTO public.announcements (title, text, type, active, date)
VALUES
('🚨 महाशिवरात्रि 2026 विशेष दर्शन समय', 'महाशिवरात्रि के पावन पर्व पर मंदिर के कपाट प्रातः 04:00 बजे से रात्रि 11:00 बजे तक निरंतर दर्शन हेतु खुले रहेंगे। सभी श्रद्धालुओं से निवेदन है कि कतारबद्ध होकर दर्शन करें।', 'urgent', true, '18 Feb 2026'),
('✨ पंचक्रोशी यात्रा तृतीय पड़ाव सेवा शिविर', 'रामेश्वर तीर्थ पर पधारने वाले सभी पदयात्रियों हेतु मंदिर समिति द्वारा निःशुल्क भोजन, चिकित्सा एवं रात्रि विश्राम की संपूर्ण व्यवस्था की गई है।', 'info', true, '15 Feb 2026'),
('🔔 सावन मास विशेष रुद्राभिषेक बुकिंग प्रारंभ', 'श्रावण मास में प्रतिदिन होने वाले विशेष रुद्राभिषेक एवं शृंगार हेतु अग्रिम बुकिंग प्रारंभ हो चुकी है। मंदिर कार्यालय से संपर्क करें।', 'info', true, '10 Feb 2026')
ON CONFLICT DO NOTHING;

INSERT INTO public.temple_timings (name, time, description, display_order)
VALUES
('मंगला आरती', 'प्रातः 05:00 - 05:30 बजे', 'प्रातः कालीन प्रथम आरती एवं शृंगार दर्शन', 1),
('प्रातः दर्शन', 'प्रातः 05:30 - दोपहर 12:00 बजे', 'सामान्य दर्शन एवं जलाभिषेक समय', 2),
('भोग आरती एवं कपाट बंद', 'दोपहर 12:00 - 04:00 बजे', 'मध्याह्न भोग एवं मंदिर विश्राम काल', 3),
('संध्या आरती व शृंगार', 'संध्या 06:30 - 07:15 बजे', 'भव्य महाआरती एवं अलौकिक शृंगार', 4),
('शयन आरती', 'रात्रि 09:00 - 09:30 बजे', 'दिवस की अंतिम आरती व कपाट बंद', 5)
ON CONFLICT DO NOTHING;

INSERT INTO public.festivals (name, date, description, image, display_order)
VALUES
('महाशिवरात्रि', 'फाल्गुन कृष्ण चतुर्दशी', 'वर्ष का सबसे बड़ा उत्सव। अखंड संकीर्तन, चार प्रहर की महापूजा एवं जलाभिषेक।', '/assets/images/gallery/gallery_silver_shivalinga.jpg', 1),
('श्रावण मास मेला', 'श्रावण (जुलाई-अगस्त)', 'पूरे सावन महीने में लाखों कांवड़ियों व श्रद्धालुओं का जलाभिषेक एवं प्रतिदिन विशेष शृंगार।', '/assets/images/gallery/gallery_special_puja.jpg', 2),
('कार्तिक पूर्णिमा देव दीपावली', 'कार्तिक शुक्ल पूर्णिमा', 'रामेश्वर घाट पर 51,000 मिट्टी के दीयों से महा आरती एवं दीपदान उत्सव।', '/assets/images/gallery/gallery_ghat_aarti.jpg', 3)
ON CONFLICT DO NOTHING;

INSERT INTO public.important_info (phone_primary, phone_secondary, email, address, upi_id, samiti_head, notice_bar_active)
VALUES
('+91 94505 38870', '+91 98391 23456', 'contact@rameshwarmandirvaranasi.org', 'रामेश्वर महादेव मंदिर, वरुणा तट, पंचक्रोशी मार्ग, वाराणसी, उत्तर प्रदेश 221105', 'rameshwar.mandir@upi', 'श्री रमेश चंद्र तिवारी (अध्यक्ष)', true)
ON CONFLICT DO NOTHING;
