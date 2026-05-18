import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
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
            MDNetwork offers specialized doorstep services for TATA AIG insurance and residential solar installations in Samta Colony and nearby areas.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Contact Samta Colony Advisor</a>
             </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar Energy for Samta Colony</CardTitle>
            <CardDescription>Avail government subsidies up to ₹1.08L with our end-to-end installation support.</CardDescription>
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
            <CardDescription>From Schengen travel insurance to comprehensive health plans, get the best protection in Samta Colony.</CardDescription>
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
