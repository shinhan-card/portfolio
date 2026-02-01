"use client";

import { CheckCircle2 } from "lucide-react";
import Card from "./Card";

interface ExecutiveSummaryProps {
  bullets: string[];
  meta?: {
    role?: string;
    scope?: string;
    timeline?: string;
  };
}

export default function ExecutiveSummary({
  bullets,
  meta,
}: ExecutiveSummaryProps) {
  return (
    <Card className="p-8 bg-surface border-border">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 bg-accent rounded-full" />
        <h3 className="text-lg font-bold text-text">
          Executive Summary
        </h3>
      </div>

      {meta && (
        <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-border">
          {meta.role && (
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-1">
                Role
              </p>
              <p className="text-sm font-medium text-text">
                {meta.role}
              </p>
            </div>
          )}
          {meta.scope && (
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-1">
                Scope
              </p>
              <p className="text-sm font-medium text-text">
                {meta.scope}
              </p>
            </div>
          )}
          {meta.timeline && (
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted2 mb-1">
                Timeline
              </p>
              <p className="text-sm font-medium text-text">
                {meta.timeline}
              </p>
            </div>
          )}
        </div>
      )}

      <ul className="space-y-3">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
              strokeWidth={2}
            />
            <span className="text-sm text-muted leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
