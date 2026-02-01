# AIInlineResponse Component

**File:** `components/ui/AIInlineResponse.tsx`  
**Purpose:** Context-local AI output displayed inline

---

## Overview

Displays AI-generated responses directly below the trigger button, rather than opening a global panel. Each page section can have its own AI output with distinct layouts.

---

## Component Code

\`\`\`tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./Card";

interface AIInlineResponseProps {
  prompt: string;           // AI prompt to send
  context?: string;         // Optional context identifier
  layout?: "brief" | "narration" | "executive";  // Visual style
  onClose?: () => void;     // Close handler
}

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
\`\`\`

---

## Layout Types

### 1. Brief (📝)
**Use case:** Project summaries  
**Style:** Compact, bullet-friendly  
**Title:** "AI 요약" / "AI Brief"

### 2. Narration (💬)
**Use case:** System explanations  
**Style:** Explanatory, narrative  
**Title:** "AI 설명" / "AI Narration"

### 3. Executive (👔)
**Use case:** Career summaries  
**Style:** Professional, high-level  
**Title:** "AI 경력 요약" / "AI Executive Summary"

---

## Behavior

1. **On Mount:** Immediately fetches AI response
2. **Loading State:** Shows spinner
3. **Success:** Displays response with smooth expand animation
4. **Error:** Shows error message
5. **Close:** Collapse with smooth animation

---

## Key Features

- **Inline expansion** - No navigation, stays in context
- **Auto-fetch** - Runs immediately when rendered
- **Animated** - Smooth height transition with Framer Motion
- **Labeled** - Shows "Google Gemini 기반" chip
- **Closeable** - Optional close button
- **Responsive** - Works on mobile

---

## Usage Pattern

\`\`\`tsx
// In parent component
const [showAISummary, setShowAISummary] = useState(false);

// Trigger button
<AIButton onClick={() => setShowAISummary(!showAISummary)}>
  AI 요약
</AIButton>

// Inline response (conditionally rendered)
{showAISummary && (
  <AIInlineResponse
    prompt="이 프로젝트를 요약해주세요"
    context="project-slug"
    layout="brief"
    onClose={() => setShowAISummary(false)}
  />
)}
\`\`\`

---

## Design Decisions

**Why inline vs global panel?**
- ✅ Reduces "everything goes to same place" feeling
- ✅ Keeps user in context
- ✅ Allows multiple AI outputs on same page
- ✅ Faster perceived response (no navigation)

**Why 3 layout types?**
- Different contexts need different presentation
- Project brief ≠ System explanation ≠ Career summary
- Allows flexibility without prop explosion

**Why auto-fetch?**
- User clicked = intent to see result
- No extra confirmation needed
- Loading state provides feedback
