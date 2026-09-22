import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Button from "../components/Button";
import { Heart, Sparkles, Home as HomeIcon, Award, Calendar, CheckCircle2 } from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function Story() {
  const { couple, spiritualBlessings } = weddingData;

  // Timeline with authentic invitation facts and clear editable placeholders for couple memories
  const timelineEvents = [
    {
      date: "August 2026",
      title: "The Auspicious Proposal & Horoscope Matching",
      tamilTitle: "பெரியோர்களால் நிச்சயிக்கப்பட்ட மங்கள நன்மணம்",
      badge: "Vedic Astrology & Family Alliance",
      description:
        "Rooted in Tamil cultural traditions and guided by family elders, the horoscopes of Priyadarshini and Parthipan were aligned with auspicious harmony under Vrischika Lagnam and Mrigashirsha Nakshatra, seeking the blessings of Sri Muneeswarar and Melmalayanur Angala Parameswari.",
      editableNote: "[Editable Placeholder: Add the personal story of when both families first visited each other's homes in Avadi & Ambattur]",
      icon: Sparkles,
    },
    {
      date: "September 2026",
      title: "Formal Engagement & Family Accord",
      tamilTitle: "இரு குடும்பங்களின் இனிய சங்கமம்",
      badge: "Alliance Solemnized",
      description:
        "The parents, Mr. D. Prakash & Mrs. P. Latha of Avadi and Mr. P. Murugesan & Mrs. M. Mageswari of Ambattur, along with beloved grandparents and kin, officially affirmed the joyous union with exchange of thamboolam and blessings.",
      editableNote: "[Editable Placeholder: Add moments from the engagement or pre-wedding gatherings]",
      icon: HomeIcon,
    },
    {
      date: "28 October 2026",
      title: "Pandakkal Ceremony",
      tamilTitle: "மங்கள பந்தக்கால் நடுதல்",
      badge: "Pre-Wedding Sacred Ritual",
      description:
        "Commencing at 5:00 AM on Wednesday, the sacred bamboo pole adorned with mango leaves and turmeric is erected by maternal uncles and elders, spiritually sanctifying both households for the grand wedding days ahead.",
      editableNote: null,
      icon: Calendar,
    },
    {
      date: "30 October 2026",
      title: "Subamuhurtham & Grand Reception",
      tamilTitle: "சுபமுகூர்த்தம் & திருமண வரவேற்பு",
      badge: "The Sacred Vows",
      description:
        "Morning wedding solemnized between 6:00 AM and 7:30 AM at Sri Thandayuthapani Swamy Murugar Temple, Veerapuram, Avadi, followed by a grand royal reception and banquet feast from 6:30 PM at Rajeswari Navaraj Mahal A/c, Ambattur.",
      editableNote: null,
      icon: Heart,
    },
  ];

  return (
    <PageTransition>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Journey of Tradition & Love"
          title="Our Story & Timeline"
          tamilSubtitle="அன்பும் அறனும் வழிநடத்தும் இல்லறப் பயணம்"
        />

        {/* Lead Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-r from-[#FFFDF7] via-[#F8F3E8] to-[#FFFDF7] p-6 sm:p-10 rounded-3xl border border-[#C9A24A]/30 text-center max-w-3xl mx-auto mb-16 shadow-sm"
        >
          <p className="font-serif text-lg sm:text-2xl text-[#274236] italic leading-relaxed">
            "When two harmonious hearts are blessed by elders, solemnized before Lord Muruga, and guided by family love, life blossoms into its truest beauty."
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#A67C2E]">
            <span className="h-[1px] w-8 bg-[#C9A24A]" />
            <span className="text-xs uppercase tracking-widest font-bold">
              Priyadarshini & Parthipan
            </span>
            <span className="h-[1px] w-8 bg-[#C9A24A]" />
          </div>
        </motion.div>

        {/* ELEGANT TIMELINE */}
        <div className="relative border-l-2 border-[#C9A24A]/40 ml-4 sm:ml-8 md:ml-32 space-y-12 pb-8">
          {timelineEvents.map((evt, idx) => {
            const Icon = evt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-10 group"
              >
                {/* Timeline Gold Node */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#FFFDF7] border-2 border-[#C9A24A] flex items-center justify-center text-[#274236] shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-4 h-4 text-[#C9A24A]" />
                </div>

                {/* Timeline Card */}
                <div className="card-luxury bg-[#FFFDF7] border border-[#C9A24A]/30 rounded-2xl p-6 sm:p-8 shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#A67C2E]">
                      {evt.date}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#E8F1E4] text-[#274236] border border-[#DCEAD5]">
                      {evt.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif text-[#274236] font-semibold">
                    {evt.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-tamil text-[#A67C2E] font-medium mt-0.5 mb-3">
                    {evt.tamilTitle}
                  </p>

                  <p className="text-xs sm:text-sm text-[#274236]/80 leading-relaxed font-serif">
                    {evt.description}
                  </p>

                  {evt.editableNote && (
                    <div className="mt-3 p-2.5 rounded-lg bg-[#F8F3E8]/60 border border-dashed border-[#C9A24A]/40 text-[11px] text-[#A67C2E] italic">
                      {evt.editableNote}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <SectionDivider variant="mandala" className="my-12" />

        {/* CTA */}
        <div className="text-center flex flex-wrap justify-center gap-4">
          <Button to="/wedding" variant="forest" size="md">
            View Wedding Ceremony
          </Button>
          <Button to="/invitation" variant="gold" size="md">
            View Wedding Invitation
          </Button>
        </div>
      </div>
    </PageTransition>
  );
}
