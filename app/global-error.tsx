"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-4 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
            <div className="absolute top-20 left-20 text-8xl">💥</div>
            <div className="absolute top-20 right-20 text-8xl">⚠️</div>
            <div className="absolute bottom-20 left-1/3 text-7xl">🔥</div>
            <div className="absolute bottom-20 right-1/3 text-7xl">🚨</div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center relative">
            <div className="mb-8">
              <div className="text-8xl mb-4">😱</div>
              <svg
                className="w-20 h-20 mx-auto text-red-500 opacity-80"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              Critical Error
            </h2>

            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-lg mx-auto">
              A critical error occurred. Please try refreshing the page.
            </p>

            <button
              onClick={reset}
              className="px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
