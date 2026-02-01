# Hero Component

**File:** `components/Hero.tsx`  
**Purpose:** Landing page hero section

---

## Overview

Full-height hero with parallax background, profile image, role/domain, value proposition, and CTAs.

---

## Visual Structure

\`\`\`
┌─────────────────────────────────────────┐
│  [Background: laptop stickers image]    │
│  [Gradient overlay]                     │
│  [Floating emojis: 💳 🔐 🚀 ⚡ 🎯 💡]    │
│                                         │
│      💼 신한카드 · 페이먼트혁신실         │
│                                         │
│    프로덕트 매니저 (9년차) @ 신한카드     │
│                                         │
│    [결제] [핀테크] [인증] (badge pills) │
│                                         │
│         [Profile Photo - circular]      │
│                                         │
│      복잡한 제약 속에서도                │
│    실제로 작동하는 핀테크 서비스를        │
│          기획합니다. (headline)          │
│                                         │
│    규제·보안·조직 현실을 고려해          │
│  기술과 사람, 프로세스가 함께            │
│      움직이게 만듭니다. (subhead)        │
│                                         │
│  [이력 보기] [주요 프로젝트] [전체 프로젝트]│
│                                         │
│      ✨ AI로 이 포트폴리오 둘러보기       │
│   AI가 이 포트폴리오의 핵심을 요약해드립니다│
│                                         │
│           [Scroll indicator ↓]          │
└─────────────────────────────────────────┘
\`\`\`

---

## Key Elements

### 1. Top Label
- Small, mono, uppercase
- 💼 emoji + company/division

### 2. Role & Company
- Medium weight, clear hierarchy
- Role + @ + Company (blue accent)

### 3. Domain Badges
- 3 pills: 결제 · 핀테크 · 인증
- Each with emoji (💳 🏦 🔐)
- Accent color variant

### 4. Profile Photo
- 144px × 144px (mobile), 176px × 176px (desktop)
- Circular crop with decorative ring
- Hover effect: slight scale + shadow
- Status badge: ✓ in bottom right

### 5. Headline
- 2-line value proposition
- Bold, large (text-2xl → 5xl responsive)
- Tight leading, whitespace-pre-line

### 6. Subheadline
- 2-line explanatory text
- Light weight, slightly smaller
- Muted color

### 7. CTAs (3 buttons)
- Primary: "이력 보기" → /resume
- Secondary: "주요 프로젝트" → /#projects
- Ghost: "전체 프로젝트" → /projects

### 8. AI Entry Point
- AIButton with sparkle animation
- Text: "AI로 이 포트폴리오 둘러보기"
- Helper text below in muted color
- Opens AI panel with "30s summary" preset

---

## Parallax Effect

**Background layers:**
- Laptop stickers image (slowest - 0.5x scroll speed)
- Gradient overlay (static)
- Floating emojis (CSS animation, not scroll-based)

\`\`\`tsx
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const gradientY = scrollY * 0.3;
const gridY = scrollY * 0.5;
\`\`\`

**Result:** Subtle depth effect on scroll

---

## Responsive Behavior

**Mobile (< 640px):**
- Smaller profile photo (144px)
- Text scales down
- Vertical button stack
- Compact spacing

**Tablet (640px - 1024px):**
- Medium sizes
- Horizontal button row

**Desktop (>= 1024px):**
- Largest sizes
- Maximum spacing
- Full parallax effect

---

## AI Feature Integration

**Button:**
\`\`\`tsx
<AIButton
  onClick={() => {
    window.dispatchEvent(
      new CustomEvent("open-ai-panel", { 
        detail: { presetId: "summary" } 
      })
    );
  }}
  size="lg"
>
  <span>✨</span>
  <span>AI로 이 포트폴리오 둘러보기</span>
</AIButton>
\`\`\`

**Helper text:**
- "AI가 이 포트폴리오의 핵심을 요약해드립니다."
- Small, muted, below button
- Doesn't compete with main CTAs

**Design rationale:**
- Placed after main CTAs (not competing)
- Subtle invitation (not forced interaction)
- Clear value prop (what will AI do?)

---

## Copy (Full)

### Korean
\`\`\`
label: "신한카드 · 페이먼트혁신실"
role: "프로덕트 매니저 (9년차)"
company: "신한카드"
domain: "결제 · 핀테크 · 인증"
headline: "복잡한 제약 속에서도\n실제로 작동하는 핀테크 서비스를 기획합니다."
subhead: "규제·보안·조직 현실을 고려해\n기술과 사람, 프로세스가 함께 움직이게 만듭니다."
cta1: "이력 보기"
cta2: "주요 프로젝트"
cta3: "전체 프로젝트"
ai_cta: "AI로 이 포트폴리오 둘러보기"
ai_helper: "AI가 이 포트폴리오의 핵심을 요약해드립니다."
\`\`\`

### English
\`\`\`
label: "Shinhan Card · Payment Innovation Office"
role: "Product Manager (9 years)"
company: "Shinhan Card"
domain: "Payments · Fintech · Authentication"
headline: "Making fintech services that actually work\nunder complex constraints."
subhead: "Balancing regulation, security, and organizational reality\nto make technology, people, and processes move together."
cta1: "View Resume"
cta2: "View Projects"
cta3: "View All Projects"
ai_cta: "Explore this portfolio with AI"
ai_helper: "AI summarizes the essence of this portfolio."
\`\`\`

---

## Animation

- Entrance: fade-up animation
- Scroll indicator: bounce
- Profile ring: subtle rotation on load
- AI button: sparkle glow (continuous)

---

## Accessibility

- Semantic HTML5 section
- Proper heading hierarchy
- All interactive elements focusable
- Clear focus indicators
- Keyboard accessible
