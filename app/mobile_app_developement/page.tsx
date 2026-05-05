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

const AppDev = ()=>{

    const services = [
    { 
      title: "Mobile App Development", 
      route:"/appDev",
      icon: <Smartphone className="w-8 h-8" />, 
      src:'/mobileApp.jpeg',
      short: "Seamless user experiences across iOS and Android.",
      description: "Our mobile solutions are designed to provide seamless user experiences across iOS and Android platforms, combining intuitive interfaces with strong backend performance. From concept to launch, we build apps that are fast, reliable, and optimized to meet your business goals while keeping users at the center of every interaction." 
    },

  ];

    const faq =[
    {
      question: "What is mobile app development, and why does my business in Ottawa need it?",
      answer: "Mobile app development in Ottawa involves designing and building custom mobile applications for iOS and Android devices. For businesses in Ottawa, a mobile app helps improve customer engagement, streamline operations, and create new revenue opportunities in an increasingly mobile-driven market."
    },
    {
      question: "How much does mobile app development cost in Ottawa?",
      answer: "The cost of mobile app development in Ottawa depends on the complexity, features, and platform. Simple apps may cost less, while advanced apps with custom integrations, user dashboards, and real-time features require a larger investment. Most Ottawa businesses choose scalable solutions that grow over time."
    },
    {
      question: "How long does it take to develop a mobile app in Ottawa?",
      answer: "Mobile app development timelines in Ottawa typically range from 4–12 weeks for basic apps and several months for more complex solutions. The timeline depends on design, functionality, testing, and integration requirements."
    },
    {
      question: "Should I build a native app or a cross-platform app?",
      answer: "A professional mobile app development team in Ottawa can recommend the best option based on your business goals and budget."
      },
      {
      question: "How do I choose the best mobile app development company in Ottawa?",
      answer: "When selecting a mobile app development company in Ottawa, consider: 1) Proven experience with business apps, 2) Strong portfolio and client testimonials, 3) Transparent pricing and timelines, 4)Ongoing support and maintenance services "
      },
      {
      question: "Will my mobile app be secure and scalable?",
      answer: "Yes. Professional mobile app development in Ottawa ensures your app is built with strong security protocols, data protection, and scalability in mind. This allows your app to grow alongside your business while keeping user data safe."

      },


  ];
    return(
    <>
    <NavBar/>
    <PageHeader title={"App Development"} subtitle={"Mobile Apps"}/>

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
                       <Link href='/appDev'>
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

export default AppDev;