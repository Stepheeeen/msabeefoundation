'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, MapPin, Calendar, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const categories = ["All", "Sports Clinics", "Education", "Community Outreach"];

const images = [
  {
    url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop",
    title: "Lokoja Elite Basketball Clinic",
    category: "Sports Clinics",
    location: "Lokoja, Kogi State",
    year: "2025",
    description: "Our flagship training program providing elite coaching and character mentorship to over 100 youth participants."
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
    title: "Grassroots Development Cup",
    category: "Sports Clinics",
    location: "Abuja (FCT)",
    year: "2024",
    description: "Identifying and nurturing raw talent from local communities across the Federal Capital Territory."
  },
  {
    url: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop",
    title: "Academic Excellence Workshop",
    category: "Education",
    location: "Kano State",
    year: "2025",
    description: "Bridging the gap between sports and studies, ensuring our athletes excel in the classroom as well as on the court."
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    title: "Youth Sponsorship Seminar",
    category: "Education",
    location: "Lagos State",
    year: "2024",
    description: "Connecting talented youth with scholarship opportunities and educational grants for higher learning."
  },
  {
    url: "https://images.unsplash.com/photo-1511632765486-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    title: "Community Outreach & Wellness",
    category: "Community Outreach",
    location: "Rivers State",
    year: "2025",
    description: "Health awareness campaigns and mental wellness workshops designed to build resilient communities."
  },
  {
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
    title: "Leadership Mentorship Summit",
    category: "Community Outreach",
    location: "Kogi State",
    year: "2024",
    description: "Empowering the next generation of leaders with the tools needed for social and civic responsibility."
  }
];

export function GallerySection() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  const filteredImages = filter === "All" 
    ? images 
    : images.filter(img => img.category === filter);

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
            Explore our verified records of work across Nigeria. Each image represents a life touched, a talent discovered, or a community empowered.
          </motion.p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 text-[10px] uppercase font-bold tracking-widest rounded-md border transition-all duration-300 ${
              filter === cat 
                ? 'bg-primary border-primary text-primary-foreground shadow-lg scale-105' 
                : 'border-border text-muted-foreground hover:border-primary/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredImages.map((image, idx) => (
            <motion.div 
              key={image.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedImage(image)}
              className="group relative aspect-[4/5] rounded-md overflow-hidden border border-border cursor-pointer bg-card"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
              />
              
              {/* Image Metadata Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Evidence Stamp */}
              <div className="absolute top-6 right-6 px-3 py-1 rounded-md bg-background/90 text-primary border border-primary/20 text-[8px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Verified Record
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 text-[9px] font-bold tracking-[0.2em] text-primary uppercase mb-4">
                  <span>{image.location}</span>
                  <span className="w-1 h-1 rounded-full bg-border" />
                  <span>{image.year}</span>
                </div>
                <h4 className="text-xl font-black text-foreground tracking-tighter leading-tight">
                  {image.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-background/95 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
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
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-md bg-background/80 border border-border hover:bg-secondary transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-[40vh] lg:h-full">
                <img 
                  src={selectedImage.url} 
                  alt={selectedImage.title} 
                  className="w-full h-full object-cover grayscale-0"
                />
              </div>

              <div className="p-8 md:p-16 flex flex-col justify-center bg-card">
                <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-8">
                  Official Record: {selectedImage.year}
                </div>
                
                <h3 className="text-3xl md:text-5xl font-black text-foreground tracking-tighter mb-8 leading-none">
                  {selectedImage.title}
                </h3>

                <div className="space-y-8">
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold tracking-tight">{selectedImage.location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold tracking-tight">{selectedImage.category}</span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    {selectedImage.description}
                  </p>

                  <div className="pt-8 flex gap-4">
                    <Button 
                      className="px-8 py-3 rounded-md text-[10px] font-bold tracking-widest uppercase bg-primary hover:bg-primary/90"
                      onClick={() => window.open(selectedImage.url, '_blank')}
                    >
                      Original Asset
                    </Button>
                    <Button 
                      variant="outline" 
                      className="px-8 py-3 rounded-md text-[10px] font-bold tracking-widest uppercase"
                      onClick={() => setSelectedImage(null)}
                    >
                      Return to Gallery
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


