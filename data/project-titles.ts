// Project title translations
export const projectTitles: Record<string, { ko: string; en: string; subtitle: { ko: string; en: string } }> = {
  "integrated-authentication-module": {
    ko: "통합인증모듈",
    en: "Integrated Authentication Module",
    subtitle: {
      ko: "분산된 인증 로직을 공통 플랫폼으로 전환하고 다수 서비스에 확산",
      en: "Unified fragmented authentication flows into a scalable, reusable platform",
    },
  },
  "cardholder-identity-verification": {
    ko: "카드본인확인서비스",
    en: "Cardholder Identity Verification Service",
    subtitle: {
      ko: "규제 요건과 고객 경험의 균형을 맞춘 카드본인확인 체계 설계",
      en: "Designed compliant identity verification that balances regulatory requirements and user experience",
    },
  },
  "open-banking-account-payment": {
    ko: "오픈뱅킹 계좌관리/송금 고도화",
    en: "Open Banking Account Management & Transfer Enhancement",
    subtitle: {
      ko: "기존 오픈뱅킹 시스템 개선, 인증수단 추가, 보안강화, 송금 UX 리뉴얼",
      en: "Improved existing Open Banking system, added authentication methods, strengthened security, renewed transfer UX",
    },
  },
  "account-payment-launch": {
    ko: "계좌결제 서비스 런칭",
    en: "Account Payment Service Launch",
    subtitle: {
      ko: "카드사 中 2번째로 오픈뱅킹 기반 계좌결제 런칭, 누적 51억원·월 8천명 이상 이용",
      en: "Second among card companies to launch Open Banking account payment, 5.1B KRW cumulative, 8K+ monthly users",
    },
  },
  "online-payment-ux-redesign": {
    ko: "안심클릭 온라인결제 운영 및 고도화",
    en: "Online Payment Service Operation & Enhancement",
    subtitle: {
      ko: "온라인 결제 운영·리뉴얼과 간편결제·3DS2.0 해외결제 개발",
      en: "Operated and renewed online payment service, developed simple payment integrations and 3DS2.0",
    },
  },
  "authentication-cost-optimization": {
    ko: "인증 서비스 운영 및 개선",
    en: "Authentication Service Operation & Improvement",
    subtitle: {
      ko: "다양한 인증수단 운영하며 편의성·보안성 균형 맞춤, 비용 절감 달성",
      en: "Operated multiple authentication methods, balanced convenience and security, achieved cost reduction",
    },
  },
  "fintech-rd-initiatives": {
    ko: "핀테크 R&D 이니셔티브",
    en: "Fintech R&D Initiatives",
    subtitle: {
      ko: "블록체인·생체인증 등 신기술 평가 및 PoC 수행",
      en: "Evaluated emerging technologies including blockchain and biometric authentication through PoC initiatives",
    },
  },
};

export function getProjectTitle(slug: string, language: "en" | "ko"): string {
  return projectTitles[slug]?.[language] || projectTitles[slug]?.en || "";
}

export function getProjectSubtitle(slug: string, language: "en" | "ko"): string {
  return projectTitles[slug]?.subtitle[language] || projectTitles[slug]?.subtitle.en || "";
}
