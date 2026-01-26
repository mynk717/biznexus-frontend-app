import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Plane,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Phone,
  Shield,
  Globe2,
  Repeat,
  TrendingUp,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Annual Multi-Trip Travel Insurance | TATA AIG | MDNetwork',
  description:
    'Annual multi-trip travel insurance for frequent travelers and business professionals. Unlimited trips, unlimited destinations, single policy. TATA AIG via MDNetwork Raipur.',
};

export default function MultiTripTravelInsurancePage() {
  const plans = [
    {
      name: 'Business Professional Plan',
      price: 'From ₹7,999/year',
      trips: 'Unlimited trips',
      duration: 'Up to 90 days per trip',
      idealFor: 'Business travelers, consultants, executives',
      features: [
        'Unlimited domestic & international trips',
        'Medical coverage up to $150,000',
        'Business equipment coverage',
        'Work-related liability',
        'Emergency accommodation & flight changes',
        'Travel delay compensation',
      ],
      popular: false,
    },
    {
      name: 'Frequent Flyer Premium',
      price: 'From ₹9,999/year',
      trips: 'Unlimited trips',
      duration: 'Up to 90 days per trip',
      idealFor: 'Frequent travelers, consultants, globe-trotters',
      features: [
        'Unlimited trips worldwide',
        'Medical coverage up to $200,000',
        'Higher baggage allowance',
        'Airport lounge access (select airports)',
        'Emergency dental & optical',
        'Evacuation & repatriation included',
      ],
      popular: true,
    },
    {
      name: 'Family Annual Plan',
      price: 'From ₹12,999/year',
      trips: 'Unlimited trips',
      duration: 'Up to 60 days per trip',
      idealFor: 'Families traveling together multiple times a year',
      features: [
        'Covers entire family (2 adults + kids)',
        'Medical coverage up to $150,000 per person',
        'Kids covered up to age 25',
        'Trip cancellation with family coverage',
        'Single policy for all family members',
        'Auto renewal reminder',
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Repeat,
      title: 'Unlimited Trips',
      desc: 'Travel as many times as you want within a year—no trip count limits.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Savings',
      desc: 'Annual plans are cheaper than buying individual policies for each trip.',
    },
    {
      icon: Globe2,
      title: 'Worldwide Coverage',
      desc: 'Covered everywhere in the world. Schengen-compliant for EU travel.',
    },
    {
      icon: Shield,
      title: 'Continuity',
      desc: 'No gaps between trips. Always protected from day 1 to day 365.',
    },
  ];

  const comparison = [
    {
      item: 'Cost per trip',
      singleTrip: '₹200-500 each',
      annual: '₹666-833 avg per trip',
      savings: '✓ Save 40-50%',
    },
    {
      item: 'Validity',
      singleTrip: '7-30 days',
      annual: 'Full year (365 days)',
      savings: '✓ Always covered',
    },
    {
      item: 'Paperwork',
      singleTrip: 'New policy each time',
      annual: 'Single annual policy',
      savings: '✓ One-time hassle',
    },
    {
      item: 'Medical coverage',
      singleTrip: 'Lower limits',
      annual: 'Higher limits available',
      savings: '✓ Better protected',
    },
  ];

  const idealScenarios = [
    'Monthly business trips across India',
    'Quarterly visits to international offices',
    'Frequent family vacations',
    'Regular consulting/training assignments',
    'Annual pilgrimage + leisure travel',
    'Multiple short holiday trips',
    'Semester abroad with frequent travel',
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="inline-flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Annual Multi-Trip Insurance
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Travel Unlimited, Pay Once
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Annual multi-trip travel insurance for business professionals,
          frequent travelers, and families. Unlimited trips, unlimited
          destinations, single policy. Save 40-50% vs. individual trip policies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#plans">
              View Annual Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Compare Plans
            </a>
          </Button>
        </div>
      </section>

      {/* Why Annual Plans */}
      <section className="bg-blue-50 -mx-4 px-4 py-10 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose Annual Multi-Trip Plans?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((item, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Single Trip vs Annual */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Single Trip vs Annual</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why frequent travelers choose annual plans.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 text-left font-semibold">
                  Comparison
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  Single-Trip Policy
                </th>
                <th className="px-4 py-3 text-center font-semibold">
                  Annual Plan
                </th>
                <th className="px-4 py-3 text-center font-semibold text-green-600">
                  Advantage
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="px-4 py-3 font-medium">{row.item}</td>
                  <td className="px-4 py-3 text-center">{row.singleTrip}</td>
                  <td className="px-4 py-3 text-center">{row.annual}</td>
                  <td className="px-4 py-3 text-center text-green-600 font-semibold">
                    {row.savings}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Annual Travel Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose based on your travel frequency and lifestyle. All plans
            provide unlimited trips and worldwide coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={plan.popular ? 'border-blue-600 border-2 relative' : ''}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-blue-600">
                  {plan.price}
                </div>
                <div className="space-y-1 mt-2 text-xs text-gray-600">
                  <p>
                    <strong>Trips:</strong> {plan.trips}
                  </p>
                  <p>
                    <strong>Per trip:</strong> {plan.duration}
                  </p>
                  <p className="font-medium mt-1">{plan.idealFor}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  <Link href="#inquiry">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ideal For */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Perfect If You Travel</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Annual plans make sense for frequent travelers. See if you're a good
            fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {idealScenarios.map((scenario, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{scenario}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">What's Covered</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Emergency medical expenses globally</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Trip cancellation & curtailment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Baggage loss & delay</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Travel delay & missed connection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Personal accident & death benefit</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>24/7 emergency assistance globally</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-red-600" />
              <h3 className="font-semibold text-lg text-red-700">
                Important Notes
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Max trip duration: 90 days per journey.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Travel to COVID-restricted zones may be excluded.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>High-risk activities need special coverage.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Pre-existing conditions need declaration.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Auto renewal available—remind before expiry.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Common Questions</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                How many trips can I take in a year?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Unlimited! You can travel as many times as you want, as long as each
              trip is within the allowed duration (typically 60-90 days per trip).
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                What if I don't use all trips in a year?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              No unused trips carry over, but you get full value. If you travel
              2-3 times, you still save vs. buying individual policies for each
              trip.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can I extend a trip beyond 90 days?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Most plans cover up to 90 days per trip. If you need longer coverage,
              contact us for special arrangements or consider a different plan type.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Does it renew automatically?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, auto-renewal is available. We'll send you a reminder 30 days
              before expiry. You can choose to renew online or contact us.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can family members be covered under one annual policy?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, our Family Annual Plan covers spouses and kids. Each person gets
              individual medical coverage, all under one policy.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="multi-trip-travel-insurance"
            title="Get an Annual Multi-Trip Quote"
            description="Tell us how many times you travel per year, destinations, and whether it's for business or leisure. We'll recommend the best annual plan."
          />
        </div>
      </section>
    </div>
  );
}
