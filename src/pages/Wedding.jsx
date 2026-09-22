import React from "react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import { Sparkles, Heart, Bell, Sun, MapPin, Navigation, Calendar, CalendarPlus, Compass } from "lucide-react";
import { eventsData } from "../data/eventsData";
import { weddingData } from "../data/weddingData";

export default function Wedding() {
  const weddingEvent = eventsData.find((e) => e.id === "wedding");
  const { muhurthamAstrology, spiritualBlessings } = weddingData;

  const sacredRites = [
    {
      order: "01",
      name: "Mangala Vadyam & Ganapathi Homam",
      tamil: "மங்கள வாத்தியம் & கணபதி ஹோமம்",
      desc: "Sacred Nadaswaram and Thavil resonant melodies welcome the divine, followed by holy fire rituals purifying the mandap.",
    },
    {
      order: "02",
      name: "Kanyadaanam",
      tamil: "கன்னிகாதானம்",
      desc: "The heartfelt blessing where parents Mr. D. Prakash & Mrs. P. Latha place Priyadharshini's hand into Parthipan's, entrusting her to his lifelong care and devotion.",
    },
    {
      order: "03",
      name: "Mangalya Dharanam (Sacred Thali Tying)",
      tamil: "மாங்கல்ய தாரணம் (சுபமுகூர்த்தம்)",
      desc: "The paramount divine moment between 6:00 AM and 7:30 AM in Vrischika Lagnam, where Parthipan ties the sacred Golden Thali accompanied by the shower of holy Akshata grains and blessings.",
    },
    {
      order: "04",
      name: "Saptapadi (Seven Sacred Steps)",
      tamil: "சப்தபதி (ஏழடி எடுத்து வைத்தல்)",
      desc: "Taking the seven revered steps together around the Agni (sacred fire), sealing eternal companionship, spiritual duty, mutual respect, and prosperity.",
    },
    {
      order: "05",
      name: "Arundhati & Dhruva Darshanam",
      tamil: "அருந்ததி பார்த்தல் & ஆசீர்வாதம்",
      desc: "Beholding the steadfast star Arundhati and seeking the cherished blessings of parents, maternal uncles, grandparents, and loved ones.",
    },
  ];

  const handleCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Priyadharshini & Parthipan — Subamuhurtham (Wedding)"
    )}&dates=20261030T060000/20261030T090000&details=${encodeURIComponent(
      "Sacred marriage ceremony at Sri Thandayuthapani Swamy Murugan Temple, Veerapuram, Avadi."
    )}&location=${encodeURIComponent(
      "Sri Thandayuthapani Swamy Murugan Temple, Veerapuram, Avadi, Chennai"
    )}`;
    window.open(googleCalendarUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="The Sacred Union Solemnized in Vrischika Lagnam"
          title="Subamuhurtham Ceremony"
          tamilSubtitle="ஸ்ரீ தண்டாயுதபாணி சுவாமி முருகர் திருக்கோயிலில் நடைபெறும் திருமண வைபவம்"
        />

        {/* Featured Wedding Event Card */}
        {weddingEvent && (
          <div className="max-w-3xl mx-auto mb-12">
            <EventCard event={weddingEvent} featured={true} />
          </div>
        )}

        <SectionDivider variant="mandala" />

        {/* Temple & Divine Sanctum Map & Info Card */}
        <div className="bg-linear-to-b from-wedding-ivory to-wedding-cream p-8 sm:p-10 rounded-3xl border border-wedding-gold/40 shadow-sm max-w-4xl mx-auto my-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-wedding-lightgreen border border-wedding-sage flex items-center justify-center text-wedding-forest shrink-0 shadow-inner">
              <Bell className="w-8 h-8 text-wedding-gold" />
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <span className="text-xs uppercase tracking-widest text-wedding-darkgold font-semibold">
                Sacred Temple Sanctum
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-wedding-forest">
                Sri Thandayuthapani Swamy Murugan Temple
              </h3>
              <p className="text-sm font-tamil text-wedding-darkgold">
                வீராபுரம், ஆவடி, சென்னை (Veerapuram, Avadi, Chennai)
              </p>
              <p className="text-xs sm:text-sm text-wedding-forest/80 leading-relaxed pt-1 font-serif">
                Solemnizing the wedding in the divine presence of Lord Muruga, invoking abundance of good health, wisdom, and eternal harmony for the newly wedded couple.
              </p>
            </div>
          </div>

          {/* Action Row: Directions, Map, Calendar */}
          <div className="pt-4 border-t border-wedding-gold/20 flex flex-wrap gap-3">
            <Button
              href="https://maps.app.goo.gl/xjG84KpJYC1tJ7X78"
              variant="forest"
              size="sm"
              icon={Navigation}
              className="flex-1 min-w-37.5"
            >
              Get Directions
            </Button>
            <Button
              href="https://maps.app.goo.gl/xjG84KpJYC1tJ7X78"
              variant="outline"
              size="sm"
              icon={Compass}
              className="flex-1 min-w-37.5"
            >
              Open Route Map
            </Button>
            <Button
              onClick={handleCalendar}
              variant="gold"
              size="sm"
              icon={CalendarPlus}
              className="flex-1 min-w-37.5"
            >
              Add to Calendar
            </Button>
          </div>
        </div>

        {/* Auspicious Muhurtham Timings Box */}
        <div className="bg-wedding-ivory p-8 rounded-2xl border border-wedding-gold/30 max-w-4xl mx-auto mb-16 shadow-sm">
          <h4 className="text-xl font-serif text-center text-wedding-forest mb-6">
            Astrological Consecration Details
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Date</p>
              <p className="text-sm font-medium text-wedding-forest">30-10-2026 (Friday)</p>
              <p className="text-xs font-tamil text-wedding-forest/80">வெள்ளிக்கிழமை</p>
            </div>
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Auspicious Lagnam</p>
              <p className="text-sm font-semibold text-wedding-forest">Vrischika Lagnam</p>
              <p className="text-xs font-tamil text-wedding-forest/80">விருச்சிக லக்னம்</p>
            </div>
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Muhurtham Hours</p>
              <p className="text-sm font-semibold text-wedding-forest">6:00 AM – 7:30 AM</p>
              <p className="text-xs font-tamil text-wedding-forest/80">காலை 6.00 மணிமுதல் 7.30 வரை</p>
            </div>
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Star / Nakshatram</p>
              <p className="text-sm font-medium text-wedding-forest">Mrigashirsha</p>
              <p className="text-xs font-tamil text-wedding-forest/80">மிருகசீரிஷம் நட்சத்திரம்</p>
            </div>
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Tithi</p>
              <p className="text-sm font-medium text-wedding-forest">Panchami Tithi</p>
              <p className="text-xs font-tamil text-wedding-forest/80">பஞ்சமி திதி</p>
            </div>
            <div className="p-3.5 rounded-xl bg-wedding-cream/80 border border-wedding-gold/20">
              <p className="text-[11px] uppercase tracking-wider text-wedding-darkgold font-semibold">Yogam</p>
              <p className="text-sm font-medium text-wedding-forest">Siddha Yogam</p>
              <p className="text-xs font-tamil text-wedding-forest/80">சித்தயோகம்</p>
            </div>
          </div>
        </div>

        {/* Sacred Rites Sequence */}
        <div className="space-y-4 max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl sm:text-3xl font-serif text-center text-wedding-forest mb-8">
            The Sequence of Sacred Rites
          </h3>

          <div className="space-y-4">
            {sacredRites.map((rite, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 p-5 sm:p-6 rounded-2xl bg-wedding-ivory border border-wedding-gold/25 shadow-sm hover:border-wedding-gold/50 transition-colors"
              >
                <span className="font-serif text-2xl sm:text-3xl font-bold text-wedding-gold shrink-0">
                  {rite.order}
                </span>
                <div className="space-y-1 flex-1">
                  <h4 className="text-lg sm:text-xl font-serif text-wedding-forest">{rite.name}</h4>
                  <p className="text-xs sm:text-sm font-tamil text-wedding-darkgold font-medium">{rite.tamil}</p>
                  <p className="text-xs sm:text-sm text-wedding-forest/80 leading-relaxed pt-1 font-serif">
                    {rite.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="text-center flex flex-wrap justify-center gap-4">
          <Button to="/reception" variant="gold" size="md">
            Next: Evening Reception
          </Button>
          <Button to="/venues" variant="outline" size="md">
            View Wedding Venue
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
