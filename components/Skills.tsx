"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Section from "./ui/Section";
import RevealOnScroll from "./ui/RevealOnScroll";
import { Zap, FileCheck, Users, Network, ChartLine } from "lucide-react";

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    { text: t("skills.item1"), icon: Zap, emoji: "⚡" },
    { text: t("skills.item2"), icon: FileCheck, emoji: "📋" },
    { text: t("skills.item3"), icon: Users, emoji: "👥" },
    { text: t("skills.item4"), icon: Network, emoji: "🤝" },
    { text: t("skills.item5"), icon: ChartLine, emoji: "📊" },
  ];

  return (
    <Section id="skills" background="gray" separator>
      <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
        <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4">
          💪 Capabilities
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text">{t("skills.title")}</h2>
        <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto">
          {t("skills.subtitle")}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <ul className="space-y-3 sm:space-y-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <RevealOnScroll key={index} delay={index * 80}>
                <li className="flex items-start gap-4 p-6 bg-surface border border-border rounded-lg hover:border-accent/30 transition-all duration-200 group relative overflow-hidden focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-bg">
                  {/* Background Emoji */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 text-5xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
                    {skill.emoji}
                  </div>
                  
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-accent/20 text-accent flex items-center justify-center transition-colors mt-0.5">
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  
                  <p className="text-sm sm:text-base text-text leading-relaxed pt-1 sm:pt-1.5 flex-1">
                    {skill.text}
                  </p>
                </li>
              </RevealOnScroll>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
