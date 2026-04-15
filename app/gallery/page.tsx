'use client';

import { useState, useEffect } from 'react';
import { GallerySection } from '@/components/gallery-section';
import { motion } from 'framer-motion';
import { Calendar, Filter } from 'lucide-react';

interface GalleryItem {
  id: string;
  year: string;
}

export default function FullGalleryPage() {
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchYears = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data: GalleryItem[] = await response.json();
        const uniqueYears = Array.from(new Set(data.map(item => item.year))).sort((a, b) => b.localeCompare(a));
        setYears(uniqueYears);
      } catch (error) {
        console.error('Failed to fetch years:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchYears();
  }, []);

  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="py-20 bg-secondary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-8"
          >
            Media <span className="text-primary">Archives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium"
          >
            A chronological legacy of the MSA BEE Foundation's commitment to youth empowerment through sports and education.
          </motion.p>
        </div>
      </section>

      {/* Year Selector Sector */}
      {!loading && years.length > 0 && (
        <section className="py-12 border-b border-border bg-card/50 sticky top-16 z-40 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 overflow-x-auto pb-4 no-scrollbar">
            <div className="flex items-center gap-3 text-primary shrink-0">
              <Calendar className="w-5 h-5" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Select Year</span>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedYear('All')}
                className={`whitespace-nowrap px-6 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest border transition-all ${selectedYear === 'All' ? 'bg-primary border-primary text-primary-foreground shadow-lg' : 'border-border text-muted-foreground hover:border-primary/50'}`}
              >
                All Eras
              </button>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  className={`whitespace-nowrap px-6 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest border transition-all ${selectedYear === year ? 'bg-primary border-primary text-primary-foreground shadow-lg' : 'border-border text-muted-foreground hover:border-primary/50'}`}
                >
                  Camp {year}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-12">
        <GallerySection selectedYear={selectedYear} />
      </div>
    </div>
  );
}
