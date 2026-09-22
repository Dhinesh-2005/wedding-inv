import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";

export default function CinematicIntro({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("wedding_intro_seen");
    if (!hasSeen) {
      setIsOpen(true);
    }
  }, []);

  const handleOpen = () => {
    localStorage.setItem("wedding_intro_seen", "true");
    setIsOpen(false);
    if (onComplete) onComplete();
  };

  const handleSkip = () => {
    localStorage.setItem("wedding_intro_seen", "true");
    setIsOpen(false);
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-wedding-ivory text-wedding-forest overflow-hidden p-4 sm:p-6 select-none"
        >
          {/* Ornate Background Mandala Rings */}
          <div className="absolute w-90 h-90 sm:w-145 sm:h-145 md:w-187.5 md:h-187.5 rounded-full border border-wedding-gold/25 pointer-events-none animate-[spin_180s_linear_infinite]" />
          <div className="absolute w-75 h-75 sm:w-125 sm:h-125 md:w-162.5 md:h-162.5 rounded-full border border-dashed border-wedding-gold/20 pointer-events-none" />

          {/* Soft Gold Lighting Center Radial */}
          <div className="absolute inset-0 bg-radial from-wedding-cream via-wedding-ivory/90 to-wedding-lightgreen/40 pointer-events-none" />

          {/* Royal Invitation Card Envelope */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-lg w-full bg-wedding-ivory border-2 border-wedding-gold rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-wedding-gold/20"
          >
            {/* Corner Ornaments */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-wedding-gold" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-wedding-gold" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-wedding-gold" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-wedding-gold" />

            {/* Pillaiyar Suzhi */}
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-wedding-darkgold">உ</span>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-wedding-darkgold font-semibold mb-6">
              YOU'RE INVITED
            </p>

            {/* Names & Heart */}
            <div className="space-y-3 py-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-wedding-forest tracking-tight">
                P. PRIYADHARSHINI
              </h2>

              <div className="flex items-center justify-center gap-3 py-1 text-wedding-gold">
                <div className="h-px w-12 bg-linear-to-r from-transparent to-wedding-gold" />
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-2xl sm:text-3xl leading-none"
                >
                  ♡
                </motion.span>
                <div className="h-px w-12 bg-linear-to-l from-transparent to-wedding-gold" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-wedding-forest tracking-tight">
                M. PARTHIPAN
              </h2>
            </div>

            {/* Date and Venue note */}
            <div className="mt-6 pt-5 border-t border-wedding-gold/30 space-y-1">
              <p className="text-sm sm:text-base font-serif font-semibold tracking-widest text-wedding-forest uppercase">
                30 OCTOBER 2026
              </p>
              <p className="text-xs font-sans tracking-widest text-wedding-darkgold uppercase font-medium">
                FRIDAY • CHENNAI
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleOpen}
                className="w-full py-3.5 px-6 rounded-full bg-linear-to-r from-wedding-gold via-wedding-gold-light to-wedding-darkgold text-wedding-forest-dark font-serif text-base sm:text-lg font-bold tracking-wider shadow-lg shadow-wedding-gold/30 hover:shadow-xl hover:shadow-wedding-gold/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-wedding-ivory/50 sheen-effect"
              >
                OPEN INVITATION
              </button>

              <button
                onClick={handleSkip}
                className="text-xs font-sans tracking-widest uppercase text-wedding-forest/70 hover:text-wedding-darkgold transition-colors py-1 cursor-pointer"
              >
                SKIP INTRO
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
