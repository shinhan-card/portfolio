export interface Experience {
  company: string;
  roles: {
    title: string;
    department?: string;
    period: string;
    current?: boolean;
    highlights: string[];
  }[];
}

export interface Education {
  school: string;
  degree: string;
  major: string;
  period: string;
}

export interface Military {
  branch: string;
  unit: string;
  rank: string;
  period: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Certification {
  title: string;
  issuer?: string;
  date?: string;
}

export interface Patent {
  title: string;
  description?: string;
}

export interface Resume {
  name: {
    ko: string;
    en: string;
  };
  title: {
    ko: string;
    en: string;
  };
  currentRole: {
    ko: string;
    en: string;
  };
  location: {
    ko: string;
    en: string;
  };
  summary: {
    ko: string;
    en: string;
  };
  coreFocus: {
    ko: string[];
    en: string[];
  };
  selectedImpact: {
    ko: string[];
    en: string[];
  };
  experience: {
    ko: Experience[];
    en: Experience[];
  };
  military: {
    ko: Military;
    en: Military;
  };
  education: {
    ko: Education;
    en: Education;
  };
  awards: {
    ko: Award[];
    en: Award[];
  };
  certifications: Certification[];
  patents: {
    ko: Patent[];
    en: Patent[];
  };
  contact: {
    email: string;
    linkedin: string;
  };
}

export const resumeData: Resume = {
  name: {
    ko: "윤태웅",
    en: "Eric Yoon",
  },
  title: {
    ko: "프로덕트 매니저",
    en: "Product Manager",
  },
  currentRole: {
    ko: "신한카드 페이먼트혁신실 프로(과장) · 9년차 PM",
    en: "Product Manager, Shinhan Card · 9 Years Experience",
  },
  location: {
    ko: "대한민국 서울",
    en: "Seoul, South Korea",
  },
  summary: {
    ko: "결제(Payment)·핀테크(Fintech) 영역에서 9년간 제품을 만들어 온 프로덕트 매니저입니다. 인증(Authentication), 온라인 결제, 계좌 기반 서비스, 핀테크 인프라를 중심으로 고객 경험 개선과 운영 효율, 그리고 규제·보안 요건을 함께 고려한 제품을 설계해 왔습니다.\n\n단순한 기능 구현이 아니라, 조직과 시스템이 지속 가능하게 작동하는 구조를 만드는 것을 제품 관리의 핵심으로 생각합니다.",
    en: "Nine-year Product Manager in Payments and Fintech. Domains: authentication, online payments, account-based services, fintech infrastructure. Focus on regulatory compliance, scalability, and real user behavior. Led enterprise auth standardization, Open Banking payment launches, identity verification and KCC accreditation; coordinated with regulators, KISA, and issuers.",
  },
  coreFocus: {
    ko: [
      "Payment & Fintech Infrastructure",
      "인증(Authentication) 플랫폼 설계 및 확산",
      "규제·컴플라이언스 기반 제품 기획",
      "크로스펑셔널 스쿼드 리딩",
      "기관 협의 및 감사/심사 대응",
    ],
    en: [
      "Payment & Fintech Infrastructure",
      "Authentication Platform Design & Rollout",
      "Regulatory & Compliance-driven Product Design",
      "Cross-functional Squad Leadership",
      "Stakeholder & Audit Coordination",
    ],
  },
  selectedImpact: {
    ko: [
      "전사 공통 인증 모듈 PO로서 인증 체계 표준화 및 단계적 확산을 주도",
      "오픈뱅킹 API 기반 계좌 연계 결제 서비스 기획·출시",
      "온라인 카드결제 UI/UX 전면 개선을 통해 결제 흐름 안정화",
      "카드 본인확인 서비스의 사업 전략 수립 및 KCC 인증심사 연간 대응 총괄",
      "블록체인·바이오 인증 등 차세대 인증 기술 리서치 및 PoC 수행",
    ],
    en: [
      "Led authentication standardization and phased rollout as PO of company-wide auth module",
      "Planned and launched account-linked payment service using Open Banking APIs",
      "Stabilized payment flows through full redesign of online card payment UI/UX",
      "Led business strategy and annual KCC certification for card-based identity verification",
      "Conducted R&D and PoC on next-gen auth (blockchain, biometric authentication)",
    ],
  },
  experience: {
    ko: [
      {
        company: "신한카드",
        roles: [
          {
            title: "프로덕트 매니저",
            department: "페이먼트혁신실",
            period: "2026.01 ~ 현재",
            current: true,
            highlights: [
              "통합 인증 모듈 운영 및 전사 인증 전략 수립",
              "인증·결제 거버넌스 회의체 기획 및 운영",
              "영업·준법·운영을 고려한 사업기획 지원",
            ],
          },
          {
            title: "프로덕트 매니저",
            department: "페이먼트R&D팀 / 영업기획부",
            period: "2024.01 ~ 2026.01",
            highlights: [
              "전사 인증 인프라 이니셔티브 PO 및 스쿼드 리드",
              "인증 서비스 운영 및 KCC 인증심사 연간 대응",
              "카드본인확인 사업전략 및 운영 총괄",
              "디지털 결제 R&D: 블록체인, 바이오 인증, 스테이블코인 기술 리서치",
            ],
          },
          {
            title: "프로덕트 매니저",
            department: "MyPayment챕터 / pLayBiz2팀",
            period: "2022.01 ~ 2023.12",
            highlights: [
              "오픈뱅킹 기반 계좌기반 결제 서비스 출시",
              "계좌조회 및 이체 서비스 확장",
            ],
          },
          {
            title: "프로덕트 매니저",
            department: "디지털페이먼트팀 / Next페이먼트팀",
            period: "2019.01 ~ 2021.12",
            highlights: [
              "온라인 카드결제(인증~승인) 운영 및 고도화",
              "앱카드 가입 플로우 개선으로 인증비 절감",
              "온라인 결제 UI 전면 리디자인 (완료율 개선, 이탈 감소)",
              "3DS 2.0 글로벌 브랜드 연동 (Visa, MC, JCB, AMEX, UPI)",
              "Future's Lab RM",
            ],
          },
          {
            title: "프로덕트 매니저",
            department: "디지털R&D셀",
            period: "2018.01 ~ 2018.12",
            highlights: [
              "모바일·기기·인증서 기반 인증 서비스 운영",
              "바이오 인증 옵션 발굴",
              "블록체인 기술 리서치 및 PoC",
              "Future's Lab RM",
            ],
          },
        ],
      },
    ],
    en: [
      {
        company: "Shinhan Card",
        roles: [
          {
            title: "Product Manager",
            department: "Payment Innovation Office",
            period: "Jan 2026 ~ Present",
            current: true,
            highlights: [
              "Operate integrated authentication module and define enterprise-wide authentication strategy",
              "Plan and operate authentication & payment governance meetings",
              "Support business planning considering sales, compliance, and operations",
            ],
          },
          {
            title: "Product Manager",
            department: "Payment R&D Team / Sales Planning",
            period: "Jan 2024 ~ Jan 2026",
            highlights: [
              "PO and squad lead for enterprise authentication infrastructure initiative",
              "Operate authentication services and lead annual KCC certification reviews",
              "Lead cardholder identity verification business strategy and operations",
              "Digital payment R&D: blockchain, biometric authentication, stablecoin research",
            ],
          },
          {
            title: "Product Manager",
            department: "MyPayment Chapter / pLayBiz2 Team",
            period: "Jan 2022 ~ Dec 2023",
            highlights: [
              "Launched open banking-based account payment service",
              "Expanded account inquiry and transfer services",
            ],
          },
          {
            title: "Product Manager",
            department: "Digital Payment Team / Next Payment Team",
            period: "Jan 2019 ~ Dec 2021",
            highlights: [
              "Operated and enhanced online card payment (authentication to approval)",
              "Improved app card registration flow, reducing authentication costs",
              "Redesigned online payment UI (improved completion rate, reduced drop-off)",
              "Integrated 3DS 2.0 with global brands (Visa, MC, JCB, AMEX, UPI)",
              "Future's Lab RM",
            ],
          },
          {
            title: "Product Manager",
            department: "Digital R&D Cell",
            period: "Jan 2018 ~ Dec 2018",
            highlights: [
              "Operated mobile, device, and certificate-based authentication services",
              "Explored biometric authentication options",
              "Blockchain technology research and PoC",
              "Future's Lab RM",
            ],
          },
        ],
      },
    ],
  },
  military: {
    ko: {
      branch: "대한민국 육군",
      unit: "특전사 13공수특전여단",
      rank: "병장 전역",
      period: "2014.01 ~ 2015.10",
    },
    en: {
      branch: "Republic of Korea Army",
      unit: "Special Warfare Command, 13th Airborne Brigade",
      rank: "Sergeant (Honorable Discharge)",
      period: "Jan 2014 ~ Oct 2015",
    },
  },
  education: {
    ko: {
      school: "한양대학교",
      degree: "학사",
      major: "정보시스템학과 & 글로벌비즈니스문화",
      period: "2012 ~ 2018",
    },
    en: {
      school: "Hanyang University",
      degree: "Bachelor's Degree",
      major: "Information Systems & Global Business and Culture",
      period: "2012 ~ 2018",
    },
  },
  awards: {
    ko: [
      {
        title: "Best Squad – H1 2025 (상반기 최우수 스쿼드)",
        issuer: "신한카드",
        date: "2025년 6월",
        description: "통합 인증 모듈 구축을 목표로 한 전사 스쿼드를 PO로서 리딩하며, 인증 체계 표준화와 운영 효율 개선에 기여",
      },
      {
        title: "고객경험 혁신상 (우수)",
        issuer: "신한금융그룹",
        date: "2025 하반기",
        description: "통합인증 모듈 확산 및 비용 절감·CX 개선 기여",
      },
      {
        title: "창립기념 유공직원상",
        issuer: "신한카드",
        date: "2021년 10월",
        description: "디지털 프로덕트 기획 및 서비스 운영 성과를 인정받아 전사 창립기념 유공직원상 수상",
      },
    ],
    en: [
      {
        title: "Best Squad – H1 2025",
        issuer: "Shinhan Card",
        date: "Jun 2025",
        description: "Led company-wide squad as PO for integrated authentication module; contributed to auth standardization and operational efficiency",
      },
      {
        title: "Customer Experience Innovation Award (Excellence)",
        issuer: "Shinhan Financial Group",
        date: "H2 2025",
        description: "Expanding unified authentication module; cost reduction and CX improvement",
      },
      {
        title: "Employee Recognition Award",
        issuer: "Shinhan Card",
        date: "Oct 2021",
        description: "Company-wide recognition for excellence in digital product planning and service operation",
      },
    ],
  },
  certifications: [
    {
      title: "Professional Scrum Product Owner I (PSPO I)",
      issuer: "Scrum.org",
      date: "2025-11",
    },
    {
      title: "OPIC AL (Advanced Low)",
      issuer: "ACTFL",
      date: "2017-08",
    },
    {
      title: "Airborne Basic Parachute Training",
      issuer: "ROK Army Special Warfare Command",
      date: "2014-06",
    },
  ],
  patents: {
    ko: [
      {
        title: "사용자 인증 우회 차단 방법 및 장치",
        description: "출원일: 2024-04-23 | 모바일 앱 가입 과정에서 인증 우회를 차단하는 방법 및 장치",
      },
    ],
    en: [
      {
        title: "Method and Device for Blocking User Authentication Bypass",
        description: "Application date: 2024-04-23 | Blocks authentication bypass during mobile app sign-up",
      },
    ],
  },
  contact: {
    email: "stylist@kakao.com",
    linkedin: "https://www.linkedin.com/in/yoontaewoong/",
  },
};
