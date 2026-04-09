'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Calendar, HeartPulse } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ImpactPage() {
  const stories = [
    {
      title: 'Lokoja Elite Clinic 2025',
      tag: 'Sports Impact',
      desc: 'Our largest clinic to date at Federal University Lokoja. Over 100 young athletes received elite training and character mentorship.',
      image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop',
      stats: '100+ Trained'
    },
    {
      title: 'Breaking Financial Barriers',
      tag: 'Education',
      desc: 'Expanding our sponsorship program to ensure that talented youth in Kogi State never have to choose between their education and their dreams.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop',
      stats: 'Global Reach'
    },
    {
      title: 'Community Health Awareness',
      tag: 'Social Wellness',
      desc: 'Dedicated workshops focusing on mental health, psychological balance, and the prevention of social vices like drug abuse and cultism.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
      stats: '24/7 Support'
    }
  ];

  return (
    <div className="pt-20 bg-background text-foreground">
        {/* Support Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-30 invert dark:invert-0"
              alt="Impact Overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
            >
              Our Legacy
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter leading-none text-balance"
            >
              Measurable <span className="text-primary">Transformation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
            >
              Tracking the tangible difference MSA BEE Foundation is making in the lives of youth across Nigeria.
            </motion.p>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="minimal-section border-b border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 md:mb-20">
              <h2 className="text-sm font-black tracking-[0.4em] text-primary uppercase mb-6">Latest Updates</h2>
              <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none text-balance">
                Impact Reports
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {stories.map((story, idx) => (
                <div key={idx} className="group relative bg-card rounded-md overflow-hidden border border-border hover:shadow-2xl transition-all duration-700">
                  <div className="h-64 md:h-72 overflow-hidden relative">
                    <img src={story.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale hover:grayscale-0" alt={story.title} />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-background/90 text-primary px-4 py-2 rounded-md text-[10px] uppercase font-bold tracking-widest border border-border">
                        {story.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="text-primary font-black text-xs uppercase tracking-[0.3em] mb-4">{story.stats}</div>
                    <h4 className="text-2xl font-black text-foreground mb-6 tracking-tight leading-tight">{story.title}</h4>
                    <p className="text-muted-foreground font-medium leading-relaxed mb-10">{story.desc}</p>
                    <div className="w-10 h-px bg-border group-hover:w-full group-hover:bg-primary transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimalist Stats Banner */}
        <section className="minimal-section bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
              {[
                { label: 'Youth Trained', value: '100+', icon: Users },
                { label: 'Success Rate', value: '95%', icon: GraduationCap },
                { label: 'Days Active', value: '365+', icon: Calendar },
                { label: 'Positive Vibe', value: '∞', icon: HeartPulse },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <div 
                    className="mb-8 flex items-center justify-center relative w-12 h-12 mx-auto"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Pop Effect Background */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 2.5, opacity: 0.1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
                    >
                      <stat.icon className="w-full h-full stroke-[1] blur-md" />
                    </motion.div>

                    <motion.div
                      whileHover={{ 
                        rotateX: 20, 
                        rotateY: 20,
                        scale: 1.1
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-500 relative z-10"
                    >
                      <stat.icon className="w-10 h-10 stroke-[1.5]" />
                    </motion.div>
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-foreground mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="minimal-section text-center">
          <h2 className="text-4xl sm:text-6xl font-black text-foreground mb-10 tracking-tighter text-balance">
            Be a Part of the <span className="text-primary">Momentum</span>
          </h2>
          <Link href="/donate">
            <Button size="xl" className="rounded-lg px-16 h-14 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground hover:scale-105 transition-all">
              Support Our Impact
            </Button>
          </Link>
        </section>
      </div>
  );
}

