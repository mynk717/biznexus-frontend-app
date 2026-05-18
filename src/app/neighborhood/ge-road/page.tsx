import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, ArrowRight } from 'lucide-react';
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
            MDNetwork provides comprehensive TATA AIG insurance and high-efficiency solar solutions for the bustling GE Road area, catering to both residential and commercial clients.
          </p>
          <div className="flex justify-center gap-4">
             <Button asChild size="lg">
               <a href="tel:+917225991909">Call GE Road Consultant</a>
             </Button>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <Sun className="h-10 w-10 text-orange-600 mb-2" />
            <CardTitle>Solar for GE Road Businesses</CardTitle>
            <CardDescription>Optimize your energy costs with our commercial and residential solar installations on GE Road.</CardDescription>
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
            <CardDescription>Dedicated insurance support for international travel, health, and life protection on GE Road.</CardDescription>
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
          title="Inquiry for GE Road Area"
          description="Request a professional consultation today."
        />
      </section>
    </div>
  );
}
