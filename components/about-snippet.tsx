'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function AboutSnippet() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance">
              About the MSA BEE Foundation
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              The MSA BEE Foundation—Michael Sumaila Audu's Basketball and Educational Excellence Foundation—is dedicated to transforming the lives of underprivileged children in Kogi State, Nigeria.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Founded by UK-based professional basketballer Michael Sumaila Audu, our organization combines elite basketball training with comprehensive educational sponsorship.
            </p>
            <Link href="/about">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Read Full Story
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                <div className="text-gray-700 font-semibold">Youth Trained</div>
                <div className="text-sm text-gray-600">In 2025</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-gray-700 font-semibold">Core Programs</div>
                <div className="text-sm text-gray-600">Basketball & Education</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-50 to-slate-100 border-slate-200">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-slate-600 mb-2">8-18</div>
                <div className="text-gray-700 font-semibold">Age Range</div>
                <div className="text-sm text-gray-600">Our Target Audience</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">∞</div>
                <div className="text-gray-700 font-semibold">Impact</div>
                <div className="text-sm text-gray-600">Life-Changing</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
