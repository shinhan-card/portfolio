"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Keyboard } from "lucide-react";

export default function KeyboardHint() {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const hasSeenHint = localStorage.getItem("keyboard-hint-seen");
    if (!hasSeenHint) {
      setTimeout(() => setShow(true), 2000);
    }

    // Listen for custom event to reopen
    const handleReopen = () => setShow(true);
    window.addEventListener("open-keyboard-hint", handleReopen);
    return () => window.removeEventListener("open-keyboard-hint", handleReopen);
  }, []);

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("keyboard-hint-seen", "true");
  };

  if (!show) return null;

  const text = language === "ko"
    ? {
        title: "키보드 단축키",
        shortcuts: [
          { key: "h", desc: "홈" },
          { key: "r", desc: "이력" },
          { key: "p", desc: "프로젝트" },
          { key: "g", desc: "방명록" },
          { key: "c", desc: "Contact" },
        ],
        dismiss: "닫기",
      }
    : {
        title: "Keyboard Shortcuts",
        shortcuts: [
          { key: "h", desc: "Home" },
          { key: "r", desc: "Resume" },
          { key: "p", desc: "Projects" },
          { key: "g", desc: "Guestbook" },
          { key: "c", desc: "Contact" },
        ],
        dismiss: "Got it",
      };

  return (
    <div className="fixed bottom-24 right-8 z-50 max-w-xs animate-fade-in">
      <div className="bg-surface border-2 border-accent/30 rounded-lg shadow-xl p-4 animate-pulse-border">
        <div className="flex items-center gap-2 mb-3">
          <Keyboard className="w-4 h-4 text-accent" />
          <h3 className="text-sm font-semibold text-text">{text.title}</h3>
        </div>
        <div className="space-y-1.5 mb-3">
          {text.shortcuts.map((shortcut) => (
            <div key={shortcut.key} className="flex items-center gap-2 text-xs">
              <kbd className="px-2 py-1 bg-surface border border-border rounded font-mono text-text">
                {shortcut.key}
              </kbd>
              <span className="text-muted">{shortcut.desc}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleDismiss}
          className="text-xs text-accent hover:text-accent2 transition-colors"
        >
          {text.dismiss}
        </button>
      </div>
    </div>
  );
}
