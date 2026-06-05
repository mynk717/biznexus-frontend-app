import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Hospital, 
  MapPin, 
  CheckCircle2, 
  PhoneCall, 
  ArrowRight, 
  Search,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { raipurCashlessHospitals } from '@/data/insurance/raipur-hospitals';

export const metadata: Metadata = {
  title: 'TATA AIG Cashless Hospitals in Raipur | 2026 Network List',
  description: 'View the complete list of TATA AIG cashless hospitals in Raipur. Find network hospitals in Shankar Nagar, Pachpedi Naka, and Lalpur for cashless treatment.',
  keywords: ['cashless hospitals Raipur', 'TATA AIG network hospitals Raipur', 'Ramkrishna Care Raipur insurance', 'MMI Narayana Raipur cashless'],
};

export default function CashlessHospitalsPage() {
  const hospitalsByNeighborhood = raipurCashlessHospitals.reduce((acc, hospital) => {
    if (!acc[hospital.neighborhood]) {
      acc[hospital.neighborhood] = [];
    }
    acc[hospital.neighborhood].push(hospital);
    return acc;
  }, {} as Record<string, typeof raipurCashlessHospitals>);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white -mt-8 -mx-4 px-4 py-16 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
            2026 Verified Network
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            TATA AIG Cashless Hospitals in Raipur
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Access world-class healthcare without the cash-flow stress. Find the nearest verified TATA AIG network hospital in your Raipur neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="#network">
                Browse Hospitals
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+917225991909">
                <PhoneCall className="mr-2 h-5 w-5" />
                Emergency Help
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Blocks */}
      <section className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Zero Cash Deposit</h3>
            <p className="text-sm text-gray-600">No upfront deposits required at verified network hospitals for planned or emergency treatments.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
              <Stethoscope className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Top Specialists</h3>
            <p className="text-sm text-gray-600">Access Raipur's best cardiologists, oncologists, and surgeons at MMI and Ramkrishna CARE.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
              <Hospital className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-2">Direct Settlement</h3>
            <p className="text-sm text-gray-600">TATA AIG settles bills directly with the hospital. You only pay for non-medical expenses.</p>
          </div>
        </div>
      </section>

      {/* Neighborhood List */}
      <section id="network" className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Hospitals by Neighborhood</h2>
            <p className="text-gray-600">Choose your area to see verified cashless facilities nearby.</p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search neighborhood or hospital..." 
              className="w-full pl-10 pr-4 py-2 border rounded-xl bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(hospitalsByNeighborhood).map(([neighborhood, list]) => (
            <div key={neighborhood}>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-500" />
                {neighborhood}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {list.map((hospital) => (
                  <Card key={hospital.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={hospital.status === 'Verified Cashless' ? 'default' : 'outline'} className={hospital.status === 'Verified Cashless' ? 'bg-green-600' : ''}>
                          {hospital.status}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{hospital.name}</CardTitle>
                      <CardDescription className="flex flex-col gap-2 mt-2">
                        <div className="flex items-start gap-1">
                          <MapPin className="h-3 w-3 mt-1 shrink-0" />
                          <span className="text-xs">{hospital.address}</span>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 font-bold">
                          <PhoneCall className="h-3 w-3" />
                          <a href={`tel:${hospital.phone}`} className="text-xs hover:underline">{hospital.phone}</a>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-slate-500 uppercase mb-2">Best For:</p>
                          <p className="text-sm font-semibold text-blue-700">{hospital.bestFor}</p>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {hospital.specialties.map(spec => (
                            <span key={spec} className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-[10px]">
                              {spec}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-2 pt-0">
                      {hospital.website && (
                        <Button asChild variant="link" className="text-blue-600 text-xs h-auto p-0 justify-start">
                          <a href={hospital.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            Official Website <ArrowRight className="h-3 w-3" />
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="outline" className="w-full text-xs">
                        <Link href="/contact">Book Admission Help</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EEAT: Expert Section */}
      <section className="container mx-auto">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center">
          <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white shadow-lg overflow-hidden">
             {/* Placeholder for Expert Image */}
             <Hospital className="h-16 w-16 text-blue-600" />
          </div>
          <div>
            <Badge className="bg-blue-600 mb-4">Verified Network Expert</Badge>
            <h3 className="text-2xl font-bold mb-2">Guided by MDNetwork Health Advisory</h3>
            <p className="text-slate-600 mb-6 max-w-3xl">
              This list is curated and verified by our Raipur-based insurance coordination team. We maintain direct relationships with the TPA desks at **Ramkrishna CARE** and **MMI Narayana** to ensure our TATA AIG policyholders receive priority cashless processing. Our authority comes from managing **200+ successful cashless admissions** across Chhattisgarh in 2025-26.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> 2026 Network Verified
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <CheckCircle2 className="h-5 w-5 text-green-600" /> Direct TPA Coordination
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Claim Assistance Banner */}
      <section className="container mx-auto">
        <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[40px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">TATA AIG Admission & Claim Support</h2>
              <p className="text-slate-400 mb-6">Already have a policy? Stuck with pre-authorization or hospital paperwork? Our local Raipur team helps MDNetwork clients with dedicated claim liaisoning at no extra cost.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>24-Hour Emergency Assistance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Planned Surgery Pre-Auth Coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span>Documentation Support for Reimbursement</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Activate My Support</Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center p-12">
                <div className="text-center">
                  <PhoneCall className="h-16 w-16 mx-auto mb-6 text-blue-400" />
                  <p className="text-2xl font-black mb-2">+91 72259 91909</p>
                  <p className="text-slate-500 uppercase tracking-widest text-xs">Raipur Local Hotline</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
