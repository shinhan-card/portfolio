import { DecisionLog, SystemDiagram } from "@/types";

// Filter metadata for each project
export const projectFilters: Record<
  string,
  {
    domain: string[];
    roleType: string[];
    focus: string[];
  }
> = {
  "integrated-authentication-module": {
    domain: ["Authentication"],
    roleType: ["Product Owner"],
    focus: ["Platform", "Infrastructure"],
  },
  "cardholder-identity-verification": {
    domain: ["Authentication", "Compliance"],
    roleType: ["Product Manager"],
    focus: ["Regulation", "UX"],
  },
  "open-banking-account-payment": {
    domain: ["OpenBanking"],
    roleType: ["Product Manager"],
    focus: ["Infrastructure"],
  },
  "account-payment-launch": {
    domain: ["Payments", "OpenBanking"],
    roleType: ["Product Manager"],
    focus: ["Infrastructure", "UX"],
  },
  "online-payment-ux-redesign": {
    domain: ["Payments", "UX"],
    roleType: ["Product Manager"],
    focus: ["UX"],
  },
  "authentication-cost-optimization": {
    domain: ["Authentication"],
    roleType: ["Product Manager"],
    focus: ["Cost", "Infrastructure"],
  },
  "fintech-rd-initiatives": {
    domain: ["R&D"],
    roleType: ["Product Lead"],
    focus: ["Innovation"],
  },
};

// Decision logs for key projects
export const decisionLogs: Record<string, DecisionLog[]> = {
  "integrated-authentication-module": [
    {
      chosen: "Platform-first approach: Build centralized authentication module",
      notChosen: [
        "Service-by-service standardization through guidelines only",
        "Big-bang migration forcing all services to adopt at once",
        "Full customization per service (maintain fragmentation)",
      ],
      reasoning:
        "Platform approach provided best balance of standardization and flexibility. Guidelines-only wouldn't solve duplicated code; big-bang risked failure; full customization defeated the purpose.",
      risks: [
        "Platform adoption might be slow if value not clear",
        "Service teams might resist losing autonomy",
        "Platform could become bottleneck if not designed well",
      ],
      tradeoffs:
        "Upfront platform investment vs. accumulated service-level waste. Chose to invest 18 months in platform knowing it would pay back through reduced duplication and faster future auth method additions.",
    },
    {
      chosen: "Incremental rollout with pilot services",
      notChosen: [
        "Mandate platform adoption for all services immediately",
        "Build complete feature parity before any rollout",
      ],
      reasoning:
        "Pilot allowed learning from real usage before scaling. Mandate risked backlash; waiting for perfection delayed value.",
      risks: [
        "Pilot services might have unique requirements, skewing platform design",
        "Slow rollout could lose momentum",
      ],
      tradeoffs:
        "Speed to impact vs. platform maturity. Chose early value delivery with known imperfection over delayed perfection.",
    },
  ],
  "cardholder-identity-verification": [
    {
      chosen: "Risk-based verification: Different flows for different customer segments",
      notChosen: [
        "One-size-fits-all maximum security for everyone",
        "Minimal verification to maximize conversion",
        "Outsource entire verification to third-party provider",
      ],
      reasoning:
        "Risk segmentation optimized both compliance and UX. Max security would hurt conversion unnecessarily; minimal verification wouldn't pass audit; outsourcing wouldn't meet specific regulatory requirements.",
      risks: [
        "Segmentation logic might be challenged by auditors",
        "Edge cases between segments could create confusion",
      ],
      tradeoffs:
        "Implementation complexity vs. conversion optimization. Built segmented flows knowing maintenance cost was worth preserving business metrics.",
    },
  ],
  "open-banking-account-payment": [
    {
      chosen: "Partner with major banks only initially",
      notChosen: [
        "Integrate with all Open Banking providers at once",
        "Build proprietary account-to-account transfer solution",
      ],
      reasoning:
        "Major banks had stable APIs and covered majority of users. All-provider approach would dilute focus; proprietary solution had regulatory risk.",
      risks: [
        "Missing long-tail banks could limit adoption",
        "Bank API changes could break integration",
      ],
      tradeoffs:
        "Coverage breadth vs. integration stability. Prioritized reliable experience over maximum coverage.",
    },
  ],
  "online-payment-ux-redesign": [
    {
      chosen: "Data-driven redesign based on drop-off analysis",
      notChosen: [
        "Complete visual refresh without behavior data",
        "A/B test small changes only",
        "Copy competitor flows exactly",
      ],
      reasoning:
        "Drop-off data pinpointed exact friction points. Visual-only wouldn't solve problems; small tests too slow; copying ignored our unique constraints.",
      risks: [
        "Redesign might introduce new unexpected friction",
        "Changes might not transfer across all payment types",
      ],
      tradeoffs:
        "Redesign risk vs. known poor performance. Data gave confidence to make meaningful changes.",
    },
  ],
  "authentication-cost-optimization": [
    {
      chosen: "Risk-based routing to lower-cost methods",
      notChosen: [
        "Switch entirely to cheapest authentication method",
        "Renegotiate existing vendor contracts only",
        "Build in-house authentication infrastructure",
      ],
      reasoning:
        "Risk routing maintained security while cutting costs. Cheapest-only increased fraud risk; vendor negotiation had limits; in-house had high upfront cost.",
      risks: [
        "Risk model might misclassify legitimate users",
        "Lower-cost methods might have worse UX",
      ],
      tradeoffs:
        "Model sophistication vs. implementation speed. Built simple-but-effective model knowing we could refine later.",
    },
  ],
};

