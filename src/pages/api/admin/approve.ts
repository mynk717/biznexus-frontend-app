import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'
import fetch from 'node-fetch'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prNumber, slug } = req.body

  if (!prNumber || !slug) {
    return res.status(400).json({ error: 'Missing prNumber or slug' })
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })

    // 1. Merge the PR
    const mergeResult = await octokit.pulls.merge({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      pull_number: prNumber,
      merge_method: 'squash'
    })

    console.log(`✅ Merged PR #${prNumber}`)

    // 2. Trigger deployment (Vercel webhook)
    if (process.env.VERCEL_DEPLOY_HOOK) {
      try {
        await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: 'POST' })
        console.log('✅ Triggered Vercel deployment')
      } catch (error) {
        console.error('Deployment trigger failed:', error)
      }
    }

    // 3. Submit to Google Search Console
    if (process.env.GSC_API_KEY) {
      try {
        const articleUrl = `https://mdn.mktgdime.com/blog/${slug}`

        await fetch(
          `https://www.google.com/webmasters/tools/url-inspection?url=${encodeURIComponent(
            articleUrl
          )}`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.GSC_API_KEY}`
            }
          }
        )

        console.log(`✅ Submitted ${articleUrl} to GSC`)
      } catch (error) {
        console.error('GSC submission failed:', error)
      }
    }

    res.status(200).json({
      success: true,
      message: `Article published! Merged PR #${prNumber}`,
      url: `https://mdn.mktgdime.com/blog/${slug}`
    })
  } catch (error) {
    console.error('Error approving article:', error)
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
