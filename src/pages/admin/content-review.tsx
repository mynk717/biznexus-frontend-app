import { useState, useEffect } from 'react'
import Head from 'next/head'
import { marked } from 'marked'

interface DraftArticle {
  prNumber: number
  title: string
  branch: string
  slug: string
  content: string
  auditScore: number
  keyword: string
  createdAt: string
  auditReport?: {
    overall_score: number
    checks: Record<string, any>
  }
}

export default function ContentReview() {
  const [activeTab, setActiveTab] = useState<'drafts' | 'live'>('drafts')
  const [drafts, setDrafts] = useState<DraftArticle[]>([])
  const [liveArticles, setLiveArticles] = useState<any[]>([])
  const [selectedDraft, setSelectedDraft] = useState<DraftArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [approving, setApproving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchData()
  }, [activeTab])

  async function fetchData() {
    setLoading(true)
    try {
      if (activeTab === 'drafts') {
        const res = await fetch('/api/admin/drafts')
        if (!res.ok) throw new Error('Failed to fetch drafts')
        setDrafts(await res.json())
      } else {
        const res = await fetch('/api/admin/live-articles')
        if (!res.ok) throw new Error('Failed to fetch live articles')
        setLiveArticles(await res.json())
      }
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setLoading(false)
    }
  }

  async function approveArticle(pr: number, slug: string) {
    try {
      setApproving(true)
      const res = await fetch('/api/admin/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr, slug })
      })
      if (!res.ok) throw new Error('Failed to approve article')

      alert('✅ Article approved and published!')
      fetchData()
      setSelectedDraft(null)
    } catch (err) {
      alert('❌ ' + (err instanceof Error ? err.message : 'Unknown error'))
    } finally {
      setApproving(false)
    }
  }

  async function rejectArticle(pr: number) {
    if (!confirm('Are you sure? This will close the PR.')) return

    try {
      const res = await fetch('/api/admin/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr })
      })
      if (!res.ok) throw new Error('Failed to reject article')

      alert('❌ Article rejected')
      fetchData()
    } catch (err) {
      alert('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  async function requestChanges(pr: number) {
    const feedback = prompt('What changes do you want?')
    if (!feedback) return

    try {
      const res = await fetch('/api/admin/request-changes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prNumber: pr, feedback })
      })
      if (!res.ok) throw new Error('Failed to request changes')

      alert('🔄 Changes requested. Check the PR comments.')
      fetchData()
    } catch (err) {
      alert('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  return (
    <>
      <Head>
        <title>Content Review Panel - MDNetwork Admin</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header & Tabs */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-6">📝 Content Management</h1>
            <div className="flex gap-4 border-b border-slate-700">
              <button 
                onClick={() => setActiveTab('drafts')}
                className={`pb-2 ${activeTab === 'drafts' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              >
                Pending Drafts
              </button>
              <button 
                onClick={() => setActiveTab('live')}
                className={`pb-2 ${activeTab === 'live' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-slate-400'}`}
              >
                Live Articles
              </button>
            </div>
          </div>

          {/* Status */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">⏳</div>
              <p className="text-white mt-4">Loading data...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-8 text-red-400">
              ❌ Error: {error}
            </div>
          )}

          {/* Render based on active tab */}
          {activeTab === 'drafts' ? (
            !loading && drafts.length === 0 ? (
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-12 text-center">
                <p className="text-slate-300 text-lg">✨ No drafts pending review</p>
              </div>
            ) : (
              <div className="space-y-6">
                {drafts.map(draft => (
                  <div
                    key={draft.prNumber}
                    className="bg-slate-700/50 border border-slate-600 rounded-xl p-8"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-white mb-2">{draft.title}</h2>
                        <div className="flex gap-4 text-sm text-slate-400">
                          <span>🎯 Keyword: {draft.keyword}</span>
                          <span>📅 {new Date(draft.createdAt).toLocaleString()}</span>
                          <span>🔗 PR #{draft.prNumber}</span>
                        </div>
                      </div>
                      <div className="text-right bg-slate-900/50 rounded-lg p-4 ml-4">
                        <div className="text-4xl font-bold text-blue-400">{draft.auditScore}%</div>
                        <div className="text-xs text-slate-400 mt-1">SEO Score</div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedDraft(draft)}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                      >
                        👁️ Preview Article
                      </button>
                      <button
                        onClick={() => approveArticle(draft.prNumber, draft.slug)}
                        disabled={approving}
                        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition"
                      >
                        {approving ? '⏳' : '✅ Approve'}
                      </button>
                      <button
                        onClick={() => requestChanges(draft.prNumber)}
                        className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition"
                      >
                        🔄 Changes
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )
          ) : (
            !loading && liveArticles.length === 0 ? (
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-12 text-center">
                <p className="text-slate-300 text-lg">✨ No live articles found</p>
              </div>
            ) : (
              <div className="bg-slate-700/50 border border-slate-600 rounded-xl overflow-hidden">
                <table className="w-full text-left text-slate-300">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="p-4">Title</th>
                      <th className="p-4">Slug</th>
                      <th className="p-4">Date</th>
                      <th className="p-4">SEO Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {liveArticles.map((article: any, i: number) => (
                      <tr key={i} className="border-t border-slate-600">
                        <td className="p-4">{article.title}</td>
                        <td className="p-4 font-mono text-xs">{article.slug}</td>
                        <td className="p-4">{article.date}</td>
                        <td className="p-4 font-bold text-blue-400">{article.auditScore}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
      </div>

      {/* Preview Modal for Drafts */}
      {selectedDraft && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full h-[80vh] flex flex-col">
            <div className="p-6 border-b border-slate-700 flex justify-between">
              <h2 className="text-2xl font-bold text-white">{selectedDraft.title}</h2>
              <button onClick={() => setSelectedDraft(null)} className="text-white">✕</button>
            </div>
            <div className="p-8 overflow-auto flex-1">
              <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: marked(selectedDraft.content, { breaks: true }) }} />
            </div>
            <div className="p-6 border-t border-slate-700 flex justify-end gap-3">
              <button onClick={() => setSelectedDraft(null)} className="px-4 py-2 bg-slate-700 text-white rounded">Close</button>
              <button onClick={() => approveArticle(selectedDraft.prNumber, selectedDraft.slug)} className="px-4 py-2 bg-green-600 text-white rounded">Approve</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
