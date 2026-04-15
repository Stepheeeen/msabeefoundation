'use client';

import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { ImagePlus, Trash } from 'lucide-react';
import Image from 'next/image';

interface CloudinaryAsset {
  url: string;
  publicId: string;
}

interface CloudinaryUploadProps {
  values: CloudinaryAsset[];
  onChange: (assets: CloudinaryAsset[]) => void;
  onRemove: (publicId: string) => void;
}

export function CloudinaryUpload({
  values,
  onChange,
  onRemove
}: CloudinaryUploadProps) {
  const onUpload = (result: any) => {
    const newAsset = {
      url: result.info.secure_url,
      publicId: result.info.public_id
    };
    onChange([...values, newAsset]);
  };

  return (
    <div>
      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {values.map((asset) => (
          <div key={asset.publicId} className="relative aspect-square rounded-md overflow-hidden border border-border">
            <div className="z-10 absolute top-2 right-2">
              <Button 
                type="button" 
                onClick={() => onRemove(asset.publicId)} 
                variant="destructive" 
                size="icon"
                className="h-8 w-8 rounded-md"
              >
                <Trash className="h-3 w-3" />
              </Button>
            </div>
            <Image
              fill
              className="object-cover"
              alt="Gallery Image"
              src={asset.url}
            />
          </div>
        ))}
      </div>
      <CldUploadWidget 
        onUpload={onUpload} 
        uploadPreset="msabee"
        options={{
          multiple: true,
          maxFiles: 10
        }}
      >
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button
              type="button"
              variant="outline"
              onClick={onClick}
              className="rounded-md border-dashed border-2 h-32 w-full flex flex-col gap-2 bg-secondary/20 hover:bg-secondary/40 transition-all"
            >
              <ImagePlus className="h-6 w-6 text-muted-foreground" />
              <span className="text-[10px] text-muted-foreground uppercase font-black tracking-widest">
                Add Images to Batch
              </span>
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
}
