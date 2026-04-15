'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Target, Eye, HeartPulse, Trophy, Users, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20 bg-background text-foreground">
        {/* Premium Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="About MSA BEE"
            />
            <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight text-balance"
            >
              Our Heritage <br/> & <span className="text-primary">Future</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
            >
              Providing educational opportunity through sports. Building a legacy of holistic excellence in Nigeria.
            </motion.p>
          </div>
        </section>

        {/* Philosophy & Mission */}
        <section className="minimal-section border-b border-border">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 md:y-12"
            >
              <div>
                <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Our Philosophy</div>
                <h3 className="text-3xl md:text-6xl font-black text-foreground leading-tight tracking-tighter mb-8 text-balance">
                  Shaping the <span className="text-primary">Complete</span> Individual
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  The MSA BEE FOUNDATION envisions a society that values holistic health, education, and sports. Our mission is providing educational opportunity through sports to cultivate individuals who excel not just in competition, but in life.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                <div className="soft-card rounded-md">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Vision</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                    To build a society where every individual's potential is nurtured and the nation's future is bright.
                  </p>
                </div>
                <div className="soft-card rounded-md">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Goal</h4>
                  <p className="text-[13px] text-muted-foreground leading-relaxed font-medium">
                    Promoting physical education, sports excellence, and health awareness as foundations of success.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              <div className="pt-8 md:pt-12">
                <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" className="rounded-md h-[400px] md:h-[450px] w-full object-cover border border-border" alt="Youth sports" />
              </div>
              <div className="space-y-4 md:y-6">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=800&auto=format&fit=crop" className="rounded-md h-[300px] md:h-[350px] w-full object-cover border border-border" alt="Education" />
                <div className="bg-primary p-8 md:p-10 rounded-md text-primary-foreground text-center">
                  <div className="text-3xl md:text-4xl font-black mb-1 tracking-tighter">2016</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-80">Established</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Strategic Framework */}
        <section className="minimal-section bg-secondary/10">
          <div className="text-center mb-16 md:mb-24">
            <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6 text-balance">Strategic Framework</div>
            <h3 className="text-3xl md:text-6xl font-black text-foreground tracking-tighter leading-tight text-balance">
              Our Path to Impact
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {[
              { title: "Integrated Teaching", desc: "High-quality teaching integrating sports and academics for a balanced path." },
              { title: "Athlete Empowerment", desc: "Discovery and nurturing of untapped talents, providing growth opportunities." },
              { title: "Equal Access", desc: "Ensuring boys and girls have identical access to elite training." },
              { title: "Health Engagement", desc: "Promoting psychological balance through active community workshops." }
            ].map((strategy, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="soft-card flex items-start gap-6 md:gap-8 rounded-md"
              >
                <div className="text-3xl md:text-4xl font-black text-primary/20 tracking-tighter">0{i+1}</div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold tracking-tight">{strategy.title}</h4>
                  <p className="text-sm text-muted-foreground font-medium leading-relaxed">{strategy.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 md:mt-24 text-center">
            <Link href="/donate">
              <Button size="lg" className="rounded-md px-12 h-14 text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground transition-all">
                Get Involved Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
  );
}

