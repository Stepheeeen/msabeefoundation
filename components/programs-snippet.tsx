'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProgramsSnippet() {
  const strategies = [
    {
      title: 'Integrated Teaching',
      description: 'High-quality instruction blending athletics and academics.',
      image: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: 'Athlete Empowerment',
      description: 'Comprehensive training for next-gen champions.',
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: 'Equal Access',
      description: 'Opportunities for all boys and girls to excel.',
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: 'Health Engagement',
      description: 'Promoting wellness across the community.',
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Core Strategies</h2>
          <h3 className="text-6xl sm:text-7xl font-heading font-black mb-10 tracking-tighter leading-none">
            Our <span className="italic font-light text-slate-400">Strategic</span> Pillars
          </h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            A coordinated approach to developing the next generation of Nigerian leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {strategies.map((strategy, idx) => (
            <div 
              key={idx} 
              className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${strategy.image})` }}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] z-10" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-10 z-20 transform transition-transform duration-500 group-hover:-translate-y-4">
                <div className="w-12 h-1 bg-orange-500 mb-6 transform origin-left group-hover:scale-x-150 transition-transform duration-500" />
                <h4 className="text-3xl font-black text-white mb-4 leading-none tracking-tighter">
                  {strategy.title}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {strategy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button size="xl" className="bg-white text-slate-900 hover:bg-orange-500 hover:text-white px-16 py-8 rounded-full transition-all duration-300 font-black uppercase tracking-widest text-lg shadow-2xl">
              Explore Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


