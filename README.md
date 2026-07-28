# 🛕 Shri Rameshwar Mahadev Temple, Varanasi (श्री रामेश्वर महादेव मंदिर)

[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF.svg)](https://vitejs.dev/)
[![Language](https://img.shields.io/badge/Bilingual-Hindi%20%7C%20English-orange.svg)](#-bilingual-localization)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](#)

A modern, high-performance, and visually stunning web application for **Shri Rameshwar Mahadev Temple**, situated on the banks of the sacred Varuna River along the ancient Panchkoshi Parikrama route in Varanasi (Kashi), Uttar Pradesh.

---

## 🌟 Key Features

- **🌐 Bilingual Localization (Hindi & English)**:
  - Toggle between Hindi (`hi`) and English (`en`) seamlessly with dynamic text and font adjustments.
  - Automatic language preference saving via `localStorage`.
  - Royal serif typography for English headings (*Cinzel*) and traditional Devanagari fonts (*Noto Serif Devanagari* / *Outfit*) for Hindi.

- **📜 Authentic Historical & Mythological Lore**:
  - Verified details from the **Skanda Purana (Kashi Khanda)** regarding Lord Shri Rama consecrating the *Valuka Shivalinga* (Sand Linga) to seek redemption from *Brahmahatya Dosha*.
  - Historical architectural background detailing Maratha constructions by **Maharani Ahilyabai Holkar** and the **Scindia Maratha Dynasty**.

- **🚶‍♂️ Panchkoshi Parikrama Yatra Guide**:
  - Comprehensive breakdown of the 88-km (15 krosh) 108-temple pilgrimage.
  - Highlights Rameshwar Mahadev as the **3rd Major Overnight Halt (Halt No. 3)** on the Varuna River bank.
  - Interactive timeline showing all 5 primary halts (*Kardameshwar ➔ Bhimchandi ➔ Rameshwar Mahadev ➔ Pancho Pandav ➔ Kapildhara*).

- **🎪 Lota-Bhanta Mela & Annakshetra**:
  - Detailed insights into the famous annual Margashirsha festival where devotees cook Baati-Chokha in earthen pots on the Varuna banks as Prasad.

- **⏰ Aarti & Temple Timings**:
  - Real-time status indicator (Open / Closed).
  - Detailed daily schedules for Mangala Aarti, Bhog Aarti, Sandhya Aarti, and Shayan Aarti.

- **🙏 Head Priest Profile (Pt. Anoop Tiwari)**:
  - Direct contact info for ritual bookings, Rudrabhishek, Kaal Sarp Dosh Nivaran, and spiritual consultations.
  - One-click **Direct WhatsApp Chat** and **Direct Phone Call** integration (+91 9956120169).

- **📸 Clean Photo Gallery**:
  - Grid of high-resolution authentic temple photographs.
  - Fullscreen modal Lightbox viewer with Next / Previous image navigation.

- **💳 Digital Donations (Daan & Annakshetra Seva)**:
  - Exact cropped UPI QR Code for instant donations via Google Pay, PhonePe, Paytm, and BHIM.
  - Registered Merchant Details: Union Bank of India (`QR917007370522-1875@unionbankofindia`).

- **📱 Fully Responsive Mobile-First Design**:
  - Compact e-commerce style grid layouts on mobile viewports.
  - Hamburger drawer menu (`☰`) with language switcher for smartphones and tablets.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 18
- **Build Tool / Dev Server**: Vite 5
- **Styling**: Custom Vanilla CSS3 (Design Tokens, Glassmorphism, CSS Grid & Flexbox)
- **Icons**: Font Awesome 6 Pro & Line Icons
- **Fonts**: Google Fonts (*Cinzel*, *Poppins*, *Noto Serif Devanagari*, *Outfit*)

---

## 📁 Project Structure

```text
Rameshwar_Mandir/
├── public/
│   ├── assets/
│   │   ├── images/         # High-resolution temple photos, yatra graphics, priest portrait
│   │   └── qr/             # Official UPI QR Code image (upi_qr_code.png)
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.jsx      # Header navigation bar with language toggle & mobile drawer
│   │   └── Footer.jsx      # Footer with quick links, contacts, and copyright
│   ├── context/
│   │   └── LanguageContext.jsx  # Multi-language provider & translation dictionary
│   ├── pages/              # Page view components
│   │   ├── Home.jsx        # Landing page with hero, cards grid, yatra timeline
│   │   ├── Intro.jsx       # Detailed Temple Introduction
│   │   ├── History.jsx     # Mythology & History details
│   │   ├── Yatra.jsx       # 88-km Panchkoshi Yatra details
│   │   ├── Gallery.jsx     # Photo gallery with lightbox viewer
│   │   ├── Timings.jsx     # Aarti & Temple opening schedule
│   │   ├── Priest.jsx      # Head Priest profile & services
│   │   ├── Donate.jsx      # Digital Daan & UPI QR Code payment page
│   │   └── Contact.jsx     # Location map & direct WhatsApp contact form
│   ├── App.jsx             # Main App layout & React Router routing
│   ├── index.css           # Global design system CSS & responsive media queries
│   └── main.jsx            # React root entry point
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16.0 or higher) and `npm` installed on your system.

```bash
node -v
npm -v
```

### Installation

1. **Clone or navigate to the repository**:
   ```bash
   cd Rameshwar_Mandir
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:8080/` (or the URL displayed in your terminal).

---

## 📦 Building for Production

To create an optimized production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The output files will be generated in the `dist/` directory, ready for deployment to any web host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, or Nginx server).

---

## 📞 Temple Contact & Administration

- **Location**: Shri Rameshwar Mahadev Temple, Panchkoshi Marg, Varuna River Bank, Rameshwar, Kashi (Varanasi), Uttar Pradesh - 221105, India.
- **Head Priest**: Pt. Anoop Tiwari
- **Phone / WhatsApp**: [+91 9956120169](https://wa.me/919956120169)
- **UPI ID for Donations**: `QR917007370522-1875@unionbankofindia` (Union Bank of India)

---

## 📜 License

This project is open-source and developed for the community of devotees of Shri Rameshwar Mahadev Temple, Varanasi.

---

**👨‍💻 Developed & Designed By** Shivam Pandey
 