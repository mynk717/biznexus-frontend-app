
"use client";

import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Twitter, Share2 } from "lucide-react";
import { useEffect, useState } from "react";

interface SocialShareButtonsProps {
  title: string;
  excerpt?: string;
}

export default function SocialShareButtons({ title, excerpt }: SocialShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!currentUrl) {
    return null; 
  }

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedExcerpt = excerpt ? encodeURIComponent(excerpt) : encodedTitle;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedExcerpt}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-muted-foreground">Share:</span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.facebook, "_blank")}
        aria-label="Share on Facebook"
      >
        <Facebook className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.twitter, "_blank")}
        aria-label="Share on X (Twitter)"
      >
        <Twitter className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.linkedin, "_blank")}
        aria-label="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => window.open(shareLinks.whatsapp, "_blank")}
        aria-label="Share on WhatsApp"
      >
        <Share2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
