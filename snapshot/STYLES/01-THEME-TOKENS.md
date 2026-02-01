# Theme Tokens & Design System

**Files:** 
- `app/globals.css` - CSS variables
- `tailwind.config.ts` - Tailwind theme extensions

---

## Color System

### Semantic Tokens (CSS Variables)

All colors use semantic tokens that swap between light/dark modes:

\`\`\`css
/* Light Mode (default) */
:root {
  --color-bg: #fafafa;          /* Page background */
  --color-surface: #ffffff;     /* Card/panel background */
  --color-surface2: #f5f5f5;    /* Secondary surface */
  --color-border: #e5e5e5;      /* Dividers, borders */
  --color-text: #0a0a0a;        /* Primary text */
  --color-muted: #525252;       /* Secondary text */
  --color-muted2: #737373;      /* Tertiary text */
  --color-accent: #2563eb;      /* Primary action color */
  --color-accent2: #3b82f6;     /* Accent hover state */
  --color-focus: #2563eb;       /* Focus ring */
}

/* Dark Mode */
.dark {
  --color-bg: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-surface2: #262626;
  --color-border: #333333;
  --color-text: #f5f5f5;
  --color-muted: #a1a1a1;
  --color-muted2: #8a8a8a;
  --color-accent: #60a5fa;
  --color-accent2: #3b82f6;
  --color-focus: #60a5fa;
}
\`\`\`

### Neutral Palette

50-950 scale for granular control:

\`\`\`css
--color-neutral-50: #fafafa;
--color-neutral-100: #f5f5f5;
--color-neutral-200: #e5e5e5;
--color-neutral-300: #d4d4d4;
--color-neutral-400: #a3a3a3;
--color-neutral-500: #737373;
--color-neutral-600: #525252;
--color-neutral-700: #404040;
--color-neutral-800: #262626;
--color-neutral-900: #171717;
--color-neutral-950: #0a0a0a;
\`\`\`

### AI-Specific Colors

Purple gradient for AI features only:

\`\`\`css
/* Not in CSS vars - hardcoded in components */
AI Purple Light: #a855f7
AI Purple Mid: #8b5cf6
AI Purple Dark: #6366f1
\`\`\`

---

## Typography

### Font Families

\`\`\`css
/* Korean - Premium Variable Font */
--font-pretendard: "Pretendard Variable", "Pretendard", sans-serif;

/* Latin - Inter */
--font-inter: "Inter", ui-sans-serif, system-ui, sans-serif;

/* Monospace - Code/Labels */
--font-jetbrains-mono: "JetBrains Mono", ui-monospace, monospace;
\`\`\`

**Loading:**
- Google Fonts API for Inter, JetBrains Mono
- CDN for Pretendard Variable
- `display: swap` for no FOIT

### Type Scale (Tailwind Extensions)

\`\`\`typescript
fontSize: {
  "display-1": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
  "display-2": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
  "display-3": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
}
\`\`\`

**Standard scale:**
- xs: 0.75rem (12px)
- sm: 0.875rem (14px)
- base: 1rem (16px)
- lg: 1.125rem (18px)
- xl: 1.25rem (20px)
- 2xl: 1.5rem (24px)
- 3xl: 1.875rem (30px)
- 4xl: 2.25rem (36px)
- 5xl: 3rem (48px)

---

## Spacing Scale

Extended spacing units:

\`\`\`typescript
spacing: {
  13: "3.25rem",  // 52px
  15: "3.75rem",  // 60px
  18: "4.5rem",   // 72px
  22: "5.5rem",   // 88px
  26: "6.5rem",   // 104px
  30: "7.5rem",   // 120px
}
\`\`\`

Standard 0-96 scale remains unchanged.

---

## Animations

### Keyframes (Tailwind)

\`\`\`typescript
keyframes: {
  "fade-up": {
    "0%": { opacity: "0", transform: "translateY(20px)" },
    "100%": { opacity: "1", transform: "translateY(0)" }
  },
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" }
  },
  "slide-in-right": {
    "0%": { opacity: "0", transform: "translateX(-10px)" },
    "100%": { opacity: "1", transform: "translateX(0)" }
  }
}

animation: {
  "fade-up": "fade-up 0.5s ease-out",
  "fade-in": "fade-in 0.3s ease-out",
  "slide-in-right": "slide-in-right 0.3s ease-out",
}
\`\`\`

### AI Sparkle (CSS)

Defined in `globals.css`:

\`\`\`css
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
\`\`\`

**Duration:** 6 seconds  
**Easing:** ease-in-out  
**Loop:** infinite  
**Effect:** Gentle pulsing glow on purple border

---

## Utility Classes

### Custom Utilities (in CSS)

\`\`\`css
.container-premium {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.section-premium {
  @apply py-16 sm:py-20 lg:py-24;
}

.hairline {
  @apply h-px bg-gradient-to-r from-transparent via-border to-transparent;
}
\`\`\`

---

## Z-Index System

\`\`\`typescript
zIndex: {
  header: "50",
  "floating-ui": "40",
  "back-to-top": "50",
  "loading-bar": "100",
  "skip-link": "200",
}
\`\`\`

---

## Responsive Breakpoints

Tailwind defaults:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Custom:
- `xs`: 475px (custom via arbitrary values)

---

## Dark Mode

**Implementation:** `next-themes` with class-based strategy

**Features:**
- System preference detection
- Manual toggle
- Smooth transitions (200ms)
- Persists to localStorage
- No flash on load

**Usage:**
\`\`\`tsx
<ThemeProvider 
  attribute="class" 
  defaultTheme="dark"
  enableSystem
>
  {children}
</ThemeProvider>
\`\`\`

---

## Accessibility

### Focus Rings
All interactive elements have consistent focus styling:

\`\`\`css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-accent
focus-visible:ring-offset-2
focus-visible:ring-offset-bg
\`\`\`

### Reduced Motion
\`\`\`css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .ai-button-with-ring {
    animation: none;
  }
}
\`\`\`

---

## Design Philosophy

1. **Semantic over absolute** - Use tokens, not hex codes
2. **Consistent spacing** - 4px/8px base unit
3. **Restrained animations** - Purposeful, not decorative
4. **Accessible contrast** - WCAG AA minimum
5. **Mobile-first** - Base styles for small screens
6. **Performance** - will-change, GPU acceleration where needed
