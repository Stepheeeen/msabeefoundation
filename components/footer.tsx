'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 text-orange-500">MSA BEE</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Building Champions on the Court and in the Classroom
            </p>
            <p className="text-gray-400 text-xs mt-4">
              Michael Sumaila Audu's Basketball and Educational Excellence Foundation
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-gray-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#impact" className="text-gray-300 hover:text-white transition-colors">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-gray-300 hover:text-white transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="text-gray-300">Basketball Clinic</p>
              </li>
              <li>
                <p className="text-gray-300">Educational Sponsorship</p>
              </li>
              <li>
                <p className="text-gray-300">Youth Mentorship</p>
              </li>
              <li>
                <p className="text-gray-300">Community Outreach</p>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-orange-500">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <p className="text-gray-300">
                  <strong>Email:</strong>
                  <br />
                  <a href="mailto:info@msabeefoundation.com" className="text-orange-400 hover:text-orange-300">
                    info@msabeefoundation.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-gray-300">
                  <strong>Location:</strong>
                  <br />
                  Lokoja, Kogi State, Nigeria
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Mission Statement */}
            <div className="text-sm text-gray-300">
              <p className="text-xs text-gray-400 mb-2">OUR MISSION</p>
              <p>
                To empower underprivileged youth in Kogi State through elite basketball training and educational excellence, transforming lives and building champions.
              </p>
            </div>

            {/* Bottom Links */}
            <div className="flex justify-end gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} MSA BEE Foundation. All rights reserved. | Built with purpose for positive change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
