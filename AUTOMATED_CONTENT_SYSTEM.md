# 🤖 Automated Daily Content System (Claude + Gemini)

**Goal:** Automated daily article generation with morning delivery for review

---

## 🎯 System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   DAILY MORNING (8 AM)                      │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│  Git Automation Triggers (GitHub Actions / Cron Job)       │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌──────────────────┬──────────────────┬─────────────────────┐
│                  │                  │                     │
│  Step 1:         │  Step 2:         │  Step 3:            │
│  Claude          │  Gemini          │  Create             │
│  Creates         │  Writes          │  Draft Branch       │
│  Skeleton        │  Content         │  + PR               │
│  (30 min)        │  (1-2 hours)     │  (Auto)             │
│                  │                  │                     │
└──────────────────┴──────────────────┴─────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│     YOU REVIEW VIA WEB PANEL (10-11 AM)                    │
│     - Read article preview                                   │
│     - Check SEO audit score                                  │
│     - Approve → Publishes to main                            │
│     - Request changes → Sends back to Gemini                 │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│          ARTICLE GOES LIVE ON SITE                          │
│          Auto-submits to GSC for indexing                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 🏗️ System Components

### 1. Git-Based Automation
- **GitHub Actions** workflow (or local cron job)
- Triggers daily at 8 AM
- Runs Claude API → Gemini API sequence
- Creates draft branch + PR

### 2. Review Panel (Web UI)
- Next.js page at `/admin/content-review`
- Shows draft articles awaiting approval
- Live preview with SEO score
- Approve/Reject/Request Changes buttons

### 3. Content Pipeline
- Keyword selection (from parquet)
- Skeleton generation (Claude)
- Content writing (Gemini)
- SEO audit (automated)
- Draft PR creation

---

## 📋 Detailed Workflow

### Phase 1: Automated Morning Generation (8:00 AM)

**Step 1.1: Keyword Selection (Automated)**
```python
# Script: scripts/select_next_keyword.py
- Read seo_tools.parquet
- Read content_inventory.parquet
- Find highest-volume uncovered keyword
- Check for cannibalization
- Select next target keyword
- Output: keyword.json
```

**Step 1.2: Claude Creates Skeleton (8:00-8:30 AM)**
```bash
# Via Claude API
- Input: keyword.json + KEYWORD_CLUSTER_MAP.csv
- Output: skeleton.md
- Uses: SEO_AUDIT_MASTER_CHECKLIST.md
- Creates: Keyword-to-section mapping
- Validates: Against existing content (no cannibalization)
```

**Step 1.3: Gemini Writes Content (8:30-10:00 AM)**
```bash
# Via Gemini API
- Input: skeleton.md + seo_tools.parquet
- Output: article.md (full content)
- Injects: 2026 Raipur data, schema, FAQs
- Style: Human-first, E-E-A-T optimized
- Follows: SEO_AUDIT_MASTER_CHECKLIST.md
```

**Step 1.4: Automated SEO Audit (10:00-10:05 AM)**
```python
# Script: scripts/audit_article.py
- Runs SEO audit checklist
- Generates score (0-100%)
- Creates audit report
- Output: audit_report.json
```

**Step 1.5: Git Branch + PR Creation (10:05-10:10 AM)**
```bash
# Automated via GitHub Actions
git checkout -b draft/article-$(date +%Y%m%d)
git add content/blog/new-article.md
git commit -m "Draft: [Article Title]"
git push origin draft/article-$(date +%Y%m%d)
gh pr create --title "Review: [Article Title]" --label "draft" --body "SEO Score: 85%"
```

**Result:** By 10:10 AM, you have a PR ready for review!

---

### Phase 2: Your Review (10:00-11:00 AM)

**Via Web Panel: `/admin/content-review`**

**Panel Shows:**
- 📄 Article preview (rendered)
- 📊 SEO audit score (E-E-A-T, AEO, GEO, AIO)
- 🔍 Keyword analysis (volume, difficulty, cannibalization check)
- ✅ Checklist status (200+ items)
- 📝 Edit button (opens in VS Code or web editor)

