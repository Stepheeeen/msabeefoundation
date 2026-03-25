'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ImpactPage() {
  const events = [
    {
      title: 'September 2025 Lokoja Clinic',
      subtitle: 'Record-Breaking Success',
      highlights: '100+ youth trained across 3 days',
      date: 'September 2025',
      location: 'Federal University Lokoja',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      title: 'Scholarship Awards',
      subtitle: 'Educational Impact',
      highlights: 'Multiple students sponsored for school fees',
      date: 'Ongoing',
      location: 'Kogi State',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      title: 'Community Outreach',
      subtitle: 'Spreading the Movement',
      highlights: 'Basketball clinics and educational awareness programs',
      date: 'Throughout 2025',
      location: 'Lokoja & Surrounding Areas',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Recent Impact & News
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                See the transformation happening in Kogi State through our programs
              </p>
            </div>

            {/* Event Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {events.map((event, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-40 ${event.image}`} />
                  <div className="p-6">
                    <Badge className="bg-slate-900 text-white mb-3">{event.date}</Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{event.title}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{event.subtitle}</p>
                    <p className="text-gray-600 mb-4">{event.highlights}</p>
                    <p className="text-sm text-gray-500">📍 {event.location}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* News Feed Style Section */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Latest Updates</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6 pb-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">September 2025 Clinic Recap: 100+ Youth Trained</h4>
                  <p className="text-gray-700 mb-3">
                    The MSA BEE Foundation successfully hosted its largest basketball clinic to date at Federal University Lokoja. Over 100 young athletes from across Kogi State participated in three days of intensive training, skill development, and mentorship.
                  </p>
                  <p className="text-sm text-gray-600">Key achievements: Elite coaching delivery, talent identification for potential sponsorships, provision of training gear, and direct impact on youth wellness.</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-6 pb-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Educational Sponsorship Program Expands</h4>
                  <p className="text-gray-700 mb-3">
                    Building on the success of our basketball clinics, the MSA BEE Foundation has expanded its Educational Sponsorship Program to support talented students who cannot afford school fees.
                  </p>
                  <p className="text-sm text-gray-600">This dual focus ensures young people develop both athletically and academically, creating well-rounded champions for their communities.</p>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Community Impact: Reducing Social Vices</h4>
                  <p className="text-gray-700 mb-3">
                    Through structured athletic and educational opportunities, the foundation is actively working to reduce youth involvement in drugs, cultism, and other harmful behaviors.
                  </p>
                  <p className="text-sm text-gray-600">Our comprehensive approach provides positive role models, mentorship, and life-changing opportunities for vulnerable youth in Kogi State.</p>
                </div>
              </div>
            </div>

            {/* Statistics Banner */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
                <div className="text-sm font-semibold text-gray-700">Youth Trained</div>
                <div className="text-xs text-gray-600">In 2025</div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">∞</div>
                <div className="text-sm font-semibold text-gray-700">Lives Changed</div>
                <div className="text-xs text-gray-600">Our Mission</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center border border-green-200">
                <div className="text-3xl font-bold text-green-600 mb-1">3</div>
                <div className="text-sm font-semibold text-gray-700">Days Training</div>
                <div className="text-xs text-gray-600">Per Clinic</div>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-6 text-center border border-slate-200">
                <div className="text-3xl font-bold text-slate-600 mb-1">24/7</div>
                <div className="text-sm font-semibold text-gray-700">Commitment</div>
                <div className="text-xs text-gray-600">Community Focus</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
