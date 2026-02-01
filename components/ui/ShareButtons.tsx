"use client";

import { useState } from "react";
import { Share2, Twitter, Linkedin, Link as LinkIcon, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const { language } = useLanguage();

  const text = language === "ko" ? {
    share: "공유",
    copied: "복사됨!",
    copyLink: "링크 복사",
  } : {
    share: "Share",
    copied: "Copied!",
    copyLink: "Copy link",
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const shareToLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted mr-2 flex items-center gap-2">
        <Share2 className="w-4 h-4" />
        {text.share}
      </span>
      <button
        onClick={shareToTwitter}
        className="p-2 rounded-md hover:bg-surface2 text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label="Share on Twitter"
      >
        <Twitter className="w-4 h-4" strokeWidth={2} />
      </button>
      <button
        onClick={shareToLinkedIn}
        className="p-2 rounded-md hover:bg-surface2 text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="w-4 h-4" strokeWidth={2} />
      </button>
      <button
        onClick={handleCopyLink}
        className="p-2 rounded-md hover:bg-surface2 text-muted hover:text-text transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        aria-label={text.copyLink}
      >
        {copied ? (
          <Check className="w-4 h-4 text-accent" strokeWidth={2} />
        ) : (
          <LinkIcon className="w-4 h-4" strokeWidth={2} />
        )}
      </button>
    </div>
  );
}
