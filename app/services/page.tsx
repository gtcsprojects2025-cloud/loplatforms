"use client"
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

import Link from 'next/link';
import PageHeader from '../components/pageHeader';
import Footer from '../components/footer';
import NavBar from '../components/navBar';

const Service = ()=>{

      const services = [
    { 
      title: "Website Design", 
      route:"/website",
      icon: <Monitor className="w-8 h-8" />, 
      src: '/website_design_2.jpeg',
      short: "Attractive websites that perform and bring results.",
      description: "Our web design approach focuses on creating visually engaging, user-centered experiences that communicate your brand clearly and convert visitors into customers. From layout to interaction, every element is carefully crafted to ensure clarity, responsiveness, and seamless navigation across all devices. We don't just design pages; we create experiences that leave lasting impressions." 
    },
    { 
      title: "Web App Development", 
      route:"/webDev",
      icon: <Layers className="w-8 h-8" />, 
      src:'/web_dev.jpeg',
      short: "Powerful systems that streamline productivity and growth.",
      description: "We build secure, scalable, and high-performing web applications tailored to your specific operational needs. Whether it's internal systems, customer platforms, or enterprise solutions, we ensure every application is built with precision and future scalability in mind. We transform complex ideas into intelligent digital systems that work efficiently and reliably." 
    },
    { 
      title: "Mobile App Development", 
      route:"/appDev",
      icon: <Smartphone className="w-8 h-8" />, 
      src:'/mobileApp.jpeg',
      short: "Seamless user experiences across iOS and Android.",
      description: "Our mobile solutions are designed to provide seamless user experiences across iOS and Android platforms, combining intuitive interfaces with strong backend performance. From concept to launch, we build apps that are fast, reliable, and optimized to meet your business goals while keeping users at the center of every interaction." 
    },
    { 
      title: "Technical Infrastructure", 
      route:"infra",
      icon: <Database className="w-8 h-8" />, 
      src:'/IT_Infra.jpeg',
      short: "Reliable technical backbone for organizations and ministries.",
      description: "We deliver structured, reliable, and future-ready technology frameworks designed to support communication, data management, automation, and scalability. Whether you are building from the ground up or optimizing existing systems, our infrastructure solutions ensure your operations run smoothly and securely, empowering your mission and enhancing your reach." 
    }
  ];
    return(
          <>
          <NavBar/>
            <PageHeader title="What we do" subtitle="Our Services" />
            <section className="py-32 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mb-24 reveal">
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-8 leading-tight">
                    Built on a foundation of strategy, performance, and <span className="text-blue-600">scalability.</span>
                  </h3>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    We deliver digital solutions designed to position your brand, optimize operations, and drive measurable results. Every solution we develop works seamlessly for today and evolves for tomorrow.
                  </p>
                </div>
                
                <div className="space-y-24">
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
                       <Link href={s.route}>
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

                <div className="mt-32 p-12 md:p-24 bg-blue-600 text-white text-center reveal">
                  <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Ready to grow faster?</h3>
                  <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    Partner with LO Platform to create digital solutions that are not only innovative, but impactful, scalable, and built for growth.
                  </p>
                  <Link href={"/contact"}  className="bg-slate-950 text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-white hover:text-slate-950 transition-all">
                    Contact Our Architects
                  </Link>
                </div>
              </div>
            </section>
            <Footer/>
          </>
    )
}
export default Service;