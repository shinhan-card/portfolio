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

    const fullPrompt = `
${systemPrompt}

## INSTRUCTIONS
- Use ONLY the provided CONTEXT below.
- Answer in ${lang === "ko" ? "Korean" : "English"}.
- Be concise unless user asks for detail.
- Use bullet points when listing.
- Do not invent facts.

## CONTEXT
${portfolioContext}

## USER QUESTION
${message}

## YOUR ANSWER
`.trim();

    // Gemini API version fallback (Jan 2026 free tier, highest to lowest)
    const modelVersions = [
      "gemini-2.0-flash-exp",      // Latest experimental (free)
      "gemini-1.5-flash-latest",   // Latest stable flash
      "gemini-1.5-flash",          // Standard flash
      "gemini-1.5-flash-8b",       // Lightweight flash
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
        // Log and try next model
        console.warn(`Model ${modelName} failed:`, error.message);
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
