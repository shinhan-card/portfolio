"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { resumeData } from "@/data/resume";
import { findRelatedProjects } from "@/data/resume-project-mapping";
import { useScrollToHighlight } from "@/hooks/useScrollToHighlight";
import Link from "next/link";
import RelatedProjectLinks from "@/components/RelatedProjectLinks";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileCheck, 
  Shield, 
  Lightbulb,
  FileText,
  Target,
  MapPin,
  Mail,
  Linkedin,
  Download
} from "lucide-react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { getProfilePageSchema } from "@/lib/seo/structured-data";

export default function ResumePage() {
  const { language } = useLanguage();
  const lang = language === "ko" ? "ko" : "en";
  
  // Auto-scroll and highlight if hash present
  useScrollToHighlight();

  const texts = {
    ko: {
      back: "홈으로",
      coreFocus: "핵심 역량",
      selectedImpact: "주요 성과",
      summary: "소개",
      experience: "경력",
      present: "현재",
      military: "군 경력",
      education: "학력",
      awards: "수상",
      certifications: "자격증",
      patents: "특허",
      contact: "연락처",
      downloadResume: "이력서 다운로드",
      viewLinkedIn: "LinkedIn 프로필",
    },
    en: {
      back: "Back to Home",
      coreFocus: "Core Focus",
      selectedImpact: "Selected Impact",
      summary: "Summary",
      experience: "Experience",
      present: "Present",
      military: "Military Service",
      education: "Education",
      awards: "Awards & Recognition",
      certifications: "Certifications",
      patents: "Patents",
      contact: "Contact",
      downloadResume: "Download Resume",
      viewLinkedIn: "View LinkedIn Profile",
    },
  };

  const t = texts[lang];

  return (
    <>
      <JsonLd data={getProfilePageSchema()} />
      <Header />
      <main className="pt-24 bg-bg">
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {/* Back link and AI Summary */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-muted hover:text-text transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
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
              {t.back}
            </Link>
            <button
              type="button"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent("open-ai-panel", {
                    detail: {
                      customPrompt: lang === "ko"
                        ? "이 사람의 경력과 전문성을 간단히 요약해주세요."
                        : "Briefly summarize this person's experience and expertise.",
                    },
                  })
                );
              }}
              className="inline-flex items-center gap-1.5 text-xs text-muted2 hover:text-accent transition-colors border border-border hover:border-accent/30 rounded-md px-3 py-1.5 bg-surface2/50 hover:bg-surface2"
            >
              <span className="opacity-80">✨</span>
              <span>{lang === "ko" ? "AI로 경력 요약" : "Summarize experience with AI"}</span>
            </button>
          </div>

          {/* Header */}
          <div className="mb-16 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
              <div className="absolute top-0 left-0 text-8xl">📄</div>
              <div className="absolute top-0 right-0 text-8xl">💼</div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-text mb-2 flex items-center gap-2 sm:gap-3 relative">
              <span className="text-3xl sm:text-4xl md:text-5xl">👨‍💼</span>
              윤태웅 (Eric Yoon)
            </h1>
            <p className="text-2xl font-semibold text-muted mb-4 relative">
              {resumeData.currentRole[lang]}
            </p>
            <div className="flex items-center gap-2 text-muted2 mb-6">
              <MapPin className="w-4 h-4" />
              <span>{resumeData.location[lang]}</span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <Button
                href={resumeData.contact.linkedin}
                variant="secondary"
                size="sm"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                {t.viewLinkedIn}
              </Button>
              <Button href="/resume.pdf" variant="secondary" size="sm" download>
                <Download className="w-4 h-4 mr-2" />
                {t.downloadResume}
              </Button>
            </div>
          </div>

          <div className="hairline mb-12" />

          {/* Core Focus */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">💡</span>
              <Lightbulb className="w-5 h-5 text-accent" strokeWidth={2} />
              <h2 className="text-xl sm:text-2xl font-bold text-text">{t.coreFocus}</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.coreFocus[lang].map((focus) => (
                <Badge key={focus} variant="accent" className="text-base px-4 py-2">
                  {focus}
                </Badge>
              ))}
            </div>
          </div>

          {/* Selected Impact with Project Links */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎯</span>
              <Target className="w-5 h-5 text-accent shrink-0" strokeWidth={2} />
              <h2 className="text-2xl font-bold text-text">{t.selectedImpact}</h2>
            </div>
            <ul className="space-y-4">
              {resumeData.selectedImpact[lang].map((item, idx) => {
                const relatedProjects = findRelatedProjects(item);
                return (
                  <li key={idx} className="text-muted leading-relaxed">
                    <div className="flex items-start gap-3">
                      <span className="text-accent mt-1.5 shrink-0">•</span>
                      <div className="flex-1">
                        <span>{item}</span>
                        {relatedProjects.length > 0 && (
                          <RelatedProjectLinks
                            projectSlugs={relatedProjects}
                            compact
                          />
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hairline mb-12" />

          {/* Summary */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">📝</span>
              <FileText className="w-5 h-5 text-accent shrink-0" strokeWidth={2} />
              <h2 className="text-2xl font-bold text-text">{t.summary}</h2>
            </div>
            <p className="text-lg text-muted leading-relaxed prose-premium whitespace-pre-line">
              {resumeData.summary[lang]}
            </p>
          </div>

          <div className="hairline mb-12" />

          {/* Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">💼</span>
              <Briefcase className="w-5 h-5 text-accent" strokeWidth={2} />
              <h2 className="text-2xl font-bold text-text">{t.experience}</h2>
            </div>

            {resumeData.experience[lang].map((exp, expIdx) => (
              <div 
                key={expIdx} 
                id={`exp-shinhan-${expIdx}`}
                className="mb-12 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-text mb-6">{exp.company}</h3>
                
                <div className="space-y-8">
                  {exp.roles.map((role, roleIdx) => (
                    <div key={roleIdx} className="relative pl-8 border-l-2 border-border">
                      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-accent border-2 border-bg" />
                      
                      <div className="mb-4">
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div>
                            <h4 className="text-lg font-semibold text-text">
                              {role.title}
                              {role.current && (
                                <Badge variant="accent" emoji="✨" className="ml-3">
                                  {t.present}
                                </Badge>
                              )}
                            </h4>
                            {role.department && (
                              <p className="text-sm text-muted2 mt-1">
                                {role.department}
                              </p>
                            )}
                          </div>
                          <p className="text-sm font-mono text-muted2 whitespace-nowrap">
                            {role.period}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-3">
                        {role.highlights.map((highlight, hIdx) => {
                          const relatedProjects = findRelatedProjects(highlight);
                          return (
                            <li key={hIdx} className="text-muted leading-relaxed">
                              <div className="flex items-start gap-2">
                                <span className="text-accent mt-1.5 shrink-0">•</span>
                                <div className="flex-1">
                                  <span>{highlight}</span>
                                  {relatedProjects.length > 0 && (
                                    <RelatedProjectLinks
                                      projectSlugs={relatedProjects}
                                      compact
                                    />
                                  )}
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="hairline mb-12" />

          {/* Military Service */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🪖</span>
              <Shield className="w-5 h-5 text-accent" strokeWidth={2} />
              <h2 className="text-2xl font-bold text-text">{t.military}</h2>
            </div>

            <Card className="p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold text-text mb-1">
                    {resumeData.military[lang].branch}
                  </h4>
                  <p className="text-muted mb-1">{resumeData.military[lang].unit}</p>
                  <p className="text-sm text-muted2">{resumeData.military[lang].rank}</p>
                </div>
                <p className="text-sm font-mono text-muted2">
                  {resumeData.military[lang].period}
                </p>
              </div>
            </Card>
          </div>

          <div className="hairline mb-12" />

          {/* Education */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🎓</span>
              <GraduationCap className="w-5 h-5 text-accent" strokeWidth={2} />
              <h2 className="text-2xl font-bold text-text">{t.education}</h2>
            </div>

            <Card className="p-6">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h4 className="text-lg font-semibold text-text mb-1">
                    {resumeData.education[lang].school}
                  </h4>
                  <p className="text-muted mb-1">
                    {resumeData.education[lang].degree} · {resumeData.education[lang].major}
                  </p>
                </div>
                <p className="text-sm font-mono text-muted2">
                  {resumeData.education[lang].period}
                </p>
              </div>
            </Card>
          </div>

          <div className="hairline mb-12" />

          {/* Awards & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Awards */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">🏆</span>
                <Award className="w-5 h-5 text-accent" strokeWidth={2} />
                <h2 className="text-xl font-bold text-text">{t.awards}</h2>
              </div>
              
              <div className="space-y-4">
                {resumeData.awards[lang].map((award, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-semibold text-text mb-1">{award.title}</h4>
                    <p className="text-sm text-muted2">
                      {award.issuer} · {award.date}
                    </p>
                    {award.description && (
                      <p className="text-sm text-muted mt-2">{award.description}</p>
                    )}
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl">📜</span>
                <FileCheck className="w-5 h-5 text-accent" strokeWidth={2} />
                <h2 className="text-xl font-bold text-text">{t.certifications}</h2>
              </div>
              
              <div className="space-y-4">
                {resumeData.certifications.map((cert, idx) => (
                  <Card key={idx} className="p-4">
                    <h4 className="font-semibold text-text mb-1">{cert.title}</h4>
                    {cert.issuer && (
                      <p className="text-sm text-muted2">{cert.issuer}</p>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Patents */}
          {resumeData.patents[lang].length > 0 && (
            <>
              <div className="hairline mb-12" />
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">💡</span>
                  <Lightbulb className="w-5 h-5 text-accent" strokeWidth={2} />
                  <h2 className="text-2xl font-bold text-text">{t.patents}</h2>
                </div>
                
                {resumeData.patents[lang].map((patent, idx) => (
                  <Card key={idx} className="p-6">
                    <h4 className="text-lg font-semibold text-text mb-2">
                      {patent.title}
                    </h4>
                    {patent.description && (
                      <p className="text-muted">{patent.description}</p>
                    )}
                  </Card>
                ))}
              </div>
            </>
          )}

          {/* Contact CTA */}
          <div className="hairline mb-12" />
          
          <div className="text-center py-12 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute top-0 left-1/4 text-6xl">✉️</div>
              <div className="absolute top-0 right-1/4 text-6xl">📞</div>
            </div>
            
            <h3 className="text-2xl font-bold text-text mb-4 flex items-center justify-center gap-3 relative">
              <span>📬</span>
              {t.contact}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                href={`mailto:${resumeData.contact.email}`}
                variant="primary"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                {resumeData.contact.email}
              </Button>
              <Button
                href={resumeData.contact.linkedin}
                variant="secondary"
                size="lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
    <Footer />
    </>
  );
}
