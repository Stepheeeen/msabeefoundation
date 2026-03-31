'use client';

import Link from 'next/link';
import { Mail, Globe, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="group inline-block">
              <h3 className="text-4xl font-heading font-black tracking-tighter">
                MSA <span className="text-orange-500">BEE</span>
              </h3>
              <div className="text-[10px] uppercase tracking-[0.4em] text-slate-500 font-black mt-1">Foundation</div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              Cultivating a society that values holistic development, encompassing physical, social, cognitive, and emotional growth.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all duration-500 border border-white/5 hover:border-orange-500/20">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-10">Foundation</h4>
            <ul className="space-y-6 text-sm">
              {[
                { name: 'Our Story', href: '/about' },
                { name: 'Impact Report', href: '/impact' },
                { name: 'Programs', href: '/programs' },
                { name: 'Support Us', href: '/donate' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-white transition-colors duration-300 font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Areas */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-10">Strategic Pillars</h4>
            <ul className="space-y-6 text-sm">
              <li className="text-slate-400 font-medium">Holistic Development</li>
              <li className="text-slate-400 font-medium">Education & Health</li>
              <li className="text-slate-400 font-medium">Talent Nurturing</li>
              <li className="text-slate-400 font-medium">Community Engagement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-10">Get in Touch</h4>
            <ul className="space-y-8 text-sm">
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-slate-600 block mb-1">Email</label>
                  <a href="mailto:info@msabeefoundation.com" className="text-slate-400 hover:text-white transition-colors font-medium">
                    info@msabeefoundation.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-slate-600 block mb-1">Headquarters</label>
                  <span className="text-slate-400 leading-relaxed font-medium">
                    122 IBB Way Lokoja, Kogi State
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-600 text-xs font-medium tracking-wide">
            © {new Date().getFullYear()} MSA BEE FOUNDATION. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-slate-700">
            <Link href="#" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


