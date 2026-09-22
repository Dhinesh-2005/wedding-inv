import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Toast from "../components/Toast";
import Button from "../components/Button";
import {
  Phone,
  MessageCircle,
  Copy,
  Home as HomeIcon,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { weddingData } from "../data/weddingData";

export default function Contact() {
  const { couple, invitingWithLove } = weddingData;

  // ONLY invitation contact numbers
  const contacts = [
    {
      id: "coord-1",
      name: "Family Contact Person 1",
      tamilName: "குடும்ப வழிகாட்டுதல் ஒருங்கிணைப்பாளர்",
      phone: "9941796400",
      formatted: "+91 99417 96400",
    },
    {
      id: "coord-2",
      name: "Family Contact Person 2",
      tamilName: "குடும்ப வழிகாட்டுதல் ஒருங்கிணைப்பாளர்",
      phone: "9884677345",
      formatted: "+91 98846 77345",
    },
  ];

  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3500);
  };

  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    showToast(`Phone number ${number} copied to clipboard!`);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          subtitle="Family Assistance & Enquiries"
          title="Contact & Helpdesk"
          tamilSubtitle="தொடர்பு & குடும்ப வழிகாட்டுதல்"
        />

        {/* PRIMARY CONTACT CARDS WITH EXACT REQUESTED BUTTONS (CALL, WHATSAPP, COPY NUMBER) */}
        <div className="space-y-6 mb-12">
          <div className="text-center space-y-1 mb-6">
            <p className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
              Official Invitation Helplines
            </p>
            <p className="text-xs sm:text-sm text-[#274236]/80 font-serif">
              For route directions, venue queries, or ceremony schedules, please contact:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contacts.map((c, idx) => (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-luxury bg-[#FFFDF7] p-6 sm:p-8 rounded-3xl border-2 border-[#C9A24A]/30 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#E8F1E4] border border-[#DCEAD5] flex items-center justify-center text-[#274236]">
                      <Phone className="w-5 h-5 text-[#C9A24A]" />
                    </span>
                    
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#274236]">{c.name}</h3>
                  <p className="text-xs font-tamil text-[#274236]/70 mb-3">{c.tamilName}</p>

                  <p className="text-2xl sm:text-3xl font-serif font-bold text-[#274236] tracking-wide mb-5">
                    {c.formatted}
                  </p>
                </div>

                {/* EXACT SPECIFICATION BUTTONS: CALL, WHATSAPP, COPY NUMBER */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#C9A24A]/25">
                  <Button
                    href={`tel:${c.phone}`}
                    variant="forest"
                    size="sm"
                    className="!px-2 !py-2.5 text-xs font-bold uppercase tracking-wider"
                  >
                    CALL
                  </Button>
                  <Button
                    href={`https://wa.me/91${c.phone}`}
                    variant="gold"
                    size="sm"
                    className="!px-2 !py-2.5 text-xs font-bold uppercase tracking-wider"
                  >
                    WHATSAPP
                  </Button>
                  <Button
                    onClick={() => handleCopy(c.phone)}
                    variant="outline"
                    size="sm"
                    className="!px-2 !py-2.5 text-xs font-bold uppercase tracking-wider"
                  >
                    COPY NUMBER
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionDivider variant="mandala" />

        {/* Family Residences */}
        <div className="space-y-6 my-12">
          <h3 className="text-2xl font-serif font-bold text-[#274236] text-center">
            Family Residences & Addresses
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Bride's Residence */}
            <div className="card-luxury bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border border-[#C9A24A]/25 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
                Bride's Residence (Avadi)
              </span>
              <h4 className="text-lg font-serif font-semibold text-[#274236]">
                {couple.bride.parents.father} & {couple.bride.parents.mother}
              </h4>
              <p className="text-xs font-tamil text-[#A67C2E]">{couple.bride.address.tamilFull}</p>
              <p className="text-xs sm:text-sm text-[#274236]/80 font-sans pt-1">
                {couple.bride.address.full}
              </p>
            </div>

            {/* Groom's Residence */}
            <div className="card-luxury bg-[#FFFDF7] p-6 sm:p-8 rounded-2xl border border-[#C9A24A]/25 space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
                Groom's Residence (Ambattur)
              </span>
              <h4 className="text-lg font-serif font-semibold text-[#274236]">
                {couple.groom.parents.father} & {couple.groom.parents.mother}
              </h4>
              <p className="text-xs font-tamil text-[#A67C2E]">{couple.groom.address.tamilFull}</p>
              <p className="text-xs sm:text-sm text-[#274236]/80 font-sans pt-1">
                {couple.groom.address.full}
              </p>
            </div>
          </div>
        </div>

        {/* Elders Inviting */}
        <div className="bg-[#F8F3E8] p-8 rounded-3xl border border-[#C9A24A]/30 text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#A67C2E] font-bold">
            Elders & Hosts Inviting With Love (தங்கள் அன்புள்ள)
          </span>
          <div className="space-y-2 text-sm sm:text-base font-serif text-[#274236]">
            {invitingWithLove.map((host, idx) => (
              <div key={idx} className="border-b border-[#C9A24A]/15 pb-2 last:border-none last:pb-0">
                <p className="font-semibold">{host.english}</p>
                <p className="text-xs font-tamil text-[#A67C2E]">{host.tamil}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </PageTransition>
  );
}
