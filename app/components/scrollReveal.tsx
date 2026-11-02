"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Fades in every .reveal / .fade-up element as it scrolls into view, on every page.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    const observeAll = () =>
      document.querySelectorAll(".reveal:not(.visible), .fade-up:not(.visible)").forEach((el) => observer.observe(el));

    observeAll();
    // Catch elements rendered after the first pass (e.g. the contact form's success state)
    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
