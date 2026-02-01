"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import Card from "./Card";

export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  icon?: string;
  color?: "accent" | "green" | "blue" | "purple" | "orange";
}

interface StatsCounterProps {
  stats: Stat[];
  title?: string;
  variant?: "grid" | "horizontal";
  duration?: number; // Animation duration in seconds
}

function AnimatedNumber({
  value,
  duration = 2,
  prefix = "",
  suffix = "",
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const [displayValue, setDisplayValue] = React.useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsCounter({
  stats,
  title,
  variant = "grid",
  duration = 2,
}: StatsCounterProps) {
  const getColorClasses = (color?: Stat["color"]) => {
    switch (color) {
      case "green":
        return {
          gradient: "from-green-500/20 to-green-500/5",
          border: "border-green-500/30",
          icon: "bg-green-500/10 text-green-500",
        };
      case "blue":
        return {
          gradient: "from-blue-500/20 to-blue-500/5",
          border: "border-blue-500/30",
          icon: "bg-blue-500/10 text-blue-500",
        };
      case "purple":
        return {
          gradient: "from-purple-500/20 to-purple-500/5",
          border: "border-purple-500/30",
          icon: "bg-purple-500/10 text-purple-500",
        };
      case "orange":
        return {
          gradient: "from-orange-500/20 to-orange-500/5",
          border: "border-orange-500/30",
          icon: "bg-orange-500/10 text-orange-500",
        };
      default:
        return {
          gradient: "from-accent/20 to-accent/5",
          border: "border-accent/30",
          icon: "bg-accent/10 text-accent",
        };
    }
  };

  if (variant === "horizontal") {
    return (
      <section>
        {title && (
          <h3 className="text-xl sm:text-2xl font-bold text-text mb-6 sm:mb-8 text-center flex items-center justify-center gap-2">
            <span className="text-2xl sm:text-3xl">📊</span>
            {title}
          </h3>
        )}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
          {stats.map((stat, index) => {
            const colors = getColorClasses(stat.color);
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {stat.icon && (
                  <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                )}
                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text mb-1 sm:mb-2">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={duration}
                  />
                </div>
                <div className="text-xs sm:text-sm font-medium text-muted uppercase tracking-wide">
                  {stat.label}
                </div>
                {stat.description && (
                  <p className="text-xs text-muted2 mt-1 sm:mt-2 max-w-[160px] sm:max-w-[200px]">
                    {stat.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }

  // Grid variant (default)
  return (
    <section>
      {title && (
        <h3 className="text-2xl font-bold text-text mb-8 flex items-center gap-2">
          <span className="text-3xl">📊</span>
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const colors = getColorClasses(stat.color);
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                className={`p-6 relative overflow-hidden border-2 bg-gradient-to-br ${colors.gradient} ${colors.border}`}
              >
                {/* Background icon */}
                {stat.icon && (
                  <div className="absolute top-4 right-4 text-6xl opacity-10 pointer-events-none">
                    {stat.icon}
                  </div>
                )}

                {/* Icon badge */}
                {stat.icon && (
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center mb-4`}
                  >
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                )}

                {/* Value */}
                <div className="text-4xl font-extrabold text-text mb-2 relative z-10">
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={duration}
                  />
                </div>

                {/* Label */}
                <div className="text-sm font-medium text-muted2 uppercase tracking-wide mb-2">
                  {stat.label}
                </div>

                {/* Description */}
                {stat.description && (
                  <p className="text-xs text-muted leading-relaxed">
                    {stat.description}
                  </p>
                )}
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
