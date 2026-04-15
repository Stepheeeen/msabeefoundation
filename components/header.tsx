'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Impact', href: '/impact' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-xl font-bold tracking-tight text-foreground">
            MSA <span className="text-primary font-black ml-1">BEE</span>
          </div>
          <div className="hidden sm:block text-[8px] uppercase tracking-[0.5em] font-medium text-muted-foreground opacity-60">
            Foundation
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground/70 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-1 text-foreground/60 hover:text-primary transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>
          <Link href="/donate">
            <Button variant="outline" className="rounded-lg px-6 h-10 text-[10px] font-bold uppercase tracking-widest border-border hover:bg-primary hover:text-primary-foreground transition-all">
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-foreground/60"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Modern Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-8"
          >
            <div className="max-w-3xl w-full relative">
              <input
                type="text"
                autoFocus
                placeholder="Find programs, stories..."
                className="w-full text-4xl md:text-6xl font-light bg-transparent border-none focus:ring-0 outline-none text-foreground text-center pb-8 border-b border-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="absolute -top-32 right-0 p-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background border-b border-border transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen border-t border-border' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col p-12 gap-8 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-2xl font-light text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" className="pt-4" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full rounded-lg h-14 text-sm font-bold uppercase tracking-widest bg-primary text-primary-foreground">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </header>

  );
}
