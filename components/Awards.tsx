"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Section from "./ui/Section";
import Card from "./ui/Card";
import RevealOnScroll from "./ui/RevealOnScroll";

export default function Awards() {
  const { t } = useLanguage();

  const awards = [
    {
      title: t("recognition.award1.title"),
      issuer: t("recognition.award1.issuer"),
      date: t("recognition.award1.date"),
      description: t("recognition.award1.description"),
    },
    {
      title: t("recognition.award2.title"),
      issuer: t("recognition.award2.issuer"),
      date: t("recognition.award2.date"),
      description: t("recognition.award2.description"),
    },
  ];

  return (
    <Section id="awards" separator>
      <div className="text-center mb-16">
        <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4">
          🏆 Recognition
        </p>
        <h2 className="text-4xl font-bold mb-4 text-text">{t("recognition.title")}</h2>
        <p className="text-lg text-muted max-w-2xl mx-auto">
          {t("recognition.subtitle")}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">        {awards.map((award, index) => (
          <RevealOnScroll key={index} delay={index * 100}>
            <Card className="p-5 sm:p-6 md:p-8 group hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-1 text-text group-hover:text-accent transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-sm text-muted2 mb-2">
                    {award.issuer} · {award.date}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    {award.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface2 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <svg className="w-6 h-6 text-text group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </Section>
  );
}
