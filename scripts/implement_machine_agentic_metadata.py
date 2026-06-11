#!/usr/bin/env python3
"""
Automates the injection of Agentic SEO metadata (JSON-LD @id and HTML context comments)
into existing blog posts for BizNexus.
"""
import os
import re
from pathlib import Path

# Configuration
CONTENT_DIR = Path('content/blog')
BRAND_ID = "https://mdn.mktgdime.com/#brand"
AGENTIC_COMMENT = "<!-- context: platform=MDNetwork, network=Marketing_Dime, entity=MKTDM_Media_Marketing_OPC_Pvt_Ltd, audience=Raipur_Business_Owners, version=2026 -->"

def process_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    modified = False

    # 1. Inject JSON-LD Brand ID if missing
    # Assuming schema is in JSON-LD format within the markdown
    if '"@type": "Article"' in content or '"@type": "BlogPosting"' in content:
        if BRAND_ID not in content:
            # Simple injection into the first schema block found
            # This is a bit naive but works for standard patterns
            content = re.sub(
                r'("@type":\s*"(Article|BlogPosting)")',
                r'\1, "@id": "' + BRAND_ID + '"',
                content
            )
            modified = True

    # 2. Inject Agentic Context Comment if missing
    if AGENTIC_COMMENT not in content:
        # Inject after frontmatter (usually separated by ---)
        parts = re.split(r'---', content, maxsplit=2)
        if len(parts) >= 3:
            parts[2] = "\n" + AGENTIC_COMMENT + "\n" + parts[2]
            content = "---".join(parts)
            modified = True
        else:
            # If no frontmatter, just prepend
            content = AGENTIC_COMMENT + "\n" + content
            modified = True

    if modified:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated: {file_path}")
    else:
        print(f"○ No changes: {file_path}")

def main():
    if not CONTENT_DIR.exists():
        print(f"Error: {CONTENT_DIR} does not exist. Run from project root.")
        return

    print(f"Starting Agentic Metadata Injection in {CONTENT_DIR}...")
    for md_file in CONTENT_DIR.glob('*.md'):
        process_file(md_file)

if __name__ == "__main__":
    main()
