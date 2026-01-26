import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Plane,
  Heart,
  CarFront,
  Shield,
  BadgeCheck,
  AlertCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'TATA AIG Insurance | MDNetwork',
  description: 'Comprehensive insurance solutions with TATA AIG partnership. Authorized partner in Raipur for travel, health, life, and vehicle insurance.',
};

export default function InsuranceHub() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white py-20 -mx-4 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            TATA AIG Insurance
            <span className="block text-yellow-300 mt-2">Authorized Partner in Raipur</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            Comprehensive insurance solutions for travel, health, life, and vehicle protection.
            Trusted TATA AIG partnership with local support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg">
              <Link href="/insurance/travel/domestic">
                Start with Travel Insurance
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 text-lg">
              <Link href="/insurance/travel/compare">
                Compare All Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insurance Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Travel Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-blue-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center">Travel Insurance</CardTitle>
                <CardDescription className="text-center">
                  Domestic, international, student, senior, and multi-trip coverage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-green-600" />
                    <span>₹99 domestic trips</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span>$100,000+ international</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Senior & student plans</span>
                  </li>
                </ul>
                <Button asChild className="w-full">
                  <Link href="/insurance/travel/domestic">Explore Travel Plans</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Health Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-red-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 group-hover:text-white transition-all">
                  <Heart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center">Health Insurance</CardTitle>
                <CardDescription className="text-center">
                  Family health protection with cashless hospitalization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span>Cashless hospitalization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>No room rent capping</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-green-600" />
                    <span>Pre & post hospitalization</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/insurance/health">View Health Plans</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Life Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-green-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center">Life Insurance</CardTitle>
                <CardDescription className="text-center">
                  Secure your family's financial future with flexible plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span>Term & investment plans</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>Tax benefits under 80C</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-green-600" />
                    <span>Flexible premium options</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/insurance/life">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Vehicle Insurance */}
            <Card className="hover:shadow-xl transition-all duration-300 group border-2 hover:border-purple-500">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                  <CarFront className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold text-center">Vehicle Insurance</CardTitle>
                <CardDescription className="text-center">
                  Protect your car, bike, and commercial vehicles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <BadgeCheck className="h-4 w-4 text-green-600" />
                    <span>Comprehensive & third-party</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span>24/7 roadside assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Plane className="h-4 w-4 text-green-600" />
                    <span>Quick claim settlement</span>
                  </li>
                </ul>
                <Button asChild className="w-full" variant="outline">
                  <Link href="/insurance/vehicle">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <AlertCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Plan?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare all our TATA AIG travel insurance plans side-by-side to find the perfect fit for your needs.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
            <Link href="/insurance/travel/compare">
              Compare All Travel Plans
            </Link>
          </Button>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-lg text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-lg text-gray-600">Claim Assistance</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-lg text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}