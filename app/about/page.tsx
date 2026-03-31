'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, Eye, HeartPulse, Trophy, Users, ShieldCheck } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Premium Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="About MSA BEE"
            />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-6xl sm:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-none">
              Our <span className="text-orange-500 italic font-light">Heritage</span> & Future
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Building a legacy of holistic excellence in Nigeria through the synergy of sports, education, and character.
            </p>
          </div>
        </section>

        {/* Philosophy & Mission */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-black tracking-[0.4em] text-orange-600 uppercase mb-6">Our Philosophy</h2>
                  <h3 className="text-4xl sm:text-6xl font-heading font-black text-slate-900 leading-[1.1] tracking-tighter">
                    Shaping the <br/> <span className="text-orange-500 underline decoration-slate-200 underline-offset-8">Complete</span> Individual
                  </h3>
                </div>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  The MSA BEE FOUNDATION envisions a society that values holistic health, education, and sports. Our mission is to cultivate individuals who excel not just in competition, but in life—fostering physical, social, cognitive, and emotional growth.
                </p>
                <div className="grid sm:grid-cols-2 gap-10">
                  <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
                    <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 tracking-wider">Vision</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                      "To build a society where every individual's potential is nurtured and the nation's future is bright."
                    </p>
                  </div>
                  <div className="p-8 rounded-[2rem] bg-orange-50/50 border border-orange-100">
                    <h4 className="text-lg font-bold text-slate-900 uppercase mb-4 tracking-wider">Goal</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-light italic">
                      "Promoting physical education, sports excellence, and health awareness as foundations of success."
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Split Image Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800&auto=format&fit=crop" className="rounded-[3rem] h-[500px] object-cover shadow-2xl" alt="Youth sports" />
                </div>
                <div className="space-y-6">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=800&auto=format&fit=crop" className="rounded-[3rem] h-[400px] object-cover shadow-2xl" alt="Education" />
                  <div className="bg-slate-950 p-10 rounded-[3rem] text-white">
                    <div className="text-5xl font-black mb-2 text-orange-500 tracking-tighter">2025</div>
                    <div className="text-xs uppercase font-bold tracking-[0.2em] text-slate-500">Established Foundation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Strategy */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] -z-0" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Strategic Framework</h2>
              <h3 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-tight">
                Our Path to <span className="text-gradient">Impact</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-20">
              {[
                {
                  title: "Integrated Teaching",
                  desc: "High-quality teaching integrating sports and academics to ensure a balanced educational path."
                },
                {
                  title: "Athlete Empowerment",
                  desc: "Discovery and nurturing of untapped talents, providing growth and competition opportunities."
                },
                {
                  title: "Equal Access",
                  desc: "Ensuring boys and girls have identical access to elite training and educational support."
                },
                {
                  title: "Health Engagement",
                  desc: "Promoting psychological balance and mental well-being through active community workshops."
                }
              ].map((strategy, i) => (
                <div key={i} className="flex gap-8 group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-orange-500/20 transition-all duration-500">
                  <div className="flex-shrink-0 text-5xl font-black text-slate-800 group-hover:text-orange-500 duration-500 transition-colors tracking-tighter">0{i+1}</div>
                  <div className="space-y-4">
                    <h4 className="text-3xl font-bold tracking-tight">{strategy.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed max-w-sm">{strategy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-32 text-center">
              <Link href="/donate">
                <Button size="xl" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-16 py-8 font-black uppercase tracking-widest text-lg shadow-2xl shadow-orange-900/40 border-none">
                  Get Involved
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
