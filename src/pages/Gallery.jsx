import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import { Sparkles, Camera, ZoomIn, Image as ImageIcon } from "lucide-react";
import { galleryCategories, galleryItems } from "../data/galleryData";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="A Visual Symphony of Sacred Moments"
          title="Wedding Gallery"
          tamilSubtitle="என்றும் நினைவில் நிலைக்கும் இனிய தருணங்கள்"
        />

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#274236] text-[#FFFDF7] shadow-md border border-[#C9A24A]"
                    : "bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/30 hover:border-[#C9A24A] hover:bg-[#F8F3E8]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Premium Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="card-luxury group relative rounded-2xl overflow-hidden bg-[#FFFDF7] border border-[#C9A24A]/30 shadow-md cursor-pointer flex flex-col justify-between"
            >
              {/* Image Frame with hover zoom */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F3E8]">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-[#FFFDF7]/90 text-[#274236] flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-5 h-5 text-[#C9A24A]" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#FFFDF7]/90 text-[#274236] border border-[#C9A24A]/40 backdrop-blur-xs">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Title & Description */}
              <div className="p-5 space-y-1">
                <h4 className="font-serif text-lg font-bold text-[#274236] group-hover:text-[#A67C2E] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#274236]/75 font-serif leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionDivider variant="mandala" className="my-14" />

        {/* Note */}
        <div className="bg-[#F8F3E8] p-8 rounded-3xl border border-[#C9A24A]/30 text-center max-w-2xl mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FFFDF7] border border-[#C9A24A]/40 flex items-center justify-center mx-auto text-[#C9A24A]">
            <Camera className="w-5 h-5" />
          </div>
          <h4 className="text-xl font-serif text-[#274236]">Live Moments Will Be Updated</h4>
          <p className="text-xs sm:text-sm text-[#274236]/80 leading-relaxed font-serif">
            High-resolution ceremony photographs from both families and live stage captures will be added here on 28th and 30th October 2026.
          </p>
        </div>
      </div>

      {/* Lightbox for Gallery */}
      <Lightbox
        images={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </PageTransition>
  );
}
