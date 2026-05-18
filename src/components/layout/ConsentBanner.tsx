'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, ShieldCheck } from 'lucide-react';

export default function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('mdn-consent-accepted');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('mdn-consent-accepted', 'true');
    setIsVisible(false);
  };

  const declineConsent = () => {
    // For GDPR/DPDP, we should still allow browsing but not track
    localStorage.setItem('mdn-consent-accepted', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-5xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1 flex gap-4 items-start">
          <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold text-slate-900">Privacy & Data Consent</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We use cookies and process personal data under the DPDP Act (India) and GDPR to improve your experience and provide our services. By clicking "Accept All", you consent to our use of these technologies.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
          <Button variant="outline" onClick={declineConsent} className="w-full sm:w-auto">
            Reject Non-Essential
          </Button>
          <Button onClick={acceptConsent} className="w-full sm:w-auto">
            Accept All
          </Button>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
