"use client";

import { motion } from "framer-motion";
import { Network, ArrowRight } from "lucide-react";
import type { SystemDiagram } from "@/types";
import Card from "./ui/Card";

interface SystemDiagramSectionProps {
  diagram: SystemDiagram;
}

export default function SystemDiagramSection({
  diagram,
}: SystemDiagramSectionProps) {
  if (!diagram) return null;

  const getComponentColor = (type: string) => {
    switch (type) {
      case "user":
        return "bg-purple-500/10 border-purple-500/50 text-purple-700 dark:text-purple-300";
      case "system":
        return "bg-accent/10 border-accent/50 text-accent";
      case "service":
        return "bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-300";
      case "external":
        return "bg-orange-500/10 border-orange-500/50 text-orange-700 dark:text-orange-300";
      case "data":
        return "bg-blue-500/10 border-blue-500/50 text-blue-700 dark:text-blue-300";
      default:
        return "bg-surface2 border-border text-text";
    }
  };

  const getComponentIcon = (type: string) => {
    switch (type) {
      case "user":
        return "👤";
      case "system":
        return "⚙️";
      case "service":
        return "📦";
      case "external":
        return "🔌";
      case "data":
        return "💾";
      default:
        return "◼️";
    }
  };

  // Simple grid-based layout
  const renderSimpleLayout = () => {
    return (
      <div className="relative">
        {/* Components */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {diagram.components.map((component, index) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`p-4 border-2 ${getComponentColor(
                  component.type
                )} text-center`}
              >
                <div className="text-2xl mb-2">
                  {getComponentIcon(component.type)}
                </div>
                <p className="text-sm font-bold">{component.label}</p>
                <p className="text-xs opacity-70 mt-1 capitalize">
                  {component.type}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Connection legend */}
        <Card className="p-4 bg-surface2">
          <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-3">
            Key Connections
          </p>
          <div className="space-y-2">
            {diagram.connections.slice(0, 6).map((conn, i) => {
              const fromComp = diagram.components.find(
                (c) => c.id === conn.from
              );
              const toComp = diagram.components.find((c) => c.id === conn.to);
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-muted"
                >
                  <span className="font-medium text-text">
                    {fromComp?.label}
                  </span>
                  <ArrowRight className="w-3 h-3 text-accent" />
                  <span className="font-medium text-text">{toComp?.label}</span>
                  {conn.label && (
                    <span className="text-muted2 italic">({conn.label})</span>
                  )}
                </div>
              );
            })}
            {diagram.connections.length > 6 && (
              <p className="text-xs text-muted2 italic mt-2">
                + {diagram.connections.length - 6} more connections
              </p>
            )}
          </div>
        </Card>
      </div>
    );
  };

  return (
    <section className="mb-16">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-text mb-3 flex items-center gap-3">
          <Network className="w-6 h-6 text-accent" />
          System View: {diagram.title}
        </h2>
        <p className="text-base text-muted max-w-3xl">{diagram.description}</p>
        <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-lg">
          <span className="text-xs font-mono uppercase tracking-wide text-accent">
            {diagram.type === "architecture"
              ? "Architecture"
              : diagram.type === "flow"
              ? "Flow Diagram"
              : "Sequence"}
          </span>
        </div>
      </div>

      {renderSimpleLayout()}

      {/* Component legend */}
      <div className="mt-6 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded bg-purple-500/50" />
          <span className="text-muted">User/Client</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded bg-accent/50" />
          <span className="text-muted">Core System</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded bg-green-500/50" />
          <span className="text-muted">Service</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded bg-orange-500/50" />
          <span className="text-muted">External</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <div className="w-3 h-3 rounded bg-blue-500/50" />
          <span className="text-muted">Data Store</span>
        </div>
      </div>

      {/* Insight callout */}
      <div className="mt-6 p-4 bg-accent/5 border border-accent/20 rounded-lg">
        <p className="text-sm text-muted italic">
          <strong className="text-accent">System Thinking:</strong> This
          conceptual view demonstrates understanding of system-level interactions,
          dependencies, and architectural decisions—not technical implementation
          details.
        </p>
      </div>
    </section>
  );
}
