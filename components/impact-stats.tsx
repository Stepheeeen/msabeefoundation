'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, BookOpen, Trophy, Globe } from 'lucide-react';

interface StatItemProps {
  icon: React.ElementType;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ icon: Icon, value, label, suffix = "+", delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="soft-card flex flex-col items-center text-center group rounded-md"
    >
      <div 
        className="mb-6 flex items-center justify-center relative w-12 h-12"
        style={{ perspective: "1000px" }}
      >
        {/* Pop Effect Background */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 2.5, opacity: 0.1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
        >
          <Icon className="w-full h-full stroke-[1] blur-md" />
        </motion.div>

        <motion.div
          whileHover={{ 
            rotateX: 20, 
            rotateY: 20,
            scale: 1.1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          className="text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
        >
          <Icon className="w-10 h-10 stroke-[1.5]" />
        </motion.div>
      </div>
      <div className="text-4xl md:text-5xl font-black text-foreground mb-2 tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">
        {label}
      </div>
    </motion.div>
  );
}

export function ImpactStats() {
  const [stats, setStats] = useState([
    { icon: Users, value: 50, label: "Communities Supported", delay: 0 },
    { icon: BookOpen, value: 120, label: "Scholarships Awarded", delay: 0.1 },
    { icon: Trophy, value: 25, label: "Sports Teams", delay: 0.2 },
    { icon: Globe, value: 12, label: "Regions Empowered", delay: 0.3 },
  ]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/settings');
        const data = await response.json();
        setStats([
          { icon: Users, value: data.impactCommunities || 50, label: "Communities Supported", delay: 0 },
          { icon: BookOpen, value: data.impactScholarships || 120, label: "Scholarships Awarded", delay: 0.1 },
          { icon: Trophy, value: data.impactTeams || 25, label: "Sports Teams", delay: 0.2 },
          { icon: Globe, value: data.impactAthletes || 750, label: "Athletes Trained", delay: 0.3 },
        ]);
      } catch (error) {
        console.error('Failed to fetch impact metrics');
      }
    };
    fetchStats();
  }, []);

  return (
    <section className="minimal-section border-b border-border">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
        >
          Our Impact
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
        >
          Growth in Numbers
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}

