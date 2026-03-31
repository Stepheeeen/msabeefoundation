'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Premium Full-Bleed Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-950/40 z-10" />
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop')] bg-cover bg-center scale-105 animate-slow-zoom" 
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.8)), url('https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop')" }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center rounded-full glass-dark px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-orange-400 mb-10 animate-fade-in-up uppercase">
          Empowering Since 2025
        </div>
        
        <div className="mb-12">
          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-heading font-black text-white mb-10 leading-[0.95] tracking-tighter text-balance drop-shadow-2xl">
            Shaping <span className="text-gradient">Champions</span><br className="hidden lg:block"/> of Tomorrow
          </h1>
          <p className="text-xl sm:text-2xl text-slate-200/90 mb-12 text-balance max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            Cultivating a society that values holistic physical, social, cognitive, and emotional development through elite sports and education.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/about">
            <Button size="xl" className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-8 text-lg font-black uppercase tracking-widest rounded-full transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/40 border-none">
              Explore Our Mission
            </Button>
          </Link>
          <Link href="/donate">
            <Button size="xl" variant="outline" className="border-white/20 glass-dark text-white px-12 py-8 text-lg font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border-2">
              Support Us
            </Button>
          </Link>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4 text-white/40">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Scroll</span>
          <div className="w-[2px] h-16 bg-gradient-to-b from-orange-500/80 to-transparent rounded-full animate-scroll-line" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
        @keyframes scroll-line {
          0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
          50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
          51% { transform: scaleY(1); transform-origin: bottom; opacity: 1; }
          100% { transform: scaleY(0); transform-origin: bottom; opacity: 0; }
        }
        .animate-scroll-line {
          animation: scroll-line 2.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
        }
      `}</style>
    </section>
  );
}


