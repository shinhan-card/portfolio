import { siteConfig } from "@/data/site-config";
import { CaseStudy } from "@/types";

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "윤태웅 (Eric Yoon)",
    alternateName: ["Eric Yoon", "윤태웅", "Yoon Tae Woong"],
    jobTitle: "Product Manager",
    worksFor: {
      "@type": "Organization",
      name: "Shinhan Card",
    },
    url: siteConfig.url,
    sameAs: [siteConfig.links.linkedin],
    description: siteConfig.description,
    knowsAbout: [
      "Product Management",
      "Payment Systems",
      "Fintech",
      "Authentication Infrastructure",
      "Regulatory Compliance",
      "Identity Verification",
    ],
  };
}

export function getCaseStudyArticleSchema(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.subtitle,
    author: {
      "@type": "Person",
      name: "윤태웅 (Eric Yoon)",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "윤태웅 (Eric Yoon)",
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    url: `${siteConfig.url}/case-studies/${caseStudy.slug}`,
    keywords: caseStudy.tags.join(", "),
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: "윤태웅 (Eric Yoon)",
      alternateName: ["Eric Yoon", "윤태웅", "Yoon Tae Woong"],
      jobTitle: "Product Manager",
      worksFor: {
        "@type": "Organization",
        name: "Shinhan Card",
      },
      url: siteConfig.url,
      sameAs: [siteConfig.links.linkedin],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Kyung Hee University",
      },
    },
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    author: {
      "@type": "Person",
      name: "윤태웅 (Eric Yoon)",
    },
  };
}
