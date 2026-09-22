import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Button from "../components/Button";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Download,
  Share2,
  BookOpen,
  Layers,
  FileText,
} from "lucide-react";

const singlePages = [
  {
    id: 1,
    title: "Front Cover • திருமண அழைப்பிதழ்",
    subtitle: "P. Priyadharshini & M. Parthipan • 30-10-2026",
    src: "/images/invitation/page1_cover.jpg",
    badge: "Cover Page",
  },
  {
    id: 2,
    title: "Formal English Invitation",
    subtitle: "Mr. D. Prakash & Mrs. P. Latha Request Your Esteemed Presence",
    src: "/images/invitation/page2_english.jpg",
    badge: "English Patrika",
  },
  {
    id: 3,
    title: "Traditional Tamil Patrika • தமிழ் அழைப்பிதழ்",
    subtitle: "உ • முனீஸ்வரர் துணை • பராபவ வருடம் ஐப்பசி 13",
    src: "/images/invitation/page3_tamil.jpg",
    badge: "Tamil Patrika",
  },
  {
    id: 4,
    title: "Family Lineage & Auspicious Schedule",
    subtitle: "பெண்ணுக்குரியோர்கள் • பிள்ளைக்குரியோர்கள் • நிகழ்ச்சி நிரல்",
    src: "/images/invitation/page4_family_schedule.jpg",
    badge: "Lineage & Schedule",
  },
];

const spreadPages = [
  {
    id: 1,
    title: "Spread 1 • Original Front Cover & Family Schedule",
    subtitle: "பெண்ணுக்குரியோர்கள் • பிள்ளைக்குரியோர்கள் • நிகழ்ச்சி நிரல் & முகப்பு",
    src: "/images/invitation/spread1_cover_family.jpg",
    badge: "Spread 1 (Outer)",
  },
  {
    id: 2,
    title: "Spread 2 • Original English Invitation & Tamil Patrika",
    subtitle: "Wedding Invitation & மங்களகரமான தமிழ் திருமண அழைப்பிதழ்",
    src: "/images/invitation/spread2_english_tamil.jpg",
    badge: "Spread 2 (Inner)",
  },
];