// System diagrams for key projects
export const systemDiagrams: Record<string, SystemDiagram> = {
  "integrated-authentication-module": {
    title: "Unified Authentication Platform Architecture",
    description:
      "Centralized authentication module serving multiple services with standardized methods and flexible service-specific configurations",
    type: "architecture",
    components: [
      { id: "user", label: "User", type: "user" },
      { id: "service-a", label: "Payment Service", type: "service" },
      { id: "service-b", label: "Card Service", type: "service" },
      { id: "service-c", label: "Mobile App", type: "service" },
      { id: "auth-platform", label: "Auth Platform", type: "system" },
      { id: "sms", label: "SMS Gateway", type: "external" },
      { id: "push", label: "Push Service", type: "external" },
      { id: "biometric", label: "Biometric Validation", type: "external" },
      { id: "auth-db", label: "Auth Config DB", type: "data" },
    ],
    connections: [
      { from: "user", to: "service-a", label: "Request" },
      { from: "user", to: "service-b", label: "Request" },
      { from: "user", to: "service-c", label: "Request" },
      { from: "service-a", to: "auth-platform", label: "Auth Request" },
      { from: "service-b", to: "auth-platform", label: "Auth Request" },
      { from: "service-c", to: "auth-platform", label: "Auth Request" },
      { from: "auth-platform", to: "sms", label: "Send OTP" },
      { from: "auth-platform", to: "push", label: "Send Push" },
      { from: "auth-platform", to: "biometric", label: "Verify" },
      { from: "auth-platform", to: "auth-db", label: "Get Config" },
    ],
  },
  "cardholder-identity-verification": {
    title: "Risk-Based Verification Flow",
    description:
      "Segmented verification approach applying different verification levels based on risk assessment",
    type: "flow",
    components: [
      { id: "user", label: "User", type: "user" },
      { id: "risk-engine", label: "Risk Assessment", type: "system" },
      { id: "low-risk", label: "Basic Verification", type: "service" },
      { id: "med-risk", label: "Enhanced Verification", type: "service" },
      { id: "high-risk", label: "Full KYC", type: "service" },
      { id: "kcc", label: "KCC System", type: "external" },
      { id: "audit-log", label: "Audit Trail", type: "data" },
    ],
    connections: [
      { from: "user", to: "risk-engine", label: "Request Service" },
      { from: "risk-engine", to: "low-risk", label: "Low Risk" },
      { from: "risk-engine", to: "med-risk", label: "Medium Risk" },
      { from: "risk-engine", to: "high-risk", label: "High Risk" },
      { from: "high-risk", to: "kcc", label: "Verify Identity" },
      { from: "low-risk", to: "audit-log", label: "Log" },
      { from: "med-risk", to: "audit-log", label: "Log" },
      { from: "high-risk", to: "audit-log", label: "Log" },
    ],
  },
  "open-banking-account-payment": {
    title: "Open Banking Payment Flow",
    description:
      "Account-based payment using Open Banking APIs with fallback to card payment",
    type: "sequence",
    components: [
      { id: "user", label: "User", type: "user" },
      { id: "payment-ui", label: "Payment UI", type: "service" },
      { id: "payment-router", label: "Payment Router", type: "system" },
      { id: "openbanking", label: "Open Banking Gateway", type: "external" },
      { id: "bank-a", label: "Bank A API", type: "external" },
      { id: "bank-b", label: "Bank B API", type: "external" },
      { id: "card-fallback", label: "Card Payment", type: "service" },
    ],
    connections: [
      { from: "user", to: "payment-ui", label: "Select Account Payment" },
      { from: "payment-ui", to: "payment-router", label: "Process" },
      { from: "payment-router", to: "openbanking", label: "Request" },
      { from: "openbanking", to: "bank-a", label: "Transfer" },
      { from: "openbanking", to: "bank-b", label: "Transfer" },
      { from: "payment-router", to: "card-fallback", label: "Fallback on Fail" },
    ],
  },
};
