# Resume Page

**Route:** `/resume`  
**File:** `app/resume/page.tsx`  
**Type:** Static  
**AI Features:** ✅ AI Career Summary

---

## Overview

Comprehensive resume with experience, education, awards, certifications, and patents.

---

## AI Feature

### AI Career Summary

**Location:** Top right corner (next to back button)

**Button Text:**
- KO: "AI로 경력 요약"
- EN: "Summarize experience with AI"

**Prompt:**
- KO: "이 사람의 경력과 전문성을 간단히 요약해주세요."
- EN: "Briefly summarize this person's experience and expertise."

**Type:** Inline response (executive layout)  
**Behavior:** Expands below header, shows concise career summary

---

## Content Structure

### 1. Core Focus
3 key areas:
- 결제·인증 인프라 설계 / Payment & Auth Infrastructure Design
- 규제 기반 제품 기획 / Regulatory Product Design
- 전사 협업 조직 운영 / Cross-functional Leadership

### 2. Selected Impact
3 highlight cards (same as home page Impact Metrics)

### 3. Professional Summary
Brief introduction paragraph

### 4. Experience
**Shinhan Card (2017 - Present)**
- Payment Innovation Office - Product Manager
- Digital Payments Team - Associate PM
- Digital Strategy Team - PM

Each role includes:
- Duration
- Responsibilities
- Key achievements
- Related project links (AI-enabled project pages)

### 5. Military Service
Korean mandatory service details

### 6. Education
- University degree
- Major/Minor

### 7. Awards & Recognition
- Best Squad H1 2025 (신한카드)
- 고객경험 혁신상 (신한금융그룹)

### 8. Certifications
- Professional certifications
- Industry qualifications

### 9. Patents
- Filed/registered patents (if any)

### 10. Contact
- Email
- LinkedIn
- Download Resume PDF

---

## Related Project Links

Each experience section shows related case studies with AI features:

\`\`\`tsx
<RelatedProjectLinks 
  projects={relatedProjects} 
  context="resume-section"
/>
\`\`\`

Clicking a project card → navigates to project detail page with AI summary/decisions available

---

## Copy (Sample - KO)

\`\`\`
헤더: "이력"
핵심역량: "결제·인증 인프라 설계"
주요성과: "전사 인증 표준화"
경력: "신한카드 페이먼트혁신실 프로덕트 매니저"
기간: "2023 ~ 현재"
담당: "통합 인증 모듈 구축, 결제 시스템 기획, 규제 대응"
\`\`\`

**EN:**
\`\`\`
Header: "Resume"
Core Focus: "Payment & Auth Infrastructure Design"
Selected Impact: "Unified Auth Platform"
Experience: "Shinhan Card - Payment Innovation Office - Product Manager"
Duration: "2023 - Present"
Responsibilities: "Authentication platform, payment systems, regulatory compliance"
\`\`\`
