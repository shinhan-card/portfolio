"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getAllCaseStudies } from "@/data/case-studies";
import { projectFilters } from "@/data/project-metadata";
import { getProjectTitle, getProjectSubtitle } from "@/data/project-titles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectFilters, { FilterOptions } from "@/components/ProjectFilters";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import CaseCover from "@/lib/visual/CaseCover";
import RevealOnScroll from "@/components/ui/RevealOnScroll";
import JsonLd from "@/components/JsonLd";
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  const { t, language } = useLanguage();
  const allProjects = getAllCaseStudies();

  // Filter state
  const [activeFilters, setActiveFilters] = useState<FilterOptions>({
    domain: [],
    roleType: [],
    focus: [],
  });

  // Extract unique filter values
  const availableFilters = useMemo(() => {
    const domains = new Set<string>();
    const roleTypes = new Set<string>();
    const focuses = new Set<string>();

    Object.values(projectFilters).forEach((filter) => {
      filter.domain.forEach((d) => domains.add(d));
      filter.roleType.forEach((r) => roleTypes.add(r));
      filter.focus.forEach((f) => focuses.add(f));
    });

    return {
      domains: Array.from(domains).sort(),
      roleTypes: Array.from(roleTypes).sort(),
      focuses: Array.from(focuses).sort(),
    };
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    const hasFilters =
      activeFilters.domain.length > 0 ||
      activeFilters.roleType.length > 0 ||
      activeFilters.focus.length > 0;

    if (!hasFilters) return allProjects;

    return allProjects.filter((project) => {
      const metadata = projectFilters[project.slug];
      if (!metadata) return false;

      const matchesDomain =
        activeFilters.domain.length === 0 ||
        activeFilters.domain.some((d) => metadata.domain.includes(d));

      const matchesRole =
        activeFilters.roleType.length === 0 ||
        activeFilters.roleType.some((r) => metadata.roleType.includes(r));

      const matchesFocus =
        activeFilters.focus.length === 0 ||
        activeFilters.focus.some((f) => metadata.focus.includes(f));

      return matchesDomain && matchesRole && matchesFocus;
    });
  }, [allProjects, activeFilters]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: language === "ko" ? "프로젝트" : "Projects",
    description: language === "ko" 
      ? "Shinhan Card 프로덕트 매니저의 주요 프로젝트 포트폴리오"
      : "Product portfolio of a Product Manager at Shinhan Card",
    url: "https://ericyoon.com/projects",
  };

  const texts = {
    en: {
      back: "Back to Home",
      title: "All Projects",
      subtitle: "Complete portfolio of product initiatives in payments, authentication, and fintech infrastructure",
      featured: "Featured Projects",
      additional: "Additional Projects",
      readMore: "Read project",
    },
    ko: {
      back: "홈으로",
      title: "전체 프로젝트",
      subtitle: "결제·인증·핀테크 인프라 영역의 전체 제품 기획 포트폴리오",
      featured: "주요 프로젝트",
      additional: "기타 프로젝트",
      readMore: "자세히 보기",
    },
  };

  const text = texts[language];

  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main id="main-content" className="pt-24 min-h-screen">
        <Section background="gray">
          <div className="max-w-6xl mx-auto">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted hover:text-text mb-12 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              {text.back}
            </Link>

            {/* Header */}
            <div className="text-center mb-20 relative">
              {/* Background decoration */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                <div className="absolute top-0 left-1/4 text-8xl">💼</div>
                <div className="absolute top-0 right-1/4 text-8xl">🚀</div>
              </div>
              
              <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4 relative">
                <span className="text-base">💼</span> Portfolio
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-5 sm:mb-6 relative">
                {text.title}
              </h1>
            <p className="text-xl text-muted max-w-3xl mx-auto relative">
              {text.subtitle}
            </p>
          </div>

          {/* Filters */}
          <ProjectFilters
            onFilterChange={setActiveFilters}
            activeFilters={activeFilters}
            availableFilters={availableFilters}
          />

          {/* Results count */}
          {filteredProjects.length < allProjects.length && (
            <div className="mb-8 text-center">
              <p className="text-sm text-muted">
                Showing <strong className="text-text">{filteredProjects.length}</strong> of{" "}
                <strong className="text-text">{allProjects.length}</strong> projects
              </p>
            </div>
          )}

          {/* No results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted mb-4">
                No projects match your filters
              </p>
              <button
                onClick={() =>
                  setActiveFilters({ domain: [], roleType: [], focus: [] })
                }
                className="text-accent hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Featured Projects */}
            {featuredProjects.length > 0 && (
              <div className="mb-20">
                <h2 className="text-2xl font-bold text-text mb-8 flex items-center gap-2">
                  <span>⭐</span>
                  {text.featured}
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <RevealOnScroll key={project.slug} delay={index * 150}>
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="group block h-full"
                      >
                        <Card hover className="overflow-hidden h-full flex flex-col group-hover:shadow-2xl">
                          <div className="relative overflow-hidden">
                            <CaseCover 
                              type={
                                project.slug === "integrated-authentication-module" ? "authentication" :
                                project.slug === "cardholder-identity-verification" ? "compliance" :
                                project.slug === "open-banking-account-payment" ? "openbanking" :
                                project.slug === "account-payment-launch" ? "payments" :
                                project.slug === "online-payment-ux-redesign" ? "ux" :
                                project.slug === "authentication-cost-optimization" ? "cost" :
                                "rd"
                              }
                              className="w-full transform group-hover:scale-105 transition-transform duration-500" 
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-8 flex-1">
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
                            <h3 className="text-2xl font-bold mb-3 text-text group-hover:text-accent transition-colors">
                              {getProjectTitle(project.slug, language)}
                            </h3>
                            <p className="text-sm text-muted mb-6 leading-relaxed line-clamp-3">
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
              </div>
            )}

            {/* Additional Projects */}
            {otherProjects.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-text mb-8 flex items-center gap-2">
                  <span>📂</span>
                  {text.additional}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <RevealOnScroll key={project.slug} delay={index * 100}>
                      <Link
                        href={`/case-studies/${project.slug}`}
                        className="group block h-full"
                      >
                        <Card hover className="overflow-hidden h-full flex flex-col">
                          <div className="p-6 flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <Badge variant="mono">
                                {String(featuredProjects.length + index + 1).padStart(2, "0")}
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
                            <h3 className="text-lg font-bold mb-3 text-text group-hover:text-accent transition-colors">
                              {getProjectTitle(project.slug, language)}
                            </h3>
                            <p className="text-sm text-muted mb-4 leading-relaxed line-clamp-2">
                              {getProjectSubtitle(project.slug, language)}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} className="text-xs">{tag}</Badge>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </Link>
                    </RevealOnScroll>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