**Your Options:**
1. ✅ **Approve** → Merges to main, publishes live, submits to GSC
2. ❌ **Reject** → Closes PR, archives draft
3. 🔄 **Request Changes** → Comments on PR, notifies you via email/Slack

---

## 💻 Review Panel Implementation

### Panel URL: `https://mdn.mktgdime.com/admin/content-review`

**Page Features:**

```typescript
// pages/admin/content-review.tsx

interface DraftArticle {
  id: string
  title: string
  slug: string
  prNumber: number
  branch: string
  seoScore: number
  keyword: string
  keywordVolume: number
  createdAt: string
  auditReport: AuditReport
  content: string
}

// Functions:
- listDraftArticles() // Fetches open PRs with 'draft' label
- getArticlePreview() // Renders markdown → HTML
- getSEOAudit() // Reads audit_report.json
- approveArticle() // Merges PR → main
- rejectArticle() // Closes PR
- requestChanges() // Comments on PR with feedback
```

**UI Design:**

```
┌─────────────────────────────────────────────────────────────┐
│  MDNetwork Admin - Content Review                          │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  📝 Draft Article: 5kW Solar Panel Price Raipur 2026       │
│  ─────────────────────────────────────────────────────────  │
│  📊 SEO Score: 87% (Excellent)                              │
│  🎯 Keyword: 5kw solar panel price (Vol: 8,100, KD: 18)    │
│  📅 Generated: 2026-05-31 08:15 AM                          │
│  🔗 PR #47: https://github.com/.../pull/47                  │
│                                                              │
│  ┌─── Article Preview ────────────────────────────────────┐│
│  │ [Rendered HTML of article with styling]                ││
│  │                                                          ││
│  └──────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌─── SEO Audit Report ───────────────────────────────────┐│
│  │ ✅ E-E-A-T: 85% (Good)                                  ││
│  │ ✅ Human-First: 90% (Excellent)                         ││
│  │ ✅ Google-First: 95% (Excellent)                        ││
│  │ ✅ Schema: 100% (Perfect)                               ││
│  │ ✅ AEO: 80% (Good)                                      ││
│  │ ✅ GEO: 75% (Good)                                      ││
│  │ ✅ AIO: 80% (Good)                                      ││
│  │ ✅ Local SEO: 100% (Perfect)                            ││
│  │                                                          ││
│  │ ⚠️ Notes:                                               ││
│  │ - Consider adding 2 more PAA questions                  ││
│  │ - Could add one more case study example                 ││
│  └──────────────────────────────────────────────────────────┘│
│                                                              │
│  [✅ Approve & Publish]  [🔄 Request Changes]  [❌ Reject]  │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Implementation Files

### File 1: GitHub Actions Workflow

**`.github/workflows/daily-content-generation.yml`**

```yaml
name: Daily Content Generation

on:
  schedule:
    - cron: '0 2 * * *'  # 8 AM IST = 2:30 AM UTC (adjust for your timezone)
  workflow_dispatch:  # Manual trigger

