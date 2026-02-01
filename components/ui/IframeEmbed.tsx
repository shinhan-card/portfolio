"use client";

import { ExternalLink } from "lucide-react";

interface IframeEmbedProps {
  url: string;
  title?: string;
  height?: string;
}

export default function IframeEmbed({
  url,
  title = "External content",
  height = "600px",
}: IframeEmbedProps) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden border-2 border-border bg-surface2 shadow-lg">
      {/* Header with external link */}
      <div className="flex items-center justify-between px-4 py-3 bg-surface border-b border-border">
        <p className="text-sm font-medium text-text">{title}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-accent hover:text-accent-2 transition-colors group"
        >
          <span>새 창에서 열기</span>
          <ExternalLink className="w-3 h-3 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* iframe */}
      <iframe
        src={url}
        title={title}
        className="w-full"
        style={{ height }}
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}
