import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  Heart,
  ChevronDown,
  Navigation,
  Compass,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import EventCard from "../components/EventCard";
import Button from "../components/Button";
import { weddingData } from "../data/weddingData";
import { eventsData } from "../data/eventsData";

export default function Home({ onReopenIntro }) {
  const { couple, muhurthamAstrology, spiritualBlessings, countdownTarget } = weddingData;

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(countdownTarget).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isExpired: false,
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [countdownTarget]);

  return (
    <PageTransition className="pt-12!">
      {/* ============================================================ */}
      {/* 1. CINEMATIC MOBILE-FIRST HERO SECTION                       */}
      {/* ============================================================ */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-linear-to-b from-wedding-lightgreen via-wedding-ivory to-wedding-cream py-20 sm:py-24">
        {/* Soft Gold Glow Radial Backdrop */}
        <div className="absolute inset-0 bg-radial from-wedding-gold/12 via-transparent to-transparent pointer-events-none" />

        {/* Subtle Decorative Floral Mandap Pattern / Geometric Rings */}
        <div className="absolute w-85 h-85 sm:w-135 sm:h-135 md:w-180 md:h-180 rounded-full border border-wedding-gold/25 pointer-events-none animate-[spin_240s_linear_infinite]" />
        <div className="absolute w-72.5 h-72.5 sm:w-115 sm:h-115 md:w-155 md:h-155 rounded-full border border-dashed border-wedding-gold/20 pointer-events-none" />

        {/* Subtle Corner Floral Filigree SVG */}
        <div className="absolute top-6 left-6 w-20 h-20 opacity-20 pointer-events-none text-wedding-gold">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M0 0c50 0 50 50 50 50S50 100 100 100C50 100 50 50 50 50S50 0 0 0z" />
          </svg>
        </div>
        <div className="absolute top-6 right-6 w-20 h-20 opacity-20 pointer-events-none text-wedding-gold rotate-90">
          <svg viewBox="0 0 100 100" fill="currentColor">
            <path d="M0 0c50 0 50 50 50 50S50 100 100 100C50 100 50 50 50 50S50 0 0 0z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          {/* Top Invocations */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1.5"
          >
            <span className="font-serif text-3xl sm:text-4xl font-bold text-wedding-darkgold block">உ</span>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-serif text-wedding-forest/80 font-medium">
              <span>முனீஸ்வரர் துணை</span>
              <span className="text-wedding-gold">✦</span>
              <span>மேல் மலையனூர் அங்காள பரமேஸ்வரி துணை</span>
            </div>
          </motion.div>

          {/* WEDDING INVITATION TAG */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p className="inline-block text-xs sm:text-sm font-sans uppercase tracking-[0.35em] text-wedding-darkgold font-bold py-1 px-4 rounded-full bg-wedding-ivory/80 border border-wedding-gold/30 backdrop-blur-sm shadow-xs">
              WEDDING INVITATION
            </p>
          </motion.div>

          {/* COUPLE NAMES DISPLAY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="space-y-3 py-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-wedding-forest tracking-tight uppercase leading-none font-medium">
              P. PRIYADHARSHINI
            </h1>

            {/* Heart Divider */}
            <div className="flex items-center justify-center gap-3 my-2 text-wedding-gold">
              <div className="h-px w-14 sm:w-24 bg-linear-to-r from-transparent via-wedding-gold to-wedding-darkgold" />
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-2xl sm:text-3xl leading-none"
              >
                ♡
              </motion.span>
              <div className="h-px w-14 sm:w-24 bg-linear-to-l from-transparent via-wedding-gold to-wedding-darkgold" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-wedding-forest tracking-tight uppercase leading-none font-medium">
              M. PARTHIPAN
            </h1>
          </motion.div>

          {/* DATE & VENUE BADGE */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="space-y-1.5 pt-2"
          >
            <p className="text-lg sm:text-2xl font-serif font-bold tracking-widest text-wedding-forest uppercase">
              30 OCTOBER 2026
            </p>
            <p className="text-xs sm:text-sm font-sans tracking-[0.25em] text-wedding-darkgold uppercase font-semibold">
              FRIDAY • AVADI, CHENNAI
            </p>
            <p className="text-xs font-tamil text-wedding-forest/75 pt-0.5">
              பராபவ வருடம் ஐப்பசி 13 • சுபமுகூர்த்தம் & திருமண வரவேற்பு
            </p>
          </motion.div>

          {/* HERO ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              to="/story"
              variant="forest"
              size="lg"
              className="btn-gold-glow px-8! py-3.5! text-sm sm:text-base tracking-wider uppercase font-serif"
            >
              EXPLORE OUR STORY
            </Button>
            <Button
              to="/invitation"
              variant="gold"
              size="lg"
              className="btn-gold-glow px-8! py-3.5! text-sm sm:text-base tracking-wider uppercase font-serif"
            >
              VIEW INVITATION
            </Button>
          </motion.div>

          {/* Replay Intro Option */}
          {onReopenIntro && (
            <div className="pt-2">
              <button
                onClick={onReopenIntro}
                className="inline-flex items-center gap-1.5 text-xs text-wedding-darkgold hover:text-wedding-forest transition-colors cursor-pointer opacity-70 hover:opacity-100"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay Cinematic Intro</span>
              </button>
            </div>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-wedding-forest/60 gap-1 animate-bounce pointer-events-none">
          <span className="font-sans uppercase tracking-widest text-[10px]">Explore</span>
          <ChevronDown className="w-4 h-4 text-wedding-gold" />
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. LIVE COUNTDOWN SECTION                                    */}
      {/* ============================================================ */}
      <section className="py-12 bg-linear-to-b from-wedding-cream to-wedding-ivory border-y border-wedding-gold/25 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-wedding-darkgold font-bold">
            Auspicious Muhurtham Countdown
          </p>

          {timeLeft.isExpired ? (
            <div className="p-6 rounded-2xl bg-wedding-lightgreen border-2 border-wedding-gold max-w-xl mx-auto shadow-md">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-wedding-forest">
                THE WEDDING DAY HAS ARRIVED ❤️
              </h3>
              <p className="text-sm font-serif text-wedding-forest/80 mt-1">
                May the divine blessings of Lord Muruga bestow eternal harmony upon the newlyweds!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto">
              {[
                { label: "DAYS", value: timeLeft.days },
                { label: "HOURS", value: timeLeft.hours },
                { label: "MINUTES", value: timeLeft.minutes },
                { label: "SECONDS", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="card-luxury bg-wedding-ivory border border-wedding-gold/30 rounded-2xl p-3 sm:p-5 shadow-sm"
                >
                  <span className="block text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-wedding-forest">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-wedding-darkgold font-bold font-sans mt-1 block">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. COUPLE SECTION                                            */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Two Souls Blessed by Tradition"
          title="The Bride & The Groom"
          tamilSubtitle="மணமக்கள் அறிமுகம்"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* BRIDE CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card-luxury bg-wedding-ivory border-2 border-wedding-gold/30 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Corner Ornaments */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-wedding-gold" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-wedding-gold" />

            {/* Photo Placeholder Frame with Traditional Mandap Arch */}
            <div className="frame-zoom relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-full p-2 bg-linear-to-tr from-wedding-gold via-wedding-gold-light to-wedding-forest shadow-md">
              <div className="zoom-target w-full h-full rounded-full bg-wedding-cream border-2 border-wedding-ivory flex flex-col items-center justify-center text-center p-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-wedding-darkgold">P</span>
                <span className="text-[10px] uppercase tracking-widest text-wedding-forest/70 mt-1 font-semibold">
                  The Bride
                </span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-wedding-darkgold font-bold">
                Selvi
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-wedding-forest">
                P. Priyadharshini
              </h3>
              <p className="text-sm font-sans font-semibold text-wedding-darkgold">
                Diploma (Beautician)
              </p>
              <p className="text-xs font-tamil text-wedding-forest/80">
                {couple.bride.tamilName}, Diploma (Beautician)
              </p>

              {/* Parents details */}
              <div className="mt-6 pt-5 border-t border-wedding-gold/25 space-y-1.5 text-xs sm:text-sm text-wedding-forest/80 font-serif">
                <p className="text-xs uppercase tracking-wider text-wedding-darkgold font-sans font-bold">
                  Beloved Daughter of
                </p>
                <p className="text-base font-semibold text-wedding-forest">
                  Mr. D. Prakash & Mrs. P. Latha
                </p>
                <p className="text-xs font-tamil text-wedding-forest/75">
                  திரு. D. பிரகாஷ் - திருமதி. P. லதா
                </p>
                <p className="text-xs text-wedding-forest/70 pt-1 font-sans">
                  Residence: {couple.bride.address.area}, Chennai
                </p>
              </div>
            </div>
          </motion.div>

          {/* GROOM CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="card-luxury bg-wedding-ivory border-2 border-wedding-gold/30 rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden"
          >
            {/* Corner Ornaments */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-wedding-gold" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-wedding-gold" />

            {/* Photo Placeholder Frame with Traditional Mandap Arch */}
            <div className="frame-zoom relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 rounded-full p-2 bg-linear-to-tr from-wedding-forest via-wedding-gold-light to-wedding-gold shadow-md">
              <div className="zoom-target w-full h-full rounded-full bg-wedding-cream border-2 border-wedding-ivory flex flex-col items-center justify-center text-center p-4">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-wedding-forest">M</span>
                <span className="text-[10px] uppercase tracking-widest text-wedding-forest/70 mt-1 font-semibold">
                  The Groom
                </span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest text-wedding-darkgold font-bold">
                Selvan
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-wedding-forest">
                M. Parthipan
              </h3>
              <p className="text-sm font-sans font-semibold text-wedding-darkgold">
                B.E. (EEE)
              </p>
              <p className="text-xs font-tamil text-wedding-forest/80">
                {couple.groom.tamilName}, B.E., (EEE)
              </p>

              {/* Parents details */}
              <div className="mt-6 pt-5 border-t border-wedding-gold/25 space-y-1.5 text-xs sm:text-sm text-wedding-forest/80 font-serif">
                <p className="text-xs uppercase tracking-wider text-wedding-darkgold font-sans font-bold">
                  Beloved Son of (Younger Son)
                </p>
                <p className="text-base font-semibold text-wedding-forest">
                  Mr. P. Murugesan & Mrs. M. Mageswari
                </p>
                <p className="text-xs font-tamil text-wedding-forest/75">
                  திரு. P. முருகேசன் - திருமதி. M. மகேஸ்வரி
                </p>
                <p className="text-xs text-wedding-forest/70 pt-1 font-sans">
                  Residence: {couple.groom.address.area}, Chennai
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider variant="mandala" />

      {/* ============================================================ */}
      {/* 4. WEDDING EVENTS SECTION                                    */}
      {/* ============================================================ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <SectionHeading
          subtitle="Celebrations & Ceremonies Schedule"
          title="Wedding Events"
          tamilSubtitle="நிகழ்ச்சி நிரல்"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              featured={evt.id === "wedding"}
            />
          ))}
        </div>

        <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
          <Button to="/venues" variant="forest" size="md" icon={MapPin}>
            View Map & Directions
          </Button>
          <Button to="/invitation" variant="gold" size="md">
            View Digital Invitation
          </Button>
        </div>
      </section>

      <SectionDivider variant="lotus" />

      {/* ============================================================ */}
      {/* 5. THIRUKKURAL BLESSING                                      */}
      {/* ============================================================ */}
      <section className="py-14 bg-linear-to-r from-wedding-ivory via-wedding-cream to-wedding-ivory border-y border-wedding-gold/30 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-wedding-darkgold font-bold">
            Sacred Tamil Blessing • திருக்குறள்
          </span>
          <p className="text-xl sm:text-2xl font-serif text-wedding-forest leading-relaxed whitespace-pre-line font-semibold">
            "{spiritualBlessings.kural.tamil}"
          </p>
          <p className="text-xs sm:text-sm text-wedding-forest/70 italic max-w-xl mx-auto font-serif">
            — {spiritualBlessings.kural.english}
          </p>
        </div>
      </section>
    </PageTransition>
  );
}
