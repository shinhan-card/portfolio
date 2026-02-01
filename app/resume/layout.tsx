import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Resume | 이력",
  description: "Professional experience, education, and achievements of Eric Yoon (윤태웅) — Product Manager specializing in Payments and Fintech at Shinhan Card.",
  openGraph: {
    title: "Resume | 이력 — Eric Yoon",
    description: "Product Manager specializing in Payments, Authentication, and Fintech Infrastructure",
    url: `${siteConfig.url}/resume`,
    type: "profile",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
