import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";
import ScrollToTop from "./components/ScrollToTop";
import FallingParticles from "./components/FallingParticles";
import CustomCursor from "./components/CustomCursor";
import CinematicIntro from "./components/CinematicIntro";
import MusicPlayer from "./components/MusicPlayer";
import FloatingActions from "./components/FloatingActions";
import Toast from "./components/Toast";

// Pages
import Home from "./pages/Home";
import Story from "./pages/Story";
import Engagement from "./pages/Engagement";
import Wedding from "./pages/Wedding";
import Reception from "./pages/Reception";
import Gallery from "./pages/Gallery";
import Family from "./pages/Family";
import Invitation from "./pages/Invitation";
import Venues from "./pages/Venues";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();
  const [introKey, setIntroKey] = useState(0);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const handleReopenIntro = () => {
    localStorage.removeItem("wedding_intro_seen");
    setIntroKey((prev) => prev + 1);
  };

  const handleToggleMusic = () => {
    setIsMusicPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-wedding-ivory text-wedding-forest font-sans relative selection:bg-wedding-gold/25 selection:text-wedding-forest-dark">
      {/* Optional Cinematic Intro Overlay */}
      <CinematicIntro key={introKey} />

      {/* Background Music Controller (♫ ON / OFF) */}
      <MusicPlayer isPlaying={isMusicPlaying} onToggle={handleToggleMusic} />

      {/* Desktop Custom Luxury Halo Cursor */}
      <CustomCursor />

      {/* Elegant Canvas Falling Elements Engine (Hearts, Petals, Leaves, Gold Dust) */}
      <FallingParticles />

      {/* Top Brushed Gold Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Auto Scroll To Top on Route Changes */}
      <ScrollToTop />

      {/* Premium Dynamic Responsive Header */}
      <Header />

      {/* Animated Route Transitions */}
      <main className="grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home onReopenIntro={handleReopenIntro} />} />
            <Route path="/story" element={<Story />} />
            <Route path="/engagement" element={<Engagement />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/reception" element={<Reception />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/family" element={<Family />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/contact" element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home onReopenIntro={handleReopenIntro} />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Floating Action Button (Heart FAB with Speed Dial & Easter Egg) */}
      <FloatingActions
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        onShowToast={showToast}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Premium Luxury Footer */}
      <Footer />
    </div>
  );
}
