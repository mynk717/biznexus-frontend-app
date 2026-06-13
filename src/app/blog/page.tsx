
import type { Metadata } from 'next';
import Link from 'next/link';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { getAllBlogPosts } from '@/lib/mockBlogPosts';
import { Badge } from '@/components/ui/badge';
import { Search, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Expertise | MDNetwork Raipur',
  description: 'Authoritative guides on TATA AIG Insurance, Solar Subsidies, and Local Business Growth in Raipur.',
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts(); 

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Header */}
      <section className="text-center space-y-6 pt-12">
        <Badge variant="outline" className="nm-flat-sm border-none bg-blue-50 text-blue-700 px-4 py-1 font-bold uppercase tracking-widest text-[10px]">
          MDNetwork Intelligence
        </Badge>
        <h1 className="text-4xl font-black tracking-tight lg:text-6xl text-slate-800 dark:text-slate-100">
          Raipur <span className="text-blue-600">Knowledge Hub</span>
        </h1>
        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Technical insights and legal checklists for solar, insurance, and property investments in Chhattisgarh.
        </p>
      </section>

      {/* Filter & Search Bar */}
      <section className="container mx-auto max-w-6xl">
        <div className="nm-flat p-4 rounded-3xl flex flex-col md:flex-row items-center gap-4">
           <div className="relative flex-grow nm-inset rounded-2xl p-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search solar, insurance, or RTO guides..." 
                className="bg-transparent border-none w-full pl-12 pr-4 h-12 focus:outline-none font-medium text-slate-700 dark:text-slate-200"
              />
           </div>
           <button className="nm-button flex items-center gap-2 px-8 py-3 rounded-2xl bg-white dark:bg-slate-800 font-bold text-slate-700 dark:text-slate-200">
              <Filter className="h-4 w-4" /> Filter By Topic
           </button>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto max-w-6xl pb-20">
        {posts.length === 0 ? (
          <div className="nm-inset p-20 rounded-[40px] text-center">
            <p className="text-xl text-slate-500 font-bold italic">
              Knowledge database initializing... Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
