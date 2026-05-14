"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Monitor,
  Smartphone,
  Layers,
  Database,
  ArrowRight,
  Target,
  ShieldCheck,
  Zap,
  Quote,
  CheckCircle2,
  Users,
  TrendingUp,
  Globe,
  Briefcase,
  ChevronRight,
  Sparkles,
} from "lucide-react";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import HeroSection from "./components/hero";

const HomePage = () => {
  const services = [
    {
      title: "Website Design",
      icon: <Monitor className="w-7 h-7" />,
      gradient: "from-blue-500 to-indigo-600",
      short: "Attractive websites that perform and bring results.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      title: "Web App Development",
      icon: <Layers className="w-7 h-7" />,
      gradient: "from-purple-500 to-pink-600",
      short: "Powerful systems that streamline productivity and growth.",
      features: ["Scalable Architecture", "API Integration", "Real-time Data"],
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-7 h-7" />,
      gradient: "from-emerald-500 to-teal-600",
      short: "Seamless user experiences across iOS and Android.",
      features: ["Cross-platform", "Push Notifications", "Offline Mode"],
    },
    {
      title: "Technical Infrastructure",
      icon: <Database className="w-7 h-7" />,
      gradient: "from-rose-500 to-orange-600",
      short: "Reliable technical backbone for organizations.",
      features: ["Cloud Native", "High Security", "24/7 Monitoring"],
    },
  ];

  const portfolio = [
    {
      title: "Global Ministry Portal",
      category: "Web Infrastructure",
      desc: "A unified CMS and distribution platform serving content to 50+ countries with localized caching.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "SecureAuth Enterprise",
      category: "Cybersecurity",
      desc: "High-security biometric authentication bridge for financial and sensitive data environments.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "DataStream Analytics",
      category: "Web App Development",
      desc: "Real-time visualization engine for complex logistical networks and supply chain monitoring.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const testimonials = [
    {
      quote: "LO Platform didn't just build a website; they engineered a foundational system that transformed how we interact with our global community.",
      author: "David Richardson",
      org: "Director, Global Reach Initiative",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    },
    {
      quote: "Their focus on scalability saved us months of rework when our user base doubled overnight. They build for the future, not just today.",
      author: "Sarah Jenkins",
      org: "CTO, NextStream Media",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
    },
  ];

  const team = [
    { name: "John Olumutimi", role: "Chief Operations Officer", img: "/john_2.png" },
    { name: "Kennie Oyinloye", role: "Chief Technology Officer", img: "/Kennie.jpg" },
    { name: "Layo Obidike", role: "Chief Executive Officer", img: "/layo.jpeg" },
  ];

  const stats = [
    { label: "Systems Deployed", value: "250+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Uptime Guaranteed", value: "99.9%", icon: <Zap className="w-5 h-5" /> },
    { label: "Users Reached", value: "1.2M", icon: <Globe className="w-5 h-5" /> },
    { label: "Security Audits", value: "100%", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden text-black">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700;14..32,800;14..32,900&display=swap');
        
        * { font-family: 'Inter', sans-serif; }
        
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #3b82f6; border-radius: 10px; }
      `}</style>

      <NavBar />
      
      <main>
        <HeroSection />

        {/* Stats Section */}
        <div className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center fade-up">
                  <div className="flex justify-center mb-3 text-blue-400">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                  <div className="text-slate-400 text-sm font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-28 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="fade-up">
                <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-2 mb-6">
                  <Target className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Mission</span>
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tighter">
                  Beyond Digital{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Products.</span>
                </h2>
                <p className="text-lg text-slate-600 mt-6 leading-relaxed">
                  We work closely with our clients to translate vision and ideas into powerful digital
                  experiences that serve real-world needs.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Zero-downtime architecture", "Enterprise security", "Global scalability"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fade-up">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl p-8 border border-slate-100 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-lg leading-relaxed italic">
                        "From concept to deployment, our team ensures every solution is aligned with your goals and built for long-term success."
                      </p>
                      <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">
                          LO
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Leadership Team</div>
                          <div className="text-sm text-blue-600">LO Platform</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-28 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 fade-up">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Core Capabilities</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-4">Comprehensive digital solutions tailored to your needs.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 fade-up cursor-pointer"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{service.short}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 fade-up">
              <Link href="/services" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                Explore All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-up">
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4" /> Case Studies
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Strategic Portfolio</h2>
              </div>
              <Link href="/portfolio" className="text-slate-600 font-medium hover:text-blue-600 transition-colors flex items-center gap-1">
                View All Works <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolio.map((item, i) => (
                <div key={i} className="group fade-up cursor-pointer">
                  <div className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.img}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={item.title}
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <span className="text-blue-600 text-xs font-semibold uppercase tracking-wider">{item.category}</span>
                      <h3 className="text-xl font-bold text-slate-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 fade-up">
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                <Users className="w-4 h-4" /> The Team
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">Expert Minds. Focused Mission.</h2>
              <p className="text-slate-600 max-w-2xl mx-auto mt-4">
                Our team consists of high-level architects, security experts, and designers who share a singular vision.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {team.map((member, i) => (
                <div key={i} className="text-center fade-up group">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 ring-4 ring-white">
                    <img
                      src={member.img}
                      className="w-full h-full object-cover object-top"
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mt-5">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 fade-up">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300"
              >
                Meet the Team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-28 bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-purple-600/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 fade-up">
              <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">Client Impact</h2>
              <p className="text-slate-300 max-w-2xl mx-auto mt-4">What our clients say about working with us</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 fade-up border border-white/10"
                >
                  <Quote className="w-10 h-10 text-blue-400 mb-4" />
                  <p className="text-lg leading-relaxed mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.img}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-500/50"
                      alt={testimonial.author}
                    />
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-blue-400 text-sm">{testimonial.org}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22 opacity=%220.05%22%3E%3Cpath fill=%22white%22 d=%22M50 0L100 50L50 100L0 50Z%22/%3E%3C/svg%3E')] bg-repeat" />

          <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Let's Work Together</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to transform your digital presence?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get in touch and let's start building the future.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Start a Conversation
              </button>
              <button
                type="button"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;