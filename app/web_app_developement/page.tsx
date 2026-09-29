"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { Layers, ArrowRight, Zap, ShieldCheck, Users, Award, BarChart3 } from 'lucide-react';

const WebDev = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      desc: "Lightning-fast applications with excellent user experience and scalability."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Enterprise Security",
      desc: "Built with modern security standards and data protection best practices."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Focused",
      desc: "Intuitive interfaces that improve productivity and user adoption."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-time Insights",
      desc: "Powerful dashboards and analytics to help you make data-driven decisions."
    },
  ];

  const faqs = [
    {
      question: "What is the difference between a website and a web app?",
      answer: "A website is mostly informational, while a web app is interactive and performs specific functions like internal tools, dashboards, booking systems, or customer portals."
    },
    {
      question: "How long does it take to build a web application?",
      answer: "Most web applications take between 8 to 16 weeks, depending on complexity, features, integrations, and design requirements."
    },
    {
      question: "Are your web apps mobile-friendly?",
      answer: "Yes. All our web applications are fully responsive and work seamlessly across desktops, tablets, and mobile devices."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in integrating web apps with CRMs, payment gateways, ERPs, databases, and third-party APIs."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes. We offer flexible maintenance packages to keep your web app secure, updated, and performing optimally."
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

      {/* Hero Section */}
      <section className="pt-20 md:pt-40 pb-20 bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#3b82f620_0%,transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-8">
            <Layers className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Intelligent Systems</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Web apps that drive<br />real business growth
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We build secure, scalable, and high-performing web applications tailored to your unique operational needs.
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
                <Layers className="w-11 h-11" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Custom Web Applications<br />Built for Performance
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We develop secure, scalable, and intuitive web applications that streamline operations, 
                boost productivity, and support business growth. From internal tools to complex enterprise platforms — 
                we turn your ideas into powerful digital systems.
              </p>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all group"
              >
                Start Building Your Web App
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-Quality Image */}
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85" 
                  alt="Web Application Development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="uppercase text-blue-400 text-xs tracking-widest font-medium">Enterprise Solutions</div>
                  <div className="text-2xl font-bold mt-1">Powerful Web Applications</div>
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
            <h2 className="text-4xl font-bold tracking-tighter">Why Our Web Apps Stand Out</h2>
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

      {/* FAQ Section */}
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
      <section className="py-28 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to transform your operations?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Let’s build a powerful, secure, and scalable web application for your business.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Start Your Project
            <ArrowRight />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WebDev;