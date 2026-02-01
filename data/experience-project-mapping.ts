// Bidirectional mapping between experience and projects

export interface ExperienceMapping {
  id: string; // Stable ID for deep linking
  period: string;
  role: string;
  description: string;
  relatedProjects: string[]; // Project slugs
}

// Experience items with stable IDs
export const experienceMappings: ExperienceMapping[] = [
  {
    id: "exp-shinhan-pm-2024",
    period: "2024 ~ Present",
    role: "Product Manager (Manager)",
    description: "Leading authentication platform and payment infrastructure initiatives",
    relatedProjects: [
      "integrated-authentication-module",
      "cardholder-identity-verification",
    ],
  },
  {
    id: "exp-shinhan-pm-2022-2023",
    period: "2022 ~ 2023",
    role: "Product Manager (Assistant Manager)",
    description: "Led Open Banking service planning, account management, and account payment launch",
    relatedProjects: [
      "open-banking-account-payment",
      "account-payment-launch",
    ],
  },
  {
    id: "exp-shinhan-pm-2019-2021",
    period: "2019 ~ 2021",
    role: "Product Manager (Associate)",
    description: "Operated and enhanced online payment service (Ansim Click), developed partner integrations",
    relatedProjects: [
      "online-payment-ux-redesign",
    ],
  },
  {
    id: "exp-shinhan-pm-2018-2019",
    period: "2018 ~ 2019",
    role: "Product Manager (Staff)",
    description: "Operated authentication services, improved signup flows, reduced costs",
    relatedProjects: [
      "authentication-cost-optimization",
    ],
  },
];

// Reverse mapping: project slug → experience IDs
export const projectToExperienceMapping: Record<string, string[]> = {
  "integrated-authentication-module": ["exp-shinhan-pm-2024"],
  "cardholder-identity-verification": ["exp-shinhan-pm-2024"],
  "open-banking-account-payment": ["exp-shinhan-pm-2022-2023"],
  "account-payment-launch": ["exp-shinhan-pm-2022-2023"],
  "online-payment-ux-redesign": ["exp-shinhan-pm-2019-2021"],
  "authentication-cost-optimization": ["exp-shinhan-pm-2018-2019"],
  "fintech-rd-initiatives": ["exp-shinhan-pm-2024", "exp-shinhan-pm-2022-2023"],
};
