
import type { Metadata } from 'next';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getAllBlogPosts } from '@/lib/mockBlogPosts'; // Using mock for now

export const metadata: Metadata = {
  title: 'Blog | BizNexus',
  description: 'Read the latest articles and insights from BizNexus.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts(); 

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          Our Blog
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Latest articles, news, and insights from the BizNexus team.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No blog posts available yet. Check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
