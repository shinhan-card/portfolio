# Projects List Page

**Route:** `/projects`  
**File:** `app/projects/page.tsx`  
**Type:** Static  
**AI Features:** ❌ None (filters and browsing only)

---

## Overview

Comprehensive project listing with tag-based filtering.

---

## Features

1. **Tag Filtering**
   - All projects
   - By category: Authentication, Payments, Regulatory, UX, Infrastructure, R&D
   
2. **Project Cards**
   - Emoji icon
   - Title + subtitle
   - Tags
   - "Read project" link

3. **Additional Projects Section**
   - Secondary projects displayed below featured ones

---

## Copy (i18n)

**KO:**
\`\`\`
Title: "프로젝트"
Subtitle: "인프라·규제·고객 경험이 교차하는 영역의 제품 기획"
Read More: "자세히 보기"
Additional Projects: "추가 프로젝트"
\`\`\`

**EN:**
\`\`\`
Title: "Projects"
Subtitle: "Product initiatives at the intersection of infrastructure, compliance, and user experience"
Read More: "Read project"
Additional Projects: "Additional Projects"
\`\`\`

---

## Project List

7 total projects:

1. **통합인증모듈** / Integrated Authentication Module  
   Tags: 인증, 플랫폼, 인프라

2. **카드본인확인서비스** / Cardholder Identity Verification  
   Tags: 규제 대응, 카드본인확인, 컴플라이언스

3. **오픈뱅킹 계좌결제** / Open Banking Account Payment  
   Tags: 결제, 오픈뱅킹, 신규사업

4. **계좌결제 런칭** / Account Payment Launch  
   Tags: 결제, 런칭, GTM

5. **온라인결제 UX 재설계** / Online Payment UX Redesign  
   Tags: UX, 결제, 전환율

6. **인증비용 최적화** / Authentication Cost Optimization  
   Tags: 인증, 비용절감, 최적화

7. **핀테크 R&D 이니셔티브** / Fintech R&D Initiatives  
   Tags: R&D, 혁신, 기술조사

---

## Component Structure

\`\`\`tsx
<main>
  <Header />
  <Section>
    <h1>Projects</h1>
    <ProjectFilters />
    <div className="grid">
      {filteredProjects.map(project => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  </Section>
  <Footer />
</main>
\`\`\`
