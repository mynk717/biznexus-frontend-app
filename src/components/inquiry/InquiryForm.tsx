'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';
import { trackFormSubmission } from '@/lib/tracking';


interface InquiryFormProps {
  defaultServiceType?: string;
  title?: string;
  description?: string;
  showDestination?: boolean;
}

export default function InquiryForm({
  defaultServiceType = '',
  title = 'Get a Free Quote',
  description = "Fill in your details and we'll get back to you within 24 hours",
  showDestination = false,
}: InquiryFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: defaultServiceType,
    // Travel Insurance fields
    destination: '',
    departureDate: '',
    returnDate: '',
    travelers: '',
    // Insurance fields
    dob: '',
    // Vehicle Insurance fields
    vehicleType: '',
    registrationNumber: '',
    // Solar fields
    monthlyBill: '',
    roofArea: '',
    city: '',
    // Properties fields
    propertyType: '',
    budget: '',
    // General
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    departureDate: '',
    returnDate: '',
    dob: '',
    monthlyBill: '',
    city: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
      departureDate: '',
      returnDate: '',
      dob: '',
      monthlyBill: '',
      city: '',
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Enter a valid 10-digit mobile number starting with 6-9';
      isValid = false;
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
      isValid = false;
    }

    // Conditional validations based on service type
    const isTravel = formData.serviceType.includes('travel-insurance') || showDestination;
    if (isTravel && formData.departureDate && formData.returnDate) {
      if (new Date(formData.departureDate) >= new Date(formData.returnDate)) {
        newErrors.returnDate = 'Return date must be after departure date';
        isValid = false;
      }
    }

    // DOB validation for insurance
    const needsDOB = formData.serviceType === 'health-insurance' || formData.serviceType === 'life-insurance';
    if (needsDOB && !formData.dob) {
      newErrors.dob = 'Date of birth is required for insurance quotes';
      isValid = false;
    }

    // Solar validation
    const isSolar = formData.serviceType === 'solar-residential' || formData.serviceType === 'solar-commercial';
    if (isSolar && !formData.monthlyBill) {
      newErrors.monthlyBill = 'Monthly electricity bill is required for solar quotes';
      isValid = false;
    }
    if (isSolar && !formData.city) {
      newErrors.city = 'City is required for solar installation';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form',
        variant: 'destructive',
      });
      return;
    }

    if (!agreedToPrivacy) {
      toast({
        title: 'Consent Required',
        description: 'Please agree to receive communication from MDNetwork',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare payload with only relevant fields
      const payload: any = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceType: formData.serviceType,
        message: formData.message,
      };

      // Add service-specific fields
      const isTravel = formData.serviceType.includes('travel-insurance') || showDestination;
      if (isTravel) {
        if (formData.destination) payload.destination = formData.destination;
        if (formData.departureDate) payload.departureDate = formData.departureDate;
        if (formData.returnDate) payload.returnDate = formData.returnDate;
        if (formData.travelers) payload.travelers = formData.travelers;
      }

      if (formData.dob) payload.dob = formData.dob;
      if (formData.vehicleType) payload.vehicleType = formData.vehicleType;
      if (formData.registrationNumber) payload.registrationNumber = formData.registrationNumber;
      if (formData.monthlyBill) payload.monthlyBill = formData.monthlyBill;
      if (formData.roofArea) payload.roofArea = formData.roofArea;
      if (formData.city) payload.city = formData.city;
      if (formData.propertyType) payload.propertyType = formData.propertyType;
      if (formData.budget) payload.budget = formData.budget;

      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setIsSuccess(true);
      trackFormSubmission('inquiry_form', formData.serviceType);
      toast({
        title: 'Success!',
        description: data.message,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: defaultServiceType,
        destination: '',
        departureDate: '',
        returnDate: '',
        travelers: '',
        dob: '',
        vehicleType: '',
        registrationNumber: '',
        monthlyBill: '',
        roofArea: '',
        city: '',
        propertyType: '',
        budget: '',
        message: '',
      });
      setAgreedToPrivacy(false);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit inquiry. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    // Special handling for travelers number
    if (field === 'travelers') {
      const num = parseInt(value);
      if (value && (num < 1 || num > 10)) return;
    }

    setFormData({ ...formData, [field]: value });
    // Clear error for this field
    if (errors[field as keyof typeof errors]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  if (isSuccess) {
    return (
      <div className="nm-flat p-12 rounded-[40px] text-center max-w-2xl mx-auto">
        <CheckCircle2 className="h-20 w-16 text-green-600 mx-auto mb-6" />
        <h3 className="text-3xl font-bold mb-4">Thank You!</h3>
        <p className="text-lg text-slate-600 mb-8">
          We've received your inquiry. Our local Raipur team will contact you within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)} 
          className="nm-button px-8 py-3 rounded-xl font-bold text-blue-700"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  // ... [keep field logic] ...

  return (
    <div className="nm-flat p-8 md:p-12 rounded-[40px] space-y-10">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100">{title}</h2>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="font-bold uppercase tracking-widest text-[10px] text-slate-500 ml-4">Full Name *</Label>
            <div className="nm-inset p-1 rounded-2xl">
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`border-none bg-transparent shadow-none focus-visible:ring-0 text-lg ${errors.name ? 'text-red-500' : ''}`}
              />
            </div>
            {errors.name && <p className="text-xs text-red-600 ml-4">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold uppercase tracking-widest text-[10px] text-slate-500 ml-4">Email Address *</Label>
            <div className="nm-inset p-1 rounded-2xl">
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`border-none bg-transparent shadow-none focus-visible:ring-0 text-lg ${errors.email ? 'text-red-500' : ''}`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-600 ml-4">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="font-bold uppercase tracking-widest text-[10px] text-slate-500 ml-4">Mobile Number *</Label>
            <div className="nm-inset p-1 rounded-2xl">
              <Input
                id="phone"
                type="tel"
                placeholder="10-digit mobile number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`border-none bg-transparent shadow-none focus-visible:ring-0 text-lg ${errors.phone ? 'text-red-500' : ''}`}
                maxLength={10}
              />
            </div>
            {errors.phone && <p className="text-xs text-red-600 ml-4">{errors.phone}</p>}
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="serviceType" className="font-bold uppercase tracking-widest text-[10px] text-slate-500 ml-4">Service Type *</Label>
            <div className="nm-inset rounded-2xl px-1 py-0.5">
              <Select
                value={formData.serviceType}
                onValueChange={(value) => handleInputChange('serviceType', value)}
              >
                <SelectTrigger id="serviceType" className="border-none bg-transparent shadow-none focus:ring-0 text-lg">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="nm-flat rounded-2xl border-none">
                  <SelectItem value="travel-insurance">Travel Insurance</SelectItem>
                  <SelectItem value="health-insurance">Health Insurance</SelectItem>
                  <SelectItem value="life-insurance">Life Insurance</SelectItem>
                  <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
                  <SelectItem value="solar-residential">Solar - Residential</SelectItem>
                  <SelectItem value="solar-commercial">Solar - Commercial</SelectItem>
                  <SelectItem value="properties">Properties</SelectItem>
                  <SelectItem value="used-cars">Used Cars</SelectItem>
                  <SelectItem value="digital-services">Digital & Web</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {errors.serviceType && <p className="text-xs text-red-600 ml-4">{errors.serviceType}</p>}
          </div>
        </div>

        {/* Dynamic Fields Section */}
        {(isTravel || needsDOB || isVehicle || isSolar || isProperty || isUsedCars) && (
          <div className="nm-inset p-8 rounded-3xl space-y-6 bg-slate-50/30">
            {/* Travel specific */}
            {isTravel && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="destination" className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Destination</Label>
                  <Input
                    id="destination"
                    className="nm-flat rounded-xl border-none h-12"
                    placeholder="e.g., France, Thailand"
                    value={formData.destination}
                    onChange={(e) => handleInputChange('destination', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Departure</Label>
                    <Input type="date" className="nm-flat rounded-xl border-none h-12" value={formData.departureDate} onChange={(e) => handleInputChange('departureDate', e.target.value)} />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Return</Label>
                    <Input type="date" className="nm-flat rounded-xl border-none h-12" value={formData.returnDate} onChange={(e) => handleInputChange('returnDate', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Insurance specific */}
            {needsDOB && (
              <div className="space-y-2">
                <Label htmlFor="dob" className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Date of Birth</Label>
                <Input type="date" className="nm-flat rounded-xl border-none h-12 w-full" value={formData.dob} onChange={(e) => handleInputChange('dob', e.target.value)} />
              </div>
            )}

            {/* Solar specific */}
            {isSolar && (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="font-bold uppercase tracking-widest text-[10px] text-slate-500">Monthly Bill (₹)</Label>
                  <Input type="number" className="nm-flat rounded-xl border-none h-12" value={formData.monthlyBill} onChange={(e) => handleInputChange('monthlyBill', e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label className="font-bold uppercase tracking-widest text-[10px] text-slate-500">City</Label>
                  <Input type="text" className="nm-flat rounded-xl border-none h-12" value={formData.city} onChange={(e) => handleInputChange('city', e.target.value)} />
                </div>
              </div>
            )}
          </div>
        )}

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-bold uppercase tracking-widest text-[10px] text-slate-500 ml-4">How can we help?</Label>
          <div className="nm-inset p-1 rounded-2xl">
            <Textarea
              id="message"
              placeholder="Tell us about your requirements..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="border-none bg-transparent shadow-none focus-visible:ring-0 min-h-[120px]"
            />
          </div>
        </div>

        {/* Privacy Consent */}
        <div className="nm-inset p-4 rounded-2xl flex items-start space-x-3">
          <Checkbox
            id="privacy"
            checked={agreedToPrivacy}
            onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
            className="mt-1 nm-flat border-none data-[state=checked]:bg-blue-600"
          />
          <Label htmlFor="privacy" className="text-sm font-medium leading-relaxed cursor-pointer text-slate-600">
            I agree to receive communication from MDNetwork regarding my inquiry
          </Label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`nm-button w-full py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-3 transition-all ${isSubmitting || !agreedToPrivacy ? 'opacity-50 grayscale' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
          disabled={isSubmitting || !agreedToPrivacy}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-6 w-6 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <Send className="h-6 w-6" />
              Submit My Request
            </>
          )}
        </button>

        <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest mt-6">
          24/7 Support Available for Raipur Residents
        </p>
      </form>
    </div>
  );
}