"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { Monitor, ArrowRight, Users, Zap, Award, Eye, Globe } from 'lucide-react';

const WebsiteDev = () => {
  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visual Excellence",
      desc: "Stunning, modern designs that instantly communicate your brand quality."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered",
      desc: "Intuitive navigation and experiences that visitors love and remember."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      desc: "Fast loading, SEO-optimized websites that rank well and convert."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Fully Responsive",
      desc: "Perfect experience across all devices — mobile, tablet, and desktop."
    },
  ];

  const faqs = [
    {
      question: "What is included in professional website design?",
      answer: "Our website design includes custom UI/UX design, responsive development, SEO optimization, fast loading performance, and content structure that supports your business goals."
    },
    {
      question: "How long does it take to design and develop a website?",
      answer: "Most professional websites take between 4 to 10 weeks, depending on the complexity, number of pages, and specific features required."
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Yes. Every website we build is fully responsive and provides an excellent experience on smartphones, tablets, and desktops."
    },
    {
      question: "Do you provide SEO optimization?",
      answer: "Yes. We build websites with clean code, fast performance, proper structure, and on-page SEO best practices from the start."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Yes. We use modern, user-friendly content management systems so you can easily update text, images, and pages without technical knowledge."
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
            <Monitor className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Brand First Design</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Websites that impress.<br />Experiences that convert.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We design beautiful, high-performing websites that strengthen your brand and turn visitors into customers.
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
                <Monitor className="w-11 h-11" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Beautiful Design.<br />Powerful Results.
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We create visually stunning and highly functional websites that clearly communicate your brand 
                and deliver exceptional user experiences. Every detail — from layout to micro-interactions — 
                is crafted to engage visitors and drive conversions.
              </p>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all group"
              >
                Start Your Website Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-Quality Image */}
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10]">
                <img 
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85" 
                  alt="Professional Website Design"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="uppercase text-blue-400 text-xs tracking-widest font-medium">Modern Design</div>
                  <div className="text-2xl font-bold mt-1">That Converts</div>
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
            <h2 className="text-4xl font-bold tracking-tighter">Why Our Website Design Stands Out</h2>
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
            Ready for a website that stands out?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Let’s create a beautiful, high-converting digital experience for your brand.
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

export default WebsiteDev;