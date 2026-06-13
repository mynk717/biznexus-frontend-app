import { Metadata } from 'next';
import InquiryForm from '@/components/inquiry/InquiryForm';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: 'Contact MDNetwork Raipur | TATA AIG & Solar Solutions',
  description: 'Connect with Raipur\'s trusted hub for TATA AIG Insurance and Solar Subsidies. Visit our Bhanpuri office or call +91 72259 91909.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20">
      {/* Header */}
      <section className="text-center pt-8">
        <Badge variant="outline" className="mb-4 nm-flat-sm px-4 py-1 border-blue-200 text-blue-600">
          Support Hub
        </Badge>
        <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-800 dark:text-slate-100">
          How Can We <span className="text-blue-600 text-shadow-sm">Help You?</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Whether it's a claim emergency, a solar ROI audit, or property verification, our Raipur experts are standing by.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Contact Form - Takes 2 columns */}
        <div className="lg:col-span-2">
          <InquiryForm 
            title="Direct Expert Inquiry"
            description="Your message will be routed to the specific vertical specialist in Raipur."
            showDestination={true}
          />
        </div>

        {/* Contact Information - Takes 1 column */}
        <div className="space-y-8">
          <div className="nm-flat p-8 rounded-[40px] space-y-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 pb-4">Raipur Hotline</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="nm-flat-sm w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Phone Support</div>
                  <a href="tel:+917225991909" className="text-lg font-black text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors">
                    +91 72259 91909
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Available 9 AM - 7 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="nm-flat-sm w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-green-50/50">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">WhatsApp</div>
                  <a href="https://wa.me/917225991909" target="_blank" rel="noopener noreferrer" className="text-lg font-black text-slate-800 dark:text-slate-200 hover:text-green-600 transition-colors">
                    Chat with Expert
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Typical response: 15 mins</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="nm-flat-sm w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform bg-purple-50/50">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">Email</div>
                  <a href="mailto:contact@mdn.mktgdime.com" className="text-lg font-black text-slate-800 dark:text-slate-200 hover:text-purple-600 transition-colors">
                    Official Support
                  </a>
                  <p className="text-xs text-slate-500 mt-1">24-hour SLA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="nm-inset p-8 rounded-[40px] bg-slate-50/50 space-y-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-blue-600" />
              <h4 className="font-bold text-slate-800 dark:text-slate-200">Bhanpuri Office Hours</h4>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="font-bold">10:00 - 19:00</span>
              </div>
              <div className="flex justify-between text-red-500">
                <span>Sunday</span>
                <span className="font-bold">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="nm-flat p-8 md:p-12 rounded-[50px] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Badge className="bg-orange-100 text-orange-700 nm-flat-sm border-none">Raipur HQ</Badge>
            <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100">Visit Our Command Center</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Located at the intersection of business and technology in Raipur. Join us for a face-to-face consultation regarding your portfolio.
            </p>
            <div className="nm-inset p-6 rounded-3xl space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-red-500 flex-shrink-0" />
                <div>
                  <p className="font-black text-slate-800 dark:text-slate-200">Marketing Dime (MKTDM)</p>
                  <p className="text-sm text-slate-500">Raipur, Chhattisgarh, India</p>
                </div>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Marketing+Dime+Raipur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="nm-button inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold"
            >
              Open in Google Maps <ArrowRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="nm-inset rounded-[40px] p-2 h-[450px] relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.24278484435!2d81.54581566412615!3d21.26252932375878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28de48a9c1f87d%3A0x7542a0bb81b2bb46!2sMarketing%20Dime!5e0!3m2!1sen!2sin!4v1718200000000!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '36px' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
