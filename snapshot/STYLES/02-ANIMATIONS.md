# Animation System

**Purpose:** Subtle, purposeful animations throughout the site

---

## Animation Principles

1. **Subtle, not flashy** - Enhance, don't distract
2. **Purposeful** - Every animation communicates something
3. **Performant** - GPU-accelerated properties only
4. **Accessible** - Respect reduced motion preference

---

## Core Animations

### 1. Fade Up
**Use:** Section reveals, card entrances

\`\`\`css
@keyframes fade-up {
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-up {
  animation: fade-up 0.5s ease-out;
}
\`\`\`

### 2. Fade In
**Use:** Modal overlays, tooltips

\`\`\`css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
\`\`\`

### 3. Slide In Right
**Use:** Sidebar panels

\`\`\`css
@keyframes slide-in-right {
  from { 
    opacity: 0; 
    transform: translateX(-10px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(0); 
  }
}
\`\`\`

### 4. AI Sparkle (Premium)
**Use:** AI buttons only

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

.ai-button-with-ring {
  animation: ai-sparkle 6s ease-in-out infinite;
}
\`\`\`

**Effect:** Gentle pulsing glow that suggests "active intelligence"

---

## Framer Motion

Used for complex animations:

### AI Panel Slide
\`\`\`tsx
<motion.div
  initial={{ x: "100%" }}
  animate={{ x: 0 }}
  exit={{ x: "100%" }}
  transition={{ type: "spring", damping: 25, stiffness: 200 }}
>
  {/* Panel content */}
</motion.div>
\`\`\`

### Inline Response Expand
\`\`\`tsx
<motion.div
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: "auto" }}
  exit={{ opacity: 0, height: 0 }}
  transition={{ duration: 0.3 }}
>
  {/* AI response */}
</motion.div>
\`\`\`

---

## Transition Timings

Standard durations:

| Duration | Use Case |
|----------|----------|
| 100ms | Instant feedback (button press) |
| 200ms | Quick transitions (hover, focus) |
| 300ms | Standard transitions (modals, drawers) |
| 500ms | Entrance animations (fade-up, slide-in) |
| 6s | Ambient animations (AI sparkle) |

**Easing:**
- `ease-out` - Entrances (start fast, end slow)
- `ease-in-out` - Continuous loops (smooth both ways)
- `ease` - General purpose
- `linear` - Specific cases only

---

## Hover Effects

### Button Hover
\`\`\`css
transition: all 0.2s ease;

/* States */
default: bg-transparent text-muted
hover: bg-surface2 text-text scale(1.02)
active: scale(0.98)
\`\`\`

### Link Hover
\`\`\`css
/* Underline animation */
after:content-[''] 
after:absolute 
after:bottom-0 
after:h-px 
after:bg-current
after:transition-transform
after:duration-200

default: after:scale-x-0
hover: after:scale-x-100
\`\`\`

---

## Loading States

### Spinner
\`\`\`tsx
<Loader2 className="w-5 h-5 text-accent animate-spin" />
\`\`\`

### Skeleton
\`\`\`css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
\`\`\`

---

## Accessibility

### Reduced Motion

All non-essential animations disabled:

\`\`\`css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* Exception: Keep functional animations */
  .animate-spin {
    animation-duration: 0.01ms !important;
  }
  
  /* AI sparkle becomes static */
  .ai-button-with-ring {
    animation: none;
    box-shadow: 0 0 8px rgba(168, 85, 247, 0.15);
  }
}
\`\`\`

---

## Performance

### GPU Acceleration

Properties that trigger GPU:
- `transform`
- `opacity`
- `filter`

Avoided properties:
- `width` / `height` (use `transform: scale()`)
- `top` / `left` (use `transform: translate()`)
- `background-position` (use transform on pseudo-element)

### Will-Change

Applied sparingly:

\`\`\`css
.ai-button-with-ring {
  will-change: box-shadow, border-color;
}
\`\`\`

Only on elements with continuous animation.

---

## Design Rationale

**Why so restrained?**
- Professional PM portfolio, not a design showcase
- Animations should enhance readability, not compete with content
- Senior-level audience expects calm, intentional design
- Performance matters on all devices

**Why 6s AI sparkle?**
- Long enough to be subtle
- Short enough to be noticed
- Communicates "always-on intelligence" without being annoying
