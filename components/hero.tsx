'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background - Minimalist approach */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop" 
          alt="Sports and Education"
          className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center pb-12 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block px-4 py-1 rounded-full border border-border text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-8 md:mb-12">
            Established 2025
          </div>
          
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-[0.9] text-balance">
            Shaping the <span className="text-primary">Champions</span> of Tomorrow
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Cultivating a society that values holistic growth through elite sports and education in Nigeria.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/about">
              <Button size="lg" className="rounded-lg px-10 h-14 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:scale-105 transition-all">
                Our Mission
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="rounded-lg px-10 h-14 text-sm font-bold uppercase tracking-widest border-border hover:bg-secondary transition-all">
                Support Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-muted-foreground/40">Scroll</span>
        <div className="w-px h-12 bg-border" />
      </motion.div>
    </section>
  );
}



