// Mapping between resume highlights and related projects
export const resumeToProjectMapping: Record<string, string[]> = {
  // Integrated Authentication Module
  "integrated-authentication": [
    "integrated-authentication-module",
  ],
  "authentication-module": [
    "integrated-authentication-module",
  ],
  "통합인증모듈": [
    "integrated-authentication-module",
  ],
  "통합 인증": [
    "integrated-authentication-module",
  ],
  
  // Identity Verification
  "identity-verification": [
    "cardholder-identity-verification",
  ],
  "본인확인": [
    "cardholder-identity-verification",
  ],
  "카드본인확인": [
    "cardholder-identity-verification",
  ],
  "KCC": [
    "cardholder-identity-verification",
  ],
  
  // Open Banking
  "open-banking": [
    "open-banking-account-payment",
  ],
  "오픈뱅킹": [
    "open-banking-account-payment",
  ],
  "계좌결제": [
    "open-banking-account-payment",
  ],
  
  // Payment UX
  "payment-ux": [
    "online-payment-ux-redesign",
  ],
  "결제 UX": [
    "online-payment-ux-redesign",
  ],
  "온라인 결제": [
    "online-payment-ux-redesign",
  ],
  
  // Cost Optimization
  "authentication-cost": [
    "authentication-cost-optimization",
  ],
  "비용 절감": [
    "authentication-cost-optimization",
  ],
  
  // R&D
  "fintech-rd": [
    "fintech-rd-initiatives",
  ],
  "R&D": [
    "fintech-rd-initiatives",
  ],
  "블록체인": [
    "fintech-rd-initiatives",
  ],
};

// Extract project slugs from highlight text
export function findRelatedProjects(text: string): string[] {
  const projects = new Set<string>();
  
  Object.entries(resumeToProjectMapping).forEach(([keyword, slugs]) => {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      slugs.forEach(slug => projects.add(slug));
    }
  });
  
  return Array.from(projects);
}
