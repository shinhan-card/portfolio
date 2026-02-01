# Portfolio Snapshot Pack - Index

**Generated:** February 2026  
**Portfolio:** Eric Yoon (윤태웅) - Product Manager  
**Purpose:** External review & code reference

---

## 📦 Package Contents

### 📄 Documentation

| File | Description |
|------|-------------|
| `README.md` | Repository overview, architecture, tech stack |
| `SITE_MAP.md` | Complete page hierarchy and AI feature locations |
| `INDEX.md` | This file - snapshot pack index |

---

### 📑 PAGES/

Page-by-page breakdown with routes, structure, and copy:

| File | Page | AI Features |
|------|------|-------------|
| `01-HOME.md` | Landing page | ✅ Hero AI CTA |
| `02-PROJECTS.md` | Project list | ❌ |
| `03-PROJECT-DETAIL.md` | Case study pages | ✅ AI Summary, Decisions, System Explain |
| `04-RESUME.md` | Resume/experience | ✅ AI Career Summary |
| `05-GUESTBOOK.md` | Visitor guestbook | ❌ |

---

### 🧩 COMPONENTS/

Key reusable components:

| File | Component | Purpose |
|------|-----------|---------|
| `Header.md` | Global navigation | Sticky header with AI button, language/theme toggles |
| `Hero.md` | Landing hero | Profile, value prop, AI entry point |
| `AIButton.md` | AI button with sparkle | Reusable button with purple gradient + glow animation |
| `AIInlineResponse.md` | Inline AI output | Context-local AI responses (3 layout types) |
| `AIPanel.md` | Global AI sidebar | Full-featured AI panel with presets |

---

### 🤖 AI/

AI feature architecture (server-side):

| File | Module | Purpose |
|------|--------|---------|
| `01-API-ROUTE.md` | `/api/ai` endpoint | Gemini integration, model fallback, rate limiting |
| `02-PERSONA.md` | System prompt | AI assistant role, tone, constraints |
| `03-PORTFOLIO-CONTEXT.md` | Context builder | Structured payload for AI grounding |
| `04-RATE-LIMITER.md` | Rate limiter | IP-based request throttling |

---

### 🎨 STYLES/

Design system and animations:

| File | Topic | Content |
|------|-------|---------|
| `01-THEME-TOKENS.md` | Color system | Semantic tokens, light/dark modes, typography |
| `02-ANIMATIONS.md` | Animation system | Keyframes, transitions, AI sparkle effect |

---

## 🔐 Security Notice

This snapshot pack contains **NO sensitive information**:

✅ **Included:**
- Public code structure
- Design system
- UI components
- AI architecture (sanitized)
- Sample content and copy

❌ **Excluded:**
- API keys or tokens
- Environment variable values
- Database credentials
- Internal company metrics
- Personal contact details (phone, address)
- Unpublished project details

---

## 🎯 Use Cases

This snapshot pack is useful for:

1. **Code Review** - Architecture and implementation patterns
2. **Portfolio Evaluation** - Understanding the technical depth
3. **AI Implementation Reference** - How Gemini is integrated
4. **Design System Review** - Color, typography, animation approach
5. **i18n Strategy** - Bilingual content management
6. **Component Library** - Reusable React patterns

---

## 🚀 Key Highlights

### Architecture
- **Next.js 16 App Router** with static generation where possible
- **TypeScript** throughout for type safety
- **Server-side AI** with 16-model fallback chain
- **Rate limiting** to prevent abuse
- **Bilingual** with React Context (no external i18n lib)

### Design
- **Semantic color tokens** for easy theming
- **Restrained animations** (purpose over decoration)
- **AI sparkle effect** unique to AI features
- **Mobile-first** responsive approach
- **Accessibility** with keyboard nav, reduced motion support

### AI Features
- **Context-grounded** responses (no hallucination)
- **Transparent** labeling (Google Gemini mentioned throughout)
- **Distributed** UI (inline responses + global panel)
- **Premium feel** (sparkle, not gimmicks)

---

## 📞 Contact

For questions about this portfolio:

**Eric Yoon (윤태웅)**
- LinkedIn: [linkedin.com/in/yoontaewoong](https://linkedin.com/in/yoontaewoong)
- Email: yoontaewoong@gmail.com
- Portfolio: [your-deployed-url]

---

## 📅 Version

**Snapshot Date:** February 1, 2026  
**Site Version:** Based on commit `42282f1` (or latest)  
**AI Integration:** Google Gemini with 16-model fallback  
**Framework:** Next.js 16.1.6

---

## 📖 How to Read This Pack

**For high-level understanding:**
1. Start with `README.md` (architecture overview)
2. Read `SITE_MAP.md` (page structure)
3. Skim `PAGES/` (understand content)

**For technical implementation:**
1. Read `AI/01-API-ROUTE.md` (how AI works)
2. Read `COMPONENTS/AIButton.md` (UI implementation)
3. Read `STYLES/02-ANIMATIONS.md` (sparkle effect)

**For design system:**
1. Read `STYLES/01-THEME-TOKENS.md` (color/typography)
2. Read `COMPONENTS/Hero.md` (composition example)
3. Read `PAGES/03-PROJECT-DETAIL.md` (page structure)

---

## ⚖️ License

This snapshot is provided for portfolio review purposes only.  
Content and design © 2026 Eric Yoon (윤태웅).

---

**End of Index**
