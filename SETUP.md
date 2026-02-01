# Setup Guide

## Prerequisites

- Node.js 18+ and npm
- Supabase account (for guestbook feature)

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Set Up Supabase (for Guestbook)

1. Create a new project on [Supabase](https://supabase.com)
2. Go to SQL Editor and run the schema from `lib/supabase/schema.sql`
3. This will create:
   - `guestbook_entries` table
   - Row Level Security (RLS) policies
   - Indexes for performance

### 4. Add Ambient Music (Optional)

Place your ambient music file at:

```
public/audio/ambient.mp3
```

See `public/audio/README.md` for requirements.

### 5. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## Features

### Theme System

- **Light/Dark Mode**: Automatic system detection with manual toggle
- **Semantic Color Tokens**: WCAG-compliant contrast ratios
- **Smooth Transitions**: All theme changes are animated

### Ambient Player

- **User-Controlled**: No autoplay
- **Persistent State**: Saves play state and volume to localStorage
- **Fade In/Out**: Smooth volume transitions
- **Cross-Page**: Continues playing across navigation

### Guestbook

- **Anti-Spam**:
  - 30-second rate limit
  - Honeypot field
  - Link detection
  - Input validation
- **Privacy**: Optional IP hashing (not stored by default)
- **Pagination**: 10 entries per page
- **Real-time**: Auto-refreshes after submission

## Build for Production

```bash
npm run build
```

## Deployment Notes

### Environment Variables

Make sure to set these in your deployment platform:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Static Assets

- Place `resume.pdf` in `/public/`
- Place `ambient.mp3` in `/public/audio/`

### Supabase RLS

The guestbook uses Row Level Security:
- `SELECT`: Public (anon + authenticated)
- `INSERT`: Anonymous users allowed
- `UPDATE/DELETE`: Blocked for public (service role only)

## Customization

### Colors

Edit semantic tokens in `app/globals.css`:

```css
.dark {
  --color-bg: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-text: #f5f5f5;
  /* ... */
}
```

### Content

All text content is in:
- `lib/i18n/LanguageContext.tsx` - UI text
- `lib/i18n/case-study-translations.ts` - Case study content

## Troubleshooting

### Guestbook Not Working

Check:
1. Supabase env vars are set
2. RLS policies are applied
3. Network requests in browser devtools

### Audio Not Playing

Check:
1. File exists at `/public/audio/ambient.mp3`
2. Browser console for errors
3. User clicked play (browsers block autoplay)

### Build Errors

If build fails:
1. Check TypeScript errors: `npm run build`
2. Verify all imports are correct
3. Ensure Supabase client handles missing env vars

## Support

For issues or questions, open an issue in the repository.
