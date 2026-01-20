import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://usedosa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dosa - Professional-grade AI for Underwriters",
    template: "%s | Dosa",
  },
  description: "AI-powered tools to streamline intake, verification, and analysis across your full underwriting workflow. Professional-grade AI for modern underwriters.",
  keywords: ["underwriting AI", "insurance technology", "risk assessment", "underwriting software", "AI for underwriters", "insurance automation"],
  authors: [{ name: "Dosa" }],
  creator: "Dosa",
  publisher: "Dosa",
  icons: {
    icon: [
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icons/icon-32.png",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dosa",
    title: "Dosa - Professional-grade AI for Underwriters",
    description: "AI-powered tools to streamline intake, verification, and analysis across your full underwriting workflow.",
    images: [
      {
        url: `${siteUrl}/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: "Dosa - Professional-grade AI for Underwriters",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dosa - Professional-grade AI for Underwriters",
    description: "AI-powered tools to streamline intake, verification, and analysis across your full underwriting workflow.",
    images: [`${siteUrl}/thumbnail.png`],
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
  verification: {
    google: "z7ory3era40PQXSTt3mYZpnCLIMil5xDx8WzFCu_PJE",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dosa",
  url: siteUrl,
  logo: `${siteUrl}/favicon.ico`,
  description: "Professional-grade AI for underwriters",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@usedosa.com",
    contactType: "Customer Service",
  },
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dosa",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "AI-powered tools to streamline intake, verification, and analysis across your full underwriting workflow.",
  url: siteUrl,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        {children}
      </body>
    </html>
  );
}
