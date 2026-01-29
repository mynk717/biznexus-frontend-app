import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Compare Travel Insurance Plans | TATA AIG | MDNetwork',
  description:
    'Compare domestic, international, student, senior, and annual multi-trip travel insurance plans side-by-side. Find the best TATA AIG plan for your needs.',
};

export default function CompareTravelInsurancePage() {
  const plans = [
    {
      name: 'Domestic Travel',
      href: '/insurance/travel/domestic',
      description: 'Trips within India',
      bestFor: 'Domestic travelers',
      features: [
        {
          name: 'Price',
          domestic: 'From ₹99/trip',
          international: '—',
          student: '—',
          senior: 'From ₹249/trip',
          multiTrip: '—',
        },
        {
          name: 'Coverage Area',
          domestic: 'India only',
          international: '—',
          student: '—',
          senior: 'India only',
          multiTrip: '—',
        },
        {
          name: 'Medical Coverage',
          domestic: 'Up to ₹2-5 lakh',
          international: '—',
          student: '—',
          senior: 'Up to ₹5 lakh',
          multiTrip: '—',
        },
        {
          name: 'Trip Cancellation',
          domestic: true,
          international: '—',
          student: '—',
          senior: true,
          multiTrip: '—',
        },
        {
          name: 'Baggage Coverage',
          domestic: true,
          international: '—',
          student: '—',
          senior: true,
          multiTrip: '—',
        },
        {
          name: 'Pre-existing Conditions',
          domestic: false,
          international: '—',
          student: '—',
          senior: true,
          multiTrip: '—',
        },
      ],
    },
  ];

  const fullComparison = [
    {
      feature: 'Price Range',
      domestic: 'From ₹99/trip',
      international: 'From ₹2,499/trip',
      student: 'From ₹2,499/trip',
      senior: 'From ₹249/trip (domestic)',
      multiTrip: 'From ₹7,999/year',
    },
    {
      feature: 'Coverage Area',
      domestic: 'India only',
      international: 'Worldwide',
      student: 'Study destination',
      senior: 'Worldwide',
      multiTrip: 'Worldwide',
    },
    {
      feature: 'Trip Duration',
      domestic: '7-30 days',
      international: 'Up to 90 days',
      student: 'Up to 12 months',
      senior: '7-30 days',
      multiTrip: 'Up to 90 days per trip',
    },
    {
      feature: 'Max Medical Coverage',
      domestic: '₹2-5 lakh',
      international: '$100,000+',
      student: '$100,000-200,000',
      senior: '₹5 lakh-$100,000',
      multiTrip: '$150,000-200,000',
    },
    {
      feature: 'Trip Cancellation',
      domestic: '✓',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
    {
      feature: 'Baggage Loss',
      domestic: '✓',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
    {
      feature: 'Travel Delay',
      domestic: '✓',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
    {
      feature: 'Pre-existing Conditions',
      domestic: '✗',
      international: '✗',
      student: '✗',
      senior: '✓ (declared)',
      multiTrip: '✗',
    },
    {
      feature: 'Schengen Compliant',
      domestic: '—',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
    {
      feature: 'Unlimited Trips',
      domestic: '✗',
      international: '✗',
      student: '✗',
      senior: '✗',
      multiTrip: '✓',
    },
    {
      feature: 'Family Coverage Available',
      domestic: '✓',
      international: '✗',
      student: '✗',
      senior: '✗',
      multiTrip: '✓',
    },
    {
      feature: 'Repatriation',
      domestic: '✗',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
    {
      feature: ' 24/7 Assistance',
      domestic: '✓',
      international: '✓',
      student: '✓',
      senior: '✓',
      multiTrip: '✓',
    },
  ];

  const whichPlanFor = [
    {
      scenario: 'Weekend trips within India',
      plan: 'Domestic Travel',
      reason: 'Affordable, covers domestic emergencies',
    },
    {
      scenario: 'Vacation to Europe or USA',
      plan: 'International Travel',
      reason: 'Worldwide coverage, Schengen compliant, high medical limits',
    },
    {
      scenario: 'Studying abroad',
      plan: 'Student Travel',
      reason: 'Annual coverage, academic protection, affordable',
    },
    {
      scenario: 'Visiting family at 65+',
      plan: 'Senior Citizen Travel',
      reason: 'Pre-existing conditions covered, higher medical limits',
    },
    {
      scenario: 'Monthly business trips',
      plan: 'Annual Multi-Trip',
      reason: 'Unlimited trips, saves 40-50% vs. single policies',
    },
    {
      scenario: '2-3 trips a year mixed travel',
      plan: 'Annual Multi-Trip',
      reason: 'More economical, always covered',
    },
    {
      scenario: 'One-off international trip',
      plan: 'International Travel',
      reason: 'Single purchase, simple process, full coverage',
    },
    {
      scenario: 'Family vacation abroad',
      plan: 'International or Annual Family',
      reason: 'Group discounts, single policy for family',
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Hero */}
      <section className="text-center space-y-4">
        <Badge variant="outline">Compare Plans</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">
          Find Your Perfect Travel Insurance Plan
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer 5 types of TATA AIG travel insurance plans. Compare features,
          coverage, and pricing to find the one that suits your travel style.
        </p>
      </section>

      {/* Quick Selector */}
      <section className="bg-blue-50 -mx-4 px-4 py-8 rounded-lg">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Which Plan Is Right For You?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whichPlanFor.map((item, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="pt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {item.scenario}
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-600">{item.plan}</Badge>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">{item.reason}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Full Plan Comparison</h2>
          <p className="text-gray-600">
            Side-by-side feature comparison of all TATA AIG travel insurance
            plans
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Feature</th>
                <th className="px-4 py-3 text-center font-semibold">Domestic</th>
                <th className="px-4 py-3 text-center font-semibold">
                  International
                </th>
                <th className="px-4 py-3 text-center font-semibold">Student</th>
                <th className="px-4 py-3 text-center font-semibold">Senior</th>
                <th className="px-4 py-3 text-center font-semibold">
                  Multi-Trip
                </th>
              </tr>
            </thead>
            <tbody>
              {fullComparison.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-gray-700 border-b">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-center border-b">
                    {typeof row.domestic === 'boolean' ? (
                      row.domestic ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{row.domestic}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center border-b">
                    {typeof row.international === 'boolean' ? (
                      row.international ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{row.international}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center border-b">
                    {typeof row.student === 'boolean' ? (
                      row.student ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{row.student}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center border-b">
                    {typeof row.senior === 'boolean' ? (
                      row.senior ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{row.senior}</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-center border-b">
                    {typeof row.multiTrip === 'boolean' ? (
                      row.multiTrip ? (
                        <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                      ) : (
                        <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                      )
                    ) : (
                      <span className="text-gray-700">{row.multiTrip}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Plan Cards with CTA */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">All Travel Plans</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Domestic Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Perfect for weekend trips and domestic holidays within India.
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ From ₹99/trip</li>
                <li>✓ Up to ₹5 lakh medical</li>
                <li>✓ 7-30 days coverage</li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/insurance/travel/domestic">View Plan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>International Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Travel worldwide with Schengen-compliant coverage for Europe and
                beyond.
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ From ₹2,499/trip</li>
                <li>✓ Up to $100,000+ medical</li>
                <li>✓ Worldwide coverage</li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/insurance/travel/international">View Plan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Student Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Study abroad or internship travel with academic protection.
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ From ₹2,499/trip</li>
                <li>✓ Up to $200,000 medical</li>
                <li>✓ 12-month annual plans</li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/insurance/travel/student">View Plan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Senior Citizen Travel</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Travel safely at 60+. Pre-existing conditions covered.
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ From ₹249/trip (domestic)</li>
                <li>✓ Pre-existing covered</li>
                <li>✓ Age 60-85 years</li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/insurance/travel/senior">View Plan</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Annual Multi-Trip</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Unlimited trips worldwide. Best for frequent travelers.
              </p>
              <ul className="text-xs space-y-1 text-gray-700">
                <li>✓ From ₹7,999/year</li>
                <li>✓ Unlimited trips</li>
                <li>✓ Save 40-50%</li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link href="/insurance/travel/multi-trip">View Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Comparison FAQs</h2>
        <div className="space-y-3">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Which plan is cheapest?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Domestic travel plans are cheapest per trip (from ₹99). But if you
              travel 4+ times a year, Annual Multi-Trip is more economical overall.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can I switch plans mid-year?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, you can upgrade from single-trip to annual plans or change plan
              types. Contact us and we'll help with the transition.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Do I need a different plan for each family member?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              No, family plans are available for Domestic, Senior, and Annual
              Multi-Trip. One policy covers spouse, kids, and parents.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Which plan covers pre-existing medical conditions?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Senior Citizen Travel plans specifically cover pre-existing conditions
              when declared. Other plans may exclude them initially.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">
                Can I get a refund if I cancel within 30 days?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Yes, all TATA AIG travel insurance plans have a 30-day free look
              period. Cancel within 30 days for a full refund.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white -mx-4 px-4 py-12 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Still Confused? We Can Help!</h2>
        <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
          Our travel insurance experts will understand your needs and recommend
          the perfect plan. Talk to us today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            <a href="tel:+917225991909">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 72259 91909
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-blue-600 hover:bg-white/10"
          >
            <Link href="/contact">Get Recommendation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
