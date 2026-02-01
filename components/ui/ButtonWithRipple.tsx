"use client";

import { useState, MouseEvent } from "react";

interface RippleEffect {
  x: number;
  y: number;
  size: number;
  id: number;
}

export function useRipple() {
  const [ripples, setRipples] = useState<RippleEffect[]>([]);

  const addRipple = (event: MouseEvent<HTMLElement>) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, size, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  const RippleContainer = () => (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
    </>
  );

  return { addRipple, RippleContainer };
}
