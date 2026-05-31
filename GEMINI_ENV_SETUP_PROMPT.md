# 🤖 PROMPT FOR GEMINI - Environment Setup Task

**Status:** Ready for Gemini to execute with user approval  
**Permissions needed:** GitHub token generation, env file updates  
**Estimated time:** 15 minutes  

---

## 📋 COPY THIS PROMPT AND SEND TO GEMINI

```
Hi Gemini! I need your help setting up the environment variables for the BizNexus admin panel.

Current status:
- We need to fill in the Vercel deploy hook
- We should strengthen the JWT_SECRET
- I'll handle the GitHub token separately

Here's what you need to do:

1. **Get Vercel Deploy Hook:**
   - Go to: https://vercel.com/
   - Find BizNexus project → Settings → Git
   - Find "Deploy Hooks" section
   - Create new hook: Name it "BizNexus Auto Deploy"
   - Copy the full URL
   - Share with me (paste here)

2. **Generate Strong JWT Secret:**
   - Create a random 32+ character string (mix letters, numbers, symbols)
   - Example: "aBc123!@#XyZ789$%^MnOp456&*()PqRs"
   - Share with me (paste here)

3. **Once you have both:**
   - Update .env.local in ~/Projects/biznexus/ with:
     - VERCEL_DEPLOY_HOOK=<vercel-hook-url>
     - JWT_SECRET=<strong-secret>
   - Verify the file is updated correctly
   - Confirm completion

Note: I'll update GITHUB_TOKEN separately later.

Ready to start?
```

---

## ✅ AFTER GEMINI COMPLETES

**Verify setup:**

```bash
cd ~/Projects/biznexus

# Check .env.local is updated
cat .env.local | grep "GITHUB_TOKEN\|VERCEL_DEPLOY_HOOK\|JWT_SECRET"

# Should show:
# GITHUB_TOKEN=github_pat_xxxxx (new token, not the old one)
# VERCEL_DEPLOY_HOOK=https://api.vercel.com/...
# JWT_SECRET=your-strong-secret-key...
```

---

## 🎯 WHAT GEMINI WILL DO

1. ✅ Guide you through GitHub token generation
2. ✅ Get Vercel deploy hook URL
3. ✅ Generate strong JWT secret
4. ✅ Update .env.local with all three values
5. ✅ Verify everything is correct
6. ✅ Confirm panel is ready to deploy

---

## 🔐 SECURITY NOTES

- ✅ New GitHub token will be secure (old one is compromised)
- ✅ Never commit .env.local to git
- ✅ JWT_SECRET should be 32+ characters random
- ✅ Vercel hook is unique per project (safe to share)

---

**Once Gemini completes this, the admin panel is ready to deploy!** 🚀
