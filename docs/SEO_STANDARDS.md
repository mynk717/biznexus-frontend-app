# MDNetwork SEO Diagnostic Standards (EEAT-Focused)

Follow these standards for every new article or landing page to maintain high search authority and clear technical signals.

## 1. On-Page Content Integrity
- **Promise Match:** Ensure the title (e.g., "5 Things...") strictly matches the number of sections in the body.
- **Tone:** Use "Human-First" Easy English. Empathize with local Raipur needs (mention landmarks like Shankar Nagar, GE Road, and specific local problems like industrial dust).
- **Heading Hierarchy:** Use `<h1>` for the main title and `<h2>` for sub-sections. Never use `<h3>` for non-semantic elements like CTA boxes; use styled `<p>` or `<div>` instead.

## 2. Technical SEO (Metadata & Tags)
- **Canonical Tags:** Every URL must have a self-referencing `<link rel="canonical" href="..." />`.
- **Dynamic Meta Keywords:** Never use hardcoded sitewide keywords. Pull keywords dynamically from article tags.
- **Dynamic Meta Titles/Descriptions:** Ensure they are unique and keyword-rich for the specific topic.

## 3. Authority & Trust (EEAT)
- **Authoritative Outbound Links:** Link out to at least one official government (`.gov.in`) or trusted industry portal relevant to the topic (e.g., Vahan, RERA, CREDA).
- **Internal Cluster Linking:** Deep-link to at least two related internal services (e.g., Solar guides linking to Solar Subsidies service).
- **Expert Personas:** Every article must have a specific author bio (e.g., "Automotive Team," "Property Advisor").

## 4. Structured Data & Entity Authority (GEO-Ready)
- **Article/BlogPosting Schema:** Mandatory for every post. Must include headline, date, author, and featured image.
- **Brand Entity ID (`@id`):** Use `https://mdn.mktgdime.com/#brand` to link every post to the core brand authority.
- **FAQ Schema:** Use "Answer-First" formatting to capture AI snippets, prioritizing factual density over standard Q&A.
- **LocalBusiness/Service Schema:** For landing pages focused on specific areas (e.g., Samta Colony). Link to verified Place IDs and KGMID `/g/11y7_6_m_m`.

## 5. Agentic Context Parsing (AEO/GEO)
- **llms.txt:** A comprehensive `llms.txt` must be maintained at the domain root for AI agent discovery.
- **Invisible Metadata:** Inject `<!-- context: ... -->` comments into markdown files to provide non-visual grounding for RAG systems (brand identity, audience, versioning).
- **Citable Chunks:** Structure content in modular, high-density factual blocks that can be easily retrieved by AI engines.

## 6. Visual Optimization (Google Lens)
- **WebP Format:** All new images must use `.webp` for optimized loading.
- **Entity Alt Text:** Every image must have keyword-rich, descriptive alt text focused on "Entity Recognition" (e.g., identifying local landmarks or brand specific elements).
