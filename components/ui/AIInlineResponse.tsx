"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./Card";

interface AIInlineResponseProps {
  prompt: string;
  context?: string;
  layout?: "brief" | "narration" | "executive";
  onClose?: () => void;
}

/**
 * Context-local AI response component
 * Shows AI output inline near where it was triggered
 */
export default function AIInlineResponse({
  prompt,
  context,
  layout = "brief",
  onClose,
}: AIInlineResponseProps) {
  const { language, t } = useLanguage();
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch AI response on mount
  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const res = await fetch("/api/ai", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: prompt,
            lang: language,
            mode: "recruiter",
            context,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to generate response");
          return;
        }

        setResponse(data.response);
      } catch (err) {
        setError(
          language === "ko"
            ? "응답 생성 실패"
            : "Failed to generate response"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchResponse();
  }, [prompt, language, context]);

  const layoutConfig = {
    brief: {
      title: language === "ko" ? "AI 요약" : "AI Brief",
      icon: "📝",
    },
    narration: {
      title: language === "ko" ? "AI 설명" : "AI Narration",
      icon: "💬",
    },
    executive: {
      title: language === "ko" ? "AI 경력 요약" : "AI Executive Summary",
      icon: "👔",
    },
  };

  const config = layoutConfig[layout];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.3 }}
        className="my-4"
      >
        <Card className="p-4 bg-surface2/50 border-accent/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-sm">{config.icon}</span>
              <h4 className="text-sm font-medium text-text">{config.title}</h4>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                {t("ai.label.response")}
              </span>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="w-6 h-6 rounded-md hover:bg-surface flex items-center justify-center text-muted2 hover:text-text transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Content */}
          {isLoading && (
            <div className="flex items-center justify-center py-6">
              <Loader2 className="w-5 h-5 text-accent animate-spin" />
            </div>
          )}

          {error && (
            <div className="text-sm text-red-500 py-2">{error}</div>
          )}

          {response && !isLoading && (
            <div className="text-sm text-text leading-relaxed whitespace-pre-wrap">
              {response}
            </div>
          )}
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
