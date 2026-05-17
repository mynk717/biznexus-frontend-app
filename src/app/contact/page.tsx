import { Metadata } from 'next';
import InquiryForm from '@/components/inquiry/InquiryForm';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | MDNetwork Raipur',
  description: 'Get in touch with MDNetwork for insurance and solar solutions in Raipur. Call us, email, or visit our office.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions about insurance or solar solutions? We're here to help. Reach out to us and we'll respond within 24 hours.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Form - Takes 2 columns */}
        <div className="md:col-span-2">
          <InquiryForm 
            title="Send Us a Message"
            description="Fill out the form below and our team will get back to you shortly"
            showDestination={true}
          />
        </div>

        {/* Contact Information - Takes 1 column */}
        <div className="space-y-6">
          {/* Contact Cards */}
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a href="tel:+917225991909" className="text-blue-600 hover:underline">
                    +91 72259 91909
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold mb-1">WhatsApp</div>
                  <a href="https://wa.me/917225991909" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                    +91 72259 91909
                  </a>
                  <p className="text-sm text-gray-600 mt-1">Quick response guaranteed</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:contact@mdn.mktgdime.com" className="text-purple-600 hover:underline">
                    contact@mdn.mktgdime.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">We'll reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Office</div>
                  <p className="text-gray-600">
                    Raipur, Chhattisgarh<br />
                    India - 492001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-4 border-t">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Business Hours</div>
                  <p className="text-sm text-gray-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Services */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="font-semibold mb-3">Quick Services</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Travel Insurance Quote</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Health Insurance Plans</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Solar Installation Quote</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Claim Assistance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Map Section (Optional - Add later) */}
      <section className="bg-gray-100 -mx-4 px-4 py-12 rounded-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Visit Our Office</h2>
          <p className="text-gray-600 mb-6">
            We're located in the heart of Raipur. Schedule an appointment for personalized consultation.
          </p>
          {/* Add Google Maps embed here later */}
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
