"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

/**
 * Sub-Hero Narrative
 * Translates abstract Hero value into concrete scope
 * Positioned immediately below Hero
 */
export default function SubHeroNarrative() {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-16 bg-surface relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-10 right-20 text-8xl">⚙️</div>
        <div className="absolute bottom-10 left-20 text-8xl">📊</div>
      </div>

      <div className="container-premium max-w-4xl relative z-10">
        <div className="text-center space-y-4">
          {/* First line - scope */}
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t("subhero.line1")}
          </p>
          
          {/* Second line - decision context */}
          <p className="text-base sm:text-lg text-muted leading-relaxed">
            {t("subhero.line2")}
          </p>
          
          {/* Optional third line - role framing */}
          <p className="text-sm sm:text-base text-muted2 leading-relaxed max-w-3xl mx-auto">
            {t("subhero.line3")}
          </p>
        </div>
      </div>
    </section>
  );
}
