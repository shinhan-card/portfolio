import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getCaseStudyBySlug, caseStudies } from "@/data/case-studies";
import { siteConfig } from "@/data/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyContent from "./CaseStudyContent";
import JsonLd from "@/components/JsonLd";
import { getCaseStudyArticleSchema } from "@/lib/seo/structured-data";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all case studies
export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.subtitle,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.subtitle,
      type: "article",
      url: `${siteConfig.url}/case-studies/${slug}`,
      images: [
        {
          url: caseStudy.thumbnail,
          width: 1200,
          height: 630,
          alt: caseStudy.title,
        },
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <JsonLd data={getCaseStudyArticleSchema(caseStudy)} />
      <Header />
      <CaseStudyContent caseStudy={caseStudy} />
      <Footer />
    </>
  );
}
