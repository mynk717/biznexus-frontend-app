
import pandas as pd
import json
import os
import glob
import frontmatter

EXCEL_PATH = r'C:\Users\mayank\Downloads\solar-subsidy-raipur-2026_list_2026-05-27.xlsx'
CONTENT_DIR = r'content\blog\*.md'
INVENTORY_PATH = r'docs\seo_tools' # Current path of the inventory file

def get_used_keywords():
    """Scans local markdown files for keywords used in tags or content."""
    used = {}
    files = glob.glob(CONTENT_DIR)
    for file_path in files:
        with open(file_path, 'r', encoding='utf-8') as f:
            post = frontmatter.load(f)
            slug = os.path.basename(file_path).replace('.md', '')
            # Check tags
            tags = post.get('tags', [])
            for tag in tags:
                used[tag.lower()] = slug
            # Check metaTitle
            title = post.get('metaTitle', '')
            used[title.lower()] = slug
    return used

def main():
    if not os.path.exists(EXCEL_PATH):
        print(f"Error: SEMrush file not found.")
        return

    # 1. Load SEMrush Data
    df = pd.read_excel(EXCEL_PATH)
    
    # 2. Get currently used keywords from our blogs
    used_map = get_used_keywords()
    
    # 3. Build the Inventory
    inventory = []
    for _, row in df.iterrows():
        kw = str(row['Keyword']).lower()
        status = "Opportunity"
        page = ""
        
        # Check if this keyword (or a very similar one) is used
        if kw in used_map:
            status = "Published"
            page = used_map[kw]
            
        inventory.append({
            "keyword": row['Keyword'],
            "volume": int(row['Volume']) if pd.notnull(row['Volume']) else 0,
            "difficulty": int(row['Keyword Difficulty']) if pd.notnull(row['Keyword Difficulty']) else 0,
            "intent": row['Intent'] if pd.notnull(row['Intent']) else "N/A",
            "status": status,
            "linked_page": page
        })

    # 4. Save to the inventory file
    with open(INVENTORY_PATH, 'w') as f:
        json.dump(inventory, f, indent=2)
        
    print("\n--- SEO Inventory Updated ---")
    inv_df = pd.DataFrame(inventory)
    published = inv_df[inv_df['status'] == 'Published']
    print(f"Keywords Published: {len(published)}")
    print(published[['keyword', 'linked_page']].head(20).to_string(index=False))

if __name__ == '__main__':
    main()
