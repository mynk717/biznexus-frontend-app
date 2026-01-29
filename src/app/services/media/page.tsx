// src/app/services/media/page.tsx
import Link from "next/link";
import { Megaphone, Instagram, Youtube, Facebook, Zap, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata = {
  title: "Media & Marketing | Social Ads, Branding - MDNetwork x MKTDM",
  description: "Social media management, Google/FB ads, branding, creatives for Raipur businesses. Quotes at mktgdime.com.",
};

const mediaServices = [
  {
    id: 1,
    name: "Social Media",
    description: "Instagram, Facebook, YouTube management & growth",
    icon: Instagram,
    color: "bg-pink-100 text-pink-800",
  },
  {
    id: 2,
    name: "Paid Ads",
    description: "Google Ads, Facebook Ads, targeted campaigns",
    icon: Megaphone,
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: 3,
    name: "Branding & Creatives",
    description: "Logo design, video editing, marketing collateral",
    icon: Youtube,
    color: "bg-purple-100 text-purple-800",
  },
];

export default function MediaServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-rose-600 to-orange-600" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-8 py-4 mb-8 shadow-2xl">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-semibold">Powered by MKTDM</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
            Media & Marketing
            <span className="block text-2xl md:text-3xl text-orange-100">for Raipur Growth</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-95 drop-shadow-lg">
            Social media domination, targeted ads, professional branding. 
            Scale your business with MKTDM expertise.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg px-10 py-8 shadow-2xl h-auto font-semibold bg-white text-rose-600 hover:bg-rose-50">
              <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                Start Campaign on MKTDM
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-all" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-10 py-8 border-2 border-white/50 h-auto font-semibold hover:bg-white/20 text-gray-900">
              <Link href="/services/digital">View Digital Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 space-y-16">
        {/* Featured Services */}
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-rose-900 to-orange-900 bg-clip-text text-transparent mb-2">
                Growth Services
              </h2>
              <p className="text-lg text-gray-600 font-medium">Click for quotes & strategy sessions on mktgdime.com</p>
            </div>
            <Button asChild variant="outline" size="lg">
              <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                Full Services → MKTDM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaServices.map((service) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-2xl hover:shadow-rose-500/25 hover:border-rose-500/50 transition-all duration-500 border-2 overflow-hidden hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <div className={`h-32 ${service.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <service.icon className="h-16 w-16 opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
                
                <CardContent className="pt-8 pb-8 px-6">
                  <CardTitle className="text-2xl font-black mb-4 group-hover:text-rose-600 transition-colors">
                    {service.name}
                  </CardTitle>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Button
                    asChild
                    className="w-full h-14 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-semibold shadow-xl group-hover:shadow-2xl transition-all"
                  >
                    <Link href="https://mktgdime.com/" target="_blank" rel="noopener">
                      Launch Campaign
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Platforms We Manage */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="text-center p-8 border-2 border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all">
            <Instagram className="h-16 w-16 mx-auto mb-4 text-pink-600" />
            <h3 className="text-xl font-bold mb-2">Instagram</h3>
            <p className="text-gray-600">Content + growth + ads</p>
          </Card>
          <Card className="text-center p-8 border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all">
            <Facebook className="h-16 w-16 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-bold mb-2">Facebook</h3>
            <p className="text-gray-600">Audience targeting + ads</p>
          </Card>
          <Card className="text-center p-8 border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all">
            <Youtube className="h-16 w-16 mx-auto mb-4 text-red-600" />
            <h3 className="text-xl font-bold mb-2">YouTube</h3>
            <p className="text-gray-600">Video SEO + channel growth</p>
          </Card>
        </section>

        {/* Lead Capture */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-2xl border-rose-100">
            <CardHeader className="bg-gradient-to-r from-rose-50 to-pink-50">
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <Megaphone className="h-8 w-8 text-rose-600" />
                Ready to Scale Your Brand?
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <InquiryForm
                defaultServiceType="media-marketing"
                title="Start Your Marketing Journey"
                description="Business goals? Target audience? Budget? We'll match you with MKTDM marketing experts."
              />
            </CardContent>
          </Card>

          <div className="space-y-6 lg:col-span-1">
            <Card className="shadow-xl border-orange-100">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Zap className="h-6 w-6 text-orange-600" />
                  What We Deliver
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4 text-sm">
                <div className="flex items-center gap-3 p-3 bg-orange-50/50 rounded-xl">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full" />
                  <div>
                    <h4 className="font-semibold mb-1">3x Engagement Growth</h4>
                    <p>Proven social media strategies</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-pink-50/50 rounded-xl">
                  <div className="w-2 h-8 bg-gradient-to-b from-pink-400 to-rose-600 rounded-full" />
                  <div>
                    <h4 className="font-semibold mb-1">ROI-Focused Ads</h4>
                    <p>Google + Meta ad campaigns</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full h-16 text-xl shadow-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700">
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
