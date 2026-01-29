// src/app/insurance/life/page.tsx
import Link from 'next/link';
import { Heart, Shield, TrendingUp, Users, CheckCircle2, ArrowRight, Phone, IndianRupee, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata = {
  title: 'Life Insurance Plans - Tata AIA | Term, ULIP, Pension - MDNetwork',
  description: 'Buy Tata AIA life insurance online. Term plans, ULIPs, pension plans with up to ₹2 Cr coverage. Tax benefits under 80C. Get quotes from MDNetwork Raipur.',
};

// Real Tata AIA Plans (scraped data)
const lifeInsurancePlans = [
  {
    id: 1,
    name: 'Sampoorna Raksha Supreme',
    category: 'Term Insurance',
    sumAssured: '₹25 Lakh - ₹2 Crore',
    premiumFrom: '₹540/month',
    tenure: 'Up to 100 years',
    features: [
      'Whole life coverage till age 100',
      'Terminal illness advance payout (50% sum)',
      'Life stage option to increase cover',
      'Income payout or lump sum flexibility',
    ],
    badge: 'Bestseller',
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: 2,
    name: 'Maha Raksha Supreme',
    category: 'Term Insurance',
    sumAssured: '₹50 Lakh - ₹10 Crore',
    premiumFrom: '₹750/month',
    tenure: '10-40 years',
    features: [
      'High coverage for working professionals',
      'Waiver of premium on critical illness',
      'Accidental death benefit rider',
      'Tax benefits under Section 80C',
    ],
    badge: 'High Coverage',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    id: 3,
    name: 'iRaksha TROP',
    category: 'Term Insurance',
    sumAssured: '₹25 Lakh - ₹1 Crore',
    premiumFrom: '₹450/month',
    tenure: '10-30 years',
    features: [
      'Return of premium on maturity',
      'Get all premiums back if you survive',
      'Life cover + savings combined',
      'Lower premium rates for females',
    ],
    badge: 'Return Option',
    color: 'bg-green-100 text-green-800',
  },
  {
    id: 4,
    name: 'Fortune Guarantee Plus',
    category: 'Savings & Investment',
    sumAssured: '₹10 Lakh - ₹50 Lakh',
    premiumFrom: '₹10,000/year',
    tenure: '10-20 years',
    features: [
      'Guaranteed returns on maturity',
      'Regular income after maturity',
      'Life cover + wealth creation',
      'Optional critical illness benefit',
    ],
    badge: 'Guaranteed Returns',
    color: 'bg-amber-100 text-amber-800',
  },
  {
    id: 5,
    name: 'Wealth Pro (ULIP)',
    category: 'ULIP',
    sumAssured: '₹5 Lakh - ₹50 Lakh',
    premiumFrom: '₹12,000/year',
    tenure: '10-25 years',
    features: [
      'Market-linked returns (equity/debt)',
      'Life cover up to 80 years',
      'Flexible fund switching',
      'Loyalty additions from 11th year',
    ],
    badge: 'Wealth Building',
    color: 'bg-indigo-100 text-indigo-800',
  },
  {
    id: 6,
    name: 'Smart Income Plus',
    category: 'Pension & Retirement',
    sumAssured: '₹10 Lakh - ₹1 Crore',
    premiumFrom: '₹25,000/year',
    tenure: 'Till age 85/100',
    features: [
      'Regular income from age 55/60/65',
      'Whole life coverage option',
      'Guaranteed payout for retirement',
      'Spouse and child protection',
    ],
    badge: 'Retirement',
    color: 'bg-rose-100 text-rose-800',
  },
];

const whyTataAIA = [
  {
    icon: Shield,
    title: '40+ Years Legacy',
    description: 'Tata Group + AIA joint venture since 2001',
  },
  {
    icon: Award,
    title: '98.5% Claim Settlement',
    description: 'One of the highest in India (FY 2023-24)',
  },
  {
    icon: Users,
    title: '5.8 Million Customers',
    description: 'Trusted by families across India',
  },
  {
    icon: TrendingUp,
    title: '₹16,500 Cr Assets',
    description: 'Strong financials and solvency',
  },
];

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-8 py-4 mb-8 shadow-2xl">
            <Heart className="h-6 w-6" />
            <span className="text-lg font-semibold">Tata AIA Life Insurance</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
            Secure Your Family's Future
            <span className="block text-2xl md:text-3xl text-blue-100 mt-2">with Tata AIA Life Insurance</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-95 drop-shadow-lg">
            Term plans, ULIPs, pension plans with coverage up to ₹10 Crore. 
            Tax benefits under 80C + 98.5% claim settlement ratio.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg px-10 py-8 shadow-2xl h-auto font-semibold">
              <a href="#plans">
                View All Plans
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-10 py-8 border-2 h-auto font-semibold text-gray-900 bold">
              <a href="#inquiry">Get Free Quote</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              98.5% Claims Paid
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Tax Benefits u/s 80C
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              Instant Quote
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        {/* Why Tata AIA */}
        <section className="grid md:grid-cols-4 gap-6 -mt-24 relative z-10">
          {whyTataAIA.map((item, idx) => (
            <Card key={idx} className="text-center p-6 border-2 shadow-xl bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all hover:-translate-y-2">
              <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </section>

        {/* Plan Categories */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center border-2 hover:border-blue-300 hover:shadow-xl transition-all group">
            <Shield className="h-16 w-16 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Term Insurance</h3>
            <p className="text-gray-600 mb-4">Pure protection for your family</p>
            <Badge variant="secondary">Starting ₹450/month</Badge>
          </Card>
          <Card className="p-8 text-center border-2 hover:border-purple-300 hover:shadow-xl transition-all group">
            <TrendingUp className="h-16 w-16 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">ULIP & Savings</h3>
            <p className="text-gray-600 mb-4">Life cover + wealth creation</p>
            <Badge variant="secondary">Market-linked returns</Badge>
          </Card>
          <Card className="p-8 text-center border-2 hover:border-green-300 hover:shadow-xl transition-all group">
            <Heart className="h-16 w-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Pension Plans</h3>
            <p className="text-gray-600 mb-4">Secure retirement income</p>
            <Badge variant="secondary">Regular payouts</Badge>
          </Card>
        </section>

        {/* All Plans */}
        <section id="plans">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent mb-4">
              Tata AIA Life Insurance Plans
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from term, ULIP, savings, and pension plans. Get instant quotes and compare coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifeInsurancePlans.map((plan) => (
              <Card 
                key={plan.id} 
                className="group hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 border-2 hover:border-blue-500/50 overflow-hidden hover:scale-[1.02] hover:-translate-y-2"
              >
                <div className={`h-24 ${plan.color} flex items-center justify-center relative group-hover:scale-105 transition-transform`}>
                  <Heart className="h-12 w-12 opacity-20 group-hover:opacity-30 transition-opacity" />
                  {plan.badge && (
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-800 font-semibold shadow-lg">
                      {plan.badge}
                    </Badge>
                  )}
                </div>

                <CardContent className="pt-6 pb-8 px-6">
                  <Badge className="mb-3" variant="outline">{plan.category}</Badge>

                  <CardTitle className="text-xl font-black mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {plan.name}
                  </CardTitle>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold">{plan.sumAssured}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <IndianRupee className="h-4 w-4 text-green-600" />
                      <span className="font-semibold">{plan.premiumFrom}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold">{plan.tenure}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <a href="#inquiry">
                      Get Free Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tax Benefits */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 -mx-4 px-4 py-12 rounded-3xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tax Benefits Under Income Tax Act</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                  Section 80C
                </h3>
                <p className="text-gray-700 mb-2">Deduction up to ₹1.5 Lakh per year</p>
                <p className="text-sm text-gray-600">On premium paid for life insurance policies</p>
              </Card>
              <Card className="p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold mb-3 flex items-center justify-center gap-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Section 10(10D)
                </h3>
                <p className="text-gray-700 mb-2">Tax-free maturity proceeds</p>
                <p className="text-sm text-gray-600">Subject to conditions under Income Tax Act</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Lead Capture */}
        <section id="inquiry" className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-20">
          <Card className="shadow-2xl border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <Heart className="h-8 w-8 text-blue-600" />
                Get Your Free Life Insurance Quote
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <InquiryForm
                defaultServiceType="life-insurance"
                title="Share Your Details"
                description="Age? Income? Coverage amount? We'll recommend the best Tata AIA plan for your family's security."
              />
              <div className="mt-6 space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Instant quote within 2 hours
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  No medical tests for online purchase (up to ₹1 Cr)
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Paperless policy issuance
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-xl border-orange-100">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Phone className="h-6 w-6 text-orange-600" />
                  Speak to Life Insurance Expert
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <p className="text-sm text-gray-700">
                  Get personalized advice on term, ULIP, and pension plans. Our experts help you choose the right coverage for your family.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Compare all Tata AIA plans
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Premium calculator assistance
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Claim settlement support
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full h-16 text-xl shadow-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <a href="tel:+917225991909">
                <Phone className="mr-3 h-6 w-6" />
                Call: +91 72259 91909
              </a>
            </Button>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="font-bold mb-3 text-center">Why Buy from MDNetwork?</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>✓ Authorized Tata AIA partner in Raipur</p>
                <p>✓ Expert guidance on plan selection</p>
                <p>✓ Hassle-free claim assistance</p>
                <p>✓ Lifetime policy servicing support</p>
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}