import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Download,
} from "lucide-react";

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onIndexChange,
}) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const currentImage = images[currentIndex] || {};

  // Reset zoom on slide change
  useEffect(() => {
    setZoomLevel(1);
  }, [currentIndex]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex - 1 + images.length) % images.length;
    onIndexChange(nextIdx);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    const nextIdx = (currentIndex + 1) % images.length;
    onIndexChange(nextIdx);
  }, [currentIndex, images.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Touch swipe support
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const toggleZoom = () => {
    setZoomLevel((prev) => (prev === 1 ? 1.8 : 1));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] bg-[#1A2F26]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between z-20 py-2 border-b border-[#C9A24A]/25">
          {/* Image Counter */}
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm uppercase tracking-widest font-sans font-bold text-[#DFBF6D]">
              {currentIndex + 1} of {images.length}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3 text-[#FFFDF7]">
            <button
              onClick={toggleZoom}
              className="p-2 rounded-full bg-[#274236] border border-[#C9A24A]/40 hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors cursor-pointer"
              title={zoomLevel === 1 ? "Zoom in" : "Zoom out"}
              aria-label="Toggle zoom"
            >
              {zoomLevel === 1 ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
            </button>

            {currentImage.src && (
              <a
                href={currentImage.src}
                download={currentImage.title || "wedding-photo.jpg"}
                className="p-2 rounded-full bg-[#274236] border border-[#C9A24A]/40 hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-colors cursor-pointer"
                title="Download image"
                aria-label="Download image"
              >
                <Download className="w-4 h-4" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#274236] border border-[#C9A24A]/40 hover:bg-rose-900/80 transition-colors cursor-pointer"
              title="Close lightbox (Esc)"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-[#FFFDF7]" />
            </button>
          </div>
        </div>

        {/* Main Center Image Viewport */}
        <div className="relative flex-1 flex items-center justify-center overflow-hidden my-auto py-2">
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#274236]/80 border border-[#C9A24A]/50 text-[#FFFDF7] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-all duration-200 cursor-pointer shadow-lg -translate-y-1/2 top-1/2"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Current Image Container */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: zoomLevel }}
            transition={{ duration: 0.3 }}
            className="max-h-[75vh] max-w-[90vw] flex items-center justify-center cursor-zoom-in"
            onClick={toggleZoom}
          >
            {currentImage.src ? (
              <img
                src={currentImage.src}
                alt={currentImage.title || "Wedding photo"}
                className="max-h-[75vh] max-w-[90vw] object-contain rounded-xl border border-[#C9A24A]/30 shadow-2xl pointer-events-none"
              />
            ) : (
              <div className="w-80 h-80 rounded-2xl bg-[#FFFDF7] border-2 border-[#C9A24A] flex flex-col items-center justify-center p-6 text-center text-[#274236]">
                <span className="font-serif text-3xl font-bold text-[#A67C2E] mb-2">P & P</span>
                <p className="font-serif text-lg font-semibold">{currentImage.title}</p>
                <p className="text-xs text-[#A67C2E] mt-1">{currentImage.category}</p>
              </div>
            )}
          </motion.div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#274236]/80 border border-[#C9A24A]/50 text-[#FFFDF7] hover:bg-[#C9A24A] hover:text-[#1A2F26] transition-all duration-200 cursor-pointer shadow-lg -translate-y-1/2 top-1/2"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Caption Bar */}
        <div className="z-20 text-center py-3 border-t border-[#C9A24A]/25 max-w-2xl mx-auto space-y-1">
          <h4 className="text-base sm:text-lg font-serif font-bold text-[#FFFDF7] tracking-wide">
            {currentImage.title}
          </h4>
          {currentImage.description && (
            <p className="text-xs sm:text-sm text-[#DCEAD5] font-serif line-clamp-2">
              {currentImage.description}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
