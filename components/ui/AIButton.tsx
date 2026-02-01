"use client";

import { ReactNode } from "react";

interface AIButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
}

/**
 * AI Button with rotating outer glow ring
 * Premium, subtle animation with purple gradient
 */
export default function AIButton({
  onClick,
  children,
  className = "",
  size = "md",
  "aria-label": ariaLabel,
}: AIButtonProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "px-3 py-1.5",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        ${size === "lg" ? "gap-1.5" : ""}
        ${sizeClasses[size]}
        rounded-md text-muted2 hover:text-accent
        bg-transparent hover:bg-surface2
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg
        ai-button-with-ring
        ${className}
      `}
      aria-label={ariaLabel}
      style={{
        border: "1.5px solid rgba(168, 85, 247, 0.4)",
        backgroundImage:
          "linear-gradient(var(--color-bg), var(--color-bg)), linear-gradient(135deg, #a855f7, #8b5cf6, #6366f1)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
      }}
    >
      {children}
    </button>
  );
}
