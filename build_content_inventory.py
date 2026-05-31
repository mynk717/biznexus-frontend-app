import os
import glob
import frontmatter
import pandas as pd

CONTENT_DIR = os.path.join(os.path.dirname(__file__), 'content', 'blog', '*.md')
OUTPUT_PATH = os.path.join(os.path.dirname(__file__), 'docs', 'content_inventory.parquet')

def scan_content():
    content_data = []
    files = glob.glob(CONTENT_DIR)
    
    for file_path in files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                post = frontmatter.load(f)
                slug = os.path.basename(file_path).replace('.md', '')
                
                content_data.append({
                    "slug": slug,
                    "title": post.get('title', ''),
                    "metaTitle": post.get('metaTitle', ''),
                    "primary_keyword": post.get('primaryKeyword', ''), # We should start adding this to frontmatter
                    "tags": ", ".join(post.get('tags', [])) if isinstance(post.get('tags'), list) else str(post.get('tags', '')),
                    "last_updated": os.path.getmtime(file_path)
                })
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
            
    return content_data

def main():
    print("Scanning content directory...")
    data = scan_content()
    
    if data:
        df = pd.DataFrame(data)
        df.to_parquet(OUTPUT_PATH, index=False)
        print(f"--- Content Inventory Created ---")
        print(f"Location: {OUTPUT_PATH}")
        print(f"Total Articles Indexed: {len(df)}")
        print("\nRecently Updated Slugs:")
        print(df[['slug', 'title']].tail(10).to_string(index=False))
    else:
        print("No content found to index.")

if __name__ == '__main__':
    main()
