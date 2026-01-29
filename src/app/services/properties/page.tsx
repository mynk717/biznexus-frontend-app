// src/app/services/properties/page.tsx
import Link from "next/link";
import { Building2, Home, LandPlot, MapPin, IndianRupee, Ruler, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import InquiryForm from "@/components/inquiry/InquiryForm";

export const metadata = {
  title: "Properties in Raipur | Land, Flats & Houses - MDNetwork",
  description: "Buy verified land, residential flats, and houses in Raipur with documentation support and legal assistance from MDNetwork.",
};

// Dummy scraped properties (realistic Raipur data)
const featuredProperties = [
  {
    id: 1,
    type: "Land",
    title: "Residential Plot in Telibandha",
    location: "Telibandha, Raipur",
    price: "₹45 Lakh",
    area: "1200 sq.ft",
    description: "Clear title, near GE Road, ready for construction",
    icon: LandPlot,
    color: "bg-green-100 text-green-800",
    verified: true,
  },
  {
    id: 2,
    type: "Flat",
    title: "2 BHK Flat in Devendra Nagar",
    location: "Devendra Nagar, Raipur",
    price: "₹38 Lakh",
    area: "1050 sq.ft",
    description: "Semi-furnished, 3rd floor, covered parking",
    icon: Building2,
    color: "bg-blue-100 text-blue-800",
    verified: true,
  },
  {
    id: 3,
    type: "House",
    title: "3 BHK Independent House Kota",
    location: "Kota, Raipur",
    price: "₹85 Lakh",
    area: "1800 sq.ft",
    description: "Fully furnished, modular kitchen, gated community",
    icon: Home,
    color: "bg-purple-100 text-purple-800",
    verified: true,
  },
  {
    id: 4,
    type: "Land",
    title: "Commercial Plot near Pandri",
    location: "Pandri, Raipur",
    price: "₹1.2 Cr",
    area: "2500 sq.ft",
    description: "Main road facing, ideal for showroom/office",
    icon: LandPlot,
    color: "bg-orange-100 text-orange-800",
    verified: true,
  },
  {
    id: 5,
    type: "Flat",
    title: "3 BHK Luxury Flat Magneto Mall",
    location: "Near Magneto Mall, Raipur",
    price: "₹65 Lakh",
    area: "1450 sq.ft",
    description: "Premium society, gym, swimming pool, lift",
    icon: Building2,
    color: "bg-indigo-100 text-indigo-800",
    verified: true,
  },
  {
    id: 6,
    type: "House",
    title: "4 BHK Villa in Shankar Nagar",
    location: "Shankar Nagar, Raipur",
    price: "₹1.5 Cr",
    area: "2800 sq.ft",
    description: "Corner plot, terrace garden, car porch",
    icon: Home,
    color: "bg-rose-100 text-rose-800",
    verified: true,
  },
];

const propertyTypes = [
  {
    name: "Residential Land",
    description: "Plots for home construction",
    count: "50+ listings",
    icon: LandPlot,
  },
  {
    name: "Flats & Apartments",
    description: "1/2/3 BHK ready to move",
    count: "120+ listings",
    icon: Building2,
  },
  {
    name: "Independent Houses",
    description: "Villas and bungalows",
    count: "80+ listings",
    icon: Home,
  },
];

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 mb-16 overflow-hidden rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700" />
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 px-8 py-4 mb-8 shadow-2xl">
            <ShieldCheck className="h-6 w-6" />
            <span className="text-lg font-semibold">Verified Properties in Raipur</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl">
            Land, Flats & Houses
            <span className="block text-2xl md:text-3xl text-purple-100">in Raipur, Chhattisgarh</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 opacity-95 drop-shadow-lg">
            250+ verified properties with clear documentation, 
            legal assistance, and trusted partners across Raipur.
          </p>

          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button asChild size="lg" className="text-lg px-10 py-8 shadow-2xl h-auto font-semibold">
              <a href="#inquiry">
                Submit Your Requirement
                <ArrowRight className="ml-3 h-6 w-6" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg" className="text-lg px-10 py-8 border-2 h-auto font-semibold text-gray-900 bold">
              <Link href="/contact">Talk to Property Expert</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5" />
              Legal Verification
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Prime Locations
            </div>
            <div className="flex items-center gap-2">
              <IndianRupee className="h-5 w-5" />
              Best Prices
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-12 space-y-16">
        {/* Property Types */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {propertyTypes.map((type, idx) => (
            <Card key={idx} className="text-center p-8 border-2 hover:border-purple-300 hover:shadow-xl transition-all group">
              <type.icon className="h-16 w-16 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">{type.name}</h3>
              <p className="text-gray-600 mb-3">{type.description}</p>
              <Badge variant="secondary" className="text-sm">{type.count}</Badge>
            </Card>
          ))}
        </section>

        {/* Featured Properties */}
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 bg-clip-text text-transparent mb-2">
                Featured Properties
              </h2>
              <p className="text-lg text-gray-600 font-medium">Submit inquiry below to get full details & site visits</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {featuredProperties.map((property) => (
              <Card 
                key={property.id} 
                className="group hover:shadow-2xl hover:shadow-purple-500/25 hover:border-purple-500/50 transition-all duration-500 border-2 overflow-hidden hover:scale-[1.02] hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <div className={`h-32 ${property.color} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <property.icon className="h-16 w-16 opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>

                <CardContent className="pt-6 pb-8 px-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                      {property.type}
                    </Badge>
                    {property.verified && (
                      <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                        <ShieldCheck className="h-4 w-4" />
                        Verified
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-xl font-black mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                    {property.title}
                  </CardTitle>

                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{property.location}</span>
                  </div>

                  <div className="text-3xl font-black text-purple-600 mb-4">
                    {property.price}
                  </div>

                  <div className="space-y-2 mb-6 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Ruler className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold">{property.area}</span>
                    </div>
                    <p className="text-gray-600 line-clamp-2">{property.description}</p>
                  </div>

                  <Button
                    asChild
                    className="w-full h-12 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold shadow-lg group-hover:shadow-xl transition-all"
                  >
                    <a href="#inquiry">
                      View Details & Book Visit
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="grid md:grid-cols-2 gap-8 bg-gradient-to-br from-purple-50 to-blue-50 -mx-4 px-4 py-12 rounded-3xl mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose MDNetwork for Properties?</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Legal Verification</h3>
                  <p className="text-sm text-gray-600">Complete documentation check, title clearance, NOC assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Prime Locations</h3>
                  <p className="text-sm text-gray-600">Telibandha, Devendra Nagar, Kota, Pandri, Shankar Nagar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IndianRupee className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Best Market Rates</h3>
                  <p className="text-sm text-gray-600">Transparent pricing, no hidden charges, trusted partners</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Popular Areas in Raipur</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Telibandha
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Devendra Nagar
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Shankar Nagar
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Kota
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Pandri
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Magneto Area
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                VIP Road
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-600" />
                Byron Bazar
              </div>
            </div>
          </div>
        </section>

        {/* Lead Capture Form */}
        <section id="inquiry" className="grid lg:grid-cols-2 gap-12 items-start scroll-mt-20">
          <Card className="shadow-2xl border-purple-100">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-indigo-50">
              <CardTitle className="text-2xl font-black flex items-center gap-3">
                <Building2 className="h-8 w-8 text-purple-600" />
                Submit Your Requirement
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <InquiryForm
                defaultServiceType="properties"
                title="Tell Us What You're Looking For"
                description="Budget? Location? Property type? We'll match you with verified listings and arrange site visits."
              />
              <p className="mt-4 text-xs text-gray-500 text-center">
                ✓ 100% verified properties ✓ Legal documentation support ✓ Free site visits
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6 lg:col-span-1">
            <Card className="shadow-xl border-orange-100">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-amber-50">
                <CardTitle className="text-xl font-bold flex items-center gap-2">
                  <Phone className="h-6 w-6 text-orange-600" />
                  Immediate Assistance
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4 text-sm">
                <div className="flex items-center gap-3 p-4 bg-orange-50/50 rounded-xl border-l-4 border-orange-400">
                  <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Talk to Property Expert</h4>
                    <p className="text-gray-600">Mon-Sat: 9 AM - 7 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-purple-50/50 rounded-xl border-l-4 border-purple-400">
                  <MapPin className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Free Site Visits</h4>
                    <p className="text-gray-600">Arrange visits to shortlisted properties</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button asChild className="w-full h-16 text-xl shadow-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
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