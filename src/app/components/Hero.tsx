'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation for the overlay
      gsap.fromTo(
        '.hero-overlay',
        { opacity: 0 },
        { opacity: 1, duration: 1.5 }
      );

      // Animate content elements
      const tl = gsap.timeline({ delay: 0.5 });
      tl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.5')
      .from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5');

      // Subtle floating animation for the background
      gsap.to('.hero-bg', {
        scale: 1.1,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Zoom Effect */}
      <div className="hero-bg absolute inset-0 -z-10 pl-80">
        <Image
          src="https://i.ibb.co/hJ3Ztjm6/church.jpg"
          alt="Worship background"
          fill
          priority
          sizes="100vw"
          quality={100}
          className="object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/45 to-blue-900/50 -z-5" />

      <div ref={contentRef} className="container mx-auto px-4 text-left relative z-10 pl-24">
        <p className="text-sm font-medium text-white/80 mb-4">
          BIENVENIDO A NUESTRA IGLESIA
        </p>
        <h1 className="hero-title text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-2xl">
          SÉ PARTE DE
          <span className="block">NUESTRA COMUNIDAD</span>
        </h1>
        
        <div className="hero-buttons flex flex-col md:flex-row gap-4 items-start">
        <div className="hero-buttons flex flex-col md:flex-row gap-4 items-start">
          <a
            href="/sermones"
            className="group px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-white rounded-full transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:scale-105"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:rotate-12 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" 
              />
            </svg>
            <span className="font-medium text-white">Ver Sermones</span>
          </a>
        </div>
        </div>

        <div className="mt-12">
          <p className="text-white/80 max-w-xl border-l-2 border-white/20 pl-4">
            Únete a nuestra familia en Cristo y sé parte de una comunidad que crece en fe y amor.
          </p>
        </div>
      </div>
        


        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
  );
}