"use client"
import React, { useState, useEffect }  from "react"
import NavBar from "../components/navBar"
import PageHeader from "../components/pageHeader"
import Link from "next/link"
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
import Footer from "../components/footer"

const ITInfrastructure = ()=>{

    const services = [
    { 
      title: "Technical Infrastructure", 
      route:"infra",
      icon: <Database className="w-8 h-8" />, 
      src:'/IT_Infra.jpeg',
      short: "Reliable technical backbone for organizations and ministries.",
      description: "We deliver structured, reliable, and future-ready technology frameworks designed to support communication, data management, automation, and scalability. Whether you are building from the ground up or optimizing existing systems, our infrastructure solutions ensure your operations run smoothly and securely, empowering your mission and enhancing your reach." 
    },

  ];

    const faq =[

    {
      question: "What is the Lo Platform in terms of technical infrastructure?",
      answer: "The Lo Platform is a structured technology framework that supports communication systems, data management, automation, and scalable infrastructure. It is designed to provide organizations with a stable and future-ready foundation for running digital operations efficiently and securely."
    },
    {
      question: "How does the Lo Platform support organizations in Ottawa?",
      answer: "The Lo Platform supports organizations by providing structured infrastructure frameworks that improve operational efficiency, system reliability, and scalability. It is designed for teams in Ottawa that need stable digital systems without the complexity of managing fragmented infrastructure."
    },
    {
      question: "Is the Lo Platform suitable for building new systems or improving existing ones?",
      answer: "Yes. The platform supports both new system development and the optimization of existing infrastructure. Whether modernizing legacy systems or building new ones from scratch, it provides a structured foundation for long-term scalability and performance."
      },
      {
      question: "What makes the Lo Platform different from traditional IT infrastructure?",
      answer: "Unlike traditional infrastructure that often operates in isolated layers, the Lo Platform integrates communication, data, automation, and scalability into a unified framework. This reduces fragmentation and improves overall system efficiency and coordination."
      },
      {
      question: "Can the Lo Platform scale with growing organizations?",
      answer: "Yes. The platform is designed for scalability, allowing systems to expand as organizational needs grow. This makes it suitable for teams that require long-term infrastructure stability without frequent rebuilds."

      },
      {
        question: "Does the Lo Platform support automation and system integration?",
        answer: "Yes. Automation and integration are core components of the platform. It enables systems to communicate more effectively, reduces manual processes, and improves operational efficiency across digital environments."
      },
      {
        question: "Is the Lo Platform secure for handling organizational data?",
        answer: "Yes. The platform is built with structured architecture principles that support secure data handling, controlled access, and reliable operational environments for organizations managing sensitive or mission-critical systems."
      },
      {
        question: "What types of organizations benefit most from the Lo Platform in Ottawa?",
        answer: "Organizations in Ottawa that benefit most include those managing complex communication systems, data-driven operations, or scaling digital services. This includes professional services, technology-focused teams, and mission-driven organizations requiring structured infrastructure."
      },
      {
        question: "How does implementation of the Lo Platform typically work?",
        answer: "Implementation begins with understanding your current systems, operational goals, and infrastructure requirements. From there, a structured framework is designed and deployed to align with both immediate needs and long-term scalability."
      },
      {
        question: "How do we get started with the Lo Platform?",
        answer: "Getting started begins with a consultation to evaluate your current infrastructure and define your goals. From there, a tailored implementation plan is created to ensure your systems are structured, scalable, and aligned with your operational needs."
      }


  ];
    return(
    <>
    <NavBar/>
    <PageHeader title={"IT Infrastructure"} subtitle={"Technical Solutions"}/>

                <div className="space-y-24 pt-20 px-20">
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
                       <Link href='/IT_Infrastructure'>
                      <div className={`bg-slate-100 aspect-video relative overflow-hidden ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                         <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-slate-950/20"></div>
                         <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            {/* <Layers size={120} /> */}
                            {/* <img src='/website_design.jpeg' className="w-14 h-14 rounded-full grayscale" alt='Website Design' /> */}
                         </div>
                        
                         <img src={s.src} className="w-full h-full" alt={s.title} />
                         
                      </div>
                      </Link>
                    </div>
                  ))}
                </div>
                {/* FAQ / Support Section */}
                <section className="py-32 bg-slate-50">
                  <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20 reveal">
                       <h2 className="text-blue-600 font-black uppercase tracking-[0.4em] text-sm mb-4">Support</h2>
                       <h3 className="text-5xl font-black text-slate-900 uppercase tracking-tighter">Strategic FAQ.</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {faq.map((faq, i) => (
                        <div key={i} className="p-10 bg-white border border-slate-200 reveal">
                          <div className="flex items-center space-x-4 mb-4">
                            <MessageSquare className="text-blue-600" size={20} />
                            <h4 className="text-lg font-black uppercase tracking-tight text-black">{faq.question}</h4>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
                <div className="mt-0 px-20 md:p-24 bg-blue-600 text-white text-center reveal">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to grow faster?</h3>
                  <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Partner with LO Platform to create digital solutions that are not only innovative, but impactful, scalable, and built for growth.
                  </p>
                  <Link href={"/contact"}  className="bg-slate-950 text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all">
                    Contact Our Architects
                  </Link>
                </div>
    <Footer/>
    </>
    )
}

export default ITInfrastructure;