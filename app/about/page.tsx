'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 text-balance">
                  About the MSA BEE Foundation
                </h1>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  The MSA BEE Foundation—Michael Sumaila Audu's Basketball and Educational Excellence Foundation—is dedicated to transforming the lives of underprivileged children in Kogi State, Nigeria.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Founded by UK-based professional basketballer Michael Sumaila Audu, our organization combines elite basketball training with comprehensive educational sponsorship. We believe that every child deserves access to quality sports training and education, regardless of their economic background.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By channeling youth energy into sports, wellness, and academic achievement, we actively combat social vices such as drug abuse and cultism while developing the next generation of champions—both on the court and in the classroom.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                    <div className="text-gray-700 font-semibold">Youth Trained</div>
                    <div className="text-sm text-gray-600">In September 2025 Clinic</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">3</div>
                    <div className="text-gray-700 font-semibold">Days of Training</div>
                    <div className="text-sm text-gray-600">Annual Clinic at FUL</div>
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
                    <div className="text-sm text-gray-600">Life-Changing Opportunities</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-20 grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl mb-4">🏀</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Athletic Excellence</h3>
                <p className="text-gray-700">Elite basketball training led by experienced coaches, developing technical skills, teamwork, and championship mentality.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Educational Empowerment</h3>
                <p className="text-gray-700">Direct financial support for school fees and educational resources, ensuring no child is left behind due to poverty.</p>
              </div>
              <div>
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Community Growth</h3>
                <p className="text-gray-700">Building resilient youth who can positively impact their communities and become role models for positive change.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
