"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, CirclePlay, Sparkles } from "lucide-react";

// Separate Hero Component
const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const rotatingImages = [
     "https://images.unsplash.com/photo-1551434678-e076c2235a95?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-20 text-black">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text and CTA */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 bg-black/5 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Trusted by 250+ companies</span>
            </div>
            <h1 className="text-6xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tighter">
              Build the <br/>
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-red-600 bg-clip-text text-transparent">
                  Future
                </span>
              <span >
                
                {" "}of Digital
              </span>
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-lg leading-relaxed">
              We engineer powerful digital platforms that transform ideas into impact. 
              Your vision, our expertise — together we create something extraordinary.
            </p>
            <div className="flex flex-wrap gap-4 mt-5">
              <button className="bg-black text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300 hover:shadow-xl">
                Start your project <ArrowUpRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 transition-all duration-300">
                Watch demo <CirclePlay className="inline w-5 h-5 ml-2" />
              </button>
            </div>
            
            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-slate-100">
              <div><div className="text-3xl font-bold text-slate-900">250+</div><div className="text-sm text-slate-500">Projects</div></div>
              <div><div className="text-3xl font-bold text-slate-900">50+</div><div className="text-sm text-slate-500">Team members</div></div>
              <div><div className="text-3xl font-bold text-slate-900">98%</div><div className="text-sm text-slate-500">Retention rate</div></div>
            </div>
          </div>

          {/* Right side - Glassy Amoeba Shape with rotating image */}
          <div className="relative flex justify-center items-center">
            {/* Main Amoeba Shape - Glass morphism */}
            <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]">
              {/* Animated blob/amoeba background */}
              <svg className="absolute inset-0 w-full h-full animate-blob-slow" viewBox="0 0 500 500">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <clipPath id="amoebaClip">
                    <path d="M250,50 C320,40 380,90 420,160 C460,230 470,320 430,390 C390,460 310,480 230,470 C150,460 70,420 40,350 C10,280 20,190 70,120 C120,50 180,60 250,50Z">
                      <animate 
                        attributeName="d"
                        dur="8s"
                        repeatCount="indefinite"
                        values="
                          M250,50 C320,40 380,90 420,160 C460,230 470,320 430,390 C390,460 310,480 230,470 C150,460 70,420 40,350 C10,280 20,190 70,120 C120,50 180,60 250,50Z;
                          M240,60 C300,30 370,80 410,150 C450,220 440,310 400,380 C360,450 290,490 210,480 C130,470 60,410 30,340 C0,270 30,180 80,110 C130,40 180,90 240,60Z;
                          M260,45 C330,35 390,85 430,155 C470,225 460,315 420,385 C380,455 300,475 220,465 C140,455 80,415 50,345 C20,275 10,185 60,115 C110,45 190,55 260,45Z;
                          M250,50 C320,40 380,90 420,160 C460,230 470,320 430,390 C390,460 310,480 230,470 C150,460 70,420 40,350 C10,280 20,190 70,120 C120,50 180,60 250,50Z
                        "
                      />
                    </path>
                  </clipPath>
                </defs>
              </svg>

              {/* Glass morphism container */}
              <div 
                className="absolute inset-0 rounded-[60%_40%_50%_50%_/_40%_50%_50%_60%] overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.4)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  animation: "morph 8s ease-in-out infinite",
                }}
              >
                {/* Rotating Image inside glass */}
                <div className="absolute inset-0">
                  <img 
                    src={rotatingImages[currentImageIndex]}
                    alt="Rotating showcase"
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                      isAnimating ? "scale-110 opacity-0" : "scale-100 opacity-100"
                    }`}
                    style={{ objectPosition: "center" }}
                  />
                </div>
                
                {/* Inner gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-red-600/20"></div>
              </div>
              
              {/* Floating decorative elements around amoeba */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-12 w-16 h-16 bg-gradient-to-r from-blue-400 to-red-400 rounded-full blur-xl animate-float"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 60% 40% 50% 50% / 40% 50% 50% 60%;
          }
          33% {
            border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
          }
          66% {
            border-radius: 70% 30% 60% 40% / 30% 60% 40% 70%;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-blob-slow {
          animation: blobSpin 20s ease-in-out infinite;
        }
        
        @keyframes blobSpin {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(5deg); }
        }
      `}</style>
    </section>
  );
};


export default HeroSection;