import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Heart,
  Plane,
  CheckCircle2,
  ArrowRight,
  Phone,
  Shield,
  MapPin,
  Clock,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Senior Citizen Travel Insurance | TATA AIG | MDNetwork',
  description:
    'Travel insurance for senior citizens 60+ years. Pre-existing condition coverage, higher medical limits, no age cap. Domestic & international plans with TATA AIG via MDNetwork Raipur.',
};

export default function SeniorCitizenTravelInsurancePage() {
  const plans = [
    {
      name: 'Senior Domestic Plan',
      price: 'From ₹249/trip',
      ageGroup: 'Ages 60-75',
      idealFor: 'Domestic trips, visiting family, pilgrimages',
      features: [
        'Medical coverage up to ₹5 lakh',
        'Pre-existing condition coverage',
        'No age limit for coverage',
        'Emergency hospitalization',
        'Medical evacuation support',
      ],
      popular: false,
    },
    {
      name: 'Senior International Plan',
      price: 'From ₹3,999/trip',
      ageGroup: 'Ages 60-80',
      idealFor: 'International trips, family visits abroad, group travel',
      features: [
        'Medical coverage up to $100,000',
        'Pre-existing conditions covered',
        'Schengen visa compliant',
        'Higher accidental death benefit',
        '24/7 emergency support in 200+ countries',
      ],
      popular: true,
    },
    {
      name: 'Senior Annual Plan',
      price: 'From ₹4,999/year',
      ageGroup: 'Ages 60-85',
      idealFor: 'Frequent travellers, multiple trips per year',
      features: [
        'Unlimited trips within coverage period',
        'Domestic + international coverage',
        'Pre-existing condition waiver',
        'Trip cancellation with high limits',
        'Automatic renewal option',
      ],
      popular: false,
    },
  ];

  const whySpecial = [
    {
      icon: Heart,
      title: 'Pre-Existing Conditions',
      desc: 'Unlike regular plans, we cover pre-existing medical conditions like diabetes, BP, heart issues if declared upfront.',
    },
    {
      icon: Shield,
      title: 'Higher Medical Coverage',
      desc: 'Seniors may need more medical support. Our plans offer medical limits up to $100,000+ for international trips.',
    },
    {
      icon: Clock,
      title: 'No Age Limit',
      desc: 'We insure seniors up to 85+ years (some plans). Age is just a number—travel safely at any age.',
    },
    {
      icon: Users,
      title: 'Family Group Discounts',
      desc: 'Traveling with spouse or adult children? Group discounts available for 3+ people booking together.',
    },
  ];

  const idealFor = [
    'Pilgrimage trips (Varanasi, Haridwar, Tirupati, etc.)',
    'Visiting children & grandchildren abroad',
    'Retirement travel & group tours',
    'Family reunions and celebrations',
    'Medical tourism (treatment abroad)',
    'Adventure travel (trekking, cruises)',
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="inline-flex items-center gap-2">
          <Users className="h-4 w-4" />
          Senior Citizen Travel Insurance
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Travel Safe & Free at 60+
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Specially designed travel insurance for senior citizens 60+. Covers
          pre-existing medical conditions, higher medical limits, and provides
          24/7 emergency support globally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#plans">
              View Senior Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Speak with a Travel Advisor
            </a>
          </Button>
        </div>
      </section>

      {/* Why Senior Plans Are Different */}
      <section className="bg-amber-50 -mx-4 px-4 py-10 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Senior Travel Insurance is Different
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {whySpecial.map((item, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mx-auto">
                    <item.icon className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Perfect For Your Trips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Whether it's a pilgrimage, family reunion, or adventure travel, we
            have you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {idealFor.map((trip, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{trip}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Senior Travel Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose between domestic, international, or annual plans. All cover
            pre-existing conditions when declared.
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
                <div className="space-y-1 mt-2">
                  <p className="text-xs text-gray-500">{plan.ageGroup}</p>
                  <p className="text-xs text-gray-600 font-medium">
                    {plan.idealFor}
                  </p>
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

      {/* Coverage Comparison */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Coverage Details</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <h3 className="font-semibold text-lg">What's Covered</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Pre-existing medical conditions (when declared)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Emergency medical & hospitalization expenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Medical evacuation & repatriation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Trip cancellation due to sudden illness</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Baggage & personal belongings protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Accidental death benefit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>24/7 multilingual emergency support</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-red-600" />
                <h3 className="font-semibold text-lg text-red-700">
                  Important Exclusions
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span>Travel against medical advice is not covered.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span>Conditions not declared upfront may be excluded.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span>High-risk sports/mountaineering may have limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                  <span>Travel to countries under travel warnings excluded.</span>
                </li>
                <li className="text-xs text-gray-500 mt-2">
                  <strong>Important:</strong> Always disclose all pre-existing
                  medical conditions during purchase for best coverage & claim
                  support.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Will my diabetes, blood pressure, or heart condition be covered?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes! Unlike regular travel insurance, our senior plans specifically
              cover pre-existing conditions. Just declare them honestly during
              purchase.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                What's the maximum age limit?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Most of our senior plans cover up to age 80-85. Some very specific
              plans may go beyond. Contact us with your age and we'll find the
              best fit.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can I buy this if my flight is next week?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, you can buy right up to 24 hours before departure. Instant
              policy issuance—just fill out the health declaration form.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                My spouse is 88 years old. Can they get covered?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              We have special options for very senior citizens (80+). Call us at
              +91 72259 91909 to discuss eligibility and available plans.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Is there a group discount for 4 people traveling together?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, group discounts apply for 3+ people. We can also bundle spouse
              & adult children traveling together for better rates.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                What if I need to cancel my trip? Will I get a refund?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Trip cancellation cover reimburses your trip cost if you can't
              travel due to covered reasons (sudden illness, death of family,
              etc.). 30-day free look period applies for policy cancellation.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial-style */}
      <section className="bg-green-50 -mx-4 px-4 py-8 rounded-lg">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 italic mb-4">
            "I was worried about my blood pressure affecting my claim, but MDNetwork
            explained everything clearly. My policy covers it, and I traveled to see
            my grandchildren in London without worry. The support team was excellent!"
          </p>
          <p className="font-semibold">— Rajesh Kumar, 68, Raipur</p>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="senior-travel-insurance"
            title="Get a Senior Travel Insurance Quote"
            description="Tell us your age, travel destination, any pre-existing medical conditions, and trip dates. We'll find the perfect TATA AIG senior plan for you."
          />
        </div>
      </section>
    </div>
  );
}
