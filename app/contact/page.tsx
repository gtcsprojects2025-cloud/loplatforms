"use client";

import React, { useState } from "react";
import NavBar from "../components/navBar";
import PageHeader from "../components/pageHeader";
import Footer from "../components/footer";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  CheckCircle2 
} from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organisation: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', organisation: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setFormStatus('error');
    }
  };

  const resetForm = () => setFormStatus('idle');

  return (
    <>
      <NavBar />
      <PageHeader title="Connect With Us" subtitle="Start a Conversation" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Information */}
            <div className="reveal">
              <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-tight mb-6">
                  Let's create something <span className="text-blue-600">extraordinary</span> together
                </h2>
                <p className="text-lg text-slate-600">
                  Whether you have a project in mind or just want to explore possibilities, we're ready to listen.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">Email</p>
                    <a href="mailto:support@loplatforms.com" className="text-xl font-medium hover:text-blue-600 transition-colors">
                      support@loplatforms.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">Phone</p>
                    <a href="tel:+2347011871220" className="text-xl font-medium hover:text-blue-600 transition-colors">
                      +234 701 187 1220
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">Office</p>
                    <p className="text-lg leading-tight">
                      11, Ogunmefun Street<br />
                      Gbagada, Lagos, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-500 mb-1">Business Hours</p>
                    <p className="text-lg">Monday — Friday, 9:00 AM — 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="reveal">
              {formStatus === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-12 text-center h-full flex flex-col justify-center">
                  <CheckCircle2 size={70} className="mx-auto text-emerald-600 mb-6" />
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Message Received!</h3>
                  <p className="text-slate-600 text-lg mb-8">
                    Thank you. Our team has been notified and will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={resetForm}
                    className="mx-auto px-10 py-4 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="bg-white border border-slate-100 shadow-xl rounded-3xl p-10 md:p-12">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Organization</label>
                      <input
                        type="text"
                        name="organisation"
                        value={formData.organisation}
                        onChange={handleChange}
                        className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all"
                    />
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nature of Inquiry</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-slate-200 rounded-2xl focus:border-blue-600 outline-none transition-all bg-white"
                    >
                      <option value="">Select an option...</option>
                      <option value="Website Design">Website Design</option>
                      <option value="Web App Development">Web App Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Technical Infrastructure">Technical Infrastructure</option>
                      <option value="Consultation">General Consultation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Brief / Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border border-slate-200 rounded-3xl focus:border-blue-600 outline-none transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="mt-10 w-full bg-slate-900 hover:bg-blue-600 text-white py-5 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {formStatus === 'sending' ? 'Sending Message...' : 'Send Message'}
                    <Send size={20} />
                  </button>

                  {formStatus === 'error' && (
                    <p className="text-red-600 text-center mt-4">Something went wrong. Please try again.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;