'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Info, IndianRupee, Calculator, TrendingDown, Landmark } from 'lucide-react';

export default function UsedCarCalculator() {
  const [price, setPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(12);
  const [tenure, setTenure] = useState(36);
  
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [savingsReturn, setSavingsReturn] = useState(0);

  useEffect(() => {
    const loanAmount = price - downPayment;
    const monthlyRate = interestRate / 12 / 100;
    
    if (loanAmount > 0 && monthlyRate > 0) {
      const emiCalc = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
      setEmi(Math.round(emiCalc));
      
      const totalPaid = emiCalc * tenure;
      setTotalInterest(Math.round(totalPaid - loanAmount));
      setTotalCost(Math.round(totalPaid + downPayment));
    } else {
      setEmi(0);
      setTotalInterest(0);
      setTotalCost(price);
    }

    // Opportunity cost: What if the cash (price) was invested at 7% FD rate instead?
    const principal = price;
    const rate = 0.07;
    const time = tenure / 12;
    const futureValue = principal * Math.pow(1 + rate/1, time);
    setSavingsReturn(Math.round(futureValue - principal));

  }, [price, downPayment, interestRate, tenure]);

  return (
    <Card className="w-full border-2 border-indigo-100 shadow-xl overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white p-6">
        <div className="flex items-center gap-3">
          <Calculator className="h-6 w-6" />
          <div>
            <CardTitle className="text-xl">Raipur Used Car ROI Calculator</CardTitle>
            <CardDescription className="text-indigo-100">Compare Loan vs. Cash Outlay</CardDescription>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-semibold">Car Price (₹)</Label>
              <span className="text-indigo-600 font-bold">₹{price.toLocaleString('en-IN')}</span>
            </div>
            <Slider 
              value={[price]} 
              min={100000} 
              max={2500000} 
              step={10000} 
              onValueChange={(val) => setPrice(val[0])}
              className="py-4"
            />
            <Input 
              type="number" 
              value={price} 
              onChange={(e) => setPrice(Number(e.target.value))}
              className="h-10"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <Label className="text-sm font-semibold">Down Payment (₹)</Label>
              <span className="text-indigo-600 font-bold">₹{downPayment.toLocaleString('en-IN')}</span>
            </div>
            <Slider 
              value={[downPayment]} 
              min={0} 
              max={price} 
              step={5000} 
              onValueChange={(val) => setDownPayment(val[0])}
              className="py-4"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-slate-500">Interest Rate (%)</Label>
              <Input 
                type="number" 
                value={interestRate} 
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
            </div>
            <div className="space-y-2">
              <Label className="text-xs font-semibold uppercase text-slate-500">Tenure (Months)</Label>
              <SelectWrapper 
                value={tenure.toString()} 
                onValueChange={(val) => setTenure(Number(val))}
                options={[
                  { label: '1 Year', value: '12' },
                  { label: '2 Years', value: '24' },
                  { label: '3 Years', value: '36' },
                  { label: '5 Years', value: '60' },
                ]}
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6">
          <div className="text-center pb-4 border-b border-slate-200">
            <p className="text-sm text-slate-500 font-medium">Estimated Monthly EMI</p>
            <h3 className="text-4xl font-black text-indigo-600">₹{emi.toLocaleString('en-IN')}</h3>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-red-500" />
                <span className="text-sm text-slate-600">Total Interest Paid</span>
              </div>
              <span className="font-bold text-slate-900">₹{totalInterest.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <Landmark className="h-4 w-4 text-indigo-500" />
                <span className="text-sm text-slate-600">Total Cost of Car</span>
              </div>
              <span className="font-bold text-slate-900">₹{totalCost.toLocaleString('en-IN')}</span>
            </div>

            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex gap-3">
                <Info className="h-5 w-5 text-amber-600 shrink-0" />
                <p className="text-xs text-amber-800 leading-relaxed">
                  <strong>The "Hidden" Cost:</strong> If you paid ₹{price.toLocaleString('en-IN')} in cash, that same money could have earned <strong>₹{savingsReturn.toLocaleString('en-IN')}</strong> in interest (at 7%) over {tenure} months. Consider this when deciding between a loan and cash.
                </p>
              </div>
            </div>
          </div>

          <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-6 rounded-xl shadow-lg shadow-indigo-200 transition-all">
            Get Verified Car Options →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Simple wrapper for Select since I don't want to overcomplicate the tool call
function SelectWrapper({ value, onValueChange, options }: { value: string, onValueChange: (val: string) => void, options: {label: string, value: string}[] }) {
  return (
    <select 
      value={value} 
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full h-10 px-3 py-2 bg-white border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
  );
}
