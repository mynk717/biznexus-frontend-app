import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prNumber, feedback } = req.body

  if (!prNumber || !feedback) {
    return res.status(400).json({ error: 'Missing prNumber or feedback' })
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })

    // Add comment with feedback
    await octokit.issues.createComment({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      issue_number: prNumber,
      body: `🔄 **Changes Requested**\n\n${feedback}\n\nPlease update the article and push new commits. The panel will automatically refresh.`
    })

    // Add label
    await octokit.issues.addLabels({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      issue_number: prNumber,
      labels: ['needs-revision']
    })

    console.log(`✅ Requested changes on PR #${prNumber}`)

    res.status(200).json({
      success: true,
      message: `Changes requested on PR #${prNumber}`
    })
  } catch (error) {
    console.error('Error requesting changes:', error)
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
