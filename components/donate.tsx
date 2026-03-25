'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function Donate() {
  const donationLevels = [
    {
      amount: '₦5,000',
      title: 'Friend',
      description: 'Provides training gear for one youth',
      benefits: ['Training equipment support', 'Email updates on impact'],
      color: 'from-orange-50 to-orange-100',
      border: 'border-orange-200',
    },
    {
      amount: '₦10,000',
      title: 'Champion',
      description: 'Contributes to month of program operations',
      benefits: ['Priority impact reports', 'Named recognition', 'Annual impact report'],
      color: 'from-blue-50 to-blue-100',
      border: 'border-blue-200',
      featured: true,
    },
    {
      amount: '₦50,000',
      title: 'Leader',
      description: "Sponsors one student's school fees for a term",
      benefits: ['Personalized student updates', 'Special recognition', 'Quarterly reports', 'Tax receipt'],
      color: 'from-green-50 to-green-100',
      border: 'border-green-200',
    },
  ];

  return (
    <section id="donate" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Support Our Mission
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Your donation directly transforms lives. See exactly where your contribution goes.
          </p>
        </div>

        {/* How Funds Are Used */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">🏀</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Basketball Training</h3>
              <p className="text-gray-700 mb-3">Elite coaching, equipment, training materials, and clinic operations</p>
              <div className="text-3xl font-bold text-orange-600">40%</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Educational Sponsorship</h3>
              <p className="text-gray-700 mb-3">School fees, books, uniforms, and educational materials</p>
              <div className="text-3xl font-bold text-blue-600">45%</div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Operations & Outreach</h3>
              <p className="text-gray-700 mb-3">Administration, logistics, community engagement, and expansion</p>
              <div className="text-3xl font-bold text-green-600">15%</div>
            </CardContent>
          </Card>
        </div>

        {/* Donation Levels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Donation Levels</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {donationLevels.map((level, idx) => (
              <Card
                key={idx}
                className={`border-2 ${level.border} ${level.featured ? 'ring-2 ring-orange-500 lg:scale-105' : ''}`}
              >
                <div className={`bg-gradient-to-r ${level.color} px-6 py-8 border-b-2 ${level.border}`}>
                  <div className="text-4xl font-bold text-slate-900">{level.amount}</div>
                  <div className="text-lg font-semibold text-gray-700 mt-1">{level.title}</div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6">{level.description}</p>
                  <ul className="space-y-2 mb-6">
                    {level.benefits.map((benefit, bidx) => (
                      <li key={bidx} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-orange-500 font-bold mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${level.featured ? 'bg-orange-500 hover:bg-orange-600' : 'bg-slate-900 hover:bg-slate-800'} text-white`}
                  >
                    Donate {level.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Custom Donation */}
        <Card className="bg-white border-2 border-orange-200 mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Make a Custom Donation</h3>
            <p className="text-gray-700 mb-6">
              No amount is too small. Every contribution helps us reach more youth and change more lives.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Donate Any Amount
            </Button>
          </CardContent>
        </Card>

        {/* Contact & Banking Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold text-slate-900">Email</div>
                  <a href="mailto:info@msabeefoundation.com" className="text-orange-600 hover:underline">
                    info@msabeefoundation.com
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Location</div>
                  <p className="text-gray-700">Lokoja, Kogi State, Nigeria</p>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Organization</div>
                  <p className="text-gray-700">MSA BEE Foundation</p>
                  <p className="text-gray-700">Michael Sumaila Audu's Basketball and Educational Excellence Foundation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-slate-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Transparency & Accountability</h3>
              <p className="text-gray-700 mb-4">
                We are committed to transparent fund management and regular impact reporting. Every donation is tracked and reported to ensure maximum impact.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Quarterly impact reports for donors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Verified fund allocation and usage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Tax receipts for all donations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>Direct communication with stakeholders</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
