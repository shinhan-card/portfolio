import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About & Process",
  description:
    "How I work: product development process, tools, and technologies for building payment and fintech products",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
