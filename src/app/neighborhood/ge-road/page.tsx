import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { MapPin, Sun, ShieldCheck, Phone, CheckCircle2, ArrowRight, Clock } from 'lucide-react';
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
    <div className="flex flex-col gap-16 py-8">
      {/* Hero Section */}
      <section className="nm-flat rounded-[50px] p-8 md:p-16 border-none">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="outline" className="nm-flat-sm border-none bg-blue-50 text-blue-700 px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
              <MapPin className="mr-2 h-3 w-3" />
              Serving GE Road, Amanaka & Tatibandh
            </Badge>
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-slate-100 leading-tight">
              GE Road's Leading Advisor for <span className="text-blue-600">Energy & Insurance</span>
            </h1>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-center text-slate-600 dark:text-slate-400 gap-3 font-medium">
                  <div className="nm-flat-sm p-1 rounded-full bg-white flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="nm-flat p-2 rounded-[40px] bg-white">
             <div className="bg-slate-900 p-10 rounded-[36px] text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl"></div>
                <p className="text-sm uppercase tracking-widest text-blue-400 font-black mb-4">Office Status</p>
                <p className="text-4xl font-black mb-2">Open Today</p>
                <p className="text-slate-400 font-medium">GE Road Corridor, Raipur</p>
                <button className="nm-button mt-10 w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg">
                  <a href="tel:+917225991909" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" /> Call Local Advisor
                  </a>
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <div className="grid md:grid-cols-2 gap-12">
        <div className="nm-flat p-8 rounded-[40px] space-y-6 flex flex-col">
          <div className="nm-flat-sm w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center">
            <Sun className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-800">Solar for GE Road</h3>
          <p className="text-slate-600 flex-grow">Optimize your energy costs with our commercial and residential solar installations on GE Road today. We handle 10kW+ industrial audits.</p>
          <Button asChild className="nm-button bg-transparent border-none text-orange-700 font-bold py-6 rounded-2xl">
            <Link href="/solar/residential" className="flex items-center gap-2">
              Explore Solar Plans <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="nm-flat p-8 rounded-[40px] space-y-6 flex flex-col">
          <div className="nm-flat-sm w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
            <ShieldCheck className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-black text-slate-800">TATA AIG Insurance</h3>
          <p className="text-slate-600 flex-grow">Dedicated insurance support for international travel, health, and life protection on the GE Road commercial corridor.</p>
          <Button asChild className="nm-button bg-transparent border-none text-blue-700 font-bold py-6 rounded-2xl">
            <Link href="/blog/ultimate-guide-international-travel-insurance-raipur" className="flex items-center gap-2">
              View Insurance Plans <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Hospital Banner */}
      <div className="nm-inset p-8 md:p-12 rounded-[50px] bg-blue-50/50 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3 space-y-6">
            <h3 className="text-3xl font-black text-blue-900">Cashless Healthcare Near GE Road</h3>
            <p className="text-lg text-blue-800 leading-relaxed font-medium">
              Living or working on GE Road? You have quick access to **Ramkrishna CARE** and **Shri Balaji Institute**. MDNetwork provides prioritized TATA AIG cashless admission support.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="nm-button bg-blue-600 text-white border-none py-6 px-8 rounded-2xl">
                <Link href="/insurance/health/cashless-hospitals">Local Network</Link>
              </Button>
              <Button asChild variant="outline" className="nm-button bg-white text-blue-700 border-none py-6 px-8 rounded-2xl font-bold">
                <Link href="/insurance/health">Health Plans</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 text-center nm-flat p-8 rounded-[40px] bg-white hidden md:block">
            <Clock className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black mb-2">GE Road Hotline</p>
            <p className="text-2xl font-black text-blue-900">+91 72259 91909</p>
          </div>
        </div>
      </div>

      {/* Resource Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-black tracking-tighter text-slate-800 dark:text-slate-100">Local Raipur Solar Resources</h2>
        <div className="grid sm:grid-cols-2 gap-8">
          <Link href="/blog/solar-subsidy-raipur-chhattisgarh-guide" className="nm-flat p-6 rounded-[32px] group transition-all hover:scale-105">
            <h4 className="font-black text-xl text-blue-600 mb-2">Solar Subsidy Guide 2026</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">How to claim ₹1.08 Lakh for GE Road residents.</p>
          </Link>
          <Link href="/blog/3-kilowatt-solar-panel-price-raipur-2026" className="nm-flat p-6 rounded-[32px] group transition-all hover:scale-105">
            <h4 className="font-black text-xl text-blue-600 mb-2">3kW Solar Price List</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">Detailed cost breakdown for Raipur residents.</p>
          </Link>
        </div>
      </section>

      {/* Other Areas */}
      <section className="nm-flat p-8 rounded-[40px] bg-slate-900 text-white">
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-400" /> Other Service Areas in Raipur
        </h3>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="nm-button bg-white/10 text-white border-none rounded-xl hover:bg-white/20">
            <Link href="/neighborhood/telibandha">Telibandha / VIP Road</Link>
          </Button>
          <Button asChild className="nm-button bg-white/10 text-white border-none rounded-xl hover:bg-white/20">
            <Link href="/neighborhood/shankar-nagar">Shankar Nagar</Link>
          </Button>
          <Button asChild className="nm-button bg-white/10 text-white border-none rounded-xl hover:bg-white/20">
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
