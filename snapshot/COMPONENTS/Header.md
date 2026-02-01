# Header Component

**File:** `components/Header.tsx`  
**Purpose:** Global navigation bar

---

## Structure

\`\`\`tsx
<header className="fixed top-0 z-50 border-b">
  <nav>
    <div className="flex justify-between">
      {/* Left: Logo/Name */}
      <Link href="/">윤태웅 (Eric Yoon)</Link>
      
      {/* Center: Nav Links (desktop only) */}
      <div className="hidden md:flex">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/resume">Resume</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/guestbook">Guestbook</NavLink>
      </div>
      
      {/* Right: CTA + Controls */}
      <div className="flex gap-3">
        <Button href="/#contact">Contact</Button>
        
        <AIButton onClick={openAIPanel}>
          <SparkleIcon />
          <span className="hidden sm:inline">AI</span>
        </AIButton>
        
        <LanguageToggle />  {/* KO ↔ EN */}
        <ThemeToggle />     {/* Light ↔ Dark */}
        <KeyboardHintButton />
        
        <MobileMenuButton />  {/* Mobile only */}
      </div>
    </div>
  </nav>
  
  {/* Mobile menu dropdown */}
  <MobileMenu isOpen={mobileOpen}>
    {navItems.map(item => <MobileNavLink {...item} />)}
  </MobileMenu>
</header>
\`\`\`

---

## Features

### 1. Sticky Header
- Fixed positioning
- Backdrop blur on scroll
- Border and shadow on scroll
- Smooth transitions

### 2. Active Link Indication
- Underline animation
- Color change
- Matched by pathname

### 3. AI Button (Premium Feature)
- Sparkle icon + "AI" text
- Purple gradient border with glow
- Opens global AI panel
- Desktop: icon + text
- Mobile: icon only

### 4. Mobile Menu
- Hamburger icon
- Slide-down animation
- Full-width overlay
- Selected item highlighted
- Auto-close on link click

### 5. Language Toggle
- KO ↔ EN switch
- Persists to localStorage
- Instant UI update

### 6. Theme Toggle
- Light ↔ Dark ↔ System
- next-themes integration
- Smooth color transitions

---

## Responsive Behavior

**Desktop (>= 768px):**
- Full horizontal nav
- All controls visible
- Logo + Nav + CTA + Controls

**Mobile (< 768px):**
- Compact logo
- Hidden nav (in hamburger menu)
- AI button shows icon only
- All controls accessible

---

## Accessibility

- Semantic `<header>` and `<nav>`
- Active link aria-current="page"
- Focus indicators on all interactive elements
- Mobile menu aria-expanded state
- Skip to content link (separate component)

---

## Styling

**Default:**
\`\`\`
bg-bg/60
backdrop-blur-sm
border-b border-border/50
py-3.5
\`\`\`

**Scrolled:**
\`\`\`
bg-bg/95
backdrop-blur-md
border-b border-border
shadow-lg
py-2.5
\`\`\`

**Transitions:** 300ms ease on all properties
