
import type { Timestamp } from "firebase/firestore";

export interface ServiceSection {
  title: string;
  content: string;
  type: "text";
}

export interface Offering {
  title: string;
  description: string;
}

export interface ExamplePackage {
  name: string;
  type: string;
  duration: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  iconUrl: string;
  // --- Fields from Headless CMS ---
  price?: number | string;
  keyFeatures?: string[];
  fullDetails?: string;
  // --- Original fields for fallback ---
  sections?: ServiceSection[];
  offerings?: Offering[];
  brands?: string[];
  categories?: string[];
  examplePackages?: ExamplePackage[];
}

export interface Inquiry {
  id?: string;
  serviceId: string;
  serviceName: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  companyName?: string;
  preferredContactMethod?: 'Email' | 'Phone';
  budget?: string;
  summary?: string;
  timestamp: Timestamp | Date;
  status: "New" | "Contacted" | "Resolved";
}

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

export interface BlogPostAuthor {
  name: string;
  avatarUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  publicationDate: Date | Timestamp;
  author: BlogPostAuthor;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
}
