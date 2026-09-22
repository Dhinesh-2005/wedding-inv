import React from "react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import { Sparkles, Utensils, Music, Camera, MapPin, Navigation, CalendarPlus, Compass } from "lucide-react";
import { eventsData } from "../data/eventsData";

export default function Reception() {
  const receptionEvent = eventsData.find((e) => e.id === "reception");

  const highlights = [
    {
      icon: Sparkles,
      title: "Royal Couple Felicitation",
      tamil: "மணமக்கள் வரவேற்பு & வாழ்த்து",
      desc: "Join us in greeting the newlyweds Priyadharshini & Parthipan as they begin their journey together with warm smiles, hugs, and blessings.",
    },
    {
      icon: Utensils,
      title: "Grand South Indian Royal Feast",
      tamil: "அறுசுவை மங்களத் திருமண விருந்து",
      desc: "An elaborate traditional banquet featuring aromatic delicacies, traditional sweets, crispy appalams, and mouthwatering South Indian specialties.",
    },
    {
      icon: Camera,
      title: "Memorable Photo Sessions",
      tamil: "நினைவுப் புகைப்படங்கள்",
      desc: "Capture cherished memories with the bride, groom, and both families on a beautifully decorated floral stage.",
    },
    {
      icon: Music,
      title: "Melodious Festive Ambience",
      tamil: "இனிமையான மங்கள இசை",
      desc: "Soothing classical fusion and joyful music to accompany an evening of laughter, reconnection, and celebration.",
    },
  ];

  const handleCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Priyadharshini & Parthipan — Wedding Reception"
    )}&dates=20261030T183000/20261030T223000&details=${encodeURIComponent(
      "Wedding Reception at Rajeswari Navaraj Mahal A/c, Gandhi Main Road, Oragadam, Ambattur, Chennai."
    )}&location=${encodeURIComponent(
      "Rajeswari Navaraj Mahal A/c, Gandhi Main Road, Oragadam, Ambattur, Chennai"
    )}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Exact Requested Display Header */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A67C2E] font-bold">
            AN ENCHANTING EVENING OF CELEBRATION
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#274236] tracking-tight uppercase">
            WEDDING RECEPTION
          </h1>
          <div className="space-y-1 pt-1">
            <p className="text-lg sm:text-2xl font-serif font-bold text-[#274236]">
              30 October 2026 • Friday
            </p>
            <p className="text-sm sm:text-base font-sans font-semibold text-[#A67C2E]">
              6:30 PM onwards
            </p>
          </div>
        </div>

        {/* Featured Reception Event Card */}
        {receptionEvent && (
          <div className="max-w-3xl mx-auto mb-12">
            <EventCard event={receptionEvent} featured={true} />
          </div>
        )}

        <SectionDivider variant="mandala" />

        {/* Exact Venue Address & Map Details Box */}
        <div className="bg-[#FFFDF7] p-8 sm:p-10 rounded-3xl border border-[#C9A24A]/30 shadow-md max-w-4xl mx-auto my-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
              Reception Venue
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#274236]">
              Rajeswari Navaraj Mahal A/c
            </h2>
            <p className="text-sm font-tamil text-[#A67C2E] font-medium">
              ராஜேஸ்வரி நவராஜ் மஹால் A/c
            </p>

            <div className="pt-3 text-sm sm:text-base text-[#274236]/90 font-serif leading-relaxed">
              <p className="font-semibold">Gandhi Main Road, Oragadam, Ambattur, Chennai.</p>
              <p className="text-xs sm:text-sm text-[#A67C2E] font-sans font-semibold mt-1">
                பேருந்து வழித்தடம் எண் : 62, 120F | இறங்குமிடம் : ஒரகடம், அம்பத்தூர்
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8F3E8]/80 border border-[#C9A24A]/20 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFFDF7] border border-[#C9A24A]/30 flex items-center justify-center shrink-0 text-[#C9A24A]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-base font-semibold text-[#274236]">{h.title}</h4>
                    <p className="text-xs font-tamil text-[#A67C2E] font-medium">{h.tamil}</p>
                    <p className="text-xs text-[#274236]/80 leading-relaxed font-serif">{h.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[#C9A24A]/20 flex flex-wrap gap-3">
            <Button
              href="https://www.google.com/maps/search/?api=1&query=Rajeswari+Navaraj+Mahal+Ambattur+Chennai"
              variant="forest"
              size="sm"
              icon={Navigation}
              className="flex-1 min-w-[150px]"
            >
              Get Directions
            </Button>
            <Button
              href="https://maps.google.com/?q=Oragadam+Ambattur+Chennai"
              variant="outline"
              size="sm"
              icon={Compass}
              className="flex-1 min-w-[150px]"
            >
              Open Route Map
            </Button>
            <Button
              onClick={handleCalendar}
              variant="gold"
              size="sm"
              icon={CalendarPlus}
              className="flex-1 min-w-[150px]"
            >
              Add to Calendar
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center flex flex-wrap justify-center gap-4 mt-12">
          <Button to="/rsvp" variant="gold" size="md">
            RSVP for Reception
          </Button>
          <Button to="/invitation" variant="outline" size="md">
            View Digital E-Patrika
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
