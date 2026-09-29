// app/web-application-development-company-in-nigeria/page.tsx
import { Metadata } from 'next';
import PillarClient from './PillarClient';

export const generateMetadata = (): Metadata => {
  return {
    title: "Web Application Development Company in Nigeria | Custom Software for Lagos Businesses",
    description:
      "We build web applications around your business, your users, and the realities of operating in Nigeria. Customer portals, dashboards, SaaS platforms, marketplaces, and custom digital systems.",
    keywords: [
      "web application development company Nigeria",
      "web application development Lagos",
      "custom software Nigeria",
      "web app developers Lagos",
      "customer portal development Nigeria",
      "SaaS development Nigeria",
      "marketplace development Lagos",
      "Nigerian payment integration",
      "business dashboard development",
      "custom web application Nigeria"
    ],
    authors: [{ name: "LOPublications" }],
    openGraph: {
      title: "Web Application Development Company in Nigeria",
      description:
        "Web applications built around your business, your users, and the realities of operating in Nigeria.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
          alt: "Web application development in Nigeria",
        },
      ],
      locale: "en_NG",
      type: "website",
      url: "/web-application-development-company-in-nigeria",
    },
    twitter: {
      card: "summary_large_image",
      title: "Web Application Development Company in Nigeria",
      description:
        "Custom web applications for Lagos businesses — portals, dashboards, SaaS, marketplaces, and more.",
      images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"],
    },
    alternates: {
      canonical: "/web-application-development-company-in-nigeria",
    },
  };
};

export default function PillarPage() {
  return <PillarClient />;
}       