export default function Invitation() {
  const [viewMode, setViewMode] = useState("pages"); // "pages" or "spreads"
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const bookContainerRef = useRef(null);

  const currentList = viewMode === "pages" ? singlePages : spreadPages;
  const page = currentList[currentPage] || currentList[0];

  const handlePrev = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setZoomLevel(1);
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < currentList.length - 1) {
      setDirection(1);
      setZoomLevel(1);
      setCurrentPage((prev) => prev + 1);
    }
  };

  const switchViewMode = (mode) => {
    setViewMode(mode);
    setCurrentPage(0);
    setZoomLevel(1);
    setDirection(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, currentList]);

  // Touch Swipe
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (bookContainerRef.current?.requestFullscreen) {
        bookContainerRef.current.requestFullscreen();
        setIsFullscreen(true);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Wedding Invitation: Priyadharshini & Parthipan",
          text: `Wedding invitation card of P. Priyadharshini & M. Parthipan - Friday, 30th October 2026.`,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share skipped", err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Invitation link copied to clipboard!");
    }
  };

  const pageVariants = {
    enter: (dir) => ({
      rotateY: dir > 0 ? 35 : -35,
      opacity: 0,
      scale: 0.96,
      transformOrigin: dir > 0 ? "left center" : "right center",
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: zoomLevel,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (dir) => ({
      rotateY: dir > 0 ? -35 : 35,
      opacity: 0,
      scale: 0.96,
      transformOrigin: dir > 0 ? "right center" : "left center",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Authentic Original Printed Artwork"
          title="Digital Wedding Patrika"
          tamilSubtitle="அசல் திருமண அழைப்பிதழ் புத்தகம்"
        />

        {/* View Mode Toggle: Single Pages vs Full Dual-Page Spreads */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F8F3E8] border border-[#C9A24A]/40 shadow-xs">
            <button
              onClick={() => switchViewMode("pages")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "pages"
                  ? "bg-[#274236] text-[#F8F3E8] shadow-md"
                  : "text-[#274236]/80 hover:text-[#274236]"
              }`}
            >
              <FileText className="w-4 h-4 text-[#C9A24A]" />
              Single Pages (4 Pages)
            </button>
            <button
              onClick={() => switchViewMode("spreads")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                viewMode === "spreads"
                  ? "bg-[#274236] text-[#F8F3E8] shadow-md"
                  : "text-[#274236]/80 hover:text-[#274236]"
              }`}
            >
              <Layers className="w-4 h-4 text-[#C9A24A]" />
              Original Full Spreads (2 Spreads)
            </button>
          </div>
        </div>

        {/* BOOK CONTAINER */}
        <div
          ref={bookContainerRef}
          className={`relative bg-[#FFFDF7] border-2 border-[#C9A24A] rounded-3xl p-4 sm:p-8 shadow-2xl overflow-hidden transition-all duration-300 ${
            isFullscreen ? "fixed inset-0 z-[200] rounded-none !p-4 flex flex-col justify-between" : ""
          }`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Top Control Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#C9A24A]/25 z-20 relative">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#E8F1E4] border border-[#DCEAD5] flex items-center justify-center text-[#274236] font-bold text-xs">
                <BookOpen className="w-4 h-4 text-[#C9A24A]" />
              </span>
              <div>
                <p className="text-sm font-sans font-bold uppercase tracking-widest text-[#A67C2E]">
                  {viewMode === "pages" ? `PAGE ${currentPage + 1} OF ${currentList.length}` : `SPREAD ${currentPage + 1} OF ${currentList.length}`}
                </p>
                <p className="text-xs text-[#274236]/70 hidden sm:block">{page.title}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setZoomLevel((z) => (z === 1 ? 1.5 : 1))}
                className="p-2 rounded-xl bg-[#F8F3E8] text-[#274236] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors border border-[#C9A24A]/30 cursor-pointer"
                title="Toggle Zoom"
                aria-label="Toggle zoom"
              >
                {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
              </button>

              <a
                href={page.src}
                download={viewMode === "pages" ? `invitation_page_${currentPage + 1}.jpg` : `invitation_spread_${currentPage + 1}.jpg`}
                className="p-2 rounded-xl bg-[#F8F3E8] text-[#274236] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors border border-[#C9A24A]/30 cursor-pointer"
                title="Download Page"
                aria-label="Download page"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-[#F8F3E8] text-[#274236] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors border border-[#C9A24A]/30 cursor-pointer"
                title="Share Invitation"
                aria-label="Share"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-xl bg-[#F8F3E8] text-[#274236] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors border border-[#C9A24A]/30 cursor-pointer"
                title="Toggle Fullscreen"
                aria-label="Toggle fullscreen"
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* MAIN PAGE VIEWPORT WITH 3D PAGE-TURN ANIMATION */}
          <div
            className="relative flex items-center justify-center my-6 min-h-[450px] sm:min-h-[580px] md:min-h-[660px] overflow-hidden perspective-[1200px]"
            style={{ perspective: "1200px" }}
          >
            {/* Previous Page Arrow */}
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className={`absolute left-2 sm:left-4 z-30 p-3 rounded-full bg-[#FFFDF7]/90 border border-[#C9A24A] text-[#274236] shadow-lg transition-all cursor-pointer ${
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#C9A24A] hover:text-[#1A2F26] hover:scale-105"
              }`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Animated Page */}
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={`${viewMode}-${currentPage}`}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="max-h-[70vh] max-w-full flex flex-col items-center justify-center"
              >
                <img
                  src={page.src}
                  alt={page.title}
                  className="max-h-[70vh] w-auto object-contain rounded-xl border border-[#C9A24A]/40 shadow-2xl pointer-events-none"
                />
              </motion.div>
            </AnimatePresence>

            {/* Next Page Arrow */}
            <button
              onClick={handleNext}
              disabled={currentPage === currentList.length - 1}
              className={`absolute right-2 sm:right-4 z-30 p-3 rounded-full bg-[#FFFDF7]/90 border border-[#C9A24A] text-[#274236] shadow-lg transition-all cursor-pointer ${
                currentPage === currentList.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-[#C9A24A] hover:text-[#1A2F26] hover:scale-105"
              }`}
              aria-label="Next page"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Page Thumbnails & Details */}
          <div className="pt-4 border-t border-[#C9A24A]/25 space-y-4">
            <div className="text-center">
              <h4 className="font-serif text-base sm:text-lg font-bold text-[#274236]">
                {page.title}
              </h4>
              <p className="text-xs text-[#A67C2E] font-medium mt-0.5">{page.subtitle}</p>
            </div>

            {/* Thumbnails Navigation Strip */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-1">
              {currentList.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setDirection(idx > currentPage ? 1 : -1);
                    setCurrentPage(idx);
                    setZoomLevel(1);
                  }}
                  className={`flex flex-col items-center gap-1 p-1 rounded-xl transition-all cursor-pointer ${
                    currentPage === idx
                      ? "ring-2 ring-[#C9A24A] bg-[#F8F3E8] scale-105"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={p.src}
                    alt={p.title}
                    className={`${viewMode === "pages" ? "w-12 h-16 sm:w-16 sm:h-20" : "w-20 h-14 sm:w-24 sm:h-16"} object-cover rounded-lg border border-[#C9A24A]/30 shadow-xs`}
                  />
                  <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#274236]">
                    {viewMode === "pages" ? `P. ${idx + 1}` : `Spread ${idx + 1}`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider variant="mandala" className="my-12" />

        {/* CTA */}
        <div className="text-center flex flex-wrap justify-center gap-4">
          <Button to="/wedding" variant="forest" size="md">
            View Wedding Ceremony
          </Button>
          <Button to="/family" variant="outline" size="md">
            View Family Lineage
          </Button>
          <Button to="/rsvp" variant="gold" size="md">
            RSVP for Celebrations
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
