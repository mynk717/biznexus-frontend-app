// src/app/tata-aig-insurance/page.tsx
"use client";

import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';

// Define interfaces for pillar page content and blog posts
interface PillarPageContent {
  id: string;
  slug: string;
  type: string;
  post_title: string;
  seoTitle: string;
  metaDescription: string;
  pillarPageFullContent: string;
  faqSchemaJson?: string;
  post_status?: string;
  post_date?: string;
  post_modified?: string;
  permalink?: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  imageUrl?: string;
  tags?: string[];
}

export default function TataAIGInsurancePage() {
  const [pillarPage, setPillarPage] = useState<PillarPageContent | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // CORRECT SLUG: This is the updated and final slug value.
  const pageSlug = "post-42";

  useEffect(() => {
    const fetchPillarPageAndRelatedBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        // 1. Fetch Pillar Page Content from Firestore using a QUERY
        const pillarPagesCollection = collection(db, 'pillarPages');
        const pillarPageQuery = query(
          pillarPagesCollection,
          where('slug', '==', pageSlug),
          limit(1) // We only expect one document for this slug
        );
        const pillarPageSnapshot = await getDocs(pillarPageQuery);

        let fetchedPillarPage: PillarPageContent | null = null;
        if (!pillarPageSnapshot.empty) {
          // Get the first document from the result
          const docData = pillarPageSnapshot.docs[0].data() as PillarPageContent;
          fetchedPillarPage = { ...docData, id: pillarPageSnapshot.docs[0].id };
          setPillarPage(fetchedPillarPage);
        } else {
          setError('Pillar page content not found in Firestore.');
          setLoading(false);
          return;
        }

        // 2. Fetch Related Blog Posts
        if (fetchedPillarPage) {
          const serviceTags = [
            'tata-aig',
            'health-insurance',
            'insurance',
            'policy',
            'claims'
          ];

          if (serviceTags.length > 0) {
            const blogsRef = collection(db, 'blogPosts');
            const relatedBlogsQuery = query(blogsRef, where('tags', 'array-contains-any', serviceTags));
            const blogSnapshot = await getDocs(relatedBlogsQuery);

            const blogsData: BlogPost[] = blogSnapshot.docs.map(doc => ({
              ...doc.data() as BlogPost, id: doc.id
            }));
            setRelatedBlogs(blogsData);
          }
        }
      } catch (err: any) {
        console.error("Error fetching pillar page or related blogs:", err);
        setError('Failed to load pillar page details or related content. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchPillarPageAndRelatedBlogs();
  }, [pageSlug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
        <p className="text-lg text-gray-700">Loading comprehensive guide...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-red-50">
        <p className="text-lg text-red-700">{error}</p>
      </main>
    );
  }

  if (!pillarPage) {
    return (
      <main className="min-h-screen flex items-center justify-center p-4 bg-yellow-50">
        <p className="text-lg text-yellow-700">Pillar page content not available.</p>
      </main>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pillarPage.post_title,
    "description": pillarPage.metaDescription,
    "url": `https://biznexux.mktgdime.com/tata-aig-insurance`,
    "publisher": {
      "@type": "Organization",
      "name": "Biznexus",
      "url": "https://biznexux.mktgdime.com"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://biznexux.mktgdime.com/tata-aig-insurance`
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://biznexux.mktgdime.com" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://biznexux.mktgdime.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Tata AIG Health Insurance", "item": "https://biznexux.mktgdime.com/services/tata-health-insurance" },
        { "@type": "ListItem", "position": 4, "name": pillarPage.post_title, "item": `https://biznexux.mktgdime.com/tata-aig-insurance` }
      ]
    }
  };

  let faqSchemaLd = null;
  try {
    if (pillarPage.faqSchemaJson && pillarPage.faqSchemaJson !== '{}') {
      faqSchemaLd = JSON.parse(pillarPage.faqSchemaJson);
    }
  } catch (e) {
    console.error("Error parsing FAQ Schema JSON:", e);
  }

  return (
    <main className="container mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg my-8 max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqSchemaLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaLd) }}
        />
      )}
      <section className="hero-section mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          {pillarPage.post_title}
        </h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          {pillarPage.metaDescription}
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/contact" passHref>
            <Button size="lg">Get a Free Quote</Button>
          </Link>
          <Link href="#related-articles" passHref>
            <Button size="lg" variant="outline">Read Articles</Button>
          </Link>
        </div>
      </section>
      <section className="pillar-content prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: pillarPage.pillarPageFullContent }} />
      </section>
      {relatedBlogs.length > 0 && (
        <section id="related-articles" className="related-blogs mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Related Articles & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map(blog => (
              <Card key={blog.id} className="flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl">
                {blog.imageUrl && (
                  <div className="relative w-full h-40 bg-gray-100">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-3">{blog.shortDescription}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={`/blog/${blog.slug}`} passHref>
                    <Button variant="outline" className="w-full">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}