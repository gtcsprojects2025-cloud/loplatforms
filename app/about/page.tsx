"use client";

import React, { useEffect } from "react";
import NavBar from "../components/navBar";
import Footer from "../components/footer";
import { 
  Target, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import Link from "next/link";

const About = () => {
  const team = [
    { 
      name: "John Olumutimi", 
      role: "Chief Operations Officer", 
      img: "/john_2.png",
      bio: "Strategic leader with over 15 years driving operational excellence."
    },
    { 
      name: "Kennie Oyinloye", 
      role: "Chief Technology Officer", 
      img: "/Kennie.jpg",
      bio: "Visionary engineer passionate about scalable and secure systems."
    },
    { 
      name: "Layo Obidike", 
      role: "Chief Executive Officer", 
      img: "/layo.jpeg",
      bio: "Entrepreneurial leader focused on digital transformation."
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Purpose Driven",
      desc: "Every solution is built with clear business and impact objectives."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Excellence First",
      desc: "We maintain the highest standards in design, code, and delivery."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Future Focused",
      desc: "Building systems that scale and evolve with your growth."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People Centered",
      desc: "Technology should serve people, not the other way around."
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <NavBar />
      
      {/* Hero Section - Balanced Heading */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#3b82f620_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm mb-6">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              EST. 2020
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
              We don't just build websites.<br />
              We engineer <span className="text-blue-500">digital futures.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-lg">
              LO Platform is a strategic technology partner helping organizations and ministries thrive in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Better Balanced */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="reveal">
              <div className="uppercase text-blue-600 font-semibold tracking-widest text-sm mb-4">OUR STORY</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-8">
                Building with purpose,<br />delivering with excellence.
              </h2>
              <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed">
                <p>
                  At LO Platform, we believe technology should be more than functional — it should be transformative. 
                  We create digital systems that don't just work today, but continue to deliver value for years to come.
                </p>
                <p>
                  Our team combines deep technical expertise with strategic thinking and creative excellence to 
                  deliver solutions for forward-thinking organizations and ministries.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="reveal grid grid-cols-2 gap-6">
              <div className="bg-slate-100 rounded-3xl p-8">
                <div className="text-5xl font-bold text-slate-900 mb-2">50+</div>
                <p className="text-slate-600">Projects Delivered</p>
              </div>
              <div className="bg-slate-100 rounded-3xl p-8">
                <div className="text-5xl font-bold text-slate-900 mb-2">1.2M+</div>
                <p className="text-slate-600">Users Reached</p>
              </div>
              <div className="bg-slate-100 rounded-3xl p-8">
                <div className="text-5xl font-bold text-slate-900 mb-2">99.9%</div>
                <p className="text-slate-600">Uptime Average</p>
              </div>
              <div className="bg-slate-100 rounded-3xl p-8">
                <div className="text-5xl font-bold text-slate-900 mb-2">4</div>
                <p className="text-slate-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">OUR PRINCIPLES</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">What drives everything we do</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group reveal"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team - Fixed Image Cropping */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <div className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">LEADERSHIP</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">The minds behind the mission</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <div 
                key={i} 
                className="group reveal bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-700"
              >
                {/* Improved Image Container */}
                <div className="h-80 bg-slate-200 overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-blue-600 font-medium mt-1">{member.role}</p>
                  <p className="text-slate-600 mt-5 leading-relaxed text-[15px]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Let's build something meaningful together
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-md mx-auto">
            Whether you're a growing business or a large organization, we're ready to partner with you.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all group"
          >
            Start a Project
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;