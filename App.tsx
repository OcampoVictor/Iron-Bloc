import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import NoiseOverlay from './components/Layout/NoiseOverlay';
import GridOverlay from './components/Layout/GridOverlay';
import WhatsAppButton from './components/Layout/WhatsAppButton';
import Home from './components/Pages/Home';
import Manifesto from './components/Pages/Manifesto';
import ServicesPage from './components/Pages/ServicesPage';
import LocationsPage from './components/Pages/LocationsPage';
import GalleryPage from './components/Pages/GalleryPage';
import ContactPage from './components/Pages/ContactPage';

// Component to handle scroll restoration and hash navigation
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative min-h-screen bg-background-dark text-white">
        <NoiseOverlay />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/join" element={<ContactPage />} />
        </Routes>

        <WhatsAppButton />
        <GridOverlay />
      </div>
    </HashRouter>
  );
}