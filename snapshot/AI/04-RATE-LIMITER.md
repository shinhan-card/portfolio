# Rate Limiter

**File:** `lib/ai/rateLimiter.ts`  
**Purpose:** IP-based rate limiting for AI API

---

## Implementation

\`\`\`typescript
// In-memory store (resets on server restart)
const requestStore = new Map<string, number[]>();

interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt?: number;
}

export function checkRateLimit(
  identifier: string,  // Usually IP address
  maxRequests: number, // e.g., 20
  windowMs: number     // e.g., 3600000 (1 hour)
): RateLimitResult {
  const now = Date.now();
  const windowStart = now - windowMs;
  
  // Get existing requests for this identifier
  const requests = requestStore.get(identifier) || [];
  
  // Filter out requests outside current window
  const recentRequests = requests.filter(timestamp => timestamp > windowStart);
  
  // Check if limit exceeded
  if (recentRequests.length >= maxRequests) {
    const oldestRequest = Math.min(...recentRequests);
    const resetAt = oldestRequest + windowMs;
    
    return {
      allowed: false,
      remaining: 0,
      resetAt,
    };
  }
  
  // Add current request
  recentRequests.push(now);
  requestStore.set(identifier, recentRequests);
  
  return {
    allowed: true,
    remaining: maxRequests - recentRequests.length,
  };
}

// Cleanup old entries periodically (optional)
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of requestStore.entries()) {
    const recent = timestamps.filter(t => t > now - 3600000);
    if (recent.length === 0) {
      requestStore.delete(key);
    } else {
      requestStore.set(key, recent);
    }
  }
}, 600000); // Clean every 10 minutes
\`\`\`

---

## Configuration

**Current limits:**
- **Requests:** 20 per hour per IP
- **Cooldown:** 3 seconds between requests (separate check in API route)
- **Window:** Rolling 1-hour window

---

## Usage in API Route

\`\`\`typescript
const ip = request.headers.get("x-forwarded-for") || "unknown";

const rateLimit = checkRateLimit(ip, 20, 60 * 60 * 1000);

if (!rateLimit.allowed) {
  return NextResponse.json(
    { 
      error: "Rate limit exceeded. Please try again in 1 hour.",
      resetAt: rateLimit.resetAt 
    },
    { status: 429 }
  );
}

// Proceed with AI request...
// Response includes: remaining: rateLimit.remaining
\`\`\`

---

## Limitations

**In-memory storage:**
- ✅ Simple, no database needed
- ✅ Fast lookups
- ❌ Resets on server restart
- ❌ Doesn't work across multiple server instances

**For production at scale:**
- Consider Redis or similar for distributed rate limiting
- Current implementation is suitable for single-instance Vercel deployment

---

## Security Benefits

1. **Prevents abuse** - Limits API costs
2. **Fair usage** - Ensures availability for all users
3. **DDoS mitigation** - Basic protection against spam
4. **Cooldown** - Additional 3-second check prevents rapid-fire requests

---

## User Experience

**When rate limited:**
- Clear error message with reset time
- User can continue browsing site
- AI features re-enabled after window expires

**Remaining count:**
- Returned in successful responses
- Not displayed to user (backend only)
- Could be surfaced in UI if desired
