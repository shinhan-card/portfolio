"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoadingBar() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-0.5 bg-accent z-[100] transition-all duration-500 ${
        loading ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: loading ? "scaleX(0.7)" : "scaleX(1)",
        transformOrigin: "left",
      }}
    />
  );
}
