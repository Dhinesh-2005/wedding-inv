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
        <span className="inline-block text-xs md:text-sm uppercase tracking-[0.25em] text-wedding-darkgold font-medium mb-2">
          {subtitle}
        </span>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-wedding-forest tracking-tight leading-tight">
        {title}
      </h2>

      {tamilSubtitle && (
        <p className="mt-2 text-sm md:text-base font-tamil text-wedding-forest/80 font-medium tracking-wide">
          {tamilSubtitle}
        </p>
      )}

      {ornament && (
        <div className={`flex items-center gap-3 mt-4 ${isCenter ? "justify-center" : "justify-start"}`}>
          <div className="h-px w-10 md:w-16 bg-linear-to-r from-transparent to-wedding-gold" />
          <span className="text-wedding-gold text-sm">✦</span>
          <div className="w-1.5 h-1.5 rounded-full bg-wedding-gold" />
          <span className="text-wedding-gold text-sm">✦</span>
          <div className="h-px w-10 md:w-16 bg-linear-to-l from-transparent to-wedding-gold" />
        </div>
      )}
    </div>
  );
}
