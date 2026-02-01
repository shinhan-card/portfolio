"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Badge from "./ui/Badge";
import { Filter, X } from "lucide-react";

export interface FilterOptions {
  domain: string[];
  roleType: string[];
  focus: string[];
}

interface ProjectFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
  activeFilters: FilterOptions;
  availableFilters: {
    domains: string[];
    roleTypes: string[];
    focuses: string[];
  };
}

export default function ProjectFilters({
  onFilterChange,
  activeFilters,
  availableFilters,
}: ProjectFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilter = (
    category: keyof FilterOptions,
    value: string
  ) => {
    const current = activeFilters[category];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    onFilterChange({
      ...activeFilters,
      [category]: updated,
    });
  };

  const clearAllFilters = () => {
    onFilterChange({
      domain: [],
      roleType: [],
      focus: [],
    });
  };

  const activeCount =
    activeFilters.domain.length +
    activeFilters.roleType.length +
    activeFilters.focus.length;

  const hasActiveFilters = activeCount > 0;

  return (
    <div className="mb-12">
      {/* Filter toggle button */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border hover:border-accent transition-colors text-sm font-medium text-text"
        >
          <Filter className="w-4 h-4" />
          <span>Filter Projects</span>
          {hasActiveFilters && (
            <Badge variant="accent" className="ml-1 text-xs px-2 py-0.5">
              {activeCount}
            </Badge>
          )}
        </button>

        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-muted hover:text-text transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" />
            Clear all
          </button>
        )}
      </div>

      {/* Active filter badges */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {activeFilters.domain.map((filter) => (
            <Badge
              key={filter}
              variant="accent"
              className="cursor-pointer hover:opacity-80"
              onClick={() => toggleFilter("domain", filter)}
            >
              {filter}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
          {activeFilters.roleType.map((filter) => (
            <Badge
              key={filter}
              variant="default"
              className="cursor-pointer hover:opacity-80"
              onClick={() => toggleFilter("roleType", filter)}
            >
              {filter}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
          {activeFilters.focus.map((filter) => (
            <Badge
              key={filter}
              variant="mono"
              className="cursor-pointer hover:opacity-80"
              onClick={() => toggleFilter("focus", filter)}
            >
              {filter}
              <X className="w-3 h-3 ml-1" />
            </Badge>
          ))}
        </div>
      )}

      {/* Filter panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="bg-surface border border-border rounded-lg p-6 space-y-6">
              {/* Domain filters */}
              <div>
                <h3 className="text-sm font-bold text-text mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  Domain
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableFilters.domains.map((domain) => {
                    const isActive = activeFilters.domain.includes(domain);
                    return (
                      <button
                        key={domain}
                        onClick={() => toggleFilter("domain", domain)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-accent text-white"
                            : "bg-surface2 text-text hover:bg-surface2/80"
                        }`}
                      >
                        {domain}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Role Type filters */}
              <div>
                <h3 className="text-sm font-bold text-text mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Role
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableFilters.roleTypes.map((roleType) => {
                    const isActive = activeFilters.roleType.includes(roleType);
                    return (
                      <button
                        key={roleType}
                        onClick={() => toggleFilter("roleType", roleType)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-green-500 text-white"
                            : "bg-surface2 text-text hover:bg-surface2/80"
                        }`}
                      >
                        {roleType}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Focus filters */}
              <div>
                <h3 className="text-sm font-bold text-text mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  Focus Area
                </h3>
                <div className="flex flex-wrap gap-2">
                  {availableFilters.focuses.map((focus) => {
                    const isActive = activeFilters.focus.includes(focus);
                    return (
                      <button
                        key={focus}
                        onClick={() => toggleFilter("focus", focus)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                          isActive
                            ? "bg-purple-500 text-white"
                            : "bg-surface2 text-text hover:bg-surface2/80"
                        }`}
                      >
                        {focus}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
