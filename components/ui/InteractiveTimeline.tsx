"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Briefcase, Calendar } from "lucide-react";
import Card from "./Card";
import Badge from "./Badge";

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  company?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  current?: boolean;
}

interface InteractiveTimelineProps {
  items: TimelineItem[];
  variant?: "vertical" | "horizontal";
}

export default function InteractiveTimeline({
  items,
  variant = "vertical",
}: InteractiveTimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  if (variant === "horizontal") {
    // Horizontal timeline for high-level overview
    return (
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20" />
        
        <div className="flex gap-8 overflow-x-auto pb-4 scroll-smooth">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-64"
            >
              {/* Node */}
              <div className="relative flex items-center justify-center mb-4">
                <div
                  className={`w-4 h-4 rounded-full border-4 border-bg z-10 transition-all duration-300 ${
                    item.current
                      ? "bg-accent shadow-lg shadow-accent/50 scale-125"
                      : hoveredId === item.id
                      ? "bg-accent scale-110"
                      : "bg-surface2 scale-100"
                  }`}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
              </div>

              {/* Card */}
              <Card
                hover
                className={`p-4 cursor-pointer transition-all ${
                  hoveredId === item.id ? "shadow-xl" : ""
                }`}
                onClick={() => toggleExpand(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-xs font-mono text-muted2 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </p>
                  {item.current && (
                    <Badge variant="accent" className="text-xs px-2 py-0.5">
                      Current
                    </Badge>
                  )}
                </div>
                <h4 className="text-sm font-bold text-text mb-1 line-clamp-2">
                  {item.title}
                </h4>
                {item.company && (
                  <p className="text-xs text-muted line-clamp-1 flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {item.company}
                  </p>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Vertical timeline with expand/collapse
  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isExpanded = expandedId === item.id;
        const isHovered = hoveredId === item.id;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < items.length - 1 && (
              <div className="absolute left-[11px] top-12 w-0.5 h-[calc(100%+1rem)] bg-gradient-to-b from-accent/50 to-accent/10" />
            )}

            <div className="flex gap-4">
              {/* Timeline node */}
              <div className="relative flex-shrink-0 pt-1">
                <motion.div
                  className={`w-6 h-6 rounded-full border-4 border-bg transition-all duration-300 flex items-center justify-center ${
                    item.current
                      ? "bg-accent shadow-lg shadow-accent/50"
                      : isHovered || isExpanded
                      ? "bg-accent"
                      : "bg-surface2"
                  }`}
                  animate={{
                    scale: item.current ? [1, 1.2, 1] : isHovered ? 1.1 : 1,
                  }}
                  transition={{
                    scale: item.current
                      ? { repeat: Infinity, duration: 2 }
                      : { duration: 0.2 },
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {item.current && (
                    <div className="w-2 h-2 bg-white rounded-full" />
                  )}
                </motion.div>
              </div>

              {/* Content */}
              <Card
                hover
                className={`flex-1 p-6 cursor-pointer transition-all duration-300 ${
                  isExpanded ? "shadow-xl ring-2 ring-accent/20" : ""
                }`}
                onClick={() => toggleExpand(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <p className="text-xs font-mono text-muted2 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </p>
                      {item.current && (
                        <Badge variant="accent" className="text-xs px-2 py-1">
                          ✓ Current
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-text mb-1">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-sm text-muted mb-2">{item.subtitle}</p>
                    )}
                    {item.company && (
                      <p className="text-sm text-muted2 flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {item.company}
                      </p>
                    )}
                  </div>

                  {/* Expand icon */}
                  <motion.button
                    className="flex-shrink-0 p-1 rounded-lg hover:bg-surface2 transition-colors"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                  >
                    <ChevronDown className="w-5 h-5 text-muted" />
                  </motion.button>
                </div>

                {/* Description (always visible if short) */}
                {item.description && !isExpanded && (
                  <p className="text-sm text-muted line-clamp-2 mb-3">
                    {item.description}
                  </p>
                )}

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
                      <div className="pt-3 border-t border-border space-y-4">
                        {item.description && (
                          <p className="text-sm text-muted leading-relaxed">
                            {item.description}
                          </p>
                        )}

                        {item.highlights && item.highlights.length > 0 && (
                          <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-muted2 mb-3">
                              Key Highlights
                            </p>
                            <ul className="space-y-2">
                              {item.highlights.map((highlight, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.05 }}
                                  className="flex gap-2 text-sm text-text"
                                >
                                  <span className="text-accent mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>{highlight}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div>
                            <p className="text-xs font-mono uppercase tracking-wider text-muted2 mb-2">
                              Technologies & Skills
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <Badge key={tag} className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
