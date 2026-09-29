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

export const metadata: Metadata = {
  title: "LOPlatforms - Professional Web Design & Development Services",
  description:
    "LO Platform is a strategic technology partner helping organizations and ministries thrive in the digital age. We provide professional website design, web app development, mobile app development, and technical infrastructure services.",
  keywords:
    "web design, web development, mobile app development, technical infrastructure, digital transformation, SEO optimized, responsive design",
  authors: [{ name: "LO Platforms" }],
  creator: "LO Platforms",
  publisher: "LO Platforms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "LOPlatforms - Professional Web Design & Development Services",
    description:
      "LO Platform is a strategic technology partner helping organizations thrive in the digital age.",
    url: "https://loplatforms.com",
    siteName: "LO Platforms",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LOPlatforms - Professional Web Design & Development Services",
    description:
      "LO Platform is a strategic technology partner helping organizations thrive in the digital age.",
    creator: "@loplatforms",
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
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="canonical" href="https://loplatforms.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LO Platforms",
              url: "https://loplatforms.com",
              logo: "https://loplatforms.com/logo.png",
              description: "Professional web design and development services",
              sameAs: [
                "https://linkedin.com/company/loplatforms",
                "https://twitter.com/loplatforms",
                "https://instagram.com/loplatforms",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2347011871220",
                email: "support@loplatforms.com",
                contactType: "customer service",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col text-black">{children}</body>
    </html>
  );
}
