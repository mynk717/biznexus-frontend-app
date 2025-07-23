
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileText, AlertTriangle } from 'lucide-react';

export default function BlogPostNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-4xl font-bold tracking-tight">Blog Post Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sorry, we couldn&apos;t find the blog post you were looking for.
      </p>
      <p className="mt-2 text-muted-foreground">
        It might have been moved, deleted, or the link might be incorrect.
      </p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/">Go back to Homepage</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/blog">View All Posts</Link>
        </Button>
      </div>
    </div>
  );
}
