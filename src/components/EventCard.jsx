import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Navigation,
  CalendarPlus,
  Download,
} from "lucide-react";
import Button from "./Button";
import { getGoogleCalendarUrl, downloadICS } from "../utils/calendar";

export default function EventCard({ event, featured = false }) {
  const {
    title,
    tamilTitle,
    badge,
    date,
    tamilDate,
    time,
    tamilTime,
    venueName,
    tamilVenue,
    address,
    city,
    description,
    dressCode,
    mapLink,
    calendarDetails,
  } = event;

  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  const handleGoogleCalendar = () => {
    if (!calendarDetails) return;
    const url = getGoogleCalendarUrl(calendarDetails);
    window.open(url, "_blank", "noopener,noreferrer");
    setCalendarMenuOpen(false);
  };

  const handleDownloadICS = () => {
    if (!calendarDetails) return;
    downloadICS(calendarDetails);
    setCalendarMenuOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`card-luxury relative rounded-3xl overflow-hidden ${
        featured
          ? "bg-gradient-to-b from-[#FFFDF7] to-[#F8F3E8] border-2 border-[#C9A24A] shadow-xl shadow-[#C9A24A]/15"
          : "bg-[#FFFDF7] border border-[#C9A24A]/30 shadow-md"
      }`}
    >
      {/* Corner Ornaments */}
      <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A24A]/50 pointer-events-none" />
      <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#C9A24A]/50 pointer-events-none" />
      <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#C9A24A]/50 pointer-events-none" />
      <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A24A]/50 pointer-events-none" />

      {/* Header Banner */}
      <div className="p-6 sm:p-8 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#E8F1E4] text-[#274236] border border-[#DCEAD5]">
            <Sparkles className="w-3 h-3 text-[#C9A24A]" />
            {badge}
          </span>
          {featured && (
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#C9A24A] to-[#A67C2E] text-white shadow-sm">
              Main Ceremony
            </span>
          )}
        </div>

        <div className="space-y-1">
          <h3 className="text-2xl sm:text-3xl font-serif text-[#274236] tracking-tight">{title}</h3>
          <p className="text-lg font-tamil text-[#A67C2E] font-medium">{tamilTitle}</p>
        </div>
      </div>

      {/* Details Box */}
      <div className="px-6 sm:px-8 py-4 space-y-4">
        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#F8F3E8]/80 border border-[#C9A24A]/20">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFFDF7] border border-[#C9A24A]/30 flex items-center justify-center shrink-0 text-[#C9A24A]">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#274236]/70 uppercase tracking-wider font-semibold">Date</p>
              <p className="text-sm sm:text-base font-medium text-[#274236]">{date}</p>
              <p className="text-xs font-tamil text-[#274236]/80">{tamilDate}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFFDF7] border border-[#C9A24A]/30 flex items-center justify-center shrink-0 text-[#C9A24A]">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs text-[#274236]/70 uppercase tracking-wider font-semibold">Time</p>
              <p className="text-sm sm:text-base font-semibold text-[#274236]">{time}</p>
              <p className="text-xs font-tamil text-[#274236]/80">{tamilTime}</p>
            </div>
          </div>
        </div>

        {/* Venue */}
        <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFFDF7] border border-[#C9A24A]/20">
          <div className="w-9 h-9 rounded-xl bg-[#E8F1E4] border border-[#DCEAD5] flex items-center justify-center shrink-0 text-[#274236]">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs text-[#274236]/70 uppercase tracking-wider font-semibold">Venue</p>
            <p className="text-base sm:text-lg font-serif font-semibold text-[#274236]">{venueName}</p>
            <p className="text-xs font-tamil text-[#A67C2E] font-medium mb-1">{tamilVenue}</p>
            <p className="text-xs sm:text-sm text-[#274236]/80 leading-relaxed">{address}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#274236]/80 leading-relaxed italic border-l-2 border-[#C9A24A] pl-3 py-1 font-serif">
          {description}
        </p>

        {/* Dress code */}
        {dressCode && (
          <div className="text-xs text-[#274236]/70 flex items-center gap-1.5 pt-1">
            <span className="font-semibold text-[#A67C2E]">Attire:</span>
            <span>{dressCode}</span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-8 pt-4 bg-[#F8F3E8]/40 border-t border-[#C9A24A]/20 flex flex-wrap gap-3 relative">
        {mapLink && (
          <Button
            href={mapLink}
            variant="forest"
            size="sm"
            icon={Navigation}
            className="flex-1 min-w-[140px]"
          >
            Directions
          </Button>
        )}

        <div className="relative flex-1 min-w-[140px]">
          <Button
            onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
            variant="outline"
            size="sm"
            icon={CalendarPlus}
            className="w-full"
          >
            Add to Calendar
          </Button>

          {/* Calendar popup options */}
          {calendarMenuOpen && (
            <div className="absolute bottom-full mb-2 left-0 right-0 bg-[#FFFDF7] border-2 border-[#C9A24A] rounded-2xl shadow-xl p-2 z-30 flex flex-col gap-1.5">
              <button
                onClick={handleGoogleCalendar}
                className="w-full text-left px-3 py-2 text-xs font-medium text-[#274236] hover:bg-[#E8F1E4] rounded-lg transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>Google Calendar</span>
                <span className="text-[#C9A24A]">↗</span>
              </button>
              <button
                onClick={handleDownloadICS}
                className="w-full text-left px-3 py-2 text-xs font-medium text-[#274236] hover:bg-[#E8F1E4] rounded-lg transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>Apple / Outlook (.ics)</span>
                <Download className="w-3.5 h-3.5 text-[#C9A24A]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
