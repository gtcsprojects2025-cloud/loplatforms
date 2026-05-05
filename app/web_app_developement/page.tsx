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

const WebDev = ()=>{

    const services = [
    { 
      title: "Web App Development", 
      route:"/webDev",
      icon: <Layers className="w-8 h-8" />, 
      src:'/web_dev.jpeg',
      short: "Powerful systems that streamline productivity and growth.",
      description: "We build secure, scalable, and high-performing web applications tailored to your specific operational needs. Whether it's internal systems, customer platforms, or enterprise solutions, we ensure every application is built with precision and future scalability in mind. We transform complex ideas into intelligent digital systems that work efficiently and reliably." 
    },

  ];

    const faq =[
    {
      question: "How much does it cost to build a professional website in Ottawa?",
      answer: "The cost of a professional website really depends on what you need it to do. For most businesses in Ottawa, projects typically fall between **$2,500 and $10,000+**."
    },
    {
      question: "How long does the website development process take?",
      answer: "Most projects take between **6 to 12 weeks** from start to finish. That includes discovery, planning, design, development, and testing."
    },
    {
      question: "Will my website work well on mobile devices?",
      answer: "Your website will be fully responsive, meaning it will adapt seamlessly across smartphones, tablets, and desktops. With the majority of users browsing on mobile, especially in urban areas like Ottawa, this is not optional—it is essential for both user experience and search rankings."
    },
    {
      question: "Do you include SEO in your website development?",
      answer: "From site structure and page speed to metadata and technical optimization, everything is set up to help your business get discovered—especially within the Ottawa market. The goal is simple: when your site goes live, it should already be positioned to perform."
      },
      {
      question: "Will I be able to update my website on my own?",
      answer: "We build on user-friendly platforms that allow you to update content, upload images, or publish blog posts without needing technical skills. After launch, we also guide you through the backend so you are comfortable managing your site day-to-day."
      },
      {
      question: "Where will my website be hosted, and is it secure?",
      answer: "We recommend reliable hosting environments with **SSL encryption (HTTPS)**, automated backups, and strong security protocols. For Ottawa-based businesses, we often suggest Canadian data hosting options to improve loading speeds and align with local data preferences."

      },
      {
      question: "Do you offer ongoing website support and maintenance?",
      answer: "We offer maintenance plans that cover updates, security checks, and performance monitoring. This keeps your site running smoothly while you focus on your business."

      },
      {
      question: "Why choose a local Ottawa web development team like LO PLATFORMS?",
      answer: "We understand the Ottawa business environment—how people search, what competitors are doing, and how to position your brand effectively in this market. Beyond that, there’s real value in being able to have direct conversations, strategy sessions, and ongoing collaboration with a team that’s accessible and invested in your growth."

      },

  ];
    return(
    <>
    <NavBar/>
    <PageHeader title={"Web App Developement"} subtitle={"Web App"}/>

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
                       <Link href='/website'>
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

export default WebDev;