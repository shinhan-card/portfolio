# Project Detail Page

**Route:** `/case-studies/[slug]`  
**File:** `app/case-studies/[slug]/page.tsx`  
**Type:** SSG (Static Site Generation)  
**AI Features:** ✅ AI Summary, AI Decisions, AI System Explain

---

## Overview

Detailed case study with context, goals, execution, results, and system views.

---

## AI Features (Context-local)

### 1. AI Summary Button
**Location:** Below Executive Summary  
**Type:** Inline response (brief layout)  
**Prompt:** "[프로젝트명] 프로젝트를 30초 안에 요약해주세요"  
**Behavior:** Expands accordion below button

### 2. AI Decisions Button
**Location:** Below Executive Summary (if decision logs exist)  
**Type:** Inline response (brief layout)  
**Prompt:** "[프로젝트명] 프로젝트의 핵심 의사결정과 트레이드오프를 요약해주세요"  
**Behavior:** Shows decision summary inline

### 3. AI System Explain
**Location:** Within System View section  
**Type:** Inline response (narration layout)  
**Prompt:** "[시스템명] 시스템 다이어그램을 간단히 설명해주세요"  
**Behavior:** Explains architecture inline

---

## Page Structure

\`\`\`tsx
<main>
  {/* Hero Section */}
  <section className="bg-surface2">
    <BackLink />
    <Tags />
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <ReadingTime />
    <ShareButtons />
    <ExecutiveSummary bullets={...} />
    
    {/* AI Actions - inline */}
    <AIButton onClick={toggleSummary}>AI 요약</AIButton>
    {decisions && <AIButton onClick={toggleDecisions}>AI로 의사결정 보기</AIButton>}
    
    {showAISummary && <AIInlineResponse prompt={...} layout="brief" />}
    {showAIDecisions && <AIInlineResponse prompt={...} layout="brief" />}
    
    <MetaInfo: Company, Duration, Role />
  </section>
  
  {/* Content Sections */}
  <article>
    <Section title="Context">{context}</Section>
    <Section title="Goal">{goal}</Section>
    <Section title="My Role">{role}</Section>
    
    {visuals && <ImageCarousel />}
    
    <DecisionLogSection decisions={...} />
    <SystemDiagramSection diagram={...} />  {/* Has AI Explain button */}
    
    <Section title="Execution">{execution}</Section>
    <Section title="Results">{results}</Section>
    <Section title="Key Learnings">{learnings}</Section>
    
    <RelatedExperience />
  </article>
  
  {/* CTA */}
  <section>
    <h3>Interested in learning more?</h3>
    <Button>Get in Touch</Button>
    <Button>View More Projects</Button>
  </section>
</main>
\`\`\`

---

## Sample Project: Integrated Authentication Module

**Slug:** `integrated-authentication-module`

**Title (KO):** 통합인증모듈  
**Title (EN):** Integrated Authentication Module

**Subtitle (KO):** 분산된 인증 로직을 공통 플랫폼으로 전환하고 다수 서비스에 확산  
**Subtitle (EN):** Unified fragmented authentication flows into a scalable, reusable platform

**Tags:** Authentication, Platform Design, Infrastructure

**Meta:**
- Role: Product Owner
- Scope: Cross-service Authentication Platform
- Timeline: 18 months

**Summary Bullets:**
- Unified fragmented authentication across multiple services
- 85%+ satisfaction from engineering teams
- Reduced duplicated implementation work
- Established scalable governance model

**Context:**  
Authentication flows were fragmented across services, causing duplicated development, inconsistent UX, and operational inefficiencies...

**Goal:**  
Create a unified, extensible authentication module that could be reused across services...

**Key Decisions:**
1. Centralized authentication logic while keeping service-level flexibility
2. Prioritized real adoption over perfect standardization
3. Designed for incremental rollout instead of big-bang migration
4. Established governance model for future authentication methods

**Execution (4 phases):**
1. Platform Design & Requirements (Months 1-3)
2. Development & Pilot (Months 4-8)
3. Gradual Expansion (Months 9-14)
4. Stabilization & Scale (Months 15-18)

**Results:**
- Reduced duplicated authentication code by ~60%
- 85%+ satisfaction from engineering teams
- Improved security posture
- Established foundation for future auth methods

**Learnings:**
- Platform adoption requires solving real pain points
- Incremental rollout reduces organizational risk
- Governance is as important as technical design

---

## Sample Project: Cardholder Identity Verification

**Slug:** `cardholder-identity-verification`

**Title (KO):** 카드본인확인서비스  
**Title (EN):** Cardholder Identity Verification

**Subtitle (KO):** 규제 요건과 고객 경험의 균형을 맞춘 카드본인확인 체계 설계  
**Subtitle (EN):** Balanced regulatory requirements and customer experience in designing card-based identity verification

**Tags:** 규제 대응, 카드본인확인, 컴플라이언스 / Regulatory, Identity Verification, Compliance

**Meta:**
- Role: Product Manager
- Scope: Regulatory Product Design & Business Strategy
- Timeline: Ongoing since 2023

**Context:**  
Korean regulators require standardized identity verification for financial transactions. Card-based verification is a core method, but requires KCC (Korea Communications Commission) accreditation and coordination with multiple issuers...

**Goal:**  
Design and operate a compliant, user-friendly card identity verification service that meets regulatory requirements while maintaining competitive transaction speeds...

**Key Decisions:**
1. Prioritized compliance over feature velocity
2. Designed for multi-issuer coordination from day one
3. Separated technical infrastructure from regulatory processes
4. Built audit-ready documentation and reporting

**Results:**
- Obtained and maintained KCC accreditation
- Processed millions of verification transactions
- Maintained 99%+ compliance rate in audits
- Established sustainable cross-issuer coordination model

---

## Navigation

**Within page:**
- Back to projects list
- Reading time indicator
- Share buttons (Twitter, LinkedIn, Email)
- Related experience cards (resume sections)

**Footer CTA:**
- "Get in Touch" → Contact section
- "View More Projects" → /projects
