import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Solar & Insurance Services in Shankar Nagar Raipur | MDNetwork',
  description: 'Trusted TATA AIG Insurance and Solar Energy solutions in Shankar Nagar, Raipur. Get local expert assistance for subsidies and claim support.',
};

export default function ShankarNagarPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-16 border border-slate-200 dark:border-slate-700">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <MapPin className="mr-2 h-4 w-4" />
            Serving Shankar Nagar, Raipur
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
            Your Local Expert for Insurance & Solar in Shankar Nagar
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            MDNetwork provides doorstep consultation for TATA AIG travel/health insurance and government-subsidized solar panels in the Shankar Nagar area.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Call Local Advisor</a>
             </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar for Shankar Nagar Homes</CardTitle>
            <CardDescription>Get up to ₹1,08,000 subsidy with full CSPDCL assistance.</CardDescription>
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
            <CardTitle>TATA AIG Insurance Support</CardTitle>
            <CardDescription>Schengen visa travel insurance and health plans with cashless hospital support near Shankar Nagar.</CardDescription>
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
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Nearby Cashless Hospitals for Shankar Nagar</h3>
            <p className="text-blue-800 mb-4">Living in Shankar Nagar? You have immediate access to **ASG Eye Hospital** and **Shree Narayana Hospital**. MDNetwork provides on-ground assistance for TATA AIG cashless admissions in your area.</p>
            <div className="flex gap-4">
              <Button asChild size="sm" className="bg-blue-600">
                <Link href="/insurance/health/cashless-hospitals">Local Network</Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100">
                <Link href="/insurance/health">Health Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 text-center border-l md:border-blue-200 pl-8 hidden md:block">
            <p className="text-xs uppercase tracking-widest text-blue-500 font-bold mb-2">Emergency Help</p>
            <p className="text-xl font-black text-blue-900">+91 72259 91909</p>
          </div>
        </div>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Local Raipur Solar Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/blog/solar-subsidy-raipur-chhattisgarh-guide" className="block p-4 border rounded-xl hover:bg-slate-50 dark:bg-slate-800 transition">
            <h4 className="font-bold text-blue-600">Solar Subsidy Guide 2026</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">How to claim ₹1.08 Lakh for Shankar Nagar residents.</p>
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
            <Link href="/neighborhood/samta-colony">Samta Colony</Link>
          </Button>
          <Button asChild variant="secondary" size="sm">
            <Link href="/neighborhood/ge-road">GE Road / Tatibandh</Link>
          </Button>
        </div>
      </section>

      <section id="inquiry">
        <InquiryForm 
          title="Consultation for Shankar Nagar"
          description="Request a callback from our neighborhood expert."
        />
      </section>
    </div>
  );
}
