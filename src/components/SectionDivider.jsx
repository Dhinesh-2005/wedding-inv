import React from "react";

export default function SectionDivider({ className = "", variant = "mandala" }) {
  return (
    <div className={`flex items-center justify-center my-8 md:my-12 px-4 ${className}`}>
      <div className="h-[1px] flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-r from-transparent via-[#C9A24A]/40 to-[#C9A24A]" />

      <div className="mx-4 flex items-center gap-2 text-[#C9A24A]">
        {variant === "mandala" && (
          <svg
            className="w-7 h-7 text-[#C9A24A] animate-pulse transition-transform duration-700 hover:rotate-45"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <circle cx="12" cy="12" r="3" fill="#C9A24A" fillOpacity="0.2" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            <circle cx="12" cy="12" r="8" strokeDasharray="2 2" />
          </svg>
        )}

        {variant === "leaf" && (
          <svg className="w-8 h-8 text-[#C9A24A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2C6.5 2 2 6.5 2 12c0 4.5 3 8 7 9.5-.5-2.5-.5-5 0-7.5 1-4 3.5-7 6-9 2.5-2 5-3 5-3s-1 2.5-3 5c-2 2.5-5 5-9 6-2.5.5-5 .5-7.5 0C3.5 19 7 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        )}

        {variant === "lotus" && (
          <svg className="w-8 h-8 text-[#C9A24A]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3c-1.5 3-4 5.5-7 7 2 .5 4 0 5.5-1C11 11 11.5 14 12 18c.5-4 1-7 1.5-9 1.5 1 3.5 1.5 5.5 1-3-1.5-5.5-4-7-7z" opacity="0.85" />
            <path d="M12 18c-2-2-5-3-8-2 2.5 3 6 4.5 8 5 2-.5 5.5-2 8-5-3-1-6 0-8 2z" />
          </svg>
        )}
      </div>

      <div className="h-[1px] flex-1 max-w-[120px] md:max-w-[200px] bg-gradient-to-l from-transparent via-[#C9A24A]/40 to-[#C9A24A]" />
    </div>
  );
}
