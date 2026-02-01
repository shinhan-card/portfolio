import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPortfolioContext } from "@/lib/ai/portfolioContext";
import { getSystemPrompt } from "@/lib/ai/persona";
import { checkRateLimit } from "@/lib/ai/rateLimiter";

// Server-side only - API key never exposed to client
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const MAX_INPUT_LENGTH = 1500;
const COOLDOWN_MS = 3000;

const lastRequestTime = new Map<string, number>();

export async function POST(request: NextRequest) {
  try {
    // Check API key configuration
    if (!genAI || !apiKey) {
      return NextResponse.json(
        { error: "AI is not configured." },
        { status: 500 }
      );
    }

    // Parse request
    const body = await request.json();
    const { message, lang = "en", mode = "recruiter" } = body;

    // Validate input
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    if (message.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        {
          error:
            lang === "ko"
              ? "질문이 너무 깁니다 (최대 1,500자)"
              : "Question too long (max 1,500 characters)",
        },
        { status: 400 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    
    // Check rate limit (20 requests/hour)
    const rateLimit = checkRateLimit(ip, 20, 60 * 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error:
            lang === "ko"
              ? "요청 한도 초과. 1시간 후 다시 시도해주세요."
              : "Rate limit exceeded. Please try again in 1 hour.",
        },
        { status: 429 }
      );
    }

    // Cooldown check (prevent spam)
    const lastTime = lastRequestTime.get(ip) || 0;
    const now = Date.now();
    if (now - lastTime < COOLDOWN_MS) {
      return NextResponse.json(
        {
          error:
            lang === "ko"
              ? "너무 빠릅니다. 3초 후 다시 시도해주세요."
              : "Too fast. Please wait 3 seconds.",
        },
        { status: 429 }
      );
    }
    lastRequestTime.set(ip, now);

    // Build context and prompt
    const portfolioContext = buildPortfolioContext(lang);
    const systemPrompt = getSystemPrompt(lang);

    // Detect response type and apply template
    const messageL = message.toLowerCase();
    let templateInstructions = "";

    if (messageL.includes("요약") || messageL.includes("summary")) {
      templateInstructions = lang === "ko"
        ? "\n## 응답 형식\n- 3-4개 핵심 포인트만 불릿으로\n- 의사결정 디테일은 제외\n- 간결하게 30초 분량"
        : "\n## RESPONSE FORMAT\n- 3-4 key bullet points only\n- No decision details\n- Concise, 30-second read";
    } else if (messageL.includes("의사결정") || messageL.includes("decision") || messageL.includes("trade-off")) {
      templateInstructions = lang === "ko"
        ? "\n## 응답 형식 (고정)\n1. **선택한 접근**: [무엇을 선택했는지]\n2. **검토한 대안들**: [고려했던 다른 방법들]\n3. **리스크와 대응**: [주요 리스크와 완화 방법]\n4. **결정이 유효했던 이유**: [왜 이 방법이 작동했는지]"
        : "\n## RESPONSE FORMAT (FIXED)\n1. **Chosen Approach**: [What was selected]\n2. **Alternatives Considered**: [Other options evaluated]\n3. **Risks & Mitigations**: [Key risks and how addressed]\n4. **Why This Worked**: [Validation of the decision]";
    } else if (messageL.includes("시스템") || messageL.includes("다이어그램") || messageL.includes("system") || messageL.includes("diagram") || messageL.includes("아키텍처") || messageL.includes("architecture")) {
      templateInstructions = lang === "ko"
        ? "\n## 응답 형식 (고정)\n1. **시스템 개요**: [이 시스템이 무엇인지]\n2. **구성 요소 상호작용**: [컴포넌트들이 어떻게 연동되는지]\n3. **운영 고려사항**: [실제 운영 시 중요한 점]"
        : "\n## RESPONSE FORMAT (FIXED)\n1. **System Overview**: [What this system is]\n2. **Component Interactions**: [How components work together]\n3. **Operational Considerations**: [What matters in production]";
    }

    const fullPrompt = `
${systemPrompt}

## INSTRUCTIONS
- Use ONLY the provided CONTEXT below.
- Answer in ${lang === "ko" ? "Korean" : "English"}.
- Be concise unless user asks for detail.
- Use bullet points when listing.
- DO NOT invent facts or numbers.
- DO NOT provide percentages, satisfaction scores, or quantitative claims unless explicitly in context.
${templateInstructions}

## CONTEXT
${portfolioContext}

## USER QUESTION
${message}

## YOUR ANSWER
`.trim();

    // Gemini API version fallback (based on Google AI Studio 2026-01)
    // Ordered from newest/fastest to stable fallbacks
    const modelVersions = [
      "gemini-2.5-flash",               // 🚀 2.5 Flash (5 RPM free)
      "gemini-2.5-flash-lite",          // ⚡ 2.5 Flash Lite (10 RPM free)
      "gemini-3-flash",                 // 🆕 Gemini 3 Flash (5 RPM free)
      "gemini-2.0-flash",               // ✅ 2.0 Flash
      "gemini-2.0-flash-exp",           // 🧪 2.0 Flash Experimental
      "gemini-1.5-flash",               // 💎 1.5 Flash (most stable)
      "gemini-1.5-flash-latest",        // 📌 1.5 Flash Latest
      "gemini-1.5-flash-002",           // 🔷 1.5 Flash v002
      "gemini-1.5-flash-001",           // 🔷 1.5 Flash v001
      "gemini-1.5-pro",                 // 🎯 1.5 Pro
      "gemini-1.5-pro-latest",          // 🎯 1.5 Pro Latest
      "gemini-1.0-pro",                 // 📦 1.0 Pro
      "gemini-pro",                     // 📦 Legacy Pro
      "models/gemini-2.5-flash",        // 🔄 With prefix
      "models/gemini-1.5-flash",        // 🔄 With prefix
      "models/gemini-pro",              // 🔄 With prefix
    ];

    let lastError: Error | null = null;

    // Try each model version until one succeeds
    for (const modelName of modelVersions) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        });

        const result = await model.generateContent(fullPrompt);
        const response = result.response;
        const text = response.text();

        // Success - return response
        return NextResponse.json({
          response: text,
          remaining: rateLimit.remaining,
          modelUsed: modelName, // Optional: for debugging
        });
      } catch (error: any) {
        // Log detailed error for debugging
        console.warn(`Model ${modelName} failed:`, error.message);
        console.warn(`Error details:`, error);
        lastError = error;
        continue;
      }
    }

    // All models failed
    console.error("All Gemini models failed. Last error:", lastError?.message);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  } catch (error: any) {
    // Generic error (don't leak details)
    console.error("AI API error:", error.message);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
