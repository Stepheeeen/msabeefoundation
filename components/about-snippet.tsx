'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSnippet() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop" 
                alt="MSA BEE Camp activities" 
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Editorial accents */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-900/5 rounded-full blur-3xl z-0" />
            <div className="absolute bottom-10 -left-10 glass p-8 rounded-3xl z-20 hidden sm:block max-w-[200px]">
              <div className="text-3xl font-black text-slate-900 mb-1 leading-none">100%</div>
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-4 leading-relaxed">Commitment to Excellence</div>
              <div className="w-8 h-1 bg-orange-500" />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="text-sm font-black tracking-[0.3em] text-orange-600 uppercase mb-5">Our Philosophy</h2>
              <h3 className="text-5xl sm:text-7xl font-heading font-black text-slate-900 leading-[0.95] tracking-tighter mb-8 italic">
                Beyond the <span className="text-orange-500">Game</span>.
              </h3>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                MSA BEE FOUNDATION is more than just a sports camp. We are an ecosystem dedicated to the holistic growth of Nigeria's youth, blending high-performance athletics with academic rigor and character development.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Vision</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  A society that values holistic health, education, and sports as the foundations of a brighter nation.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-slate-900 uppercase tracking-wide">Mission</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-light">
                  To cultivate a generation that values integrated development across physical, social, and cognitive boundaries.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link href="/about">
                <Button size="xl" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 rounded-2xl transition-all shadow-xl shadow-slate-200">
                  Our Full Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


