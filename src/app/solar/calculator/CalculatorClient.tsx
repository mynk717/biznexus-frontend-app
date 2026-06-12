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

      <section className="grid lg:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="nm-flat p-8 rounded-[40px] space-y-8">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Configure Your System</h2>
          
          <div className="space-y-4">
            <Label htmlFor="bill" className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Current Monthly Bill (₹)</Label>
            <div className="nm-inset p-1 rounded-2xl">
              <Input
                id="bill"
                type="number"
                className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Desired System Size</Label>
              <span className="nm-flat px-4 py-1 rounded-full text-blue-600 font-black">
                {systemSize.toFixed(1)} kW
              </span>
            </div>
            <div className="nm-inset p-6 rounded-2xl">
              <Slider
                min={1}
                max={15}
                step={0.5}
                value={[systemSize]}
                onValueChange={([v]) => setSystemSize(v)}
              />
            </div>
          </div>

          <div className="space-y-4">
            <Label htmlFor="tariff" className="text-slate-600 dark:text-slate-400 font-bold uppercase tracking-widest text-xs">Electricity Tariff (₹/unit)</Label>
            <div className="nm-inset p-1 rounded-2xl">
              <Input
                id="tariff"
                type="number"
                className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold"
                value={tariff}
                onChange={(e) => setTariff(Number(e.target.value) || 0)}
              />
            </div>
          </div>

          <button
            type="button"
            className="nm-button w-full py-4 rounded-2xl font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
            onClick={() => {
              setMonthlyBill(3000);
              setSystemSize(3);
              setTariff(DEFAULT_TARIFF);
            }}
          >
            Reset to Defaults
          </button>
        </div>

        {/* Results */}
        <div className="nm-flat p-8 rounded-[40px] bg-slate-50/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8">Estimated Impact</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="nm-flat p-6 rounded-3xl bg-white/50 border border-white/20">
              <Sun className="h-8 w-8 text-yellow-500 mb-4" />
              <div className="text-sm text-slate-500 font-bold uppercase tracking-tighter">Generation</div>
              <div className="text-3xl font-black text-slate-900 dark:text-white">
                {monthlyUnits.toFixed(0)} <span className="text-sm font-normal text-slate-500">kWh/mo</span>
              </div>
            </div>

            <div className="nm-flat p-6 rounded-3xl bg-green-50/30 border border-green-100/20">
              <IndianRupee className="h-8 w-8 text-green-600 mb-4" />
              <div className="text-sm text-green-600 font-bold uppercase tracking-tighter">Monthly Savings</div>
              <div className="text-3xl font-black text-green-700">
                ₹{monthlySavings.toFixed(0)}
              </div>
            </div>

            <div className="nm-flat p-6 rounded-3xl bg-blue-50/30 border border-blue-100/20">
              <Zap className="h-8 w-8 text-blue-600 mb-4" />
              <div className="text-sm text-blue-600 font-bold uppercase tracking-tighter">Yearly Savings</div>
              <div className="text-3xl font-black text-blue-700">
                ₹{yearlySavings.toFixed(0)}
              </div>
            </div>

            <div className="nm-flat p-6 rounded-3xl bg-purple-50/30 border border-purple-100/20">
              <CalcIcon className="h-8 w-8 text-purple-600 mb-4" />
              <div className="text-sm text-purple-600 font-bold uppercase tracking-tighter">System Cost</div>
              <div className="text-3xl font-black text-purple-700">
                ₹{(systemCost / 100000).toFixed(2)}L
              </div>
              {paybackYears && (
                <div className="text-xs font-bold text-purple-500 mt-2">
                  ROI in {paybackYears} years
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 nm-inset p-6 rounded-2xl bg-slate-100/50">
            <p className="text-xs text-slate-500 leading-relaxed italic">
              *Approximate calculation for Raipur. Actual savings depend on rooftop orientation, shading (e.g. from nearby Shankar Nagar buildings), and current CSPDCL net-metering policies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
