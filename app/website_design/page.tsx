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

const WebsiteDev = ()=>{
const services = [
    { 
      title: "Website Design", 
      icon: <Monitor className="w-8 h-8" />, 
      src: '/website_design_2.jpeg',
      short: "Attractive websites that perform and bring results.",
      description: "Our web design approach focuses on creating visually engaging, user-centered experiences that communicate your brand clearly and convert visitors into customers. From layout to interaction, every element is carefully crafted to ensure clarity, responsiveness, and seamless navigation across all devices. We don't just design pages; we create experiences that leave lasting impressions." 
    },

  ];

    const faq =[
    {
      question: "What is web design and how does it work for businesses in Ottawa?",
      answer: "Web design is the process of creating and structuring a website that is visually appealing, easy to navigate, and built to support business goals. For businesses in Ottawa, strong web design helps create a professional online presence that attracts customers and encourages conversions."
    },
    {
      question: "Why should businesses in Ottawa invest in professional web design?",
      answer: "For businesses in Ottawa, professional web design builds credibility and helps customers trust your brand from the first visit. A well designed website also improves user experience, supports search engine visibility, and helps turn visitors into paying customers."
    },
    {
      question: "How can web design help increase sales for stores in Ottawa?",
      answer: "A professionally designed website helps Ottawa based stores increase sales by making it easier for customers to browse products, access important information, and complete purchases or inquiries. It creates a smooth customer journey that encourages action and repeat visits."
    },
    {
      question: "s professional web design suitable for small and medium sized businesses in Ottawa?",
      answer: "Yes, professional web design is highly valuable for small and medium sized businesses in Ottawa. It helps local businesses compete with larger brands by creating a strong digital presence and improving how customers interact with the business online."
      },
      {
      question: "What kind of results can Ottawa businesses expect from good web design?",
      answer: "Ottawa businesses can expect better customer engagement, stronger brand perception, improved lead generation, and higher conversion rates. A well designed website also supports long term marketing efforts such as SEO, paid ads, and email marketing."
      },
      {
      question: "How does web design help build customer trust in Ottawa?",
      answer: "Web design helps Ottawa businesses build trust by creating a clean, modern, and professional online experience. Customers are more likely to trust a business with a website that looks credible, functions smoothly, and clearly communicates value."

      },
      {
      question: "Do Ottawa businesses need a large budget to get started with web design?",
      answer: "No, Ottawa businesses do not need a massive budget to begin. A strategic and well planned website can start with the essentials and grow over time. The focus should be on creating a strong foundation that supports business goals and customer needs."

      },
      {
      question: "How can a media house like LO Platform support web design for Ottawa businesses?",
      answer: "A media house like LO Platform helps Ottawa businesses by combining strategy, branding, design, and functionality to create high performing websites. From planning and design to launch and optimization, Ottawa businesses benefit from websites built for growth, visibility, and results."

      },

  ];

return(
    <>
    <NavBar/>
    <PageHeader title={"Website Design"} subtitle={"Design"}/>

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
                            <h4 className="text-lg font-black uppercase tracking-tight">{faq.question}</h4>
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

export default WebsiteDev;