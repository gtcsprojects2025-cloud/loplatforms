"use client"
import React, { useState, useEffect } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  Cpu, 
  Database, 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Globe, 
  Zap,
  Users,
  Trophy,
  Activity,
 
  Search,
  Plus,
  Mail,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState('home');

  const heroSlides = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
  ];

  const services = [
    {
      title: "Digital Strategy",
      description: "We define the path to digital sovereignty through rigorous planning and technical auditing.",
      icon: <Activity className="w-6 h-6" />,
      tag: "Strategy",
      details: "Our strategic framework involves deep-dive infrastructure analysis, risk assessment, and long-term digital roadmap construction."
    },
    {
      title: "Custom Systems",
      description: "Bespoke software ecosystems designed for high-load government and enterprise operations.",
      icon: <Layers className="w-6 h-6" />,
      tag: "Development",
      details: "We build scalable, modular architectures using modern tech stacks that prioritize performance and maintainability."
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure, private cloud deployments that ensure data remains under your absolute control.",
      icon: <Database className="w-6 h-6" />,
      tag: "Infrastructure",
      details: "Deployment of sovereign cloud solutions that bypass traditional hyperscaler risks while maintaining global speed."
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive interfaces for complex systems that empower users at every level.",
      icon: <Monitor className="w-6 h-6" />,
      tag: "Creative",
      details: "User-centric design methodologies applied to administrative dashboards and public-facing portals."
    }
  ];

  const team = [
    { name: "Alexander Vance", role: "Chief Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" },
    { name: "Elena Rodriguez", role: "Head of Infrastructure", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80" },
    { name: "Marcus Chen", role: "Security Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80" },
    { name: "Sarah Jenkins", role: "Design Lead", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80" }
  ];

  const galleryItems = [
    { title: "Network Core", cat: "Development", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&w=600&q=80" },
    { title: "User Portal", cat: "Design", img: "https://images.unsplash.com/photo-1581291518655-95245be4b272?auto=format&fit=crop&w=600&q=80" },
    { title: "Cloud Node", cat: "Infrastructure", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80" },
    { title: "Safety Protocol", cat: "Security", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" }
  ];

  const blogPosts = [
    { date: "24 Mar", title: "The Future of Sovereign Data Clouds", excerpt: "How nations are reclaiming digital borders in the era of hyperscalers...", author: "Admin", comments: "12", content: "The concept of digital sovereignty has moved from academic debate to national priority. In this post, we explore why private infrastructure is the only way to ensure data integrity..." },
    { date: "18 Mar", title: "Securing High-Load Government Portals", excerpt: "Technical deep-dive into the security layers required for civil infrastructure...", author: "Tech Team", comments: "08", content: "When dealing with millions of concurrent users, standard security protocols often fall short. We examine load balancing strategies and Zero Trust architecture..." }
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

  const PageHeader = ({ title, subtitle }: { title: any; subtitle: any }) => (
    <section className="pt-48 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-fixed opacity-20"></div>
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
      case 'services':
        return (
          <>
            <PageHeader title="Our Services" subtitle="Capabilities" />
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12">
                  {services.map((s, i) => (
                    <div key={i} className="p-12 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group reveal">
                      <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center mb-8 shadow-lg shadow-blue-600/20">
                        {s.icon}
                      </div>
                      <h4 className="text-3xl font-black text-slate-900 mb-4 uppercase">{s.title}</h4>
                      <p className="text-slate-600 mb-8 leading-relaxed text-lg">{s.details}</p>
                      <button className="text-blue-600 font-black text-xs uppercase tracking-widest flex items-center hover:text-slate-900 transition-colors">
                        Inquire Details <ChevronRight size={14} className="ml-2" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'team':
        return (
          <>
            <PageHeader title="Expert Team" subtitle="Technical Minds" />
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {team.map((member, i) => (
                    <div key={i} className="reveal">
                       <div className="aspect-[4/5] overflow-hidden mb-6 group relative">
                        <img src={member.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt={member.name} />
                        <div className="absolute inset-0 bg-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <h4 className="text-2xl font-black text-slate-900 uppercase">{member.name}</h4>
                      <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-4">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'gallery':
        return (
          <>
            <PageHeader title="Work Gallery" subtitle="Portfolio" />
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {galleryItems.map((item, i) => (
                    <div key={i} className="group relative h-[500px] overflow-hidden reveal">
                      <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                      <div className="absolute inset-0 bg-slate-950/80 flex flex-col justify-end p-12 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-2">{item.cat}</span>
                        <h4 className="text-3xl font-black text-white uppercase tracking-tighter">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        );
      case 'blog':
        return (
          <>
            <PageHeader title="Latest News" subtitle="Resources" />
            <section className="py-24 bg-white">
              <div className="max-w-4xl mx-auto px-6 space-y-24">
                {blogPosts.map((post, i) => (
                  <article key={i} className="reveal group">
                    <div className="flex items-center space-x-6 mb-8 text-xs font-black uppercase tracking-widest text-blue-600">
                      <span>{post.date}</span>
                      <div className="w-12 h-[1px] bg-slate-200"></div>
                      <span className="text-slate-400">By {post.author}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase hover:text-blue-600 transition-colors cursor-pointer leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-10">{post.content}</p>
                    <button className="px-10 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                      Read Full Post
                    </button>
                  </article>
                ))}
              </div>
            </section>
          </>
        );
      case 'contact':
        return (
          <>
            <PageHeader title="Get In Touch" subtitle="Contact" />
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                  <div className="space-y-12 reveal">
                    <h3 className="text-4xl font-black text-slate-900 uppercase">Consult the <br/> Engineering Team.</h3>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-6">
                        <div className="text-blue-600 mt-1"><MapPin /></div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">HQ</p>
                          <p className="text-lg font-bold text-slate-900">Zurich Science Park, CH</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-6">
                        <div className="text-blue-600 mt-1"><Mail /></div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Inquiries</p>
                          <p className="text-lg font-bold text-slate-900">systems@loplatform.tech</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-50 p-12 border border-slate-100 reveal">
                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                      <input type="text" className="w-full bg-white border border-slate-200 px-6 py-4 focus:border-blue-600 outline-none transition-all" placeholder="Project Name" />
                      <input type="email" className="w-full bg-white border border-slate-200 px-6 py-4 focus:border-blue-600 outline-none transition-all" placeholder="Corporate Email" />
                      <textarea  className="w-full bg-white border border-slate-200 px-6 py-4 focus:border-blue-600 outline-none transition-all" placeholder="Technical Requirements..."></textarea>
                      <button className="w-full bg-blue-600 text-white py-6 font-black uppercase tracking-widest hover:bg-blue-700 transition-all">Submit Brief</button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      default: // HOME PAGE
        return (
          <>
            {/* 1. Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
              <div className="absolute inset-0 z-0">
                {heroSlides.map((img, idx) => (
                  <div key={idx} className={`absolute inset-0 transition-opacity duration-[2000ms] ${activeSlide === idx ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 bg-cover bg-center scale-110 animate-ken-burns" style={{ backgroundImage: `url('${img}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
                  </div>
                ))}
              </div>
              <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
                <div className="max-w-3xl space-y-8">
                  <div className="flex items-center space-x-4 reveal active">
                    <div className="h-[2px] w-12 bg-blue-600"></div>
                    <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">Innovation Meets Governance</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black text-white leading-none tracking-tighter reveal active">
                    REDEFINING <br />
                    <span className="text-blue-600">SOVEREIGN </span> 
                    DIGITAL OPS.
                  </h1>
                  <p className="text-xl text-slate-300 max-w-xl leading-relaxed reveal active">
                    We build high-end technical architectures that empower governments and global enterprises to lead with digital independence.
                  </p>
                  <button onClick={() => navigateTo('services')} className="bg-blue-600 text-white px-12 py-6 font-black uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center group reveal active">
                    Discover More <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </section>

            {/* 2. Services Brief */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24 reveal">
                  <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Core Capabilities</h2>
                  <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Professional Services.</h3>
                  <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-8"></div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-100">
                  {services.map((s, i) => (
                    <div key={i} className="group p-12 border-r border-b border-slate-100 hover:bg-slate-950 transition-all duration-500 reveal">
                      <div className="w-16 h-16 bg-slate-100 flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        {s.icon}
                      </div>
                      <span className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4 block group-hover:text-blue-400">{s.tag}</span>
                      <h4 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-white transition-colors">{s.title}</h4>
                      <p className="text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">{s.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-20 text-center reveal">
                  <button onClick={() => navigateTo('services')} className="px-12 py-5 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all">Explore All Services</button>
                </div>
              </div>
            </section>

            {/* 3. Team Brief */}
            <section className="py-32 bg-slate-50">
              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
                <div className="reveal">
                  <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Elite Talent</h2>
                  <h3 className="text-5xl font-black text-slate-900 mb-8 leading-tight uppercase">Technical Architects at the Core.</h3>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">Our team consists of senior engineers and strategic consultants with decades of experience in security and systems design.</p>
                  <button onClick={() => navigateTo('team')} className="flex items-center text-blue-600 font-black uppercase tracking-widest text-xs group">
                    Meet the Team <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-all" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 reveal">
                  {team.slice(0, 4).map((m, i) => (
                    <div key={i} className="aspect-square bg-slate-200 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                      <img src={m.img} className="w-full h-full object-cover" alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Gallery Brief */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
                  <div>
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Work Portfolio</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">Recent Impacts.</h3>
                  </div>
                  <button onClick={() => navigateTo('gallery')} className="px-12 py-5 bg-slate-950 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">View All Work</button>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {galleryItems.map((item, i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden reveal">
                      <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                      <div className="absolute inset-0 bg-blue-600/90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 text-center">
                        <span className="text-white/80 text-[10px] font-black uppercase tracking-widest mb-2">{item.cat}</span>
                        <h4 className="text-xl font-black text-white uppercase">{item.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Blog Brief */}
            <section className="py-32 bg-slate-950 text-white overflow-hidden">
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-20">
                  <div className="reveal">
                    <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Intellectual Edge</h2>
                    <h3 className="text-5xl font-black text-white uppercase leading-none mb-8">Digital <br/> Insights.</h3>
                    <button onClick={() => navigateTo('blog')} className="text-blue-600 font-black uppercase tracking-widest text-xs flex items-center group">
                      View Resources <ArrowRight size={14} className="ml-3 group-hover:translate-x-2 transition-all" />
                    </button>
                  </div>
                  <div className="lg:col-span-2 grid md:grid-cols-2 gap-12">
                    {blogPosts.map((post, i) => (
                      <div key={i} className="space-y-6 reveal">
                        <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{post.date}</span>
                        <h4 className="text-2xl font-black uppercase leading-tight hover:text-blue-600 transition-colors cursor-pointer" onClick={() => navigateTo('blog')}>{post.title}</h4>
                        <p className="text-slate-400 line-clamp-3">{post.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 6. Contact Brief */}
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6 bg-slate-900 p-16 md:p-32 relative reveal overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px]"></div>
                <div className="relative z-10 text-center max-w-3xl mx-auto space-y-12">
                  <h3 className="text-5xl md:text-7xl font-black text-white uppercase leading-none tracking-tighter">Ready for <br/> Sovereign <span className="text-blue-600">Ops?</span></h3>
                  <p className="text-xl text-slate-400">Scale your infrastructure with a team that understands the intersection of security and performance.</p>
                  <button onClick={() => navigateTo('contact')} className="bg-white text-slate-900 px-16 py-8 font-black uppercase tracking-widest text-sm hover:bg-blue-600 hover:text-white transition-all shadow-2xl">Start Collaboration</button>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-950 text-white/60 py-2 text-xs border-b border-white/5 relative z-[60]">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-bold tracking-widest uppercase">
          <div className="flex space-x-6">
            <span>Support: +1 (555) 000-LO-PL</span>
            <span>Email: systems@loplatform.tech</span>
          </div>
          <div className="flex space-x-4">
            <X size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
            <X size={14} className="hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-xl py-3' : 'bg-transparent lg:mt-10 py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => navigateTo('home')} className="flex items-center space-x-3 group outline-none">
            <div className="w-12 h-12 bg-blue-600 flex items-center justify-center transition-all duration-500 group-hover:rotate-90">
              <span className="text-white font-black text-2xl">L</span>
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              LO<span className="text-blue-600">PLATFORM.</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-10">
            {['Home', 'Services', 'Team', 'Gallery', 'Blog', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => navigateTo(item.toLowerCase())}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-blue-600 relative group/link ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-slate-900 lg:text-white'} ${currentPage === item.toLowerCase() ? 'text-blue-600' : ''}`}
              >
                {item}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-blue-600 transition-all ${currentPage === item.toLowerCase() ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </button>
            ))}
            <button 
                onClick={() => navigateTo('contact')}
                className="bg-blue-600 text-white px-8 py-3 text-sm font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 active:scale-95">
              Hire Us
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} /> : <Menu size={32} className={(scrolled || currentPage !== 'home') ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center text-center p-6 lg:hidden">
          <button className="absolute top-8 right-8 text-white" onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          {['Home', 'Services', 'Team', 'Gallery', 'Blog', 'Contact'].map((item) => (
            <button key={item} onClick={() => navigateTo(item.toLowerCase())} className="text-3xl font-black text-white uppercase tracking-tighter mb-8 hover:text-blue-600">{item}</button>
          ))}
        </div>
      )}

      {/* Main Page Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-32">
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-black text-2xl">L</span>
                </div>
                <span className="text-3xl font-black tracking-tighter uppercase">LO<span className="text-blue-600">Platform.</span></span>
              </div>
              <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                Leading technical engineering firm specialized in sovereign systems and high-scale organizational infrastructure.
              </p>
            </div>
            <div className="space-y-10">
              <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Company</h5>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Services</button></li>
                <li><button onClick={() => navigateTo('team')} className="hover:text-white transition-colors">Expert Team</button></li>
                <li><button onClick={() => navigateTo('gallery')} className="hover:text-white transition-colors">Work Gallery</button></li>
              </ul>
            </div>
            <div className="space-y-10">
              <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Quick Contact</h5>
              <p className="text-white font-bold tracking-widest uppercase text-sm">systems@loplatform.tech</p>
              <p className="text-slate-400 text-sm">Zurich Science Park, CH</p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
            © 2024 LOPlatform Technical Group. Precision Engineered.
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { font-family: 'Inter', sans-serif; scroll-behavior: smooth; }
        .reveal { opacity: 0; transform: translateY(40px); transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .reveal.active { opacity: 1; transform: translateY(0); }
        @keyframes ken-burns { 0% { transform: scale(1); } 100% { transform: scale(1.2); } }
        .animate-ken-burns { animation: ken-burns 12s ease-out infinite alternate; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #020617; }
        ::-webkit-scrollbar-thumb { background: #2563eb; }
      `}</style>
    </div>
  );
};

export default App;