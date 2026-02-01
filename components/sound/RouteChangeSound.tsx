"use client";

import { usePathname } from "next/navigation";
import { useSound } from "@/lib/sound/SoundContext";
import { useEffect, useRef } from "react";

export default function RouteChangeSound() {
  const pathname = usePathname();
  const sound = useSound();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    sound?.playNavWhoosh();
  }, [pathname, sound]);

  return null;
}
