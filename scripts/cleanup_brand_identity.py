#!/usr/bin/env python3
"""
CLEANUP SCRIPT: Fixes brand identity and removes duplicate agentic metadata.
Ensures only MDNetwork / Marketing Dime identity is present.
"""
import os
import re
from pathlib import Path

# Configuration
CONTENT_DIR = Path('content/blog')
CORRECT_BRAND_ID = "https://mdn.mktgdime.com/#brand"
CORRECT_COMMENT = "<!-- context: platform=MDNetwork, network=Marketing_Dime, entity=MKTDM_Media_Marketing_OPC_Pvt_Ltd, kgmid=/g/11y7_6_m_m, place_ids=[ChIJhWY8NnI7W20RZjfPOVIl7FQ, ChIJtWfWnLPdKDoRPQn9LqhSgHE], version=2026 -->"

# Patterns to remove
OLD_BRAND_ID = "https://biznexus.in/#brand"
OLD_COMMENT = "<!-- context: platform=BizNexus, audience=Raipur_Solar_Insurance_Buyers, data_version=2026 -->"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Fix JSON-LD @id entries
    # Remove any existing @id entries first to avoid duplicates
    new_content = re.sub(r',\s*"@id":\s*"[^"]+"', '', content)
    # Re-inject the correct one after @type
    new_content = re.sub(
        r'("@type":\s*"(Article|BlogPosting)")',
        r'\1, "@id": "' + CORRECT_BRAND_ID + '"',
        new_content
    )
    
    if new_content != content:
        content = new_content
        modified = True

    # 2. Fix Agentic Comments
    # Remove all known agentic comments first
    content = content.replace(CORRECT_COMMENT, "")
    content = content.replace(OLD_COMMENT, "")
    
    # Clean up double newlines that might have been left
    content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

    # Re-inject correct comment after frontmatter
    parts = re.split(r'---', content, maxsplit=2)
    if len(parts) >= 3:
        parts[2] = "\n" + CORRECT_COMMENT + "\n" + parts[2].lstrip()
        content = "---".join(parts)
        modified = True
    else:
        content = CORRECT_COMMENT + "\n" + content.lstrip()
        modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Cleaned & Updated: {file_path}")
    else:
        print(f"○ No changes: {file_path}")

def main():
    if not CONTENT_DIR.exists():
        print(f"Error: {CONTENT_DIR} does not exist. Run from project root.")
        return

    print(f"Cleaning brand identity in {CONTENT_DIR}...")
    for md_file in CONTENT_DIR.glob('*.md'):
        process_file(md_file)

if __name__ == "__main__":
    main()
