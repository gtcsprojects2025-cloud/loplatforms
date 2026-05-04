"use clioent"
import React from "react"
import Image from "next/image"
import Link from "next/link"
const Footer = ()=> {
    return(
              <footer className="bg-slate-950 text-white pt-32 pb-12 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                  <div className="grid lg:grid-cols-4 gap-16 mb-32">
                    <div className="lg:col-span-2 space-y-10">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 flex items-center justify-center">
                          {/* <span className="text-white font-black text-2xl">L</span> */}
                          <Image
                                src="/logo.png" // Next.js looks directly into the 'public' folder
                                alt="Logo"
                                width={500}
                                height={500}
                              />
                        </div>
                        <span className="text-3xl font-black tracking-tighter uppercase">LO<span className="text-blue-600">Platform.</span></span>
                      </div>
                      <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
                        Engineering scalable systems that power growth, efficiency, and transformation for the world's most vital organizations.
                      </p>
                    </div>
                    <div className="space-y-10">
                      <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Explore</h5>
                      <ul className="space-y-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                        <li><Link href={"/"}  className="hover:text-white transition-colors">Foundation</Link></li>
                        <li><Link href={"/"}  className="hover:text-white transition-colors">Solutions</Link></li>
                        <li><Link href={"/"}  className="hover:text-white transition-colors">Contact</Link></li>
                      </ul>
                    </div>
                    <div className="space-y-10">
                      <h5 className="font-black uppercase tracking-widest text-sm text-blue-600">Connect</h5>
                      <p className="text-slate-400 text-xs tracking-[0.2em] leading-loose font-bold uppercase">
                        support@loplatform.com <br />
                        11, Ogunmefun street Gbagada Lagos, Nigeria<br />
                        +234 701 187 1220
                      </p>
                    </div>
                  </div>
                  <div className="pt-12 border-t border-white/10 text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-600">
                    © 2026 LOPlatform. Built for Long-term Success.
                  </div>
                </div>
              </footer>
    )
}

export default Footer;