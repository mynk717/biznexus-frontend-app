# 🎯 SEO Audit Master Checklist (BizNexus)

**Version:** 1.0  
**Last Updated:** 2026-05-31  
**Purpose:** Complete audit checklist for every article - AEO, GEO, AIO, E-E-A-T compliant

---

## 📋 How to Use This Document

**BEFORE writing:** Review Pre-Publishing Checklist  
**DURING writing:** Cross-check Content Quality checklist  
**AFTER writing:** Complete Full SEO Audit  
**BEFORE publishing:** Final Go-Live checklist  
**AFTER publishing:** Post-Publish monitoring

✅ = Completed | ⏳ = In Progress | ❌ = Not Done | 🔍 = Needs Review

---

## 🔍 ARTICLE INFORMATION

| Field | Value |
|-------|-------|
| **Article Title** | |
| **Target Slug** | |
| **Primary Keyword** | |
| **Keyword Volume** | |
| **Keyword Difficulty** | |
| **Target Word Count** | |
| **Content Type** | Pillar / Cluster / Service / Comparison |
| **Author** | |
| **Date Created** | |
| **Date Published** | |
| **Last Audit Date** | |

---

## 1️⃣ PRE-PUBLISHING CHECKLIST

### Keyword Research & Strategy

- [ ] **Primary keyword** identified from KEYWORD_CLUSTER_MAP.csv
- [ ] **Search intent** confirmed (Informational/Transactional/Commercial/Navigational)
- [ ] **Keyword difficulty** assessed (Target KD <30 for new domains)
- [ ] **Competitor analysis** done (Top 3 ranking pages reviewed)
- [ ] **Secondary keywords** (5-10) mapped to H2/H3 sections
- [ ] **Long-tail keywords** (10-15) identified for natural inclusion
- [ ] **LSI keywords** extracted (use Google "Searches related to")
- [ ] **"People Also Ask"** questions captured (10-15)
- [ ] **Related searches** from SERP bottom captured
- [ ] **Featured snippet** opportunity identified

**Notes:**
```
Primary: [keyword] (Vol: X, KD: Y)
Intent: [type]
Competitors: [URLs]
```

---

### Content Skeleton/Outline

- [ ] **H1** contains primary keyword naturally
- [ ] **H2s** (4-8) map to secondary keywords
- [ ] **H3s** capture long-tail variations
- [ ] **Keyword-to-section mapping** documented
- [ ] **Internal linking plan** created (3-5 related articles)
- [ ] **External authority sources** identified (2-3 .gov/.edu/.org)
- [ ] **Content flow** logical (Inverted Pyramid: Answer → Details → Depth)
- [ ] **Target word count** justified (match or exceed top 3 competitors)

**Skeleton approved by:** [ ] Claude | [ ] Gemini | [ ] User

---

## 2️⃣ E-E-A-T COMPLIANCE CHECKLIST

### Experience (First E)

- [ ] **Personal/brand experience** mentioned in intro
- [ ] **Case studies/examples** from real projects (if applicable)
- [ ] **Specific numbers/data** from actual work (installs, clients, metrics)
- [ ] **Local context** emphasized (Raipur-specific details)
- [ ] **Author bio** present (if service/product page)
- [ ] **Photos/screenshots** of actual work (not stock images)

**Experience signals added:**
```
- [Detail what specific experience signals are in the article]
```

---

### Expertise (Second E)

- [ ] **Author credentials** mentioned (certifications, years of experience)
- [ ] **Technical depth** appropriate for topic (not surface-level)
- [ ] **Industry terminology** used correctly
- [ ] **Process explanations** detailed and accurate
- [ ] **Citations** to authoritative sources (pmsuryaghar.gov.in, creda.cgstate.gov.in)
- [ ] **Data/statistics** from credible sources (with links)
- [ ] **Comparisons** backed by real specs/tests

**Expertise signals added:**
```
- [List expertise indicators]
```

---

### Authoritativeness (A)

- [ ] **Brand name** (BizNexus/MDNetwork) mentioned naturally
- [ ] **Service area** clearly stated (Raipur, Chhattisgarh)
- [ ] **Contact information** accessible (CTA to contact page)
- [ ] **Business credentials** mentioned (GST, licenses if applicable)
- [ ] **Portfolio/past work** linked (if applicable)
- [ ] **Industry affiliations** mentioned (if any)
- [ ] **Press mentions/awards** included (if any)

