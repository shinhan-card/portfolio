# AI API Route

**File:** `app/api/ai/route.ts`  
**Endpoint:** `POST /api/ai`  
**Purpose:** Server-side Gemini API integration

---

## Overview

Handles AI requests with Google Gemini models, rate limiting, and model fallback logic.

---

## Request/Response

### Request Body
\`\`\`json
{
  "message": "User question (max 1500 chars)",
  "lang": "ko" | "en",
  "mode": "recruiter" | "hiringManager" | "engineer",
  "context": "optional-context-id"
}
\`\`\`

### Success Response
\`\`\`json
{
  "response": "AI generated response",
  "remaining": 18,
  "modelUsed": "gemini-2.5-flash"
}
\`\`\`

### Error Response
\`\`\`json
{
  "error": "Error message"
}
\`\`\`

---

## API Route Structure (Sanitized)

\`\`\`typescript
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildPortfolioContext } from "@/lib/ai/portfolioContext";
import { getSystemPrompt } from "@/lib/ai/persona";
import { checkRateLimit } from "@/lib/ai/rateLimiter";

// Server-side only - API key from environment
const apiKey = process.env.GEMINI_API_KEY || "";
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const MAX_INPUT_LENGTH = 1500;
const COOLDOWN_MS = 3000;

export async function POST(request: NextRequest) {
  try {
    // 1. Check API configuration
    if (!genAI || !apiKey) {
      return NextResponse.json(
        { error: "AI is not configured." },
        { status: 500 }
      );
    }

    // 2. Parse and validate request
    const body = await request.json();
    const { message, lang = "en", mode = "recruiter" } = body;

    if (!message || message.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    // 3. Rate limiting (IP-based)
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimit = checkRateLimit(ip, 20, 60 * 60 * 1000); // 20/hour
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Rate limit exceeded" },
        { status: 429 }
      );
    }

    // 4. Cooldown check (3 seconds between requests)
    // [Implementation details...]

    // 5. Build context and prompt
    const portfolioContext = buildPortfolioContext(lang);
    const systemPrompt = getSystemPrompt(lang);

    const fullPrompt = \`
\${systemPrompt}

## INSTRUCTIONS
- Use ONLY the provided CONTEXT below.
- Answer in \${lang === "ko" ? "Korean" : "English"}.
- Be concise unless user asks for detail.
- Use bullet points when listing.
- Do not invent facts.

## CONTEXT
\${portfolioContext}

## USER QUESTION
\${message}

## YOUR ANSWER
\`.trim();

    // 6. Model fallback logic (16 models, highest to lowest)
    const modelVersions = [
      "gemini-2.5-flash",
      "gemini-2.5-flash-lite",
      "gemini-3-flash",
      "gemini-2.0-flash",
      // ... 12 more models
    ];

    // Try each model until one succeeds
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
        const text = result.response.text();

        // Success - return response
        return NextResponse.json({
          response: text,
          remaining: rateLimit.remaining,
          modelUsed: modelName,
        });
      } catch (error) {
        console.warn(\`Model \${modelName} failed:\`, error);
        continue; // Try next model
      }
    }

    // All models failed
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  } catch (error) {
    console.error("AI API error:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
}
\`\`\`

---

## Model Fallback Strategy

**16 Gemini models** tried in order (based on Google AI Studio 2026-01):

| Priority | Model | Description |
|----------|-------|-------------|
| 1 | `gemini-2.5-flash` | Fastest, 5 RPM free |
| 2 | `gemini-2.5-flash-lite` | Lightweight, 10 RPM free |
| 3 | `gemini-3-flash` | Newest generation |
| 4 | `gemini-2.0-flash` | Stable 2.0 |
| 5 | `gemini-2.0-flash-exp` | Experimental 2.0 |
| 6 | `gemini-1.5-flash` | Most reliable |
| 7-10 | 1.5 flash variants | Latest, 001, 002, etc |
| 11-13 | 1.5 pro series | Higher quality |
| 14-16 | Legacy fallbacks | gemini-pro, models/* prefix |

**Strategy:**
- Start with newest/fastest
- Fall back to stable versions
- Try pro models if flash unavailable
- Include `models/` prefix variants
- Log each failure, try next
- Only error if ALL fail

---

## Security

### API Key Protection
- ✅ Stored in environment variables only
- ✅ Never exposed to client
- ✅ Server-side instantiation only

### Rate Limiting
- 20 requests per hour per IP
- 3 second cooldown between requests
- IP from `x-forwarded-for` header

### Input Validation
- Max length: 1500 characters
- Type checking
- XSS protection via JSON serialization

### Context Grounding
- AI uses ONLY provided portfolio context
- No external data sources
- No user data storage
- No conversation logging

---

## Error Handling

| Error | Status | Message (KO) | Message (EN) |
|-------|--------|--------------|--------------|
| No API key | 500 | "AI is not configured" | Same |
| Invalid input | 400 | "잘못된 요청" | "Invalid request" |
| Too long | 400 | "질문이 너무 깁니다 (최대 1,500자)" | "Question too long (max 1,500 characters)" |
| Rate limit | 429 | "요청 한도 초과. 1시간 후 다시 시도해주세요." | "Rate limit exceeded. Please try again in 1 hour." |
| Cooldown | 429 | "너무 빠릅니다. 3초 후 다시 시도해주세요." | "Too fast. Please wait 3 seconds." |
| Generation fail | 500 | "Failed to generate response" | Same |

---

## Performance

- **Latency:** ~1-3 seconds typical
- **Timeout:** None (relies on model timeout)
- **Caching:** None (each request is unique)
- **Concurrent:** Edge runtime handles parallel requests

---

## Monitoring

**Logged (server-side only):**
- Model failures (which model, error message)
- All models failure (critical)
- Generic API errors

**NOT logged:**
- User prompts (privacy)
- AI responses (privacy)
- IP addresses (only used for rate limit, not stored)
