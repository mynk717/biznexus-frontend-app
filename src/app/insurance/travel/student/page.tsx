import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Plane,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Phone,
  BookOpen,
  Globe2,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Student Travel Insurance | TATA AIG | MDNetwork',
  description:
    'Affordable student travel insurance for studies abroad or domestic internships. Medical coverage, academic interruption, repatriation and more with TATA AIG via MDNetwork Raipur.',
};

export default function StudentTravelInsurancePage() {
  const plans = [
    {
      name: 'Student Abroad Plan',
      price: 'From ₹3,499/year',
      idealFor: 'Indian students studying abroad',
      features: [
        'Medical coverage up to $100,000',
        'Academic year coverage (12 months)',
        'Coverage during semester breaks',
        'Repatriation of mortal remains',
        'Emergency dental treatment',
      ],
      popular: false,
    },
    {
      name: 'Premium Student Plan',
      price: 'From ₹5,999/year',
      idealFor: 'Long-term student trips with comprehensive care',
      features: [
        'Medical coverage up to $200,000',
        'Higher accidental death benefit',
        'Baggage delay & loss coverage',
        'Travel delay compensation',
        'Confinement in hospital daily allowance',
      ],
      popular: true,
    },
    {
      name: 'Internship & Exchange Plan',
      price: 'From ₹2,499/trip',
      idealFor: 'Short internships, exchange programs, study tours',
      features: [
        'Medical and accident coverage',
        'Trip cancellation cover',
        'Personal belongings protection',
        'Flexible duration (7 days to 6 months)',
        'Covers study & training activities',
      ],
      popular: false,
    },
  ];

  const whyNeeded = [
    {
      icon: Globe2,
      title: 'Study Abroad Safety Net',
      desc: 'Medical emergencies abroad can be extremely costly. Our plans ensure you get care without financial stress.',
    },
    {
      icon: BookOpen,
      title: 'Academic Protection',
      desc: 'If you fall ill and need to return home, some plans cover academic year interruption losses.',
    },
    {
      icon: Briefcase,
      title: 'Internship Coverage',
      desc: 'Many internships abroad are unpaid. Insurance protects your investment in the experience.',
    },
    {
      icon: Shield,
      title: 'Peace of Mind',
      desc: 'Your parents will be reassured knowing you have proper medical & emergency coverage.',
    },
  ];

  const studentsAbroad = [
    'USA, UK, Canada, Australia',
    'EU countries (Schengen zone)',
    'Singapore, Malaysia, India (studying in other cities)',
    'Any country for academic purposes',
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="inline-flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          Student Travel Insurance
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Study & Travel Worry-Free
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Affordable, student-focused travel insurance for studies abroad or
          domestic internships. Medical emergencies, trip cancellation, and
          academic protection—all covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#plans">
              View Student Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Our Team
            </a>
          </Button>
        </div>
      </section>

      {/* Why Students Need This */}
      <section className="bg-blue-50 -mx-4 px-4 py-10 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Why Student Travel Insurance Matters
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {whyNeeded.map((item, i) => (
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

      {/* Coverage by Region */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Covers Students Studying In</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with TATA AIG to offer student plans for major study
            destinations worldwide and across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {studentsAbroad.map((region, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Globe2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm font-medium">{region}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Student Travel Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose based on your study destination and duration. Premiums are
            affordable and renewal is simple.
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
                <p className="text-xs text-gray-500 mt-1">{plan.idealFor}</p>
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

      {/* Coverage Details */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">What's Included</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Emergency medical & dental expenses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Medical evacuation and repatriation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Trip cancellation due to illness</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Baggage & personal belongings loss</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>24/7 multilingual assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Accidental death benefit</span>
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
                <span>Pre-existing conditions may require declaration.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Some high-risk sports/activities may be excluded.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Travel against medical advice is not covered.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>
                  Academic interruption covers depend on plan chosen. Check policy
                  details.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* FAQ Quick */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Quick Questions</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can I buy this if I'm already abroad?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Most plans require purchase before departure. If you're already
              abroad, we may have limited options—contact us to check.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                What if I extend my studies?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Annual plans can usually be renewed or extended. We'll help you with
              the renewal process before your current plan expires.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Is it valid during semester breaks and holidays?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, most student plans cover you during semester breaks if you
              travel within your study country or return home.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can my parents claim if something happens to me?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, if your parents are nominated beneficiaries. We help with claim
              processing and ensure quick settlement.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inquiry form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="student-travel-insurance"
            title="Get a Student Travel Insurance Quote"
            description="Tell us where you're studying (or planning to study), duration, and any specific concerns. We'll recommend the best TATA AIG student plan."
          />
        </div>
      </section>
    </div>
  );
}
