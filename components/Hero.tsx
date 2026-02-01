"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Button from "./ui/Button";
import Badge from "./ui/Badge";
import FloatingEmojis from "./ui/FloatingEmojis";
import AIButton from "./ui/AIButton";

export default function Hero() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax values - slower for background layers
  const gradientY = scrollY * 0.3;
  const gridY = scrollY * 0.5;

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Hero background image - laptop stickers */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.35] dark:opacity-[0.45]"
        style={{
          backgroundImage: "url('/images/hero/laptop-stickers.png')",
          filter: "saturate(0.9)",
          transform: `translateY(${gradientY * 0.5}px) scale(1.1)`,
        }}
      />
      
      {/* Gradient overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg/70"
      />
      
      {/* Decorative floating emojis */}
      <FloatingEmojis 
        emojis={["💳", "🔐", "🚀", "⚡", "🎯", "💡"]} 
        density="high"
      />
      <div className="container-premium relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            {/* Name — H1, largest, primary */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-4 sm:mb-5 tracking-tight">
              {t("hero.name")}
            </h1>

            {/* Role & Company — H2, unified line */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-6 sm:mb-8">
              {t("hero.roleCompany")}
            </h2>

            {/* Tagline — strong single sentence */}
            <p className="text-base sm:text-lg md:text-xl text-muted2 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              {t("hero.tagline")}
            </p>

            {/* Profile photo — circular crop, centered with decorative ring */}
            <div className="flex justify-center mb-10 sm:mb-12">
              <div className="relative group">
                {/* Decorative rotating ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent blur-xl group-hover:blur-2xl transition-all duration-500" />
                
                {/* Profile image */}
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-accent/20 hover:ring-accent/40 bg-surface2 shrink-0 transition-all duration-300 shadow-xl hover:shadow-2xl">
                  <Image
                    src="/images/profile.png"
                    alt="Eric Yoon"
                    fill
                    className="object-cover object-center scale-100"
                    sizes="(max-width: 768px) 144px, 176px"
                    priority
                  />
                </div>
                
                {/* Status badge */}
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-accent rounded-full ring-4 ring-bg shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-xs text-white">✓</span>
                </div>
              </div>
            </div>

            {/* CTAs — Three options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/resume" size="lg">
                {t("hero.cta.primary")}
              </Button>
              <Button href="/#projects" variant="secondary" size="lg">
                {t("hero.cta.secondary")}
              </Button>
              <Button href="/projects" variant="ghost" size="lg">
                {t("hero.cta.all")}
              </Button>
            </div>
            {/* AI entry — subtle, integrated */}
            <div className="mt-6 flex flex-col items-center gap-2">
              <AIButton
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent("open-ai-panel", { detail: { presetId: "summary" } })
                  );
                }}
                size="lg"
                aria-label={t("hero.cta.ai")}
              >
                <span className="opacity-80">✨</span>
                <span className="text-sm">{t("hero.cta.ai")}</span>
              </AIButton>
              <p className="text-xs text-muted2">
                {t("hero.ai.helper")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - fixed to section bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-border rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted rounded-full" />
        </div>
      </div>
    </section>
  );
}
