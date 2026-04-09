import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="relative mb-12">
        <h1 className="text-[12rem] md:text-[20rem] font-black text-slate-100 dark:text-slate-900 leading-none select-none">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
             Page Lost in <span className="text-orange-500 text-gradient">Transition</span>
           </div>
        </div>
      </div>
      
      <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md mb-12 leading-relaxed font-medium">
        The page you are looking for might have been moved, renamed, or is temporarily unavailable. Let's get you back on track.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link href="/">
          <Button size="xl" className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-8 text-lg font-bold uppercase tracking-widest rounded-2xl shadow-2xl shadow-orange-500/20 group transition-all hover:scale-105 active:scale-95">
             <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
             Return Home
          </Button>
        </Link>
        <Link href="/about">
          <Button size="xl" variant="outline" className="border-slate-200 dark:border-white/10 px-10 py-8 text-lg font-bold uppercase tracking-widest rounded-2xl hover:bg-slate-50 dark:hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
             <ArrowLeft className="w-5 h-5 mr-3" />
             Our Story
          </Button>
        </Link>
      </div>
    </div>
  );
}
