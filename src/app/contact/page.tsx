
import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InquiryForm from '@/components/inquiry/InquiryForm';
import type { Service } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Contact Us | BizNexus',
  description: 'Get in touch with BizNexus. Find our contact details or send us an inquiry for our services in Raipur, Chhattisgarh.',
};

// A mock service object for the general inquiry form
const generalInquiryService: Service = {
  id: 'general-inquiry',
  name: 'General Inquiry',
  slug: 'general',
  shortDescription: '',
  iconUrl: '',
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're here to help. Reach out to us with any questions or to get started with our services.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:+917225991909" className="text-muted-foreground hover:text-primary">
                    +91 72259 91909
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:contact@biznexus.mktgdime.com" className="text-muted-foreground hover:text-primary">
                    contact@biznexus.mktgdime.com
                  </a>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <span className="text-muted-foreground">
                    Raipur, Chhattisgarh, India
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
             <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <InquiryForm service={generalInquiryService} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
