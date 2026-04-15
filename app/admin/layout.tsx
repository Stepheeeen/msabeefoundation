'use client';

import { useState, useEffect } from 'react';
import { Lock, Settings, Coins, Image as ImageIcon, LogOut, LayoutDashboard, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Check if we have a session cookie on mount
    // We can't read httpOnly cookies, so we check a non-sensitive flag 
    // or just try to fetch settings to verify auth.
    fetch('/api/admin/settings')
      .then(res => {
        if (res.ok) setIsAuthenticated(true)
      })
      .catch(() => setIsAuthenticated(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        toast.success('Terminal Access Granted');
      } else {
        toast.error(data.message || 'Invalid Protocol Access Code');
      }
    } catch (error) {
      toast.error('Authentication Error');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setIsAuthenticated(false);
    router.push('/admin');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-10 border border-border rounded-md bg-card shadow-2xl"
        >
          <div className="flex justify-center mb-10">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Lock className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-black text-center mb-2 tracking-tighter uppercase">Vault <span className="text-primary">Admin</span></h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold text-center mb-12">Authorized Personnel Only</p>
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <Label htmlFor="password" className="text-[10px] uppercase tracking-widest font-bold">Access Code</Label>
              <Input 
                id="password"
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="rounded-md h-12 bg-secondary/20"
              />
            </div>
            <Button type="submit" className="w-full h-14 rounded-md font-black uppercase tracking-[0.2em] bg-primary shadow-xl hover:scale-105 transition-all">
              Initialize Session
            </Button>
          </form>
        </motion.div>
      </div>
    );
  }

  const navLinks = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Finance', href: '/admin/withdraw', icon: Coins },
    { name: 'Archive', href: '/admin/gallery', icon: ImageIcon },
    { name: 'Studio', href: '/admin/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Luxurious Top Nav (Command Bar) */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link href="/" className="group flex flex-col">
              <div className="text-lg font-black tracking-tighter leading-none">
                MSA <span className="text-primary">BEE</span>
              </div>
              <div className="text-[8px] uppercase tracking-[0.5em] font-black opacity-40">Command Center</div>
            </Link>

            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-[10px] font-black uppercase tracking-widest transition-all ${
                      isActive 
                        ? 'text-primary bg-primary/5' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                       <link.icon className="w-3.5 h-3.5" />
                       {link.name}
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Globe className="w-3.5 h-3.5" />
              Live Site
            </Link>
            <div className="h-4 w-[1px] bg-border mx-2" />
            <button 
              onClick={handleLogout}
              className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground hover:text-destructive transition-colors flex items-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" />
              Terminate
            </button>
          </div>
        </div>
      </header>

      {/* Main Command Center */}
      <main className="max-w-[1400px] mx-auto py-12 px-6 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "circOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      
      {/* Decorative Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </div>
  );
}
