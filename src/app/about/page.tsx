import { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { 
  Shield, 
  Users, 
  Award, 
  TrendingUp, 
  Heart,
  Target,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | MDNetwork - Insurance & Solar Solutions',
  description: 'Learn about MDNetwork, your trusted partner for TATA AIG insurance and solar solutions in Raipur, Chhattisgarh.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">About MDNetwork</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your Trusted Partner for<br />Insurance & Solar Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          MDNetwork is Raipur's leading provider of comprehensive insurance coverage and renewable energy solutions. We're committed to protecting what matters most to you while helping you embrace sustainable living.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
            <p className="text-gray-600">
              To provide accessible, reliable, and comprehensive insurance and solar solutions that empower individuals and businesses in Raipur and across Chhattisgarh to secure their future and contribute to a sustainable planet.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and customer-centric insurance and renewable energy partner in Central India, known for our expertise, integrity, and commitment to making quality protection and clean energy accessible to all.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MDNetwork?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine industry expertise with personalized service to deliver exceptional value
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Authorized Partner</h3>
              <p className="text-gray-600 text-center">
                Official TATA AIG insurance partner with certified advisors and comprehensive product knowledge
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">5000+ Happy Customers</h3>
              <p className="text-gray-600 text-center">
                Trusted by thousands across Raipur and Chhattisgarh for insurance and solar installations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Expert Guidance</h3>
              <p className="text-gray-600 text-center">
                Personalized recommendations based on your unique needs and budget
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Quick Processing</h3>
              <p className="text-gray-600 text-center">
                Instant policy issuance and hassle-free claim support with 24/7 assistance
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">Customer First</h3>
              <p className="text-gray-600 text-center">
                We prioritize your satisfaction and provide ongoing support throughout your policy term
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-7 w-7 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">100% Transparent</h3>
              <p className="text-gray-600 text-center">
                No hidden charges, clear terms, and complete disclosure of all policy details
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 -mx-4 px-4 py-16 rounded-lg">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions for your insurance and energy needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Insurance Services */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Insurance Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Travel Insurance</span>
                      <p className="text-sm text-gray-600">International and domestic coverage with COVID-19 protection</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Health Insurance</span>
                      <p className="text-sm text-gray-600">Medical coverage for individuals and families</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Life Insurance</span>
                      <p className="text-sm text-gray-600">Term and investment plans for financial security</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Vehicle Insurance</span>
                      <p className="text-sm text-gray-600">Comprehensive coverage for cars and two-wheelers</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Solar Services */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4">Solar Solutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Residential Solar</span>
                      <p className="text-sm text-gray-600">Rooftop solar with government subsidies up to 40%</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Commercial Solar</span>
                      <p className="text-sm text-gray-600">Large-scale installations for businesses and industries</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Net Metering</span>
                      <p className="text-sm text-gray-600">Complete assistance with net metering approvals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Maintenance & Support</span>
                      <p className="text-sm text-gray-600">Annual maintenance contracts and 24/7 support</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Solar Installations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Customer Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Claim Assistance</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white -mx-4 px-4 py-16 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust MDNetwork for their insurance and solar needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/insurance/travel/international">
                View Insurance Plans
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
