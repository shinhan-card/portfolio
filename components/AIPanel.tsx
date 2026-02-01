"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./ui/Card";
import Button from "./ui/Button";

type Mode = "recruiter" | "hiringManager" | "engineer";

const MAX_INPUT_LENGTH = 1500;

export default function AIPanel() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("recruiter");
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  const [pendingPresetId, setPendingPresetId] = React.useState<string | null>(null);
  const [pendingCustomPrompt, setPendingCustomPrompt] = React.useState<string | null>(null);

  // Listen for open event (optionally with presetId or customPrompt)
  React.useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      const detail = (e as CustomEvent<{ presetId?: string; customPrompt?: string }>)?.detail;
      if (detail?.presetId) setPendingPresetId(detail.presetId);
      if (detail?.customPrompt) setPendingCustomPrompt(detail.customPrompt);
    };
    window.addEventListener("open-ai-panel", handleOpen);
    return () => window.removeEventListener("open-ai-panel", handleOpen);
  }, []);

  // When panel opens with pendingPresetId, run that preset once
  React.useEffect(() => {
    if (!isOpen || !pendingPresetId) return;
    const preset = presets.recruiter.find((p) => p.id === pendingPresetId);
    if (preset) {
      setPendingPresetId(null);
      handlePreset(preset.prompt);
    } else {
      setPendingPresetId(null);
    }
  }, [isOpen, pendingPresetId]);

  // When panel opens with customPrompt, run it once
  React.useEffect(() => {
    if (!isOpen || !pendingCustomPrompt) return;
    handlePreset(pendingCustomPrompt);
    setPendingCustomPrompt(null);
  }, [isOpen, pendingCustomPrompt]);

  const presets = {
    recruiter:
      language === "ko"
        ? [
            { id: "summary", label: "30초 요약", prompt: "이 포트폴리오를 30초 안에 요약해주세요." },
            { id: "strengths", label: "강점 3개", prompt: "핵심 강점 3가지만 간단히 알려주세요." },
            { id: "projects", label: "대표 프로젝트 한 줄씩", prompt: "각 프로젝트를 한 줄로 요약해주세요." },
          ]
        : [
            { id: "summary", label: "30s Summary", prompt: "Summarize this portfolio in 30 seconds." },
            { id: "strengths", label: "Top 3 Strengths", prompt: "What are the top 3 strengths?" },
            { id: "projects", label: "Projects in One Line", prompt: "Summarize each project in one line." },
          ],
    hiringManager:
      language === "ko"
        ? [
            { id: "decisions", label: "의사결정/트레이드오프 요약", prompt: "의사결정과 트레이드오프 사례를 요약해주세요." },
            { id: "risks", label: "리스크/대응만", prompt: "프로젝트에서 다룬 리스크와 대응책만 알려주세요." },
            { id: "impact", label: "성과/영향만", prompt: "측정 가능한 성과와 영향만 알려주세요." },
          ]
        : [
            { id: "decisions", label: "Decisions & Trade-offs", prompt: "Summarize key decisions and trade-offs." },
            { id: "risks", label: "Risks & Mitigations", prompt: "What risks were handled and how?" },
            { id: "impact", label: "Results & Impact", prompt: "What were the measurable results?" },
          ],
    engineer:
      language === "ko"
        ? [
            { id: "system", label: "시스템 뷰 설명", prompt: "시스템 아키텍처 관점을 설명해주세요." },
            { id: "scalability", label: "확장성과 운영 관점", prompt: "확장성과 운영 고려사항을 알려주세요." },
            { id: "choices", label: "구조 선택 이유", prompt: "왜 이런 시스템 구조를 선택했나요?" },
          ]
        : [
            { id: "system", label: "System View", prompt: "Explain the system architecture perspective." },
            { id: "scalability", label: "Scalability & Ops", prompt: "What were the scalability and operational considerations?" },
            { id: "choices", label: "Architecture Choices", prompt: "Why these system structure choices?" },
          ],
  };

  const handlePreset = async (prompt: string) => {
    setInput("");
    setError("");
    setResponse("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, lang: language, mode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to get response");
        return;
      }

      setResponse(data.response);
    } catch (err) {
      setError(
        language === "ko"
          ? "응답 생성 실패. 다시 시도해주세요."
          : "Failed to generate response."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setError("");
    setResponse("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input, lang: language, mode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to get response");
        return;
      }

      setResponse(data.response);
    } catch (err) {
      setError(
        language === "ko"
          ? "응답 생성 실패. 다시 시도해주세요."
          : "Failed to generate response."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const text =
    language === "ko"
      ? {
          title: "AI로 포트폴리오 둘러보기",
          modes: {
            recruiter: "리크루터",
            hiringManager: "채용 담당자",
            engineer: "엔지니어",
          },
          inputPlaceholder: "자유롭게 질문하세요...",
          submit: "질문하기",
          disclaimer: "이 답변은 포트폴리오에 공개된 정보만 기반으로 생성됩니다.",
          copy: "복사",
          copied: "복사됨",
        }
      : {
          title: "Explore with AI",
          modes: {
            recruiter: "Recruiter",
            hiringManager: "Hiring Manager",
            engineer: "Engineer",
          },
          inputPlaceholder: "Ask anything...",
          submit: "Ask",
          disclaimer: "Responses are generated using only the information published in this portfolio.",
          copy: "Copy",
          copied: "Copied",
        };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-bg/90 backdrop-blur-sm z-[90]"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px] bg-surface border-l border-border shadow-2xl z-[91] flex flex-col"
          >
            {/* Header - refined, quieter */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h2 className="text-base font-medium text-text flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  AI Assist
                </h2>
                <p className="text-xs text-muted2 mt-1">
                  {t("ai.disclaimer.full").split(".")[0]}.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-md hover:bg-surface2 flex items-center justify-center text-muted hover:text-text transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 space-y-6">
              {/* Mode selector */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-3">
                  Select Mode
                </p>
                <div className="flex gap-2">
                  {(["recruiter", "hiringManager", "engineer"] as Mode[]).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`flex-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                        mode === m
                          ? "bg-accent text-white"
                          : "bg-surface2 text-muted hover:bg-surface2/80"
                      }`}
                    >
                      {text.modes[m]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preset prompts */}
              <div>
                <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-3">
                  Quick Questions
                </p>
                <div className="flex flex-wrap gap-2">
                  {presets[mode].map((preset) => (
                    <button
                      key={preset.id}
                      onClick={() => handlePreset(preset.prompt)}
                      disabled={isLoading}
                      className="px-3 py-1.5 text-xs font-medium bg-surface2 hover:bg-accent/10 border border-border hover:border-accent/30 text-text rounded-md transition-all disabled:opacity-50"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Freeform input */}
              <form onSubmit={handleSubmit}>
                <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-3">
                  Custom Question
                </p>
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={text.inputPlaceholder}
                  className="w-full px-4 py-3 bg-surface2 border border-border rounded-lg text-sm text-text placeholder:text-muted2 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  rows={3}
                  maxLength={MAX_INPUT_LENGTH}
                  disabled={isLoading}
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-muted2">
                    {input.length}/{MAX_INPUT_LENGTH}
                  </span>
                  <Button
                    type="submit"
                    size="sm"
                    disabled={!input.trim() || isLoading}
                  >
                    {text.submit}
                  </Button>
                </div>
              </form>

              {/* Response */}
              {(response || error || isLoading) && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-xs font-mono uppercase tracking-wide text-muted2">
                      Response
                    </p>
                    {response && !isLoading && (
                      <span className="text-[11px] text-muted2 font-normal normal-case" aria-hidden>
                        {t("ai.label.response")}
                      </span>
                    )}
                    {response && !isLoading && (
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 px-2 py-1 text-xs text-accent hover:text-accent-2 transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3" />
                            {text.copied}
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            {text.copy}
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  <Card className="p-4 min-h-[120px]">
                    {isLoading && (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="w-6 h-6 text-accent animate-spin" />
                      </div>
                    )}
                    {error && (
                      <div className="text-sm text-red-500">{error}</div>
                    )}
                    {response && !isLoading && (
                      <div className="text-sm text-text leading-relaxed prose-sm whitespace-pre-wrap">
                        {response}
                      </div>
                    )}
                  </Card>
                </div>
              )}

              {/* Transparency note */}
              <div className="text-xs text-muted2 border-t border-border pt-4">
                <p className="flex items-start gap-1.5">
                  <Sparkles className="w-3 h-3 flex-shrink-0 mt-0.5 text-accent opacity-80" />
                  <span>{t("ai.disclaimer.full")}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
