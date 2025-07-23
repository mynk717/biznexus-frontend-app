import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center space-y-6 text-center">
      <AlertTriangle className="h-20 w-20 animate-pulse text-destructive" />
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Page Not Found</h1>
        <p className="text-lg text-muted-foreground">
          Oops! The page you are looking for does not exist.
        </p>
        <p className="text-sm text-muted-foreground">
          It might have been moved, deleted, or you may have typed the address incorrectly.
        </p>
      </div>
      <Button asChild size="lg">
        <Link href="/">
          <Home className="mr-2 h-5 w-5" />
          Go back to Homepage
        </Link>
      </Button>
    </div>
  );
}
