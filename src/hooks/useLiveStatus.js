import { useState, useEffect } from 'react';

export function useLiveStatus(t, lang) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  let statusKey = 'liveStatusOpen';
  let badgeType = 'open'; // 'live', 'open', 'rest', 'closed'
  let activeAarti = null; // 'mangala', 'bhog', 'sandhya', 'shayan'
  let nextAartiText = '';

  // Exact Rameshwar Mahadev Temple Varanasi Daily Schedule
  if (currentMinutes >= 300 && currentMinutes < 360) {
    // 05:00 AM - 06:00 AM
    statusKey = 'liveStatusMangala';
    badgeType = 'live';
    activeAarti = 'mangala';
    nextAartiText = lang === 'hi' ? 'अगली आरती: भोग आरती (12:00 PM)' : 'Next Aarti: Bhog Aarti (12:00 PM)';
  } else if (currentMinutes >= 360 && currentMinutes < 720) {
    // 06:00 AM - 12:00 PM
    statusKey = 'liveStatusOpen';
    badgeType = 'open';
    nextAartiText = lang === 'hi' ? 'अगली आरती: भोग आरती (12:00 PM)' : 'Next Aarti: Bhog Aarti (12:00 PM)';
  } else if (currentMinutes >= 720 && currentMinutes < 750) {
    // 12:00 PM - 12:30 PM
    statusKey = 'liveStatusBhog';
    badgeType = 'live';
    activeAarti = 'bhog';
    nextAartiText = lang === 'hi' ? 'अगली आरती: संध्या महाआरती (07:00 PM)' : 'Next Aarti: Sandhya Maha Aarti (07:00 PM)';
  } else if (currentMinutes >= 750 && currentMinutes < 960) {
    // 12:30 PM - 04:00 PM (Midday Rest)
    statusKey = 'liveStatusMiddayRest';
    badgeType = 'rest';
    nextAartiText = lang === 'hi' ? 'अगली आरती: संध्या महाआरती (07:00 PM)' : 'Next Aarti: Sandhya Maha Aarti (07:00 PM)';
  } else if (currentMinutes >= 960 && currentMinutes < 1140) {
    // 04:00 PM - 07:00 PM
    statusKey = 'liveStatusOpen';
    badgeType = 'open';
    nextAartiText = lang === 'hi' ? 'अगली आरती: संध्या महाआरती (07:00 PM)' : 'Next Aarti: Sandhya Maha Aarti (07:00 PM)';
  } else if (currentMinutes >= 1140 && currentMinutes < 1215) {
    // 07:00 PM - 08:15 PM
    statusKey = 'liveStatusSandhya';
    badgeType = 'live';
    activeAarti = 'sandhya';
    nextAartiText = lang === 'hi' ? 'अगली आरती: शयन आरती (09:30 PM)' : 'Next Aarti: Shayan Aarti (09:30 PM)';
  } else if (currentMinutes >= 1215 && currentMinutes < 1290) {
    // 08:15 PM - 09:30 PM
    statusKey = 'liveStatusOpen';
    badgeType = 'open';
    nextAartiText = lang === 'hi' ? 'अगली आरती: शयन आरती (09:30 PM)' : 'Next Aarti: Shayan Aarti (09:30 PM)';
  } else if (currentMinutes >= 1290 && currentMinutes < 1320) {
    // 09:30 PM - 10:00 PM
    statusKey = 'liveStatusShayan';
    badgeType = 'live';
    activeAarti = 'shayan';
    nextAartiText = lang === 'hi' ? 'अगली आरती: मंगला आरती (प्रातः 05:00 AM)' : 'Next Aarti: Mangala Aarti (05:00 AM)';
  } else {
    // 10:00 PM - 05:00 AM (Night Closing)
    statusKey = 'liveStatusNightClosed';
    badgeType = 'closed';
    nextAartiText = lang === 'hi' ? 'अगली आरती: मंगला आरती (प्रातः 05:00 AM)' : 'Next Aarti: Mangala Aarti (05:00 AM)';
  }

  const timeString = now.toLocaleTimeString(lang === 'hi' ? 'hi-IN' : 'en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return {
    now,
    timeString,
    statusText: t(`home.${statusKey}`),
    badgeType,
    activeAarti,
    nextAartiText
  };
}
