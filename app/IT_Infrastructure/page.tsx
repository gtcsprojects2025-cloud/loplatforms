"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { Database, ArrowRight, ShieldCheck, Zap, Users, Award, Cloud } from 'lucide-react';

const ITInfrastructure = () => {
  const benefits = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enterprise Security",
      desc: "Advanced protection with encryption, access control, and continuous monitoring."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      desc: "Optimized systems built for speed, reliability, and maximum uptime."
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Native",
      desc: "Modern, scalable infrastructure designed for today's cloud-first world."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Future Proof",
      desc: "Built to grow effortlessly as your organization expands."
    },
  ];

  const faqs = [
    {
      question: "What is LO Platform Technical Infrastructure?",
      answer: "A structured, secure, and scalable technology foundation that supports communication, data management, automation, and long-term growth."
    },
    {
      question: "Is it suitable for both new and existing systems?",
      answer: "Yes. We specialize in building new infrastructure as well as modernizing and optimizing legacy systems."
    },
    {
      question: "How secure is your infrastructure solution?",
      answer: "We follow industry best practices with multi-layered security, encryption, regular audits, and strict access controls."
    },
    {
      question: "Can the infrastructure scale with our growth?",
      answer: "Absolutely. Scalability is a core principle — your systems can expand seamlessly without major overhauls."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />

      {/* Modern Hero */}
      <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#3b82f620_0%,transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <Database className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Enterprise Foundation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            The backbone your<br />organization can trust
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We design and implement robust, secure, and scalable technical infrastructure that powers mission-critical operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="reveal space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center text-white">
                <Database className="w-11 h-11" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Reliable Infrastructure.<br />Real Business Impact.
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We deliver structured, future-ready technology frameworks that support seamless communication, 
                secure data management, automation, and effortless scalability. Whether you're starting fresh or 
                upgrading existing systems, we ensure your infrastructure becomes a competitive advantage.
              </p>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all group"
              >
                Build Your Foundation
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-Quality Image */}
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85" 
                  alt="Modern Technical Infrastructure"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="uppercase text-blue-400 text-xs tracking-widest font-medium">Enterprise Grade</div>
                  <div className="text-2xl font-bold mt-1">Modern Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold tracking-tighter">Why Our Infrastructure Stands Out</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl hover:shadow-xl transition-all duration-500 reveal group">
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl p-8 hover:border-blue-200 transition-colors reveal">
                <h4 className="font-semibold text-xl text-slate-900 mb-4">{faq.question}</h4>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-gradient-to-br from-slate-900 to-zinc-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to build a stronger foundation?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Let’s design infrastructure that supports your growth for years to come.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Get Started Today
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ITInfrastructure;