import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Car,
  Bike,
  Shield,
  Wrench,
  Users,
  CheckCircle2,
  ArrowRight,
  Phone,
  AlertTriangle,
} from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Vehicle Insurance - Car & Bike | TATA AIG | MDNetwork',
  description: 'Comprehensive vehicle insurance for cars and bikes. Get third-party, comprehensive, and zero depreciation coverage with TATA AIG.',
};

export default function VehicleInsurancePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'TATA AIG Car & Bike Insurance Raipur',
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'MDNetwork',
      'address': {
        '@type': 'PostalAddress',
        'addressLocality': 'Raipur',
        'addressRegion': 'Chhattisgarh',
        'addressCountry': 'IN'
      }
    },
    'description': 'Comprehensive car and bike insurance in Raipur with TATA AIG. Zero dep cover and RC transfer support at Raipur RTO (Atal Nagar).',
    'areaServed': {
      '@type': 'City',
      'name': 'Raipur'
    }
  };

  const carPlans = [
    {
      name: 'Third Party Insurance',
      type: 'Mandatory',
      premium: '₹2,072/year',
      features: [
        'Legal requirement',
        'Third party liability',
        'Personal accident cover',
        'Basic protection',
      ],
      icon: Shield,
    },
    {
      name: 'Comprehensive Insurance',
      type: 'Recommended',
      premium: '₹8,500/year',
      features: [
        'Own damage coverage',
        'Third party liability',
        'Theft protection',
        'Natural calamity cover',
        'Personal accident',
      ],
      icon: Car,
      popular: true,
    },
    {
      name: 'Zero Depreciation',
      type: 'Premium',
      premium: '₹12,000/year',
      features: [
        'No depreciation on claims',
        'Full part replacement value',
        'Comprehensive coverage',
        'Engine protection',
        'Consumables cover',
      ],
      icon: Wrench,
    },
  ];

  const bikeFeatures = [
    {
      icon: Shield,
      title: 'Two-Wheeler Insurance',
      description: 'Starting from ₹500/year',
      features: ['Third party cover', 'Comprehensive plans', 'Personal accident', 'Roadside assistance'],
    },
  ];

  const benefits = [
    'Instant policy issuance',
    'Cashless garage network',
    '24/7 claim assistance',
    'Quick claim settlement',
    'No inspection for renewals',
    'Add-on covers available',
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">TATA AIG Vehicle Insurance</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Car & Bike Insurance Plans
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Protect your vehicle with comprehensive insurance coverage. Get instant policy issuance, cashless claim settlement, and 24/7 roadside assistance.
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

      {/* Car Insurance Plans */}
      <section id="plans">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Car className="h-8 w-8 text-blue-600" />
            <h2 className="text-3xl font-bold">Car Insurance Plans</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {carPlans.map((plan, index) => (
            <Card key={index} className={plan.popular ? 'border-blue-600 border-2 relative' : ''}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                  <plan.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>{plan.name}</CardTitle>
                <Badge variant="outline" className="w-fit">{plan.type}</Badge>
                <div className="text-3xl font-bold text-blue-600 mt-2">{plan.premium}</div>
                <div className="text-sm text-gray-600">For 1000cc car</div>
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

      {/* Bike Insurance */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 -mx-4 px-4 py-12 rounded-lg">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Bike className="h-8 w-8 text-orange-600" />
            <h2 className="text-3xl font-bold">Two-Wheeler Insurance</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive bike insurance starting from just ₹500/year
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Third Party Bike Insurance</CardTitle>
              <div className="text-2xl font-bold text-orange-600">₹500/year</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Mandatory legal cover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Third party liability</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Personal accident cover</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-4" variant="outline">
                <Link href="#inquiry">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-orange-600 border-2 relative">
            <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600">
              Recommended
            </Badge>
            <CardHeader>
              <CardTitle>Comprehensive Bike Insurance</CardTitle>
              <div className="text-2xl font-bold text-orange-600">₹2,500/year</div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Own damage coverage</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Theft protection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Natural calamity cover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Roadside assistance</span>
                </li>
              </ul>
              <Button asChild className="w-full mt-4">
                <Link href="#inquiry">Get Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our Vehicle Insurance?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
              <span className="font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Add-on Covers */}
      <section className="bg-blue-50 -mx-4 px-4 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Available Add-on Covers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <Wrench className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Zero Depreciation</h3>
              <p className="text-sm text-gray-600">Get full part value without depreciation</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Engine Protection</h3>
              <p className="text-sm text-gray-600">Cover for engine and gearbox damage</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <Users className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Passenger Cover</h3>
              <p className="text-sm text-gray-600">Additional cover for passengers</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <AlertTriangle className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold mb-2">Roadside Assistance</h3>
              <p className="text-sm text-gray-600">24/7 breakdown and towing support</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="vehicle-insurance"
            title="Get Your Vehicle Insurance Quote"
            description="Fill in your vehicle details and get an instant insurance quote"
          />
        </div>
      </section>
    </div>
  );
}
