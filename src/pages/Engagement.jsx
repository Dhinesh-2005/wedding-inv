import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import EventCard from "../components/EventCard";
import Lightbox from "../components/Lightbox";
import Button from "../components/Button";
import { Sparkles, Sun, CheckCircle, Calendar, Clock, MapPin, ZoomIn, Camera } from "lucide-react";
import { eventsData } from "../data/eventsData";

const engagementPhotos = [
  {
    src: "/images/engagement/engagement_1_ritual.jpg",
    title: "Sacred Pandakkal Ritual",
    description: "Commencement of Auspicious Rites on Wednesday, 28th October 2026 at 5:00 AM.",
    category: "Pandakkal & Rituals",
  },
  {
    src: "/images/engagement/engagement_2_blessings.jpg",
    title: "Elders & Maternal Blessings",
    description: "Seeking ancestral grace, parental blessings, and divine favor for the couple.",
    category: "Family Blessings",
  },
  {
    src: "/images/engagement/engagement_3_thamboolam.jpg",
    title: "Mangala Thamboolam",
    description: "Traditional betel leaves, turmeric, vermilion, and sacred coconuts.",
    category: "Auspicious Offerings",
  },
  {
    src: "/images/engagement/engagement_4_mandapam.jpg",
    title: "Traditional Floral Mandap",
    description: "Adorned with fragrant fresh jasmine, marigold garlands, and mango leaf toranams.",
    category: "Decor & Ambiance",
  },
  {
    src: "/images/engagement/engagement_5_family.jpg",
    title: "Two Families in Harmony",
    description: "The families of Avadi & Ambattur celebrating together in joyful unity.",
    category: "Cherished Moments",
  },
  {
    src: "/images/engagement/engagement_6_prasadam.jpg",
    title: "Sweet Prasadam & Joy",
    description: "Sharing traditional sweet pongal, confectioneries, and heartfelt blessings.",
    category: "Festivities",
  },
];

export default function Engagement() {
  const pandakkalEvent = eventsData.find((e) => e.id === "pandakkal");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Requested Title */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A67C2E] font-bold">
            AUSPICIOUS PRE-WEDDING CELEBRATION
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#274236] tracking-tight uppercase">
            ENGAGEMENT MEMORIES
          </h1>
          <p className="text-base sm:text-xl font-serif font-bold text-[#A67C2E] tracking-widest">
            28 OCTOBER 2026
          </p>
          <p className="text-xs font-tamil text-[#274236]/80 font-medium">
            மங்கள பந்தக்கால் நடுதல் & திருமண நல்வரவு
          </p>
        </div>

        {/* Featured Event Card */}
        {pandakkalEvent && (
          <div className="max-w-3xl mx-auto mb-16">
            <EventCard event={pandakkalEvent} featured={true} />
          </div>
        )}

        <SectionDivider variant="leaf" />

        {/* PREMIUM PHOTO GALLERY SECTION */}
        <div className="my-12">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
              Moments of Tradition
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#274236]">
              Photo Gallery & Ritual Keepsakes
            </h3>
            <p className="text-xs sm:text-sm text-[#274236]/70 font-serif">
              Tap any photograph to open the fullscreen interactive viewer.
            </p>
          </div>

          {/* Desktop Masonry / Mobile Vertical Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {engagementPhotos.map((photo, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => openLightbox(idx)}
                className="card-luxury group relative rounded-2xl overflow-hidden bg-[#FFFDF7] border border-[#C9A24A]/30 shadow-md cursor-pointer flex flex-col justify-between"
              >
                {/* Photo with zoom micro-interaction */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F3E8]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#FFFDF7]/90 text-[#274236] flex items-center justify-center shadow-md">
                      <ZoomIn className="w-5 h-5 text-[#C9A24A]" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold bg-[#FFFDF7]/90 text-[#274236] border border-[#C9A24A]/40 backdrop-blur-xs">
                    {photo.category}
                  </span>
                </div>

                {/* Caption card */}
                <div className="p-5 space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#274236] group-hover:text-[#A67C2E] transition-colors">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#274236]/75 leading-relaxed font-serif">
                    {photo.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Note about easy replacement */}
        <div className="bg-[#F8F3E8] p-6 rounded-2xl border border-dashed border-[#C9A24A]/40 text-center max-w-2xl mx-auto my-8 space-y-1.5">
          <p className="text-xs uppercase tracking-wider text-[#A67C2E] font-bold">
            Curated Gallery Assets
          </p>
          <p className="text-xs text-[#274236]/80 font-serif">
            Photos are cleanly loaded from <code className="bg-[#FFFDF7] px-1.5 py-0.5 rounded border border-[#C9A24A]/30 text-[#274236]">/public/images/engagement/</code> and can be seamlessly updated with live ceremony captures.
          </p>
        </div>

        {/* Navigation CTAs */}
        <div className="text-center flex flex-wrap justify-center gap-4 mt-12">
          <Button to="/wedding" variant="gold" size="md">
            Next: Subamuhurtham Ceremony
          </Button>
          <Button to="/gallery" variant="outline" size="md">
            Explore Complete Gallery
          </Button>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <Lightbox
        images={engagementPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={(newIdx) => setLightboxIndex(newIdx)}
      />
    </PageTransition>
  );
}
