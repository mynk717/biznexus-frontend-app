# Gemini & Claude Collaboration Master File (MDNetwork)

## 🤝 The Team Workflow
This project is a high-authority Raipur service hub (Solar, Insurance, Real Estate). We work in "Chunks" to ensure unbreakable SEO and semantic depth.

*   **Claude (Technical & Structure Lead):** 
    *   Technical analysis of keyword clusters and silos.
    *   Designing content skeletons/outlines for new articles.
    *   Proofreading and auditing Gemini's output for semantic accuracy.
    *   Managing the `KEYWORD_INVENTORY.json` status.
*   **Gemini (Content & Implementation Lead):**
    *   Writing "Human-First" high-authority content based on Claude's skeletons.
    *   Technical implementation (React/Next.js code, Markdown system, Schema injection).
    *   Running the automated SEO scripts (GSC/GA4 API integration).
*   **User (Strategic Lead):** Provides SEMrush data, AI-generated images, and final approvals.

## 🏗 Project Architecture (Context for Claude)
*   **Frontend:** Next.js 16 (Turbopack) using Tailwind CSS.
*   **Content System:** Local Markdown-based system in `/content/blog/`. 
*   **Sitemap:** Fully dynamic (auto-updates when a new `.md` is added).
*   **SEO Tools:** Python scripts in `/docs/seo_tools/` for real-time GSC/GA4 reporting. 
*   **Data Optimization:** Uses **Parquet (`.parquet`)** for token-efficient AI processing of keyword inventories.
*   **Strategy Map:** `docs/seo_tools.parquet` and `KEYWORD_INVENTORY.json` define the semantic silos.
*   **Raw Data:** SEMrush exports are stored in `docs/raw_data/`.

## 📝 Current Task: "3-Kilowatt Solar Price Guide"
1.  **Claude:** Analyze `docs/seo_tools/KEYWORD_INVENTORY.json` and create a deep technical structure/skeleton for the "3-Kilowatt Solar Price in Raipur" guide.
2.  **Gemini:** Once Claude provides the skeleton, I will write the full Markdown content, inject Product & FAQ Schema, and deploy it.

## ✅ SEO Audit Requirements (MANDATORY for Every Article)

**Before ANY article work, MUST cross-check against:**
- `docs/SEO_AUDIT_MASTER_CHECKLIST.md` ✅

**This checklist covers:**
1. **E-E-A-T Compliance** (Experience, Expertise, Authoritativeness, Trustworthiness)
2. **Human-First Content** (Readability, Engagement, Accessibility)
3. **Google-First Structure** (On-page SEO, Headers, Keywords, Schema)
4. **AEO** (Answer Engine Optimization - Featured Snippets, Voice Search)
5. **GEO** (Generative Engine Optimization - ChatGPT, Claude, Gemini citations)
6. **AIO** (AI Overviews - Google SGE optimization)
7. **Technical SEO** (Page Speed, Core Web Vitals, Indexability)
8. **Local SEO** (Raipur-specific optimization)
9. **Conversion Optimization** (CTAs, Trust Signals)
10. **Post-Publish Monitoring** (GSC, GA4, Rankings)

**Workflow:**
- ✅ **BEFORE writing:** Review Pre-Publishing checklist
- ✅ **DURING writing:** Cross-check Content Quality checklist  
- ✅ **AFTER writing:** Complete Full SEO Audit
- ✅ **BEFORE publishing:** Final Go-Live checklist
- ✅ **AFTER publishing:** Post-Publish monitoring

**NO article goes live without completing the checklist!**

---
*Note: All SEO scripts are authorized via `token.json` in the user's config. Do not attempt to re-authenticate; just use the existing logic.*
