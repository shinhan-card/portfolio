import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "mono" | "accent";
  emoji?: string;
  className?: string;
  onClick?: () => void;
}

export default function Badge({
  children,
  variant = "default",
  emoji,
  className = "",
  onClick,
}: BadgeProps) {
  const variants = {
    default: "bg-surface2 text-muted border-border hover:border-accent/30",
    mono: "bg-text text-bg border-text font-mono hover:opacity-90",
    accent: "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20",
  };

  const Component = onClick ? "button" : "span";

  return (
    <Component
      onClick={onClick}
      type={onClick ? "button" : undefined}
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium border transition-all duration-200 ${variants[variant]} ${className} ${onClick ? 'cursor-pointer' : ''}`}
    >
      {emoji && <span className="text-sm">{emoji}</span>}
      {children}
    </Component>
  );
}