jobs:
  generate-article:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          npm install
          pip install anthropic google-generativeai pandas pyarrow
      
      - name: Select next keyword
        run: python scripts/select_next_keyword.py
      
      - name: Generate skeleton (Claude)
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: python scripts/generate_skeleton_claude.py
      
      - name: Write content (Gemini)
        env:
          GOOGLE_API_KEY: ${{ secrets.GOOGLE_API_KEY }}
        run: python scripts/write_content_gemini.py
      
      - name: Run SEO audit
        run: python scripts/audit_article.py
      
      - name: Create draft PR
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          DATE=$(date +%Y%m%d)
          BRANCH="draft/article-$DATE"
          
          git config user.name "AI Content Bot"
          git config user.email "bot@mktgdime.com"
          
          git checkout -b $BRANCH
          git add content/blog/*.md
          git add docs/audit_*.json
          git commit -m "Draft: Daily article generation $(date +%Y-%m-%d)"
          git push origin $BRANCH
          
          gh pr create \
            --title "Review: Daily Article $(date +%Y-%m-%d)" \
            --body "$(cat docs/audit_summary.md)" \
            --label "draft" \
            --label "needs-review"
      
      - name: Notify (optional)
        run: |
          # Send Slack/email notification
          echo "Draft article ready for review!"
```

---

### File 2: Keyword Selection Script

**`scripts/select_next_keyword.py`**

```python
#!/usr/bin/env python3
"""
Select the next highest-value keyword that hasn't been covered.
Checks for cannibalization against existing content.
"""
import pandas as pd
import json
from pathlib import Path

def select_next_keyword():
    # Load keyword opportunities
    seo_tools = pd.read_parquet('docs/seo_tools.parquet')
    
    # Load existing content inventory
    content_inv = pd.read_parquet('docs/content_inventory.parquet')
    covered_keywords = set(content_inv['primary_keyword'].tolist())
    
    # Filter to uncovered, high-volume, low-difficulty
    uncovered = seo_tools[
        (~seo_tools['keyword'].isin(covered_keywords)) &
        (seo_tools['volume'] > 500) &
        (seo_tools['difficulty'] < 35) &
        (seo_tools['status'] == 'Opportunity')
    ].sort_values('volume', ascending=False)
    
    if uncovered.empty:
        print("No keywords available!")
        return None
    
    # Select top keyword
    next_kw = uncovered.iloc[0]
    
    # Save selection
    output = {
        'keyword': next_kw['keyword'],
        'volume': int(next_kw['volume']),
        'difficulty': int(next_kw['difficulty']),
        'intent': next_kw['intent'],
        'cluster': next_kw.get('cluster', 'Unknown')
    }
    
    with open('docs/next_keyword.json', 'w') as f:
        json.dump(output, f, indent=2)
    
    print(f"Selected: {output['keyword']} (Vol: {output['volume']})")
    return output

if __name__ == '__main__':
    select_next_keyword()
```

---

### File 3: Claude Skeleton Generator

**`scripts/generate_skeleton_claude.py`**

```python
#!/usr/bin/env python3
"""
Uses Claude API to generate article skeleton from keyword.
"""
import os
import json
from anthropic import Anthropic

def generate_skeleton():
    # Load selected keyword
    with open('docs/next_keyword.json') as f:
        kw_data = json.load(f)
    
    # Load checklist
    with open('docs/SEO_AUDIT_MASTER_CHECKLIST.md') as f:
        checklist = f.read()
    
    # Claude API call
    client = Anthropic(api_key=os.environ['ANTHROPIC_API_KEY'])
    
    prompt = f"""
You are creating an SEO article skeleton for BizNexus (Raipur solar/insurance hub).

TARGET KEYWORD: {kw_data['keyword']}
VOLUME: {kw_data['volume']}
DIFFICULTY: {kw_data['difficulty']}
INTENT: {kw_data['intent']}
CLUSTER: {kw_data['cluster']}

REQUIREMENTS:
1. Follow SEO_AUDIT_MASTER_CHECKLIST.md (E-E-A-T, AEO, GEO, AIO)
2. Map secondary keywords to H2/H3 sections
3. Include 10-15 "People Also Ask" questions
4. Plan for schema: Article, Product, HowTo, FAQPage
5. Raipur-specific (CSPDCL, CREDA mentions)
6. Target: 2,500-4,000 words

OUTPUT FORMAT: Detailed skeleton with keyword mapping per section.

CHECKLIST REFERENCE:
{checklist[:2000]}... (see full checklist for all requirements)
"""
    
    response = client.messages.create(
        model="claude-sonnet-4-5",
        max_tokens=8000,
        messages=[{"role": "user", "content": prompt}]
    )
    
    skeleton = response.content[0].text
    
    # Save skeleton
    slug = kw_data['keyword'].replace(' ', '-')
    with open(f'docs/SKELETON_{slug}.md', 'w') as f:
        f.write(skeleton)
    
    print(f"Skeleton created: docs/SKELETON_{slug}.md")
    
    # Save metadata for next step
    with open('docs/generation_state.json', 'w') as f:
        json.dump({
            'keyword': kw_data,
            'skeleton_path': f'docs/SKELETON_{slug}.md',
            'slug': slug
        }, f, indent=2)
    
    return skeleton

if __name__ == '__main__':
    generate_skeleton()
```

---

### File 4: Gemini Content Writer

**`scripts/write_content_gemini.py`**

```python
#!/usr/bin/env python3
"""
Uses Gemini API to write full article content from Claude's skeleton.
"""
import os
import json
import google.generativeai as genai
from datetime import datetime

def write_content():
    # Load generation state
    with open('docs/generation_state.json') as f:
        state = json.load(f)
    
    # Load skeleton
    with open(state['skeleton_path']) as f:
        skeleton = f.read()
    
    # Load checklist
    with open('docs/SEO_AUDIT_MASTER_CHECKLIST.md') as f:
        checklist = f.read()
    
    # Configure Gemini
    genai.configure(api_key=os.environ['GOOGLE_API_KEY'])
    model = genai.GenerativeModel('gemini-2.0-flash-exp')
    
    prompt = f"""
You are Gemini, the content writer for BizNexus. Write the complete article.

SKELETON (from Claude):
{skeleton}

REQUIREMENTS:
1. Human-first content (conversational, Raipur-specific)
2. E-E-A-T signals (experience, expertise, authority, trust)
3. Inject 2026 Raipur data (CSPDCL rates, PM Surya Ghar subsidy)
4. Complete schema markup (Article, Product, HowTo, FAQPage)
5. 10-15 FAQ questions with concise answers
6. Internal links to related articles
7. External links to pmsuryaghar.gov.in, creda.cgstate.gov.in
8. Follow SEO checklist: AEO, GEO, AIO optimization

LOCAL CONTEXT:
- Mention: Shankar Nagar, VIP Road, Telibandha, Samta Colony
- Entities: CSPDCL, CREDA, PM Surya Ghar
- Add case study: "We installed X systems in [neighborhood]"
- Current year: 2026

OUTPUT: Complete markdown article with frontmatter (id, slug, title, meta, schema).
"""
    
    response = model.generate_content(prompt)
    article = response.text
    
    # Save article
    slug = state['slug']
    date = datetime.now().strftime('%Y-%m-%d')
    article_path = f'content/blog/{slug}.md'
    
    with open(article_path, 'w') as f:
        f.write(article)
    
    print(f"Article written: {article_path}")
    
    # Update state
    state['article_path'] = article_path
    state['generated_date'] = date
    with open('docs/generation_state.json', 'w') as f:
        json.dump(state, f, indent=2)
    
    return article

if __name__ == '__main__':
    write_content()
```

---

### File 5: SEO Audit Script

**`scripts/audit_article.py`**

```python
#!/usr/bin/env python3
"""
Automated SEO audit against SEO_AUDIT_MASTER_CHECKLIST.md
"""
import json
import re
from pathlib import Path

def audit_article():
    # Load article
    with open('docs/generation_state.json') as f:
        state = json.load(f)
    
    with open(state['article_path']) as f:
        article = f.read()
    
    # Audit checks
    audit = {
        'overall_score': 0,
        'checks': {}
    }
    
    # E-E-A-T checks
    audit['checks']['eeat'] = {
        'author_credentials': 'authorCredentials' in article,
        'local_context': 'Raipur' in article and 'CSPDCL' in article,
        'external_gov_links': 'pmsuryaghar.gov.in' in article or 'creda.cgstate.gov.in' in article,
        'score': 0
    }
    
    # Schema checks
    audit['checks']['schema'] = {
        'article_schema': '"@type": "BlogPosting"' in article or '"@type": "Article"' in article,
        'product_schema': '"@type": "Product"' in article,
        'howto_schema': '"@type": "HowTo"' in article,
        'faq_schema': '"@type": "FAQPage"' in article,
        'score': 0
    }
    
    # AEO checks
    faqs = len(re.findall(r'"@type": "Question"', article))
    audit['checks']['aeo'] = {
        'faq_count': faqs,
        'has_10_plus_faqs': faqs >= 10,
        'score': 0
    }
    
    # Keyword checks
    keyword = state['keyword']['keyword']
    audit['checks']['keywords'] = {
        'in_title': keyword.lower() in article[:500].lower(),
        'in_first_para': keyword.lower() in article[:1000].lower(),
        'score': 0
    }
    
    # Calculate scores
    for category in audit['checks'].values():
        passed = sum(1 for v in category.values() if v is True)
        total = sum(1 for v in category.values() if isinstance(v, bool))
        if total > 0:
            category['score'] = int((passed / total) * 100)
    
    # Overall score
    scores = [c['score'] for c in audit['checks'].values()]
    audit['overall_score'] = int(sum(scores) / len(scores))
    
    # Save audit
    with open('docs/audit_report.json', 'w') as f:
        json.dump(audit, f, indent=2)
    
    # Create summary
    summary = f"""# SEO Audit Summary

**Article:** {state['keyword']['keyword']}
**Overall Score:** {audit['overall_score']}%

## Scores by Category
- E-E-A-T: {audit['checks']['eeat']['score']}%
- Schema: {audit['checks']['schema']['score']}%
- AEO: {audit['checks']['aeo']['score']}%
- Keywords: {audit['checks']['keywords']['score']}%

## Notes
- FAQ Count: {audit['checks']['aeo']['faq_count']}
- Ready for review!
"""
    
    with open('docs/audit_summary.md', 'w') as f:
        f.write(summary)
    
    print(f"Audit complete: {audit['overall_score']}%")

if __name__ == '__main__':
    audit_article()
```

---

### File 6: Review Panel (Next.js Page)

**`pages/admin/content-review.tsx`**

```typescript
import { useState, useEffect } from 'react'
import { marked } from 'marked'

interface DraftArticle {
  prNumber: number
  title: string
  branch: string
  content: string
  auditScore: number
  keyword: string
  createdAt: string
}

export default function ContentReview() {
  const [drafts, setDrafts] = useState<DraftArticle[]>([])
  const [selectedDraft, setSelectedDraft] = useState<DraftArticle | null>(null)
  
  useEffect(() => {
    fetchDrafts()
  }, [])
  
  async function fetchDrafts() {
    // Fetch open PRs with 'draft' label via GitHub API
    const res = await fetch('/api/admin/drafts')
    const data = await res.json()
    setDrafts(data)
  }
  
  async function approveArticle(pr: number) {
    await fetch('/api/admin/approve', {
      method: 'POST',
      body: JSON.stringify({ prNumber: pr })
    })
    alert('Article approved and published!')
    fetchDrafts()
  }
  
  async function rejectArticle(pr: number) {
    await fetch('/api/admin/reject', {
      method: 'POST',
      body: JSON.stringify({ prNumber: pr })
    })
    alert('Article rejected')
    fetchDrafts()
  }
  
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Content Review Panel</h1>
      
      {drafts.length === 0 ? (
        <p>No drafts pending review.</p>
      ) : (
        <div className="grid gap-6">
          {drafts.map(draft => (
            <div key={draft.prNumber} className="border rounded-lg p-6 bg-white shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{draft.title}</h2>
                  <p className="text-gray-600">Keyword: {draft.keyword}</p>
                  <p className="text-sm text-gray-500">Generated: {draft.createdAt}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-blue-600">
                    {draft.auditScore}%
                  </div>
                  <div className="text-sm text-gray-600">SEO Score</div>
                </div>
              </div>
              
              <div className="mb-4">
                <button
                  onClick={() => setSelectedDraft(draft)}
                  className="text-blue-600 underline"
                >
                  Preview Article →
                </button>
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={() => approveArticle(draft.prNumber)}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  ✅ Approve & Publish
                </button>
                <button
                  onClick={() => rejectArticle(draft.prNumber)}
                  className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  ❌ Reject
                </button>
                <a
                  href={`https://github.com/yourorg/biznexus/pull/${draft.prNumber}`}
                  target="_blank"
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                >
                  🔗 View PR
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {selectedDraft && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-auto p-8">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">{selectedDraft.title}</h2>
              <button
                onClick={() => setSelectedDraft(null)}
                className="text-2xl"
              >
                ×
              </button>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(selectedDraft.content) }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
```

---

### File 7: API Routes

**`pages/api/admin/drafts.ts`**

```typescript
import { Octokit } from '@octokit/rest'

export default async function handler(req, res) {
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  
  // Fetch open PRs with 'draft' label
  const { data: prs } = await octokit.pulls.list({
    owner: 'yourorg',
    repo: 'biznexus',
    state: 'open',
    labels: 'draft'
  })
  
  const drafts = await Promise.all(prs.map(async (pr) => {
    // Fetch article content from branch
    const { data: files } = await octokit.repos.getContent({
      owner: 'yourorg',
      repo: 'biznexus',
      path: 'content/blog',
      ref: pr.head.ref
    })
    
    // Find new article (simplified)
    const articleFile = files.find(f => f.name.endsWith('.md'))
    const content = Buffer.from(articleFile.content, 'base64').toString()
    
    // Fetch audit report
    const auditData = await octokit.repos.getContent({
      owner: 'yourorg',
      repo: 'biznexus',
      path: 'docs/audit_report.json',
      ref: pr.head.ref
    })
    const audit = JSON.parse(Buffer.from(auditData.content, 'base64').toString())
    
    return {
      prNumber: pr.number,
      title: pr.title,
      branch: pr.head.ref,
      content,
      auditScore: audit.overall_score,
      keyword: audit.keyword,
      createdAt: pr.created_at
    }
  }))
  
  res.json(drafts)
}
```

**`pages/api/admin/approve.ts`**

```typescript
import { Octokit } from '@octokit/rest'

export default async function handler(req, res) {
  const { prNumber } = JSON.parse(req.body)
  
  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
  
  // Merge PR
  await octokit.pulls.merge({
    owner: 'yourorg',
    repo: 'biznexus',
    pull_number: prNumber,
    merge_method: 'squash'
  })
  
  // Trigger deployment (automatic via Vercel/Netlify)
  
  // TODO: Submit to GSC
  // await submitToGSC(articleUrl)
  
  res.json({ success: true })
}
```

---

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
cd ~/Projects/biznexus

# Python packages
pip install anthropic google-generativeai pandas pyarrow

# Node packages
npm install @octokit/rest marked
```

### 2. Add GitHub Secrets

Go to repo Settings → Secrets and add:
- `ANTHROPIC_API_KEY`
- `GOOGLE_API_KEY`
- `GITHUB_TOKEN` (automatic)

### 3. Enable GitHub Actions

```bash
mkdir -p .github/workflows
# Copy workflow file (above) to .github/workflows/daily-content-generation.yml
git add .github/workflows/
git commit -m "Add automated content generation workflow"
git push
```

### 4. Create Review Panel

```bash
mkdir -p pages/admin pages/api/admin
# Copy panel files (above)
git add pages/
git commit -m "Add content review panel"
git push
```

### 5. Test Manually

```bash
# Test the full pipeline
python scripts/select_next_keyword.py
python scripts/generate_skeleton_claude.py
python scripts/write_content_gemini.py
python scripts/audit_article.py

# Check output
ls content/blog/*.md
cat docs/audit_report.json
```

---

## 🎯 Daily Routine (Your Experience)

**8:00 AM:** GitHub Actions triggers automatically

**10:00 AM:** You receive notification:
> "Draft article ready for review: '5kW Solar Panel Price Raipur 2026' (SEO Score: 87%)"

**10:15 AM:** You open `https://mdn.mktgdime.com/admin/content-review`

**10:20 AM:** You review article, check SEO score, preview

**10:25 AM:** You click "✅ Approve & Publish"

**10:26 AM:** Article goes live, auto-submits to GSC

**Done!** 25 minutes of your time for a full SEO-optimized article.

---

## 💰 Cost Estimate

**Daily Cost:**
- Claude API (skeleton): ~10K tokens × $3/1M = $0.03
- Gemini API (content): ~50K tokens × $0.15/1M = $0.0075
- GitHub Actions: Free (2000 minutes/month)
- Total: **~$0.04 per article** ($1.20/month for daily)

---

## 🔮 Future Enhancements

1. **Slack notifications** when draft is ready
2. **A/B testing** headlines via panel
3. **Auto-social posting** after publish
4. **Performance tracking** (rankings, traffic)
5. **Feedback loop** - low-performers get rewritten

---

**STATUS:** 📋 DESIGN COMPLETE  
**NEXT:** Implement scripts + panel (want me to start?)
