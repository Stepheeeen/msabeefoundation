'use client';

import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ImagePlus, Trash, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

interface CloudinaryAsset {
  url: string;
  publicId: string;
  uploading?: boolean;
  error?: boolean;
}

interface CloudinaryUploadProps {
  values: CloudinaryAsset[];
  onChange: (assets: CloudinaryAsset[] | ((prev: CloudinaryAsset[]) => CloudinaryAsset[])) => void;
  onRemove: (publicId: string) => void;
  uploadPreset?: string;
  cloudName?: string;
}

export function CloudinaryUpload({
  values,
  onChange,
  onRemove,
  uploadPreset,
  cloudName,
}: CloudinaryUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onUpload = async (files: FileList | null) => {
    if (!files) return;
    if (!cloudName || !uploadPreset) {
      toast.error('Cloudinary configuration missing in Content Studio');
      return;
    }

    const newAssets = Array.from(files).map(file => ({
      url: URL.createObjectURL(file), // Local preview
      publicId: `local-${Math.random().toString(36).substr(2, 9)}`,
      uploading: true,
      file // Keep file for upload
    }));

    // Local update for instant preview
    const updatedValues = [...values, ...newAssets.map(({url, publicId, uploading}) => ({url, publicId, uploading}))];
    onChange(updatedValues);

    // Background upload for each file
    newAssets.forEach(async (asset) => {
      const formData = new FormData();
      formData.append('file', asset.file);
      formData.append('upload_preset', uploadPreset);

      try {
        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          { method: 'POST', body: formData }
        );

        if (!response.ok) throw new Error('Upload failed');
        
        const data = await response.json();
        
        // Finalize asset in parent state
        onChange(prev => {
          return prev.map(v => v.publicId === asset.publicId ? {
            url: data.secure_url,
            publicId: data.public_id,
            uploading: false
          } : v);
        });
      } catch (error) {
        toast.error('Logistics error during upload');
        onChange(prev => {
          return prev.map(v => v.publicId === asset.publicId ? {
            ...v,
            uploading: false,
            error: true
          } : v);
        });
      }
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    onUpload(e.dataTransfer.files);
  };

  return (
    <div className="space-y-10 group">
      {/* Premium Preview Matrix */}
      {values.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {values.map((asset) => (
            <div 
              key={asset.publicId} 
              className="relative aspect-square border-2 border-border/40 group/asset overflow-hidden bg-secondary/5 transition-all hover:border-gold/50"
            >
              <Image
                fill
                className={`object-cover transition-all duration-700 ${asset.uploading ? 'grayscale blur-sm' : 'group-hover/asset:scale-105'}`}
                alt="ARCHIVE PREVIEW"
                src={asset.url}
              />
              
              {/* Overlay States */}
              {asset.uploading && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px]">
                   <Loader2 className="w-5 h-5 text-primary animate-spin mb-2" />
                   <span className="text-[8px] font-black uppercase tracking-widest text-primary/60">Syncing...</span>
                </div>
              )}
              
              {asset.error && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-red-500/10 backdrop-blur-[2px]">
                   <AlertCircle className="w-5 h-5 text-red-500 mb-2" />
                   <span className="text-[8px] font-black uppercase tracking-widest text-red-500">Failed</span>
                </div>
              )}

              <div className="absolute inset-0 z-20 bg-black/60 opacity-0 group-hover/asset:opacity-100 transition-all flex items-center justify-center gap-3">
                <Button 
                  type="button" 
                  onClick={() => onRemove(asset.publicId)} 
                  variant="destructive" 
                  size="icon"
                  className="h-9 w-9 rounded-none bg-red-600 hover:bg-black transition-colors shadow-2xl"
                >
                  <Trash className="h-4 w-4" />
                </Button>
                {!asset.uploading && !asset.error && (
                  <div className="h-9 w-9 flex items-center justify-center bg-primary text-primary-foreground">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Premium Architectural Dropzone */}
      <div
        onDragOver={onUpload ? onDragOver : undefined}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`
          relative cursor-pointer transition-all duration-500 overflow-hidden
          border-4 border-dashed h-48 flex flex-col items-center justify-center gap-6
          ${isDragging ? 'border-gold bg-gold/5 scale-[0.99]' : 'border-border/60 bg-secondary/10 hover:border-primary/40 hover:bg-secondary/20'}
        `}
      >
        {/* Architectural Grid Background Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        
        <input 
          type="file" 
          multiple 
          accept="image/*"
          className="hidden" 
          ref={fileInputRef}
          onChange={(e) => onUpload(e.target.files)}
        />

        <div className="relative z-10 flex flex-col items-center gap-4">
           <div className={`p-4 rounded-none border-2 transition-all duration-500 ${isDragging ? 'bg-gold border-gold text-white scale-110' : 'bg-primary/10 border-primary/20 text-primary group-hover:bg-primary group-hover:text-white'}`}>
              <ImagePlus className="w-6 h-6" />
           </div>
           <div className="text-center space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-1">Engage Archive Engine</p>
              <p className="text-[9px] text-muted-foreground font-bold uppercase opacity-60">Drag assets to portal or click to browse</p>
           </div>
        </div>

        {/* Decorative Corner Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-primary/20" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-primary/20" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-primary/20" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-primary/20" />
      </div>
    </div>
  );
}
