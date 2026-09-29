"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { ChevronDown, MessageSquare } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the LO Platform?",
      answer: "The LO Platform is a structured technology framework that supports communication systems, data management, automation, and scalable infrastructure — designed to give organizations a stable and future-ready digital foundation."
    },
    {
      question: "Is the LO Platform suitable for both new builds and existing systems?",
      answer: "Yes. It works for both building new systems from scratch and modernizing legacy infrastructure. We help you optimize what you have or create something entirely new with long-term scalability in mind."
    },
    {
      question: "How does the LO Platform differ from traditional IT infrastructure?",
      answer: "Unlike fragmented traditional setups, the LO Platform integrates communication, data, automation, and scalability into one cohesive system — reducing complexity and improving overall efficiency."
    },
    {
      question: "Can the LO Platform scale as our organization grows?",
      answer: "Absolutely. It is built with scalability at its core, allowing your systems to grow seamlessly without frequent overhauls or rebuilds."
    },
    {
      question: "Does the LO Platform support automation and system integration?",
      answer: "Yes. Automation and seamless integration are core features. We help reduce manual processes and ensure your systems communicate effectively."
    },
    {
      question: "How secure is the LO Platform?",
      answer: "Security is a top priority. The platform is designed with structured architecture principles that support secure data handling, access control, and system reliability."
    },
    {
      question: "What types of organizations benefit most from LO Platform?",
      answer: "Organizations with complex operational needs — including ministries, enterprises, professional services, and growing businesses that require reliable, scalable, and secure digital systems."
    },
    {
      question: "How long does implementation usually take?",
      answer: "Implementation timelines vary based on project scope. We begin with a thorough assessment and provide a clear timeline and roadmap tailored to your needs."
    },
    {
      question: "How do we get started?",
      answer: "Simply reach out to us. We’ll schedule a consultation to understand your goals and current challenges, then create a customized plan that aligns with your vision."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NavBar />
      <PageHeader title="FAQ" subtitle="Frequently Asked Questions" />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Got Questions?
            </h2>
            <p className="text-slate-600 text-lg">
              Find answers to the most common questions about our services and the LO Platform.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between group"
                >
                  <div className="flex items-start gap-4">
                    <MessageSquare className="text-blue-600 mt-1 flex-shrink-0" size={22} />
                    <h3 className="text-lg font-semibold text-slate-900 pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    size={24}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96 pb-8" : "max-h-0"
                  }`}
                >
                  <p className="px-8 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-20 bg-slate-900 text-white rounded-3xl p-12 md:p-16 text-center">
            <h3 className="text-3xl font-bold tracking-tighter mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-400 max-w-md mx-auto mb-8">
              Our team is ready to provide personalized answers and discuss how we can support your specific needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faq;