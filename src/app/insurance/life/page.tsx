import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Shield, Heart, Users, TrendingUp, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Life Insurance Plans | TATA AIG | MDNetwork',
  description: 'Secure your family\'s future with TATA AIG life insurance. Term plans, investment plans, and pension plans with comprehensive coverage.',
};

export default function LifeInsurancePage() {
  const plans = [
    {
      name: 'Term Life Insurance',
      coverage: '₹50 Lakh - ₹10 Crore',
      premium: '₹500/month',
      features: [
        'Pure protection plan',
        'High coverage, low premium',
        'Tax benefits under 80C',
        'Flexible payout options',
        'Optional riders available',
      ],
      popular: true,
    },
    {
      name: 'Investment Plan',
      coverage: '₹10 Lakh - ₹2 Crore',
      premium: '₹3,000/month',
      features: [
        'Life cover + wealth creation',
        'Market-linked returns',
        'Guaranteed maturity benefit',
        'Partial withdrawals allowed',
        'Tax-free maturity amount',
      ],
      popular: false,
    },
    {
      name: 'Pension Plan',
      coverage: '₹20 Lakh - ₹5 Crore',
      premium: '₹5,000/month',
      features: [
        'Retirement income',
        'Annuity options',
        'Vesting benefit',
        'Death benefit for nominee',
        'Tax benefits',
      ],
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">TATA AIG Life Insurance</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Secure Your Family's Future
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Protect your loved ones with comprehensive life insurance coverage. Choose from term plans, investment plans, and pension plans tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#plans">
              View Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Call Expert
            </a>
          </Button>
        </div>
      </section>

      {/* Plans */}
      <section id="plans">
        <h2 className="text-3xl font-bold text-center mb-8">Our Life Insurance Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className={plan.popular ? 'border-blue-600 border-2 relative' : ''}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-blue-600">{plan.premium}</div>
                <div className="text-sm text-gray-600">Coverage: {plan.coverage}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link href="#inquiry">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="life-insurance"
            title="Get Your Life Insurance Quote"
            description="Fill in your details and get a personalized life insurance quote"
          />
        </div>
      </section>
    </div>
  );
}
