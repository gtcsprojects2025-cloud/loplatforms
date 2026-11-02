// app/web-application-development-company-in-nigeria/PillarSchema.tsx

export default function PillarSchema() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Application Development",
    "serviceType": "Web Application Development",
    "provider": {
      "@type": "Organization",
      "name": "LOPublications",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria",
    },
    "description":
      "Custom web application development for businesses in Nigeria — customer portals, dashboards, SaaS platforms, marketplaces, and internal business applications.",
    "url": "/web-application-development-company-in-nigeria",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Application Development",
        "item": "/web-application-development-company-in-nigeria",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is web application development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Web application development is the process of designing and building software that users access through a web browser. Unlike a simple informational website, a web application typically involves user interaction, data, business logic, authentication, workflows, or integrations.",
        },
      },
      {
        "@type": "Question",
        "name": "How much does it cost to build a web application in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The cost depends on the application's complexity, features, user roles, integrations, security requirements, infrastructure, and expected scale. There is no meaningful universal price for all web applications.",
        },
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The timeline depends on the scope and complexity of the application. A focused portal with a small number of workflows will require considerably less work than a large SaaS platform, marketplace, or enterprise application.",
        },
      },
      {
        "@type": "Question",
        "name": "Can you integrate payment systems into a web application?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Web applications can integrate with payment platforms and other third-party services where required. The implementation should also account for payment confirmation, failed transactions, callbacks, reconciliation, and other real-world scenarios.",
        },
      },
      {
        "@type": "Question",
        "name": "Can a web application work well on mobile devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. But mobile compatibility should involve more than making the interface responsive. The application should consider screen size, device capabilities, performance, data consumption, and the connectivity conditions experienced by its users.",
        },
      },
      {
        "@type": "Question",
        "name": "Should we build custom software or use an existing platform?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "It depends on the problem. If an existing platform already meets your requirements, buying it may be more practical. Custom development makes more sense when your workflows, integrations, or product requirements cannot be adequately served by existing software.",
        },
      },
      {
        "@type": "Question",
        "name": "Who should own the source code?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The ownership arrangement should be clearly defined in the development agreement before work begins. Businesses should also understand who controls related assets such as domains, hosting, repositories, payment accounts, and third-party services.",
        },
      },
      {
        "@type": "Question",
        "name": "Do web applications need ongoing maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Most production applications benefit from ongoing maintenance. Security updates, bug fixes, monitoring, infrastructure changes, performance improvements, and new requirements can continue after launch.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}