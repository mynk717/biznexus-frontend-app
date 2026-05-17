import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone } from 'lucide-react';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Solar & Insurance Experts in Telibandha Raipur | MDNetwork',
  description: 'Authorized TATA AIG Insurance and Solar Subsidy assistance in Telibandha, Raipur. Doorstep service for VIP road and Marine Drive residents.',
};

export default function TelibandhaPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            <MapPin className="mr-2 h-4 w-4" />
            Serving Telibandha & VIP Road
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Trusted Insurance & Solar Advisor in Telibandha
          </h1>
          <p className="text-lg text-slate-600">
            MDNetwork provides specialized TATA AIG travel insurance and high-efficiency solar solutions for residents and businesses around Telibandha Marine Drive and VIP Road.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Request Doorstep Visit</a>
             </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar for VIP Road Villas</CardTitle>
            <CardDescription>Premium Bifacial solar installations with ₹1,08,000 subsidy support.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/solar/residential">View Solar Packages</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <ShieldCheck className="h-10 w-10 text-blue-600 mb-2" />
            <CardTitle>Global Travel Insurance</CardTitle>
            <CardDescription>Schengen & Worldwide travel plans from TATA AIG with instant policy for Telibandha residents.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline" className="w-full">
              <Link href="/insurance">Compare Insurance</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section id="inquiry">
        <InquiryForm 
          title="Connect with Telibandha Expert"
          description="Local support for all your insurance and energy needs."
        />
      </section>
    </div>
  );
}
