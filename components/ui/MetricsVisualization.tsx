"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, TrendingDown, Minus, ArrowUpRight } from "lucide-react";
import Card from "./Card";

export interface MetricData {
  label: string;
  value: string | number;
  change?: number; // Percentage change
  trend?: "up" | "down" | "neutral";
  description?: string;
  icon?: string;
  format?: "number" | "percentage" | "currency" | "text";
  target?: number;
  color?: "accent" | "green" | "yellow" | "red";
}

interface MetricsVisualizationProps {
  metrics: MetricData[];
  title?: string;
  variant?: "cards" | "bars" | "compact";
  animated?: boolean;
}

export default function MetricsVisualization({
  metrics,
  title,
  variant = "cards",
  animated = true,
}: MetricsVisualizationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getTrendIcon = (trend?: MetricData["trend"]) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4" />;
      case "down":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getTrendColor = (trend?: MetricData["trend"]) => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      default:
        return "text-muted2";
    }
  };

  const getColorClass = (color?: MetricData["color"]) => {
    switch (color) {
      case "green":
        return "from-green-500/20 to-green-500/5 border-green-500/30";
      case "yellow":
        return "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30";
      case "red":
        return "from-red-500/20 to-red-500/5 border-red-500/30";
      default:
        return "from-accent/20 to-accent/5 border-accent/30";
    }
  };

  const formatValue = (value: string | number, format?: MetricData["format"]) => {
    if (typeof value === "string") return value;
    
    switch (format) {
      case "percentage":
        return `${value}%`;
      case "currency":
        return `$${value.toLocaleString()}`;
      case "number":
        return value.toLocaleString();
      default:
        return value;
    }
  };

  if (variant === "compact") {
    return (
      <div ref={ref}>
        {title && (
          <h4 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
            <span className="text-2xl">📈</span>
            {title}
          </h4>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={animated ? { opacity: 0, y: 20 } : undefined}
              animate={isInView ? { opacity: 1, y: 0 } : undefined}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4 text-center border-l-4 border-accent">
                {metric.icon && (
                  <div className="text-2xl mb-2">{metric.icon}</div>
                )}
                <div className="text-2xl font-bold text-text mb-1">
                  {formatValue(metric.value, metric.format)}
                </div>
                <div className="text-xs text-muted2 uppercase tracking-wide">
                  {metric.label}
                </div>
                {metric.change !== undefined && (
                  <div
                    className={`text-xs mt-2 flex items-center justify-center gap-1 ${getTrendColor(
                      metric.trend
                    )}`}
                  >
                    {getTrendIcon(metric.trend)}
                    {metric.change > 0 ? "+" : ""}
                    {metric.change}%
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div ref={ref}>
        {title && (
          <h4 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            {title}
          </h4>
        )}
        <div className="space-y-4">
          {metrics.map((metric, index) => {
            const percentage =
              metric.target && typeof metric.value === "number"
                ? Math.min((metric.value / metric.target) * 100, 100)
                : 100;

            return (
              <motion.div
                key={index}
                initial={animated ? { opacity: 0, x: -20 } : undefined}
                animate={isInView ? { opacity: 1, x: 0 } : undefined}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {metric.icon && <span className="text-lg">{metric.icon}</span>}
                    <span className="text-sm font-medium text-text">
                      {metric.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-text">
                      {formatValue(metric.value, metric.format)}
                    </span>
                    {metric.change !== undefined && (
                      <span
                        className={`text-xs flex items-center gap-1 ${getTrendColor(
                          metric.trend
                        )}`}
                      >
                        {getTrendIcon(metric.trend)}
                        {metric.change > 0 ? "+" : ""}
                        {metric.change}%
                      </span>
                    )}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="relative h-3 bg-surface2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${percentage}%` } : undefined}
                    transition={{ duration: 1, delay: index * 0.1 + 0.2 }}
                    className={`h-full bg-gradient-to-r ${
                      metric.color === "green"
                        ? "from-green-500 to-green-400"
                        : metric.color === "yellow"
                        ? "from-yellow-500 to-yellow-400"
                        : metric.color === "red"
                        ? "from-red-500 to-red-400"
                        : "from-accent to-accent-2"
                    } rounded-full`}
                  />
                </div>

                {metric.description && (
                  <p className="text-xs text-muted leading-relaxed">
                    {metric.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }

  // Cards variant (default)
  return (
    <div ref={ref}>
      {title && (
        <h4 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
          <span className="text-2xl">📊</span>
          {title}
        </h4>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={animated ? { opacity: 0, y: 20 } : undefined}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: index * 0.1 }}
          >
            <Card
              hover
              className={`p-6 relative overflow-hidden border-2 bg-gradient-to-br ${getColorClass(
                metric.color
              )}`}
            >
              {/* Background icon */}
              {metric.icon && (
                <div className="absolute top-4 right-4 text-6xl opacity-10 pointer-events-none">
                  {metric.icon}
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-2">
                      {metric.label}
                    </p>
                    <div className="text-3xl font-extrabold text-text">
                      {formatValue(metric.value, metric.format)}
                    </div>
                  </div>
                  {metric.icon && (
                    <div className="text-3xl opacity-80">{metric.icon}</div>
                  )}
                </div>

                {metric.change !== undefined && (
                  <div
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getTrendColor(
                      metric.trend
                    )} bg-surface/50`}
                  >
                    {getTrendIcon(metric.trend)}
                    {metric.change > 0 ? "+" : ""}
                    {metric.change}% change
                  </div>
                )}

                {metric.description && (
                  <p className="text-sm text-muted mt-3 leading-relaxed">
                    {metric.description}
                  </p>
                )}

                {/* Progress indicator if target exists */}
                {metric.target && typeof metric.value === "number" && (
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted2 mb-1">
                      <span>Progress</span>
                      <span>
                        {Math.round((metric.value / metric.target) * 100)}%
                      </span>
                    </div>
                    <div className="h-1.5 bg-surface2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? {
                                width: `${Math.min(
                                  (metric.value / metric.target) * 100,
                                  100
                                )}%`,
                              }
                            : undefined
                        }
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="h-full bg-accent rounded-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
