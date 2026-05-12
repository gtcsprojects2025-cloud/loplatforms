"use client";

import React, { useEffect } from "react";
import Link from 'next/link';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Database, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

const Services = () => {
  const services = [
    { 
      title: "Website Design",
      route: "/website_design",
      icon: <Monitor className="w-10 h-10" />, 
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
      short: "Stunning, high-converting websites",
      description: "We craft beautiful, fast, and user-friendly websites that strengthen your brand and drive results." 
    },
    { 
      title: "Web App Development",
      route: "/web_app_developement",
      icon: <Layers className="w-10 h-10" />, 
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
      short: "Powerful & scalable web applications",
      description: "Custom web platforms built for performance, security, and seamless user experience." 
    },
    { 
      title: "Mobile App Development",
      route: "/mobile_app_developement",
      icon: <Smartphone className="w-10 h-10" />, 
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
      short: "iOS & Android apps that users love",
      description: "Native and cross-platform mobile apps designed for engagement and business growth." 
    },
    { 
      title: "Technical Infrastructure",
      route: "/IT_Infrastructure",
      icon: <Database className="w-10 h-10" />, 
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=85",
      short: "Reliable & secure foundations",
      description: "Cloud architecture, DevOps, and robust backend systems that scale with your vision." 
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <section className=" pt:20 md:pt-40 pb-20 bg-gradient-to-br from-slate-950 to-zinc-900 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-6 py-2.5 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-widest font-medium">Premium Digital Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-6">
            We build digital experiences<br />that actually matter
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From pixel-perfect websites to complex enterprise systems — we deliver modern, scalable, and high-impact solutions.
          </p>
        </div>
      </section>

      {/* Services Grid - Modern Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden hover:border-slate-200 hover:shadow-2xl transition-all duration-700 reveal"
              >
                {/* High Quality Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-8 left-8 w-16 h-16 bg-white/95 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-900 shadow-lg">
                    {service.icon}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-blue-600 font-medium mb-4">{service.short}</p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <Link 
                    href={service.route}
                    className="inline-flex items-center gap-3 text-slate-900 font-semibold group-hover:gap-4 transition-all"
                  >
                    Explore this service 
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-bold tracking-tighter mb-4">Why Organizations Choose LO Platform</h2>
            <p className="text-slate-600 max-w-md mx-auto">We don’t just deliver code — we deliver clarity, performance, and long-term value.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Strategy First", desc: "Every project starts with deep understanding of your goals and users." },
              { title: "Built to Scale", desc: "Solutions designed to grow effortlessly as your organization expands." },
              { title: "Obsessed with Quality", desc: "Pixel-perfect design and clean, maintainable code are our standard." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl reveal">
                <div className="text-blue-600 text-4xl font-bold mb-4">0{i+1}</div>
                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Let’s create something exceptional together.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-4 bg-white text-slate-900 px-12 py-5 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            Start Your Project
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;