'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, GraduationCap, Calendar, HeartPulse } from 'lucide-react';
import Link from 'next/link';

export default function ImpactPage() {
  const stories = [
    {
      title: 'Lokoja Elite Clinic 2025',
      tag: 'Sports Impact',
      desc: 'Our largest clinic to date at Federal University Lokoja. Over 100 young athletes received elite training and character mentorship.',
      image: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop',
      stats: '100+ Trained'
    },
    {
      title: 'Breaking Financial Barriers',
      tag: 'Education',
      desc: 'Expanding our sponsorship program to ensure that talented youth in Kogi State never have to choose between their education and their dreams.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop',
      stats: 'Global Reach'
    },
    {
      title: 'Community Health Awareness',
      tag: 'Social Wellness',
      desc: 'Dedicated workshops focusing on mental health, psychological balance, and the prevention of social vices like drug abuse and cultism.',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200&auto=format&fit=crop',
      stats: '24/7 Support'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Cinematic Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Impact Overlay"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Our Legacy</h2>
            <h1 className="text-6xl sm:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-none">
              Measurable <span className="text-orange-500 italic font-light">Transformation</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Tracking the tangible difference MSA BEE Foundation is making in the lives of youth across Kogi Province.
            </p>
          </div>
        </section>

        {/* Success Stories Grid */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-sm font-black tracking-[0.4em] text-orange-600 uppercase mb-6">Latest Updates</h2>
              <h3 className="text-5xl font-heading font-black text-slate-900 tracking-tighter leading-none italic">
                From the <span className="text-orange-500 non-italic">Frontlines</span>
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {stories.map((story, idx) => (
                <div key={idx} className="group relative bg-slate-50 rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700">
                  <div className="h-72 overflow-hidden relative">
                    <img src={story.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={story.title} />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-slate-950 text-white px-4 py-2 rounded-full text-[10px] uppercase font-black tracking-widest border-none">
                        {story.tag}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-10">
                    <div className="text-orange-600 font-black text-xs uppercase tracking-[0.3em] mb-4">{story.stats}</div>
                    <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tight leading-tight">{story.title}</h4>
                    <p className="text-slate-500 font-light leading-relaxed mb-10">{story.desc}</p>
                    <div className="w-10 h-1 bg-slate-200 group-hover:w-full group-hover:bg-orange-500 transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Minimalist Stats Banner */}
        <section className="py-24 border-y border-slate-100 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              {[
                { label: 'Youth Trained', value: '100+', icon: Users },
                { label: 'Success Rate', value: '95%', icon: GraduationCap },
                { label: 'Days Active', value: '365+', icon: Calendar },
                { label: 'Positive Vibe', value: '∞', icon: HeartPulse },
              ].map((stat, i) => (
                <div key={i} className="text-center group">
                  <stat.icon className="w-10 h-10 text-slate-900 mx-auto mb-6 group-hover:text-orange-600 transition-colors duration-500 stroke-[1.5]" />
                  <div className="text-5xl font-black text-slate-900 mb-1 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-white relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
          <h2 className="text-4xl sm:text-6xl font-heading font-black text-slate-900 mb-10 tracking-tighter italic">
            Be a Part of the <span className="text-orange-500">Momentum</span>
          </h2>
          <Link href="/donate">
            <Button size="xl" className="bg-orange-600 hover:bg-orange-700 text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-lg shadow-2xl shadow-orange-900/40 border-none transition-all hover:scale-105 active:scale-95">
              Support Our Impact
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

