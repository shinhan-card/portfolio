"use client";

import { useEffect } from "react";

/**
 * Auto-scroll to element and highlight it temporarily
 */
export function useScrollToHighlight() {
  useEffect(() => {
    // Check for hash in URL
    const hash = window.location.hash;
    if (!hash) return;

    const elementId = hash.substring(1); // Remove #
    const element = document.getElementById(elementId);
    
    if (element) {
      // Scroll to element with offset for fixed header
      setTimeout(() => {
        const yOffset = -100; // Header height + padding
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });

        // Add highlight class
        element.classList.add("highlight-target");
        
        // Remove highlight after 3 seconds
        setTimeout(() => {
          element.classList.remove("highlight-target");
        }, 3000);
      }, 100);
    }
  }, []);
}
