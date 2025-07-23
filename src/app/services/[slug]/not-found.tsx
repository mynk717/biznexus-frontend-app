import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default function ServiceNotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mb-4" />
      <h1 className="text-4xl font-bold tracking-tight">Service Not Found</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Sorry, we couldn&apos;t find the service you were looking for.
      </p>
      <p className="mt-2 text-muted-foreground">
        It might have been moved, deleted, or the link might be incorrect.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Go back to Homepage</Link>
      </Button>
    </div>
  );
}
