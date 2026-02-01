"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { getAllCaseStudies } from "@/data/case-studies";
import Badge from "./ui/Badge";

interface RelatedProjectLinksProps {
  projectSlugs: string[];
  compact?: boolean;
}

export default function RelatedProjectLinks({
  projectSlugs,
  compact = false,
}: RelatedProjectLinksProps) {
  if (!projectSlugs || projectSlugs.length === 0) return null;

  const allProjects = getAllCaseStudies();
  const relatedProjects = allProjects.filter((p) =>
    projectSlugs.includes(p.slug)
  );

  if (relatedProjects.length === 0) return null;

  if (compact) {
    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {relatedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="group inline-flex items-center gap-1 text-xs text-accent hover:underline"
          >
            <ExternalLink className="w-3 h-3" />
            <span>View project</span>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 p-3 bg-accent/5 border border-accent/20 rounded-lg">
      <p className="text-xs font-mono uppercase tracking-wide text-muted2 mb-2">
        Related Projects
      </p>
      <div className="flex flex-wrap gap-2">
        {relatedProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/case-studies/${project.slug}`}
            className="group"
          >
            <Badge
              className="cursor-pointer hover:bg-accent hover:text-white transition-colors"
            >
              {project.title}
              <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
