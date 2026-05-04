"use client"
import React from "react"


  const PageHeader = ({ title, subtitle }: { title: any; subtitle: any }) => (
    <section className="pt-48 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center space-x-4 mb-6 reveal active">
          <div className="h-[2px] w-12 bg-blue-600"></div>
          <span className="text-blue-500 font-black uppercase tracking-[0.3em] text-xs">{subtitle}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter uppercase reveal active">
          {title}<span className="text-blue-600">.</span>
        </h1>
      </div>
    </section>
  );

  export default PageHeader;