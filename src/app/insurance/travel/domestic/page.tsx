import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Plane,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Phone,
  TrainFront,
  BusFront,
  Shield,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import InquiryForm from '@/components/inquiry/InquiryForm';

export const metadata: Metadata = {
  title: 'Domestic Travel Insurance | TATA AIG | MDNetwork',
  description:
    'Domestic travel insurance for trips within India. Cover medical emergencies, trip cancellations, missed connections and more with TATA AIG via MDNetwork Raipur.',
};

export default function DomesticTravelInsurancePage() {
  const plans = [
    {
      name: 'Standard Domestic Plan',
      price: 'From ₹99/trip',
      idealFor: 'Short trips, weekend getaways, family visits',
      features: [
        'Accidental death & disability cover',
        'Emergency medical expenses',
        'Trip cancellation & curtailment',
        'Loss of checked-in baggage',
      ],
      popular: false,
    },
    {
      name: 'Domestic Plus Plan',
      price: 'From ₹199/trip',
      idealFor: 'Holiday packages, business trips, long journeys',
      features: [
        'Higher medical coverage',
        'Delay of checked-in baggage',
        'Missed flight / train connection',
        'Emergency hotel extension',
      ],
      popular: true,
    },
    {
      name: 'Family Domestic Plan',
      price: 'From ₹399/family',
      idealFor: 'Family vacations and group travel within India',
      features: [
        'Single policy for entire family',
        'Hospital cash benefit',
        '24x7 assistance helpline',
        'Coverage for kids & seniors',
      ],
      popular: false,
    },
  ];

  const useCases = [
    {
      icon: TrainFront,
      title: 'Train Journeys',
      desc: 'Long distance train travel across India with protection for delays and accidents.',
    },
    {
      icon: BusFront,
      title: 'Bus & Road Trips',
      desc: 'Outstation buses and road trips with medical and personal accident cover.',
    },
    {
      icon: Plane,
      title: 'Domestic Flights',
      desc: 'Flight delays, missed connections, baggage loss and more.',
    },
    {
      icon: MapPin,
      title: 'Holiday Packages',
      desc: 'Hill stations, beaches, pilgrimage or adventure trips within India.',
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <Badge variant="outline" className="inline-flex items-center gap-2">
          <Plane className="h-4 w-4" />
          Domestic Travel Insurance
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Protect Every Trip Within India
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
         Whether you are travelling by train, flight, bus or car, domestic travel insurance helps cover medical emergencies, trip cancellations, delays and baggage issues for journeys within India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="#plans">
              View Domestic Plans
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Talk to Travel Expert
            </a>
          </Button>
        </div>
      </section>

      {/* Where it helps */}
      <section className="bg-gray-50 -mx-4 px-4 py-10 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Ideal for All Types of Domestic Trips
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {useCases.map((item, i) => (
              <Card key={i}>
                <CardContent className="pt-6 space-y-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
                    <item.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Domestic Travel Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
           Choose a plan based on your trip type and budget. Premiums are low and coverage starts from your first day of travel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <Card
              key={i}
              className={plan.popular ? 'border-blue-600 border-2 relative' : ''}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="text-2xl font-bold text-blue-600">
                  {plan.price}
                </div>
                <p className="text-xs text-gray-500 mt-1">{plan.idealFor}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                  <Link href="#inquiry">Get Quote</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Coverage highlights */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg">What’s Typically Covered</h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Accidental death and permanent total disability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Emergency medical expenses during the trip</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Trip cancellation / curtailment due to covered reasons</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Delay or loss of checked-in baggage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Missed connection for onward journey (as per policy terms)</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-5 w-5 text-red-600" />
              <h3 className="font-semibold text-lg text-red-700">
                Please Note (General Exclusions)
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Existing medical conditions may not be covered immediately.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Travel against medical advice is usually excluded.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-gray-400 mt-0.5" />
                <span>Non-declared high-risk activities may not be covered.</span>
              </li>
              <li className="text-xs text-gray-500">
                Final coverage, limits and exclusions depend on the exact TATA AIG
                policy chosen. We’ll share full policy wording before you buy.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Inquiry form */}
      <section id="inquiry">
        <div className="max-w-3xl mx-auto">
          <InquiryForm
            defaultServiceType="domestic-travel-insurance"
            title="Get a Domestic Travel Insurance Quote"
            description="Share your trip details (dates, destination, number of travellers) and we’ll suggest the best TATA AIG domestic plan."
          />
        </div>
      </section>
    </div>
  );
}
