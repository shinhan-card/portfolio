"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";

interface AmbientContextValue {
  isPlaying: boolean;
  togglePlay: () => void;
}

const AmbientContext = createContext<AmbientContextValue | null>(null);

const STORAGE_KEY = "ambient-playing";

export function AmbientProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "true") setIsPlaying(true);
  }, [mounted]);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, String(next));
      }
      return next;
    });
  }, []);

  const value: AmbientContextValue = { isPlaying, togglePlay };

  return (
    <AmbientContext.Provider value={value}>{children}</AmbientContext.Provider>
  );
}

export function useAmbient() {
  const ctx = useContext(AmbientContext);
  return ctx;
}
