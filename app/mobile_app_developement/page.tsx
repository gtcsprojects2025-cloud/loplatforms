"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { Smartphone, ArrowRight, Zap, Users, Award, Globe, ShieldCheck } from 'lucide-react';

const AppDev = () => {
  const benefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centered Design",
      desc: "Beautiful, intuitive interfaces that users love and engage with."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "High Performance",
      desc: "Fast, responsive apps with smooth animations and optimal battery usage."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Platform",
      desc: "Seamless experience on both iOS and Android from a single codebase."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure & Reliable",
      desc: "Built with security best practices and robust backend integration."
    },
  ];

  const faqs = [
    {
      question: "What platforms do you develop for?",
      answer: "We build native and cross-platform mobile applications for both iOS and Android using the latest technologies."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Timelines typically range from 8 to 20 weeks depending on complexity, features, and design requirements."
    },
    {
      question: "Do you provide both design and development?",
      answer: "Yes. We offer end-to-end services — from UI/UX design to development, testing, deployment, and ongoing maintenance."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely. We specialize in integrating mobile apps with backend systems, APIs, databases, and third-party services."
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
            <Smartphone className="w-5 h-5" />
            <span className="text-sm font-medium tracking-widest uppercase">Mobile Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            Apps that users<br />love to use
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            We design and develop high-performance mobile applications that deliver exceptional user experiences and drive business results.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="reveal space-y-8">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-violet-600 rounded-3xl flex items-center justify-center text-white">
                <Smartphone className="w-11 h-11" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900">
                Intuitive. Fast.<br />Built for Growth.
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We create seamless mobile experiences across iOS and Android that combine beautiful design with powerful functionality. 
                From concept to launch, we deliver apps that are fast, reliable, and centered around your users.
              </p>

              <Link 
                href="/contact"
                className="inline-flex items-center gap-3 bg-slate-900 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all group"
              >
                Start Your App Project
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* High-Quality Image */}
            <div className="reveal">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/10] bg-slate-900">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85" 
                  alt="Mobile App Development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="uppercase text-blue-400 text-xs tracking-widest font-medium">iOS & Android</div>
                  <div className="text-2xl font-bold mt-1">Exceptional Mobile Experiences</div>
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
            <h2 className="text-4xl font-bold tracking-tighter">Why Choose Our Mobile Solutions</h2>
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
            Ready to launch your mobile app?
          </h3>
          <p className="text-slate-400 text-lg mb-10">
            Let’s bring your idea to life with a beautiful, high-performing mobile experience.
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

export default AppDev;