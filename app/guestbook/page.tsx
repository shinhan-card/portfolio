"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import GuestbookForm from "@/components/guestbook/GuestbookForm";
import GuestbookList from "@/components/guestbook/GuestbookList";
import Section from "@/components/ui/Section";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GuestbookPage() {
  const { language } = useLanguage();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const texts = {
    en: {
      back: "Back to Home",
      title: "Guestbook",
      subtitle: "Leave a message and connect with others visiting this portfolio",
      recentTitle: "Recent Messages",
      success: "Message submitted successfully!",
    },
    ko: {
      back: "홈으로",
      title: "방명록",
      subtitle: "메시지를 남기고 다른 방문자들과 소통해보세요",
      recentTitle: "최근 메시지",
      success: "메시지가 등록되었습니다!",
    },
  };

  const t = texts[language];

  const handleSuccess = () => {
    setShowSuccess(true);
    setRefreshTrigger((prev) => prev + 1);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="pt-24">
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-muted hover:text-text mb-8 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-md"
          >
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            {t.back}
          </Link>

          <div className="text-center mb-16 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
              <div className="absolute top-0 left-10 text-8xl">📝</div>
              <div className="absolute top-0 right-10 text-8xl">💬</div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-text flex items-center justify-center gap-3">
              <span>📖</span>
              {t.title}
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">{t.subtitle}</p>
          </div>

          {showSuccess && (
            <div className="mb-8 p-4 bg-accent/10 border border-accent/30 rounded-lg text-center animate-fade-in shadow-sm">
              <p className="text-accent font-medium flex items-center justify-center gap-2">
                <span className="text-xl">✅</span>
                {t.success}
              </p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <GuestbookForm onSuccess={handleSuccess} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span>💌</span>
                {t.recentTitle}
              </h3>
              <GuestbookList refreshTrigger={refreshTrigger} />
            </div>
          </div>
        </div>
      </Section>
    </main>
    <Footer />
    </>
  );
}
