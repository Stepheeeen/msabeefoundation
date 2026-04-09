'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AboutSnippet() {
  return (
    <section className="minimal-section bg-background">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        {/* Visual Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative w-full"
        >
          <div className="relative z-10 rounded-md overflow-hidden border border-border">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop" 
              alt="MSA BEE Camp activities" 
              className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-primary text-primary-foreground rounded-md shadow-xl z-20 hidden sm:block">
            <div className="text-3xl font-black mb-1 leading-none">100%</div>
            <div className="text-[8px] uppercase font-bold tracking-[0.3em] opacity-80">Commitment</div>
          </div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:w-1/2 space-y-8 md:y-12"
        >
          <div>
            <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Our Philosophy
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tighter leading-tight text-balance">
              Beyond the <span className="text-primary">Game</span>.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              MSA BEE FOUNDATION is more than just a sports camp. We are an ecosystem dedicated to the holistic growth of Nigeria's youth, blending high-performance athletics with academic rigor and character development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Vision</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                A society that values holistic health, education, and sports as the foundations of a brighter nation.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-widest">Mission</h4>
              <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                To cultivate a generation that values integrated development across physical, social, and cognitive boundaries.
              </p>
            </div>
          </div>

          <div className="pt-4 text-center lg:text-left">
            <Link href="/about">
              <Button size="lg" variant="outline" className="rounded-md px-10 h-14 text-sm font-bold uppercase tracking-widest border-border hover:bg-secondary transition-all">
                Our Full Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



