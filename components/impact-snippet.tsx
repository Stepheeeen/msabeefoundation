'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Users, HeartPulse, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function ImpactSnippet() {
  const events = [
    {
      title: 'Annual Lokoja Clinic',
      subtitle: 'Building Champions',
      highlights: '100+ youth trained in elite sports and wellness programs.',
      date: 'September 2025',
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: 'Educational Grants',
      subtitle: 'Academic Excellence',
      highlights: 'Providing school fees and materials to underprivileged students.',
      date: 'Ongoing 2025',
      image: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: 'Community Health',
      subtitle: 'Holistic Wellness',
      highlights: 'Workshops on mental health and physical well-being.',
      date: 'Quarterly',
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black tracking-[0.4em] text-orange-600 uppercase mb-6">Our Progress</h2>
          <h3 className="text-5xl sm:text-7xl font-heading font-black text-slate-900 mb-8 leading-tight tracking-tighter text-balance">
            Tangible Impact
          </h3>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light leading-relaxed">
            Stay updated with our latest initiatives and the sustainable changes we are driving in Kogi State.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {events.map((event, idx) => (
            <div key={idx} className="group bg-white rounded-xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-slate-950 text-white px-4 py-1.5 rounded-lg text-[10px] uppercase font-black tracking-widest border-none">
                    {event.date}
                  </Badge>
                </div>
              </div>
              <div className="p-10">
                <p className="text-orange-600 font-black mb-3 text-xs uppercase tracking-[0.2em]">{event.subtitle}</p>
                <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-orange-500 transition-colors tracking-tighter leading-none">{event.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-light mb-8">
                  {event.highlights}
                </p>
                <div className="w-10 h-[2px] bg-slate-100 group-hover:w-full group-hover:bg-orange-500 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Banner - Premium Minimalist */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {[
            { label: 'Youth Trained', value: '100+', icon: Users },
            { label: 'Success Rate', value: '95%', icon: GraduationCap },
            { label: 'Programs Active', value: '4', icon: Calendar },
            { label: 'Lives Changed', value: '∞', icon: HeartPulse },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <div 
                className="mb-6 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  whileHover={{ 
                    rotateX: 20, 
                    rotateY: 20,
                    scale: 1.2
                  }}
                  className="text-slate-900 group-hover:text-orange-600 transition-colors duration-500"
                >
                  <stat.icon className="w-10 h-10 stroke-[1.5]" />
                </motion.div>
              </div>
              <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/impact">
            <Button size="xl" className="bg-slate-900 hover:bg-slate-800 text-white px-16 py-8 rounded-lg transition-all shadow-2xl shadow-slate-200">
              View Full Impact Report
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


