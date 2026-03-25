'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function Programs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transforming lives through coordinated athletic and educational initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-slate-900 text-lg">Program Details</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>Duration:</strong> 3-day intensive clinic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>Location:</strong> Federal University Lokoja (FUL)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>Age Range:</strong> 8–18 years old</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>2025 Impact:</strong> 100+ young athletes trained</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h5 className="font-semibold text-slate-900 mb-3">What We Offer</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Professional coaching from experienced basketball trainers</li>
                  <li>✓ Training gear and equipment provided</li>
                  <li>✓ Talent scouting for exceptional performers</li>
                  <li>✓ Mentorship and guidance for aspiring athletes</li>
                  <li>✓ Wellness and physical education emphasis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Educational Sponsorship */}
          <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b-2 border-blue-200">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-slate-900">Educational Sponsorship Program</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">Unlocking Academic Potential</p>
                </div>
                <Badge className="bg-blue-500 text-white">Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-slate-900 text-lg">Program Details</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>Target Group:</strong> Talented underprivileged students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>Coverage:</strong> School fees and educational materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>Requirement:</strong> Commitment to both sports and academics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>Mentorship:</strong> Ongoing academic and personal guidance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h5 className="font-semibold text-slate-900 mb-3">Sponsorship Benefits</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Full or partial school fee coverage</li>
                  <li>✓ Educational materials and resources</li>
                  <li>✓ Basketball training participation</li>
                  <li>✓ Mentorship from foundation staff</li>
                  <li>✓ Pathways to higher education opportunities</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Focus */}
        <Card className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 border-0">
          <CardContent className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Combating Social Challenges</h3>
            <p className="mb-4 text-gray-200">
              By providing structured athletic and educational opportunities, the MSA BEE Foundation actively addresses critical social issues affecting youth in Kogi State:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <div className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">Reducing Drug Abuse</h4>
                  <p className="text-gray-300 text-sm">Channeling youth energy into sports and wellness</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">Preventing Cultism</h4>
                  <p className="text-gray-300 text-sm">Building positive community and brotherhood through sports</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-orange-400 font-bold text-xl">→</span>
                <div>
                  <h4 className="font-semibold mb-1">Promoting Education</h4>
                  <p className="text-gray-300 text-sm">Ensuring financial barriers don't prevent academic success</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
