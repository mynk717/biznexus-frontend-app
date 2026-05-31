import { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { password } = req.body

  if (!password) {
    return res.status(400).json({ error: 'Password required' })
  }

  // Check password
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid password' })
  }

  // Generate JWT token
  const token = jwt.sign(
    { admin: true, timestamp: Date.now() },
    process.env.JWT_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  )

  res.status(200).json({ token })
}
