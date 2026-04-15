'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Shield, Globe, Landmark, Users, Save, Activity, CreditCard } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    fetch('/api/admin/settings?unmask=true')
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      });
      if (!res.ok) throw new Error();
      
      const updated = await res.json();
      setSettings(updated); // Sync with database state (masked values)
      toast.success('Global configuration synchronized');
    } catch (error) {
      toast.error('Sync failure: Check secure backbone');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="h-[60vh] flex items-center justify-center">
      <div className="text-[10px] font-black uppercase animate-pulse tracking-[0.5em]">Synchronizing Command Data...</div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase">Content <span className="text-primary">Studio</span></h1>
        <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Override site-wide constants and telemetry metrics</p>
      </div>

      <form onSubmit={handleSave} className="space-y-12">
        <Tabs defaultValue="branding" className="w-full">
          <TabsList className="w-full justify-start rounded-none h-auto p-0 bg-transparent border-b border-border mb-12 overflow-x-auto">
            <TabsTrigger 
              value="branding" 
              className="px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none data-[state=active]:bg-primary/5 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary transition-all"
            >
              Branding
            </TabsTrigger>
            <TabsTrigger 
              value="impact" 
              className="px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none data-[state=active]:bg-primary/5 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary transition-all"
            >
              Impact Report
            </TabsTrigger>
            <TabsTrigger 
              value="financial" 
              className="px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none data-[state=active]:bg-primary/5 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary transition-all"
            >
              Inflow Info
            </TabsTrigger>
            <TabsTrigger 
              value="vault" 
              className="px-8 py-4 text-[10px] font-black uppercase tracking-widest rounded-none data-[state=active]:bg-primary/5 data-[state=active]:text-primary border-b-2 border-transparent data-[state=active]:border-primary transition-all"
            >
              Secure Vault
            </TabsTrigger>
          </TabsList>

          {/* Branding Panel */}
          <TabsContent value="branding" className="mt-0 space-y-12">
            <section className="soft-card p-10 border border-border bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest">Global <span className="text-primary">Metadata</span></h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Administrative Email</Label>
                    <Input 
                      placeholder="admin@msabeefoundation.com"
                      value={settings.contactEmail} 
                      onChange={e => setSettings({...settings, contactEmail: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Foundation Hotline</Label>
                    <Input 
                      placeholder="+234 000 000 0000"
                      value={settings.contactPhone} 
                      onChange={e => setSettings({...settings, contactPhone: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border focus:border-primary"
                    />
                  </div>
                  <div className="col-span-1 md:col-span-2 space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">HQ Location Address</Label>
                    <Input 
                      placeholder="Street Address, City, State, Country"
                      value={settings.contactLocation} 
                      onChange={e => setSettings({...settings, contactLocation: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Impact Panel */}
          <TabsContent value="impact" className="mt-0 space-y-12">
            <section className="soft-card p-10 border border-border bg-card relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest">Impact <span className="text-primary">Metrics</span></h3>
                </div>
                
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="space-y-4 text-center p-8 bg-secondary/5 border border-border group/stat">
                    <Label className="text-[9px] uppercase font-black opacity-40 group-hover/stat:opacity-100 transition-opacity">Athletes Trained</Label>
                    <Input 
                      type="number"
                      placeholder="e.g. 750"
                      value={settings.impactAthletes} 
                      onChange={e => setSettings({...settings, impactAthletes: parseInt(e.target.value)})}
                      className="rounded-none bg-transparent h-16 border-none text-center font-black text-4xl tracking-tighter tabular-nums focus:ring-0"
                    />
                  </div>
                  <div className="space-y-4 text-center p-8 bg-secondary/5 border border-border group/stat">
                    <Label className="text-[9px] uppercase font-black opacity-40 group-hover/stat:opacity-100 transition-opacity">Scholarships</Label>
                    <Input 
                      type="number"
                      placeholder="e.g. 120"
                      value={settings.impactScholarships} 
                      onChange={e => setSettings({...settings, impactScholarships: parseInt(e.target.value)})}
                      className="rounded-none bg-transparent h-16 border-none text-center font-black text-4xl tracking-tighter tabular-nums focus:ring-0"
                    />
                  </div>
                  <div className="space-y-4 text-center p-8 bg-secondary/5 border border-border group/stat">
                    <Label className="text-[9px] uppercase font-black opacity-40 group-hover/stat:opacity-100 transition-opacity">Communities</Label>
                    <Input 
                      type="number"
                      placeholder="e.g. 50"
                      value={settings.impactCommunities} 
                      onChange={e => setSettings({...settings, impactCommunities: parseInt(e.target.value)})}
                      className="rounded-none bg-transparent h-16 border-none text-center font-black text-4xl tracking-tighter tabular-nums focus:ring-0"
                    />
                  </div>
                  <div className="space-y-4 text-center p-8 bg-secondary/5 border border-border group/stat">
                    <Label className="text-[9px] uppercase font-black opacity-40 group-hover/stat:opacity-100 transition-opacity">Sports Teams</Label>
                    <Input 
                      type="number"
                      placeholder="e.g. 25"
                      value={settings.impactTeams} 
                      onChange={e => setSettings({...settings, impactTeams: parseInt(e.target.value)})}
                      className="rounded-none bg-transparent h-16 border-none text-center font-black text-4xl tracking-tighter tabular-nums focus:ring-0"
                    />
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Financial Panel */}
          <TabsContent value="financial" className="mt-0 space-y-12">
            <section className="soft-card p-10 border border-border bg-card relative overflow-hidden group mb-12">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center">
                      <Landmark className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest">Inflow <span className="text-primary">Metadata</span></h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Bank Entity</Label>
                    <Input 
                      placeholder="e.g. United Bank for Africa (UBA)"
                      value={settings.bankName} 
                      onChange={e => setSettings({...settings, bankName: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Account Number</Label>
                    <Input 
                      placeholder="10-digit Nigerian bank account"
                      value={settings.accountNumber} 
                      onChange={e => setSettings({...settings, accountNumber: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border font-black tracking-widest"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Beneficiary Name</Label>
                    <Input 
                      placeholder="Exact Name on Bank Account"
                      value={settings.accountName} 
                      onChange={e => setSettings({...settings, accountName: e.target.value})}
                      className="rounded-none bg-secondary/10 h-12 border-border"
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="soft-card p-10 border border-primary/20 bg-primary/5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 group-hover:bg-primary transition-colors" />
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-none bg-primary/20 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest">Settlement <span className="text-primary">Protocol</span></h3>
                </div>
                <p className="text-[11px] text-muted-foreground font-medium max-w-2xl leading-relaxed uppercase tracking-wide">Enter the target account for automated Flutterwave payouts. Accuracy is mandatory for fiscal logistics.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Bank Code (Sort Code)</Label>
                    <Input 
                      placeholder="e.g. 044"
                      value={settings.settlementBankCode || ''} 
                      onChange={e => setSettings({...settings, settlementBankCode: e.target.value})}
                      className="rounded-none bg-background h-12 border-border font-black"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Settlement Target Account</Label>
                    <Input 
                      placeholder="10-digit account number"
                      value={settings.settlementAccountNumber || ''} 
                      onChange={e => setSettings({...settings, settlementAccountNumber: e.target.value})}
                      className="rounded-none bg-background h-12 border-border font-black tracking-widest"
                    />
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Vault Panel */}
          <TabsContent value="vault" className="mt-0 space-y-12">
            <section className="soft-card p-12 border border-border bg-foreground/[0.02] relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-none bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="text-xl font-black uppercase tracking-widest">Secure <span className="text-primary">Vault</span></h3>
                </div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                   <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" /> Decryption credentials active
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Flutterwave Secret Key</Label>
                    <Input 
                      type="password"
                      autoComplete="off"
                      placeholder="FLWSECK_TEST-..."
                      value={settings.flwSecretKey || ''} 
                      onChange={e => setSettings({...settings, flwSecretKey: e.target.value})}
                      className="rounded-none bg-background h-14 border-border focus:border-primary font-mono tracking-widest"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Resend API Key</Label>
                    <Input 
                      type="password"
                      autoComplete="off"
                      placeholder="re_..."
                      value={settings.resendApiKey || ''} 
                      onChange={e => setSettings({...settings, resendApiKey: e.target.value})}
                      className="rounded-none bg-background h-14 border-border focus:border-primary font-mono tracking-widest"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Admin Telemetry Recipient</Label>
                    <Input 
                      placeholder="Where to send automated reports"
                      value={settings.adminReportEmail || ''} 
                      onChange={e => setSettings({...settings, adminReportEmail: e.target.value})}
                      className="rounded-none bg-background h-14 border-border"
                    />
                  </div>
                  <div className="hidden md:block" />
                  
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Cloudinary Cloud Name</Label>
                    <Input 
                      placeholder="e.g. dlyu92juc"
                      value={settings.cloudinaryCloudName || ''} 
                      onChange={e => setSettings({...settings, cloudinaryCloudName: e.target.value})}
                      className="rounded-none bg-background h-14 border-border"
                    />
                  </div>
                  <div className="space-y-4">
                    <Label className="text-[10px] uppercase font-black opacity-60">Upload Preset ID</Label>
                    <Input 
                      placeholder="e.g. msabee"
                      value={settings.cloudinaryUploadPreset || ''} 
                      onChange={e => setSettings({...settings, cloudinaryUploadPreset: e.target.value})}
                      className="rounded-none bg-background h-14 border-border font-mono tracking-widest"
                    />
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>

        <div className="pt-20 flex justify-end">
          <Button 
            type="submit" 
            disabled={saving}
            className="h-20 px-24 rounded-none font-black uppercase tracking-[0.3em] bg-primary text-primary-foreground shadow-2xl hover:scale-105 transition-all text-xs"
          >
            <Save className="w-5 h-5 mr-4" /> {saving ? 'SYNCING...' : 'PUBLISH OVERRIDES'}
          </Button>
        </div>
      </form>
    </div>
  );
}
