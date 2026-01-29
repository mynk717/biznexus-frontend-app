// src/app/services/digital/page.tsx
import Link from "next/link";
import { Code, Smartphone, Zap, Megaphone, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata = {
  title: "Digital, Web & Apps | Custom Sites & Automation - MDNetwork x MKTDM",
  description: "Next.js websites, automation tools, SaaS apps for Raipur businesses. Redirects to mktgdime.com for quotes & demos.",
};

const digitalServices = [
  {
    id: 1,
    name: "Custom Websites",
    description: "Next.js + Tailwind responsive sites for businesses",
    icon: Code,
    color: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    name: "Web Apps & SaaS",
    description: "Multi-tenant dashboards, ERP, business tools",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 3,
    name: "Automation Tools",
    description: "Google Sheets API, WhatsApp Business, Redis caching",
    icon: Zap,
    color: "bg-emerald-100 text-emerald-800",
  },
];

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-8 py-4 mb-8 shadow-2xl">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-semibold">Powered by MKTDM</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
            Digital, Web & Apps
            <span className="block text-2xl md:text-3xl text-blue-100">for Raipur Businesses</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-95 drop-shadow-lg">
            Custom Next.js websites, SaaS apps, automation tools. 
            Get quotes & demos at mktgdime.com.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg px-10 py-8 shadow-2xl h-auto font-semibold">
              <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                Get Quote on MKTDM
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-all" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-10 py-8 border-2 h-auto font-semibold text-gray-900">
              <Link href="/services/media">View Marketing Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 space-y-16">
        {/* Featured Services */}
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900 bg-clip-text text-transparent mb-2">
                What We Build
              </h2>
              <p className="text-lg text-gray-600 font-medium">Click to get quotes on mktgdime.com</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                Full Portfolio → MKTDM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalServices.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-500/50 transition-all duration-500 border-2 overflow-hidden hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <div className={`h-32 ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <service.icon className="h-16 w-16 opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
                
                <CardContent className="pt-8 pb-8 px-6">
                  <CardTitle className="text-2xl font-black mb-4 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button
                    asChild
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-xl group-hover:shadow-2xl transition-all"
                  >
                    <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                      Get Quote & Demo
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lead Capture */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-2xl border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <Code className="h-8 w-8 text-blue-600" />
                Ready for Digital Transformation?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <InquiryForm
                defaultServiceType="digital-web-apps"
                title="Describe Your Project"
                description="Website? SaaS app? Automation? We'll connect you with MKTDM for quotes & demos."
              />
            </CardContent>
          </Card>

          <div className="space-y-6 lg:col-span-1">
            <Card className="shadow-xl border-emerald-100">
              <CardHeader className="bg-gradient-to-r from-emerald-50 to-green-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Zap className="h-6 w-6 text-emerald-600" />
                  Tech Stack We Use
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <Code className="h-4 w-4" />
                    Next.js 15
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <Zap className="h-4 w-4" />
                    Tailwind CSS
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <Smartphone className="h-4 w-4" />
                    React + TypeScript
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-emerald-800">
                    <ShieldCheck className="h-4 w-4" />
                    Vercel + Redis
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full h-16 text-xl shadow-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
              <a href="tel:+917225991909">
                <Phone className="mr-3 h-6 w-6" />
                Call: +91 72259 91909
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
