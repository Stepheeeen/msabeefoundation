'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CloudinaryUpload } from '@/components/cloudinary-upload';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Image as ImageIcon, Youtube, Send, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminGalleryPage() {
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [settings, setSettings] = useState<any>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    type: 'IMAGE' as 'IMAGE' | 'VIDEO',
    assets: [] as { url: string; publicId?: string; type: 'IMAGE' | 'VIDEO' }[],
    title: '',
    description: '',
    category: 'Sports Clinics',
    year: new Date().getFullYear().toString(),
    location: '',
  });

  useEffect(() => {
    // Fetch Cloudinary Settings (unmasked for functional configuration)
    fetch('/api/admin/settings?unmask=true')
      .then(res => res.json())
      .then(data => setSettings(data));
  }, []);

  const addVideoUrl = () => {
    if (!videoUrl) return;
    const newVideo = { url: videoUrl, type: 'VIDEO' as const };
    setFormData(prev => ({
      ...prev,
      assets: [...prev.assets, newVideo]
    }));
    setVideoUrl('');
  };

  const removeAsset = (index: number) => {
    setFormData(prev => ({
      ...prev,
      assets: prev.assets.filter((_, i) => i !== index)
    }));
  };

  const removeImageByPublicId = (publicId: string) => {
    setFormData(prev => ({
      ...prev,
      assets: prev.assets.filter(a => a.publicId !== publicId)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.assets.length === 0) {
      toast.error('Please add at least one image or video');
      return;
    }
    setLoading(true);

    try {
      const response = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      const result = await response.json();
      toast.success(`Successfully archived ${result.count} assets`);
      router.push('/admin');
      router.refresh();
    } catch (error) {
      toast.error('Logistics error during archival');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Archive <span className="text-primary">Batch</span></h1>
          <p className="text-muted-foreground font-medium uppercase tracking-widest text-[10px]">Catalog multiple digital assets under shared telemetry.</p>
        </div>
        <Button 
          variant="outline" 
          onClick={() => router.back()}
          className="h-12 px-6 rounded-none border-border hover:bg-secondary font-bold uppercase tracking-widest text-[10px]"
        >
          <ChevronLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-12">
        {/* Media Selection */}
        <section className="soft-card p-10 rounded-md border border-border space-y-10 group overflow-hidden relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
          
          <div className="flex justify-between items-center">
             <h3 className="text-xl font-black uppercase tracking-widest">Asset <span className="text-primary text-xs ml-2">Source selection</span></h3>
             <div className="flex gap-4 p-1 bg-secondary rounded-none">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'IMAGE', assets: [] })}
                  className={`flex items-center gap-2 px-6 py-2 rounded-none transition-all text-[9px] font-black uppercase tracking-widest ${formData.type === 'IMAGE' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <ImageIcon className="w-3 h-3" /> Images
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, type: 'VIDEO', assets: [] })}
                  className={`flex items-center gap-2 px-6 py-2 rounded-none transition-all text-[9px] font-black uppercase tracking-widest ${formData.type === 'VIDEO' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <Youtube className="w-3 h-3" /> Videos
                </button>
             </div>
          </div>

          {formData.type === 'IMAGE' ? (
            <CloudinaryUpload 
              values={formData.assets.filter(a => a.type === 'IMAGE') as any}
              onChange={(updatedAssets) => {
                if (typeof updatedAssets === 'function') {
                  setFormData(prev => ({
                    ...prev,
                    assets: [
                      ...prev.assets.filter(a => a.type !== 'IMAGE'),
                      ...updatedAssets(prev.assets.filter(a => a.type === 'IMAGE') as any).map((a: any) => ({ ...a, type: 'IMAGE' }))
                    ]
                  }));
                } else {
                  setFormData({
                    ...formData,
                    assets: [
                      ...formData.assets.filter(a => a.type !== 'IMAGE'),
                      ...updatedAssets.map(a => ({ ...a, type: 'IMAGE' }))
                    ]
                  });
                }
              }}
              onRemove={removeImageByPublicId}
              uploadPreset={settings?.cloudinaryUploadPreset}
              cloudName={settings?.cloudinaryCloudName}
            />
          ) : (
            <div className="space-y-6">
              <div className="flex gap-4">
                <Input 
                  placeholder="https://www.youtube.com/watch?v=..." 
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="rounded-none h-14 bg-secondary/20"
                  onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addVideoUrl())}
                />
                <Button type="button" onClick={addVideoUrl} className="font-black uppercase tracking-widest px-10 rounded-none bg-primary text-primary-foreground h-14 text-[10px]">Add URL</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.assets.filter(a => a.type === 'VIDEO').map((asset, idx) => (
                  <div key={idx} className="flex items-center justify-between p-6 bg-card border border-border group hover:border-primary/50 transition-all">
                    <span className="text-[10px] font-bold truncate max-w-[70%]">{asset.url}</span>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeAsset(idx)} className="text-[9px] font-black uppercase tracking-widest text-red-500 hover:text-red-700 hover:bg-red-50">Remove</Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Metadata Section */}
        <section className="soft-card p-10 rounded-md border border-border space-y-12 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
          
          <h3 className="text-xl font-black uppercase tracking-widest">Metadata <span className="text-primary text-xs ml-2">Shared telemetry</span></h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-4">
              <Label htmlFor="title" className="text-[10px] uppercase font-black opacity-60">Event Title</Label>
              <Input 
                id="title"
                required
                placeholder="e.g. 10th Annual MSABEE Sports Clinic" 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="rounded-none h-12 bg-secondary/10"
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="category" className="text-[10px] uppercase font-black opacity-60">Category</Label>
              <Select 
                value={formData.category} 
                onValueChange={(v) => setFormData({ ...formData, category: v })}
              >
                <SelectTrigger className="rounded-none h-12 bg-secondary/10 uppercase text-[10px] font-bold">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  <SelectItem value="Sports Clinics" className="text-[10px] font-bold uppercase">Sports Clinics</SelectItem>
                  <SelectItem value="Education" className="text-[10px] font-bold uppercase">Education</SelectItem>
                  <SelectItem value="Community Outreach" className="text-[10px] font-bold uppercase">Community Outreach</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <Label htmlFor="year" className="text-[10px] uppercase font-black opacity-60">Event Year</Label>
              <Input 
                id="year"
                required
                placeholder="YYYY (e.g. 2025)" 
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="rounded-none h-12 bg-secondary/10 font-black"
              />
            </div>
            <div className="space-y-4">
              <Label htmlFor="location" className="text-[10px] uppercase font-black opacity-60">Location</Label>
              <Input 
                id="location"
                placeholder="Search location (e.g. Lokoja, Kogi)" 
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="rounded-none h-12 bg-secondary/10 uppercase text-[10px] font-bold"
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="description" className="text-[10px] uppercase font-black opacity-60">Context Description</Label>
            <Textarea 
              id="description"
              placeholder="Provide architectural context for this batch. Mention notable achievements or foundation impacts..." 
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="rounded-none min-h-[120px] bg-secondary/10"
            />
          </div>
        </section>

        <div className="flex items-center justify-between pt-12">
          <div className="hidden sm:block">
            <div className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-1">Catalog Status</div>
            <div className="text-xl font-black tracking-tighter tabular-nums">{formData.assets.length} <span className="text-[10px] opacity-40">Ready</span></div>
          </div>
          <Button 
            disabled={loading || formData.assets.length === 0}
            type="submit" 
            className="px-16 h-20 rounded-none font-black uppercase tracking-[0.2em] bg-primary text-primary-foreground hover:scale-[1.02] transition-all shadow-2xl text-xs"
          >
            <Send className="w-4 h-4 mr-3" /> {loading ? 'ARCHIVING...' : 'PUBLISH OVERRIDE'}
          </Button>
        </div>
      </form>
    </div>
  );
}
