// src/lib/types.ts
// Clean version without Firebase dependencies

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
  price?: number | string;
  keyFeatures?: string[];
  fullDetails?: string;
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
  timestamp: Date;  // CHANGED: Removed Firebase Timestamp, now just Date
  status: "New" | "Contacted" | "Resolved";
}

export interface FirebaseUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

// Enhanced BlogPost interface with SEO and schema support
export interface BlogPostAuthor {
  name: string;
  avatarUrl?: string;
  bio?: string;
  credentials?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  publicationDate: string | Date;  // CLEAN: Just string or Date, no Firebase Timestamp
  lastModified?: string;
  author: BlogPostAuthor;
  category?: 'insurance' | 'solar' | 'digital-marketing' | 'automotive' | 'real-estate';
  tags: string[];
  readingTime?: number;
  featured?: boolean;
  searchVolume?: number;
  schema?: {
    faqSchema?: object;
    howToSchema?: object;
    articleSchema?: object;
  };
}