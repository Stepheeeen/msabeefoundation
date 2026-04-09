'use client';

import { motion } from 'framer-motion';
import { MapPin, Info } from 'lucide-react';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const projects = [
  { id: 1, name: "Kogi State", projects: 12, students: 450, x: "45%", y: "60%" },
  { id: 2, name: "Lagos State", projects: 8, students: 800, x: "20%", y: "85%" },
  { id: 3, name: "Abuja (FCT)", projects: 5, students: 300, x: "48%", y: "55%" },
  { id: 4, name: "Kano State", projects: 15, students: 1200, x: "55%", y: "25%" },
  { id: 5, name: "Rivers State", projects: 6, students: 400, x: "50%", y: "90%" },
];

export function ImpactMap() {
  return (
    <section className="minimal-section border-b border-border">
      <div className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
        >
          Regional Presence
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-black text-foreground tracking-tight"
        >
          Where We Operate
        </motion.h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg font-medium">
          Our impact spans across multiple regions in Nigeria.
        </p>
      </div>

      <div className="relative aspect-[4/5] sm:aspect-video md:aspect-[21/9] bg-secondary/30 rounded-md border border-border overflow-hidden">
        {/* Simplified Map Visual */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
           <svg viewBox="0 0 100 100" className="w-full h-full p-10 md:p-20 fill-foreground">
              <path d="M20,80 Q30,95 50,90 Q70,95 85,80 Q95,65 85,45 Q70,25 50,15 Q30,25 15,45 Q5,65 20,80" />
           </svg>
        </div>

        <TooltipProvider delayDuration={0}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="absolute"
              style={{ left: project.x, top: project.y }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-3 -m-3"
                  >
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                    <div className="relative w-3 h-3 bg-primary rounded-full border-2 border-background shadow-sm" />
                  </motion.button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-popover border-border text-popover-foreground p-4 rounded-md shadow-xl z-50">
                  <div className="space-y-2">
                     <h4 className="font-bold text-sm text-primary uppercase tracking-widest">{project.name}</h4>
                     <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest opacity-60">
                        <div>{project.projects} Projects</div>
                        <div className="w-px h-3 bg-border" />
                        <div>{project.students} Students</div>
                     </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </TooltipProvider>

        {/* Legend/Info Panel (Simplified) */}
        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 p-6 soft-card bg-background/80 backdrop-blur-md max-w-[280px] group/legend rounded-md hidden sm:block">
           <div className="flex items-center gap-3 mb-3">
              <div style={{ perspective: "1000px" }}>
                <motion.div
                  whileHover={{ 
                    rotateX: 20, 
                    rotateY: 20,
                    scale: 1.2
                  }}
                  className="text-primary"
                >
                  <Info className="w-4 h-4" />
                </motion.div>
              </div>
              <h3 className="font-bold uppercase tracking-[0.2em] text-[10px]">Region Insight</h3>
           </div>
           <p className="text-muted-foreground text-[10px] md:text-xs leading-relaxed font-medium">
              Tap or hover over a marker to see our footprint in that region.
           </p>
        </div>
      </div>
    </section>
  );
}

