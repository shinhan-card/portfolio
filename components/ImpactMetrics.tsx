"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./ui/Card";
import Section from "./ui/Section";
import RevealOnScroll from "./ui/RevealOnScroll";
import { Workflow, CreditCard, Shield } from "lucide-react";

export default function ImpactMetrics() {
  const { t } = useLanguage();

  const metrics = [
    { 
      icon: Workflow,
      emoji: "🔗",
      label: t("impact.metric1.label"), 
      value: t("impact.metric1.value"), 
      description: t("impact.metric1.description") 
    },
    { 
      icon: CreditCard,
      emoji: "💳",
      label: t("impact.metric2.label"), 
      value: t("impact.metric2.value"), 
      description: t("impact.metric2.description") 
    },
    { 
      icon: Shield,
      emoji: "🛡️",
      label: t("impact.metric3.label"), 
      value: t("impact.metric3.value"), 
      description: t("impact.metric3.description") 
    },
  ];

  return (
    <Section background="gray" separator>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <RevealOnScroll key={index} delay={index * 100}>
              <Card hover className="p-5 sm:p-6 md:p-8 text-center h-full relative overflow-hidden group">
                {/* Background Emoji */}
                <div className="absolute top-4 right-4 text-6xl opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                  {metric.emoji}
                </div>
                
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" strokeWidth={2} />
                  </div>
                </div>
                
                <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-3">
                  {metric.label}
                </p>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-text">
                  {metric.value}
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed whitespace-pre-line max-w-prose mx-auto">
                  {metric.description}
                </p>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    </Section>
  );
}
