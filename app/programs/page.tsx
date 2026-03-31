'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProgramsPage() {
  const programs = [
    {
      title: 'Lokoja Basketball Clinic',
      subtitle: 'Annual Elite Training',
      highlights: 'An intensive 3-day clinic at Federal University Lokoja (FUL) for youth aged 8–18, focusing on elite sports and wellness.',
      image: "https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=1200&auto=format&fit=crop",
      features: ['Professional Coaching', 'Training Gear Provided', 'Scouting Pathways', 'Physical Education focus']
    },
    {
      title: 'Educational Sponsorship',
      subtitle: 'Unlocking Academic Potential',
      highlights: 'Covering school fees and materials for underprivileged talents, ensuring that financial barriers don\'t limit their potential.',
      image: "https://images.unsplash.com/photo-1503676260728-1c00da0702e8?q=80&w=1200&auto=format&fit=crop",
      features: ['Fee Coverage', 'Material Provision', 'Academic Mentorship', 'Pathways to Higher Education']
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Dynamic Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Programs Overview"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Our Initiatives</h2>
            <h1 className="text-6xl sm:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-none italic">
              Strategic <span className="text-orange-500 non-italic">Impact</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming lives through a coordinated approach that blends high-performance athletics with academic excellence.
            </p>
          </div>
        </section>

        {/* Coordinated Impact Showcase */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto space-y-32">
            {programs.map((program, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image Showcase */}
                <div className="lg:w-1/2 relative group">
                  <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-105">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                  {/* Premium Accents */}
                  <div className="absolute -inset-10 bg-slate-900/5 rounded-full blur-3xl -z-10 group-hover:bg-orange-500/10 duration-700 transition-colors" />
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 space-y-8">
                  <div>
                    <h2 className="text-sm font-black tracking-[0.3em] text-orange-600 uppercase mb-4">{program.subtitle}</h2>
                    <h3 className="text-5xl font-heading font-black text-slate-900 tracking-tighter leading-none mb-8 italic">
                      {program.title}
                    </h3>
                    <p className="text-xl text-slate-500 leading-relaxed font-light mb-8">
                      {program.highlights}
                    </p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-orange-500/20 transition-all">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        <span className="text-sm font-semibold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8">
                    <Link href="/about">
                      <Button size="xl" className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-8 rounded-2xl transition-all shadow-xl shadow-slate-200 uppercase tracking-widest text-sm font-black">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Challenges Banner */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24">
              <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Beyond Sports</h2>
              <h3 className="text-5xl sm:text-7xl font-heading font-black tracking-tighter leading-tight italic">
                Addressing <span className="text-gradient">Real Challenges</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { title: 'Combating Drug Abuse', desc: 'Channelling youthful energy into structured wellness and athletics.' },
                { title: 'Preventing Cultism', desc: 'Building positive community and a sense of belonging through sports.' },
                { title: 'Promoting Education', desc: 'Ensuring that financial barriers never limit academic dreams.' }
              ].map((challenge, i) => (
                <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/5 hover:border-orange-500/20 transition-all duration-500">
                  <div className="text-4xl font-black text-slate-800 group-hover:text-orange-500 duration-500 mb-6 tracking-tighter opacity-30 italic">0{i+1}</div>
                  <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{challenge.title}</h4>
                  <p className="text-slate-400 font-light leading-relaxed">{challenge.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

