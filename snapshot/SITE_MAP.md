# Site Map

Complete navigation structure and AI feature locations.

---

## 🗺️ Page Hierarchy

### Primary Navigation

| Page | Route | Type | AI Features | Description |
|------|-------|------|-------------|-------------|
| **Home** | `/` | Static | ✅ Hero AI CTA | Landing page with hero, projects, skills, contact |
| **Resume** | `/resume` | Static | ✅ AI Career Summary | Full professional experience and education |
| **Projects** | `/projects` | Static | ❌ | Filterable project list |
| **About** | `/about` | Static | ❌ | Detailed background, principles, working style |
| **Guestbook** | `/guestbook` | Dynamic | ❌ | Visitor messages (Supabase) |

### Dynamic Routes

| Page | Route Pattern | Type | AI Features | Description |
|------|---------------|------|-------------|-------------|
| **Project Detail** | `/case-studies/[slug]` | SSG | ✅ AI Summary<br>✅ AI Decisions<br>✅ AI System Explain | Individual project case study |

**Available slugs:**
1. `integrated-authentication-module`
2. `cardholder-identity-verification`
3. `open-banking-account-payment`
4. `account-payment-launch`
5. `online-payment-ux-redesign`
6. `authentication-cost-optimization`
7. `fintech-rd-initiatives`

---

## 🤖 AI Feature Map

### Global AI Features

**Header (all pages):**
- Location: Top right navigation
- Button: ✨ AI (sparkle icon + text)
- Action: Opens global AI panel
- Features: Mode selection, preset prompts, freeform input

**Hero (Home page):**
- Location: Below main CTAs
- Button: "AI로 이 포트폴리오 둘러보기" / "Explore this portfolio with AI"
- Action: Opens AI panel with "30s Summary" preset auto-run
- Helper text: "AI가 이 포트폴리오의 핵심을 요약해드립니다"

---

### Page-Specific AI Features

#### 1. Home (`/`)
**Location:** Hero section  
**Feature:** AI portfolio exploration  
**Type:** Global panel  
**Prompts:** 
- 30초 요약 / 30s Summary
- 강점 3개 / Top 3 Strengths
- 대표 프로젝트 한 줄씩 / Projects in One Line

---

#### 2. Resume (`/resume`)
**Location:** Top right (next to back button)  
**Feature:** AI Career Summary  
**Type:** Inline response  
**Layout:** Executive summary format  
**Prompt:** "이 사람의 경력과 전문성을 간단히 요약해주세요"

---

#### 3. Project Detail (`/case-studies/[slug]`)

**Feature A: AI Summary**
- Location: Below Executive Summary
- Type: Inline response (brief layout)
- Prompt: "[프로젝트명] 프로젝트를 30초 안에 요약해주세요"
- Context: Project-specific

**Feature B: AI Decisions**
- Location: Below Executive Summary (if decision logs exist)
- Type: Inline response (brief layout)
- Prompt: "[프로젝트명] 프로젝트의 핵심 의사결정과 트레이드오프를 요약해주세요"
- Context: Decision logs

**Feature C: AI System Explain**
- Location: Within System View section
- Type: Inline response (narration layout)
- Prompt: "[시스템명] 시스템 다이어그램을 간단히 설명해주세요"
- Context: System architecture

---

## 🎯 AI Response Types

### 1. Global Panel (Sidebar)
- **Component:** `AIPanel.tsx`
- **Trigger:** Header AI button, Hero CTA
- **Behavior:** Slides in from right
- **Features:** Mode selector, presets, freeform input
- **Scope:** Full portfolio context

### 2. Inline Response (Context-local)
- **Component:** `AIInlineResponse.tsx`
- **Trigger:** Page-specific AI buttons
- **Behavior:** Expands inline below trigger
- **Layouts:** 
  - `brief` 📝 - Project summaries
  - `narration` 💬 - System explanations
  - `executive` 👔 - Career summaries
- **Scope:** Section-specific context

---

## 📄 Content Pages (No AI)

| Page | Route | Purpose |
|------|-------|---------|
| Projects List | `/projects` | Browse all projects with tags/filters |
| About | `/about` | Background, philosophy, working principles |
| Guestbook | `/guestbook` | Visitor messages (Supabase real-time) |

---

## 🔗 Site Navigation Structure

\`\`\`
┌─────────────────────────────────────┐
│          HEADER (All Pages)         │
│  Home │ Resume │ About │ Projects   │
│  Guestbook │ Contact │ [AI] [🌐] [🌙]│
└─────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
    [Global]          [Page-local]
    AI Panel          AI Features
        │                 │
   • 30s summary     • Project AI
   • Strengths       • System AI
   • Projects        • Resume AI
   • Custom Q&A
\`\`\`

---

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** 1024px+

All AI features are mobile-optimized with touch-friendly targets.

---

## 🎨 Visual Identity

**Color Palette:**
- Primary accent: Blue (#2563eb light, #60a5fa dark)
- AI elements: Purple gradient (#a855f7 → #8b5cf6 → #6366f1)
- Neutral grays: 50-950 scale

**Typography Hierarchy:**
- Display: 3rem - 4.5rem
- Headings: 1.5rem - 2.25rem
- Body: 0.875rem - 1.125rem
- Captions: 0.75rem

**Animations:**
- Subtle, purpose-driven
- Respect `prefers-reduced-motion`
- AI buttons: 6s sparkle cycle
- Transitions: 200-300ms

---

## 🔐 Security & Privacy

**AI Features:**
- No user data stored
- No conversation logging
- Rate limited (20/hour per IP)
- Input sanitization
- Context limited to public portfolio content only

**Guestbook:**
- Supabase Row Level Security enabled
- Input validation
- XSS protection

---

## 📈 SEO & Metadata

- **Open Graph:** Custom images per page
- **Twitter Cards:** Large image
- **JSON-LD:** Structured data for Person, ProfilePage
- **Sitemap:** Auto-generated
- **Robots.txt:** Fully crawlable

---

## 🚀 Performance Optimizations

- Static generation for most pages
- Incremental Static Regeneration for guestbook
- Image optimization (Next.js Image)
- Font subsetting
- Code splitting
- Lazy loading for animations

---

## 📝 Notes for Reviewers

1. **AI features** are designed to be helpful, not gimmicky - they surface portfolio insights without replacing human judgment
2. **Bilingual support** is complete across all UI and content
3. **Design system** is restrained and professional (no flashy elements)
4. **Accessibility** is prioritized with keyboard nav and reduced motion support
5. **Mobile experience** is optimized, not just "responsive"

This snapshot pack represents the site as of **January 2026**.
