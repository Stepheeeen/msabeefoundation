'use client';

import Link from 'next/link';
import { Mail, Globe, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-24 px-4 sm:px-6 lg:px-8 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-8">
            <Link href="/" className="group inline-block">
              <h3 className="text-3xl font-black tracking-tighter">
                MSA <span className="text-primary">BEE</span>
              </h3>
              <div className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold mt-1">Foundation</div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-medium">
              Providing educational opportunity through sports. Cultivating a society that values holistic development in Nigeria.
            </p>
            <div className="flex items-center gap-4">
            {[
              { icon: Twitter, href: 'https://twitter.com/msabeefoundation' },
              { icon: Facebook, href: 'https://facebook.com/msabeefoundation' },
              { icon: Instagram, href: 'https://instagram.com/msabeefoundation' },
            ].map((social, i) => (
              <Link 
                key={i} 
                href={social.href} 
                className="w-12 h-12 flex items-center justify-center rounded-md border border-border hover:border-primary/50 transition-all group relative overflow-visible"
              >
                {/* Pop Effect Background */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 2.5, opacity: 0.15 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="absolute inset-0 flex items-center justify-center text-primary pointer-events-none"
                >
                  <social.icon className="w-full h-full stroke-[1] blur-md" />
                </motion.div>

                <motion.div
                  whileHover={{ 
                    rotateX: 20, 
                    rotateY: 20,
                    scale: 1.1
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="text-muted-foreground group-hover:text-primary transition-colors duration-300 relative z-10"
                >
                  <social.icon className="w-5 h-5 stroke-[1.5]" />
                </motion.div>
              </Link>
            ))}
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10">Foundation</h4>
            <ul className="space-y-6 text-[13px] font-medium">
              {[
                { name: 'Our Story', href: '/about' },
                { name: 'Impact Report', href: '/impact' },
                { name: 'Programs', href: '/programs' },
                { name: 'Support Us', href: '/donate' },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact Areas */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10">Strategic Pillars</h4>
            <ul className="space-y-6 text-[13px] font-medium text-muted-foreground">
              <li>Holistic Development</li>
              <li>Education & Health</li>
              <li>Talent Nurturing</li>
              <li>Community Engagement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-10">Get in Touch</h4>
            <ul className="space-y-8 text-[13px] font-medium">
              <li className="flex gap-4 items-start">
                <Mail className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1 font-bold">Email</label>
                  <a href="mailto:info@msabeefoundation.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    info@msabeefoundation.com
                  </a>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <label className="text-[9px] uppercase tracking-widest text-muted-foreground block mb-1 font-bold">Location</label>
                  <span className="text-muted-foreground leading-relaxed">
                    122 IBB Way Lokoja, Kogi State
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-muted-foreground text-[11px] font-bold tracking-wide">
              © {new Date().getFullYear()} MSA BEE FOUNDATION. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-40">
              By <a href="https://stephenonucheyo.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Stephen Onucheyo</a>
            </p>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="/" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



