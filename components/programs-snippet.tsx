'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Heart } from 'lucide-react';

export function ProgramsSnippet() {
  const strategies = [
    {
      title: 'Integrated Teaching',
      description: 'High-quality instruction blending athletics and academics at every level.',
      icon: BookOpen,
    },
    {
      title: 'Athlete Empowerment',
      description: 'Comprehensive training and mentorship programs for next-gen champions.',
      icon: Trophy,
    },
    {
      title: 'Equal Access',
      description: 'Ensuring that every boy and girl has the opportunity to excel and lead.',
      icon: Users,
    },
    {
      title: 'Health Engagement',
      description: 'Promoting community wellness through active lifestyles and basic care.',
      icon: Heart,
    },
  ];

  return (
    <section className="minimal-section bg-background border-y border-border">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
        >
          Our Core Strategies
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-foreground mb-8 tracking-tighter"
        >
          Strategic Pillars
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-xl mx-auto font-medium"
        >
          A coordinated approach to developing the next generation of Nigerian leaders.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {strategies.map((strategy, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="soft-card group hover:border-primary/30 rounded-md"
          >
            <div 
              className="mb-8 flex items-center justify-start relative w-12 h-12"
              style={{ perspective: "1000px" }}
            >
              {/* Pop Effect Background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
              >
                <strategy.icon className="w-full h-full stroke-[1] blur-md" />
              </motion.div>

              <motion.div
                whileHover={{ 
                  rotateX: 20, 
                  rotateY: 20,
                  scale: 1.1
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
              >
                <strategy.icon className="w-10 h-10 stroke-[1.5]" />
              </motion.div>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4 tracking-tight">
              {strategy.title}
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-medium">
              {strategy.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/programs">
          <Button variant="outline" className="rounded-lg px-12 h-14 text-[11px] font-bold uppercase tracking-widest border-border hover:bg-primary hover:text-primary-foreground transition-all">
            See All Programs
          </Button>
        </Link>
      </div>
    </section>
  );
}



