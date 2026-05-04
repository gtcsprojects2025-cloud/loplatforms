"use client"
import React, {useState} from "react";

import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
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
import Footer from "../components/footer";

const Contact =()=>{

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
      const [activeSlide, setActiveSlide] = useState(0);
      const [currentPage, setCurrentPage] = useState('home');
      const [formStatus, setFormStatus] = useState<string | null>(null);
      const [formData, setFormData] = useState({ name: '', email: '', organisation: '', subject: '', message: '' });
    
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
    return(
          <>
          <NavBar/>
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
            
            <Footer/>
          </>
    )
}

export default Contact;