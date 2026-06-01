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
... (rest of your existing component logic) ...

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
... (rest of the render function) ...

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
      fetchDrafts()
      setSelectedDraft(null)
    } catch (err) {
      alert('❌'+ (err instanceof Error ? err.message : 'Unknown error'))
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
      fetchDrafts()
    } catch (err) {
      alert('Error:'+ (err instanceof Error ? err.message : 'Unknown error'))
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
      fetchDrafts()
    } catch (err) {
      alert('Error:'+ (err instanceof Error ? err.message : 'Unknown error'))
    }
  }

  return (
    <>
      <Head>
        <title>Content Review Panel - MDNetwork Admin</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Internal admin panel - not for public access" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-white mb-2">📝 Content Review Panel</h1>
            <p className="text-slate-400">Approve, reject, or request changes to draft articles</p>
            <p className="text-xs text-red-400 mt-2">⚠️ INTERNAL ADMIN PANEL - NOT INDEXED</p>
          </div>

          {/* Status */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin">⏳</div>
              <p className="text-white mt-4">Loading drafts...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-8 text-red-400">
              ❌ Error: {error}
            </div>
          )}

          {!loading && drafts.length === 0 && (
            <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-12 text-center">
              <p className="text-slate-300 text-lg">✨ No drafts pending review</p>
              <p className="text-slate-500 text-sm mt-2">Check back later or manually trigger the workflow</p>
            </div>
          )}

          {/* Draft Articles Grid */}
          {!loading && drafts.length > 0 && (
            <div className="space-y-6">
              {drafts.map(draft => (
                <div
                  key={draft.prNumber}
                  className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 hover:border-blue-500/50 transition"
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

                    {/* SEO Score Badge */}
                    <div className="text-right bg-slate-900/50 rounded-lg p-4 ml-4">
                      <div className="text-4xl font-bold text-blue-400">{draft.auditScore}%</div>
                      <div className="text-xs text-slate-400 mt-1">SEO Score</div>
                      {draft.auditScore >= 85 && (
                        <div className="text-xs text-green-400 mt-1">✅ Excellent</div>
                      )}
                      {draft.auditScore >= 75 && draft.auditScore < 85 && (
                        <div className="text-xs text-yellow-400 mt-1">⚠️ Good</div>
                      )}
                      {draft.auditScore < 75 && (
                        <div className="text-xs text-red-400 mt-1">❌ Needs Work</div>
                      )}
                    </div>
                  </div>

                  {/* Audit Breakdown */}
                  {draft.auditReport && (
                    <div className="grid grid-cols-4 gap-4 mb-6 bg-slate-900/30 rounded-lg p-4">
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {draft.auditReport.checks.eeat?.score || 0}%
                        </div>
                        <div className="text-xs text-slate-400">E-E-A-T</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {draft.auditReport.checks.aeo?.score || 0}%
                        </div>
                        <div className="text-xs text-slate-400">AEO</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {draft.auditReport.checks.schema?.score || 0}%
                        </div>
                        <div className="text-xs text-slate-400">Schema</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white">
                          {draft.auditReport.checks.local_seo?.score || 0}%
                        </div>
                        <div className="text-xs text-slate-400">Local SEO</div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => setSelectedDraft(draft)}
                      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
                    >
                      👁️ Preview Article
                    </button>

                    <button
                      onClick={() => approveArticle(draft.prNumber, draft.slug)}
                      disabled={approving}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition disabled:opacity-50"
                    >
                      {approving ? '⏳ Publishing...' : '✅ Approve & Publish'}
                    </button>

                    <button
                      onClick={() => requestChanges(draft.prNumber)}
                      className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg font-medium transition"
                    >
                      🔄 Request Changes
                    </button>

                    <button
                      onClick={() => rejectArticle(draft.prNumber)}
                      className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                    >
                      ❌ Reject
                    </button>

                    <a
                      href={`https://github.com/yourorg/biznexus/pull/${draft.prNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white rounded-lg font-medium transition"
                    >
                      🔗 View PR
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {selectedDraft && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-auto">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full my-8">
            <div className="sticky top-0 bg-slate-900 border-b border-slate-700 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{selectedDraft.title}</h2>
              <button
                onClick={() => setSelectedDraft(null)}
                className="text-3xl text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-8 overflow-auto max-h-[70vh]">
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{
                  __html: marked(selectedDraft.content, { breaks: true })
                }}
              />
            </div>

            <div className="bg-slate-900 border-t border-slate-700 p-6 flex gap-3 justify-end">
              <button
                onClick={() => setSelectedDraft(null)}
                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => approveArticle(selectedDraft.prNumber, selectedDraft.slug)}
                disabled={approving}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:opacity-50"
              >
                {approving ? '⏳' : '✅'} Approve & Publish
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
