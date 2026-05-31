# ✅ Content Review Panel - Deployment Checklist

**Status:** Ready to Deploy  
**Last Updated:** 2026-05-31  
**Access:** `https://mdn.mktgdime.com/admin/content-review`

---

## 📋 BEFORE DEPLOYING

### Step 1: Install Dependencies ✅

```bash
cd ~/Projects/biznexus

# Install required packages
npm install @octokit/rest jsonwebtoken node-fetch

# Verify installation
npm ls @octokit/rest jsonwebtoken
```

### Step 2: Create .env.local ✅

Create file: `.env.local` in project root

```env
# REQUIRED: GitHub Configuration
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_ORG=yourorg
GITHUB_REPO=biznexus

# REQUIRED: Admin Authentication  
ADMIN_PASSWORD=YourSecurePassword123!@#
JWT_SECRET=your-random-jwt-secret-key-min-32-chars

# OPTIONAL: Auto Deployment
VERCEL_DEPLOY_HOOK=https://api.vercel.com/v1/integrations/deploy/prj_xxxxx/xxxxx

# OPTIONAL: Google Search Console
GSC_API_KEY=your-gsc-api-key

# OPTIONAL: Admin API Token
ADMIN_API_TOKEN=your-api-token-for-direct-access
```

### Step 3: Generate GitHub Token ✅

1. Go to GitHub: `https://github.com/settings/tokens`
2. Click "Generate new token (classic)"
3. Select scopes:
   - ☑ `repo` (full control of private repositories)
   - ☑ `read:user`
4. Copy token → paste in `.env.local` as `GITHUB_TOKEN`
5. ⚠️ Save token - won't be shown again!

### Step 4: Get Vercel Deploy Hook (Optional) ✅

1. Vercel Dashboard → Project → Settings → Git
2. Copy "Deploy Hook" URL
3. Paste in `.env.local` as `VERCEL_DEPLOY_HOOK`

---

## 🗂️ FILES CREATED

### Frontend
- ✅ `pages/admin/login.tsx` - Login page
- ✅ `pages/admin/content-review.tsx` - Main review panel
- ✅ `middleware.ts` - Auth middleware + noindex headers

### API Routes
- ✅ `pages/api/admin/login.ts` - JWT authentication
- ✅ `pages/api/admin/drafts.ts` - Fetch draft articles
- ✅ `pages/api/admin/approve.ts` - Merge & publish
- ✅ `pages/api/admin/reject.ts` - Close PR
- ✅ `pages/api/admin/request-changes.ts` - Add feedback

### Documentation
- ✅ `docs/ADMIN_PANEL_SETUP.md` - Full setup guide
- ✅ `PANEL_DEPLOYMENT_CHECKLIST.md` - This file
- ✅ `public/robots.txt` - Updated with /admin block

---

## 🧪 TESTING LOCALLY

### Test 1: Start Dev Server
```bash
npm run dev
```
Output should show:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Test 2: Try Login Page
```bash
# Visit in browser
http://localhost:3000/admin/login

# Should see login form (not redirected)
```

### Test 3: Try Login
```bash
# Enter password from .env.local
# Should redirect to /admin/content-review
```

### Test 4: Check Draft Fetching
```bash
# In browser console:
fetch('/api/admin/drafts')
  .then(r => r.json())
  .then(d => console.log(d))
```

Should return draft articles (or empty array if no PRs).

### Test 5: Verify noindex Headers
```bash
# In terminal:
curl -I http://localhost:3000/admin/content-review

# Should see header:
# X-Robots-Tag: noindex, nofollow
```

---

## 🚀 DEPLOYMENT

### Deploy to Vercel

```bash
# Add to git
git add pages/api/admin/ pages/admin/ middleware.ts docs/ public/robots.txt

# Create PR
git commit -m "feat: Add content review admin panel with noindex/nofollow"
git push origin feature/admin-panel

# Create PR via GitHub (or gh cli)
gh pr create --title "Add Content Review Panel" --body "Admin panel for approving drafted articles"

# Once approved, merge to main
# Vercel will auto-deploy
```

### Verify Deployment

```bash
# 1. Check deployment status
# https://vercel.com/yourorg/biznexus → Deployments

# 2. Test login
https://mdn.mktgdime.com/admin/login

# 3. Check robots blocking
curl https://mdn.mktgdime.com/robots.txt | grep -A2 "Admin Panel"

# 4. Verify noindex headers
curl -I https://mdn.mktgdime.com/admin/content-review
```

---

## 🔐 SECURITY VERIFICATION

