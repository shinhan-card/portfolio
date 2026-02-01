"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./ui/Card";
import { Brain, Network, Users } from "lucide-react";

/**
 * Thinking Frame - How I approach problems
 * Not skills, but thinking patterns
 */
export default function ThinkingFrame() {
  const { t } = useLanguage();

  const frames = [
    {
      id: "constraints",
      icon: Brain,
      titleKey: "thinking.constraints.title",
      descKey: "thinking.constraints.desc",
    },
    {
      id: "systems",
      icon: Network,
      titleKey: "thinking.systems.title",
      descKey: "thinking.systems.desc",
    },
    {
      id: "organizations",
      icon: Users,
      titleKey: "thinking.organizations.title",
      descKey: "thinking.organizations.desc",
    },
  ];

  return (
    <section className="section-premium bg-bg">
      <div className="container-premium max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text mb-4">
            {t("thinking.title")}
          </h2>
          <p className="text-base text-muted max-w-2xl mx-auto">
            {t("thinking.subtitle")}
          </p>
        </div>

        {/* Thinking patterns grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {frames.map((frame) => {
            const Icon = frame.icon;
            return (
              <Card
                key={frame.id}
                className="p-6 hover:border-accent/30 transition-colors group"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-text mb-3">
                  {t(frame.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {t(frame.descKey)}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
