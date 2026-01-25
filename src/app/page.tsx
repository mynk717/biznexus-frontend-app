import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plane, 
  Heart, 
  Shield, 
  Car, 
  Sun, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
<section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white -mt-8 -mx-4 px-4 py-20 md:py-28 overflow-hidden">
  {/* Abstract Background Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
  </div>

  {/* Curved Bottom */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
    </svg>
  </div>

  <div className="container mx-auto relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
          TATA AIG Authorized Partner
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Protect Your Journey,
          <br />
          <span className="text-yellow-300">Power Your Future</span>
        </h1>
        <p className="text-lg md:text-xl text-blue-100">
          Comprehensive insurance solutions and solar energy services for Raipur and Chhattisgarh. Get instant quotes, expert guidance, and hassle-free claims.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <Link href="/insurance/travel/international">
              Get Travel Insurance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700">
            <Link href="/solar/calculator">
              Calculate Solar Savings
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/20">
          <div>
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm text-blue-200">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm text-blue-200">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold">100%</div>
            <div className="text-sm text-blue-200">Claim Assistance</div>
          </div>
        </div>
      </div>

      <div className="hidden md:block relative">
        {/* Network Illustration */}
        <div className="relative w-full h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <img 
              src="/images/branding/icon.svg" 
              alt="MDNetwork" 
              className="w-full max-w-sm opacity-30 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Insurance Services */}
      <section className="container mx-auto">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            TATA AIG insurance plans designed to protect what matters most to you and your family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Travel Insurance */}
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-blue-500">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Plane className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Travel Insurance</CardTitle>
              <CardDescription>
                International & domestic coverage with COVID-19 protection
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Schengen visa compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Medical emergency coverage up to $1M</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Trip cancellation & baggage loss</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/insurance/travel/international">
                  Explore Plans
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Health Insurance */}
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-red-500">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle>Health Insurance</CardTitle>
              <CardDescription>
                Comprehensive medical coverage for your family
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cashless hospitalization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>No room rent capping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pre & post hospitalization</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/insurance/health">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Life Insurance */}
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-green-500">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>Life Insurance</CardTitle>
              <CardDescription>
                Secure your family's financial future
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Term & investment plans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Tax benefits under 80C</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible premium options</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/insurance/life">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Vehicle Insurance */}
          <Card className="hover:shadow-lg transition-shadow border-2 hover:border-purple-500">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>Vehicle Insurance</CardTitle>
              <CardDescription>
                Protect your car and two-wheeler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Comprehensive & third-party</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Quick claim settlement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>24/7 roadside assistance</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link href="/insurance/vehicle">
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 -mx-4 px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-orange-500 text-orange-700">
              Green Energy Solutions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Switch to Solar, Save More
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reduce your electricity bills by up to 90% with government-subsidized solar installations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-orange-200 hover:border-orange-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Residential Solar</CardTitle>
                <CardDescription>
                  Solar panels for homes with up to 40% government subsidy
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>₹30,000 subsidy for 3kW system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>5-year warranty on panels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Net metering support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>3-4 year payback period</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/solar/residential">
                    Explore Residential Solar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Commercial Solar</CardTitle>
                <CardDescription>
                  Industrial solar solutions for businesses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reduce operational costs by 80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Scalable systems 10kW to 1MW+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tax benefits & depreciation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complete installation & AMC</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-yellow-600 hover:bg-yellow-700">
                  <Link href="/solar/commercial">
                    Explore Commercial Solar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose MDNetwork */}
      <section className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose MDNetwork?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands in Raipur and Chhattisgarh for insurance and solar solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Authorized Partner</h3>
            <p className="text-gray-600">
              Official TATA AIG insurance partner with certified advisors
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-600">
              Personalized recommendations based on your unique needs
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quick Processing</h3>
            <p className="text-gray-600">
              Instant policy issuance and hassle-free claim support
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white -mx-4 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free quote in under 2 minutes. No hidden charges, expert support guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Call: +91 72259 91909
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
