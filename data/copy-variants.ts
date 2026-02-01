/**
 * Hero & Impact copy variants.
 * Store only — do NOT apply by default.
 * Switch by copying desired variant into LanguageContext or resume/site copy.
 */

export const heroVariantsKo = {
  A: {
    title: "Payments & Fintech Product Manager",
    subtitle: "프로(과장) · 9년차 PM | Payment · Fintech · 인증(Authentication)",
  },
  B: {
    title: "Payment & Authentication Platform PM",
    subtitle: "신한카드 · 페이먼트혁신실 | 9년차 프로덕트 매니저",
  },
  C: {
    title: "Building Payment & Authentication Systems",
    subtitle: "Shinhan Card · Payments PM (9Y)",
  },
} as const;

export const heroVariantsEn = {
  A: {
    title: "Product Manager in Payments & Fintech",
    subtitle: "9 years of experience across authentication and payment infrastructure",
  },
  B: {
    title: "Payments & Authentication Platform PM",
    subtitle: "Building scalable systems under regulatory constraints",
  },
  C: {
    title: "Designing Payment Systems That Actually Work",
    subtitle: "Product Manager · Payments & Fintech",
  },
} as const;

export const impactVariantsEnCompressed = [
  "Unified fragmented authentication systems into a reusable, company-wide platform",
  "Improved online payment and sign-up flows by redesigning issuer-side user journeys",
  "Led compliance and KCC accreditation for card-based identity verification; coordinated with regulators and issuers",
] as const;
