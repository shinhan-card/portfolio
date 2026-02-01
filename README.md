# Portfolio Website - 윤태웅 (Eric Yoon)

프로덕트 매니저 포트폴리오 웹사이트 - Next.js 16 + TypeScript + TailwindCSS

## 🎯 Overview

신한카드 페이먼트혁신실 프로덕트 매니저의 포트폴리오 웹사이트입니다. 9년간의 결제·핀테크·인증 분야 경험과 프로젝트를 소개합니다.

## ✨ Features

### Core Features
- 🌐 **다국어 지원** - 한국어/English 토글
- 🌓 **다크/라이트 모드** - 시스템 감지 + 수동 전환, WCAG AA+ 대비
- 📱 **완전 반응형** - Mobile-first 디자인
- ⚡ **프리미엄 UI** - Geist 폰트, 시맨틱 컬러 토큰, 마이크로 인터랙션
- 🎵 **앰비언트 플레이어** - 사용자 제어, 페이지 간 지속, fade in/out
- 📝 **방명록** - Supabase 백엔드, 안티-스팸, RLS 보안
- 📄 **이력서 페이지** - 30초 스캔 가능, 구조화된 레이아웃
- 🖼️ **OG 이미지** - 동적 생성 (Home, Case Studies, Resume)

### Pages
- **Home** (`/`) - Hero, Impact, Featured Projects, Skills, Awards, Contact
- **Resume** (`/resume`) - 경력, 학력, 군 경력, 수상, 자격증, 특허
- **Case Studies** (`/case-studies/[slug]`) - 프로젝트 상세 (통합인증모듈, 본인확인서비스)
- **Guestbook** (`/guestbook`) - 방명록

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account (for guestbook)

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Supabase credentials

# 3. Run development server
npm run dev
```

Visit http://localhost:3000

### Build

```bash
npm run build
npm start
```

## 📂 Project Structure

```
portfolio-pm/
├── app/
│   ├── api/guestbook/        # Guestbook API routes
│   ├── case-studies/[slug]/  # Dynamic case study pages
│   ├── guestbook/             # Guestbook page
│   ├── resume/                # Resume page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles + design tokens
├── components/
│   ├── guestbook/             # Guestbook components
│   │   ├── GuestbookForm.tsx
│   │   ├── GuestbookList.tsx
│   │   └── GuestbookEntryCard.tsx
│   ├── ui/                    # Reusable UI components
│   │   ├── AmbientPlayer.tsx
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── ExecutiveSummary.tsx
│   │   ├── LanguageToggle.tsx
│   │   ├── Section.tsx
│   │   └── ThemeToggle.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ImpactMetrics.tsx
│   ├── FeaturedCaseStudies.tsx
│   ├── Skills.tsx
│   ├── Awards.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── site-config.ts         # Site metadata
│   ├── content.ts             # Static content
│   ├── case-studies.ts        # Case study metadata
│   └── resume.ts              # Resume data (NEW)
├── lib/
│   ├── i18n/
│   │   ├── LanguageContext.tsx          # i18n provider + translations
│   │   └── case-study-translations.ts   # Case study content (ko/en)
│   ├── supabase/
│   │   ├── client.ts          # Supabase client
│   │   └── schema.sql         # Database schema
│   ├── theme/
│   │   └── ThemeProvider.tsx  # Theme provider
│   └── visual/
│       └── AbstractCover.tsx  # SVG cover components
├── public/
│   ├── audio/                 # Ambient music (add ambient.mp3)
│   └── resume.pdf            # Resume PDF
├── types/
│   └── index.ts              # TypeScript types
├── .env.local.example        # Environment variables template
├── SETUP.md                  # Setup guide
└── tailwind.config.ts        # Tailwind configuration
```

## 🎨 Design System

### Color Tokens (Semantic)

```css
/* Light Mode */
--color-bg: #fafafa
--color-surface: #ffffff
--color-text: #0a0a0a
--color-muted: #525252
--color-accent: #2563eb

/* Dark Mode */
--color-bg: #0f0f0f
--color-surface: #1a1a1a
--color-text: #f5f5f5
--color-muted: #a1a1a1
--color-accent: #60a5fa
```

### Typography
- **Font**: Geist Sans (body), Geist Mono (labels)
- **Scale**: Display (72px) → H1 (48-72px) → H2 (32-56px) → Body (16-20px)
- **Line Height**: 1.7 (body), 1.2 (headings)
- **Max Width**: 65ch (reading comfort)

### Components
- **Button**: 3 variants (primary, secondary, ghost)
- **Card**: Hover lift, semantic borders
- **Badge**: 3 variants (default, mono, accent)
- **Section**: 2 backgrounds (white, gray)

## 🔧 Configuration

### Supabase Setup

1. Create a Supabase project
2. Run SQL schema:
   ```bash
   # Copy from lib/supabase/schema.sql
   ```
3. Add credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   ```

### Ambient Music

Place your audio file:
```
public/audio/ambient.mp3
```

Requirements:
- Format: MP3
- Loopable (seamless)
- Size: < 5MB recommended
- Low volume, atmospheric

## 📝 Content Management

### Update Resume

Edit `data/resume.ts`:
- Experience (company, roles, highlights)
- Education
- Military service
- Awards & Certifications
- Patents

### Add Case Study

1. Add metadata to `data/case-studies.ts`
2. Add content to `lib/i18n/case-study-translations.ts`
3. Both ko/en translations required

### UI Text

Edit `lib/i18n/LanguageContext.tsx`:
- Navigation labels
- Button text
- Section titles
- Microcopy

## 🌍 Deployment

### Environment Variables

Set these in your deployment platform:
```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

### Static Assets
- Upload `public/resume.pdf`
- Upload `public/audio/ambient.mp3`

### Recommended Platforms
- **Vercel** (recommended) - Zero-config
- **Netlify** - Full support
- **Cloudflare Pages** - Edge deployment

## 🔒 Security

### Guestbook Protection
- ✅ Rate limiting (30s cooldown)
- ✅ Honeypot field
- ✅ Input validation & sanitization
- ✅ XSS prevention
- ✅ Row Level Security (RLS)
- ✅ No raw IP storage

### RLS Policies
- `SELECT`: Public (anonymous + authenticated)
- `INSERT`: Anonymous allowed
- `UPDATE/DELETE`: Service role only

## 📊 Performance

- **Lighthouse Score**: 90+
- **Static Generation**: Home, Resume, Case Studies
- **Image Optimization**: Next.js automatic
- **Font Optimization**: Variable fonts, preload
- **Code Splitting**: Automatic route-based

## 🎯 Key Achievements Highlighted

1. **통합인증모듈** - 전사 인증 표준화, 다수 서비스 확산
2. **오픈뱅킹 결제** - 계좌기반 결제 서비스 출시
3. **본인확인 서비스** - KCC 인증심사 대응, 규제·UX 균형
4. **온라인 결제 UI** - 완료율 개선, 이탈 감소
5. **R&D** - 블록체인, 바이오 인증, 디지털 결제 기술

## 👨‍💼 About

**윤태웅 (Eric Yoon)**
- 신한카드 페이먼트혁신실 프로(과장)
- 9년차 프로덕트 매니저
- Domain: Payment · Fintech · Authentication
- [LinkedIn](https://www.linkedin.com/in/yoontaewoong/)

## 📄 License

All rights reserved © 2026 윤태웅 (Eric Yoon)

---

**Tech Stack**: Next.js 16 · React 19 · TypeScript · TailwindCSS v4 · Supabase · Framer Motion · Lucide Icons
