import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, CheckCircle2 } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Solar & Insurance Experts on GE Road Raipur | MDNetwork',
  description: 'Top-rated TATA AIG Insurance and Solar Energy systems for businesses and residents on GE Road, Raipur. Specialized in commercial solar audits.',
};

export default function GERoadPage() {
  const features = [
    'Direct access from GE Road highway',
    'Commercial & Residential Solar Hub',
    'Authorized TATA AIG claim center nearby',
    'Specialist for Tatibandh & Amanaka residents'
  ];

  return (
    <div className="flex flex-col gap-12">
      <section className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-16 border border-slate-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              <MapPin className="mr-2 h-4 w-4" />
              Serving GE Road, Amanaka & Tatibandh
            </Badge>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
              GE Road's Leading Advisor for Energy & Insurance
            </h1>
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-100">
             <div className="bg-slate-900 p-8 rounded-xl text-center text-white">
                <p className="text-sm uppercase tracking-widest text-blue-400 font-bold mb-2">Office Status</p>
                <p className="text-3xl font-bold">Open Today</p>
                <p className="text-slate-400 mt-2">GE Road, Raipur (Near Tatibandh)</p>
                <Button asChild className="mt-6 w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <a href="tel:+917225991909">Call Local Advisor</a>
                </Button>
             </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar for GE Road Businesses</CardTitle>
            <CardDescription>Optimize your energy costs with our commercial and residential solar installations on GE Road today.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/solar/residential">Explore Solar Plans</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <ShieldCheck className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>TATA AIG Insurance GE Road</CardTitle>
            <CardDescription>Dedicated insurance support for international travel, health, and life protection on GE Road corridor.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog/ultimate-guide-international-travel-insurance-raipur">View Insurance Plans</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-8 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Cashless Healthcare Near GE Road</h3>
            <p className="text-blue-800 mb-4">Living or working on GE Road? You have quick access to **Ramkrishna CARE** and **Shri Balaji Institute**. MDNetwork provides prioritized TATA AIG cashless admission support for the GE Road business community.</p>
            <div className="flex gap-4">
              <Button asChild size="sm" className="bg-blue-600">
                <Link href="/insurance/health/cashless-hospitals">View Local Network</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100">
                <Link href="/insurance/health">Health Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 text-center border-l md:border-blue-200 pl-8 hidden md:block">
            <p className="text-xs uppercase tracking-widest text-blue-500 font-bold mb-2">GE Road Hotline</p>
            <p className="text-xl font-black text-blue-900">+91 72259 91909</p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Local Raipur Solar Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/blog/solar-subsidy-raipur-chhattisgarh-guide" className="block p-4 border rounded-xl hover:bg-slate-50 dark:bg-slate-800 transition">
            <h4 className="font-bold text-blue-600">Solar Subsidy Guide 2026</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">How to claim ₹1.08 Lakh for GE Road residents.</p>
          </Link>
          <Link href="/blog/3-kilowatt-solar-panel-price-raipur-2026" className="block p-4 border rounded-xl hover:bg-slate-50 dark:bg-slate-800 transition">
            <h4 className="font-bold text-blue-600">3kW Solar Price List</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Detailed cost breakdown for Raipur residents.</p>
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-8 rounded-3xl">
        <h3 className="text-xl font-bold mb-4">Other Service Areas in Raipur</h3>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="secondary" size="sm">
            <Link href="/neighborhood/telibandha">Telibandha / VIP Road</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/neighborhood/shankar-nagar">Shankar Nagar</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/neighborhood/samta-colony">Samta Colony</Link>
          </Button>
        </div>
      </section>

      <section id="inquiry">
        <InquiryForm 
          title="Inquiry for GE Road Area"
          description="Request a professional consultation today for your GE Road establishment."
        />
      </section>
    </div>
  );
}
