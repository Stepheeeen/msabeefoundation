'use client';

import { Button } from '@/components/ui/button';
import { Heart, ShieldCheck, Zap, Coins, Copy, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <div className="pt-20 bg-background text-foreground">
        {/* Support Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=2500&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Donate Support"
            />
            <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6"
            >
              Fuel the Future
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-tight"
            >
              Invest in <span className="text-primary">Impact</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-medium"
            >
              Every contribution directly fuels our mission to blend elite athletics with academic excellence.
            </motion.p>
          </div>
        </section>

        {/* Impact Transparency */}
        <section className="minimal-section border-b border-border">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Basketball Excellence', value: '40%', desc: 'Elite coaching, equipment, and logistics.', icon: Zap },
              { title: 'Academic Success', value: '45%', desc: 'School fees, books, and materials.', icon: ShieldCheck },
              { title: 'Community Growth', value: '15%', desc: 'Operations and sustainable expansion.', icon: Coins },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="soft-card flex flex-col items-center text-center py-12 group"
              >
                <div 
                  className="mb-8 flex items-center justify-center"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    whileHover={{ 
                      rotateX: 20, 
                      rotateY: 20,
                      scale: 1.2
                    }}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  >
                    <item.icon className="w-10 h-10 stroke-[1.5]" />
                  </motion.div>
                </div>
                <div className="text-4xl font-black text-foreground mb-4 tracking-tighter">{item.value}</div>
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-[220px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="minimal-section bg-secondary/10">
          <div className="text-center mb-20">
            <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Support Tiers</div>
            <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-tight text-balance">
              Choose Your Legacy
            </h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {donationLevels.map((level, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`soft-card flex flex-col group ${level.featured ? 'border-primary/50 ring-1 ring-primary/20' : ''}`}
              >
                <div 
                  className="mb-8 flex items-center justify-start"
                  style={{ perspective: "1000px" }}
                >
                  <motion.div
                    whileHover={{ 
                      rotateX: 20, 
                      rotateY: 20,
                      scale: 1.2
                    }}
                    className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
                  >
                    <level.icon className="w-10 h-10 stroke-[1.5]" />
                  </motion.div>
                </div>
                <div className="mb-10">
                  <div className="text-4xl font-black text-foreground mb-2 tracking-tighter">{level.amount}</div>
                  <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-primary">{level.title}</div>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-12">
                  {level.description}
                </p>
                <div className="mt-auto">
                  <Button className={`w-full rounded-lg h-14 text-xs font-bold uppercase tracking-widest ${level.featured ? 'bg-primary text-primary-foreground' : 'variant-outline'}`}>
                    Donate {level.amount}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Banking Info */}
        <section className="minimal-section">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Transparency First</div>
                <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-tight text-balance">
                  Accountability <br/> & Trust
                </h3>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                We are committed to transparent fund management. Every donation is tracked and reported to ensure maximum impact for the youth of Kogi State.
              </p>
              
              <div className="soft-card bg-primary text-primary-foreground p-10 space-y-8 relative overflow-hidden group rounded-xl">
                <div className="relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] mb-8 opacity-80 font-bold">Direct Bank Transfer</div>
                  <div className="space-y-6">
                    <div>
                      <div className="text-[8px] uppercase tracking-widest opacity-60 mb-2 font-bold">Account Name</div>
                      <div className="text-2xl font-black tracking-tighter uppercase">MSA BEE FOUNDATION</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-60 mb-2 font-bold">Account Number</div>
                        <div 
                          className="text-2xl font-black tracking-tighter flex items-center gap-3 cursor-pointer group/copy"
                          onClick={() => copyToClipboard('0000000000')}
                        >
                          0000000000
                          {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4 opacity-40 group-hover/copy:opacity-100 transition-opacity" />}
                        </div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-60 mb-2 font-bold">Bank Name</div>
                        <div className="text-2xl font-black tracking-tighter">ZENITH BANK</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-white/10 text-[9px] font-bold opacity-60 uppercase tracking-widest leading-relaxed">
                  * Use your Name or Phone Number as the transfer description.
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="soft-card p-12 md:p-16 space-y-12 rounded-xl"
            >
              <h3 className="text-2xl font-black tracking-tighter">Contact <span className="text-primary">Support</span></h3>
              <div className="space-y-8">
                {[
                  { label: "Organization", val: "MSA BEE Foundation" },
                  { label: "Email", val: "info@msabeefoundation.com" },
                  { label: "Location", val: "122 IBB Way, Lokoja, Kogi State" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-[9px] font-bold text-primary uppercase tracking-[0.3em] mb-2">{item.label}</div>
                    <div className="text-lg font-bold">{item.val}</div>
                  </div>
                ))}
              </div>
              <div className="pt-8 text-center sm:text-left">
                <Link href="mailto:info@msabeefoundation.com">
                  <Button size="lg" className="rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all font-bold uppercase tracking-widest text-[11px] px-10 h-14">
                    Request Tax Receipt
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="minimal-section bg-secondary/10 border-t border-border">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Common Questions</div>
              <h3 className="text-3xl md:text-4xl font-black text-foreground tracking-tighter text-balance">
                Support FAQ
              </h3>
            </div>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "How are the funds utilized?", a: "100% of public donations go directly to our programs. Administrative costs are covered through separate private grants." },
                { q: "Can I donate in other currencies?", a: "Yes, for international donations in USD or EUR, please contact our support team for specialized transfer details." },
                { q: "Are donations tax-deductible?", a: "MSA BEE Foundation is a registered NGO in Nigeria. We provide official tax receipts for all contributions upon request." },
                { q: "Can I visit the projects I support?", a: "Absolutely! We organize quarterly tours for our partners to see the progress in Kogi State firsthand." }
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-background px-8 rounded-xl">
                  <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors hover:no-underline py-6">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6 font-medium">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
  );
}

