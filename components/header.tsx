'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-orange-600">MSA BEE</div>
          <div className="text-xs text-gray-600">Foundation</div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
            About
          </Link>
          <Link href="/programs" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
            Programs
          </Link>
          <Link href="/impact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
            Impact
          </Link>
          <Link href="/donate" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
            Support
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="/donate" className="hidden md:block">
          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2">
            Donate Now
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4">
          <div className="flex flex-col gap-4">
            <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium">
              About
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-orange-600 font-medium">
              Programs
            </Link>
            <Link href="/impact" className="text-gray-700 hover:text-orange-600 font-medium">
              Impact
            </Link>
            <Link href="/donate" className="text-gray-700 hover:text-orange-600 font-medium">
              Support
            </Link>
            <Link href="/donate">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
