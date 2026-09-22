import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Share2,
  MessageCircle,
  Music,
  Calendar,
  ArrowUp,
  X,
  Copy,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function FloatingActions({ isMusicPlaying, onToggleMusic, onShowToast }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [easterEggActive, setEasterEggActive] = useState(false);
  const clickTimerRef = useRef(null);
  const navigate = useNavigate();

  const INVITATION_MESSAGE =
    "You're warmly invited to the wedding of P. Priyadarshini & M. Parthipan on 30 October 2026. We would be delighted to celebrate this special day with you.";

  // Easter Egg: 5 clicks on the heart
  const handleHeartClick = () => {
    setClickCount((prev) => {
      const nextCount = prev + 1;
      if (nextCount >= 5) {
        setEasterEggActive(true);
        setTimeout(() => setEasterEggActive(false), 4500);
        return 0;
      }
      return nextCount;
    });

    clearTimeout(clickTimerRef.current);
    clickTimerRef.current = setTimeout(() => {
      setClickCount(0);
    }, 2000);

    setIsOpen(!isOpen);
  };

  // WhatsApp Share
  const handleWhatsApp = () => {
    const shareUrl = window.location.origin;
    const text = `${INVITATION_MESSAGE}\n\nView Invitation: ${shareUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  // Native Share / Copy Link
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "P. Priyadarshini & M. Parthipan | Wedding Invitation",
          text: INVITATION_MESSAGE,
          url: window.location.origin,
        });
      } catch (err) {
        console.log("Share dismissed", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.origin);
      if (onShowToast) {
        onShowToast("Invitation link copied to clipboard!");
      }
    }
    setIsOpen(false);
  };

  // Back to top
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  // Jump to RSVP
  const handleRSVP = () => {
    navigate("/rsvp");
    setIsOpen(false);
  };

  return (
    <>
      {/* EASTER EGG OVERLAY */}
      <AnimatePresence>
        {easterEggActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 pointer-events-none select-none"
          >
            <div className="bg-[#FFFDF7] border-2 border-[#C9A24A] rounded-3xl p-8 sm:p-10 text-center shadow-2xl shadow-[#C9A24A]/40 max-w-sm pointer-events-auto">
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-16 h-16 rounded-full bg-[#E8F1E4] border border-[#DCEAD5] flex items-center justify-center mx-auto mb-4 text-[#C9A24A]"
              >
                <Heart className="w-8 h-8 fill-[#C9A24A]" />
              </motion.div>
              {/* EXACT SPECIFICATION: "Made with Love ❤️" */}
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#274236]">
                Made with Love ❤️
              </h3>
              <p className="text-xs sm:text-sm font-serif text-[#274236]/80 mt-2 leading-relaxed">
                Celebrating Priyadarshini & Parthipan's eternal union with warmth and heartfelt devotion.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING ACTION MENU */}
      <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 select-none">
        {/* Speed Dial Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-end gap-2.5 mb-1"
            >
              {/* 1. Share */}
              <button
                onClick={handleShare}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-lg hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-all text-xs font-serif font-bold cursor-pointer group"
                aria-label="Share invitation"
              >
                <span className="opacity-80 group-hover:opacity-100">Share Link</span>
                <Share2 className="w-4 h-4 text-[#C9A24A] group-hover:text-[#1A2F26]" />
              </button>

              {/* 2. WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-lg hover:bg-[#25D366] hover:text-white hover:border-transparent transition-all text-xs font-serif font-bold cursor-pointer group"
                aria-label="Share on WhatsApp"
              >
                <span className="opacity-80 group-hover:opacity-100">WhatsApp</span>
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:text-white" />
              </button>

              {/* 3. Music */}
              <button
                onClick={() => {
                  onToggleMusic();
                  setIsOpen(false);
                }}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-lg hover:bg-[#274236] hover:text-[#FFFDF7] hover:border-transparent transition-all text-xs font-serif font-bold cursor-pointer group"
                aria-label="Toggle music"
              >
                <span className="opacity-80 group-hover:opacity-100">
                  {isMusicPlaying ? "Mute Music" : "Play Music"}
                </span>
                <Music className="w-4 h-4 text-[#C9A24A] group-hover:text-[#FFFDF7]" />
              </button>

              {/* 4. RSVP */}
              <button
                onClick={handleRSVP}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-lg hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-all text-xs font-serif font-bold cursor-pointer group"
                aria-label="RSVP"
              >
                <span className="opacity-80 group-hover:opacity-100">RSVP</span>
                <Sparkles className="w-4 h-4 text-[#C9A24A] group-hover:text-[#1A2F26]" />
              </button>

              {/* 5. Back to Top */}
              <button
                onClick={handleBackToTop}
                className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-lg hover:bg-[#274236] hover:text-[#FFFDF7] transition-all text-xs font-serif font-bold cursor-pointer group"
                aria-label="Back to top"
              >
                <span className="opacity-80 group-hover:opacity-100">Back to Top</span>
                <ArrowUp className="w-4 h-4 text-[#C9A24A] group-hover:text-[#FFFDF7]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Main Heart Button */}
        <button
          onClick={handleHeartClick}
          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl border-2 border-[#FFFDF7]/60 transition-all duration-300 cursor-pointer ${
            isOpen
              ? "bg-[#274236] text-[#FFFDF7] rotate-90"
              : "bg-gradient-to-tr from-[#C9A24A] via-[#DFBF6D] to-[#A67C2E] text-[#1A2F26] hover:scale-105 shadow-[#C9A24A]/40"
          }`}
          title="Quick Actions (Click 5 times for a surprise!)"
          aria-label="Quick Actions Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Heart className="w-6 h-6 fill-current" />
          )}
        </button>
      </div>
    </>
  );
}
