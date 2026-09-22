import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Button from "../components/Button";
import { Users, Heart, Sparkles, MapPin, Award } from "lucide-react";
import { familyData } from "../data/familyData";
import { weddingData } from "../data/weddingData";

export default function Family() {
  const [activeTab, setActiveTab] = useState("bride"); // 'bride' | 'groom'
  const { couple } = weddingData;

  const currentFamily = activeTab === "bride" ? familyData.brideSide : familyData.groomSide;

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Honouring Our Ancestors & Kin"
          title="Family & Relations"
          tamilSubtitle="சுற்றமும் நட்பும் சூழ நல்வரவு கூறும் உறவுகள்"
        />

        {/* Tab switcher: Bride's Family / Groom's Family */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-[#F8F3E8] border border-[#C9A24A]/30 shadow-inner">
            <button
              onClick={() => setActiveTab("bride")}
              className={`px-6 sm:px-10 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "bride"
                  ? "bg-[#274236] text-[#FFFDF7] shadow-md border border-[#C9A24A]"
                  : "text-[#274236] hover:text-[#A67C2E]"
              }`}
            >
              Bride's Family (பெண்ணுக்குரியோர்கள்)
            </button>
            <button
              onClick={() => setActiveTab("groom")}
              className={`px-6 sm:px-10 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeTab === "groom"
                  ? "bg-[#274236] text-[#FFFDF7] shadow-md border border-[#C9A24A]"
                  : "text-[#274236] hover:text-[#A67C2E]"
              }`}
            >
              Groom's Family (பிள்ளைக்குரியோர்கள்)
            </button>
          </div>
        </div>

        {/* Family Header Overview Card */}
        <div className="card-luxury bg-[#FFFDF7] p-6 sm:p-8 rounded-3xl border border-[#C9A24A]/30 shadow-md mb-12 text-center">
          <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
            {activeTab === "bride" ? "P. Priyadarshini's Lineage" : "M. Parthipan's Lineage"}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#274236] mt-1">
            {currentFamily.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#274236]/80 mt-2 font-serif max-w-2xl mx-auto leading-relaxed">
            {activeTab === "bride"
              ? `Daughter of Mr. D. Prakash & Mrs. P. Latha (Avadi, Chennai). Paternal granddaughter of Late R. Desan - D. Suguna, and maternal granddaughter of Late M. Mani - M. Kanagavalli.`
              : `Son of Mr. P. Murugesan & Mrs. M. Mageswari (Ambattur, Chennai). Paternal grandson of Mr. C. Pavadarayan - Mrs. P. Unnamalai, and maternal grandson of Late G. Perumal - P. Mariyammal.`}
          </p>
        </div>

        {/* Grouped Sections (Parents, Maternal Family, Paternal Family, Siblings, Well Wishers, Other Relationships) */}
        <div className="space-y-10">
          {currentFamily.sections.map((section, idx) => (
            <motion.div
              key={section.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="card-luxury bg-[#FFFDF7] rounded-3xl border border-[#C9A24A]/25 p-6 sm:p-8 shadow-sm"
            >
              {/* Category Title Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C9A24A]/20 pb-3 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C9A24A]" />
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#274236]">
                    {section.category}
                  </h3>
                </div>
                <span className="text-xs sm:text-sm font-tamil text-[#A67C2E] font-semibold">
                  {section.tamilCategory}
                </span>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.members.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-4 rounded-2xl bg-[#F8F3E8]/60 border border-[#C9A24A]/20 hover:border-[#C9A24A] transition-all duration-300 space-y-1"
                  >
                    <p className="text-sm sm:text-base font-serif font-bold text-[#274236]">
                      {m.english}
                    </p>
                    <p className="text-xs font-tamil text-[#274236]/80 font-medium">
                      {m.tamil}
                    </p>
                    {m.role && (
                      <p className="text-[11px] font-sans font-semibold text-[#A67C2E] pt-0.5">
                        {m.role}
                      </p>
                    )}
                    {m.place && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#274236]/70 font-sans">
                        <MapPin className="w-3 h-3 text-[#C9A24A]" />
                        {m.place}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <SectionDivider variant="mandala" className="my-14" />

        {/* Cordial Invite Footer Note */}
        <div className="bg-gradient-to-r from-[#FFFDF7] via-[#F8F3E8] to-[#FFFDF7] p-8 rounded-3xl border border-[#C9A24A]/30 text-center space-y-3">
          <p className="font-serif text-lg sm:text-xl text-[#274236] font-semibold">
            "தங்கள் நல்வரவை அன்புடன் எதிர்நோக்கும் சுற்றமும் - நட்பும்"
          </p>
          <p className="text-xs sm:text-sm text-[#274236]/75 italic font-serif">
            With best compliments and heartfelt invitation from all relatives, friends, and elders of both families.
          </p>
          <div className="pt-2">
            <Button to="/invitation" variant="gold" size="sm">
              View Digital Wedding Book
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
