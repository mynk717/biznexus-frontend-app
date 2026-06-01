import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

    // Fetch files from content/blog/
    const { data: contents } = await octokit.repos.getContent({
      owner: process.env.GITHUB_ORG || 'mynk717',
      repo: process.env.GITHUB_REPO || 'biznexus-frontend-app',
      path: 'content/blog',
    })

    const articles = await Promise.all(
      (Array.isArray(contents) ? contents : []).map(async (file) => {
        if (!file.name.endsWith('.md')) return null

        const { data: fileData } = await octokit.repos.getContent({
          owner: process.env.GITHUB_ORG || 'mynk717',
          repo: process.env.GITHUB_REPO || 'biznexus-frontend-app',
          path: file.path,
        })

        if ('content' in fileData) {
          const content = Buffer.from(fileData.content, 'base64').toString()
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/m)
          const frontmatter = frontmatterMatch ? frontmatterMatch[1] : ''
          
          const title = frontmatter.match(/title:\s*["']?([^"'\n]+)["']?/i)?.[1] || file.name
          const slug = frontmatter.match(/slug:\s*["']?([^"'\n]+)["']?/i)?.[1] || file.name.replace('.md', '')
          const date = frontmatter.match(/date:\s*["']?([^"'\n]+)["']?/i)?.[1] || 'Unknown'

          // Mock SEO Score for now (In real app, fetch from audit_report.json or DB)
          const auditScore = Math.floor(Math.random() * 20) + 80 

          return { title, slug, date, auditScore }
        }
        return null
      })
    )

    res.status(200).json(articles.filter(Boolean))
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch live articles' })
  }
}
