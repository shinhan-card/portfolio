import { LucideIcon } from "lucide-react";

interface IconBadgeProps {
  icon: LucideIcon;
  emoji?: string;
  variant?: "accent" | "neutral" | "gradient";
  size?: "sm" | "md" | "lg";
}

export default function IconBadge({ 
  icon: Icon, 
  emoji,
  variant = "accent",
  size = "md" 
}: IconBadgeProps) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  const variants = {
    accent: "bg-accent/10 group-hover:bg-accent/20",
    neutral: "bg-surface2 group-hover:bg-surface",
    gradient: "bg-gradient-to-br from-accent/20 to-accent/5 group-hover:from-accent/30 group-hover:to-accent/10",
  };

  return (
    <div className={`${sizes[size]} rounded-2xl ${variants[variant]} flex items-center justify-center transition-all duration-300 relative overflow-hidden`}>
      {emoji && (
        <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-10 pointer-events-none">
          {emoji}
        </div>
      )}
      <Icon className={`${iconSizes[size]} text-accent relative z-10`} strokeWidth={2} />
    </div>
  );
}
