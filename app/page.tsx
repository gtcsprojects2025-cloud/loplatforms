"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
// import logo from '../public/logo.png';
// import logo from "../public/"
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
    
    { name: "John Olumutimi", role: "Chief Operations Officer", img: "/john.png" },
    { name: "Kennie Oyinloye.", role: "Chief Technology Officer", img: "/Kennie.jpg" },
    { name: "Layo Obidike", role: "Chief Executive Officer", img: "/Layo-Obidike.jpg" },
  ];

  const services = [
    { 
      title: "Web Design", 
      icon: <Monitor className="w-8 h-8" />, 
      short: "Attractive websites that perform and bring results.",
      description: "Our web design approach focuses on creating visually engaging, user-centered experiences that communicate your brand clearly and convert visitors into customers. From layout to interaction, every element is carefully crafted to ensure clarity, responsiveness, and seamless navigation across all devices. We don't just design pages; we create experiences that leave lasting impressions." 
    },
    { 
      title: "Web App Development", 
      icon: <Layers className="w-8 h-8" />, 
      short: "Powerful systems that streamline productivity and growth.",
      description: "We build secure, scalable, and high-performing web applications tailored to your specific operational needs. Whether it's internal systems, customer platforms, or enterprise solutions, we ensure every application is built with precision and future scalability in mind. We transform complex ideas into intelligent digital systems that work efficiently and reliably." 
    },
    { 
      title: "Mobile App Development", 
      icon: <Smartphone className="w-8 h-8" />, 
      short: "Seamless user experiences across iOS and Android.",
      description: "Our mobile solutions are designed to provide seamless user experiences across iOS and Android platforms, combining intuitive interfaces with strong backend performance. From concept to launch, we build apps that are fast, reliable, and optimized to meet your business goals while keeping users at the center of every interaction." 
    },
    { 
      title: "Technical Infrastructure", 
      icon: <Database className="w-8 h-8" />, 
      short: "Reliable technical backbone for organizations and ministries.",
      description: "We deliver structured, reliable, and future-ready technology frameworks designed to support communication, data management, automation, and scalability. Whether you are building from the ground up or optimizing existing systems, our infrastructure solutions ensure your operations run smoothly and securely, empowering your mission and enhancing your reach." 
    }
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

  const navigateTo = (page:any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async(e:any) => {
    e.preventDefault();
    setFormStatus('sending');
        try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', organisation: '', subject: '', message: '' }); // Clear form
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setFormStatus('error');
    }
  };
  

  const PageHeader = ({ title, subtitle }: { title: any; subtitle: any }) => (
    <section className="pt-48 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center space-x-4 mb-6 reveal active">
          <div className="h-[2px] w-12 bg-blue-600"></div>
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">{subtitle}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase reveal active">
          {title}<span className="text-blue-600">.</span>
        </h1>
      </div>
    </section>
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <>
            <PageHeader title="Our Foundation" subtitle="Mission & Excellence" />
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-start">
                  <div className="reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-6">Who We Are</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                      We engineer scalable systems that power <span className="text-blue-600 underline decoration-slate-200">growth.</span>
                    </h3>
                    <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
                      <p>
                        At LO Platform, we do more than build digital products; we engineer scalable systems that power growth, efficiency, and transformation. We are a forward-thinking technology company focused on helping organizations, ministries, and businesses discover their full digital potential through intelligent design and robust development.
                      </p>
                      <p>
                        Our approach blends strategy, creativity, and engineering excellence to deliver solutions that are functional and impactful. Every project we take on is driven by a clear objective: to create platforms that perform, engage, and scale.
                      </p>
                    </div>
                  </div>
                  <div className="bg-slate-950 p-12 md:p-20 text-white reveal">
                    <div className="space-y-12">
                      <div className="flex gap-6">
                        <CheckCircle2 className="text-blue-600 shrink-0" size={32} />
                        <div>
                          <h4 className="text-xl font-black uppercase mb-3">Goal Aligned</h4>
                          <p className="text-slate-400">We work closely with our clients to have adequate comprehension of their vision and ideas, then translate them into powerful digital experiences.</p>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <ShieldCheck className="text-blue-600 shrink-0" size={32} />
                        <div>
                          <h4 className="text-xl font-black uppercase mb-3">Excellence Standard</h4>
                          <p className="text-slate-400">At LO Platform, innovation and excellence is our standard. We deliver technology that empowers you to operate smarter and reach wider.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
                  <div className="max-w-2xl">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Leadership</h2>
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">The Architects of Change.</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-px bg-slate-200">
                  {team.map((member, i) => (
                    <div key={i} className="bg-white p-12 group reveal">
                      <div className="aspect-square overflow-hidden mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{member.name}</h4>
                      <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-6">{member.role}</p>
                      <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X size={18} className="cursor-pointer hover:text-blue-600" />
                        <X size={18} className="cursor-pointer hover:text-blue-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'services':
        return (
          <>
            <PageHeader title="End-to-End Solutions" subtitle="Our Capabilities" />
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mb-24 reveal">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                    Built on a foundation of strategy, performance, and <span className="text-blue-600">scalability.</span>
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    We deliver digital solutions designed to position your brand, optimize operations, and drive measurable results. Every solution we develop works seamlessly for today and evolves for tomorrow.
                  </p>
                </div>
                
                <div className="space-y-24">
                  {services.map((s, i) => (
                    <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center reveal ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={`${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                        <div className="w-20 h-20 bg-blue-600 flex items-center justify-center text-white mb-8">
                          {s.icon}
                        </div>
                        <h4 className="text-3xl font-black text-slate-900 uppercase tracking-tighter mb-6">{s.title}</h4>
                        <p className="text-lg text-slate-600 leading-relaxed">
                          {s.description}
                        </p>
                      </div>
                      <div className={`bg-slate-100 aspect-video relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-950/20"></div>
                         <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <Layers size={120} />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-32 p-12 md:p-24 bg-blue-600 text-white text-center reveal">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to grow faster?</h3>
                  <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Partner with LO Platform to create digital solutions that are not only innovative, but impactful, scalable, and built for growth.
                  </p>
                  <button className="bg-slate-950 text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all">
                    Contact Our Architects
                  </button>
                </div>
              </div>
            </section>
          </>
        );
      case 'contact':
        return (
          <>
            <PageHeader title="Connect With Us" subtitle="Start a Conversation" />
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24">
                  <div className="reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-6">Inquiry</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter mb-10 leading-none">Let's build the <br /><span className="text-blue-600 underline decoration-slate-200">future</span> together.</h3>
                    
                    <div className="space-y-12 mb-16">
                      <div className="flex items-start space-x-6 group">
                        <div className="w-14 h-14 bg-slate-950 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                          <Mail size={24} />
                        </div>
                        <div>
                          <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-1">Email Our Team</p>
                          <p className="text-2xl font-black text-slate-900">Support@loplatforms.com</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6 group">
                        <div className="w-14 h-14 bg-slate-950 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                          <MapPin size={24} />
                        </div>
                        <div>
                          <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-1">Office</p>
                          <p className="text-2xl font-black text-slate-900">11, Ogunmefun street Gbagada Lagos, Nigeria</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6 group">
                        <div className="w-14 h-14 bg-slate-950 flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
                          <Phone size={24} />
                        </div>
                        <div>
                          <p className="text-blue-600 font-black uppercase text-[10px] tracking-widest mb-1">Direct Line</p>
                          <p className="text-2xl font-black text-slate-900">+234 701 187 1220</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-8 border-l-4 border-slate-950 bg-slate-50">
                      <h5 className="font-black uppercase tracking-widest text-xs mb-4">Availability</h5>
                      <p className="text-slate-600 leading-relaxed">
                        Our technical architects are available for consultations Monday through Friday, 09:00 — 18:00 CET. We respond to all inquiries within 24 operational hours.
                      </p>
                    </div>
                  </div>

                  <div className="reveal">
                    {formStatus === 'success' ? (
                      <div className="bg-blue-600 p-12 text-white h-full flex flex-col justify-center items-center text-center">
                        <CheckCircle2 size={80} className="mb-6" />
                        <h4 className="text-4xl font-black uppercase tracking-tighter mb-4">Transmission Received</h4>
                        <p className="text-blue-100 text-lg">Our Engineers have been notified. A representative will contact you shortly.</p>
                        <button onClick={() => setFormStatus(null)} className="mt-8 border border-white/30 px-8 py-4 uppercase font-black tracking-widest text-xs hover:bg-white hover:text-blue-600 transition-all">Send Another</button>
                      </div>
                    ) : (
                      <form onSubmit={handleFormSubmit} className="space-y-8 p-12 bg-slate-950 text-white shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Full Name</label>
                            <input required type="text" 
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-blue-600 transition-colors" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Organization</label>
                            <input type="text" 
                                id="organisation"
                                name="organisation"
                                value={formData.organisation}
                                onChange={handleChange}
                                className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-blue-600 transition-colors" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Professional Email</label>
                          <input required type="email" 
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-blue-600 transition-colors" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Nature of Inquiry</label>
                          <select 
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full bg-slate-900 border-b border-white/20 px-0 py-4 outline-none focus:border-blue-600 transition-colors"
                              >
                            <option className="bg-slate-900">Custom Software Engineering</option>
                            <option className="bg-slate-900">Infrastructure Scalability</option>
                            <option className="bg-slate-900">Strategic Web Design</option>
                            <option className="bg-slate-900">Cybersecurity Audit</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">Project Brief</label>
                          <textarea required 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-white/5 border-b border-white/20 px-0 py-4 outline-none focus:border-blue-600 transition-colors resize-none"></textarea>
                        </div>
                        <button disabled={formStatus === 'sending'} className="w-full bg-blue-600 hover:bg-blue-700 py-6 font-black uppercase tracking-[0.3em] flex items-center justify-center group transition-all">
                          {formStatus === 'sending' ? 'TRANSMITTING...' : 'INITIATE PROJECT'}
                          <Send className="ml-3 group-hover:translate-x-2 transition-transform" size={18} />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </section>
            
            {/* FAQ / Support Section */}
            <section className="py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                   <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Support</h2>
                   <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Strategic FAQ.</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { q: "How quickly can we start a project?", a: "Typically, we can initiate a discovery phase within 10-14 business days of contract finalization." },
                    { q: "Do you offer post-launch maintenance?", a: "Yes, our infrastructure solutions include 24/7 monitoring and tiered support packages." },
                    { q: "Can you work with existing legacy systems?", a: "Absolutely. Our specialized integration team excels at bridging legacy tech with modern, scalable architectures." },
                    { q: "What is your pricing structure?", a: "We work primarily on a project-based value model, ensuring total transparency on deliverables and ROI." }
                  ].map((faq, i) => (
                    <div key={i} className="p-10 bg-white border border-slate-200 reveal">
                      <div className="flex items-center space-x-4 mb-4">
                        <MessageSquare className="text-blue-600" size={20} />
                        <h4 className="text-lg font-black uppercase tracking-tight">{faq.q}</h4>
                      </div>
                      <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'home':
        return (
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
                    <button onClick={() => navigateTo('about')} className="bg-blue-600 text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center group">
                      Our Foundation <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <button onClick={() => navigateTo('services')} className="border border-white/20 text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-white hover:text-slate-950 transition-all">
                      Our Solutions
                    </button>
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
              </div>
              <div className="mt-16 text-left reveal p-8">
                  <button onClick={() => navigateTo('about')} className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
                    Explore More
                  </button>
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
                  <button onClick={() => navigateTo('services')} className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 border-b-2 border-blue-600 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all">
                    Explore Our Strategic Framework
                  </button>
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
                        <img src={member.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" alt={member.name} />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-8 reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm">The Personnel</h2>
                    <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Expert Minds. <br />Focused Mission.</h3>
                    <p className="text-xl text-slate-500 leading-relaxed">
                      Our team consists of high-level architects, security experts, and designers who share a singular vision: engineering digital infrastructure that scales with purpose.
                    </p>
                    <button onClick={() => navigateTo('about')} className="bg-slate-950 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 transition-all">
                      Meet the Team
                    </button>
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
        );
      default:
        return <section className="py-40 text-center"><h2 className="text-4xl font-black uppercase">Coming Soon</h2></section>;
    }
  };

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
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-xl py-4' : 'bg-transparent lg:mt-10 py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center space-x-3 group outline-none">
            <div className="w-32 h-10  flex items-center justify-center transition-all duration-500 group-hover:rotate-90">
         <Image
            src="/logo.png" // Next.js looks directly into the 'public' folder
            alt="Logo"
            width={500}
            height={500}
          />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              <span className="text-blue-600">PLATFORMS.</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-10">
            {[
              { label: 'Home', id: 'home' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <button 
                key={item.id} 
                onClick={() => navigateTo(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-blue-600 relative group/link ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-900 lg:text-white'} ${currentPage === item.id ? 'text-blue-600' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-blue-600 transition-all ${currentPage === item.id ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </button>
            ))}
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} /> : <Menu size={32} className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[110] bg-slate-950 flex flex-col items-center justify-center text-center p-6 lg:hidden">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-3xl font-black text-white uppercase tracking-tighter mb-8 hover:text-blue-600 transition-colors">{item}</button>
          ))}
        </div>
      )}

      <main>
        {renderContent()}
      </main>

      <footer className="bg-slate-950 text-white pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-32">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  {/* <span className="text-white font-black text-2xl">L</span> */}
                  <Image
                        src="/logo.png" // Next.js looks directly into the 'public' folder
                        alt="Logo"
                        width={500}
                        height={500}
                      />
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase">LO<span className="text-blue-600">Platform.</span></span>
              </div>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Engineering scalable systems that power growth, efficiency, and transformation for the world's most vital organizations.
              </p>
            </div>
            <div className="space-y-10">
              <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Explore</h5>
              <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">Foundation</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Solutions</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact</button></li>
              </ul>
            </div>
            <div className="space-y-10">
              <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Connect</h5>
              <p className="text-slate-400 text-xs tracking-[0.2em] leading-loose font-bold uppercase">
                SYSTEMS@LOPLATFORM.TECH <br />
                SCIENCE PARK, ZURICH <br />
                DIGITAL DISTRICT, NY
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            © 2026 LOPlatform. Built for Long-term Success.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;