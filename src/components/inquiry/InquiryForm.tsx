
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { Service } from "@/lib/types";
import { submitInquiryAction, InquiryFormState } from "@/lib/actions";
import { useFormStatus } from "react-dom";
import { useEffect, useActionState } from "react"; 

// Schema for client-side validation (matches user-editable fields)
const inquiryClientSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number seems too short." }).max(15, "Phone number is too long."),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  companyName: z.string().optional(),
  preferredContactMethod: z.enum(['Email', 'Phone']).optional(),
  budget: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquiryClientSchema>;

interface InquiryFormProps {
  service: Service;
  onFormSubmitSuccess?: () => void;
}

const initialState: InquiryFormState = {
  message: "",
  success: false,
  fieldErrors: {},
  issues: [],
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Submit Inquiry"}
    </Button>
  );
}

export default function InquiryForm({ service, onFormSubmitSuccess }: InquiryFormProps) {
  const { toast } = useToast();
  const [state, formAction] = useActionState(submitInquiryAction, initialState);

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquiryClientSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
      companyName: "",
      preferredContactMethod: undefined,
      budget: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset();
        if (onFormSubmitSuccess) {
          onFormSubmitSuccess();
        }
      } else {
        // Handle server-side validation errors
        if (state.fieldErrors) {
          for (const [fieldName, errors] of Object.entries(state.fieldErrors)) {
            if (errors && errors.length > 0) {
              if (fieldName in form.getValues()) {
                form.setError(fieldName as keyof InquiryFormValues, {
                  type: "server",
                  message: errors.join(", "),
                });
              }
            }
          }
        }
        let toastDescription = state.message;
        if (state.issues && state.issues.length > 0 && state.message !== "Please correct the errors highlighted below.") {
           toastDescription += ` Details: ${state.issues.join('; ')}`;
        }

        toast({
          title: "Submission Error",
          description: toastDescription,
          variant: "destructive",
        });
      }
    }
  }, [state, toast, form, onFormSubmitSuccess]);


  return (
    <Form {...form}>
      <form
        action={formAction}
        className="space-y-4"
      >
        <input type="hidden" name="serviceId" value={service.id} />
        <input type="hidden" name="serviceName" value={service.title} />
        
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+1234567890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Your Company Inc." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="budget"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estimated Budget (Optional)</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Below ₹10,000">Below ₹10,000</SelectItem>
                    <SelectItem value="₹10,000 - ₹50,000">₹10,000 - ₹50,000</SelectItem>
                    <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="Above ₹1,00,000">Above ₹1,00,000</SelectItem>
                    <SelectItem value="Not Sure">Not Sure</SelectItem>
                  </SelectContent>
                </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="preferredContactMethod"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Preferred Contact Method (Optional)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Email" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Email
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Phone" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Phone Call
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your needs or questions..."
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
