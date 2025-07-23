
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
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      {post.imageUrl && (
        <Link href={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
          <div className="relative h-48 w-full">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint={post.slug === 'local-digital-marketing-raipur' ? 'digital marketing Raipur' : post.slug === 'seo-services-raipur-google-ranking' ? 'SEO services Raipur' : post.slug === 'google-ads-agency-raipur-ppc' ? 'Google Ads Raipur' : 'blog article'}
            />
          </div>
        </Link>
      )}
      <CardHeader>
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <div className="flex items-center">
            <CalendarDays className="mr-1.5 h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <UserCircle className="mr-1.5 h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
