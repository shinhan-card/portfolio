"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { useSound } from "@/lib/sound/SoundContext";
import { useRipple } from "./ButtonWithRipple";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  download?: boolean | string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  download,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sound = useSound();
  const { addRipple, RippleContainer } = useRipple();
  
  const handlePrimarySound = () => {
    if (variant === "primary") sound?.playTap();
  };

  const baseStyles =
    "relative overflow-hidden inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 dark:focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-text text-bg hover:opacity-90 active:opacity-70 active:scale-[0.98]",
    secondary:
      "border border-border bg-surface text-text hover:bg-surface2 hover:border-muted active:bg-surface2/80 active:scale-[0.98]",
    ghost:
      "text-muted hover:bg-surface2 hover:text-text active:bg-surface active:scale-[0.98]",
  };

  const sizes = {
    sm: "text-sm px-4 py-2 rounded-md",
    md: "text-base px-6 py-2.5 rounded-md",
    lg: "text-lg px-8 py-3 rounded-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("mailto:")) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          download={download}
          onClick={(e) => {
            handlePrimarySound();
            if (variant === "primary") addRipple(e);
          }}
        >
          <RippleContainer />
          {children}
        </a>
      );
    }

    return (
      <Link 
        href={href} 
        className={classes} 
        onClick={(e) => {
          handlePrimarySound();
          if (variant === "primary") addRipple(e);
        }}
      >
        <RippleContainer />
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={(e) => {
        if (variant === "primary") addRipple(e);
        handlePrimarySound();
        onClick?.();
      }}
      className={classes}
      type={type}
      disabled={disabled}
    >
      <RippleContainer />
      {children}
    </button>
  );
}
