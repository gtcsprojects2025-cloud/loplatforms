import Link from "next/link";
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
import PageHeader from "../components/pageHeader";
import NavBar from "../components/navBar";
import Footer from "../components/footer";

const Faq =()=>{

      const faq =[
    {
      question: "What is the Lo Platform in terms of technical infrastructure?",
      answer: "The Lo Platform is a structured technology framework that supports communication systems, data management, automation, and scalable infrastructure. It is designed to provide organizations with a stable and future-ready foundation for running digital operations efficiently and securely."
    },
    {
      question: " How does the Lo Platform support organizations in Ottawa?",
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
      answer: "The implementation process involves a comprehensive assessment of your organization's needs, followed by a customized deployment strategy. This includes robust architecture, continuous monitoring, and proactive maintenance strategies."

        },
        {
      question: "How do we get started with the Lo Platform?",
      answer: "Getting started begins with a consultation to evaluate your current infrastructure and define your goals. From there, a tailored implementation plan is created to ensure your systems are structured, scalable, and aligned with your operational needs. To begin, you can contact us directly here: https://loplatform.com/"

        }
  ];

    return(
            <>
            <NavBar/>
            <PageHeader title="FAQ" subtitle="See Answers" />
            <section className="py-5 text-center bg-black text-white">
              <h2 className="text-4xl font-black uppercase">Frequently Asked Questions</h2>
                <div className="grid md:grid-cols-2 gap-8 px-20 pt-12">
                  {faq.map((faq, i) => (
                    <div key={i} className="p-10 bg-[#1D212F] border-0 border-slate-200 reveal">
                      <div className="flex items-center space-x-4 mb-4">
                        <MessageSquare className="text-red-600" size={20} />
                        <h4 className="text-lg font-black uppercase tracking-tight">{faq.question}</h4>
                      </div>
                      <p className="text-white leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-16 text-center reveal">
                  <h1 className='text-white text-4xl font-black'>Ready to Build or Improve Your Infrastructure?</h1>
                  <p className="text-slate-400 w-1/2 mx-auto">We work with organizations in Ottawa to design and support structured, scalable, and secure technology systems.
                      If you're ready to explore how the LO Platform can support your operations, start here:</p>
                  <Link href={"/contact"} className="mt-8 border border-white/30 px-8 py-4 uppercase font-black tracking-widest text-xs hover:bg-white hover:text-slate-950 transition-all">Contact Our Architects</Link>
                </div>
            </section>
            <Footer/>
            </>
    )


}

export default Faq;