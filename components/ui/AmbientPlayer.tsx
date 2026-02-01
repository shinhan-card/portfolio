"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause, Music } from "lucide-react";
import { useAmbient } from "@/lib/ambient/AmbientContext";

export default function AmbientPlayer() {
  const ambient = useAmbient();
  const isPlaying = ambient?.isPlaying ?? false;
  const togglePlayContext = ambient?.togglePlay ?? (() => {});

  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [mounted, setMounted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasUserToggled = useRef(false);

  // Mount detection
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show hint for first-time visitors - stays until button clicked
  useEffect(() => {
    if (!mounted) return;
    
    const hasSeenBGM = localStorage.getItem("bgm-hint-seen");
    if (!hasSeenBGM) {
      // Show hint after a brief delay
      setTimeout(() => setShowHint(true), 1500);
    }
  }, [mounted]);

  // Load preferences from localStorage
  useEffect(() => {
    const savedVolume = localStorage.getItem("ambient-volume");
    const savedMuted = localStorage.getItem("ambient-muted");
    if (savedVolume) setVolume(parseFloat(savedVolume));
    if (savedMuted) setIsMuted(savedMuted === "true");
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("ambient-volume", volume.toString());
    localStorage.setItem("ambient-muted", isMuted.toString());
  }, [volume, isMuted]);

  // Update audio element volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Sync play/pause with context - allow auto-resume from localStorage
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      const targetVol = isMuted ? 0 : volume;
      audioRef.current.volume = 0;
      
      // Try to play (will succeed if user previously interacted or on auto-resume)
      audioRef.current.play().then(() => {
        hasUserToggled.current = true; // Mark as user-initiated
        const fadeIn = setInterval(() => {
          if (audioRef.current && audioRef.current.volume < targetVol - 0.05) {
            audioRef.current.volume = Math.min(targetVol, audioRef.current.volume + 0.05);
          } else {
            clearInterval(fadeIn);
            if (audioRef.current) audioRef.current.volume = targetVol;
          }
        }, 50);
      }).catch(() => {
        // Auto-play blocked - user needs to click
        console.log("Auto-play blocked - user interaction required");
      });
      
      return;
    } else {
      const fadeOut = setInterval(() => {
        if (audioRef.current && audioRef.current.volume > 0.05) {
          audioRef.current.volume = Math.max(0, audioRef.current.volume - 0.05);
        } else {
          clearInterval(fadeOut);
          audioRef.current?.pause();
          if (audioRef.current) audioRef.current.volume = isMuted ? 0 : volume;
        }
      }, 50);
      return () => clearInterval(fadeOut);
    }
  }, [isPlaying, volume, isMuted]);

  const togglePlay = () => {
    hasUserToggled.current = true;
    setShowHint(false);
    localStorage.setItem("bgm-hint-seen", "true");
    togglePlayContext();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : newVolume;
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : volume;
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="none">
        <source src="/audio/ambient.mp3" type="audio/mpeg" />
        <source src="/audio/bgm.mp3" type="audio/mpeg" />
        <source src="/audio/ambient.wma" type="audio/x-ms-wma" />
        <source src="/audio/bgm.wma" type="audio/x-ms-wma" />
      </audio>

      <div className="fixed bottom-6 left-6 z-40 group">
        {!isVisible ? (
          <>
            <button
              onClick={() => {
                setIsVisible(true);
                setShowHint(false);
                localStorage.setItem("bgm-hint-seen", "true");
              }}
              className={`w-12 h-12 rounded-full bg-surface border-2 hover:bg-surface2 hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 relative ${
                showHint ? "border-accent/50 animate-pulse" : "border-border"
              }`}
              aria-label="Open ambient player"
            >
              <Music className="w-5 h-5 text-muted" strokeWidth={2} />
              {isPlaying && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-bg" />
              )}
            </button>
            
            {/* Hint tooltip - subtle, persistent until clicked */}
            {showHint && (
              <div className="absolute bottom-full left-0 mb-2 animate-fade-in pointer-events-none">
                <div className="relative bg-surface2/95 backdrop-blur-sm border border-border rounded-md shadow-md px-3 py-2 w-64">
                  <p className="text-xs leading-relaxed text-muted">
                    음악 자동재생 안되면<br />
                    한번 멈췄다 재생해보세요 🎵
                  </p>
                  {/* Arrow pointing down */}
                  <div className="absolute top-full left-4 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-surface2/95" />
                </div>
              </div>
            )}
            
            {/* Hover tooltip - subtle */}
            <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <div className="bg-surface2/90 backdrop-blur-sm border border-border rounded-md shadow-md px-2 py-1 whitespace-nowrap">
                <p className="text-xs text-muted">BGM</p>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-surface border border-border rounded-xl shadow-lg p-4 w-64 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-text">Ambient Sound</span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="Close ambient player"
              >
                <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-accent hover:bg-accent/90 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-white" fill="white" strokeWidth={0} />
                ) : (
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" strokeWidth={0} />
                )}
              </button>
              <div className="flex-1 flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" strokeWidth={2} /> : <Volume2 className="w-4 h-4" strokeWidth={2} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-1 bg-surface2 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
                  aria-label="Volume"
                />
              </div>
            </div>
            <p className="text-xs text-muted2">
              {isPlaying ? "Playing" : "Paused"} • {Math.round(volume * 100)}%
            </p>
          </div>
        )}
      </div>
    </>
  );
}