---

### Trustworthiness (T)

- [ ] **Fact-checked** all claims (especially prices, specs, subsidies)
- [ ] **Sources cited** with hyperlinks
- [ ] **Dates mentioned** (2026 pricing, current subsidy rates)
- [ ] **Contact details** accessible
- [ ] **Privacy policy** linked (footer)
- [ ] **HTTPS** enabled (site-wide)
- [ ] **No misleading claims** (verified all "guaranteed" statements)
- [ ] **Transparent pricing** (ranges provided, not hidden)
- [ ] **Disclaimers** added where needed

---

## 3️⃣ AGENTIC & ENTITY SEO (GEO/AEO)

### Entity Identity & Authority

- [ ] **Brand `@id`** implemented in JSON-LD (e.g., `https://mdn.mktgdime.com/#brand`)
- [ ] **Knowledge Graph ID (KGMID)** linked in schema if available
  - MDNetwork / Marketing Dime: `/g/11y7_6_m_m`
- [ ] **Verified Local Grounding** (Google SERP IDs):
  - Marketing Dime Place ID: `ChIJhWY8NnI7W20RZjfPOVIl7FQ` (CID: `6119307028777088870`)
  - MKTDM Media Place ID: `ChIJtWfWnLPdKDoRPQn9LqhSgHE` (CID: `8178627805601139005`)
- [ ] **SameAs properties** linking to verified social profiles and GBP
- [ ] **Factual density** optimized (high ratio of unique facts per 100 words)
- [ ] **Entity-first writing**: Define entities early and clearly (Who, What, Where)
- [ ] **Brand Hierarchy**: MDNetwork (MDN) explicitly linked as a network of Marketing Dime (MKTDM)

### Agentic Context Parsing & GEO (Generative Engine Optimization)

- [ ] **Invisible HTML comments** added for LLM context (e.g., `<!-- context: target_audience=Raipur_Solar_Buyers -->`)
- [ ] **Answer-First formatting**: Direct answers to key questions in the first 2 sentences of a section (Critical since June 7, 2026 FAQ deprecation)
- [ ] **Citable chunks**: Information organized into modular, self-contained paragraphs for easy RAG retrieval
- [ ] **`llms.txt`** present and updated at domain root
- [ ] **Invisible metadata** for agentic tools (brand identity, service scope)
- [ ] **Conversational Flow**: Content optimized for follow-up questions in natural language (Voice/Chat)
- [ ] **Visual Search Optimization (Google Lens)**:
  - [ ] High-contrast, clear product/entity images
  - [ ] Descriptive Alt-text focused on "Entity Recognition" (e.g., "MKTDM Office Raipur Entrance")
  - [ ] Schema `image` property correctly mapped to high-res versions

**Agentic Signals Added:**
```
- [List specific HTML comments, @id links, or Visual Search optimizations]
```

---

## 4️⃣ HUMAN-FIRST CONTENT CHECKLIST

### Readability & User Experience

- [ ] **Reading level** appropriate (Grade 8-10 for general audience)
- [ ] **Sentences** concise (avg 15-20 words)
- [ ] **Paragraphs** short (2-4 sentences max)
- [ ] **Subheadings** every 200-300 words
- [ ] **Bullet points/lists** used for scannability
- [ ] **Bold/italics** highlight key points (not overused)
- [ ] **White space** adequate (not text-heavy blocks)
- [ ] **Transition words** connect ideas smoothly

**Readability Score:**
- Flesch Reading Ease: [ ] 60-70+ (target)
- Hemingway Grade: [ ] 8-10 (target)

---

### Engagement Elements

- [ ] **Hook** in first 50 words (answer primary query immediately)
- [ ] **Conversational tone** (you/your, questions, examples)
- [ ] **Storytelling** where appropriate (real scenarios)
- [ ] **Analogies/metaphors** for complex concepts
- [ ] **Examples** concrete and relatable
- [ ] **Questions** used to maintain engagement
- [ ] **Action-oriented** language (get, discover, learn, compare)
- [ ] **CTA** clear and natural (not salesy)

---

### Visual Content

- [ ] **Featured image** optimized (WebP, <100KB, relevant)
- [ ] **Alt text** descriptive with keyword
- [ ] **Supporting images** (3-5 throughout article)
- [ ] **Infographics/charts** for data (if applicable)
- [ ] **Screenshots** if tutorial/guide
- [ ] **Comparison tables** for product/service comparisons
- [ ] **Image file names** descriptive (not IMG_1234.jpg)
- [ ] **Captions** added where helpful

