// app/web-application-development-company-in-nigeria/TableOfContents.tsx
'use client';

import { useEffect, useState } from 'react';

export const sections = [
  { id: 'when-you-need-one', label: 'When Does a Business Need One?' },
  { id: 'website-vs-web-app', label: 'Website vs Web Application' },
  { id: 'what-we-build', label: 'What We Build' },
  { id: 'nigerian-market', label: 'Building for Nigeria' },
  { id: 'performance', label: 'Performance Is Part of the Product' },
  { id: 'payments', label: 'Payment Integration' },
  { id: 'integrations', label: 'Fitting Into Your Business' },
  { id: 'why-projects-fail', label: 'Why Projects Go Wrong' },
  { id: 'our-process', label: 'Our Development Process' },
  { id: 'security', label: 'Security & Data Protection' },
  { id: 'cost', label: 'Cost in Nigeria' },
  { id: 'custom-vs-offtheshelf', label: 'Custom vs Off-the-Shelf' },
  { id: 'choosing-company', label: 'How to Choose a Company' },
  { id: 'what-to-expect', label: 'What to Expect' },
  { id: 'faq', label: 'FAQ' },
];

export default function TableOfContents() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="hidden lg:block sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2"
    >
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
        On This Page
      </p>
      <ul className="space-y-1.5 text-sm border-l border-gray-200">
        {sections.map((s) => {
          const isActive = activeId === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`block pl-4 -ml-px border-l-2 py-1 transition-colors ${
                  isActive
                    ? 'border-red-600 text-red-600 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}