import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "Guestbook | 방명록",
  description: "Leave a message and connect with others visiting this portfolio. 메시지를 남기고 다른 방문자들과 소통해보세요.",
  openGraph: {
    title: "Guestbook | 방명록",
    description: "Leave a message and connect with others visiting this portfolio",
    url: `${siteConfig.url}/guestbook`,
    type: "website",
  },
};

export default function GuestbookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
