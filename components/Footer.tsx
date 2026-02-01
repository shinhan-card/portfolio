"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-surface dark:bg-surface2/50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 text-8xl">💼</div>
        <div className="absolute top-0 right-0 text-8xl">🚀</div>
        <div className="absolute bottom-0 left-1/4 text-8xl">⚡</div>
        <div className="absolute bottom-0 right-1/4 text-8xl">🎯</div>
      </div>
      
      <div className="container-premium section-premium relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-base mb-2 text-text flex items-center gap-2">
              👋 윤태웅 (Eric Yoon)
            </h3>
            <p className="text-sm text-muted flex items-center gap-2">
              <span>💳</span> {t("footer.role")}
            </p>
            <p className="text-sm text-muted mt-1 flex items-center gap-2">
              <span>🔐</span> {t("footer.focus")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text flex items-center gap-2">
              🔗 {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#projects"
                  className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent focus-visible:underline rounded-sm"
                >
                  {t("nav.caseStudies")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent focus-visible:underline rounded-sm"
                >
                  {t("nav.skills")}
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent focus-visible:underline rounded-sm"
                >
                  {t("nav.resume")}
                </Link>
              </li>
              <li>
                <Link
                  href="/guestbook"
                  className="text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:text-accent focus-visible:underline rounded-sm"
                >
                  {t("nav.guestbook")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-text flex items-center gap-2">
              🌐 {t("footer.connect")}
            </h4>
            <div className="flex flex-wrap gap-3">
              {siteConfig.links.linkedin && (
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-surface2 hover:bg-accent/10 border border-border hover:border-accent/30 text-muted hover:text-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={2} />
                  <span className="text-xs font-medium">LinkedIn</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
                </a>
              )}
              {siteConfig.links.email && (
                <a
                  href={`mailto:${siteConfig.links.email}`}
                  className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-surface2 hover:bg-accent/10 border border-border hover:border-accent/30 text-muted hover:text-accent transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" strokeWidth={2} />
                  <span className="text-xs font-medium">Email</span>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="hairline mb-8" />

        <div className="text-center text-sm text-muted2">
          <p className="flex items-center justify-center gap-2">
            <span>©</span>
            <span>{currentYear}</span>
            <span>•</span>
            <span>윤태웅 (Eric Yoon)</span>
            <span>•</span>
            <span>{t("footer.copyright")}</span>
            <span>✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
