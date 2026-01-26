import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Sun,
  Home,
  Zap,
  IndianRupee,
  TrendingDown,
  Leaf,
  CheckCircle2,
  ArrowRight,
  Phone,
  Calculator,
} from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Residential Solar Panel Installation | MDNetwork Raipur',
  description: 'Install solar panels for your home in Raipur. Get up to 40% government subsidy, reduce electricity bills, and contribute to clean energy.',
};

export default function ResidentialSolarPage() {
  const packages = [
    {
      name: '3 kW Solar System',
      capacity: '3 kW',
      price: '₹1,80,000',
      subsidy: '₹78,000',
      finalPrice: '₹1,02,000',
      features: [
        'Suitable for 2-3 BHK homes',
        'Generates 12-15 units/day',
        '40% government subsidy',
        '5-year warranty',
        'Net metering support',
      ],
      popular: false,
    },
    {
      name: '5 kW Solar System',
      capacity: '5 kW',
      price: '₹3,00,000',
      subsidy: '₹78,000',
      finalPrice: '₹2,22,000',
      features: [
        'Perfect for 3-4 BHK homes',
        'Generates 20-25 units/day',
        '26% government subsidy',
        '10-year warranty',
        'Free maintenance 1st year',
      ],
      popular: true,
    },
    {
      name: '10 kW Solar System',
      capacity: '10 kW',
      price: '₹6,00,000',
      subsidy: '₹78,000',
      finalPrice: '₹5,22,000',
      features: [
        'Ideal for large homes/villas',
        'Generates 40-50 units/day',
        '13% government subsidy',
        '25-year performance warranty',
        'Priority installation',
      ],
      popular: false,
    },
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: 'Save on Bills',
      description: 'Reduce electricity bills by up to 90%',
    },
    {
      icon: TrendingDown,
      title: 'Government Subsidy',
      description: 'Get up to 40% subsidy (₹78,000)',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Reduce carbon footprint significantly',
    },
    {
      icon: Zap,
      title: 'Net Metering',
      description: 'Sell excess electricity back to grid',
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-600 via-yellow-600 to-orange-700 text-white -mt-8 -mx-4 px-4 py-20 md:py-28 overflow-hidden rounded-b-[50px]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative z-10 text-center">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            <Sun className="mr-2 h-4 w-4" />
            Residential Solar Solutions
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Power Your Home with
            <br />
            <span className="text-yellow-300">Clean Solar Energy</span>
          </h1>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Install solar panels and save up to 90% on electricity bills. Get up to 40% government subsidy in Raipur, Chhattisgarh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50">
              <Link href="/solar/calculator">
                <Calculator className="mr-2 h-5 w-5" />
                Calculate Savings
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-orange-600 hover:bg-white hover:text-orange-700">
              <a href="tel:+917225991909">
                <Phone className="mr-2 h-5 w-5" />
                Get Free Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Solar for Your Home?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section id="packages">
        <h2 className="text-3xl font-bold text-center mb-8">Residential Solar Packages</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className={pkg.popular ? 'border-orange-600 border-2 relative' : ''}>
              {pkg.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="h-6 w-6 text-orange-600" />
                  <CardTitle>{pkg.name}</CardTitle>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-gray-600">Total Cost: <span className="line-through">{pkg.price}</span></div>
                  <div className="text-sm text-green-600">Subsidy: -{pkg.subsidy}</div>
                  <div className="text-3xl font-bold text-orange-600">{pkg.finalPrice}</div>
                  <div className="text-xs text-gray-500">After subsidy</div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={pkg.popular ? 'default' : 'outline'}>
                  <Link href="#inquiry">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gradient-to-br from-orange-50 to-yellow-50 -mx-4 px-4 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Installation Process</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: '1', title: 'Site Survey', desc: 'Free assessment of your rooftop' },
            { step: '2', title: 'Design & Quote', desc: 'Customized solar system design' },
            { step: '3', title: 'Installation', desc: '2-3 days professional installation' },
            { step: '4', title: 'Net Metering', desc: 'Government approval & activation' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="residential-solar"
            title="Get Your Free Solar Quote"
            description="Fill in your details and get a customized solar installation quote for your home"
          />
        </div>
      </section>
    </div>
  );
}
