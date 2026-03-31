'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { name: 'Impact', href: '/impact' },
    { name: 'Donate', href: '/donate' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-slate-200 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className={`text-2xl font-heading font-black tracking-tighter transition-colors ${
            isScrolled ? 'text-slate-900' : 'text-white'
          }`}>
            MSA <span className="text-orange-500">BEE</span>
          </div>
          <div className={`text-[10px] uppercase tracking-widest font-bold transition-colors ${
            isScrolled ? 'text-slate-500' : 'text-slate-400'
          }`}>
            Foundation
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`text-sm font-bold uppercase tracking-wider transition-all hover:text-orange-500 ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/donate">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-sm font-bold uppercase tracking-widest rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl bg-orange-600 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-slate-100 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen py-8' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col items-center gap-6 px-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-lg font-bold text-slate-800 hover:text-orange-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/donate" className="w-full pt-4" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 text-lg font-bold rounded-2xl">
              Donate Now
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

