'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Heart, ShieldCheck, Zap, Coins } from 'lucide-react';

export default function DonatePage() {
  const donationLevels = [
    {
      amount: '₦5,000',
      title: 'Friend',
      description: 'Provides essential training gear/kits for one promising youth.',
      icon: Zap
    },
    {
      amount: '₦10,000',
      title: 'Champion',
      description: 'Contributes to a month of elite program operations & mentorship.',
      icon: Heart,
      featured: true
    },
    {
      amount: '₦50,000',
      title: 'Leader',
      description: "Sponsors one talented student's full school fees for an entire term.",
      icon: ShieldCheck
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Cinematic Support Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Donate Support"
            />
            <div className="absolute inset-0 bg-slate-950/80" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-6">Fuel the Future</h2>
            <h1 className="text-6xl sm:text-8xl font-heading font-black text-white mb-8 tracking-tighter leading-none italic">
              Invest in <span className="text-orange-500 non-italic">Impact</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
              Every contribution directly fuels our mission to blend elite athletics with academic excellence across Nigeria.
            </p>
          </div>
        </section>

        {/* Impact Transparency */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12 text-center">
              {[
                { title: 'Basketball Excellence', value: '40%', desc: 'Elite coaching, equipment, and clinic logistics.', icon: Zap },
                { title: 'Academic Success', value: '45%', desc: 'School fees, books, and educational materials.', icon: ShieldCheck },
                { title: 'Community Growth', value: '15%', desc: 'Operations, outreach, and sustainable expansion.', icon: Coins },
              ].map((item, i) => (
                <div key={i} className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 hover:border-orange-500/20 transition-all duration-500 group">
                  <item.icon className="w-12 h-12 text-slate-900 mx-auto mb-8 group-hover:text-orange-600 transition-colors duration-500" />
                  <div className="text-5xl font-black text-slate-900 mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-500">{item.value}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-sm font-black tracking-[0.4em] text-orange-600 uppercase mb-6">Support Tiers</h2>
              <h3 className="text-5xl font-heading font-black text-slate-900 tracking-tighter leading-none italic">
                Choose Your <span className="text-orange-500 non-italic">Legacy</span>
              </h3>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              {donationLevels.map((level, idx) => (
                <div key={idx} className={`relative p-12 rounded-[4rem] bg-white border ${level.featured ? 'border-orange-500 shadow-2xl scale-105 z-10' : 'border-slate-100'} transition-all duration-500 group hover:-translate-y-4`}>
                  {level.featured && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-8 py-2 rounded-full text-[10px] font-black uppercase tracking-widest">Most Impactful</div>
                  )}
                  <level.icon className="w-12 h-12 text-slate-900 mb-10 group-hover:text-orange-600 transition-colors duration-500" />
                  <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">{level.amount}</div>
                  <label className="text-[10px] lowercase font-black text-orange-500 tracking-[0.4em] mb-8 block uppercase">{level.title}</label>
                  <p className="text-slate-500 font-light leading-relaxed mb-12">
                    {level.description}
                  </p>
                  <Button size="xl" className={`w-full rounded-2xl py-8 ${level.featured ? 'bg-orange-600 hover:bg-orange-700' : 'bg-slate-900 hover:bg-slate-800'} text-white shadow-xl`}>
                    Donate Now
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banking & Contact Info - Dark Mode */}
        <section className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-950 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/5 rounded-full blur-[150px] -z-0" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-sm font-black tracking-[0.4em] text-orange-500 uppercase mb-8">Transparency First</h2>
                  <h3 className="text-5xl font-heading font-black tracking-tighter leading-tight italic">
                    Accountability & <span className="text-gradient">Trust</span>
                  </h3>
                </div>
                <p className="text-xl text-slate-400 font-light leading-relaxed">
                  We are committed to transparent fund management and regular impact reporting. Every donation is tracked and reported to ensure maximum impact for the youth of Kogi State.
                </p>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-orange-500/20 transition-all duration-500">
                    <h4 className="text-lg font-bold text-white mb-4">Direct Impact</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Quarterly impact reports directly to your inbox showing the progress of our students and athletes.</p>
                  </div>
                  <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/5 group hover:border-orange-500/20 transition-all duration-500">
                    <h4 className="text-lg font-bold text-white mb-4">Verified Allocation</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Rigorous internal audits ensure every Naira is spent on the initiatives promised.</p>
                  </div>
                </div>
              </div>

              <div className="p-12 sm:p-20 rounded-[4rem] bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[4rem] pointer-events-none" />
                <h3 className="text-3xl font-black mb-8 tracking-tighter">Contact Support</h3>
                <div className="space-y-10">
                  <div className="group cursor-pointer">
                    <label className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-2 block">Organization</label>
                    <p className="text-xl font-bold group-hover:text-orange-500 transition-colors">MSA BEE Foundation</p>
                  </div>
                  <div className="group cursor-pointer">
                    <label className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-2 block">Direct Email</label>
                    <p className="text-xl font-bold group-hover:text-orange-500 transition-colors">info@msabeefoundation.com</p>
                  </div>
                  <div className="group cursor-pointer">
                    <label className="text-[10px] font-black text-orange-500 uppercase tracking-[0.4em] mb-2 block">Primary Location</label>
                    <p className="text-xl font-bold group-hover:text-orange-500 transition-colors">122 IBB Way, Lokoja, Kogi State</p>
                  </div>
                </div>
                <div className="mt-16">
                  <Button size="xl" className="w-full bg-white text-slate-950 hover:bg-slate-200 rounded-2xl py-8 font-black uppercase tracking-widest text-sm border-none shadow-2xl">
                    Get Tax Receipt
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

