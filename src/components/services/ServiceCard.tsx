
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/lib/types";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ServiceCardProps {
  service: Service;
  onViewDetails: (serviceId: string) => void;
}

export default function ServiceCard({ service, onViewDetails }: ServiceCardProps) {
  // Format the price for display. If it's a number, format with Indian Rupee symbol and locale string.
  // Otherwise, display the text as is (e.g., "Contact for Price").
  const displayPrice = typeof service.price === 'number'
    ? `₹${service.price.toLocaleString('en-IN')}`
    : service.price;

  return (
    <Card
      onClick={() => onViewDetails(service.id)}
      className="flex h-full cursor-pointer flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
    >
      <CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
        <div className="relative mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Image
              src={service.iconUrl ? service.iconUrl : 'https://placehold.co/48x48.png'}
            alt={`${service.title} icon`}
            fill
            className="rounded-full object-cover p-1"
            data-ai-hint="service icon"
            onError={(e) => {
              e.currentTarget.src = 'https://placehold.co/48x48.png';
            }}
          />
        </div>
        <div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription className="mt-1 line-clamp-2">{service.shortDescription}</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow space-y-3 py-2">
        {service.keyFeatures && service.keyFeatures.length > 0 && (
          <div className="space-y-2 text-sm text-muted-foreground">
            <ul className="space-y-1.5">
              {service.keyFeatures.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {service.keyFeatures.length > 3 && (
              <p className="pl-6 text-xs italic">...and more</p>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex flex-col items-start gap-4 pt-2">
         {displayPrice && (
            <div className="w-full text-right">
                <span className="text-lg font-bold text-primary">
                    {displayPrice}
                </span>
            </div>
         )}
         <Button 
            className="w-full" 
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(service.id);
            }}
          >
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
      </CardFooter>
    </Card>
  );
}
