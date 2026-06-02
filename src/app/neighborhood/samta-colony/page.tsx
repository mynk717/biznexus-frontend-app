import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Insurance & Solar Services in Samta Colony Raipur | MDNetwork',
  description: 'Top TATA AIG Insurance and Solar Energy solutions in Samta Colony, Raipur. Get expert local support for subsidies and insurance claims.',
};

export default function SamtaColonyPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <MapPin className="mr-2 h-4 w-4" />
            Serving Samta Colony & Choubey Colony
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Raipur's Premier Insurance & Solar Advisory in Samta Colony
          </h1>
          <p className="text-lg text-slate-600">
            Located conveniently for Samta Colony residents, MDNetwork offers expert guidance for TATA AIG health/travel insurance and PM Surya Ghar solar subsidies.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Consult Local Expert</a>
             </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar Energy for Samta Colony</CardTitle>
            <CardDescription>Avail government subsidies up to ₹1.08L with our end-to-end installation support on your rooftop.</CardDescription>
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
            <CardTitle>TATA AIG Insurance Plans</CardTitle>
            <CardDescription>From Schengen travel insurance to comprehensive health plans, get the best protection in Samta Colony today.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/blog/ultimate-guide-international-travel-insurance-raipur">View Insurance Plans</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-900">Local Raipur Solar Resources</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/blog/solar-subsidy-raipur-chhattisgarh-guide" className="block p-4 border rounded-xl hover:bg-slate-50 transition">
            <h4 className="font-bold text-blue-600">Solar Subsidy Guide 2026</h4>
            <p className="text-sm text-slate-600">How to claim ₹1.08 Lakh for Samta Colony residents.</p>
          </Link>
          <Link href="/blog/3-kilowatt-solar-panel-price-raipur-2026" className="block p-4 border rounded-xl hover:bg-slate-50 transition">
            <h4 className="font-bold text-blue-600">3kW Solar Price List</h4>
            <p className="text-sm text-slate-600">Detailed cost breakdown for Raipur residents.</p>
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
            <Link href="/neighborhood/ge-road">GE Road / Tatibandh</Link>
          </Button>
        </div>
      </section>

      <section id="inquiry">
        <InquiryForm 
          title="Consultation for Samta Colony"
          description="Schedule a visit from our neighborhood consultant."
        />
      </section>
    </div>
  );
}
