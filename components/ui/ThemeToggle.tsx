"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useSound } from "@/lib/sound/SoundContext";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const sound = useSound();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-surface text-muted"
        disabled
        aria-label="Toggle theme"
      >
        <div className="w-4 h-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        sound?.playToggle(next === "dark");
      }}
      className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border bg-surface text-muted hover:text-text hover:bg-surface2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" strokeWidth={2} />
      ) : (
        <Moon className="w-4 h-4" strokeWidth={2} />
      )}
    </button>
  );
}
