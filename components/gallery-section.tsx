'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, MapPin, Calendar, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ["All", "Sports Clinics", "Education", "Community Outreach"];

interface GalleryItem {
  id: string;
  url: string;
  type: 'IMAGE' | 'VIDEO';
  title: string;
  description: string;
  category: string;
  year: string;
  location: string;
}

export function GallerySection({ selectedYear = 'All' }: { selectedYear?: string }) {
  const [filter, setFilter] = useState("All");
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Failed to fetch gallery:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getThumbnail = (item: GalleryItem) => {
    if (item.type === 'IMAGE') return item.url;
    const youtubeId = getYoutubeId(item.url);
    return youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : '';
  };

  const filteredItems = items.filter(item => {
    const categoryMatch = filter === "All" || item.category === filter;
    const yearMatch = selectedYear === "All" || item.year === selectedYear;
    return categoryMatch && yearMatch;
  });

  if (loading) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Syncing Archives...</span>
        </div>
      </div>
    );
  }

  return (
    <section className="minimal-section bg-background">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
          >
            Proof of Impact
          </motion.div>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-foreground tracking-tight text-balance leading-none"
          >
            Direct <span className="text-primary">Evidence</span> of Growth
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground mt-8 font-medium leading-relaxed"
          >
            Explore our verified records of work across Nigeria. Filter by category or search through previous years to see our sustained impact.
          </motion.p>
        </div>
        <div className="hidden lg:block">
           <Button variant="outline" className="rounded-md px-8 py-6 text-[10px] font-bold uppercase tracking-widest border-border bg-card">
             Download Impact Report (PDF)
           </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-20">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 text-[10px] uppercase font-bold tracking-widest rounded-md border transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-105' 
                : 'border-border text-muted-foreground hover:border-primary/50 bg-card/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        <AnimatePresence mode='popLayout'>
          {filteredItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              onClick={() => setSelectedItem(item)}
              className="group relative aspect-[4/5] rounded-md overflow-hidden border border-border cursor-pointer bg-card hover:border-primary/50 transition-colors"
            >
              <img 
                src={getThumbnail(item)} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              
              {item.type === 'VIDEO' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none group-hover:scale-125 transition-transform duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-2xl">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Image Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-500" />
              
              <div className="absolute inset-x-0 bottom-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-4 text-[9px] font-bold tracking-[0.2em] text-primary uppercase mb-5">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> {item.location || 'Nigeria'}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {item.year}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-foreground tracking-tighter leading-tight group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/98 backdrop-blur-2xl"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl max-h-[90vh] grid lg:grid-cols-2 bg-card border border-border rounded-md shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-md bg-background/90 border border-border hover:bg-secondary transition-all"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="h-[40vh] lg:h-full bg-slate-100 dark:bg-slate-900 border-r border-border">
                {selectedItem.type === 'IMAGE' ? (
                  <img 
                    src={selectedItem.url} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-cover grayscale-0"
                  />
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedItem.url)}?autoplay=1`}
                    title={selectedItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>

              <div className="p-10 md:p-20 flex flex-col justify-center bg-card">
                <div className="flex items-center gap-4 mb-10">
                   <div className="text-primary font-bold uppercase tracking-[0.4em] text-[10px]">
                    ARCHIVE RECORD: {selectedItem.year}
                  </div>
                  {selectedItem.type === 'VIDEO' && (
                    <div className="px-3 py-1 bg-red-500/10 text-red-500 text-[8px] font-black uppercase tracking-widest rounded-md border border-red-500/20">
                      YouTube Video
                    </div>
                  )}
                </div>
                
                <h3 className="text-4xl md:text-6xl font-black text-foreground tracking-tighter mb-10 leading-none">
                  {selectedItem.title}
                </h3>

                <div className="space-y-10">
                  <div className="flex flex-wrap gap-10">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Location</span>
                        <span className="text-sm font-bold tracking-tight">{selectedItem.location || 'Nigeria'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Category</span>
                        <span className="text-sm font-bold tracking-tight">{selectedItem.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                    {selectedItem.description || "The MSA BEE Foundation remains dedicated to holistic excellence. This record captures a moment of growth and transformation within our community."}
                  </p>

                  <div className="pt-10 flex gap-6">
                    <Button 
                      className="px-10 py-6 rounded-md text-[10px] font-bold tracking-[0.2em] uppercase bg-primary hover:bg-primary/90 shadow-xl"
                      onClick={() => window.open(selectedItem.url, '_blank')}
                    >
                      {selectedItem.type === 'IMAGE' ? 'View Full Asset' : 'Watch on YouTube'}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-10 py-6 rounded-md text-[10px] font-bold tracking-[0.2em] uppercase border-border hover:bg-secondary"
                      onClick={() => setSelectedItem(null)}
                    >
                      Return to Archives
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


