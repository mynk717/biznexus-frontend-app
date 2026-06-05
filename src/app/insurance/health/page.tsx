import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Shield,
  Heart,
  Users,
  Stethoscope,
  CheckCircle2,
  ArrowRight,
  Hospital,
  Ambulance,
  Phone,
} from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Health Insurance Plans | TATA AIG | MDNetwork',
  description: 'Comprehensive health insurance plans for individuals and families. Get cashless hospitalization, pre and post hospitalization coverage with TATA AIG.',
};

export default function HealthInsurancePage() {
  const plans = [
    {
      name: 'Individual Health Plan',
      coverage: '₹5 Lakh - ₹1 Crore',
      premium: '₹8,500/year',
      features: [
        'Cashless hospitalization',
        'Pre & post hospitalization',
        'Day care procedures',
        'Ambulance charges',
        'No claim bonus',
      ],
      popular: false,
    },
    {
      name: 'Family Floater Plan',
      coverage: '₹10 Lakh - ₹2 Crore',
      premium: '₹15,000/year',
      features: [
        'Coverage for entire family',
        'Maternity benefits',
        'New born baby coverage',
        'Unlimited e-consultations',
        'Annual health check-up',
      ],
      popular: true,
    },
    {
      name: 'Senior Citizen Plan',
      coverage: '₹5 Lakh - ₹50 Lakh',
      premium: '₹18,000/year',
      features: [
        'No pre-medical screening',
        'Pre-existing disease coverage',
        'AYUSH treatment',
        'Home healthcare',
        'Lifelong renewability',
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: Hospital,
      title: 'Cashless Hospitalization',
      description: '9,000+ network hospitals across India',
    },
    {
      icon: Ambulance,
      title: 'Emergency Support',
      description: '24/7 ambulance and emergency assistance',
    },
    {
      icon: Heart,
      title: 'Pre-existing Diseases',
      description: 'Coverage after 2-4 years waiting period',
    },
    {
      icon: Stethoscope,
      title: 'Annual Health Check-up',
      description: 'Free preventive health check-ups',
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">TATA AIG Health Insurance</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Comprehensive Health Insurance Plans
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Protect your family's health with comprehensive medical coverage. Get cashless hospitalization at 9,000+ network hospitals, pre and post hospitalization coverage, and more.
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

      {/* Key Benefits */}
      <section>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
              <Hospital className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <Badge className="bg-blue-500 mb-4 text-white border-blue-400">Raipur Local Network</Badge>
              <h3 className="text-2xl font-bold mb-2">9+ Cashless Hospitals in Raipur</h3>
              <p className="text-blue-100 mb-6">We've verified the TATA AIG network for 2026. From Ramkrishna CARE to MMI Narayana, see which hospitals are closest to your home.</p>
              <Button asChild className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/insurance/health/cashless-hospitals">
                  View Hospital List
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform">
              <Shield className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <Badge variant="outline" className="mb-4 border-blue-200 text-blue-700">Admission Support</Badge>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Dedicated Raipur Claim Desk</h3>
              <p className="text-slate-600 mb-6">Don't struggle with hospital paperwork. MDNetwork provides on-ground assistance for planned surgeries and emergency admissions in Raipur.</p>
              <Button asChild variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                <Link href="/contact">
                  Talk to Claim Expert
                  <Phone className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Health Insurance?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section id="plans">
        <h2 className="text-3xl font-bold text-center mb-8">Our Health Insurance Plans</h2>
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

      {/* Features Grid */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">What's Covered?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Room Rent</div>
              <div className="text-sm text-gray-600">Single private AC room coverage</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">ICU Charges</div>
              <div className="text-sm text-gray-600">Intensive care unit expenses</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Doctor Consultation</div>
              <div className="text-sm text-gray-600">Specialist and general physician</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Diagnostic Tests</div>
              <div className="text-sm text-gray-600">X-ray, MRI, CT scan coverage</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Surgery Expenses</div>
              <div className="text-sm text-gray-600">All medical and surgical procedures</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold">Medicines & Drugs</div>
              <div className="text-sm text-gray-600">Prescribed medication coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="health-insurance"
            title="Get Your Health Insurance Quote"
            description="Fill in your details and get a personalized health insurance quote within minutes"
          />
        </div>
      </section>
    </div>
  );
}
