import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart, Sparkles } from "lucide-react";
import Button from "./Button";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/story" },
  { name: "Engagement", path: "/engagement" },
  { name: "Wedding", path: "/wedding" },
  { name: "Reception", path: "/reception" },
  { name: "Gallery", path: "/gallery" },
  { name: "Family", path: "/family" },
  { name: "Invitation", path: "/invitation" },
  { name: "Venues", path: "/venues" },
  { name: "RSVP", path: "/rsvp" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#FFFDF7]/90 backdrop-blur-md border-b border-[#C9A24A]/30 shadow-md shadow-[#274236]/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Home"
          >
            <div className="w-10 h-10 rounded-full border border-[#C9A24A] bg-[#FFFDF7] flex items-center justify-center text-[#A67C2E] shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:border-[#A67C2E]">
              <span className="font-serif text-sm font-semibold tracking-wider">P&P</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-lg font-semibold tracking-tight text-[#274236] leading-none">
                Priyadarshini & Parthipan
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#A67C2E] font-medium mt-1 font-sans">
                Oct 30, 2026
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-[#1A2F26] bg-[#E8F1E4] shadow-xs"
                      : "text-[#274236]/80 hover:text-[#1A2F26] hover:bg-[#F8F3E8]/80"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C9A24A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button to="/rsvp" variant="gold" size="sm" icon={Sparkles}>
              RSVP
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button to="/rsvp" variant="gold" size="sm" className="!px-3 !py-1.5 text-xs">
              RSVP
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#274236] hover:text-[#A67C2E] hover:bg-[#E8F1E4] focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Elegant Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#FFFDF7]/98 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-8 px-6 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Decorative Gold Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <span className="font-serif text-[140px] font-bold text-[#C9A24A]">P&P</span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col items-center space-y-3 overflow-y-auto max-h-[60vh] py-2 relative z-10">
          {NAV_LINKS.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{ transitionDelay: `${idx * 25}ms` }}
                className={`text-lg sm:text-xl font-serif py-1.5 px-4 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-[#1A2F26] font-semibold bg-[#E8F1E4] border border-[#DCEAD5]"
                    : "text-[#274236]/80 hover:text-[#C9A24A]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Footer */}
        <div className="relative z-10 flex flex-col items-center gap-4 pt-4 border-t border-[#C9A24A]/20">
          <div className="text-center">
            <p className="font-serif text-base font-semibold text-[#274236]">Priyadarshini & Parthipan</p>
            <p className="text-xs text-[#A67C2E] font-sans">Friday, 30th October 2026 • Chennai</p>
          </div>
          <div className="flex gap-3 w-full max-w-xs">
            <Button to="/invitation" variant="outline" size="sm" className="flex-1">
              View E-Card
            </Button>
            <Button to="/rsvp" variant="gold" size="sm" className="flex-1">
              RSVP Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
