"use client";

import { motion } from "framer-motion";
import Card from "./Card";
import Badge from "./Badge";

export interface Tool {
  name: string;
  category: string;
  icon?: string;
  proficiency?: "expert" | "advanced" | "intermediate" | "familiar";
  years?: number;
  description?: string;
}

interface TechStackProps {
  tools: Tool[];
  title?: string;
  subtitle?: string;
  groupByCategory?: boolean;
  variant?: "grid" | "compact" | "detailed";
}

export default function TechStack({
  tools,
  title = "Tools & Technologies",
  subtitle,
  groupByCategory = true,
  variant = "grid",
}: TechStackProps) {
  const getProficiencyColor = (proficiency?: Tool["proficiency"]) => {
    switch (proficiency) {
      case "expert":
        return "bg-green-500";
      case "advanced":
        return "bg-blue-500";
      case "intermediate":
        return "bg-yellow-500";
      case "familiar":
        return "bg-muted2";
      default:
        return "bg-accent";
    }
  };

  const getProficiencyWidth = (proficiency?: Tool["proficiency"]) => {
    switch (proficiency) {
      case "expert":
        return "100%";
      case "advanced":
        return "80%";
      case "intermediate":
        return "60%";
      case "familiar":
        return "40%";
      default:
        return "50%";
    }
  };

  // Group tools by category if needed
  const groupedTools = groupByCategory
    ? tools.reduce((acc, tool) => {
        if (!acc[tool.category]) {
          acc[tool.category] = [];
        }
        acc[tool.category].push(tool);
        return acc;
      }, {} as Record<string, Tool[]>)
    : { All: tools };

  if (variant === "compact") {
    return (
      <section>
        {title && (
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text mb-2 flex items-center justify-center gap-2">
              <span className="text-3xl">🛠️</span>
              {title}
            </h3>
            {subtitle && <p className="text-muted">{subtitle}</p>}
          </div>
        )}

        <div className="space-y-6">
          {Object.entries(groupedTools).map(([category, categoryTools]) => (
            <div key={category}>
              {groupByCategory && (
                <h4 className="text-sm font-bold text-text mb-3 uppercase tracking-wide">
                  {category}
                </h4>
              )}
              <div className="flex flex-wrap gap-2">
                {categoryTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                  >
                    <Badge
                      className="text-sm px-3 py-1.5"
                      emoji={tool.icon}
                    >
                      {tool.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (variant === "detailed") {
    return (
      <section>
        {title && (
          <div className="mb-10">
            <h3 className="text-3xl font-bold text-text mb-3 flex items-center gap-3">
              <span className="text-4xl">🛠️</span>
              {title}
            </h3>
            {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
          </div>
        )}

        <div className="space-y-10">
          {Object.entries(groupedTools).map(([category, categoryTools]) => (
            <div key={category}>
              {groupByCategory && (
                <h4 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  {category}
                </h4>
              )}

              <div className="space-y-4">
                {categoryTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="p-5 border-l-4 border-accent">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-3">
                          {tool.icon && (
                            <span className="text-2xl">{tool.icon}</span>
                          )}
                          <div>
                            <h5 className="text-base font-bold text-text">
                              {tool.name}
                            </h5>
                            {tool.years && (
                              <p className="text-xs text-muted2">
                                {tool.years}+ years experience
                              </p>
                            )}
                          </div>
                        </div>

                        {tool.proficiency && (
                          <Badge
                            variant={
                              tool.proficiency === "expert"
                                ? "accent"
                                : "default"
                            }
                            className="text-xs"
                          >
                            {tool.proficiency}
                          </Badge>
                        )}
                      </div>

                      {/* Proficiency bar */}
                      {tool.proficiency && (
                        <div className="mb-3">
                          <div className="h-2 bg-surface2 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{
                                width: getProficiencyWidth(tool.proficiency),
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: index * 0.05 }}
                              className={`h-full ${getProficiencyColor(
                                tool.proficiency
                              )} rounded-full`}
                            />
                          </div>
                        </div>
                      )}

                      {tool.description && (
                        <p className="text-sm text-muted leading-relaxed">
                          {tool.description}
                        </p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Grid variant (default)
  return (
    <section>
      {title && (
        <div className="text-center mb-10">
          <h3 className="text-3xl font-bold text-text mb-3 flex items-center justify-center gap-3">
            <span className="text-4xl">🛠️</span>
            {title}
          </h3>
          {subtitle && <p className="text-lg text-muted max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-10">
        {Object.entries(groupedTools).map(([category, categoryTools]) => (
          <div key={category}>
            {groupByCategory && (
              <h4 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {category}
              </h4>
            )}

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    hover
                    className="p-5 text-center h-full flex flex-col items-center justify-center group"
                  >
                    {tool.icon && (
                      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                        {tool.icon}
                      </div>
                    )}
                    <h5 className="text-sm font-bold text-text mb-1">
                      {tool.name}
                    </h5>
                    {tool.proficiency && (
                      <Badge className="text-xs mt-2">
                        {tool.proficiency}
                      </Badge>
                    )}
                    {tool.years && (
                      <p className="text-xs text-muted2 mt-2">
                        {tool.years}+ years
                      </p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