### Pre-Launch Checklist

- [ ] ✅ `.env.local` NOT committed to git (check `.gitignore`)
- [ ] ✅ Environment variables set in Vercel dashboard
- [ ] ✅ HTTPS enforced (should be default on Vercel)
- [ ] ✅ Admin password is strong (>16 chars)
- [ ] ✅ JWT_SECRET is random (>32 chars)
- [ ] ✅ robots.txt blocks `/admin/`
- [ ] ✅ noindex/nofollow meta tags present
- [ ] ✅ X-Robots-Tag headers set
- [ ] ✅ Cookies have `secure` + `httpOnly` flags
- [ ] ✅ Rate limiting considered (optional)

### Verify .gitignore

```bash
# Check that .env.local is ignored
cat .gitignore | grep ".env"

# Should include: .env.local, .env*.local
```

---

## 📊 DAILY WORKFLOW

### Morning (10:10 AM)

Draft article created automatically by GitHub Actions:
1. PR created with 'draft' label
2. Audit report generated
3. Article added to panel

### Your Review (10:15-11:00 AM)

```
1. Open: https://mdn.mktgdime.com/admin/content-review
2. Login with admin password
3. See draft article with SEO score
4. Click "Preview" to read full article
5. Options:
   ✅ Approve & Publish → Merges PR + deploys + submits GSC
   🔄 Request Changes → Adds comment on PR
   ❌ Reject → Closes PR
```

### After Publishing

1. Article goes live within 60 seconds
2. Auto-submitted to Google Search Console
3. Rankings tracked in GSC
4. Traffic monitored in GA4

---

## 🎯 WHAT HAPPENS ON APPROVE

When you click "✅ Approve & Publish":

```
1. Merge PR (squash merge)
   ✅ All commits squashed into single commit on main
   
2. Trigger Vercel Deploy
   ✅ Website rebuilds (usually <60 seconds)
   ✅ Article goes live
   
3. Submit to Google Search Console
   ✅ Article URL submitted for immediate indexing
   ✅ Google prioritizes crawling
   
4. Return confirmation
   ✅ Shows live URL
   ✅ Shows "Published!" message
```

---

## 📞 TROUBLESHOOTING

### Problem: "Cannot read property 'pulls' of undefined"
**Solution:** Check `GITHUB_TOKEN` is set in `.env.local`

### Problem: Login page works but panel shows no drafts
**Solution:** 
- Check GitHub token has `repo` scope
- Make sure PR has 'draft' label
- Check GitHub API rate limits

### Problem: "Unauthorized" on /admin/content-review
**Solution:**
- Clear browser cookies
- Try incognito window
- Check `ADMIN_PASSWORD` in `.env.local`

### Problem: Approve button doesn't work
**Solution:**
- Check `GITHUB_TOKEN` again
- Verify PR exists and is open
- Check GitHub Actions logs

### Problem: Article deploys but GSC submission fails
**Solution:** 
- `GSC_API_KEY` is optional
- Can manually submit via Google Search Console
- Not a blocker for publishing

---

## ✨ NEXT STEPS

After panel is deployed:

1. **Test with real draft article**
   - Manually create a draft PR
   - Add 'draft' label
   - Test approve/reject flow

2. **Set up GitHub Actions automation** (optional)
   - Daily 8 AM content generation
   - Auto-creation of draft PRs
   - See: `/AUTOMATED_CONTENT_SYSTEM.md`

3. **Monitor metrics**
   - Track SEO scores of published articles
   - Monitor ranking progress in GSC
   - Monitor traffic in GA4

4. **Refine workflow**
   - Track time from creation to publish
   - Adjust timing if needed
   - Add more automation as needed

---

## 📚 RELATED DOCS

- `docs/ADMIN_PANEL_SETUP.md` - Complete setup guide
- `AUTOMATED_CONTENT_SYSTEM.md` - Daily automation system
- `AUDIT_REPORT_3KW_UPDATED_31MAY.md` - Article audit example
- `docs/SEO_AUDIT_MASTER_CHECKLIST.md` - SEO audit standards

---

## ✅ DEPLOYMENT COMPLETE

Once all steps are done:

**Panel URL:** `https://mdn.mktgdime.com/admin/content-review`  
**Login:** Use admin password from `.env.local`  
**Auto-refresh:** Every 5 minutes  
**Security:** ✅ noindex, nofollow, auth required  

🎉 **You're ready to use the panel!**

---

**Last Updated:** 2026-05-31  
**Status:** Ready for Production  
**Security:** High (noindex/nofollow + auth)
