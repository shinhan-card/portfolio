export interface DecisionLog {
  chosen: string;
  notChosen: string[];
  reasoning: string;
  risks: string[];
  tradeoffs: string;
}

export interface SystemDiagram {
  title: string;
  description: string;
  type: "flow" | "architecture" | "sequence";
  components: {
    id: string;
    label: string;
    type: "system" | "service" | "data" | "external" | "user";
  }[];
  connections: {
    from: string;
    to: string;
    label?: string;
  }[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  tags: string[];
  featured: boolean;
  summaryBullets: string[];
  meta: {
    role: string;
    scope: string;
    timeline: string;
  };
  // Filter metadata (optional - stored separately in project-metadata.ts)
  domain?: ("Authentication" | "Payments" | "Compliance" | "OpenBanking" | "UX" | "Cost" | "R&D")[];
  roleType?: ("Product Owner" | "Product Manager" | "Product Lead")[];
  focus?: ("Platform" | "Regulation" | "UX" | "Infrastructure" | "Cost" | "Innovation")[];
  // Core content
  context: string;
  goal: string;
  role: string;
  keyDecisions: string[];
  // New: Decision logs
  decisionLogs?: DecisionLog[];
  // New: System diagram
  systemDiagram?: SystemDiagram;
  execution: {
    phase: string;
    description: string;
  }[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  learnings: string[];
  duration: string;
  company: string;
}

export interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin?: string;
    email?: string;
    calendar?: string;
  };
}
