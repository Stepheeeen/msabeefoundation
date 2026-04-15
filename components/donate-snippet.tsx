'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Book, Briefcase, Globe, ArrowRight } from 'lucide-react';

export function DonateSnippet() {
  const allocations = [
    { icon: Heart, label: "Basketball Training", value: "40%", description: "Elite coaching and equipment" },
    { icon: Book, label: "Educational Sponsorship", value: "45%", description: "School fees & materials" },
    { icon: Briefcase, label: "Operations & Outreach", value: "15%", description: "Administration & community" },
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
          Global Giving
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight"
        >
          One Gateway. <span className="text-primary">Infinite Impact.</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
        >
          Support our mission in Naira, Dollars, Pounds, or Euros. You decide the amount; we ensure the impact.
        </motion.p>
      </div>

      {/* Allocation */}
      <div className="grid lg:grid-cols-3 gap-8 mb-20">
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
              <motion.div
                whileHover={{ 
                  rotateX: 20, 
                  rotateY: 20,
                  scale: 1.1
                }}
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

      <div className="max-w-4xl mx-auto">
        <div className="soft-card p-12 bg-secondary/10 flex flex-col md:flex-row items-center justify-between gap-12 rounded-xl border border-primary/10">
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
               <Globe className="w-5 h-5 text-primary" />
               <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Multi-Currency Enabled</span>
            </div>
            <h3 className="text-2xl font-black tracking-tighter">Ready to Make a Difference?</h3>
            <p className="text-sm text-muted-foreground font-medium max-w-md">
              Securely donate using your local card or bank account. No fixed amounts—give what your heart dictates.
            </p>
          </div>
          <Link href="/donate" className="w-full md:w-auto">
            <Button className="w-full md:w-auto px-12 h-16 rounded-lg text-xs font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:scale-105 transition-all shadow-xl">
              Launch Donation Portal <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

