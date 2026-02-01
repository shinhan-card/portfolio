"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check, X, AlertTriangle, Scale } from "lucide-react";
import type { DecisionLog } from "@/types";
import Card from "./ui/Card";

interface DecisionLogSectionProps {
  decisions: DecisionLog[];
  title?: string;
}

export default function DecisionLogSection({
  decisions,
  title = "Key Decisions & Trade-offs",
}: DecisionLogSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!decisions || decisions.length === 0) return null;

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text mb-3 flex items-center gap-3">
          <Scale className="w-6 h-6 text-accent" />
          {title}
        </h2>
        <p className="text-base text-muted max-w-3xl">
          What we chose, what we didn't, and why — demonstrating product judgment
          under real constraints.
        </p>
      </div>

      <div className="space-y-4">
        {decisions.map((decision, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <Card
              key={index}
              className="overflow-hidden border-l-4 border-accent hover:shadow-xl transition-shadow"
            >
              {/* Header - Always visible */}
              <button
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : index)
                }
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-inset"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-1">
                          Decision {index + 1}
                        </p>
                        <p className="text-base font-bold text-text">
                          {decision.chosen}
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-muted" />
                  </motion.div>
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2 space-y-6 border-t border-border">
                      {/* What we didn't choose */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <X className="w-4 h-4 text-red-500" />
                          <h4 className="text-sm font-bold text-text uppercase tracking-wide">
                            What We Didn't Choose
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {decision.notChosen.map((option, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-muted"
                            >
                              <span className="text-red-400 mt-1">•</span>
                              <span className="line-through opacity-70">
                                {option}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Reasoning */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Scale className="w-4 h-4 text-accent" />
                          <h4 className="text-sm font-bold text-text uppercase tracking-wide">
                            Reasoning
                          </h4>
                        </div>
                        <p className="text-sm text-text leading-relaxed">
                          {decision.reasoning}
                        </p>
                      </div>

                      {/* Risks */}
                      {decision.risks && decision.risks.length > 0 && (
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="w-4 h-4 text-yellow-500" />
                            <h4 className="text-sm font-bold text-text uppercase tracking-wide">
                              Known Risks
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {decision.risks.map((risk, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-muted"
                              >
                                <span className="text-yellow-500 mt-1">⚠</span>
                                <span>{risk}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Trade-offs */}
                      <div className="bg-surface2 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Scale className="w-4 h-4 text-purple-500" />
                          <h4 className="text-sm font-bold text-text uppercase tracking-wide">
                            Trade-off Analysis
                          </h4>
                        </div>
                        <p className="text-sm text-text leading-relaxed">
                          {decision.tradeoffs}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          );
        })}
      </div>

      {/* Insight callout */}
      <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <p className="text-sm text-muted italic">
          <strong className="text-accent">Product Insight:</strong> These
          decisions demonstrate judgment under constraint—choosing viable paths
          while acknowledging trade-offs and risks. Every "no" is as important as
          every "yes."
        </p>
      </div>
    </section>
  );
}
