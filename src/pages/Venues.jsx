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
  ExternalLink,
} from "lucide-react";

export default function Venues() {
  const venues = [
    {
      id: "wedding-venue",
      venueType: "Wedding Venue (சுபமுகூர்த்தம்)",
      name: "Sri Thandayuthapani Swamy Murugan Temple",
      tamilName: "ஸ்ரீ தண்டாயுதபாணி சுவாமி முருகன் திருக்கோயில்",
      date: "30 October 2026, Friday",
      time: "6:00 AM to 7:30 AM (Vrischika Lagnam)",
      address: "Veerapuram, Morai, Avadi, Chennai - 600055",
      directionsUrl: "https://maps.app.goo.gl/xjG84KpJYC1tJ7X78",
      mapEmbedUrl: "https://maps.app.goo.gl/xjG84KpJYC1tJ7X78",
      embedIframeUrl: "https://maps.google.com/maps?q=13.1794793,80.0897212&z=15&output=embed",
      calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        "Priyadharshini & Parthipan — Subamuhurtham (Wedding)"
      )}&dates=20261030T060000/20261030T090000&details=${encodeURIComponent(
        "Sacred wedding ceremony at Sri Thandayuthapani Swamy Murugan Temple, Veerapuram, Avadi."
      )}&location=${encodeURIComponent(
        "Sri Thandayuthapani Swamy Murugan Temple, Veerapuram, Avadi, Chennai - 600055"
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
      name: "Rajeswari Navaraj Mahal A/c",
      tamilName: "ராஜேஸ்வரி நவராஜ் மஹால் A/c",
      date: "30 October 2026, Friday",
      time: "6:30 PM onwards",
      address: "Gandhi Main Road, Oragadam, Ambattur, Chennai",
      directionsUrl:
        "https://maps.app.goo.gl/EXwFr4DsQeS6SzUA8?g_st=aw",
      mapEmbedUrl: "https://maps.app.goo.gl/EXwFr4DsQeS6SzUA8?g_st=aw",
      embedIframeUrl: "https://maps.google.com/maps?q=Rajeswari+Navaraj+Mahal+Gandhi+Main+Road+Oragadam+Ambattur+Chennai&z=15&output=embed",
      calendarLink: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        "Priyadharshini & Parthipan — Wedding Reception"
      )}&dates=20261030T183000/20261030T223000&details=${encodeURIComponent(
        "Wedding reception at Rajeswari Navaraj Mahal A/c, Gandhi Main Road, Oragadam, Ambattur, Chennai."
      )}&location=${encodeURIComponent(
        "Rajeswari Navaraj Mahal A/c, Gandhi Main Road, Oragadam, Ambattur, Chennai"
      )}`,
      highlights: [
        "Fully Air-Conditioned Grand Celebration Hall",
        "Spacious traditional dining hall for royal banquet",
        "Bus Routes 62, 120F directly stop at Oragadam, Ambattur",
      ],
      transportTips: {
        train: "Ambattur Railway Station (~3 km)",
        bus: "Bus Routes: 62, 120F • Alighting Stop: Oragadam, Ambattur (ஒரகடம், அம்பத்தூர்)",
        road: "Easily accessible from Ambattur OT, Gandhi Main Road & Chennai Bypass",
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
              className="card-luxury bg-wedding-ivory rounded-3xl border-2 border-wedding-gold/35 shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8 bg-linear-to-r from-wedding-cream to-wedding-ivory border-b border-wedding-gold/25">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-wedding-lightgreen text-wedding-forest border border-wedding-sage mb-2.5">
                  <Sparkles className="w-3.5 h-3.5 text-wedding-gold" />
                  {v.venueType}
                </span>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-wedding-forest">
                  {v.name}
                </h3>
                <p className="text-sm font-tamil text-wedding-darkgold font-semibold mt-0.5">
                  {v.tamilName}
                </p>

                {/* Date & Time pills */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-4 text-xs sm:text-sm text-wedding-forest/90 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-wedding-gold" />
                    <strong className="text-wedding-forest">Date:</strong> {v.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-wedding-gold" />
                    <strong className="text-wedding-forest">Time:</strong> {v.time}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-wedding-ivory border border-wedding-gold/25 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-wedding-lightgreen flex items-center justify-center text-wedding-forest shrink-0">
                    <MapPin className="w-5 h-5 text-wedding-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-wedding-darkgold font-bold">
                      Venue Address
                    </p>
                    <p className="text-base sm:text-lg font-serif font-semibold text-wedding-forest">
                      {v.address}
                    </p>
                  </div>
                </div>

                {/* Interactive Embedded Google Map */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-wedding-forest flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-wedding-gold" />
                      Live Map View
                    </span>
                    <a
                      href={v.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wedding-darkgold hover:underline flex items-center gap-1 font-semibold text-xs transition-colors"
                    >
                      Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-wedding-gold/30 shadow-md relative aspect-video sm:aspect-[21/9] w-full bg-wedding-cream">
                    <iframe
                      title={`${v.name} Map Location`}
                      src={v.embedIframeUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </div>

                {/* Action Buttons: Directions & Calendar */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <Button
                    href={v.directionsUrl}
                    variant="forest"
                    size="sm"
                    icon={Navigation}
                    className="w-full justify-center text-xs sm:text-sm font-semibold py-2.5 shadow-sm"
                  >
                    Get Directions
                  </Button>
                  <Button
                    href={v.calendarLink}
                    variant="gold"
                    size="sm"
                    icon={CalendarPlus}
                    className="w-full justify-center text-xs sm:text-sm font-semibold py-2.5 shadow-sm"
                  >
                    Add to Calendar
                  </Button>
                </div>

                {/* Transportation Tips */}
                <div className="pt-2 border-t border-wedding-gold/20">
                  <h4 className="text-xs uppercase tracking-wider text-wedding-darkgold font-bold mb-3">
                    Transit & Commute Directions
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-wedding-forest/80">
                    <div className="p-3.5 rounded-xl bg-wedding-cream/60 border border-wedding-gold/20 flex items-start gap-2.5">
                      <Train className="w-4 h-4 text-wedding-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-wedding-forest">By Train</p>
                        <p className="pt-0.5">{v.transportTips.train}</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-wedding-cream/60 border border-wedding-gold/20 flex items-start gap-2.5">
                      <Bus className="w-4 h-4 text-wedding-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-wedding-forest">By Bus</p>
                        <p className="pt-0.5">{v.transportTips.bus}</p>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-wedding-cream/60 border border-wedding-gold/20 flex items-start gap-2.5">
                      <Car className="w-4 h-4 text-wedding-gold shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-wedding-forest">By Car / Taxi</p>
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
        <div className="bg-wedding-cream p-8 rounded-3xl border border-wedding-gold/30 text-center space-y-3">
          <h4 className="text-xl font-serif text-wedding-forest">Need Travel Guidance?</h4>
          <p className="text-xs sm:text-sm text-wedding-forest/80 font-serif">
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
