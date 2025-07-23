
"use client";

import type { Service, ServiceSection, ExamplePackage, Offering } from "@/lib/types";
import ServiceIcon from "./ServiceIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { List, CheckCircle, Package, Tag, Users, CalendarDays, Briefcase, CheckSquare } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InquiryForm from "@/components/inquiry/InquiryForm";
import { useState } from "react";

interface ServiceDetailsDisplayProps {
  service: Service;
}

export default function ServiceDetailsDisplay({ service }: ServiceDetailsDisplayProps) {
  const [isInquiryDialogOpen, setIsInquiryDialogOpen] = useState(false);

  const handleFormSuccess = () => {
    setIsInquiryDialogOpen(false);
  };

  return (
    <div className="space-y-8">
      <header className="rounded-lg bg-card p-6 shadow-lg md:p-8">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-24 md:w-24">
            <ServiceIcon slug={service.slug} className="h-10 w-10 md:h-12 md:w-12" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{service.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{service.shortDescription}</p>
          </div>
          <Dialog open={isInquiryDialogOpen} onOpenChange={setIsInquiryDialogOpen}>
            <DialogTrigger asChild>
              <Button size="lg" className="mt-4 w-full md:mt-0 md:w-auto">
                Inquire Now
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[480px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Inquire about {service.title}</DialogTitle>
                <DialogDescription>
                  Fill out the form below and we&apos;ll get back to you shortly.
                </DialogDescription>
              </DialogHeader>
              <InquiryForm service={service} onFormSubmitSuccess={handleFormSuccess} />
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {service.sections && service.sections.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Service Details</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {service.sections.map((section: ServiceSection, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <List className="h-5 w-5 text-primary" />
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {service.offerings && service.offerings.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {service.offerings.map((offering: Offering, index: number) => (
              <Card key={index} className="flex h-full flex-col overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckSquare className="h-5 w-5 text-primary" />
                    {offering.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {service.brands && service.brands.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Available Brands</h2>
          <div className="flex flex-wrap gap-2">
            {service.brands.map((brand: string, index: number) => (
              <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                <Tag className="mr-1.5 h-4 w-4" />
                {brand}
              </Badge>
            ))}
          </div>
        </section>
      )}

      {service.categories && service.categories.length > 0 && (
         <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tour Categories</h2>
          <div className="flex flex-wrap gap-2">
            {service.categories.map((category: string, index: number) => (
              <Badge key={index} variant="outline" className="px-3 py-1 text-sm">
                 <Users className="mr-1.5 h-4 w-4" />
                {category}
              </Badge>
            ))}
          </div>
        </section>
      )}
      
      {service.examplePackages && service.examplePackages.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Example Tour Packages</h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
            {service.examplePackages.map((pkg: ExamplePackage, index: number) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Package className="h-5 w-5 text-primary" />
                    {pkg.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Type: {pkg.type}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    <span>Duration: {pkg.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
