import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
  Building2,
  Factory,
  Sun,
  Zap,
  IndianRupee,
  TrendingDown,
  Calculator,
  CheckCircle2,
  Phone,
  ArrowRight,
} from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Commercial & Industrial Solar Solutions | MDNetwork Raipur',
  description:
    'Rooftop solar for shops, offices, factories and commercial buildings in Raipur. Reduce electricity bills and improve ROI with custom solar solutions.',
};

export default function CommercialSolarPage() {
  const segments = [
    {
      icon: Building2,
      title: 'Shops & Offices',
      desc: 'Ideal for offices, showrooms, coaching centers and clinics.',
      range: '5 kW – 25 kW',
    },
    {
      icon: Factory,
      title: 'Factories & Warehouses',
      desc: 'High-capacity systems for industrial and manufacturing units.',
      range: '25 kW – 500 kW',
    },
    {
      icon: Sun,
      title: 'Institutions',
      desc: 'Schools, colleges, hospitals and government buildings.',
      range: '10 kW – 200 kW',
    },
  ];

  const benefits = [
    {
      icon: IndianRupee,
      title: '3–5 Year Payback',
      desc: 'Most commercial systems recover cost within 3–5 years, then generate free power for 20+ years.',
    },
    {
      icon: TrendingDown,
      title: 'Reduce Operating Costs',
      desc: 'Cut monthly electricity bills by 40–70% depending on load profile.',
    },
    {
      icon: Zap,
      title: 'Stable Power Costs',
      desc: 'Hedge against rising grid tariffs with predictable solar generation.',
    },
    {
      icon: Calculator,
      title: 'Better ROI',
      desc: 'Typical annual ROI of 20–30% on commercial solar investments in India.',
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">
          Commercial & Industrial Solar
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Cut Your Business Power Bills
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Install rooftop solar for your shop, office or factory and turn your unused roof
          into a cost-saving asset with 3–5 year payback.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/solar/calculator">
              Calculate Savings
              <Calculator className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Solar Expert
            </a>
          </Button>
        </div>
      </section>

      {/* Segments */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Solutions for Every Business Type
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {segments.map((s, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <s.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{s.desc}</p>
                <p className="text-xs text-gray-500">Typical capacity: {s.range}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-50 -mx-4 px-4 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Businesses Choose Solar
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600">{b.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Simple example numbers */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Example: 25 kW System for a Commercial Building
        </h2>
        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Estimated Generation</div>
            <div className="text-2xl font-bold text-blue-600">100–120 kWh/day</div>
            <div className="text-xs text-gray-500">Approx 4–5 units per kW per day</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Monthly Savings</div>
            <div className="text-2xl font-bold text-blue-600">₹22,000–₹28,000</div>
            <div className="text-xs text-gray-500">Assuming ₹7–8 per kWh</div>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Payback Period</div>
            <div className="text-2xl font-bold text-blue-600">3–4 years</div>
            <div className="text-xs text-gray-500">Typical commercial installation</div>
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="commercial-solar"
            title="Get a Commercial Solar Proposal"
            description="Share your monthly electricity bill and rooftop details. We’ll send a customized proposal with ROI and payback period."
          />
        </div>
      </section>
    </div>
  );
}
