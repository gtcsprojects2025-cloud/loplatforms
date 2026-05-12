"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { label: "All Services", href: "/services" },           // ← Added
    { label: "Website Design", href: "/website_design" },
    { label: "Web App Development", href: "/web_app_developement" },
    { label: "Mobile App Development", href: "/mobile_app_developement" },
    { label: "Technical Infrastructure", href: "/IT_Infrastructure" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/95 backdrop-blur-md py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="LO Platform Logo"
                width={48}
                height={48}
                className="transition-transform group-hover:rotate-12"
              />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              LO <span className="text-blue-600">PLATFORMS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </Link>

            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors"
              >
                Services
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-3 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}>
                {services.map((service, i) => (
                  <Link
                    key={i}
                    href={service.href}
                    className="block px-6 py-3 text-sm hover:bg-slate-50 transition-colors text-slate-700 hover:text-blue-600"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faq" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              FAQ
            </Link>

            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact"
            className="hidden lg:block bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-600 transition-all"
          >
            Start a Project
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-white z-[110] pt-20 px-6 overflow-auto">
            <div className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>

              {/* Mobile Services Accordion */}
              <div>
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  Services
                  <ChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-4 ml-4 flex flex-col gap-4 border-l border-slate-200 pl-6">
                    {services.map((service, i) => (
                      <Link 
                        key={i} 
                        href={service.href} 
                        onClick={() => setIsMenuOpen(false)}
                        className="text-slate-600 hover:text-blue-600"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>

              <Link 
                href="/contact"
                className="mt-6 bg-blue-600 text-white py-4 rounded-2xl text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}