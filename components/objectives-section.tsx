'use client';

import { motion } from 'framer-motion';
import { 
  HeartPulse, 
  BookOpen, 
  Trophy, 
  ShieldCheck 
} from 'lucide-react';

export function ObjectivesSection() {
  const objectives = [
    {
      title: 'Holistic Development',
      description: 'Foster physical growth, social interactions, cognitive development, and physical fitness.',
      icon: HeartPulse,
    },
    {
      title: 'Education & Health',
      description: 'Integrate education with health awareness to promote healthier lifestyles and well-being.',
      icon: BookOpen,
    },
    {
      title: 'Talent Development',
      description: "Discover and nurture untapped talents in Nigeria's sports sector with elite training.",
      icon: Trophy,
    },
    {
      title: 'Supportive Environment',
      description: 'Offer a supportive environment for young talents to learn and realize their dreams.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="minimal-section bg-background border-b border-border">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Our Mission Pillars
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-foreground tracking-tight"
          >
            Strategic Objectives
          </motion.h3>
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-md font-medium"
        >
          Four core pillars designed to ensure a comprehensive impact on our youth.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {objectives.map((obj, idx) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="group soft-card"
          >
            <div 
              className="mb-8 flex items-center justify-start relative w-12 h-12"
              style={{ perspective: "1000px" }}
            >
              {/* Pop Effect Background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
              >
                <obj.icon className="w-full h-full stroke-[1] blur-sm" />
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
                <obj.icon className="w-10 h-10 stroke-[1.5]" />
              </motion.div>
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4 tracking-tight">
              {obj.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              {obj.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


