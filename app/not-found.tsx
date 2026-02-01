"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: "Page Not Found",
      subtitle: "The page you're looking for doesn't exist or has been moved.",
      home: "Back to Home",
      projects: "View Projects",
      contact: "Get in Touch",
    },
    ko: {
      title: "페이지를 찾을 수 없습니다",
      subtitle: "요청하신 페이지가 존재하지 않거나 이동되었습니다.",
      home: "홈으로",
      projects: "프로젝트 보기",
      contact: "연락하기",
    },
  };

  const t = texts[language];

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)]">
        <Section background="gray">
          <div className="max-w-2xl mx-auto text-center py-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute top-10 left-10 text-6xl">🔍</div>
              <div className="absolute top-10 right-10 text-6xl">❓</div>
              <div className="absolute bottom-10 left-20 text-5xl">🗺️</div>
              <div className="absolute bottom-10 right-20 text-5xl">🧭</div>
            </div>
            
            {/* Large 404 with emoji */}
            <div className="mb-8 relative">
              <div className="text-8xl mb-4">🤔</div>
              <h1 className="text-9xl md:text-[12rem] font-bold text-muted2 opacity-20 select-none">
                404
              </h1>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 relative">
              {t.title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted mb-12 max-w-lg mx-auto relative">
              {t.subtitle}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/" variant="primary" size="lg">
                {t.home}
              </Button>
              <Button href="/#projects" variant="secondary" size="lg">
                {t.projects}
              </Button>
              <Button href="/#contact" variant="secondary" size="lg">
                {t.contact}
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
