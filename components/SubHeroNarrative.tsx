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
        <div className="space-y-3 sm:space-y-4">
          {/* Small section label */}
          <p className="text-xs font-mono uppercase tracking-widest text-muted2 text-center mb-4">
            {t("scope.title")}
          </p>
          
          {/* Three concrete problem domains */}
          <div className="space-y-2 text-sm sm:text-base text-muted leading-relaxed">
            <p className="flex items-start gap-2 justify-center">
              <span className="text-accent mt-1">•</span>
              <span className="flex-1 max-w-2xl">{t("scope.line1")}</span>
            </p>
            <p className="flex items-start gap-2 justify-center">
              <span className="text-accent mt-1">•</span>
              <span className="flex-1 max-w-2xl">{t("scope.line2")}</span>
            </p>
            <p className="flex items-start gap-2 justify-center">
              <span className="text-accent mt-1">•</span>
              <span className="flex-1 max-w-2xl">{t("scope.line3")}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
