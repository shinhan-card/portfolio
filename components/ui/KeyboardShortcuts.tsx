"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function KeyboardShortcuts() {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input/textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        (e.target as HTMLElement).isContentEditable
      ) {
        return;
      }

      // Home: Press 'h'
      if (e.key === "h" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        router.push("/");
      }

      // Resume: Press 'r'
      if (e.key === "r" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        router.push("/resume");
      }

      // Projects: Press 'p'
      if (e.key === "p" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        router.push("/#projects");
      }

      // Guestbook: Press 'g'
      if (e.key === "g" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        router.push("/guestbook");
      }

      // Contact: Press 'c'
      if (e.key === "c" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        router.push("/#contact");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  return null;
}
