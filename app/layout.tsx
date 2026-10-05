import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      <body className="min-h-full flex flex-col text-black">
        <NavBar />
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Footer />
      </body>
    </html>
  );
}
