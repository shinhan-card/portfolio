"use client";

import Link from "next/link";
import { Briefcase, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import Card from "./ui/Card";
import Badge from "./ui/Badge";

interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  description: string;
}

interface RelatedExperienceProps {
  experienceIds: string[];
  experiences: ExperienceItem[];
}

export default function RelatedExperience({
  experienceIds,
  experiences,
}: RelatedExperienceProps) {
  const { language } = useLanguage();
  
  if (!experienceIds || experienceIds.length === 0) return null;

  const relatedExp = experiences.filter((exp) =>
    experienceIds.includes(exp.id)
  );

  if (relatedExp.length === 0) return null;

  const text = language === "ko"
    ? {
        title: "관련 경력",
        viewResume: "이력서에서 보기",
      }
    : {
        title: "Related Experience",
        viewResume: "View in Resume",
      };

  return (
    <section className="mb-16">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-text mb-2 flex items-center gap-2 sm:gap-3">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
          {text.title}
        </h2>
      </div>

      <div className="space-y-3">
        {relatedExp.map((exp) => (
          <Link
            key={exp.id}
            href={`/resume#${exp.id}`}
            className="group block"
          >
            <Card
              hover
              className="p-4 border-l-4 border-accent/30 group-hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="mono" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-text mb-1 group-hover:text-accent transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted2 group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-4">
        <Link
          href="/resume"
          className="inline-flex items-center gap-1.5 text-sm text-accent hover:text-accent-2 hover:underline transition-colors"
        >
          {text.viewResume}
          <ExternalLink className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
