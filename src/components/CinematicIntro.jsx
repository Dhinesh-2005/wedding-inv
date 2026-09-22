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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFFDF7] text-[#274236] overflow-hidden p-4 sm:p-6 select-none"
        >
          {/* Ornate Background Mandala Rings */}
          <div className="absolute w-[360px] h-[360px] sm:w-[580px] sm:h-[580px] md:w-[750px] md:h-[750px] rounded-full border border-[#C9A24A]/25 pointer-events-none animate-[spin_180s_linear_infinite]" />
          <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-dashed border-[#C9A24A]/20 pointer-events-none" />

          {/* Soft Gold Lighting Center Radial */}
          <div className="absolute inset-0 bg-radial from-[#F8F3E8] via-[#FFFDF7]/90 to-[#E8F1E4]/40 pointer-events-none" />

          {/* Royal Invitation Card Envelope */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-lg w-full bg-[#FFFDF7] border-2 border-[#C9A24A] rounded-3xl p-8 sm:p-12 text-center shadow-2xl shadow-[#C9A24A]/20"
          >
            {/* Corner Ornaments */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A24A]" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A24A]" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A24A]" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A24A]" />

            {/* Pillaiyar Suzhi */}
            <div className="mb-4">
              <span className="font-serif text-2xl font-bold text-[#A67C2E]">உ</span>
            </div>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-[#A67C2E] font-semibold mb-6">
              YOU'RE INVITED
            </p>

            {/* Names & Heart */}
            <div className="space-y-3 py-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#274236] tracking-tight">
                P. PRIYADHARSHINI
              </h2>

              <div className="flex items-center justify-center gap-3 py-1 text-[#C9A24A]">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C9A24A]" />
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="text-2xl sm:text-3xl leading-none"
                >
                  ♡
                </motion.span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C9A24A]" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#274236] tracking-tight">
                M. PARTHIPAN
              </h2>
            </div>

            {/* Date and Venue note */}
            <div className="mt-6 pt-5 border-t border-[#C9A24A]/30 space-y-1">
              <p className="text-sm sm:text-base font-serif font-semibold tracking-widest text-[#274236] uppercase">
                30 OCTOBER 2026
              </p>
              <p className="text-xs font-sans tracking-widest text-[#A67C2E] uppercase font-medium">
                FRIDAY • CHENNAI
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleOpen}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#C9A24A] via-[#DFBF6D] to-[#A67C2E] text-[#1A2F26] font-serif text-base sm:text-lg font-bold tracking-wider shadow-lg shadow-[#C9A24A]/30 hover:shadow-xl hover:shadow-[#C9A24A]/40 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer border border-[#FFFDF7]/50 sheen-effect"
              >
                OPEN INVITATION
              </button>

              <button
                onClick={handleSkip}
                className="text-xs font-sans tracking-widest uppercase text-[#274236]/70 hover:text-[#A67C2E] transition-colors py-1 cursor-pointer"
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
