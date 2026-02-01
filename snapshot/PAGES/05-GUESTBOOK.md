# Guestbook Page

**Route:** `/guestbook`  
**File:** `app/guestbook/page.tsx`  
**Type:** Dynamic (ISR - Incremental Static Regeneration)  
**AI Features:** ❌ None  
**Database:** Supabase

---

## Overview

Visitor guestbook with real-time entries powered by Supabase.

---

## Features

1. **Guestbook Form**
   - Name input
   - Message textarea
   - Submit button
   - Client-side validation

2. **Entry List**
   - Real-time updates
   - Reverse chronological order
   - Entry cards with name, message, timestamp
   - Empty state when no entries

3. **Loading States**
   - Skeleton loaders during fetch
   - Optimistic UI updates

---

## Components

\`\`\`tsx
<main>
  <Header />
  <Section>
    <h1>Guestbook</h1>
    <p>Leave a message...</p>
    
    <GuestbookForm onSubmit={handleSubmit} />
    
    {loading ? (
      <GuestbookSkeleton count={3} />
    ) : (
      <GuestbookList entries={entries} />
    )}
  </Section>
  <Footer />
</main>
\`\`\`

---

## Copy (i18n)

**KO:**
\`\`\`
Title: "방명록"
Description: "방문해주셔서 감사합니다. 자유롭게 메시지를 남겨주세요."
Form:
  - Name placeholder: "이름"
  - Message placeholder: "메시지를 입력하세요..."
  - Submit: "남기기"
Empty state: "아직 메시지가 없습니다. 첫 번째로 남겨주세요!"
\`\`\`

**EN:**
\`\`\`
Title: "Guestbook"
Description: "Thank you for visiting. Feel free to leave a message."
Form:
  - Name placeholder: "Your name"
  - Message placeholder: "Leave a message..."
  - Submit: "Submit"
Empty state: "No messages yet. Be the first to leave one!"
\`\`\`

---

## Database Schema (Supabase)

\`\`\`sql
CREATE TABLE guestbook (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security
ALTER TABLE guestbook ENABLE ROW LEVEL SECURITY;

-- Allow read for everyone
CREATE POLICY "Allow public read" ON guestbook
  FOR SELECT USING (true);

-- Allow insert for everyone (with rate limiting on client)
CREATE POLICY "Allow public insert" ON guestbook
  FOR INSERT WITH CHECK (true);
\`\`\`

---

## API Route

**Endpoint:** `POST /api/guestbook`  
**Actions:** 
- `GET` - Fetch all entries (ordered by created_at DESC)
- `POST` - Create new entry with validation

**Validation:**
- Name: 1-50 chars
- Message: 1-500 chars
- XSS sanitization
