# AIPanel Component

**File:** `components/AIPanel.tsx`  
**Purpose:** Global AI sidebar with presets and freeform input

---

## Overview

Slide-in panel from right side that provides:
- Mode selection (Recruiter, Hiring Manager, Engineer)
- Preset prompts per mode
- Freeform question input
- Response display
- Transparency disclaimer

---

## Component Structure

\`\`\`tsx
<AnimatePresence>
  {isOpen && (
    <>
      {/* Backdrop */}
      <motion.div className="fixed inset-0 bg-bg/90 backdrop-blur-sm" />
      
      {/* Panel */}
      <motion.div className="fixed right-0 top-0 bottom-0 w-full sm:w-[480px]">
        {/* Header */}
        <div className="border-b">
          <h2>
            <Sparkles /> AI Assist
          </h2>
          <p className="subtitle">Google Gemini 기반 · 포트폴리오 정보만 사용</p>
          <CloseButton />
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          {/* Mode Selector */}
          <ModeSelector 
            modes={["recruiter", "hiringManager", "engineer"]}
            selected={mode}
            onChange={setMode}
          />
          
          {/* Preset Prompts */}
          <PresetButtons presets={presets[mode]} onSelect={handlePreset} />
          
          {/* Freeform Input */}
          <form onSubmit={handleSubmit}>
            <textarea 
              placeholder="자유롭게 질문하세요..." 
              maxLength={1500}
            />
            <CharCount>{input.length}/1500</CharCount>
            <Button type="submit">질문하기</Button>
          </form>
          
          {/* Response */}
          {(response || loading || error) && (
            <div>
              <div className="flex justify-between">
                <span>Response</span>
                <span className="text-xs">Google Gemini 기반</span>
                {response && <CopyButton />}
              </div>
              <Card>
                {loading && <Loader />}
                {error && <Error>{error}</Error>}
                {response && <pre>{response}</pre>}
              </Card>
            </div>
          )}
          
          {/* Transparency Note */}
          <div className="border-t pt-4">
            <Sparkles /> 이 사이트의 AI 기능은 Google Gemini를 활용해 
            포트폴리오에 공개된 정보만을 기반으로 작동합니다...
            
            <p className="text-center italic">Powered by Google Gemini</p>
          </div>
        </div>
      </motion.div>
    </>
  )}
</AnimatePresence>
\`\`\`

---

## Modes & Presets

### Recruiter Mode (기본)
**KO Presets:**
- "30초 요약" → "이 포트폴리오를 30초 안에 요약해주세요."
- "강점 3개" → "핵심 강점 3가지만 간단히 알려주세요."
- "대표 프로젝트 한 줄씩" → "각 프로젝트를 한 줄로 요약해주세요."

**EN Presets:**
- "30s Summary" → "Summarize this portfolio in 30 seconds."
- "Top 3 Strengths" → "What are the top 3 strengths?"
- "Projects in One Line" → "Summarize each project in one line."

### Hiring Manager Mode
**KO Presets:**
- "의사결정/트레이드오프 요약"
- "리스크/대응만"
- "성과/영향만"

**EN Presets:**
- "Decisions & Trade-offs"
- "Risks & Mitigations"
- "Results & Impact"

### Engineer Mode
**KO Presets:**
- "시스템 뷰 설명"
- "확장성과 운영 관점"
- "구조 선택 이유"

**EN Presets:**
- "System View"
- "Scalability & Ops"
- "Architecture Choices"

---

## Opening Triggers

### 1. Header AI Button
\`\`\`tsx
window.dispatchEvent(new Event("open-ai-panel"));
\`\`\`

### 2. Hero AI CTA (with preset)
\`\`\`tsx
window.dispatchEvent(
  new CustomEvent("open-ai-panel", {
    detail: { presetId: "summary" }
  })
);
\`\`\`

### 3. Custom Prompt (from page)
\`\`\`tsx
window.dispatchEvent(
  new CustomEvent("open-ai-panel", {
    detail: { 
      customPrompt: "Specific question about X" 
    }
  })
);
\`\`\`

---

## Features

1. **Auto-run presets** - If opened with `presetId`, runs that preset immediately
2. **Custom prompts** - If opened with `customPrompt`, pre-fills input
3. **Copy response** - One-click copy to clipboard
4. **Character counter** - Shows remaining chars (max 1500)
5. **Loading states** - Spinner during API call
6. **Error handling** - Clear error messages

---

## Animation

**Enter/Exit:**
- Panel: Slide from right (spring physics)
- Backdrop: Fade in/out
- Duration: ~300ms

**Behavior:**
- Click backdrop → Close
- Click X button → Close
- ESC key → Close (via KeyboardShortcuts component)

---

## Styling

**Panel:**
- Width: 100% mobile, 480px desktop
- Full height
- White/dark surface
- Border on left
- Shadow-2xl

**Title:**
- Small, restrained (text-base, font-medium)
- Sparkle icon (no wrapper)
- Subtitle with transparency note

**Layout:**
- Fixed header
- Scrollable content area
- Sticky footer with disclaimer

---

## Accessibility

- Focus trapped within panel when open
- First focusable element auto-focused
- Close on ESC key
- ARIA role="dialog"
- Backdrop click to close

---

## User Flow

1. User clicks AI button
2. Panel slides in from right
3. (Optional) Preset auto-runs or prompt pre-fills
4. User can:
   - Select different mode
   - Click preset
   - Type custom question
5. Submit → Loading spinner
6. Response appears
7. User can copy or ask another question
8. Close panel → Backdrop fadeout
