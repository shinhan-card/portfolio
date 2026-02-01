interface CaseStudyTranslation {
  summaryBullets: string[];
  context: string;
  goal: string;
  role: string;
  keyDecisions: string[];
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

interface CaseStudyTranslations {
  "auth-module": CaseStudyTranslation;
  "identity-verification": CaseStudyTranslation;
  "open-banking": CaseStudyTranslation;
  "account-payment": CaseStudyTranslation;
  "payment-ux": CaseStudyTranslation;
  "auth-cost": CaseStudyTranslation;
  "rd-initiatives": CaseStudyTranslation;
}

export const caseStudyTranslations: Record<"en" | "ko", CaseStudyTranslations> = {
  en: {
    "auth-module": {
      summaryBullets: [
        "Problem: Fragmented authentication across services led to duplicated development, inconsistent UX, and operational inefficiency.",
        "Key decision: Centralized logic with service-level flexibility; prioritized real adoption over perfect standardization; incremental rollout instead of big-bang migration.",
        "Organizational impact: Single reusable platform adopted across multiple high-traffic services; reduced duplicated implementation and freed capacity for business features.",
        "Governance: Established scalable model for adding future authentication methods and maintaining platform integrity.",
      ],
      context:
        "Authentication flows were fragmented across services, causing duplicated development, inconsistent UX, and operational inefficiencies. Each service team was implementing their own authentication logic, leading to security risks, maintenance overhead, and poor user experience due to inconsistent authentication patterns across the organization.",
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
          description:
            "Conducted stakeholder interviews across service teams to understand authentication patterns and pain points. Worked with security team to define platform boundaries. Created technical specifications and rollout strategy with engineering leads.",
        },
        {
          phase: "Development & Pilot (Months 4-8)",
          description:
            "Built modular authentication platform with core capabilities. Piloted on high-traffic payment services to validate technical feasibility and gather real-world feedback. Iterated on API design and documentation based on pilot team feedback.",
        },
        {
          phase: "Gradual Expansion (Months 9-14)",
          description:
            "Expanded to additional services incrementally, using learnings from each rollout. Established platform governance and support model. Created self-service documentation and integration guides for new adopters.",
        },
        {
          phase: "Stabilization & Scale (Months 15-18)",
          description:
            "Achieved stable operation across multiple high-traffic services. Established metrics for platform health and adoption. Created roadmap for additional authentication methods based on business needs.",
        },
      ],
      results: [
        {
          metric: "Development Efficiency",
          value: "Reduced",
          description:
            "Reduced duplicated authentication implementation across services, freeing engineering capacity for business features",
        },
        {
          metric: "User Experience",
          value: "Improved",
          description:
            "Improved consistency of user authentication experience across multiple touchpoints",
        },
        {
          metric: "Platform Adoption",
          value: "Multiple Services",
          description:
            "Successfully adopted across multiple high-traffic services with positive feedback from service teams",
        },
        {
          metric: "Security Posture",
          value: "Strengthened",
          description:
            "Centralized authentication logic enabled better security controls and faster response to security requirements",
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
    "identity-verification": {
      summaryBullets: [
        "Problem: Stricter identity verification required by regulations and audits, while business needed minimal customer friction to maintain conversion.",
        "Key decision: Risk-based segmentation for verification methods; avoided over-engineering where regulatory intent was satisfied; designed for audit-readiness from day one.",
        "Organizational impact: Passed audits and institutional reviews; established reusable verification patterns for future compliance initiatives.",
        "Compliance: Liaison between regulators (KCC, KISA), internal risk teams, and engineers; coordinated with intermediaries, agencies, and other issuers.",
      ],
      context:
        "Financial regulations and audit requirements demanded stricter identity verification for cardholder services, while business teams required minimal customer friction to maintain conversion rates. The challenge was navigating complex regulatory requirements from multiple institutions while keeping the verification process user-friendly.",
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
          description:
            "Analyzed regulatory requirements from multiple sources and identified key constraints. Conducted stakeholder alignment sessions with risk, compliance, legal, and business teams. Translated regulatory language into product requirements.",
        },
        {
          phase: "Solution Design & Review (Months 4-6)",
          description:
            "Designed compliant yet flexible verification flows for different customer segments. Coordinated reviews with internal risk teams and external regulatory advisors. Created documentation for audit-readiness.",
        },
        {
          phase: "Development & Validation (Months 7-10)",
          description:
            "Worked with engineering to build verification service. Conducted iterative testing with compliance team to validate regulatory alignment. Created operational procedures for verification exceptions and edge cases.",
        },
        {
          phase: "Launch & Audit Preparation (Months 11-12)",
          description:
            "Launched verification service with monitoring for compliance and UX metrics. Prepared comprehensive audit documentation. Conducted internal audit dry-run before external review.",
        },
      ],
      results: [
        {
          metric: "Regulatory Compliance",
          value: "Passed",
          description:
            "Successfully passed audits and institutional reviews without major findings",
        },
        {
          metric: "Reusable Patterns",
          value: "Established",
          description:
            "Established reusable verification patterns for future products, accelerating subsequent compliance initiatives",
        },
        {
          metric: "Policy-Product Capability",
          value: "Strengthened",
          description:
            "Strengthened ability to operate at the intersection of policy and product, becoming go-to resource for regulatory product design",
        },
        {
          metric: "Conversion Impact",
          value: "Minimal",
          description:
            "Maintained acceptable conversion rates while meeting all regulatory requirements through careful UX optimization",
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
    "open-banking": {
      summaryBullets: [
        "Improved malfunctioning screens and user-unconsidered areas from rushed 2021 launch",
        "Added authentication methods per KFTC standards (card password, 1-won verification, ARS)",
        "Strengthened security policies against voice phishing (daily limits, first-transfer rules)",
        "Renewed transfer UX based on competitor benchmarking (3 tabs: Recommended/Account/Contact)",
      ],
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
    "account-payment": {
      summaryBullets: [
        "Launched account payment service using card payment network and Open Banking infrastructure (Sept 2022)",
        "Expanded Shinhan pLay payment coverage from cards and local currency to registered bank accounts",
        "Achieved 5.1 billion KRW cumulative transaction volume and 8,000+ monthly active users",
        "Organic growth without promotions or incentives, proving strong product-market fit",
      ],
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
    "payment-ux": {
      summaryBullets: [
        "Redesigned online card payment user flows based on behavioral data and drop-off analysis",
        "Improved completion rates through simplified flows and better error handling",
        "Reduced customer service contacts related to payment issues",
        "Established data-driven UX optimization process for payment products",
      ],
      context: "Online card payment flows had accumulated legacy complexity over years, resulting in high drop-off rates and customer confusion. Drop-off analysis showed users abandoned at specific steps due to unclear messaging, unnecessary friction, and poor error recovery. Business impact was measurable in lost transactions and support costs.",
      goal: "Redesign online payment flows to improve completion rates while maintaining security and compliance requirements. The solution needed to reduce friction without compromising fraud prevention or regulatory obligations.",
      role: "Product Manager owning payment UX redesign. Conducted behavioral analysis, designed new flows, coordinated with fraud/risk teams on security requirements, and measured impact through controlled rollout.",
      keyDecisions: [
        "Used drop-off data to prioritize specific friction points — focused resources on highest-impact improvements rather than comprehensive overhaul",
        "Simplified flows while maintaining security requirements — removed unnecessary steps without compromising fraud prevention",
        "Improved error messaging and recovery paths — made failures recoverable instead of terminal",
        "Tested incrementally through controlled rollout — validated improvements before full deployment",
      ],
      execution: [
        {
          phase: "Analysis & Design (Months 1-2)",
          description: "Analyzed drop-off data and conducted user research to identify friction points. Designed simplified flows with UX team. Validated security requirements with fraud/risk teams.",
        },
        {
          phase: "Development & Testing (Months 3-4)",
          description: "Built redesigned payment flows with engineering. Conducted usability testing and iterated on error handling. Created monitoring for new completion metrics.",
        },
        {
          phase: "Controlled Rollout (Months 5-6)",
          description: "Rolled out to percentage of traffic incrementally. Monitored completion rates and customer feedback. Made final optimizations based on real user behavior.",
        },
      ],
      results: [
        {
          metric: "Completion Rate",
          value: "Improved",
          description: "Improved payment completion rates through simplified flows and better error handling",
        },
        {
          metric: "Customer Service",
          value: "Reduced",
          description: "Reduced customer service contacts related to payment confusion and errors",
        },
        {
          metric: "Drop-off Rate",
          value: "Decreased",
          description: "Decreased abandonment at key friction points identified through behavioral analysis",
        },
        {
          metric: "UX Process",
          value: "Established",
          description: "Established data-driven UX optimization methodology for future payment products",
        },
      ],
      learnings: [
        "Data reveals specific problems, not general dissatisfaction — drop-off analysis pinpointed exact friction points worth fixing",
        "Security and UX are not always in conflict — thoughtful design can maintain security while improving experience",
        "Error recovery is as important as happy path — many users hit errors; making failures recoverable prevents abandonment",
        "Incremental rollout builds confidence — controlled testing validated improvements before committing fully",
      ],
      duration: "6 months",
      company: "Shinhan Card",
    },
    "auth-cost": {
      summaryBullets: [
        "Reduced operational authentication costs through vendor management and risk-based routing",
        "Maintained security standards while shifting to lower-cost authentication methods",
        "Implemented risk model to route transactions to appropriate authentication methods",
        "Established framework for ongoing authentication cost optimization",
      ],
      context: "Authentication methods had varying costs, but all transactions used expensive methods regardless of risk level. Authentication expenses were growing with transaction volume. Opportunity existed to reduce costs without compromising security by routing based on risk assessment.",
      goal: "Reduce authentication operational costs while maintaining security and user experience. The solution needed to balance cost savings with fraud prevention and regulatory requirements.",
      role: "Product Manager leading cost optimization initiative. Analyzed cost structure, defined risk-based routing logic, coordinated with security teams on risk thresholds, and measured cost impact.",
      keyDecisions: [
        "Risk-based routing to lower-cost methods — assessed transaction risk to determine appropriate authentication level",
        "Vendor portfolio management for better rates — diversified authentication providers to improve negotiating position",
        "Maintained security baselines strictly — cost savings only within acceptable risk parameters",
        "Built monitoring for cost and fraud metrics — ensured optimization didn't degrade security outcomes",
      ],
      execution: [
        {
          phase: "Analysis & Strategy (Months 1-2)",
          description: "Analyzed authentication cost structure and vendor contracts. Developed risk-based routing logic with security team. Defined cost reduction targets and security guardrails.",
        },
        {
          phase: "Implementation (Months 3-4)",
          description: "Built risk assessment engine and routing logic. Integrated lower-cost authentication providers. Created monitoring dashboard for cost and fraud metrics.",
        },
        {
          phase: "Optimization & Scale (Month 5)",
          description: "Optimized risk thresholds based on early results. Expanded to additional transaction types. Documented cost savings and maintained security metrics.",
        },
      ],
      results: [
        {
          metric: "Cost Reduction",
          value: "Achieved",
          description: "Reduced authentication operational costs through risk-based routing to lower-cost methods",
        },
        {
          metric: "Security Maintained",
          value: "Stable",
          description: "Maintained fraud rates and security standards while reducing costs",
        },
        {
          metric: "Vendor Portfolio",
          value: "Diversified",
          description: "Established multi-vendor strategy improving negotiating position and reducing dependency",
        },
        {
          metric: "Optimization Framework",
          value: "Established",
          description: "Created ongoing framework for authentication cost optimization as volumes grow",
        },
      ],
      learnings: [
        "Risk segmentation enables cost optimization — not all transactions need expensive authentication",
        "Vendor diversification improves negotiating position — reduced dependency on single provider",
        "Cost optimization requires security partnership — finance and security must align on trade-offs",
        "Monitoring both cost and fraud is critical — optimization only works if security metrics stay stable",
      ],
      duration: "5 months",
      company: "Shinhan Card",
    },
    "rd-initiatives": {
      summaryBullets: [
        "Evaluated blockchain technology for card benefit redemption and loyalty programs",
        "Assessed biometric authentication methods for improved security and convenience",
        "Established framework for evaluating emerging fintech technologies",
        "Built PoC capabilities demonstrating feasibility before production investment",
      ],
      context: "Emerging technologies in blockchain and biometrics offered potential benefits for card services, but required evaluation before production investment. Needed systematic approach to assess technologies for business fit, technical feasibility, and regulatory compatibility.",
      goal: "Evaluate emerging fintech technologies through structured PoCs to inform product roadmap. Determine which technologies warrant production investment and which should remain experimental.",
      role: "Product Lead for R&D initiatives. Defined evaluation criteria, coordinated PoC development, assessed business fit, and recommended production vs. shelf decisions.",
      keyDecisions: [
        "PoC-first approach before production investment — validated feasibility and business fit before committing resources",
        "Focused on business problems, not technology trends — evaluated technologies based on problems they solved, not hype",
        "Partnered with vendors for PoCs — leveraged external expertise while maintaining strategic control",
        "Built evaluation framework for systematic assessment — created repeatable process for technology evaluation",
      ],
      execution: [
        {
          phase: "Technology Assessment (2021-2022)",
          description: "Evaluated blockchain platforms for card benefit programs. Assessed technical feasibility, regulatory considerations, and business model fit. Conducted PoC with vendor partnership.",
        },
        {
          phase: "Biometric Evaluation (2023-2024)",
          description: "Assessed biometric authentication methods (fingerprint, face, voice). Evaluated UX improvement vs. implementation cost. Conducted small-scale pilot with select user segments.",
        },
        {
          phase: "Framework Development (2024-2025)",
          description: "Built systematic framework for emerging technology evaluation. Defined criteria for PoC vs. production decisions. Established R&D governance and budget allocation process.",
        },
      ],
      results: [
        {
          metric: "Technology Assessment",
          value: "Systematic",
          description: "Established structured approach to evaluate emerging technologies for business fit",
        },
        {
          metric: "PoC Capability",
          value: "Built",
          description: "Developed capability to rapidly test technologies before production investment",
        },
        {
          metric: "Strategic Decisions",
          value: "Informed",
          description: "Provided data-driven recommendations on which technologies to pursue vs. shelf",
        },
        {
          metric: "Innovation Culture",
          value: "Strengthened",
          description: "Built structured innovation process balancing experimentation with business focus",
        },
      ],
      learnings: [
        "Technology evaluation requires business lens — assess technologies by problems solved, not features offered",
        "PoCs prevent expensive mistakes — small investments validate feasibility before large commitments",
        "Regulatory fit is critical in finance — emerging technologies must work within existing compliance frameworks",
        "Innovation requires governance — structured evaluation prevents both excessive caution and reckless experimentation",
      ],
      duration: "Multiple initiatives (2021-2025)",
      company: "Shinhan Card",
    },
  },
  ko: {
    "auth-module": {
      summaryBullets: [
        "분산된 인증 체계를 전사 공통 모듈로 재설계해 중복 개발과 운영 비용을 절감",
        "서비스별 유연성을 유지하면서도 인증 로직은 중앙화하는 구조를 선택",
        "대규모 트래픽 서비스부터 단계적으로 확산하는 롤아웃 전략 수립",
        "인증 거버넌스 체계를 정립해 신규 인증 수단 도입 기반 마련",
      ],
      context:
        "인증 로직이 각 서비스별로 분산되어 중복 개발, UX 불일치, 운영 비효율이 발생했습니다. 서비스마다 독자적으로 인증을 구현하면서 보안 리스크와 유지보수 부담이 누적되고, 고객은 서비스마다 다른 인증 경험을 겪었습니다.",
      goal: "보안·컴플라이언스 리스크 없이 재사용 가능한 통합인증 플랫폼을 만드는 것. 서비스별 특성을 유지하면서도 다수의 대용량 서비스를 지원해야 했습니다.",
      role: "인증 조직 PO. 플랫폼 범위 정의, 확산 전략 수립, 유관 부서 조율. 개발·보안·비즈니스 팀을 조율하여 기술·보안·사업 요구사항을 충족하는 플랫폼 구축.",
      keyDecisions: [
        "인증 로직은 통합하되 서비스 유연성은 보장 — 획일적 표준화가 아닌, 서비스별 요구사항 수용",
        "완벽한 설계보다 실제 도입 우선 — 쓰이지 않는 이상적 시스템보다, 현장 문제를 해결하는 플랫폼에 집중",
        "전사 전환이 아닌 단계적 확산 설계 — 위험을 낮추고 초기 적용처로부터 학습 후 확대",
        "인증 수단 추가를 위한 거버넌스 체계 구축 — 플랫폼 일관성을 유지하며 신규 인증 방식을 추가할 프로세스 정의",
      ],
      execution: [
        {
          phase: "플랫폼 설계·요구사항 정의 (1-3개월)",
          description:
            "서비스 조직 인터뷰를 통해 인증 현황과 애로사항 파악. 보안 조직과 플랫폼 경계 정의. 개발 리드와 기술 스펙 및 확산 전략 수립.",
        },
        {
          phase: "개발·파일럿 운영 (4-8개월)",
          description:
            "핵심 기능을 갖춘 모듈형 인증 플랫폼 구축. 대용량 결제 서비스에 파일럿 적용하여 기술 검증 및 현장 피드백 확보. 파일럿 조직 의견 반영하여 API 및 문서 개선.",
        },
        {
          phase: "단계적 확산 (9-14개월)",
          description:
            "확산 단계마다 학습한 내용을 반영하며 추가 서비스 적용. 플랫폼 거버넌스·지원 체계 수립. 신규 적용처를 위한 가이드 문서 작성.",
        },
        {
          phase: "안정화·고도화 (15-18개월)",
          description:
            "다수 대용량 서비스에서 안정 운영 달성. 플랫폼 헬스·도입률 지표 수립. 사업 요구사항 기반 추가 인증 수단 로드맵 수립.",
        },
      ],
      results: [
        {
          metric: "개발 효율",
          value: "중복 제거",
          description:
            "서비스별 중복 인증 구현을 제거하여 비즈니스 기능 개발에 개발 역량 투입",
        },
        {
          metric: "고객 경험",
          value: "일관성 개선",
          description: "여러 접점에서 일관된 인증 경험 제공",
        },
        {
          metric: "플랫폼 확산",
          value: "다수 서비스",
          description:
            "대용량 서비스 다수에 성공적으로 적용, 서비스 조직으로부터 긍정 평가",
        },
        {
          metric: "보안 체계",
          value: "강화",
          description:
            "통합 인증 체계로 보안 통제 고도화, 보안 요구사항 대응 속도 향상",
        },
      ],
      learnings: [
        "플랫폼 결정은 전사 영향력을 갖는다 — 초기 아키텍처 선택이 수십 개 조직의 업무 방식에 영향, 기초 설계의 중요성 확인",
        "실제 도입은 현장 문제 해결에서 나온다 — 조직들이 플랫폼을 도입한 이유는 강제가 아니라 문제 해결",
        "단계적 확산이 신뢰와 역량을 만든다 — 점진적 적용으로 학습·개선 후 확대, 리스크 감소 및 성과 향상",
        "거버넌스는 기술만큼 중요하다 — 플랫폼 진화 프로세스가 민첩성 유지하며 분산 방지",
      ],
      duration: "18개월",
      company: "신한카드",
    },
    "identity-verification": {
      summaryBullets: [
        "배경: 규제·감사 요건으로 카드본인확인 강화 필요; 사업은 전환율 유지를 위해 고객 마찰 최소화 요구.",
        "핵심 판단: 리스크 세분화 기반 확인 방식; 규제 의도 충족 시 과도한 구현 지양; 감사 대응 가능한 구조로 설계함.",
        "조직 영향: 감사·기관 심사 통과; 재사용 가능한 카드본인확인 패턴으로 후속 규제 대응 가속화.",
        "컴플라이언스: KCC·KISA·내부 리스크·개발 조직 간 조율; 중개기관·발급사 등 기관 협의 총괄함.",
      ],
      context:
        "금융 규제와 감사 요건이 카드서비스의 카드본인확인을 강화할 것을 요구했으나, 사업 조직은 전환율 유지를 위해 고객 마찰 최소화를 요청했습니다. 여러 기관의 규제 요구사항을 충족하면서도 고객 경험을 유지하는 것이 과제였습니다.",
      goal: "전환율과 고객 경험을 유지하면서 규제 기준을 충족하는 카드본인확인 체계 설계. 감사 기관, 규제 당국, 내부 리스크 조직의 요구사항과 원활한 고객 여정을 동시에 충족해야 했습니다.",
      role: "제품 기획 및 요구사항 정의. 규제 기관·내부 리스크·개발 조직 간 조율. 정책 요건을 실무 가능한 제품 명세로 전환하고, 구현이 규제 의도를 정확히 반영하도록 관리.",
      keyDecisions: [
        "규제 요건과 UX 트레이드오프 균형 — 리스크 평가 기반으로 마찰 추가 지점과 경험 최적화 지점 선별",
        "리스크 세분화 기반 확인 방식 선택 — 고객 세그먼트·거래 유형별 차등 확인 방식 적용, 획일적 솔루션 지양",
        "규제 의도 충족 시 과도한 구현 지양 — 불필요한 복잡도보다 실제 규제 요건 충족에 집중",
        "감사 대응 가능한 구조로 설계 — 향후 감사 및 기관 심사를 고려한 확인 플로우·데이터 설계",
      ],
      execution: [
        {
          phase: "규제 분석·요구사항 도출 (1-3개월)",
          description:
            "다수 기관의 규제 요건 분석 및 핵심 제약 도출. 리스크·컴플라이언스·법무·사업 조직과 요구사항 조율. 규제 문구를 제품 요건으로 전환.",
        },
        {
          phase: "설계·검토 (4-6개월)",
          description:
            "고객 세그먼트별 유연한 카드본인확인 체계 설계. 내부 리스크 조직 및 외부 규제 자문과 검토 조율. 감사 대응용 문서 작성.",
        },
        {
          phase: "개발·검증 (7-10개월)",
          description:
            "개발 조직과 카드본인확인 서비스 구축. 컴플라이언스 조직과 규제 일치성 반복 검증. 예외 상황·엣지 케이스 대응 절차 정립.",
        },
        {
          phase: "배포·감사 준비 (11-12개월)",
          description:
            "컴플라이언스·UX 지표 모니터링과 함께 서비스 배포. 감사 대응 문서 준비. 외부 심사 전 내부 감사 사전 점검.",
        },
      ],
      results: [
        {
          metric: "규제 대응",
          value: "통과",
          description: "주요 지적 없이 감사 및 기관 심사 통과",
        },
        {
          metric: "패턴 정립",
          value: "재사용",
          description:
            "재사용 가능한 카드본인확인 패턴 구축, 후속 규제 대응 업무 가속화",
        },
        {
          metric: "정책·제품 역량",
          value: "강화",
          description:
            "정책과 제품 교차 영역의 실무 역량 강화, 규제 대응 제품 설계 핵심 담당자로 자리매김",
        },
        {
          metric: "전환율 영향",
          value: "최소",
          description:
            "세밀한 UX 최적화로 규제 요건 충족과 동시에 허용 가능한 전환율 유지",
        },
      ],
      learnings: [
        "규제 요건은 제약이지 명세가 아니다 — 규제 의도를 제품 요건으로 전환하려면 판단과 조율이 필요",
        "초기 컴플라이언스 참여가 재작업을 막는다 — 기획 초기부터 리스크·컴플라이언스 조직 참여로 수개월 반복 작업 절감",
        "문서도 제품이다 — 감사 대응 가능한 문서는 제품 자체만큼 중요한 산출물",
        "리스크 세분화가 더 나은 균형을 만든다 — 리스크 기반 차등 확인 방식으로 규제 대응과 고객 경험 동시 최적화",
      ],
      duration: "12개월",
      company: "신한카드",
    },
    "open-banking": {
      summaryBullets: [
        "급한 설계로 출시된 '21년 오픈뱅킹 시스템의 오작동·UX 문제 개선",
        "금융결제원 기준 인증수단 추가 (카드비밀번호·1원인증·ARS인증)",
        "보이스피싱 대응 보안 정책 강화 (일금액 한도·첫 송금 기준)",
        "타사 벤치마킹 기반 송금 UX 리뉴얼 (추천·계좌·연락처 3탭 구성)",
      ],
      context:
        "'21년 출시된 신한카드 오픈뱅킹 시스템은 급한 설계로 인해 오작동하는 화면과 사용자 관점 고려 부족 영역이 많았습니다. '22년 오픈뱅킹 담당 PM으로 발령받아 시스템 안정화 및 고도화가 필요했습니다. 계좌 서비스는 카드와 근본적으로 다름—송금은 취소 불가하며 실시간 완료되어 카드 거래(취소 가능)보다 금융사고에 취약했습니다. 외부 의존성(은행 시스템·금융결제원 인프라)으로 이슈 원인 파악이 까다로웠습니다.",
      goal: "오픈뱅킹 계좌 관리·송금 서비스를 프로덕션급 품질로 고도화. 금융결제원 기준 충족하는 인증수단 추가. 보이스피싱 대응 보안 강화하되 UX 유지. 송금 인터페이스 사용성 개선. 금융결제원 등 외부 파트너와의 신한카드 대표 역할 수행.",
      role: "오픈뱅킹 고도화를 이끈 프로덕트 매니저. 3명 팀(상담 지원·데이터 분석·개선/고도화 리드) 中 고도화 담당 (기여도 85%). 서비스 개선 및 UX 리뉴얼 리딩. 금융결제원 등과의 대외 커뮤니케이션 담당.",
      keyDecisions: [
        "외부 의존성(은행·금융결제원)에 대한 포괄적 에러 대응 설계 — 각 시스템이 독립적으로 장애 날 수 있어 케이스별 fallback 전략 필요",
        "'카드 중심' 시야를 '계좌'까지 확장 — 조직 관점을 카드만이 아닌 다양한 결제수단 플랫폼으로 전환",
        "보이스피싱 등 금융사고 방지 위한 보안강화 — 정상 고객 경험 저하 없이 검증 레이어 추가",
        "프로모션·혜택 없이 출시 — 편리한 UX로 자생적 성장 유도, 제품-시장 적합성 검증",
      ],
      execution: [
        {
          phase: "이슈 진단 및 인증 강화 (2022 1분기)",
          description:
            "'21년 출시된 오작동 화면·사용자 미고려 영역 식별. 금융결제원 오픈뱅킹 기준에 따른 인증수단 추가 (카드비밀번호·1원인증·ARS인증). 금융결제원과 컴플라이언스 요구사항 조율.",
        },
        {
          phase: "보안 강화 및 UX 리뉴얼 (2022 2-3분기)",
          description:
            "보이스피싱 대응 보안 정책 구현 (일 송금 한도·첫 송금 검증 규칙). 타사 송금 UX 벤치마킹하여 3탭 구조로 재설계. 금융결제원 등과의 신한카드 오픈뱅킹 대표 역할 수행.",
        },
        {
          phase: "안정화 및 지원 강화 (2022 4분기)",
          description:
            "복잡한 오픈뱅킹 이슈 대응 위한 상담 매뉴얼 보완. 외부 API 장애 시 펌뱅킹 자동 전환 구현. 개선된 에러 핸들링 및 지원 프로세스로 서비스 운영 안정화.",
        },
      ],
      results: [
        {
          metric: "시스템 안정성",
          value: "개선",
          description:
            "'21년 급한 출시의 오작동 수정 및 체계적 고도화로 안정화",
        },
        {
          metric: "인증 컴플라이언스",
          value: "금융결제원 기준 충족",
          description:
            "금융결제원 오픈뱅킹 요구사항 충족하는 다수 인증수단 추가",
        },
        {
          metric: "보안 강화",
          value: "사기 위험 감소",
          description:
            "송금 한도·검증 규칙으로 보이스피싱 위험 감소",
        },
        {
          metric: "송금 UX",
          value: "리뉴얼",
          description:
            "경쟁사 벤치마킹 기반 3탭 인터페이스로 송금 사용성 개선",
        },
      ],
      learnings: [
        "송금이 결제보다 위험 — 취소 불가·실시간 완료 특성이 취소 가능한 카드 거래보다 사기에 취약",
        "외부 의존성이 트러블슈팅 복잡하게 함 — 내부 전용 카드와 달리 오픈뱅킹은 은행·금융결제원 개입, 방어적 설계 및 명확한 지원 절차 필요",
        "급한 출시는 기술 부채 만듦 — 신규 기능 전 '21년 이슈 수정이 필요한 기반 작업",
        "벤치마킹이 UX 개선 가속 — 경쟁사 송금 인터페이스 학습이 설계 시간 절약 및 결과 개선",
      ],
      duration: "12개월 (2022.01-12)",
      company: "신한카드",
    },
    "account-payment": {
      summaryBullets: [
        "카드결제망과 오픈뱅킹 인프라 활용한 계좌결제 서비스 런칭 (2022.09)",
        "신한pLay 결제 커버리지를 카드·지역화폐에서 등록 계좌까지 확대",
        "누적 취급액 51억원, 월평균 이용회원 8천명 이상 달성",
        "프로모션·혜택 없이 자생적 성장, 강력한 제품-시장 적합성 입증",
      ],
      context:
        "신한카드의 결제수단은 신용·체크·선불카드, 지역화폐로 한정되어 있었습니다. 오픈뱅킹 규제로 고객이 등록 은행 계좌로 기존 카드 가맹점망에서 결제할 기회가 생겼습니다. 그러나 계좌를 카드 중심 승인 시스템에 통합하려면 신규 상품 구조, 광범위한 준법 검토(가맹점·고객·금융결제원 오픈뱅킹 약관), 승인·회계 시스템의 새로운 설계가 필요했습니다.",
      goal: "고객이 등록 은행 계좌로 온·오프라인 카드 가맹점 결제 가능한 서비스 출시. 카드 발급 없이 앱 내 간단한 신청만으로 결제 가능하게 함. 프로모션 없이 편의성으로 도입 유도. 광범위한 컴플라이언스 검토 완료 및 승인·회계 시스템에 신규 상품 구조 구축.",
      role: "2명 기획 팀의 프로덕트 매니저 (기여도 70%). 액션별 사용자 시나리오 정의, 화면 설계, 운영 매뉴얼 제작. 앱·오픈뱅킹·상품·발급·입금 시스템 조율—평소 함께 일하지 않던 다수 팀.",
      keyDecisions: [
        "기존 카드결제망에 계좌 통합 — 별도 결제 레일 구축보다 검증된 인프라 활용",
        "프로모션·혜택 없이 출시 — 편의 가치(카드 발급 불필요)로 자생적 도입 베팅",
        "팀 간 교육·정렬 우선 — 생소한 시스템 전반에 맥락 공유 및 상호 학습 촉진",
        "신규 서비스 유형의 긴 안정화 기간 수용 — 프로덕션 거래 발생 전까지 모든 엣지 케이스 테스트 불가",
      ],
      execution: [
        {
          phase: "기획·컴플라이언스 (2022.02-04)",
          description: "서비스 범위 및 고객 플로우 정의. 가맹점·고객·금융결제원 오픈뱅킹 약관 광범위한 준법 검토 완료. 계좌를 카드 승인·회계 시스템에 통합하는 신규 상품 구조 설계. 카드사 中 2번째로 추진.",
        },
        {
          phase: "개발·연동 (2022.05-08)",
          description: "앱·오픈뱅킹·상품·발급·입금 시스템 조율하여 계좌결제 서비스 구축. 문서화·정렬 세션으로 팀 간 학습 촉진. 생소한 시스템 상호작용을 체계적 테스트로 해결.",
        },
        {
          phase: "출시·안정화 (2022.09~)",
          description: "신한pLay에 계좌결제 서비스 런칭 (2022년 9월). 도입·거래 패턴 모니터링. 프로덕션에서만 나타나는 엣지 케이스 해결 위해 안정화 기간 연장. 마케팅·혜택 없이 자생적 성장 달성.",
        },
      ],
      results: [
        {
          metric: "거래 규모",
          value: "누적 51억원",
          description: "출시 이후 누적 취급액 51억원 달성",
        },
        {
          metric: "활성 이용자",
          value: "월 8천명 이상",
          description: "계좌결제를 주거래 수단으로 선택하는 월평균 이용회원 8천명 이상 유지",
        },
        {
          metric: "자생적 성장",
          value: "프로모션 無",
          description: "언론보도·할인·적립 없이 지속적 이용 성장 달성",
        },
        {
          metric: "시장 포지션",
          value: "카드사 中 2번째",
          description: "카드결제망 활용한 계좌결제 서비스를 카드사 中 2번째로 런칭",
        },
      ],
      learnings: [
        "편의성이 혜택 없이 도입 유도 — 카드 발급 절차 불필요가 자생적 성장에 충분한 가치 제공",
        "팀 간 정렬은 선제적 교육 필요 — 생소한 시스템 전반의 지식 격차를 체계적 맥락 공유로 해소",
        "신규 서비스 유형은 프로덕션 검증 필요 — 실제 거래 발생 전까지 모든 엣지 케이스 테스트 불가",
        "구조적 혁신에는 긴 안정화 수용 가능 — 신규 서비스 유형 구축은 프로덕션 학습에 인내 필요",
      ],
      duration: "8개월 (2022.02-09)",
      company: "신한카드",
    },
    "payment-ux": {
      summaryBullets: [
        "안심클릭 온라인 결제 서비스 운영하며 인증-승인 결제 구조 전반 학습",
        "고객 행태 분석·민원 데이터 기반 온라인 결제창 전면 리뉴얼 리딩",
        "앱연동형 간편결제 파트너 연동 개발 및 지속적 UX 개선",
        "브랜드별(Visa·Mastercard 등) 3DS2.0 국제결제 보안 표준 구현",
      ],
      context:
        "안심클릭은 신한카드의 기존 온라인 결제 서비스로, 이미 안정화되어 있었습니다. 그러나 지속적 운영을 통해 고객 행동 분석과 고객지원 데이터로 개선 기회를 발견했습니다. 경쟁력 유지를 위해 결제창 전면 리뉴얼, 간편결제 파트너 연동, 국제결제 보안 표준(3DS2.0) 업데이트 등 지속적 고도화가 필요했습니다.",
      goal: "지속적 개선을 통한 온라인 결제 서비스 운영 및 고도화. 서비스 안정성 유지하며 결제창 전면 리뉴얼 완수. 간편결제 파트너 연동 개발 및 국제결제 보안 표준 구현. 프로덕션 결제 인프라에서 혁신과 안정성 균형.",
      role: "온라인 결제 서비스 운영 및 고도화를 담당한 프로덕트 매니저. 고객 행동·지원 데이터 분석해 개선 영역 식별. 결제창 리뉴얼 프로젝트 리딩. 간편결제 파트너와 앱연동 개발 조율. 브랜드별 3DS2.0 개발 관리. 다수 이해관계자(파트너·내부 조직·고객) 균형.",
      keyDecisions: [
        "안정화된 서비스도 지속 개선 추진 — '안정적'이 '최적'을 의미하지 않음, 체계적 테스트로 고도화 기회 발굴",
        "축적된 인사이트 기반 결제창 전면 리뉴얼 리딩 — 프로덕션 안정성·보안 요건 유지하며 핵심 UX 재구축",
        "파트너별 상이한 연동 요구사항 수용 — 각 간편결제 파트너마다 기술 제약 다름, 유연한 통합 방식 설계",
        "브라우저·단말기 환경 의존성 최소화 — 환경 다양성으로 인한 마찰을 방어적 설계·테스트로 감소",
      ],
      execution: [
        {
          phase: "서비스 운영 및 학습 (2019-2020)",
          description:
            "안심클릭 온라인 결제 서비스 일상 운영. 결제 플로우 아키텍처(인증 → 승인 → 정산) 학습. 고객 행동 패턴 및 지원 데이터 분석. 안정적 프로덕션 서비스에서 개선 기회 식별하는 체계적 접근법 구축.",
        },
        {
          phase: "결제창 전면 리뉴얼 (2020)",
          description:
            "축적된 운영 인사이트 기반 온라인 결제창 전면 리뉴얼 프로젝트 리딩. 보안 조직과 협업하여 사기방지 표준 유지. 서비스 중단·보안 사고 없이 전환 관리.",
        },
        {
          phase: "연동 개발 (2020-2021)",
          description:
            "다수 파트너와 앱연동형 간편결제 연동 개발. 브랜드별(Visa·Mastercard 등) 3DS2.0 국제결제 표준 구현. 브라우저·단말기 환경 이슈 최소화하도록 통합 품질 지속 개선. 파트너·내부 조직·고객 간 이해관계 균형.",
        },
      ],
      results: [
        {
          metric: "결제 기반 이해",
          value: "구축",
          description:
            "결제 인프라에 대한 깊은 이해 구축, 향후 결제 제품 업무의 기반이 됨",
        },
        {
          metric: "결제창 리뉴얼",
          value: "완료",
          description:
            "서비스 중단·보안 저하 없이 결제창 리뉴얼 성공",
        },
        {
          metric: "파트너 연동",
          value: "다수 파트너",
          description:
            "기술 요구사항 상이함에도 다양한 간편결제 파트너와 연동 완료",
        },
        {
          metric: "국제 표준 준수",
          value: "3DS2.0 대응",
          description:
            "모든 카드 브랜드 대상 국제결제 보안 표준 업데이트 구현",
        },
      ],
      learnings: [
        "안정적 서비스도 지속 테스트 혜택 받음 — 체계적 탐색이 성숙 제품에서도 개선 기회 드러냄",
        "결제 인프라는 수술적 변경 필요 — 프로덕션에서 중단·보안 저하 불가",
        "파트너 다양성은 유연성 요구 — 각 연동 파트너마다 고유한 제약·우선순위 있음",
        "이해관계자 균형은 지속적 작업 — 파트너·내부 조직·고객 이해를 지속적으로 조율해야 함",
      ],
      duration: "30개월 (2019-2021)",
      company: "신한카드",
    },
    "auth-cost": {
      summaryBullets: [
        "결제·가입용 다양한 인증수단(휴대폰·장치·공인인증 등) 운영 및 고도화",
        "앱 가입절차 간소화 및 인증 편의성 향상",
        "인증수단 전략적 대체를 통한 운영 비용 절감",
        "편의성과 보안성 균형 잡는 금융 서비스 설계 습관 형성",
      ],
      context:
        "신한카드는 결제 거래와 플랫폼 가입을 위해 다양한 인증수단(휴대폰 인증·장치 인증·공인인증 등)을 사용했습니다. 각 방식마다 비용 구조·사용자 편의성·보안 특성이 달랐습니다. 서비스는 보안 기준 유지하며 지속적 운영·개선·비용 최적화가 필요했습니다.",
      goal: "인증 서비스를 효과적으로 운영하며 사용자 편의성 개선 및 비용 절감. 앱 가입 절차 간소화하여 전환율 개선. 고비용 인증수단을 비용효율적 대안으로 교체할 기회 발굴. 금융 서비스 설계 시 편의성과 보안성 균형 잡는 습관 형성.",
      role: "인증 서비스 운영 및 개선을 담당한 프로덕트 매니저. 결제·가입 플로우 전반의 다수 인증수단 관리. 간소화·비용 절감 기회 식별. 보안 조직과 협업하여 변경이 안전 기준 유지하도록 조율. 편의성·보안·비용의 경쟁 목표 균형 잡는 법 학습.",
      keyDecisions: [
        "앱 가입 플로우 간소화로 전환율 개선 — 보안 기준선 유지하며 불필요한 인증 단계 제거",
        "고비용 인증수단을 비용효율적 대안으로 교체 — 보안 동등성 있으면서 저비용인 수단 식별",
        "편의성과 보안 의도적으로 균형 — 최대 보안 디폴트가 아닌, 리스크 기반 명시적 트레이드오프",
        "설계가 아닌 운영으로 학습 — 실무 서비스 관리가 설계 단계에서 놓친 인사이트 제공",
      ],
      execution: [
        {
          phase: "다수 인증수단 운영 (2018-2019)",
          description:
            "결제·가입용 다양한 인증수단(휴대폰 인증·장치 인증·공인인증) 운영. 각 수단의 비용 구조·사용자 선호·보안 특성 학습. 최적화 기회 식별.",
        },
        {
          phase: "가입 간소화 (2018-2019)",
          description:
            "앱 가입 플로우 마찰 지점 분석. 리스크 평가 기반 불필요한 인증 단계 제거. 보안 조직과 변경 검증 조율. 가입 전환율 및 사기율에 대한 영향 측정.",
        },
        {
          phase: "비용 절감 이니셔티브 (2019)",
          description:
            "저비용 대안으로 교체 가능한 인증수단 식별. 사기·리스크 조직과 보안 동등성 검증. 사기 지표 세심한 모니터링하며 변경 구현.",
        },
      ],
      results: [
        {
          metric: "가입 편의성",
          value: "향상",
          description:
            "앱 가입 절차 간소화, 사용자 경험 및 전환율 개선",
        },
        {
          metric: "인증 비용",
          value: "절감",
          description:
            "인증수단 전략적 교체를 통한 운영 비용 절감",
        },
        {
          metric: "보안-편의 균형",
          value: "최적화",
          description:
            "최대 보안 디폴트가 아닌 편의성·보안 균형 접근법 개발",
        },
        {
          metric: "향후 업무 기반",
          value: "수립",
          description:
            "인증 서비스 운영 경험이 이후 통합인증 플랫폼 업무의 기반이 됨",
        },
      ],
      learnings: [
        "편의성과 보안은 공존 가능 — 신중한 설계 시 제로섬 트레이드오프 아님",
        "운영 서비스에도 비용 최적화 기회 존재 — 현재 방식이 최적이라 가정 말아야",
        "금융 서비스 설계는 명시적 트레이드오프 필요 — 편의 vs 보안 의사결정은 의도적이어야",
        "서비스 운영이 구축이 못 가르치는 것 가르침 — 실무 운영이 설계 단계가 놓친 인사이트 드러냄",
      ],
      duration: "24개월 (2018-2019)",
      company: "신한카드",
    },
    "rd-initiatives": {
      summaryBullets: [
        "카드 혜택 블록체인 및 생체인증 탐색 R&D 이니셔티브 주도",
        "신흥 핀테크 기술 평가 체계적 프로세스 구축",
        "기술 PoC를 실행 가능한 사업 권고사항으로 전환",
        "벤더 관계 및 기술 평가 내부 역량 수립",
      ],
      context:
        "블록체인·생체인증·신규 결제 프로토콜 등 핀테크 환경이 빠르게 변화하고 있었습니다. 사업은 과대광고에 주의를 빼앗기지 않으면서 신흥 기술의 전략적 적합성을 평가하는 체계적 접근이 필요했고, R&D는 실무 제품 제공과 실험의 균형이 필요했습니다.",
      goal: "집중된 PoC 프로젝트로 신흥 핀테크 기술 평가 반복 가능 프로세스 수립. 실제 사업 문제·규제 제약과 연결 유지하며 기술·제품 적합성 신속 평가 내부 역량 구축.",
      role: "R&D 이니셔티브를 이끈 프로덕트 매니저. PoC 범위 정의, 기술 파트너·벤더 조율, 규제 타당성 평가, 기술 발견을 제품·사업 권고사항으로 전환.",
      keyDecisions: [
        "명확한 제품 적용 가능한 기술에 R&D 집중 — 연구를 위한 연구 지양",
        "핵심 가정 검증 위한 빠른 PoC 구축 — 광범위한 계획보다 신속한 프로토타이핑 선호",
        "컴플라이언스·보안 조기 참여 — 규제 타당성이 사후 고려 사항이 아니도록",
        "학습 체계적 문서화 — 향후 제품 결정 정보가 될 조직 지식 생성",
      ],
      execution: [
        {
          phase: "카드 혜택 블록체인 PoC",
          description:
            "투명하고 위변조 방지되는 카드 혜택 추적·사용을 위한 블록체인 탐색. 파트너 벤더와 프로토타입 구축. 규제 타당성·확장성 제약 평가. 결론: 기술적으로 가능하나 규제 불확실성으로 프로덕션 조기.",
        },
        {
          phase: "생체인증 평가",
          description:
            "앱 로그인·고액 거래 생체인증(지문·안면) 평가. 다수 벤더 솔루션 테스트. 고객 수용도·보안 트레이드오프 평가. 향후 생체인증 통합 로드맵 정보 제공.",
        },
        {
          phase: "기술 평가 프레임워크 개발",
          description:
            "신흥 기술 평가 내부 프레임워크 개발: 제품·시장 적합성, 규제 타당성, 기술 성숙도, 벤더 생태계, 구현 비용. 프레임워크로 향후 기회 체계적 평가.",
        },
      ],
      results: [
        {
          metric: "R&D 역량",
          value: "수립",
          description:
            "신속 기술 평가 및 PoC 개발 내부 역량 구축",
        },
        {
          metric: "제품 로드맵 정보",
          value: "제공",
          description:
            "R&D 발견이 제품 로드맵 의사결정 및 기술 전략에 직접 영향",
        },
        {
          metric: "벤더 네트워크",
          value: "확장",
          description:
            "신흥 기술 벤더 및 핀테크 파트너와 관계 수립",
        },
        {
          metric: "조직 학습",
          value: "축적",
          description:
            "향후 제품·기술 결정 정보가 될 체계적 문서 생성",
        },
      ],
      learnings: [
        "초기 기술은 성숙 솔루션과 다른 평가 기준 필요 — 현재 역량보다 잠재력 평가",
        "규제 타당성이 종종 제약 조건이다 — 규제 경로 불명확하면 기술 성숙도는 부차적",
        "PoC는 특정 질문에 답해야 — 가설 주도 실험 선호, 열린 탐색 지양",
        "작동하지 않는 것 문서화도 가치 있다 — 부정 발견이 반복 실수 방지",
      ],
      duration: "다수 이니셔티브 (2021-2025)",
      company: "신한카드",
    },
  },
};
