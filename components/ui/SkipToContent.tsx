"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function SkipToContent() {
  const { language } = useLanguage();

  const text = language === "ko" ? "본문으로 건너뛰기" : "Skip to main content";

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
    >
      {text}
    </a>
  );
}
