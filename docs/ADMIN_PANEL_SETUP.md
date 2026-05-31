# 🎛️ Content Review Admin Panel Setup

**Status:** ✅ Complete  
**Protected:** ✅ Yes (noindex, nofollow, auth required)  
**URL:** `https://mdn.mktgdime.com/admin/content-review`

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd ~/Projects/biznexus
npm install @octokit/rest jsonwebtoken node-fetch
```

### 2. Add Environment Variables

Create `.env.local` in project root:

```env
# GitHub Configuration
GITHUB_TOKEN=ghp_xxxxxxxxxxxx
GITHUB_ORG=yourorg
GITHUB_REPO=biznexus

# Admin Authentication
ADMIN_PASSWORD=your-secure-password-here
JWT_SECRET=your-jwt-secret-key

# Optional: Auto-deployment
VERCEL_DEPLOY_HOOK=https://api.vercel.com/v1/integrations/deploy/...

# Optional: Google Search Console
GSC_API_KEY=your-gsc-api-key

# Admin API Token (for /api/admin/* routes)
ADMIN_API_TOKEN=your-api-token-here
```

### 3. Generate GitHub Token

1. Go to GitHub → Settings → Developer Settings → Personal Access Tokens
2. Create new token with scopes:
   - `repo` (full control)
   - `read:user`
3. Copy token to `.env.local` as `GITHUB_TOKEN`

---

## 📋 Features

### Panel URL
```
https://mdn.mktgdime.com/admin/content-review
```

### What It Does

✅ **List all draft PRs** (auto-refreshes every 5 minutes)  
✅ **Show SEO audit scores** (E-E-A-T, AEO, Schema, Local SEO)  
✅ **Preview articles** (full markdown rendering)  
✅ **Approve & Publish** (merge PR → deploy → submit to GSC)  
✅ **Reject** (close PR + comment)  
✅ **Request Changes** (add comment + label)  
✅ **View GitHub PR** (direct link)  

### Security

🔒 **Protected Routes:**
- All `/admin/*` routes require login
- Admin token stored in secure HTTP-only cookie
- JWT token expires after 7 days
- Middleware enforces `X-Robots-Tag: noindex, nofollow`

🔒 **No Indexing:**
```html
<meta name="robots" content="noindex, nofollow" />
<meta name="googlebot" content="noindex, nofollow" />
```

---

## 🔑 Authentication Flow

### Login Page: `/admin/login`

1. User enters admin password
2. API validates password
3. JWT token generated
4. Token stored in secure cookie
5. Redirect to `/admin/content-review`

### API Routes (Protected)

All `/api/admin/*` routes check JWT token:

```typescript
// Optional: Add token validation to routes
function requireAuth(req: NextApiRequest) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (token !== process.env.ADMIN_API_TOKEN) {
    throw new Error('Unauthorized')
  }
}
```

---

## 📊 API Endpoints

### GET `/api/admin/drafts`
**Returns:** List of draft articles from open PRs with 'draft' label

**Response:**
```json
[
  {
    "prNumber": 47,
    "title": "3kW Solar Panel Price in Raipur 2026",
    "branch": "draft/article-20260531",
    "slug": "3-kilowatt-solar-panel-price-raipur-2026",
    "auditScore": 88,
    "keyword": "3 kilowatt solar panel price",
    "createdAt": "2026-05-31T10:15:00Z",
    "auditReport": { "overall_score": 88, "checks": {...} }
  }
]
```

### POST `/api/admin/approve`
**Body:**
```json
{
  "prNumber": 47,
  "slug": "3-kilowatt-solar-panel-price-raipur-2026"
}
```

**Actions:**
1. Merge PR (squash)
2. Trigger Vercel deployment
3. Submit to Google Search Console
4. Return article URL

### POST `/api/admin/reject`
**Body:**
```json
{
  "prNumber": 47
}
```

**Actions:**
1. Close PR
2. Add comment: "❌ Rejected by content review panel"

### POST `/api/admin/request-changes`
**Body:**
```json
{
  "prNumber": 47,
  "feedback": "Please add more local neighborhood examples"
}
```

**Actions:**
1. Add comment with feedback
2. Add `needs-revision` label

---

## 🔄 Workflow Integration

### How It Works with Daily Automation

**8:00 AM** → GitHub Actions triggers  
**8:30 AM** → Claude creates skeleton  
**10:00 AM** → Gemini writes content  
**10:05 AM** → Auto-audit runs  
**10:10 AM** → PR created with 'draft' label  

**10:15 AM** → You open panel  
✅ See draft article with 88% SEO score  
✅ Click "Approve & Publish"  

**10:16 AM** → Article goes live!  
✅ Vercel deploys  
✅ Submitted to GSC  
✅ Tweet sent (optional)  

---

## 🎨 UI Preview

### Draft Cards
```
┌─────────────────────────────────────────────┐
│  3kW Solar Panel Price in Raipur 2026       │
│  🎯 Keyword: 3 kilowatt solar panel price   │  🟢 88%
│  📅 2026-05-31 10:15 AM                     │  SEO
│  🔗 PR #47                                  │
│                                             │
│  [👁️ Preview] [✅ Approve] [🔄 Request] [❌] │
└─────────────────────────────────────────────┘
```

### SEO Breakdown
```
E-E-A-T: 100% ✅
AEO: 85% ✅
Schema: 100% ✅
Local: 100% ✅
```

---

## 🧪 Testing

### Test Login
```bash
curl -X POST http://localhost:3000/api/admin/login \
  -H "Content-Type: application/json" \
  -d '{"password": "your-password"}'
```

### Test Drafts Fetch
```bash
curl http://localhost:3000/api/admin/drafts \
  -H "Authorization: Bearer your-api-token"
```

### Local Development
```bash
npm run dev
# Visit: http://localhost:3000/admin/login
```

---

## 📦 Production Deployment

### Vercel
1. Add env vars to Vercel dashboard
2. Deploy: `git push`
3. Panel live at: `https://mdn.mktgdime.com/admin/content-review`

### nginx (Self-hosted)
```nginx
location /admin {
  # Require SSL
  ssl on;
  ssl_protocols TLSv1.2 TLSv1.3;
  
  # Add headers
  add_header X-Robots-Tag "noindex, nofollow";
  add_header X-Frame-Options "SAMEORIGIN";
  
  # Proxy to Next.js
  proxy_pass http://localhost:3000;
}
```

---

## 🔐 Security Checklist

- [ ] ✅ Password is strong (>16 chars, mixed case, numbers, symbols)
- [ ] ✅ JWT_SECRET is secure random string
- [ ] ✅ GitHub token scoped to necessary permissions only
- [ ] ✅ HTTPS enabled (required for secure cookies)
- [ ] ✅ Admin cookie has `httpOnly` flag
- [ ] ✅ X-Robots-Tag headers present
- [ ] ✅ noindex/nofollow meta tags present
- [ ] ✅ robots.txt blocks `/admin/*` paths

### robots.txt Entry
```
User-agent: *
Disallow: /admin/
```

---

## 🐛 Troubleshooting

### "Unauthorized" when accessing panel
- ✅ Check password in `.env.local`
- ✅ Clear browser cookies
- ✅ Try incognito window

### Drafts not showing
- ✅ Check `GITHUB_TOKEN` is valid
- ✅ PR must have 'draft' label
- ✅ Check GitHub API rate limits (60 req/hour for unauth)

### Deploy not triggering
- ✅ Set `VERCEL_DEPLOY_HOOK` (optional)
- ✅ Or manually trigger in Vercel dashboard

### GSC submission failing
- ✅ `GSC_API_KEY` is optional
- ✅ Can manually submit via Google Search Console

---

## 📞 Support

**Panel URL:** `https://mdn.mktgdime.com/admin/content-review`  
**Login:** Use admin password  
**Auto-refresh:** Every 5 minutes  

**Issues?** Check:
1. `.env.local` has all required vars
2. GitHub token has correct scopes
3. Next.js server is running
4. Browser cookies enabled
5. HTTPS enabled (required for secure cookies)

---

## ✨ Future Enhancements

- [ ] Bulk approve/reject
- [ ] Scheduling (publish at specific time)
- [ ] Article statistics dashboard
- [ ] Automated social media posting
- [ ] Email notifications
- [ ] Dark/light mode toggle
- [ ] Audit history tracking
- [ ] Keyword tracking integration

---

**Setup Complete!** 🎉

Your content review panel is ready to use. Visit `/admin/content-review` after logging in!
