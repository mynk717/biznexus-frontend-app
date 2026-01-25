'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, Users, MapPin, IndianRupee, CheckCircle2, ArrowRight } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import { cn } from '@/lib/utils';
import { tataAigTravelPlans, TravelPlan } from '@/data/insurance/tata-aig-travel';
import Link from 'next/link';

interface CalculatorProps {
  defaultDestinationType?: 'schengen' | 'asia' | 'usa' | 'worldwide';
}

export default function PremiumCalculator({ defaultDestinationType = 'schengen' }: CalculatorProps) {
  const [destinationType, setDestinationType] = useState(defaultDestinationType);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [travelers, setTravelers] = useState<number>(1);
  const [ageGroup, setAgeGroup] = useState<string>('adult');

  // Calculate trip duration
  const tripDuration = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const days = differenceInDays(endDate, startDate) + 1;
    return days > 0 ? days : 0;
  }, [startDate, endDate]);

  // Get available plans
  const availablePlans = useMemo(() => {
    return tataAigTravelPlans[destinationType] || [];
  }, [destinationType]);

  // Calculate premium for each plan
  const calculatedPlans = useMemo(() => {
    if (tripDuration === 0 || travelers === 0) return [];

    return availablePlans.map((plan) => {
      let basePrice = plan.price.daily * tripDuration * travelers;
      
      // Age multiplier
      let ageMultiplier = 1;
      if (ageGroup === 'senior') {
        ageMultiplier = 1.5; // 50% higher for seniors
      } else if (ageGroup === 'child') {
        ageMultiplier = 0.8; // 20% discount for children
      }

      const totalPremium = Math.round(basePrice * ageMultiplier);
      const gst = Math.round(totalPremium * 0.18); // 18% GST
      const finalAmount = totalPremium + gst;

      return {
        ...plan,
        calculatedPremium: totalPremium,
        gst,
        finalAmount,
      };
    });
  }, [availablePlans, tripDuration, travelers, ageGroup]);

  const isCalculationReady = startDate && endDate && tripDuration > 0 && travelers > 0;

  return (
    <div className="space-y-8">
      {/* Calculator Form */}
      <Card>
        <CardHeader>
          <CardTitle>Calculate Your Travel Insurance Premium</CardTitle>
          <CardDescription>
            Get instant quotes for your international travel insurance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Destination Type */}
            <div className="space-y-2">
              <Label htmlFor="destination">
                <MapPin className="inline h-4 w-4 mr-2" />
                Destination Region
              </Label>
              <Select value={destinationType} onValueChange={(value: any) => setDestinationType(value)}>
                <SelectTrigger id="destination">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="schengen">Schengen Countries (Europe)</SelectItem>
                  <SelectItem value="asia">Asia & Middle East</SelectItem>
                  <SelectItem value="usa">USA & Canada</SelectItem>
                  <SelectItem value="worldwide">Worldwide</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Travelers */}
            <div className="space-y-2">
              <Label htmlFor="travelers">
                <Users className="inline h-4 w-4 mr-2" />
                Number of Travelers
              </Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                max="10"
                value={travelers}
                onChange={(e) => setTravelers(parseInt(e.target.value) || 1)}
              />
            </div>

            {/* Start Date */}
            <div className="space-y-2">
              <Label>
                <CalendarIcon className="inline h-4 w-4 mr-2" />
                Trip Start Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !startDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, 'PPP') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={setStartDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* End Date */}
            <div className="space-y-2">
              <Label>
                <CalendarIcon className="inline h-4 w-4 mr-2" />
                Trip End Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !endDate && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, 'PPP') : 'Pick a date'}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={setEndDate}
                    disabled={(date) => !startDate || date < startDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Age Group */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="ageGroup">Traveler Age Group</Label>
              <Select value={ageGroup} onValueChange={setAgeGroup}>
                <SelectTrigger id="ageGroup">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="child">Children (3-17 years) - 20% discount</SelectItem>
                  <SelectItem value="adult">Adults (18-59 years)</SelectItem>
                  <SelectItem value="senior">Senior Citizens (60-80 years) - Additional cost</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Trip Summary */}
            {isCalculationReady && (
              <div className="md:col-span-2 bg-blue-50 p-4 rounded-lg">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-700">{tripDuration}</div>
                    <div className="text-sm text-gray-600">Days</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-700">{travelers}</div>
                    <div className="text-sm text-gray-600">Traveler{travelers > 1 ? 's' : ''}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-700 capitalize">{destinationType}</div>
                    <div className="text-sm text-gray-600">Region</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      {isCalculationReady && calculatedPlans.length > 0 && (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Available Plans for Your Trip</h3>
            <p className="text-gray-600">Compare and choose the best coverage for your needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {calculatedPlans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={cn(
                  "relative",
                  index === 1 && "border-2 border-blue-500 shadow-lg"
                )}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-600">Recommended</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{plan.name}</CardTitle>
                    <Badge variant="outline">{plan.tier}</Badge>
                  </div>
                  <CardDescription>
                    Coverage up to ${plan.sumInsured.amount.toLocaleString()}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Price Breakdown */}
                  <div className="space-y-2 pb-4 border-b">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Base Premium</span>
                      <span className="font-medium">₹{plan.calculatedPremium.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">GST (18%)</span>
                      <span className="font-medium">₹{plan.gst.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="font-semibold">Total Amount</span>
                      <span className="text-2xl font-bold text-blue-700">
                        ₹{plan.finalAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="text-xs text-center text-gray-500">
                      ≈ ₹{Math.round(plan.finalAmount / tripDuration)} per day
                    </div>
                  </div>

                  {/* Key Coverage */}
                  <div className="space-y-2">
                    <div className="text-sm font-semibold mb-2">Key Coverage:</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Medical Emergency</span>
                        <span className="font-medium">${plan.coverage.medical.emergencies.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Trip Cancellation</span>
                        <span className="font-medium">${plan.coverage.travel.tripCancellation.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Baggage Loss</span>
                        <span className="font-medium">${plan.coverage.baggage.loss.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {plan.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-col gap-2">
                  <Button asChild className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                    <Link href="/contact">
                      Buy Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="w-full">
                    <Link href={`/insurance/travel/international#${plan.id}`}>
                      View Full Details
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <div className="font-semibold text-blue-900">Instant Policy Issuance</div>
                  <p className="text-sm text-blue-700">
                    Get your policy document via email within 5 minutes of payment. No paperwork, no waiting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* No Plans Available */}
      {isCalculationReady && calculatedPlans.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-gray-600 mb-4">
              No plans available for the selected destination. Please contact us for a custom quote.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Initial State */}
      {!isCalculationReady && (
        <Card className="bg-gray-50">
          <CardContent className="py-12 text-center">
            <CalendarIcon className="h-12 w-12 mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">
              Fill in the details above to calculate your travel insurance premium
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
