'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Lokoja Basketball Clinic',
      subtitle: 'Annual Elite Training',
      highlights: 'An intensive 3-day clinic at Federal University Lokoja (FUL) for youth aged 8–18, focusing on elite sports and wellness.',
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop",
      features: ['Professional Coaching', 'Training Gear Provided', 'Scouting Pathways', 'Physical Education focus']
    },
    {
      title: 'Educational Sponsorship',
      subtitle: 'Academic Excellence',
      highlights: 'Covering school fees and materials for underprivileged talents, ensuring that financial barriers don\'t limit their potential.',
      image: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop",
      features: ['Fee Coverage', 'Material Provision', 'Academic Mentorship', 'Pathways to Higher Education']
    }
  ];

  return (
    <div className="pt-20 bg-background text-foreground">
      {/* Support Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 text-balance">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-30 invert dark:invert-0"
            alt="Programs Overview"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Our Initiatives
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none text-balance"
          >
            Strategic <span className="text-primary">Impact</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            Transforming lives through a coordinated approach that blends high-performance athletics with academic excellence.
          </motion.p>
        </div>
      </section>

      {/* Coordinated Impact Showcase */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-20 md:y-32">
          {programs.map((program, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Showcase */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="relative z-10 rounded-md overflow-hidden border border-border transition-transform duration-700 group-hover:scale-105 shadow-xl">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">{program.subtitle}</h2>
                  <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter leading-none mb-6 text-balance">
                    {program.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-8">
                    {program.highlights}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-secondary/50 rounded-md border border-border hover:border-primary/20 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm font-bold tracking-tight text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 text-center lg:text-left">
                  <Link href="/about">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 h-14 rounded-md transition-all font-bold uppercase tracking-widest text-[11px]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Social Challenges Banner */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-sm font-black tracking-[0.4em] text-primary uppercase mb-6">Beyond Sports</h2>
            <h3 className="text-4xl md:text-7xl font-black text-foreground tracking-tighter leading-tight text-balance">
              Addressing <span className="text-primary font-black uppercase tracking-widest opacity-40">Challenges</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Combating Drug Abuse', desc: 'Channelling youthful energy into structured wellness and athletics.' },
              { title: 'Preventing Cultism', desc: 'Building positive community and a sense of belonging through sports.' },
              { title: 'Promoting Education', desc: 'Ensuring that financial barriers never limit academic dreams.' }
            ].map((challenge, i) => (
              <div key={i} className="soft-card p-8 md:p-10 group bg-background border border-border hover:border-primary/20 transition-all duration-500 rounded-md">
                <div className="text-3xl md:text-4xl font-black text-primary/10 group-hover:text-primary transition-colors duration-500 mb-6 tracking-tighter">0{i+1}</div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 tracking-tight">{challenge.title}</h4>
                <p className="text-muted-foreground font-medium leading-relaxed text-sm md:text-base">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
