'use client';

import { motion } from 'framer-motion';
import { Landmark, Users, TrendingUp, HandCoins, ArrowUpRight, ArrowDownRight, Image as ImageIcon, Search, Download, Filter, ChevronRight, Activity } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface AdminDashboardUIProps {
  stats: {
    recentDonations: any[];
    galleryCount: number;
    totalDonations: number;
    activeCampaigns: number;
  }
}

export function AdminDashboardUI({ stats }: AdminDashboardUIProps) {
  const cards = [
    { 
      label: 'Financial Inflow', 
      value: `₦${stats.totalDonations.toLocaleString()}`, 
      icon: HandCoins, 
      trend: '+12.5%', 
      isUp: true,
      desc: 'Lifetime verified donations'
    },
    { 
      label: 'Digital Archives', 
      value: stats.galleryCount, 
      icon: ImageIcon, 
      trend: '+4 cached', 
      isUp: true,
      desc: 'Verification records'
    },
    { 
      label: 'Campaign Velocity', 
      value: stats.activeCampaigns, 
      icon: TrendingUp, 
      trend: '0.0%', 
      isUp: true,
      desc: 'Active foundation pillars'
    },
    { 
      label: 'Settled Balance', 
      value: '₦0.00', 
      icon: Landmark, 
      trend: 'N/A', 
      isUp: true,
      desc: 'Ready for withdrawal'
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
  };

  return (
    <div className="space-y-24">
      {/* Header Section */}
      <section>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
              Command <br/> <span className="text-primary">Center</span>
            </h1>
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-muted-foreground ml-1">
              Logistics & Impact Telemetry / Global Sync: Active
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/admin/gallery">
              <Button className="h-16 px-10 rounded-none bg-foreground text-background hover:bg-primary hover:text-primary-foreground transform active:scale-95 transition-all font-black uppercase tracking-widest text-[11px] border-none">
                Catalog New Asset
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Telemetry Grid */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-border border border-border overflow-hidden rounded-md shadow-2xl"
      >
        {cards.map((card, idx) => (
          <motion.div 
            key={idx}
            variants={item}
            className="bg-card p-12 space-y-10 group hover:bg-secondary/20 transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-secondary flex items-center justify-center rounded-none group-hover:bg-primary transition-colors duration-500">
                <card.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-black uppercase tracking-tighter ${card.isUp ? 'text-green-500' : 'text-red-500'}`}>
                 {card.trend} {card.isUp ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            
            <div>
              <div className="text-5xl font-black tracking-tighter mb-2 tabular-nums">{card.value}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">{card.label}</div>
            </div>

            <p className="text-[9px] font-medium text-muted-foreground/40 uppercase tracking-widest leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Operational Matrix */}
      <section className="grid lg:grid-cols-12 gap-12">
        {/* Ledger */}
        <div className="lg:col-span-8 space-y-10">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <h3 className="text-2xl font-black uppercase tracking-widest flex items-center gap-4">
              <Activity className="w-5 h-5 text-primary" />
              Inflow Ledger
            </h3>
            <Link href="/admin/donations">
              <Button variant="link" className="text-[10px] font-black uppercase tracking-widest text-primary hover:no-underline flex items-center gap-2 group">
                Full Database <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="space-y-4">
            {stats.recentDonations.length > 0 ? stats.recentDonations.map((d, i) => (
              <motion.div 
                key={d.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-8 bg-card border border-border group hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-10">
                  <div className="w-12 h-12 bg-secondary flex items-center justify-center font-black text-primary text-[10px]">
                    {d.currency}
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-black tracking-tight">{d.email}</div>
                    <div className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest tabular-nums opacity-60">
                      {new Date(d.createdAt).toLocaleDateString()} // {new Date(d.createdAt).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-black tracking-tighter text-primary group-hover:scale-105 transition-transform">
                  <span className="text-[10px] mr-2 opacity-40">{d.currency}</span>
                  {d.amount.toLocaleString()}
                </div>
              </motion.div>
            )) : (
              <div className="h-60 flex flex-col items-center justify-center border border-dashed border-border rounded-md opacity-20">
                <p className="text-[10px] font-black uppercase tracking-widest italic">Awaiting verification protocol...</p>
              </div>
            )}
          </div>
        </div>

        {/* System Mesh */}
        <div className="lg:col-span-4 space-y-10">
          <div className="flex items-center justify-between border-b border-border pb-6">
            <h3 className="text-2xl font-black uppercase tracking-widest">System Mesh</h3>
          </div>
          
          <div className="space-y-8 p-10 bg-secondary/10 border border-border rounded-md relative overflow-hidden">
             {/* Decorative Background Icon */}
             <Activity className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5 text-primary rotate-12" />

             {[
                { label: 'Cloudinary Link', status: 'Operational', color: 'bg-green-500' },
                { label: 'Database Mesh', status: 'Active (v6)', color: 'bg-green-500' },
                { label: 'Payment Node', status: 'Verifying', color: 'bg-blue-500' },
                { label: 'Mail Relay', status: 'Standby', color: 'bg-yellow-500' },
             ].map((item, i) => (
                <div key={i} className="space-y-4 relative z-10">
                   <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                      <span>{item.label}</span>
                      <span className="opacity-40">{item.status}</span>
                   </div>
                   <div className="h-[2px] w-full bg-border relative overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        className={`h-full ${item.color}`}
                      />
                   </div>
                </div>
             ))}

             <div className="pt-10">
               <Link href="/admin/settings">
                 <Button className="w-full h-14 rounded-none border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-black uppercase tracking-widest text-[9px] transition-all">
                    System Configuration
                 </Button>
               </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
