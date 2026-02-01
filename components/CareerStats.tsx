"use client";

import StatsCounter from "./ui/StatsCounter";
import Section from "./ui/Section";
import { careerStats } from "@/data/career-stats";

export default function CareerStats() {
  return (
    <Section background="white" separator>
      <div className="max-w-6xl mx-auto">
        <StatsCounter
          stats={careerStats}
          variant="horizontal"
          duration={2.5}
        />
      </div>
    </Section>
  );
}
