import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Insurance & Solar Solutions GE Road Raipur | MDNetwork',
  description: 'Premium TATA AIG Insurance and Solar Energy solutions on GE Road, Raipur. Specialized services for businesses and residential complexes.',
};

export default function GERoadPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <MapPin className="mr-2 h-4 w-4" />
            Serving GE Road Corridor, Raipur
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Premium Insurance & Solar Solutions on GE Road
          </h1>
          <p className="text-lg text-slate-600">
            MDNetwork provides comprehensive TATA AIG insurance and high-efficiency solar solutions for the bustling GE Road area, from Telibandha to Tatibandh.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Call GE Road Consultant</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Corridor Impact Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 order-2 md:order-1">
          <h3 className="font-bold text-orange-900 mb-4 text-xl">The GE Road Business Advantage</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Building2 className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Commercial Solar Focus</p>
                <p className="text-xs text-slate-500">Helping showrooms and offices along GE Road slash electricity bills.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Corporate Group Health</p>
                <p className="text-xs text-slate-500">TATA AIG group insurance for businesses near Magneto & City Centre.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6 order-1 md:order-2">
          <h2 className="text-3xl font-bold text-slate-900">Raipur's Lifeline: Personalized Care</h2>
          <p className="text-slate-600">
            GE Road isn't just a highway; it's the economic backbone of Raipur. We provide priority services to the residential complexes and commercial establishments that line this corridor.
          </p>
          <ul className="space-y-3">
            {[
              'Customized solar designs for high-visibility GE Road showrooms.',
              'Specialized vehicle insurance assistance for luxury car owners.',
              'Instant health insurance issuance for busy professionals.',
              'Claim coordination for hospitals located along the GE Road stretch.'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
<div class="grid md:grid-cols-2 gap-8">
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
</div>

<section className="space-y-6">
  <h2 className="text-2xl font-bold text-slate-900">Local Raipur Solar Resources</h2>
  <div className="grid sm:grid-cols-2 gap-4">
    <Link href="/blog/solar-subsidy-raipur-chhattisgarh-guide" class="block p-4 border rounded-xl hover:bg-slate-50 transition">
      <h4 className="font-bold text-blue-600">Solar Subsidy Guide 2026</h4>
      <p className="text-sm text-slate-600">How to claim ₹1.08 Lakh for GE Road residents.</p>
    </Link>
    <Link href="/blog/3-kilowatt-solar-panel-price-raipur-2026" class="block p-4 border rounded-xl hover:bg-slate-50 transition">
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
      <Link href="/neighborhood/samta-colony">Samta Colony</Link>
    </Button>
  </div>
</section>

<section id="inquiry">

      <section id="inquiry">
        <InquiryForm 
          title="Inquiry for GE Road Area"
          description="Request a professional consultation today for your GE Road establishment."
        />
      </section>
    </div>
  );
}
