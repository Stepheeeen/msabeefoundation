'use client';

import Link from 'next/link';
import { Mail, Globe, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-3xl font-heading font-black mb-6 tracking-tighter">
              MSA <span className="text-orange-500">BEE</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Cultivating a society that values holistic development, encompassing physical, social, cognitive, and emotional growth.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-orange-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Foundation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="#about" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="#objectives" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Objectives
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Strategies
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-slate-400 hover:text-orange-500 transition-colors">
                  Recent Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Impact Areas */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Focus Areas</h4>
            <ul className="space-y-4 text-sm">
              <li className="text-slate-400">Holistic Development</li>
              <li className="text-slate-400">Education & Health</li>
              <li className="text-slate-400">Talent Nurturing</li>
              <li className="text-slate-400">Community Engagement</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-6 text-white text-lg">Get in Touch</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:info@msabeefoundation.com" className="text-slate-400 hover:text-white transition-colors">
                  info@msabeefoundation.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <Globe className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="https://www.msabeefoundation.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  www.msabeefoundation.com
                </a>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-slate-400 leading-relaxed">
                  122 IBB Way Lokoja,<br />Kogi State, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MSA BEE Foundation. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-medium uppercase tracking-widest text-slate-600">
            <Link href="#" className="hover:text-orange-500 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

