"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="LO Platform Logo"
                  width={60}
                  height={60}
                  className="brightness-125"
                />
              </div>
              <span className="text-3xl font-black tracking-tighter">
                LO <span className="text-blue-600">PLATFORMS</span>
              </span>
            </div>

            <p className="text-slate-400 max-w-md leading-relaxed">
              Engineering scalable systems that power growth, efficiency, and transformation 
              for forward-thinking organizations.
            </p>

            <div className="flex gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h5 className="font-semibold uppercase tracking-widest text-sm text-blue-500 mb-6">Company</h5>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h5 className="font-semibold uppercase tracking-widest text-sm text-blue-500 mb-6">Get In Touch</h5>
            
            <div className="space-y-6 text-slate-400">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:support@loplatforms.com" className="hover:text-white transition-colors">
                    support@loplatforms.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Phone</p>
                  <a href="tel:+2347011871220" className="hover:text-white transition-colors">
                    +234 701 187 1220
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-blue-500" />
                <div>
                  <p className="font-medium text-white">Office</p>
                  <p className="leading-tight">
                    11, Ogunmefun Street<br />
                    Gbagada, Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} LO Platforms. All Rights Reserved.</p>
          <p className="text-center md:text-right">
            Built with precision • Designed for impact
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;