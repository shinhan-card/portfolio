"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import WorkingPrinciples from "@/components/WorkingPrinciples";
import TechStack from "@/components/ui/TechStack";
import ProcessFlow, { FlowStep } from "@/components/ui/ProcessFlow";
import { toolsAndTech } from "@/data/career-stats";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function AboutPage() {
  const { language } = useLanguage();

  const texts = {
    en: {
      back: "Back to Home",
      title: "How I Work",
      subtitle: "My approach to building products that balance business, technology, and user needs",
      processTitle: "Product Development Process",
      toolsTitle: "Tools & Technologies",
      toolsSubtitle: "Technologies and tools I use to design, build, and ship products",
    },
    ko: {
      back: "홈으로",
      title: "일하는 방식",
      subtitle: "비즈니스·기술·사용자를 균형있게 고려하는 제품 개발 접근법",
      processTitle: "제품 개발 프로세스",
      toolsTitle: "도구 및 기술",
      toolsSubtitle: "제품 설계, 개발, 출시에 활용하는 기술과 도구",
    },
  };

  const t = texts[language];

  const productProcess: FlowStep[] = [
    {
      id: "discovery",
      label: language === "ko" ? "문제 정의" : "Problem Discovery",
      description:
        language === "ko"
          ? "사용자 조사, 데이터 분석, 이해관계자 인터뷰를 통해 해결할 문제 파악"
          : "User research, data analysis, stakeholder interviews to identify problems worth solving",
      icon: "🔍",
      status: "completed",
      substeps:
        language === "ko"
          ? [
              "사용자 인터뷰 및 행동 데이터 수집",
              "비즈니스 목표 및 제약사항 파악",
              "기술적 제약 및 아키텍처 고려",
            ]
          : [
              "User interviews and behavioral data collection",
              "Business goals and constraint identification",
              "Technical constraints and architecture review",
            ],
    },
    {
      id: "definition",
      label: language === "ko" ? "요구사항 정의" : "Requirements Definition",
      description:
        language === "ko"
          ? "비즈니스·기술·규제 요구사항을 명확한 제품 스펙으로 변환"
          : "Translate business, technical, and regulatory requirements into clear product specs",
      icon: "📋",
      status: "completed",
      substeps:
        language === "ko"
          ? [
              "기능 우선순위 설정 및 범위 정의",
              "규제 및 보안 요구사항 반영",
              "엔지니어링·디자인 팀과 협업",
            ]
          : [
              "Feature prioritization and scope definition",
              "Regulatory and security requirements integration",
              "Collaboration with engineering and design",
            ],
    },
    {
      id: "design",
      label: language === "ko" ? "설계 및 검증" : "Design & Validation",
      description:
        language === "ko"
          ? "프로토타입 설계, 내부 리뷰, 사용성 검증"
          : "Design prototypes, conduct reviews, validate usability",
      icon: "🎨",
      status: "completed",
      substeps:
        language === "ko"
          ? [
              "플로우 및 와이어프레임 설계",
              "리스크 및 컴플라이언스 팀 검토",
              "사용성 테스트 수행",
            ]
          : [
              "Flow and wireframe design",
              "Risk and compliance team review",
              "Usability testing",
            ],
    },
    {
      id: "development",
      label: language === "ko" ? "개발 및 QA" : "Development & QA",
      description:
        language === "ko"
          ? "애자일 방식으로 개발하며 품질 검증 진행"
          : "Agile development with continuous quality validation",
      icon: "⚙️",
      status: "completed",
      substeps:
        language === "ko"
          ? [
              "스프린트 계획 및 백로그 관리",
              "일일 스탠드업 및 블로커 해결",
              "기능별 QA 및 리그레션 테스트",
            ]
          : [
              "Sprint planning and backlog management",
              "Daily standups and blocker resolution",
              "Feature QA and regression testing",
            ],
    },
    {
      id: "launch",
      label: language === "ko" ? "출시 및 모니터링" : "Launch & Monitoring",
      description:
        language === "ko"
          ? "단계적 출시, 지표 모니터링, 빠른 이슈 대응"
          : "Phased rollout, metrics monitoring, rapid issue response",
      icon: "🚀",
      status: "completed",
      substeps:
        language === "ko"
          ? [
              "단계적 출시 (파일럿 → 전체)",
              "주요 지표 실시간 모니터링",
              "사용자 피드백 수집 및 반영",
            ]
          : [
              "Phased rollout (pilot → full)",
              "Real-time metrics monitoring",
              "User feedback collection and iteration",
            ],
    },
    {
      id: "iterate",
      label: language === "ko" ? "개선 및 확장" : "Iteration & Scale",
      description:
        language === "ko"
          ? "데이터 기반 최적화 및 후속 기능 기획"
          : "Data-driven optimization and follow-up feature planning",
      icon: "📈",
      status: "in-progress",
      substeps:
        language === "ko"
          ? [
              "A/B 테스트 및 전환율 최적화",
              "학습 내용 문서화",
              "다음 로드맵 기획",
            ]
          : [
              "A/B testing and conversion optimization",
              "Learning documentation",
              "Next roadmap planning",
            ],
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen">
        <Section background="white">
          <div className="max-w-5xl mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted hover:text-text mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
            >
              <ArrowLeft
                className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
                strokeWidth={2}
              />
              {t.back}
            </Link>

            {/* Header with laptop stickers background */}
            <div className="text-center mb-20 relative -mx-8 sm:-mx-12 lg:-mx-16 px-8 sm:px-12 lg:px-16 py-16 rounded-xl overflow-hidden">
              {/* Laptop stickers background */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.30] dark:opacity-[0.40]"
                style={{
                  backgroundImage: "url('/images/hero/laptop-stickers.png')",
                  filter: "saturate(0.9)",
                }}
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-bg/50 via-bg/30 to-bg/50" />

              <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4 relative">
                <span className="text-base">💼</span> About
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-text mb-6 relative">
                {t.title}
              </h1>
              <p className="text-xl text-muted max-w-3xl mx-auto relative">
                {t.subtitle}
              </p>
            </div>

            {/* Working Principles */}
            <div className="mb-20">
              <WorkingPrinciples />
            </div>

            <div className="hairline mb-20" />

            {/* Process Flow */}
            <div className="mb-20">
              <ProcessFlow
                steps={productProcess}
                title={t.processTitle}
                variant="vertical"
                animated
              />
            </div>

            {/* Tools & Tech */}
            <div>
              <TechStack
                tools={toolsAndTech}
                title={t.toolsTitle}
                subtitle={t.toolsSubtitle}
                groupByCategory
                variant="grid"
              />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
