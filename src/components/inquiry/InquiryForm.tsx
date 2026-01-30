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
      <Card>
        <CardContent className="py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600 mb-6">
            We've received your inquiry. Our team will contact you within 24 hours.
          </p>
          <Button onClick={() => setIsSuccess(false)} variant="outline">
            Submit Another Inquiry
          </Button>
        </CardContent>
      </Card>
    );
  }

  // Determine which fields to show
  const isTravel = formData.serviceType.includes('travel-insurance') || showDestination;
  const needsDOB = formData.serviceType === 'health-insurance' || formData.serviceType === 'life-insurance';
  const isVehicle = formData.serviceType === 'vehicle-insurance';
  const isSolar = formData.serviceType === 'solar-residential' || formData.serviceType === 'solar-commercial';
  const isProperty = formData.serviceType === 'properties';
  const isUsedCars = formData.serviceType === 'used-cars';

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">Mobile Number *</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="10-digit mobile number"
              pattern="[6-9][0-9]{9}"
              inputMode="numeric"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className={errors.phone ? 'border-red-500' : ''}
              maxLength={10}
            />
            {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
          </div>

          {/* Service Type */}
          <div className="space-y-2">
            <Label htmlFor="serviceType">Service Type *</Label>
            <Select
              value={formData.serviceType}
              onValueChange={(value) => handleInputChange('serviceType', value)}
            >
              <SelectTrigger id="serviceType" className={errors.serviceType ? 'border-red-500' : ''}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="travel-insurance">Travel Insurance</SelectItem>
                <SelectItem value="health-insurance">Health Insurance</SelectItem>
                <SelectItem value="life-insurance">Life Insurance (Tata AIA)</SelectItem>
                <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
                <SelectItem value="solar-residential">Solar - Residential</SelectItem>
                <SelectItem value="solar-commercial">Solar - Commercial</SelectItem>
                <SelectItem value="properties">Properties (Land/Flats/Houses)</SelectItem>
                <SelectItem value="used-cars">Used Cars</SelectItem>
                <SelectItem value="digital-services">Digital & Web Services</SelectItem>
                <SelectItem value="media-marketing">Media & Marketing</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && <p className="text-sm text-red-600">{errors.serviceType}</p>}
          </div>

          {/* === TRAVEL INSURANCE FIELDS === */}
          {isTravel && (
            <>
              <div className="space-y-2">
                <Label htmlFor="destination">Travel Destination (Optional)</Label>
                <Input
                  id="destination"
                  type="text"
                  placeholder="e.g., France, Thailand, USA"
                  value={formData.destination}
                  onChange={(e) => handleInputChange('destination', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="departureDate">Departure Date (Optional)</Label>
                  <Input
                    id="departureDate"
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.departureDate}
                    onChange={(e) => handleInputChange('departureDate', e.target.value)}
                    className={errors.departureDate ? 'border-red-500' : ''}
                  />
                  {errors.departureDate && <p className="text-sm text-red-600">{errors.departureDate}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="returnDate">Return Date (Optional)</Label>
                  <Input
                    id="returnDate"
                    type="date"
                    min={formData.departureDate || new Date().toISOString().split('T')[0]}
                    value={formData.returnDate}
                    onChange={(e) => handleInputChange('returnDate', e.target.value)}
                    className={errors.returnDate ? 'border-red-500' : ''}
                  />
                  {errors.returnDate && <p className="text-sm text-red-600">{errors.returnDate}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="travelers">Number of Travelers (Optional)</Label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="e.g., 2"
                  inputMode="numeric"
                  value={formData.travelers}
                  onChange={(e) => handleInputChange('travelers', e.target.value)}
                />
              </div>
            </>
          )}

          {/* === HEALTH/LIFE INSURANCE FIELDS === */}
          {needsDOB && (
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth *</Label>
              <Input
                id="dob"
                type="date"
                max={new Date().toISOString().split('T')[0]}
                value={formData.dob}
                onChange={(e) => handleInputChange('dob', e.target.value)}
                className={errors.dob ? 'border-red-500' : ''}
              />
              {errors.dob && <p className="text-sm text-red-600">{errors.dob}</p>}
              <p className="text-xs text-gray-500">Required for accurate premium calculation</p>
            </div>
          )}

          {/* === VEHICLE INSURANCE FIELDS === */}
          {isVehicle && (
            <>
              <div className="space-y-2">
                <Label htmlFor="vehicleType">Vehicle Type *</Label>
                <Select
                  value={formData.vehicleType}
                  onValueChange={(value) => handleInputChange('vehicleType', value)}
                >
                  <SelectTrigger id="vehicleType">
                    <SelectValue placeholder="Select vehicle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="two-wheeler">Two Wheeler (Bike/Scooter)</SelectItem>
                    <SelectItem value="four-wheeler">Four Wheeler (Car)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="registrationNumber">Registration Number (Optional)</Label>
                <Input
                  id="registrationNumber"
                  type="text"
                  placeholder="e.g., CG01AB1234"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value.toUpperCase())}
                  style={{ textTransform: 'uppercase' }}
                  maxLength={10}
                />
                <p className="text-xs text-gray-500">For faster quote generation</p>
              </div>
            </>
          )}

          {/* === SOLAR FIELDS === */}
          {isSolar && (
            <>
              <div className="space-y-2">
                <Label htmlFor="monthlyBill">Monthly Electricity Bill (₹) *</Label>
                <Input
                  id="monthlyBill"
                  type="number"
                  min="0"
                  placeholder="e.g., 5000"
                  inputMode="numeric"
                  value={formData.monthlyBill}
                  onChange={(e) => handleInputChange('monthlyBill', e.target.value)}
                  className={errors.monthlyBill ? 'border-red-500' : ''}
                />
                {errors.monthlyBill && <p className="text-sm text-red-600">{errors.monthlyBill}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="roofArea">Approximate Roof Area (sq ft) (Optional)</Label>
                <Input
                  id="roofArea"
                  type="number"
                  min="0"
                  placeholder="e.g., 500"
                  inputMode="numeric"
                  value={formData.roofArea}
                  onChange={(e) => handleInputChange('roofArea', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="e.g., Raipur"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={errors.city ? 'border-red-500' : ''}
                />
                {errors.city && <p className="text-sm text-red-600">{errors.city}</p>}
              </div>
            </>
          )}

          {/* === PROPERTIES FIELDS === */}
          {isProperty && (
            <>
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => handleInputChange('propertyType', value)}
                >
                  <SelectTrigger id="propertyType">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="land">Land/Plot</SelectItem>
                    <SelectItem value="flat">Flat/Apartment</SelectItem>
                    <SelectItem value="house">Independent House</SelectItem>
                    <SelectItem value="commercial">Commercial Property</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (₹)</Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="e.g., 50 Lakhs - 1 Crore"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Preferred Location</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="e.g., Raipur"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
            </>
          )}

          {/* === USED CARS FIELDS === */}
          {isUsedCars && (
            <>
              <div className="space-y-2">
                <Label htmlFor="budget">Budget Range (₹)</Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="e.g., 3-5 Lakhs"
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Preferred Location</Label>
                <Input
                  id="city"
                  type="text"
                  placeholder="e.g., Raipur"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>
            </>
          )}

          {/* Message - Always visible */}
          <div className="space-y-2">
            <Label htmlFor="message">Additional Information (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any specific requirements or questions..."
              rows={4}
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            />
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="privacy"
              checked={agreedToPrivacy}
              onCheckedChange={(checked) => setAgreedToPrivacy(checked as boolean)}
            />
            <Label htmlFor="privacy" className="text-sm font-normal leading-relaxed cursor-pointer">
              I agree to receive communication from MDNetwork regarding my inquiry *
            </Label>
          </div>

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting || !agreedToPrivacy}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Submit Inquiry
              </>
            )}
          </Button>

          <p className="text-xs text-center text-gray-500">
            Our team will contact you within 24 hours during business hours (Mon-Sat, 9 AM - 7 PM IST)
          </p>
        </form>
      </CardContent>
    </Card>
  );
}