"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";

const SFX_BASE = "/sfx";
const FILES = {
  navWhoosh: `${SFX_BASE}/nav-whoosh.mp3`,
  tapSoft: `${SFX_BASE}/tap-soft.mp3`,
  toggleOn: `${SFX_BASE}/toggle-on.mp3`,
  toggleOff: `${SFX_BASE}/toggle-off.mp3`,
  successSoft: `${SFX_BASE}/success-soft.mp3`,
} as const;

const STORAGE_UI_SOUND = "ui-sound-enabled";
const STORAGE_UI_VOLUME = "ui-sound-volume";
const MAX_VOLUME = 0.3;
const COOLDOWN_MS = 120;

type SoundContextValue = {
  uiSoundEnabled: boolean;
  setUiSoundEnabled: (v: boolean) => void;
  uiSoundVolume: number;
  playNavWhoosh: () => void;
  playTap: () => void;
  playToggle: (isOn: boolean) => void;
  playSuccess: () => void;
};

const SoundContext = createContext<SoundContextValue | null>(null);

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function createPool(src: string, poolSize = 2): HTMLAudioElement[] {
  const pool: HTMLAudioElement[] = [];
  for (let i = 0; i < poolSize; i++) {
    const a = new Audio(src);
    a.preload = "auto";
    a.load();
    pool.push(a);
  }
  return pool;
}

export function SoundProvider({ children }: { children: ReactNode }) {
  const [uiSoundEnabled, setUiSoundEnabledState] = useState(false);
  const [uiSoundVolume, setUiSoundVolume] = useState(0.2);
  const [mounted, setMounted] = useState(false);
  const reducedMotion = useReducedMotion();

  const poolRef = useRef<{
    navWhoosh: HTMLAudioElement[];
    tapSoft: HTMLAudioElement[];
    toggleOn: HTMLAudioElement[];
    toggleOff: HTMLAudioElement[];
    successSoft: HTMLAudioElement[];
  } | null>(null);
  const lastPlayedRef = useRef<Record<string, number>>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_UI_SOUND);
    if (stored === "true") setUiSoundEnabledState(true);
    const vol = localStorage.getItem(STORAGE_UI_VOLUME);
    if (vol != null) {
      const v = parseFloat(vol);
      if (!Number.isNaN(v)) setUiSoundVolume(Math.min(MAX_VOLUME, Math.max(0, v)));
    }
  }, [mounted]);

  const setUiSoundEnabled = useCallback((v: boolean) => {
    setUiSoundEnabledState(v);
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_UI_SOUND, String(v));
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(STORAGE_UI_VOLUME, String(uiSoundVolume));
  }, [mounted, uiSoundVolume]);

  useEffect(() => {
    if (!mounted) return;
    poolRef.current = {
      navWhoosh: createPool(FILES.navWhoosh),
      tapSoft: createPool(FILES.tapSoft),
      toggleOn: createPool(FILES.toggleOn),
      toggleOff: createPool(FILES.toggleOff),
      successSoft: createPool(FILES.successSoft),
    };
    return () => {
      poolRef.current = null;
    };
  }, [mounted]);

  const play = useCallback(
    (key: keyof typeof FILES, which: "navWhoosh" | "tapSoft" | "toggleOn" | "toggleOff" | "successSoft") => {
      if (!uiSoundEnabled || reducedMotion || !poolRef.current) return;
      const now = Date.now();
      if (now - (lastPlayedRef.current[which] ?? 0) < COOLDOWN_MS) return;
      lastPlayedRef.current[which] = now;
      const pool = poolRef.current[which];
      const el = pool.find((a) => a.ended || a.readyState === 0) ?? pool[0];
      el.volume = Math.min(MAX_VOLUME, uiSoundVolume);
      el.currentTime = 0;
      el.play().catch(() => {});
    },
    [uiSoundEnabled, reducedMotion, uiSoundVolume]
  );

  const playNavWhoosh = useCallback(() => {
    play("navWhoosh", "navWhoosh");
  }, [play]);

  const playTap = useCallback(() => {
    play("tapSoft", "tapSoft");
  }, [play]);

  const playToggle = useCallback(
    (isOn: boolean) => {
      play(isOn ? "toggleOn" : "toggleOff", isOn ? "toggleOn" : "toggleOff");
    },
    [play]
  );

  const playSuccess = useCallback(() => {
    play("successSoft", "successSoft");
  }, [play]);

  const value: SoundContextValue = {
    uiSoundEnabled,
    setUiSoundEnabled,
    uiSoundVolume,
    playNavWhoosh,
    playTap,
    playToggle,
    playSuccess,
  };

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
}

export function useSound() {
  const ctx = useContext(SoundContext);
  return ctx;
}
