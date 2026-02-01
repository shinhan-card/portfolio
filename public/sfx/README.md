# UI Sound Effects (SFX)

Place your final MP3 files in this folder. The app references these paths; if a file is missing, playback is skipped (no errors).

## Required files

| File | Trigger | Suggested style |
|------|--------|------------------|
| `nav-whoosh.mp3` | Client-side route change | Very soft whoosh / airy, <300ms |
| `tap-soft.mp3` | Primary CTA click (Resume, Case Studies) | Soft tap, muted click, no sharp transient |
| `toggle-on.mp3` | Theme/Language/Audio toggle → ON | Gentle switch, subtle tick |
| `toggle-off.mp3` | Theme/Language/Audio toggle → OFF | Slight pitch/texture difference from ON |
| `success-soft.mp3` | Guestbook submit success | Soft confirmation, warm, short |

## Guidelines

- **Volume**: Keep source levels low; app caps playback at 0.3.
- **Duration**: Short (under ~300ms for whoosh/tap/toggle; success can be slightly longer).
- **Style**: Restrained, high-end app / luxury product UI. No cartoon, game, or clicky sounds.
- **Format**: MP3, small file size.

## Placeholders

Until you add real files, you can use silent or minimal MP3s so the app runs without errors. Replace them later with final assets.
