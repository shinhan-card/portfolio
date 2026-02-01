"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getAllCaseStudies } from "@/data/case-studies";
import { getProjectTitle, getProjectSubtitle } from "@/data/project-titles";
import Section from "./ui/Section";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import CaseCover from "@/lib/visual/CaseCover";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function FeaturedCaseStudies() {
  const { t, language } = useLanguage();
  const allProjects = getAllCaseStudies();
  const featuredProjects = allProjects.filter((p) => p.featured);
  const otherProjects = allProjects.filter((p) => !p.featured);

  const getCoverType = (slug: string) => {
    if (slug === "integrated-authentication-module") return "authentication";
    if (slug === "cardholder-identity-verification") return "compliance";
    if (slug === "open-banking-account-payment") return "openbanking";
    if (slug === "account-payment-launch") return "payments";
    if (slug === "online-payment-ux-redesign") return "ux";
    if (slug === "authentication-cost-optimization") return "cost";
    return "rd";
  };

  return (
    <Section id="projects" background="gray" separator>
      <div className="text-center mb-12 sm:mb-16">
        <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4">
          💼 Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-text px-4">
          {t("caseStudies.title")}
        </h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto px-4">
          {t("caseStudies.subtitle")}
        </p>
      </div>

      {/* Featured Projects - Large Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
        {featuredProjects.map((project, index) => (
          <RevealOnScroll key={project.slug} delay={index * 150}>
            <Link href={`/case-studies/${project.slug}`} className="group block">
              <Card hover className="overflow-hidden h-full flex flex-col group-hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <CaseCover 
                    type={getCoverType(project.slug)}
                    className="w-full transform group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-5 sm:p-6 md:p-8 flex-1">
                  <div className="flex items-start justify-between mb-6">
                    <Badge variant="accent" emoji="⭐">Featured</Badge>
                    <svg
                      className="w-5 h-5 text-muted2 group-hover:text-accent group-hover:translate-x-2 transition-all duration-300"
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
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-text group-hover:text-accent transition-colors">
                    {getProjectTitle(project.slug, language)}
                  </h3>
                  <p className="text-sm text-muted mb-4 sm:mb-6 leading-relaxed">
                    {getProjectSubtitle(project.slug, language)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      {/* Other Projects - Compact Cards */}
      {otherProjects.length > 0 && (
        <div className="mb-10 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-bold text-text mb-4 sm:mb-6 flex items-center gap-2 px-4 sm:px-0">
            <span>📂</span>
            {t("caseStudies.additionalProjects") || "Additional Projects"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {otherProjects.map((project, index) => (
              <RevealOnScroll key={project.slug} delay={index * 100 + 300}>
                <Link href={`/case-studies/${project.slug}`} className="group block h-full">
                  <Card hover className="p-3 sm:p-4 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="mono" className="text-xs px-2 py-1">
                        {String(index + 3).padStart(2, "0")}
                      </Badge>
                      <svg
                        className="w-4 h-4 text-muted2 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200"
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
                    <h4 className="text-sm sm:text-base font-bold mb-2 text-text group-hover:text-accent transition-colors line-clamp-2">
                      {getProjectTitle(project.slug, language)}
                    </h4>
                    <p className="text-xs text-muted leading-relaxed line-clamp-3 sm:line-clamp-2 mb-2 sm:mb-3 flex-1">
                      {getProjectSubtitle(project.slug, language)}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} className="text-xs px-2 py-0.5">{tag}</Badge>
                      ))}
                    </div>
                  </Card>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      )}

      <div className="text-center">
        <Button href="/projects" variant="secondary" size="lg">
          {t("caseStudies.viewAll")}
        </Button>
      </div>
    </Section>
  );
}