---

### Accessibility

- [ ] **Color contrast** sufficient (WCAG AA compliant)
- [ ] **Alt text** on ALL images
- [ ] **Headings** hierarchical (H1 → H2 → H3, no skipping)
- [ ] **Link text** descriptive (not "click here")
- [ ] **Font size** readable (16px+ for body text)
- [ ] **Mobile-responsive** design (test on mobile)

---

## 5️⃣ GOOGLE-FIRST STRUCTURE CHECKLIST

### On-Page SEO Fundamentals

**Title Tag (50-60 characters):**
- [ ] **Primary keyword** in first 5 words
- [ ] **Compelling** (includes number, year, or benefit)
- [ ] **Under 60 characters** (won't truncate in SERP)
- [ ] **Unique** across site

**Title:** `[Write final title here]`

**Meta Description (150-160 characters):**
- [ ] **Primary keyword** included naturally
- [ ] **Call to action** or benefit statement
- [ ] **Under 160 characters**
- [ ] **Unique** across site

**Description:** `[Write final description here]`

---

### URL Structure

- [ ] **Slug** contains primary keyword
- [ ] **Lowercase** only
- [ ] **Hyphens** separate words (not underscores)
- [ ] **Short** (3-5 words ideal)
- [ ] **No stop words** removed (if, and, the) unless critical
- [ ] **Descriptive** of content

**URL:** `https://mdn.mktgdime.com/blog/[slug]`

---

### Header Optimization

**H1 Tag:**
- [ ] **Only ONE H1** on page
- [ ] **Primary keyword** included naturally
- [ ] **Compelling** and descriptive
- [ ] **50-70 characters** ideal

**H1:** `[Write final H1 here]`

**H2 Tags (4-8 recommended):**
- [ ] **Secondary keywords** in 60%+ of H2s
- [ ] **Logical flow** (follow content structure)
- [ ] **Questions** used where appropriate
- [ ] **Descriptive** (user knows what section covers)

**H2s:**
1. `[H2 #1]`
2. `[H2 #2]`
3. `[H2 #3]`
4. `[H2 #4]`

**H3 Tags:**
- [ ] **Long-tail keywords** captured
- [ ] **Support H2** parent sections
- [ ] **Specific** subtopics

---

### Keyword Optimization

- [ ] **Primary keyword** in:
  - [ ] Title tag
  - [ ] H1
  - [ ] First 100 words
  - [ ] At least one H2
  - [ ] Meta description
  - [ ] URL slug
  - [ ] Image alt text (at least one)
  - [ ] Naturally throughout (1-2% density)

- [ ] **Keyword stuffing** avoided (reads naturally)
- [ ] **Synonyms/variations** used throughout
- [ ] **LSI keywords** included (10-15 minimum)
- [ ] **Related terms** from "People Also Ask" covered

**Keyword Density Check:**
- Primary keyword: [ ] 1-2%
- Secondary keywords: [ ] 0.5-1% each

---

### Content Depth & Quality

- [ ] **Word count** meets target (typically 2,500+ for pillar)
- [ ] **Comprehensive** (covers topic thoroughly)
- [ ] **Unique insights** (not just rehashed content)
- [ ] **Updated information** (2026 data, current prices)
- [ ] **Original research/data** if possible
- [ ] **No duplicate content** (checked with Copyscape/SiteLiner)
- [ ] **Grammar/spelling** perfect (Grammarly checked)
- [ ] **Plagiarism-free** (100% original)

**Uniqueness Score:** [ ] 95%+ (target)

---

### Internal Linking Strategy

- [ ] **3-5 internal links** minimum
- [ ] **Contextual links** (within content, not footer)
- [ ] **Descriptive anchor text** (not "click here")
- [ ] **Related content** linked (pillar ↔ cluster linking)
- [ ] **Links to:**
  - [ ] Related service pages
  - [ ] Other blog posts in silo
  - [ ] Pillar content (if cluster article)
  - [ ] Contact/CTA page

**Internal Links Added:**
1. `[Anchor text → URL]`
2. `[Anchor text → URL]`
3. `[Anchor text → URL]`

---

### External Linking (Authority Building)

- [ ] **2-3 authoritative outbound links**
- [ ] **Government sources** (.gov)
- [ ] **Educational sources** (.edu) if relevant
- [ ] **Industry authorities** (recognized brands)
- [ ] **Statistics sources** (official data)
- [ ] **All open in new tab** (`target="_blank"`)
- [ ] **No broken links** (checked)
- [ ] **Relevant** to content (not forced)

**External Links Added:**
1. `[Anchor text → URL → Authority]`
2. `[Anchor text → URL → Authority]`

---

### Mobile Optimization

- [ ] **Responsive design** (test on mobile)
- [ ] **Text readable** (16px+ font size)
- [ ] **Buttons/CTAs** easily tappable (44x44px min)
- [ ] **Images** scale properly
- [ ] **No horizontal scrolling**
- [ ] **Fast loading** on mobile (<3s)

**Mobile Test:** [ ] Pass (use Google Mobile-Friendly Test)

---

## 6️⃣ SCHEMA MARKUP CHECKLIST

### Required Schema Types (Based on Content)

**Article Schema (ALWAYS include):**
- [ ] `@type: "BlogPosting"` or `"Article"`
- [ ] `headline` (H1)
- [ ] `author` (name + organization)
- [ ] `datePublished`
- [ ] `dateModified`
- [ ] `image` (featured image URL)
- [ ] `publisher` (organization name + logo)
- [ ] `description` (meta description)

---

**FAQPage Schema (if Q&As present):**
- [ ] **10-15 questions** from "People Also Ask"
- [ ] **Concise answers** (2-3 sentences, 250 chars ideal)
- [ ] **Questions as H2s or H3s** in content
- [ ] **Schema matches content** (same wording)

**Q&As to include:**
1. `[Question]`
2. `[Question]`
3. `[Question]`

---

**Product Schema (if reviewing/comparing products):**
- [ ] `name` (product name)
- [ ] `description`
- [ ] `brand`
- [ ] `offers` (price, currency, availability)
- [ ] `aggregateRating` (if applicable)
- [ ] `review` (if applicable)
- [ ] `image`

---

**HowTo Schema (if step-by-step guide):**
- [ ] `name` (guide title)
- [ ] `description`
- [ ] `step` (each major step)
  - `name` (step title)
  - `text` (step description)
  - `image` (if helpful)
- [ ] `totalTime` (if applicable)
- [ ] `supply` (materials needed)
- [ ] `tool` (tools needed)

---

**LocalBusiness Schema (for service pages):**
- [ ] `name` (business name)
- [ ] `address` (Raipur location)
- [ ] `telephone`
- [ ] `priceRange`
- [ ] `openingHours`
- [ ] `geo` (coordinates)
- [ ] `areaServed` (Raipur, Chhattisgarh)

---

**Schema Validation:**
- [ ] **Tested** in Google Rich Results Test
- [ ] **No errors** (warnings OK)
- [ ] **Preview correct** in test tool

**Schema Validation URL:** `[Rich Results Test URL]`

---

## 7️⃣ AEO (Answer Engine Optimization) CHECKLIST

### Optimizing for Direct Answers (Google, Bing, Voice Search)

**Featured Snippet Optimization:**
- [ ] **Direct answer** in first paragraph (40-60 words)
- [ ] **Answer in format:**
  - [ ] Paragraph (definition)
  - [ ] List (steps, items, reasons)
  - [ ] Table (comparison, data)
- [ ] **Question as H2** (e.g., "What is [topic]?")
- [ ] **Concise** (under 300 characters for snippet)

**Example Snippet-Ready Answer:**
```
[Write your snippet-optimized answer here]
```

---

**"People Also Ask" Coverage:**
- [ ] **10-15 PAA questions** captured from SERP
- [ ] **Each answered** in dedicated H2 or H3
- [ ] **Answers concise** (2-3 sentences, 40-60 words)
- [ ] **Questions as headers** (exact wording from PAA)

**PAA Questions Covered:**
1. [ ] `[Question]` → Section: `[H2/H3]`
2. [ ] `[Question]` → Section: `[H2/H3]`
3. [ ] `[Question]` → Section: `[H2/H3]`

---

**Voice Search Optimization:**
- [ ] **Conversational language** (how people speak, not write)
- [ ] **Question-based headers** (Who, What, Where, When, Why, How)
- [ ] **Local intent** optimized (near me, in Raipur)
- [ ] **Long-tail queries** covered (natural phrases)
- [ ] **Direct answers** to questions

---

**Position Zero Strategy:**
- [ ] **Comparison tables** for vs. queries
- [ ] **Step-by-step lists** for how-to queries
- [ ] **Definition paragraphs** for what-is queries
- [ ] **Data tables** for stat queries

---

## 8️⃣ GEO (Generative Engine Optimization) CHECKLIST

### Optimizing for AI Search Engines (ChatGPT, Perplexity, Claude, Gemini)

**Structured Data for LLMs:**
- [ ] **Clear sections** with descriptive headers
- [ ] **Data in tables** (easy for LLMs to parse)
- [ ] **Lists** for features, benefits, steps
- [ ] **Key facts** highlighted (bold/tables)
- [ ] **Definitions** provided for technical terms
- [ ] **Context-rich** (standalone sections)

---

**Citation-Worthy Content:**
- [ ] **Original data/research** (LLMs cite unique sources)
- [ ] **Expert quotes** (if available)
- [ ] **Statistics** with sources
- [ ] **Comprehensive** (LLMs prefer thorough sources)
- [ ] **Up-to-date** (2026 data, recent info)
- [ ] **Authoritative tone** (confident, expert)

---

**LLM-Friendly Formatting:**
- [ ] **Self-contained sections** (each H2 can stand alone)
- [ ] **Clear attribution** (sources/brands mentioned)
- [ ] **Structured answers** (Q&A format for complex topics)
- [ ] **Technical accuracy** (LLMs check facts)
- [ ] **Comparison matrices** (side-by-side data)

---

**Semantic Richness:**
- [ ] **Entities** clearly defined (brands, places, products)
- [ ] **Relationships** explicit (X vs Y, X is part of Y)
- [ ] **Context** provided (not assuming prior knowledge)
- [ ] **Synonyms** used (LLMs understand variations)

---

## 9️⃣ AIO (AI Overviews) OPTIMIZATION CHECKLIST

### Optimizing for Google AI Overviews (SGE)

**AI Overview Triggers:**
- [ ] **Informational queries** prioritized (how, what, why)
- [ ] **Complex topics** broken down simply
- [ ] **Multiple perspectives** included (pros/cons, comparisons)
- [ ] **Actionable insights** provided (not just facts)

---

**Content Formatting for AI Overviews:**
- [ ] **Quick answer** first (AI pulls this)
- [ ] **Elaboration** second (details, context)
- [ ] **Examples** third (real-world applications)
- [ ] **Summary/conclusion** at end

---

**AI Overview Elements:**
- [ ] **Stats/numbers** prominently featured
- [ ] **Expert opinion** included
- [ ] **Current information** (2026 data)
- [ ] **Actionable steps** provided
- [ ] **Visual content** supporting text

---

**AI Overview Optimization:**
- [ ] **Answer intent** directly (don't make AI search)
- [ ] **Comprehensive** (cover topic thoroughly)
- [ ] **Trustworthy sources** cited
- [ ] **Unique angle** (not just repeating others)

---

## 🔟 TECHNICAL SEO CHECKLIST

### Page Speed & Performance

- [ ] **Page load time** <3 seconds (desktop)
- [ ] **Page load time** <4 seconds (mobile)
- [ ] **Core Web Vitals** passing:
  - [ ] LCP (Largest Contentful Paint) <2.5s
  - [ ] FID (First Input Delay) <100ms
  - [ ] CLS (Cumulative Layout Shift) <0.1
- [ ] **Images optimized** (WebP format, compressed)
- [ ] **Lazy loading** enabled for images
- [ ] **Minified CSS/JS**
- [ ] **Browser caching** enabled

**PageSpeed Insights Score:**
- Desktop: [ ] 90+
- Mobile: [ ] 80+

**Test URL:** `[PageSpeed Insights URL]`

---

### Indexability & Crawlability

- [ ] **Robots.txt** allows crawling
- [ ] **No noindex** tag (unless intentional)
- [ ] **Canonical tag** correct (self-referencing)
- [ ] **XML sitemap** updated (auto-generates)
- [ ] **Internal links** point to this page (3+ minimum)
- [ ] **No broken links** on page
- [ ] **HTTPS** (not HTTP)
- [ ] **Redirect chains** avoided

---

### Structured Data Testing

- [ ] **Schema markup** validated (Rich Results Test)
- [ ] **No errors** in structured data
- [ ] **Preview** looks correct
- [ ] **All required fields** present

---

## 1️⃣1️⃣ LOCAL SEO CHECKLIST (Raipur-Specific)

### Local Optimization

- [ ] **City name** (Raipur) in:
  - [ ] Title tag
  - [ ] H1
  - [ ] First paragraph
  - [ ] Meta description
  - [ ] URL (if appropriate)
  - [ ] Throughout content (naturally)

- [ ] **State** (Chhattisgarh) mentioned
- [ ] **Local landmarks** referenced (if relevant)
- [ ] **Local entities** mentioned:
  - [ ] CSPDCL (Chhattisgarh State Power Distribution Company)
  - [ ] CREDA (Chhattisgarh Renewable Energy Development Agency)
  - [ ] Local government offices
- [ ] **Area-specific details** (Raipur climate, solar potential, etc.)
- [ ] **Local phone numbers/addresses** if service page

---

### Google Business Profile Integration

- [ ] **NAP** (Name, Address, Phone) consistent with GBP
- [ ] **Service area** clearly defined
- [ ] **Local schema** added (if service page)

---

## 1️⃣2️⃣ CONVERSION OPTIMIZATION CHECKLIST

### CTA (Call-to-Action) Placement

- [ ] **Primary CTA** in first screen (above fold)
- [ ] **CTA placement:**
  - [ ] After introduction
  - [ ] Middle of content
  - [ ] End of content
  - [ ] Sidebar (if applicable)
- [ ] **CTA text** action-oriented:
  - ✅ "Get Free Solar Quote"
  - ✅ "Calculate Your Savings"
  - ❌ "Click Here" (too generic)
- [ ] **CTA stands out** (color contrast, size)
- [ ] **Multiple CTAs** for long content (every 800-1000 words)

**Primary CTA:** `[CTA text]` → `[Linked page]`

---

### Trust Signals

- [ ] **Social proof** (testimonials, reviews)
- [ ] **Credentials** displayed
- [ ] **Guarantees/warranties** mentioned
- [ ] **Contact info** accessible
- [ ] **Portfolio/case studies** linked

---

### User Journey

- [ ] **Next steps** clear (what to do after reading)
- [ ] **Related articles** linked (keep user on site)
- [ ] **Exit-intent** considered (valuable content at end)
- [ ] **Engagement** encouraged (comments, questions)

---

## 1️⃣3️⃣ CONTENT FRESHNESS CHECKLIST

### Update Strategy

- [ ] **Publish date** displayed
- [ ] **Last updated date** shown
- [ ] **Evergreen content** where possible
- [ ] **Time-sensitive info** flagged (prices, dates, policies)
- [ ] **Update schedule** planned (quarterly review minimum)

**Next Update Due:** `[Date]`

---

### Content Maintenance

- [ ] **Broken links** checked (use broken link checker)
- [ ] **Outdated info** flagged for update
- [ ] **Competitor content** reviewed (are they ahead?)
- [ ] **Search intent** still matches (has SERP changed?)

---

## 1️⃣4️⃣ FINAL PRE-PUBLISH CHECKLIST

### Content Review

- [ ] **Proofread** (Grammarly + manual)
- [ ] **Fact-checked** all claims
- [ ] **Links tested** (all working)
- [ ] **Images display** correctly
- [ ] **Mobile preview** looks good
- [ ] **Desktop preview** looks good
- [ ] **Schema preview** correct

---

### SEO Final Check

- [ ] **Title tag** optimized
- [ ] **Meta description** compelling
- [ ] **URL slug** correct
- [ ] **H1** only one, keyword-rich
- [ ] **H2-H6** hierarchical
- [ ] **Alt text** on all images
- [ ] **Internal links** 3-5 added
- [ ] **External links** 2-3 authority sources
- [ ] **Keyword density** natural (1-2%)

---

### Technical Final Check

- [ ] **Canonical tag** correct
- [ ] **OG tags** (Open Graph for social sharing)
  - [ ] og:title
  - [ ] og:description
  - [ ] og:image
  - [ ] og:url
- [ ] **Twitter Card** tags
- [ ] **Schema markup** validated
- [ ] **No console errors** (check browser console)
- [ ] **Page loads** <3 seconds

---

### Approval

- [ ] **Content approved by:** [ ] Claude | [ ] Gemini | [ ] User
- [ ] **SEO approved by:** [ ] User
- [ ] **Ready to publish:** [ ] YES

**Published by:** `[Name]`  
**Publication Date:** `[YYYY-MM-DD]`  
**Publication URL:** `[URL]`

---

## 1️⃣5️⃣ POST-PUBLISH CHECKLIST

### Immediate Actions (Day 1)

- [ ] **Submit to GSC** (Google Search Console - Request Indexing)
- [ ] **Check indexing** (search `site:yoururl.com/slug`)
- [ ] **Share on social** (if applicable)
- [ ] **Add to sitemap** (should auto-add, verify)
- [ ] **Update internal links** from related articles
- [ ] **Monitor errors** in GSC (coverage issues)

**GSC Submission Date:** `[Date]`  
**Indexed:** [ ] YES (check after 24-48 hours)

---

### Week 1 Monitoring

- [ ] **Impressions** in GSC (any showing up?)
- [ ] **Clicks** in GSC
- [ ] **Average position** noted
- [ ] **CTR** baseline established
- [ ] **Core Web Vitals** passing (check GSC)
- [ ] **Mobile usability** no issues

**Week 1 Stats:**
- Impressions: `[Number]`
- Clicks: `[Number]`
- Avg Position: `[Number]`
- CTR: `[%]`

---

### Month 1 Monitoring

- [ ] **Rankings** checked for primary keyword (use rank tracker)
- [ ] **Traffic** from article (GA4)
- [ ] **Bounce rate** acceptable (<70%)
- [ ] **Time on page** good (3+ minutes for long-form)
- [ ] **Conversions** tracked (if applicable)
- [ ] **Backlinks** any earned? (check GSC)

**Month 1 Stats:**
- Primary Keyword Rank: `[Position]`
- Organic Sessions: `[Number]`
- Avg Time on Page: `[Minutes]`
- Bounce Rate: `[%]`

---

### Quarterly Review (Every 3 Months)

- [ ] **Content still accurate?** (prices, dates, facts)
- [ ] **Competitors** still behind? (check SERP)
- [ ] **New PAA questions** appeared? (add them)
- [ ] **Rankings** maintained/improved?
- [ ] **Internal links** from new articles added?
- [ ] **Update date** refreshed

**Last Quarterly Review:** `[Date]`  
**Next Review Due:** `[Date]`

---

## 📊 PERFORMANCE TRACKING

### KPIs to Monitor

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **Keyword Rank (Primary)** | Top 10 | | |
| **Keyword Rank (Secondary)** | Top 20 | | |
| **Monthly Impressions** | 1,000+ | | |
| **Monthly Clicks** | 50+ | | |
| **CTR** | 5%+ | | |
| **Avg Position** | <10 | | |
| **Organic Traffic** | 100+/month | | |
| **Time on Page** | 3+ min | | |
| **Bounce Rate** | <70% | | |
| **Conversions** | 5+/month | | |

---

## 🔄 CONTINUOUS IMPROVEMENT LOG

### Updates Made

| Date | Change | Reason | Result |
|------|--------|--------|--------|
| 2026-05-31 | Initial publish | New pillar content | TBD |
| | | | |
| | | | |

---

## 📝 NOTES & REMINDERS

### Important Points for This Article

```
[Add any article-specific notes, special considerations, or reminders here]

Example:
- Check PM Surya Ghar subsidy rates every quarter (policy changes)
- Update Raipur solar dealer pricing seasonally
- Monitor CREDA website for Chhattisgarh-specific incentives
```

---

## 🎯 CHECKLIST SCORING

**Total Items:** ~200+  
**Completed:** [ ] / [ ]  
**Completion Rate:** [ ]%

**Audit Status:**
- [ ] 🟢 PASS (90%+ complete)
- [ ] 🟡 NEEDS WORK (70-89%)
- [ ] 🔴 NOT READY (<70%)

---

## ✅ FINAL SIGN-OFF

- [ ] **All critical items** completed (E-E-A-T, Schema, Core SEO)
- [ ] **Content human-first** (readable, engaging, helpful)
- [ ] **Structure Google-first** (optimized for ranking)
- [ ] **AEO/GEO/AIO** considered (future-proof)
- [ ] **Ready for publication:** [ ] YES

**Audited by:** `[Name]`  
**Audit Date:** `[YYYY-MM-DD]`  
**Approved by:** `[Name]`  
**Approval Date:** `[YYYY-MM-DD]`

---

**End of Checklist**

_This is a living document. Update as Google algorithms, best practices, and project requirements evolve._
