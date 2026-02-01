# Audio Assets

## Ambient Music

Place your ambient music file here as `ambient.mp3`.

The ambient player component (`components/ui/AmbientPlayer.tsx`) will load this file.

### Requirements:
- Format: MP3
- Filename: `ambient.mp3`
- Recommended: 
  - Low volume, calm, atmospheric music
  - Loopable track (seamless loop recommended)
  - File size: Keep under 5MB for good performance

### Notes:
- The player does NOT autoplay (respects browser policies and UX)
- Users can control play/pause, volume, and mute
- Preferences are saved to localStorage
- The audio continues across page navigations unless user pauses
