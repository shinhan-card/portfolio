"use client";

import { useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-200px)]">
        <Section background="gray">
          <div className="max-w-2xl mx-auto text-center py-20 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
              <div className="absolute top-0 left-10 text-6xl">⚠️</div>
              <div className="absolute top-0 right-10 text-6xl">🔧</div>
              <div className="absolute bottom-0 left-20 text-5xl">💥</div>
              <div className="absolute bottom-0 right-20 text-5xl">🛠️</div>
            </div>
            
            {/* Error Icon */}
            <div className="mb-8 relative">
              <div className="text-7xl mb-4">😓</div>
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

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4 relative">
              Something went wrong
            </h2>

            {/* Subtitle */}
            <p className="text-lg text-muted mb-4 max-w-lg mx-auto">
              We apologize for the inconvenience. An unexpected error occurred.
            </p>

            {process.env.NODE_ENV === "development" && (
              <div className="mb-8 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-left">
                <p className="text-sm font-mono text-red-600 dark:text-red-400 break-words">
                  {error.message}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={reset} variant="primary" size="lg">
                Try Again
              </Button>
              <Button href="/" variant="secondary" size="lg">
                Go to Home
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
