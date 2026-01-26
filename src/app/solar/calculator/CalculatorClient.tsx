'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Sun, IndianRupee, Zap, Calculator as CalcIcon } from 'lucide-react';

const DEFAULT_UNITS_PER_KW = 4.5;
const DEFAULT_TARIFF = 8;

export default function CalculatorClient() {
  const [monthlyBill, setMonthlyBill] = useState(3000);
  const [systemSize, setSystemSize] = useState(3);
  const [tariff, setTariff] = useState(DEFAULT_TARIFF);

  const dailyUnits = systemSize * DEFAULT_UNITS_PER_KW;
  const monthlyUnits = dailyUnits * 30;
  const monthlySavings = Math.min(monthlyUnits * tariff, monthlyBill);
  const yearlySavings = monthlySavings * 12;
  const estimatedCostPerKW = 55000;
  const systemCost = systemSize * estimatedCostPerKW;
  const paybackYears =
    monthlySavings > 0 ? +(systemCost / yearlySavings).toFixed(1) : null;

  return (
    <div className="flex flex-col gap-10">
      {/* Hero */}
      <section className="text-center">
        <Badge variant="outline" className="mb-4">
          Solar Savings Calculator
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Estimate Your Solar Savings
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Adjust your current electricity bill and desired solar system size to see
          how much you can save every month by going solar in Raipur.
        </p>
      </section>

      <section className="grid lg:grid-cols-2 gap-8">
        {/* Inputs */}
        <Card>
          <CardHeader>
            <CardTitle>Input Your Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="bill">Current Monthly Electricity Bill (₹)</Label>
              <Input
                id="bill"
                type="number"
                min={500}
                max={50000}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Desired System Size (kW)</Label>
                <span className="text-sm text-gray-600">
                  {systemSize.toFixed(1)} kW
                </span>
              </div>
              <Slider
                min={1}
                max={15}
                step={0.5}
                value={[systemSize]}
                onValueChange={([v]) => setSystemSize(v)}
              />
              <p className="text-xs text-gray-500">
                1–3 kW: small homes, 3–7 kW: typical homes, 7 kW+ : large homes / commercial.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tariff">
                Electricity Tariff (₹/unit){' '}
                <span className="text-xs text-gray-500">(Default: 8)</span>
              </Label>
              <Input
                id="tariff"
                type="number"
                min={4}
                max={15}
                step={0.5}
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value) || 0)}
              />
              <p className="text-xs text-gray-500">
                Check your electricity bill for exact per-unit rate.
              </p>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setMonthlyBill(3000);
                setSystemSize(3);
                setTariff(DEFAULT_UNITS_PER_KW);
              }}
            >
              Reset to Defaults
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>Estimated Savings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border flex items-start gap-3">
                <Sun className="h-6 w-6 text-yellow-500 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">
                    Estimated Solar Generation
                  </div>
                  <div className="text-2xl font-bold">
                    {monthlyUnits.toFixed(0)} kWh/month
                  </div>
                  <div className="text-xs text-gray-500">
                    ~{dailyUnits.toFixed(1)} units per day
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border flex items-start gap-3">
                <IndianRupee className="h-6 w-6 text-green-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Monthly Savings</div>
                  <div className="text-2xl font-bold text-green-700">
                    ₹{monthlySavings.toFixed(0)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Capped at your current bill amount.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border flex items-start gap-3">
                <Zap className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Yearly Savings</div>
                  <div className="text-2xl font-bold text-blue-700">
                    ₹{yearlySavings.toFixed(0)}
                  </div>
                  <div className="text-xs text-gray-500">
                    Assumes similar usage through the year.
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white rounded-lg border flex items-start gap-3">
                <CalcIcon className="h-6 w-6 text-purple-600 mt-1" />
                <div>
                  <div className="text-sm text-gray-500">Estimated System Cost</div>
                  <div className="text-2xl font-bold text-purple-700">
                    ₹{systemCost.toLocaleString('en-IN')}
                  </div>
                  {paybackYears && (
                    <div className="text-xs text-gray-500">
                      Approx. payback in {paybackYears} years
                    </div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              This is an approximate calculator using typical Indian solar generation
              of 4–5 units per kW per day and average tariffs. Actual values depend on
              your roof, location, DISCOM policy and system design.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
