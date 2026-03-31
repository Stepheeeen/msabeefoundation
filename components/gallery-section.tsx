'use client';

import { motion } from 'framer-motion';

export function GallerySection() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop",
      title: "Youth Training",
      category: "Sports"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop",
      title: "Community Outreach",
      category: "Foundation"
    },
    {
      url: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop",
      title: "Educational Workshop",
      category: "Education"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      title: "Elite Sports Clinic",
      category: "Camps"
    },
    {
      url: "https://images.unsplash.com/photo-1511632765486-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      title: "Team Building",
      category: "Social"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop",
      title: "Future Leaders",
      category: "Impact"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
      
      <div className="max-w-7xl mx-auto container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-black tracking-[0.5em] text-orange-600 uppercase mb-8">Our Visual Story</h2>
            <h3 className="text-5xl sm:text-7xl font-heading font-black text-slate-900 tracking-tighter leading-none italic">
              Legacy in <span className="text-orange-500 font-light not-italic">Motion</span>
            </h3>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-500 max-w-md font-light leading-relaxed"
          >
            Experience the vibrant pulse of our camps and community projects across Nigeria.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-[3rem] cursor-pointer shadow-sm hover:shadow-2xl transition-shadow duration-500 ${
                idx === 0 || idx === 3 ? 'md:row-span-2 h-[600px] md:h-[800px]' : 'h-[350px] md:h-[384px]'
              }`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="w-12 h-1 bg-orange-500 mb-6" />
                <span className="text-[10px] font-black tracking-[0.4em] text-orange-500 uppercase mb-3">{image.category}</span>
                <h4 className="text-4xl font-black text-white tracking-tighter leading-none">{image.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

