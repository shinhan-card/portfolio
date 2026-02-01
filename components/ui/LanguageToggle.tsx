"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSound } from "@/lib/sound/SoundContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const sound = useSound();

  return (
    <div
      className="inline-flex items-center rounded-md border border-border bg-surface p-0.5"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => {
          setLanguage("ko");
          sound?.playToggle(true);
        }}
        className={`
          min-w-[2.25rem] px-2 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg
          ${language === "ko" ? "bg-text text-bg" : "text-muted hover:text-text"}
        `}
        aria-label="Switch to Korean"
        aria-pressed={language === "ko"}
      >
        KO
      </button>
      <button
        type="button"
        onClick={() => {
          setLanguage("en");
          sound?.playToggle(false);
        }}
        className={`
          min-w-[2.25rem] px-2 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-colors duration-200
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg
          ${language === "en" ? "bg-text text-bg" : "text-muted hover:text-text"}
        `}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
      >
        EN
      </button>
    </div>
  );
}
