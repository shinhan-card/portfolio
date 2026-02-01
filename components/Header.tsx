"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useAmbient } from "@/lib/ambient/AmbientContext";
import LanguageToggle from "./ui/LanguageToggle";
import ThemeToggle from "./ui/ThemeToggle";
import Button from "./ui/Button";
import { Volume2, VolumeX, Menu, X, Waves, Keyboard } from "lucide-react";
import { useSound } from "@/lib/sound/SoundContext";

const navItems = [
  { href: "/", key: "nav.home", match: (path: string) => path === "/" },
  { href: "/resume", key: "nav.resume", match: (path: string) => path === "/resume" },
  { href: "/about", key: "nav.about", match: (path: string) => path === "/about" },
  { href: "/projects", key: "nav.caseStudies", match: (path: string) => path.startsWith("/case-studies") || path === "/projects" },
  { href: "/guestbook", key: "nav.guestbook", match: (path: string) => path === "/guestbook" },
] as const;

function NavLink({
  href,
  label,
  isActive,
}: {
  href: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <Link
      href={href}
      className={`
        relative inline-block text-sm font-medium transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded
        ${isActive ? "text-text" : "text-muted hover:text-text"}
        after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:origin-center after:transition-transform after:duration-200
        hover:after:scale-x-100
        ${isActive ? "after:scale-x-100 after:bg-accent" : "after:scale-x-0 after:bg-current hover:after:scale-x-100"}
      `}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t, language } = useLanguage();
  const ambient = useAmbient();
  const sound = useSound();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        border-b border-border/50
        ${scrolled ? "py-2.5 bg-bg/95 backdrop-blur-md border-border shadow-lg" : "py-3.5 bg-bg/60 backdrop-blur-sm"}
      `}
    >
      <nav className="container-premium" aria-label="Main navigation">
        <div className="flex items-center justify-between h-11">
          {/* Text logo — subtle, responsive */}
          <Link
            href="/"
            className="text-sm sm:text-base font-medium text-text hover:text-muted transition-colors tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded whitespace-nowrap"
            aria-label={language === "ko" ? "홈" : "Home"}
          >
            <span className="hidden xs:inline">윤태웅 (Eric Yoon)</span>
            <span className="inline xs:hidden">윤태웅</span>
          </Link>

          {/* Right: nav (desktop only) + CTA + controls (always in main header) */}
          <div className="flex items-center gap-3 md:gap-8">
            {/* Desktop: nav links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map(({ href, key, match }) => (
                <NavLink
                  key={key}
                  href={href}
                  label={t(key)}
                  isActive={match(pathname || "")}
                />
              ))}
            </div>

            {/* CTA — main header only (no duplicate in hamburger) */}
            <Button
              href="/#contact"
              variant="secondary"
              size="sm"
              className="shrink-0"
            >
              {t("nav.contact")}
            </Button>

            {/* Controls: always in main header (desktop + mobile) */}
            <div className="flex items-center gap-1.5" role="group" aria-label="Settings">
              <LanguageToggle />
              <ThemeToggle />
              <button
                type="button"
                onClick={() => window.dispatchEvent(new Event("open-keyboard-hint"))}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-muted hover:text-text border border-transparent hover:border-border bg-transparent hover:bg-surface2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                aria-label={language === "ko" ? "키보드 단축키 보기" : "Show keyboard shortcuts"}
              >
                <Keyboard className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>

            {/* Mobile: hamburger only */}
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-md text-muted hover:text-text hover:bg-surface2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — nav links only, selected item has background */}
      <div
        id="mobile-menu"
        className={`
          md:hidden absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-md border-b border-border shadow-lg
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
          ${mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="container-premium py-8 flex flex-col gap-2">
          {navItems.map(({ href, key, match }) => {
            const isActive = match(pathname || "");
            return (
              <Link
                key={key}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`
                  py-3.5 px-5 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive ? "text-text bg-accent/10 border border-accent/30" : "text-muted hover:text-text hover:bg-surface2 border border-transparent"}
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset
                  active:scale-[0.98]
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {t(key)}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
