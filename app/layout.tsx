import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { AmbientProvider } from "@/lib/ambient/AmbientContext";
import { SoundProvider } from "@/lib/sound/SoundContext";
import AmbientPlayer from "@/components/ui/AmbientPlayer";
import PageLoadingBar from "@/components/ui/PageLoadingBar";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import SkipToContent from "@/components/ui/SkipToContent";
import KeyboardShortcuts from "@/components/ui/KeyboardShortcuts";
import KeyboardHint from "@/components/ui/KeyboardHint";
import RouteChangeSound from "@/components/sound/RouteChangeSound";
import { Analytics } from "@vercel/analytics/react";

// Premium font configuration
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Product Manager",
    "Payments",
    "Fintech",
    "Authentication",
    "Identity Verification",
    "Regulatory Product Design",
    "Payment Infrastructure",
    "Shinhan Card",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@yoontaewoong",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Pretendard Variable for Korean - CDN */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Performance hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased font-sans bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 transition-colors">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <LanguageProvider>
            <AmbientProvider>
              <SoundProvider>
                <SkipToContent />
                <KeyboardShortcuts />
                <PageLoadingBar />
                <ScrollProgress />
                {children}
                <RouteChangeSound />
                <AmbientPlayer />
                <BackToTop />
                <KeyboardHint />
                <Analytics />
              </SoundProvider>
            </AmbientProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
