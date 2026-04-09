'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast.success('Thank you for subscribing!');
    setEmail('');
    setLoading(false);
  };

  return (
    <section className="minimal-section border-t border-border">
      <div className="soft-card md:p-16 flex flex-col items-center text-center group/card rounded-md">
        <div 
          className="mb-8 flex items-center justify-center relative w-20 h-20"
          style={{ perspective: "1000px" }}
        >
          {/* Pop Effect Background */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 2, opacity: 0.15 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
          >
            <Mail className="w-full h-full stroke-[1] blur-xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateX: 20, 
              rotateY: 20,
              scale: 1.1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-muted-foreground group-hover/card:text-primary transition-colors duration-300 relative z-10"
          >
            <Mail className="w-12 h-12 stroke-[1.5]" />
          </motion.div>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tighter text-balance"
        >
          Join Our Mission
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-lg mb-12 font-medium"
        >
          Subscribe to witness the transformation of lives through sports and education.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-md"
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 rounded-lg px-6 bg-secondary/50 border-border focus:ring-primary"
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="h-14 px-8 rounded-lg bg-primary text-primary-foreground font-bold uppercase tracking-widest text-[11px] flex items-center gap-2 group transition-all shrink-0"
            >
              {loading ? '...' : 'Subscribe'}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </Button>
          </form>
          <p className="mt-6 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
            No spam. Just impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
