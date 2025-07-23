
"use server";

import { z } from "zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import type { Inquiry } from "@/lib/types";
import { summarizeInquiry } from "@/ai/flows/summarize-inquiry";
import { revalidatePath } from "next/cache";

// This schema is used for server-side validation
const inquirySchema = z.object({
  serviceId: z.string().min(1, "Service ID is required."),
  serviceName: z.string().min(1, "Service name is required."),
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number seems too short.").max(15, "Phone number seems too long."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  companyName: z.string().optional(),
  preferredContactMethod: z.enum(['Email', 'Phone']).optional(),
  budget: z.string().optional(),
});

// This type is used by react-hook-form on the client
type InquiryFormClientValues = Omit<z.infer<typeof inquirySchema>, "serviceId" | "serviceName">;


export type InquiryFormState = {
  message: string;
  fields?: Record<string, string>; // To repopulate form, if necessary
  issues?: string[]; // For general error summary in toast
  fieldErrors?: Partial<Record<keyof z.infer<typeof inquirySchema>, string[]>>; // For field-specific errors
  success: boolean;
};

export async function submitInquiryAction(
  prevState: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const serviceId = formData.get("serviceId") as string;
  const serviceName = formData.get("serviceName") as string;
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;
  const companyName = formData.get("companyName") as string;
  const preferredContactMethod = formData.get("preferredContactMethod") as ('Email' | 'Phone');
  const budget = formData.get("budget") as string;


  const validatedFields = inquirySchema.safeParse({
    serviceId,
    serviceName,
    fullName,
    email,
    phone,
    message,
    companyName,
    preferredContactMethod,
    budget,
  });

  if (!validatedFields.success) {
    const flatErrors = validatedFields.error.flatten();
    return {
      message: "Please correct the errors highlighted below.",
      fields: { fullName, email, phone, message, companyName, preferredContactMethod, budget }, // Keep original values
      fieldErrors: flatErrors.fieldErrors,
      issues: validatedFields.error.issues.map((issue) => issue.message),
      success: false,
    };
  }

  const data = validatedFields.data;

  try {
    let summary = "Could not generate summary.";
    try {
        const summaryResult = await summarizeInquiry({ message: data.message });
        if (summaryResult && summaryResult.summary) {
            summary = summaryResult.summary;
        }
    } catch (aiError) {
        console.error("AI summarization error:", aiError);
    }
    
    const inquiryToSave: Omit<Inquiry, "id"> = {
      ...data,
      summary: summary,
      timestamp: serverTimestamp(),
      status: "New",
    };

    await addDoc(collection(db, "inquiries"), inquiryToSave);
    
    // revalidatePath(`/services/${serviceId}`); // Example if needed

    return { message: "Inquiry submitted successfully! We will get back to you soon.", success: true };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    return {
      message: "Failed to submit inquiry due to a server error. Please try again later.",
      fields: { fullName, email, phone, message, companyName, preferredContactMethod, budget },
      success: false,
    };
  }
}
