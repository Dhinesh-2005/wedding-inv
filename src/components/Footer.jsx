import React from "react";
import { Link } from "react-router-dom";
import { Heart, Phone, MapPin, Calendar, Sparkles } from "lucide-react";
import SectionDivider from "./SectionDivider";
import { weddingData } from "../data/weddingData";

export default function Footer() {
  const { couple, spiritualBlessings, contacts, weddingDate } = weddingData;

  return (
    <footer className="relative bg-gradient-to-b from-[#FFFDF7] via-[#F8F3E8] to-[#E8F1E4] border-t border-[#C9A24A]/30 text-[#274236] overflow-hidden pt-12 pb-8">
      {/* Background Decorative Floral Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none -translate-x-8 -translate-y-8">
        <svg viewBox="0 0 100 100" fill="#274236">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Divine Invocations */}
        <div className="text-center space-y-1.5 mb-8">
          <p className="font-serif text-2xl font-bold text-[#A67C2E]">உ</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-serif text-[#274236]/80 font-medium">
            <span>முனீஸ்வரர் துணை</span>
            <span className="text-[#C9A24A]">✦</span>
            <span>மேல் மலையனூர் அங்காள பரமேஸ்வரி துணை</span>
          </div>
        </div>

        {/* Monogram & Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="w-14 h-14 mx-auto rounded-full border-2 border-[#C9A24A] bg-[#FFFDF7] flex items-center justify-center text-[#A67C2E] shadow-md">
            <span className="font-serif text-lg font-bold tracking-widest">P&P</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#274236]">
            {couple.bride.name} <span className="text-[#C9A24A] font-script text-3xl sm:text-4xl">&</span> {couple.groom.name}
          </h3>

          <p className="text-xs sm:text-sm text-[#A67C2E] font-medium tracking-wider uppercase">
            {couple.bride.qualification} • {couple.groom.qualification}
          </p>

          <p className="text-sm sm:text-base font-serif italic text-[#274236]/80 max-w-lg mx-auto pt-2">
            "{spiritualBlessings.kural.tamil}"
          </p>
          <p className="text-xs text-[#274236]/60 italic">
            — {spiritualBlessings.kural.english}
          </p>
        </div>

        <SectionDivider variant="leaf" className="my-8" />

        {/* Quick Links & Contact Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Column 1: Celebrations */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#274236] uppercase tracking-wider border-b border-[#C9A24A]/30 pb-1">
              Celebrations
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#274236]/80">
              <li>
                <Link to="/engagement" className="hover:text-[#A67C2E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#C9A24A]">✦</span> Pandakkal Ritual
                </Link>
              </li>
              <li>
                <Link to="/wedding" className="hover:text-[#A67C2E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#C9A24A]">✦</span> Subamuhurtham (Marriage)
                </Link>
              </li>
              <li>
                <Link to="/reception" className="hover:text-[#A67C2E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#C9A24A]">✦</span> Evening Grand Reception
                </Link>
              </li>
              <li>
                <Link to="/venues" className="hover:text-[#A67C2E] transition-colors flex items-center gap-1.5">
                  <span className="text-[#C9A24A]">✦</span> Venue Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#274236] uppercase tracking-wider border-b border-[#C9A24A]/30 pb-1">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#274236]/80">
              <li>
                <Link to="/story" className="hover:text-[#A67C2E] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/family" className="hover:text-[#A67C2E] transition-colors">
                  Family & Relations
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#A67C2E] transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/invitation" className="hover:text-[#A67C2E] transition-colors">
                  Digital E-Patrika
                </Link>
              </li>
              <li>
                <Link to="/rsvp" className="hover:text-[#A67C2E] transition-colors">
                  RSVP & Wishes
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Venues */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#274236] uppercase tracking-wider border-b border-[#C9A24A]/30 pb-1">
              Ceremony Venues
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#274236]/80">
              <div>
                <p className="font-semibold text-[#274236]">Sri Thandayuthapani Swamy Murugan Temple</p>
                <p className="text-xs text-[#274236]/70">Veerapuram, Avadi, Chennai</p>
                <p className="text-[11px] text-[#A67C2E] font-medium">Muhurtham: 6:00 AM - 7:30 AM</p>
              </div>
              <div>
                <p className="font-semibold text-[#274236]">Rajeswari Navaraj Mahal A/c</p>
                <p className="text-xs text-[#274236]/70">Gandhi Main Road, Oragadam, Ambattur</p>
                <p className="text-[11px] text-[#A67C2E] font-medium">Reception: 6:30 PM onwards</p>
              </div>
            </div>
          </div>

          {/* Column 4: Helplines */}
          <div className="space-y-3">
            <h4 className="font-serif text-base font-semibold text-[#274236] uppercase tracking-wider border-b border-[#C9A24A]/30 pb-1">
              Family Helpline
            </h4>
            <p className="text-xs text-[#274236]/70 leading-relaxed">
              For any travel guidance or accommodation assistance, please feel free to reach our family coordinators:
            </p>
            <div className="space-y-2">
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={`tel:${c.raw}`}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-[#274236] hover:text-[#A67C2E] transition-colors bg-[#FFFDF7] p-2 rounded-lg border border-[#C9A24A]/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A24A]" />
                  <span>{c.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#C9A24A]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#274236]/70 text-center sm:text-left">
          <p>
            With Best Compliments from <span className="font-medium text-[#274236]">Friends & Relatives (சுற்றமும் - நட்பும்)</span>
          </p>
          <div className="flex items-center gap-1">
            <span>Solemnized on</span>
            <span className="font-semibold text-[#A67C2E]">Friday, 30th October 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
