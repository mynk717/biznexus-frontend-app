import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'
import fs from 'fs'
import path from 'path'

interface DraftArticle {
  prNumber: number
  title: string
  branch: string
  slug: string
  content: string
  auditScore: number
  keyword: string
  createdAt: string
  auditReport?: any
}

// Auth middleware
function requireAuth(req: NextApiRequest) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  if (token !== process.env.ADMIN_API_TOKEN) {
    throw new Error('Unauthorized')
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // requireAuth(req) // Uncomment to require auth

    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })

    // Fetch open PRs with 'draft' label
    const { data: prs } = await octokit.pulls.list({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      state: 'open',
      labels: 'draft'
    })

    const drafts: DraftArticle[] = await Promise.all(
      prs.map(async (pr) => {
        try {
          // Fetch article file from branch
          const { data: contents } = await octokit.repos.getContent({
            owner: process.env.GITHUB_ORG || 'yourorg',
            repo: process.env.GITHUB_REPO || 'biznexus',
            path: 'content/blog',
            ref: pr.head.ref
          })

          // Find markdown file (newest first)
          const mdFile = Array.isArray(contents)
            ? contents.find(f => f.name.endsWith('.md') && f.name !== 'index.md')
            : null

          if (!mdFile || mdFile.type !== 'file') {
            return null
          }

          // Fetch file content
          const { data: fileData } = await octokit.repos.getContent({
            owner: process.env.GITHUB_ORG || 'yourorg',
            repo: process.env.GITHUB_REPO || 'biznexus',
            path: mdFile.path,
            ref: pr.head.ref
          })

          if (fileData.type !== 'file') return null

          const content = Buffer.from(fileData.content || '', 'base64').toString()

          // Extract metadata from frontmatter
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/m)
          const frontmatter = frontmatterMatch ? frontmatterMatch[1] : ''

          const titleMatch = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/i)
          const slugMatch = frontmatter.match(/slug:\s*["']?([^"'\n]+)["']?/i)
          const title = titleMatch ? titleMatch[1] : pr.title
          const slug = slugMatch ? slugMatch[1] : mdFile.name.replace('.md', '')

          // Try to fetch audit report
          let auditScore = 80 // Default
          let auditReport = null

          try {
            const { data: auditData } = await octokit.repos.getContent({
              owner: process.env.GITHUB_ORG || 'yourorg',
              repo: process.env.GITHUB_REPO || 'biznexus',
              path: 'docs/audit_report.json',
              ref: pr.head.ref
            })

            if (auditData.type === 'file') {
              const auditContent = Buffer.from(auditData.content || '', 'base64').toString()
              auditReport = JSON.parse(auditContent)
              auditScore = auditReport.overall_score || 80
            }
          } catch {
            // Audit report not found, use default
          }

          // Extract keyword from frontmatter or title
          const keywordMatch = frontmatter.match(/keyword:\s*["']?([^"'\n]+)["']?/i)
          const keyword = keywordMatch ? keywordMatch[1] : 'Unknown'

          return {
            prNumber: pr.number,
            title,
            branch: pr.head.ref,
            slug,
            content,
            auditScore,
            keyword,
            createdAt: pr.created_at,
            auditReport
          }
        } catch (error) {
          console.error(`Error processing PR #${pr.number}:`, error)
          return null
        }
      })
    )

    // Filter out null entries and sort by date
    const validDrafts = drafts.filter(Boolean).sort((a, b) => {
      return new Date(b!.createdAt).getTime() - new Date(a!.createdAt).getTime()
    })

    res.status(200).json(validDrafts)
  } catch (error) {
    console.error('Error fetching drafts:', error)
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
