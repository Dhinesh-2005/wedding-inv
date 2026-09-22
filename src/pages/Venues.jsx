import React from "react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Button from "../components/Button";
import {
  MapPin,
  Navigation,
  Bus,
  Car,
  Train,
  Clock,
  Phone,
  Sparkles,
  CalendarPlus,
  Compass,
} from "lucide-react";

export default function Venues() {
  const venues = [
    {
      id: "wedding-venue",
      venueType: "Wedding Venue (சுபமுகூர்த்தம்)",
      name: "Sri Thandayuthapani Swamy Murugar Temple",
      tamilName: "ஸ்ரீ தண்டாயுதபாணி சுவாமி முருகர் திருக்கோயில்",
      date: "30 October 2026, Friday",
      time: "6:00 AM to 7:30 AM (Vrischika Lagnam)",
      address: "Veerapuram, Avadi, Chennai",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Sri+Thandayuthapani+Swamy+Murugar+Temple+Veerapuram+Avadi",
      mapEmbedUrl: "https://maps.google.com/?q=Veerapuram+Avadi+Chennai",
      calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        "Priyadarshini & Parthipan — Subamuhurtham (Wedding)"
      )}&dates=20261030T060000/20261030T090000&details=${encodeURIComponent(
        "Sacred wedding ceremony at Sri Thandayuthapani Swamy Murugar Temple, Veerapuram, Avadi."
      )}&location=${encodeURIComponent(
        "Sri Thandayuthapani Swamy Murugar Temple, Veerapuram, Avadi, Chennai"
      )}`,
      highlights: [
        "Auspicious temple sanctum of Lord Muruga",
        "Dedicated wedding mantapam for Vedic rituals",
        "Peaceful early-morning divine ambiance",
      ],
      transportTips: {
        train: "Avadi Railway Station (~6 km)",
        bus: "MTC buses connecting Avadi Bus Terminus to Veerapuram",
        road: "Conveniently accessible via Avadi - Veerapuram Road",
      },
    },
    {
      id: "reception-venue",
      venueType: "Reception Venue (திருமண வரவேற்பு)",
      name: "Rajeshwari Navaraj Mahal A/C",
      tamilName: "ராஜேஸ்வரி நவராஜ் மஹால் A/c",
      date: "30 October 2026, Friday",
      time: "6:30 PM onwards",
      address: "Gandhi Main Road, Oragadam, Ambattur, Chennai",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Rajeswari+Navaraj+Mahal+Ambattur+Chennai",
      mapEmbedUrl: "https://maps.google.com/?q=Gandhi+Main+Road+Oragadam+Ambattur+Chennai",
      calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        "Priyadarshini & Parthipan — Wedding Reception"
      )}&dates=20261030T183000/20261030T223000&details=${encodeURIComponent(
        "Wedding reception at Rajeshwari Navaraj Mahal A/C, Gandhi Main Road, Oragadam, Ambattur, Chennai."
      )}&location=${encodeURIComponent(
        "Rajeshwari Navaraj Mahal A/C, Gandhi Main Road, Oragadam, Ambattur, Chennai"
      )}`,
      highlights: [
        "Fully Air-Conditioned Grand Celebration Hall",
        "Spacious traditional dining hall for royal banquet",
        "Ample valet & guest parking area",
      ],
      transportTips: {
        train: "Ambattur Railway Station (~3 km)",
        bus: "Close to Oragadam (Ambattur) Bus Stop on Gandhi Main Road",
        road: "Easily accessible from Ambattur OT & Chennai Bypass",
      },
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Location & Navigation Guide"
          title="Ceremony Venues"
          tamilSubtitle="திருமண மண்டபம் & திருக்கோயில் வழிகாட்டி"
        />

        <div className="space-y-12">
          {venues.map((v) => (
            <div
              key={v.id}
              className="card-luxury bg-[#FFFDF7] rounded-3xl border-2 border-[#C9A24A]/35 shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#F8F3E8] to-[#FFFDF7] border-b border-[#C9A24A]/25">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#E8F1E4] text-[#274236] border border-[#DCEAD5] mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A24A]" />
                  {v.venueType}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#274236]">
                  {v.name}
                </h3>
                <p className="text-sm font-tamil text-[#A67C2E] font-semibold mt-0.5">
                  {v.tamilName}
                </p>

                {/* Date & Time pills */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm text-[#274236]/90 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C9A24A]" />
                    <strong className="text-[#274236]">Date:</strong> {v.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C9A24A]" />
                    <strong className="text-[#274236]">Time:</strong> {v.time}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FFFDF7] border border-[#C9A24A]/25 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-[#E8F1E4] flex items-center justify-center text-[#274236] shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A24A]" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#A67C2E] font-bold">
                      Venue Address
                    </p>
                    <p className="text-base sm:text-lg font-serif font-semibold text-[#274236]">
                      {v.address}
                    </p>
                  </div>
                </div>

                {/* Action Buttons: Directions, Map, Calendar */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <Button
                    href={v.directionsUrl}
                    variant="forest"
                    size="sm"
                    icon={Navigation}
                    className="flex-1 min-w-[140px]"
                  >
                    Directions
                  </Button>
                  <Button
                    href={v.mapEmbedUrl}
                    variant="outline"
                    size="sm"
                    icon={Compass}
                    className="flex-1 min-w-[140px]"
                  >
                    Map
                  </Button>
                  <Button
                    href={v.calendarLink}
                    variant="gold"
                    size="sm"
                    icon={CalendarPlus}
                    className="flex-1 min-w-[140px]"
                  >
                    Calendar
                  </Button>
                </div>

                {/* Transportation Tips */}
                <div className="pt-2 border-t border-[#C9A24A]/20">
                  <h4 className="text-xs uppercase tracking-wider text-[#A67C2E] font-bold mb-3">
                    Transit & Commute Directions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#274236]/80">
                    <div className="p-3.5 rounded-xl bg-[#F8F3E8]/60 border border-[#C9A24A]/20 flex items-start gap-2.5">
                      <Train className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#274236]">By Train</p>
                        <p className="pt-0.5">{v.transportTips.train}</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F8F3E8]/60 border border-[#C9A24A]/20 flex items-start gap-2.5">
                      <Bus className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#274236]">By Bus</p>
                        <p className="pt-0.5">{v.transportTips.bus}</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F8F3E8]/60 border border-[#C9A24A]/20 flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-[#C9A24A] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#274236]">By Car / Taxi</p>
                        <p className="pt-0.5">{v.transportTips.road}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <SectionDivider variant="mandala" className="my-12" />

        {/* Assistance */}
        <div className="bg-[#F8F3E8] p-8 rounded-3xl border border-[#C9A24A]/30 text-center space-y-3">
          <h4 className="text-xl font-serif text-[#274236]">Need Travel Guidance?</h4>
          <p className="text-xs sm:text-sm text-[#274236]/80 font-serif">
            Contact our family coordinators for assistance reaching the venues:
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button href="tel:9884677345" variant="forest" size="sm" icon={Phone}>
              Call 9884677345
            </Button>
            <Button href="tel:9941796400" variant="forest" size="sm" icon={Phone}>
              Call 9941796400
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
