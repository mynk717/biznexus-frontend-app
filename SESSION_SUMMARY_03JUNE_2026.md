# BizNexus Content & SEO Session Summary: 03 June 2026

## 🚀 Pillars Published/Updated
1.  **1kW Solar Guide:** `content/blog/1kw-solar-panel-price-raipur-2026.md`
    - *Focus:* High-volume keywords (12k vol), "Vendor Distraction" pain point.
2.  **3kW Solar Guide:** `content/blog/3-kilowatt-solar-panel-price-raipur-2026.md`
    - *Focus:* Master Guide, "Sweet spot" ROI, upgraded with AI abstract and vendor bottleneck analysis.
3.  **5kW Solar Guide:** `content/blog/5kw-solar-panel-price-raipur-2026.md`
    - *Focus:* Premium homes, "Structural Safety" certification focus.
4.  **CG Bijli Bill Hub:** `content/blog/cg-bijli-bill-pay-online-solar-yojana.md`
    - *Focus:* Navigational-to-Transactional pivot. Check bill → Reduce to zero via Solar Yojana.
5.  **International Travel Insurance Hub:** `content/blog/ultimate-guide-international-travel-insurance-raipur.md`
    - *Focus:* Upgraded to 2,500+ words. Schengen €30k rule, USA/UHC network advantage.

## 🛠 SEO Logic & Agentic Hardening
- **AI-Agent Abstracts:** Every solar/travel pillar now contains a hidden `<div style="display: none;">` block at the top with ultra-dense data for AI scrapers (GPT, Claude, Perplexity).
- **Rich Snippets (JSON-LD):** Updated `src/components/SEO/JsonLd.tsx` with specific `Product` and `Offer` schemas for the 3kW/5kW solar systems to trigger price tags and ratings in Google.
- **Bot Permissions:** Updated `src/app/robots.ts` to explicitly allow AI crawlers.

## 🗺 Raipur Semantic Moat (Interlinking)
- **Neighborhood Pages:** Updated **Telibandha, Shankar Nagar, Samta Colony, and GE Road** to:
  1. Link to each other as "Nearby Areas."
  2. Point directly to the Solar and Travel master pillars.
- **Reverse Linking:** Blog pillars now have a "Service Areas" grid at the bottom linking back to these local pages.

## 🖼 Asset Log (Branded Images)
All stored in `public/images/blog/`:
- `1kw-solar-price-raipur.webp`
- `3kw-solar-price-raipur-guide.webp` (Existing)
- `5kw-solar-price-raipur.webp`
- `cg-bijli-bill-solar-yojana-raipur.webp`
- `raipur-international-travel-insurance-hub.webp`

---
*Status: All code pushed to GitHub (master) and verified with Vercel builds.*
