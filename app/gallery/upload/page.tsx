'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CloudinaryUpload } from '@/components/cloudinary-upload';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { Lock, Image as ImageIcon, Youtube, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GalleryUploadPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'msabee_admin') {
      setIsAuthenticated(true);
      toast.success('Authenticated successfully');
    } else {
      toast.error('Invalid password');
    }
  };

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
        body: JSON.stringify({
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Failed to save');

      const result = await response.json();
      toast.success(`Successfully uploaded ${result.count} items`);
      router.push('/gallery');
      router.refresh();
    } catch (error) {
      toast.error('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 border border-border rounded-md bg-card shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-2xl font-black text-center mb-8 tracking-tighter uppercase">Admin Access</h1>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="password">Access Code</Label>
              <Input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="rounded-md"
              />
            </div>
            <Button type="submit" className="w-full rounded-md font-bold uppercase tracking-widest bg-primary">
              Unlock Terminal
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-32 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Batch <span className="text-primary">Archive</span></h1>
            <p className="text-muted-foreground font-medium">Upload multiple assets under shared metadata.</p>
          </div>
          <div className="hidden md:block">
             <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary bg-primary/10 px-4 py-2 rounded-md">
               Multi-Upload Ready
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Media Selection */}
          <div className="soft-card p-10 rounded-md border border-border space-y-8">
            <div className="flex gap-4 p-1 bg-secondary rounded-md w-fit">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'IMAGE', assets: [] })}
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all text-[10px] font-bold uppercase tracking-widest ${formData.type === 'IMAGE' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <ImageIcon className="w-3 h-3" /> Images
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, type: 'VIDEO', assets: [] })}
                className={`flex items-center gap-2 px-6 py-2 rounded-md transition-all text-[10px] font-bold uppercase tracking-widest ${formData.type === 'VIDEO' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Youtube className="w-3 h-3" /> Videos
              </button>
            </div>

            {formData.type === 'IMAGE' ? (
              <CloudinaryUpload 
                values={formData.assets.filter(a => a.type === 'IMAGE') as any}
                onChange={(assets) => setFormData({ ...formData, assets: assets.map(a => ({ ...a, type: 'IMAGE' })) })}
                onRemove={removeImageByPublicId}
              />
            ) : (
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Input 
                    placeholder="https://www.youtube.com/watch?v=..." 
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="rounded-md"
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addVideoUrl())}
                  />
                  <Button type="button" onClick={addVideoUrl} className="font-bold uppercase tracking-widest px-8">Add URL</Button>
                </div>
                
                <div className="space-y-3">
                  {formData.assets.filter(a => a.type === 'VIDEO').map((asset, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-secondary/30 rounded-md border border-border">
                      <span className="text-xs font-medium truncate max-w-[80%]">{asset.url}</span>
                      <Button type="button" variant="ghost" size="sm" onClick={() => removeAsset(idx)} className="text-red-500 hover:text-red-700">Remove</Button>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Add all YouTube links for this event batch.</p>
              </div>
            )}
          </div>

          {/* Metadata Section */}
          <div className="soft-card p-10 rounded-md border border-border space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label htmlFor="title">Event Title</Label>
                <Input 
                  id="title"
                  required
                  placeholder="e.g. 10th Annual Sports Clinic" 
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="rounded-md"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="category">Category</Label>
                <Select 
                  value={formData.category} 
                  onValueChange={(v) => setFormData({ ...formData, category: v })}
                >
                  <SelectTrigger className="rounded-md">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent className="rounded-md">
                    <SelectItem value="Sports Clinics">Sports Clinics</SelectItem>
                    <SelectItem value="Education">Education</SelectItem>
                    <SelectItem value="Community Outreach">Community Outreach</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <Label htmlFor="year">Event Year</Label>
                <Input 
                  id="year"
                  required
                  placeholder="e.g. 2024" 
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                  className="rounded-md"
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location"
                  placeholder="e.g. Abuja, FCT" 
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="description">Batch Description (Optional)</Label>
              <Textarea 
                id="description"
                placeholder="Give context for this group of assets..." 
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="rounded-md min-h-[120px]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-8">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => router.back()}
              className="px-8 rounded-md font-bold uppercase tracking-widest"
            >
              Cancel
            </Button>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-1">Queue Status</div>
                <div className="text-xs font-bold">{formData.assets.length} Assets Loaded</div>
              </div>
              <Button 
                disabled={loading || formData.assets.length === 0}
                type="submit" 
                className="px-12 h-16 rounded-md font-black uppercase tracking-[0.2em] bg-primary hover:scale-105 transition-all shadow-xl"
              >
                <Send className="w-4 h-4 mr-2" /> {loading ? 'Uploading...' : 'Publish Batch'}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
