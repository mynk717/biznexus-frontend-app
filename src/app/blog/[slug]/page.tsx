
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug } from '@/lib/mockBlogPosts';
import SocialShareButtons from '@/components/blog/SocialShareButtons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/types';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found | BizNexus Blog',
    };
  }

  return {
    title: post.metaTitle || `${post.title} | BizNexus Blog`,
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
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.publicationDate ? format(new Date(post.publicationDate as Date), "MMMM d, yyyy") : 'Date N/A';
  const authorInitials = post.author.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <article className="max-w-3xl mx-auto py-8 space-y-8">
      <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline mb-4">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              {post.author.avatarUrl ? (
                <AvatarImage src={post.author.avatarUrl} alt={post.author.name} data-ai-hint="author profile" />
              ) : (
                 <UserCircle className="h-full w-full p-1" />
              )}
              <AvatarFallback>{authorInitials}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={new Date(post.publicationDate as Date).toISOString()}>
              {formattedDate}
            </time>
          </div>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}
      </header>

      {post.imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-md">
          <Image
            src={post.imageUrl}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            priority
            data-ai-hint={post.slug === 'local-digital-marketing-raipur' ? 'digital marketing Raipur' : post.slug === 'seo-services-raipur-google-ranking' ? 'SEO services Raipur' : post.slug === 'google-ads-agency-raipur-ppc' ? 'Google Ads Raipur' : 'blog article'}
          />
        </div>
      )}

      <div
        className="prose prose-lg dark:prose-invert max-w-none space-y-4"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <hr />

      <footer className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <SocialShareButtons title={post.title} excerpt={post.excerpt} />
         <Link href="/blog" className="inline-flex items-center text-sm text-primary hover:underline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
        </Link>
      </footer>
    </article>
  );
}
