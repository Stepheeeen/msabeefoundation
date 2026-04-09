'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Book, Briefcase, Plus } from 'lucide-react';

export function DonateSnippet() {
  const allocations = [
    { icon: Heart, label: "Basketball Training", value: "40%", description: "Elite coaching and equipment" },
    { icon: Book, label: "Educational Sponsorship", value: "45%", description: "School fees & materials" },
    { icon: Briefcase, label: "Operations & Outreach", value: "15%", description: "Administration & community" },
  ];

  const donationLevels = [
    {
      amount: '₦5,000',
      title: 'Friend',
      description: 'Provides training gear for one youth',
    },
    {
      amount: '₦10,000',
      title: 'Champion',
      description: 'Contributes to month of program operations',
      featured: true,
    },
    {
      amount: '₦50,000',
      title: 'Leader',
      description: "Sponsors one student's school fees for a term",
    },
  ];

  return (
    <section className="minimal-section bg-background">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
        >
          Make an Impact
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter"
        >
          Support Our Mission
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
        >
          Your donation directly transforms lives. Choose your impact level.
        </motion.p>
      </div>

      {/* Allocation */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {allocations.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="soft-card flex flex-col items-center text-center py-12 group rounded-md"
          >
            <div 
              className="mb-8 flex items-center justify-center relative w-16 h-16 mx-auto"
              style={{ perspective: "1000px" }}
            >
              {/* Pop Effect Background */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 2, opacity: 0.15 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
              >
                <item.icon className="w-full h-full stroke-[1] blur-md" />
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
                <item.icon className="w-10 h-10 stroke-[1.5]" />
              </motion.div>
            </div>
            <h3 className="text-xl font-bold mb-2 tracking-tight">{item.label}</h3>
            <p className="text-sm text-muted-foreground mb-4 font-medium">{item.description}</p>
            <div className="text-3xl font-black text-primary">{item.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Donation Levels */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {donationLevels.map((level, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className={`soft-card flex flex-col h-full ${level.featured ? 'border-primary/50' : ''}`}
          >
            <div className="mb-6">
              <div className="text-3xl font-black text-foreground mb-1 tracking-tighter">{level.amount}</div>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">{level.title}</div>
            </div>
            <p className="text-sm text-muted-foreground mb-8 font-medium">{level.description}</p>
            <div className="mt-auto">
              <Link href="/donate">
                <Button className={`w-full rounded-lg h-12 text-[10px] font-bold uppercase tracking-widest ${level.featured ? 'bg-primary text-primary-foreground' : 'variant-outline'}`}>
                  Donate {level.amount}
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/donate">
          <Button variant="outline" className="rounded-lg px-12 h-14 text-[11px] font-bold uppercase tracking-widest border-border hover:bg-secondary transition-all">
            See All Giving Options
          </Button>
        </Link>
      </div>
    </section>
  );
}

