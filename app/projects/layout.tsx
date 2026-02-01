import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Projects | 프로젝트",
  description: "Complete portfolio of product initiatives in payments, authentication, and fintech infrastructure by Eric Yoon at Shinhan Card.",
  openGraph: {
    title: "All Projects — Eric Yoon",
    description: "Product portfolio: payments, authentication, fintech infrastructure",
    url: `${siteConfig.url}/projects`,
    type: "website",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
