# AIButton Component

**File:** `components/ui/AIButton.tsx`  
**Purpose:** Reusable AI button with sparkle animation

---

## Component Code

\`\`\`tsx
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
 * AI Button with subtle sparkle glow
 * Premium, elegant animation with purple gradient border
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
      className={\`
        relative inline-flex items-center justify-center
        \${size === "lg" ? "gap-1.5" : ""}
        \${sizeClasses[size]}
        rounded-md text-muted2 hover:text-accent
        bg-transparent hover:bg-surface2
        transition-all duration-200
        focus-visible:outline-none focus-visible:ring-2 
        focus-visible:ring-accent focus-visible:ring-offset-2 
        focus-visible:ring-offset-bg
        ai-button-with-ring
        \${className}
      \`}
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
\`\`\`

---

## CSS Animation

Defined in `app/globals.css`:

\`\`\`css
/* AI Button Subtle Sparkle/Twinkle - Premium, elegant */
@keyframes ai-sparkle {
  0%, 100% { 
    box-shadow: 
      0 0 6px rgba(168, 85, 247, 0.2),
      0 0 12px rgba(168, 85, 247, 0.1),
      0 0 20px rgba(168, 85, 247, 0.05),
      inset 0 0 8px rgba(168, 85, 247, 0.06);
    border-color: rgba(168, 85, 247, 0.35);
  }
  50% { 
    box-shadow: 
      0 0 10px rgba(168, 85, 247, 0.35),
      0 0 20px rgba(168, 85, 247, 0.2),
      0 0 30px rgba(168, 85, 247, 0.1),
      inset 0 0 12px rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.6);
  }
}

.ai-button-with-ring {
  animation: ai-sparkle 6s ease-in-out infinite;
  will-change: box-shadow, border-color;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .ai-button-with-ring {
    animation: none;
    box-shadow: 0 0 8px rgba(168, 85, 247, 0.15), 
                0 0 16px rgba(168, 85, 247, 0.08);
  }
}
\`\`\`

---

## Features

1. **Purple Gradient Border**
   - 3-color gradient: #a855f7 → #8b5cf6 → #6366f1
   - Implemented via dual background layers

2. **Sparkle Animation**
   - 6-second cycle
   - Multi-layer box-shadow (outer + inner glow)
   - Border opacity shifts (35% → 60%)
   - Subtle, non-distracting

3. **Size Variants**
   - `sm`: 32x32px (icon only)
   - `md`: 36x36px (icon only)
   - `lg`: Auto width with padding (icon + text)

4. **Accessibility**
   - Keyboard focusable
   - Focus ring with offset
   - ARIA label support
   - Reduced motion: static glow only

5. **States**
   - Default: muted text, subtle glow
   - Hover: accent text, surface2 background
   - Focus: accent ring
   - Active: (inherits from button default)

---

## Usage Examples

\`\`\`tsx
// Header - icon only
<AIButton 
  onClick={() => openPanel()}
  aria-label="AI Assistant"
>
  <SparkleIcon />
  <span className="text-xs hidden sm:inline">AI</span>
</AIButton>

// Hero - icon + text
<AIButton 
  onClick={() => openPanel()}
  size="lg"
>
  <span>✨</span>
  <span>Explore with AI</span>
</AIButton>

// Project page - contextual
<AIButton 
  onClick={() => toggleAISummary()}
  size="lg"
  className="text-xs"
>
  <span>✨</span>
  <span>AI 요약</span>
</AIButton>
\`\`\`

---

## Design Rationale

**Why sparkle animation?**
- Communicates "active intelligence" without being loud
- Differentiates AI features from regular buttons
- Premium feel (not gimmicky)
- Respects user preferences (reduced motion)

**Why purple gradient?**
- AI/ML industry convention
- Distinct from primary blue accent
- Subtle enough to not clash with content
- Works well in both light and dark modes
