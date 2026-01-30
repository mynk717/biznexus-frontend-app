// src/app/blog/[slug]/page.tsx - FINAL FIX (No onError)

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/mockBlogPosts';
import SocialShareButtons from '@/components/blog/SocialShareButtons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/types';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | MDNetwork Blog',
    };
  }

  return {
    title: post.metaTitle || `${post.title} | MDNetwork Blog`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
      type: 'article',
      publishedTime: new Date(post.publicationDate as Date).toISOString(),
      authors: [post.author.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publicationDate 
    ? format(new Date(post.publicationDate as Date), "MMMM d, yyyy") 
    : 'Date N/A';

  const authorInitials = post.author.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <>
      {/* Schema Markup - Article Schema */}
      {post.schema?.articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(post.schema.articleSchema) 
          }}
        />
      )}

      {/* Schema Markup - FAQ Schema */}
      {post.schema?.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(post.schema.faqSchema) 
          }}
        />
      )}

      {/* Schema Markup - HowTo Schema */}
      {post.schema?.howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(post.schema.howToSchema) 
          }}
        />
      )}

      <article className="max-w-3xl mx-auto py-8 space-y-8">
        <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline mb-4">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <header className="space-y-4">
          {/* Category Badge */}
          {post.category && (
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="capitalize">
                {post.category}
              </Badge>
              {post.featured && (
                <Badge className="bg-yellow-500">Featured</Badge>
              )}
            </div>
          )}

          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                {post.author.avatarUrl ? (
                  <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                ) : (
                  <UserCircle className="h-full w-full p-1" />
                )}
                <AvatarFallback>{authorInitials}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">
                  {post.author.name}
                </span>
                {post.author.credentials && (
                  <span className="text-xs text-muted-foreground">
                    {post.author.credentials}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-1 text-sm">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={new Date(post.publicationDate as Date).toISOString()}>
                {formattedDate}
              </time>
            </div>

            {post.readingTime && (
              <div className="flex items-center gap-1 text-sm">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            )}
          </div>

          {/* Last Modified Date */}
          {post.lastModified && (
            <p className="text-xs text-muted-foreground">
              Last updated: {format(new Date(post.lastModified), "MMMM d, yyyy")}
            </p>
          )}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          )}
        </header>

        {/* Featured Image - Only show if URL exists */}
        {post.imageUrl && (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md bg-gray-100">
            <Image
              src={post.imageUrl}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Blog Content */}
        <div
          className="blog-content prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <hr />

        {/* Author Bio (if available) */}
        {post.author.bio && (
          <div className="author-box bg-muted/50 p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                {post.author.avatarUrl ? (
                  <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                ) : (
                  <UserCircle className="h-full w-full p-2" />
                )}
                <AvatarFallback className="text-xl">{authorInitials}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg mb-1">About {post.author.name}</h3>
                {post.author.credentials && (
                  <p className="text-sm text-muted-foreground mb-2">
                    {post.author.credentials}
                  </p>
                )}
                <p className="text-sm">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}

        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <SocialShareButtons title={post.title} excerpt={post.excerpt} />
          <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </footer>
      </article>
    </>
  );
}