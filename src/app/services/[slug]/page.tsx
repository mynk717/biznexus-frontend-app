
import type { Service } from "@/lib/types";
import ServiceDetailsDisplay from "@/components/services/ServiceDetailsDisplay";
import { notFound } from "next/navigation";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { mockServices } from '@/lib/mockServices';
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, limit } from "firebase/firestore";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

const COLLECTION_NAME = "services";

async function getServiceBySlug(slug: string): Promise<Service | null> {
  console.log(`[getServiceBySlug] Attempting to find service with slug '${slug}' in Firestore collection '${COLLECTION_NAME}'.`);

  try {
    if (!db.app.options.projectId) {
      console.error("[getServiceBySlug] Firestore DB Project ID is missing. Firebase not initialized correctly.");
      throw new Error("Firestore Project ID missing during getServiceBySlug.");
    }
    console.log(`[getServiceBySlug] Using Firestore instance with Project ID: ${db.app.options.projectId}`);

    const servicesCol = collection(db, COLLECTION_NAME);
    const q = query(servicesCol, where("slug", "==", slug), limit(1));
    const serviceSnapshot = await getDocs(q);

    if (!serviceSnapshot.empty) {
      const doc = serviceSnapshot.docs[0];
      const data = doc.data();
      console.log(`[getServiceBySlug] Found service with slug '${slug}' in Firestore collection '${COLLECTION_NAME}'.`);
      return {
        id: doc.id,
        title: data.title || "Unnamed Service",
        shortDescription: data.shortDescription || "No description available.",
        iconUrl: data.iconUrl || "",
        slug: data.slug || doc.id,
        sections: data.sections || [],
        offerings: data.offerings || [], // Fetch offerings
        brands: data.brands || [],
        categories: data.categories || [],
        examplePackages: data.examplePackages || [],
      } as Service;
    } else {
      console.log(`[getServiceBySlug] Service with slug '${slug}' not found in Firestore collection '${COLLECTION_NAME}'. Trying mock data.`);
    }
  } catch (error: any) {
    console.error(`[getServiceBySlug] Error fetching service with slug '${slug}' from Firestore:`, error);
    if (error.code) {
        console.error(`[getServiceBySlug] Firebase Error Code: ${error.code}`);
    }
    // Fall through to try mock services if Firestore fetch fails
  }

  // Fallback to mock services if not found in Firestore or if an error occurred
  const mockService = mockServices.find(service => service.slug === slug);
  if (mockService) {
    console.log(`[getServiceBySlug] Found service with slug '${slug}' in mock data.`);
    return { ...mockService, title: `${mockService.title.replace(" (Demo)", "")} (Demo Data)` } as Service;
  }

  console.log(`[getServiceBySlug] Service with slug '${slug}' not found in Firestore or mock data.`);
  return null;
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  const titleSuffix = service.title.includes("(Demo Data)") ? " (Demo)" : "";
  return {
    title: `${service.title.replace(" (Demo Data)","")} | BizNexus${titleSuffix}`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const usingMockData = service.title.includes("(Demo Data)");

  if (!service.title.replace(" (Demo Data)","") || !service.shortDescription) {
     return (
      <Alert variant="destructive" className="mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Service Data Incomplete</AlertTitle>
        <AlertDescription>
          The data for this service (slug: {slug}) is incomplete. Please check your data source.
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <>
      {usingMockData && (
        <Alert variant="default" className="my-4 rounded-md border border-yellow-400 bg-yellow-50 p-4 text-yellow-700">
          <AlertCircle className="h-4 w-4 !text-yellow-700" />
          <AlertTitle className="font-semibold !text-yellow-800">Displaying Demo Data</AlertTitle>
          <AlertDescription className="!text-yellow-700">
            This service information is currently being shown from demo data because it could not be fetched from the Firestore '{COLLECTION_NAME}' collection.
          </AlertDescription>
        </Alert>
      )}
      <ServiceDetailsDisplay service={service} />
    </>
  );
}
