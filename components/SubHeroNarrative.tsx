"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Problem Space / Scope Section
 * Concrete description of problem domains
 * NOT philosophical - specific areas of work
 */
export default function SubHeroNarrative() {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-12 bg-surface border-t border-border relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none">
        <div className="absolute top-10 right-20 text-7xl">🔐</div>
        <div className="absolute bottom-10 left-20 text-7xl">💳</div>
      </div>

      <div className="container-premium max-w-4xl relative z-10">
        <div className="space-y-4 sm:space-y-5 text-center">
          {/* Section title with emoji */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-text">
            {t("scope.title")}
          </h2>
          
          {/* Three working style points - center aligned */}
          <div className="space-y-2 text-sm sm:text-base text-muted leading-relaxed max-w-3xl mx-auto">
            <p className="flex items-start gap-2">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span className="text-left">{t("scope.line1")}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span className="text-left">{t("scope.line2")}</span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-accent mt-1 flex-shrink-0">•</span>
              <span className="text-left">{t("scope.line3")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
