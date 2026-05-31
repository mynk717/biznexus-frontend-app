
import pandas as pd
import json
import os
import glob
import frontmatter

EXCEL_PATH = os.path.join(os.path.dirname(__file__), 'docs', 'raw_data', 'solar-subsidy-raipur-2026_list_2026-05-27.xlsx')
CONTENT_DIR = os.path.join(os.path.dirname(__file__), 'content', 'blog', '*.md')
INVENTORY_PATH = os.path.join(os.path.dirname(__file__), 'docs', 'seo_tools') # Current path of the inventory file

def get_used_keywords():
    """Scans local markdown files for keywords used in tags or content."""
    used = {}
    files = glob.glob(CONTENT_DIR)
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
            slug = os.path.basename(file_path).replace('.md', '')
            
            # 1. Check metadata (tags, title, description)
            metadata_text = " ".join(post.get('tags', [])) + " " + post.get('metaTitle', '') + " " + post.get('metaDescription', '')
            
            # 2. Check full body content
            full_text = (metadata_text + " " + post.content).lower()
            
            # Store the slug for any keywords found in this specific text
            # We'll return the full text for the main loop to check against
            used[slug] = full_text
    return used

def main():
    if not os.path.exists(EXCEL_PATH):
        print(f"Error: SEMrush file not found.")
        return

    # 1. Load SEMrush Data
    df = pd.read_excel(EXCEL_PATH)
    
    # 2. Get currently used content from our blogs
    content_map = get_used_keywords()
    
    # 3. Build the Inventory
    inventory = []
    for _, row in df.iterrows():
        kw = str(row['Keyword']).lower()
        status = "Opportunity"
        page = ""
        
        # Check every blog's content for this keyword
        for slug, body_text in content_map.items():
            if kw in body_text:
                status = "Published"
                page = slug
                break
            
        inventory.append({
            "keyword": row['Keyword'],
            "volume": int(row['Volume']) if pd.notnull(row['Volume']) else 0,
            "difficulty": int(row['Keyword Difficulty']) if pd.notnull(row['Keyword Difficulty']) else 0,
            "intent": row['Intent'] if pd.notnull(row['Intent']) else "N/A",
            "status": status,
            "linked_page": page
        })

    # 4. Save to the inventory file (JSON for human/legacy, Parquet for AI/Performance)
    with open(INVENTORY_PATH, 'w') as f:
        json.dump(inventory, f, indent=2)
    
    # Save as Parquet
    parquet_path = INVENTORY_PATH + '.parquet'
    inv_df = pd.DataFrame(inventory)
    inv_df.to_parquet(parquet_path, index=False)
        
    print(f"\n--- SEO Inventory Updated ---")
    print(f"JSON: {INVENTORY_PATH}")
    print(f"Parquet: {parquet_path}")
    published = inv_df[inv_df['status'] == 'Published']
    print(f"Keywords Published: {len(published)}")
    print(published[['keyword', 'linked_page']].head(20).to_string(index=False))

if __name__ == '__main__':
    main()
