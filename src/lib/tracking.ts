// src/lib/tracking.ts

// Track form submissions
export const trackFormSubmission = (formType: string, serviceType: string) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'form_submission', {
        event_category: 'Form',
        event_label: formType,
        service_type: serviceType,
      });
    }
  
    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', {
        content_name: formType,
        content_category: serviceType,
      });
    }
  
    // GTM DataLayer
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'form_submission',
        formType: formType,
        serviceType: serviceType,
      });
    }
  };
  
  // Track phone call clicks
  export const trackPhoneCall = (phoneNumber: string, location: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'phone_call', {
        event_category: 'Contact',
        event_label: phoneNumber,
        location: location,
      });
    }
  
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Contact');
    }
  
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'phone_call',
        phoneNumber: phoneNumber,
        location: location,
      });
    }
  };
  
  // Track quote requests
  export const trackQuoteRequest = (serviceType: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'quote_request', {
        event_category: 'Quote',
        event_label: serviceType,
      });
    }
  
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: serviceType,
        currency: 'INR',
      });
    }
  };
  
  // Track button clicks
  export const trackButtonClick = (buttonName: string, destination: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'button_click', {
        event_category: 'CTA',
        event_label: buttonName,
        destination: destination,
      });
    }
  };
  
  // Track calculator usage
  export const trackCalculatorUse = (calculatorType: string, result: any) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'calculator_use', {
        event_category: 'Calculator',
        event_label: calculatorType,
        ...result,
      });
    }
  
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'calculator_use',
        calculatorType: calculatorType,
        result: result,
      });
    }
  };