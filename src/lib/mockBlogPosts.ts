import { BlogPost } from './types';
import * as blogUtils from './blogUtils';

// This file now acts as a bridge between the old mock data 
// and the new Markdown-based content system.

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  return blogUtils.getAllBlogPosts();
};

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | undefined> => {
  return blogUtils.getBlogPostBySlug(slug);
};

export const getRelatedPosts = async (currentSlug: string, category: string): Promise<BlogPost[]> => {
  const allPosts = await blogUtils.getAllBlogPosts();
  
  const related = allPosts.filter(
    (post) => post.category === category && post.slug !== currentSlug
  );

  if (related.length < 3) {
    const others = allPosts
      .filter((post) => post.category !== category && post.slug !== currentSlug)
      .sort(() => 0.5 - Math.random()) // Randomize for variety
      .slice(0, 3 - related.length);
    return [...related, ...others].slice(0, 3);
  }

  return related.slice(0, 3);
};

// For backward compatibility with any direct array access (though not recommended)
// We provide an empty array or a dynamic getter if needed.
export const blogPosts: BlogPost[] = []; 
