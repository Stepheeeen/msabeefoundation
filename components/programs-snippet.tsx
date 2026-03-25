'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ProgramsSnippet() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Transforming lives through coordinated athletic and educational initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Basketball Clinic */}
          <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-orange-100 border-b-2 border-orange-200">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-slate-900">Lokoja Basketball Clinic</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">Annual Elite Training Event</p>
                </div>
                <Badge className="bg-orange-500 text-white">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-3 mb-6">
                <p className="text-gray-700"><strong>Duration:</strong> 3-day intensive clinic</p>
                <p className="text-gray-700"><strong>Location:</strong> Federal University Lokoja</p>
                <p className="text-gray-700"><strong>Age Range:</strong> 8–18 years old</p>
                <p className="text-gray-700"><strong>2025 Impact:</strong> 100+ young athletes trained</p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-slate-900 mb-2 text-sm">What We Offer</h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>✓ Professional coaching</li>
                  <li>✓ Equipment provided</li>
                  <li>✓ Talent scouting</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Educational Sponsorship */}
          <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-200">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-slate-900">Educational Sponsorship</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">Unlocking Academic Potential</p>
                </div>
                <Badge className="bg-blue-500 text-white">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-3 mb-6">
                <p className="text-gray-700"><strong>Target:</strong> Talented underprivileged students</p>
                <p className="text-gray-700"><strong>Coverage:</strong> School fees & materials</p>
                <p className="text-gray-700"><strong>Requirement:</strong> Sports & academic commitment</p>
                <p className="text-gray-700"><strong>Support:</strong> Ongoing mentorship</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-slate-900 mb-2 text-sm">Sponsorship Benefits</h5>
                <ul className="space-y-1 text-xs text-gray-700">
                  <li>✓ School fee coverage</li>
                  <li>✓ Educational materials</li>
                  <li>✓ Basketball training</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/programs">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
