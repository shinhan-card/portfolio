import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "integrated-authentication-module",
    title: "Integrated Authentication Module",
    subtitle: "Unified fragmented authentication flows into a scalable, reusable platform",
    thumbnail: "/images/auth-module-thumbnail.jpg",
    tags: ["Authentication", "Platform Design", "Infrastructure"],
    featured: true,
    summaryBullets: [
      "Unified fragmented authentication across multiple services into a single modular platform",
      "Adopted by multiple high-traffic services with 85%+ satisfaction from engineering teams",
      "Reduced duplicated implementation work, freeing engineering capacity for business features",
      "Established scalable governance model for adding future authentication methods",
    ],
    meta: {
      role: "Product Owner",
      scope: "Cross-service Authentication Platform",
      timeline: "18 months",
    },
    context: "Authentication flows were fragmented across services, causing duplicated development, inconsistent UX, and operational inefficiencies. Each service team was implementing their own authentication logic, leading to security risks, maintenance overhead, and poor user experience due to inconsistent authentication patterns across the organization.",
    goal: "Create a unified, extensible authentication module that could be reused across services without increasing security or compliance risk. The platform needed to serve multiple high-traffic services while maintaining flexibility for service-specific requirements.",
    role: "Product Owner of the authentication squad. Defined platform scope, rollout strategy, and stakeholder alignment. Coordinated engineering, security, and business teams to ensure the platform met technical, security, and business requirements.",
    keyDecisions: [
      "Centralized authentication logic while keeping service-level flexibility — allowing teams to adopt the platform without forcing rigid standardization",
      "Prioritized real adoption over perfect standardization — focused on solving actual pain points rather than building an ideal-but-unused system",
      "Designed for incremental rollout instead of big-bang migration — reduced risk and enabled learning from early adopters before scaling",
      "Established governance model for future authentication methods — created clear processes for adding new authentication capabilities without compromising platform integrity",
    ],
    execution: [
      {
        phase: "Platform Design & Requirements (Months 1-3)",
        description: "Conducted stakeholder interviews across service teams to understand authentication patterns and pain points. Worked with security team to define platform boundaries. Created technical specifications and rollout strategy with engineering leads.",
      },
      {
        phase: "Development & Pilot (Months 4-8)",
        description: "Built modular authentication platform with core capabilities. Piloted on high-traffic payment services to validate technical feasibility and gather real-world feedback. Iterated on API design and documentation based on pilot team feedback.",
      },
      {
        phase: "Gradual Expansion (Months 9-14)",
        description: "Expanded to additional services incrementally, using learnings from each rollout. Established platform governance and support model. Created self-service documentation and integration guides for new adopters.",
      },
      {
        phase: "Stabilization & Scale (Months 15-18)",
        description: "Achieved stable operation across multiple high-traffic services. Established metrics for platform health and adoption. Created roadmap for additional authentication methods based on business needs.",
      },
    ],
    results: [
      {
        metric: "Development Efficiency",
        value: "Reduced",
        description: "Reduced duplicated authentication implementation across services, freeing engineering capacity for business features",
      },
      {
        metric: "User Experience",
        value: "Improved",
        description: "Improved consistency of user authentication experience across multiple touchpoints",
      },
      {
        metric: "Platform Adoption",
        value: "Multiple Services",
        description: "Successfully adopted across multiple high-traffic services with positive feedback from service teams",
      },
      {
        metric: "Security Posture",
        value: "Strengthened",
        description: "Centralized authentication logic enabled better security controls and faster response to security requirements",
      },
    ],
    learnings: [
      "Platform decisions scale organizational impact — early architectural choices affected how dozens of teams work, emphasizing the importance of getting foundational decisions right",
      "Real adoption requires solving actual pain points — teams adopted the platform because it solved their problems, not because it was mandated",
      "Incremental rollout builds confidence and capability — gradual expansion allowed us to learn and improve before scaling, reducing risk and improving outcomes",
      "Governance is as important as technology — clear processes for platform evolution prevented fragmentation while maintaining agility",
    ],
    duration: "18 months",
    company: "Shinhan Card",
  },
  {
    slug: "cardholder-identity-verification",
    title: "Cardholder Identity Verification Service",
    subtitle: "Designed compliant identity verification that balances regulatory requirements and user experience",
    thumbnail: "/images/identity-verification-thumbnail.jpg",
    tags: ["Compliance", "Identity Verification", "Regulatory Design"],
    featured: true,
    summaryBullets: [
      "Designed verification flows that met strict regulatory standards without degrading conversion",
      "Successfully passed audits and institutional reviews without major findings",
      "Established reusable patterns that accelerated subsequent compliance initiatives",
      "Balanced regulatory requirements with UX through risk-based segmentation approach",
    ],
    meta: {
      role: "Product Manager",
      scope: "Identity Verification Service",
      timeline: "12 months",
    },
    context: "Financial regulations and audit requirements demanded stricter identity verification for cardholder services, while business teams required minimal customer friction to maintain conversion rates. The challenge was navigating complex regulatory requirements from multiple institutions while keeping the verification process user-friendly.",
    goal: "Design a verification flow that met regulatory standards without degrading conversion or usability. The solution needed to satisfy auditors, regulators, and internal risk teams while maintaining a smooth customer experience.",
    role: "Product planning and requirement definition. Liaison between regulators, internal risk teams, and engineers. Ownership of policy-to-product translation, ensuring technical implementation accurately reflected regulatory intent while remaining practical.",
    keyDecisions: [
      "Balanced compliance requirements with UX trade-offs — made deliberate choices about where to add friction and where to optimize for user experience based on risk assessment",
      "Selected verification methods based on risk segmentation — used different verification approaches for different customer segments and transaction types, avoiding one-size-fits-all solutions",
      "Avoided over-engineering where regulatory intent was satisfied — focused on meeting actual regulatory requirements rather than building unnecessary complexity",
      "Designed for audit-readiness from day one — structured verification flows and data capture to facilitate future audits and regulatory reviews",
    ],
    execution: [
      {
        phase: "Regulatory Analysis & Requirements (Months 1-3)",
        description: "Analyzed regulatory requirements from multiple sources and identified key constraints. Conducted stakeholder alignment sessions with risk, compliance, legal, and business teams. Translated regulatory language into product requirements.",
      },
      {
        phase: "Solution Design & Review (Months 4-6)",
        description: "Designed compliant yet flexible verification flows for different customer segments. Coordinated reviews with internal risk teams and external regulatory advisors. Created documentation for audit-readiness.",
      },
      {
        phase: "Development & Validation (Months 7-10)",
        description: "Worked with engineering to build verification service. Conducted iterative testing with compliance team to validate regulatory alignment. Created operational procedures for verification exceptions and edge cases.",
      },
      {
        phase: "Launch & Audit Preparation (Months 11-12)",
        description: "Launched verification service with monitoring for compliance and UX metrics. Prepared comprehensive audit documentation. Conducted internal audit dry-run before external review.",
      },
    ],
    results: [
      {
        metric: "Regulatory Compliance",
        value: "Passed",
        description: "Successfully passed audits and institutional reviews without major findings",
      },
      {
        metric: "Reusable Patterns",
        value: "Established",
        description: "Established reusable verification patterns for future products, accelerating subsequent compliance initiatives",
      },
      {
        metric: "Policy-Product Capability",
        value: "Strengthened",
        description: "Strengthened ability to operate at the intersection of policy and product, becoming go-to resource for regulatory product design",
      },
      {
        metric: "Conversion Impact",
        value: "Minimal",
        description: "Maintained acceptable conversion rates while meeting all regulatory requirements through careful UX optimization",
      },
    ],
    learnings: [
      "Regulatory requirements are constraints, not specifications — translating regulatory intent into product requirements requires judgment and stakeholder alignment",
      "Early compliance engagement prevents costly rework — involving risk and compliance teams from the beginning saved months of iteration",
      "Documentation is a product deliverable — audit-ready documentation was as important as the product itself for long-term success",
      "Risk segmentation enables better trade-offs — applying different verification approaches based on risk allowed us to optimize both compliance and UX",
    ],
    duration: "12 months",
    company: "Shinhan Card",
  },
  {
    slug: "open-banking-account-payment",
    title: "Open Banking Account Management & Transfer Enhancement",
    subtitle: "Enhanced existing Open Banking system, added authentication methods, strengthened security, and renewed transfer UX",
    thumbnail: "/images/open-banking-thumbnail.jpg",
    tags: ["Open Banking", "Service Enhancement", "UX Renewal"],
    featured: false,
    summaryBullets: [
      "Improved malfunctioning screens and user-unconsidered areas from rushed 2021 launch",
      "Added authentication methods per KFTC standards (card password, 1-won verification, ARS)",
      "Strengthened security policies against voice phishing (daily limits, first-transfer rules)",
      "Renewed transfer UX based on competitor benchmarking (3 tabs: Recommended/Account/Contact)",
    ],
    meta: {
      role: "Product Manager (Enhancement Lead)",
      scope: "Open Banking Service Operations",
      timeline: "12 months (Jan-Dec 2022)",
    },
    context: "Shinhan Card's Open Banking system launched in 2021 had issues due to rushed implementation—malfunctioning screens and features developed without user perspective. As newly assigned Open Banking PM in 2022, needed to stabilize and enhance the service. Account services differed fundamentally from card: transfers are irreversible and real-time (unlike card payments with cancellation), making them more vulnerable to financial fraud. External dependencies (bank systems, KFTC infrastructure) made issue diagnosis difficult.",
    goal: "Enhance Open Banking account management and transfer services to production-grade quality. Add authentication methods meeting KFTC standards. Strengthen security against voice phishing while maintaining UX. Renew transfer interface for better usability. Serve as Shinhan Card's Open Banking representative with KFTC and external partners.",
    role: "Product Manager leading Open Banking enhancement on 3-person team (customer service support, data analysis, enhancement lead). Led service enhancement and UX renewal (85% contribution). Served as Shinhan Card's Open Banking representative for external communications with KFTC and partners.",
    keyDecisions: [
      "Prioritized fixing malfunctions over new features — addressed rushed 2021 launch issues before adding capabilities",
      "Added KFTC-compliant authentication methods systematically — card password, 1-won verification, ARS authentication per financial regulator requirements",
      "Strengthened security for irreversible transfers — daily limits and first-transfer rules to prevent voice phishing (transfers can't be canceled unlike card payments)",
      "Renewed transfer UX through competitor benchmarking — restructured to 3-tab interface (Recommended/Account/Contact) for intuitive navigation",
    ],
    execution: [
      {
        phase: "Issue Diagnosis & Authentication Enhancement (Q1 2022)",
        description: "Identified malfunctioning screens and user-unconsidered features from 2021 launch. Added authentication methods per KFTC Open Banking standards (card password, 1-won verification, ARS). Coordinated with KFTC on compliance requirements.",
      },
      {
        phase: "Security Strengthening & UX Renewal (Q2-Q3 2022)",
        description: "Implemented security policies against voice phishing (daily transfer limits, first-transfer verification rules). Benchmarked competitor transfer UX and redesigned to 3-tab structure. Led as Shinhan Card's Open Banking representative with KFTC.",
      },
      {
        phase: "Stabilization & Support Enhancement (Q4 2022)",
        description: "Enhanced customer service manuals for complex Open Banking issues. Implemented automatic fallback to firm banking when external APIs fail. Stabilized service operation with improved error handling and support processes.",
      },
    ],
    results: [
      {
        metric: "System Stability",
        value: "Improved",
        description: "Fixed malfunctions and stabilized rushed 2021 launch through systematic enhancement",
      },
      {
        metric: "Authentication Compliance",
        value: "KFTC Standards Met",
        description: "Added multiple authentication methods meeting KFTC Open Banking requirements",
      },
      {
        metric: "Security Posture",
        value: "Strengthened",
        description: "Reduced voice phishing risk through transfer limits and verification rules",
      },
      {
        metric: "Transfer UX",
        value: "Renewed",
        description: "Improved transfer usability through competitor-benchmarked 3-tab interface redesign",
      },
    ],
    learnings: [
      "Transfers are riskier than payments — irreversible real-time nature makes transfers more vulnerable to fraud than cancellable card transactions",
      "External dependencies complicate troubleshooting — unlike internal card systems, Open Banking issues involve banks and KFTC, requiring defensive design and clear support procedures",
      "Rushed launches create technical debt — fixing 2021 issues before adding features was necessary foundation work",
      "Benchmarking accelerates UX improvement — learning from competitors' transfer interfaces saved design time and improved outcomes",
    ],
    duration: "12 months (Jan-Dec 2022)",
    company: "Shinhan Card",
  },
  {
    slug: "account-payment-launch",
    title: "Account Payment Service Launch",
    subtitle: "Second among card companies to launch Open Banking-based account payment service on Shinhan pLay",
    thumbnail: "/images/account-payment-thumbnail.jpg",
    tags: ["Account Payment", "Open Banking", "Product Launch"],
    featured: false,
    summaryBullets: [
      "Launched account payment service using card payment network and Open Banking infrastructure (Sept 2022)",
      "Expanded Shinhan pLay payment coverage from cards and local currency to registered bank accounts",
      "Achieved 5.1 billion KRW cumulative transaction volume and 8,000+ monthly active users",
      "Organic growth without promotions or incentives, proving strong product-market fit",
    ],
    meta: {
      role: "Product Manager",
      scope: "Account Payment Launch",
      timeline: "8 months (Feb-Sept 2022)",
    },
    context: "Shinhan Card's payment methods were limited to credit/debit/prepaid cards and local currency. Open Banking regulations enabled opportunity to allow customers to pay with registered bank accounts at existing card merchant network. However, integrating accounts into card-centric approval system required new product structure, extensive legal reviews (merchant/user/KFTC Open Banking terms), and new approval and accounting system designs.",
    goal: "Launch account payment service that allows customers to use registered bank accounts for online and offline card merchant payments without card issuance. Enable simple in-app registration and payment without promotions, relying on convenience to drive adoption. Complete extensive compliance reviews and build new product structure in approval and accounting systems.",
    role: "Product Manager on 2-person planning team (70% contribution). Defined user scenarios by action, designed screens, and created operational manuals. Coordinated across app, Open Banking, product, issuance, and deposit systems—many teams not accustomed to working together.",
    keyDecisions: [
      "Integrated accounts into existing card payment network — leveraged proven infrastructure rather than building separate payment rail",
      "Launched without promotions or incentives — bet on convenience value (no card issuance needed) to drive organic adoption",
      "Prioritized cross-team education and alignment — proactively shared context and facilitated mutual learning across unfamiliar systems",
      "Accepted longer stabilization period for new service type — couldn't test all edge cases until real transactions occurred in production",
    ],
    execution: [
      {
        phase: "Planning & Compliance (Feb-Apr 2022)",
        description: "Defined service scope and user flows. Completed extensive legal reviews for merchant, user, and KFTC Open Banking terms. Designed new product structure to integrate accounts into card approval and accounting systems. Second card company to pursue this approach.",
      },
      {
        phase: "Development & Integration (May-Aug 2022)",
        description: "Built account payment service coordinating app, Open Banking, product, issuance, and deposit systems. Facilitated cross-team learning through documentation and alignment sessions. Addressed unfamiliar system interactions through systematic testing.",
      },
      {
        phase: "Launch & Stabilization (Sept 2022+)",
        description: "Launched account payment service on Shinhan pLay (September 2022). Monitored adoption and transaction patterns. Extended stabilization period to address edge cases that only appeared in production. Achieved organic growth without marketing or incentives.",
      },
    ],
    results: [
      {
        metric: "Transaction Volume",
        value: "5.1B KRW",
        description: "Achieved 5.1 billion KRW cumulative transaction volume since launch",
      },
      {
        metric: "Active Users",
        value: "8,000+ Monthly",
        description: "Sustained 8,000+ monthly active users choosing account payment as primary method",
      },
      {
        metric: "Organic Growth",
        value: "No Promotions",
        description: "Achieved continuous usage growth without press coverage, discounts, or rewards",
      },
      {
        metric: "Market Position",
        value: "2nd Card Company",
        description: "Second card company to launch account payment service using card payment network",
      },
    ],
    learnings: [
      "Convenience drives adoption without incentives — avoiding card issuance process provided sufficient value for organic growth",
      "Cross-team alignment requires proactive education — systematically shared context to bridge knowledge gaps across unfamiliar systems",
      "New service types need production validation — couldn't test all edge cases until real transactions occurred",
      "Longer stabilization is acceptable for structural innovation — building new service type requires patience for production learning",
    ],
    duration: "8 months (Feb-Sept 2022)",
    company: "Shinhan Card",
  },
  {
    slug: "online-payment-ux-redesign",
    title: "Online Payment Service Operation & Enhancement",
    subtitle: "Operated Ansim Click online payment service, led full renewal, and developed simple payment and 3DS2.0 integrations",
    thumbnail: "/images/payment-ux-thumbnail.jpg",
    tags: ["Online Payment", "Service Operation", "Partnership Integration"],
    featured: false,
    summaryBullets: [
      "Operated Ansim Click online payment service, learning end-to-end payment structure (authentication-approval)",
      "Led full renewal of online payment interface based on customer behavior analysis and support data",
      "Developed app-linked and partner-integrated simple payment connections with continuous UX improvements",
      "Implemented brand-specific 3DS2.0 standards for international payment security",
    ],
    meta: {
      role: "Product Manager",
      scope: "Online Payment Service",
      timeline: "30 months (2019-2021)",
    },
    context: "Ansim Click was Shinhan Card's established online payment service. Despite stability, continuous operation revealed improvement opportunities through customer behavior analysis and support inquiries. The service required ongoing enhancement to maintain competitiveness, including full interface renewal, simple payment partner integrations, and international payment standard updates (3DS2.0).",
    goal: "Operate and enhance online payment service through continuous improvement. Complete full payment interface renewal while maintaining service stability. Develop integrations with simple payment partners and implement updated international payment security standards. Balance innovation with reliability in production payment infrastructure.",
    role: "Product Manager responsible for online payment service operation and enhancement. Analyzed customer behavior and support data to identify improvement areas. Led payment interface renewal project. Coordinated with simple payment partners for app-linked integrations. Managed brand-specific 3DS2.0 development. Balanced multiple stakeholder interests (partners, internal teams, customers).",
    keyDecisions: [
      "Analyzed stabilized service for continuous improvement — didn't assume 'stable' meant 'optimal', systematically tested to find enhancement opportunities",
      "Led comprehensive payment interface renewal — rebuilt core UX while maintaining production stability and security requirements",
      "Accommodated partner-specific integration requirements — each simple payment partner had different technical constraints, designed flexible integration approach",
      "Minimized browser/device environment dependencies — reduced friction from environmental variations through defensive design and testing",
    ],
    execution: [
      {
        phase: "Service Operation & Learning (2019-2020)",
        description: "Operated Ansim Click online payment service daily. Learned payment flow architecture (authentication → approval → settlement). Analyzed customer behavior patterns and support data. Built systematic approach to identifying improvement opportunities in stable production service.",
      },
      {
        phase: "Payment Interface Renewal (2020)",
        description: "Led full online payment interface renewal project. Redesigned flows based on accumulated operational insights. Coordinated with security teams to maintain fraud prevention standards. Managed transition without service disruption or security incidents.",
      },
      {
        phase: "Integration Development (2020-2021)",
        description: "Developed app-linked simple payment integrations with multiple partners. Implemented brand-specific 3DS2.0 international payment standards (Visa, Mastercard, etc.). Continuously improved integration quality to minimize browser/device-specific issues. Balanced stakeholder interests across partners, internal teams, and customers.",
      },
    ],
    results: [
      {
        metric: "Payment Foundation",
        value: "Established",
        description: "Built deep understanding of payment infrastructure serving as foundation for future payment product work",
      },
      {
        metric: "Interface Renewal",
        value: "Completed",
        description: "Successfully renewed payment interface without service disruption or security degradation",
      },
      {
        metric: "Partner Integrations",
        value: "Multiple Partners",
        description: "Integrated with diverse simple payment partners despite varying technical requirements",
      },
      {
        metric: "International Compliance",
        value: "3DS2.0 Updated",
        description: "Implemented updated international payment security standards across all card brands",
      },
    ],
    learnings: [
      "Stable services benefit from continuous testing — systematic exploration reveals improvement opportunities even in mature products",
      "Payment infrastructure requires surgical changes — cannot afford disruption or security degradation in production",
      "Partner diversity requires flexibility — each integration partner has unique constraints and priorities",
      "Cross-stakeholder balance is ongoing work — must continuously navigate interests of partners, internal teams, and customers",
    ],
    duration: "30 months (2019-2021)",
    company: "Shinhan Card",
  },
  {
    slug: "authentication-cost-optimization",
    title: "Authentication Service Operation & Improvement",
    subtitle: "Operated multiple authentication methods, simplified app signup, enhanced convenience, and reduced costs",
    thumbnail: "/images/auth-cost-thumbnail.jpg",
    tags: ["Authentication", "Service Operation", "Cost Reduction"],
    featured: false,
    summaryBullets: [
      "Operated diverse authentication methods (mobile, device, certificate) for payment and platform signup",
      "Simplified app signup process and enhanced authentication convenience for users",
      "Replaced authentication methods strategically to reduce operational costs",
      "Balanced convenience and security throughout authentication service design",
    ],
    meta: {
      role: "Product Manager",
      scope: "Authentication Service Operations",
      timeline: "24 months (2018-2019)",
    },
    context: "Shinhan Card used multiple authentication methods (mobile authentication, device authentication, public certificate, etc.) for payment transactions and platform signup. Each method had different cost structures, user convenience levels, and security characteristics. Service required continuous operation, improvement, and cost optimization while maintaining security standards.",
    goal: "Operate authentication services effectively while improving user convenience and reducing costs. Simplify app signup procedures to improve conversion. Find opportunities to replace expensive authentication methods with cost-effective alternatives. Develop habit of balancing convenience and security in financial service design.",
    role: "Product Manager responsible for authentication service operation and improvement. Managed multiple authentication methods across payment and signup flows. Identified opportunities for simplification and cost reduction. Coordinated with security teams to ensure changes maintained safety standards. Learned to balance competing goals of convenience, security, and cost.",
    keyDecisions: [
      "Simplified app signup flows to improve conversion — removed unnecessary authentication steps while maintaining security",
      "Replaced expensive authentication methods with cost-effective alternatives — identified methods with similar security but lower cost",
      "Balanced convenience and security deliberately — made explicit trade-offs rather than defaulting to maximum security",
      "Operated services actively rather than reactively — proactively sought improvements instead of waiting for problems",
    ],
    execution: [
      {
        phase: "Service Operation & Foundation Building (2018-2019)",
        description: "Operated multiple authentication methods (mobile, device, certificate) for payment and signup flows. Learned authentication infrastructure and cost structures. Analyzed usage patterns and identified optimization opportunities. Built working relationship with security teams.",
      },
      {
        phase: "Signup Simplification (2018-2019)",
        description: "Simplified app signup procedures by removing unnecessary authentication steps. Improved user convenience while maintaining security requirements. Measured impact on signup conversion and fraud rates.",
      },
      {
        phase: "Cost Reduction Initiatives (2019)",
        description: "Identified authentication methods suitable for replacement with lower-cost alternatives. Coordinated with security teams to validate security equivalence. Implemented changes with careful monitoring of fraud metrics.",
      },
    ],
    results: [
      {
        metric: "Signup Convenience",
        value: "Improved",
        description: "Simplified app signup procedures, improving user experience and conversion",
      },
      {
        metric: "Authentication Costs",
        value: "Reduced",
        description: "Reduced operational costs through strategic authentication method replacement",
      },
      {
        metric: "Security-Convenience Balance",
        value: "Optimized",
        description: "Developed approach to balance convenience and security rather than defaulting to maximum security",
      },
      {
        metric: "Foundation for Future Work",
        value: "Established",
        description: "Authentication operation experience became foundation for later authentication platform work",
      },
    ],
    learnings: [
      "Convenience and security can coexist — not zero-sum trade-off if designed thoughtfully",
      "Cost optimization opportunities exist in operational services — don't assume current methods are optimal",
      "Financial service design requires explicit trade-offs — convenience vs security decisions must be deliberate",
      "Operating services teaches what building them doesn't — hands-on operation reveals insights design phase misses",
    ],
    duration: "24 months (2018-2019)",
    company: "Shinhan Card",
  },
  {
    slug: "fintech-rd-initiatives",
    title: "Fintech R&D Initiatives",
    subtitle: "Led proof-of-concept projects exploring blockchain, biometric authentication, and emerging payment technologies",
    thumbnail: "/images/fintech-rd-thumbnail.jpg",
    tags: ["R&D", "Blockchain", "Biometrics", "Innovation"],
    featured: false,
    summaryBullets: [
      "Led multiple R&D initiatives exploring blockchain for card benefits and biometric authentication",
      "Evaluated emerging technologies for product-market fit and regulatory feasibility",
      "Built internal capability for rapid prototyping and technology assessment",
      "Translated technical PoCs into business recommendations for product roadmap",
    ],
    meta: {
      role: "Product Manager (R&D)",
      scope: "Emerging Technology Evaluation",
      timeline: "Ongoing",
    },
    context: "Fintech landscape was evolving rapidly with blockchain, biometric authentication, and new payment protocols. Business needed systematic approach to evaluate emerging technologies for strategic fit without getting distracted by hype. R&D needed to balance experimentation with practical product delivery.",
    goal: "Establish repeatable process for evaluating emerging fintech technologies through focused proof-of-concept projects. Build internal capability to quickly assess technology-product fit while maintaining connection to real business problems and regulatory constraints.",
    role: "Product Manager leading R&D initiatives. Defined PoC scopes, coordinated with technology partners and vendors, assessed regulatory feasibility, and translated technical findings into product and business recommendations.",
    keyDecisions: [
      "Focused R&D on technologies with clear product application — avoided research for research's sake",
      "Built quick PoCs to validate core assumptions — preferred rapid prototyping over extensive planning",
      "Involved compliance and security early — ensured regulatory feasibility wasn't an afterthought",
      "Documented learnings systematically — created institutional knowledge that informed future product decisions",
    ],
    execution: [
      {
        phase: "Blockchain for Card Benefits PoC",
        description: "Explored blockchain for transparent, tamper-proof card benefit tracking and redemption. Built prototype with partner vendor. Assessed regulatory feasibility and scalability constraints. Concluded: technically feasible but premature for production given regulatory uncertainty.",
      },
      {
        phase: "Biometric Authentication Evaluation",
        description: "Evaluated biometric authentication (fingerprint, facial recognition) for app login and high-value transactions. Tested multiple vendor solutions. Assessed user acceptance and security trade-offs. Informed roadmap for future biometric integration.",
      },
      {
        phase: "Technology Assessment Framework",
        description: "Developed internal framework for evaluating emerging technologies: product-market fit, regulatory feasibility, technical maturity, vendor ecosystem, and implementation cost. Used framework to systematically assess future opportunities.",
      },
    ],
    results: [
      {
        metric: "R&D Capability",
        value: "Established",
        description: "Built internal capability for rapid technology assessment and proof-of-concept development",
      },
      {
        metric: "Product Roadmap Input",
        value: "Informed",
        description: "R&D findings directly influenced product roadmap decisions and technology strategy",
      },
      {
        metric: "Vendor Network",
        value: "Expanded",
        description: "Established relationships with emerging technology vendors and fintech partners",
      },
      {
        metric: "Institutional Learning",
        value: "Captured",
        description: "Created systematic documentation that informed future product and technology decisions",
      },
    ],
    learnings: [
      "Early-stage technology requires different evaluation criteria than mature solutions — assessed potential rather than current capability",
      "Regulatory feasibility is often the binding constraint — technical maturity matters less if regulatory path is unclear",
      "PoCs must answer specific questions — avoided open-ended exploration in favor of hypothesis-driven experiments",
      "Documenting what doesn't work is as valuable as what does — negative findings prevent repeated mistakes",
    ],
    duration: "Multiple initiatives (2021-2025)",
    company: "Shinhan Card",
  },
];

// Helper function to get featured case studies
export const getFeaturedCaseStudies = () => {
  return caseStudies.filter((cs) => cs.featured);
};

// Helper function to get all case studies (for projects page)
export const getAllCaseStudies = () => {
  return caseStudies;
};

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug: string) => {
  return caseStudies.find((cs) => cs.slug === slug);
};
