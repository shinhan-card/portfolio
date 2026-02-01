import { ImpactMetric, Skill, Award } from "@/types";

export const impactMetrics: ImpactMetric[] = [
  {
    value: "Unified Platform",
    label: "Authentication Infrastructure",
    description: "Unified fragmented authentication flows into a single modular platform, adopted across multiple high-traffic services",
  },
  {
    value: "Cross-functional",
    label: "Squad Leadership",
    description: "Led cross-functional squads spanning product, engineering, security, and external institutions under regulatory constraints",
  },
  {
    value: "Group-level",
    label: "Recognition",
    description: "Recognized at group-level for customer experience innovation through scalable authentication design",
  },
];

export const skills: Skill[] = [
  {
    category: "Core Expertise",
    items: [
      "Payment & Authentication Infrastructure",
      "Regulatory & Compliance-driven Product Design",
      "Cross-functional Squad Leadership",
      "Stakeholder & External Institution Coordination",
      "Data-informed Decision Making under Constraints",
    ],
  },
];

export const awards: Award[] = [
  {
    title: "Group-level Customer Experience Innovation",
    issuer: "Shinhan Financial Group",
    date: "2024",
    description: "Recognized for scalable authentication design that improved customer experience",
  },
];

export const heroContent = {
  greeting: "Tae Woong Yoon",
  title: "Product Manager",
  subtitle: "Payments & Fintech",
  description:
    "Building scalable authentication and payment infrastructure that works under real-world constraints. I specialize in authentication, payment infrastructure, and regulatory-driven products — translating complex constraints into products that actually ship.",
  cta: {
    primary: { text: "View Case Studies", href: "#case-studies" },
    secondary: { text: "Get in Touch", href: "#contact" },
  },
};
