import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle2, 
  XCircle, 
  Plane, 
  Heart, 
  Luggage, 
  Shield,
  Clock,
  Globe,
  FileText,
  PhoneCall,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { tataAigTravelPlans } from '@/data/insurance/tata-aig-travel';
import { destinations } from '@/data/insurance/destinations';

export const metadata: Metadata = {
  title: 'International Travel Insurance | TATA AIG Plans Starting ₹40/day',
  description: 'Get comprehensive international travel insurance from TATA AIG. Schengen visa compliant, COVID-19 coverage, medical emergencies up to $1M. Instant policy issuance.',
  keywords: ['international travel insurance', 'TATA AIG travel insurance', 'Schengen visa insurance', 'overseas travel insurance India'],
};

export default function InternationalTravelInsurancePage() {
  const schengenPlans = tataAigTravelPlans.schengen || [];
  const asiaPlans = tataAigTravelPlans.asia || [];
  const usaPlans = tataAigTravelPlans.usa || [];

  const popularDestinations = destinations.slice(0, 6);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white -mt-8 -mx-4 px-4 py-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              TATA AIG Authorized Partner
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              International Travel Insurance
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive coverage for your international trips. Schengen visa compliant, COVID-19 protection, medical emergencies up to $1,000,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="#plans">
                  View Plans & Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/contact">
                  Get Free Quote
                </Link>
              </Button>
            </div>

            {/* Quick Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <Clock className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-semibold">Instant Policy</div>
                <div className="text-sm text-blue-200">In 5 minutes</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-semibold">COVID-19</div>
                <div className="text-sm text-blue-200">Covered</div>
              </div>
              <div className="text-center">
                <Globe className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-semibold">Worldwide</div>
                <div className="text-sm text-blue-200">Coverage</div>
              </div>
              <div className="text-center">
                <PhoneCall className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                <div className="font-semibold">24/7 Support</div>
                <div className="text-sm text-blue-200">Global helpline</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What's Covered?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive protection for all aspects of your international travel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Heart className="h-10 w-10 text-red-600 mb-2" />
              <CardTitle className="text-lg">Medical Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Emergency medical treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>COVID-19 treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Emergency dental care</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Medical evacuation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Repatriation of remains</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Plane className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Trip Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Trip cancellation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Trip curtailment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Flight delay coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Missed connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lost passport assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Luggage className="h-10 w-10 text-purple-600 mb-2" />
              <CardTitle className="text-lg">Baggage Cover</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Lost baggage compensation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Baggage delay coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Personal belongings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Valuables protection</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 text-green-600 mb-2" />
              <CardTitle className="text-lg">Liability Cover</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Personal liability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Legal assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Accidental death</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Permanent disability</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Insurance Plans */}
      <section id="plans" className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Travel Insurance Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select coverage based on your destination and travel needs
          </p>
        </div>

        <Tabs defaultValue="schengen" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="schengen">Schengen</TabsTrigger>
            <TabsTrigger value="asia">Asia</TabsTrigger>
            <TabsTrigger value="usa">USA</TabsTrigger>
          </TabsList>

          {/* Schengen Plans */}
          <TabsContent value="schengen">
            <div className="grid md:grid-cols-3 gap-6">
              {schengenPlans.map((plan) => (
                <Card key={plan.id} className={plan.tier === 'platinum' ? 'border-2 border-blue-500 relative' : ''}>
                  {plan.tier === 'platinum' && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-blue-600">Most Popular</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>
                      Coverage up to ${plan.sumInsured.amount.toLocaleString()}
                    </CardDescription>
                    <div className="mt-4">
                      <div className="text-3xl font-bold">₹{plan.price.daily}</div>
                      <div className="text-sm text-gray-600">per day</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Medical Emergency</span>
                        <span className="font-semibold">${plan.coverage.medical.emergencies.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trip Cancellation</span>
                        <span className="font-semibold">${plan.coverage.travel.tripCancellation.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Baggage Loss</span>
                        <span className="font-semibold">${plan.coverage.baggage.loss.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Personal Liability</span>
                        <span className="font-semibold">${plan.coverage.liability.personal.toLocaleString()}</span>
                      </div>
                      
                      <div className="pt-3 border-t">
                        <div className="font-semibold mb-2">Key Features:</div>
                        <ul className="space-y-1">
                          {plan.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Buy Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Asia Plans */}
          <TabsContent value="asia">
            <div className="grid md:grid-cols-3 gap-6">
              {asiaPlans.length > 0 ? (
                asiaPlans.map((plan) => (
                  <Card key={plan.id}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>
                        Coverage up to ${plan.sumInsured.amount.toLocaleString()}
                      </CardDescription>
                      <div className="mt-4">
                        <div className="text-3xl font-bold">₹{plan.price.daily}</div>
                        <div className="text-sm text-gray-600">per day</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Medical Emergency</span>
                          <span className="font-semibold">${plan.coverage.medical.emergencies.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Trip Cancellation</span>
                          <span className="font-semibold">${plan.coverage.travel.tripCancellation.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Baggage Loss</span>
                          <span className="font-semibold">${plan.coverage.baggage.loss.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Buy Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 text-gray-500">
                  Asia plans coming soon. Contact us for quotes.
                </div>
              )}
            </div>
          </TabsContent>

          {/* USA Plans */}
          <TabsContent value="usa">
            <div className="grid md:grid-cols-3 gap-6">
              {usaPlans.length > 0 ? (
                usaPlans.map((plan) => (
                  <Card key={plan.id}>
                    <CardHeader>
                      <CardTitle>{plan.name}</CardTitle>
                      <CardDescription>
                        Coverage up to ${plan.sumInsured.amount.toLocaleString()}
                      </CardDescription>
                      <div className="mt-4">
                        <div className="text-3xl font-bold">₹{plan.price.daily}</div>
                        <div className="text-sm text-gray-600">per day</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Medical Emergency</span>
                          <span className="font-semibold">${plan.coverage.medical.emergencies.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Trip Cancellation</span>
                          <span className="font-semibold">${plan.coverage.travel.tripCancellation.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Baggage Loss</span>
                          <span className="font-semibold">${plan.coverage.baggage.loss.toLocaleString()}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/contact">
                          Buy Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12 text-gray-500">
                  USA plans coming soon. Contact us for quotes.
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Popular Destinations */}
      <section className="bg-gray-50 -mx-4 px-4 py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Get the right coverage for your destination
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularDestinations.map((dest) => (
              <Card key={dest.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{dest.name}</CardTitle>
                  <CardDescription className="text-xs">
                    From ₹{dest.dailyRate}/day
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-3">
                  <div className="text-xs space-y-1">
                    {dest.insuranceMandatory && (
                      <Badge variant="secondary" className="text-xs">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        Mandatory
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white -mx-4 px-4 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing a Plan?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our insurance experts are here to guide you. Get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contact">
                <PhoneCall className="mr-2 h-5 w-5" />
                Call: +91 72259 91909
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">
                Get Free Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
