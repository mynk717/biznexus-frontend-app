import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from '@octokit/rest'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { prNumber } = req.body

  if (!prNumber) {
    return res.status(400).json({ error: 'Missing prNumber' })
  }

  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    })

    // Close the PR
    await octokit.pulls.update({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      pull_number: prNumber,
      state: 'closed'
    })

    // Add comment
    await octokit.issues.createComment({
      owner: process.env.GITHUB_ORG || 'yourorg',
      repo: process.env.GITHUB_REPO || 'biznexus',
      issue_number: prNumber,
      body: '❌ Rejected by content review panel. Please revise and resubmit.'
    })

    console.log(`✅ Rejected PR #${prNumber}`)

    res.status(200).json({
      success: true,
      message: `PR #${prNumber} rejected and closed`
    })
  } catch (error) {
    console.error('Error rejecting article:', error)
    res.status(500).json({
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
