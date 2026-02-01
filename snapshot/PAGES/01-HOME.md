# Home Page

**Route:** `/`  
**File:** `app/page.tsx`  
**Type:** Static

---

## Overview

Landing page with Hero section, Impact Metrics, Featured Projects, Skills, and Contact form.

---

## Component Structure

\`\`\`tsx
<main>
  <Header />                    // Global navigation
  <Hero />                      // Hero with AI CTA
  <ImpactMetrics />            // 3-card impact summary
  <FeaturedCaseStudies />      // Top 3 projects
  <Skills />                    // Expertise areas
  <Contact />                   // Contact form
  <Footer />                    // Site footer with AI note
</main>
\`\`\`

---

## AI Features

### Hero AI CTA

**Location:** Below main CTAs (View Resume, View Projects)

**Button Text:**
- KO: "AI로 이 포트폴리오 둘러보기"
- EN: "Explore this portfolio with AI"

**Helper Text:**
- KO: "AI가 이 포트폴리오의 핵심을 요약해드립니다."
- EN: "AI summarizes the essence of this portfolio."

**Behavior:**
- Click → Dispatches `open-ai-panel` event with `presetId: "summary"`
- Opens global AI panel
- Auto-runs "30초 요약" / "30s Summary" preset

**Visual:**
- AIButton component with sparkle animation
- Purple gradient border with gentle glow
- Subtle, non-competing with main CTAs

---

## Copy (i18n)

### Hero Section

**KO:**
\`\`\`
Label: "신한카드 · 페이먼트혁신실"
Role: "프로덕트 매니저 (9년차)"
Company: "신한카드"
Domain: "결제 · 핀테크 · 인증"
Value: "복잡한 제약 속에서도\n실제로 작동하는 핀테크 서비스를 기획합니다."
Description: "규제·보안·조직 현실을 고려해\n기술과 사람, 프로세스가 함께 움직이게 만듭니다."
CTAs: "이력 보기" | "주요 프로젝트" | "전체 프로젝트"
\`\`\`

**EN:**
\`\`\`
Label: "Shinhan Card · Payment Innovation Office"
Role: "Product Manager (9 years)"
Company: "Shinhan Card"
Domain: "Payments · Fintech · Authentication"
Value: "Making fintech services that actually work\nunder complex constraints."
Description: "Balancing regulation, security, and organizational reality\nto make technology, people, and processes move together."
CTAs: "View Resume" | "View Projects" | "View All Projects"
\`\`\`

---

## Impact Metrics

3 cards highlighting key achievements:

**KO:**
1. **전사 인증 표준화** - 분산된 인증 체계를 통합 모듈로 표준화
2. **결제 경험 개선** - 온라인 카드결제 플로우 재설계로 완료율 향상
3. **규제 기반 사업 운영** - KCC 인증심사 및 기관 협의 총괄

**EN:**
1. **Unified Auth Platform** - Unified fragmented authentication systems
2. **Payments & Verification** - Launched account-based payments via Open Banking
3. **Compliance & Audits** - Led business strategy and KCC accreditation

---

## Featured Projects

Top 3 projects displayed with:
- Emoji icon
- Title + subtitle
- Tags (Authentication, Regulatory, Payment, etc.)
- "Read project" CTA

---

## Skills Section

Core competencies:
- 결제·인증 인프라 설계 / Payment & Auth Infrastructure Design
- 규제 기반 제품 기획 / Regulatory Product Design
- 전사 협업 조직 운영 / Cross-functional Team Leadership
- 유관 부서·관계 기관 조율 / Stakeholder Coordination
- 제약 조건 내 데이터 기반 의사결정 / Data-driven Decision Making

---

## Contact Section

Simple contact form with:
- Email
- LinkedIn
- Download Resume button

---

## Visual Elements

- **Background:** Laptop stickers image with gradient overlay
- **Floating emojis:** 💳 🔐 🚀 ⚡ 🎯 💡
- **Profile photo:** Circular crop with decorative ring
- **Scroll indicator:** Animated down arrow

---

## Metadata

\`\`\`tsx
title: "Eric Yoon | Product Manager"
description: "Senior Product Manager specializing in Payments, Fintech, and Authentication Infrastructure at Shinhan Card"
og:image: Custom OG image
\`\`\`
