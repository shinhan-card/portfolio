"use client";

import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ko";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    // Load saved language from localStorage, default to English
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "ko")) {
      setLanguageState(saved);
    } else {
      // Set default to English
      setLanguageState("en");
    }
  }, [mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

// Translations
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.caseStudies": "Projects",
    "nav.skills": "Expertise",
    "nav.resume": "Resume",
    "nav.about": "About",
    "nav.guestbook": "Guestbook",
    "nav.contact": "Contact",
    "nav.downloadResume": "Download Resume",

    // Hero — role, seniority, domain (no name; name is in header)
    "hero.label": "Shinhan Card · Payment Innovation Office",
    "hero.name": "Eric Yoon",
    "hero.role": "Product Manager (9 years)",
    "hero.company": "Shinhan Card",
    "hero.domain": "Payments · Fintech · Authentication",
    "hero.title": "Payments & Fintech Product Manager",
    "hero.subtitle": "Pro (Manager) · 9 Years PM\nPayment · Fintech · Authentication",
    "hero.value": "Making fintech services that actually work\nunder complex constraints.",
    "hero.description":
      "Balancing regulation, security, and organizational reality\nto make technology, people, and processes move together.",
    "hero.cta.primary": "View Resume",
    "hero.cta.secondary": "View Projects",
    "hero.cta.all": "View All Projects",

    // Impact Metrics
    "impact.title": "Impact Summary",
    "impact.subtitle":
      "Authentication infrastructure, regulatory product design, and cross-functional delivery",
    "impact.metric1.label": "Platform",
    "impact.metric1.value": "Unified Auth",
    "impact.metric1.description":
      "Unified fragmented authentication systems into reusable modules; adopted across multiple high-traffic services",
    "impact.metric2.label": "Product",
    "impact.metric2.value": "Payments & Verification",
    "impact.metric2.description":
      "Launched account-based payments via Open Banking; redesigned online card payment flows to improve completion and reduce drop-off",
    "impact.metric3.label": "Governance",
    "impact.metric3.value": "Compliance & Audits",
    "impact.metric3.description":
      "Led business strategy and KCC accreditation for card-based identity verification; coordinated with regulators, KISA, and issuers",

    // Projects (formerly Case Studies)
    "caseStudies.title": "Projects",
    "caseStudies.subtitle":
      "Product initiatives at the intersection of infrastructure, compliance, and user experience",
    "caseStudies.readMore": "Read project",
    "caseStudies.viewAll": "View all projects",
    "caseStudies.additionalProjects": "Additional Projects",

    // Case Study 1
    "case1.title": "Integrated Authentication Module",
    "case1.subtitle":
      "Unified fragmented authentication flows into a scalable, reusable platform",
    "case1.tag1": "Authentication",
    "case1.tag2": "Platform Design",
    "case1.tag3": "Infrastructure",

    // Case Study 2
    "case2.title": "Cardholder Identity Verification Service",
    "case2.subtitle":
      "Designed compliant identity verification that balances regulatory requirements and user experience",
    "case2.tag1": "Compliance",
    "case2.tag2": "Identity Verification",
    "case2.tag3": "Regulatory Design",

    // Skills
    "skills.title": "Core Expertise",
    "skills.subtitle":
      "Specialized capabilities at the intersection of product, technology, and regulation",
    "skills.item1": "Payment & Authentication Infrastructure",
    "skills.item2": "Regulatory & Compliance-driven Product Design",
    "skills.item3": "Cross-functional Squad Leadership",
    "skills.item4": "Stakeholder & External Institution Coordination",
    "skills.item5": "Data-informed Decision Making under Constraints",

    // Recognition
    "recognition.title": "Recognition",
    "recognition.subtitle": "Acknowledgment for impactful product work",
    "recognition.award1.title": "Best Squad – H1 2025",
    "recognition.award1.issuer": "Shinhan Card",
    "recognition.award1.date": "Jun 2025",
    "recognition.award1.description":
      "Led company-wide squad as PO for integrated authentication module; contributed to auth standardization and operational efficiency",
    "recognition.award2.title": "Customer Experience Innovation Award (Excellence)",
    "recognition.award2.issuer": "Shinhan Financial Group",
    "recognition.award2.date": "H2 2025",
    "recognition.award2.description":
      "Expanding unified authentication module; cost reduction and CX improvement",

    // Contact (Get in touch — lighter tone)
    "contact.sectionLabel": "Get in touch",
    "contact.title": "Say hello",
    "contact.subtitle":
      "Ideas, collaboration, or just a quick hello — I'm here.",
    "contact.linkedin": "LinkedIn",
    "contact.email": "Email",
    "contact.downloadResume": "Download Resume",

    // Footer
    "footer.role": "Product Manager at Shinhan Card",
    "footer.focus": "Payments & Authentication Infrastructure",
    "footer.quickLinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.copyright": "All rights reserved.",

    // Case Study Detail
    "caseDetail.back": "Back to Projects",
    "caseDetail.company": "Company",
    "caseDetail.duration": "Duration",
    "caseDetail.role": "Role",
    "caseDetail.productManager": "Product Manager",
    "caseDetail.context": "Context",
    "caseDetail.goal": "Goal",
    "caseDetail.myRole": "My Role",
    "caseDetail.keyDecisions": "Key Decisions",
    "caseDetail.execution": "Execution",
    "caseDetail.results": "Results",
    "caseDetail.learnings": "Key Learnings",
    "caseDetail.cta.title": "Interested in learning more?",
    "caseDetail.cta.subtitle":
      "I'd love to discuss this project in detail or explore how we could work together.",
    "caseDetail.cta.primary": "Get in Touch",
    "caseDetail.cta.secondary": "View More Projects",
  },
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.caseStudies": "케이스 스터디",
    "nav.skills": "전문성",
    "nav.resume": "이력",
    "nav.about": "소개",
    "nav.guestbook": "방명록",
    "nav.contact": "Contact",
    "nav.downloadResume": "이력서",

    // Hero — 승인 한국어 (이름은 헤더에만, 1인칭 사용 안 함)
    "hero.label": "신한카드 · 페이먼트혁신실",
    "hero.name": "윤태웅",
    "hero.role": "프로덕트 매니저 (9년차)",
    "hero.company": "신한카드",
    "hero.domain": "결제 · 핀테크 · 인증",
    "hero.title": "Payments & Fintech Product Manager",
    "hero.subtitle": "프로(과장) · 9년차 PM\nPayment · Fintech · 인증(Authentication)",
    "hero.value": "복잡한 제약 속에서도\n실제로 작동하는 핀테크 서비스를 기획합니다.",
    "hero.description":
      "규제·보안·조직 현실을 고려해\n기술과 사람, 프로세스가 함께 움직이게 만듭니다.",
    "hero.cta.primary": "이력 보기",
    "hero.cta.secondary": "주요 프로젝트",
    "hero.cta.all": "전체 프로젝트",

    // Impact Summary — 3 cards (승인 한국어)
    "impact.title": "주요 성과",
    "impact.subtitle": "인증 인프라, 규제 대응 제품 설계, 크로스펑셔널 협업",
    "impact.metric1.label": "전사 인증 표준화",
    "impact.metric1.value": "전사 인증 표준화",
    "impact.metric1.description":
      "분산된 인증(Authentication) 체계를 통합 모듈로 표준화하여\n중복 개발을 줄이고 채널 확장성과 운영 효율을 개선함",
    "impact.metric2.label": "결제 경험 개선",
    "impact.metric2.value": "결제 경험 개선",
    "impact.metric2.description":
      "온라인 카드결제 및 앱 가입 플로우를 재설계해\n완료율을 높이고 이탈·오류를 구조적으로 감소시킴",
    "impact.metric3.label": "규제 기반 사업 운영",
    "impact.metric3.value": "규제 기반 사업 운영",
    "impact.metric3.description":
      "카드본인확인서비스의 사업 전략과\nKCC 인증심사·기관 협의를 총괄하며 안정적인 서비스 확장을 이끌어옴",

    // Case Studies
    "caseStudies.title": "프로젝트",
    "caseStudies.subtitle":
      "인프라·규제·고객 경험이 교차하는 영역의 제품 기획",
    "caseStudies.readMore": "자세히 보기",
    "caseStudies.viewAll": "전체 프로젝트",
    "caseStudies.additionalProjects": "추가 프로젝트",

    // Case Study 1
    "case1.title": "통합인증모듈",
    "case1.subtitle":
      "분산된 인증 로직을 공통 플랫폼으로 전환하고 다수 서비스에 확산",
    "case1.tag1": "인증",
    "case1.tag2": "플랫폼",
    "case1.tag3": "인프라",

    // Case Study 2
    "case2.title": "카드본인확인서비스",
    "case2.subtitle":
      "규제 요건과 고객 경험의 균형을 맞춘 카드본인확인 체계 설계",
    "case2.tag1": "규제 대응",
    "case2.tag2": "카드본인확인",
    "case2.tag3": "컴플라이언스",

    // Skills
    "skills.title": "전문성",
    "skills.subtitle": "제품·기술·규제 영역의 실무 역량",
    "skills.item1": "결제·인증 인프라 설계",
    "skills.item2": "규제 기반 제품 기획",
    "skills.item3": "전사 협업 조직 운영",
    "skills.item4": "유관 부서·관계 기관 조율",
    "skills.item5": "제약 조건 내 데이터 기반 의사결정",

    // Recognition
    "recognition.title": "수상",
    "recognition.subtitle": "제품 성과 인정",
    "recognition.award1.title": "Best Squad – H1 2025 (상반기 최우수 스쿼드)",
    "recognition.award1.issuer": "신한카드",
    "recognition.award1.date": "2025년 6월",
    "recognition.award1.description":
      "통합 인증 모듈 구축을 목표로 한 전사 스쿼드를 PO로서 리딩하며, 인증 체계 표준화와 운영 효율 개선에 기여",
    "recognition.award2.title": "고객경험 혁신상 (우수)",
    "recognition.award2.issuer": "신한금융그룹",
    "recognition.award2.date": "2025 하반기",
    "recognition.award2.description":
      "통합인증 모듈 확산 및 비용 절감·CX 개선 기여",

    // Contact (Get in touch — 가벼운 멘트)
    "contact.sectionLabel": "인사하기",
    "contact.title": "편하게 인사 남겨 주세요",
    "contact.subtitle":
      "아이디어, 협업, 혹은 그냥 인사 — 언제든 환영합니다.",
    "contact.linkedin": "LinkedIn",
    "contact.email": "이메일",
    "contact.downloadResume": "이력서",

    // Footer
    "footer.role": "신한카드 프로덕트 매니저",
    "footer.focus": "결제·인증 인프라",
    "footer.quickLinks": "바로가기",
    "footer.connect": "연락",
    "footer.copyright": "All rights reserved.",

    // Case Study Detail
    "caseDetail.back": "목록으로",
    "caseDetail.company": "회사",
    "caseDetail.duration": "기간",
    "caseDetail.role": "역할",
    "caseDetail.productManager": "프로덕트 매니저",
    "caseDetail.context": "배경",
    "caseDetail.goal": "목표",
    "caseDetail.myRole": "담당 역할",
    "caseDetail.keyDecisions": "핵심 판단",
    "caseDetail.execution": "추진 과정",
    "caseDetail.results": "성과",
    "caseDetail.learnings": "인사이트",
    "caseDetail.cta.title": "논의하실 주제가 있으신가요?",
    "caseDetail.cta.subtitle":
      "이 프로젝트나 협업 가능성에 대해 자세히 나누고 싶습니다.",
    "caseDetail.cta.primary": "문의하기",
    "caseDetail.cta.secondary": "다른 프로젝트 보기",
  },
};
