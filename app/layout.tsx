import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { createBeautySalonJsonLd, createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata({
    title: `${siteConfig.name} | Boutique Beauty Studio Elwood`,
    description: siteConfig.description,
  }),
  verification: siteConfig.googleSiteVerification
    ? {
        google: siteConfig.googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="flex min-h-screen flex-col">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(createBeautySalonJsonLd()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
