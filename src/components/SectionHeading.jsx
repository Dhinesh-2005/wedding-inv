import React from "react";

export default function SectionHeading({
  title,
  subtitle,
  tamilSubtitle,
  ornament = true,
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-8 md:mb-12 ${isCenter ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <span className="inline-block text-xs md:text-sm uppercase tracking-[0.25em] text-[#A67C2E] font-medium mb-2">
          {subtitle}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-[#274236] tracking-tight leading-tight">
        {title}
      </h2>

      {tamilSubtitle && (
        <p className="mt-2 text-sm md:text-base font-tamil text-[#274236]/80 font-medium tracking-wide">
          {tamilSubtitle}
        </p>
      )}

      {ornament && (
        <div className={`flex items-center gap-3 mt-4 ${isCenter ? "justify-center" : "justify-start"}`}>
          <div className="h-[1px] w-10 md:w-16 bg-gradient-to-r from-transparent to-[#C9A24A]" />
          <span className="text-[#C9A24A] text-sm">✦</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#C9A24A]" />
          <span className="text-[#C9A24A] text-sm">✦</span>
          <div className="h-[1px] w-10 md:w-16 bg-gradient-to-l from-transparent to-[#C9A24A]" />
        </div>
      )}
    </div>
  );
}
