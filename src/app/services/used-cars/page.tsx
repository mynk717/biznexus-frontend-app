// src/app/services/used-cars/page.tsx
import Link from "next/link";
import { CarFront, ShieldCheck, FileCheck, ArrowRight, Phone, Fuel, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata = {
  title: "Used Cars in Raipur | Verified Pre-Owned - MDNetwork x MotoYard",
  description: "Browse 20+ verified used cars in Raipur. Low KM, full documentation & TATA AIG insurance support from MDNetwork.",
};

const dummyCars = [
  {
    id: 1,
    name: "Maruti Suzuki Swift Dzire 1.3 ZXI",
    year: 2018,
    km: "70,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹5,25,000",
    color: "bg-orange-100 text-orange-800",
  },
  {
    id: 2,
    name: "Hyundai i20 Sportz 1.2 MT",
    year: 2024,
    km: "15,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹8,15,000",
    color: "bg-red-100 text-red-800",
  },
  {
    id: 3,
    name: "Maruti Grand Vitara 1.5 Zeta Smart Hybrid",
    year: 2023,
    km: "39,000",
    fuel: "Petrol",
    transmission: "Manual",
    price: "₹13,25,000",
    color: "bg-green-100 text-green-800",
  },
  {
    id: 4,
    name: "Mahindra Scorpio S5",
    year: 2022,
    km: "58,000",
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹13,75,000",
    color: "bg-indigo-100 text-indigo-800",
  },
  {
    id: 5,
    name: "Toyota Innova Crysta GX 8 STR",
    year: 2023,
    km: "87,000",
    fuel: "Diesel",
    transmission: "Manual",
    price: "₹19,50,000",
    color: "bg-purple-100 text-purple-800",
  },
  {
    id: 6,
    name: "Tata Punch Creative AMT",
    year: 2023,
    km: "32,000",
    fuel: "Petrol",
    transmission: "Automatic",
    price: "₹8,00,000",
    color: "bg-yellow-100 text-yellow-800",
  },
];

export default function UsedCarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-8 py-4 mb-8 shadow-2xl">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-semibold">Verified by MotoYard x MDNetwork</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl leading-tight">
            Verified Used Cars
            <span className="block text-2xl md:text-3xl text-blue-100">in Raipur</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-95 drop-shadow-lg">
            20+ pre-owned cars with low mileage, complete verification, 
            documentation support, and instant TATA AIG insurance.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg px-10 py-8 shadow-2xl h-auto font-semibold">
              <Link href="https://carstreets.motoyard.mktgdime.com/" target="_blank" rel="noopener">
                Browse All 20+ Cars
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-all" />
              </Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-10 py-8 border-2 h-auto font-semibold text-gray-900 bold">
              <Link href="/insurance/vehicle">Get Insurance Quote</Link>
            </Button>
          </div>
          
          <p className="mt-8 text-lg opacity-90">
            Low KM • Fully Verified • Insurance Ready
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12">
        {/* Featured Cars Grid */}
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12 pb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-gray-800 to-slate-900 bg-clip-text text-transparent mb-2">
                Featured Verified Cars
              </h2>
              <p className="text-lg text-gray-600 font-medium">Click any car to see full details on Carstreets</p>
            </div>
            <Button asChild variant="outline" size="lg" className="whitespace-nowrap">
              <Link href="https://carstreets.motoyard.mktgdime.com/" target="_blank" rel="noopener">
                View Complete Inventory
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {dummyCars.map((car) => (
              <Card 
                key={car.id} 
                className="group hover:shadow-2xl hover:shadow-blue-500/25 hover:border-blue-500/50 transition-all duration-500 border-2 overflow-hidden hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                {/* Car Color Placeholder */}
                <div className={`h-40 ${car.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                  <CarFront className="h-20 w-20 opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>
                
                <CardContent className="pt-6 pb-8 px-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full text-xs font-semibold text-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Verified
                    </div>
                    <CarFront className="h-6 w-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  
                  <CardTitle className="text-xl font-black mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {car.name}
                  </CardTitle>
                  
                  <div className="text-3xl font-black text-blue-600 mb-6 drop-shadow-lg">
                    {car.price}
                  </div>
                  
                  <div className="space-y-3 mb-8 text-sm">
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        📅
                      </div>
                      <span className="font-semibold text-gray-900">{car.year}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        🛣️
                      </div>
                      <span className="font-semibold text-gray-900">{car.km} KM</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <Fuel className="h-5 w-5 text-orange-600" />
                      <span className="font-semibold text-gray-900">{car.fuel}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                      <Settings className="h-5 w-5 text-gray-600" />
                      <span className="font-semibold text-gray-900">{car.transmission}</span>
                    </div>
                  </div>
                  
                  <Button
                    asChild
                    className="w-full h-14 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-xl group-hover:shadow-2xl transition-all duration-300 text-lg"
                  >
                    <Link
                      href="https://carstreets.motoyard.mktgdime.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Full Details on Carstreets
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Lead Capture + Support */}
        <section className="grid lg:grid-cols-2 gap-12 items-start">
          <Card className="shadow-2xl border-blue-100">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <CarFront className="h-8 w-8 text-blue-600" />
                Find Your Perfect Car
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <InquiryForm
                defaultServiceType="used-cars"
                title="Tell Us What You're Looking For"
                description="Budget? Model preference? Fuel type? We'll match you with cars from Carstreets and handle insurance + paperwork."
              />
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-xl border-green-100">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <FileCheck className="h-6 w-6 text-green-600" />
                  Complete Support Package
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50/50 rounded-2xl border-l-4 border-green-400">
                  <FileCheck className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Documentation</h4>
                    <p className="text-sm text-gray-700">RC transfer, NOC, full paperwork assistance</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-blue-50/50 rounded-2xl border-l-4 border-blue-400">
                  <ShieldCheck className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">TATA AIG Insurance</h4>
                    <p className="text-sm text-gray-700">Comprehensive, zero dep, instant quotes</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full h-16 text-xl shadow-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700">
              <a href="tel:+917225991909">
                <Phone className="mr-3 h-6 w-6" />
                Call Now: +91 72259 91909
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
