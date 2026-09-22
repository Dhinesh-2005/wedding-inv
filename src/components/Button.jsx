import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "gold",
  size = "md",
  className = "",
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 relative select-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm md:text-base px-6 py-2.5 gap-2",
    lg: "text-base md:text-lg px-8 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles = {
    gold: "bg-gradient-to-r from-[#C9A24A] via-[#DFBF6D] to-[#A67C2E] text-[#1A2F26] shadow-md shadow-[#C9A24A]/25 hover:shadow-lg hover:shadow-[#C9A24A]/40 hover:-translate-y-0.5 sheen-effect border border-[#FFFDF7]/40",
    forest: "bg-[#274236] text-[#FFFDF7] border border-[#C9A24A]/50 shadow-md shadow-[#274236]/30 hover:bg-[#1A2F26] hover:border-[#C9A24A] hover:-translate-y-0.5",
    outline: "bg-transparent text-[#274236] border border-[#C9A24A] hover:bg-[#C9A24A] hover:text-[#1A2F26] hover:border-transparent",
    ghost: "bg-transparent text-[#274236] hover:bg-[#E8F1E4] hover:text-[#1A2F26]",
    ivory: "bg-[#FFFDF7] text-[#274236] border border-[#C9A24A]/40 shadow-sm hover:border-[#C9A24A] hover:shadow-md",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
