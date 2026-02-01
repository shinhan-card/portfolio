# Portfolio Snapshot Pack

**Eric Yoon (윤태웅) - Product Manager Portfolio**  
Senior PM Portfolio Site with AI-powered features

---

## 📋 Repository Overview

This is a Next.js 16 (App Router) portfolio site for a senior Product Manager specializing in Payments, Fintech, and Authentication Infrastructure.

**Key Features:**
- **Bilingual (KO/EN)** with seamless language toggle
- **Dark/Light theme** with system preference detection
- **AI-powered features** using Google Gemini API
- **Premium design system** with custom animations
- **Accessibility-first** with keyboard shortcuts, skip links, reduced motion support
- **Mobile-optimized** responsive design

---

## 🏗️ Architecture

### Tech Stack
- **Framework**: Next.js 16.1.6 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + Custom CSS variables
- **UI**: Framer Motion (animations), Lucide React (icons)
- **AI**: Google Generative AI SDK (@google/generative-ai)
- **Database**: Supabase (guestbook feature)
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

---

## 📁 Project Structure

\`\`\`
portfolio-pm/
├── app/                       # Next.js App Router pages
│   ├── page.tsx              # Home (/)
│   ├── layout.tsx            # Root layout with providers
│   ├── resume/               # Resume page
│   ├── projects/             # Projects list
│   ├── case-studies/[slug]/  # Dynamic project detail
│   ├── about/                # About page
│   ├── guestbook/            # Guestbook with Supabase
│   └── api/
│       ├── ai/route.ts       # AI endpoint (Gemini)
│       └── guestbook/route.ts# Guestbook CRUD
│
├── components/               # React components
│   ├── Header.tsx           # Global nav
│   ├── Hero.tsx             # Landing hero
│   ├── Footer.tsx           # Site footer
│   ├── AIPanel.tsx          # Global AI sidebar
│   └── ui/                  # Shared UI components
│       ├── AIButton.tsx     # AI button with sparkle effect
│       ├── AIInlineResponse.tsx  # Context-local AI output
│       ├── Button.tsx       # Base button
│       ├── Card.tsx         # Card wrapper
│       └── ...
│
├── lib/                     # Business logic & utilities
│   ├── ai/                  # AI layer
│   │   ├── persona.ts       # AI system prompt & persona
│   │   ├── portfolioContext.ts  # Content builder for AI
│   │   └── rateLimiter.ts   # API rate limiting
│   ├── i18n/                # Internationalization
│   │   ├── LanguageContext.tsx  # KO/EN translations
│   │   └── case-study-translations.ts
│   ├── theme/ThemeProvider.tsx
│   └── ...
│
├── data/                    # Content & configuration
│   ├── case-studies.ts      # Project metadata
│   ├── resume.ts            # Resume/experience data
│   ├── site-config.ts       # Site metadata
│   └── ...
│
└── public/
    ├── images/              # Assets
    ├── audio/bgm.mp3        # Background music
    └── resume.pdf           # Downloadable resume
\`\`\`

---

## 🌐 Routing Structure

All routes use Next.js App Router (file-system based):

| Route | File | Type | Features |
|-------|------|------|----------|
| `/` | `app/page.tsx` | Static | Hero, Projects, Skills, Contact |
| `/resume` | `app/resume/page.tsx` | Static | Full resume, AI career summary |
| `/projects` | `app/projects/page.tsx` | Static | Project list with filters |
| `/case-studies/[slug]` | `app/case-studies/[slug]/page.tsx` | SSG | Dynamic project detail with AI |
| `/about` | `app/about/page.tsx` | Static | About, principles, working style |
| `/guestbook` | `app/guestbook/page.tsx` | Static | Guestbook (Supabase) |
| `/api/ai` | `app/api/ai/route.ts` | API | Gemini AI endpoint |
| `/api/guestbook` | `app/api/guestbook/route.ts` | API | Guestbook CRUD |

---

## 🌍 Internationalization (i18n)

**Implementation:** Client-side React Context with localStorage persistence

**Files:**
- `lib/i18n/LanguageContext.tsx` - Main translation provider
- `lib/i18n/case-study-translations.ts` - Project-specific content

**Usage:**
\`\`\`tsx
const { language, setLanguage, t } = useLanguage();
// t("hero.title") -> resolves to KO or EN
\`\`\`

**Supported languages:** `ko` (Korean), `en` (English)  
**Default:** English  
**Persistence:** localStorage

---

## 🤖 AI Feature Architecture

### Overview
Google Gemini-powered AI assistant integrated throughout the site.

### Key Components:

**1. Server-side API Route**
- File: `app/api/ai/route.ts`
- Models: Gemini 2.5/2.0/1.5 series (16 fallback models)
- Rate limiting: 20 requests/hour per IP
- Cooldown: 3 seconds between requests

**2. Portfolio Context Builder**
- File: `lib/ai/portfolioContext.ts`
- Builds structured content payload from public portfolio data
- Includes: projects, skills, experience, achievements

**3. AI Persona**
- File: `lib/ai/persona.ts`
- System prompt defines AI as "Senior PM Portfolio Assistant"
- Tone: Concise, executive-friendly, factual
- Constraints: Uses ONLY provided context, no invention

**4. UI Components**
- `components/AIPanel.tsx` - Global sidebar with presets
- `components/ui/AIInlineResponse.tsx` - Context-local inline output
- `components/ui/AIButton.tsx` - Sparkle button with animated border

### AI Entry Points:

| Location | Trigger | Behavior |
|----------|---------|----------|
| Header | AI button | Opens global panel |
| Hero | "Explore with AI" CTA | Opens panel with 30s summary preset |
| Project pages | "AI 요약" button | Shows inline project brief |
| Project pages | "AI로 의사결정 보기" | Shows inline decision summary |
| System diagrams | "AI 설명" button | Shows inline system narration |
| Resume | "AI로 경력 요약" | Shows inline executive summary |

### Security:
- ✅ API key stored in environment variables only (never client-side)
- ✅ Server-side API calls only
- ✅ Rate limiting + cooldown
- ✅ Input validation (max 1500 chars)
- ✅ No user data logging

---

## 🎨 Styling System

### Design Tokens (CSS Variables)

Defined in `app/globals.css`:

**Light Mode:**
\`\`\`css
--color-bg: #fafafa
--color-surface: #ffffff
--color-text: #0a0a0a
--color-accent: #2563eb
\`\`\`

**Dark Mode:**
\`\`\`css
--color-bg: #0f0f0f
--color-surface: #1a1a1a
--color-text: #f5f5f5
--color-accent: #60a5fa
\`\`\`

### Typography
- **Sans:** Pretendard Variable (Korean), Inter (Latin)
- **Mono:** JetBrains Mono

### Tailwind Utilities
Custom classes defined in `tailwind.config.ts`:
- Semantic color tokens (`bg`, `surface`, `text`, `muted`, `accent`)
- Custom animations (`fade-up`, `fade-in`, `slide-in-right`)
- Extended spacing scale

### AI-specific Animations
\`\`\`css
@keyframes ai-sparkle {
  /* Subtle sparkle/twinkle on AI buttons */
  /* 6s cycle, box-shadow + border-color */
}
\`\`\`

---

## 🔐 Environment Variables

Required for full functionality:

\`\`\`env
# Gemini AI (server-side only)
GEMINI_API_KEY=your_key_here

# Supabase (public)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
\`\`\`

See `.env.example` for template.

---

## 🚀 Build & Deploy

**Development:**
\`\`\`bash
npm install
npm run dev
\`\`\`

**Production:**
\`\`\`bash
npm run build
npm start
\`\`\`

**Deployment:** Vercel (auto-deploy on push to main)

---

## 📊 Performance

- **Core Web Vitals:** Optimized for LCP, FID, CLS
- **Static Generation:** Most pages pre-rendered at build time
- **Image Optimization:** Next.js Image component
- **Font Loading:** Variable fonts with display: swap
- **Code Splitting:** Automatic via Next.js

---

## ♿ Accessibility

- Keyboard shortcuts (h, r, p, g, c)
- Skip to content link
- ARIA labels throughout
- Focus indicators
- Reduced motion support
- Semantic HTML

---

## 📦 Key Dependencies

\`\`\`json
{
  "@google/generative-ai": "^0.24.1",
  "@supabase/supabase-js": "^2.93.3",
  "@vercel/analytics": "^1.6.1",
  "framer-motion": "^12.29.2",
  "next": "16.1.6",
  "react": "19.2.3"
}
\`\`\`

---

## 📄 License & Usage

This snapshot is provided for portfolio review purposes.  
Content and design are specific to Eric Yoon's professional experience.

**Contact:**
- LinkedIn: [linkedin.com/in/yoontaewoong](https://linkedin.com/in/yoontaewoong)
- Email: yoontaewoong@gmail.com
