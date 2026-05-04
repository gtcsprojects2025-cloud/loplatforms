"use client"
import React from "react"
import PageHeader from "../components/pageHeader"
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
import NavBar from "../components/navBar";

const About = ()=>{

const team = [
    
    { name: "John Olumutimi", role: "Chief Operations Officer", img: "/john_2.png" },
    { name: "Kennie Oyinloye.", role: "Chief Technology Officer", img: "/Kennie.jpg" },
    { name: "Layo Obidike", role: "Chief Executive Officer", img: "/layo.jpeg" },
  ];

    return(
          <>
          <NavBar/>
            <PageHeader title="About Us" subtitle="Who we are" />
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
                        <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
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
            <Footer/>
          </>
    )
}

export default About;