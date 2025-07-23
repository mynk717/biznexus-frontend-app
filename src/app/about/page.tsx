
import type { Metadata } from 'next';
import { Building, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | BizNexus',
  description: 'Learn about the mission, vision, and values of BizNexus, your trusted partner in Raipur for business growth and comprehensive services.',
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About BizNexus</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your local partner in Raipur for business growth, travel, insurance, and more.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Building className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">
              To empower businesses and individuals in Chhattisgarh by providing a comprehensive suite of high-quality services, from digital marketing to essential personal needs, fostering growth and success within our local community.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">
              To be the most trusted and go-to platform in Raipur for a diverse range of services, known for our reliability, innovation, and unwavering commitment to client satisfaction.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold">Our Team</h2>
            <p className="mt-2 text-muted-foreground">
              Our team is composed of passionate, experienced professionals dedicated to understanding your needs and delivering tailored solutions that exceed expectations. We are your partners in success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
