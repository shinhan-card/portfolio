import { NextRequest, NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase/client";
import crypto from "crypto";

// Rate limiting storage (in-memory, simple implementation)
const rateLimit = new Map<string, number>();
const RATE_LIMIT_WINDOW = 30000; // 30 seconds

function hashIP(ip: string): string {
  return crypto.createHash("sha256").update(ip).digest("hex");
}

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const lastSubmit = rateLimit.get(identifier);
  
  if (lastSubmit && now - lastSubmit < RATE_LIMIT_WINDOW) {
    return false; // Rate limited
  }
  
  rateLimit.set(identifier, now);
  
  // Cleanup old entries
  for (const [key, value] of rateLimit.entries()) {
    if (now - value > RATE_LIMIT_WINDOW) {
      rateLimit.delete(key);
    }
  }
  
  return true;
}

function validateMessage(message: string): boolean {
  // No links or URLs
  const urlPattern = /(https?:\/\/|www\.)/i;
  if (urlPattern.test(message)) {
    return false;
  }
  
  // Check length
  if (message.length < 1 || message.length > 300) {
    return false;
  }
  
  return true;
}

function sanitizeInput(input: string): string {
  // Remove any HTML tags and trim
  return input.replace(/<[^>]*>/g, "").trim();
}

// POST - Submit a new guestbook entry
export async function POST(request: NextRequest) {
  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json(
      { error: "Guestbook feature is not configured. Please set up Supabase environment variables." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const { name, company, message, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { error: "Invalid submission" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Validate message content
    if (!validateMessage(message)) {
      return NextResponse.json(
        { error: "Message contains invalid content or exceeds length limit" },
        { status: 400 }
      );
    }

    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "unknown";
    const ipHash = hashIP(ip);

    if (!checkRateLimit(ipHash)) {
      return NextResponse.json(
        { error: "Please wait 30 seconds before submitting again" },
        { status: 429 }
      );
    }

    // Sanitize inputs
    const sanitizedName = name ? sanitizeInput(name).substring(0, 30) : null;
    const sanitizedCompany = company ? sanitizeInput(company).substring(0, 40) : null;
    const sanitizedMessage = sanitizeInput(message).substring(0, 300);

    // Get user agent
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Insert into Supabase
    const { data, error } = await supabase
      .from("guestbook_entries")
      .insert({
        name: sanitizedName,
        company: sanitizedCompany,
        message: sanitizedMessage,
        ip_hash: ipHash,
        user_agent: userAgent,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit entry" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error("Error submitting guestbook entry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET - Fetch guestbook entries with pagination
export async function GET(request: NextRequest) {
  // Check if Supabase is configured
  if (!isSupabaseConfigured() || !supabase) {
    return NextResponse.json(
      { error: "Guestbook feature is not configured. Please set up Supabase environment variables." },
      { status: 503 }
    );
  }

  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const pageSize = 10;
    const offset = (page - 1) * pageSize;

    const { data, error, count } = await supabase
      .from("guestbook_entries")
      .select("id, created_at, name, company, message", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch entries" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      entries: data || [],
      total: count || 0,
      page,
      pageSize,
      totalPages: Math.ceil((count || 0) / pageSize),
    });
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
