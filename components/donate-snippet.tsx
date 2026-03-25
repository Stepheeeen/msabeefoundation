'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function DonateSnippet() {
  const donationLevels = [
    {
      amount: '₦5,000',
      title: 'Friend',
      description: 'Provides training gear for one youth',
      color: 'from-orange-50 to-orange-100',
      border: 'border-orange-200',
    },
    {
      amount: '₦10,000',
      title: 'Champion',
      description: 'Contributes to month of program operations',
      color: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      featured: true,
    },
    {
      amount: '₦50,000',
      title: 'Leader',
      description: "Sponsors one student's school fees for a term",
      color: 'from-green-50 to-green-100',
      border: 'border-green-200',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your donation directly transforms lives. Choose your impact level.
          </p>
        </div>

        {/* How Funds Are Used */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Basketball Training</h3>
              <p className="text-gray-700 text-sm mb-3">Elite coaching and equipment</p>
              <div className="text-3xl font-bold text-orange-600">40%</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Educational Sponsorship</h3>
              <p className="text-gray-700 text-sm mb-3">School fees & materials</p>
              <div className="text-3xl font-bold text-blue-600">45%</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Operations & Outreach</h3>
              <p className="text-gray-700 text-sm mb-3">Administration & community</p>
              <div className="text-3xl font-bold text-green-600">15%</div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Levels */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {donationLevels.map((level, idx) => (
              <Card
                key={idx}
                className={`border-2 ${level.border} ${level.featured ? 'ring-2 ring-orange-500 lg:scale-105' : ''}`}
              >
                <div className={`bg-gradient-to-r ${level.color} px-6 py-6 border-b-2 ${level.border}`}>
                  <div className="text-3xl font-bold text-slate-900">{level.amount}</div>
                  <div className="text-base font-semibold text-gray-700 mt-1">{level.title}</div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-sm mb-4">{level.description}</p>
                  <Link href="/donate">
                    <Button
                      className={`w-full ${level.featured ? 'bg-orange-500 hover:bg-orange-600' : 'bg-slate-900 hover:bg-slate-800'} text-white text-sm`}
                    >
                      Donate {level.amount}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/donate">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
              View All Giving Options
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
