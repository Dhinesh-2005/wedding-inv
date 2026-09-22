import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SectionHeading from "../components/SectionHeading";
import SectionDivider from "../components/SectionDivider";
import Button from "../components/Button";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Heart,
  Sparkles,
  Phone,
  RotateCcw,
} from "lucide-react";
import { weddingData } from "../data/weddingData";

/**
 * BACKEND-READY ADAPTER CONFIGURATION
 * Readily supports FastAPI, MongoDB backend, Firebase, or Supabase.
 * Set VITE_RSVP_API_URL or customize the submitRSVP function below.
 */
const RSVP_API_URL = import.meta.env.VITE_RSVP_API_URL || null;

async function submitRSVPToBackend(payload) {
  if (RSVP_API_URL) {
    const response = await fetch(RSVP_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`Failed to submit RSVP: ${response.statusText}`);
    }
    return await response.json();
  }

  // Simulated fallback with persistent localStorage store
  await new Promise((resolve) => setTimeout(resolve, 800));
  const existing = JSON.parse(localStorage.getItem("wedding_rsvps") || "[]");
  existing.push({ ...payload, timestamp: new Date().toISOString() });
  localStorage.setItem("wedding_rsvps", JSON.stringify(existing));
  return { success: true, message: "RSVP recorded successfully." };
}

export default function RSVP() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    attendingOption: "❤️ YES, I'LL BE THERE",
    guests: "2",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const attendanceOptions = [
    { label: "❤️ YES, I'LL BE THERE", sub: "Joyfully attending celebrations" },
    { label: "MAYBE", sub: "Tentative / Subject to confirmation" },
    { label: "SORRY, CAN'T ATTEND", sub: "Sending warm blessings from afar" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/[^0-9+]/g, "");
    if (!cleanPhone || cleanPhone.length < 8) {
      newErrors.phone = "Please enter a valid phone number (at least 8 digits).";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      await submitRSVPToBackend(formData);
      setStatus("success");
    } catch (err) {
      console.error("RSVP submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      attendingOption: "❤️ YES, I'LL BE THERE",
      guests: "2",
      message: "",
    });
    setErrors({});
    setStatus("idle");
  };

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* EXACT REQUESTED HEADING */}
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A67C2E] font-bold">
            CELEBRATE WITH US
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#274236] tracking-tight uppercase">
            WILL YOU JOIN US?
          </h1>
          <p className="text-xs sm:text-sm font-tamil text-[#274236]/80 font-medium">
            தாங்கள் தங்கள் சுற்றமும் நட்பும் சூழ வருகை தந்து வாழ்த்த வேண்டுகிறோம்
          </p>
        </div>

        {/* RSVP FORM CONTAINER */}
        <div className="card-luxury bg-[#FFFDF7] rounded-3xl border-2 border-[#C9A24A]/35 shadow-xl p-6 sm:p-12 relative overflow-hidden">
          {/* Corner Ornaments */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#C9A24A]" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-[#C9A24A]" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-[#C9A24A]" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#C9A24A]" />

          {/* SUCCESS STATE */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#E8F1E4] text-[#274236] border border-[#DCEAD5] flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10 text-[#C9A24A]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#274236]">
                Nandri! Your Response is Confirmed
              </h3>
              <p className="text-sm sm:text-base text-[#274236]/80 font-serif max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. We have joyfully recorded your response ({formData.attendingOption}) with love.
              </p>
              <div className="pt-4">
                <Button onClick={handleReset} variant="outline" size="sm" icon={RotateCcw}>
                  Submit Another Response
                </Button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* ERROR ALERT */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Submission failed</p>
                    <p>{errorMessage}</p>
                  </div>
                </div>
              )}

              {/* ATTENDANCE OPTIONS */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#274236] mb-2.5">
                  Attendance Selection *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {attendanceOptions.map((opt) => {
                    const isSelected = formData.attendingOption === opt.label;
                    return (
                      <button
                        type="button"
                        key={opt.label}
                        onClick={() =>
                          setFormData({ ...formData, attendingOption: opt.label })
                        }
                        className={`p-3.5 rounded-2xl border text-left transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#274236] text-[#FFFDF7] border-[#C9A24A] shadow-md"
                            : "bg-[#F8F3E8]/60 text-[#274236] border-[#C9A24A]/25 hover:border-[#C9A24A]"
                        }`}
                      >
                        <p className="text-xs sm:text-sm font-bold font-serif">{opt.label}</p>
                        <p className="text-[11px] opacity-75 mt-0.5">{opt.sub}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FULL NAME */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#274236] mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: null });
                  }}
                  placeholder="e.g., S. Ramesh & Family"
                  className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F3E8]/60 border text-sm text-[#274236] transition-colors focus:outline-none ${
                    errors.fullName
                      ? "border-red-500 focus:border-red-600"
                      : "border-[#C9A24A]/35 focus:border-[#C9A24A]"
                  }`}
                />
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* PHONE & GUESTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#274236] mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                    placeholder="e.g., 9884677345"
                    className={`w-full px-4 py-3.5 rounded-xl bg-[#F8F3E8]/60 border text-sm text-[#274236] transition-colors focus:outline-none ${
                      errors.phone
                        ? "border-red-500 focus:border-red-600"
                        : "border-[#C9A24A]/35 focus:border-[#C9A24A]"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#274236] mb-1.5">
                    Number of Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F8F3E8]/60 border border-[#C9A24A]/35 focus:border-[#C9A24A] focus:outline-none text-sm text-[#274236]"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ Family Members</option>
                  </select>
                </div>
              </div>

              {/* MESSAGE / WISHES */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#274236] mb-1.5">
                  Message / Warm Wishes for Couple
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your prayers, love, and warm wishes..."
                  className="w-full px-4 py-3.5 rounded-xl bg-[#F8F3E8]/60 border border-[#C9A24A]/35 focus:border-[#C9A24A] focus:outline-none text-sm text-[#274236]"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  variant="gold"
                  size="lg"
                  icon={loading ? Loader2 : Send}
                  className="w-full justify-center !py-4 text-base font-serif font-bold tracking-wider"
                >
                  {loading ? "Submitting RSVP..." : "Confirm RSVP"}
                </Button>
              </div>
            </form>
          )}
        </div>

        <SectionDivider variant="mandala" className="my-10" />

        {/* Direct Phone Helpline confirmation */}
        <div className="text-center space-y-2">
          <p className="text-xs uppercase tracking-wider text-[#A67C2E] font-bold">
            Prefer direct phone confirmation?
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-bold text-[#274236]">
            <a
              href="tel:9884677345"
              className="inline-flex items-center gap-1.5 hover:text-[#A67C2E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A24A]" />
              9884677345
            </a>
            <span className="text-[#C9A24A]">•</span>
            <a
              href="tel:9941796400"
              className="inline-flex items-center gap-1.5 hover:text-[#A67C2E] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C9A24A]" />
              9941796400
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
