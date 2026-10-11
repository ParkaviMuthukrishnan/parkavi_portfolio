import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Background } from "@/components/ui/Background";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { personal } from "@/data/portfolio";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(personal.siteUrl),
  title: {
    default: personal.siteTitle,
    template: `%s · ${personal.name}`,
  },
  description: personal.siteDescription,
  keywords: ["Software Engineer", "Frontend Developer", "Full-Stack Developer", "React", "Next.js", "Node.js", "AWS", personal.name],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: personal.siteUrl,
    title: personal.siteTitle,
    description: personal.siteDescription,
    siteName: personal.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: personal.siteTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: personal.siteTitle,
    description: personal.siteDescription,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b090c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-accent px-4 py-2 font-semibold text-bg focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Background />
          {children}
        </SmoothScroll>
        <CustomCursor />
      </body>
    </html>
  );
}
