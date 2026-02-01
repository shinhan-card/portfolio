"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { caseStudyTranslations } from "@/lib/i18n/case-study-translations";
import { caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";
import { decisionLogs, systemDiagrams } from "@/data/project-metadata";
import { projectVisuals } from "@/data/project-visuals";
import { getProjectTitle, getProjectSubtitle } from "@/data/project-titles";
import type { CaseStudy } from "@/types";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ExecutiveSummary from "@/components/ui/ExecutiveSummary";
import ShareButtons from "@/components/ui/ShareButtons";
import DecisionLogSection from "@/components/DecisionLogSection";
import SystemDiagramSection from "@/components/SystemDiagramSection";
import RelatedExperience from "@/components/RelatedExperience";
import ImageCarousel from "@/components/ui/ImageCarousel";
import IframeEmbed from "@/components/ui/IframeEmbed";
import AIInlineResponse from "@/components/ui/AIInlineResponse";
import AIButton from "@/components/ui/AIButton";
import { projectToExperienceMapping, experienceMappings } from "@/data/experience-project-mapping";
import { Clock } from "lucide-react";
import { calculateReadingTime, formatReadingTime } from "@/lib/utils/reading-time";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({
  caseStudy,
}: CaseStudyContentProps) {
  const { t, language } = useLanguage();
  const [showAISummary, setShowAISummary] = useState(false);
  const [showAIDecisions, setShowAIDecisions] = useState(false);

  const translationKeyMap: Record<string, keyof (typeof caseStudyTranslations)["en"]> = {
    "integrated-authentication-module": "auth-module",
    "cardholder-identity-verification": "identity-verification",
    "open-banking-account-payment": "open-banking",
    "account-payment-launch": "account-payment",
    "online-payment-ux-redesign": "payment-ux",
    "authentication-cost-optimization": "auth-cost",
    "fintech-rd-initiatives": "rd-initiatives",
  };

  const translationKey = translationKeyMap[caseStudy.slug] || "auth-module";
  const content = caseStudyTranslations[language][translationKey];

  // Calculate reading time
  const contentText = [
    content.context,
    content.goal,
    content.role,
    ...content.keyDecisions,
    ...content.execution.map((e) => e.description),
    ...content.results.map((r) => r.description),
    ...content.learnings,
  ].join(" ");
  const readingMinutes = calculateReadingTime(contentText);

  // Get related projects
  const relatedProjects = caseStudies.filter((cs) => cs.slug !== caseStudy.slug);

  const emojiMap: Record<string, string> = {
    "integrated-authentication-module": "🔗",
    "cardholder-identity-verification": "🛡️",
    "open-banking-account-payment": "🏦",
    "account-payment-launch": "💳",
    "online-payment-ux-redesign": "🖥️",
    "authentication-cost-optimization": "💰",
    "fintech-rd-initiatives": "🔬",
  };
  const projectEmoji = emojiMap[caseStudy.slug] || "💼";
  
  // Get decision logs, system diagram, visuals, and related experience
  const decisions = decisionLogs[caseStudy.slug];
  const diagram = systemDiagrams[caseStudy.slug];
  const visuals = projectVisuals[caseStudy.slug];
  const experienceIds = projectToExperienceMapping[caseStudy.slug] || [];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="section-premium bg-surface2 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
          <div className="absolute top-20 left-10 text-9xl">{projectEmoji}</div>
          <div className="absolute bottom-20 right-10 text-9xl">⚡</div>
        </div>
        <div className="container-premium max-w-5xl">
          <Link
            href="/#projects"
            className="inline-flex items-center text-sm font-medium text-muted hover:text-text mb-8 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            {t("caseDetail.back")}
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 text-text flex items-center justify-start gap-2 sm:gap-3">
            <span className="text-3xl sm:text-4xl md:text-5xl">{projectEmoji}</span>
            {getProjectTitle(caseStudy.slug, language)}
          </h1>
          <p className="text-lg sm:text-xl text-muted mb-5 sm:mb-6 leading-relaxed max-w-4xl">
            {getProjectSubtitle(caseStudy.slug, language)}
          </p>

          {/* Reading time & Share */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="w-4 h-4" />
              {formatReadingTime(readingMinutes, language)}
            </div>
            <ShareButtons 
              url={`${siteConfig.url}/case-studies/${caseStudy.slug}`}
              title={caseStudy.title}
            />
          </div>

          {/* Executive Summary */}
          <ExecutiveSummary
            bullets={content.summaryBullets}
            meta={caseStudy.meta}
          />

          {/* AI Actions - contextual, inline */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <AIButton
              onClick={() => setShowAISummary(!showAISummary)}
              size="lg"
              className="text-xs"
              aria-label={t("ai.project.summary")}
            >
              <span className="opacity-80">✨</span>
              <span>{t("ai.project.summary")}</span>
            </AIButton>
            {decisions && (
              <AIButton
                onClick={() => setShowAIDecisions(!showAIDecisions)}
                size="lg"
                className="text-xs"
                aria-label={t("ai.project.decisions")}
              >
                <span className="opacity-80">✨</span>
                <span>{t("ai.project.decisions")}</span>
              </AIButton>
            )}
          </div>

          {/* Inline AI responses */}
          {showAISummary && (
            <AIInlineResponse
              prompt={
                language === "ko"
                  ? `${getProjectTitle(caseStudy.slug, language)} 프로젝트를 전체적으로 요약해주세요. 배경(Context), 목표(Goal), 핵심 의사결정(Key Decisions), 추진 과정(Execution), 성과(Results), 인사이트(Learnings)를 모두 포함해서 간결하게 요약해주세요.`
                  : `Provide a comprehensive summary of the ${getProjectTitle(caseStudy.slug, language)} project. Include Context, Goal, Key Decisions, Execution, Results, and Key Learnings in a concise format.`
              }
              context={caseStudy.slug}
              layout="brief"
              onClose={() => setShowAISummary(false)}
            />
          )}

          {showAIDecisions && (
            <AIInlineResponse
              prompt={
                language === "ko"
                  ? `${getProjectTitle(caseStudy.slug, language)} 프로젝트의 핵심 의사결정과 트레이드오프를 요약해주세요.`
                  : `Summarize key decisions and trade-offs for ${getProjectTitle(caseStudy.slug, language)}.`
              }
              context={caseStudy.slug}
              layout="brief"
              onClose={() => setShowAIDecisions(false)}
            />
          )}

          <div className="flex flex-wrap gap-8 text-sm mt-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 mb-1 flex items-center gap-2">
                <span>🏢</span>
                {t("caseDetail.company")}
              </p>
              <p className="text-text font-medium">{content.company}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-1 flex items-center gap-2">
                <span>📅</span>
                {t("caseDetail.duration")}
              </p>
              <p className="text-text font-medium">{content.duration}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-1 flex items-center gap-2">
                <span>👤</span>
                {t("caseDetail.role")}
              </p>
              <p className="text-text font-medium">
                {t("caseDetail.productManager")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="section-premium bg-bg">
        <div className="container-premium max-w-4xl">
          <div className="space-y-16">
            {/* Context */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-text flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">📋</span>
                {t("caseDetail.context")}
              </h2>
              <p className="text-muted leading-relaxed text-base sm:text-lg max-w-4xl">
                {content.context}
              </p>
            </section>

            {/* Goal */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-text flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">🎯</span>
                {t("caseDetail.goal")}
              </h2>
              <p className="text-muted leading-relaxed text-base sm:text-lg max-w-4xl">
                {content.goal}
              </p>
            </section>

            {/* Role */}
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold mb-5 sm:mb-6 text-text flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">👤</span>
                {t("caseDetail.myRole")}
              </h2>
              <p className="text-muted leading-relaxed text-base sm:text-lg max-w-4xl">
                {content.role}
              </p>
            </section>

            {/* Visual Content (if available) */}
            {visuals?.iframes && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-text flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">📱</span>
                  {language === "ko" ? "서비스 소개" : "Service Guides"}
                </h2>
                <div className="space-y-8">
                  {visuals.iframes.map((iframe, index) => (
                    <div key={index}>
                      <IframeEmbed
                        url={iframe.url}
                        title={iframe.title}
                        height={iframe.height}
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-4 text-center italic">
                  {language === "ko" 
                    ? "신한카드 공식 웹사이트의 서비스 소개 페이지입니다."
                    : "Official Shinhan Card service guide pages."}
                </p>
              </section>
            )}
            {visuals?.iframe && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-text flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">📱</span>
                  {language === "ko" ? "서비스 소개" : "Service Guide"}
                </h2>
                <IframeEmbed
                  url={visuals.iframe.url}
                  title={visuals.iframe.title}
                  height={visuals.iframe.height}
                />
                <p className="text-xs text-muted mt-4 text-center italic">
                  {language === "ko" 
                    ? "신한카드 공식 웹사이트의 서비스 소개 페이지입니다."
                    : "Official Shinhan Card service guide page."}
                </p>
              </section>
            )}
            {visuals?.carousel && (
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-text flex items-center gap-2 sm:gap-3">
                  <span className="text-xl sm:text-2xl">📱</span>
                  {language === "ko" ? "서비스 화면" : "Service Screens"}
                </h2>
                <ImageCarousel 
                  images={visuals.carousel} 
                  externalLink={visuals.externalLink}
                />
              </section>
            )}

            {/* System Diagram (if available) */}
            {diagram && <SystemDiagramSection diagram={diagram} />}

            {/* Key Decisions */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-neutral-100 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">💡</span>
                {t("caseDetail.keyDecisions")}
              </h2>
              <div className="space-y-4">
                {content.keyDecisions.map((decision: string, index: number) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-text text-bg flex items-center justify-center font-mono text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-muted leading-relaxed flex-1 pt-0.5">
                        {decision}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Decision Logs (if available) */}
            {decisions && <DecisionLogSection decisions={decisions} />}

            {/* Related Experience (if available) */}
            {experienceIds.length > 0 && (
              <RelatedExperience
                experienceIds={experienceIds}
                experiences={experienceMappings}
              />
            )}

            {/* Execution */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-neutral-100">
                {t("caseDetail.execution")}
              </h2>
              <div className="space-y-8">
                {content.execution.map(
                  (
                    phase: { phase: string; description: string },
                    index: number
                  ) => (
                    <div key={index} className="relative pl-10">
                      {/* Timeline */}
                      <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-text border-4 border-bg shadow-sm" />
                      {index < content.execution.length - 1 && (
                        <div className="absolute left-1.5 top-6 bottom-0 w-0.5 bg-border -mb-8" />
                      )}
                      <h3 className="text-lg font-bold mb-3 text-text">
                        {phase.phase}
                      </h3>
                      <p className="text-muted leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-neutral-100 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">📈</span>
                {t("caseDetail.results")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.results.map(
                  (
                    result: {
                      metric: string;
                      value: string;
                      description: string;
                    },
                    index: number
                  ) => (
                    <Card key={index} hover className="p-6">
                      <div className="text-3xl font-bold mb-3 text-text">
                        {result.value}
                      </div>
                      <div className="font-semibold mb-2 text-text">
                        {result.metric}
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {result.description}
                      </p>
                    </Card>
                  )
                )}
              </div>
            </section>

            {/* Learnings */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-neutral-900 dark:text-neutral-100 flex items-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">💭</span>
                {t("caseDetail.learnings")}
              </h2>
              <div className="space-y-4">
                {content.learnings.map((learning: string, index: number) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <svg
                        className="w-6 h-6 text-accent flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <p className="text-muted leading-relaxed flex-1">
                        {learning}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-premium bg-bg border-t border-border">
          <div className="container-premium max-w-5xl">
            <h2 className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
              <span className="text-xl sm:text-2xl">🔍</span>
              {language === "ko" ? "다른 프로젝트" : "Other Projects"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/case-studies/${project.slug}`}
                  className="group"
                >
                  <Card hover className="p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-wrap gap-2 flex">
                        {project.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="mono">{tag}</Badge>
                        ))}
                      </div>
                      <svg
                        className="w-5 h-5 text-muted group-hover:text-text group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text group-hover:text-accent transition-colors">
                      {getProjectTitle(project.slug, language)}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {getProjectSubtitle(project.slug, language)}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-premium bg-surface2">
        <div className="container-premium max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-text">
            {t("caseDetail.cta.title")}
          </h2>
          <p className="text-lg text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("caseDetail.cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/#contact" size="lg">
              {t("caseDetail.cta.primary")}
            </Button>
            <Button href="/#projects" variant="secondary" size="lg">
              {t("caseDetail.cta.secondary")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
