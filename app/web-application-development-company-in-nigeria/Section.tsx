// app/web-application-development-company-in-nigeria/Section.tsx
import { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export default function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28 space-y-8">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {title}
        </h2>
        {intro && (
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            {intro}
          </p>
        )}
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}