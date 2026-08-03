import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { DataProvider } from './context/DataContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundCanvas from './components/BackgroundCanvas';

import Home from './pages/Home';
import Intro from './pages/Intro';
import History from './pages/History';
import Yatra from './pages/Yatra';
import Gallery from './pages/Gallery';
import Timings from './pages/Timings';
import Priest from './pages/Priest';
import Services from './pages/Services';
import Festivals from './pages/Festivals';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <DataProvider>
        <Router>
          <ScrollToTop />
          <BackgroundCanvas />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/history" element={<History />} />
            <Route path="/yatra" element={<Yatra />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/timings" element={<Timings />} />
            <Route path="/priest" element={<Priest />} />
            <Route path="/services" element={<Services />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>

          <Footer />
        </Router>
      </DataProvider>
    </LanguageProvider>
  );
}
