'use client';

import { Button } from '@/components/ui/button';
import { Heart, ShieldCheck, Zap, Coins, Copy, Check, CreditCard, Globe, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

declare global {
  interface Window {
    FlutterwaveCheckout: (config: any) => void;
  }
}

const currencies = [
  { code: 'NGN', symbol: '₦', label: 'Naira' },
  { code: 'USD', symbol: '$', label: 'Dollar' },
  { code: 'GBP', symbol: '£', label: 'Pounds' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
];

export default function DonatePage() {
  const [copied, setCopied] = useState(false);
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [currency, setCurrency] = useState(currencies[0]);
  const [loading, setLoading] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonate = () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }
    if (!email || !email.includes('@')) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const public_key = process.env.NEXT_PUBLIC_FLW_PUBLIC_KEY || "FLWPUBK_TEST-SANDBOX-X";

    window.FlutterwaveCheckout({
      public_key,
      tx_ref: `MSABEE-${Date.now()}`,
      amount: parseFloat(amount),
      currency: currency.code,
      payment_options: "card, banktransfer, ussd",
      customer: {
        email: email,
      },
      customizations: {
        title: "MSA BEE Foundation",
        description: "Donation for Sports & Education",
        logo: "https://msabeefoundation.com/logo.png", // Verify logo path
      },
      callback: (data: any) => {
        console.log("Payment successful", data);
        setLoading(false);
      },
      onclose: () => {
        setLoading(false);
      },
    });
  };

  return (
    <div className="pt-20 bg-background text-foreground">
        <Script 
          src="https://checkout.flutterwave.com/v3.js" 
          strategy="lazyOnload"
        />

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

        {/* Dynamic Donation Console */}
        <section className="minimal-section bg-secondary/10 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Choose Your Legacy</div>
              <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-tight">
                Secure Digital <span className="text-primary">Donation</span>
              </h3>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="soft-card p-8 md:p-12 lg:p-16 rounded-xl border-primary/20 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
              
              <div className="grid md:grid-cols-12 gap-12">
                {/* Left side: Information */}
                <div className="md:col-span-5 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold tracking-tight">Global Support</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      We accept donations in Naira, Dollars, Pounds, and Euros. Flutterwave ensures your gift is processed securely and directly.
                    </p>
                  </div>
                  
                  <div className="space-y-6 pt-4">
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <CreditCard className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">Card & Transfer</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Globe className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">Global Currencies</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <ShieldCheck className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest">Encrypted Security</span>
                    </div>
                  </div>
                </div>

                {/* Right side: Input Form */}
                <div className="md:col-span-7 bg-background/50 p-8 rounded-xl border border-border/50">
                  <div className="space-y-8">
                    {/* Currency Selector */}
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">Select Currency</Label>
                      <div className="grid grid-cols-4 gap-2">
                        {currencies.map((curr) => (
                          <button
                            key={curr.code}
                            onClick={() => setCurrency(curr)}
                            className={`py-3 rounded-md text-[10px] font-black tracking-widest transition-all ${
                              currency.code === curr.code 
                                ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                                : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
                            }`}
                          >
                            {curr.code}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                        <Mail className="w-3 h-3" /> Email Address
                      </Label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 rounded-lg bg-background border-border focus:ring-primary font-bold"
                      />
                    </div>

                    {/* Amount Input */}
                    <div className="space-y-4">
                      <Label className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground">Donation Amount</Label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-black text-primary">
                          {currency.symbol}
                        </div>
                        <Input 
                          type="number"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="h-20 pl-12 text-3xl font-black rounded-lg bg-background border-border focus:ring-primary tracking-tighter"
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={handleDonate}
                      disabled={loading}
                      className="w-full h-16 rounded-lg bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-sm hover:scale-[1.02] transition-all shadow-xl"
                    >
                      {loading ? 'Initializing...' : `Complete ${currency.symbol}${amount || '0'} Donation`}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Transparency Section */}
        <section className="minimal-section border-b border-border">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Basketball Excellence', value: '40%', desc: 'Elite coaching, equipment, and logistics.', icon: Zap },
              { title: 'Academic Success', value: '45%', desc: 'School fees, books, and materials.', icon: ShieldCheck },
              { title: 'Community Growth', value: '15%', desc: 'Operations and sustainable expansion.', icon: Coins },
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                <item.icon className="w-8 h-8 mx-auto text-primary" />
                <div className="text-4xl font-black tracking-tighter">{item.value}</div>
                <h4 className="text-sm font-bold uppercase tracking-widest">{item.title}</h4>
                <p className="text-sm text-muted-foreground font-medium max-w-[200px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Banking Info (Fallback) */}
        <section className="minimal-section">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <div className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">Transparency First</div>
                <h3 className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-tight">
                  Direct Bank <br/> <span className="text-primary">Transfers</span>
                </h3>
              </div>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                If you prefer manual bank transfers for larger institutional contributions, please use our primary Nigerian Naira account below.
              </p>
              
              <div className="soft-card bg-foreground/5 p-10 space-y-8 relative overflow-hidden group rounded-xl border border-border">
                <div className="relative z-10">
                  <div className="text-[10px] uppercase tracking-[0.3em] mb-8 opacity-80 font-bold text-primary">Naira Account (NGN)</div>
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
                          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 opacity-40 group-hover/copy:opacity-100 transition-opacity" />}
                        </div>
                      </div>
                      <div>
                        <div className="text-[8px] uppercase tracking-widest opacity-60 mb-2 font-bold">Bank Name</div>
                        <div className="text-2xl font-black tracking-tighter">ZENITH BANK</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-card p-12 md:p-16 space-y-12 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-black tracking-tighter">Global <span className="text-primary">Contacts</span></h3>
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
            </div>
          </div>
        </section>
      </div>
  );
}

