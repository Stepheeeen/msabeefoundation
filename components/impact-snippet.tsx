'use client';

import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ImpactSnippet() {
  const events = [
    {
      title: 'September 2025 Lokoja Clinic',
      subtitle: 'Record-Breaking Success',
      highlights: '100+ youth trained across 3 days',
      date: 'September 2025',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      title: 'Scholarship Awards',
      subtitle: 'Educational Impact',
      highlights: 'Multiple students sponsored for school fees',
      date: 'Ongoing',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      title: 'Community Outreach',
      subtitle: 'Spreading the Movement',
      highlights: 'Basketball clinics and educational awareness',
      date: 'Throughout 2025',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Recent Impact & News
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See the transformation happening in Kogi State through our programs
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {events.map((event, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-40 ${event.image}`} />
              <div className="p-6">
                <Badge className="bg-slate-900 text-white mb-3">{event.date}</Badge>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{event.title}</h3>
                <p className="text-orange-600 font-semibold mb-2 text-sm">{event.subtitle}</p>
                <p className="text-gray-600 text-sm">{event.highlights}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center border border-orange-200">
            <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
            <div className="text-xs font-semibold text-gray-700">Youth Trained</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center border border-blue-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">∞</div>
            <div className="text-xs font-semibold text-gray-700">Lives Changed</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center border border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-1">3</div>
            <div className="text-xs font-semibold text-gray-700">Days Training</div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg p-4 text-center border border-slate-200">
            <div className="text-2xl font-bold text-slate-600 mb-1">24/7</div>
            <div className="text-xs font-semibold text-gray-700">Commitment</div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/impact">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              View Full Impact
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
