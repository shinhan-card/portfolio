import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function Card({
  children,
  className = "",
  hover = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  const hoverStyles = hover
    ? "card-glow card-shine"
    : "";

  const Component = onClick ? "button" : "div";

  return (
    <Component
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type={onClick ? "button" : undefined}
      className={`bg-surface border border-border rounded-lg transition-all duration-300 ${hoverStyles} ${onClick ? "cursor-pointer text-left w-full" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
