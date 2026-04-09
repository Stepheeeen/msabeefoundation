'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
  {
    id: 1,
    title: "Empowering Rural Youths: Sports Equipment Distribution in Kogi State",
    excerpt: "We recently concluded a successful mission to distribute sports kits to over 15 schools...",
    category: "Outreach",
    date: "May 12, 2026",
    author: "Admin",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Educational Scholarships Awarded to Top Performers",
    excerpt: "Recognizing academic excellence alongside physical development. Meet our newest scholars.",
    category: "Education",
    date: "June 05, 2026",
    author: "Foundation Board",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Foundation News",
    title: "MSA BEE Foundation Partners with Local Health Clinics",
    date: "March 12, 2026",
    excerpt: "To bolster our health engagement pillar, we have established new partnerships to provide basic care and wellness checks...",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
  }
];

export function NewsSection() {
  return (
    <section className="minimal-section bg-background">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Latest Updates
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-foreground tracking-tight text-balance"
          >
            News & Stories
          </motion.h2>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <Link href="/news">
            <Button variant="ghost" className="group text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors">
              View All News <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((item, idx) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * idx }}
            className="group flex flex-col h-full"
          >
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border mb-6">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <div className="px-3 py-1 bg-background/90 backdrop-blur-md rounded-lg text-[9px] font-bold uppercase tracking-widest text-primary border border-border">
                  {item.category}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              <Calendar className="w-3 h-3" />
              {item.date}
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {item.title}
            </h3>
            
            <p className="text-sm text-muted-foreground leading-relaxed font-medium line-clamp-3 mb-6">
              {item.excerpt}
            </p>
            
            <div className="mt-auto">
              <Link href={`/news/${item.id}`} className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors group">
                Read Story <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
