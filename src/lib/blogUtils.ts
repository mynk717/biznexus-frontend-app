import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './types';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Check if directory exists
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        id: data.id,
        slug: slug,
        title: data.title,
        metaTitle: data.metaTitle,
        metaDescription: data.metaDescription,
        excerpt: data.excerpt,
        category: data.category,
        publicationDate: data.publicationDate,
        author: {
          name: data.authorName,
          credentials: data.authorCredentials,
          bio: data.authorBio,
        },
        imageUrl: data.imageUrl,
        imageAlt: data.imageAlt,
        content: content,
        tags: data.tags,
        readingTime: data.readingTime,
        schema: data.schema,
      } as BlogPost;
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.publicationDate < b.publicationDate ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return undefined;
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      id: data.id,
      slug: slug,
      title: data.title,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      excerpt: data.excerpt,
      category: data.category,
      publicationDate: data.publicationDate,
      author: {
        name: data.authorName,
        credentials: data.authorCredentials,
        bio: data.authorBio,
      },
      imageUrl: data.imageUrl,
      imageAlt: data.imageAlt,
      content: content,
      tags: data.tags,
      readingTime: data.readingTime,
      schema: data.schema,
    } as BlogPost;
  } catch (e) {
    return undefined;
  }
}
