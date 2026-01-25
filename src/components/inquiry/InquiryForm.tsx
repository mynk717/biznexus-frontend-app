'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Send, CheckCircle2 } from 'lucide-react';

interface InquiryFormProps {
  defaultServiceType?: string;
  title?: string;
  description?: string;
  showDestination?: boolean;
}

export default function InquiryForm({
  defaultServiceType = '',
  title = 'Get a Free Quote',
  description = 'Fill in your details and we\'ll get back to you within 24 hours',
  showDestination = false,
}: InquiryFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: defaultServiceType,
    destination: '',
    travelDates: '',
    travelers: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: '',
      serviceType: '',
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
      newErrors.phone = 'Enter a valid 10-digit mobile number';
      isValid = false;
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
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

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      setIsSuccess(true);
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
        travelDates: '',
        travelers: '',
        message: '',
      });

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
                <SelectItem value="life-insurance">Life Insurance</SelectItem>
                <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
                <SelectItem value="solar-residential">Solar - Residential</SelectItem>
                <SelectItem value="solar-commercial">Solar - Commercial</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.serviceType && <p className="text-sm text-red-600">{errors.serviceType}</p>}
          </div>

          {/* Destination (Conditional) */}
          {showDestination && (
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
          )}

          {/* Travel Dates (Conditional) */}
          {showDestination && (
            <div className="space-y-2">
              <Label htmlFor="travelDates">Travel Dates (Optional)</Label>
              <Input
                id="travelDates"
                type="text"
                placeholder="e.g., 15 Feb - 28 Feb 2026"
                value={formData.travelDates}
                onChange={(e) => handleInputChange('travelDates', e.target.value)}
              />
            </div>
          )}

          {/* Number of Travelers (Conditional) */}
          {showDestination && (
            <div className="space-y-2">
              <Label htmlFor="travelers">Number of Travelers (Optional)</Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                max="10"
                placeholder="e.g., 2"
                value={formData.travelers}
                onChange={(e) => handleInputChange('travelers', e.target.value)}
              />
            </div>
          )}

          {/* Message */}
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

          {/* Submit Button */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
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
            By submitting this form, you agree to receive communication from MDNetwork regarding your inquiry.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
