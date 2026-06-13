
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, UserCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { format } from 'date-fns';

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  const formattedDate = post.publicationDate ? format(new Date(post.publicationDate as Date), "MMMM d, yyyy") : 'Date N/A';

  return (
    <div className="nm-flat p-4 rounded-[40px] flex flex-col h-full group hover:scale-[1.02] transition-all">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="relative h-56 w-full overflow-hidden rounded-[32px] nm-inset p-1">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-[30px] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="nm-flat-sm border-none bg-blue-50 text-blue-700 px-3 py-1 capitalize">
            {post.category}
          </Badge>
          <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-auto">
             <CalendarDays className="mr-1 h-3 w-3" />
             {formattedDate}
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-black text-slate-800 dark:text-slate-100 leading-tight mb-4 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3 mb-6 flex-grow">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
           <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <div className="nm-flat-sm w-8 h-8 rounded-full flex items-center justify-center bg-white">
                <UserCircle className="h-5 w-5 text-blue-500" />
              </div>
              {post.author.name}
           </div>
           
           <Button asChild className="nm-button bg-transparent border-none text-blue-700 p-0 h-10 w-10 rounded-full flex items-center justify-center">
              <Link href={`/blog/${post.slug}`}>
                <ArrowRight className="h-5 w-5" />
              </Link>
           </Button>
        </div>
      </div>
    </div>
  );
}
