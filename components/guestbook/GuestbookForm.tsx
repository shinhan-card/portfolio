"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useSound } from "@/lib/sound/SoundContext";
import Button from "../ui/Button";

interface GuestbookFormProps {
  onSuccess: () => void;
}

export default function GuestbookForm({ onSuccess }: GuestbookFormProps) {
  const { language } = useLanguage();
  const sound = useSound();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const texts = {
    en: {
      title: "Leave a Message",
      nameLabel: "Name (optional)",
      namePlaceholder: "Your name",
      companyLabel: "Company/Role (optional)",
      companyPlaceholder: "e.g., Product Manager at Acme",
      messageLabel: "Message",
      messagePlaceholder: "Share your thoughts...",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Thank you for your message!",
      charCount: "characters",
    },
    ko: {
      title: "방명록",
      nameLabel: "이름 (선택)",
      namePlaceholder: "이름",
      companyLabel: "소속/직책 (선택)",
      companyPlaceholder: "예: Acme 프로덕트 매니저",
      messageLabel: "메시지",
      messagePlaceholder: "메시지를 남겨주세요...",
      submit: "등록",
      submitting: "등록 중...",
      success: "메시지 감사합니다!",
      charCount: "자",
    },
  };

  const t = texts[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!message.trim()) {
      setError(language === "ko" ? "메시지를 입력해주세요" : "Please enter a message");
      return;
    }

    if (message.length > 300) {
      setError(language === "ko" ? "메시지는 300자 이내로 작성해주세요" : "Message must be 300 characters or less");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || null,
          company: company.trim() || null,
          message: message.trim(),
          honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      // Reset form
      setName("");
      setCompany("");
      setMessage("");
      sound?.playSuccess();
      onSuccess();
    } catch (err: any) {
      setError(err.message || (language === "ko" ? "오류가 발생했습니다" : "An error occurred"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold text-text mb-6">{t.title}</h3>
      </div>

      {/* Honeypot field - hidden from users */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: "absolute", left: "-9999px" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
          {t.nameLabel}
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={30}
          className="w-full px-4 py-2 bg-surface border border-border rounded-lg text-text placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder={t.namePlaceholder}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-muted mb-2">
          {t.companyLabel}
        </label>
        <input
          type="text"
          id="company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          maxLength={40}
          className="w-full px-4 py-2 bg-surface border border-border rounded-lg text-text placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          placeholder={t.companyPlaceholder}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
          {t.messageLabel} *
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={300}
          rows={4}
          required
          className="w-full px-4 py-2 bg-surface border border-border rounded-lg text-text placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
          placeholder={t.messagePlaceholder}
        />
        <p className="text-xs text-muted2 mt-1">
          {message.length}/300 {t.charCount}
        </p>
      </div>

      {error && (
        <div className="p-3 bg-surface2 border border-border rounded-lg text-sm text-muted animate-fade-in">
          <span className="text-lg mr-2">⚠️</span>
          {error}
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full relative">
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t.submitting}
          </span>
        ) : (
          t.submit
        )}
      </Button>
    </form>
  );
}
