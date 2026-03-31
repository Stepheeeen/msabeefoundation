'use client';

import { 
  HeartPulse, 
  BookOpen, 
  Trophy, 
  ShieldCheck 
} from 'lucide-react';

export function ObjectivesSection() {
  const objectives = [
    {
      title: 'Holistic Development',
      description: 'Foster physical growth, social interactions, cognitive development, self-esteem enhancement, and physical fitness.',
      icon: HeartPulse,
    },
    {
      title: 'Education & Health',
      description: 'Integrate education with health awareness to promote healthier lifestyles and educate communities on mental and physical well-being.',
      icon: BookOpen,
    },
    {
      title: 'Talent Development',
      description: "Discover and nurture untapped talents in Nigeria's sports sector, providing training, growth, and competition opportunities.",
      icon: Trophy,
    },
    {
      title: 'Supportive Environment',
      description: 'Offer a supportive environment for young talents to learn, grow, and realize their dreams through mentorship and infrastructure.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black tracking-[0.3em] text-orange-600 uppercase mb-5">Our Mission Pillars</h2>
            <h3 className="text-5xl sm:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tighter">
              Strategic <span className="text-orange-500">Objectives</span>
            </h3>
          </div>
          <p className="text-xl text-slate-500 max-w-md font-light leading-relaxed">
            Four core pillars designed to ensure a comprehensive, lasting impact on the lives of our youth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {objectives.map((obj, idx) => (
            <div 
              key={idx} 
              className="group relative transition-all duration-500"
            >
              <div className="mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                <obj.icon className="w-12 h-12 text-slate-900 group-hover:text-orange-500 transition-colors duration-500 stroke-[1.5]" />
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
                  {obj.title}
                  <span className="w-8 h-[1px] bg-slate-200 group-hover:w-12 group-hover:bg-orange-500 transition-all duration-500" />
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {obj.description}
                </p>
              </div>
              {/* Subtle hover effect */}
              <div className="absolute -inset-6 rounded-[2rem] bg-slate-50 opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

