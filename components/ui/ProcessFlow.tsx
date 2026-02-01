"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Circle } from "lucide-react";
import Card from "./Card";

export interface FlowStep {
  id: string;
  label: string;
  description?: string;
  status?: "completed" | "in-progress" | "pending" | "warning";
  icon?: string;
  substeps?: string[];
}

interface ProcessFlowProps {
  steps: FlowStep[];
  title?: string;
  variant?: "horizontal" | "vertical" | "grid";
  animated?: boolean;
}

export default function ProcessFlow({
  steps,
  title,
  variant = "horizontal",
  animated = true,
}: ProcessFlowProps) {
  const getStatusIcon = (status?: FlowStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-green-500" />;
      case "in-progress":
        return (
          <Circle className="w-5 h-5 text-accent animate-pulse fill-accent" />
        );
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      default:
        return <Circle className="w-5 h-5 text-muted2" />;
    }
  };

  const getStatusColor = (status?: FlowStep["status"]) => {
    switch (status) {
      case "completed":
        return "border-green-500/30 bg-green-500/5";
      case "in-progress":
        return "border-accent/50 bg-accent/5";
      case "warning":
        return "border-yellow-500/30 bg-yellow-500/5";
      default:
        return "border-border bg-surface";
    }
  };

  if (variant === "grid") {
    return (
      <div>
        {title && (
          <h4 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            {title}
          </h4>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={animated ? { opacity: 0, scale: 0.9 } : undefined}
              animate={animated ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`p-5 h-full border-2 transition-all hover:shadow-lg ${getStatusColor(
                  step.status
                )}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(step.status)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      {step.icon && <span className="text-lg">{step.icon}</span>}
                      <span className="text-xs font-mono text-muted2">
                        Step {index + 1}
                      </span>
                    </div>
                    <h5 className="text-sm font-bold text-text mb-2">
                      {step.label}
                    </h5>
                    {step.description && (
                      <p className="text-xs text-muted leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>

                {step.substeps && step.substeps.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <ul className="space-y-1.5">
                      {step.substeps.map((substep, i) => (
                        <li
                          key={i}
                          className="text-xs text-muted flex items-start gap-2"
                        >
                          <span className="text-accent mt-0.5 flex-shrink-0">
                            ·
                          </span>
                          <span>{substep}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div>
        {title && (
          <h4 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
            <span className="text-2xl">🔄</span>
            {title}
          </h4>
        )}
        <div className="space-y-3 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-gradient-to-b from-accent/50 via-accent/20 to-accent/10" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={animated ? { opacity: 0, x: -20 } : undefined}
              animate={animated ? { opacity: 1, x: 0 } : undefined}
              transition={{ delay: index * 0.15 }}
              className="relative flex gap-4"
            >
              {/* Node */}
              <div className="flex-shrink-0 pt-1 z-10">
                <div
                  className={`w-10 h-10 rounded-full border-4 border-bg flex items-center justify-center shadow-sm ${
                    step.status === "completed"
                      ? "bg-green-500"
                      : step.status === "in-progress"
                      ? "bg-accent"
                      : step.status === "warning"
                      ? "bg-yellow-500"
                      : "bg-surface2"
                  }`}
                >
                  {step.icon ? (
                    <span className="text-sm">{step.icon}</span>
                  ) : (
                    <span className="text-xs font-bold text-white">
                      {index + 1}
                    </span>
                  )}
                </div>
              </div>

              {/* Content card */}
              <Card className="flex-1 p-4 border-l-4 border-accent/30">
                <h5 className="text-base font-bold text-text mb-2">
                  {step.label}
                </h5>
                {step.description && (
                  <p className="text-sm text-muted mb-3 leading-relaxed">
                    {step.description}
                  </p>
                )}
                {step.substeps && step.substeps.length > 0 && (
                  <ul className="space-y-1.5 mt-3">
                    {step.substeps.map((substep, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">•</span>
                        <span>{substep}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Horizontal (default)
  return (
    <div className="w-full overflow-x-auto pb-4">
      {title && (
        <h4 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
          <span className="text-2xl">→</span>
          {title}
        </h4>
      )}
      <div className="flex items-start gap-4 min-w-max">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center gap-4">
            <motion.div
              initial={animated ? { opacity: 0, scale: 0.8 } : undefined}
              animate={animated ? { opacity: 1, scale: 1 } : undefined}
              transition={{ delay: index * 0.1 }}
              className="w-64"
            >
              <Card
                className={`p-5 border-2 transition-all hover:shadow-xl h-full ${getStatusColor(
                  step.status
                )}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  {step.icon && <span className="text-2xl">{step.icon}</span>}
                  <div className="flex-shrink-0">
                    {getStatusIcon(step.status)}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-mono text-muted2 block mb-1">
                    Step {index + 1}
                  </span>
                  <h5 className="text-base font-bold text-text">{step.label}</h5>
                </div>

                {step.description && (
                  <p className="text-xs text-muted leading-relaxed mb-3">
                    {step.description}
                  </p>
                )}

                {step.substeps && step.substeps.length > 0 && (
                  <ul className="space-y-1.5 border-t border-border pt-3">
                    {step.substeps.map((substep, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 flex-shrink-0">·</span>
                        <span>{substep}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            </motion.div>

            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <motion.div
                initial={animated ? { opacity: 0, x: -10 } : undefined}
                animate={animated ? { opacity: 1, x: 0 } : undefined}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="flex-shrink-0"
              >
                <ArrowRight className="w-6 h-6 text-accent" strokeWidth={2.5} />
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
