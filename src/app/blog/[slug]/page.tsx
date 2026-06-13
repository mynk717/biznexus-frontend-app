// src/app/blog/[slug]/page.tsx - NEUMORPHIC UPGRADE

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/mockBlogPosts';
import SocialShareButtons from '@/components/blog/SocialShareButtons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, ArrowLeft, Clock } from 'lucide-react';
import { format } from 'date-fns';
import type { BlogPost } from '@/lib/types';
import UsedCarCalculator from '@/components/tools/UsedCarCalculator';

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
    alternates: {
      canonical: `https://mdn.mktgdime.com/blog/${slug}`,
    },
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
      type: 'article',
      publishedTime: new Date(post.publicationDate).toISOString(),
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
    ? format(new Date(post.publicationDate), "MMMM d, yyyy") 
    : 'Date N/A';

  const authorInitials = post.author.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  const relatedPosts = post.category 
    ? await getRelatedPosts(post.slug, post.category)
    : [];

  return (
    <>
      {/* Schema Markup for GSC Authority */}
      {post.schema?.faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ 
            __html: JSON.stringify(post.schema.faqSchema) 
          }}
        />
      )}

      <div className="flex flex-col gap-12 py-12">
        <Link href="/blog" className="nm-button inline-flex items-center w-max px-6 py-2 rounded-xl text-sm font-bold text-slate-600 hover:text-blue-600 mb-4 ml-auto mr-auto md:ml-0 md:mr-auto">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Knowledge Hub
        </Link>

        <article className="nm-flat-lg rounded-[60px] overflow-hidden bg-white dark:bg-slate-900 border-none">
          {/* Featured Image Header */}
          {post.imageUrl && (
            <div className="relative aspect-[21/9] w-full nm-inset p-2">
              <div className="relative w-full h-full overflow-hidden rounded-[50px]">
                <Image
                  src={post.imageUrl}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto px-8 md:px-16 py-16 space-y-12">
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <Badge variant="outline" className="nm-flat-sm border-none bg-blue-50 text-blue-700 px-4 py-1 font-black uppercase tracking-widest text-[10px]">
                  {post.category}
                </Badge>
                <div className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest">
                  <CalendarDays className="h-4 w-4" />
                  {formattedDate}
                </div>
                {post.readingTime && (
                  <div className="flex items-center gap-1 text-xs font-bold text-slate-400 uppercase tracking-widest border-l pl-4 border-slate-200">
                    <Clock className="h-4 w-4" />
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-800 dark:text-white leading-[1.1]">
                {post.title}
              </h1>

              <div className="nm-inset p-6 rounded-3xl flex items-center gap-4 bg-slate-50/50">
                <Avatar className="h-12 w-12 nm-flat-sm border-none bg-white">
                  {post.author.avatarUrl ? (
                    <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                  ) : (
                    <UserCircle className="h-full w-full p-1 text-blue-500" />
                  )}
                  <AvatarFallback>{authorInitials}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    {post.author.name}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {post.author.credentials || 'Technical Advisory'}
                  </span>
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div className="blog-content prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:tracking-tighter prose-p:leading-relaxed prose-a:text-blue-600 prose-a:font-bold prose-strong:text-slate-900 dark:prose-strong:text-white">
              {post.content.includes('[USED_CAR_CALCULATOR]') ? (
                <>
                  <div dangerouslySetInnerHTML={{ __html: post.content.split('[USED_CAR_CALCULATOR]')[0] }} />
                  <div className="not-prose my-16 nm-flat p-8 rounded-[40px]">
                    <UsedCarCalculator />
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: post.content.split('[USED_CAR_CALCULATOR]')[1] }} />
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}
            </div>

            <hr className="border-slate-100" />

            {/* Author Box Hardened */}
            {post.author.bio && (
              <div className="nm-inset p-8 md:p-12 rounded-[40px] bg-slate-50/30">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                  <div className="nm-flat w-24 h-24 rounded-full flex items-center justify-center bg-white flex-shrink-0 border-4 border-slate-50 shadow-xl">
                    <UserCircle className="h-16 w-16 text-blue-600" />
                  </div>
                  <div>
                    <Badge className="bg-blue-600 mb-4">Verified Author</Badge>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">About {post.author.name}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic italic">
                      "{post.author.bio}"
                    </p>
                  </div>
                </div>
              </div>
            )}

            <footer className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-8">
              <div className="nm-flat px-8 py-4 rounded-2xl bg-white/50">
                 <SocialShareButtons title={post.title} excerpt={post.excerpt} />
              </div>
              <Link href="/blog" className="nm-button px-8 py-4 rounded-2xl font-black text-blue-600 bg-white">
                Finish Reading
              </Link>
            </footer>
          </div>
        </article>

        {/* Related Posts Hardened */}
        {relatedPosts.length > 0 && (
          <section className="space-y-12 mt-12">
            <h2 className="text-3xl font-black tracking-tighter text-slate-800 text-center">Continue Your Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id} 
                  href={`/blog/${relatedPost.slug}`}
                  className="nm-flat p-4 rounded-[40px] group transition-all hover:scale-105"
                >
                  {relatedPost.imageUrl && (
                    <div className="relative aspect-video overflow-hidden rounded-[32px] nm-inset p-1 mb-4">
                      <Image
                        src={relatedPost.imageUrl}
                        alt={relatedPost.imageAlt || relatedPost.title}
                        fill
                        className="object-cover rounded-[30px] transition duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-4 space-y-3">
                    <Badge variant="outline" className="nm-flat-sm border-none bg-white text-[10px] font-bold px-3 uppercase tracking-widest">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-black leading-tight text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
