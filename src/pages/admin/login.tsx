import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (!res.ok) {
        throw new Error('Invalid password')
      }

      const { token } = await res.json()

      // Store token in cookie
      document.cookie = `admin_token=${token}; path=/; max-age=${7 * 24 * 60 * 60}; samesite=strict`

      // Redirect to panel
      router.push('/admin/content-review')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Admin Login - MDNetwork</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-white mb-2">🔐 Admin Login</h1>
          <p className="text-slate-400 mb-8">Content Review Panel</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                disabled={loading}
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500 rounded-lg p-3 text-red-400 text-sm">
                ❌ {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg font-medium transition"
            >
              {loading ? '⏳ Logging in...' : '🔓 Login'}
            </button>
          </form>

          <p className="text-xs text-slate-500 mt-6 text-center">
            ⚠️ INTERNAL ADMIN PANEL<br />
            Not for public access
          </p>
        </div>
      </div>
    </>
  )
}
