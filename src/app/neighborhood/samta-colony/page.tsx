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
            Serving Samta Colony, Raipur
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Expert Insurance & Solar Consultation in Samta Colony
          </h1>
          <p className="text-lg text-slate-600">
            MDNetwork offers specialized doorstep services for TATA AIG insurance and residential solar installations in Samta Colony, Sadar Bazaar, and the surrounding heart of Raipur.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Contact Samta Colony Advisor</a>
             </Button>
          </div>
        </div>
      </section>

      {/* Local Authority Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Why Samta Colony Residents Choose MDNetwork</h2>
          <p className="text-slate-600">
            As one of Raipur's most established residential and commercial hubs, Samta Colony demands personalized service. We understand the specific needs of families in this area—from securing heritage properties to installing modern solar systems on traditional rooftops.
          </p>
          <ul className="space-y-3">
            {[
              'Doorstep TATA AIG policy renewals and claims support.',
              'Specialized Solar Subsidy guidance for Samta Colony homeowners.',
              'Direct proximity to Sadar Bazaar business insurance experts.',
              'Localized health insurance plans for senior citizens.'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4 text-xl">Service Landmarks in Samta Colony</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Near Samta Colony Ground</p>
                <p className="text-xs text-slate-500">Regular solar energy awareness camps held nearby.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="font-bold text-sm">Sadar Bazaar Corridor</p>
                <p className="text-xs text-slate-500">Dedicated insurance support for retail shop owners.</p>
              </div>
            </div>
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
              <Link href="/insurance">View Insurance Plans</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section id="inquiry">
        <InquiryForm 
          title="Consultation for Samta Colony"
          description="Schedule a visit from our neighborhood consultant."
        />
      </section>
    </div>
  );
}
