"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Section from "./ui/Section";
import Button from "./ui/Button";
import RevealOnScroll from "./ui/RevealOnScroll";
import GuestbookForm from "./guestbook/GuestbookForm";
import GuestbookList from "./guestbook/GuestbookList";

export default function Contact() {
  const { t, language } = useLanguage();
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
    setRefreshTrigger((prev) => prev + 1);
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <Section id="contact" background="gray" separator>
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto relative">
          {/* Contact Section */}
          <div className="text-center mb-12 sm:mb-16 relative px-4 sm:px-0">
            {/* Decorative background emojis */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute top-0 left-10 text-6xl">📧</div>
              <div className="absolute top-0 right-10 text-6xl">💬</div>
              <div className="absolute bottom-0 left-1/4 text-5xl">🤝</div>
              <div className="absolute bottom-0 right-1/4 text-5xl">✨</div>
            </div>
            
            <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-4 relative">
              👋 {t("contact.sectionLabel")}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-5 sm:mb-6 text-text relative">
              {t("contact.title")}
            </h2>
            <p className="text-base sm:text-lg text-muted mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed relative">
              {t("contact.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {siteConfig.links.linkedin && (
                <Button href={siteConfig.links.linkedin} size="lg">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  {t("contact.linkedin")}
                </Button>
              )}
              {siteConfig.links.email && (
                <Button
                  href={`mailto:${siteConfig.links.email}`}
                  variant="secondary"
                  size="lg"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {t("contact.email")}
                </Button>
              )}
              <Button href="/resume.pdf" variant="secondary" size="lg" download>
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("contact.downloadResume")}
              </Button>
            </div>
          </div>

          {/* Guestbook Section */}
          <div className="mt-24 pt-16 border-t border-border">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-text mb-4 flex items-center justify-center gap-3">
                <span className="text-3xl">📖</span>
                {language === "ko" ? "방명록" : "Guestbook"}
              </h3>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {language === "ko" 
                  ? "메시지를 남기고 다른 방문자들과 소통해보세요" 
                  : "Leave a message and connect with others visiting this portfolio"}
              </p>
            </div>

            {showSuccess && (
              <div className="mb-8 p-4 bg-accent/10 border border-accent/30 rounded-lg text-center animate-fade-in shadow-sm">
                <p className="text-accent font-medium flex items-center justify-center gap-2">
                  <span className="text-xl">✅</span>
                  {language === "ko" ? "메시지가 등록되었습니다!" : "Message submitted successfully!"}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-text mb-4 sm:mb-6 flex items-center gap-2">
                  <span>✍️</span>
                  {language === "ko" ? "메시지 남기기" : "Leave a Message"}
                </h4>
                <GuestbookForm onSuccess={handleSuccess} />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-text mb-4 sm:mb-6 flex items-center gap-2">
                  <span>💌</span>
                  {language === "ko" ? "최근 메시지" : "Recent Messages"}
                </h4>
                <GuestbookList refreshTrigger={refreshTrigger} />
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </Section>
  );
}
