# Portfolio Context Builder

**File:** `lib/ai/portfolioContext.ts`  
**Purpose:** Generate structured context payload for AI grounding

---

## Overview

Builds a comprehensive text payload containing all public portfolio information. This is sent with every AI request to ensure responses are grounded in factual content.

---

## Function Signature

\`\`\`typescript
function buildPortfolioContext(lang: "en" | "ko"): string
\`\`\`

**Input:** Language code  
**Output:** Structured markdown text with all portfolio data

---

## Context Structure

### 1. Basic Information
\`\`\`
Name: 윤태웅 (Eric Yoon)
Current Role: [from resume.currentRole]
Company: Shinhan Card
Years of Experience: 9+
Email: [redacted in snapshot]
LinkedIn: [profile URL]
\`\`\`

### 2. Professional Summary
From `resumeData.summary`

### 3. Core Focus Areas
3 key competency areas:
- Payment & Auth Infrastructure Design
- Regulatory Product Design
- Cross-functional Team Leadership

### 4. Selected Impact
Top 3 achievements with descriptions

### 5. Projects (All 7)
For each project:
\`\`\`
### [N]. [Project Title]
- Role: [Product Owner / PM]
- Timeline: [duration]
- Tags: [categories]
- Goal: [objective]
- Key Results: [metrics and outcomes]
\`\`\`

### 6. Awards & Recognition
List of awards with issuer, date, description

### 7. Certifications
Professional certifications

### 8. Patents
Filed/registered patents (if any)

### 9. Education
Degree, major, school, period

### 10. Military Service
Rank, unit, period (Korean context)

---

## Sample Output (Structure)

\`\`\`markdown
# PORTFOLIO CONTEXT: 윤태웅 (Eric Yoon)

## BASIC INFORMATION
- Name: 윤태웅 (Eric Yoon / Yoon Tae Woong)
- Current Role: Product Manager at Shinhan Card
- Company: Shinhan Card
- Years of Experience: 9+ years
- LinkedIn: https://www.linkedin.com/in/yoontaewoong/

## SUMMARY
Senior Product Manager specializing in payments, fintech, and authentication infrastructure...

## CORE FOCUS
1. Payment & Authentication Infrastructure Design
2. Regulatory Product Design
3. Cross-functional Team Leadership

## PROJECTS (7 total)

### 1. Integrated Authentication Module
- Role: Product Owner
- Timeline: 18 months
- Tags: Authentication, Platform Design, Infrastructure
- Goal: Create a unified, extensible authentication module...
- Key Results: 
  - Reduced duplicated code by 60%
  - 85%+ satisfaction from engineering teams
  - Improved security posture

### 2. Cardholder Identity Verification
[...]

## AWARDS
- Best Squad H1 2025 (신한카드, 2025.06): Led authentication platform squad...
- Customer Experience Innovation Award (신한금융그룹, 2025 H2): Authentication module expansion...

---
END OF FACTUAL CONTEXT
Any question not answerable from above should be declined politely.
\`\`\`

---

## Data Sources

Content is pulled from:
- `data/resume.ts` - Resume/experience data
- `data/case-studies.ts` - Project details
- `lib/i18n/case-study-translations.ts` - Localized project content

All data is **public information** from the portfolio site.

---

## Design Principles

1. **Comprehensive** - Include all public content
2. **Structured** - Clear hierarchy for AI parsing
3. **Factual** - No editorializing or enhancement
4. **Bilingual** - Supports both KO and EN
5. **Bounded** - Clear start and end markers
6. **Grounded** - Explicit instruction to use ONLY this content

---

## Token Usage

Approximate context size: **2,000-3,000 tokens**
- Fits well within Gemini's context window
- Leaves room for user questions and responses
- No truncation needed

---

## Privacy & Security

**Included:**
- Public professional information
- Published achievements and projects
- General contact info (LinkedIn, email)

**Excluded:**
- Internal company metrics (revenue, budgets)
- Personal information (address, phone, DOB)
- Confidential project details
- Unpublished work
- Salary/compensation
