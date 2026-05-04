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
  export default function NavBar(){

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [activeSlide, setActiveSlide] = useState(0);
      const [currentPage, setCurrentPage] = useState('home');
      const [formStatus, setFormStatus] = useState<string | null>(null);
      const [formData, setFormData] = useState({ name: '', email: '', organisation: '', subject: '', message: '' });
    
  const navigateTo = (page:any) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
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
     
  return(
    < >
    {/* <style dangerouslySetInnerHTML={{ __html: customStyles }} /> */}
          <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white shadow-xl py-4' : 'bg-black lg:mt-0 py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link href={'/'} className="flex items-center space-x-3 group outline-none">
            <div className="w-32 h-10  flex items-center justify-center transition-all duration-500 group-hover:rotate-90">
         <Image
            src="/logo.png" // Next.js looks directly into the 'public' folder
            alt="Logo"
            width={500}
            height={500}
          />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-900' : 'text-slate-900 lg:text-white'}`}>
              <span className="text-blue-600">PLATFORMS</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-10">
            {[
              { label: 'Home', id: '/' },
              { label: 'About', id: 'about' },
              { label: 'Services', id: 'services' },
              { label: 'Contact', id: 'contact' },
              { label: 'Faq', id: 'faq' },
            ].map((item) => (
              <Link 
                key={item.id} 
                href={`/${item.id}`}
                className={`text-[10px] text-black font-black uppercase tracking-[0.2em] transition-all hover:text-blue-600 relative group/link ${scrolled || currentPage !== 'home' ? 'text-slate-600' : 'text-black lg:text-white'} ${currentPage === item.id ? 'text-blue-600' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-blue-600 transition-all ${currentPage === item.id ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </Link>
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
                {['Home', 'About', 'Services', 'Contact', 'Faq'].map((item) => (
                  <Link key={item} href={`/${item.toLocaleLowerCase()}`} className="text-3xl font-black text-white uppercase tracking-tighter mb-8 hover:text-blue-600 transition-colors">{item}</Link>
                ))}
              </div>
            )}
    
    </>
  )

  }
  
 


