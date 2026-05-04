"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Database, 
  Menu, 
  X, 
  ArrowRight,
  Target, 
  Eye, 
  ShieldCheck, 
  Zap, 
  Star, 
  Clock, 
  User, 
  Quote,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare
} from 'lucide-react';
import NavBar from './components/navBar';
import Footer from './components/footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', organisation: '', subject: '', message: '' });

  const heroSlides = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
  ];

  const stats = [
    { label: "Systems Deployed", value: "250+" },
    { label: "Uptime Guaranteed", value: "99.9%" },
    { label: "Users Reached", value: "1.2M" },
    { label: "Security Audits", value: "100%" }
  ];


  const portfolio = [
    {
      title: "Global Ministry Portal",
      category: "Web Infrastructure",
      desc: "A unified CMS and distribution platform serving content to 50+ countries with localized caching.",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SecureAuth Enterprise",
      category: "Cybersecurity",
      desc: "High-security biometric authentication bridge for financial and sensitive data environments.",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "DataStream Analytics",
      category: "Web App Development",
      desc: "Real-time visualization engine for complex logistical networks and supply chain monitoring.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "LO Platform didn't just build a website; they engineered a foundational system that transformed how we interact with our global community.",
      author: "David Richardson",
      org: "Director, Global Reach Initiative",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
      quote: "Their focus on scalability saved us months of rework when our user base doubled overnight. They build for the future, not just today.",
      author: "Sarah Jenkins",
      org: "CTO, NextStream Media",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  const team = [
    
    { name: "John Olumutimi", role: "Chief Operations Officer", img: "/john_2.png" },
    { name: "Kennie Oyinloye.", role: "Chief Technology Officer", img: "/Kennie.jpg" },
    { name: "Layo Obidike", role: "Chief Executive Officer", img: "/layo.jpeg" },
  ];

    useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const observers = document.querySelectorAll('.reveal');
      observers.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.95) {
          el.classList.add('active');
        }
      });
    };
    const slideInterval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(slideInterval);
    };
  }, [heroSlides.length, currentPage]);

  const services = [
    { 
      title: "Website Design", 
      icon: <Monitor className="w-8 h-8" />, 
      src: '/website_design_2.jpeg',
      short: "Attractive websites that perform and bring results.",
      description: "Our web design approach focuses on creating visually engaging, user-centered experiences that communicate your brand clearly and convert visitors into customers. From layout to interaction, every element is carefully crafted to ensure clarity, responsiveness, and seamless navigation across all devices. We don't just design pages; we create experiences that leave lasting impressions." 
    },
    { 
      title: "Web App Development", 
      icon: <Layers className="w-8 h-8" />, 
      src:'/web_dev.jpeg',
      short: "Powerful systems that streamline productivity and growth.",
      description: "We build secure, scalable, and high-performing web applications tailored to your specific operational needs. Whether it's internal systems, customer platforms, or enterprise solutions, we ensure every application is built with precision and future scalability in mind. We transform complex ideas into intelligent digital systems that work efficiently and reliably." 
    },
    { 
      title: "Mobile App Development", 
      icon: <Smartphone className="w-8 h-8" />, 
      src:'/mobileApp.jpeg',
      short: "Seamless user experiences across iOS and Android.",
      description: "Our mobile solutions are designed to provide seamless user experiences across iOS and Android platforms, combining intuitive interfaces with strong backend performance. From concept to launch, we build apps that are fast, reliable, and optimized to meet your business goals while keeping users at the center of every interaction." 
    },
    { 
      title: "Technical Infrastructure", 
      icon: <Database className="w-8 h-8" />, 
      src:'/IT_Infra.jpeg',
      short: "Reliable technical backbone for organizations and ministries.",
      description: "We deliver structured, reliable, and future-ready technology frameworks designed to support communication, data management, automation, and scalability. Whether you are building from the ground up or optimizing existing systems, our infrastructure solutions ensure your operations run smoothly and securely, empowering your mission and enhancing your reach." 
    }
  ];



 
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
    body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; overflow-x: hidden; }
    .reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.active { opacity: 1; transform: translateY(0); }
    @keyframes ken-burns { 0% { transform: scale(1); } 100% { transform: scale(1.1); } }
    .animate-ken-burns { animation: ken-burns 15s ease-out infinite alternate; }
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #020617; }
    ::-webkit-scrollbar-thumb { background: #2563eb; }
    select { appearance: none; -webkit-appearance: none; }
  `;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
       <style dangerouslySetInnerHTML={{ __html: customStyles }} /> 


      <NavBar/>

      <main>
                 <>
            <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
              <div className="absolute inset-0 z-0">
                {heroSlides.map((img, idx) => (
                  <div key={idx} className={`absolute inset-0 transition-opacity duration-[2000ms] ${activeSlide === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-cover bg-center scale-110 animate-ken-burns" style={{ backgroundImage: `url('${img}')` }}></div>
                    <div className="absolute inset-0 bg-slate-950/80"></div>
                  </div>
                ))}
              </div>
              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="max-w-4xl space-y-8 pt-20">
                  <div className="flex items-center space-x-4 reveal active">
                    <div className="h-[2px] w-12 bg-blue-600"></div>
                    //<span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Innovation and Excellence</span>
                  </div>
                  <h1 className="text-6xl md:text-6xl font-black text-white leading-none tracking-tighter reveal active">
                    ENGINEERING <br />
                    <span className="text-blue-600">IMPACTFUL   </span>
                    PLATFORMS.
                  </h1>
                  <p className="text-xl text-slate-300 max-w-2xl leading-relaxed reveal active">
                    At LO Platform, we do more than build digital products; we engineer scalable systems that power growth, efficiency, and transformation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 reveal active">
                    <Link href={'/about'} className="bg-blue-600 text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center group">
                      Our Foundation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <Link href={'/services'} className="border border-white/20 text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
                      Our Solutions
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Our Mission Section - Replaces New Vision */}
            <section className="py-24 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-8 reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-6 flex items-center">
                       <Target className="mr-2 w-4 h-4 fill-blue-600 text-blue-600" /> Our Mission
                    </h2>
                  <h1 className="text-6xl md:text-6xl font-black text-black leading-none tracking-tighter reveal active">
                    Beyond Digital <br />
                    <span className="text-blue-600">Products.</span> <br />
                    
                  </h1>
                    <p className="text-xl text-black max-w-2xl leading-relaxed reveal active">
                      We work closely with our clients to translate vision and ideas into powerful digital experiences that serve real-world needs. From concept to deployment, our team ensures every solution is aligned with your goals.
                    </p>
                  </div>
                  <div className="lg:col-span-4 reveal">
                    <div className="p-8 bg-slate-50 border-l-4 border-blue-600">
                      <p className="text-slate-600 text-lg leading-relaxed font-medium">
                        From concept to deployment, our team ensures every solution is aligned with your goals.
                      </p>
                    </div>
                  </div>
                </div>
              
                  <div className="mt-16 text-left reveal p-8 ">
                      <Link href={'/about'} className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
                        Explore More
                      </Link>
                    </div>
              </div>
            </section>

            <section className="py-12 bg-blue-600">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-white reveal">
                      <div className="text-4xl font-black tracking-tighter mb-1">{stat.value}</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                  {services.map((s, i) => (
                    <div key={i} className="bg-white p-12 hover:bg-blue-600 group transition-all duration-500 reveal">
                      <div className="text-blue-600 group-hover:text-white mb-8 transition-colors">{s.icon}</div>
                      <h4 className="text-xl font-black text-slate-900 group-hover:text-white uppercase mb-4 transition-colors leading-tight">{s.title}</h4>
                      <p className="text-slate-500 group-hover:text-white/80 text-sm transition-colors">{s.short}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 text-center reveal">
                  <Link href={'/services'} className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
                    Explore Our Strategic Framework
                  </Link>
                </div>
              </div>
            </section>

            {/* Work Portfolio Section */}
            <section className="py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
                  <div className="max-w-2xl">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Case Studies</h2>
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Strategic Portfolio.</h3>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest border-b-2 border-blue-600 pb-2 hover:text-blue-600 transition-colors">
                    View All Works
                  </button>
                </div>
                <div className="grid lg:grid-cols-3 gap-8">
                  {portfolio.map((item, i) => (
                    <div key={i} className="group cursor-pointer reveal">
                      <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                        <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt={item.title} />
                        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-2">{item.category}</div>
                      <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Our Team Homepage Section */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <div className="grid grid-cols-2 gap-4 reveal">
                    {team.slice(0, 3).map((member, i) => (
                      <div key={i} className={`aspect-square relative overflow-hidden ${i === 2 ? 'col-span-2' : ''}`}>
                        <img src={member.img} className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500" alt={member.name} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-8 reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm">The Personnel</h2>
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Expert Minds. <br />Focused Mission.</h3>
                    <p className="text-xl text-slate-500 leading-relaxed">
                      Our team consists of high-level architects, security experts, and designers who share a singular vision: engineering digital infrastructure that scales with purpose.
                    </p>
                    <Link href={'/About'} className="bg-slate-950 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all">
                      Meet the Team
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-20"></div>
               <div className="max-w-7xl mx-auto px-6 relative z-10">
                 <div className="text-center mb-24 reveal">
                   <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Validation</h2>
                   <h3 className="text-5xl font-black uppercase tracking-tighter">Client Impact.</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-12">
                   {testimonials.map((t, i) => (
                     <div key={i} className="bg-white/5 p-12 border border-white/10 hover:border-blue-600 transition-colors reveal">
                       <Quote className="text-blue-600 mb-8" size={40} />
                       <p className="text-2xl font-medium leading-relaxed mb-10 italic">"{t.quote}"</p>
                       <div className="flex items-center space-x-4">
                         <img src={t.img} className="w-14 h-14 rounded-full grayscale" alt={t.author} />
                         <div>
                           <div className="font-black uppercase tracking-widest text-sm">{t.author}</div>
                           <div className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">{t.org}</div>
                         </div>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>
          </>
      </main>

   <Footer/>
    </div>
  );
};

export default App;