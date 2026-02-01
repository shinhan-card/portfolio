"use client";

import { GuestbookEntry } from "@/lib/supabase/client";
import Card from "../ui/Card";

interface GuestbookEntryCardProps {
  entry: GuestbookEntry;
}

export default function GuestbookEntryCard({ entry }: GuestbookEntryCardProps) {
  const date = new Date(entry.created_at);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Card className="p-6 hover:border-accent/30 transition-colors group relative overflow-hidden">
      {/* Background emoji decoration */}
      <div className="absolute top-2 right-2 text-4xl opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none">
        💬
      </div>
      
      <div className="flex items-start justify-between gap-4 mb-3 relative">
        <div className="flex items-start gap-3 flex-1">
          {/* Avatar circle with emoji */}
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-lg">
            👤
          </div>
          <div className="flex-1 min-w-0">
            {entry.name && (
              <p className="font-medium text-text">{entry.name}</p>
            )}
            {entry.company && (
              <p className="text-sm text-muted2 flex items-center gap-1.5">
                <span className="text-xs">🏢</span>
                {entry.company}
              </p>
            )}
            {!entry.name && !entry.company && (
              <p className="text-sm text-muted2 flex items-center gap-1.5">
                <span className="text-xs">👻</span>
                Anonymous
              </p>
            )}
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-xs font-mono text-muted2 flex items-center gap-1">
            <span>📅</span>
            {formattedDate}
          </p>
          <p className="text-xs font-mono text-muted2 flex items-center gap-1">
            <span>🕐</span>
            {formattedTime}
          </p>
        </div>
      </div>
      <p className="text-muted leading-relaxed whitespace-pre-wrap break-words relative">
        {entry.message}
      </p>
    </Card>
  );
}
